/**
 * renders an anchor element with given text & URL
 *  you can optionally configure the target
 *
 * @param {string} text - the link text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLAnchorElement} a rendered anchor element
 */

const link = (linkData) => {
    const aEl = document.createElement('a');
    aEl.href = linkData.url;
    aEl.target = linkData.target;
    aEl.innerHTML = linkData.text;

    return aEl;
};

describe('link: renders a DOM anchor element', () => {
    describe('open google in a new tab (default target)', () => {
        const actual = link({
            url: 'https://www.google.com/',
            text: 'google it',
        });

        it('has tagName: "A"', () => {
            expect(actual.tagName).toEqual('A');
        });
        it('has innerHTML: "google it"', () => {
            expect(actual.innerHTML).toEqual('google it');
        });
        it('has href: "https://www.google.com/"', () => {
            expect(actual.href).toEqual('https://www.google.com/');
        });
        it('has target: "_blank" (default)', () => {
            expect(actual.target).toEqual('_blank');
        });
        it('has childElementCount: 0', () => {
            expect(actual.childElementCount).toEqual(0);
        });
    });

    describe('open a pre-defined search in a new tab', () => {
        const actual = link({
            text: 'lmgtfy',
            url: 'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
            target: '_blank',
        });

        it('has tagName: "A"', () => {
            expect(actual.tagName).toEqual('A');
        });
        it('has innerHTML: "lmgtfy"', () => {
            expect(actual.innerHTML).toEqual('lmgtfy');
        });
        it('has href: "https://lmgtfy.com/?q=let+me+google+that+for+you&s=d"', () => {
            expect(actual.href).toEqual(
                'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
            );
        });
        it('has target: "_blank"', () => {
            expect(actual.target).toEqual('_blank');
        });
        it('has childElementCount: 0', () => {
            expect(actual.childElementCount).toEqual(0);
        });
    });
});
