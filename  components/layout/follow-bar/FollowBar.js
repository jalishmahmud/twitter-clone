import styles from "./FollowBar.module.css";

export default function FollowBar() {
  return (
    <div className={styles["follow-bar"]}>
      <div className={styles["wrapper"]}>
        <h2 className={styles["title"]}>Who to follow</h2>
        <div className={styles["user-list"]}>{/* {TODO USER LISTS} */}</div>
      </div>
    </div>
  );
}
