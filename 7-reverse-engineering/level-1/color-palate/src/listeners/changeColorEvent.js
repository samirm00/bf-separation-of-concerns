import dom from '../dom.js';
import changeColorHandler from '../handlers/changeColorHandler.js';

const changeColorEvent = () => {
    dom.colorInput.addEventListener('change', changeColorHandler);
};

export default changeColorEvent;
