import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useCallback, useState } from "react";
import Input from "../../input/Input";
import Modal from "../../modal/Modal";
import styles from "./RegisterModal.module.css";
export default function RegisterModal() {
  const LoginModal = useLoginModal();
  const RegisterModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    RegisterModal.onClose();
    LoginModal.onOpen();
  }, [isLoading, RegisterModal, LoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: register add login

      RegisterModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [RegisterModal]);

  const bodyContent = (
    <div className={styles["login-body"]}>
      <Input
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder={"Name"}
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder={"Username"}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
        Already have an account?{" "}
        <span onClick={onToggle} className={styles["toggle-text"]}>
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={RegisterModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
