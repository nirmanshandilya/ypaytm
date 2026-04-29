<div align="center">

```
██╗   ██╗██████╗  █████╗ ██╗   ██╗████████╗███╗   ███╗
╚██╗ ██╔╝██╔══██╗██╔══██╗╚██╗ ██╔╝╚══██╔══╝████╗ ████║
 ╚████╔╝ ██████╔╝███████║ ╚████╔╝    ██║   ██╔████╔██║
  ╚██╔╝  ██╔═══╝ ██╔══██║  ╚██╔╝     ██║   ██║╚██╔╝██║
   ██║   ██║     ██║  ██║   ██║      ██║   ██║ ╚═╝ ██║
   ╚═╝   ╚═╝     ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝     ╚═╝
```

### *Why Paytm? — A Paytm Clone Built with the MERN Stack*

<br/>

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io)

</div>

---

## 💡 What is ypaytm?

> **ypaytm** *(pronounced "Why Paytm?")* is a full-stack Paytm-inspired digital wallet application. Send money, manage your wallet, and track transactions — all in one place. Built to learn, built to ship.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure sign up, sign in & logout with JWT |
| 💰 **Wallet** | Each user gets a personal wallet |
| 💸 **Send Money** | Transfer funds to friends instantly |
| 🧾 **Transaction History** | View all your past transactions |

---

## 🏗️ Tech Stack

<details>
<summary><b>🖥️ Frontend</b></summary>

- **React.js** — UI library
- **React Router** — Client-side navigation
- **Axios** — HTTP requests
- **Tailwind CSS** — Utility-first styling

</details>

<details>
<summary><b>⚙️ Backend</b></summary>

- **Node.js + Express.js** — Server & REST API
- **MongoDB + Mongoose** — Database & ODM
- **JWT** — Stateless authentication

</details>

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB URI (local or [Atlas](https://www.mongodb.com/atlas))

---

### 1️⃣ Clone the repo

```bash
git clone https://github.com/nirmanshandilya/ypaytm.git
cd ypaytm
```

### 2️⃣ Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the app

```bash
# Terminal 1 — Backend
cd backend
npm start

# Terminal 2 — Frontend
cd frontend
npm start
```

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

## 📁 Project Structure

```
ypaytm/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── index.html
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch → `git checkout -b feat/amazing-feature`
3. **Commit** your changes → `git commit -m 'Add amazing feature'`
4. **Push** to your branch → `git push origin feat/amazing-feature`
5. **Open** a Pull Request

You can also open [issues](../../issues) to report bugs or suggest features.

---

<div align="center">

Made with ☕ and a healthy skepticism of fintech apps.

**ypaytm** — *Because why not?*

</div>
