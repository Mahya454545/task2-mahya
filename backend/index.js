const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const authRoutes = require('./routes/auth')
const clientRoutes = require('./routes/clients')

app.use('/api/auth', authRoutes)
app.use('/api/clients', clientRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})