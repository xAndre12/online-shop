const products = [
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        image: './imgs/gloves.png',
        title: 'Gloves',
        price: 'Price:150$',
        stars: '⭐⭐⭐⭐⭐'
    }
]

const createCard = (product) =>{
const div = document.createElement("div");
div.classList.add("card-wrapper");
const img = document.createElement("img");
const h4 = document.createElement("h4");
const p = document.createElement("p");
const span = document.createElement("span");
const button = document.createElement("button");
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
}
for (let i = 0; i < products.length; i++) {
   createCard(products[i]);
}