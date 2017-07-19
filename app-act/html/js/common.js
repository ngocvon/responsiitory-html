// JavaScript Document

function clickValue(){

	var value =$("#question li.onselect").html();
	$('#question1').val(value);

}
var i_=0;
var j_=0;
var items;
var h=0;
var is_next = false;
var line;
var t=0;

function click_page(){
	
	$('.page_popup img').parent().removeAttr('href');
  i_++;
  line=$('.footer_line img');
  if(i_<8)
  {
	$(items[i_]).css({left:1024}).animate({left:0},500,'easeOutCubic',function(){h=0})
 	$(items[j_]).animate({left:-1024},500,'easeOutCubic')
	//$(items[i_]).show();
	//$(items[j_]).hide();
	$(line[i_]).show();
	$(line[j_]).hide();
 	j_=i_;
  }
  if(i_==6)
  {
	 $('#footer_ul li.show_li').show();
  }
  
}
function setup(){
items=$('.page_popup').each(function(e) {
  h=1;
  $(this).height("auto");
 	 if(e==0)
	  {
	   $(this).css({left:0})
	  }
	  else
	  {
	   $(this).css({left:1024})
	  }
  });
  
}

function popups(id){
this.name=$(id);
var height_;
this.show=function(id_){
	height_=0;	
	$(id_).fadeIn();			 
	}
this.closepopup=function(){
$(this.name).fadeOut();
}
	
}

var popup_img2;
function show_popup(id){
    popup_img2.show(id);		
}
function close_popup(){
 popup_img2.closepopup();
}

/*$(function(){
	 $('#question1 li,#question2 li,#question3 li,#question4 li,#question5 li,#question6 li').hover(function(e) {
		$(this).find('.bg_li').find('.bg_li_left,.bg_li_mibble,.bg_li_right').removeClass('bg_none');
		
    },function(){
		$(this).find('.bg_li').find('.bg_li_left,.bg_li_mibble,.bg_li_right').addClass('bg_none');
	});
})*/


$(function(){ 
	 $('#question1 li div.bg_li_mibble p,#question2 li div.bg_li_mibble p,#question3 li div.bg_li_mibble p,#question4 li div.bg_li_mibble p,#question5 li div.bg_li_mibble p,#question6 li div.bg_li_mibble p').click(function(e) {
		$("#question1 li,#question2 li,#question3 li,#question4 li,#question5 li,#question6 li").removeClass("active");
		$("#question1 li,#question2 li,#question3 li,#question4 li,#question5 li,#question6 li").addClass("noactive");
		$(this).parent().parent().parent().removeClass("noactive");
		$(this).parent().parent().parent().addClass("active");
		$(this).parent().parent().parent().find('.bg_li_left,.bg_li_mibble,.bg_li_right').removeClass('bg_none');
		if($(this).parent().parent().parent().hasClass('active'))
		{
			$('.page_popup img').parent().attr('href','javascript:click_page()');
		}
		else{
			$('.w_right img').parent().removeAttr('href');
		}
		
    });
})


function qs4_00(){
	$('#question3 li').each(function(index, element){
		 switch(index){
				case 0:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs44').show();
				$('#question5 li').hide();
				$('#question5 li#qs52').show();	
				$('#question5 li#qs52').click(function(){	
					$('.video_teemMeeting').show();
				})
				});
				break;
				case 1:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs42').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs51').show();
				$('#question5 li#qs51').click(function(){	
					$('.video_teemMeeting').show();
				})

				});
				break;
				case 2:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs43').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs52').show();
				$('#question5 li#qs52').click(function(){
					$('.video_ReservedHostedVideo').show();
				})
				});
				break;
				case 4:
				$(this).click(function(){
				$('#question5 li#qs52').show();
				i_++;
				$('#question5 li#qs52').click(function(){
					$('.video_proximity').show();
				})
				});
				break;
				default:break;
			
		  }
		 
	 })
}

function qs4_01(){
	$('#question3 li').each(function(index, element){
		 switch(index){
				case 0:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs44').show();
				$('#question4 li#qs44').click(function(){
				$('#question5 li').hide();
				$('#question5 li#qs52').show();
					$('#question5 li#qs52').click(function(){
						$('.video_teemMeeting').show();
					})
				})
				$('#question4 li#qs46').show();
				$('#question4 li#qs46').click(function(){
				$('#question5 li').hide();
				$('#question5 li#qs53').show();
					$('#question5 li#qs53').click(function(){
						$('.video_eliteTeem').show();
						$('.content_word').append('<ul><li class="li_one"><a href="javascript:void()" title="Upgrade to Elite">Upgrade to Elite</a></li><li class="li_two"><a href="javascript:void()" title="Upgrade to Elite Passcode">Upgrade to Elite Passcode</a></li</ul> ');
						$('.content_word li.li_one a').click(function(){
							$('.video_ElitePasscode').show();
							$('.video_eliteTeem').hide();
							$('.video_ElitePasscodePin').hide();
						})
						$('.content_word li.li_two a').click(function(){
							$('.video_ElitePasscodePin').show();
							$('.video_ElitePasscode').hide();
							$('.video_eliteTeem').hide();
						})

					})	
				})
				
				});
				break;
				case 1:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs45').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs53').show();
				$('#question5 li#qs53').click(function(){
					$('.video_conferenceCast').show();	
				})
				});
				break;
				case 3:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs45').show();
				$('#question5 li').show();
				$('#question5 li').click(function(){
					$('.video_proximity').show();
					
				})
				});
				break;
				case 4:
				$(this).click(function(){
				i_++;
				$('#questionfive .w_right_qs2').css({marginTop:'-70px'});
				$('#question5 li').show();
					$('#question5 li').click(function(){
						$('.video_proximity').show();	
					})  
				});
				break;
				default:break;
		  }
		 
	 })
}

function qs4_10(){
	$('#question3 li').each(function(index, element){
		 switch(index){
				case 0:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs44').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs52').show(); 
				$('#question5 li#qs52').click(function(){
						$('.video_teemMeeting').show();	
				})  
				
				});
				break;
				case 1:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs42').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs51').show(); 
				$('#question5 li#qs51').click(function(){
						$('.video_teemMeeting').show();
				}) 
				});
				break;
				case 2:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs41').show(); 
				$('#question4 li#qs41').click(function(){
					$('#question5 li').hide();
					$('#question5 li#qs52').show();	
					$('#question5 li#qs52').click(function(){
							$('.video_Forum').show();
						
					})
					})
				 
				});
				break;
				default:break;
			
		  }
		 
	 })
}

function qs4_11(){
	$('#question3 li').each(function(index, element){
		 switch(index){
				case 0:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs44').show(); 
				$('#question5 li').hide();
				$('#question5 li#qs52').show();
				$('#question5 li#qs52').click(function(){
						$('.video_teemMeeting').show();
						
				}) 
				});
				break;
				case 1:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs42').show();
				$('#question5 li').hide();
				$('#question5 li#qs51').show();
				$('#question5 li#qs51').click(function(){
						$('.video_teemMeeting').show();		
				})  
				});
				break;
				case 2:
				$(this).click(function(){
				$('#question4 li').hide();
				$('#question4 li#qs41').show(); 
				$('#question4 li#qs41').click(function(){
					$('#question5 li').hide();
					$('#question5 li#qs52').show(); 
					$('#question5 li#qs52').click(function(){
					$('.video_teemMeeting').show();	
					})  
				})
				
				});
				break;
				default:break;
			
		  }
		 
	 })
}

$(function(){
	 $('#question1 li').each(function(index, element) {
	switch(index)
		{
			case 0:
			$(this).click(function(){
				$('#question2 li').each(function(index, element){
					switch(index){
						case 0:
						$(this).click(function(){
						$('#question3 li').show();
						$('#question3 li#qs34').hide();
							 qs4_00();
						});
						break;
						case 1:
						$(this).click(function(){
						$('#question3 li').show();
						$('#question3 li#qs33').hide(); 
							qs4_01();
						});
						break;
						default:break;
					}
				})
			});
			break;
			case 1:
			$(this).click(function(){
				$('#question2 li').each(function(index, element){
					switch(index){
						case 0:
						$(this).click(function(){
						$('#question3 li').show();
						$('#question3 li#qs34').hide();
						$('#question3 li#qs35').hide(); 
							qs4_10();
						});
						break;
						case 1:
						$(this).click(function(){
						$('#question3 li').show();
						$('#question3 li#qs34').hide(); 
						$('#question3 li#qs35').hide();
							qs4_11();
						});
						break;
						default:break;
					}
				})	
			});
			break;
			
			default:break;
		}
		
   });	
})

/*$(function(){
$('#question3 li').each(function(index, element) {
	if(index==3)
	{
		$(this).click(function(){
			$('#questionfour').css({display:'none'});
			//$('#questionthree').css({display:'none'});
			
			})
		
		}
	})
})*/