javascript:(function(){function f(a){var b=0;while(a.tagName!="BODY"){b+=a.offsetTop;a=a.offsetParent}return b}var a=document.getElementsByTagName("img");var b=a.length;var c=[];var d=-1;for(var e=0;e<b;e++){if(a[e].width*a[e].height>=1e5){c.push(a[e])}}b=c.length;document.onkeyup=function(a){var e=window.event?event.keyCode:a.keyCode;switch(e){case 74:if(d<b-1){scrollTo(0,f(c[++d]))}break;case 75:if(d>0){scrollTo(0,f(c[--d]))}break}}})()