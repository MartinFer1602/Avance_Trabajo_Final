const cart = JSON.parse(localStorage.getItem("cart"))

if (cart != null) {
    // Setear contador en el navbar
    const cartActionCounter = document.getElementById("cart-action__counter")
    cartActionCounter.innerHTML = cart.length


    const tableCart = document.getElementById("table-cart")
    for (const cartItem of cart) {
        const root = document.createElement("tr")
        const html = `
          <th scope="row">${cartItem.sku}</th>
          <td class="table-cart__product">
            <img src="${cartItem.img}" class="table-cart__product-image">        
            <h3 class="table-cart__product-text">${cartItem.name}</h3>        
          </td>
          <td>
            ${cartItem.quantity}
          </td>
          <td>
           <button> Eliminar </button> 
          </td>
        `
        root.innerHTML = html

        tableCart.append(root)
    }
}