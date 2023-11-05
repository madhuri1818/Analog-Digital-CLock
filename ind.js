let h=document.querySelector('#h');
let m=document.querySelector('#m');
let s=document.querySelector('#s');
setInterval(()=>{
let d=new Date();
let hh=d.getHours()*30;
let mm=d.getMinutes()*6;
let ss=d.getSeconds()*6;
h.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
m.style.transform=`rotateZ(${mm}deg)`;
s.style.transform=`rotateZ(${ss}deg)`;
// let s1 = new Audio('tick.mp3');
//     s1.play();
let hr=document.getElementById('hr');
let mn=document.getElementById('mn');
let se=document.getElementById('se');
let am=document.getElementById('am');
let dy=new Date();
let hrs=dy.getHours();
let mns=dy.getMinutes();
let ses=dy.getSeconds();
let ampm=hrs>=12?"PM":"AM";
if(hrs>12){
hrs=hrs-12;
}
hrs=(hrs< 10 )?"0"+hrs:hrs 
mns=(mns<10)?"0"+mns:mns 
ses=(ses<10 )?"0"+ses:ses 
hr.innerHTML=hrs;
mn.innerHTML=mns;
se.innerHTML=ses;
am.innerHTML=ampm;
});
