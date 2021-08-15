$(document).on('turbolinks:load', function(){
// 紅茶ログを挿入する関数
  const buildDropConditionLogs = (log) => {
    const tea_type = ["ストレート","アイス","ミルク","ソーダ"];
    let html = `<div class="ListWrapper">
                  <i class="far fa-circle"></i>
                  <div class="List">
                    <dl class="List__evaluation">
                      <dd class="List__label List__evaluation--label"><i class="fas fa-star"></i></dd>
                      <dt class="List__detail List__evaluation--detail">${log.evaluation}</dt>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-hourglass-start"></i></dt>
                      <dd class="List__detail">${log.time} 秒</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-tint"></i></dt>
                      <dd class="List__detail">${log.water_quantity}ml</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fab fa-envira"></i></dt>
                      <dd class="List__detail">${log.leaf_quantity} g</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-coffee"></i></dt>
                      <dd class="List__detail">${tea_type[log.tea_type_id - 1]}</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-users"></i></dt>
                      <dd class="List__detail">${log.number_of_people} 人</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-temperature-high"></i></dt>
                      <dd class="List__detail">${log.temperature} ℃</dd>
                    </dl>
                  </div>
                  <dl class="MemoArea">
                    <dd class="MemoArea__label">
                      <a class="MemoArea__label--editBtn" href="/my_teas/${log.my_tea_id}/drop_conditions/${log.id}/edit">
                        <i class="far fa-edit"></i>
                      </a>
                      <a class="MemoArea__label--btn" href="/my_teas/${log.my_tea_id}/drop_conditions/${log.id}/drop">淹れる</a>
                      <a class="MemoArea__label--btn" rel="nofollow" data-method="delete" href="/my_teas/${log.my_tea_id}/drop_conditions/${log.id}">削除</a>
                      <i class="far fa-comment-dots"></i>
                    </dd>
                    <dt class="MemoArea__detail">${log.note}
                    </dt>
                  </dl>
                </div>`
    $('.DropConditionLists').append(html);
  };
  // <a class="MemoArea__label--dropBtn" href="/my_teas/${log.my_tea_id}/drop_conditions/${log.id}/edit">淹れる</a>
// 紅茶ログのモーダルウィンドウオーバーレイを挿入する関数
  const buildModalOverlay = () =>{
    let html = `<div id="modal-overlay"></div>
                <div class="DropConditionLists">
                  <i class="far fa-times-circle" id="modal-close"></i>
                </div>`
    if($("#modal-overlay")[0]) return false ;
    $("body").append(html);
    $("#modal-overlay").fadeIn("slow");
  };
// 紅茶ログのモーダルウィンドウを削除する関数
  const rempveModalWindow = ()=>{
    $("#modal-overlay,#modal-close").unbind().click(function(){
      $(".DropConditionLists, #modal-overlay").fadeOut("slow",function(){
        $("#modal-overlay").remove();
        $('.DropConditionLists').remove();
      });
    });
  };

// 紅茶ログをモーダルウィンドウで表示するイベント
  $('.my_tea_log').on('click', function(){
    let card_index = $(this).data('index');
    $.ajax({
      type: 'GET',
      url: '/my_teas/logs_show',
      data:{
        card_index: card_index
      },
      dataType: 'json'
    })
    .done(function(logs){
      if(logs.length != 0){
        buildModalOverlay();
        $.each(logs, function(index, log){
          buildDropConditionLogs(log);
        });
        $('.DropConditionLists').fadeIn("slow");
        rempveModalWindow();
      }
    })
    .fail(function(){
      alert('error');
    });
  });
});

