require([
    'jquery',
    'owlcarousel',
    'bootflat/icheck',
    'bootflat/stepper',    
    'bootflat/bootstrap-select',    
    'touch',
    'fitvids',
    'fancybox',
    'elevatezoom',
    'mCustomScrollbar',
    'domReady!',
    'bootstrap' 
], function($){
    'use strict';
    function addPin(){

        if(jQuery(window).width()<990){

            

            jQuery(window).scroll(function () {
                jQuery('.nav-sections').removeClass('add-pin fadeInDown');
            });

        }else{

            jQuery(window).scroll(function () {
            
            if (jQuery(this).scrollTop() > 190) {

                    jQuery('.nav-sections').addClass('add-pin fadeInDown');

                } 
                else {

                    jQuery('.nav-sections').removeClass('add-pin fadeInDown');
                }

            });
            
        }
        

    };

    function addWidth(){

        jQuery('.form-search .search-query').focus(function(){
            jQuery('.form-search.search-only').animate({'width':'100%'});
        });

        jQuery('.form-search .search-query').focusout(function(){
            if(jQuery(this).val().length===0){
                jQuery('.form-search.search-only').animate({'width':'70%'});
            }
        });

    };

    function addDiv(){
       // jQuery('.level0.submenu').wrap('<div class="dropdown-menu"></div>');
    };

    function elevateweb(){

        

        jQuery("#img_01").bind("click", function(e) {
            var ez = jQuery('#img_01').data('elevateZoom');
            jQuery.fancybox(ez.getGalleryList()); 
            return false;
        });

        jQuery(window).load(function(){

            if(jQuery(window).width()<767){

                jQuery('.zoomContainer').remove();
                return false;
            }else{
                jQuery("#img_01").elevateZoom({
                    gallery:'gal1'
                });
            }

        });
        
        jQuery(window).resize(function(){

            if(jQuery(this).width()<767){
                
                jQuery('.zoomContainer').remove();
                return false;

            }else{
                jQuery("#img_01").elevateZoom({
                    gallery:'gal1'
                });
                
            }
        }).trigger('resize');

    };

    function hoverMenu(){

        jQuery(".topmenu li").hover(
            function(){
                jQuery(this).children('ul').hide();
                jQuery(this).children('ul').stop().slideDown('fast');       
            },
            function () {
                jQuery('ul', this).stop().slideUp('fast');            
        });
    };

    function showMenuMobile (argument) {

        jQuery('.menu-mobile .icon-menu-m').click(function(e){
            
            jQuery('.socialTop').removeClass('show');
            jQuery('.menu-mobile .cart-m .icon-cart-m').removeClass('active');

            jQuery('.row-show-cart').removeClass('hover-shadow-cartcontent');
            if(jQuery(this).hasClass('active')){
                jQuery('.nav-sections').css('top','-100%');
            }else{
                jQuery('.nav-sections').css('top','59px');
            }
            jQuery(this).toggleClass('active');
         
        });

    };

    function dropdownMenuMobile(){

        jQuery('.topmenu li .fa').click(function(){
            jQuery(this).next().slideToggle('fast');
            jQuery(this).toggleClass('fa-minus');
        });

     };

     function hiddenBreakcumbsMobile(){

        jQuery(window).resize(function(){

            if(jQuery(this).width()< 767 ){

                jQuery('.breadcrumbs ul li').hide();
                jQuery('.breadcrumbs ul li:last-child').show();
                jQuery('.breadcrumbs ul li:last-child').prev().show();

            }else{
                 jQuery('.breadcrumbs ul li').show();
                return false;
            }
            
        }).trigger('resize');

        jQuery(window).load(function(){
            if(jQuery(window).width()< 767 ){

            jQuery('.breadcrumbs ul li').hide();
            jQuery('.breadcrumbs ul li:last-child').show();
            jQuery('.breadcrumbs ul li:last-child').prev().show();

            }else{
                jQuery('.breadcrumbs ul li').show();
            }
        })
     }

    function menucategory(){

        jQuery('.sidebar.col-left-first .panel-body li .fa').click(function(){
            jQuery(this).next().slideToggle();
            jQuery(this).toggleClass('fa-minus');
        });
        if(jQuery('.category-item').hasClass('active-drop'))
        {
            jQuery('.category-item.active-drop > i').addClass('fa-minus');
            jQuery('.category-item.active-drop > ul').css('display','block');
        }
    };

    function closeContentcart(){

        jQuery('.tocart').click(function(){
            jQuery('.minicart-wrapper').toggleClass('active');
        });
    };

    function showmCustomScrollbar(){

        jQuery(".boxct-green-kingfisher .box-inner").mCustomScrollbar({
            scrollButtons:{
                enable:true
            }
        });
        
    };

    function showboxshareM(){

        jQuery('.menu-mobile .share-m').click(function(){

            jQuery('.nav-sections').css('top','-100%');
            jQuery(this).toggleClass('active');
            if (jQuery(this).hasClass('active')) {
                jQuery('.socialTop').addClass('show');
            }else{
                jQuery('.socialTop').removeClass('show');
            }
        });

    };

    function fixheightcolThree(i){

        var k1,k2,k3,k4;
        var ii=i+1;
        var iii=i+2;
        var vi=i+3;
        var maxHeight=0;
        var array=[];

            k1= jQuery(".products-grid li:eq("+ i +")").find('.product-home-info').height();
            k2= jQuery(".products-grid li:eq("+ ii +")").find('.product-home-info').height();
            k3= jQuery(".products-grid li:eq("+ iii +")").find('.product-home-info').height();
            k4= jQuery(".products-grid li:eq("+ vi +")").find('.product-home-info').height();
        
        array.push(k1);
        array.push(k2);
        array.push(k3);
        array.push(k4);

        for(var j=0;j<array.length-1;j++){
            
            if(array[j]>maxHeight){
                maxHeight=array[j];
            };

        }

       jQuery(".products-grid li:eq("+ i +")").find('.product-home-info').height(maxHeight);
       jQuery(".products-grid li:eq("+ ii +")").find('.product-home-info').height(maxHeight);
       jQuery(".products-grid li:eq("+ iii +")").find('.product-home-info').height(maxHeight);
       jQuery(".products-grid li:eq("+ vi +")").find('.product-home-info').height(maxHeight);
    
    };

    function setHeightP(){
        var itemcount=jQuery(".products-grid li").length-1;
        for(var i=0;i<(itemcount/4);i++){
            fixheightcolThree(i*4);
        }
    };

    function fixheightcolThreei(i){

            var k1,k2,k3,k4;

            var ii=i+1;
            var iii=i+2;
            var vi=i+3;

            var maxHeight=0;

                k1=jQuery(".products-grid li:eq("+ i +")").height();
                k2= jQuery(".products-grid li:eq("+ ii +")").height();
                k3= jQuery(".products-grid li:eq("+ iii +")").height();
                k4= jQuery(".products-grid li:eq("+ vi +")").height();
                
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

           jQuery(".products-grid li:eq("+ i +")").height(maxHeight);
           jQuery(".products-grid li:eq("+ ii +")").height(maxHeight);
           jQuery(".products-grid li:eq("+ iii +")").height(maxHeight);
           jQuery(".products-grid li:eq("+ vi +")").height(maxHeight);
            
    };

    function setHeightPi(){

        var itemcount=jQuery(".products-grid li").length;
        for(var i=0;i<(itemcount/4);i++){
            fixheightcolThreei(i*4);
        }
    };

    function clickShowMmobile(){
      
        jQuery(window).resize(function(){
            if(jQuery(this).width()<768){
                jQuery('.footer-title h4').bind('click',function(){
                    jQuery('.footer-title ul').stop().animate({'height':'0px','margin-bottom':'0px','margin-top':'0px'});
                    jQuery(this).next().stop().animate({'height':'100%','margin-bottom':'35px','margin-top':'15px'});
                });
            }else{
                jQuery('.footer-title h4').unbind('click'); 
            }     
        }).trigger('resize');

    };

    function clickTop(){


        jQuery(window).scroll(function() {

            if(jQuery(this).scrollTop()>=100){

                jQuery('#scroll-up').fadeIn();

            }else{
                jQuery('#scroll-up').fadeOut();
            }   
        });

        if(jQuery(window).width<768){

            jQuery(window).scroll(function() {

                if(jQuery(this).scrollTop()>=300){

                    jQuery('#scroll-up').fadeIn();

                }else{
                    jQuery('#scroll-up').fadeOut();
                }

            });
        }

        jQuery('#scroll-up a').click(function(){

            jQuery('body,html').animate({scrollTop: "0"}, "800");
            
        });

    }

    function removebackgorundli(){

        jQuery(".topmenu > ul > li").hover(function(){
            jQuery(this).prev().css("background", "none");
        },function(){

            if(jQuery(this).hasClass('active')){
                jQuery('.topmenu li.active').prev().css("background", "none");
            }else{
                jQuery(this).prev().css({"background":'url("/pub/media/images/line-menu-top.png")','background-repeat':'no-repeat','background-position':'103% 50%'});
            }

        });
        jQuery('.topmenu li.active').prev().css("background", "none");
        jQuery('.lishop-online').removeClass('last');

    };

    function tabsMobile(){

        var texttiletabs;
        jQuery('.ui-tabs-panel').wrapInner("<div class='block-tabs-inner'></div>");
        var lengthDiv=jQuery('.ui-tabs-panel').length;
        jQuery('.ui-tabs-panel').each(function(e){
            var number=e+1;
            texttiletabs=jQuery(".ui-tabs-nav li:nth-child("+ number +")").find('a').text();
            jQuery('<h3 class="title-tabs-mobile">'+texttiletabs+'</h3>').appendTo(this);
        });
        jQuery('.ui-tabs .ui-tabs-panel').eq(0).find('.block-tabs-inner').show();
        jQuery('.ui-tabs .ui-tabs-panel').eq(0).find('.block-tabs-inner').next().addClass('active');
        
        jQuery('.title-tabs-mobile').click(function(){

            jQuery('.ui-tabs .ui-tabs-panel .block-tabs-inner').slideUp();
            jQuery('.title-tabs-mobile').removeClass('active');
            jQuery(this).toggleClass('active');
            jQuery(this).prev().slideToggle();
            var divPos=jQuery(this).offset().top;
            jQuery('html,body').animate({scrollTop:300});
        });

        jQuery(window).on('resize',function(){

            if(jQuery(this).width()>768){
                jQuery('.ui-tabs .ui-tabs-panel .block-tabs-inner').show();
            }

        }).trigger('resize');
        
    };

    function freadmore(){

        jQuery('.readmore').click(function(){

            if (jQuery('.boxct-green-kingfisher .box-inner').hasClass('addreadmore')) {

                jQuery('.boxct-green-kingfisher .box-inner').removeClass('addreadmore');
                jQuery('.readmore').html('Read more');

            }else{

                jQuery('.boxct-green-kingfisher .box-inner').addClass('addreadmore');
                jQuery('.readmore').html('Read less');
                
            };
            
        });

    };

    function hoverbannerhome(){
        
        jQuery('.homepage-second-banner-image').hover(function(){
            jQuery(this).addClass('chhover');
        },function(){
            jQuery('.homepage-second-banner-image').removeClass('chhover');
        });

    }

    function scrollLogin(){

       jQuery('.header-register-dropdown').click(function(){

           if(jQuery('.header-register-dropdown').hasClass('show')){ 
                
                jQuery('.header-content-right-register ul').removeClass('_show');
                jQuery('.header-register-dropdown').removeClass('show');    
                

           }else{

                jQuery('.header-content-right-register ul').addClass('_show');
                jQuery('.header-register-dropdown').addClass('show'); 
           }

           jQuery('body').on('click',function(e){

            if(!jQuery(e.target).is('.header-register-dropdown *')){

               jQuery('.header-content-right-register ul').removeClass('_show');
                jQuery('.header-register-dropdown').removeClass('show');
            }

           });

       });

       jQuery('.header-register-dropdown-mobile').click(function(){

           if(jQuery('.header-register-dropdown-mobile').hasClass('show')){ 
                
                jQuery('.header-content-right-register-mobile ul').removeClass('_show');
                jQuery('.header-register-dropdown-mobile').removeClass('show');    
                

           }else{

                jQuery('.header-content-right-register-mobile ul').addClass('_show');
                jQuery('.header-register-dropdown-mobile').addClass('show'); 
           }

           jQuery('body').on('click',function(e){

            if(!jQuery(e.target).is('.header-register-dropdown-mobile *')){

               jQuery('.header-content-right-register-mobile ul').removeClass('_show');
                jQuery('.header-register-dropdown-mobile').removeClass('show');
            }

           });

       });

    
    };

    function addHeightF(){

        var  maxHeightF=0;
        jQuery('#feature-product-grid-home li').find('.product-item-info').each(function(){
            if(jQuery(this).height() > maxHeightF){
                maxHeightF=jQuery(this).height();    
            }

        });
        jQuery('#feature-product-grid-home .product-item-info').height(maxHeightF);       
    }

    function addHeightPV(){

        var  maxHeightFv=0;
        jQuery('#reviews-product-grid-home .product-item').find('.product-item-info').each(function(){
            
            if(jQuery(this).height() > maxHeightFv){
                maxHeightFv=jQuery(this).height();    
            }

        });
        jQuery('#reviews-product-grid-home .product-item .product-item-info').height(maxHeightFv);

    }

    function addHeightPVn(){

        var  maxHeightFvn=0;
         jQuery("#reviews-product-grid-home li").find('.product-item-name').each(function(){
            
            if(jQuery(this).height() > maxHeightFvn){
                maxHeightFvn=jQuery(this).height();    
            }

        });
        jQuery("#reviews-product-grid-home li").find('.product-item-name').height(maxHeightFvn);

    }
    
    function removeHref(){
        jQuery("table#multiship-addresses-table").parent().addClass('table-responsive');
        jQuery("table#my-reviews-table").wrap( '<div class="table-responsive"></div>');
        
    }



    function hide_orther_tapfor_review()
    {
        var url = window.location.href;
        var n = url.search("#review-form"); 
        if(n>=0){
            if(jQuery('#tab-label-product\\.info\\.description\\.detail').hasClass('active'))
            jQuery('#tab-label-product\\.info\\.description\\.detail').hide();
            jQuery('#product\\.info\\.description\\.detail').hide();
        }
    }


    function addTopFilter(){

        var lenghtfilterDiv=jQuery('.category-filter-left .filter-content').find('div').length;

        if(lenghtfilterDiv==2){
            jQuery('.catalog-category-view .category-filter-title').css('width','50%');
            jQuery('.catalog-category-view .category-filter-sbcolor').css({'margin-bottom':'0px','border-bottom':'none'});
            jQuery('.catalog-category-view .category-filter-sbbrand').css({'margin-bottom':'0px','border-bottom':'none'});    
        }
        else{
            if(lenghtfilterDiv==1){
                jQuery('.catalog-category-view .category-filter-title').css({'margin-bottom':'0px','border-bottom':'none','width':'100%'});
            }
        }
      

        jQuery(window).resize(function(){
            if(jQuery(window).width()<481){

                if(lenghtfilterDiv==2){
                    jQuery('.submenu-filter').css('top','92px'); 
                    jQuery('.catalog-category-view .category-filter-sbbrand').css({'margin-bottom':'0px','border-bottom':'none'});  
                    jQuery('.catalog-category-view .category-filter-sbcolor').css({'margin-bottom':'0px','border-bottom':'none'});  
                    jQuery('.catalog-category-view .category-filter-title').css('width','50%'); 
                }
                else{
                    if(lenghtfilterDiv==1){
                        jQuery('.submenu-filter').css('top','43px');
                        jQuery('.catalog-category-view .category-filter-title').css({'margin-bottom':'0px','border-bottom':'none','width':'100%'});
                    }
                }
            }
        }).trigger('resize');
    };




    var store=(function(){

        return {

            addPin:addPin,
            addDiv:addDiv,
            addWidth:addWidth,
            elevateweb:elevateweb,
            hoverMenu:hoverMenu,
            dropdownMenuMobile:dropdownMenuMobile,
            menucategory:menucategory,
            closeContentcart:closeContentcart,
            showmCustomScrollbar:showmCustomScrollbar,
            showboxshareM:showboxshareM,
            setHeightP:setHeightP,
            setHeightPi:setHeightPi,
            clickShowMmobile:clickShowMmobile,
            showMenuMobile:showMenuMobile,
            clickTop:clickTop,
            removebackgorundli:removebackgorundli,
            freadmore:freadmore,
            hoverbannerhome:hoverbannerhome,
            scrollLogin:scrollLogin,
            addHeightF:addHeightF,
            addHeightPV:addHeightPV,
            addHeightPVn:addHeightPVn,
            removeHref:removeHref,
            hide_orther_tapfor_review:hide_orther_tapfor_review,
            hiddenBreakcumbsMobile:hiddenBreakcumbsMobile,
            addTopFilter:addTopFilter
        };

    })();


    jQuery(document).ready(function() {

        
        store.addDiv();
        store.addWidth();
        store.elevateweb();
        store.menucategory();
        store.closeContentcart();
        store.showboxshareM();
        store.clickShowMmobile();
        store.showMenuMobile();
        store.clickTop();
        store.removebackgorundli();
        store.freadmore();
        store.hoverbannerhome();
        store.scrollLogin();
        store.addHeightF();
        store.addHeightPV();
        store.removeHref();
        store.hide_orther_tapfor_review();
        store.hiddenBreakcumbsMobile();
        store.addTopFilter();
    
    });

    jQuery(function(){

         var jRes = jRespond([{label: 'mobile',enter: 0,exit: 767},{label: 'tablet',enter: 768,exit: 990},{label: 'desktop',enter: 991,exit: 10000 }]);  
            jRes.addFunc({
                breakpoint: 'desktop',
                enter: function() {
                    jQuery('html').removeClass('desktop-k');
                   // store.setHeightP();
                    store.addHeightPVn();
                    store.addPin();
                },
                exit: function() {
                     jQuery('html').removeClass('desktop-k');
                     //store.setHeightP();
                     store.addHeightPVn();
                     store.addPin();
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
                
                   
                },
                exit: function() {
                   jQuery('html').addClass('desktop-k');
                   store.dropdownMenuMobile();

                } 
            });

    });
    

    jQuery(document).ready(function(){

        jQuery( "#country" ).addClass('selecter_1').wrap( "<div class='selectbox'></div>");
        jQuery('input[type="number"]').stepper();
        initSelecter();
        jQuery('input[type="checkbox"]').iCheck();
        jQuery('.radio').iCheck();
        ScrollToTopandShowMinicart();

        jQuery('.category-filter-left .col-xs-4').find('span,.fa').click(function(){
          
            var addclasst = jQuery(this).parent().attr('addclass');
            
            if(jQuery(this).parent().hasClass('activecolor')){

                jQuery(".category-filter-"+addclasst+"-dropdown").hide();
                jQuery(this).parent().removeClass('activecolor');
            }else{

                jQuery('.submenu-filter').hide();
                jQuery('.category-filter-left .col-xs-4').removeClass('activecolor');
                jQuery(".category-filter-"+addclasst+"-dropdown").show();
                jQuery(this).parent().addClass('activecolor');
            }
            
        });

        jQuery('.toolbar-sorter .select-box').click(function(){
            jQuery('.submenu-filter').hide();
        });
        
        //fix review link in product page
        if(jQuery('body').hasClass('catalog-product-view')){
            jQuery('.reviews-actions').click(function()
              {
            jQuery('#myTab-product > li').removeClass('active');
            jQuery('#tab-label-reviews').addClass('active');
            jQuery('#myTabContent-product > div').css('display','none');
            jQuery('#myTabContent-product > #reviews').css('display','block');

            });
        }


        jQuery("#flexisel-product").owlCarousel({

            items : 4,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,4],
            itemsTablet: [767,4],
            itemsTabletSmall: false,
            itemsMobile : [479,3],
            singleItem : false,
            itemsScaleUp : false,
            navigation : true,
            navigationText : ["",""],
            scrollPerPage : true,
            slideSpeed :1000,
            paginationSpeed : 800,
            rewindSpeed : 1000,
            autoPlay : false,
            stopOnHover : false,
        });

        

        jQuery("#box-laster").owlCarousel({

            items : 3,
            itemsCustom : false,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [600,1],
            singleItem : false,
            itemsScaleUp : false,
            navigation : true,
            navigationText : ["",""],
            scrollPerPage : true,
            slideSpeed :1000,
            paginationSpeed : 800,
            rewindSpeed : 1000,
            autoPlay : true,
            stopOnHover : false,
        });

        aply_bootstrap_for_feature_product();
        aply_bootstrap_for_reviews_product();

    });
});

function aply_bootstrap_for_feature_product(){

    jQuery("#feature-product-grid-home").owlCarousel({
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [600,1],
    singleItem : false,
    itemsScaleUp : false,
    navigation : true,
    navigationText : ["",""],
    scrollPerPage : true,
    slideSpeed :1000,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    autoPlay : true,
    stopOnHover : false,
    afterInit: function(elem){
        jQuery(elem).fadeIn();
    },
});
}

function aply_bootstrap_for_reviews_product(){

    jQuery("#reviews-product-grid-home").owlCarousel({
            items : 4,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [600,1],
            singleItem : false,
            itemsScaleUp : false,
            navigation : true,
            navigationText : ["",""],
            scrollPerPage : true,
            slideSpeed :1000,
            paginationSpeed : 800,
            rewindSpeed : 1000,
            autoPlay : true,
            stopOnHover : false,
    });
}

function initSelecter(){

    jQuery('select').selectpicker();
    
    jQuery('select').parent().removeClass('super-attribute-select');
    jQuery('select').on('DOMSubtreeModified',function(){
        jQuery(this).selectpicker('refresh');
        jQuery('select').parent().removeClass('super-attribute-select');
    });
    //Small fix for Firefox
    jQuery('select').on('change',function(){
        setTimeout(function(){
            jQuery('select').trigger('DOMSubtreeModified');
        },500);
    });
    
}

function move_checkout_loading(){
    //move loading checkout image to middle of page
    if (jQuery(".loading-mask")[0]){
    jQuery('.loading-mask').insertAfter('.page.messages' );
    //alert('done');
    }
}

//Show popup product feature
function showpopupproduct(productid){
//  cut popup content to outside element
    //remove old popup content
    remove_popup_content_after_out();
    var input = jQuery('.popup-product-'+productid+' input[type="number"]').removeClass('stepper-input');
    jQuery('.popup-product-'+productid+' .box-number').html(input);
    
    var html=jQuery('.popup-product-'+productid);
    html.clone().appendTo('.popup-product');
    jQuery('.popup-product input[type="number"]').stepper();

     
    jQuery('.popup-product-'+productid+' .btn.dropdown-toggle.btn-default').remove();
    jQuery('.popup-product-'+productid+' .dropdown-menu.open').remove();
    jQuery('.popup-product-'+productid+' .btn-group.bootstrap-select').removeClass();

    jQuery('select').selectpicker();
    //reload catalogAddToCart function for popup form cart
    jQuery("#popup-product-id form").catalogAddToCart();
    Quicklook_select_option_Onclick();
}

function remove_popup_content_after_out(){

    if(!jQuery('.show-popup-product').hasClass('in')){
    jQuery('.popup-product').html('');}

}
//trigger for finished add cart:scroll up and show minicart for 5s
function ScrollToTopandShowMinicart()
{
       jQuery(".btn.btn-green.action.tocart.primary").on('addcartscroll',function(){
        
        jQuery('body,html').animate({scrollTop: 0},1300);
        jQuery('.mage-dropdown-dialog').css('display','block');
        if(!jQuery('.block.block-minicart.empty.ui-dialog-content.ui-widget-content').hasClass('active')){

        setTimeout(function(){

            jQuery('.action.showcart.header-minicart').toggleClass('active');
            jQuery('.minicart-wrapper').toggleClass('active');
            jQuery('.mage-dropdown-dialog').css('display','none');
    
        },5000);
    };

    });
}