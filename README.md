# Reservas de salas Escape Room

Aplicacion sencilla hecha con Next.js para mostrar salas de escape room, iniciar un pago con Stripe Checkout y recibir un webhook basico de Stripe

## Funcionalidad

- Listado de salas desde un array local
- Componente reutilizable RoomCard
- Boton de reserva que crea una sesion de Stripe Checkout
- Paginas de resultado: /succes y /cancel
- Webhook basico en /api/webhook con verificacion de firma
- Pagina de estado del webhook en /webhook-status

## Estructura
app/
api/
checkout/route.js      . Crea sesiones de Stripe Checkout
webhook/route.js       . Recibe y verifica webhooks de Stripe
components/            . Componentes reutilizables
data/rooms.js          .Datos locales de salas
lib/webhook-status.js  .Estado basico en memoria para el webhook
cancel/page.jsx
succes/page.jsx
webhook-status/page.jsx
img/                      .Imagenes de las salas
public/                   . Assets publicos de Next


## Variables de entorno

Crea un archivo .env.local para desarrollo local usando `.env.example` como referencia.


STRIPE_SECRET_KEY=sk_test_tu_clave_secreta
STRIPE_WEBHOOK_SECRET=whsec_tu_clave_del_webhook
NEXT_PUBLIC_SITE_URL=http://localhost:3000


En Vercel hay que crear las mismas variables en Project Settings > Environment Variables. Para produccion, `NEXT_PUBLIC_SITE_URL` debe ser la URL final del proyecto, por ejemplo:

NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app


El endpoint del webhook para Stripe sera:


https://tu-proyecto.vercel.app/api/webhook



