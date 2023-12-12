// props: <Labelinput id="name" inputname="name" label="Name" placeholder="navn navnsen" type="text" forId="name" />

//Ekstra props:
//Hvis der skal andet styling ind, kan extraStyle tilføjes
//Hvis der skal benyttes useRef, kan der tilføjes en ref med refName
//Hvis inputet skal have en minLength eller maxLength kan dette tilføjes
//Hvis der skal ske et event, når der tastet i feltet, kan onKeyDown tilføjes (bliver brugt i Cardinfo.jsx)

export default function Labelinput({ id, inputname, label, placeholder, type, extraStyle, refName, maxLength, minLength, onKeyDown }) {
  return (
    <div className={`flex flex-col my-6 max-w-lg ${extraStyle}`}>
      <label className="text-[var(--secondary-color)] semibold mb-2" htmlFor={id}>
        {label}{" "}
      </label>
      <input
        className="bg-[var(--primary-color)] outline-none text-[var(--secondary-color)] p-4 outline-1 focus:outline-[3px] outline-[var(--accent-color)]"
        id={id}
        placeholder={placeholder}
        name={inputname}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        ref={refName}
        onKeyDown={onKeyDown}
        required
      />
    </div>
  );
}
