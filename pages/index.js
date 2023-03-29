import styles from "../styles/Home.module.css";
import React, { Fragment } from "react";
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
                    <b className="sub-text">Book your room</b> in advanced. We
                    are staying at{" "}
                    <a href="https://www.cafe-wildau.de">Café Wildau</a> from
                    Thursday to Saturday. Contact{" "}
                    <a href="mailto:info@cafe-wildau.de">info@cafe-wildau.de</a>{" "}
                    to book your room.
                  </p>
                  <p>There are other hotels in the area too.</p>
                  <p>
                    <b className="sub-text">Dresscode</b> is lagom, chic but
                    comfy <small>👗👔</small>
                  </p>
                  <p>
                    <b className="sub-text">Music</b> is a selection of all
                    guests favorites. Please send us your top 5 party music you
                    wish to hear in our wedding.
                  </p>
                  <p style={{ display: "flex", gap: 10 }}>
                    <span style={{ fontSize: 40 }}>🎵</span>
                    <div>
                      Share your favorites with us on{" "}
                      <a
                        href="https://docs.google.com/document/d/1gzqZPWlTqHr7MyrgiY6eSKAKkZ_xXyNddspT5dysxAI/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        this document
                      </a>{" "}
                      or simply text us on Facebook or WhatsApp.
                    </div>
                  </p>
                  <p>
                    <b className="sub-text">Venue</b> has a bouncing castle for
                    kids, an open bar for adults, a Finnish sauna, a big lake to
                    swim, a forest to conquer
                  </p>
                  <p>
                    There are plenty of things to do in{" "}
                    <a href="#eberswalde">Eberswalde</a> and{" "}
                    <a href="#berlin">Berlin</a>.
                  </p>
                  <p>
                    <img src={MapOverview.src} style={{ width: "100%" }}></img>
                  </p>
                </div>
              ),
            },
            {
              time: "11:30am",
              corner: "🚆",
              content: (
                <div>
                  <p>
                    🚆 Take the train RE3 from Berlin to{" "}
                    <span className="sub-text">Eberswalde</span>.
                  </p>
                </div>
              ),
            },
            {
              time: "12:30pm",
              corner: "🚌",
              content: (
                <div>
                  <p>
                    🚌 We have arranged shuttle bus at <b>12:30</b> on Friday
                    that takes you to the wedding venue.
                  </p>
                  <p>
                    🚕 In case you didn{"'"}t make it on time take a cab from{" "}
                    <span className="sub-text">Eberswalde</span>. You can call
                    one of these numbers: <br></br>
                  </p>
                  <ul>
                    <li>
                      <small>Taxi Blau: +491712213106</small>
                    </li>
                    <li>
                      <small>Taxi Wutskowsky: +49333420550</small>
                    </li>
                  </ul>
                  <hr />
                  <p className="muted-text" style={{ fontSize: "small" }}>
                    More information will be provided here when we are closer to
                    the wedding date.
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
                    <span className="sub-text">
                      Café Wildau<br></br>
                    </span>
                    <small className="muted-text">
                      Hotel & Resturant am Werbelinsee
                    </small>
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
                    <b className="sub-text">Prosecco Reception</b> includes
                    welcome drinks, mingle, finger food & snacks, and we are
                    gonna play a game.
                  </p>
                </div>
              ),
            },
            {
              time: "3:00pm",
              corner: "🍰 🧁 🫖",
              content: (
                <div>
                  <p>
                    Hotel/Pension <span className="sub-text">check-in</span>:
                    which is oddly late, we know! However, it is possible to
                    store luggage, get ready before this time, and possibility
                    to access some rooms.
                  </p>
                  <p>
                    We are gonna cut a specially made wedding cake by Elsi.
                    Coffee and tea included,{" "}
                    <a
                      href="https://sv.wikipedia.org/wiki/Fika"
                      target="_blank"
                      rel="noreferrer"
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
              corner: "👰🏻‍♀️🧑🏻‍💻",
              content: (
                <div>
                  <p>
                    <b className="sub-text">Free wedding ceremony</b> Lennart
                    will talk about how we met and fell in love ❤️
                  </p>
                  <p>
                    <b className="sub-text">Iranian wedding ceremony</b> which
                    involves sugar cones!
                  </p>
                  <p>
                    Stay put for <b className="sub-text">group pictures</b>.
                  </p>
                  <hr></hr>
                  <p className="muted-text" style={{ fontSize: "small" }}>
                    Please don{"'"}t use your <b>phone</b> during the
                    ceremonies, we{"'"}ve hired a professional photographer,{" "}
                    <a
                      href="https://www.instagram.com/heleneswelt.fotografie/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Helene
                    </a>
                    , who will take wonderful pictures of everybody 📸
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
              corner: "🍷🥹",
              content: <div>Wine and speeches</div>,
            },
            {
              time: "7:30pm",
              corner: "🍴",
              content: <div>Dinner buffet</div>,
            },
            {
              time: "9:00pm",
              corner: "💃 🎉 🕺",
              content: <div>Partttty!</div>,
            },
            {
              time: "12:00am",
              corner: "🌭",
              content: <div>Midnight snacks, yum yum.</div>,
            },
            {
              time: "3:00am",
              corner: "🛌",
              content: <div>Bed time</div>,
            },
            {
              time: "8:00am - 10:30am",
              corner: "🐓",
              content: (
                <div>
                  <p>
                    Breakfast 🥐 <big>☕</big> we{"'"}ll pay for all our guests.
                    Attendance is optional if you are sleepy.
                  </p>
                </div>
              ),
            },
            {
              time: "10:00am",
              corner: "🧳",
              content: (
                <div>
                  <p>
                    Checkout; Hotels have very early checkout sadly. We say our
                    goodbyes 😘
                  </p>
                </div>
              ),
            },
            {
              topic: "Things to do in Eberswalde",
              content: (
                <div id="eberswalde">
                  <CoolThings
                    things={[
                      {
                        name: <b>🥩 Tiffy{"'"}s family butchery 👌</b>,
                        href: "https://www.fleischerei-tassler.de",
                      },
                      {
                        name: "🍨 Ice cream",
                        href: "http://www.eiscafe-venezia-piazza.de",
                      },
                      {
                        name: "⛪ Monastery Chorin",
                        href: "https://www.kloster-chorin.org",
                      },
                      {
                        name: "🚢 Giant lift for boats",
                        href: "https://schiffshebewerk-niederfinow.com",
                      },
                      {
                        name: "🛝 Family garden",
                        href: "https://familiengarten-eberswalde.de",
                      },
                      {
                        name: "🛝 Indoor playground",
                        href: "https://fitolino.de",
                      },
                      {
                        name: "🏊 Swimming pool",
                        href: "https://www.baff-bad.de",
                      },
                      {
                        name: "🧗 Climbing center",
                        href: "https://www.bloc48.de",
                      },
                      {
                        name: "🌳 Botanical garden",
                        href: "https://www.hnee.de/en/University/Central-Facilities/Forest-Botanical-Garden/Forstbotanischer-Garten-Eberswalde-E2168.htm",
                      },
                      {
                        name: "🪶 Ostrich farm",
                        href: "https://www.straussenfarm-liebenstein.de",
                      },
                      {
                        name: "🦌 Wild park",
                        href: "https://wildpark-schorfheide.de",
                      },
                      {
                        name: "🐧 Zoo",
                        href: "https://zoo.eberswalde.de",
                      },
                    ]}
                  />
                </div>
              ),
            },
            {
              topic: "Things to do in Berlin",
              content: (
                <div id="berlin">
                  <h4 className="sub-text">
                    <b>Shopping</b>
                  </h4>
                  <CoolThings
                    things={[
                      {
                        name: "🛍️ Mall of Berlin",
                        href: "https://www.mallofberlin.de",
                      },
                      {
                        name: "🛍️ ALEXA Berlin",
                        href: "https://www.alexacentre.com",
                      },
                      {
                        name: "🛍️ Bikini Berlin",
                        href: "https://www.bikiniberlin.de",
                      },
                    ]}
                  />
                  <h4 className="sub-text">
                    <b>Museums</b>
                  </h4>
                  <CoolThings
                    things={[
                      {
                        name: "🦖 Natural Science",
                        href: "https://www.museumfuernaturkunde.berlin",
                      },
                      {
                        name: "✈️ Technical",
                        href: "https://sdtb.de/stiftung/startseite",
                      },
                      {
                        name: "🕵🏻 Spy",
                        href: "https://www.deutsches-spionagemuseum.de",
                      },
                      {
                        name: "🍌 GDR",
                        href: "https://www.ddr-museum.de",
                      },
                    ]}
                  />
                  <h4 className="sub-text">
                    <b>Others</b>
                  </h4>
                  <CoolThings
                    things={[
                      {
                        name: "🐼 Zoo",
                        href: "https://www.zoo-berlin.de",
                      },
                      {
                        name: "🎥 Sony Center",
                        href: "https://www.sonycenter.de",
                      },
                      {
                        name: "🗼 TV Tower",
                        href: "https://tv-turm.de",
                      },
                      {
                        name: "🏰 Sanssouci Park in Potsdam",
                        href: "http://www.spsg.de/schloesser-gaerten/objekt/park-sanssouci",
                      },
                    ]}
                  />
                </div>
              ),
            },
          ]}
        ></Stories>
      </MainCountry>
    </Page>
  );
}

function CoolThing({ href, children }) {
  return (
    <div className="links">
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
}

function CoolThings({ things }) {
  return (
    <Fragment>
      {things.map((x) => (
        <CoolThing href={x.href} key={x.href}>
          {x.name}
        </CoolThing>
      ))}
    </Fragment>
  );
}
