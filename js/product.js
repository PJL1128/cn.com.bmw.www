// 点击购物车的加号 减号
$('.jian').on('click', function () {
    let a = $('.input')
    a.val() < 1 ? a.val() = 0 : a.val()
    a.val(a.val() - 1)

})
// 加号  
$('.jia').on('click', function () {
    let a = $('.input')
    a.val(parseInt(parseInt(a.val()) + 1))
})


//鼠标移入小图  小图有边框  同时大图切换
$('.big-content-left ul img').on('mouseenter', function () {
    $(this).css({
        'border': '1px solid #1c69d4'
    })
})
//移出
$('.big-content-left ul img').on('mouseout', function () {
    $(this).css({
        'border': 'none'
    })
})



// 用户评价的tab切换
// 默认显示第一个
$('.produce-title span').eq(0).addClass('border-blue')
$('.produce-content').eq(0).show()
$('.produce-title span').on('click', function () {
    //给span 添加类名 其他删除类名
    $(this).addClass('border-blue').siblings().removeClass('border-blue')
    $('.produce-content').hide()
    let index = $(this).index()
    // console.log(index)
    $('.produce-content').eq(index).show()
})
