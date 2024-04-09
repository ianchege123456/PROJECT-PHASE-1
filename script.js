// All shoe data
const shoes = [
  { name: 'Air Max', brand: 'Nike', price: 50, size: '6,7,8,9', color: 'All', image: 'Exploring Boundaries_ Discover the Most Unique Nike Air Jordan Concepts You Need to See.jpeg' },
  { name: 'Classic Leather', brand: 'Reebok', price: 100, size: '6,7,8,9', color: 'All', image: 'Reebok Classic CLASSIC LEATHER LOW-CUT DESIGN SHOES - Baskets basses - black.jpeg' },
  { name: 'Chuck Taylor', brand: 'Converse', price: 80, size: '6,7,8,9', color: 'All', image: 'Converse chuck 70 hi sneakers in black _ ASOS.jpeg' },
  { name: 'Air Force 1', brand: 'Nike', price: 120, size: '6,7,8,9', color: 'All', image: 'Nike Men Air Force 1 07 Basketball Shoe.jpeg' },
  { name: 'Old Skool', brand: 'Vans', price: 65, size: '6,7,8,9', color: 'All', image: 'VANS Unisex Old Skool Authentic Shoe - Men 11_5 _ Women 13.jpeg' },
  { name: 'Stan Smith', brand: 'Adidas', price: 90, size: '6,7,8,9', color: 'All', image: '059e376f-4eee-43d3-98b7-f92335be5d32.jpeg' },
  // Add 20 more shoe items below
  { name: 'Superstar', brand: 'Adidas', price: 80, size: '6,7,8,9', color: 'All', image: 'adidas Originals Superstar sneakers in white and black.jpeg' },
  { name: 'Jordan 1', brand: 'Nike', price: 170, size: '6,7,8,9', color: 'All', image: 'f53e2149-e5ff-4859-b864-195ac127bf38.jpeg' },
  { name: 'Yeezy Boost 350', brand: 'Adidas', price: 220, size: '6,7,8,9', color: 'Cream', image: 'Adidas Yeezy Boost 350 V2 Onyx.jpeg' },
  { name: 'Gazelle', brand: 'Adidas', price: 85, size: '6,7,8,9', color: 'Blue', image: 'Adidas Shoes _ Adidas Gazelle Sneaker _ Color_ Black _ Size_ 9_5.jpeg' },
  { name: 'Sk8-Hi', brand: 'Vans', price: 75, size: '6,7,8,9', color: 'Red', image: 'VANS SK8-HI Unisex Old Skool Authentic Shoe - Navy - Men 13 _ Women 14_5.jpeg' },
  { name: 'Air Jordan 3', brand: 'Nike', price: 190, size: '6,7,8,9', color: 'Black/Cement', image: 'Sweetsoles.jpeg' },
  { name: 'Ultraboost', brand: 'Adidas', price: 180, size: '6,7,8,9', color: 'Black', image: 'adidas Ultra Boost Light.jpeg' },
  { name: 'Puma Suede', brand: 'Puma', price: 70, size: '6,7,8,9', color: 'Gray', image: '8d57c104-2aa3-4465-84bc-91b8e2528174.jpeg' },
  { name: 'New Balance 574', brand: 'New Balance', price: 80, size: '6,7,8,9', color: 'Gray', image: 'Mens Shoes _ Boots, Sneakers + Dress Shoes.jpeg' },
  { name: 'Chuck 70', brand: 'Converse', price: 85, size: '6,7,8,9', color: 'White', image: 'Tênis Allstar Chuck 70 Unissex - Ct09550004.jpeg' },
  { name: 'Air Max 90', brand: 'Nike', price: 130, size: '7,8,9', color: 'Black/White', image: '237c3cb9-5f1a-4983-8c03-efabf1d2849b.jpeg' },
  { name: 'React Element 55', brand: 'Nike', price: 130, size: '6,7,8,9', color: 'Blue', image: 'Nike React Vision.jpeg' },
  { name: 'Gel-Kayano', brand: 'Asics', price: 120, size: '6,7,8,9', color: 'Gray', image: 'Asics Gel-Kayano 14.jpeg' },
  { name: 'Futurecraft', brand: 'Adidas', price: 200, size: '6,7,8,9', color: 'Gray', image: '[Restock] Faut-il acheter la Adidas Alphaedge 4D Futurecraft White CG5526 _.jpeg' },
  { name: 'EQT Support', brand: 'Adidas', price: 120, size: '6,7,8,9', color: 'Black/Green', image: 'Adidas Originals Mens Eqt Support Adv Black Friday 2017 By9589 Size 12 Nwob.jpeg' }
];


document.addEventListener('DOMContentLoaded', function() {
  displayCatalog();
});

// Function to display shoes in the catalog
function displayCatalog() {
  const shoeList = document.getElementById('shoeList');
  shoeList.innerHTML = '';
  shoes.forEach(shoe => {
      const shoeItem = document.createElement('div');
      shoeItem.classList.add('shoe-item');
      shoeItem.innerHTML = `
          <img src="${shoe.image}" alt="${shoe.brand} ${shoe.name}">
          <h3>${shoe.brand} ${shoe.name}</h3>
          <p>Size: ${shoe.size}</p>
          <p>Color: ${shoe.color}</p>
          <p>Price: $${shoe.price}</p>
          <button onclick="addToCart('${shoe.name}')">Add to Cart</button>
      `;
      shoeList.appendChild(shoeItem);
  });
}

// Function to add a shoe to the shopping cart
function addToCart(shoeName) {
  const cartItems = document.getElementById('cartItems');
  const shoe = shoes.find(s => s.name === shoeName);
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
      <p><strong>${shoe.brand} ${shoe.name}</strong></p>
      <p>Size: ${shoe.size}</p>
      <p>Color: ${shoe.color}</p>
      <p>Price: $${shoe.price}</p>
  `;
  cartItems.appendChild(cartItem);
  updateTotalPrice();
}

// Function to update the total price in the shopping cart
function updateTotalPrice() {
  const totalPrice = document.getElementById('totalPrice');
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach(item => {
      const price = parseFloat(item.innerHTML.match(/Price: \$([\d.]+)/)[1]);
      total += price;
  });
  totalPrice.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Function to checkout
function checkout() {
  alert('Thank you for shopping with us!');
  document.getElementById('cartItems').innerHTML = '';
  document.getElementById('totalPrice').innerHTML = '';
}

  