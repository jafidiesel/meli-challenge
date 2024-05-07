import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <p>-----search bar--------</p>
        <div>
          {children}
        </div>
        <hr></hr>
      </body>
    </html>
  );
}
