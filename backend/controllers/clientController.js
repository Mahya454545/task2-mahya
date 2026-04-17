const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')

const adapter = new PrismaPg({ connectionString: 'postgresql://dashboard_user:mypassword123@localhost:5432/dashboard_db' })
const prisma = new PrismaClient({ adapter })

const getClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({ orderBy: { createdAt: 'desc' } })
    res.json({ success: true, data: clients })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Database error, please try again' })
  }
}

const createClient = async (req, res) => {
  const { name, email, accountNumber, balance, status } = req.body
  if (!name || !email || !accountNumber) {
    return res.status(400).json({ success: false, message: 'Name, email and account number are required' })
  }
  try {
    const client = await prisma.client.create({
      data: { name, email, accountNumber, balance: balance || 0, status: status || 'active' }
    })
    res.json({ success: true, data: client })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Database error, please try again' })
  }
}

const updateClient = async (req, res) => {
  const { id } = req.params
  const { name, email, accountNumber, balance, status } = req.body
  try {
    const client = await prisma.client.update({
      where: { id: parseInt(id) },
      data: { name, email, accountNumber, balance, status }
    })
    res.json({ success: true, data: client })
  } catch (error) {
    console.error(error)
    res.status(404).json({ success: false, message: 'Record not found' })
  }
}

const deleteClient = async (req, res) => {
  const { id } = req.params
  try {
    await prisma.client.delete({ where: { id: parseInt(id) } })
    res.json({ success: true, message: 'Client deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(404).json({ success: false, message: 'Record not found' })
  }
}

module.exports = { getClients, createClient, updateClient, deleteClient }