<!------- 自定義函式--->
<!------- 自定義函式--->
<script>
var AddendNunm = 0; //加數
var Summand = 0;	 //被加數
var Operand = 0;	//運算元 +-*/
var answer = 0;	// 答案


/////自定義JS function

function targeDisplay(N1,N2)
{
	console.log('N1=' + N1);
	console.log('N2='+N2);
	
	///如果是點下數字鍵
	if(N2==0)
	{
	///表示點下數字鍵
	console.log(N1);
	////螢幕輸出字元
	SettingDisplay(N1);
	
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
	

///zero觸發
function zero()
{
console.log('觸發zero');

///抓取畫面數值
var temp = document.getElementById('disp');

///如果是0則不動作.否則 X10 丟回
if(parseIn(temp) ==0)
{
console.log('畫面原數值為0,不動作');


}
///否則數值X10
else{
temp = (temp*10);

//丟回temp 回顯示畫面
SettingDisplay(temp);
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
RedefaultValue();

}
<!-----負責抓取UI上面目前顯示數值---->
function getdisplayNum()
{
	var reNum = 0;
	
	var DisplayOBJ = document.getElementById('disp');
	
	reNum = parseInt(DisplayOBJ.value);
	return reNum;

}



<!-----負責處理UI顯示------>

function SettingDisplay(InPutValue)
{
	console.log('FUN-SettingDisplay');
	if(InPutValue == null || InPutValue == undefined)
	{	
		///
		//如果輸入是空,則跳出function//
		console.log('YouKey InValue IS Null Or undefined');
		return ;
	}
		///否則則刷新UI物件畫面//
	else
	{
		//抓取畫面物件塞入顯示值
		var DisplayOBJ = document.getElementById('disp')//抓取畫面上ID為disp的物件
		//畫面數值*10+輸入數值
		DisplayOBJ.value = InPutValue + parseInt(DisplayOBJ.value * 10); ///DisplayOBJ.value為畫面上物件內容原數值
		//EX:轉換文字為數字(var n = parseInt(a))//
	}




};






</script>