
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
   images: ['img/gar1.jpg','img/gar2.jpg','img/gar3.jpg'], 
　 interval: 5000,
　 loop: true,
　 shuffle: true,
　 effect: "fade", // fade,blind,clip,slide,drop,hide
　 duration: 800,
　 easing: "swing" // linear,swing
   });
  });
