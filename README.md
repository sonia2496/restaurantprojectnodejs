# ITE5315 Final Project – Restaurant Web API

## 👨‍💻 Author
**Name:** Sonia, Rohit Sharma 

**Date:** April 16, 2025


## 📚 Project Description

This project is a secure, database-driven **Node.js/Express Web API** designed for managing restaurant data using **MongoDB Atlas**. It performs full CRUD operations and supports filtering, pagination and routes. It is also deployed live on Vercel.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas (with Mongoose)
- CORS
- Vercel (for deployment)

## 🌐 API Endpoints

| Method | Endpoint                        | Description |
|--------|----------------------------------|-------------|
| POST   | `/api/restaurants`              | Add new restaurant |
| GET    | `/api/restaurants`              | Get all restaurants |
| GET    | `/api/restaurants/:id`          | Get restaurant by ID |
| PUT    | `/api/restaurants/:id`          | Update restaurant by ID |
| DELETE | `/api/restaurants/:id`          | Delete restaurant by ID |

## 📦 How to Run Locally

1. Clone the repository
2. Install dependencies
3. Update .env for configuration
4. Start the server, execute **node server.js**