{
  /*props: <Labelinput id="name" inputname="name" label="Name" placeholder="navn navnsen" type="text" forId="name" /> */
}

export default function Labelinput({ id, inputname, label, placeholder, type, forId }) {
  return (
    <div className="flex flex-col my-6 max-w-lg">
      <label className="text-[var(--secondary-color)] semibold" htmlFor={forId}>
        {label}{" "}
      </label>
      <input className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 outline focus:outline-[3px] outline-[var(--accent-color)]" id={id} placeholder={placeholder} name={inputname} type={type} />
    </div>
  );
}
