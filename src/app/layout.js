import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "FishMart Bangladesh",
  description: "From Local Haat to Your Kitchen, Fresh Fish Delivered",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster/>
        </body>
    </html>
  );
}
