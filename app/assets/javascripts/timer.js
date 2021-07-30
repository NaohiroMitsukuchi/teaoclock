$(document).on('turbolinks:load', function(){
// 定数、変数の定義
  let waterQuantity = $("#water_quantity").text();
  let leafQuantity = $("#leaf_quantity").text();
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

// セレクトボックス選択時の挙動
  // 人数選択時
  




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