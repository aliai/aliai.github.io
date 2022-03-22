import React from "react";
import Wave from "./Wave";
import styles from "./Waves.module.css";

export default function Waves() {
  return (
    <div className={styles.waves}>
      <Wave />
      <Wave />
      <Wave />
      <Wave opaque />
    </div>
  );
}
