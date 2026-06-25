import RoomCard from "./components/RoomCard";
import { rooms } from "./data/rooms";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-300 text-zinc-950">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
            Escape Room de jhonda
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Reserva una sala 
          
          </h1>
          <p className="text-base leading-7 text-zinc-600">
            Elige una sala disponible:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </main>
  )
}
