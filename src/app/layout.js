import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EasyFood | Easy Recipe ",
  description: "Easy Food Recipe for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className={`${styles.left} hover:font-extrabold`}>
            <Link href="/">EasyFood</Link>
          </div>
          <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
          </div>
        </header>
        {children}

        <footer className={styles.footer}>
          <a href="https://ashkanyaghobi.ir" target="_blank" rel="noreferrer">
            Ashkan Yaghobi Projects @ 2024 | A.R.R
          </a>
        </footer>
      </body>
    </html>
  );
}
