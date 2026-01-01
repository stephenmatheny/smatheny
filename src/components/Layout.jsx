import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { profile } from "../data/profile";

export default function Layout({ children }) {
  return (
    <div className="page">
      <ScrollProgress />
      <main className="container">{children}</main>
       <Footer links={ profile.links }/>
    </div>
  );
}
