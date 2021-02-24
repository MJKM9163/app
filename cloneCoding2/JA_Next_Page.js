function move1() {
    document.getElementById('move_bar').style.left = '0%'
    document.getElementById('news_li').style.left = '0%'
    document.getElementById('weather_li').style.left = '100%'
    document.getElementById('setting_li').style.left = '100%'
    document.getElementById('header_li_1').style.left = '0%'
    document.getElementById('header_li_2').style.left = '100%'
    document.getElementById('header_li_3').style.left = '100%'
    document.getElementById('move_bar').style.transition = '0.5s'
    document.getElementById('news_li').style.transition = '0.5s'
    document.getElementById('weather_li').style.transition = '0.5s'
    document.getElementById('setting_li').style.transition = '0.5s'
    document.getElementById('header_li_1').style.transition = '0.5s'
    document.getElementById('header_li_2').style.transition = '0.5s'
    document.getElementById('header_li_3').style.transition = '0.5s'
    document.getElementById('li_1').style.background = 'url(icon/news.png) no-repeat center'
    document.getElementById('li_2').style.background = 'url(icon/cloudy2.png) no-repeat center'
    document.getElementById('li_3').style.background = 'url(icon/settings.png) no-repeat center';
}
function move2() {
    document.getElementById('move_bar').style.left = '33.333%'
    document.getElementById('news_li').style.left = '-100%'
    document.getElementById('weather_li').style.left = '0%'
    document.getElementById('setting_li').style.left = '100%'
    document.getElementById('header_li_1').style.left = '-100%'
    document.getElementById('header_li_2').style.left = '0%'
    document.getElementById('header_li_3').style.left = '100%'
    document.getElementById('move_bar').style.transition = '0.5s'
    document.getElementById('news_li').style.transition = '0.5s'
    document.getElementById('weather_li').style.transition = '0.5s'
    document.getElementById('setting_li').style.transition = '0.5s'
    document.getElementById('header_li_1').style.transition = '0.5s'
    document.getElementById('header_li_2').style.transition = '0.5s'
    document.getElementById('header_li_3').style.transition = '0.5s'
    document.getElementById('li_1').style.background = 'url(icon/news2.png) no-repeat center'
    document.getElementById('li_2').style.background = 'url(icon/cloudy.png) no-repeat center'
    document.getElementById('li_3').style.background = 'url(icon/settings.png) no-repeat center';
}
function move3() {
    document.getElementById('move_bar').style.left = '66.666%'
    document.getElementById('news_li').style.left = '-100%'
    document.getElementById('weather_li').style.left = '-100%'
    document.getElementById('setting_li').style.left = '0%'
    document.getElementById('header_li_1').style.left = '-100%'
    document.getElementById('header_li_2').style.left = '-100%'
    document.getElementById('header_li_3').style.left = '0%'
    document.getElementById('move_bar').style.transition = '0.5s'
    document.getElementById('news_li').style.transition = '0.5s'
    document.getElementById('weather_li').style.transition = '0.5s'
    document.getElementById('setting_li').style.transition = '0.5s'
    document.getElementById('header_li_1').style.transition = '0.5s'
    document.getElementById('header_li_2').style.transition = '0.5s'
    document.getElementById('header_li_3').style.transition = '0.5s'
    document.getElementById('li_1').style.background = 'url(icon/news2.png) no-repeat center'
    document.getElementById('li_2').style.background = 'url(icon/cloudy2.png) no-repeat center'
    document.getElementById('li_3').style.background = 'url(icon/settings2.png) no-repeat center';
}

/*function day_night_button() {
    var target = document.getElementById('body, news_li, weather_li, setting_li')
    if (this.value == 'day') {
        target.style.backgroundColor = 'black' ;
        this.value = 'night' ; 
    } else {
        target.style.backgroundColor = 'white' ;
        this.value = 'day' ;
    }  
} */



function img_hover_1() {
    document.getElementById('news_img_1').setAttribute('src', 'icon/question.png')  
}
function img_un_hover_1() {
    document.getElementById('news_img_1').setAttribute('src', 'icon/question2.png')
}
function img_hover_2() {
    document.getElementById('news_img_2').setAttribute('src', 'icon/monitoring.png')
}
function img_un_hover_2() {
    document.getElementById('news_img_2').setAttribute('src', 'icon/monitoring2.png')
}


var clock = document.getElementById('weather_clock');

/*function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerText = hour +":" + minutes + ":"+seconds;
}*/


var clockStart = setInterval(function() {
    var today = new Date()
    var dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    var hh = addZero(today.getHours())
    var mm = addZero(today.getMinutes())
    var ss = addZero(today.getSeconds())
    var YY = today.getFullYear()
    var MM = today.getMonth()+1
    var DD = today.getDate()
    var dd = dayList[today.getDay()].toUpperCase()
    document.getElementById('hours').innerText = hh
    document.getElementById('min').innerText = mm
    document.getElementById('sec').innerText = ss
    document.getElementById('month').innerText = MM
    document.getElementById('date').innerText = DD
    document.getElementById('year').innerText = YY
    document.getElementById('day').innerText = dd
    function addZero(num) {
    return (num < 10 ? '0'+num : ''+num)
    }
    }, 1000)
    


// var i = 0;
// if (i == 0) 



