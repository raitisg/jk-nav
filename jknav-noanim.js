javascript:(function(){function e(a){var b=0;while(a.tagName!="BODY"){b+=a.offsetTop;a=a.offsetParent}return b}function f(){return window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop}var a=document.getElementsByTagName("img");var b=a.length;var c=[];for(var d=0;d<b;d++){if(a[d].width*a[d].height>=1e5){c.push(a[d])}}b=c.length;if(!b){return}document.onkeyup=function(a){var d=window.event?event.keyCode:a.keyCode;switch(d){case 74:case 75:var g=f();index=-1;if(d==75){for(var h=b-1;h>-1;h--){position=e(c[h]);if(position+5<=g){index=h;break}}}else{for(var h=0;h<b;h++){position=e(c[h]);if(position-5>=g){index=h;break}}}if(index===-1){return}window.scrollTo(0,e(c[index]));break}}})()