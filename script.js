document.addEventListener("DOMContentLoaded", () => {
    const repoList = document.getElementById("repo-list");
    const username = "your-github-username"; // Replace with your GitHub username

    // Fetch and display GitHub repositories
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoDiv = document.createElement("div");
                repoDiv.className = "repo";
                repoDiv.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || "No description available."}</p>
                `;
                repoList.appendChild(repoDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching repositories:", error);
            repoList.innerHTML = `<p>Unable to load repositories at this time.</p>`;
        });

    // Toggle blur effect for SolarEye description
    const blurButton = document.querySelector(".toggle-blur");
    const blurText = document.querySelector(".blur-text");

    blurButton.addEventListener("click", () => {
        blurText.classList.toggle("show");
        blurButton.textContent = blurText.classList.contains("show")
            ? "Hide Details"
            : "Show Details";
    });
});
