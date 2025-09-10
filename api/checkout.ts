// api/checkout.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'

const genId = () => Math.floor(100000 + Math.random() * 900000)

export default (req: VercelRequest, res: VercelResponse) => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      return res.status(405).end('Method Not Allowed')
    }

    // Se quiser, valide req.body aqui (products, delivery, payment etc.)
    return res.status(200).json({ orderId: genId() })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Internal error' })
  }
}
