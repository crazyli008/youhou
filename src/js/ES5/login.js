$(function () {
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
    gotoTop(250);
    // 公众号的显示
    // 为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {
        // 获取窗口的滚动条的垂直滚动距离
        var s = $(window).scrollTop();
        // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
        if (s > 250) {
            $(".gong").fadeIn(500);
        } else {
            $(".gong").fadeOut(500);
        };
    });
    // 二维码动画
    $('.mark').hover(function(){
        $('.move-erweima').stop().animate({left:0},500,function(){
            $('.sao-sao').css('display','block');
        });
    },function(){
        $('.sao-sao').css('display','none');
        $('.move-erweima').stop().animate({left:65},500);
    })
    // 密码登录更安全切换
    $('.rt-top-ico').click(function(){
        $(this).toggleClass('rt-top-ico-tog');
        $('.rt-top-msg-tog').toggleClass('rt-top-msg-tog1');
        $('.saoma').toggleClass('saoma1');
        $('.login').toggleClass('login1');
        
    });
    //普通登录和手机验证码登录
    $('.switch-right').click(function(){
        $('.switch-right').toggleClass('switch-right1');
        $('.switch-left').toggleClass('switch-left1');
        $('.simple-login').toggleClass('simple-login1');
        $('.phone-login').toggleClass('phone-login1')
    })
    $('.switch-left').click(function(){
        $('.switch-left').toggleClass('switch-left1');
        $('.switch-right').toggleClass('switch-right1');
        $('.simple-login').toggleClass('simple-login1');
        $('.phone-login').toggleClass('phone-login1')
    })

    // 验证手机号
    $('.simple-login input').eq(0).blur(function () {
        var re = /^1\d{10}$/;
        var str = $(this).val();
        if (!re.test(str)) {
            $('.simple-login .p1').css('display', 'block');
        } else {
            $('.simple-login .p1').css('display', 'none');
        }
    })
    // 验证密码格式
    $('.simple-login input').eq(1).blur(function () {
        var re = /^[a-zA-Z\d]{6,20}$/;
        var str = $(this).val();
        if (!re.test(str)) {
            $('.simple-login .p2').css('display', 'block');
        } else {
            $('.simple-login .p2').css('display', 'none');
        }
    })


    // 点击登录
    $('.simple-login input').eq(2).click(function () {
        // 获取手机号
        var phone = $('.simple-login input').eq(0).val();
        // 获取密码
        var pwd = $('.simple-login input').eq(1).val();
        // 验证手机号，和密码不能为空
        if (!phone || !pwd) {
            alert('您填写的信息有误！');
            return;
        }
        var rep = /^1\d{10}$/;
        var rewd = /^[a-zA-Z\d]{6,20}$/;
        // 再次验证手机号格式是否正确
        if (!rep.test(phone)) {
            alert('您的手机号输入错误！请重新输入！');
            return;
        }
        // 密码格式是否正确
        if (!rewd.test(pwd)) {
            alert('您的密码格式有误！请重新输入！');
            return;
        }
        // 如果上述验证都没问题，开始找cookie中有没有注册过的用户信息
        // 先获取cookie中的submit-msg这个key值，将它的value返回，没有，就返回空串
        var cookieValueStr = $.cookie('submit-msg') ? $.cookie('submit-msg') : '';
        // 将字符串转为json对象
        function convertCookieToCookieObj(cookieValueStr) {
            if (!cookieValueStr) {
                return {};
            }
            return JSON.parse(cookieValueStr);
        }
        // 将获取到的value信息，是字符串，将字符串转为转为对象
        var cookieValueObj = convertCookieToCookieObj(cookieValueStr);
        // 在value中找信息
        if (phone in cookieValueObj) {
            if(cookieValueObj[phone] === pwd){//cookie中的密码，和用户输入的密码是否一致，如果一致，登录成功跳转页面
                $.cookie('load',phone,{expires:7,path:'/'});//登录成功，就将这个登陆信息，保存3天
                alert('登录成功！');
                location.href = '../index.html';//登录成功后，跳转的产品页面
                return;

            }else{
                alert('密码错误！')
            }
        }else{
            alert('用户名不存在！请注册');
            return;
        }
    })

})