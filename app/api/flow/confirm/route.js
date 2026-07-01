import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Flow notifica acá (server-to-server) con el token del pago. Consultamos el estado y confirmamos.
function sign(params, secret) {
  const keys = Object.keys(params).sort();
  return crypto.createHmac('sha256', secret).update(keys.map((k) => k + params[k]).join('')).digest('hex');
}
const base = () => (process.env.FLOW_ENV === 'prod' ? 'https://www.flow.cl/api' : 'https://sandbox.flow.cl/api');

export async function POST(req) {
  try {
    const form = await req.formData();
    const token = form.get('token');
    if (!token) return NextResponse.json({ error: 'sin token' }, { status: 400 });

    const params = { apiKey: process.env.FLOW_API_KEY, token };
    params.s = sign(params, process.env.FLOW_SECRET_KEY);
    const res = await fetch(`${base()}/payment/getStatus?` + new URLSearchParams(params).toString());
    const data = await res.json();

    // status: 1 pendiente, 2 pagado, 3 rechazado, 4 anulado
    if (data.status === 2) {
      // TODO: marcar la orden data.commerceOrder como PAGADA en la BD, descontar stock, enviar correo.
      console.log('[flow] PAGO OK', data.commerceOrder, data.amount);
    } else {
      console.log('[flow] pago no completado', data.commerceOrder, data.status);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
