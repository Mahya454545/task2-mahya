# 📊 ForFX — Sales & Support Dashboard

A full-stack internal dashboard for a forex brokerage, built as part of the **Opofinance AI Training Program (Week 2)**.

This project connects a real PostgreSQL database to a frontend dashboard — with working authentication, client management, and full CRUD functionality.

---

## 🚀 Features

- ✅ **User Authentication** — Register & Login with hashed passwords (bcrypt)
- ✅ **Forgot Password** — Reset password by verifying email
- ✅ **Clients CRUD** — Add, edit, delete, and view real clients from the database
- ✅ **Error Handling** — Proper error messages for all API endpoints
- ✅ **English-only Validation** — Frontend validates input language
- ✅ **Remember Me** — Saves email across sessions
- ✅ **Password Strength Meter** — Visual guide for strong passwords

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (vanilla) |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| ORM | Prisma 7 |
| Auth | bcrypt |
| Driver | @prisma/adapter-pg |

---

## 📁 Project Structure
workspace/
├── dashboard.html          ← Main dashboard UI
├── login.html              ← Login & Register page
├── forgot-password.html    ← Password reset page
├── README.md
├── .gitignore
└── backend/
├── index.js            ← Server entry point (port 3000)
├── .env                ← NOT in git (see .env.example)
├── .env.example        ← Template for environment variables
├── package.json
├── prisma.config.ts    ← Prisma configuration
├── prisma/
│   ├── schema.prisma   ← Database models
│   └── migrations/     ← Migration history
├── routes/
│   ├── auth.js         ← /api/auth routes
│   └── clients.js      ← /api/clients routes
└── controllers/
├── authController.js     ← Login, register, reset password
└── clientController.js   ← CRUD for clients
---

## 🗃️ Database Models

### User
| Field | Type |
|-------|------|
| id | Int (auto) |
| name | String |
| email | String (unique) |
| password | String (hashed) |
| role | String |
| createdAt | DateTime |

### Client
| Field | Type |
|-------|------|
| id | Int (auto) |
| name | String |
| email | String (unique) |
| accountNumber | String |
| balance | Float |
| status | String |
| createdAt | DateTime |

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Create new user |
| POST | /api/auth/login | Login with email & password |
| POST | /api/auth/check-email | Verify email exists |
| POST | /api/auth/reset-password | Set new password |

### Clients
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/clients | Get all clients |
| POST | /api/clients | Add new client |
| PUT | /api/clients/:id | Update client |
| DELETE | /api/clients/:id | Delete client |

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js v18+
- PostgreSQL installed and running

### 1. Clone the repo
```bash
git clone https://github.com/Mahya454545/task2-mahya.git
cd task2-mahya
```

### 2. Set up the database
```bash
psql postgres
CREATE DATABASE dashboard_db;
CREATE USER dashboard_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE dashboard_db TO dashboard_user;
\q
```

### 3. Configure environment
```bash
cd backend
cp .env.example .env
```
Edit `.env` and add your database credentials.

### 4. Install dependencies
```bash
npm install
```

### 5. Run migrations
```bash
npx prisma migrate dev
npx prisma generate
```

### 6. Start the server
```bash
node index.js
```

### 7. Open the app
Open `login.html` in your browser and start using the app!

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
DATABASE_URL="postgresql://dashboard_user:yourpassword@localhost:5432/dashboard_db"
```

---

## 👩‍💻 Author

**Mahya** — Account Manager @ Opofinance  
Built as part of the internal AI Tools Training Program — Week 2

---

*Week 1 built the house. Week 2 installed the plumbing and put real furniture in it. 🏠*