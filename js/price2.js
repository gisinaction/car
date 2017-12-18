window.onload=function() {
var add = document.getElementById('add');
  var reduce = document.getElementById('reduce');
  var count = document.getElementById('count-input');

  add.onclick=function() {
    count.value++;
    var val1=parseInt(count.value);
    if (val1>1) {
       reduce.innerHTML="-";
     }
  
  }
  reduce.onclick=function() {
    
    count.value--;
      var val=parseInt(count.value);
    if (val<=1) {
    count.value="1";
    reduce.innerHTML=" ";
     }
  }
  
  /*放大图片效果*/
    var objDemo = document.getElementById("demo");
    var objSmallBox = document.getElementById("small-box");
    var objMark = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("big-box");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    objMark.onmouseover = function () {
        objFloatBox.style.display = "block";
        objBigBox.style.display = "block";
    }

    objMark.onmouseout = function () {
        objFloatBox.style.display = "none";
        objBigBox.style.display = "none";
    }

    objMark.onmousemove = function (ev) {

        var _event = ev || window.event;  //兼容多个浏览器

        var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
        var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;

        }

        objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
        objFloatBox.style.top = top + "px";

        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
/*价格变动*/
    var ptype=document.getElementById('ptype');
    var input1=ptype.getElementsByTagName("label")[0];
    var input2=ptype.getElementsByTagName("label")[1];
    var price1=document.getElementById('price1');
    var price2=document.getElementById('price2');
    input1.onclick=function() {
          price2.innerHTML="¥1500.00";
    }
    input2.onclick=function() {
          price2.innerHTML="¥1000.00";
    }
   /*价格变动*/
}  