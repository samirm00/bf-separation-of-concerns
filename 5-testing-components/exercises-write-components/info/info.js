/**
 * render a drop-down info element
 *
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @returns {HTMLDetailsElement}
 */
const info = (caption, mainText, id = '') => {
    const detailsEl = document.createElement('details');
    detailsEl.id = id;

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = caption;
    detailsEl.append(summaryEl);

    const pEl = document.createElement('p');
    pEl.innerHTML = mainText;
    detailsEl.append(pEl);

    return detailsEl;
};

export default info;
