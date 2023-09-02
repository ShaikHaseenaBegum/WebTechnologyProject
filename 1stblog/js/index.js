var emailOrPhno=sessionStorage.getItem("E&M");
var pass=sessionStorage.getItem("pass")
var inputTags=document.getElementsByClassName("inputTag");

function loginFun()
{
    var userGivenId=inputTags[0].value
    var userGivenPass=inputTags[1].value
    var formTag=document.forms
    if(userGivenId=emailOrPhno && userGivenPass==pass)
    {
        document.getElementById("loginButton").type="submit"
        formTag[0].action="../html/projecthtml.html"
    }
    else if(userGivenId!=emailOrPhno && userGivenPass!=pass){
        document.getElementById("status").innerHTML="Wrong Password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,#D4145A,red)"
    }
    else{
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
    }
}
function visiblepassword()
{
    inputTags[1].type="text"
    document.getElementById("visibleLogo").src="../asset/images/eyesOpenmonkey.jpg"
    document.getElementById("visibleLogo").style.transform="rotate(180deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"

}
function invisiblepassword(){
    inputTags[1].type="password"
    document.getElementById("visibleLogo").src="../asset/images/closeeyesmonkey.png"
    document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"
}