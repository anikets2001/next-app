/*---
What is rendering in Next.js ?
Rendering = 'generating HTML from react components'

Next.js supports multiple rendering methods depending on:
Where the HTML is generated (Server or Client)
When the HTML is generated (build time or request time)

Four main Type of rendering in Next.js
| Type                                      | Where?                    | When?                             | Best For                  |
| ----------------------------------------- | ------------------------- | --------------------------------- | ------------------------- |
| **Static Generation (SSG)**               | Server (at build time)    | Before deployment                 | Blogs, docs               |
| **Server-Side Rendering (SSR)**           | Server (on every request) | At request time                   | Auth pages, dashboards    |
| **Client-Side Rendering (CSR)**           | Browser                   | After page loads                  | Dynamic user interactions |
| **Incremental Static Regeneration (ISR)** | Server                    | After initial build, periodically | E-commerce, marketing     |

---*/

/*---
🔍 1. Static Generation (SSG)
HTML is pre-rendered at build time

Very fast and cached by CDN

// pages/blog/[id].js (Pages Router)
export async function getStaticProps() {
  const data = await fetch(...);
  return { props: { data } };
}

---*/

/*---
🔍 2. Server-Side Rendering (SSR)
HTML is generated on every request

Good for real-time, personalized content

// pages/dashboard.js (Pages Router)
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return { props: { session } };
}
---*/

/*---
🔍 3. Client-Side Rendering (CSR)
Only sends minimal HTML

React takes over and fetches/render content on the client

// useEffect is used on the client side
'use client';
useEffect(() => {
  fetchData().then(setData);
}, []);

---*/

/*---
🔍 4. Incremental Static Regeneration (ISR)
Combines SSG + SSR

Pages are statically generated but can update on the server after deployment

// Next.js (Pages Router)
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 60, // page updates every 60 seconds
  };
}

---*/

/*---
✅ Summary
| Type | Speed                | SEO        | Personalization | Example Use      |
| ---- | -------------------- | ---------- | --------------- | ---------------- |
| SSG  | 🟢 Fastest           | ✅ Great    | ❌ Static only   | Blogs            |
| SSR  | 🟡 Medium            | ✅ Great    | ✅ Yes           | Auth dashboards  |
| CSR  | 🔴 Slowest (initial) | ❌ Not good | ✅ Full control  | Filters, search  |
| ISR  | 🟢 Fast + Fresh      | ✅ Great    | ✅ Some          | E-commerce pages |

---*/

/*---

✅ What is Pre-rendering in Next.js?
Pre-rendering means that Next.js generates HTML for your pages in advance, before it reaches the browser. This improves:

Performance (because there's no JavaScript delay)
SEO (search engines can crawl real content)

🔥 Key Point:
In traditional React apps, HTML is generated on the client. In Next.js, HTML can be pre-rendered on the server (SSG or SSR) or at build time.

🧱 Two Types of Pre-rendering in Next.js
| Type    | Full Form              | HTML Generated | When?               |
| ------- | ---------------------- | -------------- | ------------------- |
| **SSG** | Static Site Generation | On the server  | **At build time**   |
| **SSR** | Server Side Rendering  | On the server  | **At request time** |

---*/