import { NextResponse } from 'next/server';
import { createPayment as flowCreate } from '@/lib/payments/flow';

// Selección de pasarela por env (flow por defecto; mercadopago se puede agregar en lib/payments/mercadopago.js)
const provider = process.env.PAYMENT_PROVIDER || 'flow';

export async function POST(req) {
  try {
    const { items, email, total } = await req.json();
    if (!items?.length) return NextResponse.json({ error: 'Carro vacío' }, { status: 400 });
    if (!email) return NextResponse.json({ error: 'Falta email' }, { status: 400 });

    // recalcular total en servidor (no confiar en el cliente) — TODO: validar precios contra la BD
    const amount = items.reduce((s, x) => s + Number(x.precio) * Number(x.qty), 0);
    const commerceOrder = 'SNT-' + Date.now();
    const subject = `Compra Santino (${items.reduce((s, x) => s + x.qty, 0)} items)`;

    let out;
    if (provider === 'flow') {
      out = await flowCreate({ commerceOrder, subject, amount, email });
    } else {
      return NextResponse.json({ error: `Pasarela no soportada: ${provider}` }, { status: 500 });
    }
    return NextResponse.json({ redirectUrl: out.redirectUrl, commerceOrder });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
