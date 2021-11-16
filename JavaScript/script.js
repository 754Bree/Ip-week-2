// (back-end logic):
var akan = function(y,m,d,g) {
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
    document.get ElementById("form").reset();
  });
});
