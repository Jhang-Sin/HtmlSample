"use strict";

function SWDT()
            {
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

                alert(year +"年"+mon+"月"+Day+"日 "+HH+":"+MM+":"+SS+"秒");

            };