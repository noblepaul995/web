document.addEventListener("DOMContentLoaded", function () {
    let isMainCarouselActive = false;
    let expandedContainer = null;

    const absoluteImage = document.querySelector(".proimg img");
    const images = document.querySelectorAll(".floating-images img");
    const imagesContainer = document.querySelector(".floating-images");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    let currentIndex = 0;
    let isAnimating = false;

    function changeImage(index) {
        if (!absoluteImage || images.length === 0 || isAnimating || expandedContainer) return;
        isAnimating = true;
        isMainCarouselActive = true;

        let prevIndex = currentIndex;
        currentIndex = (index + images.length) % images.length;
        let direction = currentIndex > prevIndex ? 1 : -1;

        gsap.timeline()
            .to(absoluteImage, { opacity: 0.7, scale: 1.1, filter: "blur(10px)", duration: 0.7 })
            .add(() => {
                absoluteImage.src = images[currentIndex].src;

                // Highlight the active thumbnail
                images.forEach((img, i) => {
                    if (i === currentIndex) {
                        img.classList.add("active-image"); // Add a highlight class
                    } else {
                        img.classList.remove("active-image");
                    }
                });
            })
            .to(absoluteImage, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out", onComplete: () => {
                isAnimating = false;
                isMainCarouselActive = false;
            }});

        gsap.to(".proimg", { y: direction * 30, duration: 0.7, ease: "power2.out" });

        gsap.timeline()
            .to(imagesContainer, { scale: 0.9, rotation: direction * 5, opacity: 0.5, duration: 0.4 })
            .to(imagesContainer, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "power2.out" });

        // **Center the current image in the container**
        requestAnimationFrame(() => {
            const targetImage = images[currentIndex];
            const containerRect = imagesContainer.getBoundingClientRect();
            const imageRect = targetImage.getBoundingClientRect();

            // Calculate the scroll offset to center the image in the container
            const centerOffset = (containerRect.width / 2) - (imageRect.width / 2) - (imageRect.left - containerRect.left);

            // Scroll the container to center the image
            imagesContainer.scrollTo({
                left: targetImage.offsetLeft - (containerRect.width / 2) + (imageRect.width / 2),
                behavior: "smooth"
            });
        });
    }

    function nextImage() {
        changeImage(currentIndex + 1);
    }

    function prevImage() {
        changeImage(currentIndex - 1);
    }

    rightArrow.addEventListener("click", () => {
        changeImage(currentIndex + 1);
    });

    leftArrow.addEventListener("click", () => {
        changeImage(currentIndex - 1);
    });

    setInterval(nextImage, 10000);

    if (images.length > 0) {
        absoluteImage.src = images[0].src;
    }

    setTimeout(() => {
        changeImage(0);
    }, 300);

    // Disable page scroll temporarily while the carousel is active
    document.addEventListener("scroll", function (e) {
        if (isMainCarouselActive) {
            e.preventDefault();  // Prevent page scroll when carousel is active
        }
    }, { passive: false });

    // **📌 Image Expansion with Close Button**
    images.forEach((img) => {
        img.addEventListener("click", function () {
            if (expandedContainer) return;

            isMainCarouselActive = true;

            expandedContainer = document.createElement("div");
            expandedContainer.classList.add("expanded-container");
            expandedContainer.innerHTML = `
                <div class="expanded-left">
                    <img src="${img.src}" class="expanded-img" />
                </div>
                <div class="expanded-right">
                    <button class="close-btn">✖</button>
                    <h2>Image Preview</h2>
                    <p>Click anywhere to close.</p>
                    <a href="${img.src}" target="_blank" class="live-preview-btn">View Full Image</a>
                </div>
            `;
            document.body.appendChild(expandedContainer);

            gsap.fromTo(
                expandedContainer.querySelector(".expanded-left img"),
                { x: "-100vw", opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );

            gsap.fromTo(
                expandedContainer.querySelector(".expanded-right"),
                { x: "100vw", opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );

            expandedContainer.addEventListener("click", closeExpandedView);

            expandedContainer.querySelector(".close-btn").addEventListener("click", function (event) {
                event.stopPropagation();
                closeExpandedView();
            });
        });
    });

    function closeExpandedView() {
        if (!expandedContainer) return;

        gsap.to(expandedContainer, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                expandedContainer.remove();
                expandedContainer = null;
                isMainCarouselActive = false;
            },
        });
    }
});
