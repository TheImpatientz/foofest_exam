import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
