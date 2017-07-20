<?php
define('MAIL_TO', 'testing@carbon-8.com'); 
define('MAIL_FROM_NAME', 'EarthLink'); 
define('MAIL_FROM_ADDR', 'devtest@carbon-8.com'); 
define('MAIL_SUBJECT', 'EarthLink : Contact Us'); 

require_once('activeemail.php');
$Email			=new ActiveEmail();	
$to = MAIL_TO;
if($_POST['type_contact']=='contact'){
	$_POST['phone_contact'] = str_replace("Phone","",$_POST['phone_contact']);
	$_POST['description'] = str_replace("Comment","",$_POST['description']);
	$Email->sendActiveEmail($to,$_POST['emailcontent'],$_POST, MAIL_FROM_NAME, MAIL_FROM_ADDR, MAIL_SUBJECT);
}
else{
	$_POST['phone_coreservice'] = str_replace("Phone","",$_POST['phone_coreservice']);
	$Email->sendCoreEmail($to,$_POST['emailcontent'],$_POST, MAIL_FROM_NAME, MAIL_FROM_ADDR, MAIL_SUBJECT);
}
?>