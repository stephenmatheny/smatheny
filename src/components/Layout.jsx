import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { profile } from "../data/profile";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <div className="page">
      <ScrollProgress />
      <main className="container">{children}</main>

      <Analytics />
      
      <Footer links={profile.links} />
    </div>
  );
}
