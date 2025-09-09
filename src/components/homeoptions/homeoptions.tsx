import { Link } from "react-router-dom";
import "./homeoptions.css";

type Props = {
  className?: string;
};

export default function MenuButtons({ className }: Props) {
  return (
    <div className={`menu-buttons ${className || ""}`}>
      <Link to="/breakfast" className="menu-btn">
        <span>Breakfast</span>
      </Link>
      <Link to="/cafe" className="menu-btn">
        <span>Cafe</span>
      </Link>
      <Link to="/restaurant" className="menu-btn">
        <span>Restaurant</span>
      </Link>
    </div>
  );
}
