$(document).on('turbolinks:load', function(){
// 画像プレビュー機能
  // 画像を挿入するinputタグを定義
  const buildFileField = (index)=> {
    const html = `<label class="FileWrapper" data-index="${index}">
                    <i class="fas fa-camera-retro"></i>
                    <input class="FileWrapper__uploader" type="file" name="my_tea[my_tea_images_attributes][${index}][url]" id="my_tea_my_tea_images_attributes_${index}_url" data-index="${index}">
                  </label>`;
    return html;
  }


  // 挿入するimageタグを定義
  const buildImage = (index, blobUrl) => {
    const html = `<div class="Preview">
                    <img data-index="${index}" width="140" height="140" src="${blobUrl}">
                    <div class="Preview__removeBtn">
                      <i class="far fa-times-circle"></i>
                    </div>
                  </div>`;
    return html
  };

  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex = $('.FileWrapper:last').data('index');
  fileIndex.splice(0, lastIndex);
  // 画像削除のためのチェックボックスを隠す
  $('.hidden-destroy').hide();
  // 既存のデータベース上の画像のindexを配列で所得
  existFileIndex = [...Array(lastIndex)].map((_, i) => i)

  // 画像選択フォームを隠す
  // 商品編集画面で保存失敗時に、画像削除用チェックボックスをfalseにする
  $.each(existFileIndex, function(i){
    $(`label[class="FileWrapper"][data-index="${i}"]`).hide();
    const hiddenCheck = $(`input[data-index="${i}"].hidden-destroy`);
    if (hiddenCheck) hiddenCheck.prop('checked', false);
  });

  // 画像プレビューのイベント
  $('.FormImage').on('change', '.FileWrapper__uploader', function(e){
    const targetIndex = $(this).parent().data('index');
    // 画像url取得
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 画像挿入フォームを隠す
    $(this).parent().hide();

    // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#Previews').append(buildImage(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('#Previews').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
    };
  });

  // 画像プレビュー削除機能
  $('.FormImage').on('click', '.Preview__removeBtn', function(e){
    const targetIndex = $(this).prev().data('index');
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    if (hiddenCheck) hiddenCheck.prop('checked', true);
    fileIndex.shift();
    // 該当する.FileWrapperと#previewの削除
    $(`label[data-index="${targetIndex}"]`).remove();
    $(`img[data-index="${targetIndex}"]`).parent().remove();
    // inputタグがゼロにならないように挿入
    if ($('.FileWrapper__uploader').length == 0){
      $('#Previews').append(buildFileField(fileIndex[0]));
    };
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