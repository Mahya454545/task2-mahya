# 🧠 AI Tools Homework – Week 2
**Opofinance Internal AI Training Program**
Assigned by: Arash | Due: Report back in the group chat when done

---

## 🎯 Goal

Take your Week 1 dashboard and make it real. This week you will:
- Add a proper backend and connect it to PostgreSQL
- Run real database migrations using a migration tool
- Make login and sign up actually work with a real database
- Build a full CRUD table relevant to your role (create, read, update, delete)
- Handle database errors properly — no more silent failures

By the end, your dashboard is a functioning mini-app with real data flowing from UI → backend → database.

> ⚠️ **Had issues last week?** Make sure your Week 1 dashboard is working before starting. Post in the group if you're stuck — don't skip ahead.

---

## 🛠️ Step 1 — Install PostgreSQL

Open Claude Code or Gemini CLI and say:

```
I'm on a [Mac / Windows / Ubuntu] machine. Help me install PostgreSQL,
start the service, and create a new database called "dashboard_db" with
a user called "dashboard_user" and a password of my choice.
```

**What you should have at the end:**
- PostgreSQL installed and running
- A database called `dashboard_db`
- A user with a password that can access it
- You can verify by asking the AI: *"How do I open psql and list my tables?"*

---

## 🏗️ Step 2 — Set Up Your Backend

Pick your stack. Ask the AI to scaffold it for you.

---

### Option A — Node.js + Express + Prisma

```
I have a frontend dashboard (HTML/CSS/JS) in a folder called "frontend".
Set up a Node.js + Express backend in a folder called "backend" inside the same repo.

Requirements:
- Use Prisma as the ORM and migration tool
- Connect to PostgreSQL (database: dashboard_db)
- Store credentials in a .env file — never hardcoded
- Folder structure: routes/, controllers/, prisma/
- Enable CORS so the frontend can talk to it
- Add a .gitignore that excludes node_modules and .env

Walk me through it step by step.
```

---

### Option B — Python + FastAPI + Alembic

```
I have a frontend dashboard (HTML/CSS/JS) in a folder called "frontend".
Set up a Python + FastAPI backend in a folder called "backend" inside the same repo.

Requirements:
- Use SQLAlchemy as the ORM and Alembic for migrations
- Connect to PostgreSQL (database: dashboard_db)
- Store credentials in a .env file — never hardcoded
- Folder structure: routers/, models/, migrations/
- Enable CORS so the frontend can talk to it
- Add a .gitignore that excludes __pycache__, .env, venv/

Walk me through it step by step.
```

---

## 🗃️ Step 3 — Define Your Models and Run Migrations

You will create **two tables** this week: `users` (for auth) and one table specific to your role.

### Part A — Define the models

Ask the AI:

```
Create two database models for my project:

1. users table:
   - id (auto-increment primary key)
   - name (text, required)
   - email (text, unique, required)
   - password_hash (text)
   - role (text — e.g. support, sales, finance)
   - created_at (timestamp, auto)

2. A second table based on my role at a forex brokerage.
   My role is: [DESCRIBE YOUR ROLE]

   Examples:
   - Support Agent → "tickets" table (id, subject, client_email, status, priority, created_at)
   - Sales / IB → "leads" table (id, name, email, country, status, assigned_to, created_at)
   - Account Manager → "clients" table (id, name, email, account_number, balance, status, created_at)
   - Marketing → "campaigns" table (id, title, channel, budget, status, start_date, created_at)
   - Finance / Back Office → "transactions" table (id, client_email, amount, type, status, created_at)

   Suggest the right columns for my role and create the model.
```

### Part B — Run the migration

After the models are defined, ask:

```
Now generate and run the migration to apply these models to my PostgreSQL database.
Show me how to verify the tables were created correctly in psql.
```

**What you should have at the end:**
- Both tables exist in `dashboard_db`
- You can see them with `\dt` in psql
- Your migration file is committed to the repo (not the generated SQL — the migration source file)

---

## 🔌 Step 4 — Auth Endpoints (Login + Register)

```
Build two API endpoints:

1. POST /api/auth/register
   - Accept: name, email, password, role
   - Hash the password with bcrypt (Node) or passlib (Python)
   - Insert into the users table
   - If the email already exists, return a clear error: "Email already registered"
   - If any required field is missing, return: "All fields are required"
   - On success: return the new user's id, name, and role

2. POST /api/auth/login
   - Accept: email, password
   - Look up user by email — if not found, return: "No account found with this email"
   - Compare hashed password — if wrong, return: "Incorrect password"
   - On success: return the user's name and role

Handle all database errors properly — wrap queries in try/catch and never
return raw database error messages to the frontend.
```

---

## 📋 Step 5 — CRUD Endpoints for Your Role Table

This is the main exercise this week. Ask the AI to build full CRUD for your second table:

```
Build full CRUD API endpoints for my [TABLE NAME] table.
My role is [YOUR ROLE] at a forex brokerage.

I need:

1. GET /api/[table] — return all records, ordered by created_at descending
2. POST /api/[table] — insert a new record, validate that required fields are present
3. PUT /api/[table]/:id — update an existing record by id (upsert: if id doesn't exist, return a clear error)
4. DELETE /api/[table]/:id — delete a record by id, return error if id not found

Error handling rules for ALL endpoints:
- If a required field is missing → return 400 with a message like "Field X is required"
- If a record is not found by id → return 404 with "Record not found"
- If there is a database error → return 500 with "Database error, please try again" (log the real error server-side only)
- Never expose raw SQL errors or stack traces to the frontend
- Always return consistent JSON: { success: true/false, data: ..., message: ... }
```

---

## 🖥️ Step 6 — Connect the Frontend

Now wire everything to your Week 1 dashboard UI:

```
Update my frontend dashboard to:

1. Sign Up form → POST to /api/auth/register, show success or error message
2. Login form → POST to /api/auth/login, on success show the dashboard, display user name in header

3. Add a new section to the dashboard sidebar for [YOUR TABLE NAME — e.g. "Tickets", "Leads", "Clients"]
   This section should have:
   - A table that loads all records from GET /api/[table] on page load
   - An "Add New" button that opens a simple form to create a record (POST)
   - An "Edit" button on each row that lets the user modify it (PUT)
   - A "Delete" button on each row with a confirmation prompt before deleting (DELETE)
   - Display any error messages returned by the API clearly to the user — no silent failures

Use the native fetch() API only — no extra libraries.
```

---

## 📁 Step 7 — Professional Repo Structure

Before pushing, ask the AI:

```
Review my full project structure and make sure:
- README.md explains what the project does, what stack it uses, and how to run it locally
- .gitignore covers: node_modules, .env, __pycache__, venv, .DS_Store
- .env.example exists with placeholder values (no real credentials) so teammates know what vars are needed
- Migration files are committed but .env is not
- There are no hardcoded passwords, ports, or database URLs anywhere in the code
```

**Target structure:**

```
my-dashboard/
├── frontend/
│   └── index.html
├── backend/
│   ├── .env                ← NOT in git
│   ├── .env.example        ← IN git (with fake values)
│   ├── prisma/             (Node) or migrations/ (Python)
│   │   └── schema.prisma / versions/
│   ├── routes/ or routers/
│   ├── controllers/ or services/
│   ├── models/
│   └── index.js or main.py
├── .gitignore
└── README.md
```

---

## 📤 Step 8 — Push to GitHub

```bash
git add .
git commit -m "Week 2: Backend, PostgreSQL, migrations, CRUD, error handling"
git push
```

> ✅ Before pushing, double-check: `git status` should never show your `.env` file.

---

## ✅ Step 9 — Report Back

Post in the group:
1. 🔗 Your updated GitHub repo link
2. 📸 Two screenshots minimum:
   - Your CRUD table in the UI (with at least one real record in it)
   - A successful register or login in action
3. 💬 One sentence: *What error did you hit that took the longest to fix?*

---

## ❓ FAQ

**Q: What's a migration and why do I need it?**
A: A migration is a versioned file that describes changes to your database structure. Instead of manually running SQL, migrations let you track, share, and replay those changes — like git commits for your database.

**Q: What's upsert?**
A: Upsert = update if exists, insert if not. In this homework the PUT endpoint updates by id — if the id doesn't exist, we return a clear error instead of silently failing.

**Q: My API returns a raw SQL error to the frontend — is that bad?**
A: Yes. It can expose your table names, column names, or internal structure to users. Always catch the error, log it on the server, and return a generic message to the frontend.

**Q: CORS error when frontend calls backend?**
A: Ask the AI: *"My frontend is on port 5500 and backend on port 3000, I'm getting a CORS error — fix it."*

**Q: Prisma migration failed / Alembic says "can't find database"**
A: 99% of the time it's a wrong DATABASE_URL in your .env. Ask the AI to verify the format for your OS and PostgreSQL version.

**Q: Do I need to deploy this online?**
A: No — localhost is fine. We'll cover deployment in a later week.

---

*Last week you built the house. This week you installed the plumbing and put real furniture in it. 🏠*
