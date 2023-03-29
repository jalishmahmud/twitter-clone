import { useCallback } from "react";
import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button/Button";
export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className={styles["modal"]}>
        <div className={styles["wrapper"]}>
          {/* content */}
          <div className={styles["content"]}>
            {/* header */}
            <div className={styles["header"]}>
              <h3 className={styles["title"]}>{title}</h3>
              <button className={styles["close-icon"]}>
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className={styles["body"]}>{body}</div>
            <div className={styles["footer"]}>
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
