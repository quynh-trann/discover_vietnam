import express from 'express'
//import placesData from '../data/places.js'
import pool from '../config/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM places ORDER BY id'
    )

    res.status(200).json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/:placeId', async (req, res) => {
  try {
    const placeId = parseInt(req.params.placeId)

    const result = await pool.query(
      'SELECT * FROM places WHERE id = $1',
      [placeId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Place not found' })
    }

    res.status(200).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router