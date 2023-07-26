'use strict';
// {
//     question: 'What are the different ways to declare a JS variable?',
//     answers: [
//                 'constant, let, variable',
//                 'var, const, let, function',
//                 'var, let, const',
//              ],
//     correct: 2,
//     selected: 2,
// }

const actual = ({ question, answers, correct, selected }) => {
    // form
    const form = document.createElement('form');

    // question
    const questionDom = document.createElement('p');
    questionDom.innerText = question;
    form.append(questionDom);
    // answers
    answers.forEach((answer, index) => {
        // input
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answers';
        if (index === selected) {
            input.checked = true;
        }

        // text
        const text = document.createElement('text');
        text.innerText = answer;
        if (input.checked) {
            if (index === correct) {
                text.className = 'correct';
                text.innerText = answer + ' √';
            } else {
                text.className = 'incorrect';
                text.innerText = answer + ' ✖';
            }
        }

        // br
        const br = document.createElement('br');
        form.append(input, text, br);
    });

    return form;
};
