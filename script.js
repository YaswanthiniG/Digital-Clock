function digitalClock() {
    var date = new Date();
    var hours = date.getHours()+'' ;
    var minutes = date.getMinutes()+'';
    var seconds = date.getSeconds()+'' ;
    var day = date.getDay();
    var am= "AM";
   
    if(hours.length < 2) {
        hours = '0' + hours;
    }
    if(hours >= 12){
        hours= hours-12;
        am = "PM"
    }
    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + am;
   document.getElementById('time').innerHTML = clock;
}
  digitalClock();
  setInterval(digitalClock, 1000);

var icon = document.getElementById("light");
icon.onclick=function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="./Images/dark.png";
    }else{
        icon.src="./Images/light.jpg";
    }
}


