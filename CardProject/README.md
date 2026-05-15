## 🧭 `CardProject` — Job Board

A clean and modern job listing platform that displays real-world-style job cards from top tech companies like Google, Amazon, Meta, Apple, Netflix, and more.

### 🖼️ Preview

![Job Board Preview](./CardProject/src/assets/JobPreview.jpeg)

### ✨ Features

- 📋 **Job Cards** — Each card displays the company logo, job title, employment type, experience level, salary, and location
- 🏢 **Top Companies** — Listings from Google, Amazon, Meta, Apple, Netflix, Microsoft, Tesla, Adobe, Oracle, and Salesforce
- 💾 **Save Jobs** — Save button on each card to bookmark preferred listings
- 🎯 **Experience Levels** — Clearly labeled as Junior, Mid, or Senior Level
- ⏱️ **Posted Time** — Shows how recently each job was posted (e.g. "3 days ago")
- 📍 **Location Info** — Displays city/country or Remote status
- 🟢 **Apply Now** — Prominent call-to-action button on every card
- 📱 **Responsive Grid Layout** — Cards arranged in a clean multi-column grid

### 🏗️ Project Structure

```
CardProject/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Card.jsx       # Individual job listing card
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

### 🚀 Getting Started

```bash
# Navigate into the project
cd CardProject

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 💡 Key React Concepts Used

- **Component-based architecture** — Reusable `JobCard` component for each listing
- **Props** — Passing job data (title, company, salary, location, etc.) as props
- **Array `.map()`** — Rendering job cards dynamically from a data array
- **Conditional rendering** — Showing different badge styles per experience level

### 📦 Sample Job Data Structure

```js
{
  company: "Google",
  logo: "/logos/google.png",
  title: "Frontend Developer",
  postedAt: "5 days ago",
  type: "Full Time",
  level: "Junior Level",
  salary: "$45",
  location: "Bangalore, India"
}
```

---