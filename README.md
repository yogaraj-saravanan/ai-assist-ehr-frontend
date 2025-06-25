# AI Assist EHR - Frontend

This is a mock frontend built with **Next.js** and **Tailwind CSS** to interact with the backend API of the **AI Assist EHR** project.

The frontend allows users to schedule appointments using natural language input, simulating how an AI assistant would process appointment requests.

---

## 🚀 Features

- ✍️ Simple text-based appointment scheduling
- 🔗 Connects to the backend API (`/ai/process`)
- 📜 Displays API responses in a clean UI
- 🧪 Useful for testing backend APIs with a lightweight frontend

---

## 🏗️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React (App Router)

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yogaraj-saravanan/ai-assist-ehr-frontend.git
cd ai-assist-ehr-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Frontend will be running on:

```
http://localhost:3000
```

---

## 🔗 Backend API Configuration

Make sure your backend is running (typically on port `3001`).

The API endpoint expected by the frontend is:

```
POST http://localhost:3001/ai/process
```

### ✅ Example Request Body:

```json
{
  "input": "John Doe comes at 10 AM tomorrow for therapy"
}
```

### ✅ Example Response:

```json
{
  "patient": { ... },
  "episode": { ... },
  "appointment": { ... }
}
```

> The frontend will display this response directly.

---

## 🗺️ Project Structure

```
/app
  /appointments   → Appointment scheduler page
  layout.tsx      → Root layout
  page.tsx        → Home page
/public
/styles
  globals.css     → Tailwind CSS styles
```

---

## 🎯 Future Improvements (Optional)

- List all appointments in a table view
- Add success/error banners
- Deploy to Vercel or Netlify
- Add more API testers for different endpoints

---

## 📜 License

MIT License
