$(document).on('turbolinks:load', function(){
//マイ紅茶登録ページ 
  $('#my_tea_leaf_type_id').on('change', function(){
    $(this).css("color", "#000");
  });

//サイドナビゲーションホバー時の挙動
  $(".SideBar .Nav__content").on({
    'mouseenter': function(){
      let icon =  $(this).find("i")
      $(this).css('opacity', '0.8');
      icon.css('right', '10px');
      icon.css('font-size', '24px');
      icon.css('color', 'rgba(210, 133, 56, 1)');
    },
    'mouseleave': function(){
      let icon =  $(this).find("i")
      $(this).css('opacity', '1');
      icon.css('right', '15px');
      icon.css('font-size', '20px')
      icon.css('color', 'rgba(210, 133, 56, 0.2)');
    },
    'click': function(){
      let icon =  $(this).find("i")
      $(this).css('opacity', '1');
      icon.css('right', '15px');
      icon.css('font-size', '20px')
      icon.css('color', 'rgba(210, 133, 56, 0.2)');
    }
  });

// マイページサイドナビゲーション選択時の挙動
  $("#edit_user_info").on('click', function(){
  });
  $("#log_out_btn").on('click', function(){
    $('.MyPage .MyTeasArea').css('display', 'none');
    $('.MyPage .UserLogoutArea').css('display', 'block');
  });
});