import Footer from "./Footer";
import SiteNav from "./SiteNav";
import ScrollProgress from "./ScrollProgress";
import { profile } from "../data/profile";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children, pageClassName = "" }) {
  const pageClasses = pageClassName ? `page ${pageClassName}` : "page";

  return (
    <div className={pageClasses}>
      <ScrollProgress />
      <SiteNav />
      <div className="container">
        <main>{children}</main>
        <Footer links={profile.links} />
      </div>

      <Analytics />
    </div>
  );
}
