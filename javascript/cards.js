const data = [
    {
        id: 1,
        food_img : "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg",
        name: "Veg Pizza",
        price: "Rs. 300"
    },
    {
        id: 2,
        food_img : "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/523e586458501178a6ebaf7a61522fda",
        name: "Veg Burgur",
        price: "Rs. 80"
    },
    {
        id: 3,
        food_img : "https://www.budgetbytes.com/wp-content/uploads/2023/12/air-fryer-french-fries-horizontal-hero-web-ready-1.jpg",
        name: "french fries",
        price: "Rs. 100"
    },
    {
        id: 4,
        food_img : "https://myfoodstory.com/wp-content/uploads/2022/04/Cold-Coffee-3-ways.jpg",
        name: "cold coffee",
        price: "Rs. 100"
    },
    {
        id: 5,
        food_img : "https://images.news18.com/ibnlive/uploads/2024/01/image-76-2024-01-c4b36ce27d9508ae9aa4b2f55a0b220f-16x9.jpg",
        name: "hot coffee",
        price: "Rs. 50"
    },
    {
        id: 6,
        food_img : "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
        name: "Steamed Momos",
        price: "Rs. 150"
    },
    {
        id: 7,
        food_img : "https://qph.cf2.quoracdn.net/main-qimg-b117ba968ffc6294c890a9beb2983e98",
        name: "fried momos",
        price: "Rs. 200"
    },
    {
        id: 8,
        food_img : "https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg",
        name: "sandwich",
        price: "Rs. 120"
    },

];

const container =document.querySelector('.page5 .cards-section');
data.forEach(menu =>{
    const card = document.createElement('div');

    card.innerHTML =`
      <div class="card">
        <img src="${menu.food_img}" alt="NA">
    <h2>${menu.name}</h2>
    <h3>${menu.price}</h3>
    <button>buy now</button>
</div>`

        container.appendChild(card);
});