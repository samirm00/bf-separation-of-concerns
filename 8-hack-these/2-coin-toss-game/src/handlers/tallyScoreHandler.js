import data from '../data.js';
import dom from '../dom.js';

const tallyScoreHandler = (random, userPick, computerPick) => {
    if (userPick === random) {
        data.userScore++;
    }
    if (computerPick === random) {
        data.computerScore++;
    }
    dom.playerDisplay.textContent = `${data.userScore}`;
    dom.computerDisplay.textContent = `${data.computerScore}`;

    if (data.userScore === 5 && data.computerScore === 5) {
        dom.winner.innerHTML = `<h1>It's a Tie</h1>`;
    } else if (data.userScore === 5) {
        dom.winner.innerHTML = `<h1>You Win!!!</h1>`;
    } else if (data.computerScore === 5) {
        dom.winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
    }
};

export default tallyScoreHandler;
