var groceries = [];
var items = [1,2,3,4];

$(document).ready(function(){
  $("form#groceries").submit(function(event){
    items.forEach(function(item){
      groceries.push($("#item-"+item).val());
    })

    var sortedGroceries = groceries.sort();
    var upperCaseGroceries = sortedGroceries.map(function(sortedGrocery){
      return sortedGrocery.toUpperCase();
    });

    $("form#groceries").hide();

    upperCaseGroceries.forEach(function(upperCaseGrocery){
      $("#output").append("<li>"+upperCaseGrocery+"</li>")
    });


    event.preventDefault();
  });
});
