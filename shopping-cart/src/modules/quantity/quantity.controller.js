export function add(product_id, cart) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.product_id == product_id) {
            cart[i].product_qty++;
        }
    }
}

export function subtract(product_id, cart) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.product_id == product_id) {
            cart[i].product_qty--;
        }

        if (cart[i].product_qty == 0) {
            cart.splice(i, 1);
        }

    }
}