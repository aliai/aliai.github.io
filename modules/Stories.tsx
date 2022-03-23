import React from "react";
import styles from "./Stories.module.css";

export default function Stories({
  stories,
  className,
}: {
  stories: { content: any; time: any; corner: any }[];
  className?: string;
}) {
  return (
    <div className={[styles.stories, className].join(" ")}>
      {stories.map((story) => (
        <div className={styles.story} key={story.time}>
          <span className={styles.head}>
            <span className={styles.topic}>
              {story.time.includes("-") ? (
                <Times time={story.time} />
              ) : (
                <Time time={story.time} />
              )}
            </span>
            <span className={styles.corner}>{story.corner}</span>
          </span>
          {story.content}
        </div>
      ))}
    </div>
  );
}

function Time({ time }) {
  const [hour, min_] = time.split(":");
  const min = min_.substr(0, 2);
  const amorpm = min_.substr(2);
  return (
    <span>
      {hour}
      <span className={styles.muted}>:</span>
      {min}
      <span className={styles.amorpm}>{amorpm}</span>
    </span>
  );
}

function Times({ time }) {
  const [from, till] = time.split("-");
  return (
    <span>
      <Time time={from} />
      <span className={styles.dashed}> - </span>
      <Time time={till} />
    </span>
  );
}
