// Function to display order history
function displayOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const tableBody = document.querySelector('#order-history-table tbody');
    
    // Clear previous entries
    tableBody.innerHTML = '';

    // Populate the table with order history data
    orderHistory.forEach(order => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${order.model}</td>
            <td>${order.date}</td>
            <td>${order.price}</td>
            <td>${order.status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Call the function to display order history on page load
document.addEventListener('DOMContentLoaded', displayOrderHistory);
