import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS places (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        province TEXT NOT NULL,
        description TEXT NOT NULL,
        best_time TEXT NOT NULL,
        image TEXT NOT NULL
      );
    `)

    console.log('Table created!')
  } catch (err) {
    console.error(err)
  } finally {
    await pool.end()
  }
}

createTable()