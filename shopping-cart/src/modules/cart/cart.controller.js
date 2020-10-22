export function addCart(product_id,products,cart){
    for (var i = 0; i < products.length; i++) {
        if (products[i].product_id === product_id) {
            var cartItem = null;
            for (var k = 0; k < cart.length; k++) {
                if (cart[k].product.product_id == products[i].product_id) {
                    cartItem = cart[k];
                    cart[k].product_qty++;
                    break;
                }
            }
            if (cartItem == null) {
                
                var cartItem = {
                    product: products[i],
                    product_qty: products[i].product_qty 
                };
                cart.push(cartItem);
            }
        }
    }
}


export function remove(id, cart){
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.product_id == id) {
            cart.splice(i,1);
        }

    }
}


