"use strict";
function Notes()
{

    document.getElementById("notesDay").innerText="";
    document.getElementById("notesDay").innerHTML = "異動/更新日:<br>2026-1-30<br>-更新/異動內容:<br>-維護管理<br>-檢核功能調整<br>-檢核頁面調整<br>-掛號作業資料顯示修正<br>";

}


let AllNum = 0;///宣告全域變數[let + 變數名]
///let 可能會被重新指定值

const Allnum2 = 99;

// const 不會被重新指定值

/*
建議在開發ES6之後的專案中，使用“ const ”或者“let”嚴謹的宣告變數而非“var”，
除了讓開發的專案更加穩定外，也可以增加程式碼的可讀性。例如：“ const ”可以提醒閱讀程式碼的人，
此變數不應該去做改變。

*/