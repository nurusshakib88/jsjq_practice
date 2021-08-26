// change images

function imgChange() {
	
	document.getElementById('d_img').src = "images/2.jpg";
}

function imgChange2() {
	
	document.getElementById('d_img').src = "images/3.jpg";
}


function imgChange3() {
	
	document.getElementById('d_img').src = "images/4.jpg";
}

function imgChange4() {
	
	document.getElementById('d_img').src = "images/5.jpg";
}

function imgReset() {
	
	document.getElementById('d_img').src = "images/6.jpg";
}



// change text


function textChange() {

	document.getElementById('d_text').style.fontFamily = "arial";
}

function textChange2() {

	var text = document.getElementById('d_text');

	if (text.style.fontSize.match("40px")) {
    text.style.fontSize = "30px";
  } 

  else {
    text.style.fontSize = "40px";
  }
}

function textChange3() {

	document.getElementById('d_text').style.color = "darkblue";
}

function textChange4() {

	document.getElementById('d_text').innerHTML = "The text has been changed";
}

function textReset() {

	document.getElementById('d_text').innerHTML = "This is a Text. You can change the text style by clicking the buttons above";
	document.getElementById('d_text').style.fontFamily = "sansserif";
	document.getElementById('d_text').style.color = "black";
	document.getElementById('d_text').style.fontSize = "30px";
}




// bulb on off

function bulbOnOff() {

  var image = document.getElementById('bulb_img');

  if (image.src.match("images/bulboff.gif")) {
    image.src = "images/bulbon.gif";
  } 

  else {
    image.src = "images/bulboff.gif";
  }
}



// alert

window.onload = function(){ 
    alert("Hi there");
        }


function alert1() {
	alert("This is an alert");
}

function alert2() {
  alert(location.hostname);
}

function alert3() {
	window.alert("This is a window alert");
}

function alert4() {
	console.log("This is a console alert");
}


// form

function submitForm() {
	alert("Thank you for your information");
}
