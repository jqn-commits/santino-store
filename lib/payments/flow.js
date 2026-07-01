// Adaptador Flow.cl (Webpay + tarjetas). Docs: https://www.flow.cl/docs/api.html
// Requiere env: FLOW_API_KEY, FLOW_SECRET_KEY, FLOW_ENV ('sandbox'|'prod'), APP_URL
import crypto from 'crypto';

const base = () => (process.env.FLOW_ENV === 'prod' ? 'https://www.flow.cl/api' : 'https://sandbox.flow.cl/api');

// Firma HMAC-SHA256: params ordenados por nombre, concatenados name+value, hex.
function sign(params, secret) {
  const keys = Object.keys(params).sort();
  const toSign = keys.map((k) => k + params[k]).join('');
  return crypto.createHmac('sha256', secret).update(toSign).digest('hex');
}

export async function createPayment({ commerceOrder, subject, amount, email }) {
  const apiKey = process.env.FLOW_API_KEY;
  const secret = process.env.FLOW_SECRET_KEY;
  const appUrl = process.env.APP_URL || 'http://localhost:3000';
  if (!apiKey || !secret) throw new Error('Falta configurar FLOW_API_KEY / FLOW_SECRET_KEY');

  const params = {
    apiKey,
    commerceOrder: String(commerceOrder),
    subject,
    currency: 'CLP',
    amount: String(amount),
    email,
    urlConfirmation: `${appUrl}/api/flow/confirm`, // Flow notifica el pago (server-to-server)
    urlReturn: `${appUrl}/gracias`,                 // a donde vuelve el comprador
  };
  params.s = sign(params, secret);

  const res = await fetch(`${base()}/payment/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(params).toString(),
  });
  const data = await res.json();
  if (!data || !data.url || !data.token) {
    throw new Error(data?.message || 'Flow no devolvió una URL de pago');
  }
  return { redirectUrl: `${data.url}?token=${data.token}`, token: data.token, flowOrder: data.flowOrder };
}
