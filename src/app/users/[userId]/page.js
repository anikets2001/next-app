import getUsers from "../../../../services/getUsers";

export default async function User({ params }) {
  const users = await getUsers();

  const userData = users.find((u) => u.id === Number(params.userId));

  if (!userData) return <p>User not found</p>;

  return (
    <div className="p-24">
      <h3>User Detail Page</h3>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>Website: {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) =>( {userId: user.id.toString()}));
}

/*---

🔍 What Is generateStaticParams?
generateStaticParams is a special Next.js function that allows you to statically pre-render dynamic routes during the build time.

It’s used inside a dynamic route like:
app/products/[productId]/page.js


✅ What It Does
When you build your app (next build), this function:

Fetches all the dynamic values (like product IDs, usernames, etc.)
Returns an array of parameters.
Next.js uses these params to generate individual static HTML pages for each route.
---*/
