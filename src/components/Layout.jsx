import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, current }) {
  return (
    <div>
      <Header current={current}></Header>
      <main className="m-5 md:mx-6">{children}</main>
      <Footer></Footer>
    </div>
  );
}
