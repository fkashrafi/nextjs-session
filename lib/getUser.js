export default async function getUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {next:{
      revalidate:3000
    },
  cache:'no-cache'}


  );
  if (!res.ok) throw new Error("fail to fetch data");
  return res.json();
}
