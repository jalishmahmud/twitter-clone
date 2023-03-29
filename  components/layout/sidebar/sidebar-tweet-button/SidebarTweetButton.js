import styles from "./SidebarTweetButton.module.css";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";

export default function SidebarTweetButton() {
  const router = useRouter();
  const loginModal = useLoginModal();
  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick} className={styles["sidebar-tweet-button"]}>
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
