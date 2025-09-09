import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./socialinfo.css";

type Props = {
  className?: string;
};

export default function SocialInfo({ className }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = (name: string) => {
    setOpen(open === name ? null : name);
  };

  // بستن با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`social-info ${className || ""}`}>
      {/* Instagram */}
      <div className="social-icon" onClick={() => toggle("instagram")}>
        <FaInstagram />
        {open === "instagram" && (
          <div className="dropdown">HESS_Lounge</div>
        )}
      </div>

      {/* Phone */}
      <div className="social-icon" onClick={() => toggle("phone")}>
        <FaPhoneAlt />
        {open === "phone" && (
          <div className="dropdown">0987654321</div>
        )}
      </div>

      {/* Location */}
      <div className="social-icon" onClick={() => toggle("location")}>
        <FaMapMarkerAlt />
        {open === "location" && (
          <div className="dropdown">📍 Sanandaj, Iran</div>
        )}
      </div>
    </div>
  );
}
