import "@/styles/globals.css";
import "@/styles/chat.scss";
import "@/styles/settings.scss";

import "@/styles/chatItem.scss";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
