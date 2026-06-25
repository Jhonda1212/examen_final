import Link from "next/link";
import { getWebhookStatus } from "@/app/lib/webhook-status";

export const dynamic = "force-dynamic";

export default function WebhookStatusPage() {
  const status = getWebhookStatus();

  return (
    <main className="flex min-h-screen items-center bg-zinc-50 px-5 py-10 text-zinc-950">
      <section className="mx-auto w-full max-w-xl space-y-5 rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
          Estado del webhook
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          {status.received ? "Evento recibido" : "Esperando evento"}
        </h1>
        <p className="leading-7 text-zinc-600">{status.message}</p>

        <dl className="grid gap-3 rounded-md bg-zinc-100 p-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="font-medium text-zinc-600">Tipo</dt>
            <dd className="text-right text-zinc-950">
              {status.eventType || "Sin datos"}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-medium text-zinc-600">Evento</dt>
            <dd className="text-right text-zinc-950">
              {status.eventId || "Sin datos"}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-medium text-zinc-600">Actualizado</dt>
            <dd className="text-right text-zinc-950">
              {status.updatedAt || "Sin datos"}
            </dd>
          </div>
        </dl>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/webhook-status"
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
          >
            Actualizar estado
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Volver a las salas
          </Link>
        </div>
      </section>
    </main>
  );
}
