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
function switchImgs() {
    $num++;
    if ($num == $('.slider ul li').length) {
        $num == 0
    }
    t = setTimeout("switchImgs()", 1000);
}