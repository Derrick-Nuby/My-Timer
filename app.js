// current time

function currentTime() {
let actual_time = document.getElementById('actual_time');
let actual_days = document.getElementById('actual_days');
let suffix;


const date = new Date();
const dayOfMonth = date.getDate();

if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
  suffix = "st";
} else if (dayOfMonth === 2 || dayOfMonth === 22) {
  suffix = "nd";
} else if (dayOfMonth === 3 || dayOfMonth === 23) {
  suffix = "rd";
} else {
  suffix = "th";
}

function updateTime() {
  const now = new Date();
  const optionsTime = {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Africa/Kigali'
  };
  const optionsDate = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const timeString = now.toLocaleString('en-US', optionsTime);
  const dateString = now.toLocaleString('en-US', optionsDate);
  actual_time.innerHTML = timeString;
  actual_days.innerHTML = dateString.replace(',', '') + `<sup>${suffix}</sup>`;

}

setInterval(updateTime, 1000);

}

// birth day time

function birthDayTime() {
let actual_time = document.getElementById('actual_time');
let actual_days = document.getElementById('actual_days');

const birthDate = new Date('2002-06-10');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - birthDate);
const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
const diffMonths = Math.floor((diffTime / (1000 * 60 * 60 * 24 * 30.44)) % 12);
const diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30.44);
const formattedTime = '<span style="font-size: 4rem; letter-spacing: 8px;">' + diffYears + ' Years ' + diffMonths + ' Months ' + diffDays + ' Days</span>';

actual_time.innerHTML = formattedTime;

const birthdayDate = new Date('2023-06-10');
const daysLeft = Math.floor((birthdayDate - currentDate) / (1000 * 60 * 60 * 24));
const formattedDays = daysLeft + ' Days until Derrick\'s 21st Birthday!';
actual_days.innerHTML = formattedDays;

}

// SECONDARY TIMER

function secondaryTime() {
let actual_time = document.getElementById('actual_time');
let actual_days = document.getElementById('actual_days');

const birthDate = new Date('2021-08-01');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - birthDate);
const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
const diffMonths = Math.floor((diffTime / (1000 * 60 * 60 * 24 * 30.44)) % 12);
const diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30.44);
const formattedTime = '<span style="font-size: 4rem; letter-spacing: 8px;">' + diffYears + ' Year ' + diffMonths + ' Months ' + diffDays + ' Days</span>';

actual_time.innerHTML = formattedTime;

const birthdayDate = new Date('2021-08-01');
const daysLeft = Math.floor((currentDate - birthdayDate) / (1000 * 60 * 60 * 24));
const formattedDays = daysLeft + ' Days Since You Finished Secondary School!';
actual_days.innerHTML = formattedDays;
}

// UNIV-TIMER

function universityTime() {
let actual_time = document.getElementById('actual_time');
let actual_days = document.getElementById('actual_days');

const birthDate = new Date('2022-06-16');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - birthDate);
// const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
const diffMonths = Math.floor((diffTime / (1000 * 60 * 60 * 24 * 30.44)) % 12);
const diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30.44);
const formattedTime = '<span style="font-size: 4rem; letter-spacing: 8px;">' + diffMonths + ' Months ' + diffDays + ' Days</span>';

actual_time.innerHTML = formattedTime;

const birthdayDate = new Date('2022-06-16');
const daysLeft = Math.floor((currentDate - birthdayDate) / (1000 * 60 * 60 * 24));
const formattedDays = daysLeft + ' Days Since You Joined University!';
actual_days.innerHTML = formattedDays;
}
