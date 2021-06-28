
/*var pplinvited = document.getElementById('pplinvited');
//var total = 0;


function updateTotal(){
  if (input = true){
    calcTotal();
  }else {
    total = 0;
    var divobj = document.getElementById('tot_amount');
    divobj.value = total;
  }
}

function createEventListeners(){
  var add_cost = document.getElementById('add_cost');
  add_cost.addEventListener('change', updateTotal);

}

function calcTotal(){
      total = pplinvited * cost;

      /*display the result
      var divobj = document.getElementById('tot_amount');
      divobj.value = total;
      //innerHTML?
      /*/



/* global variables tracking status of each form section */
var fName = true;
var lName = true;
var eMail = true;
var comment = true;

var fName = document.getElementsById("fname");
var lName = document.getElementsById("lname");
var eMail = document.getElementsById("email");
var comment = document.getElementsById("text");

var fNameBox = document.forms[0].fname;
var lNameBox = document.forms[0].lname;
var emailBox = document.forms[0].email;
var commentBox = document.forms[0].text;

function verifyEmail() {
  var validity =true;
  var messageText ="";
    try {
      if (!(emailBox.value = " ")) {
        throw"Please enter a valid email";
      }
    }
    catch(message) {
      validity =false;
      messageText = message;
    }
    finally {
      email = validity;
      messageElement.innerHTML = messageText;
    }
}

function createEventListeners() {
   acresBox.value = ""; // clear acres text box on page load

   if (acresBox.addEventListener) {
     acresBox.addEventListener("input", verifyAcres, false);
   } else if (acresBox.attachEvent)  {
     acresBox.attachEvent("onchange", verifyAcres);
   }



  /* create event listeners and populate image elements
  function setUpPage() {
     createEventListeners();
  }*/


  /* run setUpPage() function when page finishes loading
  if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
  } else if (window.attachEvent)  {
    window.attachEvent("onload", setUpPage);
  }*/
