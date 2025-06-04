# 🚀 Fullstack Real Estate App — DevOps Task

## 🧱 Repository Structure

This repository contains two folders:

- `/frontend` — React-based real estate web app
- `/backend` — Node.js (Express) REST API

## 📦 Tech Stack & Dependencies

### Frontend (React)
- **Framework**: React.js
- **Version**: 18+
- **Styling**: Normal CSS (No Tailwind or Bootstrap)
- **Port**: `3000`
- **Dependencies**:  
  - `react-router-dom`
  - `axios`
  - react `18.2.0`
  - react-dom
- **Note**: No `.env` is used. API URL is directly set in the code (e.g., `http://localhost:5000/api/properties`).

### Backend (Node.js + Express)
- **Framework**: Express.js
- **Version**: 4.x
- **Runtime**: Node.js `20.x`
- **Port**: `5000`
- **Dependencies**:
  - `express`
  - `pg` (PostgreSQL client)
  - `cors`
- **Note**: PostgreSQL connection details are hardcoded in `db.js`. No `.env` file is used.


### Database
- **Type**: PostgreSQL
- **Deployment**: AWS RDS
- **Networking**: Must reside in **Private Subnet**
- **Port**: `5432`

> ⚠️ Important:
> By default, the backend tries to connect to a local PostgreSQL instance (`localhost:5432`). 
> You can either:
> - Install PostgreSQL locally and create a `realestate` database manually
> - OR wait to deploy the app on AWS and point to the RDS instance by updating `backend/db.js` with your RDS host and credentials.
> ❗ Failing to do so will result in `ECONNREFUSED` or `authentication` errors when starting the backend or accessing API routes.


---

## 🪜 Setup Instructions (on local Ubuntu machine)

### Step 1: Fork the Repository

1. Click on the **Fork** button on the top-right of this repository.
2. Clone your forked repo:
   ```bash
   git clone https://github.com/your-username/real-estate-app.git
   cd real-estate-app

To run frntend in local
cd frontend
npm install
npm start
The frontend runs on: http://localhost:3000

To setup backend in local
cd ../backend
npm install
npm start
The backend runs on: http://localhost:5000


🔧 Task Instructions
You are required to perform the following DevOps tasks:

🐳 Dockerization

Create a Dockerfile for the backend that:

Installs dependencies
Sets environment variables
Starts the server on port 5000

Create a Dockerfile for the frontend that:
Builds the React app
Serves it using nginx on port 3000

Add .dockerignore files in both folders to avoid copying node_modules.

☁️ AWS Deployment
You must:

Provision AWS infrastructure using Terraform, including:

A new VPC
Public and private subnets
Route tables, Internet Gateway and any other networking services if needed
A PostgreSQL RDS instance in private subnet
An EC2 instance in public subnet to host the containers
An Application Load Balancer (ALB) for the backend
Security groups 
Launch only 1 EC2 instance initially, and use Auto Scaling Group (ASG) to launch a new instance when:
CPU Utilization > 80%
Deploy the containerized backend behind the ALB, connected to the PostgreSQL RDS.

🔁 CI/CD with GitHub Actions

Create GitHub Actions workflows:

One for the frontend
One for the backend

These workflows should:

Trigger on push to the main branch
Build the Docker image
SSH into the EC2 instance
Pull the latest image or repo changes
Restart the running containers


