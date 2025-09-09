import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/homepage/homepage";
import Breakfast from "./pages/breakfast/breakfast";
import Cafe from "./pages/cafe/cafe";
import Restaurant from "../src/pages/resturant/resturant";
import ScrollToTopButton from "./components/ScrollToTopButton/scrolltotop";
import NotFound from "./pages/404/notfound"

function ScrollManager() {
  const { pathname } = useLocation();

  // غیرفعال کردن بازگردانی اسکرول مرورگر
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
      return () => {
        history.scrollRestoration = "auto";
      };
    }
  }, []);

  // قفل اسکرول فقط روی Home
  useEffect(() => {
    const body = document.body;
    if (pathname === "/") {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [pathname]);

  // همیشه ورود به Home → بالای صفحه
  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <ScrollToTopButton /> 
    </>
  );
}
