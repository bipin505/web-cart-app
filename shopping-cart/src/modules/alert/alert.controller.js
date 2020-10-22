export  function showAlert(data,productdata) {
    var product = productdata.items[data.target.classList.value];
    var x = document.getElementById("snackbar");
    x.innerHTML = product.name + " " + 'Added to Cart';
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);  
}