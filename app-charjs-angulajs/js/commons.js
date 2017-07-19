var costOfMeterData=0;
var costFuData=0;
var InstallationFbData=0;
var InstallationFuData=0;
var RevenueFbData=0;
var RevenueFuData=0;
var AdditionalFbData=0;
var AdditionalFuData=0;

var gtcostfpi,gtcost30Fbore=0;
var gtkqs1,gtkqs2=0;

var app = angular.module('MyNgApp', []);// khoi tao mot app
app.controller('Ctrl', function($scope) {// su kien duoc say ra trong controller

    $scope.lines = [{
        value:8,
        label: '8"',
        fh:7,//fh:Installation Time (Hours)// line26
        fw:258060,//fw:Water Loss Total Gallons line28
        fo:2,//fo:of Workers to Install // line11
        fwi:3,//fwi:# Workers to Install // line25
        fii:2,//fii:Installation Time (Hours)//line12
        fc:3500,//fc:Cost of Meter $ line18
        faf:26,//Additional Equipment Costs (flanges) line35
        fah:200,//Additional Equipment Costs (hoist/crane rental) line36
        fuc:0,//line 32
        fww:0.25806
    },{
        value:10,
        label: ' 10"',
        fh:7,
        fw:403260,
        fo:2,
        fwi:3,
        fii:2,
        fc:4100,
        faf:34,
        fah:200,
        fuc:0,//line 32
        fww:0.40326
    },{
        value:12,
        label: ' 12"',
        fh:7,
        fw:581460,
        fo:2,
        fwi:3,
        fii:2,
        fc:5000,
        faf:80,
        fah:200,
        fuc:0,//line 32
        fww:0.58146
    },{
        value:14,
        label: ' 14"',
        fh:7,
        fw:791340,
        fo:2,
        fwi:4,
        fii:2,
        fc:5700,
        faf:89,
        fah:200,
        fuc:0,//line 32
        fww:0.79134
    },{
        value:16,
        label: ' 16"',
        fh:7,
        fw:1033560,
        fo:2,
        fwi:4,
        fii:2,
        fc:6800,
        faf:94,
        fah:200,
        fuc:0,//line 32
        fww:1.03356
    },{
        value:18,
        label: ' 18"',
        fh:7,
        fw:1308120,
        fo:2,
        fwi:4,
        fii:2,
        fc:7750,
        faf:88,
        fah:200,
        fuc:0,//line 32
        fww:1.30812
    },{
        value:20,
        label: ' 20"',
        fh:7,
        fw:1615020,
        fo:2,
        fwi:4,
        fii:2,
        fc:9950,
        faf:252,
        fah:200,
        fuc:0,//line 32
        fww:1.61502
    },{
        value:22,
        label: ' 22"',
        fh:7,
        fw:1980000,
        fo:2,
        fwi:4,
        fii:2,
        fc:10188,
        faf:284,
        fah:200,
        fuc:0,//line 32
        fww:1.98
    },{
        value:24,
        label: ' 24"',
        fh:8,
        fw:2749500,
        fo:2,
        fwi:4,
        fii:2,
        fc:10875,
        faf:316,
        fah:800,
        fuc:0,//line 32
        fww:2.7495
    },{
        value:30,
        label: ' 30"',
        fh:8,
        fw:4295460,
        fo:2,
        fwi:5,
        fii:2,
        fc:16875,
        faf:420,
        fah:800,
        fuc:0,//line 32
        fww:4.29546

    },{
        value:36,
        label: ' 36"',
        fh:8,
        fw:5939087.8048164,
        fo:2,
        fwi:5,
        fii:2,
        fc:20250,
        faf:504,
        fah:800,
        fuc:0,//line 32
        fww:5.9390878048164
    },{
        value:42,
        label: ' 42"',
        fh:8,
        fw:9431051.46783345,
        fo:2,
        fwi:5,
        fii:2,
        fc:23625,
        faf:588,
        fah:800,
        fuc:0,//line 32
        fww:9.43105146783345
    },{
        value:48,
        label: ' 48"',
        fh:8,
        fw:14077837.7595648,
        fo:3,
        fwi:5,
        fii:2,
        fc:25500,
        faf:672,
        fah:800,
        fuc:0,//line 32
        fww:14.0778377595648
    },{
        value:54,
        label: ' 54"',
        fh:10,
        fw:24670057.0353912,
        fo:3,
        fwi:5,
        fii:2,
        fc:28687,
        faf:756,
        fah:3000,
        fuc:0,//line 32
        fww:24.6700570353912
    },{
        value:60,
        label: ' 60"',
        fh:10,
        fw:33840956.1528,
        fo:3,
        fwi:5,
        fii:2,
        fc:31875,
        faf:840,
        fah:3000,
        fuc:25000,//line 32
        fww:33.8409561528
    },{
        value:66,
        label: ' 66"',
        fh:10,
        fw:45042312.6393768,
        fo:3,
        fwi:5,
        fii:2,
        fc:35062,
        faf:924,
        fah:3000,
        fuc:30000,//line 32
        fww:45.0423126393768
    },{
        value:72,
        label: ' 72"',
        fh:10,
        fw:58477172.2320384,
        fo:3,
        fwi:5,
        fii:2,
        fc:38250,
        faf:1.008,
        fah:3000,
        fuc:35000,//line 32
        fww:58.4771722320384
    },{
        value:78,
        label: ' 78"',
        fh:10,
        fw:74348580.6677016,
        fo:3,
        fwi:5,
        fii:3,
        fc:39000,
        faf:1.092,
        fah:3000,
        fuc:40000,//line 32
        fww:74.3485806677016
    },{
        value:84,
        label: ' 84"',
        fh:12,
        fw:104467031.643694,
        fo:3,
        fwi:5,
        fii:3,
        fc:42000,
        faf:1.176,
        fah:5000,
        fuc:50000,//line 32
        fww:104.467031643694
    },{
        value:90,
        label: ' 90"',
        fh:12,
        fw:128489880.392662,
        fo:3,
        fwi:5,
        fii:3,
        fc:45000,
        faf:1.26,
        fah:5000,
        fuc:0,//line 32
        fww:128.489880392662

    },{
        value:96,
        label: ' 96"',
        fh:12,
        fw:155939125.952102,
        fo:3,
        fwi:5,
        fii:3,
        fc:48000,
        faf:1.344,
        fah:5000,
        fuc:0,//line 32
        fww:155.939125952102

    },{
        value:102,
        label: '102"',
        fh:12,
        fw:187043194.776045,
        fo:3,
        fwi:6,
        fii:4,
        fc:51000,
        faf:1.428,
        fah:5000,
        fuc:0,//line 32
        fww:187.043194776045
    },{
        value:108,
        label: '108"',
        fh:12,
        fw:222030513.318521,
        fo:3,
        fwi:6,
        fii:4,
        fc:51840,
        faf:1.512,
        fah:5000,
        fuc:0,//line 32
        fww:222.030513318521
    },{
        value:114,
        label: '114"',
        fh:12,
        fw:261129508.033562,
        fo:3,
        fwi:6,
        fii:4,
        fc:54720,
        faf:1.596,
        fah:5000,
        fuc:0,//line 32
        fww:261.129508033562
    },{
        value:120,
        label: '120"',
        fh:14,
        fw:338409561.528,
        fo:3,
        fwi:6,
        fii:4,
        fc:57600,
        faf:1.680,
        fah:5000,
        fuc:0,//line 32
        fww:338.409561528
    },{
        value:126,
        label: '126"',
        fh:0,
        fw:0,
        fo:3,
        fwi:0,
        fii:4,
        fc:60480,
        faf:0,
        fah:0,
        fuc:0,//line 32
        fww:0
    },{
        value:132,
        label: '132"',
        fh:0,
        fw:0,
        fo:3,
        fwi:0,
        fii:4,
        fc:63360,
        faf:0,
        fah:0,
        fuc:0,//line 32
        fww:0
    },{
        value:138,
        label: '138"',
        fh:0,
        fw:0,
        fo:3,
        fwi:0,
        fii:4,
        fc:66240,
        faf:0,
        fah:0,
        fuc:0,//line 32
        fww:'Not Available'
    }];

    $scope.lineList = $scope.lines[8];// selected

	
	
    $scope.labors = [{
        value: 20,
        label: '$ 20.00',
        dola:'$'
    }, {
        value: 30,
        label: '$ 30.00',
        dola:'$'
    }, {
        value: 40,
        label: '$ 40.00',
        dola:'$'
    }, {
        value: 50,
        label: '$ 50.00'
    }, {
        value: 60,
        label: '$ 60.00',
        dola:'$'
    }, {
        value: 70,
        label: '$ 70.00',
        dola:'$'
    }, {
        value: 80,
        label: '$ 80.00'
    }, {
        value: 90,
        label: '$ 90.00',
        dola:'$'
    }, {
        value: 100,
        label: '$100.00',
        dola:'$'
    }];
    $scope.laborList = $scope.labors[3];// selected

    $scope.gallons = [{
        value: 1,
        label: '$1.00'
    }, {
        value: 1.5,
        label: '$1.50'
    }, {
        value: 2,
        label: '$2.00'
    }, {
        value: 2.5,
        label: '$2.50'
    }, {
        value: 3,
        label: '$3.00'
    }, {
        value: 3.5,
        label: '$3.50'
    }, {
        value: 4,
        label: '$4.00'
    }, {
        value: 4.5,
        label: '$4.50'
    }, {
        value: 5,
        label: '$5.00'
    }];
    $scope.gallonList = $scope.gallons[3];// selected

    startCalculate();

    $scope.selectedlaborcosts=function(gtlaborcosts){
        startCalculate();
    }
    $scope.selectedwater = function(gtwater) {
        startCalculate();
    }

    $scope.selectedlinesize = function(gtlinesize) {

        startCalculate();   

    }//end  line-size

    function startCalculate()
    {
        caculatorchars();
        charMc();
        clock_show();

    }

    function clock_show(){
        var num=0;
        var k=0;
        var array=['-24px 0px','-48px 0px','-71px 0px','-95px 0px','-71px 0px'];
        setInterval(function(){
            $('.clock').css('background-position',array[num] );
            num++;
            if(num==array.length){
                if(k==0){
                    return false;
                }
                k=k+1;
                num=0;
            }
        },300)
    }
    function caculatorchars(){
        $scope.costOfMeter = $scope.lineList.fc;
        costOfMeterData =  $scope.costOfMeter;//line18


        if($scope.lineList.value<30){
            $scope.costFu = Math.ceil($scope.lineList.value*325);
        }
        else{
            if($scope.lineList.value<48){
                $scope.costFu = Math.ceil($scope.lineList.value*350);
            }
            else{
                if($scope.lineList.value==48||$scope.lineList.value==54){
                    $scope.costFu = Math.ceil($scope.lineList.value*375);
                }
                else{
                    if($scope.lineList.value<90){
                        $scope.costFu = $scope.lineList.fuc;
                    }
                    else{
                        if($scope.lineList.value<126){
                            $scope.costFu = Math.ceil($scope.lineList.value*600);
                        }
                        else{
                            $scope.costFu=0;
                        }

                    }
                }

            }//end < 48
        }//end < 30

        costFuData =  $scope.costFu;//line32

        $scope.InstallationFb = Math.ceil($scope.lineList.fii*$scope.lineList.fo*($scope.laborList.value));//=B12*B11*$B3
        InstallationFbData =  $scope.InstallationFb;//line19

         if($scope.lineList.value>120){
             $scope.InstallationFu=0;
         }
        else{
             $scope.InstallationFu = Math.ceil($scope.lineList.fwi*$scope.lineList.fh*($scope.laborList.value));//=B26*B25*$B3
         }
        InstallationFuData =  $scope.InstallationFu;//line33



        RevenueFbData = 0;//line20

        if($scope.lineList.value<54){
            $scope.RevenueFu = Math.ceil($scope.lineList.fw*$scope.gallonList.value)/1000;//=(B28/1000)*$B4

        }
        else{

            if($scope.lineList.value==54 || $scope.lineList.value==60){
                $scope.RevenueFu =50000;//=(B28/1000)*$B4

            }
            else{
                if($scope.lineList.value<126){
                    $scope.RevenueFu = 100000;//=(B28/1000)*$B4

                }
                else{
                        $scope.RevenueFu = 0;//=(B28/1000)*$B4
                }

            }
        }
        RevenueFuData =  $scope.RevenueFu;//line34

        AdditionalFbData = 800;//line21

        if($scope.lineList.value<30){
            $scope.AdditionalFu = Math.ceil($scope.lineList.faf+$scope.lineList.fah);
        }
        else{
            if($scope.lineList.value<126){
                $scope.AdditionalFu = Math.ceil($scope.lineList.value*7*2+$scope.lineList.fah);
            }
            else{
                $scope.AdditionalFu=0;
            }
        }
        AdditionalFuData =  $scope.AdditionalFu;//line37

        //caculator you save
        $scope.timefpi=$scope.lineList.fii;
        $scope.timefull=$scope.lineList.fh;
        $scope.Waterfull=Math.round(($scope.lineList.fww)*10)/10;// lam tron len so 1 so thap phan
       // $scope.Waterfull=($scope.lineList.fww);
        if($scope.lineList.value<54){
            $scope.Revenuefull=Math.ceil($scope.lineList.fw*$scope.gallonList.value)/1000;//=(B28/1000)*$B4
        }
        else{

            if($scope.lineList.value==54 || $scope.lineList.value==60){
                $scope.Revenuefull =50000;//=(B28/1000)*$B4
            }
            else{
                if($scope.lineList.value<126){
                    $scope.Revenuefull = 100000;//=(B28/1000)*$B4
                }
                else{
                    $scope.Revenuefull = 0;//=(B28/1000)*$B4
                }
            }
        }

        //2 gia tri can tinh tong
        gtcostfpi=Math.round(costOfMeterData+InstallationFbData+RevenueFbData+AdditionalFbData);
        gtcost30Fbore=Math.round(costFuData+InstallationFuData+RevenueFuData+AdditionalFuData);
        //console.log(gtcost30Fbore);
        $scope.costfpi=gtcostfpi;
        $scope.cost30Fbore=gtcost30Fbore;
        $scope.result=Math.ceil(gtcost30Fbore-gtcostfpi);// co gang su dung bien tam de luu gia tri khong goi tu html
    }
    caculatorchars();

    $scope.imgclick=function(){
        selectedlinesize($scope.lineList.value);
    }

})

app.controller('Ctrlchar', function($scope) {
    $('.content .left ul li.one').click(function(){
        $('.vs').show();
        $('.costchart').hide();
        var heightsw=$('#container').height();
        $('#container').fadeIn();
        $('.content .left ul li').removeClass('active');
        $(this).addClass('active');
		charMc();
    })
    $('.content .left ul li.two').click(function(){
        $('.vs').hide();
        $('.costchart').hide();
        var heights=$('.tablechar').height();
        $('.tablechar').fadeIn();
        $('.content .left ul li').removeClass('active');
        $(this).addClass('active');
		charMc();
    })


})

function charMc(){

    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },

        xAxis: {
            categories: ['','']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            // stackLabels: {
            //     enabled: true,
            //     style: {
            //         fontWeight: 'bold',
            //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            //     }
            // },
            labels: {
                        formatter: function() {
                            var value = '$'+numeral(this.value).format('0,0');
                            return value;
                        },
                style:{color: '#19648F'}
            },
            series: {
                borderWidth: 2,stroke:1
            }
        },
        legend: {
            align: 'right',
            x: -80,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            backgroundColor: '#f3f3f3',
            //borderColor: '#19648f',
            boxShadowX:'70px #b5b5b5',
            boxShadowY:'70px #b5b5b5',
            boxShadowBlur:'-60px #b5b5b5',
            borderRadius:0,
            borderWidth: 2,
            formatter: function() {
                return this.series.name +'$'+ numeral(this.y).format('0,0'); +'<br/>'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,//true hien so tren cot false nguoc lai
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
            ,
            series: {
                shadow: false,borderWidth: 0,pointWidth: 42,stroke:0
            }
        },
        series: [{
            name: 'Cost of Meter = ',
            data: [costOfMeterData, costFuData]
        }, {
            name: 'Installation Labor = ',
            data: [InstallationFbData, InstallationFuData]
        }, {
            name: 'Revenue Loss =',
            data: [RevenueFbData, RevenueFuData]
        },{
            name: 'Additional Costs = ',
            data: [AdditionalFbData, AdditionalFuData]
        }]
    });
}
$(function () {
    charMc();
    styletable();
    
});

function styletable(){
    $('.tablechar').find('table tr:odd').css({'background':'#f2f2f2'});
    $('.tablechar').find('table tr:even').css({'background':'#fff'});
}

var close_dropprofile=function(){
    setTimeout(function(){
        $('.overlays').remove();
    },500);
    $('.formcontactus').animate({'top':'-73%'},400);
	contactMail.initFormContact();
}



/*
var gtline24= $('.costfpi').html();
var gtline25=$('.CostFu').html();
costFuData  = parseInt(gtline25.split("$")[0]);
var gtline26=$('.InstallationFb').html();
InstallationFbData  = parseInt(gtline26.split("$")[0]);

var gtline28=$('.InstallationFu').html();
InstallationFuData  = parseInt(gtline28.split("$")[0]);

var gtline29=$('.RevenueFb').html();
RevenueFbData  = parseInt(gtline29.split("$")[0]);

var gtline30=$('.RevenueFu').html();
RevenueFuData  = parseInt(gtline30.split("$")[0]);

var gtline31=$('.AdditionalFb').html();
AdditionalFbData  = parseInt(gtline31.split("$")[0]);

var gtline32=$('.AdditionalFu').html();
AdditionalFuData  = parseInt(gtline32.split("$")[0]);


$(function(){

    //console.log($('#labor option').val());

})
*/


//http://pablojim.github.io/highcharts-ng/examples/example.html
//http://www.mikitamanko.com/blog/2014/02/11/validation-in-angular-js-ng-repeat/
//https://www.google.com.vn/#q=ng-if+in+ng-model
//http://docs.angularjs.org/api/ng/filter/number
//<img src="images/iconselectbox.png" ng-model="lineList" ng-change="selectedlinesize(lineList.value)" ng-click="imgclick()"/>
//http://numeraljs.com/
/*
 $('select').next().click(function(e){
 var numberoption=$(this).prev().fiind('option').length;
 e.preventDefault();
 $(this).prev().attr ('size',numberoption);
 });
 $('select').click(function(){
    $(this).attr("size",1);
 });
 $(document).on('click', function (event) {

 if(!$(event.target).is('.imgselect'))
 {
    $('select').attr("size",0);
 }

 })
 */