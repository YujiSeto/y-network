import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y",
  description: "Y is a social media platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
