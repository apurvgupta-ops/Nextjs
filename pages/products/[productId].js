import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Product id details page {productId}</div>;
};

export default ProductDetails;
