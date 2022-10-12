function displyTime(){
    var n = new Date()
    
    var hrs = n.getHours()
    var min = n.getMinutes()
    var sec = n.getSeconds()
    var session = document.getElementById('session')

    if(hrs >= 12){
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = 'AM'
    }

    if(hrs > 12){
        hrs = hrs - 12
    }
    
    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec


    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[n.getDay()];
    var curDay = n.getDate();
    var curMonth = months[n.getMonth()];
    var curYear = n.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;   
}

setInterval(displyTime, 10)
