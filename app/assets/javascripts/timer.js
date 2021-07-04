$(document).on('turbolinks:load', function(){
// ボタンを定義
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  let timerMin    = $('.CountDownArea__timertext--min').text();
  let elapsedTime = 0;
  let resetMin    = $('.CountDownArea__timertext--min').text();
  let intervalId; 

  // タイマーの書き換えの関数
  const rewiteTimer = (intervalId, elapsedTime) => {
    timerMin = resetMin - elapsedTime;
    if (timerMin < 0){
      clearInterval(intervalId);
    }else{
      $('.CountDownArea__timertext--min').text(timerMin);
    }
  }

// ボタンクリック時の挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    // $('.CountDownArea__timertext--min').disabled = true;
    if(intervalId == null){
      // intervalId = 0;
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
    $('.CountDownArea__timertext--min').text(resetMin);

  });
  // 詳細設定
  detailBtn.on('click', function(){
    console.log("detail");
  });
})