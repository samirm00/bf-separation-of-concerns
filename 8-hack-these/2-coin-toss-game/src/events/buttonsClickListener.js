import dom from '../dom.js';
import buttonClickHandler from '../handlers/buttonClickHandler.js';

const buttonsClickListener = () => {
    dom.buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            buttonClickHandler(e);
        });
    });
};

export default buttonsClickListener;


