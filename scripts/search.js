jQuery(document).on("keyup", ".menu-search", function(){
    // console.log(jQuery(this).val());
    const search = jQuery(this).val();
    jQuery(".menu-card").show();
    if (!search) {
        return;
    }
    jQuery(".menu-card").each(function(){
        const title = jQuery(this).find(".menu-title").text();
        const titleLowerCased = title.toLowerCase();
        const searchLowerCased = search.toLowerCase();
        if (titleLowerCased.indexOf(searchLowerCased) == -1){
            jQuery(this).hide();
        };
    });
});