import Link from "@/components/Link";

export default function Home() {
  return (
    <main>
      <p>hello</p>
      {/* button kan godt tabbes til*/}
      <button>tjek</button>

      {/* a kan IKKE tabbes til*/}
      <a href="/" className="focus:text-orange-500" tabIndex={0}>
        link tjek
      </a>
      {/* div kan godt tabbes til*/}
      <div className="bg-white p-5" tabIndex={0}>
        {/* Link kan IKKE tabbes til*/}
        <Link text="big link" size="big" color="dark" href="/" />
      </div>
      {/* Link kan IKKE tabbes til*/}
      <Link text="small link" size="small" href="/" />
    </main>
  );
}
