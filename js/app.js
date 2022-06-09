// $(document).foundation();

$(window).scroll(function() {
    if($(this).scrollTop()>180) {
        $('.a1').fadeIn();
        $('.a2').delay(1500).fadeIn(); 
    } 
    // else {
    //     $('.a1').fadeOut();
    //     $('.a2').fadeOut();
    // }
});

setInterval(function() {
    var max = 32;
    var min = 8;
  var number = 1 + Math.floor(Math.random() * (max - min + 1)) + min;;
  $('.a3').text(number);
},
5000); // every 1 second
