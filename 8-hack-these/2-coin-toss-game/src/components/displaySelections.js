const displaySelections = (dom, user, computer) => {
    if (user === 'heads') {
        dom.playerSelection.style.color = 'green';
    }
    if (user === 'tails') {
        dom.playerSelection.style.color = 'blue';
    }
    if (computer === 'heads') {
        dom.computerSelection.style.color = 'green';
    }
    if (computer === 'tails') {
        dom.computerSelection.style.color = 'blue';
    }
    dom.playerSelection.innerHTML = `${user}`;
    dom.computerSelection.innerHTML = `${computer}`;
};

export default displaySelections;
