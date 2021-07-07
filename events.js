

//Globals
var countdown;
var dateObject = new Date();


/*document.getElementById("myBtn").addEventListener("submit", validateForm);

function validateForm() {

  if (document.feedback.firstname.value == "") {
    alert("First Name must be filled out");
    return false;
  }

  if (document.feedback.lastname.value == "") {
    alert("Last Name must be filled out");
    return false;
  }

  if (document.feedback.email.value == "") {
    alert("Email must be filled out");
    return false;
  }

  if (document.feedback.comment.value == "") {
    alert("Feedback must be filled out");
    return false;
  }
  return true;
}*/


//
//

//Chap 7

function displayCalendar(whichMonth) {
  var date;
  var dateToday = new Date();
  var dayOfWeek;
  var daysInMonth;
  var dateCells;
  var captionValue;
  var month;
  var year;
  var monthArray = ["January","February", "March","April","May","June","July","August", "September","October","November","December"];

  if (whichMonth === -1) {
    dateObject.setMonth(dateObject.getMonth() -1);
  } else if (whichMonth ===1) {
    dateObject.setMonth(dateObject.getMonth() +1);
  }month = dateObject.getMonth();
  year = dateObject.getFullYear();
  dateObject.setDate(1);
  dayOfWeek = dateObject.getDay();
  captionValue = monthArray[month] +" "+ year;
  document.querySelector("#cal table caption").innerHTML =captionValue;
  if (month ===0|| month ===2|| month ===4|| month ===6|| month ===7|| month ===9||month ===11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
    daysInMonth =31;
  } else if (month ===1) { // Feb
    if (year %4===0) { // leap year test
      if (year %100===0) {         // year ending in 00 not a leap year unless        // divisible by 400
        if (year %400===0) {
          daysInMonth =29;
        } else {
          daysInMonth =28;
        }
      } else {
        daysInMonth =29;
      }
    } else {
      daysInMonth =28;
    }
  } else { // Apr, Jun, Sep, Nov
    daysInMonth =30;
  }dateCells =document.getElementsByTagName("td");
  for (var i =0; i < dateCells.length; i++) {
    // clear existing table dates51
    dateCells[i].innerHTML ="";
    dateCells[i].className ="";
  }for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
    // add dates to days cells
    dateCells[i].innerHTML = dateObject.getDate();
    dateCells[i].className ="date";
    if (dateToday < dateObject) {
      dateCells[i].className ="futuredate";
    }date = dateObject.getDate() +1;
     dateObject.setDate(date);
   }dateObject.setMonth(dateObject.getMonth() -1);
   // reset month to month shown
   document.getElementById("cal").style.display ="block";
   // display calendar if it’s not already visible
    }

function selectDate(event){
  if (event===undefined) {   // get caller element in IE8
  event=window.event;
  }
    var callerElement =event.target ||event.srcElement;
    if (callerElement.innerHTML ==="") { // cell contains no date, so don’t close the calendar
      document.getElementById("cal").style.display ="block";
      returnfalse;
    } dateObject.setDate(callerElement.innerHTML);
    var fullDateToday = new Date();
    var dateToday =Date.UTC(fullDateToday.getFullYear(),fullDateToday.getMonth(), fullDateToday.getDate());
    var selectedDate =Date.UTC(dateObject.getFullYear(),dateObject.getMonth(), dateObject.getDate());
    if (selectedDate <= dateToday) {
      document.getElementById("cal").style.display ="block";
      returnfalse;
    } document.getElementById("tripDate").value= dateObject.toLocaleDateString();
    hideCalendar();

    countdown = setInterval(updateCountdown, 1000);
    document.getElementById("countdownSection").style.display = "block";
    countdown = setInterval(updateCountdown, 1000); document.getElementById("countdownSection").style.display = "block";
    document.getElementById("ticket").style.display = "block";

    ticket.date = dateObject.toLocaleDateString();
    document.getElementById("selectedDate").innerHTML =
    ticket.date;
    document.getElementById("dateSection").style.display = "block";
    }

function hideCalendar() {
  document.getElementById("cal").style.display ="none";
  }

function updateCountdown() {
  var dateToday = new Date();
  var dateFrom =Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate(), dateToday.getHours(), dateToday.getMinutes(), dateToday.getSeconds());
  var dateTo =Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), 19, 0, 0); // all launches at 8:00pm UTC10

  if ((dateTo - dateFrom) <1000) { // time will be less than 0 2   when setInterval runs next 3
    clearInterval(countdown);
    document.getElementById("countdownSection").style.display ="none";
  }
//days
  var daysUntil =Math.floor((dateTo - dateFrom) /86400000);
  document.getElementById("countdown").innerHTML = daysUntil;

  // hours
  var fractionalDay = (dateTo - dateFrom) %86400000;
  var hoursUntil =Math.floor(fractionalDay /3600000);
    if (hoursUntil <10) {hoursUntil ="0"+ hoursUntil;
  } document.getElementById("countdown").innerHTML += ":"+ hoursUntil;

  // minutes
  var fractionalHour = fractionalDay %3600000;
  var minutesUntil =Math.floor(fractionalHour /60000);
  if (minutesUntil <10) {
    minutesUntil ="0"+ minutesUntil;
  } document.getElementById("countdown").innerHTML +=":"+ minutesUntil;

  // seconds
  var fractionalMinute = fractionalHour %60000;
  var secondsUntil =Math.floor(fractionalMinute /1000);
  if (secondsUntil <10) {
    secondsUntil ="0"+ secondsUntil;
  } document.getElementById("countdown").innerHTML +=":"+ secondsUntil;
}

//Chap 6

/* validate address fieldsets
function validateAddress(fieldsetId) {
var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
var fieldsetValidity = true;
var elementCount = inputElements.length;
var currentElement;
try {
    for (var i = 0; i < elementCount; i++) {
        // validate all input elements in fieldset
        currentElement = inputElements[i];
        if (currentElement.value === "") {
            currentElement.style.background = "rgb(255,233,233)";
            fieldsetValidity = false;
        } else {
            currentElement.style.background = "white";
        }
    }
    currentElement = document.querySelector("#" + fieldsetId + " select");
    // validate state select element
    if (currentElement.selectedIndex === -1) {
        currentElement.style.border = "1px solid red";
        fieldsetValidity = false;
    } else {
        currentElement.style.border = "";
    }
    if (fieldsetValidity === false) {
        // throw appropriate message based on current fieldset
        if (fieldsetId === "eventAddress") {
            throw ("Please complete all Event Address information");
        }
    } else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
}
catch(msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

/* validate form */
/*function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); // prevent from submitting
    } else {
        evt.returnValue = false; // prevent form from submitting in IE8
    }
    formValidity = true; // reset value for revalidation
    validateAddress("billingAddress");
    //validateCreateAccount();
    validateNumbers();
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0,0);
    }
}
*/


function createEventListeners() {
      var dateField =document.getElementById("tripDate");
      if (dateField.addEventListener) {
          dateField.addEventListener("click", displayCalendar, false);
      } else if (dateField.attachEvent) {
          dateField.attachEvent("onclick", displayCalendar);
      }

       var dateCells =document.getElementsByTagName("td");

       if (dateCells[0].addEventListener) {
         for (var i =0; i < dateCells.length; i++) {
           dateCells[i].addEventListener("click", selectDate, false);}
      } else if (dateCells[0].attachEvent) {
           for (var i =0; i < dateCells.length; i++) {
             dateCells[i].attachEvent("onclick", selectDate);
           }
        }

        var closeButton =document.getElementById("close");

        if (closeButton.addEventListener) {
          closeButton.addEventListener("click", hideCalendar, false);
        } else if (closeButton.attachEvent) {
          closeButton.attachEvent("onclick", hideCalendar);
        }
        /*var form =document.getElementsByTagName("form")[0];
         if (form.addEventListener) {
           form.addEventListener("submit", validateForm, false);
       } else if (form.attachEvent) {
           form.attachEvent("onsubmit", validateForm);
      }*/
}


 /* run initial form configuration functions
 function setUpPage() {
   createEventListeners();
 }

 if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
 }else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
 }*/


if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
}   else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}
