import "~/styles/globals.scss";
import styles from "./layout.module.scss";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ToDo App",
  description: "Practice :)",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
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
            <Link href="/">Home</Link> | 
            <Link href="/todos">ToDo App</Link>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
