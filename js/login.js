$(()=> {
  $("#login_form").show();
  $("#register_form").hide();
  $("input").focus(function () {
    $("#error").hide();
    $("error1").hide();
  });

  // login

  $("#check1").click(function () {
    if ($("#password_log").attr("type") == "text") {
      $("#password_log").attr("type", "password");
    } else {
      $("#password_log").attr("type", "text");
    }
  });

  $("#butlogin").on("click", function () {
    //location.href = "profile.html";
    $("#error1").hide();
    var v = document.getElementById("error1");
    var username = $("#email_log").val();
    var password = $("#password_log").val();
    setTimeout(function () {
      $("#error1").fadeOut(1000);
    }, 3000);

    if (username == "" || password == "") {
      $("#error1").show();
      $("#error_show12").html("Please fill all the field!");
      v.className += " alert-danger";
    } else {
      console.log("jeeva222");
      $.ajax({
        url: "./php/login.php",
        method: "POST",
        data: {
            email:username,
            password:password
        },
        success: function (dataResult) {
          console.log(dataResult);
          if (dataResult === "ok") {
            $("#login_form").trigger("reset");
            location.href = "profile.html";
          } else{
            $("#error1").show();
            $("#error_show12").html(dataResult);
            v.className += " alert-danger";
          }
        },
      });
    }
  });
});
