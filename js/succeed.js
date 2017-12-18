window.onload=function() {
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
            /*覆盖层显示*/ 
            var pile1= document.getElementById('pile1');
            var charger1 = document.getElementById('charger1');
            var cover1 = document.getElementById('cover1');
            var cover2 = document.getElementById('cover2');
            pile1.onmouseover=function() {
                cover1.style.display="block";
            }
            cover1.onmouseover=function() {
                cover1.style.display="block";
            }
            charger1.onmouseover=function() {
                cover2.style.display="block";
            }
            cover2.onmouseover=function() {
                cover2.style.display="block";
            }
            cover1.onmouseout=function() {
                cover1.style.display="none";
            }
            
            cover2.onmouseout=function() {
                cover2.style.display="none";
            }
            
}