/* to do 
when you click on 1 of the li links: 
add .active to the selected element
remove .active from any other element. 

if daily is selected, daily = display: block, .weekly + .montly = display: none; 
if weekly 
if monthly. 
*/

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

