# 🛒 Scalable E-commerce Backend (Microservices Architecture)
A scalable, containerized backend system for an e-commerce platform, built using a microservices architecture.

## 🧠 Project Overview
It aims to demonstrate how to build a modular, scalable backend for an e-commerce application by splitting common features into independently deployed and managed services.

Each core functionality of a typical e-commerce platform is implemented as a separate microservice.

- Each microservice resides in its own directory.
- Each service has its own database, if needed.
- Services communicate over HTTP within a private Docker network.
- The API Gateway is exposed publicly for external requests.

## 🧱 Tech Stack
- Node.js
- Express.js
- MongoDB
- Cloudinary
- Docker
- Kafka
- Resend
- Zod
- Stripe 

## 🔧 Microservices
This system includes the following services:

- **User Service:**	Handles user registration and authentication using JWT tokens.
- **Product Catalog Service:**	Manages product listings, categories, and inventory.
- **Shopping Cart Service:**	Handles cart operations like adding/removing items and updating quantities.
- **Order Service:**	Manages order processing, tracking, and order history.
- **Payment Service:**	Integrates with Stripe to handle payment sessions and webhooks.
- **Notification Service:**	Sends emails to users using Resend.
- **API Gateway:**	Built with `http-proxy-middleware`, this gateway handles routing, authentication, and authorization logic.

## 🧼 Architecture
### 🔹 Clean Architecture
Each microservice follows the principles of Clean Architecture, separating concerns across layers such as domain, application, infrastructure, and presentation.

### 🔹 Event-Driven Architecture (Kafka)
Some services, such as Notification and Payment, communicate via event-driven patterns using Apache Kafka to decouple operations and improve scalability.

## ✅ Requirements
Before running the project, ensure the following:

- Docker is installed and running on your machine.

- You have valid Stripe API keys and have configured a webhook endpoint for payments.

- You have a Resend API keys for sending emails.

- You have a Cloudinary account, API keys, and a folder created to store product images.

- You’ve set up all required environment variables.

> 📝 To check the necessary environment variables, refer to the env.template files located in each service folder and the root project directory.

## ▶️ Running the Project
To start all services locally using Docker Compose:

```
docker compose up --build
```

This command will:
- Build all services
- Create containers
- Start the entire system
- CI/CD Pipelines/GitHub Actions
- Monitoring & Observability (CloudWatch, Grafana, or Prometheus )
