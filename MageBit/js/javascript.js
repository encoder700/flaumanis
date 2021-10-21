function valid (form) {
  var fail = false;
  var email = form.email.value;
  var adr_pattern = /^[.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}/i;

  if (email == "" || email == " ")
    fail = "Email address is required"; 
    else if (adr_pattern.test(email) == false)
    fail = "Please provide a valid e-mail address";
    else if (adr_pattern="((?!co).)")
    fail = "We are not accepting subscriptions from Colombia emails";
    


  if (fail) 
    alert(fail);
  else
    window.location = "#";
}




