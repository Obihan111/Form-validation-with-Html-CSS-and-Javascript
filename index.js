const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()  //trim helps in ensuring that whitespaces are removed
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank')
    }else{
        //add success class
        setSuccessFor(username)
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email address is not valid')
    }else{
        setSuccessFor(email)
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }else if(passwordValue === passwordValue.toUpperCase()){
        setErrorFor(password, 'password is not valid')
    }else{
        setSuccessFor(password)
    }
    if(password2Value === ''){
        setErrorFor(password2, 'Password2 cannot be blank')
    }else if(password2Value !== passwordValue){
        setErrorFor(password2, 'password does not match')
    }else{
        setSuccessFor(password2)
    }
}
   
function setErrorFor(input, message) {
    const formControl = input.parentElement //to target the parent ofinput which is form-control div.
    const small = formControl.querySelector('small') //totarget the small tag, which is inside the form control
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement //it gives the parent of the input tag whcih is <div. class="form-control"></div.
    formControl.className = 'form-control success' //A javascript way of giving formControl a css class style which is .form-control success
}
function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ //regex for email validation
}