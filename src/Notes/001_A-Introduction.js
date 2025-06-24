/*---
Next js front-end topics

| Category               | Concept                                                             | Covered?                    |
| ---------------------- | ------------------------------------------------------------------- | --------------------------- |
| 🔁 Routing             | File-based routing, nested routes, dynamic routes, catch-all routes | ✅                         |
| 📦 Layouts             | Root layout, nested layouts, `layout.js`, shared UI                 | ✅                         |
| 🧠 Components          | Client vs Server components, `use client`                           | ✅                         |
| 📄 Pages               | `page.js`, error pages, loading & not-found pages                   | ✅                         |
| 🧭 Navigation          | `Link`, `useRouter`, programmatic navigation                        | ✅                         |
| 🧱 Styling             | Global CSS, CSS modules, plain CSS, Tailwind/MUI (if used)          | ✅                         |
| 🖼️ Images             | `<Image>` component, optimization, responsive images                 | ✅                         |
| 🔠 Fonts               | `next/font`, font optimization, Google Fonts                        | ✅                         |
| 🌐 Metadata            | `generateMetadata`, dynamic metadata, SEO setup                     | ✅                         |
| 🌍 Env Variables       | `.env`, `NEXT_PUBLIC_`, secure configs                              | ✅                         |
| 🚫 Middleware          | `middleware.js`, route protection, redirection                      | ✅                         |
| 📤 Pre-rendering       | SSR, SSG, static params, revalidation                               | ✅                         |
| 🚀 Deployment          | Vercel, custom domains, CI/CD triggers                              | ✅                         |
| ⚙ Error Handling       | `error.js`, `not-found.js`, `loading.js`                            | ⚠️ *(check below)*         |
| 🔄 Revalidation        | ISR (Incremental Static Regeneration)                               | ⚠️ *(optional)*            |
| 🧬 `use` Hook          | `use(params)`, streaming support                                    | ⚠️ \*(new in Next.js 14+)  |
| 🔁 Parallel Routes     | Multiple layouts on same path                                       | ❌ (advanced)              |
| 🧭 Intercepting Routes | Showing modals over existing pages                                  | ❌ (advanced)              |

---*/

/*---
Next js Backend topics

| 🧩 Concept                           | ✅ What It Is                                            | 🚀 Use Case                                      |
| ------------------------------------ | ------------------------------------------------------- | -------------------------------------------------- |
| **1. API Routes** (`app/api/`)       | Server-side functions (GET, POST, etc.)                 | Create custom backend endpoints inside Next.js     |
| **2. Server Actions**                | Mutate server data directly from UI (new in App Router) | Form submissions, DB inserts, updates              |
| **3. `generateStaticParams()`**      | Defines which dynamic routes to pre-render              | Needed for SSG in dynamic pages                    |
| **4. `revalidate` (ISR)**            | Incremental Static Regeneration                         | Auto-refresh static data without rebuild           |
| **5. Middleware**                    | Runs before request hits a route                        | Auth guards, logging, IP blocking                  |
| **6. Environment Variables**         | Secrets and configs (server-only or public)             | API keys, database URLs                            |
| **7. Database Integration**          | Connect with MongoDB, PostgreSQL, MySQL, Prisma         | CRUD, user data, content systems                   |
| **8. Server-side Fetching**          | `fetch()` in server components/API routes               | Secure API calls with secrets                      |
| **9. Authentication (next-auth)**    | Full user login system                                  | Login, logout, role-based access                   |
| **10. Sessions / Cookies**           | Store user sessions securely                            | Track logged-in users across pages                 |
| **11. Error Handling**               | `try/catch`, custom API error responses                 | Return 500, 401, 404 status codes                  |
| **12. API Validation**               | Validate request body/query params                      | Secure inputs using Zod, Yup, etc.                 |
| **13. File Uploads**                 | Upload files to server or storage bucket                | User avatars, documents, etc.                      |
| **14. Rate Limiting**                | Throttle request counts                                 | Prevent abuse on public APIs                       |
| **15. Caching (Headers or Redis)**   | Cache responses for speed                               | Reduce DB/API load                                 |
| **16. Webhooks**                     | Handle events from external systems                     | Stripe, GitHub, CMS integration                    |
| **17. Background Jobs (with queue)** | Trigger async processing                                | Email sending, PDF generation                      |
| **18. Deployment Backends**          | Run backend on Vercel, or separate servers (if needed)  | Use Vercel Edge/Serverless or custom Node backends |

---*/