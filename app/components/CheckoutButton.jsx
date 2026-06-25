"use client";

import { useState } from "react";

export default function CheckoutButton({ roomId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo iniciar el pago.");
      }

      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(checkoutError.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-auto space-y-2">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-red-700 px-4 text-sm font-semibold text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        {isLoading ? "Redirigiendo..." : "Paga brother"}
      </button>
      {error ? <p className="text-3xl text-red-700">{error}</p> : null}
    </div>
  );
}
