import dom from '../dom.js';
import castValue from '../utils/castValue.js';
import showValue from '../components/showValue.js';

const castStringHandler = (e) => {
    // read & process user input
    const form = e.target.form;
    const intendedType = form.type.value;
    const stringToCast = form.value.value;

    // execute core logic
    const newValue = castValue(intendedType, stringToCast);

    // communicate result to user
    showValue(dom.castedValue, newValue);

    // log action for developers
    console.log('\n-- user action --');
    console.log('stringToCast:', stringToCast);
    console.log('intendedType:', intendedType);
    console.log('newValue:', newValue);
};

export default castStringHandler;
