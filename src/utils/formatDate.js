export default function formatDate(date) {
    const dateObj = date.split(' ')
    const dateArr = dateObj[0].split('-')
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
}