import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import styles from "./SidebarLogo.module.css";

export default function SidebarLogo() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className={styles["sidebar-logo"]}>
      <BsTwitter size={28} color="white" />
    </div>
  );
}
