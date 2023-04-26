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