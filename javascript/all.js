
$(document).ready(function () {

    //index頁動畫滾軸 
    $('.go_feature,.go_chef,.go_map').click(function (e) {
        e.preventDefault();
        //取得位置  
        var _href = $(this).attr('href');
        //console.log(this);
        $('html, body').animate({
            scrollTop: $(_href).offset().top
        }, 800);
    });

    //點擊漢堡展開
    $('.menu_icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("animated")
        $('.menu').toggleClass('menu-show');
    });

    //點擊菜單 & 其他地方時收回
    $('.menu li,.content,.chef_block,.form_block,.footer').click(function (e) {
        $('.menu_icon').removeClass('animated');
        $('.menu').removeClass('menu-show');
    });

    //標記我的最愛
    $('.mark').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fas').toggleClass('far').toggleClass('active');
    });

});