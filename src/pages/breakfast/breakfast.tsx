// src/pages/breakfast/breakfast.tsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./breakfast.css";

import croissantImg from "../../pics/breakfast/cr.png";
import honeyImg from "../../pics/breakfast/hon.png";
import omeletteImg from "../../pics/breakfast/omm.png";
import pancakeImg from "../../pics/breakfast/pc.png";
import persianImg from "../../pics/breakfast/persianB.png";
import wafflesImg from "../../pics/breakfast/waffles.png";

type BFItem = {
    key: string;
    title: string;
    img: string;
    desc: string;
    price: string;
};

const items: BFItem[] = [
    { key: "croissant", title: "Croissant", img: croissantImg, desc: "Fresh baked croissants with butter", price: "120,000 Tomans" },
    { key: "pancakes", title: "Pancakes", img: pancakeImg, desc: "Fluffy pancakes with maple syrup", price: "150,000 Tomans" },
    { key: "honey", title: "Honey & Butter", img: honeyImg, desc: "Local honey served with butter & bread", price: "100,000 Tomans" },
    { key: "waffles", title: "Waffles", img: wafflesImg, desc: "Crispy waffles with cream & fruits", price: "170,000 Tomans" },
    { key: "persian", title: "Persian Breakfast", img: persianImg, desc: "Traditional Iranian breakfast set", price: "180,000 Tomans" },
    { key: "omelette", title: "Omelette", img: omeletteImg, desc: "Egg omelette with cheese & herbs", price: "150,000 Tomans" },
];

export default function BreakfastPage() {
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
                <h1 className="bf-title">Breakfast Menu</h1>
            </header>

            <section className="bf-list">
                {items.map((it) => (
                    <div className="bf-card-vertical" key={it.key}>
                        <img 
                          loading="lazy"       // 👈 مهم
                  decoding="async"     // (اختیاری) رندر روان‌تر
                  width={140}          // (اختیاری) برای جلوگیری از layout shift
                  height={140}
                        src={it.img} alt={it.title} className="bf-img" />
                        <div className="bf-info">
                            <h2 className="title">{it.title}</h2>
                            <p className="desc">{it.desc}</p>
                            <span className="price">{it.price}</span>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
