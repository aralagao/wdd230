document.addEventListener("DOMContentLoaded", function () {
  fetch('data/rental-prices.json')
      .then(response => response.json())
      .then(data => {
          const rentalData = data.rentals;
          const tableBody = document.getElementById('rental-data');

          rentalData.forEach(rental => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${rental.type}</td>
                  <td>${rental.max_persons}</td>
                  <td>$${rental.half_day_reservation}</td>
                  <td>$${rental.full_day_reservation}</td>
                  <td>$${rental.half_day_walk_in}</td>
                  <td>$${rental.full_day_walk_in}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => console.error('Error fetching rental data:', error));
});
