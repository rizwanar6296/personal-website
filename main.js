function validate(){
    var n=document.getElementById("name1").value;
    var e=document.getElementById("email").value;
    var p=document.getElementById("phone").value;
    var m=document.getElementById("message").value;
    var atp=e.indexOf("@")
    var dtp=e.indexOf(".")
    if(n==null||n==""){
    alert("Enter Name")
    window.history.back();
    return false
    
    }
    else if(e==null||e==""){
    alert("Enter Email ID")
    return false
    }
    
    else if (atp<1||dtp<atp+2||dtp+2>n.lenght){
    alert("Enter Valid Email")
    return false
    }
    else if (p==null||p==""){
    alert("Enter Phone Number")
    return false
    }
    else if(isNaN(p)){
    alert("Please enter numeric characters ")
    return false
    }
    else if(m==null||m==""){
    alert("Please type a message")
    return false
    }else{
    return true
    }
    
    
    }
