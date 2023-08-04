const displayRandom = (dom, random) => {
    if (random === 1) {
        dom.displayResult.style.backgroundImage = "url('./assets/heads.png')";
    } else {
        dom.displayResult.style.backgroundImage = "url('./assets/tails.png')";
    }
};

export default displayRandom;
