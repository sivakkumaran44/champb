import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "BCHAMP",
  description: "BCHAMP",
  icons: {
    icon: [
      { url: "/assets/img/LOGO SVG.svg" },
      { url: "/assets/img/LOGO SVG.svg", sizes: "16x16", type: "image/png" },
      { url: "assets/img/LOGO SVG.svg", sizes: "32x32", type: "image/png" },
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