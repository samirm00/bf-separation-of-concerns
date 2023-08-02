import dom from '../dom.js';
import countLength from '../utils/countLength.js';
import createHeader from '../components/createHeader.js';

const calculateLengthHandler = () => {
    const word = dom.str.value;
    const length = countLength(word);

    // if header existed then update innerText else create it
    const headerExist = document.getElementById('my-header');
    if (!headerExist) {
        const headerDom = createHeader(length);
        dom.output.append(headerDom);
    } else {
        headerExist.innerHTML = length;
    }
};

export default calculateLengthHandler;
