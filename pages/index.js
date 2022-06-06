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
      <Main />
      <MainCountry
        title="Malmö, Sweden"
        linkId="sweden"
        date={
          <span>
            July 3<span style={{ color: "#333" }}>,</span> 2022
          </span>
        }
      >
        <Stories
          stories={[
            {
              topic: "dresscode",
              corner: <small>👔👗</small>,
              content: (
                <div>
                  <p>Lagom, elegant but comfy :)</p>
                </div>
              ),
            },
            {
              time: "2:00pm",
              content: (
                <div>
                  <p>Arrival, Föreningsgatan 6E in 21144 Malmö</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="maps://maps.apple.com/?q=Föreningsgatan+6E+21144+Sweden"
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
              time: "4:30pm",
              content: (
                <div>
                  <b>AlTi</b> wedding quiz. There will be 🏅🥈🥉 for the
                  winners! Install{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://quizizz.com/"
                  >
                    Quizizz
                  </a>{" "}
                  app if you want to keep the answers for later.
                </div>
              ),
            },
            {
              time: "6:00pm",
              content: <div>Dinner, catering by 400grader and Shiraz.</div>,
            },
            {
              topic: "After dinner",
              content: (
                <div>Entertainments: games, presentations, dancing.</div>
              ),
            },
          ]}
        ></Stories>
      </MainCountry>
      <MainCountry
        title="Wildau, Germany"
        linkId="germany"
        date={
          <span>
            April 14
            <span style={{ color: "#333" }}>,</span> 2023
          </span>
        }
      >
        <Stories
          stories={[
            {
              topic: "dresscode",
              corner: <small>👗👔</small>,
              content: (
                <div>
                  <p>Lagom, chic but comfy :)</p>
                </div>
              ),
            },
            {
              time: "2:00pm",
              content: (
                <div>
                  <p>Arrival, Café Wildau, Hotel & Resturant am Werbelinsee</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="maps://maps.apple.com/?q=Café+Wildau+16244+Germany"
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
              time: "2:45pm",
              content: (
                <div>
                  Free wedding ceremony: [someone] will talk about how we met
                  and fell in love ❤️
                </div>
              ),
            },
            {
              time: "3:30pm",
              content: <div>Coffee & cake 🍰 🧁 🫖</div>,
            },

            {
              time: "7:00pm",
              content: <div>Dinner</div>,
            },
            {
              time: "3:00am",
              content: <div>Bed time</div>,
            },
            {
              time: "8:00am - 10:00am",
              corner: "🐓",
              content: (
                <div>
                  <p>
                    Breakfast 🥐 <big>☕</big>
                  </p>
                </div>
              ),
            },
          ]}
        ></Stories>
      </MainCountry>
    </Page>
  );
}
