// 轮播图
// - 功能1：显示小圆点，第一个小圆点是有current这个类名的
// 定义变量
var $num = 0
//遍历图片 
for (let i = 0; i < $('ul>li').children().length; i++) {
    //向ol中添加li
    $('ol').append($(' <li></li>'))
    //给第一个li添加类名 current
    $('ol li').eq(0).addClass('current')
}

// - 功能2：鼠标移动到大盒子上面，左右的箭头就会显示出来，鼠标离开就会隐藏
$('.slider').on('mouseover', function () {
    //让箭头显示
    $('.arrow').show()
})
//鼠标移出 
$('.slider').on('mouseout', function () {
    //让箭头隐藏
    $('.arrow').hide()
})

// - 功能3：鼠标经过哪个小圆点上面，这个小圆点的背景色就是红色(current类名已经提供)，同时大图也在跟着切换
$('.slider ol li').on('click', function () {
    //添加类名current
    $(this).addClass('current')
    //删除其他的兄弟元素的current
    $(this).siblings().removeClass('current')
    //获取当前索引
    let index = $(this).index()
    $num = index
    // console.log(index)
    $('.slider ul li').eq(index).stop().fadeIn().siblings().stop().fadeOut()
})

// - 功能4：点击右箭头，图片进行下一张的切换，当切换到最后一张的时候，接着从第一张开始，下面的小圆点也在跟着在切换，对应的背景色变红

$('.arrow-right').on('click', function () {
    //自增
    $num++
    //判断  加限制
    if ($num == $('.slider ul li').length) {
        $num = 0
    }
    $('.slider ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    $('.slider ol li').eq($num).addClass('current').siblings().removeClass('current')
})

// - 功能5：点击左箭头，图片进行上一张的切换，当切换到第一张的时候，接着从最后一张继续倒着切换，下面的小圆点也在跟着切换，对应的背景色变红
$('.arrow-left').on('click', function () {
    //自减
    $num--
    //判断  加限制 
    if ($num < 0) {
        $num = $('.slider ul li').length - 1
    }
    $('.slider ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    $('.slider ol li').eq($num).addClass('current').siblings().removeClass('current')
})

// 功能6： 自动轮播的效果
var timer = setInterval(function () {
    $('.arrow-right').click()
}, 2000)

// - 功能7： 当鼠标移动到大盒子上面的时候，停止自动轮播，鼠标离开，自动轮播继续
$('.slider')
    .on('mouseenter', function () {
        // 移除定时器
        clearInterval(timer)
        // 显示
        $('.arrow').show();
    })
    .on('mouseleave', function () {
        timer = setInterval(function () {
            $('.arrow-right').click()
        }, 2000)
        // 隐藏
        $('.arrow').hide();
    })


//鼠标移入topnav里面的a  a被选中
$('.top-nav-left a').mouseenter(function () {
    //给选中的a添加类名 
    $(this).addClass('border-blue')
    //其他兄弟元素删除类名
    $(this).siblings().removeClass('border-blue')
})
//鼠标移出的时候 删除类名
$('.top-nav-left a').mouseleave(function () {
    $(this).removeClass('border-blue')
})
//鼠标移入topnav里面的i  i被选中
$('.top-nav i').mouseenter(function () {
    //给选中的i添加类名 i
    $(this).addClass('border-blue')
    //其他兄弟元素删除类名
    $(this).siblings().removeClass('border-blue')
})
//鼠标移出的时候 删除类名
$('.top-nav i').mouseleave(function () {
    $(this).removeClass('border-blue')
})



//移动滚动条  顶部导航变成固定定位
// $(document).on('scroll', function () {
//     let top = $('.top-nav').offset().top
//     let scrollTop = $(document).scrollTop()
//     if (scrollTop >= top) {
//         $('.top-nav').addClass('opacity')
//     } else {
//         $('.top-nav').removeClass('opacity')
//     }
// })


//移入了解详情 即刻前往 预约试驾 亮度变暗
$('.blue').on('mouseenter', function () {
    $('.blue').css({
        'backgroundColor': '#0653b6'
    })
})
$('.blue').on('mouseleave', function () {
    $('.blue').css({
        'backgroundColor': '#1c69d4'
    })
})

$('.brown').on('mouseenter', function () {
    $('.brown').css({
        'backgroundColor': '#262626'
    })
})
$('.brown').on('mouseleave', function () {
    $('.brown').css({
        'backgroundColor': '#4d4d4d'
    })
})


//  tab插件
// $(function () {
//     $('.ah-tab-wrapper').horizontalmenu({
//         itemClick: function (item) {
//             $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
//             $('.ah-tab-content-wrapper .ah-tab-content:eq(' + $(item).index() + ')').attr('data-ah-tab-active', 'true');
//             return false; //if this finction return true then will be executed http request
//         }
//     });
// });

$('.ah-tab-item').click(function () {
    $('.ah-tab-content').animate({
        left: $(this).index() * 1190
    })
})




//按车系查看  鼠标移入

