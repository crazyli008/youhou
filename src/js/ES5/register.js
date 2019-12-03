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
    var arr = [false,false]
    // 验证手机号
    $('.phone input').blur(function(){
        var re = /^1\d{10}$/;
        var str = $(this).val();
        if (!re.test(str)) {
            $('.phone .phone-msg').css('display', 'block');
        } else {
        $('.phone .phone-msg').css('display', 'none');
         arr[0] = true;
        }
        console.log(arr[0]);
        return arr[0];
        
    })
    // console.log(arr[0]);
    // 验证密码强度
    $('.pwd input').blur(function () {
        var re = /^[a-zA-Z\d]{6,20}$/;
        var str = $(this).val();
        // console.log(str);
        // 验证格式是否正确
        if (re.test(str)) {
            $('.pwd .pwmsg').css('display', 'none');
        } else {
            $('.pwd .pwmsg').css('display', 'block');
        }
        var mode = 0;
        if ((/[0-9]+/g).test(str)) {
            mode ++;
        }
        if ((/[a-z]+/g).test(str)) {
            mode ++;
        }
        if ((/[A-Z]+/g).test(str)) {
            mode ++;
        }
        // 判断密码等级
        console.log(mode);
        if(mode >0 &&mode < 2){
            $('.pwd .strong span').eq(0).css('background','red');
        }
        if(mode > 1 && mode < 3){
            $('.pwd .strong span').eq(0).css('background','yellow');
            $('.pwd .strong span').eq(1).css('background','yellow');
        }
        if(mode > 2){
            $('.pwd .strong span').eq(0).css('background','green');
            $('.pwd .strong span').eq(1).css('background','green');
            $('.pwd .strong span').eq(2).css('background','green');
        }
        mode = 0;
    });
})