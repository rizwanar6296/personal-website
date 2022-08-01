$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
          fname:{
            required:true,
            minlength:4
          } 
        }
    })
})

    