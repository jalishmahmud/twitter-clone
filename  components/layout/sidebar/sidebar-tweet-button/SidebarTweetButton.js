import styles from "./SidebarTweetButton.module.css";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SidebarTweetButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={styles["sidebar-tweet-button"]}
    >
      <div className={styles["sidebar-tweet-button"]}>
        <div className={styles["icon"]}>
          <p>{"Tweet"}</p>
        </div>
        <div className={styles["icon-sp"]}>
          <FaFeather size={28} color="white" />
        </div>
      </div>
    </div>
  );
}
