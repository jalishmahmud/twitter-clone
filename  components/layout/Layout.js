import Sidebar from "./sidebar/Sidebar";
import styles from "./Layout.module.css";
import FollowBar from "./follow-bar/FollowBar";
export default function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["sidebar"]}>
            <Sidebar />
          </div>
          <div className={styles["main"]}>{children}</div>
          <div className={styles["follow-bar"]}>
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
}
