import Footer from "./Footer";
import { profile } from "../data/profile";

export default function Layout({ children }) {
  return (
    <div className="page">
      <main className="container">{children}</main>
       <Footer links={ profile.links }/>
    </div>
  );
}
