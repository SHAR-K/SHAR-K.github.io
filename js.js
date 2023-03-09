$(document).ready(function(){
    $('#basck').hide();
    $(function(){

        $(window).scroll(function(){
            if ($(window).scrollTop() < 100 ) {
                $('#back').fadeIn(200);
            } else
            {
                $('#back').fadeOut (200);
            }




        });


        $('#back').click(function(){
            aa=$(window).height();
            $('body,html').animate({
                scrollTop:aa
            },
            500);
            return false;
        })
    });
});