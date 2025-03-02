document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.querySelector(".portfolio-container");
    const checkboxes = document.querySelectorAll("nav input[type='checkbox'][data-category]");
    const selectAllCheckbox = document.getElementById("select-all");

    // ✅ Načítanie dát z JSON
    async function loadPortfolio() {
        try {
            const response = await fetch("/data/portfolio.json"); // ✅ Opravená cesta
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json();
            renderPortfolio(data);
        } catch (error) {
            console.error("❌ Chyba pri načítaní portfólia:", error);
        }
    }

    // ✅ Vykreslenie portfólia
    function renderPortfolio(items) {
        portfolioContainer.innerHTML = ""; // Vyčisti obsah
        
        items.forEach(item => {
            const portfolioItem = document.createElement("div");
            portfolioItem.classList.add("portfolio-item");
            portfolioItem.setAttribute("data-category", item.category);
            portfolioItem.innerHTML = `
                <a href="${item.link}" target="_blank">
                    <img src="${item.image}" alt="${item.title}">                    
                </a>
                <h4>${item.title}</h4>
                <p>${item.category}</p>
            `;
            portfolioContainer.appendChild(portfolioItem);
        });

        filterPortfolio(); // ✅ Spusti filtrovanie po načítaní dát
    }

    // ✅ Filtrovanie portfólia
    function filterPortfolio() {
        const activeCategories = [...checkboxes]
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.dataset.category);

        document.querySelectorAll(".portfolio-item").forEach(item => {
            item.style.display = activeCategories.includes(item.dataset.category) ? "block" : "none";
        });

        if (selectAllCheckbox) {
            selectAllCheckbox.checked = checkboxes.length === [...checkboxes].filter(cb => cb.checked).length;
        }
    }

    // ✅ Event listener na checkboxy
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterPortfolio));

    // ✅ Event listener na "Vybrať všetko"
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", () => {
            checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
            filterPortfolio();
        });
    }

    loadPortfolio(); // ✅ Načíta portfólio pri štarte
});
