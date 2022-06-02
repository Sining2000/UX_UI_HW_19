// $("downArrow").on("hover", function(){
//     $(this).animate({
//         up: 15
//     })
// });

$(document).ready(function(){
    $("#downarrow").hover(function(){
        $(this).animate({
            left: 300
        });
    });
});