
function openSignInPage() {
  const secondWindow = window.open('/Sing_in.html', '_blank');
  secondWindow.secondWindowHandler = window;
}
// Function to close the second page and update the first page
function closeSecondPage() {
  if (window.secondWindowHandler) {
      window.secondWindowHandler.document.getElementById('basketRow').style.display = 'block';
      window.close();
  }
}

// Event listeners for the buttons
document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('signInBtn');
  if (openButton) {
      openButton.addEventListener('click', openSignInPage);
  }

  const closeButton = document.getElementById('loginBtn');
  if (closeButton) {
      closeButton.addEventListener('click', closeSecondPage);
  }
});



  function addItemToBasket(itemName, quantity, price) {
    var basketItems = document.getElementById('basketItems');
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${itemName}</td>
      <td>${quantity}</td>
      <td>${price}</td>
    `;
    basketItems.appendChild(row);
  }

  function updateTotalPrice() {
    var totalPrice = 0;
    var basketItems = document.getElementById('basketItems').getElementsByTagName('tr');
    for (var i = 0; i < basketItems.length; i++) {
      var price = parseFloat(basketItems[i].getElementsByTagName('td')[2].textContent);
      totalPrice += price;
    }
    document.getElementById('totalPrice').textContent = 'Rs ' + totalPrice.toFixed(2);
  }