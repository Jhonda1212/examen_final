import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center bg-blue-300 px-5 py-10 text-zinc-950">
      <section className="mx-auto w-full max-w-xl space-y-5 rounded-lg border border-zinc-200 bg-red-400 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
          Pago cancelado
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          No se ha realizado el pago
        </h1>
        <p className="leading-7 text-black">
          Puedes volver al listado y elegir una sala para iniciar de nuevo la
          reserva o metele dinero a tu banco xD
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
