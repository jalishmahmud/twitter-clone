import styles from "./Input.module.css";

export default function Input({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className={`
    
    ${styles["input"]}
    ${disabled && styles["disabled"]}

    `}
    />
  );
}
