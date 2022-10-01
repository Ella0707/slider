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

  function Focus() {
    nextFocus = currentFocus.next();
    prevFocus = currentFocus.prev();
    if (prevFocus.length == 0)
      prevFocus = null;
    if (nextFocus.length == 0)
      nextFocus = null;
  }

  $('.slide').on('click', function () {
    if ($(this).hasClass('locked')) {
      $(this).toggleClass('locked');
      currentFocus = nextFocus = prevFocus = null;
    } else {
      if (typeof currentFocus !== "undefined" &&
        currentFocus !== null)
        currentFocus.toggleClass('locked');
      $(this).toggleClass('locked');
      currentFocus = $(this);
      Focus();
    }
  });

  $('.slick-next').on('click', function () {
    if (typeof currentFocus !== "undefined" &&
      currentFocus !== null &&
      typeof nextFocus !== "undefined" &&
      nextFocus !== null) {
      let next_text = Number(nextFocus.text());
      let cur_text = Number(currentFocus.text());
      currentFocus.text(next_text);
      nextFocus.text(cur_text);
      currentFocus.toggleClass('locked');
      nextFocus.toggleClass('locked');
      currentFocus = nextFocus;
      Focus();
      console.log(next_text,cur_text);
    }
  });

  $('.slick-prev').on('click', function () {
    if (typeof currentFocus !== "undefined" &&
      currentFocus !== null &&
      typeof prevFocus !== "undefined" &&
      prevFocus !== null) {
      let prev_text = Number(prevFocus.text());
      let cur_text = Number(currentFocus.text());
      currentFocus.text(prev_text);
      prevFocus.text(cur_text);
      currentFocus.toggleClass('locked');
      prevFocus.toggleClass('locked');
      currentFocus = prevFocus;
      Focus();
      console.log(prev_text, cur_text);
    }
  });
});
