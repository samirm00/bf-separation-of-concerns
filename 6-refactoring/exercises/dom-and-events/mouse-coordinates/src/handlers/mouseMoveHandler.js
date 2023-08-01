import dom from '../dom.js';
import formatCoordinates from '../utils/formatCoordinates.js';
import showCoordinates from '../components/showCoordinates.js';

const mouseMoveHandler = (e) => {
    // read & process user input
    const xValue = e.pageX;
    const yValue = e.pageY;

    // execute core logic
    const formattedCoordinates = formatCoordinates(xValue, yValue);

    // render result for user
    showCoordinates(dom.mousePosition, formattedCoordinates);

    // log action for developers
    console.log('\n--- new coordinates ---');
    console.log('x:', xValue);
    console.log('y:', yValue);
};

export default mouseMoveHandler;
