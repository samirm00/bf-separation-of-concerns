import dom from '../dom.js';

import selectHandler from '../handlers/selectHandler.js';

const selectListener = () => {
    dom.form.addEventListener('change', (e) => {
        selectHandler(e);
    });
};

export default selectListener;
