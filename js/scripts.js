var groceryList = [];

$(document).ready(function(){
  $("form#groceries").submit(function(event){
    groceryList.push($("#item-1").val());
    groceryList.push($("#item-2").val());
    groceryList.push($("#item-3").val());
    groceryList.push($("#item-4").val());
    console.log(groceryList);

    event.preventDefault();
  });
});
