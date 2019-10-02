//A function for resizing the canvas if the window size is changed
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

//A function for detecting key-press activity by the User
function detectKeyPress() {
	//If the 'p' key is pressed
  if(key == 'p') {
		//Save an image of the canvas
    save('sketch.png');
  }
	//If the 's' key is pressed
  if(key == 's') {
		//And the visible bool is true
    if(visible) {
			//Show the GUI panels
      if(typeof gui1 != 'undefined')
        gui1.show();
      if(typeof gui2 != 'undefined')
			  gui2.show();
    }
    else {
			//Otherwise, hide the GUI panels
      if(typeof gui1 != 'undefined')
        gui1.hide();
      if(typeof gui2 != 'undefined')
        gui2.hide();
    }
		//Toggle visible bool
    visible = !visible;
    //nullify key value to prevent multiple downloads on subsequent loops
    key = null;
  }
}


function renderPageText() {
  var x = document.getElementById("pageText");
  if (enablePageText) {
    x.style.opacity = '1';
  } else {
    x.style.opacity = '0';
  }
}

function collapseExcerpt1() {
  var x = document.getElementById("excerpt1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseExcerpt2() {
  var x = document.getElementById("excerpt2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseExcerpt3() {
  var x = document.getElementById("excerpt3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseExcerpt4() {
  var x = document.getElementById("excerpt4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChestMap() {
  var x = document.getElementById("chestmap");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest1() {
  var x = document.getElementById("chest1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest2() {
  var x = document.getElementById("chest2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest3() {
  var x = document.getElementById("chest3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest4() {
  var x = document.getElementById("chest4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest5() {
  var x = document.getElementById("chest5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function collapseChest6() {
  var x = document.getElementById("chest6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
