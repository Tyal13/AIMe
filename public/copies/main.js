document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    window.toggleMenu = function () {
        menu.classList.toggle("hidden");
    };

    window.donate = function () {
        window.location.href = "https://www.paypal.com/donate";
    };
    
    window.donateStripe = function () {
        window.location.href = "https://stripe.com/donate";
    };

    async function fetchGitHubUpdates() {
        try {
            const response = await fetch("https://api.github.com/repos/YOUR_REPO/commits");
            if (!response.ok) throw new Error("Network response was not ok");
            const commits = await response.json();
            const updatesContainer = document.getElementById("github-updates");
            updatesContainer.innerHTML = commits.slice(0, 5).map(commit => `
                <p><strong>${commit.commit.author.name}</strong>: ${commit.commit.message}</p>
            `).join(" ");
        } catch (error) {
            console.error("Error fetching GitHub updates:", error);
        }
    }

    fetchGitHubUpdates();
});