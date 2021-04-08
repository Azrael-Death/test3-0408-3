function $(id){
	return document.getElementById(id);
}


function getClass(cname){
	//判断浏览器是否支持getElementsByClassName()方法
	if(document.getElementsByClassName){
		return document.getElementsByClassName(cname);
	}else{
		var objAll = document.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<objAll.length;i++){
			if(objAll[i].className==cname){
				arr.push(objAll[i]);
			}
		}
		return arr;
	}
}

function getStyle(obj,attr) {
    //获取谁的属性：obj 
    //获取什么属性:attr
    //判断浏览器是否支持getComputedStyle属性
    if(window.getComputedStyle){
        return  window.getComputedStyle(obj,null)[attr];
    }else {
        //ie低版本的方法
        return  obj.currentStyle[attr];
    }
}

