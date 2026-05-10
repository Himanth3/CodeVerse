# 🌌 CodeVerse ⚛️🍃

Welcome to **CodeVerse** — a full-stack Learning Management System (LMS) built with **React** on the frontend and **Spring Boot** on the backend. CodeVerse empowers developers to learn programming through interactive courses, quizzes, downloadable resources, and a stunning space-themed UI.

---

## 🌟 Project Overview

CodeVerse is a modern, space-themed coding education platform that integrates a **React + Vite** frontend with a **Java 21 / Spring Boot** REST API backend. It features secure JWT-based authentication, a rich course catalog, interactive quizzes, and a persistent light/dark mode — all wrapped in a cinematic design with glowing accents and smooth animations.

---

## ✨ Key Features

- 🔐 **Authentication** — Secure Signup & Login using JWT (JSON Web Tokens)
- 📚 **Course Catalog** — Browse courses in Java, Python, DSA, Git, REST APIs, Spring Boot
- 🧠 **Quizzes** — Interactive knowledge checks after each lesson
- 📥 **Downloads** — Cheat sheets and study material downloads
- 🚀 **Projects Showcase** — Student and demo project gallery
- 📬 **Contact Page** — Support and inquiry form
- 👤 **User Profile** — Personalized authenticated user profile
- 🌗 **Dark / Light Mode** — Persistent theme toggle across all pages
- 🌌 **Space-Themed UI** — Glowing neon accents, floating animations, and cosmic aesthetics
- 📱 **Responsive Design** — Mobile-first, works on all screen sizes

---

## 🛠️ Tools & Technologies Used

### 🖥️ Frontend (React + Vite)

| Technology         | Version    | Purpose                                        |
|--------------------|------------|------------------------------------------------|
| **React**          | 18.x       | UI component library                           |
| **Vite**           | 5.x        | Fast build tool and dev server                 |
| **React Router Dom** | 6.x     | Client-side routing and navigation             |
| **Framer Motion**  | 12.x       | Animations and page transitions                |
| **Lucide React**   | 0.344.x    | Modern icon library                            |
| **Axios**          | 1.x        | HTTP client for backend API communication      |
| **Vanilla CSS**    | —          | Custom styling with CSS variables for theming  |

### ⚙️ Backend (Java 21 + Spring Boot)

| Technology              | Purpose                                        |
|-------------------------|------------------------------------------------|
| **Java 21**             | Core programming language                      |
| **Spring Boot 4.x**     | Application framework                          |
| **Spring Web MVC**      | Building RESTful API endpoints                 |
| **Spring Security**     | Authentication and access-control              |
| **Spring Data JPA**     | ORM and database interaction (Hibernate)       |
| **H2 Database**         | In-memory database for local development       |
| **JWT (jjwt 0.12.5)**   | Stateless token-based authentication           |
| **Lombok**              | Boilerplate reduction (getters/setters/builders)|
| **Spring Boot DevTools**| Hot reload during development                  |
| **Maven**               | Dependency management and build tool           |

---

## 📂 Project Structure

```bash
CodeVerse/
├── 📂 backend/                        # Spring Boot Application
│   ├── 📂 src/main/java/com/pycoder/backend/
│   │   ├── 📂 config/                 # Security & CORS Configuration
│   │   ├── 📂 controller/             # REST API Endpoints
│   │   ├── 📂 model/                  # JPA Entities (User, etc.)
│   │   ├── 📂 repository/             # Spring Data JPA Repositories
│   │   └── 📂 security/               # JWT Filter & Auth Services
│   ├── 📂 src/main/resources/
│   │   └── application.properties     # Spring Boot config
│   ├── pom.xml                        # Maven Dependencies
│   └── mvnw / mvnw.cmd                # Maven Wrapper
│
├── 📂 frontend/                       # React Application (Vite)
│   ├── 📂 src/
│   │   ├── 📂 api/                    # Axios instance & API calls
│   │   ├── 📂 components/             # Navbar, Footer, MotivationHero
│   │   ├── 📂 data/                   # Static course data (courses.js)
│   │   └── 📂 pages/                  # Home, Courses, Quiz, Login, etc.
│   ├── 📂 public/                     # Static assets (images, icons)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── DEPLOYMENT.md
└── project.txt
```

---

## 📚 Courses Offered

| # | Course | Topics Covered |
|---|--------|----------------|
| 1 | **Core Java Programming** | OOP, Data Types, Exception Handling, Multithreading |
| 2 | **Java + DSA** | Arrays, Trees, Graphs, Sorting, DP |
| 3 | **Git & GitHub Mastery** | Version Control, Branching, Pull Requests, Open Source |
| 4 | **Building REST APIs** | HTTP Methods, JSON, Spring Boot, Postman |
| 5 | **Basic Python** | Variables, Loops, Functions, File Handling |
| 6 | **Spring Boot Backend** | DI, JPA, Spring Security, JWT, Microservices |

---

## 🚀 Installation & Setup

### Prerequisites
- **Java 21** (JDK) installed
- **Node.js 18+** and **npm** installed
- A terminal (PowerShell, Bash, etc.)

---

### 1️⃣ Backend Setup (Spring Boot)

Navigate to the backend folder:

```bash
cd backend
```

Start the Spring Boot app using the Maven wrapper:

- **Windows:**
```powershell
.\mvnw.cmd spring-boot:run
```
- **Mac / Linux:**
```bash
./mvnw spring-boot:run
```

> ✅ Backend runs at **`http://localhost:8080`**
> 
> 💾 Uses an **H2 in-memory database** — no external DB setup required.

---

### 2️⃣ Frontend Setup (React + Vite)

Open a **new terminal**, navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

> ✅ Frontend runs at **`http://localhost:5173`**

---

## 🔐 Authentication Flow

1. User submits credentials on the **Login / Signup** page
2. Spring Security validates credentials and returns a **JWT access token**
3. React stores the token in `localStorage`
4. All subsequent protected API requests include the token via **Axios interceptors**

---

## 📝 Development Notes

1. **CORS** — Spring Boot is configured to allow cross-origin requests from `http://localhost:5173`
2. **JWT Secret** — Configured in `application.properties` (use env variable in production)
3. **H2 Console** — Available at `http://localhost:8080/h2-console` for local DB inspection
4. **Vite Proxy** — Can be optionally configured in `vite.config.js` to proxy API requests

---

## 👨‍💻 Author

**Bammidi Himanth**

---

*Built with ❤️ using React ⚛️ & Spring Boot 🍃 — CodeVerse 🌌*
