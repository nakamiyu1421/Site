$(function() {
  $('.carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: true,
  variableWidth: true,
  arrows: true,
  prevArrow: '<img src="images/arrow-left.png" class="slide-arrow prev-arrow"></img>',
  nextArrow: '<img src="images/arrow-right.png" class="slide-arrow next-arrow"></img>'
  });

  //ボタンアニメーション
  $('#food').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    },100);
  });
  $('#food').on('mouseout',function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  $('#drink').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    },100);
  });
  $('#drink').on('mouseout',function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });
  
  $('.web_img').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    },100);
  });
  $('.web_img').on('mouseout',function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });
  
});