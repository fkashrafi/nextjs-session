import getAllBooks from "@/services/getAllBooks";

export default async function ReaderID({ params }) {
  const bookData = getAllBooks();
  const {data,dateTime} = await bookData;
  return (
    <section>
      <h1>books home</h1>
      <h1>{dateTime}</h1>
      <ul>
        {data.map((val, ind) => (
          <li key={`${val.id}`}>{val.title}</li>
        ))}
      </ul>
    </section>
  );
}


export async function POST(request) {}