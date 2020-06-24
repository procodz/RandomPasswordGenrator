document.addEventListener('click', getPassword) 

getPassword = function(){
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    var password = '';
    for(let i+0; i<16; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    
}
document.querySelector('a').value = password;