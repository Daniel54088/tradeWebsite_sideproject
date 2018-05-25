$(function() {


    var ProductArray = [{
            "Id": 1,
            /*ProductArray[0]*/
            "ProductName": "iphone 8",
            "Category": 1,
            "Amount": 20,
            "Description": "something Description",
            "Price": 2000,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/a_product_1.jpg",
            "image2": "../images/product/a_product_2.jpg",
            "image3": "../images/product/a_product_3.jpg"
        },
        {
            "Id": 2,
            "ProductName": "iphone 6",
            "Category": 3,
            "Amount": 20,
            "Description": "something Description",
            "Price": 2000,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/b_product_1.jpg",
            "image2": "../images/product/b_product_2.jpg",
            "image3": "../images/product/b_product_3.jpg"
        },
        {
            "Id": 3,
            "ProductName": "iphone 20",
            "Category": 2,
            "Amount": 20,
            "Description": "something Description",
            "Price": 2000,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/c_product_1.jpg",
            "image2": "../images/product/c_product_2.jpg",
            "image3": "../images/product/c_product_3.jpg"
        },
        {
            "Id": 4,
            "ProductName": "iphone 82",
            "Category": 2,
            "Amount": 20,
            "Description": "something Description",
            "Price": 2000,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/d_product_1.jpg",
            "image2": "../images/product/d_product_2.jpg",
            "image3": "../images/product/d_product_3.jpg"
        },
        {
            "Id": 5,
            "ProductName": "iphone 87",
            "Category": 3,
            "Amount": 20,
            "Description": "something Description",
            "Price": 2000,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/e_product_1.jpg",
            "image2": "../images/product/e_product_2.jpg",
            "image3": "../images/product/e_product_3.jpg"
        },
        {
            "Id": 6,
            "ProductName": "iphone 88",
            "Category": 1,
            "Amount": 20,
            "Description": "something Description",
            "Price": 520,
            "Time": "2018-01-15T11:18:35.35",
            "image1": "../images/product/f_product_1.jpg",
            "image2": "../images/product/f_product_2.jpg",
            "image3": "../images/product/f_product_3.jpg"
        }
    ];


    /*Array Text*/

    /*將HTML放到var宣告function*/


    function ProductHTML(i, Array) {

        //append()插入元素
        $("#ProductItem").append('<div class="col-md-4">' +
            '<div class="product_box" id="product_' + Array[i].Id + '">' +
            '<div class="product1_top">' +
            '<img src="' + Array[i].image1 + '" alt="" id="img1" class="img_list">' +
            '<img src="' + Array[i].image2 + '" alt="" id="img2" class="img_list">' +
            '<img src="' + Array[i].image3 + '" alt="" id="img3" class="img_list">' +
            '</div>' +
            '<div class="product_img_slide">' +
            '<i class="fas fa-circle fa-xs" id="point1"></i>' +
            '<i class="far fa-circle fa-xs" id="point2"></i>' +
            '<i class="far fa-circle fa-xs" id="point3"></i></div>' +
            '<div class="game1_bottom">' +
            '<a href="product_detail.html">' +
            '<h4 id="ProductTitle">' + Array[i].ProductName + '</h4>' +
            '</a>' +
            '<h3 id="ProductPrice">' + '$' + Array[i].Price + '</h3>' +
            '<div class="btngroup">' +
            '<a class="btnsmall" href="javascript:void(0)">Add to Cart</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>' +
            '</div>');
    }



    /*變數i從0開始，跑ProductArray的長度，就會run完陣列所有的產品*/

    for (var i = 0; i < ProductArray.length; i++) {

        ProductHTML(i, ProductArray);

    }



    /*篩選產品類別*/

    $("#Actual").click(function() {

        /*先預設一個空陣列*/

        var CateArray = [];

        /*for迴圈會run過一整個Array*/

        for (var i = 0; i < ProductArray.length; i++) {

            /*如果Category=篩選的數字*/

            if (ProductArray[i].Category == 2) {

                /*將對的結果push到CateArray裡*/

                CateArray.push(ProductArray[i]);
            }

        }

        /*把HTML清空*/

        $("#ProductItem").html('<div>123</div>');

        /*把篩選後的陣列CateArray放到HTML*/

        for (var i = 0; i < CateArray.length; i++) {

            ProductHTML(i, CateArray);
        }

        test();

    });






    $("#Watch").click(function() {

        var CateArray = [];

        for (var i = 0; i < ProductArray.length; i++) {

            if (ProductArray[i].Category == 1) {

                CateArray.push(ProductArray[i]);
            }

        }

        $("#ProductItem").html('');

        for (var i = 0; i < CateArray.length; i++) {

            ProductHTML(i, CateArray);
        }

    });


    $("#Collection").click(function() {

        var CateArray = [];


        for (var i = 0; i < ProductArray.length; i++) {

            if (ProductArray[i].Category == 3) {

                CateArray.push(ProductArray[i]);
            }

        }

        $("#ProductItem").html('');

        for (var i = 0; i < CateArray.length; i++) {

            ProductHTML(i, CateArray);
        }

    });


    $("#All").click(function() {

        $("#ProductItem").html('');

        for (var i = 0; i < ProductArray.length; i++) {

            ProductHTML(i, ProductArray);
        }

    });


function test(){
    $(".fas,.fa-circle,.fa-xs").click(function(){
        console.log(23);
          //取得目前按哪個按鈕的id
          var id = $(this).attr('id');

          //前面過濾掉只剩數字123
          id = id.substr(5,1);

          switch (id) {
            case '1':

            //把所有圖片往右擺並漸層消失
            $(this).parent().siblings(".product1_top").animate({
              left: "0px",
            }, {duration:500,queue:false} ,function() {
                // Animation complete.
            });

            $(this).parent().siblings(".product1_top").children("#img"+id).animate({
              opacity: 1,
            }, 500 ,function() {
                // Animation complete.
            });

              break;

            case '2':
            //把所有圖片往右擺並漸層消失
            $(this).parent().siblings(".product1_top").animate({
              left: "-357px",
            }, {duration:500,queue:false} ,function() {
                // Animation complete.
            });
            $(this).parent().siblings(".product1_top").children("#img"+id).animate({
              opacity: 1,
            }, 500 ,function() {
                // Animation complete.
            });

            break;


            case '3':
            //把所有圖片往右擺並漸層消失
            $(this).parent().siblings(".product1_top").animate({
              left: "-714px",
            }, {duration:500,queue:false} ,function() {
                // Animation complete.
            });
            $(this).parent().siblings(".product1_top").children("#img"+id).animate({
              opacity: 1,
            }, 500 ,function() {
                // Animation complete.
            });

            break;
            default:

          }

    });
}
test();

});
