'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const navEl = document.createElement('nav');
const pEl = ulEl.getElementsByTagName('p')[0];
ulEl.replaceChild(navEl, pEl);

//  insert something before the <section>
const header2El = document.createElement('h2');
const sectionEl = ulEl.getElementsByTagName('section')[0];
ulEl.insertBefore(header2El, sectionEl);
//  remove the <h1>
const header1El = ulEl.getElementsByTagName('h1')[0];
ulEl.removeChild(header1El);
//  append something to the end
const newPEl = document.createElement('p');
ulEl.appendChild(newPEl);

// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(ulEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(ulEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(ulEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(ulEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(ulEl.children[3].nodeName === 'P', 'Test: 4th child');
