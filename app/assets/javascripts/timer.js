$(document).on('turbolinks:load', function(){
// ボタンを定義
  const startBtn = $(".ButtonArea__start");
  const resetBtn = $(".ButtonArea__reset");
  const detailBtn = $(".ButtonArea__detail");
  const timer = $('.CountDownArea__timertext').text();
  
// 関数定義
  // カウントダウン関数
    const countDown = () => {
      let nowTime = new Date();
      let nowTimeMin = nowTime.getMinutes(); 
      let nowTimesec = nowTime.getSeconds(); 


      let elapsedTimeMin = nowTimeMin - startTimeMin
      let elapsedTimeSec = nowTimeSec - startTimeSec


      // min = timer.slice(0,1);
      // sec = timer.slice(2,4);
      console.log(elapsedTimeMin);
      console.log(elapsedTimeec);
      
    }
// ボタンクリックの挙動
  // カウントダウン開始
  startBtn.on('click', function(){
    let startTime = new Date();
    let startTimeMin = startTime.getMinutes();
    let startTimeSec = startTime.getSeconds();

    setInterval(() => {
      countDown(startTimeMin, startTimeSec);
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