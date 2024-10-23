const cars = {
    compact: {
        title: "LuxeDrive Compact",
        price: "$30,000"
    },
    city: {
        title: "LuxeDrive City",
        price: "$35,000"
    },
    emini: {
        title: "LuxeDrive E-Mini",
        price: "$40,000"
    },
    executive: {
        title: "LuxeDrive Executive",
        price: "$60,000"
    },
    family: {
        title: "LuxeDrive Family",
        price: "$50,000"
    },
    sport: {
        title: "LuxeDrive Sport",
        price: "$70,000"
    },
    pinnacle: {
        title: "LuxeDrive Pinnacle",
        price: "$80,000"
    },
    majestic: {
        title: "LuxeDrive Majestic",
        price: "$75,000"
    },
    velocity: {
        title: "LuxeDrive Velocity",
        price: "$150,000"
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayConfirmationDetails() {
    const model = getQueryParam('model');
    const car = cars[model];

    if (car) {
        document.getElementById('car-title').innerText = `Model: ${car.title}`;
        document.getElementById('car-price').innerText = `Price: ${car.price}`;
    } else {
        document.getElementById('car-title').innerText = "Model: Not Found";
        document.getElementById('car-price').innerText = "Price: -";
    }
}

// Call the function on page load
displayConfirmationDetails();
