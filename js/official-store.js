// 轮播图
// 轮播图
// - 功能1：显示小圆点，第一个小圆点是有current这个类名的

// 定义变量
var $num = 0
//遍历图片 
for (let i = 0; i < $('.slider ul li').children().length; i++) {
    //向ol中添加li
    $('ol').append($(' <li></li>'))
    //给第一个li添加类名 current
    $('.slider ol li').eq(0).addClass('current')
}

// 鼠标经过哪个小圆点上面，这个小圆点的背景色就是蓝色(current类名已经提供)，同时大图也在跟着切换
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

// 自动轮播的效果
// var timer = setInterval(function () {
//     $('.slider ol li').click()
// }, 2000)


//默认动画,图片轮播,每个1秒切换







// 精选产品的tab切换
$('.good-produce-title span').eq(0).attr('class', 'good-produce-title-border')
$('.good-produce-content').eq(0).show()

$('.good-produce-title').on('click', function () {
    // $('.good-produce-title h2').css({
    //     'color': '#1b69d4',
    // })
    // $('.good-produce-title span').css({
    //     'color': '#76a5e5',
    // })
    // $('.good-produce-title span').attr('class', 'good-produce-title-border').siblings('.good-produce-title span').removeAttr('class')
    $(this).children('span').addClass('good-produce-title-border').parent().siblings().children('span').removeClass('good-produce-title-border')

    $('.good-produce-content').hide()
    let index = $(this).index()
    // console.log(index)
    $('.good-produce-content').eq(index).show()
})






// 侧边栏
$(document).on('scroll', function () {
    let scrollTop = $(document).scrollTop()
    if (scrollTop >= 200) {
        $('.subnav').show()
    } else {
        $('.subnav').hide()
    }
})