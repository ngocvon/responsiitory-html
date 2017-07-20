// JavaScript Document
function popups(id){
	this.name=$(id);
	this.height;
	this.width;
	this.show=function(id_){
		$("body").css("position","relative")
		$(id_).css({top:'50%','margin-top':0,'margin-left':0}).show();
		
		if($(window).width()<600){
			$(id_).width($(window).width());
		}
		$(id_).height("auto");
		$(id_).width("auto");
		this.height=$(id_).height();
		this.width=$(id_).width();
		
		var _width2=this.width;
		var _height2=this.height;
		var _width3=this.width-60;
		$(id_).width(_width3);
		var _height3=$(id_).height();
		$(id_).show().width(0).height(10);
		if($(window).width()<600){
			$(id_).animate({width:_width3,marginLeft:(-_width2/2)},500,function(){
			
			$(this).animate({
				height:_height3,
				marginTop:(-_height2/2)
				},1000);
			});
		}else{
			$(id_).animate({width:_width2,marginLeft:(-_width2/2)},500,function(){
			
			$(this).animate({
				height:_height2,
				marginTop:(-_height2/2)
				},1000);
			});	
		}
		
		$("body").append("<div class='overlay'><a href='javascript:close_popup()'></a></div>")
	}
	this.closepopup=function(){
		$(this.name).fadeOut();
		$(".overlay").remove();
	}
}

function close_popup(){
	popup_img2.closepopup();
	$('.popup_content').html('')
}

var popup_img2;
function show_popup(id){
	popup_img2.show(id);
	$('.popup_content').html(video_link);	
}



var value;
var video_link;
var key=0;
function scroll_to(id,element){
	key=1;
	$(".nav_content li").removeClass("active");
	value=$(id).position().top-70;
	var top1=$(window).scrollTop();
	if(value>top1)
	{
		var timer=(value-top1)*2
	}
	else{
		var timer=(top1-value)*2
	}
	$("html, body").animate({scrollTop:value},timer,"easeOutQuint",function(){
		key=0;
	});
	var links=$(".nav_content li");
	switch(id)
		{
			case "#home_section":$(links[0]).addClass("active");break;
			case "#network_section":$(links[1]).addClass("active");break;
			case "#service_section":$(links[2]).addClass("active");break;
			case "#resource_section":$(links[3]).addClass("active");break;
			case "#support_section":$(links[4]).addClass("active");break;
			case "#incentives_section":$(links[5]).addClass("active");break;
			case "#contact_section":$(links[6]).addClass("active");break;
			default:$(links[0]).addClass("active");break;
		}
}
function scroll_active(value){
	if(key==0){
	$(".nav_content li").removeClass("active");
	var links=$(".nav_content li");
	if(value < 494){
		$(links[0]).addClass("active");
	}else{
		if(value > 494 && value<900){
			
			$(links[1]).addClass("active");
		}else{
				if(value >900 && value<1300){
					$(links[2]).addClass("active");
				}else{
				if(value >1300 && value<1844){
					$(links[3]).addClass("active");
				}else{
				if(value >1844 && value<2278){
					$(links[4]).addClass("active");
				}
				else{
				if(value >2278 && value<2378){
					$(links[5]).addClass("active");
				}else
				if(value > 2378)
				{
					$(links[6]).addClass("active");
				}	
			}		
			}	
			}
			}
	}
	}
	
}
$(document).ready(function(e) {
	check_1024();
	$(window).resize(function(){
	check_1024();
	})
});
function check_1024(){
	var ie7=/ msie 7.0/.test(navigator.userAgent.toLowerCase());
	var ie8=/ msie 8.0/.test(navigator.userAgent.toLowerCase());
	var ie9=/ msie 9.0/.test(navigator.userAgent.toLowerCase());
		if(ie7||ie8||ie9)
		{
			if($(window).width()<=1024)
			{
				$('#idhome').css({'display':'none'});
				$('body').addClass('back_white');
				$('.wrapper').css({'overflow':'hidden'});
				$('.header_section').css({overflow:'hidden'});
				$('.main_section').css({'overflow':'hidden'});
				$('.row').css({'overflow':'hidden'});
				$('.nav_bround').css({'overflow':'hidden'});
				$('#support_section .box_content').css({width:'650px'});
				$('#home_section .col_left').css({marginLeft:'-12px'});	
				$('#service_section .section_content p').css({'padding-right':'10px'});
				
				$('#service_section .col_left').css({'width':'522px'});
				$('#service_section .col_left p').css({'padding-right':'35px'});
				$('#home_section .section_content p').css({'padding-right':'36px'});
				$('#home_section .col_right').css({'width':'462px'});
				$('.social_block').css({'padding-right':'40px'});
				$('#support_section .box_content').css({'width':'707px'});
				$('#support_section h2').css({'font-size':'57px'});
				$('#support_section .col_left').css({paddingLeft:0});
				$('#contact_section .col_right').css({width:614,marginRight: 0});
				$('.box_img').css({marginLeft:0});
				$('#support_section .box_content').css({marginRight:20});
				
				$('#home_section h2').css({marginRight:'0px'});
			}
			else{
				$('#support_section .box_content').css({width:'672px'});
				$('#home_section .col_left').css({marginLeft:'0px'});
				$('#service_section .section_content p').css({'padding-right':'0px'});
				
				$('#service_section .col_left').css({'width':'472px'});
				$('#service_section .col_left p').css({'padding-right':'0px'});
				$('#home_section .section_content p').css({'padding-right':'0px'});
				$('#home_section .col_right').css({'width':'434px'});
				$('.social_block').css({'padding-right':'0px'});
				$('#support_section .box_content').css({'width':'672px'});
				$('#support_section h2').css({'font-size':'59px'});
				$('#support_section .col_left').css({paddingLeft:15});
				$('#contact_section .col_right').css({width:593,marginRight: -15});
				$('.box_img').css({marginLeft:33});
				$('#support_section .box_content').css({marginRight:-8});
				$('#home_section h2').css({marginRight:'20px'});
				
			}
		}
		if(ie7)
		{
			$('#support_section .repeat_bg').css({height:489});
		}
		else{
			$('#support_section .repeat_bg').css({height:483});
		}
}