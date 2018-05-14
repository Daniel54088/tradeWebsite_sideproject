$(function() {

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $("#yellowline").css("display", "block");
            $("#grayline").css("display", "block");

        } else {
            $("#yellowline").css("display", "none");
            $("#grayline").css("display", "none");
        }
    });


    $("#Ham").click(function() {
        $("#yellowline").show(200);
        $("body").css("overflow", "hidden");
    });

    $("#Ham_close").click(function() {
        $("#yellowline").hide(200);
        $("body").css("overflow", "auto");
    });

    /*註冊*/

    $("#register_btn").click(function() {
        $("#loginlobby").css("display", "none");
        $("#register").css("display", "block");
    });

    /*登入*/

    $("#signin_btn").click(function() {
        $("#loginlobby").css("display", "none");
        $("#signin").css("display", "block");
    });

    /*忘記密碼*/

    $("#forget_btn").click(function() {
        $("#signin").css("display", "none");
        $("#forgot").css("display", "block");
    });

    /*返回*/

    $(".join_back_btn").click(function() {
        $("#signin").css("display", "none");
        $("#register").css("display", "none");
        $("#forgot").css("display", "none");
        $("#loginlobby").css("display", "block");
    });

    /*Product_detail_Tab*/

    var Now = 1;

    $("#TAB1 , #TAB2").click(function() {


        /*關掉現在畫面上的content*/
        $("#CONTENT" + Now).css("display", "none");

        var N = this.id.substr(3)

        /*打開要顯示的content*/
        $("#CONTENT" + N).css("display", "block");

        /*關掉目前頁籤的樣式*/
        $("#TAB" + Now).removeClass();

        /*加入要顯示的TAB樣式*/

        $("#TAB" + N).addClass("tab_active");

        Now = N;

    });

    /*help toggle*/

    $(".help_title").click(function() {

        var N = this.id.substr(3);
        $("#help_content" + N).slideToggle();

    });




});