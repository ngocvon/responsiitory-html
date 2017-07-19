// JavaScript Document
function show_list_popup(value){
	$("#popup_list").show();
	$(".overlay").show();
	setup_slide(value);
	$(document).click(function(event){
		if($(event.target).is('.overlay'))
		{
			hide_list_popup();
		}
	})
	$("html,body").animate({scrollTop:50});
}
function hide_list_popup(){
	$("#popup_list").hide();
	$(".overlay").hide();
	$(".popup_thong_tin").hide();
	$(".popup_thank").hide();
	/*if($(video_items[video_old]).find("img").length==0)
		$(video_items[video_old]).animate({left:0},0,function(){
			var url=$(this).find(".video_view").html();
			$(this).find(".video_view").html("<img src='"+srcold+"' alt='"+url+"' />");
			});*/
}

var video_items;
var video_ind=0;
var video_old=0;
var video_k=0;
var img_items;
var srcind="";
var srcold="";
function ini_popup_slide(){
	video_items=$("#popup_list .video_items");
	video_items.each(function(e){
		if(e==0){
			$(this).css({left:0});	
		}
		else{
			$(this).css({left:490});
		}
	})
	img_items=$(".popup_thank_img").find("img");
	
}

function video_next(){
	if(video_k==0){
		video_k=1;
		video_ind++;
		if(video_ind>$(video_items).length-1){
			video_ind=0;
		}
		srcind=$(video_items[video_ind]).find(".video_view").find("img").attr("src");
		srcold=$(video_items[video_old]).find(".video_view").find("img").attr("src");
		$(video_items[video_ind]).css({left:490}).animate({left:0},500,function(){
			/*var url=$(this).find(".video_view").find("img").attr("alt");
			$(this).find(".video_view").html(url);*/
			});
		$(video_items[video_old]).animate({left:-490},500,function(){
			video_k=0;
			/*var url=$(this).find(".video_view").html();
			$(this).find(".video_view").html("<img src='"+srcold+"' alt='"+url+"' />");*/
			});
		video_old=video_ind;
	}
}

function video_prev(){
	if(video_k==0){
		video_k=1;
		video_ind--;
		if(video_ind<0){
			video_ind=$(video_items).length-1;
		}
		srcind=$(video_items[video_ind]).find(".video_view").find("img").attr("src");
		srcold=$(video_items[video_old]).find(".video_view").find("img").attr("src");
		$(video_items[video_ind]).css({left:-490}).animate({left:0},500,function(){
			/*var url=$(this).find(".video_view").find("img").attr("alt");
			$(this).find(".video_view").html(url);*/
			});
		$(video_items[video_old]).animate({left:490},500,function(){
			video_k=0;
			/*var url=$(this).find(".video_view").html();
			$(this).find(".video_view").html("<img src='"+srcold+"' alt='"+url+"' />");*/
			});
		video_old=video_ind;
	}
}

function showpopup_form(){
	hide_list_popup();
	$(".popup_thong_tin").show();
	$(".overlay").show();
	$("html,body").animate({scrollTop:50});
}

function show_thank_popup(){
	hide_list_popup();
	$(".popup_thank").show();
	$(".overlay").show();
	img_items.each(function(e){
		if(e==video_ind){
			$(this).show();	
		}	else{
			$(this).hide();
			}
	})
	$("html,body").animate({scrollTop:50});
}

function setup_slide(value){
	if(value!=video_ind){
	video_ind=value;
	srcind=$(video_items[video_ind]).find(".video_view").find("img").attr("src");
	srcold=$(video_items[video_old]).find(".video_view").find("img").attr("src");
	$(video_items[video_ind]).css({left:490}).animate({left:0},500,function(){
		/*var url=$(this).find(".video_view").find("img").attr("alt");
		$(this).find(".video_view").html(url);*/
		});
	$(video_items[video_old]).animate({left:-490},500,function(){
		/*var url=$(this).find(".video_view").html();
		$(this).find(".video_view").html("<img src='"+srcold+"' alt='"+url+"' />");*/
		});
	video_old=video_ind;
	
	}else{
		if($(video_items[video_ind]).find("img").length>0)
		$(video_items[video_ind]).css({left:490}).animate({left:0},500,function(){
		/*var url=$(this).find(".video_view").find("img").attr("alt");
		$(this).find(".video_view").html(url);*/
		});
		srcind=$(video_items[video_ind]).find(".video_view").find("img").attr("src");
		
	}
}