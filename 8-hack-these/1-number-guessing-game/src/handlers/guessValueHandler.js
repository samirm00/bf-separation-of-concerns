import data from '../data.js';
import dom from '../dom.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import updateMessage from '../components/updateMessage.js';

const guessValueHandler = () => {
    if (dom.btn.classList.contains('replay')) {
        data.guesses = 0;
        data.num = getRandomNumber(data.min, data.max);
        let tempMes = `Guess a number from ${data.min} to ${data.max}`;
        updateMessage(dom, tempMes, 'blue');
        dom.btn.innerHTML = 'Guess';
        dom.guessInput.style.display = 'block';
        dom.btn.classList.remove('replay');
    } else {
        data.guesses++;
        let tempGuess = dom.guessInput.value;
        dom.guessInput.value = '';
        tempGuess = parseInt(tempGuess);
        if (isNaN(tempGuess)) {
            updateMessage(dom, `Please enter only Digits`, 'red');
        } else if (tempGuess === data.num) {
            updateMessage(
                dom,
                `Correct guess of ${data.num} in ${data.guesses} guesses`,
                'green',
            );
            dom.btn.innerHTML = 'Restart dom';
            dom.guessInput.style.display = 'none';
            dom.btn.classList.add('replay');
            data.max += 5;
        } else {
            let holder =
                tempGuess > data.num
                    ? {
                          c: 'blue',
                          m: 'too high',
                      }
                    : {
                          c: 'purple',
                          m: 'too small',
                      };
            updateMessage(dom, holder.m, holder.c);
        }
    }
};

export default guessValueHandler;
