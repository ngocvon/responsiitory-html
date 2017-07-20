<?php

class ActiveEmail{	
		
	public function sendActiveEmail ($to,$contenthtml,$contentfield,$contact_mail_from,$contact_mail_replyto,$mail_subject) {
	
		error_reporting(E_STRICT);
		date_default_timezone_set('America/Toronto');

		require_once('class.phpmailer.php');
		//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

		$mail             = new PHPMailer();		
		//$body             = file_get_contents($this->contentfile);//'contents.html');
		$body             = file_get_contents($contenthtml);//		
	
		$body         = str_replace("{txtfirstname}",$contentfield['first_name_contact'],$body);	//For fields of the page.
		$body         = str_replace("{txtlastname}",$contentfield['last_name_contact'],$body);	//For fields of the page.
		$body         = str_replace("{txtzip}",$contentfield['zip_contact'],$body);	//For fields of the page.
		$body         = str_replace("{txtemail}",$contentfield['email'],$body);	//For fields of the page.
		$body         = str_replace("{txtphone}",$contentfield['phone_contact'],$body);	//For fields of the page.
		$body         = str_replace("{txtcomment}",$contentfield['description'],$body);	//For fields of the page.
			
		$body             = eregi_replace("[\]",'',$body);		

		$mail->IsSMTP(); // telling the class to use SMTP		

		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->SMTPSecure = "tls";                 // sets the prefix to the servier
		$mail->Host       = "smtp.gmail.com"; // sets the SMTP server
		$mail->Port       = 587;                    // set the SMTP port for the GMAIL server
		$mail->Username   = "testing@carbon-8.com"; // SMTP account username
		
		$mail->Password   = "R5G1dtbUUxistJNzpcOf";        // SMTP account password

		$mail->SetFrom($contact_mail_replyto, $contact_mail_from);  

		//$mail->AddCC('nha@carbon-8.com', 'nha');  
		
		$mail->Subject    = $mail_subject;

		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);

		$address = $to;		
		$mail->AddAddress($address, "");	
		$messages=array();		
		if(!$mail->Send()) {		
		  $messages['message'] = "Mailer Error: " . $mail->ErrorInfo;
		  $messages["result"] = false;
		} else {		 
		  $messages["result"] = true;
		  $messages['message'] = "Your request has been submitted.";			
		}		
		
		echo json_encode($messages);		
	}		
	
	public function sendCoreEmail ($to,$contenthtml,$contentfield,$contact_mail_from,$contact_mail_replyto,$mail_subject) {
	
		error_reporting(E_STRICT);
		date_default_timezone_set('America/Toronto');

		require_once('class.phpmailer.php');
		//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

		$mail             = new PHPMailer();		
		//$body             = file_get_contents($this->contentfile);//'contents.html');
		$body             = file_get_contents($contenthtml);//		
	
		$body         = str_replace("{txtfirstname}",$contentfield['first_name_coreservice'],$body);	//For fields of the page.
		$body         = str_replace("{txtlastname}",$contentfield['last_name_coreservice'],$body);	//For fields of the page.
		$body         = str_replace("{txtzip}",$contentfield['zip_coreservice'],$body);	//For fields of the page.
		$body         = str_replace("{txtemail}",$contentfield['email'],$body);	//For fields of the page.
		$body         = str_replace("{txtphone}",$contentfield['phone_coreservice'],$body);	//For fields of the page.
			
		$body             = eregi_replace("[\]",'',$body);		

		$mail->IsSMTP(); // telling the class to use SMTP		

		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->SMTPSecure = "tls";                 // sets the prefix to the servier
		$mail->Host       = "smtp.gmail.com"; // sets the SMTP server
		$mail->Port       = 587;                    // set the SMTP port for the GMAIL server
		$mail->Username   = "testing@carbon-8.com"; // SMTP account username
		
		$mail->Password   = "R5G1dtbUUxistJNzpcOf";        // SMTP account password

		$mail->SetFrom($contact_mail_replyto, $contact_mail_from);  

		//$mail->AddCC('nha@carbon-8.com', 'nha');  
		
		$mail->Subject    = $mail_subject;

		$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

		$mail->MsgHTML($body);

		$address = $to;		
		$mail->AddAddress($address, "");	
		$messages=array();		
		if(!$mail->Send()) {		
		  $messages['message'] = "Mailer Error: " . $mail->ErrorInfo;
		  $messages["result"] = false;
		} else {		 
		  $messages["result"] = true;
		  $messages['message'] = "Your request has been submitted.";			
		}		
		
		echo json_encode($messages);		
	}
	
}
?>

