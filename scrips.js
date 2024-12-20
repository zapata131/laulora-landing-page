function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// Something new
document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll(".question-toggle");

    toggles.forEach(function(toggle) {
        toggle.addEventListener("click", function() {
            var answerContainer = this.nextElementSibling;
            var indicator = this.querySelector('.indicator');

            if (answerContainer.style.display === "block") {
                answerContainer.style.display = "none";
                indicator.textContent = "▶";
            } else {
                answerContainer.style.display = "block";
                indicator.textContent = "▾";
            }
        });
    });
});
