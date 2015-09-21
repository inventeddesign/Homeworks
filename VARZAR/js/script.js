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
  $(window).click(function(){
    var pix = $(window).scrollTop();
    alert(pix);
    });
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
