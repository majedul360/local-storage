document.getElementById("add-btn").addEventListener("click", () => {
  const input = document.querySelector("input");
  const inputValue = input.value;
  if (inputValue == "") {
    return;
  }
  // add in local storage
  addCart(inputValue);
  // display UI
  displayUI(inputValue);

  // clear input value
  input.value = "";
});

// display UI
const displayUI = (inputValue) => {
  const productContainer = document.querySelector("section");
  const p = document.createElement("p");
  p.innerText = inputValue;
  productContainer.appendChild(p);
};

// get cart
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObject;
  if (cart) {
    cartObject = JSON.parse(cart);
  } else {
    cartObject = {};
  }
  return cartObject;
};

// add Locale storage

const addCart = (input) => {
  const cart = getCart();
  cart[input] = 1;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

// get data from locale storage and display in UI
const setDisplay = () => {
  const products = getCart();
  for (const product in products) {
    displayUI(product);
  }
};

setDisplay();

// clear all
document.getElementById("clear-btn").addEventListener("click", () => {
  document.querySelector("section").innerHTML = "";
  localStorage.removeItem("cart");
});
