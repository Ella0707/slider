$(document).ready(function () {

  $('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$('.slide').on('click', function () {
  $(this).toggleClass('locked');
  $('.slide').not(this).removeClass('locked')
  var clickedIndex = $(this).data("slick-index");
 
  if (screen.width < 768) {
    $('.slide').removeClass('locked')
    console.log('none')
  }

  $('.slick-next').on('click', function () {
    if ($('.slider').length > 0) {
      $('.locked').addClass('slick-active');
      var position = $('.locked').css('order');
      var n = +position;

      if (clickedIndex < 4) {
        $('.locked').css(
          { 'order': n + 2 }
        )
        clickedIndex = 5;
        console.log(clickedIndex)
      }

      else {
        $('.locked').css(
          { 'order': n + 1 }
        )
        clickedIndex = 5;
      }
    }
  });

  $('.slick-prev').on('click', function () {

    if ($('.slider').length > 0) {
      var position = $('.locked').css('order');
      var h = +position - 1;

      $('.locked').css(
        { 'order': h }
      )
    }
  });
});




