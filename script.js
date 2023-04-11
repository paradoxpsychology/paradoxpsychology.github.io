document.getElementById("toggle").addEventListener("click", function() {
    const toggleButton = document.getElementById("toggle");
    const navButtons = document.querySelectorAll(".nav-button");
    
    if (toggleButton.textContent === "Expand menu") {
      for (const navButton of navButtons) {
        navButton.style.display = "block";
      }
      toggleButton.textContent = "Collapse menu";
    } else {
      for (const navButton of navButtons) {
        navButton.style.display = "none";
      }
      toggleButton.textContent = "Expand menu";
    }
  });

  const imagesList = [
    "./assets/yoga.webp",
    "./assets/balance.webp",
    "./assets/lotus.webp",
    "./assets/ripple.webp",
    "./assets/lotus2.webp"
  ];
  
  const heroSection = document.getElementById('hero');
  const randomImageIndex = Math.floor(Math.random() * imagesList.length);
  const selectedImage = imagesList[randomImageIndex];
  // Set the background-image property with the image URL
  heroSection.style.backgroundImage = `url('${selectedImage}')`;