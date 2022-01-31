import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productsId, reviewId } = router.query;
  return (
    <div>
      <h1>
        Review id {reviewId} and product id is {productsId}
      </h1>
    </div>
  );
};

export default Review;
