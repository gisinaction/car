window.onload=function() {
	if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls
                    || els[i].className.indexOf(cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }
	/*抽屉导航效果*/ 
	var sidebarTitle=document.getElementsByClassName('subNav');
	for (var i = 0; i < sidebarTitle.length; i++) {
		sidebarTitle[i].onclick=function() {
			var idTitle=this.getAttribute('id');
			var idsubNav=idTitle%100;
			var arrsubNav=document.getElementsByClassName('navContent');
			for (var i = 0; i < arrsubNav.length; i++) {
				arrsubNav[i].style.display='none';
			}
			document.getElementById(idsubNav).style.display='block';
		}
	}
	/*抽屉导航效果*/

    /*时间效果*/ 
    var myDate=new Date();
    var myYear=document.getElementById('time-year');
    var myMonth=document.getElementById('time-month');
    var myDay=document.getElementById('time-day');
    myYear.innerHTML=myDate.getYear()+1900+'年';
    myMonth.innerHTML=myDate.getMonth()+1+'月';
    myDay.innerHTML=myDate.getDate()+'日';
    
    /*时间效果*/ 
    /*全选效果*/
    
    var resultTable = document.getElementById('resultTable');
    var tr = resultTable.children[1].rows;
    var checkInputs = document.getElementsByClassName('check');
    var checkAllInputs = document.getElementsByClassName('check-all');

    for (var i = 0 , len = checkInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === 'check-all check') {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0; k < checkAllInputs.length; k++) {
                    checkAllInputs[k].checked = false;
                }
            }
            
        }
    }

    /*全选效果*/
    /*单行删除商品*/
    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            
            if (cls=='delete') {
            var conf = confirm('确定要删除吗？');
            if (conf) {
                this.parentNode.removeChild(this);
                i--;
               }
            }
            
                   
         }
            
        }
    /*单行删除信息*/
    /*批量删除信息*/
    var batchDel=document.getElementById('batchDel');
    batchDel.onclick=function() {
    	if (confirm('确定要删除吗？')) {
           for (var i = 0; i < tr.length; i++) {
                    var input = tr[i].getElementsByTagName('input')[0];
                    if (input.checked) {
                        tr[i].parentNode.removeChild(tr[i]);
                        i--;
                    }
                }
    	  
    	}

    }
    /*批量删除信息*/

}