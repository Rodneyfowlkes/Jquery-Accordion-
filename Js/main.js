

 $(".tog1").click(function(){
$(this).addClass("change-color");
$(".div1").toggleClass("change-height").toggleClass("change-text");

 });


var div2height = $(".div2").height();
 $(".div2").css("height", div2height );
var div2_h_num = Number(div2height);

 $(".tog2").click(function(){

$(this).addClass("change-color");
$(".div2").toggleClass("change-height").toggleClass("change-text");

if (div2height = 0) {
	$(".div2").css("height", "126" );} else {
		$(".div2").removeAttr( 'style' ); 
  }
 
 });





 $(".tog3").click(function(){
$(this).addClass("change-color");
$(".div3").toggleClass("change-height").toggleClass("change-text");

 });




// $(".div2").hover(function(){
// $(this).addClass("change-text");
//  });
//  