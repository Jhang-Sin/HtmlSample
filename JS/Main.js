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
      function callframe()
      {        
       console.log('Call Other Iframe') ;
      }
      