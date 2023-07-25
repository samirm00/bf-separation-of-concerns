'use strict';

/* const somethingHandler = (event) => {

  when an event is dispatched something magical happens
    the event is passed as an argument to the handler

  events have a few properties, these are two to watch for now
    .target --> the element that dispatched the event
    .type --> what kind of event was triggered

*/

// create a new button
const buttonEl = document.createElement('button');

// write an event handler
const demoHandler = (e) => {
    // the same event from parent scope, passed by reference
    const eventType = e.type;

    // the same element as buttonEl, passed by reference
    const target = e.target;
    const nodeName = target.nodeName;

    const message = `you ${eventType}ed a ${nodeName}`;
    alert(message);
};

// add two event listeners to the button
//  different events triggering the same handler
buttonEl.addEventListener('click', (e) => {
    demoHandler(e);
});
buttonEl.addEventListener('mouseover', () => {
    demoHandler(e);
});

// you can simulate a user clicking the button
// this is a more advanced technique
//  you will not need to know it, just to understand it in these exercises
//  in "integrate", events are dispatched by actually clicking a button

// create & dispatch a new "click" event
const clickEvent = new Event('click');
buttonEl.dispatchEvent(clickEvent);

// create & dispatch a new "hover" event
const hoverEvent = new Event('mouseover');
buttonEl.dispatchEvent(hoverEvent);
