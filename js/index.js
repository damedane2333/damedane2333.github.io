//主页的js
//轮播图点击更换下一张
function chageimg() {
    var img_Array = ['./upload/01.jpg', './upload/02.jpg'];
    // 获取到两个id
    var lastimg = document.getElementById("focus_img_lastimg");
    var nextimg = document.getElementById("focus_img_nextimg");
    //获取到图片id
    var img = document.getElementById("focus_img_img");
    //定义一个数值标识原来的下表
    var num = 0;
    lastimg.onclick = function () {
        for (var i = 0; i < imgArray.length; i++) {
            img.src = img_Array[num];
            num++;

        }




    }



}