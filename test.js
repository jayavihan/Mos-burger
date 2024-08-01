var isSignedIn=true;

document.getElementById('signInBtn').addEventListener('click', function() {
  // Assuming sign in is successful
  var isSignedIn = true;
  if (isSignedIn) {
    var basketRow = document.getElementById('basketRow');
    basketRow.style.display = 'block';
    
    // You can also populate the basket with items here
    addItemToBasket('Classic Burger (Regular)', 1, 750.00);
    addItemToBasket('Crispy Chicken Submarine (Regular)', 1, 1500.00);
    addItemToBasket('Coca-Cola (330ml)', 1, 120.00);
    updateTotalPrice();
  }
});

// Function to handle login (to be called from the sign-in page)
function handleLogin() {
    // Assuming sign in is successful
    var isSignedIn = true;
    if (isSignedIn) {
      localStorage.setItem('isSignedIn', 'true'); // Set a flag in localStorage
      window.close(); // Close the sign-in window
    }
  }



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




    function openSignInPage() {
        window.open('/Sing_in.html', '_blank', 'width=500,height=600');
    }



   console.log(isSignedIn);