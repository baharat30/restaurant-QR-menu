import { useEffect } from "react";
import "./homepage.css";
import MenuButtons from "../../components/homeoptions/homeoptions";
import SocialInfo from "../../components/socialInfo/socialinfo";

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);


  return (
    <div className="home" dir="rtl">
      <h1 className="brand">HESS RESTAURANT</h1>
      <MenuButtons className="meno" />
      <SocialInfo className="social" />
    </div>
  );
}

