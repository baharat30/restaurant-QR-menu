import "./resturant.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import berrySalad from "../../pics/resturant/berry.png";
import buffaloImg from "../../pics/resturant/buffalowings.png";
import cesarImg from "../../pics/resturant/cesar.png";
import cocaberryImg from "../../pics/resturant/cocaberry.png";
import coladinnerImg from "../../pics/resturant/coladinner.png";
import frenchfriesImg from "../../pics/resturant/french frys.png";
import fspizzaImg from "../../pics/resturant/fspizza.png";
import garlicbreadImg from "../../pics/resturant/garlicbread.png";
import meatballImg from "../../pics/resturant/meatball.png";
import mohitoImg from "../../pics/resturant/mohito.png";
import originalcocaImg from "../../pics/resturant/originalcoca.png";
import pastaalfredoImg from "../../pics/resturant/pastaalfredo.png";
import peperoniImg from "../../pics/resturant/peperoni.png";
import pestoImg from "../../pics/resturant/pesto.png";
import soupImg from "../../pics/resturant/soup.png";
import specialsImg from "../../pics/resturant/specialsalad.png";
import steakImg from "../../pics/resturant/steak.png";
import stripsImg from "../../pics/resturant/strips.png";
import vegiImg from "../../pics/resturant/vegi.png";

type MenuItem = {
  key: string;
  title: string;
  img: string;
  desc: string;
  price: string;
  category: "Salads" | "Starters" | "Pizzas" | "Pastas" | "Mains" | "Drinks";
};

const items: MenuItem[] = [
  { key: "cesar", title: "Caesar Salad", img: cesarImg, desc: "Classic Caesar salad with parmesan & croutons", price: "200,000 Tomans", category: "Salads" },
  { key: "berry", title: "Berry Salad", img: berrySalad, desc: "Fresh salad with berries & greens", price: "180,000 Tomans", category: "Salads" },
  { key: "specialsalad", title: "Special Salad", img: specialsImg, desc: "Chef’s special healthy salad", price: "190,000 Tomans", category: "Salads" },

  { key: "soup", title: "Soup of the Day", img: soupImg, desc: "Homemade daily soup special", price: "180,000 Tomans", category: "Starters" },
  { key: "fries", title: "French Fries", img: frenchfriesImg, desc: "Golden crispy french fries", price: "100,000 Tomans", category: "Starters" },
  { key: "garlicbread", title: "Garlic Bread", img: garlicbreadImg, desc: "Fresh baked garlic bread with butter", price: "90,000 Tomans", category: "Starters" },
  { key: "buffalo", title: "Buffalo Wings", img: buffaloImg, desc: "Crispy chicken wings with spicy sauce", price: "220,000 Tomans", category: "Starters" },


  { key: "fspizza", title: "Four Seasons Pizza", img: fspizzaImg, desc: "Delicious pizza with mixed toppings", price: "410,000 Tomans", category: "Pizzas" },
  { key: "peperoni", title: "Pepperoni Pizza", img: peperoniImg, desc: "Cheesy pizza topped with pepperoni", price: "390,000 Tomans", category: "Pizzas" },
  { key: "vegi", title: "Vegetarian Pizza", img: vegiImg, desc: "Veggie pizza with fresh toppings", price: "280,000 Tomans", category: "Pizzas" },

  { key: "meatball", title: "Meatball Pasta", img: meatballImg, desc: "Spaghetti with meatballs & tomato sauce", price: "380,000 Tomans", category: "Pastas" },
  { key: "pastaalfredo", title: "Pasta Alfredo", img: pastaalfredoImg, desc: "Creamy Alfredo pasta with parmesan", price: "300,000 Tomans", category: "Pastas" },
  { key: "pesto", title: "Pesto Pasta", img: pestoImg, desc: "Basil pesto pasta with parmesan cheese", price: "370,000 Tomans", category: "Pastas" },


  { key: "steak", title: "Steak", img: steakImg, desc: "Juicy grilled steak with fries", price: "450,000 Tomans", category: "Mains" },
  { key: "strips", title: "Chicken Strips", img: stripsImg, desc: "Crispy chicken strips with dip sauce", price: "310,000 Tomans", category: "Mains" },



  { key: "mohito", title: "Mojito", img: mohitoImg, desc: "Fresh mint mojito with lime", price: "90,000 Tomans", category: "Drinks" },
  { key: "originalcoca", title: "Coca Cola", img: originalcocaImg, desc: "Original Coca Cola served chilled", price: "60,000 Tomans", category: "Drinks" },
  { key: "cocaberry", title: "Coca Berry", img: cocaberryImg, desc: "Refreshing coca cola with berry flavor", price: "70,000 Tomans", category: "Drinks" },
  { key: "coladinner", title: "Fruit Cola", img: coladinnerImg, desc: "Classic cola served with seasonal fruit & ice", price: "60,000 Tomans", category: "Drinks" },
];

export default function RestaurantPage() {
  const grouped = items.reduce((acc: Record<MenuItem["category"], MenuItem[]>, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {} as Record<MenuItem["category"], MenuItem[]>);

  useEffect(() => {
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
        <h1 className="bf-title">Restaurant Menu</h1>
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
