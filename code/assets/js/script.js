$('.hum').on("click", function() {
  $(this).toggleClass('open');
  $('.main-nav').toggleClass('open');
});

 // メニューをクリックされたら、非表示にする
$('.main-nav__link').on("click", function(){
  $('.main-nav').removeClass('open');
});