import gsap from "gsap";
import SplitType from "split-type";

export function animateHero() {
  const text1 = new SplitType("#text1", { types: "chars" });
  const text2 = new SplitType("#text2", { types: "chars" });

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  console.log(viewportHeight, viewportWidth);

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

  gsap.to("#text1", {
    opacity: 1,
    x:  -viewportWidth/12,
    duration: 3.2,
    ease: "power3.out",
  });

  gsap.to("#text2", {
    opacity: 1,
    x: viewportWidth/12,
    duration: 3.2,
    ease: "power3.out",
    delay: 1.3,
  });

  gsap.to("#middle", {
    opacity: 1,
    scale: 2.2,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 2.6,
    rotateZ: -180,
  });
}