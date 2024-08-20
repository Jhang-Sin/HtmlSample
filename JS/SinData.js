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


/*加載JD檔案*/         
function reloadJS()

{
  ////console.log('JS載入中....');
  //判斷是否已經載過

  if(checkJsFileIsReady()) /*已經載入過了*/
    {
      console.log('return!!!已經載入過了 按下直接跳出');  
      alert('該JS已經加載過了喔~不重複執行')   
      return ;//結束function
   
    }
  else/*尚未載入過*/
    {
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
}

//檢查檔案是否已經存在

function checkJsFileIsReady()
{
  if (typeof window.myScriptLoaded === 'undefined') 
  {
    // 如果未載入，進行載入並設置標誌
    window.myScriptLoaded = false;
    console.log('尚未加載過')
    // 你的 JavaScript 代碼
    return false;
  }
  else
  {
    return true;
    console.log('JS檔案已經載入了~不進行重複加載')
  }
}