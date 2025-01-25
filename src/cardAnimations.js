document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.from(card, {
        clipPath: "inset(0% 100% 0% 0%)", // Initially hidden from the right
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // Starts when each card is 90% visible
          toggleActions: "play none none none",
          delay:.5,
        }
      });
    });
  });
  