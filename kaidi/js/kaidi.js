
$(document).ready(function(){
//控制滚动条
$('.main li').click(function () {
    var gg = $(this).attr('name');
    var scroll_offset = $(gg).offset(); 
 
    $("body,html").animate({
        scrollTop:scroll_offset.top 
    })
})	
//导航悬浮
var top = $('.bottom').offset().top;
$(document).scroll(function(){
var scrTop = $(window).scrollTop();
if(scrTop >= top){
$('.bottom').css({'position':'fixed','top':'0','width':'100%'});
}else{
$('.bottom').css({'position':'','top':''});
}
})

})