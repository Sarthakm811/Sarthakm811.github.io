---
title: "HealthCare AI Guardian - Preventive Health Platform"
excerpt: "🥇 VOID Hackathon Winner | AI/ML-powered preventive health platform with early disease detection using deep learning models.<br/><img src='/images/healthcare-ai.png'>"
collection: portfolio
github: "https://github.com/Sarthakm811/HealthCare-AI-Guardian"
difficulty: "Expert"
tags:
  - AI/ML
  - Healthcare
  - Deep Learning
  - Data Science
  - Python
  - Flask
---

<span class="difficulty-badge difficulty-expert">🚀 Expert</span>

## 🏆 VOID Hackathon Winner (2024)
**Ranked 1st among 80+ national teams** in a 24-hour AI/ML hackathon

---

### Project Overview
HealthCare AI Guardian is a comprehensive preventive health web application that leverages **deep learning** for early disease detection. The platform enables users to track vitals, run ML-powered health screenings, and manage medical data through an intuitive, mobile-responsive interface.

### 🎯 Problem Statement
Early detection of critical diseases like Parkinson's, Alzheimer's, and Brain Tumors can save lives, but diagnostic tools are often inaccessible or require expensive medical appointments. We built an AI-powered platform to democratize preventive healthcare screening.

---

### 🔬 Technical Implementation

**Machine Learning Pipeline:**
- Implemented **deep learning models** (.h5 format) for multi-disease classification
- Disease detection capabilities:
  - **Parkinson's Disease** detection from handwriting/spiral analysis
  - **Brain Tumor** classification from MRI scans
  - **Alzheimer's** prediction from brain imaging
- Real-time prediction with confidence scores
- Automated result persistence to user profiles

**Full-Stack Architecture:**
- **Frontend:** React with responsive CSS (Grid/Flexbox), mobile-first design
- **Backend:** Node.js + Express REST API with JWT authentication
- **Database:** MongoDB with Mongoose ODM for user data and medical records
- **Model Service:** Python Flask API serving trained ML models
- **Auth System:** Secure signup/login with localStorage session management

**Key Features:**
- 📊 **Vitals Tracking:** Monitor steps, heart rate, blood pressure, weight
- 🔬 **Early Detection:** Upload medical scans for instant AI analysis
- 💾 **Prediction Dashboard:** View and manage historical test results
- 🩺 **Doctor Panel:** Admin interface for healthcare providers
- 📱 **Bluetooth Integration:** Optional device sync for real-time vitals
- 🔐 **Secure Profile Management:** Editable health profiles with emergency contacts

---

### 💡 My Contributions
As part of a **4-member team**, I contributed to:
- Integrating the ML model API with the Node.js backend
- Implementing the prediction autosave feature with user authentication
- Building responsive UI components for vitals tracking
- Developing the Flask model service endpoint architecture
- Optimizing image upload and preprocessing pipeline

---

### 🛠️ Tech Stack

**Frontend:**
- React.js
- Modern CSS3 (Grid, Flexbox, Gradients)
- Responsive Design (Mobile-first)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer (file uploads)

**AI/ML:**
- Python & Flask
- Deep Learning Models (.h5)
- Image preprocessing & classification
- Confidence scoring

---

### 📈 Impact & Results
- ⚡ **Built in 24 hours** during VOID Hackathon
- 🥇 **Won 1st place** among 80+ competing teams
- 🎯 **Multi-disease detection** with real-time predictions
- 📱 **Mobile-responsive** for accessibility
- 🔄 **End-to-end pipeline** from image upload to diagnosis storage

---

### 🤝 Team Collaboration
- **Team Size:** 4 developers
- **My Role:** Full-stack development + ML integration
- **Collaboration:** Agile sprint methodology during 24-hour hackathon
- **Version Control:** Git/GitHub for coordinated development

---

### 🔗 Links
- [GitHub Repository](https://github.com/Sarthakm811/HealthCare-AI-Guardian)
- [Live Demo](#) *(if available)*

---

### � Challenges & Solutions

**Challenge 1: Real-time ML Inference**  
❌ Problem: Model inference was too slow for user experience  
✅ Solution: Implemented async processing with loading states; optimized model serving with Flask caching

**Challenge 2: Image Upload & Preprocessing**  
❌ Problem: Large medical scans caused upload failures  
✅ Solution: Added client-side image compression; implemented chunked uploads with Multer

**Challenge 3: Time Constraints**  
❌ Problem: 24-hour deadline with complex full-stack architecture  
✅ Solution: Divided work into parallel streams—frontend, backend, ML service; continuous integration

---

### 🎓 Lessons Learned
- **Microservices Architecture:** Separating ML service from main backend improved scalability and debugging
- **User-Centric Design:** Healthcare apps require clear error messages and confidence scores to build trust
- **Team Coordination:** Version control branching strategy was crucial for parallel development under pressure
- **API Design:** RESTful conventions and consistent error handling saved integration time

---

### �🚀 Future Enhancements
- Integration with wearable devices (Fitbit, Apple Watch)
- Expanded disease detection models (Diabetes, Heart Disease)
- Telemedicine features for doctor consultations
- Mobile app development (React Native)
- Cloud deployment for scalability (AWS/Azure)

---

### 💭 Key Takeaways
This hackathon victory demonstrated our ability to:
- Build production-ready AI solutions under time pressure
- Integrate complex ML pipelines with web applications
- Design user-centric healthcare interfaces
- Collaborate effectively in fast-paced environments
- Deliver impactful solutions addressing real-world problems
