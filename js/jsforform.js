// ----------- js for toggle form ----------

var regForm = document.getElementById("regForm");
var logForm = document.getElementById("logForm");
var indicator = document.getElementById("indicator");

function register() {
    logForm.style.transform = "translateX(0px)";
    regForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";

}
function login() {
    logForm.style.transform = "translateX(300px)";
    regForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}