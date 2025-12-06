document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("in-cart");
            btn.textContent = btn.classList.contains("in-cart")
                ? "В корзине"
                : "В корзину";
        });
    });
});
