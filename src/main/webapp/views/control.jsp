<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>智能家居监测与控制平台</title>

    <link href="../css/control.css" rel="stylesheet" type="text/css">
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

    <div class="top">
        <div id="Control">
            <button type="button" class="Button Control_Button" id="Control_01">开关一</button>
            <button type="button" class="Button Control_Button" id="Control_02">开关二</button>
            <button type="button" class="Button Control_Button" id="Control_03">开关三</button>
        </div>
        <div class="right1">
            <img id="myimage_01" src="../image/lightoff.png" width="100" height="100%" alt=""/>
        </div>
        <div class="right2">
            <img id="myimage_02" src="../image/lightoff.png" width="100" height="100%" alt=""/>
        </div>
        <div class="right3">
            <img id="myimage_03" src="../image/lightoff.png" width="100" height="100%" alt=""/>
        </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
        指导老师：张登攀
    </div>
</div>
<!-- 引入js-->
<script type="text/javascript" src="../js/control.js"></script>
</body>
</html>