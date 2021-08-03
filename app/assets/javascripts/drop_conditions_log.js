$(document).on('turbolinks:load', function(){
  const tea_type = ["ストレート","アイス","ミルク","ソーダ"];
  const buildDropConditionLogs = (log) => {
    console.log("hello");
    let html = `<div class="ListWrapper">
                  <div class="List">
                    <dl class="List__evaluation">
                      <dt class="List__detail List__evaluation--detail">${log.evaluation}</dt>
                      <dd class="List__label List__evaluation--label">評価</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-hourglass-start"></i></dt>
                      <dd class="List__detail">${log.time} 秒</dd>
                    </dl>
                    <dl>
                      <dt class="List__label"><i class="fas fa-tint"></i></dt>
                      <dd class="List__detail">${log.water_quantity} ml</dd>
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
                      <i class="far fa-comment-dots"></i>
                    </dd>
                    <dt class="MemoArea__detail">${log.note}
                    </dt>
                  </dl>
                </div>`
    $('.DropConditionLists').append(html);
  };

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
      console.log(logs);
      $.each(logs, function(index, log){
        buildDropConditionLogs(log);
      });
    })
    .fail(function(){
      alert('error');
    });
  })
});