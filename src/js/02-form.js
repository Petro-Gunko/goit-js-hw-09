
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const storageKey = 'feedback-form-state';

    // Initialize form fields based on the stored state
    const initializeForm = () => {
        const storedState = JSON.parse(localStorage.getItem(storageKey));
        if (storedState) {
            emailInput.value = storedState.email || '';
            messageInput.value = storedState.message || '';
        }
    };

    initializeForm();

    // Event listener for the input event
    form.addEventListener('input', event => {
        const currentState = {
            email: emailInput.value,
            message: messageInput.value
        };
        localStorage.setItem(storageKey, JSON.stringify(currentState));
        console.log(currentState);
    });

    // Event listener for the submit event
    form.addEventListener('submit', event => {
        event.preventDefault();
        const currentState = JSON.parse(localStorage.getItem(storageKey));
        console.log(currentState);
        form.reset();
        localStorage.removeItem(storageKey);
    });
});


