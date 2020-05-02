// 轮播图
// 显示小圆点
// 定义变量
var $num = 0
//遍历图片 
for (let i = 0; i < $('.slider ul li').children().length; i++) {
    //向ol中添加li
    $('ol').append($(' <li></li>'))
    //给第一个li添加类名 current
    $('.slider ol li').eq(0).addClass('current')
}

// 鼠标经过哪个小圆点上面，小圆点的背景色就是蓝色
$('.slider ol li').on('mouseenter', function () {
    // alert('123')
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





// 热销产品
var num = 0
$('.arrow-right').on('click', function () {
    num++
    $('.look ul').animate({
        left: -num * 232
    })
})







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