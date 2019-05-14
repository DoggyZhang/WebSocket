/**
 * WebSocket 部分
 */
var mWebsocket = null;
var mIsWebsocketAvailable = false;
var mReceiverMsg;

//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
    mWebsocket = new WebSocket("ws://localhost:8080/websocket");
    mIsWebsocketAvailable = false;
} else {
    alert('当前浏览器 Not support websocket')
    mIsWebsocketAvailable = false;
}

//连接发生错误的回调方法
mWebsocket.onerror = function () {
    setSocketMessageInnerHTML("WebSocket连接发生错误");
    mIsWebsocketAvailable = false;
};

//连接成功建立的回调方法
mWebsocket.onopen = function () {
    setSocketMessageInnerHTML("WebSocket连接成功");
    mIsWebsocketAvailable = true;
}

//接收到消息的回调方法
mWebsocket.onmessage = function (event) {
    console.log("Websocket.onmessage : " + event.data);
    setSocketMessageInnerHTML(event.data);
    mReceiverMsg = event.data;
}

//连接关闭的回调方法
mWebsocket.onclose = function () {
    setSocketMessageInnerHTML("WebSocket连接关闭");
    mIsWebsocketAvailable = false;
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    mIsWebsocketAvailable = false;
    closeWebSocket();
}

//将消息显示在网页上
function setSocketMessageInnerHTML(innerHTML) {
    document.getElementById('receiver_data').innerHTML = innerHTML + '<br/>';
}

//关闭WebSocket连接
function closeWebSocket() {
    mIsWebsocketAvailable = false;
    mWebsocket.close();
}

//发送消息
function sendSocket(msg) {
    if (mIsWebsocketAvailable) {
        mWebsocket.send(msg);
    }
}
