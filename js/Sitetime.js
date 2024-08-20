// 运行时间
function siteTime() {
  // 设置定时器，每秒调用一次 siteTime 函数
  window.setTimeout(siteTime, 1000);

  // 获取当前日期和时间
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth() + 1;
  var todayDate = today.getDate();
  var todayHour = today.getHours();
  var todayMinute = today.getMinutes();
  var todaySecond = today.getSeconds();

  // 计算特定日期的时间戳（注意月份是从 0 开始的）
  var t1 = Date.UTC(2022, 1, 7, 0, 0, 0);
  // 计算当前日期的时间戳（注意月份是从 0 开始的）
  var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
  // 计算两个时间戳的差值
  var diff = t2 - t1;

  // 计算年份差值
  var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  // 计算天数差值（除去整年的天数）
  var diffDays = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
  // 计算小时差值
  var diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  // 计算分钟差值
  var diffMinutes = Math.floor((diff / (1000 * 60)) % 60);
  // 计算秒数差值
  var diffSeconds = Math.floor(diff / 1000) % 60;

  // 更新页面上的运行时间显示
  document.getElementById("sitetime").innerHTML = "本站已运行 " + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
}

siteTime();
