var bar = document.getElementsByClassName("pBar");

var size1 = 0;
var size2 = 0;
var size3 = 0;
var size4 = 0;
var barVal1 = bar[0].value;
var barVal2 = bar[1].value;
var barVal3 = bar[2].value;
var barVal4 = bar[3].value;

function currentSlide() {
	if(size1 < barVal1){
		size1++;
		bar[0].value = size1;
	}
	if(size2 < barVal2){
		size2++;
		bar[1].value = size2;
	}
	if(size3 < barVal3){
		size3++;
		bar[2].value = size3;
	}
	if(size4 < barVal4){
		size4++;
		bar[3].value = size4;
	}
  setTimeout(currentSlide, 10);
}

window.onload = currentSlide();


