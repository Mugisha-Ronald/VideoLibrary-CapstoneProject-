
let cartItems = document.querySelector(".cart-page");
let tbl = document.querySelector('table')


let cartArray = JSON.parse(localStorage.getItem('cartArray'));
if(cartArray){
    cartArray.forEach((item) =>{
        cartItems.appendChild(tbl)
        tbl.innerHTML += `

        
                
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="${item.imgsrc}" alt="${item.name}">
                            <div>
                                <p>${item.name}</p>
                                <small>Price: $${item.price}</small>
                                <br>
                                <a href="">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="${item.numberOfUnits}"></td>
                    <td>$50.00</td>
                </tr>
        
    

        `
    })
}







