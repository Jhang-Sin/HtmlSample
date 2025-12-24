"use strict";
function Notes()
{

    document.getElementById("notesDay").innerText="";
    document.getElementById("notesDay").innerHTML = "異動/更新日:2025-12-24<br>-更新/異動內容:掛號作業<br>-測試資料檢核功能；頁面調整<br>-模擬資料建立<br>-系統架構調整<br>-作業功能模組化/角色權限設定及模擬";

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