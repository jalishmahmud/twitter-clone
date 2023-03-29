import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useCallback, useState } from "react";
import Input from "../../input/Input";
import Modal from "../../modal/Modal";
import styles from "./LoginModal.module.css";
export default function LoginModal() {
  const LoginModal = useLoginModal();
  const RegisterModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    LoginModal.onClose();
    RegisterModal.onOpen();
  }, [isLoading, RegisterModal, LoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: add login

      LoginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [LoginModal]);

  const bodyContent = (
    <div className={styles["login-body"]}>
      <Input
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className={styles["footer-content"]}>
      <p>
        First time using twitter?{" "}
        <span onClick={onToggle} className={styles["toggle-text"]}>
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={LoginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
