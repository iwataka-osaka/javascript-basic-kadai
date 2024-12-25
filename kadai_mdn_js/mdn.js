
const today = new Date();

const localYear = today.getFullYear();
const localMonth = today.getMonth() + 1;
const localDate = today.getDate();

const localNow = localYear+"年"+localMonth+"月"+localDate+"日";

console.log(localNow);
