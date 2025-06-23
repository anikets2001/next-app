import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Users() {
  const users = await getUsers();

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
