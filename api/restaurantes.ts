import type { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).end()
  }

  const jsonPath = path.join(process.cwd(), 'db.json')
  const raw = fs.readFileSync(jsonPath, 'utf-8')
  const db = JSON.parse(raw)

  return res.status(200).json(db.restaurantes ?? [])
}
