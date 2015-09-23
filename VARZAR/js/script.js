jQuery(document).ready(function($){
  $("#ShowBlueContact").mouseover(function(event){
    $(".bluecontact").show('slow')
  });
});

jQuery(document).ready(function($){
  $("#ShowRedContact").mouseover(function(event){
    $(".redcontact").show('slow')
  });
});


jQuery(document).ready(function($){
  $(window).scroll(function(event){
    var pix = $(window).scrollTop();
    if(+pix >= 150 && +pix < 1130){
      $(".orange__smallicon-1").addClass("Scroll1");
      $(".orange__smallicon-2").addClass("Scroll2");
      $(".orange__smallicon-3").addClass("Scroll3");
      $(".orange__smallicon-4").addClass("Scroll4");
      $(".orange__smallicon-5").addClass("Scroll5");
      $(".orange__smallicon-6").addClass("Scroll6");
    }
    else if(+pix >= 1130 && +pix < 2130){
      $(".blue__smallicon-1").addClass("Scroll1");
      $(".blue__smallicon-2").addClass("Scroll2");
      $(".blue__smallicon-3").addClass("Scroll3");
      $(".blue__smallicon-4").addClass("Scroll4");
      $(".blue__smallicon-5").addClass("Scroll5");
      $(".blue__smallicon-6").addClass("Scroll6");
    }
    else if(+pix > 2130){
      $(".red__smallicon-1").addClass("Scroll1");
      $(".red__smallicon-2").addClass("Scroll2");
      $(".red__smallicon-3").addClass("Scroll3");
      $(".red__smallicon-4").addClass("Scroll4");
      $(".red__smallicon-5").addClass("Scroll5");
      $(".red__smallicon-6").addClass("Scroll6");
    };
  });
});

//
// $( document ).on('mouseenter', '[class*="smallicon"], [class*="describe"], [class*="heading3"]', function( event ) {
//   var $this = $(event.target);
//   var ThisClass = $this.attr('class');
//   var coloring = ThisClass.substring(0,3);
//   var i = ThisClass.slice(-1);
//   if (coloring == "ora") {
//     $(".orange__heading3-"+i).css({'font-weight' : 'bold'});
//   }
//   else if (coloring == "blu") {
//     alert("blue");
//   }
//   else {
//     alert("red");
//   }
//
//
//   var icon = ThisClass.substring(8,17);
//   var descr =  ThisClass.substring(8,16);
//   var heading =  ThisClass.substring(8,16);
// });
//
// $( document ).on('mouseover', '[class*="smallicon"], [class*="describe"], [class*="heading3"]', function( event ) {
//   var $this = $(event.target);
//   var ThisClass = $this.attr('class');
//   var coloring = ThisClass.substring(0,3);
//   var i = ThisClass.slice(-1);
//   if (coloring == "ora") {
//     $(".orange__heading3-"+i).css({'font-weight' : 'bold'});
//   }
//   else if (coloring == "blu") {
//     alert("blue");
//   }
//   else {
//     alert("red");
//   }
//
//
//   var icon = ThisClass.substring(8,17);
//   var descr =  ThisClass.substring(8,16);
//   var heading =  ThisClass.substring(8,16);
// });
//
//
//
//






// ЧТО_ТО ОЧЕНЬ УМНОЕ, РАЗОБРАТЬСЯ
// $( document ).on('mouseenter', '[class*="smallicon"], [class*="describe"], [class*="heading3"]', function( event ) {
//   var $this = $(event.target);
//   return AllHovers( $this.attr('class') );
// });
//
//
//
// jQuery(document).ready(function AllHovers(a){
//   alert(a);
// });




// ИРА МОЛОДЕЦ, но ход мыслей неверный
// jQuery(document).ready(function($){
//   $("*").hover(function(event){
//   var n = $(this).attr("class");
//   var icon = n.substring(8,17);
//   var descr =  n.substring(8,16);
//   var heading =  n.substring(8,16);
//   // alert(icon + " " + descr + " " + heading + " " + n);
//   if (icon == "smallicon" || descr == "describe" || heading == "heading3") {
//     alert("cool!" + " " + n);
//   }
//   });
// });







// НЕ РАБОТАЕТ
// jQuery(document).ready(function($){
//   if (($("div.orange__smallicon-1").hover) || ($("div.orange__list-1").hover) || ($("div.orange__describe-1").hover)){
//     (function(event){
//       $(".orange__heading3-1").css({'font-weight' : 'bold'});
//       $(".orange__smallicon-1").addClass("orange__smallicon-1hover");
//       $("div.orange__list-1").css({'background-color' : 'red'});
//     }, (function(event){
//       $(".orange__heading3-1").css({'font-weight' : 'normal'});
//       $(".orange__smallicon-1").addClass("orange__smallicon-1hover");
//       $("div.orange__list-1").css({'background-color' : 'green'});
//   });
// });








// РАБОТАЮТ ДЛЯ ЧАСТНОГО СЛУЧАЯ


// jQuery(document).ready(function($){
//   $("div.orange__smallicon-1").hover(function(event){
//     $(".orange__heading3-1").css({'font-weight' : 'bold'});
//   }, function(){
//     $(".orange__heading3-1").css({'font-weight' : 'normal'});
//   });
// });
//
//
//
// jQuery(document).ready(function($){
//   $(".orange__describe-1").hover(function(event){
//     $(".orange__smallicon-1").addClass("orange__smallicon-1hover");
//   }, function(){
//     $(".orange__smallicon-1").removeClass("orange__smallicon-1hover");
//   });
// });
