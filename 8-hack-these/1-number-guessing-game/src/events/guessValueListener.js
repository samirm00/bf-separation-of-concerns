import dom from '../dom.js';
import guessValueHandler from '../handlers/guessValueHandler.js';

const guessValueListener = () => {
    dom.btn.addEventListener('click', guessValueHandler);
};

export default guessValueListener;
