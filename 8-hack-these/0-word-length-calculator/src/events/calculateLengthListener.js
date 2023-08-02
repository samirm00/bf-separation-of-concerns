import dom from '../dom.js';

import calculateLengthHandler from '../handlers/calculateLengthHandler.js';
const calculateLengthListener = () => {
    dom.btn.addEventListener('click', calculateLengthHandler);
};

export default calculateLengthListener;
