$(document).ready(function () {
  $(window).scroll(function () {
    console.log('loaded');
    // sticky header on scroll script
    if (this.scrollY > 20) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.menu-btn').click(function () {
    $('header .nav-links').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  $('.link-menu').click(function () {
    $('header .nav-links').removeClass('active');
    $('.menu-btn i').removeClass('active');
  });
});
