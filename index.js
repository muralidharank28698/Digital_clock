function currentTime() {
  var getDate = new Date();

  let hour = getDate.getHours();
  let minute = getDate.getMinutes();
  let sec = getDate.getSeconds();
  let mid = "12";
  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  var val = document.getElementById("hour");
  val.innerHTML = hour;
  // console.log(val);
  minute = updateTime(minute);
  var val = document.getElementById("minute");
  val.innerHTML = minute;
  sec = updateTime(sec);
  var val = document.getElementById("seconds");
  val.innerHTML = sec;
  var val = document.getElementById("mid");
  val.innerHTML = mid;
  var t = setTimeout(currentTime, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
currentTime();
