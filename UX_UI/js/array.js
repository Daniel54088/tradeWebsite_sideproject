$(function() {

	/*quantity增加*/

        N = 1;

    $("#btn_up").click(function() {


        if (N >= 1,N<20) {

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




});