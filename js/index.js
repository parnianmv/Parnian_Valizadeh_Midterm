var i = 0;
var j = 0;
var txt = 'beautiful logo.';
var speed = 50;
var defaultTxt = document.getElementById("message").textContent;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
	  j++;
	  switch(j) {
	  case 1:
		txt = 'successful brand.';
		break;
	  case 2:
		txt = 'thriving business.';
		break;
	  default:
		j = 0;
		txt = 'beautiful logo.';
		}
		setTimeout(wait, 3000);
  }
}
function wait(){
	 i = 0;
	 document.getElementById("message").innerHTML = defaultTxt;
	 setTimeout(typeWriter, 2000);
}

window.onload = typeWriter();