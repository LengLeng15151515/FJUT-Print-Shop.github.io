alipayURL="https://qr.alipay.com/fkx14734fnebrvidrskya44?t=1667299454227";
wechat="MicroMessenger";
alipay="AlipayClient";
qqBrowser="MQQBrowser";
userAgent=navigator.userAgent;
qqSwitch=true;
timSwitch=true;

function inUA(s){
    return userAgent.indexOf(s)!=-1
}

if(inUA(wechat)){
    window.location.href="static/wechat.html";
}else if(inUA(alipay)){
    window.location.href=alipayURL;
}else if(inUA(qqBrowser)){
    if(timSwitch&&inUA("TIM")){
        window.location.href="static/tim.html";
    }else{
        if(qqSwitch){
        window.location.href="static/qq.html";
    }
}
}else{
    alert("无法识别的客户端！");
    window.location.href="static/error.html";
}
