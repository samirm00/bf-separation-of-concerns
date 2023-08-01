import data from '../data.js';
import averageEvens from '../utils/averageEvens.js';

const averageEvensHandler = () => {
    let acceptingInput = true;
    while (acceptingInput) {
        const nextInput = prompt('enter a number');
        if (nextInput === null || nextInput === '') {
            acceptingInput = false;
            continue;
        }

        const nextNumber = Number(nextInput);
        if (Number.isNaN(nextNumber)) {
            alert(`"${nextInput}" is not a valid number`);
        } else {
            data.allNumbers.push(nextNumber);
        }
    }
    const average = averageEvens(data.allNumbers);
    // communicate result to user
    const message = `average of all evens: ${average}`;
    alert(message);
};

export default averageEvensHandler;
