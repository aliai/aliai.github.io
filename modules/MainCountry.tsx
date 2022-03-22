import React from "react";
import styles from "./MainCountry.module.css";

export default function MainCountry({
  children,
  title,
  linkId,
  date,
  flipped,
  className,
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  title: string;
  linkId: string;
  flipped?: boolean;
  date: React.ReactNode;
}) {
  return (
    <div
      id={linkId}
      className={[styles.main, flipped ? styles.flipped : "", className].join(
        " "
      )}
    >
      <div className={styles.heading}>
        <h1>{title}</h1>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
