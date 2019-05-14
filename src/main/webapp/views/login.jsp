<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>智能家居监测与控制平台</title>
    <link href="../css/login.css" rel="stylesheet" type="text/css">
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
    <div class="middle">
        <form id="forml">
            <table width="270" border="0" cellpadding="0" cellspacing="20">
                <caption>
                    登陆
                </caption>
                <tbody>
                <tr>
                    <td><label for="textfield">账号:</label> <input type="text" name="textfield" id="textfield"></td>
                </tr>
                <tr>
                    <td><label for="password">密码:</label> <input type="password" name="password" id="password"></td>
                </tr>
                </tbody>
            </table>
            <input type="button" name="button" id="button" value="提交">
            <input type="reset" name="reset" id="reset" value="重置">

        </form>
    </div>
    <div class="down">
        <img src="../image/背景.png" width="400" height="220" alt=""/>
    </div>
</div>

<!-- 底部 -->
<div class="footer">
    指导老师：张登攀
</div>
</body>
</html>