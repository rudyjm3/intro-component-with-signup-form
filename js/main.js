const trialForm = document.getElementById('trial-form');
const errorTxt = document.getElementsByClassName('error-txt');
const errorIcon = document.getElementsByClassName('error-icon');
const inputControl = document.getElementsByClassName('input-control');
console.log(errorTxt);
console.log(errorIcon);

//Listen for a submit from the form. Element?? arrow function
trialForm.addEventListener('submit', () => {
   // e.preventDefault();
   //Run function below
   validateInput();
});

const setError = (element, message) => {
   const inputControl = element.parentElement;
   console.log(inputControl);
   errorTxt[0].innerText = message;
   console.log(message);
   console.log(errorTxt);
   errorTxt[0].style.cssText = "display:block;";
   errorIcon[0].style.cssText = 'transform: scale(1);';
   errorIcon[0].classList.add('error-shake');
   inputControl.classList.remove('success');
}


const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check all inputs for a value
function validateInput() {

   if(document.trialform.fName.value == "") {
      trialForm.fName.focus();//Focus puts the blinking cursor in the input with the problem
         alert ("First name needs to be filled out");
      setError(document.trialform.fName, 'First name is required');
      //    errorTxt.style.display = "block";
      //    errorIcon.style.cssText = 'transform: scale(1);';
      // errorIcon.classList.add('error-shake');

   }
   return true ;
};