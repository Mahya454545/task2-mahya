const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const bcrypt = require('bcrypt')

const adapter = new PrismaPg({ connectionString: 'postgresql://dashboard_user:mypassword123@localhost:5432/dashboard_db' })
const prisma = new PrismaClient({ adapter })

const register = async (req, res) => {
  const { name, email, password, role } = req.body
  if (!name || !email || !password || !role) {
    return res.status(400).json({ success: false, message: 'All fields are required' })
  }
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role }
    })
    res.json({ success: true, data: { id: user.id, name: user.name, role: user.role } })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Database error, please try again' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' })
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email' })
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(400).json({ success: false, message: 'Incorrect password' })
    }
    res.json({ success: true, data: { name: user.name, role: user.role } })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Database error, please try again' })
  }
}

module.exports = { register, login }