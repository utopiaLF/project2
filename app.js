document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.menu-closer');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.add('active');
    });
    closeBtn.addEventListener('click', function() {
        navMenu.classList.remove('active');
    })
});

const all_category_btn = document.querySelector('.all_category');
let side_bar = document.getElementById('side-bar');

all_category_btn.addEventListener('click', function() {
    side_bar.classList.add('active');
});
closeSideBarBtn.addEventListener('click', function() {
    side_bar.classList.remove('active');
})

    // const counters = document.querySelectorAll('.counter');

    // counters.forEach(counter => {
    //     const minusButton = counter.querySelector('.minus');
    //     const plusButton = counter.querySelector('.plus');
    //     const numberDisplay = counter.querySelector('.number');

    //     console.log({ minusButton, plusButton, numberDisplay });

    //     if (minusButton && plusButton && numberDisplay) {
    //         let count = 0;

    //         minusButton.addEventListener('click', () => {
    //             if(count !== 0){
    //                 count--;
    //                 numberDisplay.textContent = count;
    //             }
    //         });

    //         plusButton.addEventListener('click', () => {
    //             count++;
    //             numberDisplay.textContent = count;
    //         });
    //     } else {
    //         console.error('Element topilmadi!');
    //     }
    // });
    let cart_items_number = document.getElementById("cart_items_number");
    document.addEventListener('DOMContentLoaded', () => {
        // const swiper = new Swiper('.mySwiper3', {
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        // });
    
        const cards = document.querySelectorAll('.swiper-slide.card');
    
        cards.forEach(card => {
            const minusButton = card.querySelector('.minus');
            const plusButton = card.querySelector('.plus');
            const numberSpan = card.querySelector('.number');
            const addToCartButton = card.querySelector('.to_cart');
            let quantity = 0;
    
            minusButton.addEventListener('click', () => {
                if (quantity > 0) {
                    quantity--;
                    numberSpan.textContent = quantity;
                }
            });
    
            plusButton.addEventListener('click', () => {
                quantity++;
                numberSpan.textContent = quantity;
            });
    
            addToCartButton.addEventListener('click', () => {
                const productId = card.getAttribute('data-product-id');
                const productName = card.querySelector('.card-caption-side p').textContent;
                const productPrice = card.querySelector('.card-caption-side h2').textContent;
                const dateTime = new Date().toLocaleString();
    
                const cartItem = {
                    id: productId,
                    name: productName,
                    quantity: quantity,
                    price: productPrice,
                    dateTime: dateTime
                };
    
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItemIndex = cart.findIndex(item => item.id === productId);
    
                if (existingItemIndex > -1) {
                    cart[existingItemIndex].quantity += quantity;
                } else {
                    cart.push(cartItem);
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${productName} добавлен в вашу корзину`);
                cart_items_number.innerText = quantity
            });
        });
    });

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalProducts = cart.length;
cart_items_number.innerText = totalProducts