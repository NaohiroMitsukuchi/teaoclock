$(document).on('turbolinks:load', function(){
// 定数、変数の定義
  // 湯量、茶葉量計算用
  let waterQuantity = 150;
  let leafQuantity = 2.5;
  let save_number;
  let selectId; // 1: 飲み方でミルク、ソーダ選択時

  // ストップウォッチ用
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  let timerMin    = $(".CountDownArea__timertext--min");
  let elapsedTime = 0;
  let resetMin    = $(".CountDownArea__timertext--min").text();
  let intervalId; 

// 関数定義
  // ストップウォッチ稼働中のタイマーの書き換えの関数
  const rewiteTimer = (intervalId, elapsedTime) => {
    remainTime = resetMin - elapsedTime;
    if (remainTime < 0){
      clearInterval(intervalId);
    }else{
      timerMin.html(remainTime);
    }
  }

  // 湯量、茶葉量書き換えの関数
  const rewriteQuantity = (waterQuantity,leafQuantity) => {
    $("#water_quantity").html(waterQuantity);
    $("#leaf_quantity").html(leafQuantity);
  }

// セレクトボックス選択時の挙動
  // 人数選択時
  $('#number_of_people_select').on('change', function(){
    let number_of_people = $(this).val();
    if(save_number == null){
      waterQuantity = 150 * number_of_people;
      leafQuantity = 2.5 * number_of_people;
      rewriteQuantity(waterQuantity, leafQuantity);
      save_number = number_of_people;
    }else if(number_of_people == 0){
      waterQuantity = 150;
      leafQuantity = 2.5;
      rewriteQuantity(waterQuantity, leafQuantity);
      save_number = null;
      selectId = null;
    }else{
      waterQuantity = waterQuantity / save_number * number_of_people;
      leafQuantity = leafQuantity / save_number * number_of_people;
      rewriteQuantity(waterQuantity, leafQuantity);
      save_number = number_of_people;
    };
  });

  // 人数選択時
  $('#tea_type_select').on('change', function(){
    let tea_type_index = $(this).val();
    if(tea_type_index == 3 || tea_type_index == 4 ){
      if(selectId == null ){
        selectId = 1;
        waterQuantity = waterQuantity / 2
        $("#water_quantity").html(waterQuantity);
      }
    }else if(tea_type_index == 0 || tea_type_index == 1 || tea_type_index == 2 ){
      if(selectId == 1){
        waterQuantity = waterQuantity * 2
        $("#water_quantity").html(waterQuantity);
        selectId = null;
      }
    };
  });

// ボタンクリック時の挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    if(intervalId == null){
      intervalId = setInterval(() => {
        elapsedTime ++;
        rewiteTimer(intervalId, elapsedTime);
      }, 1000);
    };
  });

  // タイマーリセット
  resetBtn.on('click', function(){
    clearInterval(intervalId);
    elapsedTime = 0;
    intervalId = null;
    timerMin.html(resetMin);
  });
  
  // 詳細設定
  detailBtn.on('click', function(){
    console.log("detail");
  });
})