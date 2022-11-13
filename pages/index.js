import styles from "../styles/Home.module.css";
import React from "react";
import Page from "../modules/Page";
import Main from "../modules/Main";
import MainCountry from "../modules/MainCountry";
import Stories from "../modules/Stories";
import SwedenWedding from "../public/pics/sweden-wedding.jpg";
import MapOverview from "../public/pics/map-overview.jpg";

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
        completed
        style={{
          background: "url(" + SwedenWedding.src + ")",
          backgroundPosition: "52% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "calc(var(--vh, 1vh) * 100)",
        }}
      ></MainCountry>
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
              topic: "Good to know",
              corner: "🔖",
              content: (
                <div>
                  <p>
                    <b className="sub-text">Book your room</b> in advanced:{" "}
                    <a href="https://www.cafe-wildau.de/">
                      https://www.cafe-wildau.de/
                    </a>
                  </p>
                  <p>
                    <b className="sub-text">Dresscode</b> is lagom, chic but
                    comfy <small>👗👔</small>
                  </p>
                  <p>
                    <b className="sub-text">Music</b> is a selection of all
                    guests favorites. Please send us your top 5 party music you
                    wish to hear in our wedding.
                  </p>
                  <p>
                    <b className="sub-text">Venue</b> has a bouncing castle for
                    kids, an open bar for adults, a Finnish sauna, a big lake to
                    swim, a forest to conquer
                  </p>
                  <p>
                    There is plenty of things to do in{" "}
                    <a href="#eberswalde">Eberswalde</a> and{" "}
                    <a href="#berlin">Berlin</a>.
                  </p>
                  <p>
                    <img src={MapOverview.src} style={{ width: "100%" }}></img>
                  </p>
                  <p>
                    🚆 Take train from Berlin to Eberswalde. <br />
                    🚌 Take shuttle bus to the Hotel.
                  </p>
                </div>
              ),
            },
            {
              time: "12:00am - 1:00pm",
              corner: "🚌",
              content: (
                <div>
                  <p>
                    Hotel Café Wildau will arrange pick up shuttles every hour
                    from Eberswalde station.
                  </p>
                </div>
              ),
            },
            {
              time: "2:00pm",
              corner: "💒",
              content: (
                <div>
                  <p>
                    Arrival at{" "}
                    <b>
                      Café Wildau<br></br>
                    </b>
                    <span className="muted-text">
                      Hotel & Resturant am Werbelinsee
                    </span>
                  </p>
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
              time: "2:01pm",
              corner: "🥂",
              content: (
                <div>
                  <p>
                    <b className="sub-text">Prosecco Reception</b> welcome
                    drinks, mingle, finger food and snacks, and we are gonna
                    play a game.
                  </p>
                </div>
              ),
            },
            {
              time: "3:00pm",
              corner: "🍰 🧁 🫖",
              content: (
                <div>
                  <p>Hotel/Pension check-in</p>
                  <p>
                    We are gonna cut a specially made wedding cake by Elsi.
                    Coffee and tea included,{" "}
                    <a
                      href="https://sv.wikipedia.org/wiki/Fika"
                      target="_blank"
                    >
                      fika
                    </a>{" "}
                    style.
                  </p>
                </div>
              ),
            },
            {
              time: "4:30pm",
              corner: "👰🏻🤵🏽",
              content: (
                <div>
                  <p>
                    <b className="sub-text">Free wedding ceremony</b> Lennart
                    will talk about how we met and fell in love ❤️
                  </p>
                  <hr></hr>
                  <p className="muted-text">
                    <small>
                      Please don't use your <b>phone</b> during this time, we've
                      hired a professional photographer,{" "}
                      <a
                        href="https://www.instagram.com/heleneswelt.fotografie/"
                        target="_blank"
                      >
                        Helene
                      </a>{" "}
                      who will take amazing pictures of us 📸
                    </small>
                  </p>
                </div>
              ),
            },
            {
              time: "6:00pm",
              corner: "🥈🥇🥉",
              content: (
                <div>
                  <p>
                    AlTi Quiz! Prepare to answer questions about Ali and Tiffy!
                    Who knows them the best? Download the Quizizz app from:
                  </p>
                  <div className={styles["download-quiz"]}>
                    <a
                      href="https://share.quizizz.com/nz4P08MhCM?lng=en"
                      target="_blank"
                    >
                      <img
                        className="download-app"
                        src="https://quizizz.com/wf/assets/62fa6419161d3a1ad0681cbf_App_Store.svg"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="https://share.quizizz.com/EBAH8OlhCM?lng=en"
                      target="_blank"
                    >
                      <img
                        className="download-app"
                        src="https://quizizz.com/wf/assets/62fa641a161d3a2982681d00_Google_Play.svg"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              ),
            },
            {
              time: "7:00pm",
              corner: "🍴",
              content: <div>Dinner</div>,
            },
            {
              time: "3:00am",
              corner: <small>🛌</small>,
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
            {
              topic: "Things to do in Eberswalde",
              content: (
                <div id="eberswalde">
                  <p>
                    <b>Zoo:</b>{" "}
                    <a href="https://zoo.eberswalde.de" target="_blank">
                      https://zoo.eberswalde.de/
                    </a>
                  </p>
                  <p>
                    <b>Monastery Chorin:</b>{" "}
                    <a href="https://www.kloster-chorin.org" target="_blank">
                      https://www.kloster-chorin.org/
                    </a>
                  </p>
                  <p>
                    <b>Icecream shop:</b> http://www.eiscafe-venezia-piazza.de/
                  </p>
                  <p>https://www.straussenfarm-liebenstein.de</p>
                  <p>
                    <b>Schiffshebewerk:</b>{" "}
                    <a
                      href="https://schiffshebewerk-niederfinow.com"
                      target="_blank"
                    >
                      https://schiffshebewerk-niederfinow.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.hnee.de/en/University/Central-Facilities/Forest-Botanical-Garden/Forstbotanischer-Garten-Eberswalde-E2168.htm"
                      target="_blank"
                    >
                      Forstbotanischer Garten
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://familiengarten-eberswalde.de"
                      target="_blank"
                    >
                      Family garden
                    </a>
                  </p>
                  <p>
                    <a href="https://fitolino.de" target="_blank">
                      Indoor playground
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.fleischerei-tassler.de"
                      target="_blank"
                    >
                      Tiffy's family butchery 🥩👌
                    </a>
                  </p>
                  <p>
                    <a href="https://www.bloc48.de" target="_blank">
                      Climbing
                    </a>
                  </p>
                  <p>
                    <a href="https://wildpark-schorfheide.de" target="_blank">
                      Wildpark Schorfheide
                    </a>
                  </p>
                </div>
              ),
            },
            {
              topic: "Things to do in Berlin",
              content: (
                <div id="berlin">
                  <p>
                    <b>Shopping:</b>{" "}
                    <a href="https://zoo.eberswalde.de/" target="_blank">
                      https://zoo.eberswalde.de/
                    </a>
                  </p>
                  <p>
                    <b>Museums:</b>{" "}
                    <a href="https://zoo.eberswalde.de/" target="_blank">
                      https://zoo.eberswalde.de/
                    </a>
                  </p>
                  <p>
                    <b>Sony center:</b>{" "}
                    <a href="https://zoo.eberswalde.de/" target="_blank">
                      https://zoo.eberswalde.de/
                    </a>
                  </p>
                  <p>
                    <b>TV Tower:</b>{" "}
                    <a href="https://zoo.eberswalde.de/" target="_blank">
                      https://zoo.eberswalde.de/
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.potsdam-park-sanssouci.de"
                      target="_blank"
                    >
                      Potsdam Sanssouci Park
                    </a>
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
