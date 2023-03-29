import styles from "./SidebarItem.module.css";

export default function SidebarItem({ href, label, icon: Icon }) {
  return (
    <div className={styles["sidebar-item"]}>
      <div className={styles["icon"]}>
        <Icon size={24} color="white" />
        <p>{label}</p>
      </div>
      <div className={styles["icon-sp"]}>
        <Icon size={28} color="white" />
      </div>
    </div>
  );
}
