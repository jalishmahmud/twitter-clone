import Layout from "../ components/layout/Layout";
import RegisterModal from "@/ components/modals/register-modal/RegisterModal";
import "@/styles/globals.css";
import LoginModal from "@/ components/modals/login-modal/LoginModal";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
