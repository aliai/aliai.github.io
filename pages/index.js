import styles from "../styles/Home.module.css";
import landing from "../public/pics/landing.jpg";
import sweden from "../public/flags/sweden.svg";
import germany from "../public/flags/germany.svg";
import swedenPic from "../public/pics/sweden.jpg";
import germanyPic from "../public/pics/germany.jpg";
import Link from "next/link";
import React from "react";

function Wave() {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={styles.wave}
    >
      <path
        fill="#efeeee"
        d="M0,20L40,25C80,30,160,40,240,48.3C320,57,400,63,480,68.3C560,73,640,77,720,66.7C800,57,880,33,960,25C1040,17,1120,23,1200,33.3C1280,43,1360,57,1440,63.3C1520,70,1600,70,1680,60C1760,50,1840,30,1920,31.7C2000,33,2080,57,2160,60C2240,63,2320,47,2400,38.3C2480,30,2560,30,2640,31.7C2720,33,2800,37,2880,36.7C2960,37,3040,33,3120,26.7C3200,20,3280,10,3360,11.7C3440,13,3520,27,3600,35C3680,43,3760,47,3840,40C3920,33,4000,17,4080,15C4160,13,4240,27,4320,35C4400,43,4480,47,4560,43.3C4640,40,4720,30,4800,31.7C4880,33,4960,47,5040,43.3C5120,40,5200,20,5280,25C5360,30,5440,60,5520,75C5600,90,5680,90,5720,90L5760,90L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
      ></path>
    </svg>
  );
}

export default function Home() {
  React.useEffect(() => {
    const onResize = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div className={styles.container}>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${landing.src})`,
        }}
      >
        <div>
          <Wave />
          <Wave />
          <Wave />
          <Wave />
        </div>
        <span className={[styles.glass1, styles.title].join(" ")}>
          Ali & Tiffy
        </span>
        <div className={styles.countryGrid}>
          <Link href="/#sweden">
            <div className={[styles.glass, styles.sweden].join(" ")}>
              <img className={styles.map} src={sweden.src}></img>
              <div className={styles.countryShortSummary}>
                <h4 className={styles.smallHeading}>Sweden</h4>
                <div
                  className={styles.sampleImage}
                  style={{
                    backgroundImage: `url(${swedenPic.src})`,
                  }}
                ></div>
                <span className={styles.subtext}>3rd July, 2022</span>
              </div>
            </div>
          </Link>
          <Link href="/#germany">
            <div className={[styles.glass, styles.germany].join(" ")}>
              <img className={styles.map} src={germany.src}></img>
              <div className={styles.countryShortSummary}>
                <h4 className={styles.smallHeading}>Germany</h4>
                <div
                  className={styles.sampleImage}
                  style={{
                    backgroundImage: `url(${germanyPic.src})`,
                  }}
                ></div>
                <span className={styles.subtext}>14th April, 2023</span>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className={styles.content}>
          <div className={styles.countries} >
            <Link href="/#sweden">
              <img className={styles.sweden} src={sweden}></img>
            </Link>
            <div className={styles.middle}>
              <span className={styles.title}>Ali & Tiffy</span>
              <p style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                getting married {" "}
                <Image src="/ring-gray.png" width={30} height={30} ></Image>
              </p>
              <Image className={styles.couple} src="/welcome.jpg" width={3369} height={2527} ></Image>
            </div>
            <Link href="/#germany">
              <img className={styles.germany} src={germany}></img>
            </Link>
          </div>
        </div> */}
      </main>
      {/* <div className={styles.weddingCountry}>
        <div className={styles.weddingContent} style={{
          backgroundImage: `url(${SwedenBackground})`
        }}>
          <div className={styles.heading}>
            <h1 id="sweden">Malmö, Sweden</h1>
            <span className={styles.date}>July 3rd<span style={{ color: "#333" }}>,</span> 2022</span>
          </div>
        </div>
        <div className={styles.stories}>
          <div className={styles.point}>
            <span className={styles.topic}>2:00pm</span>
            Arrival, Föreningsgatan 6E in 21144 Malmö
            <div id="map" className={styles.map}></div>
          </div>
          <div className={styles.point}>
            <span className={styles.topic}>2:30pm</span>
            Prosecco Reception 🥂
          </div>
          <div className={styles.point}>
            <span className={styles.topic}>3pm</span>
            Our officiant Eva will hold the civil wedding ceremony in Swedish and English. We will have Abeni & Zori as our wedding witnesses.
          </div>
          <div className={styles.point}>
            <span className={styles.topic}>3:30pm</span>
            Fika 🍰 🧁 🫖
          </div>
          <div className={styles.point}>
            <span className={styles.topic}>6:30pm</span>
            Dinner
          </div>
        </div>
      </div>
      <div className={styles.weddingCountry}>
        <div className={styles.heading}>
          <h1 id="germany">Germany</h1>
          <span className={styles.date}>April 14th<span style={{ color: "#333" }}>,</span> 2023</span>
        </div>
        <div className={styles.weddingContent}>

        </div>
      </div> */}
    </div>
  );
}
