if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", initUI);
} else {
  initUI();
}

function initUI() {
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  const loginBtn = document.querySelector(".login-btn");

  loginBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
}

const menuBurger = document.querySelector(".menu-burger");
const menuMobileNav = document.querySelector(".menu-mobile-nav");
const cartButton = document.querySelector(".cart-btn");

cartButton.addEventListener("click", () => {
  menuMobileNav.classList.toggle("open");
});

menuBurger.addEventListener("click", () => {
  menuMobileNav.classList.toggle("open");
});

// menu.index search input

const searchInput = document.querySelector(".menu-search-input");
const allMenuName = document.querySelectorAll(".menu-name");

searchInput.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value.toLowerCase();
  for (let i = 0; i < allMenuName.length; i++) {
    const currentMenu = allMenuName[i].textContent.toLowerCase();
    if (currentMenu.includes(searchQuery)) {
      allMenuName[i].style.display = "block";
    } else {
      allMenuName[i].style.display = "none";
    }
  }
});

// menu.index search input

// add to cart

const addToCartButtons = document.querySelectorAll(".add-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);

  function handleAddToCart(event) {
    const menuItem = event.target.closest(".menu-item");
    const title = menuItem.querySelector(".menu-title").textContent;
    const price = menuItem.querySelector(".menu-price").textContent;

    addItemToCartUI(title, price);
    updateCartTotal();
    removeItem();
    console.log(total);
  }
});

// update cart total
function updateCartTotal() {
  const cartItemContainer = document.querySelector(".cart-container");
  const cartItem = cartItemContainer.querySelectorAll(".cart-row");
  let total = 0;
  cartItem.forEach((item) => {
    const priceEl = item.querySelector(".cart-price");
    const quantityInput = item.querySelector(".cart-input");
    const price = parseFloat(priceEl.textContent);
    const quantity = quantityInput.value;

    total = total + price * quantity;
  });

  document.querySelector(".cart-total-price").textContent = total.toFixed(0);
}

// add to cart
function addItemToCartUI(title, price) {
  const cartContainer = document.querySelector(".cart-container");
  const cartItem = document.createElement("div");
  cartItem.classList.add(".cart-item");
  const cartItemNames = document.querySelectorAll(".cart-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].textContent == title) {
      // alert("Item already added");
      document.querySelector(".cart-input").value++;
      return;
    }
  }

  const cartItemContent = `<div
        class="cart-row p-5  font-paragraph text-left border"
      >
        <h4 class="cart-title text-slate-200">${title}</h4>
          <p><span class="cart-price">${price}</span>MMK</p>
        <div class="flex items-center justify-between mt-2 gap-5">
          
          <input class="cart-input border text-slate-900 w-6/12 border-slate-900 px-2" type="number" min="0" value="1" />
          <a class="cart-remove" href="#"><i class="fa-solid fa-trash-can"></i></a>
        </div>
      </div>`;
  cartItem.innerHTML = cartItemContent;
  cartContainer.appendChild(cartItem);

  // input change = total change
  cartItem
    .querySelector(".cart-input")
    .addEventListener("change", handleQuantityChange);

  function handleQuantityChange(event) {
    const input = event.target;
    if (input.value < 1) {
      input.value = 1;
    }
    updateCartTotal();
  }

  // remove cart
  const removeItemButtons = document.querySelectorAll(".cart-remove");
  removeItemButtons.forEach((button) => {
    button.addEventListener("click", removeItem);
  });

  function removeItem(event) {
    const btnClicked = event.target;
    btnClicked.closest(".cart-row").remove();
    updateCartTotal();
  }
}

// burger menu

// burger menu

// const menuBurger = document.querySelector(".menu-burger");
// const menuMobileNav = document.querySelector(".menu-mobile-nav");

// menuBurger.addEventListener("click", () => {
//   menuBurger.classList.toggle("menu-open");
//   menuMobileNav.classList.toggle("menu-open");
// });
