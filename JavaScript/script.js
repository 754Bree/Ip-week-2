// (back-end logic):
/*var akan = function(y,m,d,g) {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
    var d = date(y,m,d);
    if  (g==="Male"){
      return d && maleNames[d.getDay()];
  }   else {
      return d && femaleNames[d.getDay()];
  }
}
//(front-end):
  $(document).ready(function() {
    $("form#form").submit(function(event){
    event.preventDefault();
    var y = parseInt($("#Year").val());
    var m = parseInt($("Month").val());
    var d = parseInt($("Date").val());
    var g = $("input:radio[name=gender]:checked").val();
    var result =akan (y, m,d,g);
    alert("your Ghanian name is: "+ result);
    document.getElementById("form").reset();
  });
});*/
// (User-interface) :
function AkanNaming() {
  var day = parseInt(document.getElementById("Day").value);
  var month = parseInt(document.getElementById("Month").value);
  var year= parseInt(document.getElementById("Year").value);
  var gender = document.querySelector("input[name='gender']:checked").value;
  if(incorrect(day, month)) {
    var dayIndex = new Date(day, month-1, year).getDay();
    alert("Your Akan name is:" + getAkanNaming(dayIndex, gender));
  }
}
function incorrect(day, month) {
  if(day < 1 || day >31 || month == 2 && day > 29 ) {
    alert("Invalid Date");
    day.focus();
    return false;
    
  } else if(month < 1 || month > 12){
    alert("Invalid Month");
    return false;
  } else {
    return true;
  }
}
//Name arrays:
function getAkanNaming(dayIndex, gender) {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
  return gender === "Male" ? maleNames[dayIndex] : femaleNames [dayIndex];
}