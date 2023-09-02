var allInput=document.querySelectorAll("input")
var allselectTag=document.querySelectorAll("select")
var userGen;
function storeTheValue()
{
  var firstName=allInput[0].value
  var surName=allInput[1].value
  var emailOrMobile=allInput[2].value
  var pass=allInput[3].value
  var date=allselectTag[0].value
  var month=allselectTag[1].value
  var year=allselectTag[2].value
  localStorage.setItem("Fname",firstName);
  localStorage.setItem("Sname",surName);
  localStorage.setItem("E&M",emailOrMobile);
  localStorage.setItem("pass",pass);
  localStorage.setItem("dd",date);
  localStorage.setItem("mm",month);
  localStorage.setItem("yy",year);
  sessionStorage.setItem("E&M",emailOrMobile);
  sessionStorage.setItem("pass",pass);
}
function gender(gen)
{
  userGen=gen
}
