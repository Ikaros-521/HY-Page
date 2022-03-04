window.onload = function () {
    var language = sessionStorage.getItem("language");
    var p_explain = document.getElementById("p_explain");

    if(language == "ch") {
        p_explain.innerText = "上舰后方可得到大小姐亲笔签名插画特典~";
    } else if(language == "jp") {
        p_explain.innerText = "艦に乗ってからお嬢様直筆サイン入りイラスト特典付き~";
    } else {
        p_explain.innerText = "After boarding the ship, you can get the special illustration signed by the eldest lady~";
    }
}