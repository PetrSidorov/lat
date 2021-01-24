$("document").ready(function () {
  // burger script

  $('#burger').click(function () {
    $('#burger').toggleClass('color-change');
    $('.header__nav').toggleClass('show');
    $('#burger div').toggleClass('show');
    $('.header__menu').toggleClass('show');
    $('body').toggleClass('no-scroll');
  });

  // accordion script
  $('.accordion').on('click', function () {
    $(this).next('.panel').not(':animated').slideToggle();
    $(this).find('.triangle').toggleClass('animate');
  })

  // prevent mobile menu on screen resize
  $(window).resize(function () {
    if ($(window).width() > 800 && $('body').hasClass('no-scroll')) {
      $('#burger').removeClass('color-change');
      $('.header__nav').removeClass('show');
      $('#burger div').removeClass('show');
      $('.header__menu').removeClass('show');
      $('body').removeClass('no-scroll');

    }
  });

});