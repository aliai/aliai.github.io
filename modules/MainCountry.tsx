import { useRouter } from "next/router";
import React, { InputHTMLAttributes } from "react";
import Dialog from "./Dialog";
import styles from "./MainCountry.module.css";

const parts = [
  "1A09",
  "1AC9",
  "1AD0",
  "3663",
  "3740",
  "3F82",
  "4ECA",
  "66DA",
  "6A8A",
  "796B",
  "8415",
  "8A4D",
  "9B64",
  "9B9A",
  "9F79",
  "A314",
  "A37A",
  "BC38",
  "CD42",
  "D023",
  "D889",
  "DAA2",
  "F50D",
  "FA77",
];
const order = [
  11, 1, 2, 8, 21, 16, 4, 22, 6, 20, 14, 9, 15, 17, 19, 13, 7, 5, 10, 23, 0, 18,
  3, 12,
];
const recipients = [["liamg", "grpila"]];

const url = ["YXBpLmVsYXN0aWNlbWFpbC5jb20=", "djI=", "ZW1haWw=", "c2VuZA=="];

export default function MainCountry({
  children,
  completed,
  title,
  linkId,
  date,
  className,
  style,
}: {
  children: React.ReactChild | React.ReactChild[];
  completed?: boolean;
  className?: string;
  title: string;
  linkId: string;
  date: React.ReactNode;
  style: any;
}) {
  const [rsvp, setRsvp] = React.useState<{
    loading: boolean;
    error?: Error;
    data?: any;
    open?: boolean;
  }>({
    loading: false,
  });
  const nameRef = React.useRef<InputHTMLAttributes<any>>();
  const send = React.useCallback((names) => {
    const key = order.map((x) => parts[x]).join("");
    const body = new URLSearchParams(
      Object.entries({
        subject: "AlTi Wedding: " + title,
        from: "rsvp@alti.wedding",
        fromName: names,
        lists: "alti",
        bodyText: names,
      })
    );
    setRsvp({ loading: true });
    fetch("https://" + url.map(atob).join("/"), {
      method: "POST",
      headers: {
        "X-ElasticEmail-ApiKey": key,
      },
      body,
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json();
          if (json.success) {
            setRsvp({ loading: false, data: json });
            return;
          }
        }
        const text = await res.text();
        setRsvp({ loading: false, error: new Error(text) });
      })
      .catch((error) => {
        setRsvp({ loading: false, error });
      });
  }, []);
  const successfulRsvp = !rsvp.loading && !rsvp.error && rsvp.data;

  if (completed) {
    return (
      <div
        id={linkId}
        className={[styles.main, className].filter(Boolean).join(" ")}
        style={style}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      id={linkId}
      className={[styles.main, className].filter(Boolean).join(" ")}
    >
      <Dialog
        open={rsvp.open}
        onClose={() => {
          setRsvp((prev) => ({ ...prev, open: false }));
        }}
      >
        <div className={styles.dialogHeader}>
          <h3>{title}</h3>
          <div>{date}</div>
        </div>
        <div className={styles.dialogField}>
          <label>Names</label>
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your names here"
            ref={nameRef as any}
          ></input>
        </div>
        <div className={styles.dialogFooter}>
          <button
            className={[styles.button].join(" ")}
            disabled={rsvp.loading}
            onClick={() => {
              if (!nameRef.current) {
                return;
              }
              const value = nameRef.current.value;
              if (typeof value === "string" && value.trim()) {
                send(nameRef.current.value);
              }
            }}
          >
            Send
          </button>
        </div>
      </Dialog>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <span className={styles.date}>{date}</span>

        <div className={styles.buttonGroup}>
          {successfulRsvp ? (
            <p>Thanks for your reply :)</p>
          ) : rsvp.error ? (
            <p>
              Something went wrong. Please send us your names to{" "}
              <b>
                {recipients[0]
                  // @ts-ignore
                  .map((x) => [...x].reverse().join(""))
                  .reverse()
                  .join("@") + ".com"}
              </b>
            </p>
          ) : (
            <button
              className={[styles.button, styles.glow].join(" ")}
              disabled={rsvp.loading}
              onClick={() => {
                setRsvp((prev) => ({ ...prev, open: true }));
              }}
            >
              I{"'"}m in!
            </button>
          )}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
