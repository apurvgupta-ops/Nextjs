import Footer from "../components/Footer";

const about = () => {
  return <div>about page</div>;
};

export default about;

about.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
