const mmInput = document.querySelector('.MM');
const yyInput = document.querySelector('.YY');
const CVCInput = document.querySelector('.CVC');
const expireDate = document.querySelector('#expire');
const cardNumber = document.querySelector('#cardNumber');
const cardNumberDetail = document.querySelector('.card-number');
const cardNameDetail = document.querySelector('.card-name');
const dateMMDetail = document.querySelector('.date-mm');
const dateYYDetail = document.querySelector('.date-yy');
const cvcDetail = document.querySelector('.card-cvc');
const cardName = document.querySelector('#cardName');
const formBody = document.querySelector('.form-body');
const mainConfirm = document.querySelector('.main-confirm');
const btnConfirm = document.querySelector('.btn-confirm');
const cvcBody = document.querySelector('.cvc-input');

formBody.addEventListener('submit', (e)=>{
    let canSubmit = true
    e.preventDefault();
    if (expireDate.classList.contains("validate-year")) {          
        canSubmit = false
    }

    if (!CVCInput.value){
        if (!cvcBody.classList.contains("validate-empty")){
            cvcBody.classList.add("validate-empty")
        }
        canSubmit = false
    }
    if (!mmInput.value || !yyInput.value){
        if (!expireDate.classList.contains("validate-empty")){
            expireDate.classList.add("validate-empty")
        }
        canSubmit = false
    }

    if (canSubmit){
        mainConfirm.classList.toggle("hide")
        formBody.classList.toggle("hide")
    }
})

const profile_link = document.querySelector(".profile")
const profile_link1 = document.querySelector(".profile1")
profile_link.href = "https://codewithyembot.vercel.app"
profile_link1.href = "https://codewithyembot.vercel.app"

btnConfirm.addEventListener("click", (e)=>{
    e.preventDefault()
    mainConfirm.classList.toggle("hide")
    formBody.classList.toggle("hide")
})

cardName.addEventListener('input', (e)=>{
    e.preventDefault();
    let capValue = cardName.value.toUpperCase()
    cardNameDetail.textContent = capValue
})

cardNumber.addEventListener('input', (e)=>{
    e.preventDefault();
    let cardValue = cardNumber.value
    let formattedValue = formatCardNumber(cardValue)
    cardNumber.value = formattedValue
    cardNumberDetail.textContent = formattedValue
})

mmInput.addEventListener('input', function() {
    const value = mmInput.value.trim();
    const isValidMonth = /^\d{1,2}$/.test(value);

    if (expireDate.classList.contains("validate-empty")){
        expireDate.classList.remove("validate-empty")
    }

    if (!mmInput.validity.valid){
        if (!expireDate.classList.contains("validate-invalid")) {          
            expireDate.classList.add("validate-invalid")
        }
    }else{
        expireDate.classList.remove("validate-invalid")
    }

    if (isValidMonth && value.length === 2 && mmInput.validity.valid) {
        yyInput.focus();
    }
});

yyInput.addEventListener('keydown', function(e) {
    const value = yyInput.value.trim();

    if (e.key === 'Backspace' && value.length === 0) {
      e.preventDefault();
      yyInput.value = '';
      mmInput.focus();
    }
});

yyInput.addEventListener('input', function() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const maxAllowedYear = currentYear + 5; // Calculate the maximum allowed
    const enteredYear = parseInt(this.value, 10); // Parse the entered year as an integer
    const maxAllowNumber = maxAllowedYear % 100

    const value = yyInput.value.trim();
    const isValidYear = /^\d{2}$/.test(value);

    if (expireDate.classList.contains("validate-empty")){
        expireDate.classList.remove("validate-empty")
    }
    
    if (!yyInput.validity.valid){
        if (!expireDate.classList.contains("validate-invalid")) {          
            expireDate.classList.add("validate-invalid")
        }
    }else{
        expireDate.classList.remove("validate-invalid")
        dateYYDetail.textContent = yyInput.value
    }

    if (enteredYear > maxAllowNumber){
        if (!expireDate.classList.contains("validate-year")) {          
            expireDate.classList.add("validate-year")
        }
    }else{
        expireDate.classList.remove("validate-year")
    }

    if (isValidYear && value.length === 2 && enteredYear < maxAllowNumber) {
        CVCInput.focus();
        dateYYDetail.textContent = yyInput.value
    }
});

CVCInput.addEventListener('input', function() {
    if (cvcBody.classList.contains("validate-empty")){
        cvcBody.classList.remove("validate-empty")
    }
    if (CVCInput.validity.valid){
        cvcDetail.textContent = CVCInput.value
    }
});

mmInput.addEventListener('input', function() {
    const value = mmInput.value.trim();
    const isValidMonth = /^\d{1,2}$/.test(value);

    if (isValidMonth && value.length === 1 && parseInt(value) >= 2) {
        mmInput.value = '0' + value;
        yyInput.focus();
    }
    dateMMDetail.textContent = mmInput.value
});

function formatCardNumber(value) {
    const profile_link = document.querySelector(".profile")
    const profile_link1 = document.querySelector(".profile1")
    profile_link.href = "https://codewithyembot.vercel.app"
    profile_link1.href = "https://codewithyembot.vercel.app"

    // const formattedValue = value.replace(/\D/g, '').substring(0, 16); // Remove non-digits and limit to 16 characters
    const formattedValue = value.replace(/\s/g, '').substring(0, 19); // Remove existing spaces and limit to 19 characters
    const parts = [];
    for (let i = 0; i < formattedValue.length; i += 4) {
      parts.push(formattedValue.substring(i, i + 4));
    }
    return parts.join(' ');
}