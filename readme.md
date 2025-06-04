# 🚀 Fullstack Real Estate App — DevOps Interview Task

## 👤 Role: Junior DevOps Engineer (0–2 Years Experience)
As part of your interview process, you will be forking this repository, setting up a CI/CD pipeline, containerizing both frontend and backend applications using Docker, and deploying the full application to AWS using best DevOps practices.

---

## 🧱 Repository Structure

This repository contains two folders:

- `/frontend` — React-based real estate web app
- `/backend` — Node.js (Express) REST API

---

## 📦 Tech Stack & Dependencies

### Frontend (React)
- **Framework**: React.js
- **Version**: 18+
- **Styling**: Normal CSS (No Tailwind or Bootstrap)
- **Port**: `3000`
- **Dependencies**:  
  - `react-router-dom`
  - `axios`

### Backend (Node.js + Express)
- **Framework**: Express.js
- **Version**: 4.x
- **Port**: `5000`
- **Dependencies**:
  - `express`
  - `pg` (PostgreSQL client)
  - `cors`
  - `dotenv`

### Database
- **Type**: PostgreSQL
- **Deployment**: AWS RDS
- **Networking**: Must reside in **Private Subnet**
- **Port**: `5432`

---

## 🪜 Setup Instructions (on local Ubuntu machine)

### Step 1: Fork the Repository

1. Click on the **Fork** button on the top-right of this repository.
2. Clone your forked repo:
   ```bash
   git clone https://github.com/your-username/real-estate-app.git
   cd real-estate-app

