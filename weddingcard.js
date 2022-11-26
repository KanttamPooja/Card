const form = document.querySelector('#password-form');
const passwordInput = document.querySelector('#password');
form.addEventListener('submit', (event)=>{
     event.preventDefault();
    validateForm();

    if(isFormValid() == true){
        form.submit();
    }else{
        event.preventDefault();
    }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if(container.classList.contains('error')){
            result= false;
        }
    });

    return result;
}
function validateForm(){
    if(passwordInput.value.trim() == ''){
        setError(passwordInput, 'Password can not be empty');
    }
    else if(passwordInput.value == '#Annadhan'){
        setSuccess(passwordInput);
    }
    else{
        setError(passwordInput, 'Password doesnot match');
    }
}

function setError(element, errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');

}