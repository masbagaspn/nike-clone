import Footer from "./components/footer/Footer";
import DesktopHeader from "./components/header/DesktopHeader";
import MobileHeader from "./components/header/MobileHeader";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Time Messenger",
  description: "a real time messenger web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DesktopHeader />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
