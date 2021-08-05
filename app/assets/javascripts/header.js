$(document).on('turbolinks:load', function(){
  $('.IconWrapper').hover(function(){
    $('.Balloon').css('display', 'inline-block')
  }, function(){
    $('.Balloon').hover(function(){
    }, function(){
      $('.Balloon').css('display', 'none')
    });
  });
});