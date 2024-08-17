import "~/styles/globals.scss";
import styles from "./layout.module.scss";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Frontend Interview | Untether Labs",
  description: "Used in interviews with Untether Labs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <div className={styles.container}>
          <header className={styles.siteHeader}>
            <Link href="/"><img src="/images/logo.svg" alt="Untether Labs logo" className={styles.logo} /></Link>
            <div><strong>Frontend Interview Starter</strong></div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
