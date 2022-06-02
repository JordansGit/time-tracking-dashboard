const daily = document.querySelectorAll('.daily');
const weekly = document.querySelectorAll('.weekly');
const monthly = document.querySelectorAll('.monthly'); 

const list = document.querySelectorAll('li');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(e) {
    var current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", ""); 
    }

    this.className += "active"; 
    
    displayText(); 
  })
}

let displayText = () => {
  if (list[0].classList.contains("active")) {
    for (i = 0; i < daily.length; i++) {
      daily[i].style.display = "block";
      weekly[i].style.display = "none";
      monthly[i].style.display = "none";  
    }
  } else if (list[1].classList.contains("active")) {
    for (i = 0; i < daily.length; i++) {
      daily[i].style.display = "none";
      weekly[i].style.display = "block";
      monthly[i].style.display = "none";  
    }
  } else if (list[2].classList.contains("active")) {
    for (i = 0; i < daily.length; i++) {
      daily[i].style.display = "none";
      weekly[i].style.display = "none";
      monthly[i].style.display = "block";  
    }
  }
}

/* JSON */ 
const work = document.getElementById('work');
const play = document.getElementById('play');
const study = document.getElementById('study');
const exercise = document.getElementById('exercise');
const social = document.getElementById('social');
const selfCare = document.getElementById('self-care');

const hours = 'hrs'; 
const yesterday = 'Yesterday - '; 
const lastWeek = 'Last Week - '; 
const lastMonth = 'Last Month - '; 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
    var data = JSON.parse(xhttp.responseText); 

    work.querySelector('p').innerText = data[0].title;
    work.querySelector('h1.daily').innerText = data[0].timeframes.daily.current + hours;
    work.querySelector('small.daily').innerText = yesterday + data[0].timeframes.daily.previous + hours;
    work.querySelector('h1.weekly').innerText = data[0].timeframes.weekly.current + hours;
    work.querySelector('small.weekly').innerText = lastWeek + data[0].timeframes.weekly.previous + hours;
    work.querySelector('h1.monthly').innerText = data[0].timeframes.monthly.current + hours;
    work.querySelector('small.monthly').innerText = yesterday + data[0].timeframes.monthly.previous + hours;

    play.querySelector('p').innerText = data[1].title;
    play.querySelector('h1.daily').innerText = data[1].timeframes.daily.current + 'hr';
    play.querySelector('small.daily').innerText = yesterday + data[1].timeframes.daily.previous + hours;
    play.querySelector('h1.weekly').innerText = data[1].timeframes.weekly.current + hours;
    play.querySelector('small.weekly').innerText = lastWeek + data[1].timeframes.weekly.previous + hours;
    play.querySelector('h1.monthly').innerText = data[1].timeframes.monthly.current + hours;
    play.querySelector('small.monthly').innerText = yesterday + data[1].timeframes.monthly.previous + hours;

    study.querySelector('p').innerText = data[2].title;
    study.querySelector('h1.daily').innerText = data[2].timeframes.daily.current + hours;
    study.querySelector('small.daily').innerText = yesterday + data[2].timeframes.daily.previous + 'hr';
    study.querySelector('h1.weekly').innerText = data[2].timeframes.weekly.current + hours;
    study.querySelector('small.weekly').innerText = lastWeek + data[2].timeframes.weekly.previous + hours;
    study.querySelector('h1.monthly').innerText = data[2].timeframes.monthly.current + hours;
    study.querySelector('small.monthly').innerText = yesterday + data[2].timeframes.monthly.previous + hours;

    exercise.querySelector('p').innerText = data[3].title;
    exercise.querySelector('h1.daily').innerText = data[3].timeframes.daily.current + 'hr';
    exercise.querySelector('small.daily').innerText = yesterday + data[3].timeframes.daily.previous + 'hr';
    exercise.querySelector('h1.weekly').innerText = data[3].timeframes.weekly.current + hours;
    exercise.querySelector('small.weekly').innerText = lastWeek + data[3].timeframes.weekly.previous + hours;
    exercise.querySelector('h1.monthly').innerText = data[3].timeframes.monthly.current + hours;
    exercise.querySelector('small.monthly').innerText = yesterday + data[3].timeframes.monthly.previous + hours;

    social.querySelector('p').innerText = data[4].title;
    social.querySelector('h1.daily').innerText = data[4].timeframes.daily.current + 'hr';
    social.querySelector('small.daily').innerText = yesterday + data[4].timeframes.daily.previous + hours;
    social.querySelector('h1.weekly').innerText = data[4].timeframes.weekly.current + hours;
    social.querySelector('small.weekly').innerText = lastWeek + data[4].timeframes.weekly.previous + hours;
    social.querySelector('h1.monthly').innerText = data[4].timeframes.monthly.current + hours;
    social.querySelector('small.monthly').innerText = yesterday + data[4].timeframes.monthly.previous + hours;

    selfCare.querySelector('p').innerText = data[5].title;
    selfCare.querySelector('h1.daily').innerText = data[5].timeframes.daily.current + hours;
    selfCare.querySelector('small.daily').innerText = yesterday + data[5].timeframes.daily.previous + 'hr';
    selfCare.querySelector('h1.weekly').innerText = data[5].timeframes.weekly.current + hours;
    selfCare.querySelector('small.weekly').innerText = lastWeek + data[5].timeframes.weekly.previous + hours;
    selfCare.querySelector('h1.monthly').innerText = data[5].timeframes.monthly.current + hours;
    selfCare.querySelector('small.monthly').innerText = yesterday + data[5].timeframes.monthly.previous + hours;

    console.log(data[0].timeframes.daily.previous)
  }
};
xhttp.open("GET", "./data.json", true);
xhttp.send();
