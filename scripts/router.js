(function ($) {
    
    var app = $.sammy('#page-wrapper', function () {
        this.get('#/:id', function () {           
            var mdfile = "mdfiles/" + this.params['id'] + ".md";
     
            window.init();

            window.readMdFile(mdfile, function (error, data) {
                var preview = document.getElementById("preview");
                preview.innerHTML = window.converter.makeHtml(data);
            });
        });

    });

    $(function () {
        app.run('#/');
    });

})(jQuery);