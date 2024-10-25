const cars = {
    compact: {
        title: "LuxeDrive Compact",
        image: "carimg1.jpg",
        description: "Agile and efficient for urban driving. Perfect for navigating busy city streets with style and ease.",
        specs: ["0-60 mph: 7.2s", "MPG: 42", "Horsepower: 180"],
        price: 30000 // Car price in dollars
    },
    city: {
        title: "LuxeDrive City",
        image: "carimg2.jpg",
        description: "The ultimate urban companion. Compact size with premium features for the discerning city dweller.",
        specs: ["0-60 mph: 8.0s", "MPG: 45", "Horsepower: 150"],
        price: 35000
    },
    // More car objects as defined earlier...
    free: {
        title: "Model Not Found",
        image: "img/not-found.jpg", // Placeholder image
        description: "Sorry, the selected model was not found. Please go back and choose another car model.",
        specs: ["N/A"],
        price: 0
    }
};

// Default shipping cost and tax rate (can be modified as needed)
const defaultShippingCost = 500; // in dollars
const taxRate = 0.1; // 10%

// Function to get URL query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to display car details and pricing
function displayCarDetails(carModel) {
    const car = cars[carModel] || cars['free']; // Default to 'free' if model is not found

    // Update car details
    document.getElementById('car-title').innerText = car.title;
    document.getElementById('car-image').src = car.image;
    document.getElementById('car-description').innerText = car.description;

    // Update specifications list
    const specsList = document.getElementById('car-specs-list');
    specsList.innerHTML = ''; // Clear previous specs
    car.specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerText = spec;
        specsList.appendChild(li);
    });

    // Update car price
    document.getElementById('car-price').innerText = `$${car.price.toLocaleString()}`;

    // Calculate and display shipping cost, taxes, and total price
    const shippingCost = defaultShippingCost;
    const taxAmount = car.price * taxRate;
    const totalCost = car.price + shippingCost + taxAmount;

    document.getElementById('shipping-cost').innerText = `$${shippingCost.toLocaleString()}`;
    document.getElementById('taxes').innerText = `$${taxAmount.toLocaleString()}`;
    document.getElementById('total-price').innerText = `$${totalCost.toLocaleString()}`;

    // Update the confirm purchase button URL
    const confirmButton = document.querySelector('.cta-button');
    if (carModel !== 'free') {
        confirmButton.href = `confirmation.html?model=${carModel}`;
        confirmButton.style.display = 'inline-block'; // Show button
    } else {
        confirmButton.style.display = 'none'; // Hide button if no valid model
    }
}

// Get the model from the URL and display details
const model = getQueryParam('model');
displayCarDetails(model);
