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

    /*quantity增加*/

    N = 1;

    $("#btn_up").click(function() {


        if (N >= 1, N < 20) {

            N++;

        } else {

            return;
        }

        /*結果寫入HTML*/

        $("#quantity_digital").html(N);

    });


    /*quantity減少*/


    $("#btn_down").click(function() {


        if (N > 1) {

            N--;

        } else {

            return;
        }

        /*結果寫入HTML*/

        $("#quantity_digital").html(N);

    });


    /*product slide*/


    $('.product_1 .fa-circle').click(

        function() {

            /*先關掉全部的圖*/

            $('.product_1 .img_list').css("left", "100%");

            var P = this.id.substr(5);

            /*打開選中的*/

            $('.product_1 #img' + P).css("left", "0");

            /*point樣式改變*/

            $(this).removeClass("far").addClass("fas");
            $(this).siblings().removeClass("fas").addClass("far");

        }

    );



});