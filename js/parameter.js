let top1 = $('.top-nav').offset().top
let top2 = $('.configuration-table').offset().top
// console.log(top1)
$(document).on('scroll', function () {
    let scrollTop = $(document).scrollTop()

    if (scrollTop >= top2) {
        $('.top-nav').hide()
        $('.configuration-table').css({
            'position': 'fixed',
            'top': 0,
            'margin-top': 0
        })
    }
})





// 点击基本数据的+号  table隐藏
$('.information-add1').on('click', function () {
    // let index = $(this).index()
    // // console.log(index)
    $('.information table').hide()
})
