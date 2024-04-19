"use strict";
function TEST()
{
    console.log('MainJS-OK');
}
/*收闔效果*/ 
$(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
        $(".xs1").toggle();
        $(".xs2").toggle();
      });});