 var product=new Array('55','25','15','50','35','25');
 var option_product=new Array('3','1','1',null);
 var contours=new Array('6','4','2');
 var licenses=new Array('0','20','35','0','-30');
 var gt_product;
 var gt_area;
 var hydroEnforced,roadFlattening,shadedRelief,secureProcessing,customGCP;
 var gt_res=0;
 var gt_contours;
 var gt_licenses;
$(document).ready(function(e) {
	select_product();
	$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[0]+".00");
	gt_product=product[0];
	/*Gia tri dau tien cua product**/
	area();/*Dua du lieu vao tinh cung product*/
	option_products();/*Checkbox_optionproduct Ca E16*/
	/*Gia tri dau tien cua contours**/
	select_contours();
	$('span.contours').html("<b>Resuts:</b>"+ "$"+ contours[0]+".00");
	gt_contours=contours[0];
	/**/
	select_licenses();
	$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[0]);
	gt_licenses=licenses[0];
});
 function select_product(){
		$('select.product').change(function(e) {
        index_product=parseInt($('select.product option:selected').attr('index'));
		switch(index_product)
		{
			case 1:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[0]+".00");
			gt_product=product[0];
			area();	
			break;
			case 2:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[1]+".00");
			gt_product=product[1];
			area();	
			break;
			case 3:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[2]+".00");
			gt_product=product[2];
			area();	
			break;
			case 4:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[3]+".00");
			gt_product=product[3];
			area();	
			break;
			case 5:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[4]+".00");
			gt_product=product[4];
			area();	
			break;
			case 6:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[5]+".00");
			gt_product=product[5];
			area();	
			break;
			default:
			$('span.product_resuts').html("<b>Resuts:</b>"+ "$"+ product[0]+".00");
			gt_product=product[0];
			break;
		}	
        });	 	
}
function area(){
	 var gt_input;
	$("input[type='text'].area_input").change(function(e) {
         gt_input=parseInt($(this).val());
		 if(!isNaN(gt_input) && gt_input >= 100 && gt_input <= 10000)
		 { 
			gt_area=gt_input*parseInt(gt_product);
			$('span.area_resuts').html("<b>Resuts:</b>"+gt_area);
		 }
		 else{
			 return;
		}
			
    });
	
}
function option_products(){
	$("input[type='checkbox'].hydro_products").change(function() {
		if(this.checked) {
		   $('span.option_productresuts1').html("<b>Resuts:</b>"+ "$"+ option_product[0]+".00");
		   hydroEnforced=option_product[0];	   
		}
		else{
			$('span.option_productresuts1').html("<b>Resuts:</b>"+option_product[3]);
			 hydroEnforced=option_product[3];
		}
	});
	$("input[type='checkbox'].road_flattening").change(function() {
		if(this.checked) {
		   $('span.option_productresuts2').html("<b>Resuts:</b>"+ "$"+ option_product[1]+".00");
		    roadFlattening=option_product[1];
		}
		else{
			$('span.option_productresuts2').html("<b>Resuts:</b>"+option_product[3]);
			 roadFlattening=option_product[3];
		}	
	});
	$("input[type='checkbox'].shaded_flattening").change(function() {
		if(this.checked) {
		   $('span.option_productresuts3').html("<b>Resuts:</b>"+ "$"+ option_product[2]+".00");
		    shadedRelief=option_product[2];
		}
		else{
			$('span.option_productresuts3').html("<b>Resuts:</b>"+option_product[3]);
			 shadedRelief=option_product[3];
		}	
	});
	$("input[type='checkbox'].secure_processing").change(function() {
		if(this.checked) {
		  $('span.option_productresuts4').html("<b>Resuts:</b>"+option_product[3]);
		   secureProcessing=option_product[3];
		   gt_res=1;
		   check_gtres();
		}
		else{
			gt_res=0;
			 check_gtres();
		}		
	});
	$("input[type='checkbox'].custom_gcps").change(function() {
		if(this.checked) {
		  $('span.option_productresuts5').html("<b>Resuts:</b>"+option_product[3]);
		   customGCP=option_product[3];
		   gt_res=1;
		   check_gtres();
		}	
		else{
		gt_res=0;
		 check_gtres();
		}	
	});
}
function check_gtres(){
	if(gt_res==1)
	{
		$('span.e16').html("<b>Resuts:</b>"+"True");
		return true;
	}
	else{
		$('span.e16').html("<b>Resuts:</b>"+"Flase");
		return false;
	}
}
function select_contours(){
	$('select.contours').change(function(e) {
        var gt_optioncontours=parseInt($('select.contours option:selected').attr('index'));
		switch(gt_optioncontours){
			case 1:
			$('span.contours').html("<b>Resuts:</b>"+ "$"+ contours[0]+".00");
			gt_contours=contours[0];
			break;
			case 2:
			$('span.contours').html("<b>Resuts:</b>"+ "$"+ contours[1]+".00");
			gt_contours=contours[1];
			break;
			case 3:
			$('span.contours').html("<b>Resuts:</b>"+ "$"+ contours[2]+".00");
			gt_contours=contours[2];
			break;
			default:
			$('span.contours').html("<b>Resuts:</b>"+ "$"+ contours[0]+".00");
			gt_contours=contours[0];
			break;
		}
    });
}
function select_licenses(){
	$('select.licenses').change(function(e) {
        var gt_optionlicenses=parseInt($('select.licenses option:selected').attr('index'));
		switch(gt_optionlicenses){
			case 1:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[0]);
			gt_licenses=licenses[0];
			break;
			case 2:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[1]);
			gt_licenses=licenses[1];
			break;
			case 3:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[2]);
			gt_licenses=licenses[2];
			break;
			case 4:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[3]);
			gt_licenses=licenses[3];
			break;
			case 5:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[4]);
			gt_licenses=licenses[4];
			break;
			default:
			$('span.licenses').html("<b>Resuts:</b>"+ "%"+ licenses[0]);
			gt_licenses=licenses[0];
			break;
		}
    });
}

