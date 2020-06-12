function toggleActive() {
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  one.addEventListener("click", active);
  two.addEventListener("click", active);
  three.addEventListener("click", active);
  four.addEventListener("click", active);
  
  var over = document.querySelector('.active');
  console.log(over);

  function active() {
    console.log(this);
    if (this.className === 'navLink') {
      one.className = 'navLink';
      two.className = 'navLink';
      three.className = 'navLink';
      four.className = 'navLink';
      this.className = 'navLink active';

    }
  var over = document.querySelector('.active');
      one.style.backgroundImage = "none";
      one.style.backgroundColor = " transparent";
      two.style.backgroundImage = "none";
      two.style.backgroundColor = " transparent";
      three.style.backgroundImage = "none";
      three.style.backgroundColor = " transparent";
      four.style.backgroundImage = "none";
      four.style.backgroundColor = " transparent";

      over.style.backgroundImage = "repeating-linear-gradient(45deg, #4682b4, transparent 110px)";
      over.style.backgroundColor = "rgba(255, 255, 255, 0.55)";
  }

  // Add image 
  var imageBox = document.getElementById("newImageContainer");
  var newImage = document.createElement("IMG");
  newImage.src = "pics/1.jpg";
  newImage.className = "myImage";
  imageBox.appendChild(newImage);
  console.log(newImage);

}
// Call function
toggleActive()
//////////////////////////////////////////////////////////////////////
// Email test


function checkEmail(emailId) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
   return true;
  }    
  alert("Email invalid");
  return false;
}

// Form validation

function validateForm() {
  // First Name
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    document.myForm.fname.focus();
    return false;
  }
  // Last Name
  if (document.forms["myForm"]["lname"].value == "") {
    alert("Surname must be filled out");
    document.myForm.lname.focus();
    return false;
  }
  // Email
  if (document.forms["myForm"]["email"].value == "") {
    alert("Email must be filled out");
    document.myForm.lname.focus();
    return false;
  } else {
    checkEmail(document.forms["myForm"]["email"].value);
  }
}
//////////////////////////////////////////////////////////////////////////


