jQuery(document).ready(function(){
  //beginning setup
  if($(window).width() < $(window).height()){
    $("body").css("background-image", "url(build/img/key-height.jpg)");
  } else if ($(window).width() < 900){
    $("body").css("background-image", "url(build/img/key-small.jpg)");
  } else {
    $("body").css("background-image", "url(build/img/key.jpg)");
  }

  //window resize
  $(window).resize(function(){
    if($(window).width() < $(window).height()){
      $("body").css("background-image", "url(build/img/key-height.jpg)");
    } else if ($(window).width() < 900){
      $("body").css("background-image", "url(build/img/key-small.jpg)");
    } else {
      $("body").css("background-image", "url(build/img/key.jpg)");
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
