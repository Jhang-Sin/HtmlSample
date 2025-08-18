"use strict";
function TEST()
{
    console.log('LeftJS-OK');
}

// ///呼叫主視窗事件///
// function MainEvent()
// {
//    var MainObj= document.getElementById("MMD")
//     ///事件觸發用 物件.click()
//     MainObj.click()  ///結尾不用加上分號
// }

window.addEventListener("message", function(event)
{
    ///--允許清單--///
    ///發布後的網址["https://jhang-sin.github.io"
    const allowedOrigins =
    [
        "https://jhang-sin.github.io",
        "http://localhost:5500",
        "http://127.0.0.1:5500"
    ];   
    

    
    // 使用標準化處理
//const origin = event.origin.toLowerCase();

// if (!allowedOrigins.includes(origin)) 
//     {
//         console.log("不合法路徑=[" + origin.toString() &"]");
//          return;
//     }
console.log('從 iframe收到：', event.data);
document.getElementById("log").innerText = '[Left]收到：' +'id=' + event.data.id+'-'+'name='+event.data.DATA;
})

/*

============================
element.addEventListener(event, function, useCapture)

[event]	必须。字符串，指定事件名。
注意: 不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。

[function]	必须。指定要事件触发时执行的函数。
当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。例如， "click" 事件属于 MouseEvent(鼠标事件) 对象。

[useCapture]	可选。布尔值，指定事件是否在捕获或冒泡阶段执行。
可能值:
true - 事件句柄在捕获阶段执行
false- false- 默认。事件句柄在冒泡阶段执行
=================================
*/

window.addEventListener('message', function(event)
{
//  if (event.origin !== "https://jhang-sin.github.io/") return;

//   console.log("收到訊息：", event.data);     // { msg: "Hello from iframe" }
//   console.log("來源網址：", event.origin);    // https://jhang-sin.github.io/
//   console.log("來源視窗：", event.source);    // 可用來回訊

    console.log('從 iframe 收到：', event.data);
    document.getElementById('log').innerText = '[LEFT]收到：' + 'id=' + event.data.id+'-'+'name='+event.data.DATA;
})

function SetData(Data)
{
    console.log('START-SET DATA');


}
