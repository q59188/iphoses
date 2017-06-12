$(function(){!function(){var e=$("main article.index_headnav ul.headnav_menu"),n=0,a=e.height();setInterval(function(){(n+=35)>=a&&(n=0,e.css("top","0px")),e.animate({top:-n+"px"},300)},3e3)}(),function(){function e(e){a.eq(e).addClass("active").siblings().removeClass("active"),i.eq(e).addClass("active").siblings().removeClass("active")}function n(){c=setInterval(function(){t++,e(t%=a.length)},3e3)}var a=$("main article.index_carousel .carousel_news1 .pic_menu .pic_item"),i=$("main article.index_carousel .carousel_news1 .font_menu .font_item"),s=$("main article.index_carousel .carousel_news1"),t=0,c=null;e(t),n(),s.mouseover(function(){clearInterval(c),i.mouseover(function(){e($(this).index())}),$(this).mouseout(function(){clearInterval(c),n()})})}(),function(){var e=$("main article.index_carousel .carousel_news2 .news2_menu .news2_item");e.eq(0).addClass("active"),e.mouseover(function(){$(this).addClass("active").siblings().removeClass("active")})}()});
$(function (){
	(function (){
		var active = $('header article.index_header .header_mo a');
		var nav = $("header article.index_header nav.index_nav");
		active.click(function (){
			nav.fadeToggle("slow","linear");
		});
	})();
});