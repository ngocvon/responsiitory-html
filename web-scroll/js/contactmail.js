// JavaScript Document
$(document).ready(function(){		
		$("#email_contact").keyup(function(e){	
			k= e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;		
			if(k==9)
				return;
			else if(k==13)
				submitContact();
			if(is_click_contact)
				checkEmail('#email_contact');
		});
		
		/* $("#description_contact").keyup(function(e){	
			k= e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;		
			if(k==9)
				return;			
			var field_value = $(this).val();
			if(field_value == '' || field_value == '*Comment') 
				$(this).parent().addClass('textarea_div_error');	
			else		
				$(this).parent().removeClass('textarea_div_error');			
		});	 */		
			
		keyupForm('#last_name_contact','*Last Name');
		keyupForm('#first_name_contact','*First Name');
		keyupForm('#zip_contact','*Zip');
		
		keyupCoreForm('#last_name_coreservice','*Last Name');
		keyupCoreForm('#first_name_coreservice','*First Name');
		keyupCoreForm('#zip_coreservice','*Zip');
		$("#email_coreservice").keyup(function(e){	
			k= e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;		
			if(k==9)
				return;
			else if(k==13)
				submitCoreService();
			if(is_click_coreservice)
				checkEmail('#email_coreservice');
		});
});
 
/*start main contact function*/	 
var is_click_contact = false;
submitContact = function(){
	is_click_contact = true;
    var not_has_submit = sendFormContact();
		if(!not_has_submit){
			$('#submit_bt').attr('disabled','disabled');
			$('#form_contact').submit();
		}
}

sendFormContact = function(){
	var has_error = false;
	
	//var description_contact = $('#description_contact').val();
	var email_contact = $('#email_contact').val();		
	var zip_contact = $('#zip_contact').val();		
	var last_name_contact = $('#last_name_contact').val();		
	var first_name_contact = $('#first_name_contact').val();		
	
	/* if(description_contact == '' || description_contact == '*Comment') {
		$('#description_contact').parent().addClass('textarea_div_error');
		$('#description_contact').focus();
		has_error = true;
	}
	else{			
		$('#description_contact').parent().removeClass('textarea_div_error');
	}	 */
	
	if(email_contact == '' || email_contact == '*Email') {
		$('#email_contact').parent().addClass('input_div_error');
		$('#email_contact').focus();
		has_error = true;
	}
	else{
		var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email_contact) || ((email_contact.indexOf(".")==-1))){
			$('#email_contact').parent().addClass('input_div_error');
			$('#email_contact').focus(); 
			has_error = true;
		}else{
			$('#email_contact').parent().removeClass('input_div_error');				
		}			
	}

	if(zip_contact == '' || zip_contact == '*Zip') {
		$('#zip_contact').parent().addClass('input_div_error');
		$('#zip_contact').focus();
		has_error = true;
	}
	else{			
		$('#zip_contact').parent().removeClass('input_div_error');
	}
	
	if(last_name_contact == '' || last_name_contact == '*Last Name') {
		$('#last_name_contact').parent().addClass('input_div_error');
		$('#last_name_contact').focus();
		has_error = true;
	}
	else{			
		$('#last_name_contact').parent().removeClass('input_div_error');
	}
	
	if(first_name_contact == '' || first_name_contact == '*First Name') {
		$('#first_name_contact').parent().addClass('input_div_error');
		$('#first_name_contact').focus();
		has_error = true;
	}
	else{			
		$('#first_name_contact').parent().removeClass('input_div_error');
	}
	
	return has_error;		
 }
 
function processFormContact()
	{
		$('.ajax_loader').show();		
		/*use smtp*/
		var emailcontent = 'content_mailcontact.html';
		var email = $('#email_contact').val();
		var description = $('#description_contact').val();
		var last_name_contact = $('#last_name_contact').val();
		var first_name_contact = $('#first_name_contact').val();
		var phone_contact = $('#phone_contact').val();
		var zip_contact = $('#zip_contact').val();
		var type_contact = 'contact';
		$.ajax({
				async: false,
				url: 'contact-mail.php',
				data: {emailcontent:emailcontent,email:email,description:description,last_name_contact:last_name_contact,first_name_contact:first_name_contact,phone_contact:phone_contact,zip_contact:zip_contact,type_contact:type_contact},
				success: sendContactSuccess,
				dataType: 'json',
				type:'post'
			});

		return false;
	} 
	
sendContactSuccess = function(res){
		if(res.result==true){
			$('.contact_form').addClass('main_contact');
			$('.contact_form').html('<p style="padding-bottom:0px;"><span class="thankyou_contact"><strong>Thank you!</strong></span></p><p style="padding-top:0px;">'+res.message+'</p>');					
			initFormContact();
		}
		else{
			$('.message_error').html('<p><span><strong>'+res.message+'</strong></span></p>');					
		}
		$('#submit_bt').removeAttr('disabled');
		$('.ajax_loader').hide();					
}	
	
function initFormContact()
	{
		$('#email_contact').val('*Email');
		$('#description_contact').val('Comment');
		$('#last_name_contact').val('*Last Name');
		$('#first_name_contact').val('*First Name');
		$('#phone_contact').val('Phone');
		$('#zip_contact').val('*Zip');
		$('.input_div').removeClass('error');			
		$('.textare_div').removeClass('error');			
	}
/*end main contact function*/

/*start core service function*/	 
var is_click_coreservice = false;
submitCoreService = function(){
	is_click_coreservice = true;
    var not_has_submit_c = sendFormCoreService();
		if(!not_has_submit_c){
			$('#submit_coreservice').attr('disabled','disabled');
			$('#form_coreservice').submit();
		}
}

sendFormCoreService = function(){
	var has_error = false;
	
	var email_coreservice = $('#email_coreservice').val();		
	var zip_coreservice = $('#zip_coreservice').val();		
	var last_name_coreservice = $('#last_name_coreservice').val();		
	var first_name_coreservice = $('#first_name_coreservice').val();		
	
	if(zip_coreservice == '' || zip_coreservice == '*Zip') {
		$('#zip_coreservice').parent().addClass('input_div_error');
		$('#zip_coreservice').focus();
		has_error = true;
	}
	else{			
		$('#zip_coreservice').parent().removeClass('input_div_error');
	}
	
	if(email_coreservice == '' || email_coreservice == '*Email') {
		$('#email_coreservice').parent().addClass('input_div_error');
		$('#email_coreservice').focus();
		has_error = true;
	}
	else{
		var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email_coreservice) || ((email_coreservice.indexOf(".")==-1))){
			$('#email_coreservice').parent().addClass('input_div_error');
			$('#email_coreservice').focus(); 
			has_error = true;
		}else{
			$('#email_coreservice').parent().removeClass('input_div_error');				
		}			
	}	
	
	if(last_name_coreservice == '' || last_name_coreservice == '*Last Name') {
		$('#last_name_coreservice').parent().addClass('input_div_error');
		$('#last_name_coreservice').focus();
		has_error = true;
	}
	else{			
		$('#last_name_coreservice').parent().removeClass('input_div_error');
	}
	
	if(first_name_coreservice == '' || first_name_coreservice == '*First Name') {
		$('#first_name_coreservice').parent().addClass('input_div_error');
		$('#first_name_coreservice').focus();
		has_error = true;
	}
	else{			
		$('#first_name_coreservice').parent().removeClass('input_div_error');
	}
	
	return has_error;		
 }
 
function processFormCoreService()
	{
		$('.ajax_loader').show();		
		var emailcontent = 'content_mailcore.html';
		var email = $('#email_coreservice').val();
		var last_name_coreservice = $('#last_name_coreservice').val();
		var first_name_coreservice = $('#first_name_coreservice').val();
		var phone_coreservice = $('#phone_coreservice').val();
		var zip_coreservice = $('#zip_coreservice').val();
		var type_contact = 'coreservice';
		$.ajax({
				async: false,
				url: 'contact-mail.php',
				data: {emailcontent:emailcontent,email:email,last_name_coreservice:last_name_coreservice,first_name_coreservice:first_name_coreservice,phone_coreservice:phone_coreservice,zip_coreservice:zip_coreservice,type_contact:type_contact},
				success: sendCoreSuccess,
				dataType: 'json',
				type:'post'
			});
		return false;
	} 
	
sendCoreSuccess = function(res){
		if(res.result==true){
			$('.form_contact').html('<p style="padding-bottom:0px;color:#DF6020;"><span><strong>Thank you!</strong></span></p><p>'+res.message+'</p>');
			initFormCoreService();
		}
		else{
			$('.message_error').html(res.message);					
		}
		$('#submit_coreservice').removeAttr('disabled');
		$('.ajax_loader').hide();						
}		
	
function initFormCoreService()
	{
		$('#email_coreservice').val('*Email');
		$('#last_name_coreservice').val('*Last Name');
		$('#first_name_coreservice').val('*First Name');
		$('#phone_coreservice').val('Phone');
		$('#zip_coreservice').val('*Zip');
		$('.input_div').removeClass('error');			
	}
/*end core service function*/	 
	
/*start commons function*/	
checkEmail = function(object){	
	var email_address = $(object).val();	
	if(email_address == '') {
		$(object).parent().addClass('input_div_error');
	}
	else{
		var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email_address) || ((email_address.indexOf(".")==-1))){
			$(object).parent().addClass('input_div_error');
		}else{
			$(object).parent().removeClass('input_div_error');				
		}			
	}	
 }
 
checkEmptyField = function(object, value_field){	
	var field_value = $(object).val();
	if(field_value == '' || field_value == value_field) 
		$(object).parent().addClass('input_div_error');	
	else		
		$(object).parent().removeClass('input_div_error');	
 }
 
keyupForm = function(id,text){
	$(id).keyup(function(e){	
			k= e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;		
			if(k==9)
				return;
			else if(k==13)
				submitContact();
			checkEmptyField(id,text);			
		});	
}

keyupCoreForm = function(id,text){
	$(id).keyup(function(e){	
			k= e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;		
			if(k==9)
				return;
			else if(k==13)
				submitCoreService();			
			checkEmptyField(id,text);	
		});	
}
/*end commons function*/