
$(document).ready(function() {
	
	// hover
	$('#logo img').css({opacity:'0'})
	$('#logo').hover(function(){
		$(this).find('img').stop().animate({opacity:'1'},600, function(){$(this).css({opacity:'none'})})				  
	}, function(){
		$(this).find('img').stop().animate({opacity:'0'},600)				  
	})
	
	$('#menu > li').each(function(num){
		$(this).data({num:num})
	})
	
	$('#menu .img_hover').css({height:'0', top:'49px'})
	$('#menu .img_act').css({opacity:'0'})
		
	$('#menu > li').hover(function(){
		if (!$(this).hasClass('active')) {
			var eq_num=$(this).data('num');
			if (eq_num!=0) {
				$('#menu > li').eq(eq_num-1).addClass('bg_none');
			} else {
				$('#menu').addClass('bg_none');
			}
			$(this).find('.img_hover').stop().animate({height:'120', top:'-12'},700, 'easeOutQuad');
			$(this).find('.img_act').stop().animate({opacity:'1'},700, function(){$(this).css({opacity:'none'})});
		}
	}, function(){
		$('#menu > li').removeClass('bg_none');
		$('#menu').removeClass('bg_none');
		$(this).find('.img_hover').stop().animate({height:'0', top:'49'},700, 'easeOutQuad');
		$(this).find('.img_act') .stop().animate({opacity:'0'},700);
	})
	
	$('#icons .img_act').css({opacity:'0'});
	
	$('#icons li').hover(function(){
		$(this).find('.img_act').stop().animate({opacity:'1'})					   
	},function(){
		$(this).find('.img_act').stop().animate({opacity:'0'})					   
	})
	
	$('.button1 img').css({height:'0', marginTop:'22px'})
	$('.button1').hover(function(){
		$(this).find('img').stop().animate({height:'100%', marginTop:'0'},400, 'easeOutQuad')
	}, function(){
		$(this).find('img').stop().animate({height:'0', marginTop:'22'},400, 'easeOutQuad')
	})
	
		
	
	//menu
	$('#menu').superfish({
      delay:       600,
      animation:   {opacity:'show', height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	//gallery works
	
	$('.folio a span').css({opacity:'0'})
	
	$('.folio a').hover(function(){
		$(this).find('span').stop().animate({opacity:'0.4'})			
	},function(){
		$(this).find('span').stop().animate({opacity:'0'})			
	})
	
	var Img='#'+$(".folio .active").attr('id')
	$(".folio .dt > div").css({opacity:'0'});
	$(".folio .dt > div.active").css({opacity:'1'});
	$(".folio li a").click(function(){
  		var ImgId = $(this).attr("href");
  		if (ImgId!=Img) {
			$(".folio .dt > .active").animate({ opacity: "0" }, 600,function(){
				 $(this).removeClass('active').css({zIndex:0});
			})
				 $(ImgId).animate({ opacity: "1" }, 600, function(){$(this).css({opacity:'none',zIndex:1})}).addClass('active');
		}
		Img=ImgId;
  	  return false;
   })
	
	$('.img span').css({opacity:'0'})
	
	$('.img').hover(function(){
		$(this).find('span').stop().animate({opacity:'0.2'})			
	},function(){
		$(this).find('span').stop().animate({opacity:'0'})			
	})
	
	//contact form
	$('#ContactForm').forms({
		ownerEmail:'ya.za0za@yandex.ru'
	})
				
 });
$(window).load(function() {	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle',
	})		
	
	//content switch
	
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hover:true
	})	
	nav.navs(function(n, _){
			content.cont_sw(n);
			$('#menu > li').removeClass('bg_none');
			$('#menu').removeClass('bg_none');
			$('#menu > li').find('.img_hover').stop().animate({height:'0', top:'49'},700, 'easeOutQuad');
			$('#menu > li').find('.img_act') .stop().animate({opacity:'0'},700);
	})	
	content.cont_sw({
		showFu:function(){
			var _=this
			$('.menu').stop().animate({left:'70px'},700, 'easeOutQuad', function(){
				$.when(_.li.find('.grid_10')).then(function(){				  
					_.next.css({display:'block'}).find('.grid_10').stop().animate({opacity:'1'},700, function(){$(this).css({opacity:'none'})});
				});																	 
			})
			$('#content').stop().animate({height:'774'})
		},
		hideFu:function(){
			var _=this
			_.li.find('.grid_10').stop().animate({opacity:'0'},700,function(){$(this).parent().css({display:'none'})});
			$('#content').stop().animate({height:'0'})
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
			$('#content').css({height:'0'})
		}
	})
	setHeight();
	h=new_h;
	center_box();
	var h_cont=857;
	var h_cont_new;
	function setHeight(){
		new_h=$(window).height();
		if ($('#content').css('height')!='0px') {h_cont=957} else {h_cont=857}
	}
	setInterval(setNew,60);
	function setNew(){
		setHeight();
		if ((h!=new_h)||(h_cont_new!=h_cont)) {
			h=new_h;
			center_box();
		}
	}
	function center_box(){
		if (h>h_cont) {
			m_top=~~((h-h_cont)/2);
		} else m_top=0
		$('.container_16').stop().animate({marginTop:m_top},1000, 'easeOutCirc');
		h_cont_new=h_cont;
	}
	$(".folio .dt > div.active").css({zIndex:1});

})
