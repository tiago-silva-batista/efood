// api/restaurantes/[id].ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import data from '../_data.json'

export default (req: VercelRequest, res: VercelResponse) => {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET')
      return res.status(405).end('Method Not Allowed')
    }

    const { id } = req.query
    const one = (data as any).restaurantes.find(
      (r: any) => String(r.id) === String(id)
    )
    if (!one) return res.status(404).json({ message: 'Not found' })
    return res.status(200).json(one)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Internal error' })
  }
}
