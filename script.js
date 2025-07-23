


// script.js




const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



const typedText = document.querySelector(".typed-text");
const roles = ["Web Designer", "Full Stack Developer", "Graphic Designer", "UI/UX Artist"];
let index = 0;
let charIndex = 0;
let typing = true;

function typeAnimation() {
  if (typing) {
    if (charIndex < roles[index].length) {
      typedText.textContent += roles[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeAnimation, 100);
    } else {
      typing = false;
      setTimeout(typeAnimation, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = roles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeAnimation, 50);
    } else {
      typing = true;
      index = (index + 1) % roles.length;
      setTimeout(typeAnimation, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeAnimation();
});





// Optional interactivity (you can expand this)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Swati's Portfolio Loaded");
});













