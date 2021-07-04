$(document).on('turbolinks:load', function(){
// ボタンを定義
  const startBtn  = $(".ButtonArea__start");
  const resetBtn  = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  let timerMin    = $('.CountDownArea__timertext--min').text();
  // let elapsedTime = 0;

  // タイマーの書き換えの関数
  const rewiteTimer = (TimerId) => {
    timerMin --;
    if (timerMin < 0){
      clearInterval(TimerId);
    }else{
      $('.CountDownArea__timertext--min').text(timerMin);
    }
  }

// ボタンクリックの挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    const TimerId = setInterval(() => {
      rewiteTimer(TimerId);
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