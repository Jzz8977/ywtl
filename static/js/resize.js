window.global = window;
(function() {
    if ($(window).width() >= 1920) {
        // $(window).width() && $('body').css('width', $(window).width());
        // $(window).height() && $('body').css('height', $(window).height());


        $(window).width() && $('body').css('width', "1920px");
        $(window).width() && $('body').css('height', "1080px");

        var ratio = $(window).width() / (1920 || $('body').width());
        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: "100%",
            height: "1080px"
        });
    } else {
        $(window).width() && $('body').css('width', "1920px");
        $(window).width() && $('body').css('height', "765px");

        var ratio = $(window).width() / (1920 || $('body').width());
        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: "100%",
            height: "1080px"
        });
    }
    $('head').append('<meta name="viewport" content="width=' + $(window).width() + '"/>');

    //监听页面是否发生改变
    $(window, document).resize(function() {
        resize();
    })

    function resize() {
        if (window.screen.display == 2) { // 等比缩放高度铺满
            resizeCenter();
        } else if (window.screen.display == 3) { //全屏铺满
            resizeFull();
        } else if (window.screen.display == 4) { //等比缩放高度铺满并且可以左右移动
            resizeHeight();
        } else { // 等比缩放宽度铺满
            resizeWidth();
        }

    }

    function resizeWidth() {
        window.location.reload()
        if ($(window).width() >= 1920) {
            var ratio = $(window).width() / ($(window).width() || $('body').width());
            $(window).height() && $('body').css('height', $(window).height());
        } else {
            $('body').css('height', "1080px");
        }
        var ratio = $(window).width() / (1920 || $('body').width());
        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: "100%"
        });
    }

    function resizeCenter() {
        if (!window.screen.height || !window.screen.width) return resizeCenterBak();
        var ratio = $(window).height() / window.screen.height;

        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
            backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
            marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
    }

    function resizeHeight() { //
        if (!window.screen.height || !window.screen.width) return resizeCenterBak();
        var ratio = $(window).height() / window.screen.height;

        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
            backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
            // marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
        $('html').css({
            overflowX: 'scroll',
        })
    }

    function resizeFull() {
        if (!window.screen.height || !window.screen.width) return resizeFullBak();
        var ratioX = $(window).width() / window.screen.width;
        var ratioY = $(window).height() / window.screen.height;

        $('body').css({
            transform: "scale(" + ratioX + ", " + ratioY + ")",
            transformOrigin: "left top",
            backgroundSize: "100% 100%",
        });
    }

    function resizeCenterBak() {
        var ratioX = $(window).width() / $('body').width();
        var ratioY = $(window).height() / $('body').height();
        var ratio = Math.min(ratioX, ratioY);

        $('body').css({
            transform: "scale(" + ratio + ")",
            transformOrigin: "left top",
            backgroundSize: (1 / ratioX) * 100 * ratio + "%",
            backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
            marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
    }

    function resizeFullBak() {
        var ratioX = $(window).width() / $('body').width();
        var ratioY = $(window).height() / $('body').height();

        $('body').css({
            transform: "scale(" + ratioX + ", " + ratioY + ")",
            transformOrigin: "left top",
            backgroundSize: "100% " + ratioY * 100 + "%",
        });
    }
})();