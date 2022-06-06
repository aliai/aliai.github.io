import Document from "next/document";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./Dialog.module.css";

export default function Dialog({
  children,
  open,
  onClose,
}: {
  children: React.ReactChild | React.ReactChild[];
  open?: boolean;
  onClose?: () => void;
}) {
  const [isBrowser, setIsBrowser] = React.useState(false);
  React.useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleCloseClick = (e) => {
    e.preventDefault();
    if (onClose) onClose();
  };
  if (!isBrowser) return null;
  return ReactDOM.createPortal(
    open ? (
      <div className={styles.dialog}>
        <div className={styles.body}>
          <div className={styles.close} onClick={handleCloseClick}>
            X
          </div>
          {children}
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root")
  );
}
