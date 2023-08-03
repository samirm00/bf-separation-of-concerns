const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';

    hours = hours === 0 ? 12 : hours;

    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours} : ${minutes} : ${seconds} ${session}`;
};

export default getTime;
