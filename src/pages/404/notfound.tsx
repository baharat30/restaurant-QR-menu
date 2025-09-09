// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>The Page you are looking for does not exist.</p>
      <Link to="/">← back to home</Link>
    </div>
  );
}
