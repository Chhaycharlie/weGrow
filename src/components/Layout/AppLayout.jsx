import Header from "../shared/Header";
import Footer from "../shared/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
