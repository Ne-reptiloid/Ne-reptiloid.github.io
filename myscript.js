var button=document.getElementByld('myButton');
var logo=document.getElementByld('headerLogo');
var modal=document.getElementByld('myModal');
var close=document.getElementByld('myClose');

logo.onmouseenter = function(){
    logo.style.fontSize="60px";
}

logo.onmouseleave = function(){
    logo.style.fontSize="40px";
}

logo.onclick = function(){
    modal.style.display="block";
}

close.onclick=function(){
    modal.style.display="none";
}