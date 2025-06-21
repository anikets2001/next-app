/* ---

1. What is 'use client' ?
- It tells next js that this component should be rendered on the client-side not the server side
- It should be the first line of a component event above the imports

2. Why 'use client' is required?

Next.js 13+ introduces React Server Components by default in the app/ directory.
Server Components: Run on the server (do not include any client-side JS).
Client Components: Run in the browser, support interactivity (useState, useEffect, event handlers, etc.)

If your component uses:
useState, useEffect, useRef, useContext, etc.
onClick, onChange, or any browser events
Then you must declare it with 'use client'.

---*/