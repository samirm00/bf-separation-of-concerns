import dom from '../dom.js';
import castStringHandler from '../handlers/castStringHandler.js';

const castStringListener = () => {
    dom.action.addEventListener('click', (e) => {
        castStringHandler(e);
    });
};

export default castStringListener;
