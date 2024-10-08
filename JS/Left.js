"use strict";
function TEST()
{
    console.log('LeftJS-OK');
}

///呼叫主視窗事件///
function MainEvent()
{
    console.log('LeftJS-MainEvent-')   
    var MainObj= document.getElementById("MMD")
    ///事件觸發用 物件.click()
    MainObj.click()  ///結尾不用加上分號
}