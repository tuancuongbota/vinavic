$(function() {
    sticky_compare();
	$('.cboxElement').attr('data-lightbox','roadtrip');
});
function sticky_compare(){
	var width = $(window).width();
	if(width < 1030)
		return;
	var top_max =  $('#block_id_181').offset().top;
	var element_height = $('#block_id_181').height();
	$(window).scroll(function () {
		var scrolltop = $(window).scrollTop();
		var pos_bottom = $('.project_detail').offset().top + $('.project_detail').height();

		if (top_max <= scrolltop) {
			if((pos_bottom-element_height) >= (scrolltop - 200)){
				$('#block_id_181').css({
					position: 'fixed',
					top: '20px',
					width: 'inherit'
				});	
				$('#block_id_181 .avatar').addClass('hide');
			}else{
				$('#block_id_181').css({
					position: 'absolute',
					bottom: '5px',
					top: ''
				});
				$('#block_id_181 .avatar').addClass('hide');
			}		

		} else {
			$('#block_id_181').css({
				position: 'relative',
				width: '',
				bottom: '',
				top:''});
			$('#block_id_181 .avatar').removeClass('hide');
		}
	});

}