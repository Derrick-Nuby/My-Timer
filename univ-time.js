let actual_time = document.getElementById('actual_time');
let actual_days = document.getElementById('actual_days');
let actual_money = document.getElementById('actual_money');


const birthDate = new Date('2022-06-16');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - birthDate);
// const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
const diffMonths = Math.floor((diffTime / (1000 * 60 * 60 * 24 * 30.44)) % 12);
const diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30.44);
const formattedTime = '<span style="font-size: 4rem; letter-spacing: 8px;">' + '1 year ' + diffMonths + ' Months ' + diffDays + ' Days</span>';


actual_time.innerHTML = formattedTime;

const birthdayDate = new Date('2022-06-16');
const daysLeft = Math.floor((currentDate - birthdayDate) / (1000 * 60 * 60 * 24));
const formattedDays = daysLeft + ' Days Since You Joined University!';

actual_days.innerHTML = formattedDays;

const totalMoney = daysLeft*7293.63449692;
const formattedTotalMoney = totalMoney.toLocaleString();

const formattedMoney = formattedTotalMoney + ' Money you owe the government';

actual_money.innerHTML = formattedMoney;


