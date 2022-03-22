import React from "react";
import styles from "./Stories.module.css";

export default function Stories({
  stories,
  className,
}: {
  stories: { content: any; time: any }[];
  className?: string;
}) {
  return (
    <div className={[styles.stories, className].join(" ")}>
      {stories.map((story) => (
        <div className={styles.story} key={story.time}>
          <span className={styles.topic}>{story.time}</span>
          {story.content}
        </div>
      ))}
    </div>
  );
}
