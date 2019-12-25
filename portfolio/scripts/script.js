//form javascript validation//
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms ["myForm"]["email"].value;
  var z = document.forms ["myForm"]["phone"].value;
  if (x == "") {
    alert("Must fill out your name");
    return false;
  } else if (y == "") {
    alert ("must fill out your email");
    return false;
  } else if (z == ""){
    alert ("must fill out your phone number");
    return false;
  }
}
