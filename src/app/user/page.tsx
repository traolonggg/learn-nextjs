export default async function UserPage() {
  const users = await getUsers();
  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
const getUsers = async () => {
  await delay(3000);
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json(),
  );
};
const delay = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
