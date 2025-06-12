"use strict";
function TEST()
{
    console.log('TopJS-OK');

    
}

window.addEventListener('message', function(event)
{
    console.log('從 iframe 收到：', event.data);
    document.getElementById('log').innerText = '[TOP]收到：' + 'id=' + event.data.id+'-'+'name='+event.data.DATA;
})