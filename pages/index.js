import Link from "next/link";
const index = () => {
  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      Homepage
    </div>
  );
};

export default index;
