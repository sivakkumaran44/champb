import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "bChamp",
  description: "bChamp",
  icons: {
    icon: [
      { url: "/assets/img/Logo.png" },
      { url: "/assets/img/Logo.png", sizes: "16x16", type: "image/png" },
      { url: "assets/img/Logo.png", sizes: "32x32", type: "image/png" },
    ], 
  },
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;