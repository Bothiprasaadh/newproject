$(()=>{
    $.ajax({
        url:"./php/profile_getDetails.php",
        method:'GET',
        success: result=>{
            $("#nameId").text('Hi '+result.name);
            $("#input-username").text(result.username);
            $("#input-dob").text(result.dob);
            $("#input-mobile").text(result.mobile);
            $("#input-email").text(result.email);
        }
    });

    $("#saveAdd").on("click",event=>{
        event.preventDefault();
        $.ajax({
            url:"./php/profile_addDetails.php",
            method:"POST",
            data:{
                fatherName:$("#input-fatherName").val(),
                mothername:$("#input-motherName").val(),
                native:$("#input-Native").val(),
                pincode:$("#input-pincode").val(),
                alternateMobile:$("#input-AlternateMobile").val(),
                qualification:$("#input-qual").val()
            },
            success: result=>{
                console.log(result);
            }
        });
    });
});