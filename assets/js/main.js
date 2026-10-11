(function(){
/* Safeguard: make sure the FAQ subtitle always sits inside the styled sub-heading paragraph. */
var el=document.getElementById("typed8");if(!el)return;
var p=el.parentElement;
if(p&&!(p.tagName==="P"&&p.classList.contains("big-sub"))){
var cur=el.nextElementSibling,np=document.createElement("p");
np.className="sub big-sub";p.insertBefore(np,el);np.appendChild(el);
if(!(cur&&cur.classList&&cur.classList.contains("cursor"))){cur=document.createElement("span");cur.className="cursor";cur.setAttribute("aria-hidden","true")}
np.appendChild(cur);
}
})();
(function(){
["typed2","typed3","typed4","typed5","typed6","typed8"].forEach(function(id){
var el=document.getElementById(id);if(!el)return;
var p=el.parentElement,cur=el.nextElementSibling,
g=document.createElement("span"),w=document.createElement("span");
g.className="tg";g.setAttribute("aria-hidden","true");g.textContent=id==="typed"?"Machine Learning Practitioner":el.textContent;
w.className="tl";p.style.position="relative";
p.insertBefore(g,el);p.insertBefore(w,el);w.appendChild(el);
if(cur&&cur.classList.contains("cursor"))w.appendChild(cur);
});
})();
(function(){
var roles=["Data Scientist","Machine Learning Practitioner","Deep Learning Enthusiast","Python Developer","Data Analyst","Data Storyteller"],el=document.getElementById("typed"),i=0,j=0,del=false;
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function t(){var r=roles[i];j+=del?-1:1;el.textContent=r.slice(0,j);
var d=del?40:85;if(!del&&j===r.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%roles.length;d=300}setTimeout(t,d)}
t();
})();
var mb=document.getElementById("menu"),ul=document.getElementById("links");
mb.addEventListener("click",function(){var o=ul.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
ul.addEventListener("click",function(){ul.classList.remove("open");mb.setAttribute("aria-expanded","false")});
(function(){
var svg=document.getElementById("sv"),g=document.getElementById("pts"),fit=document.getElementById("fit"),NS="http://www.w3.org/2000/svg";
var P0=[[1,2.1],[2,2.9],[3,3.2],[4,4.6],[5,4.4],[6,5.9],[7,6.1],[8,7.4]],P=P0.map(function(p){return p.slice()});
var X0=44,X1=424,Y0=284,Y1=16;
function px(x){return X0+x/10*(X1-X0)}function py(y){return Y0-y/10*(Y0-Y1)}
function draw(){
g.textContent="";
P.forEach(function(p){var c=document.createElementNS(NS,"circle");c.setAttribute("class","pt");c.setAttribute("cx",px(p[0]));c.setAttribute("cy",py(p[1]));c.setAttribute("r",5);g.appendChild(c)});
var n=P.length,mx=0,my=0;P.forEach(function(p){mx+=p[0]/n;my+=p[1]/n});
var sxx=0,sxy=0,syy=0;P.forEach(function(p){sxx+=(p[0]-mx)*(p[0]-mx);sxy+=(p[0]-mx)*(p[1]-my);syy+=(p[1]-my)*(p[1]-my)});
var b=0,r2=0;
if(n>1&&sxx>0){b=sxy/sxx;var a=my-b*mx;fit.setAttribute("x1",px(0));fit.setAttribute("y1",py(a));fit.setAttribute("x2",px(10));fit.setAttribute("y2",py(a+b*10));fit.style.display="";r2=syy>0?(sxy*sxy)/(sxx*syy):0}else{fit.style.display="none"}
document.getElementById("n").textContent=n;document.getElementById("b").textContent=b.toFixed(2);document.getElementById("r").textContent=r2.toFixed(2);
}
svg.addEventListener("click",function(e){var r=svg.getBoundingClientRect(),vx=(e.clientX-r.left)/r.width*440,vy=(e.clientY-r.top)/r.height*320;if(vx<X0||vx>X1||vy<Y1||vy>Y0)return;P.push([(vx-X0)/(X1-X0)*10,(Y0-vy)/(Y0-Y1)*10]);draw()});
document.getElementById("ap").addEventListener("click",function(){var x=.5+Math.random()*9,y=1.2+.65*x+(Math.random()-.5)*2.6;P.push([x,Math.min(9.8,Math.max(.2,y))]);draw()});
document.getElementById("rs").addEventListener("click",function(){P=P0.map(function(p){return p.slice()});draw()});
draw();
})();
(function(){
var el=document.getElementById("typed2"),t="Open to Data Science roles and internships",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var el=document.getElementById("typed3"),t="Tools and Technologies I use day to day",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var el=document.getElementById("typed4"),t="Selected work",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var el=document.getElementById("typed5"),t="Open Source & Community",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var el=document.getElementById("typed6"),t="Internships and Hands-on Roles",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var to="zaighamabbasprince@gmail.com",sub="Portfolio inquiry",body="Hi Zaigham,\n\n";
var mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&matchMedia("(pointer:coarse)").matches);
var mt="mailto:"+to+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
var gm="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(to)+"&su="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){
a.href=mt;
a.addEventListener("click",function(ev){if(mobile)return;ev.preventDefault();window.open(gm,"_blank","noopener")});
});
})();
(function(){
var el=document.getElementById("typed7");
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var t=el.textContent,j=0,del=false;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?15:35;if(!del&&j===t.length){del=true;d=3500}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
(function(){
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
var pg=document.getElementById("prog"),tk=false;
function onS(){if(tk)return;tk=true;requestAnimationFrame(function(){var m=document.documentElement.scrollHeight-innerHeight;pg.style.transform="scaleX("+(m>0?Math.min(1,scrollY/m):0)+")";tk=false})}
addEventListener("scroll",onS,{passive:true});onS();
if(RM)return;
var sv=document.getElementById("sv");
if(sv){sv.classList.add("intro");setTimeout(function(){sv.classList.remove("intro")},2400)}


document.querySelectorAll(".sk").forEach(function(c){
c.addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty("--ry",(x*7).toFixed(2)+"deg");c.style.setProperty("--rx",(-y*7).toFixed(2)+"deg")});
c.addEventListener("pointerleave",function(){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")});
});
var cv=document.getElementById("net");
if(cv&&cv.getContext){
var cx=cv.getContext("2d"),W=0,H=0,P=[],R=[],RS="0101{}<>/=;()#01",mx=-999,my=-999;
var col=function(){return getComputedStyle(document.documentElement).getPropertyValue("--acc").trim()||"#38e8b0"},c1=col();
matchMedia("(prefers-color-scheme:light)").addEventListener("change",function(){c1=col()});
function size(){var r=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*r;cv.height=H*r;cx.setTransform(r,0,0,r,0,0);var n=Math.round(Math.min(70,W*H/20000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY},{passive:true});
(function frame(){
requestAnimationFrame(frame);
if(document.hidden)return;
var op=Math.max(0,1-scrollY/(H*1.1));
cv.style.opacity=(op*.75).toFixed(3);
if(op<.02)return;
cx.clearRect(0,0,W,H);cx.strokeStyle=c1;cx.fillStyle=c1;cx.lineWidth=1;
if(R.w!==W){R=[];R.w=W;for(var k=0;k<W/28;k++)R.push({x:k*28+6,y:Math.random()*H,v:.6+Math.random()*1.4})}
cx.font="14px ui-monospace,Menlo,Consolas,monospace";
for(var a=0;a<R.length;a++){var rc=R[a];rc.y+=rc.v;if(rc.y>H+160){rc.y=-20;rc.v=.6+Math.random()*1.4}
for(var t=0;t<7;t++){cx.globalAlpha=(1-t/7)*.17;cx.fillText(RS.charAt((a*13+t*7+(rc.y/18|0))%RS.length),rc.x,rc.y-t*18)}}
for(var i=0;i<P.length;i++){
var p=P[i];p.x+=p.vx;p.y+=p.vy;
if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
cx.globalAlpha=.8;cx.beginPath();cx.arc(p.x,p.y,1.8,0,6.2832);cx.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],dx=p.x-q.x,dy=p.y-q.y,d=dx*dx+dy*dy;
if(d<16900){cx.globalAlpha=(1-d/16900)*.45;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
var ex=p.x-mx,ey=p.y-my,ed=ex*ex+ey*ey;
if(ed<28900){cx.globalAlpha=(1-ed/28900)*.7;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke()}
}
cx.globalAlpha=1;
})();
}
})();
(function(){
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
var G=["{ }","</>","\u2211","\u03c0","df.head()","model.fit()","plt.show()","SELECT *","import pandas","np.mean()",".predict()","def f():","\u0394","[ ]","\u03bb","\u2248"];
var C=["var(--acc)","var(--acc2)","#c792ea","#ff79c6","#ffb86b"];
var pos=[[3,8],[92,14],[6,34],[90,42],[4,62],[93,70],[8,86],[88,92]];
var items=[];
document.querySelectorAll("#about,#skills,#projects,#community,#experience,#contact").forEach(function(s,si){
var d=document.createElement("div");d.className="deco";d.setAttribute("aria-hidden","true");
pos.forEach(function(p,i){
var e=document.createElement("i"),b=document.createElement("b");
e.style.left=p[0]+"%";e.style.top=p[1]+"%";e.style.color=C[(i+si)%C.length];
var tx=G[(i*3+si*5)%G.length];b.setAttribute("data-g",tx);b.style.fontSize=(tx.length>4?1+(i%3)*.12:1.4+(i%3)*.7)+"rem";
b.style.animationDelay=(-i*1.3)+"s";b.style.animationDuration=(7+(i%4)*2)+"s";
e.appendChild(b);d.appendChild(e);items.push({s:s,e:e,k:((i%3)+1)*.05});
});
s.insertBefore(d,s.firstChild);
});
if(RM)return;
var tk=false;
function upd(){tk=false;items.forEach(function(it){var r=it.s.getBoundingClientRect();if(r.bottom<-300||r.top>innerHeight+300)return;var c=r.top+r.height/2-innerHeight/2;it.e.style.transform="translateY("+(c*it.k).toFixed(1)+"px)"})}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});
addEventListener("resize",upd);upd();
})();
(function(){
var links=[].slice.call(document.querySelectorAll("#links a")),secs=links.map(function(a){return document.querySelector(a.getAttribute("href"))});
function spy(){var y=innerHeight*.35,cur=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=y)cur=i});
if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)cur=secs.length-1;
links.forEach(function(a,i){a.classList.toggle("active",i===cur);if(i===cur)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")})}
var tk=false;addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(function(){tk=false;spy()})}},{passive:true});addEventListener("resize",spy);spy();
var el=document.getElementById("trm");if(!el)return;
var L=[{t:'>>> import pandas as pd'},{t:'>>> df = pd.read_csv("dataset.csv")'},{t:'>>> df.isnull().sum()'},{t:'>>> model.fit(X_train, y_train)'},{t:'Model trained successfully \u2713',o:1}];
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function hl(l,n){var s=l.t.slice(0,n);if(l.o)return '<span class="o">'+esc(s)+'</span>';
s=esc(s).replace(/"([^"]*)"?/g,'<span class="s">"$1"</span>').replace(/\b(import|as|from)\b/g,'<span class="k">$1</span>').replace(/^>>>/,'<span class="p">&gt;&gt;&gt;</span>');return s}
function draw(li,ci){var o=[];for(var i=0;i<=li&&i<L.length;i++)o.push(hl(L[i],i<li?L[i].t.length:ci));el.innerHTML=o.join("\n")}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){draw(L.length-1,L[L.length-1].t.length);return}
var li=0,ci=0;
(function step(){var l=L[li],d=l.o?20:42;
if(ci<l.t.length){ci++;draw(li,ci)}
else{li++;ci=0;d=500;if(li>=L.length){li=0;setTimeout(function(){draw(0,0);step()},3400);return}}
setTimeout(step,d)})();
})();
(function(){
if(!matchMedia("(pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var ring=document.createElement("div"),dot=document.createElement("div"),cv=document.createElement("canvas");
ring.className="cur-r";dot.className="cur-d";cv.id="fx";cv.setAttribute("aria-hidden","true");ring.setAttribute("aria-hidden","true");dot.setAttribute("aria-hidden","true");
document.body.appendChild(cv);document.body.appendChild(ring);document.body.appendChild(dot);
var cx=cv.getContext("2d"),W=0,H=0,P=[],x=-100,y=-100,rx=-100,ry=-100,lx=-100,ly=-100,seen=false,cols=["#38e8b0","#7c9cff","#c792ea","#ff79c6"];
function size(){var r=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*r;cv.height=H*r;cx.setTransform(r,0,0,r,0,0)}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){
if(e.pointerType==="touch")return;
x=e.clientX;y=e.clientY;
if(!seen){seen=true;rx=x;ry=y;ring.classList.add("on");dot.classList.add("on")}
var dx=x-lx,dy=y-ly;
if(dx*dx+dy*dy>180&&P.length<90){lx=x;ly=y;P.push({x:x,y:y,vx:(Math.random()-.5)*.9,vy:(Math.random()-.5)*.9+.2,l:1,r:2+Math.random()*2.6,c:cols[(Math.random()*4)|0]})}
ring.classList.toggle("hov",!!(e.target.closest&&e.target.closest("a,button,.sk,.stat,.card,[role=button]")));
},{passive:true});
addEventListener("pointerdown",function(e){if(e.pointerType==="touch")return;ring.classList.add("press");P.push({x:e.clientX,y:e.clientY,rip:1,l:1,r:6,c:"#38e8b0"})});
addEventListener("pointerup",function(){ring.classList.remove("press")});
document.documentElement.addEventListener("mouseleave",function(){ring.classList.remove("on");dot.classList.remove("on");seen=false});
(function frame(){
requestAnimationFrame(frame);
if(document.hidden)return;
rx+=(x-rx)*.18;ry+=(y-ry)*.18;
ring.style.transform="translate3d("+rx.toFixed(1)+"px,"+ry.toFixed(1)+"px,0)";
dot.style.transform="translate3d("+x+"px,"+y+"px,0)";
if(!P.length)return;
cx.clearRect(0,0,W,H);
for(var i=P.length-1;i>=0;i--){var p=P[i];
if(p.rip){p.r+=3.2;p.l-=.03;if(p.l<=0){P.splice(i,1);continue}cx.globalAlpha=p.l;cx.strokeStyle=p.c;cx.lineWidth=2;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.2832);cx.stroke();continue}
p.x+=p.vx;p.y+=p.vy;p.l-=.022;if(p.l<=0){P.splice(i,1);continue}
cx.globalAlpha=p.l;cx.fillStyle=p.c;cx.shadowColor=p.c;cx.shadowBlur=10;cx.beginPath();cx.arc(p.x,p.y,p.r*p.l,0,6.2832);cx.fill();cx.shadowBlur=0}
cx.globalAlpha=1;
if(!P.length)cx.clearRect(0,0,W,H);
})();
})();
(function(){
var el=document.getElementById("typed8"),t="Quick answers about my work",j=0,del=false;
if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function f(){j+=del?-1:1;el.textContent=t.slice(0,j);var d=del?30:70;if(!del&&j===t.length){del=true;d=2200}else if(del&&j===0){del=false;d=500}setTimeout(f,d)}
f();
})();
