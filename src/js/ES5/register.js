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

    // 验证手机号
    $('.phone input').blur(function () {
        var re = /^1\d{10}$/;
        var str = $(this).val();
        if (!re.test(str)) {
            $('.phone .phone-msg').css('display', 'block');
        } else {
            $('.phone .phone-msg').css('display', 'none');
        }
    })
    // 验证密码强度
    $('.pwd input').blur(function () {
        var re = /^[a-zA-Z\d]{6,20}$/;
        var str = $(this).val();
        // 验证格式是否正确
        if (re.test(str)) {
            $('.pwd .pwmsg').css('display', 'none');
        } else {
            $('.pwd .pwmsg').css('display', 'block');
        }
        var mode = 0;
        if ((/[0-9]+/g).test(str)) {
            mode++;
        }
        if ((/[a-z]+/g).test(str)) {
            mode++;
        }
        if ((/[A-Z]+/g).test(str)) {
            mode++;
        }
        // 判断密码等级
        if (mode > 0 && mode < 2) {
            $('.pwd .strong span').eq(0).css('background', 'red');
        }
        if (mode > 1 && mode < 3) {
            $('.pwd .strong span').eq(0).css('background', 'yellow');
            $('.pwd .strong span').eq(1).css('background', 'yellow');
        }
        if (mode > 2) {
            $('.pwd .strong span').eq(0).css('background', 'green');
            $('.pwd .strong span').eq(1).css('background', 'green');
            $('.pwd .strong span').eq(2).css('background', 'green');
        }
        mode = 0;
    });
    //点击注册
    $('.submit input').click(function () {
        // 获取手机号
        var phone = $('.phone input').val();
        // 获取密码
        var pwd = $('.pwd input').val();
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
        // 如果上述验证都没问题，开始将新用户的信息存入cookie中
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
        // 判断对象中是否存在接收回来的数据中用户名
        if (phone in cookieValueObj) {
            alert('手机号已存在！不能重新出册');
            return;
        }
        cookieValueObj[phone] = pwd;
        $.cookie('submit-msg',JSON.stringify(cookieValueObj),{expires:7,path:'/'});
        // 完成后清空框里的值
        phone = pwd ='';
        alert('您已经注册成功，请登录！');
    })
})