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

