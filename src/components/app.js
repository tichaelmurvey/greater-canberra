function expandMenu() {
    menu = $(".mobile-menu");
    menu.slideToggle();
}

$( document ).ready(function() {
    console.log( "ready!" );
    var current_title = $(document).attr('title');

    $("ul li a").each(function() { 
        console.log($(this).text());
        if($(this).text() == current_title){
            $(this).addClass("active")
        }
    });    
});

