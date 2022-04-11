import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

const formData = {};



formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', saveFormElValues);


function onFormElInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


populateInputs()
function populateInputs() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
         const { email, message } = JSON.parse(savedFormData);
        formEl.email.value = email || "";
        formEl.message.value = message || "";
        
    }
}

function saveFormElValues(e) {
    e.preventDefault();

    if (localStorage.getItem(STORAGE_KEY)) {

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);

     formEl.reset();}
}