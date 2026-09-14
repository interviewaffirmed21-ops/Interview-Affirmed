import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import YouTubeFloat from "./YouTubeFloat";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <YouTubeFloat />
  </div>
);

export default Layout;
