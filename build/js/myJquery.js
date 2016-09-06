jQuery(document).ready(function(){
  //beginning setup
  if($(window).width() < 900){
    $("body").addClass("background-small");
  } else {
    $("body").addClass("background-large");
  }

  //window resize
  $(window).resize(function(){
    if($(window).width() < 900){
      $("body").removeClass("background-large");
      $("body").addClass("background-small");
    } else {
      $("body").removeClass("background-small");
      $("body").addClass("background-large");
    }
  });

  //reload js from navbar
  $("#btn-school").click(function(){
    $.getScript("build/js/myschool.js");
  });
  $("#btn-event").click(function(){
    $.getScript("index_videolb/videolightbox.js");
  });
  $("#btn-resume").click(function(){
    $.getScript("build/js/mymedia.js");
  });
  $("#drop-school").click(function(){
    $.getScript("build/js/myschool.js");
  });
  $("#drop-event").click(function(){
    $.getScript("index_videolb/videolightbox.js");
  });
  $("#drop-resume").click(function(){
    $.getScript("build/js/mymedia.js");
  });
  $("#logo").click(function(){
    $.getScript("build/js/mytyped.js");
  });
});
