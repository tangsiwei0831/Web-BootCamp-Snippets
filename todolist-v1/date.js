exports.getDate = function() {
    const today = new Date();
    // let currentDay = today.getDay();
    // switch(currentDay){
    //     case 0:
    //         day = 'Sunday';
    //         break;
    //     case 1:
    //         day = 'Monday';
    //         break;
    //     case 2:
    //         day = 'Tuesday';
    //         break;
    //     case 3:
    //         day = 'Wednesday';
    //         break;
    //     case 4:
    //         day = 'Thursday';
    //         break;
    //     case 5:
    //         day = 'Friday';
    //         break;
    //     case 6:
    //         day = 'Saturday';
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);
    // }
    // if(currentDay === 6 || currentDay === 1){
    //     day = 'Weekend';
    //     // res.sendFile(__dirname + '/weekend.html')
    //     // res.write("<h1>Yea, it's weekend</h1>");
    //     // res.send();
    // }else{
    //     day = 'Work day'
    //     // res.sendFile(__dirname + '/weekday.html')
    //     // res.write("<p>Yea, it's not weekend</p>");
    //     // res.write("<h1>Work day</h1>");
    //     // res.send();
    // }
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return today.toLocaleDateString('en-US', options);
}

exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: 'long'
    }
    return today.toLocaleDateString('en-US', options);
}