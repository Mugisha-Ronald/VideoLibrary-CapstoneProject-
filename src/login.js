// details from login page

let logInForm = document.querySelector('form');
let emailLogin = document.querySelector('#logInEmail');

let logInPassword = document.querySelector('#logInpsswrd')

logInForm.addEventListener('submit', function(e){
    e.preventDefault();
    logIn();
    logInForm.reset()
    

})


let usersData = JSON.parse(localStorage.getItem('usersData'));


let loGinData = [

        
    {
        'email': emailLogin.value,
        'password': logInPassword.value,
        

    }
]

function logIn(){

    // let logDAta = JSON.parse(localStorage.getItem('loGinData'));

    // if(logDAta){

    //     localStorage.setItem('loGinData',JSON.stringify([ ...loGinData, ...logDAta]));
    // }else{

    //     localStorage.setItem('loGinData', JSON.stringify([loGinData]));

    // }

    for(let i = 0; i< usersData.length; i++){
        
        if((emailLogin.value === usersData[i].email) && (logInPassword.value === usersData[i].password)){
            // console.log('correct credentials');
            window.open('./home.html', '_self')
        }else if((emailLogin.value !== usersData[i].email) && (logInPassword.value !== usersData[i].password)){

            console.log('invalid details')
        }
    }

    
    

}




