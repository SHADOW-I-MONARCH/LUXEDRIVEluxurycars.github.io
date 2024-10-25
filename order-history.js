// Sample order history data
const orders = [
    {
        id: 1,
        model: "LuxeDrive Compact",
        date: "2024-01-15",
        price: "$30,000",
        status: "Delivered"
    },
    {
        id: 2,
        model: "LuxeDrive City",
        date: "2024-02-10",
        price: "$35,000",
        status: "Delivered"
    },
    {
        id: 3,
        model: "LuxeDrive E-Mini",
        date: "2024-03-05",
        price: "$40,000",
        status: "Pending"
    },
    {
        id: 4,
        model: "LuxeDrive Executive",
        date: "2024-04-12",
        price: "$60,000",
        status: "Delivered"
    },
    {
        id: 5,
        model: "LuxeDrive Sport",
        date: "2024-05-20",
        price: "$70,000",
        status: "Cancelled"
    },
    {
        id: 6,
        model: "LuxeDrive Family",
        date: "2024-06-15",
        price: "$50,000",
        status: "Delivered"
    },
    {
        id: 7,
        model: "LuxeDrive Pinnacle",
        date: "2024-07-10",
        price: "$80,000",
        status: "Pending"
    },
    {
        id: 8,
        model: "LuxeDrive Velocity",
        date: "2024-08-25",
        price: "$150,000",
        status: "Delivered"
    },
    {
        id: 9,
        model: "LuxeDrive Majestic",
        date: "2024-09-05",
        price: "$75,000",
        status: "Returned"
    },
    {
        id: 10,
        model: "LuxeDrive E-Mini",
        date: "2024-10-01",
        price: "$40,000",
        status: "Pending"
    }
];

// Function to display the order history
function displayOrderHistory() {
    const orderListElement = document.getElementById('order-list');
    orderListElement.innerHTML = ''; // Clear previous orders

    // Retrieve order history from local storage
    const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Check if there are any orders to display
    if (orders.length === 0) {
        orderListElement.innerHTML = '<p>No orders found.</p>';
        return;
    }

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-title">${order.model}</div>
            <div class="order-details">Order ID: ${order.id}</div>
            <div class="order-details">Date: ${order.date}</div>
            <div class="order-details">Price: ${order.price}</div>
            <div class="order-details">Status: ${order.status}</div>
        `;
        orderListElement.appendChild(orderItem);
    });
}

// Load the order history on page load
document.addEventListener('DOMContentLoaded', displayOrderHistory);
