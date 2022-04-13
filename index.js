
let movies = [

    {   id: 0,
        name: 'The Protector',
        price: 10,
        imgsrc:'./images/protector.jpg',
        numberOfUnits:1,
        rating:3,
    },

    {   id: 1,
        name: 'Mad Max',
        price: 20,
        imgsrc:'./images/madmax.jpg',
        numberOfUnits:1,
        rating:4
    },

    {   id: 2,
        name: 'Uncharted',
        price: 30,
        imgsrc:'./images/unchartered.jpg',
        numberOfUnits:1,
        rating:5
    },

    {   id: 3,
        name: ' King Kong',
        price: 40,
        imgsrc:'./images/kingkong.jpg',
        numberOfUnits:1,
        rating:3
    },


    {   id: 4,
        name: 'Fast&Furious',
        price: 15,
        imgsrc:'./images/furious.jpg',
        numberOfUnits:1,
        rating:4
    },


    {   id: 5,
        name: 'Gemni Man',
        price: 25,
        imgsrc:'./images/gemni.jpg',
        numberOfUnits:1,
        rating:3
    }

]


let cart = document.querySelectorAll('.addToCart');





// a loop to go through the elements

for(let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click',function(){

        addToCart(movies[i].id);
        totalPrice(movies[i])

        //addToLocalStorage(movies[i]);

        
        
        
    })
}

//add to cart, but before , create a cart array to save all the items
let cartArray  = [];

function addToCart(id){
    // then save each movie to the cartArray, means first find the movie and then push it to the array
    // first check if movie already exists in cartArray

    if(cartArray.some((item) => item.id === id)){
        alert("Movie already in cart")
    }else{

        const item = movies.find((movie) => movie.id === id)

        cartArray.push({
            ...item,
            numberOfUnits:1,
        });

        console.log(cartArray)
        
    }

    let cartItems = JSON.parse(localStorage.getItem('cartArray'))

    if(cartItems){

        localStorage.setItem('cartArray',JSON.stringify([ ...cartArray, ...cartItems]))
    }else{

        localStorage.setItem('cartArray',JSON.stringify(cartArray));
    }
    
   
    

}

// cart update function


//render cart items function

// function renderCartItems(){
//     let cartArray = JSON.parse(localStorage.getItem('cartArray'))
//     if(cartArray){
//         cartArray.forEach((item) =>{
//             cartItems.innerHTML += `
    
//             <table>
//                     <tr>
//                         <th>Product</th>
//                         <th>Quantity</th>
//                         <th>Subtotal</th>
//                     </tr>
//                     <tr>
//                         <td>
//                             <div class="cart-info">
//                                 <img src="${item.imgsrc}" alt="${item.name}">
//                                 <div>
//                                     <p>${item.name}</p>
//                                     <small>Price: $${item.price}</small>
//                                     <br>
//                                     <a href="">Remove</a>
//                                 </div>
//                             </div>
//                         </td>
//                         <td><input type="number" value="${item.numberOfUnits}"></td>
//                         <td>$50.00</td>
//                     </tr>
//             </table>
        
    
//             `
//         })
//     }
// }






// adding price to local storage and updating it 
function totalPrice(movie){

    // check if there are some items in local storage
    let moviePrice = localStorage.getItem('totalprice');
    if(moviePrice){
        moviePrice = parseInt(moviePrice)

        //update the local storage incase there is something
        localStorage.setItem('totalprice', moviePrice + movie.price)
    }else{

        localStorage.setItem('totalprice',movie.price)
    }

    
}

// adding all elements to the local storage#

// function addToLocalStorage(scene){
//     const allMovieItems = JSON.parse(localStorage.getItem('allItems'));


//     if(allMovieItems){

//         //update the array
//         allMovieItems.unshift(scene)
//         localStorage.setItem('allItems', JSON.stringify(allMovieItems))
        
//     }else{

//         localStorage.setItem('allItems', JSON.stringify([scene]));
//     }
// }




