import getAllUser from "@/services/getAllUser";
import getUser from "@/services/getUser";
import getUserPost from "@/services/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

export async function generateMetadata({ params: { user_Id } }) {
  const user = await getUser(user_Id);

  return {
    title: user.name,
    description: `This is a page of ${user.name}`,
  };
}



export default async function SinglePage({ params: { user_Id } }) {
  const userData = getUser(user_Id);
  const userDataPost = getUserPost(user_Id);

  const user = await userData;
  const postData = await userDataPost;
  const date = new Date().toString();
  return (
    <section>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{date}</p>y
      <br />
      <hr />
      <Suspense fallback={<h1>Loading.........</h1>}>
        <UserPosts postsPromise={postData} />
      </Suspense>
    </section>
  );
}

export async function generateStaticParams() {
  const user = await getAllUser();
  return user.map((user) => ({ user_Id: user.id.toString() }));
}
