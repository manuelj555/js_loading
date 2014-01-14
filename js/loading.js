(function($) {

    $.fn.loading = function(options) {

        return this.each(function() {

            if ($.isPlainObject(options) || 'open' === options || undefined === options) {

                options = $.extend($.fn.loading.defaults, options);

                var container = $(this);

                var div = $('#k2-loading');

                if (!div.size()) {
                    var div = $('<div id="k2-loading"><div class="k2-loading-first"></div><div class="k2-loading-last"></div></div>');
                    $("body").append(div);
                    div.find('.k2-loading-last').css('background-image', 'url(' + options.img + ')');
                }

                if (this !== window.document) {
                    div.css({
                        position: 'absolute',
                        top: container.offset().top, left: container.offset().left,
                        width: container.outerWidth(), height: container.outerHeight(),
                    });
                } else {
                    div.css({
                        position: 'absolute', top: 0, left: 0,
                        width: container.outerWidth(), height: container.outerHeight(),
                    });
                }

                $('#k2-loading').show()

            } else if (options === 'close') {
                $('#k2-loading').hide();
            }

        });
    };

    $.loading = function(options) {
        $(document).loading(options)
    };

    $.fn.loading.defaults = {
        img: '../images/loading.gif',
    };

})(jQuery);