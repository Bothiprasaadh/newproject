$(() => {
  $("input").focus(()=> {
    $("#error").hide();
    $("error1").hide();
  });

  $("#check").click(()=> {
    if (
      $("#password").attr("type") == "text" &&
      $("#confirm_password").attr("type") == "text"
    ) {
      $("#password").attr("type", "password");
      $("#confirm_password").attr("type", "password");
    } else {
      $("#password").attr("type", "text");
      $("#confirm_password").attr("type", "text");
    }
  });

  // register
  $("#butsave").click( e=> {
    e.preventDefault();
    var v = document.getElementById("error");

    emailReg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var name = $("#name").val();
    var email = $("#email").val();

    var username = $("#username").val();
    var phone = $("#phone").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    setTimeout(function () {
      $("#error").fadeOut(6700);
    }, 3000);
    if (
      name == "" ||
      email == "" ||
      phone == "" ||
      password == "" ||
      username == "" ||
      confirm_password == ""
    ) {
      $("#error").show();
      $("#error_show1").html("Please fill all the field!");
      v.className += " alert-danger";
    } else if (!emailReg.test(email)) {
      $("#error").show();
      $("#err1").html("Email is not valid!");
      v.className += " alert-danger";
    } else if (phone != Number && phone.length != 10) {
      $("#error").show();
      $("#error_show1").html("phone number is not valid!");
      v.className += " alert-danger";
    } else if (password != confirm_password) {
      $("#error").show();
      $("#error_show1").html("Password is not same!");
      v.className += " alert-danger";
    } else if (!password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      $("#error").show();
      $("#error_show1").html(
        "Please use Both uppercase and lowercase! in password"
      );
      v.className += " alert-danger";
    } else if (!password.match(/([0-9])/)) {
      $("#error").show();
      $("#error_show1").html("Please use atleast 1 digit!");
      v.className += " alert-danger";
    } else if (!password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      $("#error").show();
      $("#error_show1").html("Please use special character! in password");
      v.className += " alert-danger";
    } else if (password.length < 8) {
      $("#error").show();
      $("#error_show1").html("password should more than 8 Character!");
      v.className += " alert-danger";
    } else {
      console.log("jeeva");

      $.ajax({
        method: "POST",
        url: "./php/register.php",
        data: {
            name: name,
            username: username,
            password: password,
            email: email,
            mobile: phone,
            dob: new Date($("#dob").val())
          },

        success: result =>{
          console.log(result);
          if(result==="registered"){
            $("#error").show();
            $('#error').css("color","green");
            $('#error_show1').html('successfully registered !');
            $("#register_form").hide();
            $("#register_form").trigger("reset");
            v.className += " alert-danger";
            let tID = setTimeout(function () {
                window.location.href = "./login.html";
                window.clearTimeout(tID);		// clear time out.
            }, 5000);
          } else {
            $("#error").show();
            $("#error").css("color","red");
            $('#error_show1').html('something went wrong !');
            v.className += " alert-danger";
          }
        },
      });
    }
  });
});
