# Portfolio Website with Contact Form (Full-Stack)

A full-stack portfolio website built using React, Express, and MySQL.

This project demonstrates the complete flow of data from a frontend contact form to a backend API and into a MySQL database, following clean architecture, mobile-first design, and disciplined Git practices.

---

## Tech Stack

### Frontend

- React (Vite)
- CSS Modules (mobile-first)
- Plain CSS (no UI libraries)

### Backend

- Node.js
- Express
- MySQL
- dotenv
- cors

---

## Features

- Responsive portfolio layout
- Header, About Me, Skills, and Projects sections
- Contact form with controlled inputs and validation
- Loading and success states for form submission
- REST API to handle contact submissions
- Data persistence using MySQL
- Clean separation of frontend and backend
- Secure handling of environment variables
- Meaningful Git commit history

---

## Folder Structure

```text
portfolio-contact/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   ├── About.jsx
│   │   │   ├── About.module.css
│   │   │   ├── Skills.jsx
│   │   │   ├── Skills.module.css
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.module.css
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   ├── styles/main.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── db/connection.js
│   │   ├── routes/contact.routes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env (ignored)
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm
- MySQL installed and running

---

### 1. Database Setup

Run the following SQL in MySQL Workbench:

```sql
CREATE DATABASE portfolio_contact;

USE portfolio_contact;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs at: `http://localhost:5000`

#### Environment Variables

Create a `.env` file inside the `backend/` folder with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_contact
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at the URL shown in the terminal (usually `http://localhost:5173`).

---

## API Endpoint

### POST /contact

Accepts JSON:

```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

Stores the message in the MySQL database.

---

## What This Project Demonstrates

- Component-based UI development with React
- Mobile-first styling with CSS Modules
- Controlled forms and client-side validation
- Express server setup and routing
- Secure database interaction using prepared statements
- Full frontend-to-backend data flow
- Clean, readable, and maintainable codebase

---

THE END
