$(window).on('load',function(){

    $(window).scroll(function(){
        console.log("ok");
    $('.works').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/5){
            $(this).css("opacity","1" )
        } else {
            $(this).css("opacity","0" );
            
        }
    });
});

});

