let categories = [];
let meals = {};
jQuery.ajax({
    url:'https://www.themealdb.com/api/json/v1/1/categories.php', 
    success: function(res){
        // console.log("res",res);
        categories = res.categories;
        console.log(JSON.stringify(categories));
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

    let html$ = '<button type="button" class="list-group-item list-group-item-action active" aria-current="true"> All </button>';
    for (i=0; i<categories.length; i++){
        html$ += '<button type="button" class="list-group-item list-group-item-action">'+ categories[i].strCategory +'</button>'
    }; 
    jQuery(".categories").html(html$);
    getMeals();
};

function getMeals(){
    categories.forEach(function(category){
        jQuery.ajax({
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category.strCategory,
            success: function(res){
                meals[category.strCategory] = res.meals;
                if (Object.keys(meals).length === categories.length){
                    renderMenuItem();
                } 
            }
        })
    })
};
function renderMenuItem(){
    
};