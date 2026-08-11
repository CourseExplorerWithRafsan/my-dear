/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #222;
    background: #f5f7fa;
}

/* Navigation */
header {
    background: #111827;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    max-width: 1100px;
    margin: auto;
    padding: 18px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
    font-size: 24px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.nav-links a:hover {
    color: #60a5fa;
}

/* Hero */
.hero {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: linear-gradient(
        135deg,
        #2563eb,
        #7c3aed
    );

    color: white;
    padding: 40px 20px;
}

.hero h2 {
    font-size: 50px;
    margin-bottom: 15px;
}

.hero h2 span {
    color: #facc15;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
}

/* Buttons */
.btn,
.project-btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;

    background: #2563eb;
    color: white;

    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
}

.hero .btn {
    background: white;
    color: #2563eb;
}

.btn:hover,
.project-btn:hover {
    opacity: 0.85;
}

/* Sections */
.section {
    max-width: 1100px;
    margin: auto;
    padding: 80px 20px;
}

.section > h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
}

/* About */
.about-content {
    max-width: 800px;
    margin: auto;
    background: white;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.about-content h3 {
    margin-bottom: 15px;
    font-size: 25px;
}

.about-content p {
    margin-bottom: 15px;
}

/* Projects */
.projects-section {
    max-width: 1200px;
}

.project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.project-card {
    background: white;
    padding: 30px;
    border-radius: 10px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-8px);
}

.project-card h3 {
    margin-bottom: 15px;
}

.project-card p {
    margin-bottom: 20px;
}

/* Contact */
.contact-form {
    max-width: 650px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 14px;

    border: 1px solid #ddd;
    border-radius: 6px;

    font-size: 16px;
    font-family: inherit;
}

.contact-form textarea {
    resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #2563eb;
}

#formMessage {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
}

/* Footer */
footer {
    background: #111827;
    color: white;
    text-align: center;
    padding: 25px;
}

/* Responsive Design */
@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        gap: 15px;
    }

    .hero h2 {
        font-size: 36px;
    }

    .project-container {
        grid-template-columns: 1fr;
    }
} 
