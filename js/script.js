document.addEventListener("DOMContentLoaded", () => {
    const homeGreeting = document.querySelector("h2");
    const currentHour = new Date().getHours();
    let greeting = "Hello!";
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    if (homeGreeting) {
        homeGreeting.textContent = `${greeting} Welcome to My Portfolio!`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const projectTitles = document.querySelectorAll(".project-title");
    projectTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const details = title.nextElementSibling;
            if (details) {
                details.style.display = details.style.display === "block" ? "none" : "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

