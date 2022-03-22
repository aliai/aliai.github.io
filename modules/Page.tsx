import React from "react";
import styles from "./Page.module.css";

export default function Page({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) {
  return <div className={styles.page}>{children}</div>;
}
