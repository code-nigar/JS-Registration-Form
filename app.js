document.getElementById("regTab").style = "background-color: rgba(27, 27, 50, 0.8) !important;";



document.getElementById("submitBtn").addEventListener("click", async () => {   
    //function click(){
    //if(validate()){
      const res = await validate();
      if(res == true){
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
      alert("data  submitted");
      }else{
        alert("data not submitted")
      }
     
    //     }
    //  else{
    //     alert("inputs invalid !");
    // }
})

function validate(){
    var phoneNumber = document.getElementById('contact').value;
    var cnicCode = document.getElementById('cnic').value;
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fname").value;
    var FatherCNIC = document.getElementById("fcnic").value;
    
    var nameRGEX = /^[a-zA-Z ]+$/;
    var phoneRGEX = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    var cnicRGEX = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

    var phoneResult = phoneRGEX.test(phoneNumber);
    var cnicResult = cnicRGEX.test(cnicCode);
    var fCnicResult = cnicRGEX.test(FatherCNIC);
    var nameResult = nameRGEX.test(name);
    var fNameResult = nameRGEX.test(fatherName);

    if(nameResult == false)
    {
      alert('Please enter alpabets only in name field');
      document.getElementById("name").style = "border: 2px solid rgb(255,0,0);"
      return false;
    }
    else if(fNameResult == false)
    {
      alert('Please enter alpabets only in name field');
      document.getElementById("fname").style = "border: 2px solid rgb(255,0,0);"
      return false;
    }
    
    else if(phoneResult == false)
    {
      alert('Please enter a valid phone number');
      document.getElementById("contact").style = "border: 2px solid rgb(255,0,0);";
      return false;
    }
    else if(cnicResult == false)
    {
      alert('Please enter a valid cnic number');
      document.getElementById("cnic").style = "border: 2px solid rgb(255,0,0);"
      return false;
    }
    else if(fCnicResult == false)
    {
      alert('Please enter a valid cnic number');
      document.getElementById("fcnic").style = "border: 2px solid rgb(255,0,0);"
      return false;
    }
    else{
    console.log("all inputs are valid");
    return true;
    }
}

function encodeImageFileAsURL() {
  var imageSelected = document.getElementById("docpicker").files;

  if (imageSelected.length > 0) {
      var fileToLoad = imageSelected[0];
      var fileReader = new FileReader();


      fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result;
          localStorage.setItem("imageStored", srcData);
      }
      fileReader.readAsDataURL(fileToLoad);
  }

}