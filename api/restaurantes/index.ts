import type { VercelRequest, VercelResponse } from '@vercel/node'

// carrega os dados usados no deploy (mesmo conteúdo do seu db.json)
const data = require('../_data.json') as {
  restaurantes: Array<any>
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method Not Allowed' })
      return
    }

    res.status(200).json(data.restaurantes)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
