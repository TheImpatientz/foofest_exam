import styles from "@/components/GreenCamping.module.css";

export default function GreenCamping({ greenCamping, setGreenCamping }) {
  return (
    <>
      {/* <p>Do your group want to get a quiet spot closer to the green forrest? Add the Green Camping option</p>
      <input
        type="checkbox"
        checked={greenCamping}
        onChange={() => {
          setGreenCamping((old) => !old);
        }}
      /> */}
      <div className={`cursor-pointer mb-5 border hover:border-[3px] border-solid border-[var(--accent-color)] w-full md:w-80 h-28 md:h-44 ${styles.checked} ${greenCamping && "border-[3px]"}`}>
        <label htmlFor="greencamping" className="cursor-pointer h-full w-full flex flex-col items-center justify-center text-[var(--secondary-color)]">
          <div className="w-fit h-fit flex items-center">
            <input
              type="checkbox"
              className={`${styles.checkbox} w-5 md:w-6 h-5 md:h-6`}
              name="greencamping"
              id="greencamping"
              required
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
