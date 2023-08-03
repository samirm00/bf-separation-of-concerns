import dom from '../dom.js';
import reverseAndUpper from '../utils/reverseAndUpper.js';
import updateOutput from '../components/updateOutput.js';

const flipHandler = (e) => {
    const value = e.target.value;
    const newValue = reverseAndUpper(value);
    updateOutput(dom.output, newValue);
};

export default flipHandler;
