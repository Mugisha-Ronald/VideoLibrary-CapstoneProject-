
let cartItems = document.querySelector(".cart-page");
let tbl = document.querySelector('.holdItems');


let cartArray = JSON.parse(localStorage.getItem('cartArray'));
if(cartArray){
    // tbl.innerHTML = '';
    cartArray.forEach((item) =>{
        // cartItems.appendChild(tbl)
        tbl.innerHTML += `

        
                
                <tr class='details'>
                    <td>
                        <div class="cart-info">
                            <img src="${item.imgsrc}" alt="${item.name}">
                            <div>
                                <p>${item.name}</p>
                                <small>Price: $${item.price}</small>
                                <br>
                                <button class='remve' href="">Remove</button>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" min='0' value="${item.numberOfUnits}"></td>
                    <td>$:${item.numberOfUnits * item.price}</td>
                </tr>
        
    

        `;
    })
}

tbrow = document.querySelector('.details');

let rmveBtn = document.querySelector('.remve');


rmveBtn.addEventListener('click',function(){
    removeMovie();
    window.location.reload(true);

})




function removeMovie(){
    const allPrice = JSON.parse(localStorage.getItem('totalprice'))
    var index = 1
    cartArray.splice(index,1)
    
    

    localStorage.setItem('cartArray',JSON.stringify(cartArray))
    

      
}

const allPrice = JSON.parse(localStorage.getItem('totalprice'))
totalMoviePrice = document.querySelector('.total');
console.log(totalMoviePrice.innerHTML)
totalMoviePrice.innerHTML = allPrice










