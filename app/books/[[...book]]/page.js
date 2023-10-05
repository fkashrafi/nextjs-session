export default async function UserPage({ params }) {
  const { book } = params;
  if(book[1] !=='ameen'){
  return new Error();
  }

  return (
    <section>
      <h1>Books</h1>
      <h2>Subject for {`${book[0]}`}</h2>
      <h2>Author for {`${book[1]}`}</h2>
      {book.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </section>
  );
}
