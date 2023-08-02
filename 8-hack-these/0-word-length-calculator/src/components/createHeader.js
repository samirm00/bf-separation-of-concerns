/**
 * Creates an HTML header element (<h1>) with the given length as its content.
 * @param {number} length - The content to be displayed inside the header.
 * @returns {HTMLHeadingElement} - The created header element with the specified content.
 */

const createHeader = (length) => {
    const header = document.createElement('h1');
    header.id = 'my-header';
    header.innerHTML = length;

    return header;
};

export default createHeader;
