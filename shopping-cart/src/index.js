$(function(){
    $("#content").load("./src/modules/card/card.view.html");
  });

  import http from 'http';
import fs from 'fs';
import path from 'path';

const indexHtmlContent = fs.readFileSync(path.join(__dirname, '../../shopping-cart/application.html'));

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtmlContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(9000);
import { showAlert } from '../src/modules/alert/alert.controller.js';
import { addCart, remove } from '../src/modules/cart/cart.controller.js';
import { add, subtract } from '../src/modules/quantity/quantity.controller.js';
var products = [];
var cart = [];
var productdata;
$(document).ready(function () {
    var self = this;

    $.getJSON("../src/data.json", function (data) {

        productdata = data;

        data.items.forEach(makeProductList);
        var listItems = document.querySelectorAll("button");
        var i;
        for (i = 0; i < listItems.length; i++) {
            listItems[i].className = i;
            listItems[i].addEventListener('click', addToCart);


        };
    }).fail(function () {
        console.log("An error has occurred.");
    });
});

function makeProductList(item, index) {
    const content = `
      <div class="card">
        <div class="card-body">
        <div class="discount">${item.discount}
        <span>% off</span>
        </div>
        <div class="product-image">
            <img src="${item.image}"/>
            </div>
            <div class="product-detail">
          <div class="name">${item.name}</div>
          <div class="price">
          <span class="display"><span class="price">$${item.price.display}</span></span><span class="actual">$${item.price.actual}</span>
          <span class="addtocart"> <button type="button" class="add"  id="productID">Add to Cart</button></span>
          </div>
          </div>  
        </div>
    </div>
    `;
    document.getElementById("product-list").innerHTML += content;

}

function addToCart(event) {
    var productDetail = productdata.items[event.target.classList.value];

    var newProduct = {
        product_id: null,
        product_desc: null,
        product_img: null,
        product_qty: 0,
        product_price: 0.00,
        product_display: 0
    };
    newProduct.product_id = event.target.classList.value;
    newProduct.product_desc = productDetail.name;
    newProduct.product_img = productDetail.image;
    newProduct.product_qty = 1;
    newProduct.product_price = productDetail.price.actual;
    newProduct.product_display = productDetail.price.display;
    products.push(newProduct);
    products = removeDuplicates(products, productDetail.name);

    showAlert(event, productdata);
    addCart(event.target.classList.value, products, cart);
    renderCartTable();
}

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}


function renderCartTable() {
    var html = '';
    var ele = document.getElementById("order-summary");
    ele.innerHTML = '';

    html += "<table id='tblCart' border='1|1'>";
    html += "<td>Items (".concat(cart.length ,")</td>");
    html += "<td>Quantity</td>";
    html += "<td>Price</td>";
    var GrandTotal = 0;
    var ItemTotal = 0;
    for (var i = 0; i < cart.length; i++) {
        html += "<tr>";
        html += "<td> <img class='cart-img' src= \"" + cart[i].product.product_img + "\">" + cart[i].product.product_desc + " <button type='submit' class='action remove' id='removeID'  onClick='removeItem(\"" + cart[i].product.product_id + "\", this);'/>x</button></td>";
        html += "<td class='center'><button type='submit' class='action' onClick='subtractQuantity(\"" + cart[i].product.product_id + "\", this);'/>-</button>&nbsp".concat(parseInt(cart[i].product_qty), " <button type='submit' class='action' onClick='addQuantity(\"" + cart[i].product.product_id + "\", this);'/>+</button></td>");        html += "<td class='center'>$" + parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty) + "</td>";
        html += "</tr>";

        GrandTotal += parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty);
        ItemTotal += parseFloat(cart[i].product.product_display) * parseInt(cart[i].product_qty);

    }

    var orderDetail = `
    <div class='order'>
    <h3>Total</h3>
     <div><span class="item-total">Items(${cart.length}):</span><span>$${ItemTotal}</span></div>
     <div><span class='discount-price'>Discount:</span> <span>- $${ItemTotal - GrandTotal}</span></div>
    <div class="order-total-price"><span class='total'>Order Total:</span> <span>$${GrandTotal}</span></div>
    </div>`;
    document.getElementById('order-total').innerHTML = orderDetail;

    html += "</table>";
    ele.innerHTML = html;
}


function subtractQuantity(product_id) {
    subtract(product_id, cart);
    renderCartTable();
}

function addQuantity(product_id) {
    add(product_id, cart);
    renderCartTable();
}
window.removeItem = removeItem;
window.addQuantity = addQuantity;
window.subtractQuantity = subtractQuantity;

function removeItem(product_id) {
    remove(product_id, cart);
    renderCartTable();
}

  

