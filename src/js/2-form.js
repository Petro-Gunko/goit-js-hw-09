
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const storageKey = 'feedback-form-state';

    // Ініціалізуємо поля форми відповідно до збереженого стану
    const initializeForm = () => {
        const storedState = JSON.parse(localStorage.getItem(storageKey));
        if (storedState) {
            emailInput.value = storedState.email;
            messageInput.value = storedState.message;
        }
    };
    initializeForm();

    // Функція для валідації та збереження стану форми
    const validateAndSaveForm = () => {
        const currentState = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem(storageKey, JSON.stringify(currentState));
        console.log(currentState);

    
    };

    // Event listener для події input
    form.addEventListener('input', event => {
        validateAndSaveForm();
    });

    // Event listener для події submit
    form.addEventListener('submit', event => {
        event.preventDefault();
       
        if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {

            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Please fill in both email and message fields.';
            errorMessage.style.color = 'red';
            form.appendChild(errorMessage);
        } 
        
        const currentState = JSON.parse(localStorage.getItem(storageKey));
        if (currentState && currentState.email !== '' && currentState.message !== '') {
            form.reset();
            localStorage.removeItem(storageKey);
        }
    });
});