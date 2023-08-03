const data = {
    num1: 5,
    num2: 10,
};

const dom = {
    root: document.getElementById('root'),
};

// Util function
const multiply = (num1, num2) => {
    return num1 * num2;
};

// component function
const createHeader = (headerData) => {
    // header
    const header = document.createElement('h2');
    header.innerText = headerData.result;

    return header;
};

const loadHandler = () => {
    const result = multiply(data.num1, data.num2);
    const headerDom = createHeader({ result: result });
    dom.root.append(headerDom);
};

// on load
const loadListener = () => {
    window.addEventListener('load', loadHandler);
};
loadListener();
