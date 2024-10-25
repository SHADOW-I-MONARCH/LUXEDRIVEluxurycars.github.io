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
        date: "2024-03-25",
        price: "$60,000",
        status: "Cancelled"
    },
    {
        id: 5,
        model: "LuxeDrive Family",
        date: "2024-04-10",
        price: "$50,000",
        status: "Delivered"
    }
];

// Function to display the order history
function displayOrderHistory() {
    const orderListElement = document.getElementById('order-list');
    orderListElement.innerHTML = ''; // Clear previous orders

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
