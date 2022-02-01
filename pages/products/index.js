import Link from "next/link";

const index = ({ productsId = 100 }) => {
  return (
    <div>
      Product Homepage
      <h2>
        <Link href="products/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="products/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="products/3">
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href="products/4">
          <a>Product 4</a>
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productsId}`}>
          <a>Product {productsId}</a>
        </Link>
      </h2>
    </div>
  );
};

export default index;
