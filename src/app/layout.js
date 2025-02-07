import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import appStore from "./lib/redux/store";
import { Providers } from "./lib/redux/provider";
const inter = Inter({ subsets: ["latin"] });
// import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
