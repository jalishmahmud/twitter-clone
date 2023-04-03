import Layout from "../ components/layout/Layout";
import RegisterModal from "@/ components/modals/register-modal/RegisterModal";
import "@/styles/globals.css";
import LoginModal from "@/ components/modals/login-modal/LoginModal";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
