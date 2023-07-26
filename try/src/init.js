const btn = document.getElementById('btn');

const clickHandler = (e) => {
    console.log(e.type);
};

btn.addEventListener('click', (e) => {
    clickHandler(e);
});
