$(".nav > a").hover(
    function() {
        $(this).addClass("underline");
    },
    function() {
        $(this).removeClass("underline");
    }
);