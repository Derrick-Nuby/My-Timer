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