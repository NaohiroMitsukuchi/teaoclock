$(document).on('turbolinks:load', function(){
  const tea_type = ["ストレート","アイス","ミルク","ソーダ"];
  const buildDropConditionLogs = (log) => {
    let html = `<div class="List">
                  <dl>
                    <dt class="List__label">時間</dt>
                    <dd class="List__detail">${log.time}</dd>
                  </dl>
                  <dl>
                    <dt class="List__label">湯量</dt>
                    <dd class="List__detail">${log.water_quantity}</dd>
                  </dl>
                  <dl>
                    <dt class="List__label">茶葉</dt>
                    <dd class="List__detail">${log.leaf_quantity}</dd>
                  </dl>
                  <dl>
                    <dt class="List__label">飲み方</dt>
                    <dd class="List__detail">${tea_type[log.tea_type_id - 1]}</dd>
                  </dl>
                  <dl>
                    <dt class="List__label">人数</dt>
                    <dd class="List__detail">${log.number_of_people}</dd>
                  </dl>
                  <dl>
                    <dt class="List__label">温度</dt>
                    <dd class="List__detail">${log.temperature}</dd>
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
      $.each(logs, function(index, log){
        buildDropConditionLogs(log);
      });
    })
    .fail(function(){
      alert('error');
    });
  })
});

