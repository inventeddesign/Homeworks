jQuery(document).ready(function($){

  $("#ShowBlueContact").mouseover(function(event){
    $(".bluecontact").show('slow');
  });

  $("#ShowRedContact").mouseover(function(event){
    $(".redcontact").show('slow');
  });


  $(window).scroll(function(event){
    var pix = $(window).scrollTop();
    var WindowWidth = $(window).width();
    if (+WindowWidth > 1000) {
      if(+pix >= 130 && +pix < 900){
        $(".orange__smallicon-1").addClass("Scroll1");
        $(".orange__smallicon-2").addClass("Scroll2");
        $(".orange__smallicon-3").addClass("Scroll3");
        $(".orange__smallicon-4").addClass("Scroll4");
        $(".orange__smallicon-5").addClass("Scroll5");
        $(".orange__smallicon-6").addClass("Scroll6");
        $("[class*=orange__list]").show('slow');
        $("[class*=orange__heading3]").show('slow');
        $("[class*=orange__describe-]").show('slow');
      }
      else if(+pix > 900 && +pix < 1900){
        $(".blue__smallicon-1").addClass("Scroll1");
        $(".blue__smallicon-2").addClass("Scroll2");
        $(".blue__smallicon-3").addClass("Scroll3");
        $(".blue__smallicon-4").addClass("Scroll4");
        $(".blue__smallicon-5").addClass("Scroll5");
        $(".blue__smallicon-6").addClass("Scroll6");
        $("[class*=blue__list]").show('slow');
        $("[class*=blue__heading3]").show('slow');
        $("[class*=blue__describe-]").show('slow');
        }
      else if(+pix > 1900){
        $(".red__smallicon-1").addClass("Scroll1");
        $(".red__smallicon-2").addClass("Scroll2");
        $(".red__smallicon-3").addClass("Scroll3");
        $(".red__smallicon-4").addClass("Scroll4");
        $(".red__smallicon-5").addClass("Scroll5");
        $(".red__smallicon-6").addClass("Scroll6");
        $("[class*=red__list]").show('slow');
        $("[class*=red__heading3]").show('slow');
        $("[class*=red__describe-]").show('slow');
      };
    };
  });

  $(document).on('mouseenter', '[class*="smallicon"], [class*="describe"], [class*="heading3"]', function( event ) {
    var $this = $(event.target);
    var ThisClass = $this.attr('class');
    var coloring = ThisClass.substring(0,3);
    var i = ThisClass.slice(-1);

    if (coloring == "ora") {
      $(".orange__heading3-" + i).css({'font-weight' : 'bold'})
      $(".orange__describe-" + i).css({'background-color' : '#f9e1cc'})
      $(".orange__smallicon-" + i).addClass("orange__smallicon-hover" + i);
    }
    else if (coloring == "blu") {
      $(".blue__heading3-" + i).css({'font-weight' : 'bold'})
      $(".blue__describe-" + i).css({'background-color' : '#bee4e3'})
      $(".blue__smallicon-" + i).addClass("blue__smallicon-hover" + i);
    }
    else {
      $(".red__heading3-" + i).css({'font-weight' : 'bold'})
      $(".red__describe-" + i).css({'background-color' : '#fccdc2'})
      $(".red__smallicon-" + i).addClass("red__smallicon-hover" + i);  }
  });

  $(document).on('mouseleave', '[class*="smallicon"], [class*="describe"], [class*="heading3"]', function( event ) {
    var $this = $(event.target);
    var ThisClass = $this.attr('class');
    var coloring = ThisClass.substring(0,3);
    var i = ThisClass.slice(-1);

    if (coloring == "ora") {
      $(".orange__heading3-" + i).css({'font-weight' : 'normal'})
      $(".orange__describe-" + i).css({'background-color' : 'transparent'})
      $(".orange__smallicon-" + i).removeClass("orange__smallicon-hover" + i);
    }
    else if (coloring == "blu") {
      $(".blue__heading3-" + i).css({'font-weight' : 'normal'})
      $(".blue__describe-" + i).css({'background-color' : 'transparent'})
      $(".blue__smallicon-" + i).removeClass("blue__smallicon-hover" + i);
    }
    else {
      $(".red__heading3-" + i).css({'font-weight' : 'normal'})
      $(".red__describe-" + i).css({'background-color' : 'transparent'})
      $(".red__smallicon-" + i).removeClass("red__smallicon-hover" + i);  }
    });



    $(".navig1").click(function(event){
      var WindowWidth = $(window).width();
        $(document).scrollTop(0);
    });

    $(".navig2").click(function(event){
      var WindowWidth = $(window).width();
      if (WindowWidth > 1000) {
        $(document).scrollTop(985);
      }
      else if (WindowWidth <= 1000) {
        var p = $("#ShowBlueContact").offset();
        var targ = +p.top - 124;
        $(document).scrollTop(targ);
      };
    });

    $(".navig3").click(function(event){
      var WindowWidth = $(window).width();
      if (WindowWidth > 1000) {
        $(document).scrollTop(1970);
      }
      else if (WindowWidth <= 1000) {
        var p = $("#ShowRedContact").offset();
        var targ = +p.top - 124;
        $(document).scrollTop(targ);
      };
    });

});
