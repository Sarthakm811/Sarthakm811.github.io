---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **B.Tech in Computer Science Engineering**, Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore
  * GPA: 8.4/10.0
  * Expected 2026

Skills
======
* **Programming Languages**
  * Python, C++, SQL, Java (Core), HTML5/CSS

* **AI/ML & Data Science**
  * Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn
  * Generative AI Orchestration
  * Machine Learning & Deep Learning

* **Full-Stack Development**
  * React, Node.js, FastAPI, TypeScript
  * Streamlit

* **Cloud & DevOps**
  * AWS (EC2, S3, IAM)
  * Gemini AI, Kaggle API

* **Data Structures & Algorithms**
  * 100+ problems solved on HackerRank

Key Achievements
======
* **VOID Hackathon Winner** (2024)
  * Ranked 1st among 80+ national teams in 24-hour AI/ML hackathon
  
* **AWS Cloud Club Technical Lead**
  * Managing technical community of 30+ students
  * Mentoring 10+ juniors on cloud deployment

* **Strong Algorithmic Foundation**
  * Solved 100+ Data Structures & Algorithms problems on HackerRank

Certifications (2025)
======
* **IBM**: Data Science Foundations - Level 1
* **IBM**: Machine Learning for Data Science Project
* **Google**: Level 3 Generative AI
* **Google**: The Basics of Cloud Compute
* **Google**: Develop GenAI Apps using Streamlit
* **Google**: Prompt Design using Vertex AI
* **AWS Academy**: Generative AI Foundations
* **Industry Simulations**: Data Analytics at Deloitte and Tata

Projects
======
  <ul>{% for post in site.portfolio reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
