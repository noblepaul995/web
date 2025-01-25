gsap.registerPlugin(TextPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Select the H1 element
  const heading = document.querySelector("#herosect #text-2");

  // Replace text with spans for animation
  heading.innerHTML = heading.innerHTML
    .split("<br>") // Split at line breaks
    .map(line =>
      `<span class="line-break">${line
        .split("")
        .map(char => `<span class="char mb-0">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")}</span>`
    )
    .join("<br>"); // Re-add line breaks

  // Animate each character with GSAP
  gsap.to('.char', {
    opacity: 1,         // Fade in
    y: 0,               // Slide up
    stagger: 0.03,      // Add delay between characters
    duration: 1,        // Animation duration
    ease: "power2.out", // Smooth easing
  });

  // Optional: Animate lines with delay
  gsap.fromTo('.line-break', 
    { y: 50 },         // Initial position
    { y: 0, stagger: 0.3, ease: "power2.out" } // Smooth easing for lines
  );

  
  
  // Split the text into individual characters wrapped in <span> tags, including the word "favourite"
  
  
  // Animate the characters with staggered fade-in effect
  gsap.from("#text-3", {
    opacity: 0,    // Start with opacity 0
    y: 75, 
    delay: 3,   // Delay between each character's animation
    duration: 1,    // Duration of each animation
    ease: "power2.out"        // Start slightly below
  } );
});

gsap.from("#text-4", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#text-4",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});



gsap.from("#text-5", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#text-5",
    start: "top 80%",  // Start animation when the element enters the viewport
    toggleActions: "play none none none"
  }
});

// Neon flickering effect (glow pulsation)
gsap.to("#text-5-1", {
  color: "#00FFFF",  // Pinkish glow effect
  opacity: 0.7,
  repeat: -1,
  yoyo: true,
  duration: .9,
  ease: "power1.inOut",
  delay: 1.5 // Starts after fade-in completes
});
   
  

gsap.registerPlugin(ScrambleTextPlugin);

// gsap.from("#text-6", {
//   opacity: 0,
//   y: 0,
//   duration: 1.5,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: "#text-6",
//     start: "top 80%",  // Start animation when the element enters the viewport
//     toggleActions: "play none none none"
//   }
// });

// Apply scramble effect to both text spans
// gsap.to("#text-6-1", {
//   duration: 1,
//   scrambleText: { 
//     text: "Here’s What You’ve Been Waiting for", 
//     chars: "█▓▒░X$#@!*?", 
//     speed: 0.3
//   },
//   scrollTrigger: {
//     trigger: "#text-6-1",
//     start: "top 80%",  // Start animation when the element enters the viewport
//     toggleActions: "play none none none"
//   },
//   ease: "power2.inOut"
// });

// gsap.to("#text-6 span", {
//   duration: 1,
//   // scrambleText: { 
//   //   text: "(Spoiler: It’s Not Much)", 
//   //   chars: "█▓▒░X$#@!*?", 
//   //   speed: 0.3
//   // },
//   y: (i) => Math.sin(i * 0.5) * 10,
//   repeat: -1,
//   yoyo: true,
//   stagger: 0.1,
//   ease: "sine.inOut",
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#text-6",
//     start: "top 90%",  // Start animation when the element enters the viewport
//     toggleActions: "play none none none"
//   },
  
  
 
// });

// function splitTextIntoSpans() {
//   // Select all the text elements inside #text-6
//   const textElements = document.querySelectorAll('#text-6 span');

//   textElements.forEach(element => {
//     const textContent = element.textContent; // Get the text inside the span
//     element.innerHTML = ''; // Clear the original content

//     // Split the text into individual characters
//     textContent.split('').forEach(char => {
//       // Wrap each character in a span
//       const charSpan = document.createElement('span');
//       charSpan.textContent = char;
//       element.appendChild(charSpan); // Append each character span to the element
//     });
//   });
// }

// // Call the function to split the text into spans
// splitTextIntoSpans();

// // Select all the newly created span elements (characters)
// const chars = document.querySelectorAll('#text-6 span span');

// // GSAP animation to reveal each character one by one
// gsap.fromTo(chars, {
//   opacity: 0,        // Initially invisible
//   y: 20,             // Start slightly below
// }, {
//   opacity: 1,        // Fully visible
//   y: 0,              // Back to normal position
//   duration: 0.5,     // Animation duration for each character
//   stagger: 0.1,      // Delay between characters
//   ease: "power4.out",
//   scrollTrigger: {
//         trigger: "#text-6",
//         start: "top 100%",
//         marker:true,  // Start animation when the element enters the viewport
//         toggleActions: "play none none none"
//       }, // Smooth easing
// });

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function splitTextIntoSpans() {
    const textElements = document.querySelectorAll('#text-6 span');

    textElements.forEach(element => {
      const textContent = element.textContent;
      element.innerHTML = '';

      textContent.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        element.appendChild(charSpan);
      });
    });
  }

  splitTextIntoSpans();

  // Select the characters in #text-6
  const chars = document.querySelectorAll('#text-6 span span');

  // Select and format #text-7
  const textElement = document.querySelector("#text-7");
  let textContent = textElement.innerHTML;

  const wrappedText = textContent.split('. ').map(line => {
    return `<span class="reveal-line">${line.trim()}.</span>`;
  }).join(' ');

  textElement.innerHTML = wrappedText;

  // Select the newly wrapped text spans
  const lines = document.querySelectorAll(".reveal-line");

  // ✅ Create a single GSAP timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#text-6", // Trigger animation when #text-6 enters viewport
      start: "top 80%",   // Start when #text-6 is 80% in the viewport
      toggleActions: "play none none none", 
      markers: true // Debug markers, remove for production
    }
  });

  // ✅ Step 1: Animate text-6 (Characters appear one by one)
  tl.fromTo(chars, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0,
    duration: 0.4, 
    stagger: 0.05,  // Each character appears one after another
    ease: "power4.out"
  });

  // ✅ Step 2: Animate text-7 **after text-6 finishes** (No scrub)
  tl.fromTo(lines, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,  
    stagger: 0.15,  // Each line appears after the previous one
    ease: "power4.out"
  });
});





// document.addEventListener("DOMContentLoaded", function () {
//   // Select the target element
//   const textElement = document.querySelector("#text-7");

//   // Get the text content and split into lines
//   let textContent = textElement.innerHTML;

//   // Wrap each line in a span element
//   const wrappedText = textContent.split('. ').map(line => {
//     return `<span class="reveal-line">${line.trim()}.</span>`;
//   }).join(' '); // Reassemble text after wrapping each sentence

//   // Update the innerHTML with the wrapped lines
//   textElement.innerHTML = wrappedText;

//   // Initialize ScrollTrigger
//   gsap.registerPlugin(ScrollTrigger);

//   // GSAP animation: Reveal each line with stagger effect
//   gsap.fromTo(".reveal-line", {
//     opacity: 0,
//     y: 50,  // Start from below
//   },
//   {
//     opacity: 1,
//     y: 0,   // Move text to its original position
//     duration: .5,
//     stagger: 0.2, // Delay between each line
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: "#text-7",  // Trigger animation when this element comes into view
//       start: "top 60%",    // Animation starts when element is 80% visible in viewport   // When the bottom of the element reaches the top of the viewport      // Scrubs animation to scroll position
//       toggleActions: "play none none none",  // Play on enter
//       markers: true,      // Disable markers, remove for debugging
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  // Select the target element
  const textElement = document.querySelector("#text-8");

  // Get the text content and split into lines
  let textContent = textElement.innerHTML;

  // Wrap each line in a span element
  const wrappedText = textContent.split('. ').map(line => {
    return `<span class="reveal-line-1">${line.trim()}.</span>`;
  }).join(' '); // Reassemble text after wrapping each sentence

  // Update the innerHTML with the wrapped lines
  textElement.innerHTML = wrappedText;

  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animation: Reveal each line with stagger effect
  gsap.fromTo(".reveal-line-1", {
    opacity: 0,
    y: 50,  // Start from below
  },
  {
    opacity: 1,
    y: 0,   // Move text to its original position
    duration: 1,
    stagger: 0.3, // Delay between each line
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#text-8",  // Trigger animation when this element comes into view
      start: "top 100%",    // Animation starts when element is 80% visible in viewport
      end: "top top",   // When the bottom of the element reaches the top of the viewport
      scrub: true,         // Scrubs animation to scroll position
      toggleActions: "play none none none",  // Play on enter
      markers: false,      // Disable markers, remove for debugging
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select the target element
  const textElement = document.querySelector("#text-9");

  // Get the text content and split into lines
  let textContent = textElement.innerHTML;

  // Wrap each line in a span element
  const wrappedText = textContent.split('. ').map(line => {
    return `<span class="reveal-line-2">${line.trim()}.</span>`;
  }).join(' '); // Reassemble text after wrapping each sentence

  // Update the innerHTML with the wrapped lines
  textElement.innerHTML = wrappedText;

  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animation: Reveal each line with stagger effect
  gsap.fromTo(".reveal-line-2", {
    opacity: 0,
    y: 50,  // Start from below
  },
  {
    opacity: 1,
    y: 0,   // Move text to its original position
    duration: 1,
    stagger: 0.3, // Delay between each line
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#text-9",  // Trigger animation when this element comes into view
      start: "top 95%",    // Animation starts when element is 80% visible in viewport
      end: "top top",   // When the bottom of the element reaches the top of the viewport
      scrub: true,         // Scrubs animation to scroll position
      toggleActions: "play none none none",  // Play on enter
      markers: false,      // Disable markers, remove for debugging
    }
  });
});



//connect

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Select all the text elements within the container
  const text = document.querySelector("#connect");
  const letters = text.innerText.split(""); // Split the text into individual letters

  text.innerHTML = ""; // Clear the original text content

  // Create a span for each letter and append it
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    text.appendChild(span);
  });

  // Animate the letters in a wave pattern
  gsap.fromTo(
    "#connect span",
    {
      y: 0, // Start at normal position
      opacity: 0, // Initially invisible
    },
    {
      opacity: 1, // Fade in to normal opacity
      y: (i, target) => Math.sin(i * 0.2) * 20, // Use sine function to create the wave effect
      stagger: 0.05, // Stagger the animation for a wave-like effect
      ease: "power2.out", // Smooth easing
      scrollTrigger: {
        trigger: "#connect",
        start: "top 80%", // Trigger when the element is 80% visible
        toggleActions: "play none none none",
      },
    }
  );
});
