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
        const iframe = document.getElementById('IFRL');
      iframe.contentWindow.postMessage('你好 iframe，我是主頁', '*');
      }

      /**接收子框傳來的訊息*/      

      window.addEventListener('message', function(event) {
        console.log('從 iframe 收到：', event.data);
        document.getElementById('log').innerText = '從 iframe 收到：' + event.data;
      });