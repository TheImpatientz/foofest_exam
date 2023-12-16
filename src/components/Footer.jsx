import Newsletter from "./Newsletter";
import OurLink from "./OurLink";

export default function Footer() {
  return (
    <>
      <div className="grid grid-rows-3 w-4/5 mt-36 ml-auto mr-auto md:w-auto md:grid-rows-1 md:grid-cols-[auto]">
        <Newsletter></Newsletter>
        <div className="mt-auto mb-auto md:col-start-3 md:mt-2 md:mr-auto md:ml-auto">
          <p className="font-semibold">FOOFEST</p>
          <p>Foosa city 43, Iceland</p>
          <p>info.foofest@mail.com</p>
          <p>+45 50 60 33 50</p>
        </div>
        <div className="flex justify-between  mt-2 md:col-start-2 md:row-start-1 md:justify-around">
          <div>
            <p className="font-semibold">CONTACT</p>
            <OurLink text="Jobs" size="small" href="/"></OurLink>
            <OurLink text="Marketing" size="small" href="/"></OurLink>
            <OurLink text="Cookies" size="small" href="/"></OurLink>
            <OurLink text="Privacy" size="small" href="/"></OurLink>
          </div>
          <div>
            <p className="font-semibold">SOCIAL</p>
            <OurLink text="Instagram" size="small" href="/"></OurLink>
            <OurLink text="Facebook" size="small" href="/"></OurLink>
            <OurLink text="TikTok" size="small" href="/"></OurLink>
            <OurLink text="Program" size="small" href="/"></OurLink>
          </div>
        </div>
      </div>{" "}
      <p className="grid place-items-center text-xs mt-10 md:mt-20">©This is a school project 2023/2024</p>
    </>
  );
}
