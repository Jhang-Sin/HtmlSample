"use strict";

var aaa = 888;
var AddendNunm = 0;
var Summand = 0;
var Operand = 0;
var answer = 0;
function targeDisplay(N1, N2) {
    console.log('N1=' + N1);
    console.log('N2=' + N2);
    if (N2 == 0) {
        console.log(N1);
        SettingDisplay(N1);
    } else {
        console.log('觸發了四則運算');
    }
}
function zero() 
{
    console.log('觸發zero');
    var temp = document.getElementById('disp');
    if (parseIn(temp) == 0){
        console.log('畫面原數值為0,不動作');
    } 
	else{
        temp = (temp * 10);
        SettingDisplay(temp);
    }
}
function DecimalPoint(){
    console.log('觸發了小數點');
}
function ClearALL() 
{
    console.clear();
    var DisplayOBJ = document.getElementById('disp');
    DisplayOBJ.value = 0;
    RedefaultValue();
}

 function getdisplayNum() 
 {
    var reNum = 0;
    var DisplayOBJ = document.getElementById('disp');
    reNum = parseInt(DisplayOBJ.value);
    return reNum;
}
//負責處理UI顯示// 
function SettingDisplay(InPutValue) 
{
    console.log('FUN-負責處理UI顯示');
    if (InPutValue == null || InPutValue == undefined) 
	{
        console.log('YouKey InValue IS Null Or undefined');
        return;
    } else 
	{
        var DisplayOBJ = document.getElementById('disp')
            DisplayOBJ.value = InPutValue
    }
}

SETRedefaultValue();////預設值設定

/////自定義JS function
function targeDisplay(N1,N2)
{
	console.log('N1=' + N1);
	console.log('N2='+N2);
	
	///如果是點下數字鍵
	if(N2==0)
	{
	///表示點下數字鍵
	console.log('只有觸發了數字');	
	console.log(N1);
	
	}else	
	{
		console.log('觸發了四則運算');	
		
			switch(N2)
			{
				case 11:
				
				break;
			
				case 12:
				
				break;
			
				case 13:
				break;
				
				case 14:
				break;
			
				case 15:
				break;		
			
			}
		}
		
	
		
		
		
}	


///小數點處發
function DecimalPoint()
{
console.log('觸發了小數點');
}

//歸零重製//
function ClearALL()
{
///清空console.log()
console.clear();

//重製UI顯示與暫存//
//1.歸零UI畫面
var DisplayOBJ = document.getElementById('disp');//抓取畫面上ID為disp的物件
DisplayOBJ.value =0;
//2.歸零暫存-予以預設值
SETRedefaultValue();

}

///重置初始值
function SETRedefaultValue()
{
	AddendNunm = 0; //加數
	Summand = 0;	 //被加數
	Operand = 0;	//運算元 +-*/
	answer = 0;	// 答案
	console.log('預設值設定完畢');
}
