import styles from "@/components/GreenCamping.module.css";

export default function GreenCamping({ greenCamping, setGreenCamping }) {
  return (
    <>
      <div className={`cursor-pointer mb-5 mt-1 border hover:border-[3px] border-solid border-[var(--accent-color)] w-full md:w-full h-28 md:h-44 ${styles.checked} ${greenCamping && "border-[3px]"}`}>
        <label htmlFor="greencamping" className="cursor-pointer p-4 h-full w-full flex flex-col items-start justify-center text-[var(--secondary-color)]">
          <div className="w-fit h-fit flex items-center">
            <input
              type="checkbox"
              className={`${styles.checkbox} w-5 md:w-6 h-5 md:h-6`}
              name="greencamping"
              id="greencamping"
              onChange={() => {
                setGreenCamping((old) => !old);
              }}
              value="greencamping"
            />
            <p className="text-[var(--secondary-color)] text-xl md:text-4xl ml-4 h-fit">GREEN CAMPING</p>
          </div>
        </label>
      </div>
    </>
  );
}
