/*---
✅ Steps to Implement SSG in Next.js (App Router)

🔹 Step 1: Use the App Router (/app Directory)
app/
  └── users/
      ├── page.js           ← Static list page
      └── [userId]/
          └── page.js       ← Dynamic route

🔹 Step 2: Fetch Data Inside a Server Component
In page.js, use async server components (default behavior):

// app/users/page.js
import getUsers from "@/services/getUsers";

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

✅ This will be statically rendered at build time (SSG).



🔹 Step 3: Create a Dynamic Route (e.g., /users/[userId])
File path: app/users/[userId]/page.js



🔹 Step 4: Add generateStaticParams() in Dynamic Route File
// app/users/[userId]/page.js
import getUsers from "@/services/getUsers";

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({
    userId: user.id.toString(), // Must be string
  }));
}

🧠 This tells Next.js: “Generate a static page for each userId at build time.”

🔹 Step 5: Use params to Fetch & Render Individual Data

// app/users/[userId]/page.js
export default async function User({ params }) {
  const users = await getUsers();
  const user = users.find((u) => u.id === Number(params.userId));

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Website: {user.website}</p>
    </div>
  );
}


✅ Step 6: Run Production Build

npm run build
npm start

This will:

Pre-render /users
Pre-render /users/1, /users/2, etc. (SSG)
Generate static HTML + JSON files for each

✅ Final Folder Summary
app/
  └── users/
      ├── page.js                 ← SSG page listing all users
      └── [userId]/
          ├── page.js             ← Dynamic user page
          └── generateStaticParams() for SSG



🧾 Summary
| Step | Action                                                 |
| ---- | ------------------------------------------------------ |
| 1️⃣  | Use App Router (`/app`)                                |
| 2️⃣  | Fetch data in server component                         |
| 3️⃣  | For dynamic routes, define `generateStaticParams()`    |
| 4️⃣  | Build the app (`npm run build`)                        |
| 5️⃣  | ✅ You now have SSG pages (super fast and SEO friendly) |

---*/