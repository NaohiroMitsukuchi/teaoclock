$(document).on('turbolinks:load', function(){
// ボタンを定義
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  let timerMin    = $('.CountDownArea__timertext--min').text();
  // let timerSec    = $('.CountDownArea__timertext--sec').text();
  let elapsedTime = 0;

  // タイマーの書き換えの関数
  const rewiteTimer = (elapsedTime) => {
    timerMin --;
    if (timerMin < 0){
      clearInterval(TimerId);
    }else{
      $('.CountDownArea__timertext--min').text(timerMin);
    }
    // if (timerSec - elapsedTime % 60 < 0){
    //   remainingSec = timerSec - elapsedTime + 60
    //   $('.CountDownArea__timertext--sec').text(remainingSec);
    // }else if(timerSec - elapsedTime % 60 === 0){
    //   remainingMin = timerMin - 1;
    //   remainingSec = timerSec - elapsedTime
    //   $('.CountDownArea__timertext--Min').text(remainingMin);
    //   $('.CountDownArea__timertext--sec').text(`${remainingSec}0`);
    // }else{
    //   remainingSec = timerSec - elapsedTime + 60
    //   $('.CountDownArea__timertext--sec').text(remainingSec);
    // }
  }
  // カウントダウン機能
  const TimerId = setInterval(() => {
    elapsedTime ++;
    rewiteTimer(elapsedTime);
  }, 1000);

// ボタンクリックの挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    // let startTime = new Date();
    // let startTimeMin = startTime.getMinutes();
    // let startTimeSec = startTime.getSeconds();

    const TimerId = setInterval(() => {
      elapsedTime ++;
      rewiteTimer(elapsedTime);
    }, 1000);
  });

  
  // タイマーリセット
  resetBtn.on('click', function(){
    console.log("reset");
  });
  // 詳細設定
  detailBtn.on('click', function(){
    console.log("detail");
  });
})