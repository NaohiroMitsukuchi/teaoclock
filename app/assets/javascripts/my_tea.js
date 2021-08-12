$(document).on('turbolinks:load', function(){
// 画像プレビュー機能
  // 挿入するimageタグを定義
  const buildImage = (blobUrl) => {
    const html = `<div class="preview">
                    <img  width="140" height="140" src="${blobUrl}">
                  </div>`;
    return html
  };
  $('.FormImage').on('change', '.FormImage__uploader', function(e){
    // 画像url取得
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 画像挿入フォームを隠す
    $(this).parent().hide();
    // プレビューの表示
    $('#previews').append(buildImage(blobUrl));
  });

//マイ紅茶登録ページ 
  $('#my_tea_leaf_type_id').on('change', function(e){
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
});