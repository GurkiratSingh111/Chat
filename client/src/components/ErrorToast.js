import styles from "./ErrorToast.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {PiSealWarningFill} from 'react-icons/pi'
export default function ErrorToast({ text, isFail }) {
  return (
    <div
      className={` ${styles["toast-container"]} ${
        isFail
          ? styles["toast-container-error"]
          : styles["toast-container-pass"]
      }`}
    >
      {isFail ? (
        <PiSealWarningFill
          className={`${styles["toast-child"]}  ${styles["toast-sign"]}`}
        />
      ) : (
        <BsFillPatchCheckFill
          className={`${styles["toast-child"]}  ${styles["toast-sign"]}`}
        />
      )}
      <p className={styles["toast-child"]}>{text}</p>
      <span
        className={`${styles["toast-child"]}  ${styles["toast-cross-sign"]}`}
      >
        x
      </span>
    </div>
  );
}
