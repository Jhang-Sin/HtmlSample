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

      /*-----------------
      $(selector).toggle(speed,callback,switch)
      speed:可选。规定元素从可见到隐藏的速度（或者相反）。默认为 "0"。
      可能的值：
      -毫秒 （比如 1500）
      -"slow"
      -"normal"
      -"fast"
      在设置速度的情况下，元素从可见到隐藏的过程中，会逐渐地改变其高度、宽度、外边距、内边距和透明度。
      如果设置此参数，则无法使用 switch 参数。
      callback:可选。toggle 函数执行完之后，要执行的函数。
      除非设置了 speed 参数，否则不能设置该参数。
      switch:可选。布尔值。规定 toggle 是否隐藏或显示所有被选元素。
      -True - 显示所有元素
      -False - 隐藏所有元素
      -如果设置此参数，则无法使用 speed 和 callback 参数。
      ------------------- */


/*將接收寫在畫面的DIV中 */

      function wrDiv(SubStr)
      {   
          var ShowOBJ = document.getElementById("MMD");                
          ShowOBJ.innerHTML += SubStr;

      }
      /*清空 DIV */
      function ClearTXT()
      {
        var ShowOBJ = document.getElementById("MMD");                
        ShowOBJ.innerHTML = '';
        
      } 

      /* call Other-Iframe*/
      function SendData()
      {
        var IdArrays = ['IFRT','IFRL','IFRR','IFRF'];
        var StrName = document.getElementById("TxtName").value;
        var intAge = document.getElementById("Numage").value;

        // var SData =
        // [
        //   {id:"001"},
        //   {name:"ABC"},
        //   {DATA:"OPUSER"}
        // ];

         var SData = {
          id:intAge,
          name: StrName,
          DATA: "DATA-"+StrName
        };

        var TData={
           id:66666,
          name: "CoKieName",
          DATA: "CoKie-DATA"

        }





        for (let i=0;i<IdArrays.length;i++)
        {
          const iframe = document.getElementById(IdArrays[i]);
          iframe.contentWindow.postMessage(SData, '*');

        }    
      }

      function ResData()
      {
        console.log('ResData');
         var IdArrays = ['IFRT','IFRL','IFRR','IFRF'];
         var NullData = {
          id: "",
          name: "",
          DATA: ""
        };

         for (let i=0;i<IdArrays.length;i++)
        {    
              const iframe = document.getElementById(IdArrays[i]);
              iframe.contentWindow.postMessage(NullData, '*');                   

          
        }

      }

      function DisiframeShow()
      {
        

      }
      function SetCookie()
      {
        alert('SET');
        console.log('SetCookie');
        // 設定 cookie
        //document.cookie = 'TData=${JSON.stringify(TData)}; path=/';



      }





      /**接收子框傳來的訊息*/      

      window.addEventListener('message', function(event) {
        console.log('從 iframe 收到：', event.data);
        document.getElementById('log').innerText = '[M]收到：' + 'id=' + event.data.id+'-'+'name='+event.data.DATA;
      });
      
      /*
      ------------
      [window.addEventListener(type, listener, options);]

      type:字串，表示要監聽的事件類型，例如 "click"、"load"、"keydown" 等。
      listener:當事件發生時要執行的函式（callback function）。
      options:（可選）設定物件或布林值，控制事件監聽的行為。常用的選項有：
        - capture: 是否使用事件捕獲階段（預設是 false）
        - once: 是否只觸發一次（預設是 false）
        - passive: 是否不會呼叫 preventDefault()（預設是 false）
        
      常見事件
          -'click'	使用者點擊元素時觸發
          -'keydown' / 'keyup'	鍵盤按下 / 放開時觸發
          -'load'	網頁或資源載入完成
          -'DOMContentLoaded'	初始 HTML 解析完畢（不等圖片或 CSS）
          -'resize'	瀏覽器視窗大小改變時觸發
          -'scroll'	捲動時觸發
          -'input'	表單輸入內容改變時觸發
          -'submit'	表單送出時觸發
          -'error'	發生錯誤時（圖片載入錯誤、script 錯誤等）
          -'focus'/'blur'	元素獲得 / 失去焦點時
          -'mousemove' / 'mouseover'	滑鼠移動 / 移入元素時
          'change'	表單元素改變（例如 select、checkbox）




      ------------
      */