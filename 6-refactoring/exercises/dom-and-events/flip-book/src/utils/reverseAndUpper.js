const reverseAndUpper = (str) => {
    const upperCased = str.toUpperCase();
    return upperCased.split('').reverse().join('');
};

export default reverseAndUpper;
