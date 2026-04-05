---
permalink: /
title: ""
excerpt: "AI Engineer and ML Developer portfolio"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ base_path }}/assets/css/portfolio-redesign.css">

<main class="portfolio-home">
  <!-- Sticky one-page navigation -->
  <nav class="portfolio-top-nav" aria-label="Main section navigation">
    <div class="portfolio-brand">Sarthak Mahajan | AI Portfolio</div>
    <ul class="portfolio-nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero section with headline, role, CTAs, and profile image -->
  <section id="home" class="hero fade-in" data-section>
    <div>
      <p class="hero__eyebrow">AI Engineer Portfolio</p>
      <h1 class="hero__title">I build intelligent AI systems that solve real-world problems</h1>
      <p class="hero__subtitle">
        AI Engineer / ML Developer |
        <span id="typing-role" class="typing" aria-live="polite"></span>
      </p>
      <p class="hero__linkedin-headline">LinkedIn: B.Tech CSE 3rd Year | C | Python | Data Analyst | Data Scientist | AI/ML</p>
      <div class="hero__cta">
        <a class="portfolio-btn portfolio-btn--primary" href="#projects">View Projects</a>
        <a class="portfolio-btn portfolio-btn--secondary" href="{{ base_path }}/files/Sarthak_Mahajan_Resume.pdf" target="_blank" rel="noopener">Download Resume</a>
      </div>
    </div>
    <div class="hero__image-wrap">
      <img class="hero__image" src="{{ base_path }}/images/profile.png" alt="Portrait of Sarthak Mahajan">
    </div>
  </section>

  <!-- Experience highlights synced from resume -->
  <section class="section-block fade-in" data-section>
    <h2 class="section-title">Experience Highlights</h2>
    <p class="section-subtitle">Leadership and delivery outcomes from GDSC and AWS Cloud Club involvement.</p>

    <div class="metrics-grid">
      <article class="metric-card">
        <h3 class="metric-value">10+ AI/ML Workshops</h3>
        <p class="metric-label">Completed hands-on sessions on preprocessing, feature engineering, and evaluation.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">5+ AWS Sessions</h3>
        <p class="metric-label">Conducted practical workshops on EC2, S3, IAM, and cloud deployment basics.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">30+ Club Members</h3>
        <p class="metric-label">Led technical activities and execution planning for an active cloud community.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">10+ Juniors Mentored</h3>
        <p class="metric-label">Guided students on architecture, DevOps basics, and project implementation.</p>
      </article>
    </div>
  </section>

  <!-- Skills grid -->
  <section id="skills" class="section-block fade-in" data-section>
    <h2 class="section-title">Skills</h2>
    <p class="section-subtitle">Core capabilities used to build production-ready AI and data products.</p>

    <div class="skill-grid">
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-code" aria-hidden="true"></i></div>
        <h3>Python Development</h3>
        <p>Clean backend logic, automation scripts, and ML pipelines.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-brain" aria-hidden="true"></i></div>
        <h3>Machine Learning</h3>
        <p>Model training, evaluation, optimization, and inference workflows.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
        <h3>Data Science</h3>
        <p>EDA, feature engineering, and business insight storytelling.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-database" aria-hidden="true"></i></div>
        <h3>Data Analytics</h3>
        <p>Structured analysis for decision support and trend discovery.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-cloud" aria-hidden="true"></i></div>
        <h3>Cloud (AWS)</h3>
        <p>Cloud fundamentals, deployment flow, and scalable architecture basics.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-laptop-code" aria-hidden="true"></i></div>
        <h3>Full-Stack Integration</h3>
        <p>Connecting frontend apps with APIs and AI model services.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-project-diagram" aria-hidden="true"></i></div>
        <h3>Model Deployment</h3>
        <p>Serving model outputs through practical, user-friendly web apps.</p>
      </article>
      <article class="skill-card">
        <div class="skill-icon"><i class="fas fa-users" aria-hidden="true"></i></div>
        <h3>Technical Leadership</h3>
        <p>Mentoring students and coordinating project delivery in teams.</p>
      </article>
    </div>
  </section>

  <!-- Projects as visual cards with concise bullets -->
  <section id="projects" class="section-block fade-in" data-section>
    <h2 class="section-title">Projects</h2>
    <p class="section-subtitle">Selected work focused on real-world AI, ML, and data challenges.</p>

    <div class="projects-grid">
      <article class="project-card">
        <img src="{{ base_path }}/images/projects/ai-research.svg" alt="AI Data Science Research Assistant thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>AI Data Science Research Assistant</h3>
          <ul class="project-points">
            <li>Automated EDA workflow from dataset fetch to analysis.</li>
            <li>Generated plain-language insights using Gemini API.</li>
            <li>Compared ML models with reproducible code exports.</li>
            <li>Reduced manual iteration during experimentation.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, Gemini API, Kaggle API, Pandas</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/AI-Data-Science-Research-Assistant" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/ai-research-assistant/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/healthcare-ai.svg" alt="HealthCare AI Guardian thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>HealthCare AI Guardian</h3>
          <ul class="project-points">
            <li>Built preventive health platform with AI disease screening.</li>
            <li>Integrated deep learning models for real-time predictions.</li>
            <li>Implemented secure user flow with dashboard analytics.</li>
            <li>Won 1st place at VOID Hackathon.</li>
          </ul>
          <p class="tech-stack">Tech Stack: React, Node.js, Flask, MongoDB, Deep Learning</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/HealthCare-AI-Guardian" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/healthcare-ai-guardian/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/nasa-meteorite.svg" alt="NASA Meteorite analysis thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>NASA Meteorite Data Analysis</h3>
          <ul class="project-points">
            <li>Analyzed 45K+ meteorite records from public NASA data.</li>
            <li>Identified mass and region-wise landing patterns.</li>
            <li>Created clear visuals for research readability.</li>
            <li>Improved interpretation quality for stakeholders.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, Jupyter, Pandas, Matplotlib</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/NASA-Meteorite" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/nasa-meteorite-analysis/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/adidas-sales.svg" alt="Adidas sales analysis thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Adidas US Sales Analysis</h3>
          <ul class="project-points">
            <li>Explored ~9,600 records for performance trends.</li>
            <li>Highlighted top retailers and revenue channels.</li>
            <li>Mapped regional demand and profitability drivers.</li>
            <li>Built business-friendly visual summaries.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, NumPy, Pandas, Matplotlib</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/adidas-us-sales-" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/adidas-sales-analysis/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/parameter-golf.svg" alt="Parameter Golf thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Parameter Golf</h3>
          <ul class="project-points">
            <li>Worked on constrained LM experiments under 16MB budget.</li>
            <li>Compared compact architecture configurations.</li>
            <li>Tracked validation behavior across training runs.</li>
            <li>Improved benchmark reproducibility with clear run notes.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, Transformers, ML Benchmarking</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/parameter-golf" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/parameter-golf-model-compression/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/deepfake.svg" alt="DeepFake project thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>DeepFake Analysis</h3>
          <ul class="project-points">
            <li>Ran computer vision experiments for deepfake analysis.</li>
            <li>Prepared visual datasets for model-focused workflows.</li>
            <li>Benchmarked preprocessing strategies for better signals.</li>
            <li>Structured notebooks for faster iterative testing.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, OpenCV, TensorFlow, Jupyter Notebook</p>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/DeepFake" target="_blank" rel="noopener">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/deepfake-analysis/">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/smart-traffic.svg" alt="Smart traffic management system thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Smart Traffic Management System</h3>
          <ul class="project-points">
            <li>Built real-time emergency vehicle detection with computer vision.</li>
            <li>Designed signal-priority logic for faster emergency response.</li>
            <li>Integrated detection pipeline with traffic simulation alerts.</li>
            <li>Improved decision flow for critical-route traffic handling.</li>
          </ul>
          <p class="tech-stack">Tech Stack: Python, YOLO, OpenCV, NumPy</p>
          <div class="project-actions">
            <a class="project-btn primary" href="{{ base_path }}/portfolio/smart-traffic-management/">View Code</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/smart-traffic-management/">Live Demo</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Proof and achievement counters -->
  <section id="achievements" class="section-block fade-in" data-section>
    <h2 class="section-title">Achievements</h2>
    <p class="section-subtitle">Proof of execution, consistency, and project impact.</p>

    <div class="metrics-grid">
      <article class="metric-card">
        <h3 class="metric-value">89% Accuracy Model</h3>
        <p class="metric-label">Healthcare AI model tuned for reliable prediction quality.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">1st / 80+ Teams</h3>
        <p class="metric-label">Winner in VOID Hackathon AI/ML domain challenge.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">Top 10 (Prayatna 3.0)</h3>
        <p class="metric-label">Strong performance in a 36-hour hackathon environment.</p>
      </article>
      <article class="metric-card">
        <h3 class="metric-value">100+ DSA Problems</h3>
        <p class="metric-label">Consistent algorithmic practice on HackerRank.</p>
      </article>
    </div>
  </section>

  <!-- Contact block with links and optional form -->
  <section id="contact" class="section-block fade-in" data-section>
    <h2 class="section-title">Contact</h2>
    <p class="section-subtitle">Open to internships, freelance AI work, and collaboration opportunities.</p>

    <div class="contact-grid">
      <div>
        <ul class="contact-links">
          <li><a href="tel:+919893980989"><i class="fas fa-phone" aria-hidden="true"></i> +91-9893980989</a></li>
          <li><a href="mailto:sarthakm811@gmail.com"><i class="fas fa-envelope" aria-hidden="true"></i> sarthakm811@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/sarthak-mahajan-b5926a296" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn Profile</a></li>
          <li><a href="https://github.com/Sarthakm811" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> GitHub Repositories</a></li>
        </ul>
      </div>

      <form class="contact-form" action="mailto:sarthakm811@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="Your email" required>
        <textarea name="message" placeholder="Tell me about your project or role" required></textarea>
        <button class="portfolio-btn portfolio-btn--primary" type="submit">Send Message</button>
      </form>
    </div>
  </section>
</main>

<script src="{{ base_path }}/assets/js/portfolio-redesign.js" defer></script>
