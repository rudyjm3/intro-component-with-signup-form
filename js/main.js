const trialForm = document.getElementById('trial-form');
const firstName = document.getElementById('fName-input');
const lastName = document.getElementById('lName-input');
const email = document.getElementById('email-input');
const pwd = document.getElementById('pwd-input');
// const errorTxt = document.getElementsByClassName('error-txt');
// const errorIcon = document.getElementsByClassName('error-icon');
// const inputControl = document.getElementsByClassName('input-control');

//Listen for a submit from the form. Element?? arrow function
trialForm.addEventListener('submit', e => {
   e.preventDefault();
   //Run function below
   validateInputs();
});

const setError = (element, message) => {
   const inputControl = element.parentElement;
   const errorTxt = inputControl.querySelector('.error-txt');
   const errorIcon = inputControl.querySelector('.error-icon');
   console.log(errorIcon);

   errorTxt.innerText = message;
   errorTxt.style.cssText = 'display: block;';
   errorIcon.style.cssText = 'transform: scale(1);';
   errorIcon.classList.add('error-shake');
   inputControl.classList.add('error-border');
   inputControl.classList.remove('success-border');
}

const setSuccess = element => {
   const inputControl = element.parentElement;
   const errorTxt = inputControl.querySelector('.error-txt');
   const errorIcon = inputControl.querySelector('.error-icon');

   errorTxt.innerText = "";
   errorTxt.style.cssText = 'display: block;';
   errorIcon.style.cssText = 'transform: scale(0);';
   errorIcon.classList.remove('error-shake');
   inputControl.classList.remove('error-border');
   inputControl.classList.add('success-border');
}


const validateInputs = () => {
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const pwdValue = pwd.value.trim();

   if (firstNameValue === '') {
      setError(firstName, 'First Name is required');
   } else {
      setSuccess(firstName);
   }

};








const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
