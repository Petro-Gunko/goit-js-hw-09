
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const storageKey = 'feedback-form-state';

    // Initialize form fields based on the stored state
    const initializeForm = () => {
        const storedState = JSON.parse(localStorage.getItem(storageKey));
        if (storedState) {
            emailInput.value = storedState.email.trim() || '';
            messageInput.value = storedState.message.trim() || '';
        }
    };
    initializeForm();

    // Event listener for the input event
    form.addEventListener('input', event => {
        const currentState = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem(storageKey, JSON.stringify(currentState));
        console.log(currentState);
    });

    // Event listener for the submit event
    form.addEventListener('submit', event => {
        event.preventDefault();
        const currentState = JSON.parse(localStorage.getItem(storageKey));
        console.log(currentState);
        if (currentState.email.trim() !== '' && currentState.message.trim() !== '') {
            form.reset();
            localStorage.removeItem(storageKey);
        } else {
            console.log('Please fill in both email and message fields.');
        }
    });
});

