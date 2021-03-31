// window.onload = function(){
//     var btn = document.getElementsByTagName('.check');
//     var hide = document.getElementsByTagName('#hide');
//     btn.onclick = function(){
//         hide.style.display = 'none';
//     }
//     console.log('2');
// }
$(function(){

    $('.smallCard').on('click',function(){
        $('.container').append('<div id="hide"><div id="content"></div><div id="bttn"><p class="warn">确认接收后请在我的订单内查看完整订单</p><button id="close">关闭</button><button id="confirm">确认接收</button></div></div>');
        var temp = this;
        var text = $(temp).html();
        $('#content').html(text);
       
        $('#hide').css("display","block");
        
        $('#confirm').on('click',function(){
            $('#hide').css("display","none");
            $(temp).remove();
            $('#hide').remove();

        })
        $('#close').on('click', function(){
            $('#hide').css("display","none");
            $('#hide').remove();
        })
        
    })
})