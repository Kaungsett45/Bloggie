
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessProvider } from "./components/SessProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <SessProvider>
        {children}
        </SessProvider>
      </body>
    </html>
  );
}
