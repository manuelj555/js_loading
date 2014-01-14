(function($) {

    $.fn.loading = function(options) {

        return this.each(function() {

            if ($.isPlainObject(options) || 'open' === options || undefined === options) {

                options = $.extend({}, options);

                var container = $(this);
                
                var div = $('#k2-loading');

                if (!div.size()) {
                    var div = $('<div id="k2-loading"><div></div><div></div></div>');
                    $("body").append(div);
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

})(jQuery);


