import React from "react";
import styles from "./Main.module.css";
import Waves from "./Waves";
import sweden from "../public/flags/sweden.svg";
import germany from "../public/flags/germany.svg";
import swedenPic from "../public/pics/sweden.jpg";
import germanyPic from "../public/pics/germany.jpg";
import Glass from "./Glass";

export default function Main({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) {
  return (
    <div className={styles.main}>
      <span className={styles.title}>Ali & Tiffy</span>
      <div className={styles.countryGrid}>
        <a href="/#sweden">
          <Glass className={styles.sweden}>
            <img className={styles.map} src={sweden.src}></img>
            <div className={styles.countryShortSummary}>
              <h4 className={styles.smallHeading}>Sweden</h4>
              <div
                className={styles.sampleImage}
                style={{
                  backgroundImage: `url(${swedenPic.src})`,
                }}
              >
                <div className={styles.duplicate}></div>
              </div>
              <span className={styles.subtext}>
                3<sup>rd</sup> July, 2022
              </span>
            </div>
          </Glass>
        </a>
        <a href="/#germany">
          <Glass className={styles.germany}>
            <img className={styles.map} src={germany.src}></img>
            <div className={styles.countryShortSummary}>
              <h4 className={styles.smallHeading}>Germany</h4>
              <div
                className={styles.sampleImage}
                style={{
                  backgroundImage: `url(${germanyPic.src})`,
                }}
              >
                <div className={styles.duplicate}></div>
              </div>
              <span className={styles.subtext}>
                14<sup>th</sup> April, 2023
              </span>
            </div>
          </Glass>
        </a>
      </div>
      <Waves />
    </div>
  );
}
