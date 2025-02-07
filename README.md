# HNG12 Stage 0 Backend Task - Public API

## 📋 Project Description
This is a simple public API developed as part of the HNG12 Stage 0 backend task. The API returns basic information in JSON format, including:

- My registered email address (used on the HNG12 Slack workspace).
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of this project's codebase.

## 🚀 Live Demo
**[API Endpoint](<your-deployed-api-url>)**

## ⚙️ Technology Stack
- **Programming Language:** JavaScript/Node.js
- **Framework:** ExpressJS
- **Deployment Platform:** Render

## 🗂️ Project Structure
```
├── index.js      # Main API file
├── .gitignore
├── README.md
└── package.json / requirements.txt (depending on the language)
```

## ⚡ API Documentation

### **GET /**
- **Description:** Retrieves basic information in JSON format.
- **Endpoint:** `GET <your-deployed-api-url>`
- **Response Format:** `application/json`

#### ✅ Sample Response (200 OK)
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### 🔴 Error Handling
- **404 Not Found:** Returned when the requested endpoint does not exist.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nonso-uj/hng-xii-task0
cd your-repo
```

### 2️⃣ Install Dependencies
For **Node.js:**
```bash
yarn install  # or npm install
```

### 3️⃣ Run the Project Locally
For **Node.js:**
```bash
yarn start  # or npm start
```

### 4️⃣ Test the API
Open your browser or use tools like [Postman](https://www.postman.com/) or `curl`:
```bash
curl <http://localhost:port>
```

---

## 🌍 Deployment
The API is deployed and accessible via this public URL:
**[Deployed API](<your-deployed-api-url>)**

## 📊 Performance
- **Response Time:** <500ms
- **CORS Handling:** Enabled to support cross-origin requests

## 📌 Related Link
- [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
