import styles from "../styles/Home.module.css";
import React from "react";
import Page from "../modules/Page";
import Main from "../modules/Main";
import MainCountry from "../modules/MainCountry";
import Stories from "../modules/Stories";

export default function Home() {
  React.useEffect(() => {
    const onResize = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      // document.getElementById("logs").innerText = vw + "x" + vh;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    };
    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    if (screen && screen.orientation && screen.orientation.addEventListener) {
      screen.orientation.addEventListener("change", onResize);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (screen && screen.orientation && screen.orientation.addEventListener) {
        screen.orientation.removeEventListener("change", onResize);
      }
    };
  }, []);
  return (
    <Page>
      <span
        id="logs"
        style={{ position: "absolute", zIndex: 100, left: 0, top: 0 }}
      ></span>
      <Main />
      <MainCountry
        title="Malmö, Sweden"
        linkId="sweden"
        date={
          <span>
            July 3rd<span style={{ color: "#333" }}>,</span> 2022
          </span>
        }
      >
        <Stories
          stories={[
            {
              time: "2:00pm",
              content: (
                <div>
                  <p>Arrival, Föreningsgatan 6E in 21144 Malmö</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="maps://maps.apple.com/?q=Föreningsgatan+6E"
                    className={[styles.background, styles.swedenMap].join(" ")}
                  ></a>
                </div>
              ),
            },
            {
              time: "2:30pm",
              content: <div>Prosecco Reception 🥂</div>,
            },
            {
              time: "3:00pm",
              content: (
                <div>
                  Our officiant Eva will hold the civil wedding ceremony in
                  Swedish and English. We will have Abeni & Zori as our wedding
                  witnesses.
                </div>
              ),
            },
            {
              time: "3:30pm",
              content: <div>Fika 🍰 🧁 🫖</div>,
            },
            {
              time: "6:30pm",
              content: <div>Dinner</div>,
            },
          ]}
        ></Stories>
      </MainCountry>
      <MainCountry
        title="Wildau, Germany"
        linkId="germany"
        date={
          <span>
            April 14th<span style={{ color: "#333" }}>,</span> 2023
          </span>
        }
        flipped
      >
        <Stories
          stories={[
            {
              time: "2:00pm",
              content: (
                <div>
                  <p>Arrival, Café Wildau, Hotel & Resturant am Werbelinsee</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="maps://maps.apple.com/?q=Café+Wildau"
                    className={[styles.background, styles.germanyMap].join(" ")}
                  ></a>
                </div>
              ),
            },
            {
              time: "2:30pm",
              content: <div>Prosecco Reception 🥂</div>,
            },
            {
              time: "3:00pm",
              content: (
                <div>
                  Our officiant Eva will hold the civil wedding ceremony in
                  Swedish and English. We will have Abeni & Zori as our wedding
                  witnesses.
                </div>
              ),
            },
            {
              time: "3:30pm",
              content: <div>Fika 🍰 🧁 🫖</div>,
            },
            {
              time: "6:30pm",
              content: <div>Dinner</div>,
            },
          ]}
        ></Stories>
      </MainCountry>
    </Page>
  );
}
