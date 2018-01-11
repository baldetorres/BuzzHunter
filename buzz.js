$(document).ready(function(){

    $("#startModal").modal('show');

    //START MODAL
    $("#nature-btn").click(function() { //showing startModal
        $("#natureModal").modal('show');
        $("#startModal").modal('hide');
    });
    $("#motivation-btn").click(function() {
        $("#startModal").modal('hide');
        $("#psychModal").modal('show');
    });

    //NATURE JOURNEY
    //NATURE MODAL 1
    $("#next-btn").click(function() { //showing natureModal
        $("#natureModal2").modal('show');
        $("#natureModal").modal('hide');
    });

    //NATURE MODAL 2
    $("#next-btn2").click(function() { //showing natureModal2
        $("#natureModal3").modal('show');
        $("#natureModal2").modal('hide');
    });

    //NATURE MODAL 3
    $("#next-btn3").click(function() { //showing natureModal3
        $("#natureModal4").modal('show');
        $("#natureModal3").modal('hide');
    });

    //NATURE MODAL 4
    $("#next-btn4").click(function() { //showing natureModal4
        $("#natureModal5").modal('show');
        $("#natureModal4").modal('hide');
    });

    //NATURE MODAL 4
    $("#next-btn5").click(function() { //showing natureModal4
        $("#startModal").modal('show');
        $("#natureModal5").modal('hide');
    });

    //PSYCHOLOGICAL JOURNEY
    //PYSCH MODAL 1
    $("#next-btn-p").click(function() { //showing natureModal
        $("#psychModal2").modal('show');
        $("#psychModal").modal('hide');
    });

    //PSYCH MODAL 2
    $("#next-btn2-p").click(function() { //showing natureModal2
        $("#psychModal3").modal('show');
        $("#psychModal2").modal('hide');
    });

    //PSYCH MODAL 3
    $("#next-btn3-p").click(function() { //showing natureModal3
        $("#psychModal4").modal('show');
        $("#psychModal3").modal('hide');
    });

    //PSYCH MODAL 4
    $("#next-btn4-p").click(function() { //showing natureModal4
        $("#psychModal5").modal('show');
        $("#psychModal4").modal('hide');
    });

    //PYSCH MODAL 4
    $("#next-btn5-p").click(function() { //showing natureModal4
        $("#startModal").modal('show');
        $("#psychModal5").modal('hide');
    });
});