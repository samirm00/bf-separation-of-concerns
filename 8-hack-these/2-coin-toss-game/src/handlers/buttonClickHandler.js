import dom from '../dom.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import displaySelections from '../components/displaySelections.js';
import displayRandom from '../components/displayRandom.js';
import tallyScoreHandler from './tallyScoreHandler.js';

const buttonClickHandler = (e) => {
    const random = getRandomNumber();
    const computerPick = getRandomNumber();

    let headOrTail;
    if (computerPick === 1) {
        headOrTail = 'heads';
    } else {
        headOrTail = 'tails';
    }

    dom.span.classList.add('animate');
    const userSelection = e.target.id;
    let userPick;

    if (userSelection === 'heads') {
        userPick = 1;
    } else if (userSelection === 'tails') {
        userPick = 0;
    }

    displaySelections(dom, userSelection, headOrTail);
    displayRandom(dom, random);

    setTimeout(() => {
        tallyScoreHandler(random, userPick, computerPick);
        dom.span.classList.remove('animate');
    }, 2 * 1000);
};

export default buttonClickHandler;
