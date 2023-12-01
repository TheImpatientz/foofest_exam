export default function Dob() {
  return (
    <div className="flex flex-row gap-4 max-w-lg justify-items-stretch">
      <div className="flex flex-col grow shrink  my-6 w-auto">
        <label className="text-[var(--secondary-color)]  semibold" htmlFor="day">
          DAY
        </label>
        <input className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]" id="day" placeholder="eg. 07" name="day" type="text" />
      </div>
      <div className="flex flex-col grow shrink my-6 w-auto">
        <label className="text-[var(--secondary-color)] semibold" htmlFor="month">
          MONTH
        </label>
        <input className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]" id="month" placeholder="eg. 12" name="month" type="text" />
      </div>
      <div className="flex flex-col grow shrink my-6 w-auto">
        <label className="text-[var(--secondary-color)]  semibold" htmlFor="year">
          YEAR
        </label>
        <input className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 border focus:border-[3px] border-[var(--accent-color)]" id="year" placeholder="eg. 2023" name="year" type="text" />
      </div>
    </div>
  );
}
