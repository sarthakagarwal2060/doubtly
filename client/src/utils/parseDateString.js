export default function parseDateString(utcString){
    const date = new Date(utcString);
    const month = date.toLocaleString('en-us',{month : "long"})
    const year = date.getFullYear()
    return `${month}, ${year}`;
}