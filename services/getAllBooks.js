export default async function getAllBooks() {
  const res = await fetch("http://localhost:3000/api/book");
  if (!res.ok) throw new Error("fail to fetch data");
  return res.json();
}
