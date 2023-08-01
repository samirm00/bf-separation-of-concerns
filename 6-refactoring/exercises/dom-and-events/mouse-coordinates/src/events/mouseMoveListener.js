import dom from '../dom.js';
import mouseMoveHandler from '../handlers/mouseMoveHandler.js';

const mouseMoveListener = () => {
    dom.userInterface.addEventListener('mousemove', (e) => {
        mouseMoveHandler(e);
    });
};

export default mouseMoveListener;
