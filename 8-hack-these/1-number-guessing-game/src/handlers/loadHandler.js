import data from '../data.js';
import dom from '../dom.js';
import updateMessage from '../components/updateMessage.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const loadHandler = () => {
    data.guesses = 0;
    data.num = getRandomNumber(data.min, data.max);
    let tempMes = `Guess a number from ${data.min} to ${data.max}`;
    updateMessage(dom, tempMes, 'blue');
};

export default loadHandler;
