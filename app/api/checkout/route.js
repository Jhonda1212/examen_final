import Stripe from "stripe";
import { rooms } from "@/app/data/rooms";

export const runtime = "nodejs";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

function getBaseUrl(request) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request) {
  if (!stripe) {
    return Response.json(
      { error: "Falta configurar STRIPE_SECRET_KEY." },
      { status: 500 },
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Peticion invalida." }, { status: 400 });
  }

  const { roomId } = payload;
  const room = rooms.find((roomItem) => roomItem.id === roomId);

  if (!room) {
    return Response.json({ error: "Sala no encontrada." }, { status: 404 });
  }

  const baseUrl = getBaseUrl(request);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: room.pricePerHour * 100,
          product_data: {
            name: `Reserva ${room.name} - 1 hora`,
          },
        },
      },
    ],
    metadata: {
      roomId: room.id,
      roomName: room.name,
    },
    success_url: `${baseUrl}/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel`,
  });

  if (!session.url) {
    return Response.json(
      { error: "Stripe no devolvio una URL de checkout." },
      { status: 500 },
    );
  }

  return Response.json({ url: session.url });
}
