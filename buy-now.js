// Car details object
const cars = {
    compact: {
        title: "LuxeDrive Compact",
        image: "carimg1.jpg",
        description: "Agile and efficient for urban driving. Perfect for navigating busy city streets with style and ease.",
        specs: ["0-60 mph: 7.2s", "MPG: 42", "Horsepower: 180"],
        price: "$30,000"
    },
    city: {
        title: "LuxeDrive City",
        image: "carimg2.jpg",
        description: "The ultimate urban companion. Compact size with premium features for the discerning city dweller.",
        specs: ["0-60 mph: 8.0s", "MPG: 45", "Horsepower: 150"],
        price: "$35,000"
    },
    emini: {
        title: "LuxeDrive E-Mini",
        image: "carimg3.jpg",
        description: "Eco-friendly and stylish urban commuter. Zero emissions with all the luxury you expect from LuxeDrive.",
        specs: ["Range: 250 mi", "0-60 mph: 6.5s", "Charge Time: 30 min"],
        price: "$40,000"
    },
    executive: {
        title: "LuxeDrive Executive",
        image: "carimg4.jpg",
        description: "Elegant and powerful, perfect for executives. Combines luxury with performance for a superior driving experience.",
        specs: ["0-60 mph: 5.2s", "MPG: 32", "Horsepower: 365"],
        price: "$60,000"
    },
    family: {
        title: "LuxeDrive Family",
        image: "carimg5.jpg",
        description: "Spacious and comfortable for family trips. Safety, luxury, and versatility in one elegant package.",
        specs: ["Seats: 7", "MPG: 28", "Cargo Space: 28 cu ft"],
        price: "$50,000"
    },
    sport: {
        title: "LuxeDrive Sport",
        image: "carimg6.jpg",
        description: "Performance-oriented sedan for thrill-seekers. Experience the perfect blend of luxury and high-performance.",
        specs: ["0-60 mph: 3.9s", "Top Speed: 155 mph", "Horsepower: 503"],
        price: "$70,000"
    },
    pinnacle: {
        title: "LuxeDrive Pinnacle",
        image: "carimg7.jpg",
        description: "The ultimate in luxury and comfort. Our flagship model redefines what a luxury car can be.",
        specs: ["0-60 mph: 4.4s", "Massage Seats: Yes", "Sound System: 24 speakers"],
        price: "$80,000"
    },
    majestic: {
        title: "LuxeDrive Majestic",
        image: "carimg8.jpg",
        description: "Combining luxury with versatility. Our premium SUV offers comfort, space, and capability.",
        specs: ["Ground Clearance: 9.6 in", "Towing Capacity: 7,500 lbs", "Off-road Modes: 5"],
        price: "$75,000"
    },
    velocity: {
        title: "LuxeDrive Velocity",
        image: "carimg9.jpg",
        description: "High-performance luxury sports car. Experience breathtaking speed without compromising on luxury.",
        specs: ["0-60 mph: 2.8s", "Top Speed: 205 mph", "Horsepower: 789"],
        price: "$150,000"
    },
    free: {
        title: "Model Not Found",
        image: "img/not-found.jpg",
        description: "Sorry, the selected model was not found. Please go back and choose another car model.",
        specs: ["N/A"],
        price: "N/A"
    }
};

// Utility function to get URL parameter
function getQueryParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

// Function to display car details
function displayCarDetails(model) {
    const car = cars[model] || cars['free'];

    document.getElementById('car-title').textContent = car.title;
    document.getElementById('car-image').src = car.image;
    document.getElementById('car-description').textContent = car.description;

    const specsList = document.getElementById('car-specs-list');
    specsList.innerHTML = car.specs.map(spec => `<li>${spec}</li>`).join('');

    document.getElementById('car-price').textContent = car.price;

    // Update purchase button link
    const confirmButton = document.querySelector('.cta-button');
    confirmButton.href = model !== 'free' ? `confirmation.html?model=${model}` : '#';
    confirmButton.style.display = model !== 'free' ? 'inline-block' : 'none';
}

// Get the model from URL and display details
displayCarDetails(getQueryParam('model'));
