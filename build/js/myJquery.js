jQuery(document).ready(function(){
  //beginning setup
  if($(window).width() < 900){
    $("#btn-menu").addClass("hidden");
    $("#btn-drop").removeClass("hidden");
    $("body").addClass("empty-background");
    // $("#aboutme-type").addClass("hidden");
    // $("#aboutme-not-type").removeClass("hidden");
  }

  //window resize
  $(window).resize(function(){
    if($(window).width() < 900){
      $("#btn-menu").addClass("hidden");
      $("#btn-drop").removeClass("hidden");
      $("body").addClass("empty-background");
    } else {
      $("#btn-menu").removeClass("hidden");
      $("#btn-drop").addClass("hidden");
      $("body").removeClass("empty-background");
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
