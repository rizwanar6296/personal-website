var form =  document.getElementById('valform');

var named =  document.getElementById("inputName")
var number = document.getElementById("inputNumber")
var email =  document.getElementById("inputEmail")
var textarea = document.getElementById("inputTextarea")

var errmsg = document.getElementById("eremty");
var ernameSize = document.getElementById("ernameSize");

var erphoneString = document.getElementById("erphoneString");
var eremail = document.getElementById("eremail");
var ertxtSize = document.getElementById("ertxtSize");
// https://script.google.com/macros/s/AKfycbxvqPjTWBVAM2xGvNWZhejT6U1NwhvkafP6OgdikMAXNasSwhyZbTYc1tgvaLihezL2/exec

form.addEventListener('submit', (e) =>{
  //  console.log(named.value);
   // console.log(number.value);
   // console.log(email.value);
    //console.log(textarea.value);
    //console.log(errmsg)
    hideAllerr()
    checkAllEmpty()
    checkName()
    checkPhone()
    checkEmail()
   checkTextarea()
    performSubmit()
    e.preventDefault()  
})
function checkAllEmpty() {
    console.log("INSIDE CHECK ALL EMPTY")
    if(named.value == '' || number.value == '' || email.value == '' || textarea.value == ''){
    displayErrMsg(errmsg) 
    
    }
}
function checkName() {
   // console.log("working name")
    if((named.value.length < 3 || named.value.length > 20) && named.value != ''&& !(/^[\\p{L} .'-]+$/.test(named.value)) )
    displayErrMsg(ernameSize)
    
}

function checkPhone() {
    //console.log("phone")
    if(!(/^[0-9]\d{9}$/.test(number.value)) && number.value != '' )
    displayErrMsg(erphoneString)
}



function checkEmail() {
    console.log(email.value)

    if( !(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value)) && email.value != '' ) 
       
    displayErrMsg(eremail)
}
function checkTextarea() {
   // console.log("teaxt")
    if((textarea.value.length < 10 || textarea.value.legnth > 200) && textarea.value != '')
    displayErrMsg(ertxtSize)
}

function displayErrMsg( msg){
   // console.log(msg);
    msg.style.display = "block";
}

function clearAll(){    
    console.log('clearall');
    named.value = ""
    number.value = ""
    email.value = ""
    textarea.value= ""
    hideAllerr()


}
function hideAllerr(){
  
    errmsg.style.display = "none" 
    ernameSize.style.display = "none" 
    submitSuccess.style.display = "none"
    erphoneString.style.display ="none" 
    eremail.style.display = "none"
    ertxtSize.style.display = "none"
}

function performSubmit(){
    if(
        errmsg.style.display == "none"          &&
        ernameSize.style.display == "none"      &&
        erphoneString.style.display == "none"   &&
        eremail.style.display == "none"         &&
        ertxtSize.style.display == "none"        


    ){

        hideAllerr();
        clearAll()
        displayErrMsg(submitSuccess)
        document.ge
        
        
    }
}
