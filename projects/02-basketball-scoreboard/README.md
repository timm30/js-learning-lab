# Score Board Example

A simple scoreboard demo that shows how HTML, CSS, and JavaScript work together: button-driven score updates, DOM synchronization, and a visual leader highlight.

**Features**
- **Live scoring**: Click buttons to add 1, 2, or 3 points to HOME or GUEST.
- **New game (reset)**: Click `NEW GAME` to reset both scores to zero.
- **Leader highlight**: The current leader gets a glowing animation via the `.leading` class.
- **No dependencies**: Pure front-end (HTML/CSS/JS), works by opening `index.html` in a browser.

**Key Takeaways**
- **HTML structure & event binding**: Buttons use `onclick` to call `addHome()`, `addGuest()`, and `resetScore()`, demonstrating how UI events trigger logic.
- **DOM manipulation**: `document.getElementById()` and `textContent` are used to update the visible scores.
- **Simple state management**: `homeScore` and `guestScore` variables hold app state; updating them and the DOM shows the basic state → UI loop.
- **Conditional styling**: `classList.add()` / `classList.remove()` toggles the `.leading` class to provide visual feedback for the leader.
- **CSS animation & visuals**: `@keyframes` and `box-shadow` create the glow effect that improves user experience.

**How to use**
1. Open `index.html` in your browser (double-click or serve with a static server).
2. Use the HOME / GUEST buttons to increase scores.
3. Click `NEW GAME` to reset scores and clear the leader highlight.

**Files**
- `index.html` — page structure and button event bindings.
- `index.css` — layout, colors, and the `.leading` animation.
- `index.js` — scoring logic, DOM updates, and leader detection.

---
