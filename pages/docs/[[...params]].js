import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return <h1>docs feature {params[0]} </h1>;
  }

  if (params.length === 2) {
    return <h1>docs feature {params[0]} and concept 1 [params[1]</h1>;
  }

  return <div>Docs are here</div>;
};

export default index;
