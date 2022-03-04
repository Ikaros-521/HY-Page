window.onload = function() {
    console.log("welcome");
    sessionStorage.setItem("language", "ch");
}

// 语言切换
function language_change(language_val) {
    var a_tag = document.getElementsByTagName("a");
    var len = a_tag.length - 3;
    var language_index = 0;

    // 中 日 英
    var arr = [
        ["首页", "B站主页", "QQ群", "表情包", "特殊情报", "特典", "发病语录", "舰长视频", "chiikawa套图", "辅助程序", "关于", "Language"],
        ["トップページ", "bilibili", "QQぐん", "表情パック", "じょうほう", "特典", "発症語録", "艦長ビデオ", "chiikawa", "ほじょプログラム", "について", "Language"],
        ["HomePage", "bilibili", "QQ Group", "Emoticon", "Information", "Privilege", "GroupQuotations", "CaptainVideo", "chiikawa", "AuxiliaryProgram", "About", "Language"],
    ];

    if(language_val == "ch") {
        language_index = 0;
        sessionStorage.setItem("language", "ch");
    } else if(language_val == "jp") {
        language_index = 1;
        sessionStorage.setItem("language", "jp");
    } else if(language_val == "en") {
        language_index = 2;
        sessionStorage.setItem("language", "en");
    } else {
        language_index = 2;
        sessionStorage.setItem("language", "en");
    }

    for(var i = 0; i < len; i++) {
        a_tag[i].innerText = arr[language_index][i];
    }
}