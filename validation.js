let username = document.getElementById('username')
let password = document.getElementById('password')
// let email = document.getElementByI('email')
// let tel = document.getElementByI('tel')
let x = 1

function validform(){
    if(username.value == ''){
        document.getElementById('usererror').innerHTML = 'must be required'
        x = 0
    }
    else{
        document.getElementById('usererror').innerHTML = ''
        x = 1
    }
    if(password.value == ''){
        document.getElementById('passerror').innerHTML = 'enter your password'
        x = 0
    }
    else if(password.value.length<8){
        document.getElementById('passerror'). innerHTML = 'please enter your 8 digit'
        x = 0
    }
    else{
        document.getElementById('passerror').innerHTML = ''
        x = 1
    }
    if(email.value == ''){
        document.getElementById('emailerror').innerHTML = 'enter your email'
        x = 0
    }
    else{
        document.getElementById('emailerror').innerHTML = ''
        x = 1
    }
    if(tel.value == ''){
        document.getElementById('telerror').innerHTML = 'enter your mo.number'
        x = 0
    }
    else if(tel.value.length<12){
        document.getElementById('telerror').innerHTML = 'please enter 12 digit'
        x = 0
    }
    else{
        document.getElementById('telerror').innerHTML = ''
        x = 1
    }
    if (x){
        return true
    }
    else{
        return false
    }
}