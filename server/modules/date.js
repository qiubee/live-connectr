function currentDateTime() {
    const date = new Date(new Date().setDate(new Date().getDate()));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function currentDate() {
    const date = new Date(new Date().setDate(new Date().getDate()));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`;
}

function currentTime() {
    const date = new Date(new Date().setDate(new Date().getDate()));
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

function getNameofDay(dateString) {
    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const date = new Date(dateString);
    return days[date.getDay()];
}

function getNameofMonth(dateString) {
    const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    const date = new Date(dateString);
    return months[date.getMonth()];
}

function dateStringToSentence(dateString) {
    const date = new Date(dateString);
    const dayname = getNameofDay(date);
    const monthname = getNameofMonth(date).toLowerCase();
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours() === 0 ? 24 : date.getHours();
    const minutes = date.getMinutes();
    return `${dayname} ${day} ${monthname} ${year} om ${hours} uur ${minutes}`;
}

exports.currentDateTime = currentDateTime;
exports.currentDate = currentDate;
exports.currentTime = currentTime;
exports.getNameofDay = getNameofDay;
exports.getNameofMonth = getNameofMonth;
exports.dateStringToSentence = dateStringToSentence;