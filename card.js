document.getElementById("idTab").style = "background-color: rgba(27, 27, 50, 0.8) !important;";

var getName, getFname, getCNIC, getFCNIC, getCity, getCourse, getContact, getMail;

getName = localStorage.getItem("StudentName");
getCNIC = localStorage.getItem("CNIC");
getFname = localStorage.getItem("fatherName");
getFCNIC = localStorage.getItem("fathersCNIC");
getCity = localStorage.getItem("city");
getCourse = localStorage.getItem("course");
getContact = localStorage.getItem("contact");
getMail = localStorage.getItem("mail");

document.getElementById("name").innerHTML = getName;
document.getElementById("idnumber").innerHTML = getCNIC;
document.getElementById("course").innerHTML = getCourse;
var theDate = new Date();
const day = theDate.getDate();
const month = theDate.getMonth() + 1; // getMonth() returns month from 0 to 11
const year = theDate.getFullYear();

const curDate = `${day}/${month}/${year}`;
const expDate = `${day}/${month}/${year+1}`

document.getElementById("issuedate").innerHTML = "ISSUED AT:  "+ curDate;
document.getElementById("expdate").innerHTML = "VALID TILL:  "+ expDate;