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
  $('.piao-erweima .close').click(function () {
    $(this).parent().css('display', 'none');
  })
  /*回到顶部*/
  function gotoTop(minHeight) {
    // 定义点击返回顶部图标后向上滚动的动画
    $(".gototop").click(
      function () {
        $('html,body').animate({ scrollTop: '0px' }, 'slow');
      })
    // 获取页面的最小高度，无传入值则默认为600像素
    minHeight ? minHeight = minHeight : minHeight = 600;
    // 为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {
      // 获取窗口的滚动条的垂直滚动距离
      var s = $(window).scrollTop();
      // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
      if (s > minHeight) {
        $(".gototop").fadeIn(500);
      } else {
        $(".gototop").fadeOut(500);
      };
    });
  };
  gotoTop();
  // 公众号的显示
  // 为窗口的scroll事件绑定处理函数
  $(window).scroll(function () {
    // 获取窗口的滚动条的垂直滚动距离
    var s = $(window).scrollTop();
    // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
    if (s > 600) {
      $(".gong").fadeIn(500);
    } else {
      $(".gong").fadeOut(500);
    };
  });

});