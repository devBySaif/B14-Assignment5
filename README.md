# DevStack

DevStack is a React and TypeScript web app for exploring modern developer tools and building your own personal technology stack. It shows a curated catalog of real-world tools with search and category filtering, and lets you add or remove tools from a live "Your Stack" panel with instant toast feedback.

## Technologies Used

- React 19 with TypeScript
- Vite
- Tailwind CSS and DaisyUI
- Lucide React icons
- React Toastify
- JSON-driven technology data

## Key Features


1. Add or remove technologies from a live personal stack, with toast notifications for add, duplicate-add attempts, remove, and remove-all.
2. Fully responsive layout with a loading state while data is fetched, and a single reusable orange → pink → violet gradient theme used across the brand name, hero heading, and primary buttons.

## Run Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets me write HTML-like markup directly inside JavaScript/TypeScript code. React converts this markup into the actual UI elements it needs to render. I used it throughout DevStack — for example, the `TechCard` component returns JSX describing the icon, name, badge, and button together, which makes it much easier to see what a component looks like without jumping between separate template and logic files.

### 2. What is the difference between props and state?

Props are values passed into a component from its parent, and a component should treat them as read-only. State is data that belongs to the component itself and can change over time, and whenever it changes, React re-renders that part of the UI. In DevStack, each `TechCard` receives its technology data as props from the parent, while the list of selected technologies (the stack) is kept as state in `App`.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a function component hold and update data that can change while the app is running. It returns the current value and a setter function, and calling the setter tells React to re-render with the new value. I used `useState` in DevStack to store the search query, the selected category filter, the loading status, and — most importantly — the array of technologies currently added to "Your Stack".

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs a piece of code after a component renders, which makes it the right place for anything that isn't part of calculating the UI itself, like fetching data or starting a timer. I used `useEffect` in DevStack to load the technologies from the local JSON file when the app first mounts: it sets `loading` to `true`, simulates fetching the data, stores the result in state, and then sets `loading` to `false` once it's ready — which is what powers