function getPassword(){
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    var password = "";
    for(let i=0; i<16; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.querySelector('input').value = password;
}