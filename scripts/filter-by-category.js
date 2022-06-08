jQuery(document).on("click", ".btn-category", function(){
    console.log(jQuery(this).attr('data-category'));
    jQuery(".menu-card").show();
    const category = jQuery(this).attr('data-category');
    if (category){
        jQuery(".menu-card").each(function(){
            const menuCategory = jQuery(this).attr("data-category");
            if (category != menuCategory){
                jQuery(this).hide();
            };
        });
    };
    jQuery(".btn-category").removeClass("active");
    jQuery(this).addClass("active");
});