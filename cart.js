
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
                                    <small class = 'itemPrice'>Price: $${item.price}</small>
                                    <br>
                                    <button class='remve' href="">Remove</button>
                                </div>
                            </div>
                        </td>
                        <td><input class = 'qntyInputs' type="number" min='0' value="${item.numberOfUnits}"></td>
                        <td class = 'sub-total'>$:${item.numberOfUnits * item.price}</td>
                    </tr>
                
        
    

        `;
    })
}









tbrow = document.querySelectorAll('.details');

let rmveBtn = document.querySelectorAll('.remve');






row = tbl.rows
let totalPrice = JSON.parse(localStorage.getItem('totalprice'));
console.log(totalPrice)
// console.log(row)

// rmveBtn.addEventListener('click',function(){
//     // removeMovie();
    
//     deleteMovie();
//     window.location.reload(true);

// })

for(let i =0; i<rmveBtn.length; i++){
    rmveBtn[i].addEventListener('click', function(){
        // console.log(row[i]);
        tbl.deleteRow(row[i])
        deleteMovie(cartArray[i].id)
        if(totalPrice < 1){
            alert('No more movies in the cart,')
        }else{
            totalPrice = totalPrice - cartArray[i].price
        }

        localStorage.setItem('totalprice',JSON.stringify(totalPrice))
        window.location.reload(true);
    })
}


const allPrice = JSON.parse(localStorage.getItem('totalprice'))
totalMoviePrice = document.querySelector('.total');
console.log(totalMoviePrice.innerHTML)
totalMoviePrice.innerHTML = allPrice


function deleteMovie(id){
    let cartArray = JSON.parse(localStorage.getItem('cartArray'));
    let index = cartArray.findIndex(item => item.id === id)
    // console.log(cartArray[0].id)
    

    // cartArray = cartArray.splice(index, 1)
    // localStorage.setItem('cartArray',JSON.stringify(cartArray))
    if (index > -1) {
        cartArray.splice(index, 1); // 2nd parameter means remove one item only
      }

      localStorage.setItem('cartArray',JSON.stringify(cartArray))
}





// function removeMovie(){
//     const allPrice = JSON.parse(localStorage.getItem('totalprice'))
//     var index = 1
//     cartArray.splice(index,1)
    
    

//     localStorage.setItem('cartArray',JSON.stringify(cartArray))
    

      
// }




let quantityInputs = document.querySelector('.qntyInputs');

let priceItem = document.querySelector('.itemPrice');

let subTotal = document.querySelector('.sub-total');
//subTotal = subTotal.innerHTML.replace('$:', '')
console.log(subTotal.innerHTML)
priceItem = priceItem.innerHTML.replace('Price: $','')


quantityInputs.addEventListener('change', updateCart);



function updateCart(){

    let subTotals = [];

   let totalPrice = JSON.parse(localStorage.getItem('totalprice'));

    let cartArray = JSON.parse(localStorage.getItem('cartArray'));

    for(let i = 0; i< cartArray.length; i++){
        // console.log(cartArray[i].price)

        let result = quantityInputs.value * cartArray[i].price;

        subTotal.innerHTML = `$: ${result}`;


        cartArray[i].numberOfUnits = quantityInputs.value

        localStorage.setItem('cartArray',JSON.stringify(cartArray));

        subTotals.push(result)

        var sum = subTotals.reduce(function(a, b){
            return a + b;
        }, 0);

        totalPrice = sum;

        localStorage.setItem('totalprice',JSON.stringify(totalPrice))
        window.location.reload(true);

        
        console.log(totalPrice)

        
        console.log(subTotals)

        
        
       
        console.log(result)
       
    }

    
}














