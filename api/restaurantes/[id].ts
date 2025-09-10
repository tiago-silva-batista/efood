import type { VercelRequest, VercelResponse } from '@vercel/node'
import data from '../_data.json'

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET')
      return res.status(405).end('Method Not Allowed')
    }

    const { id } = req.query
    const one = data.restaurantes.find((r) => String(r.id) === String(id))
    if (!one) return res.status(404).json({ message: 'Not found' })
    return res.status(200).json(one)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Internal error' })
  }
}
