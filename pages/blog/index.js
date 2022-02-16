import { getSession, useSession } from "next-auth/react";
const Blog = ({ data }) => {
  const { session } = useSession();
  console.log({ session });
  return <div>Blog page - {data}</div>;
};

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session ? "list of 100 blogs" : "10 blogs",
    },
  };
}
