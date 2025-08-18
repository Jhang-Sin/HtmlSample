const channel = new BroadcastChannel('iframe-channel');

// 接收訊息
channel.onmessage = (event) => {
  const log = document.getElementById("log");
  log.textContent += `\n[收到] ${event.data.sender}: ${event.data.message}`;
};

// 傳送訊息（供 button 呼叫）
function sendMessage(senderId) {
  const input = document.getElementById("inputMessage");
  const message = input.value.trim();
  if (message === "") return;

  channel.postMessage({ sender: senderId, message: message });
  input.value = "";
}