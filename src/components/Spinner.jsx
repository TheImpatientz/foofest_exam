import Image from "next/image";
import styles from "@/components/Spinner.module.css";
import Biglogo from "@/logo/logo_big.svg";
export default function Spinner({ spinnerDisplay }) {
  return (
    <div className={`${styles.popupOverlay} ${!spinnerDisplay && styles.hide}`}>
      <div className="grid w-full h-full">
        <Image src={Biglogo} alt="FooFest logo" className={`${styles.spinner}`} />
        {/* <svg className={`${styles.spinner}`} width="150" height="150" viewBox="0 0 113 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="57.122" cy="55.8508" rx="22.0136" ry="22.0222" fill="#C5EF1A" />
          <line x1="56.6509" y1="0.0710449" x2="56.6509" y2="36.7575" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6861" y2="-1.5" transform="matrix(-0.161051 0.986946 -0.986926 -0.161173 65.6763 0.550293)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6842" y2="-1.5" transform="matrix(-0.395323 0.918542 -0.918431 -0.395581 77.3604 1.80591)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6821" y2="-1.5" transform="matrix(-0.554433 0.832228 -0.83203 -0.554731 86.8579 8.00854)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6792" y2="-1.5" transform="matrix(-0.714188 0.699954 -0.699677 -0.714459 95.1428 15.4236)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6768" y2="-1.5" transform="matrix(-0.824885 0.565301 -0.565003 -0.825089 101.985 23.7488)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6743" y2="-1.5" transform="matrix(-0.926353 0.376655 -0.376405 -0.926455 107.969 32.8428)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6728" y2="-1.5" transform="matrix(-0.980616 0.195939 -0.195793 -0.980645 111.753 43.0635)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6722" y2="-1.5" transform="matrix(-0.999992 0.00409071 -0.00408754 -0.999992 112.148 54.3757)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6729" y2="-1.5" transform="matrix(-0.978393 -0.206753 0.2066 -0.978426 111.753 65.4924)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6747" y2="-1.5" transform="matrix(-0.911496 -0.41131 0.411045 -0.911615 110.527 76.8259)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6769" y2="-1.5" transform="matrix(-0.818508 -0.574495 0.574197 -0.818717 104.016 85.4897)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.679" y2="-1.5" transform="matrix(-0.724113 -0.689682 0.689401 -0.72438 96.6692 92.9602)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.682" y2="-1.5" transform="matrix(-0.563569 -0.826069 0.825866 -0.563867 89.0061 100.641)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6846" y2="-1.5" transform="matrix(-0.362125 -0.93213 0.932035 -0.362369 79.1357 106.027)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.686" y2="-1.5" transform="matrix(-0.176783 -0.98425 0.984226 -0.176916 69.094 109.604)" stroke="#C5EF1A" stroke-width="3" />
          <line x1="57.1536" y1="111.639" x2="57.1949" y2="74.9527" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.686" y2="-1.5" transform="matrix(0.181408 -0.983408 0.983383 0.181544 47.7065 110.999)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6842" y2="-1.5" transform="matrix(0.396807 -0.917902 0.91779 0.397066 36.0925 108.627)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6817" y2="-1.5" transform="matrix(0.578225 -0.815877 0.815665 0.578524 25.4812 103.424)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6793" y2="-1.5" transform="matrix(0.712435 -0.701738 0.701462 0.712707 17.6616 96.0781)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6769" y2="-1.5" transform="matrix(0.820257 -0.571994 0.571696 0.820466 10.4656 88.3625)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6743" y2="-1.5" transform="matrix(0.923402 -0.383834 0.38358 0.923508 4.20264 77.873)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="36.6726" y2="-1.5" transform="matrix(0.98581 -0.167867 0.167741 0.985831 1.08374 66.8743)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1593" y2="-1.5" transform="matrix(0.999738 -0.0228811 0.0228633 0.999739 0.0849609 57.2537)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1598" y2="-1.5" transform="matrix(0.983884 0.178808 -0.178674 0.983908 0.522949 46.093)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1618" y2="-1.5" transform="matrix(0.912696 0.40864 -0.408376 0.912814 4.20264 35.2664)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1639" y2="-1.5" transform="matrix(0.831878 0.554958 -0.554661 0.832077 9.32373 26.168)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1664" y2="-1.5" transform="matrix(0.723069 0.690776 -0.690496 0.723336 15.7739 18.1179)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1693" y2="-1.5" transform="matrix(0.570272 0.821456 -0.821249 0.57057 24.2249 10.4907)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1719" y2="-1.5" transform="matrix(0.387111 0.922033 -0.921926 0.387366 33.6831 4.55371)" stroke="#C5EF1A" stroke-width="3" />
          <line y1="-1.5" x2="38.1737" y2="-1.5" transform="matrix(0.16047 0.987041 -0.987021 0.160591 45.0486 1.80591)" stroke="#C5EF1A" stroke-width="3" />
        </svg> */}
      </div>
    </div>
  );
}
