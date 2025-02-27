import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import gsap from "gsap";
import SplitType from "split-type";

const text1 = new SplitType("#text1", { types: "chars" });
const text2 = new SplitType("#text2", { types: "chars" });


window.onload = () => { 

  gsap.fromTo(
    text1.chars, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.5, stagger: 0.15, ease: "elastic.inOut" }
);

gsap.fromTo(
    text2.chars, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.5, delay: 1.6, stagger: 0.15, ease: "elastic.inOut" }
);

// Zmena farby časti textu po vypísaní
// gsap.to(".highlight", {
//     color: "gray",
//     delay: 1.5, // Po vypísaní
//     duration: 0.5,
//     ease: "power2.out"
// });

// Animácia načítania textov
gsap.to("#text1", {
    opacity: 1,
    x: -300, // Posunie sa z prava hore
    duration: 3.2,
    ease: "power3.out"
});

gsap.to("#text2", {
    opacity: 1,
    x: 300, // Posunie sa z lava dole
    duration: 3.2,
    ease: "power3.out",
    delay: 1.3 // Malé oneskorenie oproti textu 1
});

gsap.to("#middle", {
    opacity: 1,
    scale: 2.2, // Jemný zoom efekt na X
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 2.6,
    rotateZ: -180,
});

};
