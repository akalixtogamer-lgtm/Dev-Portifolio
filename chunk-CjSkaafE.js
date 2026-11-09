import{t as a}from"./chunk-Xme3fqEn.js";import{$ as zr$1,A as Wd$1,B as da$1,C as NR,D as Ry,E as Py,F as _R,G as of$1,H as ky,I as bv$1,J as rf$1,K as pe,L as ca$1,M as Y,N as Yc$1,O as Tv$1,P as Yd$1,Q as zd$1,R as cf$1,S as MR,T as Pc$1,U as la$1,V as jd$1,W as ng$1,X as xy,Y as ua$1,Z as yy,_ as K,a as By,b as Ky,c as De,d as Fc$1,et as zy,f as Fd$1,g as Ig$1,h as Hg$1,i as Av$1,j as Wy,k as Vd$1,l as Do$1,m as Hd$1,n as $d$1,o as Cu$1,p as Gd$1,q as qy,r as $n$1,s as D,t as nr$1,u as Ev$1,v as Kc$1,w as Oy,x as Ly,y as Kd$1,z as cv$1}from"./main-OOYLOFKT.js";var Yi=class r{consulta=typeof window<`u`&&`matchMedia`in window?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;_reduzido=zr$1(this.consulta?.matches??!1);reduzido=this._reduzido.asReadonly();constructor(){this.consulta?.addEventListener(`change`,e=>this._reduzido.set(e.matches))}static ɵfac=function(t){return new(t||r)};static ɵprov=pe({token:r,factory:r.ɵfac,providedIn:`root`})};var kr=class r{capitulos=a;_idAtivo=zr$1(1);_progresso=zr$1(0);idAtivo=this._idAtivo.asReadonly();progresso=this._progresso.asReadonly();capituloAtivo=Av$1(()=>this.capitulos.find(e=>e.id===this._idAtivo())??this.capitulos[0]);definirAtivo(e){this.capitulos.some(t=>t.id===e)&&this._idAtivo.set(e)}definirProgresso(e){this._progresso.set(Math.min(1,Math.max(0,e)))}static ɵfac=function(t){return new(t||r)};static ɵprov=pe({token:r,factory:r.ɵfac,providedIn:`root`})};var Rl=class r{suportado=this.detectar();detectar(){try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl2`)??e.getContext(`webgl`))}catch{return!1}}static ɵfac=function(t){return new(t||r)};static ɵprov=pe({token:r,factory:r.ɵfac,providedIn:`root`})};function fr(r){if(r===void 0)throw new ReferenceError(`this hasn't been initialised - super() hasn't been called`);return r}function gp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ti={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}};var po={duration:.5,overwrite:!1,delay:0};var Nh;var vn;var Dt;var bi=1e8;var Mt=1/bi;var Eh=Math.PI*2;var J_=Eh/4;var $_=0;var _p=Math.sqrt;var K_=Math.cos;var Q_=Math.sin;var on=function(e){return typeof e==`string`};var Gt=function(e){return typeof e==`function`};var mr=function(e){return typeof e==`number`};var Vl=function(e){return typeof e>`u`};var $i=function(e){return typeof e==`object`};var ei=function(e){return e!==!1};var Oh=function(){return typeof window<`u`};var Pl=function(e){return Gt(e)||on(e)};var xp=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){};var Cn=Array.isArray;var j_=/random\([^)]+\)/g;var e0=/,\s*/g;var lp=/(?:-?\.?\d|\.)+/gi;var Uh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;var ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g;var vh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;var Fh=/[+-]=-?[.\d]+/;var t0=/[^,'"\[\]\s]+/gi;var n0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;var Ut;var Zi;var Ah;var Bh;var oi={};var Nl={};var vp;var yp=function(e){return(Nl=ia(e,oi))&&Rn};var Gl=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)};var mo=function(e,t){return!t&&console.warn(e)};var Sp=function(e,t){return e&&(oi[e]=t)&&Nl&&(Nl[e]=t)||oi};var go=function(){return 0};var i0={suppressEvents:!0,isStart:!0,kill:!1};var Il={suppressEvents:!0,kill:!1};var r0={suppressEvents:!0};var kh={};var Vr=[];var Ch={};var Mp;var Qn={};var yh={};var cp=30;var Ll=[];var zh=``;var Vh=function(e){var t=e[0],n,i;if($i(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(t););n=Ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xh(e[i],n)))||e.splice(i,1);return e};var Gr=function(e){return e._gsap||Vh(Ti(e))[0]._gsap};var Gh=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():Vl(n)&&e.getAttribute&&e.getAttribute(t)||n};var Bn=function(e,t){return(e=e.split(`,`)).forEach(t)||e};var Ht=function(e){return Math.round(e*1e5)/1e5||0};var Ot=function(e){return Math.round(e*1e7)/1e7||0};var Ss=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+i:n===`-`?e-i:n===`*`?e*i:e/i};var s0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n};var Ol=function(){var e=Vr.length,t=Vr.slice(0),n,i;for(Ch={},Vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)};var Hh=function(e){return!!(e._initted||e._startAt||e.add)};var bp=function(e,t,n,i){Vr.length&&!vn&&Ol(),e.render(t,n,i||!!(vn&&t<0&&Hh(e))),Vr.length&&!vn&&Ol()};var Tp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(t0).length<2?t:on(e)?e.trim():e};var wp=function(e){return e};var li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e};var a0=function(e){return function(t,n){for(var i in n)i in t||i===`duration`&&e||i===`ease`||(t[i]=n[i])}};var ia=function(e,t){for(var n in t)e[n]=t[n];return e};var up=function r(e,t){for(var n in t)n!==`__proto__`&&n!==`constructor`&&n!==`prototype`&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e};var Ul=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n};var uo=function(e){var t=e.parent||Ut,n=e.keyframes?a0(Cn(e.keyframes)):li;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e};var o0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0};var Ep=function(e,t,n,i,s){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t};var Hl=function(e,t,n,i){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null};var Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0};var _s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e};var l0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e};var Rh=function(e,t,n,i){return e._startAt&&(vn?e._startAt.revert(Il):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))};var c0=function r(e){return!e||e._ts&&r(e.parent)};var hp=function(e){return e._repeat?ra(e._tTime,e=e.duration()+e._rDelay)*e:0};var ra=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n};var Fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)};var Wl=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))};var Xl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wl(e),n._dirty||_s(n,e)),e};var Ap=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fl(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}};var Ji=function(e,t,n,i){return t.parent&&Hr(t),t._start=Ot((mr(n)?n:!n&&Bl(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ut?Mi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ep(e,t,`_first`,`_last`,e._sort?`_start`:0),Bl(t)||(e._recent=t),i||Ap(e,t),e._ts<0&&Xl(e,e._tTime),e};var Cp=function(e,t){return(oi.ScrollTrigger||Gl(`scrollTrigger`,t))&&oi.ScrollTrigger.create(t,e)};var Rp=function(e,t,n,i,s){if(Zh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mp!==jn.frame)return Vr.push(e),e._lazy=[s,i],1};var u0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))};var Bl=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`};var h0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&u0(e)&&!(!e._initted&&Bl(e))||(e._ts<0||e._dp._ts<0)&&!Bl(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=yo(0,e._tDur,t),u=ra(l,o),e._yoyo&&u&1&&(a=1-a),u!==ra(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||vn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Rp(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Rh(e,t,n,!0),e._onUpdate&&!n&&ai(e,`onUpdate`),l&&e._repeat&&!n&&e.parent&&ai(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hr(e,1),!n&&!vn&&(ai(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)};var d0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data===`isPause`&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data===`isPause`&&i._start<t)return i;i=i._prev}};var sa=function(e,t,n,i){var s=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ot(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Xl(e,e._tTime=e._tDur*o),e.parent&&Wl(e),n||_s(e.parent,e),e};var dp=function(e){return e instanceof An?_s(e):sa(e,e._dur)};var f0={_start:0,endTime:go,totalDuration:go};var Mi=function r(e,t,n){var i=e.labels,s=e._recent||f0,a=e.duration()>=bi?s.endTime(!1):e._dur,o,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)===`%`,o=t.indexOf(`=`),l===`<`||l===`>`?(o>=0&&(t=t.replace(/=/,``)),(l===`<`?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t};var ho=function(e,t,n){var i=mr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!(`immediateRender`in o);)o=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;a.immediateRender=ei(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Zt(t[0],a,t[s+1])};var Wr=function(e,t){return e||e===0?t(e):t};var yo=function(e,t,n){return n<e?e:n>t?t:n};var yn=function(e,t){return!on(e)||!(t=n0.exec(e))?``:t[1]};var p0=function(e,t,n){return Wr(n,function(i){return yo(e,t,i)})};var Ph=[].slice;var Pp=function(e,t){return e&&$i(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Zi};var m0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||Pp(i,1)?(s=n).push.apply(s,Ti(i)):n.push(i)})||n};var Ti=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):on(e)&&!n&&(Ah||!aa())?Ph.call((t||Bh).querySelectorAll(e),0):Cn(e)?m0(e,n):Pp(e)?Ph.call(e,0):e?[e]:[]};var Ih=function(e){return e=Ti(e)[0]||mo(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Ti(t,n.querySelectorAll?n:n===e?mo(`Invalid scope`)||Bh.createElement(`div`):e)}};var Ip=function(e){return e.sort(function(){return .5-Math.random()})};var Lp=function(e){if(Gt(e))return e;var t=$i(e)?e:{each:e},n=xs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return on(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,m){var x=(m||t).length,p=a[x],g,v,E,y,T,w,_,M,P;if(!p){if(P=t.grid===`auto`?0:(t.grid||[1,bi])[1],!P){for(_=-bi;_<(_=m[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],g=l?Math.min(P,x)*u-.5:i%P,v=P===bi?0:l?x*f/P-.5:i/P|0,_=0,M=bi,w=0;w<x;w++)E=w%P-g,y=v-(w/P|0),p[w]=T=c?Math.abs(c===`y`?y:E):_p(E*E+y*y),T>_&&(_=T),T<M&&(M=T);i===`random`&&Ip(p),p.max=_-M,p.min=M,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(P>x?x-1:c?c===`y`?x/P:P:Math.max(P,x/P))||0)*(i===`edges`?-1:1),p.b=x<0?s-x:s,p.u=yn(t.amount||t.each)||0,n=n&&x<0?C0(n):n}return x=(p[h]-p.min)/p.max||0,Ot(p.b+(n?n(x):x)*p.v)+p.u}};var Lh=function(e){var t=Math.pow(10,((e+``).split(`.`)[1]||``).length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mr(n)?0:yn(n))}};var Dp=function(e,t){var n=Cn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||bi,e.values?(e=Ti(e.values),(s=!mr(e[0]))&&(i*=i)):e=Lh(e.increment)),Wr(t,n?Gt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=bi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||mr(a)?u:u+yn(a)}:Lh(e))};var Np=function(e,t,n,i){return Wr(Cn(e)?!t:n===!0?!!(n=0):!i,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})};var g0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}};var _0=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}};var x0=function(e,t,n){return Up(e,t,0,1,n)};var Op=function(e,t,n){return Wr(n,function(i){return e[~~t(i)]})};var v0=function r(e,t,n){var i=t-e;return Cn(e)?Op(e,r(0,e.length),t):Wr(n,function(s){return(i+(s-e)%i)%i+e})};var y0=function r(e,t,n){var i=t-e,s=i*2;return Cn(e)?Op(e,r(0,e.length-1),t):Wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})};var oa=function(e){return e.replace(j_,function(t){var n=t.indexOf(`[`)+1,i=t.substring(n||7,n?t.indexOf(`]`):t.length-1).split(e0);return Np(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})};var Up=function(e,t,n,i,s){var a=t-e,o=i-n;return Wr(s,function(l){return n+((l-e)/a*o||0)})};var S0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=on(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(m){m*=f;var x=Math.min(h,~~m);return u[x](m-x)},n=t}else i||(e=ia(Cn(e)?[]:{},e));if(!u){for(l in t)qh.call(o,e,l,`get`,t[l]);s=function(m){return Kh(m,o)||(a?e.p:e)}}}return Wr(n,s)};var fp=function(e,t,n){var i=e.labels,s=bi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l};var ai=function(e,t,n){var i=e.vars,s=i[t],a=Dt,o=e._ctx,l,c,u;if(s)return l=i[t+`Params`],c=i.callbackScope||e,n&&Vr.length&&Ol(),o&&(Dt=o),u=l?s.apply(c,l):s.call(c),Dt=a,u};var lo=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&ai(e,`onInterrupt`),e};var na;var Fp=[];var Bp=function(e){if(e)if(e=!e.name&&e.default||e,Oh()||e.headless){var t=e.name,n=Gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:go,render:Kh,add:qh,kill:B0,modifier:F0,rawVars:0},a={targetTest:0,get:0,getSetter:ql,aliases:{},register:0};if(aa(),e!==i){if(Qn[t])return;li(i,li(Ul(e,s),a)),ia(i.prototype,ia(s,Ul(e,a))),Qn[i.prop=t]=i,e.targetTest&&(Ll.push(i),kh[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Sp(t,i),e.register&&e.register(Rn,i,kn)}else Fp.push(e)};var At=255;var co={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]};var Sh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0};var kp=function(e,t,n){var i=e?mr(e)?[e>>16,e>>8&At,e&At]:0:co.black,s,a,o,l,c,u,f,h,d,m;if(!i){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),co[e])i=co[e];else if(e.charAt(0)===`#`){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)===`hsl`){if(i=m=e.match(lp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Sh(l+1/3,s,a),i[1]=Sh(l,s,a),i[2]=Sh(l-1/3,s,a);else if(~e.indexOf(`=`))return i=e.match(Uh),n&&i.length<4&&(i[3]=1),i}else i=e.match(lp)||co.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/At,a=i[1]/At,o=i[2]/At,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i};var zp=function(e){var t=[],n=[],i=-1;return e.split(pr).forEach(function(s){var a=s.match(ys)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t};var pp=function(e,t,n){var i=``,s=(e+i).match(pr),a=t?`hsla(`:`rgba(`,o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=kp(h,t,1))&&a+(t?h[0]+`,`+h[1]+`%,`+h[2]+`%,`+h[3]:h.join(`,`))+`)`}),n&&(u=zp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(pr,`1`).split(ys),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+`0,0,0,0)`:(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(pr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]};var pr=(function(){var r=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,e;for(e in co)r+=`|`+e+`\\b`;return new RegExp(r+`)`,`gi`)})();var M0=/hsl[a]?\(/;var Wh=function(e){var t=e.join(` `),n;if(pr.lastIndex=0,pr.test(t))return n=M0.test(t),e[1]=pp(e[1],n),e[0]=pp(e[0],n,zp(e[1])),!0};var _o;var jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,m=function x(p){var g=r()-i,v=p===!0,E,y,T,w;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,E=T-a,(E>0||v)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=E+(E>=s?0:s-E),y=1),v||(l=c(x)),y)for(d=0;d<o.length;d++)o[d](T,h,w,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){vp&&(!Ah&&Oh()&&(Zi=Ah=window,Bh=Zi.document||{},oi.gsap=Rn,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(Rn.version),yp(Nl||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),Fp.forEach(Bp)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},_o=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_o=0,c=go},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,g,v){var E=g?function(y,T,w,_){p(y,T,w,_),f.remove(E)}:p;return f.remove(p),o[v?`unshift`:`push`](E),aa(),E},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},f})();var aa=function(){return!_o&&jn.wake()};var st={};var b0=/^[\d.\-M][\d.\-,\s]/;var T0=/["']/g;var w0=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(`,`):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(T0,``).trim():+c,i=l.substr(o+1).trim();return t};var E0=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),i=e.indexOf(`(`,t);return e.substring(t,~i&&i<n?e.indexOf(`)`,n+1):n)};var A0=function(e){var t=(e+``).split(`(`),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[w0(t[1])]:E0(e).split(`,`).map(Tp)):st._CE&&b0.test(e)?st._CE(``,e):n};var C0=function(e){return function(t){return 1-e(1-t)}};var xs=function(e,t){return e&&(Gt(e)?e:st[e]||A0(e))||t};var Ms=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Bn(e,function(o){st[o]=oi[o]=s,st[a=o.toLowerCase()]=n;for(var l in s)st[a+(l===`easeIn`?`.in`:l===`easeOut`?`.out`:`.inOut`)]=st[o+`.`+l]=s[l]}),s};var Vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}};var Mh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Eh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Q_((u-a)*s)+1},l=e===`out`?o:e===`in`?function(c){return 1-o(1-c)}:Vp(o);return s=Eh/s,l.config=function(c,u){return r(e,c,u)},l};var bh=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e===`out`?n:e===`in`?function(s){return 1-n(1-s)}:Vp(n);return i.config=function(s){return r(e,s)},i};Bn(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(r,e){var t=e<5?e+1:e;Ms(r+`,Power`+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Ms(`Elastic`,Mh(`in`),Mh(`out`),Mh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ms(`Bounce`,function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ms(`Expo`,function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ms(`Circ`,function(r){return-(_p(1-r*r)-1)});Ms(`Sine`,function(r){return r===1?1:-K_(r*J_)+1});Ms(`Back`,bh(`in`),bh(`out`),bh());st.SteppedEase=st.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*yo(0,a,o)|0)+s)*n}}};po.ease=st[`quad.out`];Bn(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(r){return zh+=r+`,`+r+`Params,`});var Xh=function(e,t){this.id=$_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gh,this.set=t?t.getSetter:ql};var xo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sa(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),_o||jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xl(this,n),!s._dp||s.parent||Ap(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ra(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(yo(-Math.abs(this._delay),o,s),i!==!1),Wl(this),l0(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{aa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Mt,a;if(s)for(this._tTime-=Mt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Mt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=r0);var i=vn;return vn=n,Hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!==`nested`&&n.kill!==!1&&this.kill(),vn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mi(this,n),ei(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ei(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+`Params`]=s),n===`onUpdate`&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Gt(n)?n:wp,l=function(){var u=i.then;i.then=null,s&&s(),Gt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){lo(this)},r})();li(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var An=(function(r){gp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),Ut&&Ji(n.parent||Ut,fr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cp(fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ho(0,arguments,this),this},t.from=function(i,s,a){return ho(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ho(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(i,s,Mi(this,a),1),this},t.call=function(i,s,a){return Ji(this,Zt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Zt(i,a,Mi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,uo(a).immediateRender=ei(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,uo(o).immediateRender=ei(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,m,x,p,g,v,E,y,T,w,_;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,E=this._ts,g=!E,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Ot(u%p),u===l?(x=this._repeat,h=c):(T=Ot(u/p),x=~~T,x&&x===T&&(h=c,x--),h>c&&(h=c)),T=ra(this._tTime,p),!o&&this._tTime&&T!==x&&this._tTime-T*p-this._dur<=0&&(T=x),w&&x&1&&(h=c-h,_=1),x!==T&&!this._lock){var M=w&&T&1,P=M===(w&&x&1);if(x<T&&(M=!M),o=M?0:u%c?c:u,this._lock=1,this.render(o||(_?0:Ot(x*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,`onRepeat`),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,T=x),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=d0(this,Ot(o),Ot(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(ai(this,`onStart`),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=-Mt);break}}d=m}else{d=this._last;for(var C=i<0?i:h;d;){if(m=d._prev,(d._act||C<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,a||vn&&Hh(d)),h!==this._time||!this._ts&&!g){v=0,m&&(u+=this._zTime=C?-Mt:Mt);break}}d=m}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Mt)._zTime=h>=o?1:-1,this._ts))return this._start=y,Wl(this),this.render(i,s,a);this._onUpdate&&!s&&ai(this,`onUpdate`,!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ai(this,u===l&&i>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(mr(s)||(s=Mi(this,s,i)),!(i instanceof xo)){if(Cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(on(i))return this.addLabel(i,s);if(Gt(i))i=Zt.delayedCall(0,i);else return this}return this!==i?Ji(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Zt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return on(i)?this.removeLabel(i):Gt(i)?this.killTweensOf(i):(i.parent===this&&Hl(this,i),i===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Mi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Zt.delayedCall(0,s||go,a);return o.data=`isPause`,this._hasPause=1,Ji(this,o,Mi(this,i))},t.removePause=function(i){var s=this._first;for(i=Mi(this,i);s;)s._start===i&&s.data===`isPause`&&Hr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)zr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ti(i),l=this._first,c=mr(s),u;l;)l instanceof Zt?s0(l._targets,o)&&(c?(!zr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Mi(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=Zt.to(a,li({ease:s.ease||`none`,lazy:!1,immediateRender:!1,time:o,overwrite:`auto`,duration:s.duration||Math.abs((o-(c&&`time`in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&`time`in c?c.time:a._time))/a.timeScale());m._dur!==p&&sa(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,f||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,li({startAt:{time:Mi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),fp(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),fp(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ot(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return _s(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_s(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=bi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ot(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;sa(a,a===Ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ut._ts&&(bp(Ut,Fl(i,Ut)),Mp=jn.frame),jn.frame>=cp){cp+=ti.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&ti.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},e})(xo);li(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var R0=function(e,t,n,i,s,a,o){var l=new kn(this._pt,e,t,0,1,$h,null,s),c=0,u=0,f,h,d,m,x,p,g,v;for(l.b=n,l.e=i,n+=``,i+=``,(g=~i.indexOf(`random(`))&&(i=oa(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(vh)||[];f=vh.exec(i);)m=f[0],x=i.substring(c,f.index),d?d=(d+1)%5:x.substr(-5)===`rgba(`&&(d=1),m!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:`,`,s:p,c:m.charAt(1)===`=`?Ss(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=vh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):``,l.fp=o,(Fh.test(i)||g)&&(l.e=0),this._pt=l,l};var qh=function(e,t,n,i,s,a,o,l,c,u){Gt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!==`get`?n:Gt(f)?c?e[t.indexOf(`set`)||!Gt(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():f,d=Gt(f)?c?N0:Hp:Jh,m;if(on(i)&&(~i.indexOf(`random(`)&&(i=oa(i)),i.charAt(1)===`=`&&(m=Ss(h,i)+(yn(h)||0),(m||m===0)&&(i=m))),!u||h!==i||Dh)return!isNaN(h*i)&&i!==``?(m=new kn(this._pt,e,t,+h||0,i-(h||0),typeof f==`boolean`?U0:Wp,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(t in e)&&Gl(t,i),R0.call(this,e,t,h,i,d,l||ti.stringFilter,c))};var P0=function(e,t,n,i,s){if(Gt(e)&&(e=fo(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Cn(e)||xp(e))return on(e)?fo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fo(e[o],s,t,n,i);return a};var Yh=function(e,t,n,i,s,a){var o,l,c,u;if(Qn[e]&&(o=new Qn[e]).init(s,o.rawVars?t[e]:P0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==na))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o};var zr;var Dh;var Zh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,m=e._dur,x=e._startAt,p=e._targets,g=e.parent,v=g&&g.data===`nested`?g.vars.targets:p,E=e._overwrite===`auto`&&!Nh,y=e.timeline,T=i.easeReverse||f,w,_,M,P,C,N,D,V,I,B,H,F,te;if(y&&(!h||!s)&&(s=`none`),e._ease=xs(s,po.ease),e._rEase=T&&(xs(T)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(V=p[0]?Gr(p[0]).harness:0,F=V&&i[V.prop],w=Ul(i,kh),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!d?x.render(-1,!0):x.revert(u&&m?Il:i0),x._lazy=0),a){if(Hr(e._startAt=Zt.set(p,li({data:`isStart`,overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,`onUpdate`)},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!o&&!d)&&e._startAt.revert(Il),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!x){if(t&&(o=!1),M=li({overwrite:!1,data:`isFromStart`,lazy:o&&!x&&ei(l),immediateRender:o,stagger:0,parent:g},w),F&&(M[V.prop]=F),Hr(e._startAt=Zt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Il):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ei(l)||l&&!m,_=0;_<p.length;_++){if(C=p[_],D=C._gsap||Vh(p)[_]._gsap,e._ptLookup[_]=B={},Ch[D.id]&&Vr.length&&Ol(),H=v===p?_:v.indexOf(C),V&&(I=new V).init(C,F||w,e,H,v)!==!1&&(e._pt=P=new kn(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){B[W]=P}),I.priority&&(N=1)),!V||F)for(M in w)Qn[M]&&(I=Yh(M,w,e,H,C,v))?I.priority&&(N=1):B[M]=P=qh.call(e,C,M,`get`,w[M],H,v,0,i.stringFilter);e._op&&e._op[_]&&e.kill(C,e._op[_]),E&&e._pt&&(zr=e,Ut.killTweensOf(C,B,e.globalTime(t)),te=!e.parent,zr=0),e._pt&&l&&(Ch[D.id]=1)}N&&Qh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,h&&t<=0&&y.render(bi,!0,!0)};var I0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Dh=1,e.vars[t]=`+=0`,Zh(e,o),Dh=0,l?mo(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ht(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))};var L0=function(e,t){var n=e[0]?Gr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ia({},t);for(a in i)if(a in s)for(l=i[a].split(`,`),o=l.length;o--;)s[l[o]]=s[a];return s};var D0=function(e,t,n,i){var s=t.ease||i||`power1.inOut`,a,o;if(Cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:s})};var fo=function(e,t,n,i,s){return Gt(e)?e.call(t,n,i,s):on(e)&&~e.indexOf(`random(`)?oa(e):e};var kl=zh+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`;var Gp={};Bn(kl+`,id,stagger,delay,duration,paused,scrollTrigger`,function(r){return Gp[r]=1});kl=kl.split(`,`);var Zt=(function(r){gp(e,r);function e(n,i,s,a){var o;typeof i==`number`&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:uo(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=i.parent||Ut,v=(Cn(n)||xp(n)?mr(n[0]):`length`in i)?[n]:Ti(n),E,y,T,w,_,M,P,C;if(o._targets=v.length?Vh(v):mo(`GSAP target `+n+` not found. https://gsap.com`,!ti.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||h||Pl(c)||Pl(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(E=o.timeline=new An({data:`nested`,defaults:x||{},targets:g&&g.data===`nested`?g.vars.targets:v}),E.kill(),E.parent=E._dp=fr(o),E._start=0,h||Pl(c)||Pl(u)){if(w=v.length,P=h&&Lp(h),$i(h))for(_ in h)~kl.indexOf(_)&&(C||(C={}),C[_]=h[_]);for(y=0;y<w;y++)T=Ul(i,Gp),T.stagger=0,N&&(T.easeReverse=N),C&&ia(T,C),M=v[y],T.duration=+fo(c,fr(o),y,M,v),T.delay=(+fo(u,fr(o),y,M,v)||0)-o._delay,!h&&w===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),E.to(M,T,P?P(y,M,v):0),E._ease=st.none;E.duration()?c=u=0:o.timeline=0}else if(m){uo(li(E.vars.defaults,{ease:`none`})),E._ease=xs(m.ease||i.ease||`none`);var D=0,V,I,B;if(Cn(m))m.forEach(function(H){return E.to(v,H,`>`)}),E.duration();else{T={};for(_ in m)_===`ease`||_===`easeEach`||D0(_,m[_],T,m.easeEach);for(_ in T)for(V=T[_].sort(function(H,F){return H.t-F.t}),D=0,y=0;y<V.length;y++)I=V[y],B={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},B[_]=I.v,E.to(v,B,D),D+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return d===!0&&!Nh&&(zr=fr(o),Ut.killTweensOf(v),zr=0),Ji(g,fr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!m&&o._start===Ot(g._time)&&ei(f)&&c0(fr(o))&&g.data!==`nested`)&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),p&&Cp(fr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Mt&&!u?l:i<Mt?0:i,h,d,m,x,p,g,v,E;if(!c)h0(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,s,a);if(h=Ot(f%x),f===l?(m=this._repeat,h=c):(p=Ot(f/x),m=~~p,m&&m===p?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(h=c-h),p=ra(this._tTime,x),h===o&&!a&&this._initted&&m===p)return this._tTime=f,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==x&&this._initted&&(this._lock=a=1,this.render(Ot(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(Rp(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var T=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(ai(this,`onStart`),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Rh(this,i,s,a),ai(this,`onUpdate`)),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ai(this,`onRepeat`),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Rh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hr(this,1),!s&&(!u||o)&&(f||o||g)&&(ai(this,f===l?`onComplete`:`onReverseComplete`,!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){_o||jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zh(this,c),u=this._ease(c/this._dur),I0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Xl(this,0),this.parent||Ep(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s=`all`),!i&&(!s||s===`all`))return this._lazy=this._pt=0,this.parent?lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zr&&zr.vars.overwrite!==!0)._first||lo(this),this.parent&&a!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ti(i):o,c=this._ptLookup,u=this._pt,f,h,d,m,x,p,g;if((!s||s===`all`)&&o0(o,l))return s===`all`&&(this._pt=0),lo(this);for(f=this._op=this._op||[],s!==`all`&&(on(s)&&(x={},Bn(s,function(v){return x[v]=1}),s=x),s=L0(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s===`all`?(f[g]=s,m=h,d={}):(d=f[g]=f[g]||{},m=s);for(x in m)p=h&&h[x],p&&((!(`kill`in p.d)||p.d.kill(x)===!0)&&Hl(this,p,`_pt`),delete h[x]),d!==`all`&&(d[x]=1)}return this._initted&&!this._pt&&u&&lo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ho(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ho(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ut.killTweensOf(i,s,a)},e})(xo);li(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn(`staggerTo,staggerFrom,staggerFromTo`,function(r){Zt[r]=function(){var e=new An,t=Ph.call(arguments,0);return t.splice(r===`staggerFromTo`?5:4,0,0),e[r].apply(e,t)}});var Jh=function(e,t,n){return e[t]=n};var Hp=function(e,t,n){return e[t](n)};var N0=function(e,t,n,i){return e[t](i.fp,n)};var O0=function(e,t,n){return e.setAttribute(t,n)};var ql=function(e,t){return Gt(e[t])?Hp:Vl(e[t])&&e.setAttribute?O0:Jh};var Wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)};var U0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)};var $h=function(e,t){var n=t._pt,i=``;if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)};var Kh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next};var F0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a};var B0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hl(this,t,`_pt`):t.dep||(n=1),t=i;return!n};var k0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)};var Qh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s};var kn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wp,this.d=l||this,this.set=c||Jh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=k0,this.m=n,this.mt=s,this.tween=i},r})();Bn(zh+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(r){return kh[r]=1});oi.TweenMax=oi.TweenLite=Zt;oi.TimelineLite=oi.TimelineMax=An;Ut=new An({sortChildren:!1,defaults:po,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0});ti.stringFilter=Wh;var vs=[];var Dl={};var z0=[];var mp=0;var V0=0;var Th=function(e){return(Dl[e]||z0).map(function(t){return t()})};var vo=function(){var e=Date.now(),t=[];e-mp>2&&(Th(`matchMediaInit`),vs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Th(`matchMediaRevert`),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mp=e,Th(`matchMedia`))};var Xp=(function(){function r(t,n){this.selector=n&&Ih(n),this.data=[],this._r=[],this.isReverted=!1,this.id=V0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Gt(n)&&(s=i,i=n,n=Gt);var a=this,o=function(){var c=Dt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ih(s)),Dt=a,f=i.apply(a,arguments),Gt(f)&&a._r.push(f),Dt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Gt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data===`nested`)&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data===`isFlip`&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!==`nested`&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=vs.length;a--;)vs[a].id===this.id&&vs.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(vo):o.removeEventListener(`change`,vo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})();var G0=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var a=new Xp(0,s||this.scope),o=a.conditions={},l,c,u;Dt&&!a.selector&&(a.selector=Dt.selector),this.contexts.push(a),i=a.add(`onMatch`,i),a.queries=n;for(c in n)c===`all`?u=1:(l=Zi.matchMedia(n[c]),l&&(vs.indexOf(a)<0&&vs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(vo):l.addEventListener(`change`,vo),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})();var zl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bp(i)})},timeline:function(e){return new An(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=Ti(e)[0]);var s=Gr(e||{}).get,a=n?wp:Tp;return n===`native`&&(n=``),e&&(t?a((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Qn[o]&&Qn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ti(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Qn[t],o=Gr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;na._pt=0,f.init(e,n?u+n:u,na,0,[e]),f.render(1,f),na._pt&&Kh(1,na)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,li((i={},i[t]=`+=0.1`,i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,po.ease)),up(po,e||{})},config:function(e){return up(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||``).split(`,`).forEach(function(o){return o&&!Qn[o]&&!oi[o]&&mo(t+` effect requires `+o+` plugin.`)}),yh[t]=function(o,l,c){return n(Ti(o),li(l||{},s),c)},a&&(An.prototype[t]=function(o,l,c){return this.add(yh[t](o,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):st},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new An(e),i,s;for(n.smoothChildTiming=ei(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=s;return Ji(Ut,n,0),n},context:function(e,t){return e?new Xp(e,t):Dt},matchMedia:function(e){return new G0(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||vo()},addEventListener:function(e,t){var n=Dl[e]||(Dl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:v0,wrapYoyo:y0,distribute:Lp,random:Np,snap:Dp,normalize:x0,getUnit:yn,clamp:p0,splitColor:kp,toArray:Ti,selector:Ih,mapRange:Up,pipe:g0,unitize:_0,interpolate:S0,shuffle:Ip},install:yp,effects:yh,ticker:jn,updateRoot:An.updateRoot,plugins:Qn,globalTimeline:Ut,core:{PropTween:kn,globals:Sp,Tween:Zt,Timeline:An,Animation:xo,getCache:Gr,_removeLinkedListItem:Hl,reverting:function(){return vn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Nh=e}}};Bn(`to,from,fromTo,delayedCall,set,killTweensOf`,function(r){return zl[r]=Zt[r]});jn.add(An.updateRoot);na=zl.to({},{duration:0});var H0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n};var W0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=H0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))};var wh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(on(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}W0(o,s)}}}};var Rn=zl.registerPlugin({name:`attr`,init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(l||0)+``,t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wh(`roundProps`,Lh),wh(`modifiers`),wh(`snap`,Dp))||zl;Zt.version=An.version=Rn.version=`3.15.1`;vp=1;Oh()&&aa();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;var qp;var Xr;var ca;var rd;var Es;var Yp;var sd;var ux=function(){return typeof window<`u`};var _r={};var ws=180/Math.PI;var ua=Math.PI/180;var la=Math.atan2;var Zp=1e8;var ad=/([A-Z])/g;var hx=/(left|right|width|margin|padding|x)/i;var dx=/[\s,\(]\S/;var Ki={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`};var ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)};var fx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)};var px=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)};var mx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)};var gx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)};var nm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)};var im=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)};var _x=function(e,t,n){return e.style[t]=n};var xx=function(e,t,n){return e.style.setProperty(t,n)};var vx=function(e,t,n){return e._gsap[t]=n};var yx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n};var Sx=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)};var Mx=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)};var Ft=`transform`;var ni=Ft+`Origin`;var bx=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!==`transform`)e=Ki[e]||e,~e.indexOf(`,`)?e.split(`,`).forEach(function(o){return n.tfm[o]=gr(i,o)}):this.tfm[e]=a.x?a[e]:gr(i,e),e===ni&&(this.tfm.zOrigin=a.zOrigin);else return Ki.transform.split(`,`).forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ft)>=0)return;a.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(ni,t,``)),e=Ft}(s||t)&&this.props.push(e,t,s[e])};var rm=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))};var Tx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s=0,a;for(;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)===`--`?e[s]:e[s].replace(ad,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),s=sd(),(!s||!s.isStart)&&!n[Ft]&&(rm(n),i.zOrigin&&n[ni]&&(n[ni]+=` `+i.zOrigin+`px`,i.zOrigin=0,i.renderTransform()),i.uncache=1)}};var sm=function(e,t){var n={target:e,props:[],revert:Tx,save:bx};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(i){return n.save(i)}),n};var am;var td=function(e,t){var n=Xr.createElementNS?Xr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Xr.createElement(e);return n&&n.style?n:Xr.createElement(e)};var ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ad,`-$1`).toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ha(t)||t,1)||``};var Jp=`O,Moz,ms,Ms,Webkit`.split(`,`);var ha=function(e,t,n){var s=(t||Es).style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Jp[a]+e in s););return a<0?null:(a===3?`ms`:a>=0?Jp[a]:``)+e};var nd=function(){ux()&&window.document&&(qp=window,Xr=qp.document,ca=Xr.documentElement,Es=td(`div`)||{style:{}},td(`div`),Ft=ha(Ft),ni=Ft+`Origin`,Es.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,am=!!ha(`perspective`),sd=Rn.core.reverting,rd=1)};var $p=function(e){var t=e.ownerSVGElement,n=td(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),i=e.cloneNode(!0),s;i.style.display=`block`,n.appendChild(i),ca.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ca.removeChild(n),s};var Kp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])};var om=function(e){var t,n;try{t=e.getBBox()}catch{t=$p(e),n=1}return t&&(t.width||t.height)||n||(t=$p(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kp(e,[`x`,`cx`,`x1`])||0,y:+Kp(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t};var lm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&om(e))};var Yr=function(e,t){if(t){var n=e.style,i;t in _r&&t!==ni&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(i===`--`?t:t.replace(ad,`-$1`).toLowerCase())):n.removeAttribute(t)}};var qr=function(e,t,n,i,s,a){var o=new kn(e._pt,t,n,0,1,a?im:nm);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o};var Qp={deg:1,rad:1,turn:1};var wx={grid:1,flex:1};var Zr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+``).trim().substr((s+``).length)||`px`,o=Es.style,l=hx.test(t),c=e.tagName.toLowerCase()===`svg`,u=(c?`client`:`offset`)+(l?`Width`:`Height`),f=100,h=i===`px`,d=i===`%`,m,x,p,g;if(i===a||!s||Qp[i]||Qp[a])return s;if(a!==`px`&&!h&&(s=r(e,t,n,`px`)),g=e.getCTM&&lm(e),(d||a===`%`)&&(_r[t]||~t.indexOf(`adius`)))return m=g?e.getBBox()[l?`width`:`height`]:e[u],Ht(d?s/m*f:s/100*m);if(o[l?`width`:`height`]=f+(h?a:i),x=i!==`rem`&&~t.indexOf(`adius`)||i===`em`&&e.appendChild&&!c?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Xr||!x.appendChild)&&(x=Xr.body),p=x._gsap,p&&d&&p.width&&l&&p.time===jn.time&&!p.uncache)return Ht(s/p.width*f);if(d&&(t===`height`||t===`width`)){var v=e.style[t];e.style[t]=f+i,m=e[u],v?e.style[t]=v:Yr(e,t)}else(d||a===`%`)&&!wx[ci(x,`display`)]&&(o.position=ci(e,`position`)),x===e&&(o.position=`static`),x.appendChild(Es),m=Es[u],x.removeChild(Es),o.position=`absolute`;return l&&d&&(p=Gr(x),p.time=jn.time,p.width=x[u]),Ht(h?m*s/f:m&&s?f/m*s:0)};var gr=function(e,t,n,i){var s;return rd||nd(),t in Ki&&t!==`transform`&&(t=Ki[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),_r[t]&&t!==`transform`?(s=bo(e,i),s=t!==`transformOrigin`?s[t]:s.svg?s.origin:Zl(ci(e,ni))+` `+s.zOrigin+`px`):(s=e.style[t],(!s||s===`auto`||i||~(s+``).indexOf(`calc(`))&&(s=Yl[t]&&Yl[t](e,t,n)||ci(e,t)||Gh(e,t)||(t===`opacity`?1:0))),n&&!~(s+``).trim().indexOf(` `)?Zr(e,t,s,n)+n:s};var Ex=function(e,t,n,i){if(!n||n===`none`){var s=ha(t,e,1),a=s&&ci(e,s,1);a&&a!==n?(t=s,n=a):t===`borderColor`&&(n=ci(e,`borderTopColor`))}var o=new kn(this._pt,e.style,t,0,1,$h),l=0,c=0,u,f,h,d,m,x,p,g,v,E,y,T;if(o.b=n,o.e=i,n+=``,i+=``,i.substring(0,6)===`var(--`&&(i=ci(e,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(x=e.style[t],e.style[t]=i,i=ci(e,t)||i,x?e.style[t]=x:Yr(e,t)),u=[n,i],Wh(u),n=u[0],i=u[1],h=n.match(ys)||[],T=i.match(ys)||[],T.length){for(;f=ys.exec(i);)p=f[0],v=i.substring(l,f.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),p!==(x=h[c++]||``)&&(d=parseFloat(x)||0,y=x.substr((d+``).length),p.charAt(1)===`=`&&(p=Ss(d,p)+y),g=parseFloat(p),E=p.substr((g+``).length),l=ys.lastIndex-E.length,E||(E=E||ti.units[t]||y,l===i.length&&(i+=E,o.e+=E)),y!==E&&(d=Zr(e,t,x,E)||0),o._pt={_next:o._pt,p:v||c===1?v:`,`,s:d,c:g-d,m:m&&m<4||t===`zIndex`?Math.round:0});o.c=l<i.length?i.substring(l,i.length):``}else o.r=t===`display`&&i===`none`?im:nm;return Fh.test(i)&&(o.e=0),this._pt=o,o};var jp={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`};var Ax=function(e){var t=e.split(` `),n=t[0],i=t[1]||`50%`;return(n===`top`||n===`bottom`||i===`left`||i===`right`)&&(e=n,n=i,i=e),t[0]=jp[n]||n,t[1]=jp[i]||i,t.join(` `)};var Cx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s===`all`||s===!0)i.cssText=``,l=1;else for(s=s.split(`,`),c=s.length;--c>-1;)o=s[c],_r[o]&&(l=1,o=o===`transformOrigin`?ni:Ft),Yr(n,o);l&&(Yr(n,Ft),a&&(a.svg&&n.removeAttribute(`transform`),i.scale=i.rotate=i.translate=`none`,bo(n,1),a.uncache=1,rm(i)))}};var Yl={clearProps:function(e,t,n,i,s){if(s.data!==`isFromStart`){var a=e._pt=new kn(e._pt,t,n,0,0,Cx);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}};var Mo=[1,0,0,1,0,0];var cm={};var um=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e};var em=function(e){var t=ci(e,Ft);return um(t)?Mo:t.substr(7).match(Uh).map(Ht)};var od=function(e,t){var n=e._gsap||Gr(e),i=e.style,s=em(e),a,o,l,c;return n.svg&&e.getAttribute(`transform`)?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(`,`)===`1,0,0,1,0,0`?Mo:s):(s===Mo&&!e.offsetParent&&e!==ca&&!n.svg&&(l=i.display,i.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ca.appendChild(e)),s=em(e),l?i.display=l:Yr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ca.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)};var id=function(e,t,n,i,s,a){var o=e._gsap,l=s||od(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],m=l[1],x=l[2],p=l[3],g=l[4],v=l[5],E=t.split(` `),y=parseFloat(E[0])||0,T=parseFloat(E[1])||0,w,_,M,P;n?l!==Mo&&(_=d*p-m*x)&&(M=y*(p/_)+T*(-x/_)+(x*v-p*g)/_,P=y*(-m/_)+T*(d/_)-(d*v-m*g)/_,y=M,T=P):(w=om(e),y=w.x+(~E[0].indexOf(`%`)?y/100*w.width:y),T=w.y+(~(E[1]||E[0]).indexOf(`%`)?T/100*w.height:T)),i||i!==!1&&o.smooth?(g=y-c,v=T-u,o.xOffset=f+(g*d+v*x)-g,o.yOffset=h+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ni]=`0px 0px`,a&&(qr(a,o,`xOrigin`,c,y),qr(a,o,`yOrigin`,u,T),qr(a,o,`xOffset`,f,o.xOffset),qr(a,o,`yOffset`,h,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+T)};var bo=function(e,t){var n=e._gsap||new Xh(e);if(`x`in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a=`px`,o=`deg`,l=getComputedStyle(e),c=ci(e,ni)||`0`,u=f=h=x=p=g=v=E=y=0,f,h,d=m=1,m,x,p,g,v,E,y,T,w,_,M,P,C,N,D,V,I,B,H,F,te,W,R,ne,Se,Ue,Z,ue;return n.svg=!!(e.getCTM&&lm(e)),l.translate&&((l.translate!==`none`||l.scale!==`none`||l.rotate!==`none`)&&(i[Ft]=(l.translate!==`none`?`translate3d(`+(l.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `:``)+(l.rotate!==`none`?`rotate(`+l.rotate+`) `:``)+(l.scale!==`none`?`scale(`+l.scale.split(` `).join(`,`)+`) `:``)+(l[Ft]!==`none`?l[Ft]:``)),i.scale=i.rotate=i.translate=`none`),_=od(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+`px `+(n.yOrigin-te.y)+`px`,F=``):F=!t&&e.getAttribute(`data-svg-origin`),id(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,_)),T=n.xOrigin||0,w=n.yOrigin||0,_!==Mo&&(N=_[0],D=_[1],V=_[2],I=_[3],u=B=_[4],f=H=_[5],_.length===6?(d=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+V*V),x=N||D?la(D,N)*ws:0,v=V||I?la(V,I)*ws+x:0,v&&(m*=Math.abs(Math.cos(v*ua))),n.svg&&(u-=T-(T*N+w*V),f-=w-(T*D+w*I))):(ue=_[6],Ue=_[7],R=_[8],ne=_[9],Se=_[10],Z=_[11],u=_[12],f=_[13],h=_[14],M=la(ue,Se),p=M*ws,M&&(P=Math.cos(-M),C=Math.sin(-M),F=B*P+R*C,te=H*P+ne*C,W=ue*P+Se*C,R=B*-C+R*P,ne=H*-C+ne*P,Se=ue*-C+Se*P,Z=Ue*-C+Z*P,B=F,H=te,ue=W),M=la(-V,Se),g=M*ws,M&&(P=Math.cos(-M),C=Math.sin(-M),F=N*P-R*C,te=D*P-ne*C,W=V*P-Se*C,Z=I*C+Z*P,N=F,D=te,V=W),M=la(D,N),x=M*ws,M&&(P=Math.cos(M),C=Math.sin(M),F=N*P+D*C,te=B*P+H*C,D=D*P-N*C,H=H*P-B*C,N=F,B=te),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),d=Ht(Math.sqrt(N*N+D*D+V*V)),m=Ht(Math.sqrt(H*H+ue*ue)),M=la(B,H),v=Math.abs(M)>2e-4?M*ws:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!um(ci(e,Ft)),F&&e.setAttribute(`transform`,F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ht(d),n.scaleY=Ht(m),n.rotation=Ht(x)+o,n.rotationX=Ht(p)+o,n.rotationY=Ht(g)+o,n.skewX=v+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(i[ni]=Zl(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?Px:am?hm:Rx,n.uncache=0,n};var Zl=function(e){return(e=e.split(` `))[0]+` `+e[1]};var jh=function(e,t,n){var i=yn(t);return Ht(parseFloat(t)+parseFloat(Zr(e,`x`,n+`px`,i)))+i};var Rx=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,hm(e,t)};var bs=`0deg`;var So=`0px`;var Ts=`) `;var hm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,m=n.scaleX,x=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,E=n.zOrigin,y=``,T=g===`auto`&&e&&e!==1||g===!0;if(E&&(f!==bs||u!==bs)){var w=parseFloat(u)*ua,_=Math.sin(w),M=Math.cos(w),P;w=parseFloat(f)*ua,P=Math.cos(w),a=jh(v,a,_*P*-E),o=jh(v,o,-Math.sin(w)*-E),l=jh(v,l,M*P*-E+E)}p!==So&&(y+=`perspective(`+p+Ts),(i||s)&&(y+=`translate(`+i+`%, `+s+`%) `),(T||a!==So||o!==So||l!==So)&&(y+=l!==So||T?`translate3d(`+a+`, `+o+`, `+l+`) `:`translate(`+a+`, `+o+Ts),c!==bs&&(y+=`rotate(`+c+Ts),u!==bs&&(y+=`rotateY(`+u+Ts),f!==bs&&(y+=`rotateX(`+f+Ts),(h!==bs||d!==bs)&&(y+=`skew(`+h+`, `+d+Ts),(m!==1||x!==1)&&(y+=`scale(`+m+`, `+x+Ts),v.style[Ft]=y||`translate(0, 0)`};var Px=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,m=n.xOrigin,x=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,E=parseFloat(a),y=parseFloat(o),T,w,_,M,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ua,c*=ua,T=Math.cos(l)*f,w=Math.sin(l)*f,_=Math.sin(l-c)*-h,M=Math.cos(l-c)*h,c&&(u*=ua,P=Math.tan(c-u),P=Math.sqrt(1+P*P),_*=P,M*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),T*=P,w*=P)),T=Ht(T),w=Ht(w),_=Ht(_),M=Ht(M)):(T=f,M=h,w=_=0),(E&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(E=Zr(d,`x`,a,`px`),y=Zr(d,`y`,o,`px`)),(m||x||p||g)&&(E=Ht(E+m-(m*T+x*_)+p),y=Ht(y+x-(m*w+x*M)+g)),(i||s)&&(P=d.getBBox(),E=Ht(E+i/100*P.width),y=Ht(y+s/100*P.height)),P=`matrix(`+T+`,`+w+`,`+_+`,`+M+`,`+E+`,`+y+`)`,d.setAttribute(`transform`,P),v&&(d.style[Ft]=P)};var Ix=function(e,t,n,i,s){var a=360,o=on(s),c=parseFloat(s)*(o&&~s.indexOf(`rad`)?ws:1)-i,u=i+c+`deg`,f,h;return o&&(f=s.split(`_`)[1],f===`short`&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f===`cw`&&c<0?c=(c+a*Zp)%a-~~(c/a)*a:f===`ccw`&&c>0&&(c=(c-a*Zp)%a-~~(c/a)*a)),e._pt=h=new kn(e._pt,t,n,i,c,fx),h.e=u,h.u=`deg`,e._props.push(n),h};var tm=function(e,t){for(var n in t)e[n]=t[n];return e};var Lx=function(e,t,n){var i=tm({},n._gsap),s=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,l,c,u,f,h,d,m;i.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Ft]=t,o=bo(n,1),Yr(n,Ft),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Ft],a[Ft]=t,o=bo(n,1),a[Ft]=c);for(l in _r)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),m=yn(u),f=d!==m?Zr(n,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new kn(e._pt,o,l,f,h-f,ed),e._pt.u=m||0,e._props.push(l));tm(o,i)};Bn(`padding,margin,Width,Radius`,function(r,e){var t=`Top`,n=`Right`,i=`Bottom`,s=`Left`,a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:`border`+o+r});Yl[e>1?`border`+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(m){return gr(o,m,c)}),d=h.join(` `),d.split(h[0]).length===5?h[0]:d;h=(u+``).split(` `),d={},a.forEach(function(m,x){return d[m]=h[x]=h[x]||h[(x-1)/2|0]}),o.init(l,d,f)}});var ld={name:`css`,register:nd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,m,x,p,g,v,E,y,T,w,_,M,P;rd||nd(),this.styles=this.styles||sm(e),M=this.styles.props,this.tween=n;for(x in t)if(x!==`autoRound`&&(u=t[x],!(Qn[x]&&Yh(x,t,n,i,e,s)))){if(d=typeof u,m=Yl[x],d===`function`&&(u=u.call(n,i,e,s),d=typeof u),d===`string`&&~u.indexOf(`random(`)&&(u=oa(u)),m)m(this,e,x,u,n)&&(_=1);else if(x.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(x)+``).trim(),u+=``,pr.lastIndex=0,pr.test(c)||(p=yn(c),g=yn(u),g?p!==g&&(c=Zr(e,x,c,g)+g):p&&(u+=p)),this.add(o,`setProperty`,c,u,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(d!==`undefined`){if(l&&x in l?(c=typeof l[x]==`function`?l[x].call(n,i,e,s):l[x],on(c)&&~c.indexOf(`random(`)&&(c=oa(c)),yn(c+``)||c===`auto`||(c+=ti.units[x]||yn(gr(e,x))||``),(c+``).charAt(1)===`=`&&(c=gr(e,x))):c=gr(e,x),h=parseFloat(c),v=d===`string`&&u.charAt(1)===`=`&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),x in Ki&&(x===`autoAlpha`&&(h===1&&gr(e,`visibility`)===`hidden`&&f&&(h=0),M.push(`visibility`,0,o.visibility),qr(this,o,`visibility`,h?`inherit`:`hidden`,f?`inherit`:`hidden`,!f)),x!==`scale`&&x!==`transform`&&(x=Ki[x],~x.indexOf(`,`)&&(x=x.split(`,`)[0]))),E=x in _r,E){if(this.styles.save(x),P=u,d===`string`&&u.substring(0,6)===`var(--`){if(u=ci(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var C=e.style.perspective;e.style.perspective=u,u=ci(e,`perspective`),C?e.style.perspective=C:Yr(e,`perspective`)}f=parseFloat(u)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||bo(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new kn(this._pt,o,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),x===`scale`)this._pt=new kn(this._pt,T,`scaleY`,T.scaleY,(v?Ss(T.scaleY,v+f):f)-T.scaleY||0,ed),this._pt.u=0,a.push(`scaleY`,x),x+=`X`;else if(x===`transformOrigin`){M.push(ni,0,o[ni]),u=Ax(u),T.svg?id(e,u,0,w,0,this):(g=parseFloat(u.split(` `)[2])||0,g!==T.zOrigin&&qr(this,T,`zOrigin`,T.zOrigin,g),qr(this,o,x,Zl(c),Zl(u)));continue}else if(x===`svgOrigin`){id(e,u,1,w,0,this);continue}else if(x in cm){Ix(this,T,x,h,v?Ss(h,v+u):u);continue}else if(x===`smoothOrigin`){qr(this,T,`smooth`,T.smooth,u);continue}else if(x===`force3D`){T[x]=u;continue}else if(x===`transform`){Lx(this,u,e);continue}}else x in o||(x=ha(x)||x);if(E||(f||f===0)&&(h||h===0)&&!dx.test(u)&&x in o)p=(c+``).substr((h+``).length),f||(f=0),g=yn(u)||(x in ti.units?ti.units[x]:p),p!==g&&(h=Zr(e,x,c,g)),this._pt=new kn(this._pt,E?T:o,x,h,(v?Ss(h,v+f):f)-h,!E&&(g===`px`||x===`zIndex`)&&t.autoRound!==!1?gx:ed),this._pt.u=g||0,E&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=mx):p!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=px);else if(x in o)Ex.call(this,e,x,c,v?v+u:u);else if(x in e)this.add(e,x,c||e[x],v?v+u:u,i,s);else if(x!==`parseTransform`){Gl(x,u);continue}E||(x in o?M.push(x,0,o[x]):typeof e[x]==`function`?M.push(x,2,e[x]()):M.push(x,1,c||e[x])),a.push(x)}}_&&Qh(this)},render:function(e,t){if(t.tween._time||!sd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(`,`)<0&&(t=i),t in _r&&t!==ni&&(e._gsap.x||gr(e,`x`))?n&&Yp===n?t===`scale`?yx:vx:(Yp=n||{})&&(t===`scale`?Sx:Mx):e.style&&!Vl(e.style[t])?_x:~t.indexOf(`-`)?xx:ql(e,t)},core:{_removeProperty:Yr,_getMatrix:od}};Rn.utils.checkPrefix=ha;Rn.core.getStyleSaver=sm;(function(r,e,t,n){var i=Bn(r+`,`+e+`,`+t,function(s){_r[s]=1});Bn(e,function(s){ti.units[s]=`deg`,cm[s]=1}),Ki[i[13]]=r+`,`+e,Bn(n,function(s){var a=s.split(`:`);Ki[a[1]]=i[a[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`);Bn(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(r){ti.units[r]=`px`});Rn.registerPlugin(ld);var Rt=Rn.registerPlugin(ld)||Rn;Rt.core.Tween;function dm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Dx(r,e,t){return e&&dm(r.prototype,e),t&&dm(r,t),r}var Sn;var Kl;var ii;var Jr;var $r;var fa;var pm;var As;var pa;var mm;var xr;var Oi;var gm;var _m=function(){return Sn||typeof window<`u`&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn};var xm=1;var da=[];var qe=[];var Ui=[];var wo=Date.now;var cd=function(e,t){return t};var Ox=function(){var e=pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,qe),i.push.apply(i,Ui),qe=n,Ui=i,cd=function(a,o){return t[a](o)}};var yr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]};var Eo=function(e){return!!~mm.indexOf(e)};var Vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})};var zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)};var Jl=`scrollLeft`;var $l=`scrollTop`;var ud=function(){return xr&&xr.isPressed||qe.cache++};var Ql=function(e,t){var n=function i(s){if(s||s===0){xm&&ii.history.scrollRestoration!==`manual`&&(ii.history.scrollRestoration=`manual`);var a=xr&&xr.isPressed;s=i.v=Math.round(s)||(xr&&xr.iOS?1:0),e(s),i.cacheID=qe.cache,a&&cd(`ss`,s)}else(t||qe.cache!==i.cacheID||cd(`ref`))&&(i.cacheID=qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n};var Pn={s:Jl,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Ql(function(r){return arguments.length?ii.scrollTo(r,jt.sc()):ii.pageXOffset||Jr[Jl]||$r[Jl]||fa[Jl]||0})};var jt={s:$l,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Pn,sc:Ql(function(r){return arguments.length?ii.scrollTo(Pn.sc(),r):ii.pageYOffset||Jr[$l]||$r[$l]||fa[$l]||0})};var Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e==`string`&&Sn.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)};var Ux=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1};var vr=function(e,t){var n=t.s,i=t.sc;Eo(e)&&(e=Jr.scrollingElement||$r);var s=qe.indexOf(e),a=i===jt.sc?1:2;!~s&&(s=qe.push(e)-1),qe[s+a]||Vn(e,`scroll`,ud);var o=qe[s+a],l=o||(qe[s+a]=Ql(yr(e,n),!0)||(Eo(e)?i:Ql(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Sn.getProperty(e,`scrollBehavior`)===`smooth`),l};var jl=function(e,t,n){var i=e,s=e,a=wo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,x){var p=wo();x||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(m){var x=o,p=s,g=wo();return(m||m===0)&&m!==i&&u(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-x)*1e3};return{update:u,reset:f,getVelocity:h}};var To=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e};var fm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n};var vm=function(){pa=Sn.core.globals().ScrollTrigger,pa&&pa.core&&Ox()};var ym=function(e){return Sn=e||_m(),!Kl&&Sn&&typeof document<`u`&&document.body&&(ii=window,Jr=document,$r=Jr.documentElement,fa=Jr.body,mm=[ii,Jr,$r,fa],Sn.utils.clamp,gm=Sn.core.context||function(){},As=`onpointerenter`in fa?`pointer`:`mouse`,pm=Wt.isTouch=ii.matchMedia&&ii.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Wt.eventTypes=(`ontouchstart`in $r?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in $r?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return xm=0},500),Kl=1),pa||vm(),Kl};Pn.op=jt;qe.cache=0;var Wt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Kl||ym(Sn)||console.warn(`Please gsap.registerPlugin(Observer)`),pa||vm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,x=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,E=n.onPress,y=n.onRelease,T=n.onRight,w=n.onLeft,_=n.onUp,M=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,V=n.onToggleY,I=n.onHover,B=n.onHoverEnd,H=n.onMove,F=n.ignoreCheck,te=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,ne=n.onWheel,Se=n.onEnable,Ue=n.onDisable,Z=n.onClick,ue=n.scrollSpeed,ye=n.capture,be=n.allowClicks,me=n.lockAxis,De=n.onLockAxis;this.target=o=Gn(o)||$r,this.vars=n,d&&(d=Sn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,ue=ue||1,a=a||`wheel,touch,pointer`,c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(fa).lineHeight)||22);var yt,Ee,Ge,Ie,Oe,ft,lt,Y=this,je=0,Jt=0,bt=n.passive||!u&&n.passive!==!1,rt=vr(o,Pn),kt=vr(o,jt),qt=rt(),U=kt(),mt=~a.indexOf(`touch`)&&!~a.indexOf(`pointer`)&&Oi[0]===`pointerdown`,ct=Eo(o),ze=o.ownerDocument||Jr,he=[0,0,0],pt=[0,0,0],Le=0,Fe=function(){return Le=wo()},A=function(pe,re){return(Y.event=pe)&&d&&Ux(pe.target,d)||re&&mt&&pe.pointerType!==`touch`||F&&F(pe,re)},S=function(){Y._vx.reset(),Y._vy.reset(),Ee.pause(),f&&f(Y)},z=function(){var pe=Y.deltaX=fm(he),re=Y.deltaY=fm(pt),j=Math.abs(pe)>=i,_e=Math.abs(re)>=i;N&&(j||_e)&&N(Y,pe,re,he,pt),j&&(T&&Y.deltaX>0&&T(Y),w&&Y.deltaX<0&&w(Y),P&&P(Y),D&&Y.deltaX<0!=je<0&&D(Y),je=Y.deltaX,he[0]=he[1]=he[2]=0),_e&&(M&&Y.deltaY>0&&M(Y),_&&Y.deltaY<0&&_(Y),C&&C(Y),V&&Y.deltaY<0!=Jt<0&&V(Y),Jt=Y.deltaY,pt[0]=pt[1]=pt[2]=0),(Ie||Ge)&&(H&&H(Y),Ge&&(p&&Ge===1&&p(Y),v&&v(Y),Ge=0),Ie=!1),ft&&!(ft=!1)&&De&&De(Y),Oe&&(ne(Y),Oe=!1),yt=0},se=function(pe,re,j){he[j]+=pe,pt[j]+=re,Y._vx.update(pe),Y._vy.update(re),c?yt||(yt=requestAnimationFrame(z)):z()},ie=function(pe,re){me&&!lt&&(Y.axis=lt=Math.abs(pe)>Math.abs(re)?`x`:`y`,ft=!0),lt!==`y`&&(he[2]+=pe,Y._vx.update(pe,!0)),lt!==`x`&&(pt[2]+=re,Y._vy.update(re,!0)),c?yt||(yt=requestAnimationFrame(z)):z()},ce=function(pe){if(!A(pe,1)){pe=To(pe,u);var re=pe.clientX,j=pe.clientY,_e=re-Y.x,ee=j-Y.y,Te=Y.isDragging;Y.x=re,Y.y=j,(Te||(_e||ee)&&(Math.abs(Y.startX-re)>=s||Math.abs(Y.startY-j)>=s))&&(Ge||(Ge=Te?2:1),Te||(Y.isDragging=!0),ie(_e,ee))}},ge=Y.onPress=function(ae){A(ae,1)||ae&&ae.button||(Y.axis=lt=null,Ee.pause(),Y.isPressed=!0,ae=To(ae),je=Jt=0,Y.startX=Y.x=ae.clientX,Y.startY=Y.y=ae.clientY,Y._vx.reset(),Y._vy.reset(),Vn(te?o:ze,Oi[1],ce,bt,!0),Y.deltaX=Y.deltaY=0,E&&E(Y))},G=Y.onRelease=function(ae){if(!A(ae,1)){zn(te?o:ze,Oi[1],ce,!0);var pe=!isNaN(Y.y-Y.startY),re=Y.isDragging,j=re&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),_e=To(ae);!j&&pe&&(Y._vx.reset(),Y._vy.reset(),u&&be&&Sn.delayedCall(.08,function(){if(wo()-Le>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(ze.createEvent){var ee=ze.createEvent(`MouseEvents`);ee.initMouseEvent(`click`,!0,!0,ii,1,_e.screenX,_e.screenY,_e.clientX,_e.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(ee)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&re&&!te&&Ee.restart(!0),Ge&&z(),g&&re&&g(Y),y&&y(Y,j)}},Q=function(pe){return pe.touches&&pe.touches.length>1&&(Y.isGesturing=!0)&&W(pe,Y.isDragging)},le=function(){return(Y.isGesturing=!1)||R(Y)},L=function(pe){if(!A(pe)){var re=rt(),j=kt();se((re-qt)*ue,(j-U)*ue,1),qt=re,U=j,f&&Ee.restart(!0)}},K=function(pe){if(!A(pe)){pe=To(pe,u),ne&&(Oe=!0);var re=(pe.deltaMode===1?l:pe.deltaMode===2?ii.innerHeight:1)*m;se(pe.deltaX*re,pe.deltaY*re,0),f&&!te&&Ee.restart(!0)}},$=function(pe){if(!A(pe)){var re=pe.clientX,j=pe.clientY,_e=re-Y.x,ee=j-Y.y;Y.x=re,Y.y=j,Ie=!0,f&&Ee.restart(!0),(_e||ee)&&ie(_e,ee)}},de=function(pe){Y.event=pe,I(Y)},oe=function(pe){Y.event=pe,B(Y)},fe=function(pe){return A(pe)||To(pe,u)&&Z(Y)};Ee=Y._dc=Sn.delayedCall(h||.25,S).pause(),Y.deltaX=Y.deltaY=0,Y._vx=jl(0,50,!0),Y._vy=jl(0,50,!0),Y.scrollX=rt,Y.scrollY=kt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,gm(this),Y.enable=function(ae){return Y.isEnabled||(Vn(ct?ze:o,`scroll`,ud),a.indexOf(`scroll`)>=0&&Vn(ct?ze:o,`scroll`,L,bt,ye),a.indexOf(`wheel`)>=0&&Vn(o,`wheel`,K,bt,ye),(a.indexOf(`touch`)>=0&&pm||a.indexOf(`pointer`)>=0)&&(Vn(o,Oi[0],ge,bt,ye),Vn(ze,Oi[2],G),Vn(ze,Oi[3],G),be&&Vn(o,`click`,Fe,!0,!0),Z&&Vn(o,`click`,fe),W&&Vn(ze,`gesturestart`,Q),R&&Vn(ze,`gestureend`,le),I&&Vn(o,As+`enter`,de),B&&Vn(o,As+`leave`,oe),H&&Vn(o,As+`move`,$)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ie=Ge=!1,Y._vx.reset(),Y._vy.reset(),qt=rt(),U=kt(),ae&&ae.type&&ge(ae),Se&&Se(Y)),Y},Y.disable=function(){Y.isEnabled&&(da.filter(function(ae){return ae!==Y&&Eo(ae.target)}).length||zn(ct?ze:o,`scroll`,ud),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),zn(te?o:ze,Oi[1],ce,!0)),zn(ct?ze:o,`scroll`,L,ye),zn(o,`wheel`,K,ye),zn(o,Oi[0],ge,ye),zn(ze,Oi[2],G),zn(ze,Oi[3],G),zn(o,`click`,Fe,!0),zn(o,`click`,fe),zn(ze,`gesturestart`,Q),zn(ze,`gestureend`,le),zn(o,As+`enter`,de),zn(o,As+`leave`,oe),zn(o,As+`move`,$),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Ue&&Ue(Y))},Y.kill=Y.revert=function(){Y.disable();var ae=da.indexOf(Y);ae>=0&&da.splice(ae,1),xr===Y&&(xr=0)},da.push(Y),te&&Eo(o)&&(xr=Y),Y.enable(x)},Dx(r,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),r})();Wt.version=`3.15.1`;Wt.create=function(r){return new Wt(r)};Wt.register=ym;Wt.getAll=function(){return da.slice()};Wt.getById=function(r){return da.filter(function(e){return e.vars.id===r})[0]};_m()&&Sn.registerPlugin(Wt);var Ae;var xa;var Ke;var St;var di;var xt;var Td;var mc;var ko;var Do;var Co;var ec;var In;var xc;var _d;var Wn;var Sm;var Mm;var va;var Bm;var hd;var km;var Hn;var xd;var zm;var Vm;var Kr;var vd;var wd;var ya;var Ed;var Qr;var yd;var dd;var tc=1;var Ln=Date.now;var fd=Ln();var Ai=0;var Ro=0;var bm=function(e,t,n){var i=hi(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=i,i?e.substr(6,e.length-7):e};var Tm=function(e,t){return t&&(!hi(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e};var Fx=function r(){return Ro&&requestAnimationFrame(r)};var wm=function(){return xc=1};var Em=function(){return xc=0};var Qi=function(e){return e};var Po=function(e){return Math.round(e*1e5)/1e5||0};var Gm=function(){return typeof window<`u`};var Hm=function(){return Ae||Gm()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae};var Ds=function(e){return!!~Td.indexOf(e)};var Wm=function(e){return(e===`Height`?Ed:Ke[`inner`+e])||di[`client`+e]||xt[`client`+e]};var Xm=function(e){return yr(e,`getBoundingClientRect`)||(Ds(e)?function(){return pc.width=Ke.innerWidth,pc.height=Ed,pc}:function(){return Sr(e)})};var Bx=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=yr(e,`getBoundingClientRect`))?function(){return a()[i]}:function(){return(t?Wm(s):e[`client`+s])||0}};var kx=function(e,t){return!t||~Ui.indexOf(e)?Xm(e):function(){return pc}};var ji=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n=`scroll`+i)&&(a=yr(e,n))?a()-Xm(e)()[s]:Ds(e)?(di[n]||xt[n])-Wm(i):e[n]-e[`offset`+i])};var nc=function(e,t){for(var n=0;n<va.length;n+=3)(!t||~t.indexOf(va[n+1]))&&e(va[n],va[n+1],va[n+2])};var hi=function(e){return typeof e==`string`};var Dn=function(e){return typeof e==`function`};var Io=function(e){return typeof e==`number`};var Cs=function(e){return typeof e==`object`};var Ao=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()};var ma=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}};var ga=Math.abs;var qm=`left`;var Ym=`top`;var Ad=`right`;var Cd=`bottom`;var Ps=`width`;var Is=`height`;var No=`Right`;var Oo=`Left`;var Uo=`Top`;var Fo=`Bottom`;var en=`padding`;var wi=`margin`;var Ma=`Width`;var Rd=`Height`;var ln=`px`;var Ei=function(e){return Ke.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)};var zx=function(e){var t=Ei(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`};var Am=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e};var Sr=function(e,t){var n=t&&Ei(e)[_d]!==`matrix(1, 0, 0, 1, 0, 0)`&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i};var gc=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0};var Zm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t};var Vx=function(e){return function(t){return Ae.utils.snap(Zm(e),t)}};var Pd=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}};var Gx=function(e){return function(t,n){return Pd(Zm(e))(t,n.direction)}};var ic=function(e,t,n,i){return n.split(`,`).forEach(function(s){return e(t,s,i)})};var fn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})};var dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)};var rc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))};var Cm={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`};var sc={toggleActions:`play`,anticipatePin:0};var _c={top:0,left:0,center:.5,bottom:1,right:1};var uc=function(e,t){if(hi(e)){var n=e.indexOf(`=`),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in _c?_c[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e};var ac=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,m=St.createElement(`div`),x=Ds(n)||yr(n,`pinType`)===`fixed`,p=e.indexOf(`scroller`)!==-1,g=x?xt:n.tagName===`IFRAME`?n.contentDocument.body:n,v=e.indexOf(`start`)!==-1,E=v?c:u,y=`border-color:`+E+`;font-size:`+f+`;color:`+E+`;font-weight:`+d+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((p||l)&&x?`fixed;`:`absolute;`),(p||l||!x)&&(y+=(i===jt?Ad:Cd)+`:`+(a+parseFloat(h))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),m._isStart=v,m.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),m.style.cssText=y,m.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m[`offset`+i.op.d2],hc(m,0,i,v),m};var hc=function(e,t,n,i){var s={display:`block`},a=n[i?`os2`:`p2`],o=n[i?`p2`:`os2`];e._isFlipped=i,s[n.a+`Percent`]=i?-100:0,s[n.a]=i?`1px`:0,s[`border`+a+Ma]=1,s[`border`+o+Ma]=0,s[n.p]=t+`px`,Ae.set(e,s)};var $e=[];var Sd={};var zo;var Rm=function(){return Ln()-Ai>34&&(zo||(zo=requestAnimationFrame(Mr)))};var _a=function(){(!Hn||!Hn.isPressed||Hn.startX>xt.clientWidth)&&(qe.cache++,Hn?zo||(zo=requestAnimationFrame(Mr)):Mr(),Ai||Os(`scrollStart`),Ai=Ln())};var pd=function(){Vm=Ke.innerWidth,zm=Ke.innerHeight};var Lo=function(e){qe.cache++,(e===!0||!In&&!km&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!xd||Vm!==Ke.innerWidth||Math.abs(Ke.innerHeight-zm)>Ke.innerHeight*.25))&&mc.restart(!0)};var Ns={};var Hx=[];var Jm=function r(){return dn(Ye,`scrollEnd`,r)||Rs(!0)};var Os=function(e){return Ns[e]&&Ns[e].map(function(t){return t()})||Hx};var ui=[];var $m=function(e){for(var t=0;t<ui.length;t+=5)(!e||ui[t+4]&&ui[t+4].query===e)&&(ui[t].style.cssText=ui[t+1],ui[t].getBBox&&ui[t].setAttribute(`transform`,ui[t+2]||``),ui[t+3].uncache=1)};var Km=function(){qe.cache++,qe.forEach(function(e){return Dn(e)&&(e.rec=e())})};var Id=function(e,t){var n;for(Wn=0;Wn<$e.length;Wn++)n=$e[Wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qr=!0,t&&$m(t),t||Os(`revert`)};var Qm=function(e,t){qe.cache++,(t||!Xn)&&qe.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(wd=e,Ke.history.scrollRestoration!==e&&(Ke.history.scrollRestoration=e))};var Xn;var Ls=0;var Pm;var Wx=function(){if(Pm!==Ls){var e=Pm=Ls;requestAnimationFrame(function(){return e===Ls&&Rs(!0)})}};var jm=function(){xt.appendChild(ya),Ed=!Hn&&ya.offsetHeight||Ke.innerHeight,xt.removeChild(ya)};var Im=function(e){return ko(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})};var Rs=function(e,t){if(di=St.documentElement,xt=St.body,Td=[Ke,St,di,xt],Ai&&!e&&!Qr){fn(Ye,`scrollEnd`,Jm);return}jm(),Xn=Ye.isRefreshing=!0,Qr||Km();var n=Os(`refreshInit`);Bm&&Ye.sort(),t||Id(),qe.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior=`auto`),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),Qr=!1,$e.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?`offsetWidth`:`offsetHeight`,a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),yd=1,Im(!0),$e.forEach(function(i){var s=ji(i.scroller,i._dir),a=i.vars.end===`max`||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Im(!1),yd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),qe.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior=`smooth`}),i.rec&&i(i.rec))}),Qm(wd,1),mc.pause(),Ls++,Xn=2,Mr(2),$e.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Ye.isRefreshing=!1,Os(`refresh`)};var Md=0;var dc=1;var Bo;var Mr=function(e){if(e===2||!Xn&&!Qr){Ye.isUpdating=!0,Bo&&Bo.update(0);var t=$e.length,n=Ln(),i=n-fd>=50,s=t&&$e[0].scroll();if(dc=Md>s?-1:1,Xn||(Md=s),i&&(Ai&&!xc&&n-Ai>200&&(Ai=0,Os(`scrollEnd`)),Co=fd,fd=n),dc<0){for(Wn=t;Wn-->0;)$e[Wn]&&$e[Wn].update(0,i);dc=1}else for(Wn=0;Wn<t;Wn++)$e[Wn]&&$e[Wn].update(0,i);Ye.isUpdating=!1}zo=0};var bd=[qm,Ym,Cd,Ad,wi+Fo,wi+No,wi+Uo,wi+Oo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`];var fc=bd.concat([Ps,Is,`boxSizing`,`max`+Ma,`max`+Rd,`position`,wi,en,en+Uo,en+No,en+Fo,en+Oo]);var Xx=function(e,t,n){Sa(n);var i=e._gsap;if(i.spacerIsNative)Sa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1};var md=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=bd.length,a=t.style,o=e.style,l;s--;)l=bd[s],a[l]=n[l];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[Cd]=o[Ad]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[Ps]=gc(e,Pn)+ln,a[Is]=gc(e,jt)+ln,a[en]=o[wi]=o[Ym]=o[qm]=`0`,Sa(i),o[Ps]=o[`max`+Ma]=n[Ps],o[Is]=o[`max`+Rd]=n[Is],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}};var qx=/([A-Z])/g;var Sa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(qx,`-$1`).toLowerCase())}};var oc=function(e){for(var t=fc.length,n=e.style,i=[],s=0;s<t;s++)i.push(fc[s],n[fc[s]]);return i.t=e,i};var Yx=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i};var pc={left:0,top:0};var Lm=function(e,t,n,i,s,a,o,l,c,u,f,h,d,m){Dn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)===`max`&&(e=h+(e.charAt(4)===`=`?uc(`0`+e.substr(3),n):0));var x=d?d.time():0,p,g,v;if(d&&d.seek(0),isNaN(e)||(e=+e),Io(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&hc(o,n,i,!0);else{Dn(t)&&(t=t(l));var E=(e||`0`).split(` `),y,T,w,_;v=Gn(t,l)||xt,y=Sr(v)||{},(!y||!y.left&&!y.top)&&Ei(v).display===`none`&&(_=v.style.display,v.style.display=`block`,y=Sr(v),_?v.style.display=_:v.style.removeProperty(`display`)),T=uc(E[0],y[i.d]),w=uc(E[1]||`0`,n),e=y[i.p]-c[i.p]-u+T+s-w,o&&hc(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var M=e+n,P=a._isStart;p=`scroll`+i.d2,hc(a,M,i,P&&M>20||!P&&(f?Math.max(xt[p],di[p]):a.parentNode[p])<=M+1),f&&(c=Sr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+ln))}return d&&v&&(p=Sr(v),d.seek(h),g=Sr(v),d._caScrollDist=p[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(x),d?e:Math.round(e)};var Zx=/(webkit|moz|length|cssText|inset)/i;var Dm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Ei(e);for(a in o)!+a&&!Zx.test(a)&&o[a]&&typeof s[a]==`string`&&a!==`0`&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}};var eg=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}};var lc=function(e,t,n){var i={};i[t.p]=`+=`+n,Ae.set(e,i)};var Nm=function(e,t){var n=vr(e,t),i=`_scroll`+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,m={};c=c||n();var x=eg(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){qe.cache++,a.tween&&Mr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,`wheel`,n.wheelHandler),Ye.isTouch&&fn(e,`touchmove`,n.wheelHandler),s};var Ye=(function(){function r(t,n){xa||r.register(Ae)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),vd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ro){this.update=this.refresh=this.kill=Qi;return}n=Am(hi(n)||Io(n)||n.nodeType?{trigger:n}:n,sc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,m=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,E=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,_=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:jt,N=!f&&f!==0,D=Gn(n.scroller||Ke),V=Ae.core.getCache(D),I=Ds(D),B=(`pinType`in n?n.pinType:yr(D,`pinType`)||I&&`fixed`)===`fixed`,H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(` `),te=`markers`in n?n.markers:sc.markers,W=I?0:parseFloat(Ei(D)[`border`+C.p2+Ma])||0,R=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Se=Bx(D,I,C),Ue=kx(D,I),Z=0,ue=0,ye=0,be=vr(D,C),me,De,yt,Ee,Ge,Ie,Oe,ft,lt,Y,je,Jt,bt,rt,kt,qt,U,mt,ct,ze,he,pt,Le,Fe,A,S,z,se,ie,ce,ge,G,Q,le,L,K,$,de,oe;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=_?_.time.bind(_):be,Ee=be(),Qr&&be.rec==null&&(be.rec=Ee),R.vars=n,i=i||n.animation,`refreshPriority`in n&&(Bm=1,n.refreshPriority===-9999&&(Bo=R)),V.tweenScroll=V.tweenScroll||{top:Nm(D,jt),left:Nm(D,Pn)},R.tweenTo=me=V.tweenScroll[C.p],R.scrubDuration=function(j){Q=Io(j)&&j,Q?G?G.duration(j):G=Ae.to(i,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Q,paused:!0,onComplete:function(){return g&&g(R)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),ce=0,l||(l=i.vars.id)),y&&((!Cs(y)||y.push)&&(y={snapTo:y}),`scrollBehavior`in xt.style&&Ae.set(I?[xt,di]:D,{scrollBehavior:`auto`}),qe.forEach(function(j){return Dn(j)&&j.target===(I?St.scrollingElement||di:D)&&(j.smooth=!1)}),yt=Dn(y.snapTo)?y.snapTo:y.snapTo===`labels`?Vx(i):y.snapTo===`labelsDirectional`?Gx(i):y.directional!==!1?function(j,_e){return Pd(y.snapTo)(j,Ln()-ue<500?0:_e.direction)}:Ae.utils.snap(y.snapTo),le=y.duration||{min:.1,max:2},le=Cs(le)?Do(le.min,le.max):Do(le,le),L=Ae.delayedCall(y.delay||Q/2||.1,function(){var j=be(),_e=Ln()-ue<500,ee=me.tween;if((_e||Math.abs(R.getVelocity())<10)&&!ee&&!xc&&Z!==j){var Te=(j-Ie)/rt,et=i&&!N?i.totalProgress():Te,He=_e?0:(et-ge)/(Ln()-Co)*1e3||0,It=Ae.utils.clamp(-Te,1-Te,ga(He/2)*He/.185),$t=Te+(y.inertia===!1?0:It),Lt,Tt,_t=y,nn=_t.onStart,wt=_t.onInterrupt,bn=_t.onComplete;if(Lt=yt($t,R),Io(Lt)||(Lt=$t),Tt=Math.max(0,Math.round(Ie+Lt*rt)),j<=Oe&&j>=Ie&&Tt!==j){if(ee&&!ee._initted&&ee.data<=ga(Tt-j))return;y.inertia===!1&&(It=Lt-Te),me(Tt,{duration:le(ga(Math.max(ga($t-et),ga(Lt-et))*.185/He/.05||0)),ease:y.ease||`power3`,data:ga(Tt-j),onInterrupt:function(){return L.restart(!0)&&wt&&ma(R,wt)},onComplete:function(){R.update(),Z=be(),i&&!N&&(G?G.resetTo(`totalProgress`,Lt,i._tTime/i._tDur):i.progress(Lt)),ce=ge=i&&!N?i.totalProgress():R.progress,v&&v(R),bn&&ma(R,bn)}},j,It*rt,Tt-j-It*rt),nn&&ma(R,nn,me.tween)}}else R.isActive&&Z!==j&&L.restart(!0)}).pause()),l&&(Sd[l]=R),h=R.trigger=Gn(h||d!==!0&&d),oe=h&&h._gsap&&h._gsap.stRevert,oe&&(oe=oe(R)),d=d===!0?h:Gn(d),hi(o)&&(o={targets:h,className:o}),d&&(m===!1||m===wi||(m=!m&&d.parentNode&&d.parentNode.style&&Ei(d.parentNode).display===`flex`?!1:en),R.pin=d,De=Ae.core.getCache(d),De.spacer?kt=De.pinState:(w&&(w=Gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=oc(w))),De.spacer=mt=w||St.createElement(`div`),mt.classList.add(`pin-spacer`),l&&mt.classList.add(`pin-spacer-`+l),De.pinState=kt=oc(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),R.spacer=mt=De.spacer,ie=Ei(d),Fe=ie[m+C.os2],ze=Ae.getProperty(d),he=Ae.quickSetter(d,C.a,ln),md(d,mt,ie),U=oc(d)),te){Jt=Cs(te)?Am(te,Cm):Cm,Y=ac(`scroller-start`,l,D,C,Jt,0),je=ac(`scroller-end`,l,D,C,Jt,0,Y),ct=Y[`offset`+C.op.d2];var fe=Gn(yr(D,`content`)||D);ft=this.markerStart=ac(`start`,l,fe,C,Jt,ct,0,_),lt=this.markerEnd=ac(`end`,l,fe,C,Jt,ct,0,_),_&&(de=Ae.quickSetter([ft,lt],C.a,ln)),!B&&!(Ui.length&&yr(D,`fixedMarkers`)===!0)&&(zx(I?xt:D),Ae.set([Y,je],{force3D:!0}),S=Ae.quickSetter(Y,C.a,ln),se=Ae.quickSetter(je,C.a,ln))}if(_){var ae=_.vars.onUpdate,pe=_.vars.onUpdateParams;_.eventCallback(`onUpdate`,function(){R.update(0,0,1),ae&&ae.apply(_,pe||[])})}if(R.previous=function(){return $e[$e.indexOf(R)-1]},R.next=function(){return $e[$e.indexOf(R)+1]},R.revert=function(j,_e){if(!_e)return R.kill(!0);var ee=j!==!1||!R.enabled,Te=In;ee!==R.isReverted&&(ee&&(K=Math.max(be(),R.scroll.rec||0),ye=R.progress,$=i&&i.progress()),ft&&[ft,lt,Y,je].forEach(function(et){return et.style.display=ee?`none`:`block`}),ee&&(In=R,R.update(ee)),d&&(!T||!R.isActive)&&(ee?Xx(d,mt,kt):md(d,mt,Ei(d),A)),ee||R.update(ee),In=Te,R.isReverted=ee)},R.refresh=function(j,_e,ee,Te){if(!((In||!R.enabled)&&!_e)){if(d&&j&&Ai){fn(r,`scrollEnd`,Jm);return}!Xn&&ne&&ne(R),In=R,me.tween&&!ee&&(me.tween.kill(),me.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var et=Se(),He=Ue(),It=_?_.duration():ji(D,C),$t=rt<=.01||!rt,Lt=0,Tt=Te||0,_t=Cs(ee)?ee.end:n.end,nn=n.endTrigger||h,wt=Cs(ee)?ee.start:n.start||(n.start===0||!h?0:d?`0 0`:`0 100%`),bn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),ri=h&&Math.max(0,$e.indexOf(R))||0,zt=ri,Kt,rn,si,Zs,sn,Vt,vi,io,Ml,Or,b,O,q;for(te&&Cs(ee)&&(O=Ae.getProperty(Y,C.p),q=Ae.getProperty(je,C.p));zt-->0;)Vt=$e[zt],Vt.end||Vt.refresh(0,1)||(In=R),vi=Vt.pin,vi&&(vi===h||vi===d||vi===bn)&&!Vt.isReverted&&(Or||(Or=[]),Or.unshift(Vt),Vt.revert(!0,!0)),Vt!==$e[zt]&&(ri--,zt--);for(Dn(wt)&&(wt=wt(R)),wt=bm(wt,`start`,R),Ie=Lm(wt,h,et,C,be(),ft,Y,R,He,W,B,It,_,R._startClamp&&`_startClamp`)||(d?-.001:0),Dn(_t)&&(_t=_t(R)),hi(_t)&&!_t.indexOf(`+=`)&&(~_t.indexOf(` `)?_t=(hi(wt)?wt.split(` `)[0]:``)+_t:(Lt=uc(_t.substr(2),et),_t=hi(wt)?wt:(_?Ae.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Ie):Ie)+Lt,nn=h)),_t=bm(_t,`end`,R),Oe=Math.max(Ie,Lm(_t||(nn?`100% 0`:It),nn,et,C,be()+Lt,lt,je,R,He,W,B,It,_,R._endClamp&&`_endClamp`))||-.001,Lt=0,zt=ri;zt--;)Vt=$e[zt]||{},vi=Vt.pin,vi&&Vt.start-Vt._pinPush<=Ie&&!_&&Vt.end>0&&(Kt=Vt.end-(R._startClamp?Math.max(0,Vt.start):Vt.start),(vi===h&&Vt.start-Vt._pinPush<Ie||vi===bn)&&isNaN(wt)&&(Lt+=Kt*(1-Vt.progress)),vi===d&&(Tt+=Kt));if(Ie+=Lt,Oe+=Lt,R._startClamp&&(R._startClamp+=Lt),R._endClamp&&!Xn&&(R._endClamp=Oe||-.001,Oe=Math.min(Oe,ji(D,C))),rt=Oe-Ie||(Ie-=.01)&&.001,$t&&(ye=Ae.utils.clamp(0,1,Ae.utils.normalize(Ie,Oe,K))),R._pinPush=Tt,ft&&Lt&&(Kt={},Kt[C.a]=`+=`+Lt,bn&&(Kt[C.p]=`-=`+be()),Ae.set([ft,lt],Kt)),d&&!(yd&&R.end>=ji(D,C)))Kt=Ei(d),Zs=C===jt,si=be(),pt=parseFloat(ze(C.a))+Tt,!It&&Oe>1&&(b=(I?St.scrollingElement||di:D).style,b={style:b,value:b[`overflow`+C.a.toUpperCase()]},I&&Ei(xt)[`overflow`+C.a.toUpperCase()]!==`scroll`&&(b.style[`overflow`+C.a.toUpperCase()]=`scroll`)),md(d,mt,Kt),U=oc(d),rn=Sr(d,!0),io=B&&vr(D,Zs?Pn:jt)(),m?(A=[m+C.os2,rt+Tt+ln],A.t=mt,zt=m===en?gc(d,C)+rt+Tt:0,zt&&(A.push(C.d,zt+ln),mt.style.flexBasis!==`auto`&&(mt.style.flexBasis=zt+ln)),Sa(A),bn&&$e.forEach(function(k){k.pin===bn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),B&&be(K)):(zt=gc(d,C),zt&&mt.style.flexBasis!==`auto`&&(mt.style.flexBasis=zt+ln)),B&&(sn={top:rn.top+(Zs?si-Ie:io)+ln,left:rn.left+(Zs?io:si-Ie)+ln,boxSizing:`border-box`,position:`fixed`},sn[Ps]=sn[`max`+Ma]=Math.ceil(rn.width)+ln,sn[Is]=sn[`max`+Rd]=Math.ceil(rn.height)+ln,sn[wi]=sn[wi+Uo]=sn[wi+No]=sn[wi+Fo]=sn[wi+Oo]=`0`,sn[en]=Kt[en],sn[en+Uo]=Kt[en+Uo],sn[en+No]=Kt[en+No],sn[en+Fo]=Kt[en+Fo],sn[en+Oo]=Kt[en+Oo],qt=Yx(kt,sn,T),Xn&&be(0)),i?(Ml=i._initted,hd(1),i.render(i.duration(),!0,!0),Le=ze(C.a)-pt+rt+Tt,z=Math.abs(rt-Le)>1,B&&z&&qt.splice(qt.length-2,2),i.render(0,!0,!0),Ml||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hd(0)):Le=rt,b&&(b.value?b.style[`overflow`+C.a.toUpperCase()]=b.value:b.style.removeProperty(`overflow-`+C.a));else if(h&&be()&&!_)for(rn=h.parentNode;rn&&rn!==xt;)rn._pinOffset&&(Ie-=rn._pinOffset,Oe-=rn._pinOffset),rn=rn.parentNode;Or&&Or.forEach(function(k){return k.revert(!1,!0)}),R.start=Ie,R.end=Oe,Ee=Ge=Xn?K:be(),!_&&!Xn&&!Qr&&(Ee<K&&be(K),R.scroll.rec=0),R.revert(!1,!0),ue=Ln(),L&&(Z=-1,L.restart(!0)),In=0,i&&N&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),($t||ye!==R.progress||_||x||i&&!i._initted)&&(i&&!N&&(i._initted||ye||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Ie<-.001&&!ye?Ae.utils.normalize(Ie,Oe,0):ye,!0),R.progress=$t||(Ee-Ie)/rt===ye?0:ye),d&&m&&(mt._pinOffset=Math.round(R.progress*Le)),G&&G.invalidate(),isNaN(O)||(O-=Ae.getProperty(Y,C.p),q-=Ae.getProperty(je,C.p),lc(Y,C,O),lc(ft,C,O-(Te||0)),lc(je,C,q),lc(lt,C,q-(Te||0))),$t&&!Xn&&R.update(),u&&!Xn&&!bt&&(bt=!0,u(R),bt=!1)}},R.getVelocity=function(){return(be()-Ge)/(Ln()-Co)*1e3||0},R.endAnimation=function(){Ao(R.callbackAnimation),i&&(G?G.progress(1):i.paused()?N||Ao(i,R.direction<0,1):Ao(i,i.reversed()))},R.labelToScroll=function(j){return i&&i.labels&&(Ie||R.refresh()||Ie)+i.labels[j]/i.duration()*rt||0},R.getTrailing=function(j){var _e=$e.indexOf(R),ee=R.direction>0?$e.slice(0,_e).reverse():$e.slice(_e+1);return(hi(j)?ee.filter(function(Te){return Te.vars.preventOverlaps===j}):ee).filter(function(Te){return R.direction>0?Te.end<=Ie:Te.start>=Oe})},R.update=function(j,_e,ee){if(!(_&&!ee&&!j)){var Te=Xn===!0?K:R.scroll(),et=j?0:(Te-Ie)/rt,He=et<0?0:et>1?1:et||0,It=R.progress,$t,Lt,Tt,_t,nn,wt,bn,ri;if(_e&&(Ge=Ee,Ee=_?be():Te,y&&(ge=ce,ce=i&&!N?i.totalProgress():He)),p&&d&&!In&&!tc&&Ai&&(!He&&Ie<Te+(Te-Ge)/(Ln()-Co)*p?He=1e-4:He===1&&Oe>Te+(Te-Ge)/(Ln()-Co)*p&&(He=.9999)),He!==It&&R.enabled){if($t=R.isActive=!!He&&He<1,Lt=!!It&&It<1,wt=$t!==Lt,nn=wt||!!He!=!!It,R.direction=He>It?1:-1,R.progress=He,nn&&!In&&(Tt=He&&!It?0:He===1?1:It===1?2:3,N&&(_t=!wt&&F[Tt+1]!==`none`&&F[Tt+1]||F[Tt],ri=i&&(_t===`complete`||_t===`reset`||_t in i))),P&&(wt||ri)&&(ri||f||!i)&&(Dn(P)?P(R):R.getTrailing(P).forEach(function(si){return si.endAnimation()})),N||(G&&!In&&!tc?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo(`totalProgress`,He,i._tTime/i._tDur):(G.vars.totalProgress=He,G.invalidate().restart())):i&&i.totalProgress(He,!!(In&&(ue||j)))),d){if(j&&m&&(mt.style[m+C.os2]=Fe),!B)he(Po(pt+Le*He));else if(nn){if(bn=!j&&He>It&&Oe+1>Te&&Te+1>=ji(D,C),T)if(!j&&($t||bn)){var zt=Sr(d,!0),Kt=Te-Ie;Dm(d,xt,zt.top+(C===jt?Kt:0)+ln,zt.left+(C===jt?0:Kt)+ln)}else Dm(d,mt);Sa($t||bn?qt:U),z&&He<1&&$t||he(pt+(He===1&&!bn?Le:0))}}y&&!me.tween&&!In&&!tc&&L.restart(!0),o&&(wt||E&&He&&(He<1||!dd))&&ko(o.targets).forEach(function(si){return si.classList[$t||E?`add`:`remove`](o.className)}),a&&!N&&!j&&a(R),nn&&!In?(N&&(ri&&(_t===`complete`?i.pause().totalProgress(1):_t===`reset`?i.restart(!0).pause():_t===`restart`?i.restart(!0):i[_t]()),a&&a(R)),(wt||!dd)&&(c&&wt&&ma(R,c),H[Tt]&&ma(R,H[Tt]),E&&(He===1?R.kill(!1,1):H[Tt]=0),wt||(Tt=He===1?1:3,H[Tt]&&ma(R,H[Tt]))),M&&!$t&&Math.abs(R.getVelocity())>(Io(M)?M:2500)&&(Ao(R.callbackAnimation),G?G.progress(1):Ao(i,_t===`reverse`?1:!He,1))):N&&a&&!In&&a(R)}if(se){var rn=_?Te/_.duration()*(_._caScrollDist||0):Te;S(rn+(Y._isFlipped?1:0)),se(rn)}de&&de(-Te/_.duration()*(_._caScrollDist||0))}},R.enable=function(j,_e){R.enabled||(R.enabled=!0,fn(D,`resize`,Lo),I||fn(D,`scroll`,_a),ne&&fn(r,`refreshInit`,ne),j!==!1&&(R.progress=ye=0,Ee=Ge=Z=be()),_e!==!1&&R.refresh())},R.getTween=function(j){return j&&me?me.tween:G},R.setPositions=function(j,_e,ee,Te){if(_){var et=_.scrollTrigger,He=_.duration(),It=et.end-et.start;j=et.start+It*j/He,_e=et.start+It*_e/He}R.refresh(!1,!1,{start:Tm(j,ee&&!!R._startClamp),end:Tm(_e,ee&&!!R._endClamp)},Te),R.update()},R.adjustPinSpacing=function(j){if(A&&j){var _e=A.indexOf(C.d)+1;A[_e]=parseFloat(A[_e])+j+ln,A[1]=parseFloat(A[1])+j+ln,Sa(A)}},R.disable=function(j,_e){if(j!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_e||G&&G.pause(),K=0,De&&(De.uncache=1),ne&&dn(r,`refreshInit`,ne),L&&(L.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!I)){for(var ee=$e.length;ee--;)if($e[ee].scroller===D&&$e[ee]!==R)return;dn(D,`resize`,Lo),I||dn(D,`scroll`,_a)}},R.kill=function(j,_e){R.disable(j,_e),G&&!_e&&G.kill(),l&&delete Sd[l];var ee=$e.indexOf(R);ee>=0&&$e.splice(ee,1),ee===Wn&&dc>0&&Wn--,ee=0,$e.forEach(function(Te){return Te.scroller===R.scroller&&(ee=1)}),ee||Xn||Qr||(R.scroll.rec=0),i&&(i.scrollTrigger=null,j&&i.revert({kill:!1}),_e||i.kill()),ft&&[ft,lt,Y,je].forEach(function(Te){return Te.parentNode&&Te.parentNode.removeChild(Te)}),Bo===R&&(Bo=0),d&&(De&&(De.uncache=1),ee=0,$e.forEach(function(Te){return Te.pin===d&&ee++}),ee||(De.spacer=0)),n.onKill&&n.onKill(R)},$e.push(R),R.enable(!1,!1),oe&&oe(R),i&&i.add&&!rt){var re=R.update;R.update=function(){R.update=re,qe.cache++,Ie||Oe||R.refresh()},Ae.delayedCall(.01,R.update),rt=.01,Ie=Oe=0}else R.refresh();d&&Wx()},r.register=function(n){return xa||(Ae=n||Hm(),Gm()&&window.document&&r.enable(),xa=Ro),xa},r.defaults=function(n){if(n)for(var i in n)sc[i]=n[i];return sc},r.disable=function(n,i){Ro=0,$e.forEach(function(a){return a[i?`kill`:`disable`](n)}),dn(Ke,`wheel`,_a),dn(St,`scroll`,_a),clearInterval(ec),dn(St,`touchcancel`,Qi),dn(xt,`touchstart`,Qi),ic(dn,St,`pointerdown,touchstart,mousedown`,wm),ic(dn,St,`pointerup,touchend,mouseup`,Em),mc.kill(),nc(dn);for(var s=0;s<qe.length;s+=3)rc(dn,qe[s],qe[s+1]),rc(dn,qe[s],qe[s+2])},r.enable=function(){if(Ke=window,St=document,di=St.documentElement,xt=St.body,Ae){if(ko=Ae.utils.toArray,Do=Ae.utils.clamp,vd=Ae.core.context||Qi,hd=Ae.core.suppressOverwrites||Qi,wd=Ke.history.scrollRestoration||`auto`,Md=Ke.pageYOffset||0,Ae.core.globals(`ScrollTrigger`,r),xt){Ro=1,ya=document.createElement(`div`),ya.style.height=`100vh`,ya.style.position=`absolute`,jm(),Fx(),Wt.register(Ae),r.isTouch=Wt.isTouch,Kr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xd=Wt.isTouch===1,fn(Ke,`wheel`,_a),Td=[Ke,St,di,xt],Ae.matchMedia?(r.matchMedia=function(u){var f=Ae.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ae.addEventListener(`matchMediaInit`,function(){Km(),Id()}),Ae.addEventListener(`matchMediaRevert`,function(){return $m()}),Ae.addEventListener(`matchMedia`,function(){Rs(0,1),Os(`matchMedia`)}),Ae.matchMedia().add(`(orientation: portrait)`,function(){return pd(),pd})):console.warn(`Requires GSAP 3.11.0 or later`),pd(),fn(St,`scroll`,_a);var n=xt.hasAttribute(`style`),i=xt.style,s=i.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle=`solid`,o=Sr(xt),jt.m=Math.round(o.top+jt.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty(`border-top-style`),n||(xt.setAttribute(`style`,``),xt.removeAttribute(`style`)),ec=setInterval(Rm,250),Ae.delayedCall(.5,function(){return tc=0}),fn(St,`touchcancel`,Qi),fn(xt,`touchstart`,Qi),ic(fn,St,`pointerdown,touchstart,mousedown`,wm),ic(fn,St,`pointerup,touchend,mouseup`,Em),_d=Ae.utils.checkPrefix(`transform`),fc.push(_d),xa=Ln(),mc=Ae.delayedCall(.2,Rs).pause(),va=[St,`visibilitychange`,function(){var u=Ke.innerWidth,f=Ke.innerHeight;St.hidden?(Sm=u,Mm=f):(Sm!==u||Mm!==f)&&Lo()},St,`DOMContentLoaded`,Rs,Ke,`load`,Rs,Ke,`resize`,Lo],nc(fn),$e.forEach(function(u){return u.enable(0,1)}),l=0;l<qe.length;l+=3)rc(dn,qe[l],qe[l+1]),rc(dn,qe[l],qe[l+2])}else if(St)St.addEventListener(`DOMContentLoaded`,function u(){r.enable(),St.removeEventListener(`DOMContentLoaded`,u)})}},r.config=function(n){`limitCallbacks`in n&&(dd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ec)||(ec=i)&&setInterval(Rm,i),`ignoreMobileResize`in n&&(xd=r.isTouch===1&&n.ignoreMobileResize),`autoRefreshEvents`in n&&(nc(dn)||nc(fn,n.autoRefreshEvents||`none`),km=(n.autoRefreshEvents+``).indexOf(`resize`)===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),a=qe.indexOf(s),o=Ds(s);~a&&qe.splice(a,o?6:2),i&&(o?Ui.unshift(Ke,i,xt,i,di,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?Gn(n):n).getBoundingClientRect(),o=a[s?Ps:Is]*i||0;return s?a.right-o>0&&a.left+o<Ke.innerWidth:a.bottom-o>0&&a.top+o<Ke.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?Ps:Is],l=i==null?o/2:i in _c?_c[i]*o:~i.indexOf(`%`)?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Ke.innerWidth:(a.top+l)/Ke.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!==`ScrollSmoother`&&s.kill()}),n!==!0){var i=Ns.killAll||[];Ns={},i.forEach(function(s){return s()})}},r})();Ye.version=`3.15.1`;Ye.saveStyles=function(r){return r?ko(r).forEach(function(e){if(e&&e.style){var t=ui.indexOf(e);t>=0&&ui.splice(t,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Ae.core.getCache(e),vd())}}):ui};Ye.revert=function(r,e){return Id(!r,e)};Ye.create=function(r,e){return new Ye(r,e)};Ye.refresh=function(r){return r?Lo(!0):(xa||Ye.register())&&Rs(!0)};Ye.update=function(r){return++qe.cache&&Mr(r===!0?2:0)};Ye.clearScrollMemory=Qm;Ye.maxScroll=function(r,e){return ji(r,e?Pn:jt)};Ye.getScrollFunc=function(r,e){return vr(Gn(r),e?Pn:jt)};Ye.getById=function(r){return Sd[r]};Ye.getAll=function(){return $e.filter(function(r){return r.vars.id!==`ScrollSmoother`})};Ye.isScrolling=function(){return!!Ai};Ye.snapDirectional=Pd;Ye.addEventListener=function(r,e){var t=Ns[r]||(Ns[r]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(r,e){var t=Ns[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ae.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(m){f.length||d.restart(!0),f.push(m.trigger),h.push(m),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)===`on`&&Dn(e[o])&&o!==`onRefreshInit`?a(o,e[o]):e[o];return Dn(s)&&(s=s(),fn(Ye,`refresh`,function(){return s=e.batchMax()})),ko(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var Om=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1};var gd=function r(e,t){t===!0?e.style.removeProperty(`touch-action`):e.style.touchAction=t===!0?`auto`:t?`pan-`+t+(Wt.isTouch?` pinch-zoom`:``):`none`,e===di&&r(xt,t)};var cc={auto:1,scroll:1};var Jx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ae.core.getCache(s),o=Ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(cc[(l=Ei(s)).overflowY]||cc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ds(s)&&(cc[(l=Ei(s)).overflowY]||cc[l.overflowX]),a._isScrollT=o}(a._isScroll||i===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)};var tg=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Jx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(St,Wt.eventTypes[0],Fm,!1,!0)},onDisable:function(){return dn(St,Wt.eventTypes[0],Fm,!0)}})};var $x=/(input|label|select|textarea)/i;var Um;var Fm=function(e){var t=$x.test(e.target.tagName);(t||Um)&&(e._gsapAllow=!0,Um=t)};var Kx=function(e){Cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||di,u=Ae.core.globals().ScrollSmoother,f=u&&u.get(),h=Kr&&(e.content&&Gn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=vr(c,jt),m=vr(c,Pn),x=1,p=(Wt.isTouch&&Ke.visualViewport?Ke.visualViewport.scale*Ke.visualViewport.width:Ke.outerWidth)/Ke.innerWidth,g=0,v=Dn(i)?function(){return i(o)}:function(){return i||2.8},E,y,T=tg(c,e.type,!0,s),w=function(){return y=!1},_=Qi,M=Qi,P=function(){l=ji(c,jt),M=Do(Kr?1:0,l),n&&(_=Do(0,ji(c,Pn))),E=Ls},C=function(){h._gsap.y=Po(parseFloat(h._gsap.y)+d.offset)+`px`,h.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(h._gsap.y)+`, 0, 1)`,d.offset=d.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var te=Po(o.deltaY/2),W=M(d.v-te);if(h&&W!==d.v+d.offset){d.offset=W-d.v;var R=Po((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+R+`, 0, 1)`,h._gsap.y=R+`px`,d.cacheID=qe.cache,Mr()}return!0}d.offset&&C(),y=!0},D,V,I,B,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo(`scrollY`,l))};return h&&Ae.set(h,{y:`+=0`}),e.ignoreCheck=function(F){return Kr&&F.type===`touchmove`&&N(F)||x>1.05&&F.type!==`touchstart`||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=x;x=Po((Ke.visualViewport&&Ke.visualViewport.scale||1)/p),D.pause(),F!==x&&gd(c,x>1.01?!0:n?!1:`x`),V=m(),I=d(),P(),E=Ls},e.onRelease=e.onGestureStart=function(F,te){if(d.offset&&C(),!te)B.restart(!0);else{qe.cache++;var W=v(),R,ne;n&&(R=m(),ne=R+W*.05*-F.velocityX/.227,W*=Om(m,R,ne,ji(c,Pn)),D.vars.scrollX=_(ne)),R=d(),ne=R+W*.05*-F.velocityY/.227,W*=Om(d,R,ne,ji(c,jt)),D.vars.scrollY=M(ne),D.invalidate().duration(W).play(.01),(Kr&&D.vars.scrollY>=l||R>=l-1)&&Ae.to({},{onUpdate:H,duration:W})}a&&a(F)},e.onWheel=function(){D._ts&&D.pause(),Ln()-g>1e3&&(E=0,g=Ln())},e.onChange=function(F,te,W,R,ne){if(Ls!==E&&P(),te&&n&&m(_(R[2]===te?V+(F.startX-F.x):m()+te-R[1])),W){d.offset&&C();var Se=ne[2]===W,Ue=Se?I+F.startY-F.y:d()+W-ne[1],Z=M(Ue);Se&&Ue!==Z&&(I+=Z-Ue),d(Z)}(W||te)&&Mr()},e.onEnable=function(){gd(c,n?!1:`x`),Ye.addEventListener(`refresh`,H),fn(Ke,`resize`,H),d.smooth&&(d.target.style.scrollBehavior=`auto`,d.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){gd(c,!0),dn(Ke,`resize`,H),Ye.removeEventListener(`refresh`,H),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Wt(e),o.iOS=Kr,Kr&&!d()&&d(1),Kr&&Ae.ticker.add(Qi),B=o._dc,D=Ae.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:eg(d,d(),function(){return D.pause()})},onUpdate:Mr,onComplete:B.vars.onComplete}),o};Ye.sort=function(r){if(Dn(r))return $e.sort(r);var e=Ke.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ke.innerHeight}),$e.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(r){return new Wt(r)};Ye.normalizeScroll=function(r){if(typeof r>`u`)return Hn;if(r===!0&&Hn)return Hn.enable();if(r===!1){Hn&&Hn.kill(),Hn=r;return}var e=r instanceof Wt?r:Kx(r);return Hn&&Hn.target===e.target&&Hn.kill(),Ds(e.target)&&(Hn=e),e};Ye.core={_getVelocityProp:jl,_inputObserver:tg,_scrollers:qe,_proxies:Ui,bridge:{ss:function(){Ai||Os(`scrollStart`),Ai=Ln()},ref:function(){return In}}};Hm()&&Ae.registerPlugin(Ye);Rt.registerPlugin(Ye);var ng=(r,e)=>e.id;function Qx(r,e){if(r&1){let t=By();la$1(0,`li`,2)(1,`a`,3),Gd$1(`click`,function(i){let s=Pc$1(t).$implicit,a=Wy(2);return Fc$1(a.irPara(i,s))}),Hd$1(2,`span`,4),la$1(3,`span`,5),Ev$1(4),ua$1()()()}if(r&2){let t=e.$implicit,n=t.id===Wy(2).narrativa.idAtivo();Hg$1(),$d$1(`href`,`#`+t.slug,Cu$1),Fd$1(`aria-current`,n?`step`:null),Hg$1(),cv$1(n?`size-3.5 border-kx-rosa bg-kx-rosa`:`size-2 border-kx-nevoa bg-kx-preto group-hover:border-kx-ciano`),Hg$1(2),of$1(` `,t.id,`. `,t.titulo,` `)}}function jx(r,e){if(r&1&&(la$1(0,`ol`,0),Ly(1,Qx,5,6,`li`,2,ng),ua$1()),r&2){let t=Wy();Hg$1(),Py(t.narrativa.capitulos)}}function ev(r,e){if(r&1){let t=By();la$1(0,`li`)(1,`a`,6),Gd$1(`click`,function(i){let s=Pc$1(t).$implicit,a=Wy(2);return Fc$1(a.irPara(i,s))}),la$1(2,`span`,7),Ev$1(3),ua$1(),la$1(4,`span`),Ev$1(5),ua$1()()()}if(r&2){let t=e.$implicit,n=t.id===Wy(2).narrativa.idAtivo();Hg$1(),Kd$1(`text-kx-rosa`,n),$d$1(`href`,`#`+t.slug,Cu$1),Fd$1(`aria-current`,n?`step`:null),Hg$1(2),rf$1(t.id),Hg$1(2),rf$1(t.titulo)}}function tv(r,e){if(r&1&&(la$1(0,`ol`,1),Ly(1,ev,6,6,`li`,null,ng),ua$1()),r&2){let t=Wy();Hg$1(),Py(t.narrativa.capitulos)}}var ba=class r{modo=NR(`lista`);escolheu=_R();narrativa=D(kr);movimento=D(Yi);irPara(e,t){e.preventDefault();let n=document.getElementById(t.slug);n&&(n.scrollIntoView({behavior:this.movimento.reduzido()?`auto`:`smooth`}),n.querySelector(`h2`)?.focus({preventScroll:!0}),this.escolheu.emit(t))}static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-mapa-rota`]],inputs:{modo:[1,`modo`]},outputs:{escolheu:`escolheu`},decls:3,vars:2,consts:[[1,`relative`,`flex`,`flex-col`,`gap-3`,`before:absolute`,`before:inset-y-2`,`before:left-1/2`,`before:w-px`,`before:-translate-x-1/2`,`before:bg-kx-roxo/50`],[1,`divide-y`,`divide-kx-roxo/30`],[1,`group`,`relative`,`flex`,`justify-center`],[1,`relative`,`grid`,`size-7`,`place-items-center`,3,`click`,`href`],[1,`block`,`rotate-45`,`border`,`transition-all`,`duration-300`],[1,`pointer-events-none`,`absolute`,`right-9`,`whitespace-nowrap`,`bg-kx-preto`,`px-2`,`py-1`,`font-display`,`text-lg`,`font-bold`,`text-kx-osso`,`opacity-0`,`transition-opacity`,`group-hover:opacity-100`,`group-focus-within:opacity-100`],[1,`flex`,`items-baseline`,`gap-4`,`px-4`,`py-3`,`hover:bg-kx-roxo/15`,3,`click`,`href`],[1,`w-5`,`font-display`,`text-xl`,`font-black`,`text-kx-ciano`]],template:function(t,n){t&1&&(la$1(0,`nav`),xy(1,jx,3,0,`ol`,0)(2,tv,3,0,`ol`,1),ua$1()),t&2&&(Fd$1(`aria-label`,n.modo()===`trilho`?`Capítulos (atalho)`:`Capítulos`),Hg$1(),Ry(n.modo()===`trilho`?1:2))},encapsulation:2})};function nv(r,e){if(r&1){let t=By();Do$1(0,`div`,1)(1,`app-mapa-rota`,11),Wd$1(`escolheu`,function(){Pc$1(t);let i=Wy();return Fc$1(i.fechar())}),ca$1()()}}var vc=class r{narrativa=D(kr);aberto=zr$1(!1);porcentagem=Av$1(()=>Math.round(this.narrativa.progresso()*100));alternar(){this.aberto.update(e=>!e)}fechar(){this.aberto.set(!1)}static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-letreiro`]],hostBindings:function(t,n){t&1&&Wd$1(`keydown.escape`,function(){return n.fechar()},ng$1)},decls:17,vars:10,consts:[[1,`fixed`,`inset-x-3`,`bottom-3`,`z-30`,`sm:right-auto`,`sm:left-6`,`sm:bottom-6`,`sm:w-96`],[`id`,`painel-capitulos`,1,`mb-2`,`max-h-[60svh]`,`overflow-y-auto`,`border`,`border-kx-roxo/60`,`bg-kx-preto`],[1,`letreiro`,`border`,`border-kx-roxo/60`,`bg-kx-preto`],[`type`,`button`,`aria-controls`,`painel-capitulos`,1,`flex`,`w-full`,`items-center`,`gap-3`,`px-4`,`pt-3`,`pb-2`,`text-left`,3,`click`],[1,`letreiro-led`,`font-display`,`text-4xl`,`leading-none`,`font-black`],[1,`letreiro-led`,`min-w-0`,`flex-1`,`truncate`,`font-display`,`text-2xl`,`leading-none`,`font-bold`,`uppercase`],[1,`shrink-0`,`text-base`,`text-kx-nevoa`,`underline`,`underline-offset-4`],[`role`,`progressbar`,`aria-label`,`Quanto da história já foi percorrido`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,1,`mx-4`,`mb-3`,`h-1`,`bg-kx-roxo/25`,`sm:mb-0`],[1,`h-full`,`origin-left`,`bg-kx-rosa`],[1,`hidden`,`justify-between`,`px-4`,`pt-2`,`pb-3`,`text-base`,`text-kx-nevoa`,`sm:flex`],[`routerLink`,`/portfolio`,1,`text-kx-osso`,`underline`,`underline-offset-4`,`hover:text-kx-ciano`],[`modo`,`lista`,3,`escolheu`]],template:function(t,n){t&1&&(Do$1(0,`div`,0),xy(1,nv,2,0,`div`,1),Do$1(2,`div`,2)(3,`button`,3),Wd$1(`click`,function(){return n.alternar()}),Do$1(4,`span`,4),Ev$1(5),ca$1(),Do$1(6,`span`,5),Ev$1(7),ca$1(),Do$1(8,`span`,6),Ev$1(9),ca$1()(),Do$1(10,`div`,7),Vd$1(11,`div`,8),ca$1(),Do$1(12,`div`,9)(13,`span`),Ev$1(14),ca$1(),Do$1(15,`a`,10),Ev$1(16,` Pular para o portfólio `),ca$1()()()()),t&2&&(Hg$1(),Ry(n.aberto()?1:-1),Hg$1(2),Fd$1(`aria-expanded`,n.aberto()),Hg$1(2),da$1(` `,n.narrativa.capituloAtivo().id,` `),Hg$1(2),da$1(` `,n.narrativa.capituloAtivo().titulo,` `),Hg$1(2),da$1(` `,n.aberto()?`Fechar`:`Capítulos`,` `),Hg$1(),Fd$1(`aria-valuenow`,n.porcentagem()),Hg$1(),Yd$1(`transform`,`scaleX(`+n.narrativa.progresso()+`)`),Hg$1(3),of$1(`Cena `,n.narrativa.capituloAtivo().id,` de `,n.narrativa.capitulos.length))},dependencies:[ba,nr$1],styles:[`.letreiro-led[_ngcontent-%COMP%]{color:var(--%NS%color-kx-ciano);text-shadow:0 0 12px rgb(0 217 255 / .45)}.letreiro[_ngcontent-%COMP%]{position:relative}.letreiro[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(transparent 55%,#0505058c 56%);background-size:3px 3px}`]})};var wg=0;var af=1;var Eg=2;var cl=1;var Ag=2;var Ka=3;var us=0;var Mn=1;var ar=2;var Hs=0;var Qa=1;var of=2;var lf=3;var cf=4;var Cg=5;var Ws=100;var Rg=101;var Pg=102;var Ig=103;var Lg=104;var Dg=200;var Ng=201;var Og=202;var Ug=203;var uf=204;var hf=205;var Fg=206;var Bg=207;var kg=208;var zg=209;var Vg=210;var Gg=211;var Hg=212;var Wg=213;var Xg=214;var Hc=0;var Wc=1;var Xc=2;var za=3;var qc=4;var Yc=5;var Zc=6;var Jc=7;var df=0;var qg=1;var Yg=2;var or=0;var ff=1;var pf=2;var mf=3;var gf=4;var _f=5;var xf=6;var vf=7;var yf=300;var Xs=301;var ja=302;var yu=303;var Su=304;var Va=1e3;var tr=1001;var $c=1002;var mn=1003;var Zg=1004;var ul=1005;var Jn=1006;var Mu=1007;var Lr=1008;var xi=1009;var Sf=1010;var Mf=1011;var eo=1012;var bu=1013;var Vi=1014;var Gi=1015;var Hi=1016;var Tu=1017;var wu=1018;var qs=1020;var bf=35902;var Tf=35899;var wf=1021;var Ef=1022;var Wi=1023;var Rr=1026;var Dr=1027;var Af=1028;var Eu=1029;var hs=1030;var Au=1031;var Cu=1033;var hl=33776;var dl=33777;var fl=33778;var pl=33779;var Ru=35840;var Pu=35841;var Iu=35842;var Lu=35843;var Du=36196;var Nu=37492;var Ou=37496;var Uu=37488;var Fu=37489;var ml=37490;var Bu=37491;var ku=37808;var zu=37809;var Vu=37810;var Gu=37811;var Hu=37812;var Wu=37813;var Xu=37814;var qu=37815;var Yu=37816;var Zu=37817;var Ju=37818;var $u=37819;var Ku=37820;var Qu=37821;var ju=36492;var eh=36494;var th=36495;var nh=36283;var ih=36284;var gl=36285;var rh=36286;var qo=2300;var Kc=2301;var zc=2302;var jd=2303;var ef=2400;var tf=2401;var nf=2402;var Jg=3200;var Cf=0;var $g=1;var Nr=``;var qn=`srgb`;var Yo=`srgb-linear`;var Zo=`linear`;var vt=`srgb`;var Vc=7680;var Kg=519;var Qg=512;var jg=513;var e_=514;var Rf=515;var t_=516;var n_=517;var Pf=518;var If=519;var i_=35044;var Lf=`300 es`;var Ri=2e3;var Jo=2001;function iv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ga(r){return document.createElementNS(`http://www.w3.org/1999/xhtml`,r)}function r_(){let r=Ga(`canvas`);return r.style.display=`block`,r}var ig={};var Ha=null;function Df(...r){let e=`THREE.`+r.shift();Ha?Ha(`log`,e,...r):console.log(e,...r)}function s_(r){let e=r[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=r[1];t&&t.isStackTrace?r[0]+=` `+t.getLocation():r[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return r}function Be(...r){r=s_(r);let e=`THREE.`+r.shift();if(Ha)Ha(`warn`,e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ke(...r){r=s_(r);let e=`THREE.`+r.shift();if(Ha)Ha(`error`,e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Xo(...r){let e=r.join(` `);e in ig||(ig[e]=!0,Be(...r))}function a_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var o_={[Hc]:Hc,[Xc]:Zc,[qc]:qc,[za]:Yc,[Wc]:Wc,[Zc]:Xc,[Jc]:Jc,[Yc]:za};var ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}};var Nn=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var Ld=Math.PI/180;var Qc=180/Math.PI;function _l(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+`-`+Nn[e&255]+Nn[e>>8&255]+`-`+Nn[e>>16&15|64]+Nn[e>>24&255]+`-`+Nn[t&63|128]+Nn[t>>8&255]+`-`+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function sv(r,e){return(r%e+e)%e}function Dd(r,e,t){return(1-t)*r+t*e}function l_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function av(r,e){if(e.constructor===Float32Array)return r;let t=Nf(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.max(r/t,-1)}function ov(r,e){if(e.constructor===Float32Array)return r;let t=Nf(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.round(r*t)}var ht=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var rr=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(f!==x||l!==h||c!==d||u!==m){let p=l*h+c*d+u*m+f*x;p<0&&(h=-h,d=-d,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),E=Math.sin(v);g=Math.sin(g*v)/E,o=Math.sin(o*v)/E,l=l*g+h*o,c=c*g+d*o,u=u*g+m*o,f=f*g+x*o}else{l=l*g+h*o,c=c*g+d*o,u=u*g+m*o,f=f*g+x*o;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-o*d,e[t+2]=c*m+u*d+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),m=l(s/2);switch(a){case`XYZ`:this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case`YXZ`:this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case`ZXY`:this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case`ZYX`:this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case`YZX`:this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case`XZY`:this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Be(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var J=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var Nd=new J;var rg=new rr;var Ve=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],E=i[4],y=i[7],T=i[2],w=i[5],_=i[8];return s[0]=a*x+o*v+l*T,s[3]=a*p+o*E+l*w,s[6]=a*g+o*y+l*_,s[1]=c*x+u*v+f*T,s[4]=c*p+u*E+f*w,s[7]=c*g+u*y+f*_,s[2]=h*x+d*v+m*T,s[5]=h*p+d*E+m*w,s[8]=h*g+d*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xo(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Od.makeScale(e,t)),this}rotate(e){return Xo(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Od.makeRotation(-e)),this}translate(e,t){return Xo(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var Od=new Ve;var sg=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var ag=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){let r={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=ka(i.r),i.g=ka(i.g),i.b=ka(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nr?Zo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Yo]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}var it=lv();function Cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wa;var jc=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wa===void 0&&(wa=Ga(`canvas`)),wa.width=e.width,wa.height=e.height;let i=wa.getContext(`2d`);e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ga(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cr(t[n]/255)*255):t[n]=Cr(t[n]);return{data:t,width:e.width,height:e.height}}else return Be(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var cv=0;var Wa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=_l(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ud(i[a].image)):s.push(Ud(i[a]))}else s=Ud(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ud(r){return typeof HTMLImageElement<`u`&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&r instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&r instanceof ImageBitmap?jc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be(`Texture: Unable to serialize Texture.`),{})}var uv=0;var Fd=new J;var $n=class r extends ir{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=tr,i=tr,s=Jn,a=Lr,o=Wi,l=xi,c=r.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=_l(),this.name=``,this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=yf;$n.DEFAULT_ANISOTROPY=1;var Bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(d+1)/2,T=(g+1)/2,w=(u+h)/4,_=(f+x)/4,M=(m+p)/4;return E>y&&E>T?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=_/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=M/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=_/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var eu=class extends ir{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new $n({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var mi=class extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var $o=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/* @__PURE__ */ new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xt=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,m,x,p)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ea.setFromMatrixColumn(e,0).length(),s=1/Ea.setFromMatrixColumn(e,1).length(),a=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order===`XYZ`){let h=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order===`YXZ`){let h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+h*o,t[10]=a*l}else if(e.order===`ZXY`){let h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order===`ZYX`){let h=a*u,d=a*f,m=o*u,x=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order===`YZX`){let h=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order===`XZY`){let h=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,dv)}lookAt(e,t,n){let i=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),jr.crossVectors(n,fi),jr.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),jr.crossVectors(n,fi)),jr.normalize(),yc.crossVectors(fi,jr),i[0]=jr.x,i[4]=yc.x,i[8]=fi.x,i[1]=jr.y,i[5]=yc.y,i[9]=fi.y,i[2]=jr.z,i[6]=yc.z,i[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],E=n[7],y=n[11],T=n[15],w=i[0],_=i[4],M=i[8],P=i[12],C=i[1],N=i[5],D=i[9],V=i[13],I=i[2],B=i[6],H=i[10],F=i[14],te=i[3],W=i[7],R=i[11],ne=i[15];return s[0]=a*w+o*C+l*I+c*te,s[4]=a*_+o*N+l*B+c*W,s[8]=a*M+o*D+l*H+c*R,s[12]=a*P+o*V+l*F+c*ne,s[1]=u*w+f*C+h*I+d*te,s[5]=u*_+f*N+h*B+d*W,s[9]=u*M+f*D+h*H+d*R,s[13]=u*P+f*V+h*F+d*ne,s[2]=m*w+x*C+p*I+g*te,s[6]=m*_+x*N+p*B+g*W,s[10]=m*M+x*D+p*H+g*R,s[14]=m*P+x*V+p*F+g*ne,s[3]=v*w+E*C+y*I+T*te,s[7]=v*_+E*N+y*B+T*W,s[11]=v*M+E*D+y*H+T*R,s[15]=v*P+E*V+y*F+T*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],p=e[11],g=e[15],v=l*d-c*h,E=o*d-c*f,y=o*h-l*f,T=a*d-c*u,w=a*h-l*u,_=a*f-o*u;return t*(x*v-p*E+g*y)-n*(m*v-p*T+g*w)+i*(m*E-x*T+g*_)-s*(m*y-x*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],p=e[14],g=e[15],v=t*o-n*a,E=t*l-i*a,y=t*c-s*a,T=n*l-i*o,w=n*c-s*o,_=i*c-s*l,M=u*x-f*m,P=u*p-h*m,C=u*g-d*m,N=f*p-h*x,D=f*g-d*x,V=h*g-d*p,I=v*V-E*D+y*N+T*C-w*P+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*V-l*D+c*N)*B,e[1]=(i*D-n*V-s*N)*B,e[2]=(x*_-p*w+g*T)*B,e[3]=(h*w-f*_-d*T)*B,e[4]=(l*C-a*V-c*P)*B,e[5]=(t*V-i*C+s*P)*B,e[6]=(p*y-m*_-g*E)*B,e[7]=(u*_-h*y+d*E)*B,e[8]=(a*D-o*C+c*M)*B,e[9]=(n*C-t*D-s*M)*B,e[10]=(m*w-x*y+g*v)*B,e[11]=(f*y-u*w-d*v)*B,e[12]=(o*P-a*N-l*M)*B,e[13]=(t*N-n*P+i*M)*B,e[14]=(x*E-m*T-p*v)*B,e[15]=(u*T-f*E+h*v)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,m=s*f,x=a*u,p=a*f,g=o*f,v=l*c,E=l*u,y=l*f,T=n.x,w=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(d+y)*T,i[2]=(m-E)*T,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(h+g))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(m+E)*_,i[9]=(p-v)*_,i[10]=(1-(h+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ea.set(i[0],i[1],i[2]).length(),o=Ea.set(i[4],i[5],i[6]).length(),l=Ea.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Fi.copy(this);let c=1/a,u=1/o,f=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,t.setFromRotationMatrix(Fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ri,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Ri)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Jo)m=-a/(a-s),x=-a*s/(a-s);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ri,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Ri)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Jo)m=-1/(a-s),x=-s/(a-s);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var Ea=new J;var Fi=new Xt;var hv=new J(0,0,0);var dv=new J(1,1,1);var jr=new J;var yc=new J;var fi=new J;var og=new Xt;var lg=new rr;var ss=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case`ZXY`:this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case`ZYX`:this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Be(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER=`XYZ`;var Ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var fv=0;var cg=new J;var Aa=new rr;var br=new Xt;var Sc=new J;var Vo=new J;var pv=new J;var mv=new rr;var ug=new J(1,0,0);var hg=new J(0,1,0);var dg=new J(0,0,1);var fg={type:`added`};var gv={type:`removed`};var Ca={type:`childadded`,child:null};var Bd={type:`childremoved`,child:null};var Pi=class r extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=_l(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new J,t=new ss,n=new rr,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ve}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Aa.setFromAxisAngle(e,t),this.quaternion.multiply(Aa),this}rotateOnWorldAxis(e,t){return Aa.setFromAxisAngle(e,t),this.quaternion.premultiply(Aa),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sc.copy(e):Sc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Vo,Sc,this.up):br.lookAt(Sc,Vo,this.up),this.quaternion.setFromRotationMatrix(br),i&&(br.extractRotation(i.matrixWorld),Aa.setFromRotationMatrix(br),this.quaternion.premultiply(Aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null):ke(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gv),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>K(Y({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>Y({},o)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pi.DEFAULT_UP=new J(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zs=class extends Pi{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var _v={type:`move`};var Xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints[`index-finger-tip`],f=c.joints[`thumb-tip`],h=u.position.distanceTo(f.position);c.inputState.pinching&&h>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var es={h:0,s:0,l:0};var Mc={h:0,s:0,l:0};function kd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=sv(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=kd(a,s,e+1/3),this.g=kd(a,s,e),this.b=kd(a,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=qn){function n(s){s!==void 0&&parseFloat(s)<1&&Be(`Color: Alpha component of `+e+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case`rgb`:case`rgba`:if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case`hsl`:case`hsla`:if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be(`Color: Unknown color model `+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){let n=c_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return it.workingToColorSpace(On.copy(this),e),Math.round(at(On.r*255,0,255))*65536+Math.round(at(On.g*255,0,255))*256+Math.round(at(On.b*255,0,255))}getHexString(e=qn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,s=On.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=qn){it.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Mc);let n=Dd(es.h,Mc.h,t),i=Dd(es.s,Mc.s,t),s=Dd(es.l,Mc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var On=new dt;dt.NAMES=c_;var Qo=class extends Pi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Bi=new J;var Tr=new J;var zd=new J;var wr=new J;var Ra=new J;var Pa=new J;var pg=new J;var Vd=new J;var Gd=new J;var Hd=new J;var Wd=new Bt;var Xd=new Bt;var qd=new Bt;var rs=class r{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bi.subVectors(e,t),i.cross(Bi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bi.subVectors(i,t),Tr.subVectors(n,t),zd.subVectors(e,t);let a=Bi.dot(Bi),o=Bi.dot(Tr),l=Bi.dot(zd),c=Tr.dot(Tr),u=Tr.dot(zd),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,wr)===null?(l.x=0,l.y=0,`z`in l&&(l.z=0),`w`in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(a,wr.y),l.addScaledVector(o,wr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Wd.setScalar(0),Xd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,n),qd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wd,s.x),a.addScaledVector(Xd,s.y),a.addScaledVector(qd,s.z),a}static isFrontFacing(e,t,n,i){return Bi.subVectors(n,t),Tr.subVectors(e,t),Bi.cross(Tr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Bi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ra.subVectors(i,n),Pa.subVectors(s,n),Vd.subVectors(e,n);let l=Ra.dot(Vd),c=Pa.dot(Vd);if(l<=0&&c<=0)return t.copy(n);Gd.subVectors(e,i);let u=Ra.dot(Gd),f=Pa.dot(Gd);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ra,a);Hd.subVectors(e,s);let d=Ra.dot(Hd),m=Pa.dot(Hd);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Pa,o);let p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return pg.subVectors(s,i),o=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(pg,o);let g=1/(p+x+h);return a=x*g,o=h*g,t.copy(n).addScaledVector(Ra,a).addScaledVector(Pa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var as=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute(`position`);if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ki):ki.fromBufferAttribute(s,a),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bc.copy(n.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Tc.subVectors(this.max,Go),Ia.subVectors(e.a,Go),La.subVectors(e.b,Go),Da.subVectors(e.c,Go),ts.subVectors(La,Ia),ns.subVectors(Da,La),Us.subVectors(Ia,Da);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Us.z,Us.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Us.z,0,-Us.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Us.y,Us.x,0];return!Yd(t,Ia,La,Da,Tc)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,Ia,La,Da,Tc))?!1:(wc.crossVectors(ts,ns),t=[wc.x,wc.y,wc.z],Yd(t,Ia,La,Da,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var Er=[new J,new J,new J,new J,new J,new J,new J,new J];var ki=new J;var bc=new as;var Ia=new J;var La=new J;var Da=new J;var ts=new J;var ns=new J;var Us=new J;var Go=new J;var Tc=new J;var wc=new J;var Fs=new J;function Yd(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fs.fromArray(r,s);let o=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var tn=new J;var Ec=new ht;var xv=0;var nr=class extends ir{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=i_,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?Nf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):av(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ov(e,this.array)}};var jo=class extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var el=class extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Zn=class extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vv=new as;var Ho=new J;var Zd=new J;var qa=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Zd)),this.expandByPoint(Ho.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var yv=0;var Ci=new Xt;var Jd=new Pi;var Na=new J;var pi=new as;var Wo=new as;var pn=new J;var Pr=class r extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=_l(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?el:jo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new Zn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Wo.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(pi.min,Wo.min),pi.expandByPoint(pn),pn.addVectors(pi.max,Wo.max),pi.expandByPoint(pn)):(pi.expandByPoint(Wo.min),pi.expandByPoint(Wo.max))}pi.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(Na.fromBufferAttribute(e,c),pn.add(Na)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new J,l[P]=new J;let u=new J,f=new J,h=new J,d=new ht,m=new ht,x=new ht,p=new J,g=new J;function v(P,C,N){c[P]=c[C]=c[N]=1,u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,C),h.fromBufferAttribute(n,N),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,N),f.sub(u),h.sub(u),m.sub(d),x.sub(d);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(D),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,C=E.length;P<C;++P){let N=E[P],D=N.start,V=N.count;for(let I=D,B=D+V;I<B;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new J,T=new J,w=new J,_=new J;function M(P){w.fromBufferAttribute(i,P),_.copy(w);let C=o[P];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);let D=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let g=0;g<u;g++)h[m++]=c[d++]}return new nr(h,u,f)}if(this.index===null)return Be(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var $d=new J;var Sv=new J;var Mv=new Ve;var zi=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$d.subVectors(n,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta($d),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mv.getNormalMatrix(e),i=this.coplanarPoint($d).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var bv=0;var Vs=class extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=_l(),this.name=``,this.type=`Material`,this.blending=Qa,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var Ar=new J;var Kd=new J;var Ac=new J;var Cc=new J;var nu=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kd.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),Cc.copy(this.origin).sub(Kd);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ac),o=Cc.dot(this.direction),l=-Cc.dot(Ac),c=Cc.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=s*u,f>=0)if(h>=-m)if(h<=m){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Kd).addScaledVector(Ac,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);let n=Ar.dot(this.direction),i=Ar.dot(Ar)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,E=n.z-a.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(u),_,M,P,C,N,D,V,I,B,H,F,te;if(y>=T&&y>=w?(P=l,D=f,B=m,te=g,l>=0?(_=c,M=u,C=h,N=d,V=x,I=p,H=v,F=E):(_=u,M=c,C=d,N=h,V=p,I=x,H=E,F=v)):T>=w?(P=c,D=h,B=x,te=v,c>=0?(_=u,M=l,C=d,N=f,V=p,I=m,H=E,F=g):(_=l,M=u,C=f,N=d,V=m,I=p,H=g,F=E)):(P=u,D=d,B=p,te=E,u>=0?(_=l,M=c,C=f,N=h,V=m,I=x,H=g,F=v):(_=c,M=l,C=h,N=f,V=x,I=m,H=v,F=g)),P===0)return null;let W=_/P,R=M/P,ne=1/P,Se=C-W*D,Ue=N-R*D,Z=V-W*B,ue=I-R*B,ye=H-W*te,be=F-R*te,me=ye*ue-be*Z,De=Se*be-Ue*ye,yt=Z*Ue-ue*Se;if(i){if(me<0||De<0||yt<0)return null}else if((me<0||De<0||yt<0)&&(me>0||De>0||yt>0))return null;let Ee=me+De+yt;if(Ee===0)return null;let Ge=ne*(me*D+De*B+yt*te);return(Ee>0?Ge<0:Ge>0)?null:this.at(Ge/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Ya=class extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mg=new Xt;var Bs=new nu;var Rc=new qa;var gg=new J;var Pc=new J;var Ic=new J;var Lc=new J;var Qd=new J;var Dc=new J;var _g=new J;var Nc=new J;var gi=class extends Pi{constructor(e=new Pr,t=new Ya){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Dc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],f=s[l];u!==0&&(Qd.fromBufferAttribute(f,e),a?Dc.addScaledVector(Qd,u):Dc.addScaledVector(Qd.sub(t),u))}t.add(Dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(s),Bs.copy(e.ray).recast(e.near),!(Rc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Rc,gg)===null||Bs.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(mg),(n.boundingBox===null||Bs.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let p=h[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,T=E;y<T;y+=3){let w=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);i=Oc(this,g,e,n,c,u,f,w,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);i=Oc(this,a,e,n,c,u,f,v,E,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){let p=h[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,T=E;y<T;y+=3){let w=y,_=y+1,M=y+2;i=Oc(this,g,e,n,c,u,f,w,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=p,E=p+1,y=p+2;i=Oc(this,a,e,n,c,u,f,v,E,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Tv(r,e,t,n,i,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===us,o),l===null)return null;Nc.copy(o),Nc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Nc);return c<t.near||c>t.far?null:{distance:c,point:Nc.clone(),object:r}}function Oc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Pc),r.getVertexPosition(l,Ic),r.getVertexPosition(c,Lc);let u=Tv(r,e,t,n,Pc,Ic,Lc,_g);if(u){let f=new J;rs.getBarycoord(_g,Pc,Ic,Lc,f),i&&(u.uv=rs.getInterpolatedAttribute(i,o,l,c,f,new ht)),s&&(u.uv1=rs.getInterpolatedAttribute(s,o,l,c,f,new ht)),a&&(u.normal=rs.getInterpolatedAttribute(a,o,l,c,f,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new J,materialIndex:0};rs.getNormal(Pc,Ic,Lc,h.normal),u.face=h,u.barycoord=f}return u}var iu=class extends $n{constructor(e=null,t=1,n=1,i,s,a,o,l,c=mn,u=mn,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=new qa;var wv=new ht(.5,.5);var Uc=new J;var Gs=class{constructor(e=new zi,t=new zi,n=new zi,i=new zi,s=new zi,a=new zi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],x=s[9],p=s[10],g=s[11],v=s[12],E=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,d-u,g-m,T-v).normalize(),i[1].setComponents(c+a,d+u,g+m,T+v).normalize(),i[2].setComponents(c+o,d+f,g+x,T+E).normalize(),i[3].setComponents(c-o,d-f,g-x,T-E).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,d-h,g-p,T-y).normalize();else if(i[4].setComponents(c-l,d-h,g-p,T-y).normalize(),t===Ri)i[5].setComponents(c+l,d+h,g+p,T+y).normalize();else if(t===Jo)i[5].setComponents(l,h,p,y).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);return ks.radius=.7071067811865476+wv.distanceTo(e.center),ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Uc.x=i.normal.x>0?e.max.x:e.min.x,Uc.y=i.normal.y>0?e.max.y:e.min.y,Uc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xg=new Xt;var ru=class r{constructor(){this.coordinateSystem=Ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];xg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gs),n[i].setFromProjectionMatrix(xg,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Gs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var tl=class extends $n{constructor(e=[],t=Xs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ir=class extends $n{constructor(e,t,n=Vi,i,s,a,o=mn,l=mn,c,u=Rr,f=1){if(u!==Rr&&u!==Dr)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var nl=class extends Ir{constructor(e,t=Vi,n=Xs,i,s,a=mn,o=mn,l,c=Rr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var il=class extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Za=class r extends Pr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;m(`z`,`y`,`x`,-1,-1,n,t,e,a,s,0),m(`z`,`y`,`x`,1,-1,n,t,-e,a,s,1),m(`x`,`z`,`y`,1,1,e,n,t,i,a,2),m(`x`,`z`,`y`,1,-1,e,n,-t,i,a,3),m(`x`,`y`,`z`,1,-1,e,t,n,i,s,4),m(`x`,`y`,`z`,-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute(`position`,new Zn(c,3)),this.setAttribute(`normal`,new Zn(u,3)),this.setAttribute(`uv`,new Zn(f,2));function m(x,p,g,v,E,y,T,w,_,M,P){let C=y/_,N=T/M,D=y/2,V=T/2,I=w/2,B=_+1,H=M+1,F=0,te=0,W=new J;for(let R=0;R<H;R++){let ne=R*N-V;for(let Se=0;Se<B;Se++)W[x]=(Se*C-D)*v,W[p]=ne*E,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=w>0?1:-1,u.push(W.x,W.y,W.z),f.push(Se/_),f.push(1-R/M),F+=1}for(let R=0;R<M;R++)for(let ne=0;ne<_;ne++){let Se=h+ne+B*R,Ue=h+ne+B*(R+1),Z=h+(ne+1)+B*(R+1),ue=h+(ne+1)+B*R;l.push(Se,Ue,ue),l.push(Ue,Z,ue),te+=6}o.addGroup(d,te,P),d+=te,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rl=class r extends Pr{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],f=[],h=[],d=[],m=0,x=[],p=n/2,g=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute(`position`,new Zn(f,3)),this.setAttribute(`normal`,new Zn(h,3)),this.setAttribute(`uv`,new Zn(d,2));function v(){let y=new J,T=new J,w=0,_=(t-e)/n;for(let M=0;M<=s;M++){let P=[],C=M/s,N=C*(t-e)+e;for(let D=0;D<=i;D++){let V=D/i,I=V*l+o,B=Math.sin(I),H=Math.cos(I);T.x=N*B,T.y=-C*n+p,T.z=N*H,f.push(T.x,T.y,T.z),y.set(B,_,H).normalize(),h.push(y.x,y.y,y.z),d.push(V,1-C),P.push(m++)}x.push(P)}for(let M=0;M<i;M++)for(let P=0;P<s;P++){let C=x[P][M],N=x[P+1][M],D=x[P+1][M+1],V=x[P][M+1];(e>0||P!==0)&&(u.push(C,N,V),w+=3),(t>0||P!==s-1)&&(u.push(N,D,V),w+=3)}c.addGroup(g,w,0),g+=w}function E(y){let T=m,w=new ht,_=new J,M=0,P=y===!0?e:t,C=y===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,p*C,0),h.push(0,C,0),d.push(.5,.5),m++;let N=m;for(let D=0;D<=i;D++){let I=D/i*l+o,B=Math.cos(I),H=Math.sin(I);_.x=P*H,_.y=p*C,_.z=P*B,f.push(_.x,_.y,_.z),h.push(0,C,0),w.x=B*.5+.5,w.y=H*.5*C+.5,d.push(w.x,w.y),m++}for(let D=0;D<i;D++){let V=T+D,I=N+D;y===!0?u.push(I,I+1,V):u.push(I+1,I,V),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sl=class r extends Pr{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],m=[],x=[],p=[];for(let g=0;g<u;g++){let v=g*h-a;for(let E=0;E<c;E++){let y=E*f-s;m.push(y,-v,0),x.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let E=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),w=v+1+c*g;d.push(E,y,w),d.push(y,T,w)}this.setIndex(d),this.setAttribute(`position`,new Zn(m,3)),this.setAttribute(`normal`,new Zn(x,3)),this.setAttribute(`uv`,new Zn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ys(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(vg(i))i.isRenderTargetTexture?(Be(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(vg(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Un(r){let e={};for(let t=0;t<r.length;t++){let n=Ys(r[t]);for(let i in n)e[i]=n[i]}return e}function vg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ev(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Of(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var u_={clone:Ys,merge:Un};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var sr=class extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:`t`,value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:`c`,value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:`v2`,value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:`v3`,value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:`m4`,value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=t[i.value]||null;break;case`c`:this.uniforms[n].value=new dt().setHex(i.value);break;case`v2`:this.uniforms[n].value=new ht().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new Bt().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new Ve().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var su=class extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var au=class extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var ou=class extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT==`number`?new e(r):Array.prototype.slice.call(r)}function Fc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var os=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var lu=class extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ef,endingEnd:ef}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case tf:s=e,o=2*t-n;break;case nf:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tf:a=e,l=2*n-t;break;case nf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,p=x*m,g=-h*p+2*h*x-h*m,v=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*m+1,E=(-1-d)*p+(1.5+d)*x+.5*m,y=d*p-d*x;for(let T=0;T!==o;++T)s[T]=g*a[u+T]+v*a[c+T]+E*a[l+T]+y*a[f+T];return s}};var cu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}};var uu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};var hu=class extends os{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-t)/(i-t),x=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*m;return s}let h=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=d*h+m*2,v=f[g],E=f[g+1],y=e*h+m*2,T=u[y],w=u[y+1],_=Pv(n,t,v,T,i);s[m]=h_(_,x,E,w,p)}return s}};function h_(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function Rv(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Pv(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=h_(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=Rv(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var _i=class{constructor(e,t,n,i){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Fc(e.settings)&&(n.settings={inTangents:Oa(e.settings.inTangents,Array),outTangents:Oa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qo:t=this.InterpolantFactoryMethodDiscrete;break;case Kc:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break;case jd:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return zc;case this.InterpolantFactoryMethodBezier:return jd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Fc(this.settings)&&(yg(this.settings.inTangents,e),yg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Fc(this.settings)&&(Sg(this.settings.inTangents,e),Sg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ke(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l==`number`&&isNaN(l)){ke(`KeyframeTrack: Time is not a valid number.`,this,o,l),e=!1;break}if(a!==null&&a>l){ke(`KeyframeTrack: Out of order keys.`,this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ke(`KeyframeTrack: Value is not a valid number.`,this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[h+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Fc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function yg(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function Sg(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}_i.prototype.ValueTypeName=``;_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Kc;var ls=class extends _i{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName=`bool`;ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=qo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}};du.prototype.ValueTypeName=`color`;var fu=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}};fu.prototype.ValueTypeName=`number`;var pu=class extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)rr.slerpFlat(s,0,a,c-o,a,c,l);return s}};var al=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new pu(this.times,this.values,this.getValueSize(),e)}};al.prototype.ValueTypeName=`quaternion`;al.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends _i{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName=`string`;cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=qo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends _i{constructor(e,t,n,i){super(e,t,n,i)}};mu.prototype.ValueTypeName=`vector`;var Gc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Mg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Mg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Mg(r){try{let e=r.slice(r.indexOf(`:`)+1);return new URL(e).protocol===`blob:`}catch{return!1}}var gu=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize(`NFC`),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};var d_=new gu;var Ja=class{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ua=/* @__PURE__ */ new WeakMap;var _u=class extends Ja{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Gc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Ua.get(a);f===void 0&&(f=[],Ua.set(a,f)),f.push({onLoad:t,onError:i})}return a}let o=Ga(`img`);function l(){u(),t&&t(this);let f=Ua.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Ua.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Gc.remove(`image:${e}`);let h=Ua.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}Ua.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener(`load`,l,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,l,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gc.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ol=class extends Ja{constructor(e){super(e)}load(e,t,n,i){let s=new $n,a=new _u(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}};var Bc=new J;var kc=new rr;var er=new J;var ll=class extends Pi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bc,kc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,kc,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bc,kc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,kc,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var is=new J;var bg=new ht;var Tg=new ht;var Yn=class extends ll{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Tg),t.subVectors(Tg,bg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ld*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xu=class extends ll{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Fa=-90;var Ba=1;var $a=class extends Pi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yn(Fa,Ba,e,t);i.layers=this.layers,this.add(i);let s=new Yn(Fa,Ba,e,t);s.layers=this.layers,this.add(s);let a=new Yn(Fa,Ba,e,t);a.layers=this.layers,this.add(a);let o=new Yn(Fa,Ba,e,t);o.layers=this.layers,this.add(o);let l=new Yn(Fa,Ba,e,t);l.layers=this.layers,this.add(l);let c=new Yn(Fa,Ba,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}};var vu=class extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Uf=`\\[\\]\\.:\\/`;var Iv=new RegExp(`[`+Uf+`]`,`g`);var Ff=`[^`+Uf+`]`;var Lv=`[^`+Uf.replace(`\\.`,``)+`]`;var Dv=/((?:WC+[\/:])*)/.source.replace(`WC`,Ff);var Nv=/(WCOD+)?/.source.replace(`WCOD`,Lv);var Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,Ff);var Uv=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,Ff);var Fv=new RegExp(`^`+Dv+Nv+Ov+Uv+`$`);var Bv=[`material`,`materials`,`bones`,`map`];var rf=class{constructor(e,t,n){let i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var Pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Iv,``)}static parseTrackName(e){let t=Fv.exec(e);if(t===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Bv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let c=t.objectIndex;switch(n){case`materials`:if(!e.material){ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){ke(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){ke(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){ke(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){ke(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;ke(`PropertyBinding: Trying to update property for track: `+c+`.`+i+` but it wasn't found.`,e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i===`morphTargetInfluences`){if(!e.geometry){ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=rf;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function Bf(r,e,t,n){let i=kv(n);switch(t){case wf:return r*e;case Af:return r*e/i.components*i.byteLength;case Eu:return r*e/i.components*i.byteLength;case hs:return r*e*2/i.components*i.byteLength;case Au:return r*e*2/i.components*i.byteLength;case Ef:return r*e*3/i.components*i.byteLength;case Wi:return r*e*4/i.components*i.byteLength;case Cu:return r*e*4/i.components*i.byteLength;case hl:case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Lu:return Math.max(r,16)*Math.max(e,8)/4;case Ru:case Iu:return Math.max(r,8)*Math.max(e,8)/2;case Du:case Nu:case Uu:case Fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ou:case ml:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ju:case eh:case th:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gl:case rh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kv(r){switch(r){case xi:case Sf:return{byteLength:1,components:1};case eo:case Mf:case Hi:return{byteLength:2,components:1};case Tu:case wu:return{byteLength:2,components:4};case Vi:case bu:case Gi:return{byteLength:4,components:1};case bf:case Tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}}));typeof window<`u`&&(window.__THREE__?Be(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function N_(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vv(r){let e=/* @__PURE__ */ new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<`u`&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`};var Me={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}};var cr={basic:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Un([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Un([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Un([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Un([Me.common,Me.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Un([Me.lights,Me.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};cr.physical={uniforms:Un([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var sh={r:0,b:0,g:0};var SM=new Xt;var O_=new Ve;O_.set(-1,0,0,0,1,0,0,0,1);function MM(r,e,t,n,i,s){let a=new dt(0),o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(v){let E=!1,y=d(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let T=r.xr.getEnvironmentBlendMode();T===`additive`?t.buffers.color.setClear(0,0,0,1,s):T===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new gi(new Za(1,1,1),new sr({name:`BackgroundCubeMaterial`,uniforms:Ys(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),c.geometry.deleteAttribute(`uv`),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O_),c.material.toneMapped=it.getTransfer(y.colorSpace)!==vt,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gi(new sl(2,2),new sr({name:`BackgroundMaterial`,uniforms:Ys(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(sh,Of(r)),t.buffers.color.setClear(sh.r,sh.g,sh.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function bM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(N,D,V,I,B){let H=!1,F=f(N,I,V,D);s!==F&&(s=F,c(s.object)),H=d(N,I,V,B),H&&m(N,I,V,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(N,D,V,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function f(N,D,V,I){let B=I.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let F=N.isInstancedMesh===!0?N.id:0,te=H[F];te===void 0&&(te={},H[F]=te);let W=te[V.id];W===void 0&&(W={},te[V.id]=W);let R=W[B];return R===void 0&&(R=h(l()),W[B]=R),R}function h(N){let D=[],V=[],I=[];for(let B=0;B<t;B++)D[B]=0,V[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,D,V,I){let B=s.attributes,H=D.attributes,F=0,te=V.getAttributes();for(let W in te)if(te[W].location>=0){let ne=B[W],Se=H[W];if(Se===void 0&&(W===`instanceMatrix`&&N.instanceMatrix&&(Se=N.instanceMatrix),W===`instanceColor`&&N.instanceColor&&(Se=N.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function m(N,D,V,I){let B={},H=D.attributes,F=0,te=V.getAttributes();for(let W in te)if(te[W].location>=0){let ne=H[W];ne===void 0&&(W===`instanceMatrix`&&N.instanceMatrix&&(ne=N.instanceMatrix),W===`instanceColor`&&N.instanceColor&&(ne=N.instanceColor));let Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),B[W]=Se,F++}s.attributes=B,s.attributesNum=F,s.index=I}function x(){let N=s.newAttributes;for(let D=0,V=N.length;D<V;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let V=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;V[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),B[N]!==D&&(r.vertexAttribDivisor(N,D),B[N]=D)}function v(){let N=s.newAttributes,D=s.enabledAttributes;for(let V=0,I=D.length;V<I;V++)D[V]!==N[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function E(N,D,V,I,B,H,F){F===!0?r.vertexAttribIPointer(N,D,V,B,H):r.vertexAttribPointer(N,D,V,I,B,H)}function y(N,D,V,I){x();let B=I.attributes,H=V.getAttributes(),F=D.defaultAttributeValues;for(let te in H){let W=H[te];if(W.location>=0){let R=B[te];if(R===void 0&&(te===`instanceMatrix`&&N.instanceMatrix&&(R=N.instanceMatrix),te===`instanceColor`&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let ne=R.normalized,Se=R.itemSize,Ue=e.get(R);if(Ue===void 0)continue;let Z=Ue.buffer,ue=Ue.type,ye=Ue.bytesPerElement,be=ue===r.INT||ue===r.UNSIGNED_INT||R.gpuType===bu;if(R.isInterleavedBufferAttribute){let me=R.data,De=me.isInterleavedBuffer===!0?me.stride:me.itemSize,yt=R.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)g(W.location+Ee,me.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)p(W.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Ee=0;Ee<W.locationSize;Ee++)E(W.location+Ee,Se/W.locationSize,ue,ne,De*ye,(yt+Se/W.locationSize*Ee)*ye,be)}else{if(R.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)g(W.location+me,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let me=0;me<W.locationSize;me++)p(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let me=0;me<W.locationSize;me++)E(W.location+me,Se/W.locationSize,ue,ne,Se*ye,Se/W.locationSize*me*ye,be)}}else if(F!==void 0){let ne=F[te];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(W.location,ne);break;case 3:r.vertexAttrib3fv(W.location,ne);break;case 4:r.vertexAttrib4fv(W.location,ne);break;default:r.vertexAttrib1fv(W.location,ne)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let V in D){let I=D[V];for(let B in I){let H=I[B];for(let F in H)u(H[F].object),delete H[F];delete I[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let V in D){let I=D[V];for(let B in I){let H=I[B];for(let F in H)u(H[F].object),delete H[F];delete I[B]}}delete n[N.id]}function _(N){for(let D in n){let V=n[D];for(let I in V){let B=V[I];if(B[N.id]===void 0)continue;let H=B[N.id];for(let F in H)u(H[F].object),delete H[F];delete B[N.id]}}}function M(N){for(let D in n){let V=n[D],I=N.isInstancedMesh===!0?N.id:0,B=V[I];if(B!==void 0){for(let H in B){let F=B[H];for(let te in F)u(F[te].object),delete F[te];delete B[H]}delete V[I],Object.keys(V).length===0&&delete n[D]}}}function P(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function TM(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let _=e.get(`EXT_texture_filter_anisotropic`);i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Wi&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Hi&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(_!==xi&&_!==Gi&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_===`highp`){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return`highp`;_=`mediump`}return _===`mediump`&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let c=t.precision!==void 0?t.precision:`highp`,u=l(c);u!==c&&(Be(`WebGLRenderer:`,c,`not supported, using`,u,`instead.`),c=u);let f=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Be(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),t.logarithmicDepthBuffer===!0&&f===!0&&Be(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function EM(r){let e=this,t=null,n=0,i=!1,s=!1,a=new zi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{let v=s?0:n,E=v*4,y=g.clippingState||null;l.value=y,y=u(m,h,E,d);for(let T=0;T!==E;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=d;E!==x;++E,y+=4)a.copy(f[E]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var yl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Za(5,5,5),s=new sr({name:`CubemapFromEquirect`,uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Hs});s.uniforms.tEquirect.value=t;let a=new gi(i,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Jn),new $a(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};var f_=256;var AM=3;var CM=20;var U_=256;var F_=16;var RM=3;var PM=new J;var IM=new dt;var oh=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $a(1,10,null),this._boxMesh=new gi(new Za(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=PM}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(IM));let p=new $a(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(f_,l_(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===ja?this._setSize(e.image.length===0?f_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=p_(e,!1,!1),n=Math.log2(e)-AM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=p_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=m_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=LM(),this._integrationMaterial=DM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/F_);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-RM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(U_*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=NM());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function p_(r,e,t){return new yl(r,{minFilter:Lr,generateMipmaps:e,type:Hi,colorSpace:Yo,depthBuffer:t})}function Sl(r,e,t){return new sr({name:r,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:Mn,blending:Hs,depthTest:!1,depthWrite:!1})}function LM(){return Sl(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${U_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function DM(){return Sl(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:F_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function NM(){return Sl(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function m_(){return Sl(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function g_(){return Sl(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OM(r){let e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===yu||d===Su)if(e.has(h)){let m=e.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new yl(m.height);return x.fromEquirectangularTexture(r,h),e.set(h,x),h.addEventListener(`dispose`,c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,m=d===yu||d===Su,x=d===Xs||d===ja;if(m||x){let p=t.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new oh(r)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let v=h.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new oh(r)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener(`dispose`,u),p.texture):null}}}return h}function o(h,d){return d===yu?h.mapping=Xs:d===Su&&(h.mapping=ja),h}function l(h){let d=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener(`dispose`,c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener(`dispose`,u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function UM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let i=t(n);return i===null&&Xo(`WebGLRenderer: `+n+` extension not supported.`),i}}}function FM(r,e,t,n){let i={},s=/* @__PURE__ */ new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener(`dispose`,o),delete i[m.id],a.unregister(m);let x=s.get(m);x&&(e.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener(`dispose`,o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let p in x)e.update(x[p],r.ARRAY_BUFFER)}function f(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,y=new(p.count>=65535?el:jo)(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,P=0;M<v;M+=3){let C=_[M+0],N=_[M+1],D=_[M+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{g=p.version;for(let _=0,M=0;_<v;_+=3){let P=_+0,C=_+1,N=_+2;T[M++]=P,T[M++]=C,T[M++]=C,T[M++]=N,T[M++]=N,T[M++]=P}}y.version=g;let w=s.get(m);w&&e.remove(w),s.set(m,y)}function h(m){let x=s.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return s.get(m)}function d(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function BM(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,h,0,s,f,0,d);let x=0;for(let p=0;p<d;p++)x+=h[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ke(`WebGLInfo: Unknown draw mode:`,a)}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zM(r,e,t){let n=/* @__PURE__ */ new WeakMap,i=new Bt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let P=function(){_.dispose(),n.delete(o),o.removeEventListener(`dispose`,P)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*f),_=new $o(w,y,T,f);_.type=Gi,_.needsUpdate=!0;let M=E*4;for(let C=0;C<f;C++){let N=p[C],D=g[C],V=v[C],I=y*T*4*C;for(let B=0;B<N.count;B++){let H=B*M;d===!0&&(i.fromBufferAttribute(N,B),w[I+H+0]=i.x,w[I+H+1]=i.y,w[I+H+2]=i.z,w[I+H+3]=0),m===!0&&(i.fromBufferAttribute(D,B),w[I+H+4]=i.x,w[I+H+5]=i.y,w[I+H+6]=i.z,w[I+H+7]=0),x===!0&&(i.fromBufferAttribute(V,B),w[I+H+8]=i.x,w[I+H+9]=i.y,w[I+H+10]=i.z,w[I+H+11]=V.itemSize===4?i.w:1)}}h={count:f,texture:_,size:new ht(y,T)},n.set(o,h),o.addEventListener(`dispose`,P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,`morphTexture`,a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,`morphTargetBaseInfluence`,m),l.getUniforms().setValue(r,`morphTargetInfluences`,c)}l.getUniforms().setValue(r,`morphTargetsTexture`,h.texture,t),l.getUniforms().setValue(r,`morphTargetsTextureSize`,h.size)}return{update:s}}function VM(r,e,t,n,i){let s=/* @__PURE__ */ new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener(`dispose`,l)===!1&&c.addEventListener(`dispose`,l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=/* @__PURE__ */ new WeakMap}function l(c){let u=c.target;u.removeEventListener(`dispose`,l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var GM={[ff]:`LINEAR_TONE_MAPPING`,[pf]:`REINHARD_TONE_MAPPING`,[mf]:`CINEON_TONE_MAPPING`,[gf]:`ACES_FILMIC_TONE_MAPPING`,[xf]:`AGX_TONE_MAPPING`,[vf]:`NEUTRAL_TONE_MAPPING`,[_f]:`CUSTOM_TONE_MAPPING`};function HM(r,e,t,n,i,s){let a=new mi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Pr;u.setAttribute(`position`,new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Zn([0,2,0,0,2,0],2));let f=new su({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new gi(u,f),d=new xu(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,E=[],y=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){E=T,y=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new mi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new mi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ir(w,_),s===!0&&(c.format=Dr,c.type=qs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<E.length;P++){let C=E[P];C.setSize&&C.setSize(w,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===or&&E.length===0)return!1;if(v=w,w!==null){let _=w.width,M=w.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=or,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=g,p=!0;let _=a,M=o;for(let P=0;P<E.length;P++){let C=E[P];C.enabled!==!1&&(C.render(T,M,_,w),C.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,f.defines={},it.getTransfer(m)===vt&&(f.defines.SRGB_TRANSFER=``);let P=GM[x];P&&(f.defines[P]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(h,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var B_=new $n;var k_=new Ir(1,1);var z_=new nl(1);var V_=new $o;var G_=new tu;var H_=new tl;var __=[];var x_=[];var v_=/* @__PURE__ */ new Float32Array(16);var y_=/* @__PURE__ */ new Float32Array(9);var S_=/* @__PURE__ */ new Float32Array(4);function no(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=__[i];if(s===void 0&&(s=new Float32Array(i),__[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ch(r,e){let t=x_[e];t===void 0&&(t=new Int32Array(e),x_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function ZM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;S_.set(n),r.uniformMatrix2fv(this.addr,!1,S_),un(t,n)}}function JM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;y_.set(n),r.uniformMatrix3fv(this.addr,!1,y_),un(t,n)}}function $M(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;v_.set(n),r.uniformMatrix4fv(this.addr,!1,v_),un(t,n)}}function KM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function jM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function tb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function rb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function uh(r){return r.version===0&&(r.compareFunction=If,r.needsUpdate=!0),r}function sb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=uh(k_):s=B_,t.setTexture2D(e||s,i)}function ab(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||G_,i)}function ob(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=uh(z_):s=H_,t.setTextureCube(e||s,i)}function lb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||V_,i)}function cb(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return ZM;case 35675:return JM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return QM;case 35668:case 35672:return jM;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(r,e){r.uniform1fv(this.addr,e)}function hb(r,e){let t=no(e,this.size,2);r.uniform2fv(this.addr,t)}function db(r,e){let t=no(e,this.size,3);r.uniform3fv(this.addr,t)}function fb(r,e){let t=no(e,this.size,4);r.uniform4fv(this.addr,t)}function pb(r,e){let t=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mb(r,e){let t=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gb(r,e){let t=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _b(r,e){r.uniform1iv(this.addr,e)}function xb(r,e){r.uniform2iv(this.addr,e)}function vb(r,e){r.uniform3iv(this.addr,e)}function yb(r,e){r.uniform4iv(this.addr,e)}function Sb(r,e){r.uniform1uiv(this.addr,e)}function Mb(r,e){r.uniform2uiv(this.addr,e)}function bb(r,e){r.uniform3uiv(this.addr,e)}function Tb(r,e){r.uniform4uiv(this.addr,e)}function wb(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=uh(k_):a=B_;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Eb(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||G_,s[a])}function Ab(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=uh(z_):a=H_;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function Cb(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||V_,s[a])}function Rb(r){switch(r){case 5126:return ub;case 35664:return hb;case 35665:return db;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return bb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Cb}}var Vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cb(t.type)}};var Gf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rb(t.type)}};var Hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}};var kf=/(\w+)(\])?(\[|\.)?/g;function M_(r,e){r.seq.push(e),r.map[e.id]=e}function Pb(r,e,t){let n=r.name,i=n.length;for(kf.lastIndex=0;;){let s=kf.exec(n),a=kf.lastIndex,o=s[1],l=s[2]===`]`,c=s[3];if(l&&(o=o|0),c===void 0||c===`[`&&a+2===i){M_(t,c===void 0?new Vf(o,r,e):new Gf(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Hf(o),M_(t,f)),t=f}}}var to=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);Pb(o,e.getUniformLocation(t,o.name),this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function b_(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Ib=37297;var Lb=0;function Db(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?`>`:` `} ${o}: ${t[a]}`)}return n.join(`
`)}var T_=new Ve;function Nb(r){it._getMatrix(T_,it.workingColorSpace,r);let e=`mat3( ${T_.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case Zo:return[e,`LinearTransferOETF`];case vt:return[e,`sRGBTransferOETF`];default:return Be(`WebGLProgram: Unsupported color space: `,r),[e,`LinearTransferOETF`]}}function w_(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||``).trim();if(n&&s===``)return``;let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Db(r.getShaderSource(e),o)}else return s}function Ob(r,e){let t=Nb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ub={[ff]:`Linear`,[pf]:`Reinhard`,[mf]:`Cineon`,[gf]:`ACESFilmic`,[xf]:`AgX`,[vf]:`Neutral`,[_f]:`Custom`};function Fb(r,e){let t=Ub[e];return t===void 0?(Be(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+r+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+r+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var ah=new J;function Bb(){it.getLuminanceCoefficients(ah);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ah.x.toFixed(4)}, ${ah.y.toFixed(4)}, ${ah.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function kb(r){return[r.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,r.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(vl).join(`
`)}function zb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function Vb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function vl(r){return r!==``}function E_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function A_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(r){return r.replace(Gb,Hb)}function Hb(r,e){let t=Ze[e];if(t===void 0)throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`);return Wf(t)}var Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(r){return r.replace(Wb,Xb)}function Xb(r,e,t,n){let i=``;for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+s+` ]`).replace(/UNROLLED_LOOP_INDEX/g,s);return i}function R_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision===`highp`?e+=`
#define HIGH_PRECISION`:r.precision===`mediump`?e+=`
#define MEDIUM_PRECISION`:r.precision===`lowp`&&(e+=`
#define LOW_PRECISION`),e}var qb={[cl]:`SHADOWMAP_TYPE_PCF`,[Ka]:`SHADOWMAP_TYPE_VSM`};function Yb(r){return qb[r.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Zb={[ja]:`ENVMAP_MODE_REFRACTION`};function Jb(r){return r.envMap===!1?`ENVMAP_MODE_REFLECTION`:Zb[r.envMapMode]||`ENVMAP_MODE_REFLECTION`}var $b={[df]:`ENVMAP_BLENDING_MULTIPLY`,[qg]:`ENVMAP_BLENDING_MIX`,[Yg]:`ENVMAP_BLENDING_ADD`};function Kb(r){return r.envMap===!1?`ENVMAP_BLENDING_NONE`:$b[r.combine]||`ENVMAP_BLENDING_NONE`}function Qb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Yb(t),c=t.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Jb(t),f=Kb(t),h=kb(t),d=zb(s),m=i.createProgram(),x,p,g=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(x=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d].filter(vl).join(`
`),x.length>0&&(x+=`
`),p=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d].filter(vl).join(`
`),p.length>0&&(p+=`
`)):(x=[R_(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+u:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+t.diffuseRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(vl).join(`
`),p=[R_(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+c:``,t.envMap?`#define `+u:``,t.envMap?`#define `+f:``,t.envMapPMREM?`#define ENVMAP_MAX_LOD `+t.envMapMaxLod+`.0`:``,t.envMapPMREM?`#define ENVMAP_SIZE `+t.envMapSize+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.retroreflection?`#define USE_RETROREFLECTION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==or?`#define TONE_MAPPING`:``,t.toneMapping!==or?Ze.tonemapping_pars_fragment:``,t.toneMapping!==or?Fb(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,Ze.colorspace_pars_fragment,Ob(`linearToOutputTexel`,t.outputColorSpace),Bb(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(vl).join(`
`)),a=Wf(a),a=E_(a,t),a=A_(a,t),o=Wf(o),o=E_(o,t),o=A_(o,t),a=C_(a),o=C_(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+x,p=[`#define varying in`,t.glslVersion===Lf?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===Lf?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+p);let v=g+x+a,E=g+p+o,y=b_(i,i.VERTEX_SHADER,v),T=b_(i,i.FRAGMENT_SHADER,E);i.attachShader(m,y),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`),i.linkProgram(m);function w(C){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||``,D=i.getShaderInfoLog(y)||``,V=i.getShaderInfoLog(T)||``,I=N.trim(),B=D.trim(),H=V.trim(),F=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError==`function`)r.debug.onShaderError(i,m,y,T);else{let W=w_(i,y,`vertex`),R=w_(i,T,`fragment`);ke(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==``?Be(`WebGLProgram: Program Info Log:`,I):(B===``||H===``)&&(te=!1);te&&(C.diagnostics={runnable:F,programLog:I,vertexShader:{log:B,prefix:x},fragmentShader:{log:H,prefix:p}})}i.deleteShader(y),i.deleteShader(T),_=new to(i,m),M=Vb(i,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Ib)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var jb=0;var Xf=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qf(e),t.set(e,n)),n}};var qf=class{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}};function e1(r){return r===hs||r===ml||r===gl}function t1(r,e,t,n,i,s){let a=new Ko,o=new Xf,l=/* @__PURE__ */ new Set,c=[],u=/* @__PURE__ */ new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function d(_){return l.add(_),_===0?`uv`:`uv${_}`}function m(_,M,P,C,N,D){let V=C.fog,I=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||B,H),te=h[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Be(`WebGLProgram.getParameters:`,_.precision,`not supported, using`,W,`instead.`));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=R!==void 0?R.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Ue,Z,ue,ye;if(te){let ee=cr[te];Ue=ee.vertexShader,Z=ee.fragmentShader}else{Ue=_.vertexShader,Z=_.fragmentShader;let ee=o.getVertexShaderStage(_),Te=o.getFragmentShaderStage(_);o.update(_,ee,Te),ue=ee.id,ye=Te.id}let be=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,Ee=!!_.map,Ge=!!_.matcap,Ie=!!F,Oe=Ie&&F.isPMREMTexture===!0,ft=!!_.aoMap,lt=!!_.lightMap,Y=!!_.bumpMap&&_.wireframe===!1,je=!!_.normalMap,Jt=!!_.displacementMap,bt=!!_.emissiveMap,rt=!!_.metalnessMap,kt=!!_.roughnessMap,qt=_.anisotropy>0,U=_.clearcoat>0,mt=_.diffuseRoughness>0,ct=_.dispersion>0,ze=_.retroreflectivity>0,he=_.iridescence>0,pt=_.sheen>0,Le=_.transmission>0,Fe=qt&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,S=U&&!!_.clearcoatNormalMap,z=U&&!!_.clearcoatRoughnessMap,se=mt&&!!_.diffuseRoughnessMap,ie=he&&!!_.iridescenceMap,ce=he&&!!_.iridescenceThicknessMap,ge=pt&&!!_.sheenColorMap,G=pt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,le=!!_.specularColorMap,L=!!_.specularIntensityMap,K=Le&&!!_.transmissionMap,$=Le&&!!_.thicknessMap,de=!!_.gradientMap,oe=!!_.alphaMap,fe=_.alphaTest>0,ae=!!_.alphaHash,pe=!!_.extensions,re=or;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(re=r.toneMapping);let j=Oe?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,_e={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Z,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Ge,envMap:Ie,envMapMode:Ie&&F.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?j.length-1:null,envMapSize:Oe?j[0].width:null,aoMap:ft,lightMap:lt,bumpMap:Y,normalMap:je,displacementMap:Jt,emissiveMap:bt,normalMapObjectSpace:je&&_.normalMapType===$g,normalMapTangentSpace:je&&_.normalMapType===Cf,packedNormalMap:je&&_.normalMapType===Cf&&e1(_.normalMap.format),metalnessMap:rt,roughnessMap:kt,anisotropy:qt,anisotropyMap:Fe,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:mt,diffuseRoughnessMap:se,dispersion:ct,retroreflection:ze,iridescence:he,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:pt,sheenColorMap:ge,sheenRoughnessMap:G,specularMap:Q,specularColorMap:le,specularIntensityMap:L,transmission:Le,transmissionMap:K,thicknessMap:$,gradientMap:de,opaque:_.transparent===!1&&_.blending===Qa&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:fe,alphaHash:ae,combine:_.combine,mapUv:Ee&&d(_.map.channel),aoMapUv:ft&&d(_.aoMap.channel),lightMapUv:lt&&d(_.lightMap.channel),bumpMapUv:Y&&d(_.bumpMap.channel),normalMapUv:je&&d(_.normalMap.channel),displacementMapUv:Jt&&d(_.displacementMap.channel),emissiveMapUv:bt&&d(_.emissiveMap.channel),metalnessMapUv:rt&&d(_.metalnessMap.channel),roughnessMapUv:kt&&d(_.roughnessMap.channel),anisotropyMapUv:Fe&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&d(_.sheenRoughnessMap.channel),specularMapUv:Q&&d(_.specularMap.channel),specularColorMapUv:le&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:K&&d(_.transmissionMap.channel),thicknessMapUv:$&&d(_.thicknessMap.channel),alphaMapUv:oe&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(je||qt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ee||oe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(ee=>ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ar,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||yt)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let M=h[_.type],P;if(M){let C=cr[M];P=u_.clone(C.uniforms)}else P=_.uniforms;return P}function E(_,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new Qb(r,M,_,i),c.push(P),u.set(M,P)),P}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function n1(){let r=/* @__PURE__ */ new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=/* @__PURE__ */ new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function i1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function P_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function I_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,x,p,g){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:g},r[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=p,v.group=g),e++,v}function l(h,d,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let E=o(h,d,m,x,p,g);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):t.push(E)}function c(h,d,m,x,p,g){let v=o(h,d,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||i1),n.length>1&&n.sort(d||P_),i.length>1&&i.sort(d||P_)}function f(){for(let h=e,d=r.length;h<d;h++){let m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function r1(){let r=/* @__PURE__ */ new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new I_,r.set(n,[a])):i>=s.length?(a=new I_,s.push(a)):a=s[i],a}function t(){r=/* @__PURE__ */ new WeakMap}return{get:e,dispose:t}}function s1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={direction:new J,color:new dt};break;case`SpotLight`:t={position:new J,direction:new J,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new J,color:new dt,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new J,skyColor:new dt,groundColor:new dt};break;case`RectAreaLight`:t={color:new dt,position:new J,halfWidth:new J,halfHeight:new J}}return r[e.id]=t,t}}}function a1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3}}return r[e.id]=t,t}}}var o1=0;function l1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function c1(r){let e=new s1,t=a1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,s=new Xt,a=new Xt;function o(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,v=0,E=0,y=0,T=0,w=0,_=0,M=0,P=0,C=0;c.sort(l1);for(let D=0,V=c.length;D<V;D++){let I=c[D],B=I.color,H=I.intensity,F=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===hs?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*H,f+=B.g*H,h+=B.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ne=t.get(I);ne.shadowIntensity=R.intensity,ne.shadowBias=R.bias,ne.shadowNormalBias=R.normalBias,ne.shadowRadius=R.radius,ne.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=ne,n.sunShadowMap[m]=te;let Se=R.getViewportCount();for(let Ue=0;Ue<Se;Ue++)n.sunShadowMatrix[x+Ue]=R.getMatrix(Ue),n.sunShadowCascade[x+Ue]=R._cascadeData[Ue];x+=Se,m++}n.sun[d]=W,d++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ne=t.get(I);ne.shadowIntensity=R.intensity,ne.shadowBias=R.bias,ne.shadowNormalBias=R.normalBias,ne.shadowRadius=R.radius,ne.shadowMapSize=R.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(H),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=R.intensity,ne.shadowBias=R.bias,ne.shadowNormalBias=R.normalBias,ne.shadowRadius=R.radius,ne.shadowMapSize=R.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=te,_++}v++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=W,E++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,ne=t.get(I);ne.shadowIntensity=R.intensity,ne.shadowBias=R.bias,ne.shadowNormalBias=R.normalBias,ne.shadowRadius=R.radius,ne.shadowMapSize=R.mapSize,ne.shadowCameraNear=R.camera.near,ne.shadowCameraFar=R.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[y]=W,y++}}E>0&&(r.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=C,n.version=o1++)}function l(c,u){let f=0,h=0,d=0,m=0,x=0,p=0,g=u.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),h++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function L_(r){let e=new c1(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u1(r){let e=/* @__PURE__ */ new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new L_(r),e.set(i,[o])):s>=a.length?(o=new L_(r),a.push(o)):o=a[s],o}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var d1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var f1=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)];var p1=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)];var D_=new Xt;var xl=new J;var zf=new J;function m1(r,e,t){let n=new Gs,i=new ht,s=new ht,a=new Bt,o=new au,l=new ou,c={},u=t.maxTextureSize,f={[us]:Mn,[Mn]:us,[ar]:ar},h=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:h1,fragmentShader:d1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Pr;m.setAttribute(`position`,new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gi(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let g=this.type;this.render=function(w,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Ag&&(Be(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=cl);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Hs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=g!==this.type;V&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let H=w[I],F=H.shadow;if(F===void 0){Be(`WebGLShadowMap:`,H,`has no shadow.`);continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let te=F.getFrameExtents();i.multiply(te),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,F.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ka){if(H.isPointLight){Be(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}F.map=new mi(i.x,i.y,{format:hs,type:Hi,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),F.map.texture.name=H.name+`.shadowMap`,F.map.depthTexture=new Ir(i.x,i.y,Gi),F.map.depthTexture.name=H.name+`.shadowMapDepth`,F.map.depthTexture.format=Rr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn}else H.isPointLight?(F.map=new yl(i.x),F.map.depthTexture=new nl(i.x,Vi)):(F.map=new mi(i.x,i.y),F.map.depthTexture=new Ir(i.x,i.y,Vi)),F.map.depthTexture.name=H.name+`.shadowMap`,F.map.depthTexture.format=Rr,this.type===cl?(F.map.depthTexture.compareFunction=W?Pf:Rf,F.map.depthTexture.minFilter=Jn,F.map.depthTexture.magFilter=Jn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,M);let ne=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let Se=0;Se<R;Se++){let Ue=F.getCamera(Se);if(H.isPointLight){let Z=F.camera,ue=F.matrix,ye=H.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),xl.setFromMatrixPosition(H.matrixWorld),Z.position.copy(xl),zf.copy(Z.position),zf.add(f1[Se]),Z.up.copy(p1[Se]),Z.lookAt(zf),Z.updateMatrixWorld(),ue.makeTranslation(-xl.x,-xl.y,-xl.z),D_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(D_,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(F.map),r.clear());let Z=F.getViewport(Se);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(a)}n=F.getFrustum(Se),y(_,M,Ue,H,ne,this.type)}F.isPointLightShadow!==!0&&this.type===Ka&&v(F,M),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,C,N)};function v(w,_){let M=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new mi(i.x,i.y,{format:hs,type:Hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,M,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,M,d,x,null)}function E(w,_,M,P){let C=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=C.uuid,V=_.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[V];B===void 0&&(B=C.clone(),I[V]=B,_.addEventListener(`dispose`,T)),C=B}if(C.visible=_.visible,C.wireframe=_.wireframe,P===Ka?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=M}return C}function y(w,_,M,P,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Ka)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),B=w.material;if(Array.isArray(B)){let H=I.groups;for(let F=0,te=H.length;F<te;F++){let W=H[F],R=B[W.materialIndex];if(R&&R.visible){let ne=E(w,R,P,N);w.onBeforeShadow(r,w,_,M,I,ne,W),r.renderBufferDirect(M,null,I,ne,w,W),w.onAfterShadow(r,w,_,M,I,ne,W)}}}else if(B.visible){let H=E(w,B,P,N);w.onBeforeShadow(r,w,_,M,I,H,null),r.renderBufferDirect(M,null,I,H,w,null),w.onAfterShadow(r,w,_,M,I,H,null)}}let V=w.children;for(let I=0,B=V.length;I<B;I++)y(V[I],_,M,P,C,N)}function T(w){w.target.removeEventListener(`dispose`,T);for(let M in c){let P=c[M],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function g1(r,e){function t(){let L=!1,K=new Bt,$=null,de=new Bt(0,0,0,0);return{setMask:function(oe){$!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){L=oe},setClear:function(oe,fe,ae,pe,re){re===!0&&(oe*=pe,fe*=pe,ae*=pe),K.set(oe,fe,ae,pe),de.equals(K)===!1&&(r.clearColor(oe,fe,ae,pe),de.copy(K))},reset:function(){L=!1,$=null,de.set(-1,0,0,0)}}}function n(){let L=!1,K=!1,$=null,de=null,oe=null;return{setReversed:function(fe){if(K!==fe){let ae=e.get(`EXT_clip_control`);fe?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),K=fe;let pe=oe;oe=null,this.setClear(pe)}},getReversed:function(){return K},setTest:function(fe){fe?me(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(fe){$!==fe&&!L&&(r.depthMask(fe),$=fe)},setFunc:function(fe){if(K&&(fe=o_[fe]),de!==fe){switch(fe){case Hc:r.depthFunc(r.NEVER);break;case Wc:r.depthFunc(r.ALWAYS);break;case Xc:r.depthFunc(r.LESS);break;case za:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=fe}},setLocked:function(fe){L=fe},setClear:function(fe){oe!==fe&&(oe=fe,K&&(fe=1-fe),r.clearDepth(fe))},reset:function(){L=!1,$=null,de=null,oe=null,K=!1}}}function i(){let L=!1,K=null,$=null,de=null,oe=null,fe=null,ae=null,pe=null,re=null;return{setTest:function(j){L||(j?me(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(j){K!==j&&!L&&(r.stencilMask(j),K=j)},setFunc:function(j,_e,ee){($!==j||de!==_e||oe!==ee)&&(r.stencilFunc(j,_e,ee),$=j,de=_e,oe=ee)},setOp:function(j,_e,ee){(fe!==j||ae!==_e||pe!==ee)&&(r.stencilOp(j,_e,ee),fe=j,ae=_e,pe=ee)},setLocked:function(j){L=j},setClear:function(j){re!==j&&(r.clearStencil(j),re=j)},reset:function(){L=!1,K=null,$=null,de=null,oe=null,fe=null,ae=null,pe=null,re=null}}}let s=new t,a=new n,o=new i,l={},c=/* @__PURE__ */ new WeakMap,u={},f={},h={},d=/* @__PURE__ */ new WeakMap,m=[],x=null,p=!1,g=null,v=null,E=null,y=null,T=null,w=null,_=null,M=new dt(0,0,0),P=0,C=!1,N=null,D=null,V=null,I=null,B=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,te=0,W=r.getParameter(r.VERSION);W.indexOf(`WebGL`)!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=te>=1):W.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=te>=2);let R=null,ne={},Se=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Z=new Bt().fromArray(Se),ue=new Bt().fromArray(Ue);function ye(L,K,$,de){let oe=/* @__PURE__ */ new Uint8Array(4),fe=r.createTexture();r.bindTexture(L,fe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<$;ae++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(K+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return fe}let be={};be[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(r.DEPTH_TEST),a.setFunc(za),Y(!1),je(af),me(r.CULL_FACE),ft(Hs);function me(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function De(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function yt(L,K){return h[L]!==K?(r.bindFramebuffer(L,K),h[L]=K,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=K),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Ee(L,K){let $=m,de=!1;if(L){$=d.get(K),$===void 0&&($=[],d.set(K,$));let oe=L.textures;if($.length!==oe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,ae=oe.length;fe<ae;fe++)$[fe]=r.COLOR_ATTACHMENT0+fe;$.length=oe.length,de=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,de=!0);de&&r.drawBuffers($)}function Ge(L){return x!==L?(r.useProgram(L),x=L,!0):!1}let Ie={[Ws]:r.FUNC_ADD,[Rg]:r.FUNC_SUBTRACT,[Pg]:r.FUNC_REVERSE_SUBTRACT};Ie[Ig]=r.MIN,Ie[Lg]=r.MAX;let Oe={[Dg]:r.ZERO,[Ng]:r.ONE,[Og]:r.SRC_COLOR,[uf]:r.SRC_ALPHA,[Vg]:r.SRC_ALPHA_SATURATE,[kg]:r.DST_COLOR,[Fg]:r.DST_ALPHA,[Ug]:r.ONE_MINUS_SRC_COLOR,[hf]:r.ONE_MINUS_SRC_ALPHA,[zg]:r.ONE_MINUS_DST_COLOR,[Bg]:r.ONE_MINUS_DST_ALPHA,[Gg]:r.CONSTANT_COLOR,[Hg]:r.ONE_MINUS_CONSTANT_COLOR,[Wg]:r.CONSTANT_ALPHA,[Xg]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(L,K,$,de,oe,fe,ae,pe,re,j){if(L===Hs){p===!0&&(De(r.BLEND),p=!1);return}if(p===!1&&(me(r.BLEND),p=!0),L!==Cg){if(L!==g||j!==C){if((v!==Ws||T!==Ws)&&(r.blendEquation(r.FUNC_ADD),v=Ws,T=Ws),j)switch(L){case Qa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case of:r.blendFunc(r.ONE,r.ONE);break;case lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke(`WebGLState: Invalid blending: `,L)}else switch(L){case Qa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case of:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lf:ke(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case cf:ke(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ke(`WebGLState: Invalid blending: `,L)}E=null,y=null,w=null,_=null,M.set(0,0,0),P=0,g=L,C=j}return}oe=oe||K,fe=fe||$,ae=ae||de,(K!==v||oe!==T)&&(r.blendEquationSeparate(Ie[K],Ie[oe]),v=K,T=oe),($!==E||de!==y||fe!==w||ae!==_)&&(r.blendFuncSeparate(Oe[$],Oe[de],Oe[fe],Oe[ae]),E=$,y=de,w=fe,_=ae),(pe.equals(M)===!1||re!==P)&&(r.blendColor(pe.r,pe.g,pe.b,re),M.copy(pe),P=re),g=L,C=!1}function lt(L,K){L.side===ar?De(r.CULL_FACE):me(r.CULL_FACE);let $=L.side===Mn;K&&($=!$),Y($),L.blending===Qa&&L.transparent===!1?ft(Hs):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function je(L){L!==wg?(me(r.CULL_FACE),L!==D&&(L===af?r.cullFace(r.BACK):L===Eg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),D=L}function Jt(L){L!==V&&(F&&r.lineWidth(L),V=L)}function bt(L,K,$){L?(me(r.POLYGON_OFFSET_FILL),(I!==K||B!==$)&&(I=K,B=$,a.getReversed()&&(K=-K,$=-$),r.polygonOffset(K,$))):De(r.POLYGON_OFFSET_FILL)}function rt(L){L?me(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function kt(L){L===void 0&&(L=r.TEXTURE0+H-1),R!==L&&(r.activeTexture(L),R=L)}function qt(L,K,$){$===void 0&&(R===null?$=r.TEXTURE0+H-1:$=R);let de=ne[$];de===void 0&&(de={type:void 0,texture:void 0},ne[$]=de),(de.type!==L||de.texture!==K)&&(R!==$&&(r.activeTexture($),R=$),r.bindTexture(L,K||be[L]),de.type=L,de.texture=K)}function U(){let L=ne[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function ct(){try{r.compressedTexImage3D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function ze(){try{r.texSubImage2D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function he(){try{r.texSubImage3D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function Fe(){try{r.texStorage2D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function S(){try{r.texImage2D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function z(){try{r.texImage3D(...arguments)}catch(L){ke(`WebGLState:`,L)}}function se(L){return f[L]!==void 0?f[L]:r.getParameter(L)}function ie(L,K){f[L]!==K&&(r.pixelStorei(L,K),f[L]=K)}function ce(L){Z.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ge(L){ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function G(L,K){let $=c.get(K);$===void 0&&($=/* @__PURE__ */ new WeakMap,c.set(K,$));let de=$.get(L);de===void 0&&(de=r.getUniformBlockIndex(K,L.name),r.uniformBlockBinding(K,de,de),$.set(L,de))}function Q(L,K,$){let oe=c.get(K).get(L);l[oe]!==$&&(r.bindBufferBase(r.UNIFORM_BUFFER,oe,$),l[oe]=$)}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},R=null,ne={},h={},l={},d=/* @__PURE__ */ new WeakMap,m=[],x=null,p=!1,g=null,v=null,E=null,y=null,T=null,w=null,_=null,M=new dt(0,0,0),P=0,C=!1,N=null,D=null,V=null,I=null,B=null,Z.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:De,bindFramebuffer:yt,drawBuffers:Ee,useProgram:Ge,setBlending:ft,setMaterial:lt,setFlipSided:Y,setCullFace:je,setLineWidth:Jt,setPolygonOffset:bt,setScissorTest:rt,activeTexture:kt,bindTexture:qt,unbindTexture:U,compressedTexImage2D:mt,compressedTexImage3D:ct,texImage2D:S,texImage3D:z,pixelStorei:ie,getParameter:se,updateUBOMapping:G,uniformBlockBinding:Q,texStorage2D:Fe,texStorage3D:A,texSubImage2D:ze,texSubImage3D:he,compressedTexSubImage2D:pt,compressedTexSubImage3D:Le,scissor:ce,viewport:ge,reset:le}}function _1(r,e,t,n,i,s,a){let o=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=/* @__PURE__ */ new WeakMap,f=/* @__PURE__ */ new Set,h,d=/* @__PURE__ */ new WeakMap,m=/* @__PURE__ */ new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Ga(`canvas`)}function v(A,S,z){let se=1,ie=Fe(A);if((ie.width>z||ie.height>z)&&(se=z/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&A instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&A instanceof ImageBitmap||typeof VideoFrame<`u`&&A instanceof VideoFrame){let ce=Math.floor(se*ie.width),ge=Math.floor(se*ie.height);h===void 0&&(h=g(ce,ge));let G=S?g(ce,ge):h;return G.width=ce,G.height=ge,G.getContext(`2d`).drawImage(A,0,0,ce,ge),Be(`WebGLRenderer: Texture has been resized from (`+ie.width+`x`+ie.height+`) to (`+ce+`x`+ge+`).`),G}else return`data`in A&&Be(`WebGLRenderer: Image in DataTexture is too big (`+ie.width+`x`+ie.height+`).`),A;return A}function E(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(A,S,z,se,ie,ce=!1){if(A!==null){if(r[A]!==void 0)return r[A];Be(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+A+`'`)}let ge;se&&(ge=e.get(`EXT_texture_norm16`),ge||Be(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let G=S;if(S===r.RED&&(z===r.FLOAT&&(G=r.R32F),z===r.HALF_FLOAT&&(G=r.R16F),z===r.UNSIGNED_BYTE&&(G=r.R8),z===r.UNSIGNED_SHORT&&ge&&(G=ge.R16_EXT),z===r.SHORT&&ge&&(G=ge.R16_SNORM_EXT)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.R8UI),z===r.UNSIGNED_SHORT&&(G=r.R16UI),z===r.UNSIGNED_INT&&(G=r.R32UI),z===r.BYTE&&(G=r.R8I),z===r.SHORT&&(G=r.R16I),z===r.INT&&(G=r.R32I)),S===r.RG&&(z===r.FLOAT&&(G=r.RG32F),z===r.HALF_FLOAT&&(G=r.RG16F),z===r.UNSIGNED_BYTE&&(G=r.RG8),z===r.UNSIGNED_SHORT&&ge&&(G=ge.RG16_EXT),z===r.SHORT&&ge&&(G=ge.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RG8UI),z===r.UNSIGNED_SHORT&&(G=r.RG16UI),z===r.UNSIGNED_INT&&(G=r.RG32UI),z===r.BYTE&&(G=r.RG8I),z===r.SHORT&&(G=r.RG16I),z===r.INT&&(G=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RGB8UI),z===r.UNSIGNED_SHORT&&(G=r.RGB16UI),z===r.UNSIGNED_INT&&(G=r.RGB32UI),z===r.BYTE&&(G=r.RGB8I),z===r.SHORT&&(G=r.RGB16I),z===r.INT&&(G=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),z===r.UNSIGNED_INT&&(G=r.RGBA32UI),z===r.BYTE&&(G=r.RGBA8I),z===r.SHORT&&(G=r.RGBA16I),z===r.INT&&(G=r.RGBA32I)),S===r.RGB&&(z===r.UNSIGNED_SHORT&&ge&&(G=ge.RGB16_EXT),z===r.SHORT&&ge&&(G=ge.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),S===r.RGBA){let Q=ce?Zo:it.getTransfer(ie);z===r.FLOAT&&(G=r.RGBA32F),z===r.HALF_FLOAT&&(G=r.RGBA16F),z===r.UNSIGNED_BYTE&&(G=Q===vt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ge&&(G=ge.RGBA16_EXT),z===r.SHORT&&ge&&(G=ge.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get(`EXT_color_buffer_float`),G}function _(A,S){let z;return A?S===null||S===Vi||S===qs?z=r.DEPTH24_STENCIL8:S===Gi?z=r.DEPTH32F_STENCIL8:S===eo&&(z=r.DEPTH24_STENCIL8,Be(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):S===null||S===Vi||S===qs?z=r.DEPTH_COMPONENT24:S===Gi?z=r.DEPTH_COMPONENT32F:S===eo&&(z=r.DEPTH_COMPONENT16),z}function M(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==Jn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),x.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function N(A){V(A.target)}function D(A){I(A.target)}function V(A){A.removeEventListener(`dispose`,N),C(A),H(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function I(A){A.removeEventListener(`dispose`,D),C(A),te(A)}function B(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):V(S))}m.clear(),f.clear()}function H(A){let S=n.get(A);if(S.__webglInit===void 0)return;let z=A.source,se=d.get(z);if(se){let ie=se[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(A),Object.keys(se).length===0&&d.delete(z)}n.remove(A)}function F(A){let S=n.get(A);r.deleteTexture(S.__webglTexture);let z=A.source,se=d.get(z);delete se[S.__cacheKey],a.memory.textures--}function te(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&V(z),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let ce=0;ce<S.__webglFramebuffer[ie].length;ce++)r.deleteFramebuffer(S.__webglFramebuffer[ie][ce]);else r.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)r.deleteFramebuffer(S.__webglFramebuffer[ie]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let se=A.textures;for(let ie=0,ce=se.length;ie<ce;ie++){let ge=n.get(se[ie]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(se[ie])}n.remove(A)}let W=0;function R(){W=0}function ne(){return W}function Se(A){W=A}function Ue(){let A=W;return A>=i.maxTextures&&Be(`WebGLTextures: Trying to use `+(A+1)+` texture units while this GPU supports only `+i.maxTextures),W+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ue(A,S){let z=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let se=A.image;if(se===null)Be(`WebGLRenderer: Texture marked for update but no image data found.`);else if(se.complete===!1)Be(`WebGLRenderer: Texture marked for update but image is incomplete`);else{lt(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function ye(A,S){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){lt(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function be(A,S){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){lt(z,A,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function me(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Y(z,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}let De={[Va]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[$c]:r.MIRRORED_REPEAT},yt={[mn]:r.NEAREST,[Zg]:r.NEAREST_MIPMAP_NEAREST,[ul]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Mu]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},Ee={[Qg]:r.NEVER,[If]:r.ALWAYS,[jg]:r.LESS,[Rf]:r.LEQUAL,[e_]:r.EQUAL,[Pf]:r.GEQUAL,[t_]:r.GREATER,[n_]:r.NOTEQUAL};function Ge(A,S){if(S.type===Gi&&e.has(`OES_texture_float_linear`)===!1&&(S.magFilter===Jn||S.magFilter===Mu||S.magFilter===ul||S.magFilter===Lr||S.minFilter===Jn||S.minFilter===Mu||S.minFilter===ul||S.minFilter===Lr)&&Be(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),r.texParameteri(A,r.TEXTURE_WRAP_S,De[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,De[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,De[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,yt[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,yt[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(S.magFilter===mn||S.minFilter!==ul&&S.minFilter!==Lr||S.type===Gi&&e.has(`OES_texture_float_linear`)===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get(`EXT_texture_filter_anisotropic`);r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener(`dispose`,N),P(S));let se=S.source,ie=d.get(se);ie===void 0&&(ie={},d.set(se,ie));let ce=Z(S);if(ce!==A.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[ce].usedTimes++;let ge=ie[A.__cacheKey];ge!==void 0&&(ie[A.__cacheKey].usedTimes--,ge.usedTimes===0&&F(S)),A.__cacheKey=ce,A.__webglTexture=ie[ce].texture}return z}function Oe(A,S,z){return Math.floor(Math.floor(A/z)/S)}function ft(A,S,z,se){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,z,se,S.data);else{ce.sort((L,K)=>L.start-K.start);let ge=0;for(let L=1;L<ce.length;L++){let K=ce[ge],$=ce[L],de=K.start+K.count,oe=Oe($.start,S.width,4),fe=Oe(K.start,S.width,4);$.start<=de+1&&oe===fe&&Oe($.start+$.count-1,S.width,4)===oe?K.count=Math.max(K.count,$.start+$.count-K.start):(++ge,ce[ge]=$)}ce.length=ge+1;let G=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let L=0,K=ce.length;L<K;L++){let $=ce[L],de=Math.floor($.start/4),oe=Math.ceil($.count/4),fe=de%S.width,ae=Math.floor(de/S.width),pe=oe;t.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae),t.texSubImage2D(r.TEXTURE_2D,0,fe,ae,pe,1,z,se,S.data)}A.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,G),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function lt(A,S,z){let se=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=r.TEXTURE_3D);let ie=Ie(A,S),ce=S.source;t.bindTexture(se,A.__webglTexture,r.TEXTURE0+z);let ge=n.get(ce);if(ce.version!==ge.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<`u`&&S.image instanceof ImageBitmap)===!1){let re=it.getPrimaries(it.workingColorSpace),j=S.colorSpace===Nr?null:it.getPrimaries(S.colorSpace),_e=S.colorSpace===Nr||re===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=v(S.image,!1,i.maxTextureSize);Q=Le(S,Q);let le=s.convert(S.format,S.colorSpace),L=s.convert(S.type),K=w(S.internalFormat,le,L,S.normalized,S.colorSpace,S.isVideoTexture);Ge(se,S);let $,de=S.mipmaps,oe=S.isVideoTexture!==!0,fe=ge.__version===void 0||ie===!0,ae=ce.dataReady,pe=M(S,Q);if(S.isDepthTexture)K=_(S.format===Dr,S.type),fe&&(oe?t.texStorage2D(r.TEXTURE_2D,1,K,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,K,Q.width,Q.height,0,le,L,null));else if(S.isDataTexture)if(de.length>0){oe&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,K,de[0].width,de[0].height);for(let re=0,j=de.length;re<j;re++)$=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,$.width,$.height,le,L,$.data):t.texImage2D(r.TEXTURE_2D,re,K,$.width,$.height,0,le,L,$.data);S.generateMipmaps=!1}else oe?(fe&&t.texStorage2D(r.TEXTURE_2D,pe,K,Q.width,Q.height),ae&&ft(S,Q,le,L)):t.texImage2D(r.TEXTURE_2D,0,K,Q.width,Q.height,0,le,L,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,K,de[0].width,de[0].height,Q.depth);for(let re=0,j=de.length;re<j;re++)if($=de[re],S.format!==Wi)if(le!==null)if(oe){if(ae)if(S.layerUpdates.size>0){let _e=Bf($.width,$.height,S.format,S.type);for(let ee of S.layerUpdates){let Te=$.data.subarray(ee*_e/$.data.BYTES_PER_ELEMENT,(ee+1)*_e/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ee,$.width,$.height,1,le,Te)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,Q.depth,le,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,K,$.width,$.height,Q.depth,0,$.data,0,0);else Be(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else oe?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,Q.depth,le,L,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,K,$.width,$.height,Q.depth,0,le,L,$.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{oe&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,K,de[0].width,de[0].height);for(let re=0,j=de.length;re<j;re++)$=de[re],S.format!==Wi?le!==null?oe?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(r.TEXTURE_2D,re,K,$.width,$.height,0,$.data):Be(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,$.width,$.height,le,L,$.data):t.texImage2D(r.TEXTURE_2D,re,K,$.width,$.height,0,le,L,$.data)}else if(S.isDataArrayTexture)if(oe){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,K,Q.width,Q.height,Q.depth),ae)if(S.layerUpdates.size>0){let re=Bf(Q.width,Q.height,S.format,S.type);for(let j of S.layerUpdates){let _e=Q.data.subarray(j*re/Q.data.BYTES_PER_ELEMENT,(j+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,L,_e)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,K,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(S.isData3DTexture)oe?(fe&&t.texStorage3D(r.TEXTURE_3D,pe,K,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)):t.texImage3D(r.TEXTURE_3D,0,K,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(S.isFramebufferTexture){if(fe)if(oe)t.texStorage2D(r.TEXTURE_2D,pe,K,Q.width,Q.height);else{let re=Q.width,j=Q.height;for(let _e=0;_e<pe;_e++)t.texImage2D(r.TEXTURE_2D,_e,K,re,j,0,le,L,null),re>>=1,j>>=1}}else if(S.isHTMLTexture){if(`texElementImage2D`in r){let re=r.canvas;if(re.hasAttribute(`layoutsubtree`)||re.setAttribute(`layoutsubtree`,`true`),Q.parentNode!==re){re.appendChild(Q),f.add(S),re.onpaint=j=>{let _e=j.changedElements;for(let ee of f)_e.includes(ee.image)&&(ee.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let _e=r.RGBA,ee=r.RGBA,Te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_e,ee,Te,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&fe){let re=Fe(de[0]);t.texStorage2D(r.TEXTURE_2D,pe,K,re.width,re.height)}for(let re=0,j=de.length;re<j;re++)$=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,L,$):t.texImage2D(r.TEXTURE_2D,re,K,le,L,$);S.generateMipmaps=!1}else if(oe){if(fe){let re=Fe(Q);t.texStorage2D(r.TEXTURE_2D,pe,K,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,L,Q)}else t.texImage2D(r.TEXTURE_2D,0,K,le,L,Q);E(S)&&S.mipmapsAutoUpdate===!0&&y(se),ge.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,z){if(S.image.length!==6)return;let se=Ie(A,S),ie=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);let ce=n.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(r.TEXTURE0+z);let ge=it.getPrimaries(it.workingColorSpace),G=S.colorSpace===Nr?null:it.getPrimaries(S.colorSpace),Q=S.colorSpace===Nr||ge===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let le=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ee=0;ee<6;ee++)!le&&!L?K[ee]=v(S.image[ee],!0,i.maxCubemapSize):K[ee]=L?S.image[ee].image:S.image[ee],K[ee]=Le(S,K[ee]);let $=K[0],de=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),fe=w(S.internalFormat,de,oe,S.normalized,S.colorSpace),ae=S.isVideoTexture!==!0,pe=ce.__version===void 0||se===!0,re=ie.dataReady,j=M(S,$);Ge(r.TEXTURE_CUBE_MAP,S);let _e;if(S.isDepthTexture){if(fe=_(S.format===Dr,S.type),pe)if(ae)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,fe,$.width,$.height);else for(let ee=0;ee<6;ee++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,fe,$.width,$.height,0,de,oe,null)}else if(le){ae&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,j,fe,$.width,$.height);for(let ee=0;ee<6;ee++){_e=K[ee].mipmaps;for(let Te=0;Te<_e.length;Te++){let et=_e[Te];S.format!==Wi?de!==null?ae?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,et.width,et.height,de,et.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,fe,et.width,et.height,0,et.data):Be(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,et.width,et.height,de,oe,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,fe,et.width,et.height,0,de,oe,et.data)}}}else{if(_e=S.mipmaps,ae&&pe){_e.length>0&&j++;let ee=Fe(K[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,j,fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(L){ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,K[ee].width,K[ee].height,de,oe,K[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,fe,K[ee].width,K[ee].height,0,de,oe,K[ee].data);for(let Te=0;Te<_e.length;Te++){let He=_e[Te].image[ee].image;ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,He.width,He.height,de,oe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,fe,He.width,He.height,0,de,oe,He.data)}}else{ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de,oe,K[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,fe,de,oe,K[ee]);for(let Te=0;Te<_e.length;Te++){let et=_e[Te];ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,de,oe,et.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,fe,de,oe,et.image[ee])}}}E(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ce.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function je(A,S,z,se,ie,ce){let ge=s.convert(z.format,z.colorSpace),G=s.convert(z.type),Q=w(z.internalFormat,ge,G,z.normalized,z.colorSpace),le=n.get(S),L=n.get(z);if(L.__renderTarget=S,!le.__hasExternalTextures){let K=Math.max(1,S.width>>ce),$=Math.max(1,S.height>>ce);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,Q,K,$,S.depth,0,ge,G,null):t.texImage2D(ie,ce,Q,K,$,0,ge,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),he(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ie,L.__webglTexture,0,ze(S)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ie,L.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(A,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){let se=S.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=_(S.stencilBuffer,ie),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;he(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(S),ce,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(S),ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ce,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,A)}else{let se=S.textures;for(let ie=0;ie<se.length;ie++){let ce=se[ie],ge=s.convert(ce.format,ce.colorSpace),G=s.convert(ce.type),Q=w(ce.internalFormat,ge,G,ce.normalized,ce.colorSpace);he(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(S),Q,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(S),Q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Q,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(A,S,z){let se=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let ie=n.get(S.depthTexture);ie.__renderTarget=S;let ce=se?S.depthTexture.image[0]:S.depthTexture.image;(!ie.__webglTexture||ce.width!==S.width||ce.height!==S.height)&&(ce.width=S.width,ce.height=S.height,S.depthTexture.needsUpdate=!0),se?me(S.depthTexture,0):ue(S.depthTexture,0);let ge=ie.__webglTexture,G=ze(S),Q=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,le=S.depthTexture.format===Dr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Rr)he(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,ge,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,ge,0);else if(S.depthTexture.format===Dr)he(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,ge,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,ge,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function rt(A){let S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener(`dispose`,ie)};se.addEventListener(`dispose`,ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=se}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)bt(S.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?bt(S.__webglFramebuffer[0],A,0):bt(S.__webglFramebuffer,A,0);else if(z){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=r.createRenderbuffer(),Jt(S.__webglDepthbuffer[se],A,!1);else{let ie=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Jt(S.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,ce)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(A,S,z){let se=n.get(A);S!==void 0&&je(se.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&rt(A)}function qt(A){let S=A.texture,z=n.get(A),se=n.get(S);A.addEventListener(`dispose`,D),P(A);let ie=A.textures,ce=A.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=S.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let G=0;G<6;G++)if(S.mipmaps.length>0){z.__webglFramebuffer[G]=[];for(let Q=0;Q<S.mipmaps.length;Q++)z.__webglFramebuffer[G][Q]=r.createFramebuffer()}else z.__webglFramebuffer[G]=r.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let G=0;G<S.mipmaps.length;G++)z.__webglFramebuffer[G]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ge)for(let G=0,Q=ie.length;G<Q;G++){let le=n.get(ie[G]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){let Q=ie[G];z.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[G]);let le=s.convert(Q.format,Q.colorSpace),L=s.convert(Q.type),K=w(Q.internalFormat,le,L,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),$=ze(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,K,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,z.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Jt(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,S);for(let G=0;G<6;G++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)je(z.__webglFramebuffer[G][Q],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,Q);else je(z.__webglFramebuffer[G],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);E(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let G=0,Q=ie.length;G<Q;G++){let le=ie[G],L=n.get(le),K=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,L.__webglTexture),Ge(K,le),je(z.__webglFramebuffer,A,le,r.COLOR_ATTACHMENT0+G,K,0),E(le)&&y(K)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(G,se.__webglTexture),Ge(G,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)je(z.__webglFramebuffer[Q],A,S,r.COLOR_ATTACHMENT0,G,Q);else je(z.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,G,0);E(S)?y(G):S.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&rt(A)}function U(A){let S=A.textures;for(let z=0,se=S.length;z<se;z++){let ie=S[z];if(E(ie)&&ie.mipmapsAutoUpdate===!0){let ce=T(A),ge=n.get(ie).__webglTexture;t.bindTexture(ce,ge),y(ce),t.unbindTexture()}}}let mt=[];function ct(A){if(A.samples>0){if(he(A)===!1){let S=A.textures,z=A.width,se=A.height,ie=r.COLOR_BUFFER_BIT,ce=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(A),G=S.length>1;if(G)for(let le=0;le<S.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let le=0;le<S.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let L=n.get(S[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,z,se,0,0,z,se,ie,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&mt.push(ce),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let le=0;le<S.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let L=n.get(S[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ze(A){return Math.min(i.maxSamples,A.samples)}function he(A){let S=n.get(A);return A.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&S.__useRenderToTexture!==!1}function pt(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function Le(A,S){let z=A.colorSpace,se=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yo&&z!==Nr&&(it.getTransfer(z)===vt?(se!==Wi||ie!==xi)&&Be(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ke(`WebGLTextures: Unsupported texture color space:`,z)),S}function Fe(A){return typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<`u`&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=R,this.getTextureUnits=ne,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=ye,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=kt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=he,this.dispose=B}function x1(r,e){function t(n,i=Nr){let s,a=it.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===Tu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sf)return r.BYTE;if(n===Mf)return r.SHORT;if(n===eo)return r.UNSIGNED_SHORT;if(n===bu)return r.INT;if(n===Vi)return r.UNSIGNED_INT;if(n===Gi)return r.FLOAT;if(n===Hi)return r.HALF_FLOAT;if(n===wf)return r.ALPHA;if(n===Ef)return r.RGB;if(n===Wi)return r.RGBA;if(n===Rr)return r.DEPTH_COMPONENT;if(n===Dr)return r.DEPTH_STENCIL;if(n===Af)return r.RED;if(n===Eu)return r.RED_INTEGER;if(n===hs)return r.RG;if(n===Au)return r.RG_INTEGER;if(n===Cu)return r.RGBA_INTEGER;if(n===hl||n===dl||n===fl||n===pl)if(a===vt)if(s=e.get(`WEBGL_compressed_texture_s3tc_srgb`),s!==null){if(n===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get(`WEBGL_compressed_texture_s3tc`),s!==null){if(n===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Pu||n===Iu||n===Lu)if(s=e.get(`WEBGL_compressed_texture_pvrtc`),s!==null){if(n===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Nu||n===Ou||n===Uu||n===Fu||n===ml||n===Bu)if(s=e.get(`WEBGL_compressed_texture_etc`),s!==null){if(n===Du||n===Nu)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ou)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uu)return s.COMPRESSED_R11_EAC;if(n===Fu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ml)return s.COMPRESSED_RG11_EAC;if(n===Bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ku||n===zu||n===Vu||n===Gu||n===Hu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===Ju||n===$u||n===Ku||n===Qu)if(s=e.get(`WEBGL_compressed_texture_astc`),s!==null){if(n===ku)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ju)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ku)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ju||n===eh||n===th)if(s=e.get(`EXT_texture_compression_bptc`),s!==null){if(n===ju)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ih||n===gl||n===rh)if(s=e.get(`EXT_texture_compression_rgtc`),s!==null){if(n===nh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;var Yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sr({vertexShader:v1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gi(new sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Zf=class extends ir{constructor(e,t){super();let n=this,i=null,s=1,a=null,o=`local-floor`,l=1,c=null,u=null,f=null,h=null,d=null,m=null,x=typeof XRWebGLBinding<`u`,p=new Yf,g={},v=t.getContextAttributes(),E=null,y=null,T=[],w=[],_=new ht,M=null,P=null,C=new Yn;C.viewport=new Bt;let N=new Yn;N.viewport=new Bt;let D=[C,N],V=new vu,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Xa,T[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Xa,T[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Xa,T[Z]=ue),ue.getHandSpace()};function H(Z){let ue=w.indexOf(Z.inputSource);if(ue===-1)return;let ye=T[ue];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener(`select`,H),i.removeEventListener(`selectstart`,H),i.removeEventListener(`selectend`,H),i.removeEventListener(`squeeze`,H),i.removeEventListener(`squeezestart`,H),i.removeEventListener(`squeezeend`,H),i.removeEventListener(`end`,F),i.removeEventListener(`inputsourceschange`,te);for(let Z=0;Z<T.length;Z++){let ue=w[Z];ue!==null&&(w[Z]=null,T[Z].disconnect(ue))}I=null,B=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(E),d=null,h=null,f=null,i=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Be(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Be(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(E=e.getRenderTarget(),i.addEventListener(`select`,H),i.addEventListener(`selectstart`,H),i.addEventListener(`selectend`,H),i.addEventListener(`squeeze`,H),i.addEventListener(`squeezestart`,H),i.addEventListener(`squeezeend`,H),i.addEventListener(`end`,F),i.addEventListener(`inputsourceschange`,te),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&`createProjectionLayer`in XRWebGLBinding.prototype){let ye=null,be=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?Dr:Rr,be=v.stencil?qs:Vi);let De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(De),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new mi(h.textureWidth,h.textureHeight,{format:Wi,type:xi,depthTexture:new Ir(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new mi(d.framebufferWidth,d.framebufferHeight,{format:Wi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let ue=0;ue<Z.removed.length;ue++){let ye=Z.removed[ue],be=w.indexOf(ye);be>=0&&(w[be]=null,T[be].disconnect(ye))}for(let ue=0;ue<Z.added.length;ue++){let ye=Z.added[ue],be=w.indexOf(ye);if(be===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(ye),be=De;break}else if(w[De]===null){w[De]=ye,be=De;break}if(be===-1)break}let me=T[be];me&&me.connect(ye)}}function W(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ue=Z.near,ye=Z.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),V.near=N.near=C.near=ue,V.far=N.far=C.far=ye,(I!==V.near||B!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,B=V.far),V.layers.mask=Z.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let be=Z.parent,me=V.cameras;W(V,be);for(let De=0;De<me.length;De++)W(me[De],be);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),R(Z,V,be)};function R(Z,ue,ye){ye===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Z){return g[Z]};let ne=null;function Se(Z,ue){if(u=ue.getViewerPose(c||a),m=ue,u!==null){let ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let be=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,be=!0);for(let Ee=0;Ee<ye.length;Ee++){let Ge=ye[Ee],Ie=null;if(d!==null)Ie=d.getViewport(Ge);else{let ft=f.getViewSubImage(h,Ge);Ie=ft.viewport,Ee===0&&(e.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(y))}let Oe=D[Ee];Oe===void 0&&(Oe=new Yn,Oe.layers.enable(Ee),Oe.viewport=new Bt,D[Ee]=Oe),Oe.matrix.fromArray(Ge.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ge.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ee===0&&(V.matrix.copy(Oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),be===!0&&V.cameras.push(Oe)}let me=i.enabledFeatures;if(me&&me.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&x){f=n.getBinding();let Ee=f.getDepthInformation(ye[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(me&&me.includes(`camera-access`)&&x){e.state.unbindTexture(),f=n.getBinding();for(let Ee=0;Ee<ye.length;Ee++){let Ge=ye[Ee].camera;if(Ge){let Ie=g[Ge];Ie||(Ie=new il,g[Ge]=Ie);let Oe=f.getCameraImage(Ge);Ie.sourceTexture=Oe}}}}for(let ye=0;ye<T.length;ye++){let be=w[ye],me=T[ye];be!==null&&me!==void 0&&me.update(be,ue,c||a)}ne&&ne(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:ue}),m=null}let Ue=new N_;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}};var S1=new Xt;var W_=new Ve;W_.set(-1,0,0,0,1,0,0,0,1);function M1(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Of(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(W_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,e,t,n){let i={},s={};function a(v,E){let y=E.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,E){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener(`dispose`,p));let T=E.program;n.updateUBOMapping(v,T);let w=e.render.frame;s[v.id]!==w&&(c(v),s[v.id]=w)}function l(v){let E=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),E}function c(v){let E=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){let M=y[w];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)u(M[P],w,P,T);else u(M,w,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,E,y,T){if(h(v,E,y,T)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let C=_[P],N=x(C,!0);f(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function f(v,E,y){typeof v==`number`||typeof v==`boolean`?E[y]=v:v.isMatrix3?(E[y]=v.elements[0],E[y+1]=v.elements[1],E[y+2]=v.elements[2],E[y+3]=0,E[y+4]=v.elements[3],E[y+5]=v.elements[4],E[y+6]=v.elements[5],E[y+7]=0,E[y+8]=v.elements[6],E[y+9]=v.elements[7],E[y+10]=v.elements[8],E[y+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-y),y):v.toArray(E,y)}function h(v,E,y,T){let w=v.value,_=E+`_`+y;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let M=T[_],P=!1;for(let C=0;C<w.length;C++)d(w[C],M,C)===!0&&(P=!0);return P}return d(w,T,_)}function d(v,E,y){if(E[y]===void 0)return typeof v==`number`||typeof v==`boolean`?E[y]=v:ArrayBuffer.isView(v)?E[y]=v.slice():E[y]=v.clone(),!0;{let T=E[y];if(typeof v==`number`||typeof v==`boolean`){if(T!==v)return E[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let E=v.uniforms,y=0,T=16;for(let _=0,M=E.length;_<M;_++){let P=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,N=P.length;C<N;C++){let D=P[C],V=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[_])||Array.isArray(D.value),B=y;for(let F=0,te=V.length;F<te;F++){let W=V[F],R=x(W,I),ne=y%T,Se=ne%R.boundary,Ue=ne+Se;y+=Se,Ue!==0&&T-Ue<R.storage&&(y+=T-Ue),F===0&&(B=y),y+=R.storage}D.__data=new(D.type===`int`?Int32Array:D.type===`uint`?Uint32Array:Float32Array)((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}let w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function x(v,E){let y={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Be(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Be(`WebGLRenderer: Unsupported uniform value type.`,v),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let E=v.target;E.removeEventListener(`dispose`,p),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var T1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var lr=null;function w1(){return lr===null&&(lr=new iu(T1,16,16,hs,Hi),lr.name=`DFG_LUT`,lr.minFilter=Jn,lr.magFilter=Jn,lr.wrapS=tr,lr.wrapT=tr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}var lh=class{constructor(e={}){let{canvas:t=r_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=xi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let x=d,p=/* @__PURE__ */ new Set([Cu,Au,Eu]),g=/* @__PURE__ */ new Set([xi,Vi,eo,qs,Tu,wu]),v=/* @__PURE__ */ new Uint32Array(4),E=/* @__PURE__ */ new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,V=null,I=null,B=null;this._outputColorSpace=qn;let H=0,F=0,te=null,W=-1,R=null,ne=new Bt,Se=new Bt,Ue=null,Z=new dt(0),ue=0,ye=t.width,be=t.height,me=1,De=null,yt=null,Ee=new Bt(0,0,ye,be),Ge=new Bt(0,0,ye,be),Ie=!1,Oe=new Gs,ft=new ru,lt=!1,Y=!1,je=new Xt,Jt=new J,bt=new Bt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function qt(){return te===null?me:1}let U=n;function mt(b,O){return t.getContext(b,O)}let ct,ze,he,pt,Le,Fe,A,S,z,se,ie,ce,ge,G,Q,le,L,K,$,de,oe,fe,ae;try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,j,!1),t.addEventListener(`webglcontextrestored`,_e,!1),t.addEventListener(`webglcontextcreationerror`,ee,!1),U===null){let O=`webgl2`;if(U=mt(O,b),U===null)throw mt(O)?/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}pe()}catch(b){throw t.removeEventListener(`webglcontextlost`,j,!1),t.removeEventListener(`webglcontextrestored`,_e,!1),t.removeEventListener(`webglcontextcreationerror`,ee,!1),ke(`WebGLRenderer: `+b.message),b}function pe(){ct=new UM(U),ct.init(),oe=new x1(U,ct),ze=new wM(U,ct,e,oe),he=new g1(U,ct),ze.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),pt=new kM(U),Le=new n1,Fe=new _1(U,ct,he,Le,ze,oe,pt),A=new OM(C),S=new Vv(U),fe=new bM(U,S),z=new FM(U,S,pt,fe),se=new VM(U,z,S,fe,pt),K=new zM(U,ze,Fe),Q=new EM(Le),ie=new t1(C,A,ct,ze,fe,Q),ce=new M1(C,Le),ge=new r1,G=new u1(ct),L=new MM(C,A,he,se,m,l),le=new m1(C,se,ze),ae=new b1(U,pt,ze,he),$=new TM(U,ct,pt),de=new BM(U,ct,pt),pt.programs=ie.programs,C.capabilities=ze,C.extensions=ct,C.properties=Le,C.renderLists=ge,C.shadowMap=le,C.state=he,C.info=pt}x!==xi&&(P=new HM(x,t.width,t.height,o,i,s));let re=new Zf(C,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=ct.get(`WEBGL_lose_context`);b&&b.loseContext()},this.forceContextRestore=function(){let b=ct.get(`WEBGL_lose_context`);b&&b.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(b){b!==void 0&&(me=b,this.setSize(ye,be,!1))},this.getSize=function(b){return b.set(ye,be)},this.setSize=function(b,O,q=!0){if(re.isPresenting){Be(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=b,be=O,t.width=Math.floor(b*me),t.height=Math.floor(O*me),q===!0&&(t.style.width=b+`px`,t.style.height=O+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(ye*me,be*me).floor()},this.setDrawingBufferSize=function(b,O,q){ye=b,be=O,me=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(x===xi){ke(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Be(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,O,q,k){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,O,q,k),he.viewport(ne.copy(Ee).multiplyScalar(qt()).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,O,q,k){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,O,q,k),he.scissor(Se.copy(Ge).multiplyScalar(qt()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){he.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,q=!0){let k=0;if(b){let X=!1;if(te!==null){let ve=te.texture.format;X=p.has(ve)}if(X){let ve=te.texture.type,Ce=g.has(ve),xe=L.getClearColor(),we=L.getClearAlpha(),Ne=xe.r,We=xe.g,tt=xe.b;Ce?(v[0]=Ne,v[1]=We,v[2]=tt,v[3]=we,U.clearBufferuiv(U.COLOR,0,v)):(E[0]=Ne,E[1]=We,E[2]=tt,E[3]=we,U.clearBufferiv(U.COLOR,0,E))}else k|=U.COLOR_BUFFER_BIT}O&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener(`webglcontextlost`,j,!1),t.removeEventListener(`webglcontextrestored`,_e,!1),t.removeEventListener(`webglcontextcreationerror`,ee,!1),L.dispose(),ge.dispose(),G.dispose(),Fe.dispose(),Le.dispose(),A.dispose(),se.dispose(),z.dispose(),fe.dispose(),ae.dispose(),ie.dispose(),re.dispose(),re.removeEventListener(`sessionstart`,Tt),re.removeEventListener(`sessionend`,_t),nn.stop()};function j(b){b.preventDefault(),Df(`WebGLRenderer: Context Lost.`),N=!0}function _e(){Df(`WebGLRenderer: Context Restored.`),N=!1;let b=pt.autoReset,O=le.enabled,q=le.autoUpdate,k=le.needsUpdate,X=le.type;pe(),pt.autoReset=b,le.enabled=O,le.autoUpdate=q,le.needsUpdate=k,le.type=X}function ee(b){ke(`WebGLRenderer: A WebGL context could not be created. Reason: `,b.statusMessage)}function Te(b){let O=b.target;O.removeEventListener(`dispose`,Te),et(O)}function et(b){He(b),Le.remove(b)}function He(b){let O=Le.get(b).programs;O!==void 0&&(O.forEach(function(q){ie.releaseProgram(q)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,k,X,ve){O===null&&(O=rt);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=vi(b,O,q,k,X);he.setMaterial(k,Ce);let we=q.index,Ne=1;if(k.wireframe===!0){if(we=z.getWireframeAttribute(q),we===void 0)return;Ne=2}let We=q.drawRange,tt=q.attributes.position,Re=We.start*Ne,nt=(We.start+We.count)*Ne;ve!==null&&(Re=Math.max(Re,ve.start*Ne),nt=Math.min(nt,(ve.start+ve.count)*Ne)),we!==null?(Re=Math.max(Re,0),nt=Math.min(nt,we.count)):tt!=null&&(Re=Math.max(Re,0),nt=Math.min(nt,tt.count));let Qt=nt-Re;if(Qt<0||Qt===1/0)return;fe.setup(X,k,xe,q,we);let Ct,Et=$;if(we!==null&&(Ct=S.get(we),Et=de,Et.setIndex(Ct)),X.isMesh)k.wireframe===!0?(he.setLineWidth(k.wireframeLinewidth*qt()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(X.isLine){let Tn=k.linewidth;Tn===void 0&&(Tn=1),he.setLineWidth(Tn*qt()),X.isLineSegments?Et.setMode(U.LINES):X.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else X.isPoints?Et.setMode(U.POINTS):X.isSprite&&Et.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(ct.get(`WEBGL_multi_draw`))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Tn=X._multiDrawStarts,Pe=X._multiDrawCounts,Fn=X._multiDrawCount,gt=we?S.get(we).bytesPerElement:1,ds=Le.get(k).currentProgram.getUniforms();for(let wn=0;wn<Fn;wn++)ds.setValue(U,`_gl_DrawID`,wn),Et.render(Tn[wn]/gt,Pe[wn])}else if(X.isInstancedMesh)Et.renderInstances(Re,Qt,X.count);else if(q.isInstancedBufferGeometry){let Tn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,Tn);Et.renderInstances(Re,Qt,Pe)}else Et.render(Re,Qt)};function It(b,O,q,k){D!==null&&b.isNodeMaterial&&D.setObject(k,b),lt===!0&&Q.setState(b,q,!1),b.transparent===!0&&b.side===ar&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,si(b,O,k),b.side=us,b.needsUpdate=!0,si(b,O,k),b.side=ar):si(b,O,k)}this.compile=function(b,O,q=null){q===null&&(q=b),D!==null&&D.renderStart(b,O,q),w=G.get(q),w.init(O),M.push(w),q.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Y=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Y),lt===!0&&Q.setGlobalState(this.clippingPlanes,O),D!==null&&le.render(w.state.shadowsArray,q,O);let k=/* @__PURE__ */ new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){let xe=ve[Ce];It(xe,q,O,X),k.add(xe)}else It(ve,q,O,X),k.add(ve)}),w=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(b,O,q=null){let k=this.compile(b,O,q);return new Promise(X=>{function ve(){if(k.forEach(function(Ce){let we=Le.get(Ce).currentProgram;(we===void 0||we.isReady())&&k.delete(Ce)}),k.size===0){X(b);return}setTimeout(ve,10)}ct.get(`KHR_parallel_shader_compile`)!==null?ve():setTimeout(ve,10)})};let $t=null;function Lt(b){$t&&$t(b)}function Tt(){nn.stop()}function _t(){nn.start()}let nn=new N_;nn.setAnimationLoop(Lt),typeof self<`u`&&nn.setContext(self),this.setAnimationLoop=function(b){$t=b,re.setAnimationLoop(b),b===null?nn.stop():nn.start()},re.addEventListener(`sessionstart`,Tt),re.addEventListener(`sessionend`,_t),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){ke(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(N===!0)return;D!==null&&D.renderStart(b,O);let q=re.enabled===!0&&re.isPresenting===!0,k=P!==null&&(te===null||q)&&P.begin(C,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,O,te),w=G.get(b,M.length),w.init(O),w.state.textureUnits=Fe.getTextureUnits(),M.push(w),je.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ft.setFromArrayCamera(O):Oe.setFromProjectionMatrix(je,Ri,O.reversedDepth),Y=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Y),T=ge.get(b,_.length),T.init(),_.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&wt(Ce,O,-1/0,C.sortObjects)}wt(b,O,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(De,yt),kt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,kt&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Q.beginShadows();let X=w.state.shadowsArray;if(le.render(X,b,O),lt===!0&&Q.endShadows(),(k&&P.hasRenderPass())===!1){let Ce=T.opaque,xe=T.transmissive;if(w.setupLights(),O.isArrayCamera){let we=O.cameras;if(xe.length>0)for(let Ne=0,We=we.length;Ne<We;Ne++){let tt=we[Ne];ri(Ce,xe,b,tt)}kt&&L.render(b);for(let Ne=0,We=we.length;Ne<We;Ne++){let tt=we[Ne];bn(T,b,tt,tt.viewport)}}else xe.length>0&&ri(Ce,xe,b,O),kt&&L.render(b),bn(T,b,O)}te!==null&&F===0&&(Fe.updateMultisampleRenderTarget(te),Fe.updateRenderTargetMipmap(te)),k&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,O),fe.resetDefaultState(),W=-1,R=null,M.pop(),M.length>0?(w=M[M.length-1],Fe.setTextureUnits(w.state.textureUnits),lt===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,D!==null&&D.renderEnd()};function wt(b,O,q,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ce=O.isArrayCamera?ft:Oe;if(!b.frustumCulled||b.intersectsFrustum(Ce)){k&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);let xe=se.update(b),we=b.material;we.visible&&T.push(b,xe,we,q,bt.z,null,O)}}else if(b.isMesh||b.isLine||b.isPoints){let Ce=O.isArrayCamera?ft:Oe;if(!b.frustumCulled||b.intersectsFrustum(Ce)){let xe=se.update(b),we=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),bt.copy(xe.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(we)){let Ne=xe.groups;for(let We=0,tt=Ne.length;We<tt;We++){let Re=Ne[We],nt=we[Re.materialIndex];nt&&nt.visible&&T.push(b,xe,nt,q,bt.z,Re,O)}}else we.visible&&T.push(b,xe,we,q,bt.z,null,O)}}}let ve=b.children;for(let Ce=0,xe=ve.length;Ce<xe;Ce++)wt(ve[Ce],O,q,k)}function bn(b,O,q,k){let{opaque:X,transmissive:ve,transparent:Ce}=b;w.setupLightsView(q),lt===!0&&Q.setGlobalState(C.clippingPlanes,q),k&&he.viewport(ne.copy(k)),X.length>0&&zt(X,O,q),ve.length>0&&zt(ve,O,q),Ce.length>0&&zt(Ce,O,q),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ri(b,O,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Re=ct.has(`EXT_color_buffer_half_float`)||ct.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[k.id]=new mi(1,1,{generateMipmaps:!0,type:Re?Hi:xi,minFilter:Lr,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ve=w.state.transmissionRenderTarget[k.id],Ce=k.viewport||ne;ve.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),we=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(Z),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),kt&&L.render(q);let We=C.toneMapping;C.toneMapping=or;let tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),lt===!0&&Q.setGlobalState(C.clippingPlanes,k),zt(b,q,k),Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve),ct.has(`WEBGL_multisampled_render_to_texture`)===!1){let Re=!1;for(let nt=0,Qt=O.length;nt<Qt;nt++){let{object:Et,geometry:Tn,material:Pe,group:Fn}=O[nt];if(Pe.side===ar&&Et.layers.test(k.layers)){let gt=Pe.side;Pe.side=Mn,Pe.needsUpdate=!0,Kt(Et,q,k,Tn,Pe,Fn),Pe.side=gt,Pe.needsUpdate=!0,Re=!0}}Re===!0&&(Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve))}C.setRenderTarget(xe,we,Ne),C.setClearColor(Z,ue),tt!==void 0&&(k.viewport=tt),C.toneMapping=We}function zt(b,O,q){let k=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ve=b.length;X<ve;X++){let Ce=b[X],{object:xe,geometry:we,group:Ne}=Ce,We=Ce.material;We.allowOverride===!0&&k!==null&&(We=k),xe.layers.test(q.layers)&&Kt(xe,O,q,we,We,Ne)}}function Kt(b,O,q,k,X,ve){D!==null&&X.isNodeMaterial&&D.setObject(b,X),b.onBeforeRender(C,O,q,k,X,ve),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,O,q,k,b,ve),X.transparent===!0&&X.side===ar&&X.forceSinglePass===!1?(X.side=Mn,X.needsUpdate=!0,C.renderBufferDirect(q,O,k,X,b,ve),X.side=us,X.needsUpdate=!0,C.renderBufferDirect(q,O,k,X,b,ve),X.side=ar):C.renderBufferDirect(q,O,k,X,b,ve),b.onAfterRender(C,O,q,k,X,ve)}function rn(b){let O=0;for(let q of b)q.texture!==null&&O++;return O}function si(b,O,q){O.isScene!==!0&&(O=rt);let k=Le.get(b),X=w.state.lights,ve=w.state.shadowsArray,Ce=X.state.version,xe=ie.getParameters(b,X.state,ve,O,q,w.state.lightProbeGridArray),we=ie.getProgramCacheKey(xe),Ne=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,We),k.envMapRotation=k.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener(`dispose`,Te),Ne=/* @__PURE__ */ new Map,k.programs=Ne,k.programVariants=/* @__PURE__ */ new Map);let tt=Ne.get(we);if(tt!==void 0){if(k.currentProgram===tt&&k.lightsStateVersion===Ce)return Vt(b,xe),tt}else xe.uniforms=ie.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,q,xe),b.onBeforeCompile(xe,C),tt=ie.acquireProgram(xe,we),Ne.set(we,tt),k.uniforms=xe.uniforms;let Re=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Q.uniform),Vt(b,xe),k.needsLights=Ml(b),k.lightsStateVersion=Ce,k.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=rn(w.state.lightProbeGridArray),k.currentProgram=tt,k.uniformsList=null,tt}function Zs(b,O,q,k,X){let ve=Le.get(b),Ce=ve.currentProgram.id+`,`+k+`,`+X,xe=ve.programVariants.get(Ce);return xe===void 0?(xe=si(b,O,q),ve.programVariants.set(Ce,xe)):(ve.currentProgram=xe,ve.uniformsList=null,ve.outputColorSpace=k,ve.toneMapping=X),xe}function sn(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=to.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Vt(b,O){let q=Le.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function vi(b,O,q,k,X){O.isScene!==!0&&(O=rt),Fe.resetTextureUnits();let ve=O.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,xe=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:it.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=A.get(k.envMap||Ce,we),We=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color,Ct=or;k.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ct=C.toneMapping);let Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tn=Et!==void 0?Et.length:0,Pe=Le.get(k),Fn=w.state.lights;if(lt===!0&&(Y===!0||b!==R)){let Nt=b===R&&k.id===W;Q.setState(k,b,Nt)}let gt=!1,ds=!1;k.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Fn.state.version||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ne||k.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==We||Pe.vertexTangents!==tt||Pe.morphTargets!==Re||Pe.morphNormals!==nt||Pe.morphColors!==Qt||Pe.morphTargetsCount!==Tn||Pe.numLightProbeGrids!==rn(w.state.lightProbeGridArray)?gt=!0:(Pe.outputColorSpace!==xe||Pe.toneMapping!==Ct)&&(ds=!0):(gt=!0,Pe.__version=k.version);let wn=Pe.currentProgram;(gt===!0||ds===!0)&&(wn=ds===!0?Zs(k,O,X,xe,Ct):si(k,O,X),D&&k.isNodeMaterial&&D.onUpdateProgram(k,wn,Pe));let bl=!1,Ur=!1,fs=!1,ut=wn.getUniforms(),gn=Pe.uniforms;if(he.useProgram(wn.program)&&(bl=!0,Ur=!0,fs=!0),k.id!==W&&(W=k.id,Ur=!0),bl||R!==b){he.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(U,`projectionMatrix`,b.projectionMatrix),ut.setValue(U,`viewMatrix`,b.matrixWorldInverse);let hn=ut.map.cameraPosition;hn!==void 0&&hn.setValue(U,Jt.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&ut.setValue(U,`logDepthBufFC`,2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(U,`isOrthographic`,b.isOrthographicCamera===!0),R!==b&&(R=b,Ur=!0,fs=!0)}if(Pe.needsLights&&(Fn.state.sunShadowMap.length>0&&ut.setValue(U,`sunShadowMap`,Fn.state.sunShadowMap,Fe),Fn.state.directionalShadowMap.length>0&&ut.setValue(U,`directionalShadowMap`,Fn.state.directionalShadowMap,Fe),Fn.state.spotShadowMap.length>0&&ut.setValue(U,`spotShadowMap`,Fn.state.spotShadowMap,Fe),Fn.state.pointShadowMap.length>0&&ut.setValue(U,`pointShadowMap`,Fn.state.pointShadowMap,Fe)),X.isSkinnedMesh){ut.setOptional(U,X,`bindMatrix`),ut.setOptional(U,X,`bindMatrixInverse`);let Nt=X.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ut.setValue(U,`boneTexture`,Nt.boneTexture,Fe))}X.isBatchedMesh&&(ut.setOptional(U,X,`batchingTexture`),ut.setValue(U,`batchingTexture`,X._matricesTexture,Fe),ut.setOptional(U,X,`batchingIdTexture`),ut.setValue(U,`batchingIdTexture`,X._indirectTexture,Fe),ut.setOptional(U,X,`batchingColorTexture`),X._colorsTexture!==null&&ut.setValue(U,`batchingColorTexture`,X._colorsTexture,Fe));let Ii=q.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&K.update(X,q,wn),(Ur||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,ut.setValue(U,`receiveShadow`,X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=w1()),Ur){if(ut.setValue(U,`toneMappingExposure`,C.toneMappingExposure),Pe.needsLights&&io(gn,fs),ve&&k.fog===!0&&ce.refreshFogUniforms(gn,ve),ce.refreshMaterialUniforms(gn,k,me,be,w.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let Nt=y,hn=0;for(let ur of w.state.lightProbeGridArray)ur.texture!==null&&(Nt.textures[hn]=ur.texture,Nt.min[hn]=ur.boundingBox.min,Nt.max[hn]=ur.boundingBox.max,Nt.resolution[hn]=ur.resolution,hn++);for(let ur in Nt)Nt[ur].length=hn;gn.probesSH.value=Nt.textures,gn.probesMin.value=Nt.min,gn.probesMax.value=Nt.max,gn.probesResolution.value=Nt.resolution}to.upload(U,sn(Pe),gn,Fe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(to.upload(U,sn(Pe),gn,Fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(U,`center`,X.center),ut.setValue(U,`modelViewMatrix`,X.modelViewMatrix),ut.setValue(U,`normalMatrix`,X.normalMatrix),ut.setValue(U,`modelMatrix`,X.matrixWorld),k.uniformsGroups!==void 0){let Nt=k.uniformsGroups;for(let hn=0,ur=Nt.length;hn<ur;hn++){let Jf=Nt[hn];ae.update(Jf,wn),ae.bind(Jf,wn)}}return wn}function io(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,O,q){let k=Le.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Le.get(b.texture).__webglTexture=O,Le.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let q=Le.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){te=b,H=O,F=q;let k=null,X=!1,ve=!1;if(b){let xe=Le.get(b);if(xe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest,he.viewport(ne),he.scissor(Se),he.setScissorTest(Ue),W=-1;return}else if(xe.__webglFramebuffer===void 0)Fe.setupRenderTarget(b);else if(xe.__hasExternalTextures)Fe.rebindTextures(b,Le.get(b.texture).__webglTexture,Le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let We=b.depthTexture;if(xe.__boundDepthTexture!==We){if(We!==null&&Le.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Ne=Le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?k=Ne[O][q]:k=Ne[O],X=!0):b.samples>0&&Fe.useMultisampledRTT(b)===!1?k=Le.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[q]:k=Ne,ne.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest}else ne.copy(Ee).multiplyScalar(me).floor(),Se.copy(Ge).multiplyScalar(me).floor(),Ue=Ie;if(q!==0&&(k=V),he.bindFramebuffer(U.FRAMEBUFFER,k)&&he.drawBuffers(b,k),he.viewport(ne),he.scissor(Se),he.setScissorTest(Ue),X){let xe=Le.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,q)}else if(ve){let xe=O;for(let we=0;we<b.textures.length;we++){let Ne=Le.get(b.textures[we]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+we,Ne.__webglTexture,q,xe)}}else if(b!==null&&q!==0){let xe=Le.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,q)}W=-1};function Or(b){let O=Le.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=ze.textureFormatReadable(b.format),O.__typeReadable=ze.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,q,k,X,ve,Ce,xe=0){if(!(b&&b.isWebGLRenderTarget)){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let we=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){he.bindFramebuffer(U.FRAMEBUFFER,we);try{let Ne=b.textures[xe],We=Ne.format,tt=Ne.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Re=Or(Ne);if(Re.__formatReadable===!1){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(Re.__typeReadable===!1){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}O>=0&&O<=b.width-k&&q>=0&&q<=b.height-X&&U.readPixels(O,q,k,X,oe.convert(We),oe.convert(tt),ve)}finally{let Ne=te!==null?Le.get(te).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,k,X,ve,Ce,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let we=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(O>=0&&O<=b.width-k&&q>=0&&q<=b.height-X){he.bindFramebuffer(U.FRAMEBUFFER,we);let Ne=b.textures[xe],We=Ne.format,tt=Ne.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let Re=Or(Ne);if(Re.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(Re.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(O,q,k,X,oe.convert(We),oe.convert(tt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Qt=te!==null?Le.get(te).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Qt);let Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await a_(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(nt),U.deleteSync(Ct),ve}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(b,O=null,q=0){let k=Math.pow(2,-q),X=Math.floor(b.image.width*k),ve=Math.floor(b.image.height*k),Ce=O!==null?O.x:0,xe=O!==null?O.y:0;Fe.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ce,xe,X,ve),he.unbindTexture()},this.copyTextureToTexture=function(b,O,q=null,k=null,X=0,ve=0){let Ce,xe,we,Ne,We,tt,Re,nt,Qt,Ct=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(q!==null)Ce=q.max.x-q.min.x,xe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,We=q.min.y,tt=q.isBox3?q.min.z:0;else{let ut=Math.pow(2,-X);Ce=Math.floor(Ct.width*ut),xe=Math.floor(Ct.height*ut),b.isDataArrayTexture?we=Ct.depth:b.isData3DTexture?we=Math.floor(Ct.depth*ut):we=1,Ne=0,We=0,tt=0}k!==null?(Re=k.x,nt=k.y,Qt=k.z):(Re=0,nt=0,Qt=0);let Et=oe.convert(O.format),Tn=oe.convert(O.type),Pe;O.isData3DTexture?(Fe.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Fe.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(Fe.setTexture2D(O,0),Pe=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Fn=he.getParameter(U.UNPACK_ROW_LENGTH),gt=he.getParameter(U.UNPACK_IMAGE_HEIGHT),ds=he.getParameter(U.UNPACK_SKIP_PIXELS),wn=he.getParameter(U.UNPACK_SKIP_ROWS),bl=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),he.pixelStorei(U.UNPACK_SKIP_ROWS,We),he.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);let Ur=b.isDataArrayTexture||b.isData3DTexture,fs=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let ut=Le.get(b),gn=Le.get(O),Ii=Le.get(ut.__renderTarget),Nt=Le.get(gn.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,Ii.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let hn=0;hn<we;hn++)Ur&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(b).__webglTexture,X,tt+hn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(O).__webglTexture,ve,Qt+hn)),U.blitFramebuffer(Ne,We,Ne+Ce,We+xe,Re,nt,Re+Ce,nt+xe,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Le.has(b)){let ut=Le.get(b),gn=Le.get(O);he.bindFramebuffer(U.READ_FRAMEBUFFER,I),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Ii=0;Ii<we;Ii++)Ur?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,X,tt+Ii):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,X),fs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,ve,Qt+Ii):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,ve),X!==0?U.blitFramebuffer(Ne,We,Ne+Ce,We+xe,Re,nt,Re+Ce,nt+xe,U.COLOR_BUFFER_BIT,U.NEAREST):fs?U.copyTexSubImage3D(Pe,ve,Re,nt,Qt+Ii,Ne,We,Ce,xe):U.copyTexSubImage2D(Pe,ve,Re,nt,Ne,We,Ce,xe);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fs?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pe,ve,Re,nt,Qt,Ce,xe,we,Et,Tn,Ct.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ve,Re,nt,Qt,Ce,xe,we,Et,Ct.data):U.texSubImage3D(Pe,ve,Re,nt,Qt,Ce,xe,we,Et,Tn,Ct):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Re,nt,Ce,xe,Et,Tn,Ct.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Re,nt,Ct.width,Ct.height,Et,Ct.data):U.texSubImage2D(U.TEXTURE_2D,ve,Re,nt,Ce,xe,Et,Tn,Ct);he.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),he.pixelStorei(U.UNPACK_SKIP_PIXELS,ds),he.pixelStorei(U.UNPACK_SKIP_ROWS,wn),he.pixelStorei(U.UNPACK_SKIP_IMAGES,bl),ve===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Pe),he.unbindTexture()},this.initRenderTarget=function(b){Le.get(b).__webglFramebuffer===void 0&&Fe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Fe.setTextureCube(b,0):b.isData3DTexture?Fe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Fe.setTexture2DArray(b,0):Fe.setTexture2D(b,0),he.unbindTexture()},this.resetState=function(){H=0,F=0,te=null,he.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var E1=[`tela`];var A1=Math.PI/2;var hh=class r{segundosPorVolta=NR(60);tela=MR.required(`tela`);cena=new Qo;renderer;camera;angulo=0;quadro=0;ultimoTempo=0;visivel=!0;observador;constructor(){Ig$1(()=>{let e=this.tela().nativeElement;this.renderer=new lh({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera=new Yn(55,1,.1,100);let t=new ol().load(`cenas/00-panorama-360.webp`,()=>this.desenhar());t.colorSpace=qn,t.wrapS=Va,t.repeat.x=-1,t.anisotropy=this.renderer.capabilities.getMaxAnisotropy();let n=10,s=new gi(new rl(n,n,2*Math.PI*n/4,128,1,!0),new Ya({map:t,side:Mn}));this.cena.add(s),this.redimensionar(),window.addEventListener(`resize`,this.redimensionar),document.addEventListener(`visibilitychange`,this.aoTrocarAba),this.observador=new IntersectionObserver(([a])=>{this.visivel=a.isIntersecting,this.visivel&&this.pedirQuadro()}),this.observador.observe(e),this.pedirQuadro()}),D(De).onDestroy(()=>{cancelAnimationFrame(this.quadro),this.observador?.disconnect(),window.removeEventListener(`resize`,this.redimensionar),document.removeEventListener(`visibilitychange`,this.aoTrocarAba),this.cena.traverse(e=>{if(e instanceof gi){e.geometry.dispose();let t=e.material;t.map?.dispose(),t.dispose()}}),this.renderer?.dispose()})}pedirQuadro(){!this.quadro&&this.visivel&&!document.hidden&&(this.ultimoTempo=performance.now(),this.quadro=requestAnimationFrame(this.animar))}animar=e=>{this.quadro=0;let t=Math.min(.1,(e-this.ultimoTempo)/1e3);this.ultimoTempo=e,this.angulo+=t/this.segundosPorVolta()*Math.PI*2,this.desenhar(),this.visivel&&!document.hidden&&(this.quadro=requestAnimationFrame(this.animar))};aoTrocarAba=()=>this.pedirQuadro();desenhar(){!this.renderer||!this.camera||(this.camera.rotation.set(.06,A1-this.angulo,0,`YXZ`),this.renderer.render(this.cena,this.camera))}redimensionar=()=>{if(!this.renderer||!this.camera)return;let e=this.tela().nativeElement,t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=this.camera.aspect<1?62:46,this.camera.updateProjectionMatrix(),this.desenhar()};static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-panorama-360`]],viewQuery:function(t,n){t&1&&zd$1(n.tela,E1,5),t&2&&Ky()},hostAttrs:[1,`absolute`,`inset-0`,`block`],inputs:{segundosPorVolta:[1,`segundosPorVolta`]},decls:2,vars:0,consts:[[`tela`,``],[`aria-hidden`,`true`,1,`block`,`h-full`,`w-full`]],template:function(t,n){t&1&&Hd$1(0,`canvas`,1,0)},encapsulation:2})};var dh=class r{elemento=D($n$1).nativeElement;movimento=D(Yi);constructor(){let e=D(De);Ig$1(()=>{if(this.movimento.reduzido())return;let t=0,n=()=>{t=0,this.elemento.style.setProperty(`--rolagem`,String(window.scrollY))},i=()=>{t||(t=requestAnimationFrame(n))};n(),window.addEventListener(`scroll`,i,{passive:!0}),e.onDestroy(()=>{window.removeEventListener(`scroll`,i),cancelAnimationFrame(t)})})}static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-fundo-tech`]],hostAttrs:[`aria-hidden`,`true`,1,`fundo-tech`],decls:4,vars:0,consts:[[1,`camada`,`camada-grade`],[1,`camada`,`camada-codigo`,2,`background-image`,`url('fundo/codigo.svg')`],[1,`camada`,`camada-circuito`,2,`background-image`,`url('fundo/circuito.svg')`],[1,`brilho`]],template:function(t,n){t&1&&Hd$1(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)},styles:[`[_nghost-%COMP%]{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;--%NS%rolagem: 0;background:linear-gradient(90deg,rgb(123 46 255 / .22),transparent 35%,transparent 65%,rgb(0 217 255 / .16)),#0c071a}.camada[_ngcontent-%COMP%]{position:absolute;inset:0;will-change:background-position}.camada-grade[_ngcontent-%COMP%]{background:linear-gradient(rgb(123 46 255 / .14) 1px,transparent 1px) 0 0 / 22px 22px,linear-gradient(90deg,rgb(123 46 255 / .14) 1px,transparent 1px) 0 0 / 22px 22px;background-position-y:calc(var(--%NS%rolagem) * -.08px)}.camada-codigo[_ngcontent-%COMP%]{background-repeat:repeat;background-size:1100px 900px;background-position:0 calc(var(--%NS%rolagem) * -.25px)}.camada-circuito[_ngcontent-%COMP%]{background-repeat:repeat;background-size:1200px 1100px;background-position:120px calc(var(--%NS%rolagem) * -.5px)}.brilho[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(ellipse at 15% 20%,rgb(255 45 170 / .16),transparent 50%),radial-gradient(ellipse at 85% 80%,rgb(0 217 255 / .12),transparent 50%)}@media(max-width:767px){.camada-circuito[_ngcontent-%COMP%]{background-size:840px 770px;opacity:.8}.camada-codigo[_ngcontent-%COMP%]{background-size:880px 720px}}`]})};function C1(r,e){if(r&1&&(Do$1(0,`div`,37)(1,`span`),Ev$1(2),ca$1(),Do$1(3,`span`),Ev$1(4),ca$1()()),r&2){let t=e.$implicit,n=e.$index;Yd$1(`--%NS%velocidade`,40+n*12+`s`),Kd$1(`esteira-volta`,n%2===1),Hg$1(2),of$1(``,t,``,t),Hg$1(2),of$1(``,t,``,t)}}var fh=class r{linhas=[`public class Danca { if (praticar) evoluir(); else rever(); }   const vida = movimento.map(passo => codigo);   `,`<section class="cena">  <h2>A vida em movimento</h2>  </section>   import { Kalixto } from './vida';   while (sonho) { estudar(); }   `,`def coreografia(corpo): return [passo for passo in corpo if passo.ritmo]   SELECT * FROM trajetoria WHERE persistencia = true;   `];ano=(/* @__PURE__ */ new Date()).getFullYear();static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-rodape-codigo`]],decls:49,vars:1,consts:[[1,`rodape-tech`,`relative`,`overflow-hidden`],[`aria-hidden`,`true`,1,`pointer-events-none`,`absolute`,`inset-0`,`flex`,`flex-col`,`justify-around`,`py-6`],[1,`esteira`,3,`esteira-volta`,`--%NS%velocidade`],[`viewBox`,`0 0 1600 420`,`preserveAspectRatio`,`xMidYMid slice`,`aria-hidden`,`true`,1,`pointer-events-none`,`absolute`,`inset-0`,`h-full`,`w-full`],[`fill`,`none`,`stroke-width`,`1.4`],[`d`,`M0 330 H260 L290 300 H520 L545 325 H760`,1,`trilha`,`trilha-rosa`],[`d`,`M1600 90 H1360 L1330 120 H1120 L1095 95 H860`,1,`trilha`,`trilha-ciano`],[`d`,`M0 110 H180 L205 135 H380`,1,`trilha`,`trilha-ciano`],[`d`,`M1600 340 H1420 L1395 315 H1220`,1,`trilha`,`trilha-rosa`],[1,`pontos`],[`cx`,`290`,`cy`,`300`,`r`,`3.5`],[`cx`,`545`,`cy`,`325`,`r`,`3.5`],[`cx`,`1330`,`cy`,`120`,`r`,`3.5`],[`cx`,`1095`,`cy`,`95`,`r`,`3.5`],[`cx`,`205`,`cy`,`135`,`r`,`3`],[`cx`,`1395`,`cy`,`315`,`r`,`3`],[`transform`,`translate(0 -135)`,`font-family`,`ui-monospace, Consolas, monospace`,`font-size`,`15`,`text-anchor`,`middle`,1,`fluxo`],[`x`,`470`,`y`,`186`,`width`,`110`,`height`,`36`,`rx`,`18`,1,`caixa`],[`x`,`525`,`y`,`209`,1,`texto-ciano`],[`d`,`M580 204 H630`,1,`seta`],[`x`,`630`,`y`,`186`,`width`,`120`,`height`,`36`,`rx`,`5`,1,`caixa`],[`x`,`690`,`y`,`209`,1,`texto-ciano`],[`d`,`M750 204 H790`,1,`seta`],[`points`,`870,164 950,204 870,244 790,204`,1,`caixa`,`caixa-rosa`],[`x`,`870`,`y`,`209`,1,`texto-rosa`],[`d`,`M950 204 H1000`,1,`seta`],[`x`,`1000`,`y`,`186`,`width`,`120`,`height`,`36`,`rx`,`18`,1,`caixa`],[`x`,`1060`,`y`,`209`,1,`texto-ciano`],[1,`relative`,`mx-auto`,`flex`,`min-h-[45svh]`,`max-w-7xl`,`flex-col`,`items-center`,`justify-end`,`gap-4`,`px-5`,`pt-40`,`pb-36`,`text-center`,`lg:pb-12`],[`aria-hidden`,`true`,1,`selo`,`grid`,`size-14`,`place-items-center`,`rounded-md`,`border-2`,`border-kx-rosa`,`font-mono`,`text-xl`,`font-bold`,`text-kx-rosa`],[1,`font-display`,`text-3xl`,`font-black`,`text-kx-osso`,`sm:text-4xl`],[1,`text-kx-rosa`],[1,`text-base`,`tracking-[0.3em]`,`text-kx-ciano`,`uppercase`],[`aria-label`,`Rodapé`,1,`mt-2`,`flex`,`gap-6`],[`routerLink`,`/portfolio`,1,`text-kx-osso`,`underline`,`underline-offset-4`,`hover:text-kx-ciano`],[`routerLink`,`/contato`,1,`text-kx-osso`,`underline`,`underline-offset-4`,`hover:text-kx-rosa`],[1,`text-base`,`text-kx-nevoa`],[1,`esteira`]],template:function(t,n){t&1&&(Do$1(0,`footer`,0)(1,`div`,1),Ly(2,C1,5,8,`div`,2,Oy),ca$1(),Yc$1(),Do$1(4,`svg`,3)(5,`g`,4),Vd$1(6,`path`,5)(7,`path`,6)(8,`path`,7)(9,`path`,8),ca$1(),Do$1(10,`g`,9),Vd$1(11,`circle`,10)(12,`circle`,11)(13,`circle`,12)(14,`circle`,13)(15,`circle`,14)(16,`circle`,15),ca$1(),Do$1(17,`g`,16),Vd$1(18,`rect`,17),Do$1(19,`text`,18),Ev$1(20,`INÍCIO`),ca$1(),Vd$1(21,`path`,19)(22,`rect`,20),Do$1(23,`text`,21),Ev$1(24,`ESTUDAR`),ca$1(),Vd$1(25,`path`,22)(26,`polygon`,23),Do$1(27,`text`,24),Ev$1(28,`PRATICAR?`),ca$1(),Vd$1(29,`path`,25)(30,`rect`,26),Do$1(31,`text`,27),Ev$1(32,`EVOLUIR`),ca$1()()(),Kc$1(),Do$1(33,`div`,28)(34,`span`,29),Ev$1(35,`</>`),ca$1(),Do$1(36,`p`,30),Ev$1(37,` DEV-`),Do$1(38,`span`,31),Ev$1(39,`KALIXTO`),ca$1()(),Do$1(40,`p`,32),Ev$1(41,`Professor · Programador · Gamer`),ca$1(),Do$1(42,`nav`,33)(43,`a`,34),Ev$1(44,`Portfólio`),ca$1(),Do$1(45,`a`,35),Ev$1(46,`Contato`),ca$1()(),Do$1(47,`p`,36),Ev$1(48),ca$1()()()),t&2&&(Hg$1(2),Py(n.linhas),Hg$1(46),da$1(`© `,n.ano,` Wallace Toledo`))},dependencies:[nr$1],styles:[`.rodape-tech[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgb(123 46 255 / .28),transparent 35%,transparent 65%,rgb(0 217 255 / .22)),linear-gradient(rgb(123 46 255 / .14) 1px,transparent 1px) 0 0 / 22px 22px,linear-gradient(90deg,rgb(123 46 255 / .14) 1px,transparent 1px) 0 0 / 22px 22px,radial-gradient(circle at 50% 100%,rgb(255 45 170 / .22),transparent 55%),#0c071a;border-top:1px solid rgb(123 46 255 / .45)}.rodape-tech[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-inline:0;top:-1px;height:2px;background:linear-gradient(90deg,transparent,#ff2daa,#00d9ff,transparent);background-size:200% 100%;animation:_ngcontent-%COMP%_varredura 6s linear infinite}.esteira[_ngcontent-%COMP%]{display:flex;width:max-content;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.85rem;color:#ede9f247;animation:_ngcontent-%COMP%_correr var(--%NS%velocidade, 45s) linear infinite}.esteira[_ngcontent-%COMP%]:nth-child(2){color:#00d9ff52}.esteira[_ngcontent-%COMP%]:nth-child(3){color:#ff2daa4d}.esteira-volta[_ngcontent-%COMP%]{animation-direction:reverse}.caixa[_ngcontent-%COMP%]{fill:#00d9ff14;stroke:#00d9ffcc;stroke-width:1.4}.caixa-rosa[_ngcontent-%COMP%]{fill:#ff2daa1a;stroke:#ff2daae6}.texto-ciano[_ngcontent-%COMP%]{fill:#00d9ff}.texto-rosa[_ngcontent-%COMP%]{fill:#ff2daa}.seta[_ngcontent-%COMP%]{stroke:#ede9f299;stroke-width:1.4;fill:none}.pontos[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:#00d9ff}.fluxo[_ngcontent-%COMP%]{opacity:.55}.trilha[_ngcontent-%COMP%]{stroke-dasharray:8 12;animation:_ngcontent-%COMP%_corrente 2.6s linear infinite}.trilha-rosa[_ngcontent-%COMP%]{stroke:#ff2daabf}.trilha-ciano[_ngcontent-%COMP%]{stroke:#00d9ffbf;animation-direction:reverse}.selo[_ngcontent-%COMP%]{background:#ff2daa1f;box-shadow:0 0 24px #ff2daa59}@keyframes _ngcontent-%COMP%_correr{to{transform:translate(-50%)}}@keyframes _ngcontent-%COMP%_corrente{to{stroke-dashoffset:-80}}@keyframes _ngcontent-%COMP%_varredura{0%{background-position:200% 0}to{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){.esteira[_ngcontent-%COMP%], .trilha[_ngcontent-%COMP%], .rodape-tech[_ngcontent-%COMP%]:before{animation:none}}`]})};var X_=[{de:{clipPath:`circle(0% at 50% 50%)`},para:{clipPath:`circle(80% at 50% 50%)`}},{de:{clipPath:`inset(0% 100% 0% 0%)`},para:{clipPath:`inset(0% 0% 0% 0%)`}},{de:{clipPath:`polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)`},para:{clipPath:`polygon(0% 0%, 130% 0%, 100% 100%, -30% 100%)`}}];function q_(r){let e=Rt.context(()=>{let s={trigger:r,start:`top bottom`,end:`bottom top`,scrub:!0};Rt.from(r.querySelectorAll(`[data-revelar]`),{y:48,autoAlpha:0,duration:.9,ease:`power3.out`,stagger:.12,scrollTrigger:{trigger:r,start:`top 65%`,once:!0}}),r.querySelectorAll(`[data-profundidade]`).forEach(o=>{let l=Number(o.dataset.profundidade??0);Rt.fromTo(o,{y:-60*l},{y:60*l,ease:`none`,scrollTrigger:s})}),r.querySelectorAll(`[data-zoom]`).forEach(o=>{Rt.fromTo(o,{scale:1},{scale:Number(o.dataset.zoom??1.2),transformOrigin:`60% 40%`,ease:`none`,scrollTrigger:s})}),r.querySelectorAll(`[data-lateral]`).forEach(o=>{let l=Number(o.dataset.lateral??300);Rt.fromTo(o,{x:l},{x:-l,ease:`none`,scrollTrigger:s})}),r.querySelectorAll(`[data-tracar]`).forEach(o=>{Rt.fromTo(o,{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,ease:`none`,scrollTrigger:{trigger:r,start:`top 80%`,end:`center center`,scrub:!0}})});let a=Array.from(r.querySelectorAll(`[data-foto]`));a.length>0&&Rt.fromTo(a[0],{scale:1.1},{scale:1,ease:`none`,scrollTrigger:s})},r),t=R1(r,5),n=r.querySelector(`[data-fotos]`),i=()=>{};if(n&&window.matchMedia(`(pointer: fine)`).matches){let s=Rt.quickTo(n,`x`,{duration:.8,ease:`power3.out`}),a=Rt.quickTo(n,`y`,{duration:.8,ease:`power3.out`}),o=l=>{s((l.clientX/window.innerWidth-.5)*-24),a((l.clientY/window.innerHeight-.5)*-16)};r.addEventListener(`pointermove`,o),i=()=>r.removeEventListener(`pointermove`,o)}return()=>{i(),t(),e.revert()}}function R1(r,e){let t=Array.from(r.querySelectorAll(`[data-foto]`));if(t.length<2)return()=>{};let n=Array.from(r.querySelectorAll(`[data-barra]`)),i=Array.from(r.querySelectorAll(`[data-barra-botao]`)),s=0,a=!1,o,l=h=>{if(h===s)return;let d=X_[h%X_.length];t.forEach((m,x)=>{x!==h&&x!==s&&Rt.set(m,{opacity:0,zIndex:0})}),Rt.set(t[s],{zIndex:1}),Rt.killTweensOf(t[h]),Rt.set(t[h],{zIndex:2}),Rt.fromTo(t[h],Y({opacity:1,scale:1.18},d.de),K(Y({scale:1.04},d.para),{duration:1.2,ease:`power2.inOut`})),Rt.to(t[h],{scale:1,duration:e,ease:`none`,delay:1.2}),s=h,c()},c=()=>{n.forEach((h,d)=>Rt.set(h,{scaleX:d<s?1:0})),o?.kill(),o=Rt.fromTo(n[s],{scaleX:0},{scaleX:1,duration:e,ease:`none`,paused:!a,onComplete:()=>l((s+1)%t.length)})},u=i.map((h,d)=>{let m=()=>l(d);return h.addEventListener(`click`,m),()=>h.removeEventListener(`click`,m)}),f=new IntersectionObserver(([h])=>{a=h.isIntersecting,a?o?.play():o?.pause()},{threshold:.5});return f.observe(r.querySelector(`section`)??r),c(),()=>{f.disconnect(),u.forEach(h=>h()),o?.kill(),Rt.killTweensOf([...t,...n])}}var P1=[`*`];var Y_=(r,e)=>e.arquivo;function I1(r,e){if(r&1&&Hd$1(0,`img`,13),r&2){let t=e.$implicit,n=e.$index;Wy();let i=bv$1(0);Yd$1(`object-position`,t.foco??`center`),Kd$1(`opacity-0`,n!==0),$d$1(`src`,`cenas/`+t.arquivo+`-1920.webp`)(`alt`,t.alt),Fd$1(`srcset`,`cenas/`+t.arquivo+`-960.webp 960w, cenas/`+t.arquivo+`-1920.webp 1920w`)(`loading`,i.id===1&&n===0?`eager`:`lazy`)}}function L1(r,e){if(r&1&&(la$1(0,`li`)(1,`button`,14)(2,`span`,15),Hd$1(3,`span`,16),ua$1()()()),r&2){let t=e.$index;Wy(2);let n=bv$1(0);Hg$1(),Fd$1(`aria-label`,`Mostrar foto `+(t+1)+` de `+n.fotos.length)}}function D1(r,e){if(r&1&&(la$1(0,`ol`,5),Ly(1,L1,4,1,`li`,null,Y_),ua$1()),r&2){Wy();let t=bv$1(0);Hg$1(),Py(t.fotos)}}function N1(r,e){if(r&1&&(la$1(0,`li`,17),Hd$1(1,`span`,18),Ev$1(2),ua$1()),r&2){let t=e.$implicit;Hg$1(2),da$1(` `,t,` `)}}function O1(r,e){if(r&1&&(la$1(0,`ul`,11),Ly(1,N1,3,1,`li`,17,ky),ua$1()),r&2){Wy();let t=bv$1(0);Hg$1(),Py(t.marcos)}}var ph=class r{capitulo=NR.required();total=NR(1);movimento=D(Yi);reduzido=this.movimento.reduzido;elemento=D($n$1);constructor(){let e;Ig$1(()=>{this.movimento.reduzido()||(e=q_(this.elemento.nativeElement))}),D(De).onDestroy(()=>e?.())}static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-cena`]],hostAttrs:[1,`relative`,`z-10`,`mt-20`,`block`,`md:mt-32`],inputs:{capitulo:[1,`capitulo`],total:[1,`total`]},ngContentSelectors:P1,decls:19,vars:11,consts:[[1,`relative`,3,`id`],[1,`relative`,`flex`,`min-h-svh`,`items-center`,`overflow-hidden`,`border-y`,`border-kx-roxo/50`,`shadow-[0_0_60px_rgb(123_46_255/0.35)]`,`px-5`,`pt-28`,`pb-36`,`sm:px-10`,`md:py-20`,`lg:px-20`],[`data-fotos`,``,1,`absolute`,`-inset-6`,`isolate`,`overflow-hidden`],[`data-foto`,``,`sizes`,`100vw`,`decoding`,`async`,`width`,`1920`,`height`,`1072`,1,`absolute`,`inset-0`,`h-full`,`w-full`,`object-cover`,3,`src`,`alt`,`opacity-0`,`object-position`],[`aria-hidden`,`true`,1,`absolute`,`inset-0`,`bg-kx-roxo/25`,`mix-blend-multiply`],[`aria-label`,`Fotos desta cena`,1,`absolute`,`top-24`,`right-5`,`z-20`,`flex`,`gap-1.5`,`md:top-auto`,`md:right-24`,`md:bottom-10`],[`aria-hidden`,`true`,1,`pointer-events-none`,`absolute`,`inset-0`,`bg-linear-to-r`,`from-kx-preto`,`via-kx-preto/80`,`to-transparent`,`md:via-kx-preto/55`],[1,`relative`,`z-10`,`max-w-xl`],[`data-revelar`,``,1,`font-display`,`text-xl`,`font-bold`,`text-kx-ciano`],[`data-revelar`,``,`tabindex`,`-1`,1,`mt-2`,`font-display`,`text-[clamp(2.5rem,11.5vw,4.5rem)]`,`leading-[0.9]`,`font-black`,`text-balance`,`[overflow-wrap:anywhere]`,`text-kx-osso`,`uppercase`,`lg:text-8xl`,3,`id`],[`data-revelar`,``,1,`mt-6`,`max-w-prose`,`text-lg`,`leading-relaxed`,`text-kx-osso/90`,`sm:text-xl`],[`data-revelar`,``,`aria-label`,`Marcos desta cena`,1,`mt-8`,`space-y-2`],[`data-revelar`,``],[`data-foto`,``,`sizes`,`100vw`,`decoding`,`async`,`width`,`1920`,`height`,`1072`,1,`absolute`,`inset-0`,`h-full`,`w-full`,`object-cover`,3,`src`,`alt`],[`type`,`button`,`data-barra-botao`,``,1,`block`,`w-9`,`py-2`],[1,`block`,`h-1`,`w-full`,`overflow-hidden`,`bg-kx-osso/30`],[`data-barra`,``,1,`block`,`h-full`,`w-full`,`origin-left`,`scale-x-0`,`bg-kx-rosa`],[1,`flex`,`items-center`,`gap-3`,`text-lg`],[`aria-hidden`,`true`,1,`size-2.5`,`shrink-0`,`rotate-45`,`bg-kx-rosa`]],template:function(t,n){if(t&1&&(qy(),cf$1(0),la$1(1,`section`,0)(2,`div`,1)(3,`div`,2),Ly(4,I1,1,8,`img`,3,Y_),Hd$1(6,`div`,4),ua$1(),xy(7,D1,3,0,`ol`,5),Hd$1(8,`div`,6),la$1(9,`div`,7)(10,`p`,8),Ev$1(11),ua$1(),la$1(12,`h2`,9),Ev$1(13),ua$1(),la$1(14,`p`,10),Ev$1(15),ua$1(),xy(16,O1,3,0,`ul`,11),la$1(17,`div`,12),zy(18),ua$1()()()()),t&2){let i=Tv$1(n.capitulo());Hg$1(),$d$1(`id`,i.slug),Fd$1(`data-cena`,i.id)(`aria-labelledby`,`titulo-`+i.slug),Hg$1(3),Py(i.fotos),Hg$1(3),Ry(i.fotos.length>1&&!n.reduzido()?7:-1),Hg$1(4),of$1(` Cena `,i.id,` de `,n.total(),` `),Hg$1(),$d$1(`id`,`titulo-`+i.slug),Hg$1(),da$1(` `,i.titulo,` `),Hg$1(2),da$1(` `,i.texto,` `),Hg$1(),Ry(i.marcos.length>0?16:-1)}},encapsulation:2})};var U1=[`abertura`];var F1=(r,e)=>e.id;function B1(r,e){r&1&&Vd$1(0,`app-panorama-360`,2),r&2&&jd$1(`segundosPorVolta`,60)}function k1(r,e){r&1&&Vd$1(0,`img`,3)}function z1(r,e){r&1&&(Do$1(0,`div`,18)(1,`a`,19),Ev$1(2,` Ver projetos `),ca$1(),Do$1(3,`a`,20),Ev$1(4,` Falar comigo `),ca$1()())}function V1(r,e){if(r&1&&(Do$1(0,`app-cena`,14),xy(1,z1,5,0,`div`,18),ca$1()),r&2){let t=e.$implicit,n=Wy();jd$1(`capitulo`,t)(`total`,n.narrativa.capitulos.length),Hg$1(),Ry(t.id===n.narrativa.capitulos.length?1:-1)}}var Z_=class r{narrativa=D(kr);elemento=D($n$1);destroyRef=D(De);animar=!D(Yi).reduzido();usar3d=this.animar&&D(Rl).suportado;abertura=MR.required(`abertura`);constructor(){Ig$1(()=>{let e=new IntersectionObserver(n=>{for(let i of n)i.isIntersecting&&this.narrativa.definirAtivo(Number(i.target.getAttribute(`data-cena`)))},{rootMargin:`-45% 0px -45% 0px`});this.elemento.nativeElement.querySelectorAll(`[data-cena]`).forEach(n=>e.observe(n));let t=()=>{let n=document.documentElement.scrollHeight-window.innerHeight;this.narrativa.definirProgresso(n>0?window.scrollY/n:0)};if(window.addEventListener(`scroll`,t,{passive:!0}),t(),this.animar){let n=this.abertura().nativeElement,i=Rt.context(()=>{Rt.timeline({delay:.3}).from(`[data-trailer="apresenta"]`,{autoAlpha:0,y:-12,duration:1},0).from(`[data-trailer="3"]`,{autoAlpha:0,y:40,duration:1.2,ease:`power3.out`},3)},n);this.destroyRef.onDestroy(()=>i.revert())}document.fonts?.ready.then(()=>Ye.refresh()),this.destroyRef.onDestroy(()=>{e.disconnect(),window.removeEventListener(`scroll`,t)})})}comecar(e){e.preventDefault();let t=document.getElementById(this.narrativa.capitulos[0].slug);t?.scrollIntoView({behavior:this.animar?`smooth`:`auto`}),t?.querySelector(`h2`)?.focus({preventScroll:!0})}static ɵfac=function(t){return new(t||r)};static ɵcmp=yy({type:r,selectors:[[`app-experiencia`]],viewQuery:function(t,n){t&1&&zd$1(n.abertura,U1,5),t&2&&Ky()},decls:28,vars:2,consts:[[`abertura`,``],[`aria-labelledby`,`titulo-principal`,1,`relative`,`z-10`,`h-svh`,`overflow-hidden`,`bg-kx-preto`],[3,`segundosPorVolta`],[`src`,`cenas/00-abertura-1920.webp`,`srcset`,`cenas/00-abertura-960.webp 960w, cenas/00-abertura-1920.webp 1920w`,`sizes`,`100vw`,`alt`,``,`fetchpriority`,`high`,1,`absolute`,`inset-0`,`h-full`,`w-full`,`object-cover`],[`aria-hidden`,`true`,1,`pointer-events-none`,`absolute`,`inset-0`,`bg-linear-to-r`,`from-kx-preto/85`,`via-kx-preto/30`,`to-transparent`],[`aria-hidden`,`true`,1,`pointer-events-none`,`absolute`,`inset-x-0`,`bottom-0`,`h-1/3`,`bg-linear-to-t`,`from-kx-preto`,`to-transparent`],[1,`absolute`,`inset-x-0`,`top-[44%]`,`-translate-y-1/2`,`px-5`,`sm:px-10`,`lg:px-20`],[`data-trailer`,`apresenta`,1,`font-display`,`text-base`,`tracking-[0.45em]`,`text-kx-ciano`,`uppercase`,`sm:text-xl`],[`data-trailer`,`3`],[`id`,`titulo-principal`,1,`mt-3`,`font-display`,`text-[clamp(3.8rem,12vw,10rem)]`,`leading-[0.85]`,`font-black`,`text-kx-osso`,`uppercase`,`drop-shadow-[0_4px_24px_rgb(0_0_0/0.6)]`],[1,`mt-6`,`max-w-lg`,`text-lg`,`leading-relaxed`,`text-kx-osso/90`,`sm:text-xl`],[1,`mt-8`,`flex`,`flex-wrap`,`gap-4`],[`href`,`#o-observador`,1,`border-2`,`border-kx-rosa`,`bg-kx-rosa/15`,`px-6`,`py-3`,`font-display`,`text-xl`,`font-bold`,`text-kx-osso`,`backdrop-blur-sm`,`hover:bg-kx-rosa`,`hover:text-kx-preto`,3,`click`],[`routerLink`,`/portfolio`,1,`border-2`,`border-kx-ciano`,`px-6`,`py-3`,`font-display`,`text-xl`,`font-bold`,`text-kx-osso`,`backdrop-blur-sm`,`hover:bg-kx-ciano`,`hover:text-kx-preto`],[3,`capitulo`,`total`],[1,`pointer-events-auto`,`fixed`,`top-1/2`,`right-6`,`z-30`,`hidden`,`-translate-y-1/2`,`lg:block`],[`modo`,`trilho`],[1,`relative`,`z-10`,`mt-20`,`block`,`md:mt-32`],[1,`mt-10`,`flex`,`flex-wrap`,`gap-4`],[`routerLink`,`/portfolio`,1,`border-2`,`border-kx-ciano`,`px-6`,`py-3`,`font-display`,`text-2xl`,`font-bold`,`text-kx-osso`,`hover:bg-kx-ciano`,`hover:text-kx-preto`],[`routerLink`,`/contato`,1,`border-2`,`border-kx-rosa`,`px-6`,`py-3`,`font-display`,`text-2xl`,`font-bold`,`text-kx-osso`,`hover:bg-kx-rosa`,`hover:text-kx-preto`]],template:function(t,n){t&1&&(Vd$1(0,`app-fundo-tech`),Do$1(1,`section`,1,0),xy(3,B1,1,1,`app-panorama-360`,2)(4,k1,1,0,`img`,3),Vd$1(5,`div`,4)(6,`div`,5),Do$1(7,`div`,6)(8,`p`,7),Ev$1(9,` Wallace Toledo apresenta `),ca$1(),Do$1(10,`div`,8)(11,`h1`,9),Ev$1(12,` A vida em`),Vd$1(13,`br`),Ev$1(14,`movimento `),ca$1(),Do$1(15,`p`,10),Ev$1(16),ca$1(),Do$1(17,`div`,11)(18,`a`,12),Wd$1(`click`,function(s){return n.comecar(s)}),Ev$1(19,` Começar a viagem ↓ `),ca$1(),Do$1(20,`a`,13),Ev$1(21,` Ver portfólio `),ca$1()()()()(),Ly(22,V1,2,3,`app-cena`,14,F1),Do$1(24,`div`,15),Vd$1(25,`app-mapa-rota`,16),ca$1(),Vd$1(26,`app-letreiro`)(27,`app-rodape-codigo`,17)),t&2&&(Hg$1(3),Ry(n.usar3d?3:4),Hg$1(13),da$1(` Da dança à tecnologia, em `,n.narrativa.capitulos.length,` cenas. `),Hg$1(6),Py(n.narrativa.capitulos))},dependencies:[dh,ph,vc,ba,hh,fh,nr$1],encapsulation:2})};export{Z_ as Experiencia};