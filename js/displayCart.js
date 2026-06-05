let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer =
document.getElementById("cart-items");

let total = 0;

cart.forEach((item,index)=>{

    total += item.price;

    cartContainer.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>${item.price} RWF</p>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
    `;
});

document.getElementById("total")
.innerText = "Total: " + total + " RWF";

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}