"use strict";
function TEST()
{
    ///console.log('footJS-OK');
    alert('foot!!');
}


window.addEventListener('message', function(event)
{
    console.log('從 iframe 收到：', event.data);
    document.getElementById('log').innerText = '[FOOT]收到：' + 'id=' + event.data.id+'-'+'name='+event.data.DATA;
})