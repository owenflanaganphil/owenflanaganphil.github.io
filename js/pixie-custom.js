// // header 
$(document).ready(function () {
    $("#mobile-menu-button").click(function () {
      $("body").toggleClass("active");
    });
  });
  
  // open-menu 
  $(document).ready(function () {
    $(".menu-box").click(function () {
      $("body").toggleClass("menu-open");
    });
  });
  
  
  window.onscroll = function () { topscroll1() };
  
  function topscroll1() {
    if (document.documentElement.scrollTop > 50) {
      $('header').addClass('header-fix');
    } else {
      $('header').removeClass('header-fix');
    }
  }
  
  
  