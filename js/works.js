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

$(function () {
  $('#openModal-yuri').click(function(){
      $('#modalArea-yuri').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-yuri').fadeOut();
  });
});


$(function () {
  $('#openModal-urei').click(function(){
      $('#modalArea-urei').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-urei').fadeOut();
  });
});

$(function () {
  $('#openModal-himitu').click(function(){
      $('#modalArea-himitu').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-himitu').fadeOut();
  });
});

$(function () {
  $('#openModal-jouhatu').click(function(){
      $('#modalArea-jouhatu').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-jouhatu').fadeOut();
  });
});
$(function () {
  $('#openModal-seibetu').click(function(){
      $('#modalArea-seibetu').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-seibetu').fadeOut();
  });
});

$(function () {
  $('#openModal-kohaku').click(function(){
      $('#modalArea-kohaku').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-kohaku').fadeOut();
  });
});

$(function () {
  $('#openModal-sousyoku').click(function(){
      $('#modalArea-sousyoku').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-sousyoku').fadeOut();
  });
});

$(function () {
  $('#openModal-namida').click(function(){
      $('#modalArea-namida').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-namida').fadeOut();
  });
});

$(function () {
  $('#openModal-coffee').click(function(){
      $('#modalArea-coffee').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea-coffee').fadeOut();
  });
});








