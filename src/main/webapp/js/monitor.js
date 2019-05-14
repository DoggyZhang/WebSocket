/**
 * 绘制用到的变量部分
 */
var mPanelWidth = 600;
var mPanelHeight = 400;
var mColumnCount = 100;
var mCOlumnOffset = mPanelWidth / mColumnCount;
var mDrawTimeout = 300;
var mPanel_1 = new function () {
    "use strict";
    this.CanvasID = {};
    this.FunID = {};
    this.flag = 1;
    this.dataY = [];
    this.CanvasName = "Canvas_01";
}

/**
 * 绘制部分
 */
// JavaScript Document
function initCanvas(CanvasName) {
    "use strict";
    var c = document.getElementById(CanvasName);

    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    var ctx = c.getContext("2d");
    var x;

    c.width = mPanelWidth;
    mPanelHeight = c.height;

    ctx.beginPath();
    ctx.fillStyle = "rgba(134,163,215,0.7)";
    ctx.fillRect(0, 0, c.width, c.height);


    ctx.beginPath();
    ctx.lineWidth = 1;

    ctx.strokeStyle = "rgba(255,255,255,0.5)";

    //画竖线
    for (x = 0; x < c.width; x += mCOlumnOffset) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height - 1);
    }
    ctx.moveTo(c.width - 1, 0);
    ctx.lineTo(c.width - 1, c.height - 1);
    ctx.stroke();

}

//画数据
function drawData(CanvasName, points, flag) {
    "use strict";
    initCanvas(CanvasName);
    var c = document.getElementById(CanvasName);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(20,100,255,1)";
    var i;

    if (flag === 1) {

        for (i = 0; i <= mColumnCount; i++) {
            ctx.lineTo(i * mCOlumnOffset, c.height - 1 - points[i]);
        }
        ctx.stroke();
    }
}

function onDraw() {
    "use strict";

    console.log("onDraw : " + mReceiverMsg);
    var number = 0;
    if (mIsWebsocketAvailable) {
        number = parseInt(mReceiverMsg);
    }
    if (number == NaN) {
        number = 0;
    }
    if (number < 0) {
        number = -number;
    }
    number = number % mPanelHeight;

    console.log("onDraw : " + number);
    mPanel_1.dataY.push(number);
    if (mPanel_1.dataY.length > (mColumnCount + 1)) {
        mPanel_1.dataY.shift();
    }
    drawData(mPanel_1.CanvasName, mPanel_1.dataY, 1);
}

window.onload = function () {
    document.getElementById("Monitor_01").addEventListener("click", function () {
        "use strict";
        if (mPanel_1.flag === 1) {
            sendSocket("1");
            initCanvas(mPanel_1.CanvasName);
            mPanel_1.flag = 0;
            mPanel_1.CanvasID = setInterval(onDraw, mDrawTimeout);

        } else if (mPanel_1.flag === 0) {
            sendSocket("0");
            mPanel_1.flag = 1;
            mPanel_1.dataY = [];
            window.clearInterval(mPanel_1.CanvasID);
        }
    });
}

