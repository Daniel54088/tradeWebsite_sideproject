$(function() {

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $("#yellowline").css("display", "block");
            $("#grayline").css("display", "block");
            
        }else{
            $("#yellowline").css("display", "none");
            $("#grayline").css("display", "none");
        }
    });


    $("#Ham").click(function() {
        $("#yellowline").show(200);
        $("body").css("overflow","hidden");
    });

    $("#Ham_close").click(function() {
        $("#yellowline").hide(200);
        $("body").css("overflow","auto");
    });

    /*註冊*/

    $("#register_btn").click(function() {
        $("#loginlobby").css("display","none");
        $("#register").css("display","block");        
    });

    /*登入*/
    
    $("#signin_btn").click(function() {
        $("#loginlobby").css("display","none");
        $("#signin").css("display","block");        
    });

    /*忘記密碼*/

    $("#forget_btn").click(function() { 
        $("#signin").css("display","none");
        $("#forgot").css("display","block");      
    });

    /*返回*/

    $(".join_back_btn").click(function() { 
        $("#signin").css("display","none");
        $("#register").css("display","none");  
        $("#forgot").css("display","none"); 
        $("#loginlobby").css("display","block");      
    });

});