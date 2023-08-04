const updateMessage = (dom, message, color) => {
    dom.message.innerHTML = message;
    dom.message.style.color = color || 'black';
    dom.guessInput.style.borderColor = color || 'black';
    dom.btn.style.backgroundColor = color || 'black';
    dom.btn.style.color = 'white';
};

export default updateMessage;
