import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";  // آیکن دلخواه
import "./scrollToTop.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowCircleUp size={40} />
    </button>
  );
}
