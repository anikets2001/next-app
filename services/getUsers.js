const apiUrl = "https://jsonplaceholder.typicode.com/users";

export default async function getUsers() {
  const result = await fetch(apiUrl);
  return result.json();
}
