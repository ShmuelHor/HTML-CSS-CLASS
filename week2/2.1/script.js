const mainDiv = document.getElementById("mainDiv");
const h1 = document.createElement("h1");
h1.innerHTML = "example title";
mainDiv.appendChild(h1);

const btn =document.createElement("button");
btn.innerHTML = "click";
btn.style.backgroundColor = "green";
btn.setAttribute("class","btnClass");
btn.addEventListener("click",clickBtn)
mainDiv.appendChild(btn);

function clickBtn(){
    alert("work");
}

const shop = document.getElementById("shop");
shop.style.display = "flex";

const Products = [
    {
        name: "Product A",
        description: "Basic product.",
        price: 100
    },
    {
        name: "Product B",
        description: "Advanced product.",
        price: 150
    },
    {
        name: "Product C",
        description: "Premium product.",
        price: 200
    },
    
];

Products.forEach((val)=>{
    const div = document.createElement("div");
    shop.appendChild(div);
    div.style.backgroundColor = "blue";
    div.style.margin = "20px";
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    h1.innerHTML = val.name;
    h2.innerHTML = val.description;
    h3.innerHTML = val.price;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
})
