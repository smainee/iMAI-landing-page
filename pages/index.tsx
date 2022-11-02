import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import HomePage from "../modules/HomePage";
import type { NextPage } from "next";

const Main: NextPage = () => {
  return (
    <div style={{ minHeight: 400 }}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Main;
