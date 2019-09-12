$(document).ready(function() {
let sideNav = $(".sidenav");

  $(window).scroll(function () {
  // get the complete hight of window
    let theTop = $(".section-projects").offset().top - window.innerHeight;
    if ($(window).scrollTop() > theTop) {
      $(".sidenav").fadeIn(2000);
    } else {
      $(".sidenav").hide();
    }
  });
});
