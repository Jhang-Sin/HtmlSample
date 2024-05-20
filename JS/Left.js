"use strict";
function TEST()
{
    console.log('LeftJS-OK');
}

///呼叫主視窗事件///
function MainEvent()
{
    console.log('LeftJS-MainEvent-')
    var MainObj ;
    MainObj = document.getElementById('MMD');
    MainObj.wrDiv('OH ~ Left');
}