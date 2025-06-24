import Link from "next/link";
import getUsers from "../../../services/getUsers";
import { redirect } from "next/navigation";

export default async function Users() {
  const users = await getUsers();

  const isLoggedIn = true;
  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="p-24">
      <h2>Users List</h2>
      {users.map((user) => (
        <h3 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h3>
      ))}
    </div>
  );
}
