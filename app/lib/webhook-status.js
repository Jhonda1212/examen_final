const defaultStatus = {
  received: false,
  eventId: "",
  eventType: "",
  message: "Todavia no se ha recibido ningun evento de Stripe.",
  updatedAt: "",
};

function getStore() {
  if (!globalThis.__reservasStripeWebhookStatus) {
    globalThis.__reservasStripeWebhookStatus = { ...defaultStatus };
  }

  return globalThis.__reservasStripeWebhookStatus;
}

export function getWebhookStatus() {
  return { ...getStore() };
}

export function updateWebhookStatus(event, message) {
  const store = getStore();

  Object.assign(store, {
    received: true,
    eventId: event.id || "",
    eventType: event.type || "",
    message,
    updatedAt: new Date().toISOString(),
  });

  return getWebhookStatus();
}
