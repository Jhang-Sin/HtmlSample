"use strict";
var filepath = "JS/";
var filename = "RL.js";

function SWDT()
            {
                var ReturnStr = '';///回傳用
               var  year= "00";
               var mon= "00";
               var Day="00";
               var HH = "00";
               var MM = "00";
               var SS = "00";                
                

                var DT = new Date;
                year = DT.getFullYear();///取年
                mon = (DT.getMonth()+1);///取月///+1修正月份
                Day = (DT.getDate());///取日
                HH = DT.getHours(); ///取時
                MM = DT.getMinutes();///取分
                SS = DT.getSeconds();//取秒


                ReturnStr = year +"年"+mon+"月"+Day+"日 "+HH+":"+MM+":"+SS+"秒";               
                return ReturnStr

            };
        function TimeUsePhoto()
        {

            ///抓物件 [TIMEIMG]
            var ShowOBJ = document.getElementById("TIMEIMG");
                            
            ShowOBJ.innerHTML += SubStr;


        }
        
function reloadJS()
{
console.log('JS載入中....');

var script = document.createElement("script");
script.type="text/javascript";
script.src= "JS/RL.js";
document.body.appendChild(script);
console.log('加載完畢');
var tipbtn = document.getElementById("RelFunBT");
tipbtn .disabled = false///JS載入後解除鎖定///

var btspand = document.getElementById("spTXT");
btspand.remove(); // 移除span轉圈圈效果


}

//檢查檔案是否已經存在

function checkJsFileIsReady(filepath, filename)
{
  console.log('檔案狀態=');
    // checkFile-JS/RL.js
    ////alert('checking...')
    if(filepath == null || filename == null || filepath === "" || filename ===""){
        return false
       }
      var xmlhttp;
      if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
      }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }
      xmlhttp.open("GET",filepath,false);
      xmlhttp.send();
      if(xmlhttp.readyState === 4){
      if(xmlhttp.status === 200)  return true; //url存在
      else if(xmlhttp.status === 404) return false; //url不存在
      else return false;//其他状态
  }

}


