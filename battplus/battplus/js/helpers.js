/****************************************************************************************
Description: Functions
*****************************************************************************************/
///arrObj.sortBy("LastName", "FirstName", "-Age")
Array.prototype.sortBy = function() {
    function _sortByAttr(attr) {
        var sortOrder = 1;
        if (attr[0] == "-") {
            sortOrder = -1;
            attr = attr.substr(1);
        }
        return function(a, b) {
            var result = (a[attr] < b[attr]) ? -1 : (a[attr] > b[attr]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    function _getSortFunc() {
        if (arguments.length == 0) {
            throw "Zero length arguments not allowed for Array.sortBy()";
        }
        var args = arguments;
        return function(a, b) {
            for (var result = 0, i = 0; result == 0 && i < args.length; i++) {
                result = _sortByAttr(args[i])(a, b);
            }
            return result;
        }
    }
    return this.sort(_getSortFunc.apply(null, arguments));
}

Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

function scrollTo(val, speed){
    TweenMax.to($('html,body'),speed,{scrollTop:val});
}

function rgbToHex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function hexToRgb(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

/****************************************************************************************
Description: Tính độ rộng màn hình
*****************************************************************************************/

function debugLog(args){
    //console.log(args);
}

/****************************************************************************************
Description: Tính độ rộng màn hình
*****************************************************************************************/
function debugScreen(){
    var docW = $(document).width();
    $("#debug").text("").text(docW);
}

/****************************************************************************************
Description: Co giãn chiều rộng/cao theo tỉ lệ
param:
    srcWidth (number): 
    srcHeight (number):
    maxWidth (number):
    maxHeight (number):
*****************************************************************************************/

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth*ratio, height: srcHeight*ratio };
}

/****************************************************************************************
Description: Kiểm tra flash player trên máy
*****************************************************************************************/

function checkFlashInstalled(a,b){
    try{
        a=new ActiveXObject(a+b+'.'+a+b)
    }
    catch(e){
        a=navigator.plugins[a+' '+b]
    }
    return!!a;
}('Shockwave','Flash');

//

function checkIeVersion(version) {
    var val = false;
    switch (version) {
    case 7:
        val = /MSIE 7/.test(navigator.userAgent);
        break;
    case 8:
        val = /MSIE 8/.test(navigator.userAgent);
        break;
    case 9:
        val = /MSIE 9/.test(navigator.userAgent);
        break;
    case 10:
        val = /MSIE 10/.test(navigator.userAgent);
        break;
    case 11:
        val = /rv:11/.test(navigator.userAgent);
        break;
    }
    return val;
}
/****************************************************************************************
Description: Phát hiện và phân biệt trình duyệt (html class="brower name")
*****************************************************************************************/
function browserDetect() {

    var isExplorer = (navigator.userAgent.indexOf('MSIE') || navigator.userAgent.indexOf('rv:11')) > -1,
        isFirefox = navigator.userAgent.indexOf('Firefox') > -1,
        isSafari = navigator.userAgent.indexOf("Safari") > -1,
        isChrome = navigator.userAgent.indexOf('Chrome') > -1,
        isOpera = navigator.userAgent.indexOf("OPR") > -1,
        isMac = navigator.userAgent.indexOf('Mac OS') > -1;

    if (isMac && isFirefox) {
        $('html').addClass('macFirefox');
    }
    if (isMac && isChrome) {
        $('html').addClass('macChrome');
    }
    if (isExplorer) {
        $('html').addClass('allIe');
    }
    if (isFirefox) {
        $('html').addClass('firefox');
    }
    if (isChrome && isSafari && !isOpera) {
        $('html').addClass('chrome');
    }
    if (!isChrome && isSafari) {
        $('html').addClass('safari');
    }
    if (isOpera) {
        $('html').addClass('opera');
    }
    if (checkIeVersion(7)) {
        $('html').addClass('ie7');
    }
    if (checkIeVersion(8)) {
        $('html').addClass('ie8');
    }
    if (checkIeVersion(9)) {
        $('html').addClass('ie9');
    }
    if (checkIeVersion(10)) {
        $('html').addClass('ie10');
    }
    if (checkIeVersion(11)) {
        $('html').addClass('ie11');
    }
}

/****************************************************************************************
Description: Tạo cookie
param:
    name (string): key
    value (string): Giá trị
    minuteExpires (number): Thời gian tồn tại
*****************************************************************************************/

function setCookie(name, value, minuteExpires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());
    if (minuteExpires) {
        minuteExpires = minuteExpires * 1000 * 60;
    }
    var expiresDate = new Date(today.getTime() + (minuteExpires));
    document.cookie = name + '=' + escape(value) +
        ((minuteExpires) ? ';expires=' + expiresDate.toGMTString() : '') +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
}
/****************************************************************************************
Description: Lấy thông tin cookie
param:
    name (string): key
*****************************************************************************************/
function getCookie(name) {
    var start = document.cookie.indexOf(name + "=");
    var len = start + name.length + 1;
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return null;
    }
    if (start == -1) return null;
    var end = document.cookie.indexOf(';', len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len, end));
}
/****************************************************************************************
Description: Xóa cookie
param:
    name (string): key,
    path (string): path,
    domain (string): domain,
*****************************************************************************************/
function deleteCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + '=' +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
/****************************************************************************************
Description: Lấy chiều rộng và chiều cao nội dung trang
*****************************************************************************************/
function getDocumentSize(){
    return [Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)];
}
/****************************************************************************************
Description: Lấy chiều rộng và chiều cao cửa sổ trình duyệt
*****************************************************************************************/
function getWindowSize() {
    var myWidth = 0,
        myHeight = 0;
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [myWidth, myHeight];
}

/// Nhúng link youtube vào webiste
function embedYoutube(link, options) {
    var o = $.extend({
        width: 480,
        height: 320,
        params: ''
    }, options);
    var id = /\?v\=(\w+)/.exec(link)[1];
    return '<iframe style="visibility:hidden;" onload="this.style.visibility=\'visible\';" class="youtube-video" type="text/html" width="' + o.width + '" height="' + o.height + ' "src="http://www.youtube.com/embed/' + id + '?' + o.params + '&amp;wmode=transparent" frameborder="0" />';
}

/// Giới hạn số từ hiển thị
function limitWords(text, nWords) {
    var words = text.split(' ');
    words.splice(nWords, words.length - 1);
    return words.join(' ') + (words.length !== text.split(' ').length ? '...' : '');
}

/// Tạo số ngẫu nhiêu giữa 2 giá trị cho trước
function RandomRangeFloat(min, max) {
    return Math.random() * (max - min) + min;
};

/// Tạo số ngẫu nhiêu giữa 2 giá trị cho trước
function RandomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

/// Convert sang số nguyên
function parseIntEx(value) {
    var num = isNaN(parseInt(value)) ? 0 : parseInt(value);
    return num;
}

/// Convert sang số thực
function parseFloatEx(value) {
    var num = isNaN(value) ? 0 : value;
    return num;
}

/// Lấy querystring url
function getQueryString(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
};

/****************************************************************************************
Description: String.format
param:
    text: dữ liệu
*****************************************************************************************/

String.format = function(text) {
    if (arguments.length <= 1) return text;
    var tokenCount = arguments.length - 2;
    for (var token = 0; token <= tokenCount; token++)
        text = text.replace(new RegExp( "\\{" + token + "\\}", "gi"), arguments[token + 1]);
    return text;
};

var ie8=/msie 8.0/.test(navigator.userAgent.toLowerCase());

$(function(){

    var $window = $(window).on('resize', function(){    
    var w = $(this).width();
      if(ie8){
        if(w < 1028){
            $('html').addClass('ie81024');
        }else{
            $('html').removeClass('ie81024');
        }
      }
    }).trigger('resize');
    

});


(function(){

    $('.bgradio').click(function(){

        var gtindex=$(this).attr('index');
        $(".group-"+gtindex+" .bgradio").find("input").prop('checked', false);
        $('.group-'+gtindex+' .bgradio').removeClass('activeradio');
        $(this).find('input').prop('checked', true);
        $(this).addClass('activeradio');
        
    });

}());

(function(){

    function mobilecheck() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return false;
        }
        return true;
    }
    
    var o = $('body');
    $(window).setBreakpoints();
    if (o.hasClass('desktop')) {
        $(document).ready(function () {  
            $.srSmoothscroll({
                step:200,
                speed: 800
            });
        });
    }
    $(window).load(function () {
        if(!ie8){
            if (mobilecheck()) 
            new WOW().init();
        }
        
    });

}());

$(document).ready(function() {
    browserDetect();      
});


