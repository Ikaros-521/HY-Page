// 视频内嵌参考：https://blog.csdn.net/DSH964/article/details/80961598
// 数据变量
var video_data = [
    {
        "up" : "妖刀影崩",
        "title" : "火羽情人节表白大会/火羽のバレンタインの告白会",
        "src" : "//player.bilibili.com/player.html?aid=551550007&bvid=BV1Ui4y1f7vq&cid=508011227&page=1"
    },
    {
        "up" : "妖刀影崩",
        "title" : "HYDRA 情人节整活翻唱/致火羽大小姐",
        "src" : "//player.bilibili.com/player.html?aid=339070380&bvid=BV1pR4y1L7c8&cid=508434115&page=1"
    },
    {
        "up" : "松一琉璃Official",
        "title" : "光遇弹琴，团子大家族（お嬢さん500艦記念おめでとう）",
        "src" : "//player.bilibili.com/player.html?aid=979373182&bvid=BV1B44y1T7d8&cid=515626258&page=1"
    },
    {
        "up" : "ひのめ单推人",
        "title" : "想对大小姐说的话",
        "src" : "//player.bilibili.com/player.html?aid=509456454&bvid=BV1Zu411D7oL&cid=518314545&page=1"
    },
    {
        "up" : "椰浆是耶酱",
        "title" : "【火羽ひのめ】500（？）艦おめでとう！！！",
        "src" : "//player.bilibili.com/player.html?aid=679493058&bvid=BV12S4y1g7xy&cid=518432184&page=1"
    },
    {
        "up" : "大绅士_H君",
        "title" : "【火羽一周年】《勾指起誓》一周年粉丝合唱",
        "src" : "//player.bilibili.com/player.html?aid=508287706&bvid=BV1bu411m7JA&cid=487392763&page=1"
    },
    {
        "up" : "妖刀影崩",
        "title" : "妖刀影崩与直播间的诸君（お嬢様５００艦おめでとう！）",
        "src" : "//player.bilibili.com/player.html?aid=679312023&bvid=BV1Mm4y1R78E&cid=518199665&page=1"
    }
];

window.onload = function() {
    var parent_div = document.getElementsByClassName("layui-row")[0];

    for(var i = 0; i < video_data.length; i++) {
        var num = randomNum(0, 16777215).toString(16);
        var alpha = randomNum(0, 255).toString(16);

        var child_div1 = document.createElement("div");
        child_div1.className = "layui-col-md4";
        child_div1.id = i;
        child_div1.style.background = "#" + num + alpha;
        child_div1.onclick = function() {
            show_video(this.id);
        };

        var child_div2 = document.createElement("div");
        var child_div3 = document.createElement("div");
        child_div3.className = "common_content_div";
        child_div3.innerHTML = "UP主：" + video_data[i].up + "<br>视频名：" + video_data[i].title;
        child_div3.style.padding = "30px";

        child_div2.appendChild(child_div3);
        child_div1.appendChild(child_div2);
        parent_div.appendChild(child_div1);
    }
}

// 随机数 [minNum, maxNum]
function randomNum(minNum, maxNum) { 
    switch(arguments.length) { 
        case 1: 
            return parseInt(Math.random() * minNum + 1, 10); 
            break; 
        case 2: 
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10); 
            break; 
        default: 
            return 0; 
        break; 
    } 
} 

// 弹窗播放视频
function show_video(index) {
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');
    var oshadow = document.getElementById('shadow');
    ovideo.style.display = 'block';
    oshadow.style.display = 'block';
    console.log("index:" + index);
    console.log("video_data:" + video_data);
    console.log("video_data[index].src:" + video_data[index].src);
    oatn.innerHTML = '<iframe src="' + video_data[index].src + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
}

// 关闭弹窗和视频
function close_video() {
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');
    var oshadow = document.getElementById('shadow');

    ovideo.style.display = 'none';
    oshadow.style.display = 'none';
    oatn.innerHTML = "";
}