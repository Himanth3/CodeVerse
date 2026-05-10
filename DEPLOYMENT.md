# CodeVerse — Deployment Guide 🚀🌌

This guide provides step-by-step instructions for deploying the **CodeVerse** application:
- 🍃 **Spring Boot Backend** → [Render](https://render.com/)
- ⚛️ **React Frontend** → [Vercel](https://vercel.com/)

---

## Prerequisites

Before deploying, make sure you have:
- ✅ A **GitHub** account with the CodeVerse project pushed to a repository
- ✅ A **Render** account (free tier works)
- ✅ A **Vercel** account (free tier works)

---

## 1. 🍃 Backend Deployment (Spring Boot → Render)

### Step 1: Build the JAR Locally (Verify First)

Test that the backend builds successfully before deploying:

```powershell
# Windows
cd backend
.\mvnw.cmd clean package -DskipTests
```

```bash
# Mac / Linux
cd backend
./mvnw clean package -DskipTests
```

This produces: `backend/target/backend-0.0.1-SNAPSHOT.jar`

---

### Step 2: Create a Web Service on Render

1. Go to your [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Web Service**
3. Connect your **GitHub repository**
4. Configure the service:

| Setting | Value |
|---------|-------|
| **Name** | `codeverse-backend` |
| **Region** | Closest to you (e.g., Singapore) |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | **Docker** |
| **Instance Type** | Free |

> ℹ️ Render will automatically detect the `Dockerfile` in your `backend` directory and build the Spring Boot image.

---

### Step 3: Configure Environment Variables

In your Render Web Service → **Environment** tab, add:

| Key | Value | Description |
|-----|-------|-------------|
| `JAVA_VERSION` | `21` | Java runtime version |
| `JWT_SECRET` | `your-very-strong-secret-key-here` | Secret for signing JWT tokens — **keep private!** |
| `SPRING_PROFILES_ACTIVE` | `prod` | Activates production profile |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:5173` | Temporary — update after deploying frontend |

> ⚠️ **Never commit secrets to GitHub.** Always use environment variables for `JWT_SECRET`.

---

### Step 4: Deploy & Verify

1. Click **Create Web Service** — Render will build and deploy automatically
2. Wait for the deployment to finish (usually 3–5 minutes)
3. Render provides a URL like: `https://codeverse-backend.onrender.com`
4. **Copy this URL** — you'll need it for the frontend configuration

Test the backend is live:
```
GET https://codeverse-backend.onrender.com/api/health
```

---

## 2. ⚛️ Frontend Deployment (React → Vercel)

### Step 1: Import Project on Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New…** → **Project**
3. Import your **GitHub repository**

---

### Step 2: Configure Build Settings

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Vite` (auto-detected) |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

---

### Step 3: Add Environment Variables

In Vercel → **Environment Variables**, add:

| Key | Value | Description |
|-----|-------|-------------|
| `VITE_API_URL` | `https://codeverse-backend.onrender.com` | Your Render backend URL (**no trailing slash**) |

> ℹ️ In your React code, access it as `import.meta.env.VITE_API_URL`

---

### Step 4: Deploy

1. Click **Deploy**
2. Wait for the Vite build to complete (~1–2 minutes)
3. Vercel gives you a domain like: `https://codeverse.vercel.app`
4. **Copy this URL**

---

## 3. 🔗 Final CORS Configuration

Now that the frontend is live, update the backend to trust it:

1. Go to **Render Dashboard** → your `codeverse-backend` service
2. Go to **Environment** → edit `CORS_ALLOWED_ORIGINS`
3. Replace with your Vercel frontend URL:

```
CORS_ALLOWED_ORIGINS=https://codeverse.vercel.app
```

> ⚠️ **No trailing slash** at the end of the URL.

4. Click **Save** — Render will automatically redeploy the backend.

---

## 4. ✅ API Endpoints Reference

Once deployed, the CodeVerse API is available at:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT token |
| `GET`  | `/api/courses` | Get all courses (public) |
| `GET`  | `/api/courses/{id}` | Get a specific course |

> 🔐 Protected endpoints require the `Authorization: Bearer <token>` header.

---

## 5. 🖥️ Running Locally (Quick Reference)

```bash
# Terminal 1 — Start Backend (Spring Boot)
cd backend
.\mvnw.cmd spring-boot:run        # Windows
./mvnw spring-boot:run            # Mac/Linux

# Terminal 2 — Start Frontend (React + Vite)
cd frontend
npm install
npm run dev
```

| Service | Local URL |
|---------|-----------|
| Backend (Spring Boot) | `http://localhost:8080` |
| Frontend (React) | `http://localhost:5173` |
| H2 Database Console | `http://localhost:8080/h2-console` |

---

## 👨‍💻 Author

**Bammidi Himanth** — CodeVerse 🌌

---

*Deployed with ❤️ using React ⚛️ + Spring Boot 🍃*
