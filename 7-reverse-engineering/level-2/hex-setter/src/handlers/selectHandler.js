import dom from '../dom.js';

const selectHandler = (e) => {
    const form = e.target.form;
    const selects = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
    let color = '#';
    selects.forEach((select) => {
        const value = form[select].value;
        color += value;
    });

    document.body.style.backgroundColor = color;
    dom.output.innerText = `background-color: ${color};`;
};

export default selectHandler;
