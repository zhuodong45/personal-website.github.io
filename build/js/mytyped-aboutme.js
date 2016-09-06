jQuery(document).ready(function(){
  // if($(window).width() < 900){
  //   $("#aboutme-type").addClass("hidden");
  //   $("#aboutme-not-type").removeClass("hidden");
  // }

  //typed.js
  $("#typed2").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 0,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });

});
