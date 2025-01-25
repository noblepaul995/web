// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".img-container").forEach((image, index) => {
//     gsap.fromTo(
//       image,
//       { opacity: 0, scale: 0.8 }, // Initial state (small and invisible)
//       {
//         opacity: 1, // Fade in
//         scale: 1, // Return to normal size
//         duration: 0.8, // Animation duration
//         delay: index * 0.2, // Stagger animations slightly
//         scrollTrigger: {
//           trigger: image, // Each image triggers its own animation
//           start: "top 90%", // Start when image is 90% in the viewport
//           end: "top 70%", // End when image reaches 70% of viewport
//           scrub: false, // Immediate effect, no smooth scrolling tie
//         },
//       }
//     );
//   });



// about img animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#abt-1",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Step 1: Vertical Reveal Animation (Runs first)
  tl.from("#abt-1", {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1.5,
    ease: "power3.inOut"
  });

  // Step 2: Scaling Animation (Runs after reveal, then loops)
  tl.to("#abt-1", {
    scale: 1.009,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut"
  });
});

//about image 2
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#abt-2",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Step 1: Vertical Reveal Animation (Runs first)
  tl.from("#abt-2", {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1.5,
    ease: "power3.inOut"
  });

  // Step 2: Scaling Animation (Runs after reveal, then loops)
  tl.to("#abt-2", {
    scale: 1.009,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut"
  });
});


