const $result = document.querySelector('.result'); 

const today = new Date(); 

const fp = flatpickr('#date', {
    mode: 'range',
    altInput: true,
    enableTime: true,
    altFormat: 'D M j',
    dateFormat: 'Y-m-d',
    onValueUpdate: (selectedDates, dateStr, instance) => {
        updateResultDiv(dateStr); 
    },
});

function updateResultDiv(dateStr) {
    const startDate = dateStr.split('to')[0].trim(); 
    const days = Math.ceil( ( new Date(startDate).getTime() - today.getTime() ) / (1000 * 60 * 60 * 24) ); 
    const weeks = days / 7; 
    let price = 39.99;

    if (weeks >= 3 && weeks < 4) {
        price += 10;  
    }
    else if (weeks >= 2 && weeks < 3) {
        price += 10 * 2;  
    }
    else if (weeks >= 1 && weeks < 2) {
        price += 10 * 3;  
    }
    else if (weeks < 1 && days > 1) {
        price += 10 * 4;  
    }
    else if (days <= 1) {
        price += 10 * 5;
    }

    $result.innerHTML = `<b><i>Selected dates:</i></b> ${dateStr}
                        <br><br>
                        <b><i>Today:</i></b> ${new Date().toDateString()}
                        <br><br>
                        <b><i>No. of days:</i></b> ${days}
                        <br><br>
                        <b><i>No. of weeks:</i></b> ${weeks.toFixed(1)}
                        <br><br>
                        <b><i>Price:</i></b> ${price.toFixed(2)}`;
}
