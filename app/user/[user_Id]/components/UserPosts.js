export default async function UserPosts({ postsPromise }) {
  const contant = postsPromise.map((post, ind) => (
    <>
      <article key={`${post.userId}-${ind}`}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
      <hr />
    </>
  ));

  return contant;
}
