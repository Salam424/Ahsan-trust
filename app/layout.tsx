import type { Metadata } from "next";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Ahsan Trust",
  description: "We help our locals achieve their Dreams here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.variable}>{children}</body>
    </html>
  );
}
