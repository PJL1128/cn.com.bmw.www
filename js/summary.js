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





//配置表 

$('.configuration-table a').eq(0).addClass('border-blue')

$('.configuration-table a').on('mouseenter', function () {
    $(this).addClass('border-blue')
    $(this).siblings().removeClass('border-blue')
})

$('.configuration-table a').mouseleave(function () {
    $(this).removeClass('border-blue')
})