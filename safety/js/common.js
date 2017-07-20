
window.onerror = function(){
   return false;
}
var store = (function(){
   
    function splitprice(){

        jQuery(window).resize(function(){
            if(jQuery(this).width()<768){

                jQuery('.block-link h4').click(function(){
                    jQuery('.block-link ul').slideUp();
                    jQuery(this).next().slideDown();
                })
            }
            else{
                    jQuery('.block-link h4').unbind('click'); 
                }

        }).trigger('resize');
    };

    function backTop(){

        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: "0"
            }, "800");
            return false;
        });
    };


    function showContentCart(){

        jQuery('.close-text').click(function(){
            
            jQuery('#header .col-checkout-cart p.dropdown-toggle').trigger('click');
            jQuery('.menu-mobile .icon-cart-m').trigger('click');
        });

        jQuery('.icon-close').click(function(){
            
            jQuery('#header .col-checkout-cart p.dropdown-toggle').trigger('click');
            jQuery('.menu-mobile .icon-cart-m').trigger('click');
        });

        jQuery('.col-bg-cart p.dropdown-toggle,.viewcart,.btn-cart').click(function(){
            
            jQuery('.col-bg-cart').toggleClass('active');

            if(jQuery('.col-bg-cart').hasClass('active')){
               jQuery('.row-show-cart').addClass('hover-shadow-cartcontent');
            }else{
                jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            }

            jQuery('body,html').animate({
                scrollTop: "0"
            }, "800");
           jQuery( ".data-dismiss" ).trigger( "click" );

        });

        jQuery('body').on('click',function(e){
            if( !jQuery(e.target).is('.row-show-cart *,.col-bg-cart *')){
                jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            }
        })
    };

    function showMenuMain(){

        jQuery('.nav-container').css('left','0px');
        jQuery('.navbar-menu li').mouseenter(function(){
            jQuery(this).find(' > ul').show();
        });
    
        jQuery('.navbar-menu li.mega-menu').mouseenter(function(){
            jQuery(this).find(' > .site-nav-dropdown').addClass('hover-site-nav-dropdown');
            jQuery(this).find(' > ul').hide();
        });
        jQuery('.navbar-menu li.mega-menu').mouseleave(function(){
            jQuery(this).find(' > .site-nav-dropdown').removeClass('hover-site-nav-dropdown');
        });


    };

    function changelang(){
        
       jQuery('.dropdown-toggle').dropdown();
      
       jQuery('#divNewNotifications li:first-child').hide();
       var firstGetName=jQuery('#divNewNotifications li:eq(0)').find('a').attr('lang');
       jQuery('#text').css('background-image', 'url(images/' + firstGetName + '.png)');

        jQuery('#divNewNotifications li > a').click(function(){

            jQuery('#text').text(jQuery(this).html());
            var getclass =jQuery(this).attr('lang');
            jQuery('#text').addClass(getclass);
            jQuery('#divNewNotifications li').show();
            jQuery(this).parent().hide();
            var imageUrl=getclass.toString();
            jQuery('#text').css('background-image', 'url(images/' + getclass + '.png)');


        });

            
    };

    function dropdownMenuMobile(){
      
        jQuery('.nav-container').css('left','-100%');

        jQuery('.menu-mobile .icon-menu-m').click(function(e){

            jQuery('.menu-mobile .cart-m .icon-cart-m').removeClass('active');

            jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            if(jQuery(this).hasClass('active')){
                jQuery('.nav-container').animate({'left':'-100%'},'easeOutExpo');
            }else{
                setTimeout(function(){
                    jQuery('.nav-container').animate({'left':'0%'},'easeInExpo');
                },200);
            }
            jQuery(this).toggleClass('active');
         
        });

        jQuery('body').on('click',function(e){
            if(!jQuery(e.target).is('.nav-container *')){
                jQuery('.menu-mobile a.menu-m .icon-menu-m').removeClass('active');
                jQuery('.nav-container').animate({'left':'-100%'},'easeOutExpo');
            }
        });

        jQuery('.menu-mobile .icon-cart-m').click(function(e){

            jQuery('.menu-mobile a.menu-m .icon-menu-m').removeClass('active');
            jQuery('.nav-container').animate({'left':'-100%'},'easeOutExpo');

            if(jQuery(this).hasClass('active')){
               jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            }else{
                setTimeout(function(){
                 jQuery('.row-show-cart').addClass('hover-shadow-cartcontent');
                },600);
            }
            jQuery(this).toggleClass('active');

        });

        jQuery('.navbar-menu li').unbind('mouseenter').unbind('mouseleave');

        jQuery('.navigation li .fa-plus-circle').click(function(e){
           
            jQuery(this).next().slideToggle(1);
            jQuery(this).toggleClass('fa-minus-circle');
            jQuery(this).parent().toggleClass('active');
        });
    
    };

    function addPin(){

        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 170) {
                jQuery('.nav-container').addClass('add-pin fadeInDown');
            } else {
                jQuery('.nav-container').removeClass('add-pin fadeInDown');
            }
        });

    };

    function menucategory(){
        jQuery('.box-category li .fa-plus-circle').click(function(){
            jQuery(this).next().slideToggle();
            jQuery(this).toggleClass('fa-minus-circle');
            jQuery(this).parent().toggleClass('active');
        })
    };

    function hideborderprevPaging(){

        jQuery('.pagination li.last').prev().find('a').css('border-right','0px solid #ddd');

    };

    function showSliderSize(){

        jQuery( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 999,
          values: [ 0, 999 ],
          slide: function( event, ui ) {
            jQuery( "#amount-increment" ).val(ui.values[1] );
            jQuery( "#amount-descending" ).val(ui.values[0]);
          }
        });
        jQuery( "#amount-increment" ).val(jQuery( "#slider-range" ).slider( "values", 1 ) );
        jQuery( "#amount-descending" ).val(jQuery( "#slider-range" ).slider( "values", 0 ));

    };

    function showCloudZoom(){

        jQuery('#zoom1').bind('click',function(){           
            var cloudZoom = jQuery(this).data('CloudZoom'); 
                cloudZoom.closeZoom();
                jQuery.fancybox.open(cloudZoom.getGalleryList());
                return false;
        });

        CloudZoom.quickStart();
        JetZoom.quickStart();
        StarZoom.quickStart();

        jQuery('.cloudzoom').mouseenter(function(){
            jQuery('.cloudzoom-lens > div').hide();
        });
      
    };

    function trim_space(){
        jQuery('.fa').each(function(){
            jQuery(this).html(jQuery(this).html().replace(/&nbsp;/gi,''));
        });
    };


    function fixheightcolThree(i){

        var k1,k2,k3,k4;

        var ii=i+1;
        var iii=i+2;
        var vi=i+3;

        var maxHeight=0;

            k1=jQuery(".products-grid .item:eq("+ i +")").height();
            k2= jQuery(".products-grid .item:eq("+ ii +")").height();
            k3= jQuery(".products-grid .item:eq("+ iii +")").height();
            k4= jQuery(".products-grid .item:eq("+ vi +")").height();
         
        var array=[];
        array.push(k1);
        array.push(k2);
        array.push(k3);
        array.push(k4);

        for(var j=0;j<array.length;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            }
        }

       jQuery(".products-grid .item:eq("+ i +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ ii +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ iii +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ vi +")").height(maxHeight);
        
    };

    function setHeightP(){
        var itemcount=jQuery(".products-grid .item").length;
        for(var i=0;i<(itemcount/4);i++){
            fixheightcolThree(i*4);
        }
    };

    function fixheightcolThree3(i){

        var k1,k2,k3;
        var ii=i+1;
        var iii=i+2;
        var maxHeight=0;

            k1=jQuery(".products-grid .item:eq("+ i +")").height();
            k2= jQuery(".products-grid .item:eq("+ ii +")").height();
            k3= jQuery(".products-grid .item:eq("+ iii +")").height();
           
        var array=[];
        array.push(k1);
        array.push(k2);
        array.push(k3);
        
        
        for(var j=0;j<array.length;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            }
        }

       jQuery(".products-grid .item:eq("+ i +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ ii +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ iii +")").height(maxHeight);
       
        
    };

    function setHeightP3(){
        var itemcount=jQuery(".products-grid .item").length;
        for(var i=0;i<(itemcount/3);i++){
            fixheightcolThree3(i*3);
        }
    };

    function fixheightcolThree2(i){

        var k1,k2,k3;
        var ii=i+1;
        
        var maxHeight=0;

            k1=jQuery(".products-grid .item:eq("+ i +")").height();
            k2= jQuery(".products-grid .item:eq("+ ii +")").height();
          
           
        var array=[];
        array.push(k1);
        array.push(k2);
        array.push(k3);
        
        
        for(var j=0;j<array.length;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            }
        }

       jQuery(".products-grid .item:eq("+ i +")").height(maxHeight);
       jQuery(".products-grid .item:eq("+ ii +")").height(maxHeight);
     
       
        
    };

    function setHeightP2(){
        var itemcount=jQuery(".products-grid .item").length;
        for(var i=0;i<(itemcount/2);i++){
            fixheightcolThree3(i*2);
        }
    };

    function elevateweb(){

        jQuery("#img_01").elevateZoom({
            gallery:'gal1'
        }); 
        jQuery("#img_01").bind("click", function(e) {

            var ez = $('#img_01').data('elevateZoom');
            jQuery.fancybox(ez.getGalleryList()); 
            return false;

        }); 
        
    };

    function elevatewebFormobile(){

            jQuery('#img_01').elevateZoom({
                zoomType: "lens",
                gallery:'gal1'
            });
    };

    function addClassMark(){

       
        jQuery('.checkout .panel').on('shown.bs.collapse', function (e) {
             jQuery('.checkout .panel-heading').removeClass('active');
             jQuery(this).find('.panel-heading').addClass('active'); 
         
        });

        jQuery('.checkout .panel').on('hidden.bs.collapse', function (e) {
            jQuery(this).find('.panel-heading').addClass('allow-edit'); 
        })   

    };

    return {

        splitprice: splitprice,
        backTop:backTop,
        dropdownMenuMobile:dropdownMenuMobile,
        showContentCart:showContentCart,
        addPin:addPin,
        showMenuMain:showMenuMain,
        menucategory:menucategory,
        hideborderprevPaging:hideborderprevPaging,
        changelang:changelang,
        showSliderSize:showSliderSize,
        showCloudZoom:showCloudZoom,
        trim_space:trim_space,
        setHeightP:setHeightP,
        setHeightP3:setHeightP3,
        setHeightP2:setHeightP2,
        elevateweb:elevateweb,
        elevatewebFormobile:elevatewebFormobile,
        addClassMark:addClassMark
    };
    
})();

jQuery(document).ready(function() {

    store.splitprice();
    store.backTop();
    store.menucategory();
    store.hideborderprevPaging();
    store.changelang();
    store.showSliderSize();
    store.showCloudZoom();
    store.trim_space();
    store.elevateweb();
    store.showContentCart();
    store.addClassMark();
});

jQuery(function(){

     var jRes = jRespond([{label: 'mobile',enter: 0,exit: 767},{label: 'tablet',enter: 768,exit: 990},{label: 'desktop',enter: 991,exit: 10000 }]);  
        jRes.addFunc({
            breakpoint: 'desktop',
            enter: function() {
                jQuery('html').removeClass('desktop-k');
                store.showMenuMain();
                store.addPin();
                store.setHeightP();
            },
            exit: function() {
             jQuery('html').removeClass('desktop-k');
              store.showMenuMain();
              store.addPin();
              store.setHeightP();
            } 
        });

        jRes.addFunc({


            breakpoint: 'tablet',
            enter: function() {
                
              jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile(); 
               store.setHeightP3();
            },
            exit: function() {
              jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile();
               store.setHeightP3();
              
            } 
        });

        jRes.addFunc({
            breakpoint: 'mobile',
            enter: function() {
                jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile();
               store.setHeightP2();
               store.elevatewebFormobile();  
               
            },
            exit: function() {
             jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile();
              store.setHeightP2(); 
            } 
        });

});

jQuery(document).ready(function() {

    jQuery("#flexisel-link-logo").owlCarousel({

        // Most important owl features
        items :6,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,3],
        itemsTabletSmall: false,
        itemsMobile : [600,2],
        singleItem : false,
        itemsScaleUp : false,
        
        // Navigation
        navigation : true,
        navigationText : ["",""],
        rewindNav : true,
        scrollPerPage : true,
        //Basic Speeds
        slideSpeed :1000,
        paginationSpeed : 800,
        rewindSpeed : 1000,
     
        //Autoplay
        autoPlay : false,
        stopOnHover : false,
    });

    jQuery("#flexisel-custom-reviews").owlCarousel({

        // Most important owl features
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [767,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,
        // Navigation
        navigation : true,
        navigationText : ["",""],
        rewindNav : true,
        scrollPerPage : true,
        //Basic Speeds
        slideSpeed :1000,
        paginationSpeed : 800,
        rewindSpeed : 1000,
     
        //Autoplay
        autoPlay : false,
        stopOnHover : false,
    });
    jQuery(window).error(function(e){
        e.preventDefault();
    });
    jQuery("#flexisel-product").owlCarousel({

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [980,4],
        itemsTablet: [767,5],
        itemsTabletSmall: false,
        itemsMobile : [479,3],
        singleItem : false,
        itemsScaleUp : false,
        // Navigation
        navigation : true,
        navigationText : ["",""],
        //rewindNav : true,
        scrollPerPage : true,
        //Basic Speeds
        slideSpeed :1000,
        paginationSpeed : 800,
        rewindSpeed : 1000,
     
        //Autoplay
        autoPlay : false,
        stopOnHover : false,
    });
    return '';
});




