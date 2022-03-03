// min ≤ num < max
function randomNum(min, max) {
    var Range = max - min;
    var Rand = Math.random();
    var num = min + Math.floor(Rand * Range);  //舍去
    return num;
}

/** len生成数组的长度，min生成数最小值，max生成数的最大值(max达不到) **/
function randomArr(len, min, max) {
    if((max - min) < len){ //可生成数的范围小于数组长度
        return null;
    }
    var hash = [];

    while(hash.length < len){
        var num = randomNum(min, max);
        
        if(hash.indexOf(num) == -1) {
            hash.push(num);
        }
    }
    return hash;
}