import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import styles from "./Header.module.css";

export default function Header({ label, showBackArrow }) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles["header"]}>
      <div className={styles["wrapper"]}>
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className={styles["icon"]}
          />
        )}
        <h1 className={styles["title"]}>{label}</h1>
      </div>
    </div>
  );
}
