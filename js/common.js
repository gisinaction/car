/*轮播图实现*/
window.onload=function() {
    var container=document.getElementById('ad');
    var pic=document.getElementById('showPicture-inner');
    var btns=document.getElementById('position').getElementsByTagName('li');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var flag=false;
    var index=0;
    for (var i = 0; i < btns.length; i++) {
        btns[i].index=i;
    }
    //小圆点的显示
    function showBtn(index) {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].className=="cur") {
                btns[i].className="";
                break;
            }
        }
        btns[index].className="cur";
    }

    //向右滑动index+1，index>2，即从最后一张切换到第一张时，index置为0
    //flag为true表示正在切换
    next.onclick=function() {
        if (flag) {
            return;
        }
        index++;
        index=index>2?0:index;
        showBtn(index);
        if (!flag) {
            animate(-1000);
        }

    }
    prev.onclick=function() {
        if (flag) {
            return;
        }
        index--;
        index=index<0?2:index;
        showBtn(index);
        if (!flag) {
            animate(1000);
        }
    }

    function animate(offset){
        flag=true;
        var newLeft=parseInt(pic.style.left) + offset ;
                
        var time=400;//位移总时间
        var interval=10;//位移间隔时间
        var speed=offset/(time/interval);//每次位移量
         go();
         function go(){
            if ( (speed > 0 && parseInt(pic.style.left) < newLeft) || (speed < 0 && parseInt(pic.style.left) > newLeft)) {
                            pic.style.left = parseInt(pic.style.left) + speed + 'px';
                            setTimeout(go, interval);
                        }
                        else{
                            flag=false;
                            pic.style.left = newLeft+ "px";
                            if(newLeft > -1000 ){
                                pic.style.left = -3000 + "px";
                            }
                            if(newLeft < -3000 ){
                                pic.style.left = -1000 + "px";
                            }
                        }

                    }
                    
                }
            //小圆点点击事件
            for (var i = 0; i < btns.length; i++) {
                btns[i].onclick=function (){
                    if (flag) {
                        return;
                    }
                    //点击当前轮播图片则不继续执行
                    if(this.className=="cur"){
                        return;
                    }
                    var myIndex=this.index-index;
                    var offset=-1000*myIndex;
                    index=this.index;
                    showBtn(index);
                    animate(offset);
                    
                    
                }
            }
            //自动播放
            var timer;
            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, 3000);
            }
            
            function stop() {
                clearTimeout(timer);
            }    
            container.onmouseover = stop;
            container.onmouseout = play;
            play();

            /*导航条滑动效果*/ 
            var navItem1=document.getElementById('nav-item1');
            var navItem2=document.getElementById('nav-item2');
            var navDroplist1 =document.getElementById('nav-droplist1');
            var navDroplist2 =document.getElementById('nav-droplist2');

            navItem1.onmouseover=function() {
                navDroplist1.style.display="block";
            }
            navItem1.onmouseout=function() {
                navDroplist1.style.display="none";
            }
            navItem2.onmouseover=function() {
                navDroplist2.style.display="block";
            }
            navItem2.onmouseout=function() {
                navDroplist2.style.display="none";
            }
            /*导航条滑动效果*/ 
            
            /*导航引导效果*/ 
            var nav2=document.getElementById('nav-item4');
            var nav3=document.getElementById('nav-item5');
            var nav4=document.getElementById('l1');
            var nav5=document.getElementById('l2');

            
            nav2.onclick=function() {
                document.documentElement.scrollTop=750;
            }
            nav3.onclick=function() {
                document.documentElement.scrollTop=1400;
            }
             nav4.onclick=function() {
                document.documentElement.scrollTop=2300;
            }
             nav5.onclick=function() {
                document.documentElement.scrollTop=2880;
            }
            
            /*导航引导效果*/ 
            /*回到顶部效果*/
            var obtn = document.getElementById('btt');  //获取回到顶部按钮的ID
            var timer1 = null; //定义一个定时器
            var isTop = true; //定义一个布尔值，用于判断是否到达顶部

            window.onscroll = function(){         //滚动条滚动事件

                //获取滚动条的滚动高度
                var osTop = document.documentElement.scrollTop || document.body.scrollTop; 

                if(osTop >= 200){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
                    obtn.style.display = 'block';
                }else{         //否则隐藏
                    obtn.style.display = 'none';
                }

                //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
                if(!isTop){

                    clearInterval(timer1);
                }
                isTop = false;

            }

            obtn.onclick = function(){    //回到顶部按钮点击事件
                //设置一个定时器
                timer1 = setInterval(function(){
                    //获取滚动条的滚动高度
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    //用于设置速度差，产生缓动的效果
                    var speed = Math.floor(-osTop / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                    isTop =true;  //用于阻止滚动事件清除定时器
                    if(osTop == 0){
                        clearInterval(timer1);
                    }
                },30);
            }
            
}