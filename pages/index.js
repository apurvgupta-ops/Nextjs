import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/products");
  };

  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <div>Homepage</div>
      <div>
        <button onClick={handleClick}>Place order</button>
      </div>
    </div>
  );
};

export default index;
