document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty_text">Ваша корзина пуста</p>';
    } else {
        let cartHTML = '';
        cart.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    <span><h2>${item.name} (${item.quantity} шт.)</h2><h3>${item.price}</h3><span class="bottom-side"><i>${item.dateTime}</i>
                    <button class="order">Заказать</button>
                    <button class="delete" onclick="removeItem(${index})">Удалить</button></span>
                    </span>
                </div>
            `;
        });
        cartContainer.innerHTML = cartHTML;
    }
});

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}