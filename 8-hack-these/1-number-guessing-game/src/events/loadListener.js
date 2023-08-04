import loadHandler from '../handlers/loadHandler.js';

const loadListener = () => {
    document.addEventListener('DOMContentLoaded', loadHandler);
};

export default loadListener;
