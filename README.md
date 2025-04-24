
# 📝 Blog API Backend with Authentication

This is a Node.js + Express backend using MongoDB that supports:
- User authentication with JWT
- Blog post CRUD (Create, Read, Update, Delete)
- Protected routes requiring login

---

## 🚀 Setup

### 1. Clone the repo and install dependencies
```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### 2. Create a `.env` file
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blog-auth-db
JWT_SECRET=yourSuperSecretKey
```

> Make sure MongoDB is running locally or update the URI.

### 3. Start the server
```bash
npm run dev    # Uses nodemon
```

---

## 🔐 Auth Routes

| Method | Route              | Description          |
|--------|--------------------|----------------------|
| POST   | /api/auth/signup   | Create a new user    |
| POST   | /api/auth/login    | Log in and get token |

---

## 📘 Blog Routes (Protected)

> Must include `Authorization: Bearer <JWT>` in headers

| Method | Route              | Description               |
|--------|--------------------|---------------------------|
| GET    | /api/blogs         | Get all blogs             |
| GET    | /api/blogs/:id     | Get single blog by ID     |
| POST   | /api/blogs         | Create new blog           |
| PUT    | /api/blogs/:id     | Update blog (author only) |
| DELETE | /api/blogs/:id     | Delete blog (author only) |

---

## 🧪 Sample Request

### 🔑 Login to get JWT
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "test1234"}'
```

### ✍️ Create Blog
```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Authorization: Bearer <your-jwt-token>" \
  -H "Content-Type: application/json" \
  -d '{"title": "My Blog", "content": "Hello world"}'
```

---

## 🧾 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- nodemon (dev)

---

## 📂 Project Structure

```
├── models/
│   └── Blog.js
│   └── User.js
├── controllers/
│   └── blogController.js
│   └── authController.js
├── routes/
│   └── blogRoute.js
│   └── authRoute.js
├── middleware/
│   └── authMiddleware.js
├── server.js
├── .env
├── .gitignore
└── README.md
```

---

## 🙌 Author

Built by stuxdev
