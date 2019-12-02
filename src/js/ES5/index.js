"use strict";

$(function () {
  // 轮播图
  $('#cxslide_fade').cxSlide({
    type: 'fade',
    speed: 300,
    plus: true,
    minus: true
  });
  // logo中英文切换
  var $im1 = $('.header-middle-main-logo img:first');
  var $im2 = $('.header-middle-main-logo img:last');
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      $im1.css('display', 'none');
      $im2.css('display', 'block');
      resolve();
    }, 2000);
  }).then(function () {
    setTimeout(function () {
      $im1.css('display', 'block');
      $im2.css('display', 'none');
    }, 2000);
  });
  // 底部链接切换
  var $footer = $('.footer footer ul');
  setInterval(function () {
    $footer.animate({
      top: -28,
    }, 3000, function () {
      $(this).css('top', '20px');
    })
  }, 2000)
  // 漂浮窗口的关闭
  $('.piao-erweima .close').click(function(){
    $(this).parent().css('display','none');
  })






});