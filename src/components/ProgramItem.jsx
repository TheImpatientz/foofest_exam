//SENDER DATA FRA PROGRAMCONTENT
import { useState } from "react";
import styles from "@/components/ProgramItem.module.css";
import Image from "next/image";
import band from "@/img/band.png";
export default function ProgramItem({ act, start, end }) {
  // state der ser på om popover er fremme eller ej
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  return (
    <>
      <div className={`${styles.body}`}>
        {/* // ANVENDER DATAEN VED AT LAVE PROPS HVOR DEN TAGER FAT I ACT, START OG END */}
        {/* her bliver popover style fra module.css sat på hvorvidt staten er true/false */}
        <li className={`${styles.triggerbtn} grid h-10 text-[var(--secondary-color)] grid-cols-3 space-between my-6 cursor-pointer`} onClick={() => setIsPopoverVisible(!isPopoverVisible)}>
          <span className="text-[1rem] leading-5 col-span-2">{act}</span>
          <span className="span place-self-center justify-self-end text-[1rem]">
            {start}-{end}
          </span>
        </li>
        {/* popover der viser den når staten er true*/}
        {isPopoverVisible && (
          <div className={`${styles.mypopover} max-w-[350px] md:max-w-[700px] md: md:p-8 p-5`}>
            <button className={`${styles.closebtn} p-3`} onClick={() => setIsPopoverVisible(!isPopoverVisible)}>
              <span aria-hidden="true">
                <svg width="40" height="24" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-1.5" x2="56.0674" y2="-1.5" transform="matrix(0.851137 -0.524944 0.519584 0.854419 1.80927 33.6445)" stroke="#F6F1F1" strokeWidth="3" />
                  <line y1="-1.5" x2="56.0694" y2="-1.5" transform="matrix(-0.849647 -0.527352 0.533 -0.846115 49.7151 30.1973)" stroke="#F6F1F1" strokeWidth="3" />
                </svg>
              </span>
              <span className={`${styles.sronly}`}>Close</span>
            </button>
            <div className="grid grid-cols-3">
              <Image src={band} alt="band" width={250} height={250} className="w-11/12" />
              <div className="col-span-2 place-self-center mb-4">
                <h3 className="md:text-[1.75rem] text-[1.25rem]">Price, Grant and Bechtelar</h3>
                <h4 className="md:text-[1.25rem] text-[0.875rem]">Rock</h4>
                <h4 className="md:text-[1.25rem] text-[0.875rem]">Kim, Frans and Jacob</h4>
              </div>
            </div>
            <p className="md:text-[1rem] text-[0.75rem] mt-3">
              A Perfect Circle is an American rock supergroup formed in 1999 by guitarist Billy Howerdel and Tool vocalist Maynard James Keenan. A Perfect Circle has released four studio albums, the first three during the early 2000s: Mer de Noms,
              their debut album in 2000, and followed up by Thirteenth Step in 2003; then in 2004, Emotive—an album of radically re-worked cover songs. Shortly after Emotives release, the band went on hiatus; Keenan returned to Tool and started up
              solo work under the band name Puscifer. and Howerdel released a solo album, Keep Telling Myself Its Alright, under the moniker Ashes Divide. Band activity was sporadic in the following years; the band reformed in 2010, and played live
              shows on and off between 2010 and 2013, but fell into inactivity after the release of their greatest hits album, Three Sixty, and a live album box set, A Perfect Circle Live: Featuring Stone and Echo in late 2013. The band reformed in
              2017 to record a fourth album, Eat the Elephant, which was released on April 20, 2018.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
