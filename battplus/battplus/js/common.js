var store = (function(){
   
    function splitprice(){

        jQuery(window).resize(function(){
            if(jQuery(this).width()<481){
                jQuery('.link-footer h4').bind('click',function(){
                    jQuery('.link-footer .content').slideUp();
                    jQuery(this).next().slideToggle();
                });
            }else{
                jQuery('.link-footer h4').unbind('click'); 
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
            jQuery('.col-bg-cart > p').trigger('click');
          /*  jQuery('.menu-mobile .icon-cart-m').trigger('click');*/
        });

        jQuery('.col-bg-cart > p,.viewcart,.btn-cart').click(function(){

            jQuery('.col-bg-cart').toggleClass('active');

            if(jQuery('.col-bg-cart').hasClass('active')){
               jQuery('.row-show-cart').addClass('hover-shadow-cartcontent');
            }else{
                jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            }

            jQuery('body,html').animate({
                scrollTop: "0"
            }, "800");

        });

        jQuery('body').on('click',function(e){
            if( !jQuery(e.target).is('.shadow-cartcontent *,.col-bg-cart *')){
                jQuery('.col-bg-cart').removeClass('active');
                jQuery('.shadow-cartcontent').removeClass('hover-shadow-cartcontent');
            }
        })
    };

    function showMenuMain(){

      
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
      
        jQuery('.menu-mobile .icon-menu-m').toggleClass('active');
        jQuery('.menu-mobile .icon-menu-m').click(function(e){
           
            if(jQuery(this).hasClass('active')){
                jQuery('.navigation').show();
                jQuery(this).removeClass('active');    
            }else{
                jQuery('.navigation').hide();
                jQuery(this).addClass('active');
            }
           
        });

        jQuery('body').on('click',function(e){
            if(!jQuery(e.target).is('.nav-container *')){
               
            }
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
        jQuery('.panel-heading h3').click(function(){
            jQuery(this).parent().next().slideToggle();
            jQuery(this).find('.fa-angle-double-right').toggleClass('fa-angle-double-down');
            jQuery(this).toggleClass('active');
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

            k1=jQuery(".products-grid li:eq("+ i +")").find('.item-title').height();
            k2= jQuery(".products-grid li:eq("+ ii +")").find('.item-title').height();
            k3= jQuery(".products-grid li:eq("+ iii +")").find('.item-title').height();
            k4= jQuery(".products-grid li:eq("+ vi +")").find('.item-title').height();
         
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

       jQuery(".products-grid li:eq("+ i +")").find('.item-title').height(maxHeight);
       jQuery(".products-grid li:eq("+ ii +")").find('.item-title').height(maxHeight);
       jQuery(".products-grid li:eq("+ iii +")").find('.item-title').height(maxHeight);
       jQuery(".products-grid li:eq("+ vi +")").find('.item-title').height(maxHeight);
        
    };

    function setHeightP(){
        var itemcount=jQuery(".products-grid li").length;
        for(var i=0;i<(itemcount/4);i++){
            fixheightcolThree(i*4);
        }
    };

    function fixheightcolThree3(i){

        var k1,k2,k3;
        var ii=i+1;
        var iii=i+2;
        var maxHeight=0;

            k1=jQuery(".products-grid .item:eq h3("+ i +")").height();
            k2= jQuery(".products-grid .item:eq h3("+ ii +")").height();
            k3= jQuery(".products-grid .item:eq h3("+ iii +")").height();
           
        var array=[];
        array.push(k1);
        array.push(k2);
        array.push(k3);
        
        
        for(var j=0;j<array.length;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            }
        }

       jQuery(".products-grid .item:eq h3("+ i +")").height(maxHeight);
       jQuery(".products-grid .item:eq h3("+ ii +")").height(maxHeight);
       jQuery(".products-grid .item:eq h3("+ iii +")").height(maxHeight);
       
        
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

            k1=jQuery(".products-grid .item:eq h3("+ i +")").height();
            k2= jQuery(".products-grid .item:eq h3("+ ii +")").height();
          
           
        var array=[];
        array.push(k1);
        array.push(k2);
        array.push(k3);
        
        
        for(var j=0;j<array.length;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            }
        }

       jQuery(".products-grid .item:eq h3("+ i +")").height(maxHeight);
       jQuery(".products-grid .item:eq h3("+ ii +")").height(maxHeight);
     
       
        
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

        jQuery('.chbox-hovereckout .panel').on('hidden.bs.collapse', function (e) {
            jQuery(this).find('.panel-heading').addClass('allow-edit'); 
        })   

    };

    function usually(){

        jQuery(window).load(function() {
            jQuery('#slider').nivoSlider();

           jQuery('.carousel').carousel();
        });
    };

    function hoveritem(){

        jQuery('.item').mouseenter(function(){
           
            jQuery(this).find('.box-hover').addClass('abc');
           
        });
        jQuery('.item').mouseleave(function(){

             jQuery(this).find('.box-hover').removeClass('abc');
        });

    };

    function boxSearch(){

        jQuery('#header .box-search').click(function(){

            if(jQuery(this).hasClass('active')){
                jQuery('.d-search').removeClass('d-search-show');
                jQuery(this).removeClass('active');
            }
            else{
                jQuery('.d-search').addClass('d-search-show');
                jQuery(this).addClass('active');   
            }

        });

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
        addClassMark:addClassMark,
        usually:usually,
        hoveritem:hoveritem,
        boxSearch:boxSearch
    };
    
})();

jQuery(document).ready(function() {

    store.splitprice();
    store.backTop();
    store.menucategory();
    //store.hideborderprevPaging();
    store.changelang();
    store.showSliderSize();
    store.showCloudZoom();
    store.trim_space();
    store.elevateweb();
    store.showContentCart();
    store.addClassMark();
    store.usually();
    store.hoveritem();
    store.boxSearch();
});

jQuery(function(){

     var jRes = jRespond([{label: 'mobile',enter: 0,exit: 767},{label: 'tablet',enter: 768,exit: 990},{label: 'desktop',enter: 991,exit: 10000 }]);  
        jRes.addFunc({
            breakpoint: 'desktop',
            enter: function() {
                jQuery('html').removeClass('desktop-k');
                store.showMenuMain();
                store.setHeightP();
            },
            exit: function() {
             jQuery('html').removeClass('desktop-k');
              store.showMenuMain();
              store.setHeightP();
            } 
        });

        jRes.addFunc({


            breakpoint: 'tablet',
            enter: function() {
                
              jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile(); 
             
            },
            exit: function() {
              jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile();
            } 
        });

        jRes.addFunc({
            breakpoint: 'mobile',
            enter: function() {
                jQuery('html').addClass('desktop-k');
               store.dropdownMenuMobile();
               store.elevatewebFormobile();  
               
            },
            exit: function() {
             jQuery('html').addClass('desktop-k');
             store.dropdownMenuMobile();
            } 
        });

});






