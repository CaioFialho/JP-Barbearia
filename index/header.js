let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const header = document.querySelector("header");

      if (prevScrollPos > currentScrollPos) {
        header.style.height = "8vh"; // Ajuste a altura desejada
      } else {
        header.style.height = "6vh"; // Ajuste a altura desejada
      }

      prevScrollPos = currentScrollPos;
  };