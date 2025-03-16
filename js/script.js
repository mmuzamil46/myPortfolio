$(document).ready(function(){

   // $('.side-bar').hide();
    //open side bar menu
    $('.openi').click(function(){
        $('.side-bar').removeClass('d-none');
        $('.side-bar').animate({width :"60%"},1000);
        $('.side-bar').children().slideDown(700);
    });
    //close side bar menu when the x icon  clicked 

    $('.closei i').click(function(){
        $('.side-bar').animate({width :"0%"},700);
        $('.side-bar').children().slideUp(400);
    });
    //close the side bar when link from menu is clicked
    $('.side-menu li').click(function(){
        $('.side-bar').animate({width :"0%"},700);
        $('.side-bar').children().slideUp(400);
    });

    //hover effect for side bar menu links
    $('.side-menu li').hover(function(){
        $(this).css("background-color", "white")
    },function(){
        $(this).css("background-color","")
    });



//show and hide expertise detail on small screen
if($(window).width() < 768){
    $('.exper-content p').hide();
} 

$(window).resize(function(){
    if($(window).width() < 768){
        $('.exper-content p').hide();
       
    } else {
        $('.exper-content p').show();
    }
})
$('.exper-content h2').click(function(){
    if($(window).width() < 768)
    $(this).next().slideToggle(500);
})
})
