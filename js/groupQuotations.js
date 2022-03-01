var quotations = [
    "火羽小姐的脚，小小的，香香的不像手经常使用来得灵活，但有一种独特的可爱的笨拙嫩嫩的脚丫光滑细腻，凌莹剔透，看得见皮肤下面细细的血管与指甲之下粉白的月牙🥵🥵🥵再高冷的女生小脚也是敏感的害羞的，轻轻挠一挠，她就摇身一变成为娇滴滴的女孩，脚丫像是一把钥匙，轻轻掌握它就能打开女孩子的心灵",
    "火羽大小姐，香香的软软的，唉嘿嘿嘿🥵🥵🥵🥵🥵 ———— 可能是只废喵了",
    "火羽！我的火羽！没有火羽，生命就没有了意义！世界就失去了色彩！灵魂亦得不到安宁！只有听着火羽的声音，看着火羽的笑脸，才能够拯救我那潜藏着无尽深渊的心灵！火羽！火羽就是我的一切！​ ———— 松一琉璃",
    "睡觉的时候打开火羽的视频，熄屏放在胸口，手机沉甸甸的重量仿佛火羽把头靠在我身上，音量调到最小，就是火羽在和我窃窃私语，看完的时候就像火羽躺在我的身边睡着，什么时候我才能真正抱着你，火羽，我的火羽​ ———— ",
    "想对火羽说中午好，但火羽还没开播只能流着眼泪睡去火羽一定会在梦中和我chuchu吧对吧！火羽，你说对吧！———— 我的泪爷",
    "影崩哥哥，今天物理光学开始讲光的特性了，物理老师说光是频率极高的电磁波；又说光是粒子，因为有粒子特性，光到底是什么？ <br>原来<br>光是想你就用尽了全力 ———— 是我安寿哒",
    "斯哈斯哈🥵🥵🥵可爱的火羽，opopop ———— 浅潜幽影",
    "雨水从叶子上滑落，只有我明白那是我思念火羽的泪水，风悄悄的吹过，只有我明白那是我思念火羽的叹息，喔！我的火羽！———— 莫茗曦",
    "我一直躺在大小姐的怀里，吃着大小姐亲手为我削的苹果，大小姐说，啊，张口，让你小心点，口水又流出来了，来，我帮你擦擦，我便盯着大小姐，大小姐便害羞了，后面，大小姐说晚上想去看桃花，说要穿的美美的出去，还害羞得问我说，那个能帮我穿好和服嘛，我说没问题，说完，大小姐脸一红，便跑出去了，趁着大小姐出去，我来和群友们水下群 ———— 全灬神",
    //"",
];

window.onload = function () {
    var parent_div = document.getElementsByClassName("layui-row")[0];  

    for(var i = 0; i < quotations.length; i++) {
        var child_div1 = document.createElement("div");
        child_div1.className = "layui-col-md6";
        var child_div2 = document.createElement("div");
        child_div2.className = "layui-panel";
        var child_div3 = document.createElement("div");
        child_div3.className = "common_content_div";
        child_div3.innerHTML = quotations[i];
        child_div3.style.padding = "30px";

        child_div2.appendChild(child_div3);
        child_div1.appendChild(child_div2);
        parent_div.appendChild(child_div1);
    }
}
