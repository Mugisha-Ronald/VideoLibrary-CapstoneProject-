// Registration

let emailInput = document.querySelector('#email');

let pswdInput = document.querySelector('#psw');

let passwdReptInpt = document.querySelector('#psw-repeat');

let theForm = document.querySelector('form');





theForm.addEventListener('submit', function(){

    let usersData = [

        
    {
        'email': emailInput.value,
        'password': pswdInput.value,
        'repeat_psswrd':passwdReptInpt.value,

    }
]

    let userData = JSON.parse(localStorage.getItem('usersData'));

    if(userData){

        localStorage.setItem('usersData',JSON.stringify([ ...usersData, ...userData]));
    }else{

        localStorage.setItem('usersData', JSON.stringify(usersData));

    }




    alert('Registration successful, you can now login')
    theForm.reset()
    
    window.open('/index.html');

    
});





