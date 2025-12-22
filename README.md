# 🐍 Py-React Integration Project ⚛️

Welcome to **Py-React**, a robust full-stack web application combining the power of **Django** for the backend and the dynamic interactivity of **React** for the frontend.

## 🌟 Project Overview

This project demonstrates a seamless integration between a Python-based REST API and a modern JavaScript UI. It features secure user authentication (JWT), responsive design, and a scalable folder structure.

## ✨ Key Features

*   **🔐 Authentication**: Secure Signup & Login utilizing JWT (JSON Web Tokens).
*   **🔌 API Integration**: React components communicating with Django via Axios.
*   **📱 Responsive Design**: Built with mobile-first principles.
*   **⚡ Modern Tooling**: Powered by Vite for lightning-fast frontend development.
*   **🛡️ Secure Backend**: Django Rest Framework ensuring safe data handling.

## 🛠️ Tools & Technologies Used

### Frontend (Client-Side) 🖥️
*   **React** ⚛️: UI Library
*   **Vite** ⚡: Next Generation Frontend Tooling
*   **Axios** 📡: Promise based HTTP client
*   **React Router** 🛣️: Declarative routing
*   **Framer Motion** 🎬: Production-ready animation library
*   **Lucide React** 🎨: Beautiful & consistent icons
*   **Vanilla CSS** 💅: Custom styling with CSS variables

### Backend (Server-Side) ⚙️
*   **Python** 🐍: Core programming language
*   **Django** 🎸: The web framework for perfectionists with deadlines
*   **Django Rest Framework (DRF)** 📨: Toolkit for building Web APIs
*   **Simple JWT** 🎫: JSON Web Token authentication
*   **SQLite** 🗃️: Lightweight database (default)

## 📂 Project Structure

```bash
react-py/
├── 📂 backend/           # Django Application
│   ├── 📂 api/           # API Views & Serializers
│   ├── 📂 config/        # Project Settings
│   ├── manage.py         # Django CLI utility
│   └── requirements.txt  # Python dependencies
├── 📂 frontend/          # React Application
│   ├── 📂 src/           # Components, Pages, & Logic
│   ├── 📂 public/        # Static assets
│   ├── package.json      # Node.js dependencies
│   └── vite.config.js    # Vite configuration
└── README.md             # Project Documentation
```

## 🚀 Installation & Setup

Follow these steps to get the project running on your local machine.

### 1. Backend Setup (Django)

Navigate to the backend folder and create a virtual environment:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:
*   **Windows**: `venv\Scripts\activate`
*   **Mac/Linux**: `source venv/bin/activate`

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations and start the server:

```bash
python manage.py migrate
python manage.py runserver
```
*The backend runs at `http://127.0.0.1:8000/`*

### 2. Frontend Setup (React)

Open a new terminal, navigate to the frontend folder:

```bash
cd frontend
```

Install Node.js dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
*The frontend runs at `http://localhost:5173/` (typically)*

## 📝 Process Refinement

1.  **Initialization**: Created separate environments for React (Vite) and Django.
2.  **Configuration**: Set up CORS policies in Django to accept cross-origin requests from the React dev server.
3.  **Development**: Built modular React components (`Navbar`, `Signup`, etc.) and connected them to Django API endpoints.
4.  **Security**: Implemented JWT for stateful authentication without session cookies.
5.  **Organization**: Restructured into clear `frontend` and `backend` directories for easier deployment and maintenance.

## 👨‍💻 Author

**Bammidi Himanth**

---
*Created with ❤️ using React & Django*
