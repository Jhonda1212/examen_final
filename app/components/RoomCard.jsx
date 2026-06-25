import Image from "next/image";
import CheckoutButton from "./CheckoutButton";

export default function RoomCard({ room }) {
  return (
    <article className="overflow-hidden rounded-lg border bg-amber-200 border-zinc-200">
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex min-h-48 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-zinc-950">{room.name}</h2>
          <p className="text-sm text-zinc-600">Precio por hora</p>
          <p className="text-2xl font-bold text-zinc-950">
            {room.pricePerHour} EUR
          </p>
        </div>

        <CheckoutButton roomId={room.id} />
      </div>
    </article>
  );
}
