/*
** 레이어 팝업 화면 중앙에 띄우기
*/
$.fn.setPosFn = function(){
    var obj = $(this);
    var w = obj.innerWidth()/2;
    var h = obj.innerHeight()/2;
    return obj.css({
        'display': 'block',
        'position': 'fixed',
        'left': '50%',
        'top': '50%',
        'margin-left': -w,
        'margin-top': -h
    })
}

/*
** 이미지 보기
*/
$.fn.viewImage = function(){
    var obj = $(this);
    obj.css({'cursor':'zoom-in'}).on('click', function(e){
        e.preventDefault();
        var $t = $(this);
        var $src = $t.find('img').attr('src');
        var $top = $t.find('img').eq(0).offset().top - $('html, body').scrollTop();
        var $left = $t.find('img').eq(0).offset().left;
        activeFn($src, $top, $left);
    });
    var activeFn = function(url, top, left) {
        var html = '<div class="imgView" style="top:'+ top +'px; left:'+ left +'px;"><img src="' + url + '" alt=""></div>';
        $('html, body').css({'overflow':'hidden'});
        $('body').append(html);
        $('.imgView').setPosFn().on('click', function(){
            $(this).remove();
            $('html, body').css({'overflow':'visible'});
        });
    }
}