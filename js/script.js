// ===============================
// GET HTML ELEMENTS
// ===============================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const comparisonResults = document.getElementById("comparisonResults");
const locationSelect = document.getElementById("locationSelect");
const categorySelect = document.getElementById("categorySelect");

// Stores the product currently being compared
let selectedProductId = null;


// ===============================
// DISPLAY PRICE COMPARISON
// ===============================

function displayPriceComparison(productId, location) {


    // Find the selected product
    const selectedProduct = products.find(function (product) {
        return product.id === productId;
    });

   
    // Find prices for this product
    const productPrices = prices

        .filter(function (price) {
            return price.productId === productId;
        })

        // Connect each price to its shop
        .map(function (price) {

            const shop = shops.find(function (shop) {
                return shop.id === price.shopId;
            });

            return {
                shopName: shop.name,
                location: shop.location,
                address: shop.address,
                phone: shop.phone,
                price: price.price
            };
        })

        // Filter by location
        .filter(function (item) {

            if (location === "all") {
                return true;
            }

            return item.location === location;
        })

        // Cheapest first
        .sort(function (a, b) {
            return a.price - b.price;
        });


    // Display heading
    comparisonResults.innerHTML = `
        <h2>
            ${selectedProduct.name} Price Comparison
        </h2>
    `;


    // No shops found
    if (productPrices.length === 0) {

        comparisonResults.innerHTML += `
            <p>
                No shops found in this location.
            </p>
        `;

        return;
    }


    // Display each shop
    productPrices.forEach(function (item, index) {

        comparisonResults.innerHTML += `
            <div class="comparison-card">

                <h3>
                    ${item.shopName}
                </h3>

                <p>
                    Location: ${item.location}
                </p>

                <p>
                    Address: ${item.address}
                </p>

                <p>
                    Price:
                    <strong>
                        UGX ${item.price.toLocaleString()}
                    </strong>
                </p>

                ${index === 0
                ? "<strong>🏆 Best Price</strong>"
                : ""
            }

            </div>
        `;
    });
}


// ===============================
// PRODUCT SEARCH
// ===============================

searchButton.addEventListener("click", function () {

    // Get the user's input
    const searchTerm = searchInput.value.trim();

    // Clear previous comparison
    comparisonResults.innerHTML = "";

    // ===============================
    // VALIDATE EMPTY INPUT
    // ===============================

    if (searchTerm === "") {

        searchResults.innerHTML = `
            <p class="error-message">
                Please enter a product to search.
            </p>
        `;

        return;
    }

    // Convert search text to lowercase
    const searchTermLower = searchTerm.toLowerCase();

    // ===============================
    // FIND MATCHING PRODUCTS
    // ===============================
    const selectedCategory = categorySelect.value;

    const matchingProducts = products.filter(function (product) {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTermLower);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    // Clear previous search results
    searchResults.innerHTML = "";

    // ===============================
    // NO PRODUCT FOUND
    // ===============================

    if (matchingProducts.length === 0) {

        searchResults.innerHTML = `
            <p class="error-message">
                No products found for "${searchTerm}".
            </p>
        `;

        return;
    }

    // ===============================
    // DISPLAY PRODUCTS
    // ===============================

    matchingProducts.forEach(function (product) {

        searchResults.innerHTML += `
            <div class="product-result">

                <h3>${product.name}</h3>

                <p>
                    Category: ${product.category}
                </p>

                <button
                    class="compare-btn"
                    data-product-id="${product.id}"
                >
                    Compare Prices
                </button>

            </div>
        `;
    });

});
// ===============================
// COMPARE BUTTON
// ===============================

document.addEventListener("click", function (event) {

    if (!event.target.classList.contains("compare-btn")) {
        return;
    }

    // Get product ID
    selectedProductId = Number(
        event.target.dataset.productId
    );

    // Get current location
    const selectedLocation = locationSelect.value;

    // Display comparison
    displayPriceComparison(
        selectedProductId,
        selectedLocation
    );
});


// ===============================
// LOCATION FILTER
// ===============================

locationSelect.addEventListener("change", function () {

    // Do nothing if no product has been selected
    if (selectedProductId === null) {
        return;
    }

    // Get selected location
    const selectedLocation = locationSelect.value;

    // Display updated comparison
    displayPriceComparison(
        selectedProductId,
        selectedLocation
    );
});

categorySelect.addEventListener("change", function () {

    const selectedCategory = categorySelect.value;

    // If the search box is empty, show products from the category
    if (searchInput.value.trim() === "") {

        const categoryProducts = products.filter(function (product) {

            if (selectedCategory === "all") {
                return true;
            }

            return product.category === selectedCategory;

        });

        searchResults.innerHTML = "";

        categoryProducts.forEach(function (product) {

            searchResults.innerHTML += `
                <div class="product-result">

                    <h3>${product.name}</h3>

                    <p>
                        Category: ${product.category}
                    </p>

                    <button
                        class="compare-btn"
                        data-product-id="${product.id}"
                    >
                        Compare Prices
                    </button>

                </div>
            `;

        });

        return;
    }

    // If there is already a search,
    // run the search again
    searchButton.click();

});



const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = "🌙";

    }

});


if (localStorage.getItem("theme") === "dark") {

    document.body.classList.remove("light");
    themeButton.textContent = "🌙";

} else {

    document.body.classList.add("light");
    themeButton.textContent = "☀️";

}


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

function showPhone() {
    document.getElementById("phonePopup").classList.add("show");
}

function closePhone() {
    document.getElementById("phonePopup").classList.remove("show");
}