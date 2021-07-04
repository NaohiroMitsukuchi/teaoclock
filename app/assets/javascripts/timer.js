$(document).on('turbolinks:load', function(){
// ボタンを定義
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  let timerMin    = $('.CountDownArea__timertext--min');
  let elapsedTime = 0;
  let resetMin    = $('.CountDownArea__timertext--min').text();
  let intervalId; 

  // タイマーの書き換えの関数
  const rewiteTimer = (intervalId, elapsedTime) => {
    remainTime = resetMin - elapsedTime;
    if (remainTime < 0){
      clearInterval(intervalId);
    }else{
      timerMin.html(remainTime);
    }
  }

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