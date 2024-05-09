import Bar from "@/components/Bar/Bar";
import type { Metadata } from "next";
import styles from "./Layout.module.scss";


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
        <Bar />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
