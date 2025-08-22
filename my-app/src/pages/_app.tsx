import "@/styles/globals.css";
import type { AppProps } from "next/app";

import '../styles/globals.css';
import card from "@/Components/Card";
//import Button from "@/Components/button";





export default function app({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen p-4">
      <Component {...pageProps} />
    </div>
  );




}
