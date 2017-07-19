// JavaScript Document
$(document).ready(function(){
	$('.make_popup').live('click',function(){
		$('.make_popup,.popup_video,.popup_thank,.popup_thong_tin').fadeOut(500,function(){
			$('.make_popup').remove();
			})
		})
	})

function click_popup_all($name){
 $('body').append('<div class="make_popup"></div>')
 $('.make_popup').fadeTo(500,0.6)
 $('.'+$name).fadeIn(500);
 $("#combobox_1").selectBox();
 $("#combobox_3").selectBox();
 }
function close_popup_all($name){
 flag1=1;
 $('.'+$name).fadeOut(500);
 $('.make_popup').fadeOut(500,function(){
 $(this).remove();
  });
}