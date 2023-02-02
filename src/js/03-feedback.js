import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    formRef: document.querySelector('.feedback-form'),
    userEmailRef: document.querySelector('input[type="email"'),
    userMessageRef: document.querySelector('input[name="message"'),
};

refs.formRef.addEventListener('input', throttle(onFeedbackInput, 500));
refs.formRef.addEventListener('submit', onFormSubmit);
fillInput();

function onFeedbackInput(e){
    JSON.parse(localStorage.getItem(STORAGE_KEY));

    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function fillInput(){
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if(savedData){
        console.log(parsedInfo);
        refs.userEmailRef.value = parsedData.email;
        refs.userMessageRef.value = parsedData.message;
    }
};


