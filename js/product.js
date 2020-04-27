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
$('.big-content-left ul li').on('mouseenter', function () {
    $(this).css({
        'border': '2px solid #1c69d4'
        // ./images/bit-content-left_2.jpg
    })
    $('.big-content-left .big').attr('src', `./images/bit-content-left_${$(this).index() + 1}.jpg`)
})
//移出
$('.big-content-left ul li').on('mouseout', function () {
    $(this).css({
        'border': 'none'
    })
})


// 滚动条滚动到一定位置 商品详情变成固定定位
let top1 = $('.produce-title').offset().top
// console.log(top1)
$(document).on('scroll', function () {
    let scrollTop = $(document).scrollTop()

    if (scrollTop >= top1) {
        $('.produce-title').css({
            'position': 'fixed',
            'top': 0
        })
        // console.log(scrollTop)
    } else {
        $('.produce-title').css({
            'position': 'static'
        })
    }
})



// 用户评价的tab切换
// 默认显示第一个
$('.produce-title span').eq(0).addClass('border-blue')
$('.product-content').eq(0).show()
$('.produce-title span').on('click', function () {
    //给span 添加类名 其他删除类名
    $(this).addClass('border-blue').siblings().removeClass('border-blue')
    $('.product-content').hide()
    let index = $(this).index()
    // console.log(index)
    $('.product-content').eq(index).show()
})




// 侧边栏
// 侧边栏
$(document).on('scroll', function () {
    let scrollTop = $(document).scrollTop()
    if (scrollTop >= 200) {
        $('.subnav').show()
    } else {
        $('.subnav').hide()
    }
})