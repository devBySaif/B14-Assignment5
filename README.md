# Stacksmith

Stacksmith is a React and TypeScript workspace for exploring modern developer tools and curating a personal technology stack. It presents a focused catalog of real tools with quick filtering and a live stack builder.

## Technologies Used

- React 19 with TypeScript
- Vite
- Tailwind CSS and DaisyUI
- Lucide React icons
- React Toastify
- JSON-driven technology data

## Key Features

1. Search the catalog and filter tools by category.
2. Add or remove technologies from a live personal stack with toast feedback.
3. Responsive navigation, loading skeletons, mobile layout, and a reusable orange-to-pink-to-violet theme.

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

### 1. What is JSX, and why is it used?

JSX is a syntax that lets us write markup-like elements inside TypeScript or JavaScript. React turns that syntax into the elements it needs to render. It keeps a component's layout and behavior close together, which makes UI code easier to read.

### 2. What is the difference between props and state?

Props are values passed into a component by its parent. A component reads props but should not change them. State belongs to the component and can change over time; changing state causes React to render the affected UI again.

### 3. What is `useState` and how does it work?

`useState` is a React Hook for storing changing data in a function component. It returns the current value and a setter function. Calling the setter schedules a new render with the updated value, which is how Stacksmith keeps the selected stack in sync.

### 4. What is `useEffect` and when should it be used?

`useEffect` runs code after React has rendered a component. It is useful for work that touches something outside the render calculation, such as a timer, browser API, subscription, or data request. Stacksmith uses it for the short initial loading state and cleans up the timer when needed.

### 5. How do you share state between components?

Keep the shared state in the nearest common parent and pass the current value and event handlers down as props. In this app, `App` owns the selected technologies, while the cards and sidebar receive the data and callbacks they need.

### 6. What is a controlled component?

A controlled component gets its displayed value from React state and reports user changes through an event handler. The search input is controlled: its value comes from `query`, and typing calls `setQuery`.

### 7. Why are keys needed when rendering lists?

Keys give React a stable identity for each item in a list. They help React understand which item was added, removed, or changed, so it can update the DOM efficiently and preserve the right element state. Stacksmith uses each technology's stable `id` as its key.
