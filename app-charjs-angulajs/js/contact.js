/*
 * start contact mail
 */
var run = false;
var contactMail = (function () {
	var my = {};	
	my.processFormContact = function(){
		$('.loading_img_contact').show();
		$('#contact_form input[type="text"]').attr('readonly','readonly');
	
		var chooseOption = getChooseOption();	
		$.ajax({
			type : 'POST',
			url : 'phpmailer/contact-mail.php',
			dataType : 'json',
			data: {
				name : $('#name').val(),
				email : $('#email').val(),
				phone : $('#phone').val(),
				posttalcode : $('#posttalcode').val(),
				chooseoption : chooseOption
			},
			success : function(data){						
					contactMail.initFormContact();					
					$('.thankyou').show();
			}
		});

		return false;
	} 	 
	
	my.submitContact = function(){	
		var not_has_submit = sendFormContact();
			if(!not_has_submit)
			{
				if(run) return;
				run = true;
				$('#contact_form').submit();
				
			}
	}

	sendFormContact = function(){
		var has_error = false;		
		var email = $('#email').val();		
		var name = $('#name').val();	
		var email_require = false;
		var name_require = false;
		
		if(email == '') {
			$('#email').addClass('error');			
			has_error = true;
			email_require = true;
		}
		else{
			var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			if (!filter.test(email) || ((email.indexOf(".")==-1))){
				$('#email').addClass('error');
				has_error = true;
				email_require = true;
			}else{
				$('#email').removeClass('error');				
			}			
		}	
		
		if(name == '') {
			$('#name').addClass('error');	
			name_require = true;
			has_error = true;
		}
		else{			
			$('#name').removeClass('error');
		}

		var chooseOption = getChooseOption();
		if(chooseOption == '') {
			$('#contact_form').find('input[type=checkbox]').each(function() {			
				$(this).parent().addClass('error');				
			});				
			has_error = true;
		}
		else{			
			$('#contact_form').find('input[type=checkbox]').each(function() {			
				$(this).parent().removeClass('error');				
			});	
		}
				
		if(name_require){
			$('#name').focus();
		}
		else if(email_require){
			$('#email').focus();
		}
		
		return has_error;		
	}

	getChooseOption = function(){
		var arrayChoose = new Array();
		$('#contact_form').find('input[type=checkbox]').each(function() {			
			if($(this).is(':checked')) {
				arrayChoose[arrayChoose.length] = $(this).parent().next().text();
			}					
		});	
		return myUltility.implodeValue(arrayChoose);
	}
	 
	my.addInputListenner = function (){
		$("#email").keyup(function(e){			
			myUltility.checkEmail('#email');			
		});	

		$("#email").blur(function(e){			
			myUltility.checkEmail('#email');			
		});		
				
		$("#name").keyup(function(e){			
			myUltility.checkEmptyField('#name','');			
		});	

		$('#contact_form').find('input[type=checkbox]').click(function() {						
			if(getChooseOption()==''){
				$('#contact_form').find('input[type=checkbox]').parent().addClass('error');
			}
			else{
				$('#contact_form').find('input[type=checkbox]').parent().removeClass('error');
			}	
				
		});		
	}
	
	my.initFormContact = function(){		
		$('#contact_form input[type="text"]').val('');
		$('#contact_form input[type="text"]').attr('readonly',false);
		$('#contact_form input[type="text"]').removeClass('error');	
		
		$('#contact_form').find('input[type=checkbox]').each(function() {			
			$(this).removeAttr('checked');		
			$(this).parent().removeClass('error');					
		});		
		$('.thankyou').hide();
		
		$('.loading_img_contact').hide();			
		run = false;
	}
	
	my.cancelContact = function(){
		this.initFormContact();
		run = false;
	}
	
	return my;
}()); 
/*
 * end contact mail
 */
 
/*
 * start my ultility function
 */
var myUltility = (function () {
	var my = {};
	
	my.checkEmail = function(object){	
		var email_address = $(object).val();	
		if(email_address == '') {
			$(object).addClass('error');
		}
		else{
			var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			if (!filter.test(email_address) || ((email_address.indexOf(".")==-1))){
				$(object).addClass('error');
			}else{
				$(object).removeClass('error');				
			}			
		}	
	}
 
	my.checkEmptyField = function(object, value_field){	
		var field_value = $(object).val();
		if(field_value == '' || field_value == value_field) 
			$(object).addClass('error');	
		else		
			$(object).removeClass('error');	
	}
	
	my.implodeValue = function(object){	
		var str = "";
		$.each(object, function(index,value) {
			str = str + object[index];

			if((index + 1) != object.length) {
				 str = str + ", ";
			}
		});

		return str;
	}	
		
	return my;
}()); 
/*
 * end my ultility function
 */

$(function(){
	contactMail.initFormContact();	
	contactMail.addInputListenner();	
})