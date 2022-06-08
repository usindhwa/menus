jQuery.ajax({
    url:'http://127.0.0.1:8080/json/categories.json', 
    // url: 'https://www.themenudb.com/api/json/v1/1/categories.php',
    success: function(res){
        categories = res.categories;
        renderCategories();
    },
    error: function(err){
        console.log("err", err);
    }, 
    complete: function(){
        console.log("I am executed on complete.")
    }
});
function renderCategories(){

    let html$ = '<button type="button" class="list-group-item btn-category list-group-item-action active" aria-current="true" data-category=""> All </button>';
    for (i=0; i<categories.length; i++){
        html$ += '<button type="button" class="list-group-item btn-category list-group-item-action" data-category="'+ categories[i].strCategory +'">'+ categories[i].strCategory +'</button>'
    }; 
    jQuery(".categories").html(html$);
    getMenus();
};