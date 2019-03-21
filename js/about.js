$(window).scroll(function(){
	
    $('.bar').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/5){
            $(this).css("opacity","1" )
            line1.animate(0.65);
            line2.animate(0.45);
            line3.animate(0.40);
            line4.animate(0.15);
            line5.animate(0.85);
        } else {
            $(this).css("opacity","0" );
            line1.animate(0);
            line2.animate(0);
            line3.animate(0);
            line4.animate(0);
            line5.animate(0);
        }
    });
});


var line1 = new ProgressBar.Line(demoprogressbar1, {
    color: "#000",
    trailColor: "#aaa",
    
});

// line.animate(0.65);

var line2 = new ProgressBar.Line(demoprogressbar2, {
    color: "#000",
    trailColor: "#aaa",
});

// line.animate(0.45);

var line3 = new ProgressBar.Line(demoprogressbar3, {
    color: "#000",
    trailColor: "#aaa",
});

// line.animate(0.40);

var line4 = new ProgressBar.Line(demoprogressbar4, {
    color: "#000",
    trailColor: "#aaa",
});

// line.animate(0.15);

var line5 = new ProgressBar.Line(demoprogressbar5, {
    color: "#000",
    trailColor: "#aaa",
});

// line.animate(0.85);


 