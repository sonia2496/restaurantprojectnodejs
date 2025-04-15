# ITE5315 Final Project – Restaurant Web API

## 👨‍💻 Author
**Name:** Your Name  
**Student ID:** YourStudentID  
**Date:** April 10, 2025


## 📚 Project Description

This project is a secure, database-driven **Node.js/Express Web API** designed for managing restaurant data using **MongoDB Atlas**. It performs full CRUD operations and supports filtering, pagination, and RESTful routes. It is also deployed live on Heroku.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas (with Mongoose)
- CORS
- dotenv
- Heroku

## 🌐 API Endpoints

| Method | Endpoint                        | Description |
|--------|----------------------------------|-------------|
| POST   | `/api/restaurants`              | Add new restaurant |
| GET    | `/api/restaurants`              | Get all restaurants (supports pagination and borough filter) |
| GET    | `/api/restaurants/:id`          | Get restaurant by ID |
| PUT    | `/api/restaurants/:id`          | Update restaurant by ID |
| DELETE | `/api/restaurants/:id`          | Delete restaurant by ID |

Example:  
`GET /api/restaurants?page=1&perPage=5&borough=Brooklyn`

## 📦 How to Run Locally

1. Clone the repo and install dependencies:


npm install
