// import styles from "./globals.css";
export default function SecondaryButton({ classname }) {
  return (
    <div className={`${classname} flex flex-row-reverse space-x-4 space-x-reverse`}>
      <a href="#" className="text-[var(--secondary-color)] flex w-fit mb-10 gap-2 border hover:border-[3px] p-2 px-4 border-[var(--accent-color)] hover:text-[var(--accent-color)] md:p-2 md:text-[20px] md:px-8">
        <span className="span">BUY</span>TICKETS
        <svg className="place-self-center" width="40" height="25" viewBox="0 0 47 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.2353 0L31.06 2.30889L40.289 12.1045H0.175781V12.1046V15.3699V15.37H40.2887L31.06 25.1653L33.2353 27.4742L46.178 13.7371L33.2353 0Z" fill="var(--accent-color)" />
        </svg>
      </a>
    </div>
  );
}
