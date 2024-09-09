"use strict";
function CallReLJS()
{
    alert('JS已被加載,呼叫成功!');
}

(function() {
    if (typeof window.myScriptLoaded === 'undefined') {
        window.myScriptLoaded = true;

        // 你的 JavaScript 代碼
        console.log("Script is loaded for the first time.");
    } else {
        console.log("Script is already loaded.");
    }
})();



