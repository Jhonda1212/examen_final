import Link from "next/link";

export default function SuccesPage() {
  return (
    <main className="flex min-h-screen items-center bg-yellow-200 px-5 py-10 text-zinc-950">
      <section className="mx-auto w-full max-w-xl space-y-5 rounded-lg border border-white bg-green-300 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
          Pago completado
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          Reserva confirmada
        </h1>
        <p className="leading-7 text-zinc-600">
          El pago de prueba se ha completado correctamente y podras entrar a la aventura
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Volver a las salas
        </Link>
      </section>
    </main>
  );
}
