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




let bannerBg = ['./images/xxxxxxxxxx01.png', './images/xxxxxxxxx02.png', './images/xxxxxx03.png', './images/xxxxxxx04.png',
    './images/xxxxx05.png', './images/xxxxxxxx06.png', './images/xxxxxxxxxx07.png', './images/xxxxxxxxx08.png', './images/xxxxxxxxxx09.png', './images/xxxxxxx10.png.png"',
    './images/xxxxxxxxxxx11.png', './images/xxxxxx12.png', './images/xxxxxxxx13.png', './images/xxxxxxxxxxxxx14.png', './images/xxxxxx15.png', './images/xxx16.png', './images/xxxxxx17.png',
    './images/xxxxx18.png', './images/xxxx.19.png']

let top1 = ['全新BMW 3系', 'BMW 4系双门轿跑车2019款', '新BMW X1插电式混合动力', '创新BMW X2', '新BMW X5', '新 BMW X1', 'BMW 6系GT2019款',
    'BMW 4系敞篷轿跑车', '全新BMW X6', 'BMW 2系敞篷轿跑车2019款', 'BMW 2系双门轿跑车2019款', 'BMW 2系多功能旅行车', '创新BMW X4 M',
    '全新BMW 8系双门轿跑车', '全新BMW M5雷霆版', '全新BMW X5插电式混合动力', '新BMW7系', 'BMW X3', '新BMW X4']

let price = ['车型指导价 ￥313,900起', '车型指导价 ￥266,800起', '车型指导价 ￥359,800起', '车型指导价 ￥399,800起', '车型指导价 ￥359,800起',
    '车型指导价 ￥399,800起', '车型指导价 ￥699,900起', '车型指导价 ￥278,800起', '车型指导价 ￥753,900起', '车型指导价 ￥583,900起', '车型指导价 ￥516,800起',
    '车型指导价 ￥309,800起', '车型指导价 ￥849,900起', '车型指导价 ￥263,800起', '车型指导价 ￥263,800起', '车型指导价 ￥869,900起', '车型指导价 ￥1098,000起',
    '车型指导价 ￥1468,900起', '车型指导价 ￥423,900起']

let bannerIndex = 0
$('.banner-right').click(function () {
    bannerIndex++
    if (bannerIndex == $('.banner-b div').length) {
        bannerIndex = 0
        $('.banner-b').animate({
            left: 260
        })
    }
    $('.banner-b').animate({
        left: -bannerIndex * 260
    })

    $('.banner-top-tex h4').html(top1[bannerIndex])
    $('.banner-top-tex .cx').html(price[bannerIndex])

    $('.banner-b div').eq(bannerIndex).css({
        'margin-top': '0px'
    }).children('img').css({
        'width': '490px',
        'filter': 'none'
    }).parent().siblings().css({
        'margin-top': '80px'
    }).children('img').css({
        'width': '224px',
        'filter': 'blur(2px)'
    })
    // console.log(bannerIndex);

    $('.banner-top').css({
        'background-image': `url(${bannerBg[bannerIndex]})`
    })
})










$('.banner-left').click(function () {
    bannerIndex--
    if (bannerIndex < 0) {
        bannerIndex = $('.banner-b div').length
        $('.banner-b').animate({
            left: -4940
        })
        $('.banner-b div').eq(bannerIndex).css({
            'margin-top': '0px'
        }).children('img').css({
            'width': '490px',
            'filter': 'none'
        }).parent().siblings().css({
            'margin-top': '80px'
        }).children('img').css({
            'width': '224px',
            'filter': 'blur(2px)'
        })
        $('.banner-top').css({
            'background-image': `url(${bannerBg[bannerIndex]})`
        })
    }

    $('.banner-top-tex h4').html(top1[bannerIndex])
    $('.banner-top-tex .cx').html(price[bannerIndex])

    $('.banner-b').animate({
        left: -bannerIndex * 260
    })
    $('.banner-b div').eq(bannerIndex).css({
        'margin-top': '0px'
    }).children('img').css({
        'width': '490px',
        'filter': 'none'
    }).parent().siblings().css({
        'margin-top': '80px'
    }).children('img').css({
        'width': '224px',
        'filter': 'blur(2px)'
    })
    $('.banner-top').css({
        'background-image': `url(${bannerBg[bannerIndex]})`
    })
})