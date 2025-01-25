

var body = document.querySelector("#body");
var cursor = document.querySelector("#cursor");
var text1 = document.querySelector("#text");
var text2 = document.querySelector("#text-2");
body.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        
    })
})
text1.addEventListener("mouseenter", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        scale: 2,
        opacity: 50,
        backgroundColor: 'rgba(128, 128, 128,.8)',
        
    })
})
text1.addEventListener("mouseleave", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        scale: 1,
        opacity: 100,
        backgroundColor: '#181822',
        
    })
})
text2.addEventListener("mouseenter", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        scale: 2,
        opacity: 50,
        backgroundColor: 'rgba(128, 128, 128,.8)',
        
    })
})
text2.addEventListener("mouseleave", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        scale: 1,
        opacity: 100,
        backgroundColor: '#181822',
        
    })
})
// Register ScrollTrigger
// Register GSAP ScrollTrigger plugin
// Register the ScrollTrigger plugin





// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate heading
gsap.from("#services h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Animate cards on scroll
gsap.from(".card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#services",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

// Hover animations for cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Button hover animation
document.querySelectorAll(".btn span").forEach((span) => {
  span.style.transform = "translate(100%, 100%)";
});

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button.querySelector("span"), {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button.querySelector("span"), {
      x: "100%",
      y: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  });
});




