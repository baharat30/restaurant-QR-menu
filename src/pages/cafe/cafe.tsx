// src/pages/cafe/cafe.tsx
import "./cafe.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import chocolateCake from "../../pics/cafe/chocolate.png";
import cheeseCake from "../../pics/cafe/cheese.png";
import tiramisu from "../../pics/cafe/tir.png";
import coffee from "../../pics/cafe/coffee.png";
import machaLatte from "../../pics/cafe/machaL.png";   // مطمئن شو اسم فایل دقیقاً machaL.png است
import masalaTea from "../../pics/cafe/masala.png";
import mintTea from "../../pics/cafe/mint.png";
import spirulinaLatte from "../../pics/cafe/spiru.png";

type MenuItem = {
  key: string;
  title: string;
  img: string;
  desc: string;
  price: string;
  category: string;
};

const items: MenuItem[] = [
  // Drinks
  { key: "coffee", title: "Coffee", img: coffee, desc: "Freshly brewed espresso-based coffee drinks", price: "80,000 Tomans", category: "Drinks" },
  { key: "masalaTea", title: "Masala Tea", img: masalaTea, desc: "Spiced Indian tea brewed with milk & herbs", price: "100,000 Tomans", category: "Drinks" },
  { key: "machaLatte", title: "Matcha Latte", img: machaLatte, desc: "Creamy Japanese green tea latte with foam", price: "120,000 Tomans", category: "Drinks" },
  { key: "mintTea", title: "Mint Tea", img: mintTea, desc: "Refreshing herbal tea infused with fresh mint leaves", price: "90,000 Tomans", category: "Drinks" },
  { key: "spirulinaLatte", title: "Spirulina Latte", img: spirulinaLatte, desc: "Healthy blue latte made with spirulina & milk", price: "140,000 Tomans", category: "Drinks" },

  // Desserts
  { key: "chocolateCake", title: "Chocolate Cake", img: chocolateCake, desc: "Rich and moist chocolate cake with ganache topping", price: "220,000 Tomans", category: "Desserts" },
  { key: "cheeseCake", title: "Cheesecake", img: cheeseCake, desc: "Classic creamy cheesecake with berry sauce", price: "200,000 Tomans", category: "Desserts" },
  { key: "tiramisu", title: "Tiramisu", img: tiramisu, desc: "Italian dessert layered with mascarpone & coffee", price: "240,000 Tomans", category: "Desserts" },
];

export default function CafePage() {
  const grouped = items.reduce((acc: Record<string, MenuItem[]>, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    // در صفحات داخلی اسکرول را آزاد می‌کنیم
    document.body.classList.remove("no-scroll");
  }, []);

  return (
    <div className="bf-screen">
      <header className="bf-header">
        <Link
          to="/"
          replace
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
          className="bf-back"
        >
          ← Back to Home
        </Link>
        <h1 className="bf-title">Cafe Menu</h1>
      </header>

      <section className="bf-list">
        {Object.entries(grouped).map(([category, groupItems]) => (
          <div key={category} className="menu-section">
            <h2 className="menu-category">{category}</h2>
            {groupItems.map((it) => (
              <div className="bf-card-vertical" key={it.key}>
                <img
                  loading="lazy"       // 👈 مهم
                  decoding="async"     // (اختیاری) رندر روان‌تر
                  width={140}          // (اختیاری) برای جلوگیری از layout shift
                  height={140}
                  src={it.img} alt={it.title} className="bf-img" />
                <div className="bf-info">
                  <h3 className="title">{it.title}</h3>
                  <p className="desc">{it.desc}</p>
                  <span className="price">{it.price}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
