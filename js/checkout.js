document
.getElementById("checkoutForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Order placed successfully!"
    );

    localStorage.removeItem("cart");

    window.location.href =
    "index.html";

});