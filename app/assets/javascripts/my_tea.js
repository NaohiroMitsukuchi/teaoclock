$(document).on('turbolinks:load', function(){
// 画像プレビュー機能
  // 複数画像投稿用
    // 画像を挿入するinputタグを定義
    // const buildFileField = (index)=> {
    //   const html = `<label class="FileWrapper" data-index="${index}">
    //                   <i class="fas fa-camera-retro"></i>
    //                   <input class="FileWrapper__uploader" type="file" name="my_tea[my_tea_images_attributes][${index}][url]" id="my_tea_my_tea_images_attributes_${index}_url" data-index="${index}></input>
    //                 </label>`;
    //   return html;
    // }


  // 挿入するimageタグを定義
  const buildImage = (blobUrl) => {
    const html = `<div class="Preview">
                    <img  width="140" height="140" src="${blobUrl}">
                    <i class="far fa-times-circle Preview__removeBtn"></i>
                  </div>`;
    return html
  };
  // 画像プレビューのイベント
  $('.FormImage').on('change', '.FileWrapper__uploader', function(e){
    // 画像url取得
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 画像挿入フォームを隠す
    $(this).parent().hide();
    // プレビューの表示
    $('#Previews').append(buildImage(blobUrl));
  });

  // 画像プレビュー削除機能
  $('.FormImage').on('click', '.Preview__removeBtn', function(e){
    $('.Preview').remove();
    $('.FileWrapper').css("display", "block");
  });

//マイ紅茶登録ページ 
  $('#my_tea_leaf_type_id').on('change', function(e){
    $(this).css("color", "#000");
  });

//マイページサイドナビゲーションホバー時の挙動
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