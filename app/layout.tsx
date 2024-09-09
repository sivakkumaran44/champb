import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";


interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
