const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.style.opacity = 1;
          slide.style.transform = "translateX(0)";
        } else {
          slide.style.opacity = 0;
          slide.style.transform = "translateX(-10%)";
        }
      });
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }

    setInterval(nextSlide, 5000); // Auto avanço a cada 5 segundos

    showSlide();