// 瀑布流参考：https://www.jb51.net/article/90349.htm

window.onload = function() {
	// var imgData = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
    //     "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
    //     "21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg",
    //     "1.gif","2.gif","3.gif","4.gif","5.gif","6.gif",
    //     "1.png","2.png","3.png","4.png","5.png","6.png","7.png"];

    // var cparent = document.getElementById("container");
    // for (var i = 0; i < imgData.length; i++) {
    //     var ccontent = document.createElement("div");
    //     ccontent.className = "box";
        
    //     var boximg = document.createElement("div");
    //     boximg.className = "box_img";
        
    //     var img = document.createElement("img");
    //     img.src = "img/emoticon/" + imgData[i];

    //     boximg.appendChild(img);
    //     ccontent.appendChild(boximg);
    //     cparent.appendChild(ccontent);
    // }

    imgLocation("container", "box");
    
	// window.onscroll = function() {
	// 	//  console.log(document.documentElement.scrollTop);
	// 	if (checkFlag()) {
	// 		var cparent = document.getElementById("container");
	// 		for (var i = 0; i < imgData.length; i++) {
	// 			var ccontent = document.createElement("div");
	// 			ccontent.className = "box";
				
	// 			var boximg = document.createElement("div");
	// 			boximg.className = "box_img";
				
	// 			var img = document.createElement("img");
	// 			img.src = "img/emoticon/" + imgData[i];

	// 			boximg.appendChild(img);
    //             ccontent.appendChild(boximg);
    //             cparent.appendChild(ccontent);

	// 			//另外一种方法在div后边追加内容，不覆盖原有内容
	// 			//    var content="<div class='box'><div class='box_img'><img src='img/"+imgData[i]+"'/></div></div>";
	// 			//    cparent.innerHTML+=content;
	// 		}
	// 		imgLocation("container", "box");
	// 	}
	// }
}

function checkFlag() {
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent, "box"); //图片的所有box数
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop; //最后一张图片距离顶部高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight; //屏幕高度
	// console.log(lastContentHeight+","+scrollTop+","+pageHeight);
	if (lastContentHeight < scrollTop + pageHeight) {
		return true;
	}
}

function imgLocation(parent, content) {
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent, content); //图片的所有box数
	var imgWidth = ccontent[0].offsetWidth; //图片宽度
	var num = Math.floor(document.documentElement.clientWidth / imgWidth); //一行放图片个数
	cparent.style.cssText = "width:" + imgWidth * num + "px;margin:0px auto"; //container的宽度
	var boxHeightArr = []; //每一列box高度
	for (var i = 0; i < ccontent.length; i++) {
		if (i < num) {
			boxHeightArr[i] = ccontent[i].offsetHeight;
		} else {
			var minHeight = Math.min.apply(null, boxHeightArr); //最小高度
			var minIndex = getMinheightLocation(boxHeightArr, minHeight); //得到最小高度下标
			//   console.log(minHeight+","+minIndex);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight + "px"; //距离顶部高度
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px"; //距离左边长度
			boxHeightArr[minIndex] += ccontent[i].offsetHeight;
			//   console.log(ccontent[i].offsetHeight+","+ccontent[i].height);//ccontent[i].height=undefined
		}
	}
}

function getMinheightLocation(boxHeightArr, minHeight) {
	for (var i in boxHeightArr) {
		if (boxHeightArr[i] == minHeight) {
			return i
		}
	}
}

function getChildElement(parent, content) {
	//将parent下有content的全部取出
	var contentArr = [];
	var allContent = parent.getElementsByTagName("*");
	for (i = 0; i < allContent.length; i++) {
		if (allContent[i].className == "box") {
			contentArr.push(allContent[i]);
		}
	}
	return contentArr;
}