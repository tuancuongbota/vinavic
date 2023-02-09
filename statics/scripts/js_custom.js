$(document).ready(function () {
    // call_lazy();
    call_owl_lazy();
    flazy();
    change_region();
    fb_support_online();
    setTimeout(function () {
       (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId";
          fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }, 8000);
    // load_fb();
    setTimeout(function call_lazy() {
       $(".lazy").lazy({
          effect: "fadeIn",
          data_attribute: "src",
          afterLoad: function (element) {
             element.addClass('after-lazy');
          }
       });
       $('.owl-lazy').addClass('after-lazy').css('display', 'block');
    }, 1000);
    $('.item_block ').click(function () {
       $('.item_block ').removeClass('active');
       $(this).addClass('active');
       id = $(this).attr("id");
       list_id = id.replace('item_block_', 'content_block_');
       $('.content_block').addClass('hide');
       $('#' + list_id).removeClass('hide');
    })
    $('.fs-slider-home .item').removeClass('item_block');
	$('.fs-slider-home .item').removeClass('hide');

	$('.fs-slider-home').owlCarousel({
		loop:true,
		nav:false,
		margin: 0,
		navText: [
         "‹",
         "›"
      ],
		dots:true,
		pagination:true,
		autoplay: true,
		autoplayTimeout:6000,
		items:1,
		lazyLoad : true, 
		responsive : {
			0 : {
				items : 1,

			},
			480 : {
				items : 1,
			},
			768 : {
				items : 1,
			}
		}
	});
   $('.list_item_style9').owlCarousel({
		loop:true,
		nav:true,
		margin: 30,
		navText: [
         "‹",
         "›"
      ],
		dots:false,
		pagination:true,
		autoplay: true,
		autoplayTimeout:4000,
		center:true,
		items:1,
		lazyLoad : true, 
		responsive : {
			0 : {
				items : 2,
				margin: 10,
			},
			769 : {
				items : 3,
				margin: 30,
			},
		}
	});
   $('.related_content .item').removeClass('item_block');
	$('.related_content .item').removeClass('hide');

	$('.related_content').owlCarousel({
		loop:true,
		nav:true,
		margin: 30,
		navText: [
         "‹",
         "›"
      ],
		dots:false,
		pagination:true,
		autoplay: true,
		autoplayTimeout:6000,
		items:1,
		lazyLoad : true, 
		responsive : {
			0 : {
				items : 1,
				margin: 10,

			},
			480 : {
				items : 2.5,
			},
			768 : {
				items : 3,
			}
		}
	});
   $('.related_projects_content').owlCarousel({
		loop:true,
		nav:true,
		margin: 30,
		navText: [
         "‹",
         "›"
      ],
		dots:false,
		pagination:true,
		autoplay: true,
		autoplayTimeout:6000,
		items:1,
		lazyLoad : true, 
		responsive : {
			0 : {
				items : 1,

			},
			480 : {
				items : 1.5,
			},
			768 : {
				items : 2,
			}
		}
	});
   $('.block-strengths2-style2 .list_name  .item').click(function(){
      id = $(this).attr('id');
      $('.block-strengths2-style2 .list_name  .item').removeClass('active');
      $(this).addClass('active');
      id_content = id.replace('item_s2_','content_s2_');
      $('.list_content_s2 .content').addClass('hide');
      $('#'+id_content).removeClass('hide');
   });

	$('.fs-slider-home').on('changed.owl.carousel', function(event) {
		setTimeout(function(){ 
			url = $('.fs-slider-home .active .item').attr('data-link');
			$('.link_readmore a').attr('href',url);
			$('.link_readmore a').addClass('aslide_ani');
		}, 200);
		setTimeout(function(){ 
			$('.link_readmore a').removeClass('aslide_ani');
		}, 1200);


	}); 
    $('.button_a').click(function(){
		$('#search_form').css('display','block');
		$('#search_form').css('width','300px');
		$('#search_form').css('transform','rotateY(0deg)');
	});
		$('.dclose').click(function(){
			$('#search_form').css('width','0px');
		$('#search_form').css('transform','rotateY(90deg)');
	});

   $('.acat').click(function(){
      parent = $(this).attr("data-parent");
      $('.acat_'+parent).removeClass('active');
      $(this).addClass('active');
      id = $(this).attr("id");
      list_id = id.replace('cat_id_','list_item_cat_');
      $('.list_item_cat_'+parent).addClass('hide');
      $('#'+list_id).removeClass('hide');
    });$(document).ready(function() {
       run_tab_proces();
    });
    setTimeout( function () { 
      iframe_strengths_default = $('.iframe_strengths_default').attr('data-video');
      html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+iframe_strengths_default+'?autoplay=1&mute=1&loop=1&playlist='+iframe_strengths_default+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $('.iframe_strengths_default').html(html);
}, 5000);
$('.videos_block_body .video_item .video_item_inner_has_img').click(function(){
	stt = $(this).attr("data-stt");
	$('.v_name_'+stt).addClass('hide');
	height = $(this).height();
	var img_video = $(this).find('img');
	var link_video = img_video.attr('link-video');
	var param = img_video.attr('param-video'); 
	var video = '<iframe src="'+ link_video +'"></iframe>';
	$(this).html('<iframe src="'+link_video+'?rel=0&autoplay=1&enable_js=1&'+param+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="100%" height="'+height+'" frameborder="0" allowfullscreen="false">');
	$(this).removeClass('video_item_inner_has_img');
});
$('#sm_form_2').click(function(){
	if(!check_Formsubmit_2()){
		return false;
    }
    else{
    	$('#buy_fast_form_2').submit();
    }
  });
$('.news_cat').click(function(){
   $('.news_cat').removeClass('active');
   $(this).addClass('active');
   id = $(this).attr("id");
   list_id = id.replace('news_cat_','list_news_');
   $('.list_news').addClass('hide');
   $('#'+list_id).removeClass('hide');
 });expand_filter();	
 function expand_filter(){
    $('.click-mobile').click(function(e){
       var id = $(this).attr('data-id');
          $( this ).toggleClass( "active" );
          $('#'+id).toggle("slow");
    });
 }
   // scroll_menu();
   var width = $(window).width();
   $(window).resize(function() {
     width = $(window).width();
   });
 
   if( width < 1025){
     $('.big_menu').addClass('pos_r');
     $('.sb-toggle-left').click(function(){
      $('.menu_mobile .menu_all').slideToggle('display_open');
 
    });
     $('.big_menu').css({position:'relative'});
     $('.drop_down').click(function(){
       $(this).toggleClass('transform');
       $(this).parent().find('.highlight').slideToggle('display_open');
     });
 
     $('.drop_down2').click(function(){
       $(this).toggleClass('transform');
       $(this).parent().find('.highlight_level2').slideToggle('display_open');
     });
   }
setTimeout( function call_lazy(){ 
   $(".lazy").lazy({ 
      effect : "fadeIn", 
      data_attribute  : "src", 
      afterLoad: function(element) { 
         element.addClass('after-lazy'); 
      } 
   }); 
   $('.owl-lazy').addClass('after-lazy').css('display','block');} , 1000);

 });
 function run_tab_proces(){
	$('.i_list_proces').click(function(){
		var id = $(this).attr('id');
		$('.i_list_proces').removeClass('active');
		$(this).addClass('active');
		content_id = id.replace('i_list_proces_','c_proces_');
		$('.item_proces').addClass('hide');
		$('#'+content_id).removeClass('hide');
	})
};
 function call_lazy() {
    $(".lazy").lazy({
       effect: "fadeIn",
       data_attribute: "src",
       afterLoad: function (element) {
          element.addClass('after-lazy');
       }
    });
    $('.owl-lazy').addClass('after-lazy').css('display', 'block');
 }
 
 
 function flazy() {
    $(".flazy").each(function () {
       var src = $(this).attr('data-src');
       if (src) {
          $(this).attr('src', src);
          $(this).removeAttr('data-src');
       }
    })
 }
 
 function call_owl_lazy() {
    $("img.owl-lazy").each(function () {
       var srcset = $(this).attr('data-srcset');
       if (srcset) {
          $(this).attr('srcset', srcset);
          $(this).removeAttr('data-srcset');
       }
    })
 }
 
 
 function load_fb() {
    (function (d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s);
       js.id = id;
       js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10&appId";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
 }
 
 
 $(function () {
    $("#fixed-bar")
       .css({
          position: 'fixed',
          bottom: '150px'
       })
       .hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 400) {
          $('#fixed-bar').fadeIn(200);
       } else {
          $('#fixed-bar').fadeOut(200);
       }
    });
    $('.go-top').click(function () {
       $('html,body').animate({
          scrollTop: 0
       }, 1000);
       return false;
    });
 });
 
 function change_region() {
    $('#regions_footer').change(function () {
       var id = $(this).val();
       if (id == 0) {
          $('.address_regions .regions').show();
       } else {
          $('.address_regions .regions').hide();
          $('.regions_' + id).show();
       }
 
    })
 }
 $(function () {
    var width = $(window).width();
    $(window).resize(function () {
       width = $(window).width();
    });
 
    function scroll_pos(element_id, rate_screen) {
       if (st > (element_id.offset().top - $(window).height() / 1.25 + 250)) {
          element_id.addClass('hello');
 
       } else {
          if (st < element_id.offset().top) {
             element_id.removeClass('hello');
          }
 
       }
    }
 
    function scroll_pos2(element_id, rate_screen) {
       if (st > (element_id.offset().top - $(window).height() / 1.25)) {
          element_id.addClass('hello');
 
       } else {
          if (st < element_id.offset().top) {
             element_id.removeClass('hello');
          }
 
       }
    }
 
    $(window).scroll(function () {
       st = $(this).scrollTop();
       Itid = $('#Itid').val();
 
       if ($("#bl_strengths2").length) {
          scroll_pos($('#bl_strengths2'), 2);
       }
       if ($("#bl_strengths3").length) {
          scroll_pos($('#bl_strengths3'), 2);
       }
       if ($("#bl_statistics").length) {
          scroll_pos($('#bl_statistics'), 2);
       }
       if ($("#bao-hanh").length) {
          scroll_pos($('#bao-hanh'), 2);
       }
       if ($("#cach-su-dung").length) {
          scroll_pos($('#cach-su-dung'), 2);
       }
 
       if ($("#strengths").length) {
          scroll_pos2($('#strengths'), 2);
       }
       if ($("#strengths5").length) {
          scroll_pos2($('#strengths5'), 2);
       }
       if ($("#introduce").length) {
          scroll_pos($('#introduce'), 2);
       }
       if ($("#strengths2").length) {
          scroll_pos($('#strengths2'), 2);
       }
       if ($("#strengths4").length) {
          scroll_pos($('#strengths4'), 2);
       }
 
       if ($(".block-strengths2-style2").length) {
          scroll_pos($('.block-strengths2-style2'), 2);
       }
 
       if ($(".block-strengths2-style4").length) {
          scroll_pos($('.block-strengths2-style4'), 2);
       }
 
       if ($(".block-strengths2-style5").length) {
          scroll_pos($('.block-strengths2-style5'), 2);
       }
 
       if ($(".block-strengths2-style7").length) {
          scroll_pos($('.block-strengths2-style7'), 2);
       }
 
 
       if ($(".block-strengths2-style8").length) {
          scroll_pos($('.block-strengths2-style8'), 2);
       }
 
 
    });
 
    function scroll_active(element_id, rate_screen) {
 
       if (st > ($('#' + element_id).offset().top - $(window).height() / rate_screen)) {
          $('#megamenu .level_0').removeClass('activated');
          $('.m_' + element_id).addClass('activated');
       } else {
          if (st < $('#' + element_id).offset().top) {
             $('.m_' + element_id).removeClass('activated');
          }
       }
    }
 
 
    var width = $(window).width();
    $(window).resize(function () {
       width = $(window).width();
    });
    if (width > 950) {
       $('#slide_pc').addClass('abc');
    } else {
       $('#slide_pc').removeClass('abc');
    }
 
 
    $("#fixed-bar")
       .css({
          position: 'fixed',
          bottom: '0px'
       })
       .hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 400) {
          $('#fixed-bar').fadeIn(200);
       } else {
          $('#fixed-bar').fadeOut(200);
       }
    });
    $('.go-top').click(function () {
       $('html,body').animate({
          scrollTop: 0
       }, 1000);
       return false;
    });
    // trigger buy now
    $('#buy_now_bt').click(function () {
       $("#buy-now").trigger("click");
    });
 });
 
 function fb_support_online() {
    jQuery(".chat_fb").click(function () {
       jQuery('.fchat').toggle("slow", function (display) {
          if ($('.fchat').css('display') == 'none') {
             $('.chat_fb').addClass('chat_fb_closed').removeClass('chat_fb_openned');
             $('#cfacebook').css('width', 'auto');
          } else {
 
             // $('#cfacebook').css('top','0%');
             $('.chat_fb').removeClass('chat_fb_closed').addClass('chat_fb_openned');
             $('#cfacebook').css('width', '310px');
          }
       });
    });
 }
 
 $(function () {
    var date = new Date();
    var minutes = 60;
    date.setTime(date.getTime() + (minutes * 60 * 24));
    $(".close_banner_top").click(function () {
       $.cookie('promotion_cookie', 'Promotion Cookie', {
          expires: date
       });
       $('.banner_top').slideToggle();
    });
 });
 
 $(function () {
    if ($.cookie('promotion_cookie') == null) {
       $('.banner_top').removeClass('banner-off');
    } else {
       $('.banner_top').addClass('banner-off');
    };
 
 });
 
 
 function close_modal_alert() {
    $('#modal_alert').hide();
 }
 
 function closePopup() {
    $('.mask-popup').removeClass('active');
 }
 
 
 function scroll_pos(element_id, rate_screen) {
    if (st > (element_id.offset().top - $(window).height() / 1.25)) {
       element_id.addClass('hello');
 
    } else {
       if (st < element_id.offset().top) {
          element_id.removeClass('hello');
       }
 
    }
 }
 
 
 open_search();
 
 function open_search() {
    $('.button_open_search').click(function () {
       $('.bl_search').slideToggle('asdasd');
    })
 }
 $(function () {
   $('#problems_wrapper').addClass('hello');
   var width = $(window).width();
   $(window).resize(function() {
     width = $(window).width();
   });
 
 
 
   
   var lastScrollTop = 0;
   $(window).scroll(function () {
 
     st = $(this).scrollTop();
     Itid = $('#Itid').val();
 
 
 
 
     
     if(width > 1024){ // pc
       if (st >200) {
         if(st <  lastScrollTop) {
           $(".header_wrapper").removeClass('slide-run').removeClass("slide-down").addClass("slide-up").css({position:'fixed',top:'0px'});
         }
         else {
           $(".header_wrapper").removeClass('slide-run').removeClass("slide-up").css({position:'fixed',top:'-200px'}).addClass("slide-down");
 
         }
         
       } else {
         $(".header_wrapper").css({position:'absolute'}).removeClass("slide-up").removeClass("slide-down").addClass('slide-run').css({top:'0px'});
         
         
       }
     }else{  //mobile
      if (st >1) {
 
       if(st <  lastScrollTop) {
         $("#header_inner").removeClass("slide-down-m").addClass("slide-up-m").css({position:'fixed',top:'0px'});
 
       }
       else {
         $("#header_inner").removeClass("slide-up-m").addClass("slide-down-m").css({position:'fixed',top:'0px'});
 
       }
 
     } else {
       $("#header_inner").css({position:'relative'}).removeClass("slide-up-m").removeClass("slide-down-m");
 
 
     }
   }
   lastScrollTop = st;
 });
   
 
   function scroll_pos(element_id,rate_screen){
 
     if (st > ( element_id.offset().top - $(window).height()/rate_screen) ) {
         // $(".section3 video").fadeIn();      
         
         element_id.addClass('hello');      
 
       }else{ 
         if(st < element_id.offset().top )  {
           element_id.removeClass('hello');    
         }
 
       }
     }
 
     /* Cho pos trên cao */
     function scroll_pre_pos(element_id,rate_screen){
 
       if (st < ( element_id.offset().top + $(window).height()/rate_screen) ) {
         // $(".section3 video").fadeIn();      
         
         element_id.addClass('hello');      
 
       }else{ 
         if(st > element_id.offset().top + element_id.height())  {
           element_id.removeClass('hello');    
         }
 
       }
     }
 
 
 
     $("#fixed-bar")
     .css({position:'fixed',bottom:'5%'})
     .hide();
     $(window).scroll(function () {
       if ($(this).scrollTop() > 400) {
         $('#fixed-bar').fadeIn(200);
       } else {
         $('#fixed-bar').fadeOut(200);
       }
     });
     $('.go-top').click(function () {
       $('html,body').animate({
         scrollTop: 0
       }, 1000);
       return false;
     });
 
 
   });
   function check_Formsubmit_2()
{
	// return false;
	$('label.label_error').prev().remove();
	$('label.label_error').remove();


	if(!notEmpty("name_buy_fast_2","Bạn phải nhập họ tên"))
	{
		return false;
	}

	if(!notEmpty("email_or_zalo_2","Bạn phải nhập Email"))
	{
		return false;
	}
	if(!emailValidator("email_or_zalo_2","Email nhập không hợp lệ")){
		return false;
	}
	if(!notEmpty("telephone_buy_fast_2","Bạn phải nhập số phone")){
		return false;
	}

	if(!isPhone("telephone_buy_fast_2","Bạn nhập số điện thoại không hợp lệ")){
		return false;
	}
		$('#sm_form_2').prop("disabled", true);
		return true;

}


function close_f2(){
	$('#form_2').addClass('hide');
};
function open_f(){
	$('#form_2').removeClass('hide');
};
$(function(){
	var date = new Date();
	var minutes = 60;
	date.setTime(date.getTime() + (minutes * 60 * 24));
	$("#close_form_2").click(function() {
		$.cookie('close_form_2', 'close_form_2', { expires: date});
		$('#form_2').addClass('hide');
	});
});

$(function() {
	if($.cookie('close_form_2') == null) {
		setTimeout(function(){
			$('#form_2').removeClass('hide');
		},5000)

	}else{
		$('#form_2').addClass('hide');
	};
});