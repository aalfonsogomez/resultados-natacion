export default function formatValue(value) {
    const changeNumberString = (num) => num < 10 ? '0' + num : num.toString();
    const miliSeconds = value % 100;
    const miliSecondsString = changeNumberString(miliSeconds);
    const secondsValue = Math.floor(value / 100);
    if (secondsValue > 60) {
        const seconds = secondsValue % 60;
        const secondsString = changeNumberString(seconds);
        const minutes = Math.floor(secondsValue / 60);
        return `${minutes}:${secondsString}.${miliSecondsString}`;
    } else {
        const secondsString = changeNumberString(secondsValue);
        return `${secondsString}.${miliSecondsString}`;
    }
}