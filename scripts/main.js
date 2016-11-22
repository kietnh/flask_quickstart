(function ($) {
    var config = {
        extensions: [],
        sanitize: false,
        omitExtraWLInCodeBlocks: true,
        noHeaderId: false,
        parseImgDimensions: true,
        simplifiedAutoLink: true,
        literalMidWordUnderscores: true,
        strikethrough: true,
        tables: true,
        tablesHeaderId: false,
        ghCodeBlocks: true,
        tasklists: true,
        smoothLivePreview: true,
        prefixHeaderId: false
    };
    window.converter = new showdown.Converter(config);

    window.readMdFile = function (urlFile, callback) {
        $.get(urlFile, function (data) {
            callback(null, data);
        });
    };

    window.addActiveNav = function (){
        var url = window.location;
        $('ul.nav a').filter(function() {
            return this.href != url;
        }).removeClass('active').parent();

        $('ul.nav a').filter(function() {
            return this.href == url;
        }).addClass('active').parent();
    };

    window.init = function(){
        window.addActiveNav();
    }

})(jQuery);