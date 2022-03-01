// 视频内嵌参考：https://blog.csdn.net/DSH964/article/details/80961598
// 数据变量
var video_data = [
    {
        "up" : "火羽ひのめ",
        "title" : "在B站每天直播的日v500舰的瞬间",
        "src" : "//player.bilibili.com/player.html?aid=211786038&bvid=BV1Ra411C7Ho&cid=517379940&page=1"
    },
    {
        "up" : "火羽ひのめ",
        "title" : "在B站每天直播的日v500舰的瞬间",
        "src" : "//player.bilibili.com/player.html?aid=211786038&bvid=BV1Ra411C7Ho&cid=517379940&page=1"
    }
];

window.onload = function() {
    var parent_div = document.getElementsByClassName("layui-row")[0];  

    for(var i = 0; i < video_data.length; i++) {
        var child_div1 = document.createElement("div");
        child_div1.className = "layui-col-md4";
        child_div1.id = i;
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