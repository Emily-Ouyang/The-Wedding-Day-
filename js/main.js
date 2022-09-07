// 視差滾動
// 選單滑動效果
$(document).ready(function(){
    // 點擊事件
    $('.scrollTop').click(function(e){
        // 取消預設的跳動效果
        e.preventDefault();

        // 讀取屬性值並存入變數target中
        var target = $(this).attr('href');

        // 取出id的位置並存入變數targetPosition中
        // $(target).offset().top:取得該元素位置的y軸座標
        var targetPosition = $(target).offset().top;

        // 改變html的scrollTop位置，並使用animate使其順順的滑動至指定位置
        $('html').animate({scrollTop: targetPosition},2000);
    });

    // 滾動套用css效果
    // 滾動事件
    $(window).scroll(function(){
        // 偵測 當下網頁可視範圍的視窗大小 之中，網頁右邊卷軸至網頁頂端的距離
        var scrollPosition = $(window).scrollTop();

        // 偵測 當下網頁可視範圍的視窗高度
        var windowHeight = $(window).height();

        // 使用each，把動態效果讀進來
    $('.animated').each(function(){
        // $(this).offset().top:取得該元素位置的y軸座標
        var thisPosition = $(this).offset().top;

        // 當下網頁可視範圍的視窗高度 + 網頁右邊卷軸至網頁頂端的距離 >= 該元素位置的y軸座標
        if((windowHeight + scrollPosition >= thisPosition)){
            // 動態替元素新增一個名為fadeIn的class
            $(this).addClass('fadeIn');
        }
    });
    });
});