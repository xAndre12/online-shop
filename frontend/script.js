let shoppingDot = document.querySelector(".shopping-dot");
let productsList = [];

const listWrapper = document.querySelector(".list-wrapper");
const close = document.querySelector(".x");
const modala = document.querySelector(".modala");
const shoppingCart = document.querySelector(".shopping");

const products = [
  {
    id: 0,
    image: "./imgs/gloves.png",
    title: "Gloves 1",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 1,
    image: "./imgs/gloves.png",
    title: "Gloves 2",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    image: "./imgs/gloves.png",
    title: "Gloves 3",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    image: "./imgs/gloves.png",
    title: "Gloves 4",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    image: "./imgs/gloves.png",
    title: "Gloves 5",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    image: "./imgs/gloves.png",
    title: "Gloves 6",
    price: "Price:150$",
    stars: "⭐⭐⭐⭐⭐",
  },
];

const createCard = (product) => {
  const div = document.createElement("div");
  div.classList.add("card-wrapper");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    shoppingDot.style.visibility = "visible";
    shoppingDot.innerHTML = parseInt(shoppingDot.innerHTML) + 1;
    productsList.push(product);
  });
  img.src = product.image;
  h4.innerHTML = product.title;
  p.innerHTML = product.price;
  span.innerHTML = product.stars;
  button.innerHTML = "Add to cart";
  document.querySelector(".products-wrapper").appendChild(div);
  div.appendChild(img);
  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(span);
  div.appendChild(button);
};

const createProductList = (product, i) => {
  const cardListWrapper = document.createElement("div");
  const card1 = document.createElement("div");
  const productImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const productName = document.createElement("h4");
  const productPrice = document.createElement("p");
  const productRating = document.createElement("span");
  const remove = document.createElement("button");
  cardListWrapper.classList.add("card-list-wrapper");
  card1.classList.add("card1");
  productImg.classList.add("card-img");
  cardInfo.classList.add("card-info");
  productName.classList.add("list-product-name");
  productPrice.classList.add("list-product-price");
  remove.classList.add("remove");
  remove.innerHTML = "Remove";
  productImg.src = product.image;
  productPrice.innerHTML = product.price;
  productName.innerHTML = product.title;
  productRating.innerHTML = product.stars;
  card1.appendChild(productImg);
  cardInfo.appendChild(productName);
  cardInfo.appendChild(productPrice);
  cardInfo.appendChild(productRating);
  cardInfo.appendChild(remove);
  card1.appendChild(cardInfo);
  cardListWrapper.appendChild(card1);
  listWrapper.appendChild(cardListWrapper);
  remove.addEventListener("click", () => {
    cardListWrapper.style.display = "none";
    shoppingDot.innerHTML = parseInt(shoppingDot.innerHTML) - 1;

    productsList = productsList.filter((item) => item.title !== product.title);
    if (shoppingDot.innerHTML <= 0) {
      modala.style.display = "none";
    }
  });
};

shoppingCart.addEventListener("click", () => {
  listWrapper.innerHTML = "";
  listWrapper.appendChild(close);
  for (let i = 0; i < productsList.length; i++) {
    createProductList(productsList[i], i);
  }
  if (productsList.length >= 1) {
    modala.style.display = "flex";
  }
});

for (let i = 0; i < products.length; i++) {
  createCard(products[i]);
}
close.addEventListener("click", () => {
  modala.style.display = "none";
});
