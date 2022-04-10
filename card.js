let cart = document.querySelectorAll('.addToCart');

// get every image and save them as base64, then save the base64 string as a local storage value
let pic_1 = document.querySelector('#picOne');
let imgOne = getBase64Image(pic_1);
let pic_2 = document.querySelector('#picTwo');
let imgtwo = getBase64Image(pic_2);
let pic_3 = document.querySelector('#picThree');
let imgthree = getBase64Image(pic_3);
let pic_4 = document.querySelector('#picFour');
let imgFor = getBase64Image(pic_4);
let pic_5 = document.querySelector('#picFive');
let imgFive = getBase64Image(pic_5);
let pic_6 = document.querySelector('#picSix');
let imgSix = getBase64Image(pic_6);

// function to convert image to base64 string

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


// the movies are stored in an array of objects

// grab individual buttons and use each button to add a single element in local storage not clicking one button to add all elements

let myBtns = [pic_1,pic_2,pic_3,pic_4,pic_5,pic_6]
console.log(myBtns[0])





let movies = [

    {
        name: 'The Protector',
        price: 10,
        pic: imgOne,
        rating:3,
    },

    {
        name: 'Mad Max',
        price: 20,
        pic : imgtwo,
        rating:4
    },

    {
        name: 'Uncharted',
        price: 30,
        pic:imgthree,
        rating:5
    },

    {
        name: ' King Kong',
        price: 40,
        pic:imgFor,
        rating:3
    },


    {
        name: 'Fast&Furious',
        price: 15,
        pic:imgFive,
        rating:4
    },


    {
        name: 'Gemni Man',
        price: 25,
        pic:imgSix,
        rating:3
    }

]

// a loop to go through the elements

for(let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click',function(){
        totalPrice(movies[i])

        addToLocalStorage(movies[i]);
    })
}







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

function addToLocalStorage(scene){
    const allMovieItems = JSON.parse(localStorage.getItem('allItems'));


    if(allMovieItems){

        //update the array
        allMovieItems.unshift(scene)
        localStorage.setItem('allItems', JSON.stringify(allMovieItems))
        
    }else{

        localStorage.setItem('allItems', JSON.stringify([scene]));
    }
}
