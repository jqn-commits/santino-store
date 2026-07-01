# Santino.my — tienda

Next.js (App Router) + Tailwind. Carro, checkout y pago con **Flow.cl** (Webpay + tarjetas).
Pensada para desplegar en **Vultr Santiago (Chile)** con **Coolify** + **Cloudflare**.

## Correr local
```bash
cp .env.example .env      # completa las llaves de Flow (sandbox) cuando las tengas
npm install
npm run dev               # http://localhost:3000
```
Los productos se editan en `lib/products.js` (luego lo movemos a base de datos + panel admin).

## Estructura
- `app/page.js` vitrina · `app/cart` carro · `app/checkout` pago · `app/gracias` retorno
- `app/api/checkout` inicia el pago (Flow) · `app/api/flow/confirm` webhook de confirmación
- `lib/payments/flow.js` adaptador Flow (firma HMAC, create/getStatus)
- `Dockerfile` imagen standalone para Coolify

---

## Deploy en producción (runbook)

### 1. Servidor: Vultr Santiago  (lo que necesita TU tarjeta)
1. Crea cuenta en https://www.vultr.com
2. Deploy New Server → **Cloud Compute** → Location: **Santiago (Chile)**
3. OS: **Ubuntu 24.04** · Plan: **Regular, 2 GB / 1-2 vCPU (~US$12/mes)** (parte con 1GB si quieres)
4. Anota la IP pública.

### 2. Coolify (lo automatizo yo por SSH)
En el server:
```bash
curl -fsSL https://cdn.coolify.io/coolify/install.sh | bash
```
Panel en `http://IP:8000`. Ahí conectas este repo y Coolify buildea el Dockerfile.

### 3. Dominio + Cloudflare  (Santino.my)
1. Crea cuenta en https://cloudflare.com y agrega `santino.my`.
2. En el registrador de `.my`, cambia los **nameservers** a los que te da Cloudflare.
3. En Cloudflare DNS: registro **A** `santino.my` → IP del Vultr (proxy naranjo ON).
4. SSL/TLS: modo **Full**. Coolify emite el cert del origen automáticamente.

### 4. Pagos: Flow.cl  (lo que necesita TU RUT)
1. Crea cuenta comercio en https://www.flow.cl (persona o empresa).
2. Saca **API Key** y **Secret Key** (primero en https://sandbox.flow.cl para probar).
3. En Coolify, variables de entorno del servicio:
   - `APP_URL=https://santino.my`
   - `FLOW_ENV=sandbox` (luego `prod`)
   - `FLOW_API_KEY=...`  `FLOW_SECRET_KEY=...`
4. En Flow, configura la URL de confirmación: `https://santino.my/api/flow/confirm`

### Pendiente (siguiente iteración)
- Mover productos a base de datos (Postgres en Coolify) + panel admin para cargar tus decenas de ítems.
- Guardar órdenes, descontar stock y enviar correo de confirmación en el webhook.
- (Opcional) adaptador MercadoPago en `lib/payments/`.
