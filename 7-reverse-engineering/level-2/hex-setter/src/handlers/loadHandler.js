import data from '../data.js';
import dom from '../dom.js';
import createSelect from '../components/createSelect.js';

const loadHandler = () => {
    data.selects.forEach((selectData) => {
        const selectDom = createSelect(selectData);
        dom.container.append(selectDom);
    });
};

export default loadHandler;
