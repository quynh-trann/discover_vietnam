import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import placesRouter from './routes/places.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

app.use('/api/places', placesRouter)
app.use('/scripts', express.static(path.join(projectRoot, 'public/scripts')))
app.use('/img', express.static(path.join(projectRoot, 'img')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(projectRoot, 'index.html'))
})

app.get('/places/:placeId', (req, res) => {
  res.status(200).sendFile(path.join(projectRoot, 'place.html'))
})

app.use(express.static(projectRoot))

app.use((req, res) => {
  res.status(404).send(`
    <h1>404</h1>
    <p>This Vietnam destination could not be found.</p>
    <a href="/">Back Home</a>
  `)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})