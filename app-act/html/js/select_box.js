// JavaScript Document

var ind_select=0;
function ini_selectbox(items_select,multi,width_){
	var width=width_;
	var select_item;
	ind_select++;
	select_item=$(items_select);
	var index_contain="index_contain"+ind_select;
	var select_list="select_list"+ind_select;
	var select_list_id='"#'+select_list+'"'
	$(select_item).parent().append("<div style='min-width:"+width+"px;' id='"+index_contain+"' class='index_contain'><div class='select_bg_top'></div><div class='select_bg_bottom'></div><a href='javascript:show_selectbox("+select_list_id+")' class='index_select_item'>"+$(select_item).find("option:first").html()+"</a><a class='button_select' href='javascript:show_selectbox("+select_list_id+")'></a></div>");
	
	
	$(select_item).parent().append("<div class='select_list' id='"+select_list+"'></div>");
	
	var items_list=$(select_item).find("option");
	
	$("#"+select_list).css('min-width','width').append("<ul></ul>");
	
	items_list.each(function(){
		if($(this).attr('selected') == "selected"){
		$("#"+select_list+" ul").append("<li class='active'>"+$(this).html()+"</li>");
		$("#"+index_contain+" .index_select_item").html($(this).html())
		}
		else{
			$("#"+select_list+" ul").append("<li>"+$(this).html()+"</li>");
			}
		})
	
	$(select_item).hide();
	$(document).click(function(event){
			if(!$(event.target).is('#'+select_list))
			{
				if(!$(event.target).is('#'+select_list +'ul'))
				{
					if(!$(event.target).is('#'+select_list+' ul li'))
						{
							if(!$(event.target).is('#'+index_contain))
							{
								if(!$(event.target).is('#'+index_contain+' a'))
								{
									close_selectbox(select_list);
								}
							}
						}
				}
			}
	})
	var para1="#"+select_list;
	var para2="#"+index_contain;
	if(multi==true){
		get_items_multi(para1,para2,items_select);
		}else{
		get_items(para1,para2,items_select);
		}
		addvalue(para1,items_select);
}	

function show_selectbox(select_list){
	if(!$(select_list).hasClass('active')){
		$(select_list).show();
		$(select_list).addClass('active');
		}
		else{
			$(select_list).hide();
			$(select_list).removeClass('active');
			}

}
var textfiel1="name";
var textfiel2="company or group";
var textfiel3="how many shoes?";

function close_selectbox(select_list){
	$("#"+select_list).hide().removeClass('active');
}
var k1=0;
function get_items(para1,para2,select_item){
	var option=$(para1).find("li");
	option.each(function(e){
		$(this).click(function(){
			var text_items=$(this).html();
			$(para2).find(".index_select_item").html(text_items);
			$(para1).hide().removeClass('active');
			var kt_items=$(para1).find("li");
			kt_items.each(function(){
				$(this).removeClass('active');
					
					})
			$(this).addClass("active")
			var op_items=$(para1).find("li");
			var se_opts=$(select_item).find("option")
			op_items.each(function(e){
				if(!$(this).hasClass('active')){
					se_opts[e].selected = false;
					}else{
						k1=e;
						se_opts[e].selected = true;
						if(e!=0){
							$("#select1").parent().removeClass("error");
							}else{
								$("#select1").parent().addClass("error");
								}
						}
				
				
				})
		})
		})
	
}

//select multi

function get_items_multi(para1,para2,select_item){
	$(para1).find("li").click(function(){
		if(!$(this).hasClass('active')){
			var text_items=$(this).html();
			$(para2).find(".index_select_item").html(text_items);
			$(this).addClass('active');
		}
		else{
			$(this).removeClass('active');
			var kt_items=$(para1).find("li");
			kt_items.each(function(){
				if($(this).hasClass('active')){
					var text_items=$(this).html();
					$(para2).find(".index_select_item").html(text_items);
					}
					else{
						var text_items="select";
						$(para2).find(".index_select_item").html(text_items);
						}
				})
			}
		
		var op_items=$(para1).find("li");
		var se_opts=$(select_item).find("option")
		op_items.each(function(e){
			if(!$(this).hasClass('active')){
				se_opts[e].selected = false;
				}else{
					se_opts[e].selected = true;
					}
			
			})
			
		})
}

function addvalue(para1,select_item){
		$("#textinput1").val(textfiel1);
		$("#textinput2").val(textfiel2);
                $("#textinput3").val(textfiel3);
	if(k1!=0){
		var op_items=$(para1).find("li");
		var se_opts=$(select_item).find("option")
		
		se_opts.each(function(e){
			if(e!=k1){
				se_opts[e].selected = false;
				$(op_items[e]).removeClass("active");
				}else{
					se_opts[e].selected = true;
					$(op_items[e]).addClass("active");
					$(".index_select_item").html($(se_opts[e]).html());
					}
			
			})
	}
}