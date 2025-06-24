/*---
What is redirection ?
Redirection in Next.js means navigating the user to a different route/page — automatically — based on some logic.

Two ways: 
component based
config based

✅ Component-Based Redirection
🔹 Server Component (App Router)

// app/protected/page.js
import { redirect } from "next/navigation";

export default function ProtectedPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <h1>Welcome to Protected Page</h1>;
}
🔁 This works only on the server (server component).
If you need it in a client component, use the useRouter() hook.

🔹 Client Component Redirection

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedClientPage() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <h1>Protected Client Page</h1>;
}

✅ Config-Based Redirection (Middleware)
If you want to protect multiple routes (e.g., anything under /admin), use middleware.js.

📄 middleware.js

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = false;

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // apply middleware to these routes
};


Redirection from next.config.mjs file

const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/users",
        destination: "/login",
        permanent: false, // 308 redirect
      },
      {
        source: "/users/:userId",
        destination: "/",
        permanent: false, // 308 redirect
      },
    ];
  },
};

export default nextConfig;

This will redirect user from users page to login page


🧾 Summary
| Type               | When to Use                                              | How                                               |
| ------------------ | -------------------------------------------------------- | ------------------------------------------------- |
| 🔁 Component-based | When redirection depends on component logic (auth, role) | `redirect()` (server) or `router.push()` (client) |
| ⚙ Config-based     | Global route protection or legacy redirects              | `middleware.js` or `next.config.js`               |

---*/
