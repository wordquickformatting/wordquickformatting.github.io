// $(document).ready(function () {
//   $(window).scroll(function () {
//     console.log('loaded');
//     // sticky header on scroll script
//     if (this.scrollY > 20) {
//       $('.header').addClass('sticky');
//     } else {
//       $('.header').removeClass('sticky');
//     }

//     // scroll-up button show/hide script
//     if (this.scrollY > 500) {
//       $('.scroll-up-btn').addClass('show');
//     } else {
//       $('.scroll-up-btn').removeClass('show');
//     }
//   });

//   $('.menu-btn').click(function () {
//     $('header .nav-links').toggleClass('active');
//     $('.menu-btn i').toggleClass('active');
//   });

//   $('.link-menu').click(function () {
//     $('header .nav-links').removeClass('active');
//     $('.menu-btn i').removeClass('active');
//   });
// });

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (this.scrollY > 20) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

function menuClick() {
  document.getElementById('nav-links').classList.toggle('active');
  document.getElementById('memu-btn-icon').classList.toggle('active');
}

document.getElementById('nav-links').addEventListener('click', () => {
  document.getElementById('nav-links').classList.remove('active');
  document.getElementById('memu-btn-icon').classList.remove('active');
});
