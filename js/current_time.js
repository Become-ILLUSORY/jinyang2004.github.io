function updateTime() {
  // 获取当前时间
  var now = new Date();

  // 将时间格式化为字符串
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;

  // 将时间字符串显示在页面上
  document.getElementById("current-time").innerHTML = timeString;
}

// 每秒钟更新一次时间
setInterval(updateTime, 1000);