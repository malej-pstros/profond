(function( $ ){
        $('#partdevider').click(function() {
            
            
            $('html,body').animate({
                scrollTop: $('#partdevider').css('top')
            }, 800, function() {});
        });
        
        $(".nav-tabs a").click(function(){
            $(this).tab('show');
        });
        
})( jQuery );