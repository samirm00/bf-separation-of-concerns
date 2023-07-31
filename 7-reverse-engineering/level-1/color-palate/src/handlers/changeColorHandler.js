import dom from '../dom.js';
import updateColor from '../components/updateColor.js';

const changeColorHandler = () => {
    const value = dom.colorInput.value;
    const body = document.body;
    updateColor(body, value);
};

export default changeColorHandler;
