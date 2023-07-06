import "@/styles/globals.css";
import { Lato, Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  fallback: ["system-ui", "sans-serif"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "variable",
  fallback: ["system-ui", "sans-serif"],
});

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <main className={`${lato.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
