function getMenus(){
    jQuery.ajax({
        url: 'http://127.0.0.1:8080/json/menus.json',
        success: function(res){
            menus = res;
            renderMenuItems();
        }
    }) 
};
function renderMenuItems(){
console.log(menus);  
let html$ = '';
for (let key in menus){
  menus[key].forEach(menu => {
    html$ += '<div class="col-4 menu-card" data-category= "'+key+'">';
    html$ += '<div class="card mb-3">';
    html$ += '<img src="'+menu.strMealThumb+'" class="card-img-top" alt="...">';
    html$ += '<div class="card-body">';
    html$ += '<h5 class="card-title menu-title">'+menu.strMeal+'</h5>';
    html$ += '<p class="card-text"><small class="text-muted">'+key+'</small></p>';
    html$ += '</div>';
    html$ += '</div>';
    html$ += '</div>';
  });
}
jQuery(".menu-items").html(html$);

};
