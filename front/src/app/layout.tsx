import type { Metadata } from "next";
import styles from "./Layout.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";

export const metadata: Metadata = {
  title: "Meli Challenge",
  description: "Developed by Jafi Bravin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={styles.body}>
        <SearchBar />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
