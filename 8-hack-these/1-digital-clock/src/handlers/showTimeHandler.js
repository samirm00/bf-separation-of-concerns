import dom from '../dom.js';

import getTime from '../utils/getTime.js';
import displayTime from '../components/displayTime.js';

const showTimeHandler = () => {
    const time = getTime();
    displayTime(dom.display, time);
};

export default showTimeHandler;
