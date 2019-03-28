function dayNumberOfMonth() {
    let month = document.getElementById('month').value;
    switch (month) {
        case '1' :
        case '3' :
        case '5' :
        case '7' :
        case '8' :
        case '10' :
        case '12' :
            alert('31 day');
            break;
        case '2' :
            alert('28 day');
            break;
        case '4' :
        case '6' :
        case '9' :
        case '11' :
            alert('30 day');
            break;
    }
}