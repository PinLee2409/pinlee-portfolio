import "./globals.css";
import type { Metadata } from "next";
import BackgroundWrapper from "@/components/BackgroundWrapper";

export const metadata: Metadata = {
  title: "PinLee | Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased relative">
        <BackgroundWrapper />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
