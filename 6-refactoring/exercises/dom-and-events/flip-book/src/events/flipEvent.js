import dom from '../dom.js';
import flipHandler from '../handlers/flipHandler.js';

const flipEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        flipHandler(e);
    });
};

export default flipEvent;
