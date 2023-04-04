import { useRouter } from "next/router";
import styles from "./SidebarItem.module.css";
import { useCallback } from "react";

export default function SidebarItem({ href, label, icon: Icon, onClick }) {
  const router = useRouter();
  const handleOnClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (href) {
      router.push(href);
    }
  }, [href, onClick, router]);

  return (
    <div onClick={handleOnClick} className={styles["sidebar-item"]}>
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
