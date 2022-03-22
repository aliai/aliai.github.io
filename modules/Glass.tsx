import React from "react";
import styles from "./Glass.module.css";

export default function Glass({
  children,
  className,
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}) {
  return <div className={[styles.glass, className].join(" ")}>{children}</div>;
}
