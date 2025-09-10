import type { VercelRequest, VercelResponse } from '@vercel/node'

// importa o mesmo arquivo api/_data.json
const data = require('../_data.json') as {
  restaurantes: Array<{ id: string | number }>
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method Not Allowed' })
      return
    }

    // pega o id da rota e normaliza para string
    const idParam = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id
    const idStr = String(idParam)

    // compara como string para funcionar com "1", "2", ...
    const restaurante = data.restaurantes.find((r) => String(r.id) === idStr)

    if (!restaurante) {
      res.status(404).json({ error: 'Not Found' })
      return
    }

    res.status(200).json(restaurante)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
