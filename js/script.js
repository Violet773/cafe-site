$(document).ready(function(){
    var windowWidth = $(window).width();
    var headerHight = 30; 
    jQuery('a[href^=#]').click(function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});


jQuery(function($){
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.panel').eq(index).addClass('is-show');
	});
});


jQuery(function($) {
  $('.bg-slider').bgSwitcher({
   images: ['img/gar1.jpg','img/gar2.jpg','img/gar3.jpg','img/gar4.jpg'], 
　 interval: 5000,
　 loop: true,
　 shuffle: true,
　 effect: "fade", // fade,blind,clip,slide,drop,hide
　 duration: 800,
　 easing: "swing" // linear,swing
   });
 });
 
 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: false,
            nav: false,
            dots: false,
            items: 3,
            autoplay: false
        }
    );
});

$(function() {
    var topBtn = $('.to-top');
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
　　　　　　　//フェードインで表示
            topBtn.fadeIn();
        } else {
　　　　　　　//フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

