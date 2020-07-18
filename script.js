$(function(){
  $('.top-btn').click(function(){
      $('html, body').animate({
        'scrollTop':0
      },500);
  });
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });
  $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  $('.header-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
    $('.navToggle').removeClass('active');
    $('.globalMenuSp').removeClass('active');
  });
  $('.top-btn').click(function(){
    $('.navToggle').removeClass('active');
    $('.globalMenuSp').removeClass('active');
  });
});
