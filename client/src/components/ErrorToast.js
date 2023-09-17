import { useEffect, useState } from "react";
import styles from "./ErrorToast.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { PiSealWarningFill } from "react-icons/pi";
export default function ErrorToast({ text, isFail,stop }) {
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      stop(null);
    }, 5000);
  }, []);

  const errorToastJSX = (
    <div className={styles["box-container"]}>
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
          className={`${styles["toast-child"]}  ${styles["toast-cross-sign"]}`} onClick={()=>{stop(null)}}
        >
          x
        </span>
      </div>
      <div className={`${styles["box-time-line"]} ${isFail?styles["red"]:styles["green"]}`}></div>
    </div>
  );
  return(errorToastJSX);
}
