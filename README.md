# FleetAssets Management Backend

Backend API for the FleetAssets Management application, built with **Node.js, Express, MongoDB, and Mongoose**.

This backend provides REST API functionality for the enterprise frontend, including database connectivity, API routing, CORS configuration, and environment-based configuration.

## 🔗 Repository

**GitHub:**
https://github.com/Abhishekn1234/enterprises_backend

**Frontend Repository:**
https://github.com/Abhishekn1234/enterprises_frontend

---

# ✨ Features

* REST API built with Express.js
* MongoDB database integration
* Mongoose ODM
* CORS support
* Environment variable configuration
* JSON request/response handling
* Development server with Nodemon
* Production server using Node.js
* Modular backend structure
* Integration with the Enterprise Management frontend

---

# 🛠️ Tech Stack

| Technology | Purpose                   |
| ---------- | ------------------------- |
| Node.js    | JavaScript runtime        |
| Express.js | REST API framework        |
| MongoDB    | Database                  |
| Mongoose   | MongoDB ODM               |
| CORS       | Cross-origin API access   |
| dotenv     | Environment configuration |
| Nodemon    | Development server        |

---

# 📁 Project Structure

```text
enterprises_backend/
│
├── src/
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

The current repository's main application entry point is:

```text
src/server.js
```

The `package.json` confirms that both the development and production commands use this file.

---

# ⚙️ Prerequisites

Install the following before running the backend:

* Node.js 20+
* npm
* MongoDB / MongoDB Atlas
* Git

Check Node.js and npm:

```bash
node -v
npm -v
```

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Abhishekn1234/enterprises_backend.git
```

Navigate to the project:

```bash
cd enterprises_backend
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

You can use `.env.example` as a starting point.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

## Environment Variables

| Variable      | Description               | Example             |
| ------------- | ------------------------- | ------------------- |
| `PORT`        | Backend server port       | `5000`              |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |

The repository's current `.env.example` defines `PORT=5000` and `MONGODB_URI`.

### ⚠️ Important Security Notice

Never commit your real MongoDB credentials to GitHub.

Use:

```env
MONGODB_URI=your_private_mongodb_connection_string
```

instead of putting the actual username/password into the repository.

If a real database password has already been committed to a public repository, **change/rotate the password immediately**.

---

# ▶️ Run the Backend

## Development

Start the backend using Nodemon:

```bash
npm run dev
```

The development command runs:

```bash
nodemon src/server.js
```

The API will normally run on:

```text
http://localhost:5000
```

---

## Production

Start the backend with:

```bash
npm start
```

The production command runs:

```bash
node src/server.js
```

---

# 🔌 Frontend Integration

The frontend repository is configured to communicate with the backend through:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Therefore, run the backend on port `5000` during local development.

### Backend

```text
http://localhost:5000
```

### API Base URL

```text
http://localhost:5000/api
```

### Frontend

```text
http://localhost:5173
```

The overall local development flow is:

```text
React/Vite Frontend
        │
        │ HTTP / REST API
        ▼
Express Backend
        │
        │ Mongoose
        ▼
MongoDB
```

---

# 🗄️ MongoDB Configuration

This application uses MongoDB through Mongoose.

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

For MongoDB Atlas:

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Configure Network Access.
4. Copy the MongoDB connection string.
5. Add the connection string to `.env`.
6. Start the backend.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
```

---

# 🌐 CORS

The backend uses the `cors` package to allow the frontend application to communicate with the API.

During local development:

```text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
```

Make sure the backend CORS configuration allows the frontend origin.

For production, configure CORS to allow only your deployed frontend domain.

---

# 📦 Dependencies

The current backend package includes:

```text
express
mongoose
cors
dotenv
```

Development:

```text
nodemon
```

These dependencies are defined in the repository's `package.json`.

---

# 📜 Available Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `npm install` | Install dependencies                  |
| `npm run dev` | Start development server with Nodemon |
| `npm start`   | Start production server               |

---

# 🧪 API Testing

You can test the API using tools such as:

* Postman
* Insomnia
* Thunder Client
* REST Client
* Frontend application

Example:

```text
GET http://localhost:5000/api/...
```

Replace the endpoint with the API route you want to test.

---

# 🚀 Deployment

The backend can be deployed to services such as:

* Render
* Railway
* Fly.io
* AWS
* DigitalOcean
* VPS

When deploying, configure:

```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
```

Do not hard-code production credentials inside the source code.

---

# 🔗 Full Stack Setup

This project works together with:

### Frontend

```text
enterprises_frontend
```

Repository:

https://github.com/Abhishekn1234/enterprises_frontend

### Backend

```text
enterprises_backend
```

Repository:

https://github.com/Abhishekn1234/enterprises_backend

### Architecture

```text
                 Enterprise Management System
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
       React Frontend              Express Backend
       Vite + TypeScript           Node.js + Express
             │                           │
             │       REST API            │
             └───────────►───────────────┘
                                         │
                                         ▼
                                  MongoDB / Atlas
```

---

# 🔒 Security Best Practices

* Never commit `.env`.
* Never expose MongoDB credentials.
* Rotate credentials if they have been exposed.
* Use environment variables for secrets.
* Restrict MongoDB Atlas Network Access.
* Use HTTPS in production.
* Restrict CORS to trusted frontend domains.
* Validate incoming API data.
* Use appropriate authentication/authorization for protected endpoints.

---

# 👨‍💻 Author

**Abhishek N**

GitHub:

https://github.com/Abhishekn1234

---

# 📄 License

This project is licensed under the ISC License as specified in the current `package.json`.

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
