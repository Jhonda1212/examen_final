import Stripe from "stripe";
import { getWebhookStatus, updateWebhookStatus } from "@/app/lib/webhook-status";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_local");

function getEventMessage(event) {
  if (event.type === "checkout.session.completed") {
    return "Webhook recibido: pago de reserva completado.";
  }

  return `Webhook recibido: ${event.type}.`;
}

export async function GET() {
  return Response.json(getWebhookStatus());
}

export async function POST(request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!webhookSecret) {
    return Response.json(
      { error: "Falta configurar STRIPE_WEBHOOK_SECRET." },
      { status: 500 },
    );
  }

  if (!signature) {
    return Response.json(
      { error: "Falta la cabecera stripe-signature." },
      { status: 400 },
    );
  }

  const rawBody = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    return Response.json(
      { error: `Firma del webhook invalida: ${error.message}` },
      { status: 400 },
    );
  }

  const message = getEventMessage(event);
  const status = updateWebhookStatus(event, message);

  return Response.json({
    received: true,
    message: status.message,
    eventId: status.eventId,
    eventType: status.eventType,
  });
}
