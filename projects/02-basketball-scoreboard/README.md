# 🏀 Scoreboard App

A simple yet interactive scoreboard built with **HTML, CSS, and JavaScript** — designed to demonstrate how UI, state, and logic come together in a real application.

---

## ✨ Demo Highlights

- 🎯 **Live Scoring**  
  Add points in real-time with `+1`, `+2`, `+3` buttons.

- 🔄 **New Game Reset**  
  Instantly reset both teams to 0 with a single click.

- 🔥 **Dynamic Leader Glow**  
  The leading team is automatically highlighted with a glowing animation.

- ⚡ **Zero Dependencies**  
  Pure front-end — no frameworks, no libraries. Just open and run.

---

## 🧠 What This Project Teaches

This project is small, but it covers **core front-end fundamentals**:

### 1️⃣ State → UI Flow

```
Score (state) → Logic (JS) → Visual Update (DOM)
```

- `homeScore` / `guestScore` act as the **source of truth**
- UI updates based on state changes

---

### 2️⃣ DOM Manipulation

- `document.getElementById()`
- `.textContent`
- `.classList.add()` / `.remove()`

👉 Learn how JavaScript directly controls what users see.

---

### 3️⃣ Event-Driven Programming

```html
<button onclick="addHome(1)"></button>
```

- User actions trigger functions
- Functions update state and UI

---

### 4️⃣ Conditional Rendering (Vanilla JS style)

```js
if (homeScore > guestScore) {
  homeBoard.classList.add('leading')
}
```

👉 UI reacts to logic — just like React (but manual)

---

### 5️⃣ CSS Animations & Visual Feedback

- `@keyframes`
- `box-shadow`
- `.leading` class

👉 Learn how styling can enhance user experience (UX)

---

## 🧩 How It Works (Architecture)

```
HTML → Defines structure (who/what)
CSS  → Defines appearance (how it looks)
JS   → Controls behavior (when things change)
```

---

## 🌐 Live Demo

👉 https://easy-basketball-scoreboard.netlify.app/

Try it directly in your browser — no setup needed.

---

## 🚀 How to Run

1. Clone or download the repo
2. Open `index.html` in your browser

That's it 🎉

---

## 📁 Project Structure

```
.
├── index.html   # Structure + event bindings
├── index.css    # Layout + glow animation
└── index.js     # Logic + state + DOM updates
```

---

## 💡 Why This Project Matters

This project demonstrates a key concept:

```
UI = f(state)
```

Even without frameworks, you are already practicing:

- State management
- Reactive UI thinking
- Component-like structure

👉 This is the **foundation of React, Vue, and modern front-end development**

---

## 🔥 Possible Improvements

- ⏱ Add a game timer (e.g. 24s / countdown)
- 🏆 Show winner screen when game ends
- 🎨 Improve UI with transitions / sound effects
- ⚛️ Convert to React (component-based version)

---

## 👨‍💻 Author Notes

Built as part of learning:

- JavaScript fundamentals
- DOM manipulation
- UI state synchronization
