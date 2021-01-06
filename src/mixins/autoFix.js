export default {
    mounted() {
        let that = this;
        // console.log(this.$);
        let scoll = this.$('#wrap')
        var scaleW = (document.documentElement.clientWidth * 1.0) / 1920;
        var scaleH = (document.documentElement.clientHeight * 1.0) / 1080;
        if (scaleW > scaleH) {
            scoll.css({
                transform: "scale(" + scaleH + ',' + scaleH + ")",
                transformOrigin: "0 0",
                marginLeft: (document.documentElement.clientWidth - 1920 * scaleH) / 2 + "px",

            });

        } else {
            scoll.css({
                transform: "scale(" + scaleW + ',' + scaleW + ")",
                transformOrigin: "0 0",
                marginTop: (document.documentElement.clientHeight - 1080 * scaleW) / 2 + "px",

            });

        }
        window.onresize = function() {
            scoll.css({
                marginLeft: 0 + "px",
                marginTop: 0 + "px",
            });
            var scaleW = (document.documentElement.clientWidth * 1.0) / 1920;
            var scaleH = (document.documentElement.clientHeight * 1.0) / 1080;
            console.log(document.documentElement.clientHeight - 1080 * scaleW, scaleW, scaleH, (-1920 * scaleH) / 2, 'HHHH');
            console.log(document.documentElement.clientWidth - 1920 * scaleH, scaleW, scaleH, (-1920 * scaleW) / 2, 'WWWW');
            if (scaleW > scaleH) {
                scoll.css({
                    transform: "scale(" + scaleH + ',' + scaleH + ")",
                    transformOrigin: "0 0",
                    marginLeft: (document.documentElement.clientWidth - 1920 * scaleH) / 2 + "px",
                });

            } else {
                scoll.css({
                    transform: "scale(" + scaleW + ',' + scaleW + ")",
                    transformOrigin: "0 0",
                    marginTop: (document.documentElement.clientHeight - 1080 * scaleW) / 2 + "px",
                });
            }
        };
    },

}