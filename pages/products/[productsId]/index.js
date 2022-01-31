import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productsId = router.query.productsId;
  return (
    <div>
      <h2>Product id details page {productsId}</h2>
    </div>
  );
};

export default ProductDetails;
