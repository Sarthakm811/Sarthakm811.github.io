---
permalink: /
layout: portfolio-home
title: ""
excerpt: "AI Engineer and ML Developer portfolio"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ base_path }}/assets/css/portfolio-redesign.css">

<main class="portfolio-home">
  <div class="portfolio-loader" aria-hidden="true"><span></span></div>

  <!-- Sticky Navigation -->
  <nav class="portfolio-top-nav" aria-label="Main section navigation">
    <div class="portfolio-brand">Sarthak Mahajan</div>
    <ul class="portfolio-nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero fade-in" data-section>
    <div class="hero__spotlight" aria-hidden="true"></div>
    <div class="hero__content">
      <p class="hero__eyebrow">AI Engineer Portfolio</p>
      <h1 class="hero__title">I build AI systems that detect fraud, spam, and real-world risks 🚀</h1>
      <p class="hero__subtitle">AI Engineer | Machine Learning Developer</p>
      <p class="hero__meta">Building practical ML products with clean UX, measurable outcomes, and production-ready workflows.</p>
      <div class="hero__cta">
        <a class="portfolio-btn portfolio-btn--primary" href="#projects">View Projects</a>
        <a class="portfolio-btn portfolio-btn--secondary" href="{{ base_path }}/files/Sarthak_Mahajan_Resume.pdf" target="_blank" rel="noopener">Download Resume</a>
      </div>
      <p class="typing-wrap">Currently focused on <span id="typing-role" class="typing" aria-live="polite"></span></p>
    </div>
    <div class="hero__image-wrap">
      <img class="hero__image" src="{{ base_path }}/images/profile.png" alt="Portrait of Sarthak Mahajan">
      <div class="hero__badge">Open to AI/ML Opportunities</div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section-block fade-in" data-section>
    <h2 class="section-title">Skills</h2>
    <p class="section-subtitle">Core stack for data, modeling, and deployment.</p>

    <div class="skill-grid">
      <article class="skill-card"><div class="skill-icon"><i class="fab fa-python" aria-hidden="true"></i></div><h3>Python</h3><p>Data pipelines and ML workflows</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-brain" aria-hidden="true"></i></div><h3>Machine Learning</h3><p>Training, tuning, evaluation</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div><h3>Data Science</h3><p>EDA and insight extraction</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-cloud" aria-hidden="true"></i></div><h3>AWS Cloud</h3><p>EC2, S3, IAM, deployments</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-camera" aria-hidden="true"></i></div><h3>Computer Vision</h3><p>Detection and image pipelines</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-database" aria-hidden="true"></i></div><h3>Databases</h3><p>MongoDB and SQL analytics</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fab fa-react" aria-hidden="true"></i></div><h3>Frontend</h3><p>React interfaces for AI apps</p></article>
      <article class="skill-card"><div class="skill-icon"><i class="fas fa-code-branch" aria-hidden="true"></i></div><h3>Collaboration</h3><p>Git workflow and team delivery</p></article>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section-block projects-section fade-in" data-section>
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">Project-first presentation with concise outcomes.</p>

    <div class="projects-grid">
      <article class="project-card">
        <img src="{{ base_path }}/images/projects/ai-research.svg" alt="AI Data Science Research Assistant thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>AI Data Science Research Assistant</h3>
          <ul class="project-points">
            <li>Automated dataset search and EDA workflow.</li>
            <li>Generated plain-language insights with Gemini.</li>
            <li>Compared multiple models in one pipeline.</li>
          </ul>
          <div class="tech-tags">
            <span>Python</span><span>Gemini API</span><span>Kaggle API</span><span>Pandas</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/AI-Data-Science-Research-Assistant" target="_blank" rel="noopener">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/ai-research-assistant/">Project Details</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/healthcare-ai.svg" alt="HealthCare AI Guardian thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>HealthCare AI Guardian</h3>
          <ul class="project-points">
            <li>Built preventive healthcare prediction platform.</li>
            <li>Integrated 3 disease models with fast API flow.</li>
            <li>Won 1st place at VOID Hackathon.</li>
          </ul>
          <div class="tech-tags">
            <span>React</span><span>Node.js</span><span>Flask</span><span>MongoDB</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/HealthCare-AI-Guardian" target="_blank" rel="noopener">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/healthcare-ai-guardian/">Project Details</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/deepfake.svg" alt="DeepFake project thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Deepfake Detection System</h3>
          <ul class="project-points">
            <li>Developed CV pipeline for forged media analysis.</li>
            <li>Improved detection quality via augmentation.</li>
            <li>Evaluated with precision, recall, and F1.</li>
          </ul>
          <div class="tech-tags">
            <span>Python</span><span>OpenCV</span><span>TensorFlow</span><span>Xception</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/DeepFake" target="_blank" rel="noopener">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/deepfake-analysis/">Project Details</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/smart-traffic.svg" alt="Smart traffic management system thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Smart Traffic Management</h3>
          <ul class="project-points">
            <li>Detected emergency vehicles in real time.</li>
            <li>Applied traffic signal priority rules.</li>
            <li>Integrated alerts with simulation pipeline.</li>
          </ul>
          <div class="tech-tags">
            <span>Python</span><span>YOLO</span><span>OpenCV</span><span>NumPy</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="{{ base_path }}/portfolio/smart-traffic-management/">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/smart-traffic-management/">Project Details</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/nasa-meteorite.svg" alt="NASA Meteorite analysis thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>NASA Meteorite Analysis</h3>
          <ul class="project-points">
            <li>Processed 45K+ records for trend discovery.</li>
            <li>Analyzed region-wise fall patterns.</li>
            <li>Built visuals for fast stakeholder insights.</li>
          </ul>
          <div class="tech-tags">
            <span>Python</span><span>Pandas</span><span>Matplotlib</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/NASA-Meteorite" target="_blank" rel="noopener">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/nasa-meteorite-analysis/">Project Details</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="{{ base_path }}/images/projects/adidas-sales.svg" alt="Adidas sales analysis thumbnail" class="project-thumb">
        <div class="project-content">
          <h3>Adidas Sales Intelligence</h3>
          <ul class="project-points">
            <li>Analyzed 9.6K retail sales records.</li>
            <li>Identified high-performing regions and channels.</li>
            <li>Delivered dashboard-style visual summaries.</li>
          </ul>
          <div class="tech-tags">
            <span>Python</span><span>NumPy</span><span>Pandas</span><span>Matplotlib</span>
          </div>
          <div class="project-actions">
            <a class="project-btn primary" href="https://github.com/Sarthakm811/adidas-us-sales-" target="_blank" rel="noopener">GitHub</a>
            <a class="project-btn" href="{{ base_path }}/portfolio/adidas-sales-analysis/">Project Details</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Proof Section -->
  <section id="achievements" class="section-block fade-in" data-section>
    <h2 class="section-title">Proof & Achievements</h2>
    <p class="section-subtitle">Compact evidence of capability and project outcomes.</p>

    <div class="metrics-grid">
      <article class="metric-card"><h3 class="metric-value">4+ ML Projects</h3><p class="metric-label">Delivered ML solutions end-to-end.</p></article>
      <article class="metric-card"><h3 class="metric-value">Fraud Detection System</h3><p class="metric-label">Focused project in anomaly and risk scoring workflows.</p></article>
      <article class="metric-card"><h3 class="metric-value">Deepfake Detection Project</h3><p class="metric-label">Computer vision based authenticity analysis pipeline.</p></article>
      <article class="metric-card"><h3 class="metric-value">Hackathon Participation</h3><p class="metric-label">High-pressure solution delivery and team execution.</p></article>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section-block fade-in" data-section>
    <h2 class="section-title">Contact</h2>
    <p class="section-subtitle">Open for internships, freelance work, and full-time AI/ML roles.</p>

    <div class="contact-grid">
      <div>
        <ul class="contact-links">
          <li><a href="mailto:sarthakm811@gmail.com"><i class="fas fa-envelope" aria-hidden="true"></i> sarthakm811@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/sarthak-mahajan-b5926a296" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i> linkedin.com/in/sarthak-mahajan-b5926a296</a></li>
          <li><a href="https://github.com/Sarthakm811" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> github.com/Sarthakm811</a></li>
        </ul>
      </div>

      <form class="contact-form" action="mailto:sarthakm811@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="Your email" required>
        <textarea name="message" placeholder="Tell me about your project" required></textarea>
        <button class="portfolio-btn portfolio-btn--primary" type="submit">Send Message</button>
      </form>
    </div>
  </section>
</main>

<script src="{{ base_path }}/assets/js/portfolio-redesign.js" defer></script>
