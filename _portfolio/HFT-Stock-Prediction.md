---
title: "High-Frequency Trading (HFT) Dashboard & System"
excerpt: "A full-stack ML deployment featuring a React/TypeScript frontend, Node.js API gateway, and a FastAPI Python backend for real-time trade predictions.<br/><img src='/images/hft-dashboard.png'>"
collection: portfolio
github: "https://github.com/Sarthakm811/HFT-Stock-Prediction"
---

### Project Overview
This project showcases a complete end-to-end deployment of a High-Frequency Trading (HFT) system. It bridges the gap between complex ML models and user-facing interfaces using a modern microservices architecture.



### Architecture & Technical Stack:
* **Frontend (React + TypeScript):** Built a real-time dashboard with a 30s auto-refresh interval, featuring live prediction panels and system health metrics.
* **API Gateway (Node.js & Express):** Managed the RESTful API layer, handling CORS, request logging, and proxying requests to the heavy-compute Python backend.
* **ML Engine (FastAPI & Python):** Served high-performance ensemble models capable of processing batch predictions with <100ms response times and 95% confidence intervals.
* **DevOps & Deployment:** Configured environment-based variables for seamless transition between development and production builds.

### Key Performance Metrics:
* **Low Latency:** Optimized API response and prediction times to stay under **100ms**.
* **Efficiency:** Implemented an optimized production build for the frontend, reducing load times to under **2s**.
* **Scalability:** Designed with a modular structure (Backend/Frontend/ML-API) to allow independent scaling of each service.

**Tech Stack:** React, Node.js, FastAPI, TypeScript, Python, Scikit-learn, Docker.

[View Repository](https://github.com/Sarthakm811/HFT-Stock-Prediction)
