"use strict";
function TEST()
{
    console.log('RightJS-OK');
}

window.addEventListener('message', function(event)
{
//  if (event.origin !== "https://jhang-sin.github.io/") return;

//   console.log("收到訊息：", event.data);     // { msg: "Hello from iframe" }
//   console.log("來源網址：", event.origin);    // https://jhang-sin.github.io/
//   console.log("來源視窗：", event.source);    // 可用來回訊

    console.log('從 iframe 收到：', event.data);
    document.getElementById('log').innerText = '[RIGHT]收到：' + 'id=' + event.data.id+'-'+'name='+event.data.DATA;
})