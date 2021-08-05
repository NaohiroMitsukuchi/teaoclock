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
                      <i class="far fa-edit"></i>
                      <a class="MemoArea__label--dropBtn" href="/">淹れる</a>
                      <i class="far fa-comment-dots"></i>
                    </dd>
                    <dt class="MemoArea__detail">${log.note}
                    </dt>
                  </dl>
                </div>`
    $('.DropConditionLists').append(html);
  };
// 紅茶ログのモーダルウィンドウ用を表示
  const buildModalOverlay = () =>{
    let html = `<div id="modal-overlay"></div>
                <div class="DropConditionLists">
                  <i class="far fa-times-circle" id="modal-close"></i>
                </div>`
    if($("#modal-overlay")[0]) return false ;
    $("body").append(html);
    $("#modal-overlay").fadeIn("slow");
  };
// 紅茶ログのモーダルウィンドウ用を削除
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
    let card_index = $(this).data('index') + 1;
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
  })
});

