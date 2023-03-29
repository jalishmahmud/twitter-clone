import styles from "./Button.module.css";

export default function Button({
  label,
  secondary,
  fullWidth,
  large,
  callBack,
  disabled,
  outline,
}) {
  return (
    <button
      className={`
    ${styles["button"]}
    ${disabled && styles["disabled"]}
    ${secondary && styles["secondary"]}
    ${fullWidth && styles["full-width"]}
    ${large && styles["large"]}
    ${outline && styles["outline"]}
    `}
      onClick={callBack}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
