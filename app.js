document.getElementById("regTab").style = "background-color: rgba(27, 27, 50, 0.8) !important;";



document.getElementById("submit").addEventListener("click", () => {   
    //function click(){
    var city = document.getElementById("city").value;
    var course = document.getElementById("course").value;
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fname").value;
    var CNIC = document.getElementById("cnic").value;
    var FatherCNIC = document.getElementById("fcnic").value;
    var contact = document.getElementById("contact").value;
    var mail = document.getElementById("email").value;
    console.log(name+" "+course+" "+CNIC+" "+"/n"+fatherName+" "+FatherCNIC+" "+"/n"+" "+contact+" "+mail);
    localStorage.setItem("StudentName",name);
    localStorage.setItem("fatherName",fatherName);
    localStorage.setItem("CNIC", CNIC);
    localStorage.setItem("fathersCNIC",FatherCNIC);
    localStorage.setItem("course", course);
    localStorage.setItem("city",city);
    localStorage.setItem("contact", contact);
    localStorage.setItem("mail", mail);
})