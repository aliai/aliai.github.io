import { useRouter } from "next/router";
import React from "react";
import styles from "./MainCountry.module.css";

export default function MainCountry({
  children,
  title,
  linkId,
  date,
  className,
}: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  title: string;
  linkId: string;
  date: React.ReactNode;
}) {
  const router = useRouter();
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {
    const handleRouteChange = () => {
      setActive(location.hash === `#${linkId}`);
    };
    handleRouteChange();
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [linkId]);
  return (
    <div
      id={linkId}
      className={[styles.main, className, active ? styles.active : undefined]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.heading}>
        <h1>{title}</h1>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
