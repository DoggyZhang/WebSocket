<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>智能家居监测与控制平台</title>
    <link href="../css/monitor.css" rel="stylesheet" type="text/css">

    <!-- 引入js-->
    <script type="text/javascript" src="../js/monitor.js"></script>
    <script type="text/javascript" src="../js/websocket.js"></script>
</head>
<body>
<!-- 头部 -->
<div class="header">
    <div class="logo"><img src="../image/标题.png" alt="" width="200"></div>
    <div class="nav">
        <ul>
            <li><a href="/index.do">首页</a></li>
            <li><a href="/monitor.do">监测</a></li>
            <li><a href="/control.do">控制</a></li>
            <li><a href="/login.do">登录</a></li>
        </ul>
    </div>
</div>
<!-- 主体 -->
<div class="main">

    <div id="Monitor">
        <button type="button" class="Monitor_Button" id="Monitor_01">空气质量</button>
        <button type="button" class="Monitor_Button" id="Monitor_02">温湿度</button>
        <button type="button" class="Monitor_Button" id="Monitor_03">光照强度</button>
    </div>
    <p id="receiver_data"></p>
    <div id="Canvas">
        <canvas id="Canvas_01"></canvas>
    </div>
</div>
<!-- 底部 -->
<div class="footer">
    指导老师：张登攀
</div>

</body>
</html>