function submitForm() {
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var text = document.getElementById('text').value;
    var aff=document.getElementById("aff");
    var e=0;
    if (phone == "") {
      document.getElementById("error1").innerHTML="Enter your Phone No.";
      e++;
    }
    else { 
        document.getElementById("error1").innerHTML="";
    }
  
        if (email == "") {
          document.getElementById("error2").innerHTML="Enter your email";
          e++;
        }
          else { 
            document.getElementById("error2").innerHTML="";
        }
    
        if (date == "") {
          document.getElementById("error3").innerHTML="Enter your Birthdate ";
          e++;
        }
          
        else
        { 
          var d=new Date(date);
          var y=d.getFullYear();
          if(y<2000 || y>2024){
            document.getElementById("error3").innerHTML="Enter bttewen 2000 and 2024 ";
            e++;
          }
          else{
            document.getElementById("error3").innerHTML="";}
        }
  
        if (text == "") {
            document.getElementById("error4").innerHTML="Enter your Message";
            e++;
          }
          else { 
              document.getElementById("error4").innerHTML="";
          }
    if(e>0){
      aff.innerHTML="Erreur" ;
    } else{
        aff.innerHTML="-Email:"+email+"<br>"+"-date:"+date+"<br>"+"-text:"+text +"<br>"+"-Phone:"+phone;
    }
    
  }