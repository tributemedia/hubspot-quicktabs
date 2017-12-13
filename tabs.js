(function($){        
$(document).ready(function() {
    
    $('.tabs-collapsible').collapsible();
    
    $('.tab-label').click(function(){
        
        // Remove active class from currently active tab, and add it to this one.
        $('.tab-label.active').removeClass('active');
        $(this).addClass('active');
        
        // Get the tab position that is meant to be active, remove the active class
        // from the currently active tab content, and add the active class to the
        // tab content that corresponds with the position of the tab label clicked on.
        var tabPos = $(this).attr('tab-pos');
        $('.tab-content.active').removeClass('active');
        $('.tab-content:nth-child(' + tabPos + ')' ).addClass('active');
        
    });
    
});
})(jQuery);