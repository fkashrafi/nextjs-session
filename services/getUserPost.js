export default async function getUserPost(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!res.ok) throw new Error("fail to fetch data");
  return res.json();
}
