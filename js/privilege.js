window.onload = function () {
    var language = sessionStorage.getItem("language");
    var p_explain = document.getElementById("p_explain");

    if(language == "ch") {
        p_explain.innerText = "上舰后方可得到大小姐亲笔签名插画特典~<br>特典每个月都有，提前续舰的晚点会发。";
    } else if(language == "jp") {
        p_explain.innerText = "艦に乗ってからお嬢様直筆サイン入りイラスト特典付き~<br>特典は毎月ありますが、早めの続艦の遅れが出ます。";
    } else {
        p_explain.innerText = "After boarding the ship, you can get the special illustration signed by the eldest lady~<br>Special codes are available every month, and ship renewal in advance will be issued later.";
    }
}