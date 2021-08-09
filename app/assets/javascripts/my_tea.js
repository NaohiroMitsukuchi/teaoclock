$(document).on('turbolinks:load', function(){
  $('#my_tea_leaf_type_id').on('change', function(){
    $(this).css("color", "#000");
  });
});