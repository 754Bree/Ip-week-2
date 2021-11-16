// (back-end logic):
var akan = function(y,m,d,g) {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
  var d = date(y,m,d);
  if (g==="Male"){
    return d && maleNames[d.getDay()];
  } else {
    return d && femaleNames[d.getDay()];
  }
}
