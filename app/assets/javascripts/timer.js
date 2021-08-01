$(document).on('turbolinks:load', function(){
// 定数、変数の定義
  // 湯量、茶葉量計算用
  let waterQuantity = $('#water_quantity').text();
  let leafQuantity = $('#leaf_quantity').text();
  let numberOfPeople = $('#number_of_people_select').val();
  let teaTypeIndex = $('#tea_type_select').val();

  // ストップウォッチ用
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  let timerSec    = $(".CountDownArea__timertext");
  let elapsedTime = 0;
  let resetSec    = $(".CountDownArea__timertext").text();
  let intervalId; 
  
// 関数定義
  // タイマー終了後にログ登録フォームを出現させる関数
  const showForm = () => {
    $('.FormArea').css("display", "block");
    $('#form_number_of_people').val(numberOfPeople);
    $('#form_tea_type').val(teaTypeIndex);
    $('#form_water_quantity').val(waterQuantity);
    $('#form_leaf_quantity').val(leafQuantity);
    $('#form_time').val(resetSec);
  }
  // ストップウォッチ稼働中のタイマーの書き換えの関数
  const rewiteTimer = (intervalId, elapsedTime) => {
    remainTime = resetSec - elapsedTime;
    if (remainTime < 0){
      clearInterval(intervalId);
      showForm();
    }else{
      timerSec.html(remainTime);
    }
  }


  // 湯量、茶葉量書き換えの関数
  const rewriteQuantity = (numberOfPeople, teaTypeIndex) => {
    if(teaTypeIndex == 0){
      waterQuantity = 150 * numberOfPeople
      leafQuantity = 2.5 * numberOfPeople
    }else if(teaTypeIndex == 1 || teaTypeIndex == 2){
      if(numberOfPeople == 0){
        waterQuantity = 150
        leafQuantity = 2.5
      }else{
        waterQuantity = 150 * numberOfPeople
        leafQuantity = 2.5 * numberOfPeople
      }
    }else if(teaTypeIndex == 3 || teaTypeIndex == 4){
      if(numberOfPeople == 0){
        waterQuantity = 75
        leafQuantity = 2.5
      }else{
        waterQuantity = 75 * numberOfPeople
        leafQuantity = 2.5 * numberOfPeople
      }
    }
    $("#water_quantity").html(waterQuantity);
    $("#leaf_quantity").html(leafQuantity);
  }
  // 定義した変数の値をリセットして選択肢を未選択にする
  const resetSelect = () => {
    waterQuantity = 150
    leafQuantity = 2.5
    numberOfPeople = 0
    teaTypeIndex = 0
    multipleRatio = 1
    $('#number_of_people_select').val(0);
    $('#tea_type_select').val(null);
    $("#water_quantity").html(waterQuantity);
    $("#leaf_quantity").html(leafQuantity);
  };

// 人数選択時の挙動
  $('#number_of_people_select').on('change', function(){
    numberOfPeople = $(this).val();
    if(numberOfPeople == 0){
      resetSelect();
    }else{
      rewriteQuantity(numberOfPeople, teaTypeIndex);
    } 
  });
  // 飲み方選択時の挙動
  $('#tea_type_select').on('change', function(){
    teaTypeIndex = $(this).val();
    if(teaTypeIndex == 0){
      resetSelect();
    }else{
      rewriteQuantity(numberOfPeople, teaTypeIndex);
    } 
  });

// ボタンクリック時の挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    if(intervalId == null){
      intervalId = setInterval(() => {
        elapsedTime ++;
        rewiteTimer(intervalId, elapsedTime);
      }, 1000);
    }
  });

  // タイマーリセット
  resetBtn.on('click', function(){
    clearInterval(intervalId);
    elapsedTime = 0;
    intervalId = null;
    timerSec.html(resetSec);
  });

  // フォーム削除ボタン
  $('.removeBtn').on('click', function(){
    $('.FormArea').css("display", "none");
  });
});