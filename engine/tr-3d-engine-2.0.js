(()=>{var ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,Mc=1,Yu=2;var Kh=1,Xl=2,pi=3,Pi=0,_n=1,bn=2;var Qt=0,Ls=1,ma=2,bc=3,Sc=4,Yl=5,zn=100,qu=101,Zu=102,Ec=103,wc=104,Zs=200,ju=201,Ju=202,$u=203,el=204,tl=205,Za=206,Ku=207,ja=208,Qu=209,ed=210,td=211,nd=212,id=213,sd=214,rd=0,ad=1,od=2,ga=3,ld=4,cd=5,hd=6,ud=7,Qh=0,dd=1,fd=2,Ri=0,ql=1,Zl=2,jl=3,Cr=4,pd=5,Jl=6;var eu=300,Ns=301,Os=302,ji=303,nl=304,Ja=306,An=1e3,Ln=1001,il=1002,jt=1003,Tc=1004;var yo=1005;var Jt=1006,md=1007;var Fs=1008;var si=1009,gd=1010,_d=1011,$l=1012,tu=1013,Ai=1014,Tn=1015,fn=1016,nu=1017,iu=1018,_i=1020,xd=1021,Sn=1023,vd=1024,yd=1025,qi=1026,Ii=1027,Md=1028,su=1029,bd=1030,ru=1031,au=1033,Mo=33776,bo=33777,So=33778,Eo=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,ou=36196,Ic=37492,Lc=37496,Dc=37808,Uc=37809,Nc=37810,Oc=37811,Fc=37812,Bc=37813,zc=37814,Hc=37815,kc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,Yc=37821,wo=36492,qc=36494,Zc=36495,Sd=36283,jc=36284,Jc=36285,$c=36286;var _a=2300,xa=2301,To=2302,Kc=2400,Qc=2401,eh=2402;var lu=3e3,Zi=3001,Ed=3200,wd=3201,Kl=0,Td=1,wn="",Lt="srgb",Dn="srgb-linear",Ql="display-p3",$a="display-p3-linear",va="linear",Ct="srgb",ya="rec709",Ma="p3";var hs=7680;var th=519,Ad=512,Rd=513,Cd=514,cu=515,Pd=516,Id=517,Ld=518,Dd=519,nh=35044;var ih="300 es",sl=1035,gi=2e3,ba=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=1234567,hr=Math.PI/180,gr=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function ec(i,e){return(i%e+e)%e}function Ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Nd(i,e,t){return i!==e?(t-i)/(e-i):0}function ur(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return ur(i,e,1-Math.exp(-t*n))}function Fd(i,e=1){return e-Math.abs(ec(i,e*2)-e)}function Bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kd(i,e){return i+Math.random()*(e-i)}function Vd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(sh=i);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wd(i){return i*hr}function Xd(i){return i*gr}function rl(i){return(i&i-1)===0&&i!==0}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hu={DEG2RAD:hr,RAD2DEG:gr,generateUUID:ss,clamp:$t,euclideanModulo:ec,mapLinear:Ud,inverseLerp:Nd,lerp:ur,damp:Od,pingpong:Fd,smoothstep:Bd,smootherstep:zd,randInt:Hd,randFloat:kd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:rl,ceilPowerOfTwo:Yd,floorPowerOfTwo:Sa,setQuaternionFromProperEuler:qd,normalize:yn,denormalize:As},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],M=s[1],v=s[4],S=s[7],C=s[2],A=s[5],w=s[8];return r[0]=a*x+o*M+l*C,r[3]=a*m+o*v+l*A,r[6]=a*f+o*S+l*w,r[1]=c*x+h*M+d*C,r[4]=c*m+h*v+d*A,r[7]=c*f+h*S+d*w,r[2]=u*x+p*M+g*C,r[5]=u*m+p*v+g*A,r[8]=u*f+p*S+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new dt;function uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=_r("canvas");return i.style.display="block",i}var rh={};function dr(i){i in rh||(rh[i]=!0,console.warn(i))}var ah=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Dn]:{transfer:va,primaries:ya,toReference:i=>i,fromReference:i=>i},[Lt]:{transfer:Ct,primaries:ya,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$a]:{transfer:va,primaries:Ma,toReference:i=>i.applyMatrix3(oh),fromReference:i=>i.applyMatrix3(ah)},[Ql]:{transfer:Ct,primaries:Ma,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oh),fromReference:i=>i.applyMatrix3(ah).convertLinearToSRGB()}},jd=new Set([Dn,$a]),bt={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Vr[e].toReference,s=Vr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vr[i].primaries},getTransfer:function(i){return i===wn?va:Vr[i].transfer}};function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Ea=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=_r("canvas")),us.width=e.width,us.height=e.height;let n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ds(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ss(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,Rn=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Jt,a=Fs,o=Sn,l=si,c=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ss(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zi?Lt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Zi:lu}set encoding(e){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zi?Lt:wn}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=eu;Rn.DEFAULT_ANISOTROPY=1;var Ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,S=(p+1)/2,C=(f+1)/2,A=(h+u)/4,w=(d+x)/4,D=(g+m)/4;return v>S&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=w/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zi?Lt:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ta=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ol=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-o,f=l*u+c*p+h*g+d*x,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,f*M);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let S=o*M;if(l=l*m+u*S,c=c*m+p*S,h=h*m+g*S,d=d*m+x*S,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new O,lh=new Un,xi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Wr.subVectors(this.max,ir),ds.subVectors(e.a,ir),fs.subVectors(e.b,ir),ps.subVectors(e.c,ir),bi.subVectors(fs,ds),Si.subVectors(ps,fs),ki.subVectors(ds,ps);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-ki.z,ki.y,bi.z,0,-bi.x,Si.z,0,-Si.x,ki.z,0,-ki.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-ki.y,ki.x,0];return!Io(t,ds,fs,ps,Wr)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,ds,fs,ps,Wr))?!1:(Xr.crossVectors(bi,Si),t=[Xr.x,Xr.y,Xr.z],Io(t,ds,fs,ps,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,Gr=new xi,ds=new O,fs=new O,ps=new O,bi=new O,Si=new O,ki=new O,ir=new O,Wr=new O,Xr=new O,Vi=new O;function Io(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Kd=new xi,sr=new O,Lo=new O,Ji=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Lo)),this.expandByPoint(sr.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new O,Do=new O,Yr=new O,Ei=new O,Uo=new O,qr=new O,No=new O,xr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Ei.dot(this.direction),l=-Ei.dot(Yr),c=Ei.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(Yr,u),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),qr.subVectors(n,e),No.crossVectors(Uo,qr);let a=this.direction.dot(No),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);let l=o*this.direction.dot(qr.crossVectors(Ei,qr));if(l<0)return null;let c=o*this.direction.dot(Uo.cross(Ei));if(c<0||l+c>a)return null;let h=-o*Ei.dot(No);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,ef)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),wi.crossVectors(n,Pn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),wi.crossVectors(n,Pn)),wi.normalize(),Zr.crossVectors(Pn,wi),s[0]=wi.x,s[4]=Zr.x,s[8]=Pn.x,s[1]=wi.y,s[5]=Zr.y,s[9]=Pn.y,s[2]=wi.z,s[6]=Zr.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],v=n[7],S=n[11],C=n[15],A=s[0],w=s[4],D=s[8],_=s[12],y=s[1],N=s[5],B=s[9],X=s[13],T=s[2],U=s[6],H=s[10],k=s[14],$=s[3],q=s[7],te=s[11],se=s[15];return r[0]=a*A+o*y+l*T+c*$,r[4]=a*w+o*N+l*U+c*q,r[8]=a*D+o*B+l*H+c*te,r[12]=a*_+o*X+l*k+c*se,r[1]=h*A+d*y+u*T+p*$,r[5]=h*w+d*N+u*U+p*q,r[9]=h*D+d*B+u*H+p*te,r[13]=h*_+d*X+u*k+p*se,r[2]=g*A+x*y+m*T+f*$,r[6]=g*w+x*N+m*U+f*q,r[10]=g*D+x*B+m*H+f*te,r[14]=g*_+x*X+m*k+f*se,r[3]=M*A+v*y+S*T+C*$,r[7]=M*w+v*N+S*U+C*q,r[11]=M*D+v*B+S*H+C*te,r[15]=M*_+v*X+S*k+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+x*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],M=d*m*c-x*u*c+x*l*p-o*m*p-d*l*f+o*u*f,v=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,S=h*x*c-g*d*c+g*o*p-a*x*p-h*o*f+a*d*f,C=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,A=t*M+n*v+s*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=M*w,e[1]=(x*u*r-d*m*r-x*s*p+n*m*p+d*s*f-n*u*f)*w,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*w,e[4]=v*w,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*p+t*l*p)*w,e[8]=S*w,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*f-t*d*f)*w,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*w,e[12]=C*w,e[13]=(h*x*s-g*d*s+g*n*u-t*x*u-h*n*m+t*d*m)*w,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*w,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,x=a*h,m=a*d,f=o*d,M=l*c,v=l*h,S=l*d,C=n.x,A=n.y,w=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+S)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(u+f))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+v)*w,s[9]=(m-M)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let c=1/r,h=1/a,d=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),p,g;if(o===gi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,p=(n+s)*h,g,x;if(o===gi)g=(a+r)*d,x=-2*d;else if(o===ba)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new O,qn=new _t,Qd=new O(0,0,0),ef=new O(1,1,1),wi=new O,Zr=new O,Pn=new O,ch=new _t,hh=new Un,Aa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Aa.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tf=0,uh=new O,gs=new Un,hi=new _t,jr=new O,rr=new O,nf=new O,sf=new Un,dh=new O(1,0,0),fh=new O(0,1,0),ph=new O(0,0,1),rf={type:"added"},af={type:"removed"},En=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Aa,n=new Un,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new dt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(rr,jr,this.up):hi.lookAt(jr,rr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(hi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};En.DEFAULT_UP=new O(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new O,ui=new O,Oo=new O,di=new O,_s=new O,xs=new O,mh=new O,Fo=new O,Bo=new O,zo=new O,Jr=!1,Rs=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),ui.subVectors(n,t),Oo.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(ui),l=Zn.dot(Oo),c=ui.dot(ui),h=ui.dot(Oo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,s,r,a,o,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),ui.subVectors(e,t),Zn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),xs.subVectors(r,n),Fo.subVectors(e,n);let l=_s.dot(Fo),c=xs.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,s);let h=_s.dot(Bo),d=xs.dot(Bo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_s,a);zo.subVectors(e,r);let p=_s.dot(zo),g=xs.dot(zo);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return mh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(mh,o);let f=1/(m+x+u);return a=x*f,o=u*f,t.copy(n).addScaledVector(_s,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=ec(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ho(a,r,e+1/3),this.g=Ho(a,r,e),this.b=Ho(a,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return bt.fromWorkingColorSpace(mn.copy(this),e),Math.round($t(mn.r*255,0,255))*65536+Math.round($t(mn.g*255,0,255))*256+Math.round($t(mn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Lt){bt.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL($r);let n=ur(Ti.h,$r.h,t),s=ur(Ti.s,$r.s,t),r=ur(Ti.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new at;at.NAMES=du;var of=0,Li=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Ls,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vi=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mi=lf();function lf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function cf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=$t(i,-65504,65504),mi.floatView[0]=i;let e=mi.uint32View[0],t=e>>23&511;return mi.baseTable[t]+((e&8388607)>>mi.shiftTable[t])}function hf(i){let e=i>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(i&1023)]+mi.exponentTable[e],mi.floatView[0]}var Pr={toHalfFloat:cf,fromHalfFloat:hf},Zt=new O,Kr=new ce,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=As(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}};var Bs=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var uf=0,Bn=new _t,ko=new En,vs=new O,In=new xi,ar=new xi,ln=new O,Bt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?Ca:Bs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(In.min,ar.min),In.expandByPoint(ln),ln.addVectors(In.max,ar.max),In.expandByPoint(ln)):(In.expandByPoint(ar.min),In.expandByPoint(ar.max))}In.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),ln.add(vs)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new O,h[y]=new O;let d=new O,u=new O,p=new O,g=new ce,x=new ce,m=new ce,f=new O,M=new O;function v(y,N,B){d.fromArray(s,y*3),u.fromArray(s,N*3),p.fromArray(s,B*3),g.fromArray(a,y*2),x.fromArray(a,N*2),m.fromArray(a,B*2),u.sub(d),p.sub(d),x.sub(g),m.sub(g);let X=1/(x.x*m.y-m.x*x.y);isFinite(X)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(X),M.copy(p).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar(X),c[y].add(f),c[N].add(f),c[B].add(f),h[y].add(M),h[N].add(M),h[B].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,N=S.length;y<N;++y){let B=S[y],X=B.start,T=B.count;for(let U=X,H=X+T;U<H;U+=3)v(n[U+0],n[U+1],n[U+2])}let C=new O,A=new O,w=new O,D=new O;function _(y){w.fromArray(r,y*3),D.copy(w);let N=c[y];C.copy(N),C.sub(w.multiplyScalar(w.dot(N))).normalize(),A.crossVectors(D,N);let X=A.dot(h[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=X}for(let y=0,N=S.length;y<N;++y){let B=S[y],X=B.start,T=B.count;for(let U=X,H=X+T;U<H;U+=3)_(n[U+0]),_(n[U+1]),_(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Pt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gh=new _t,Gi=new xr,Qr=new Ji,_h=new O,ys=new O,Ms=new O,bs=new O,Vo=new O,ea=new O,ta=new ce,na=new ce,ia=new ce,xh=new O,vh=new O,yh=new O,sa=new O,ra=new O,We=class extends En{constructor(e=new Bt,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Vo.fromBufferAttribute(d,e),a?ea.addScaledVector(Vo,h):ea.addScaledVector(Vo.sub(t),h))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Qr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Qr,_h)===null||Gi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,C=v;S<C;S+=3){let A=o.getX(S),w=o.getX(S+1),D=o.getX(S+2);s=aa(this,f,e,n,c,h,d,A,w,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=aa(this,a,e,n,c,h,d,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,C=v;S<C;S+=3){let A=S,w=S+1,D=S+2;s=aa(this,f,e,n,c,h,d,A,w,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=m,v=m+1,S=m+2;s=aa(this,a,e,n,c,h,d,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function df(i,e,t,n,s,r,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Pi,o),l===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function aa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,Ms),i.getVertexPosition(c,bs);let h=df(i,e,t,n,ys,Ms,bs,sa);if(h){s&&(ta.fromBufferAttribute(s,o),na.fromBufferAttribute(s,l),ia.fromBufferAttribute(s,c),h.uv=Rs.getInterpolation(sa,ys,Ms,bs,ta,na,ia,new ce)),r&&(ta.fromBufferAttribute(r,o),na.fromBufferAttribute(r,l),ia.fromBufferAttribute(r,c),h.uv1=Rs.getInterpolation(sa,ys,Ms,bs,ta,na,ia,new ce),h.uv2=h.uv1),a&&(xh.fromBufferAttribute(a,o),vh.fromBufferAttribute(a,l),yh.fromBufferAttribute(a,c),h.normal=Rs.getInterpolation(sa,ys,Ms,bs,xh,vh,yh,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Rs.getNormal(ys,Ms,bs,d.normal),h.face=d}return h}var en=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function g(x,m,f,M,v,S,C,A,w,D,_){let y=S/w,N=C/D,B=S/2,X=C/2,T=A/2,U=w+1,H=D+1,k=0,$=0,q=new O;for(let te=0;te<H;te++){let se=te*N-X;for(let ge=0;ge<U;ge++){let Q=ge*y-B;q[x]=Q*M,q[m]=se*v,q[f]=T,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(ge/w),d.push(1-te/D),k+=1}}for(let te=0;te<D;te++)for(let se=0;se<w;se++){let ge=u+se+U*te,Q=u+se+U*(te+1),re=u+(se+1)+U*(te+1),Se=u+(se+1)+U*te;l.push(ge,Q,Se),l.push(Q,re,Se),$+=6}o.addGroup(p,$,_),p+=$,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function ff(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fu(i){return i.getRenderTarget()===null?i.outputColorSpace:bt.workingColorSpace}var Kn={clone:zs,merge:Mn},pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pa=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gn=class extends Pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ss=-90,Es=1,ll=class extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Ss,Es,e,t);s.layers=this.layers,this.add(s);let r=new gn(Ss,Es,e,t);r.layers=this.layers,this.add(r);let a=new gn(Ss,Es,e,t);a.layers=this.layers,this.add(a);let o=new gn(Ss,Es,e,t);o.layers=this.layers,this.add(o);let l=new gn(Ss,Es,e,t);l.layers=this.layers,this.add(l);let c=new gn(Ss,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ia=class extends Rn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zi?Lt:wn),this.texture=new Ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Qt});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===Fs&&(t.minFilter=Jt),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Go=new O,gf=new O,_f=new dt,jn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Go.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_f.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Ji,oa=new O,vr=class{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,m-p,S-f).normalize(),n[1].setComponents(l+r,u+c,m+p,S+f).normalize(),n[2].setComponents(l+a,u+h,m+g,S+M).normalize(),n[3].setComponents(l-a,u-h,m-g,S-M).normalize(),n[4].setComponents(l-o,u-d,m-x,S-v).normalize(),t===gi)n[5].setComponents(l+o,u+d,m+x,S+v).normalize();else if(t===ba)n[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];t?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Jn=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*u-a;for(let v=0;v<c;v++){let S=v*d-r;g.push(S,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,S=M+c*(f+1),C=M+1+c*(f+1),A=M+1+c*f;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Om=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hm=`#define PHONG
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
}`,km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ym=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,$m=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ct={alphahash_fragment:vf,alphahash_pars_fragment:yf,alphamap_fragment:Mf,alphamap_pars_fragment:bf,alphatest_fragment:Sf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:If,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Ff,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:Hf,color_vertex:kf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:Yf,emissivemap_fragment:qf,emissivemap_pars_fragment:Zf,colorspace_fragment:jf,colorspace_pars_fragment:Jf,envmap_fragment:$f,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:xp,lights_fragment_begin:vp,lights_fragment_maps:yp,lights_fragment_end:Mp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Up,morphtarget_vertex:Np,normal_fragment_begin:Op,normal_fragment_maps:Fp,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:Hp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:Yp,packing:qp,premultiplied_alpha_fragment:Zp,project_vertex:jp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:xm,background_frag:vm,backgroundCube_vert:ym,backgroundCube_frag:Mm,cube_vert:bm,cube_frag:Sm,depth_vert:Em,depth_frag:wm,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Um,meshlambert_frag:Nm,meshmatcap_vert:Om,meshmatcap_frag:Fm,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:Hm,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:Ym,points_frag:qm,shadow_vert:Zm,shadow_frag:jm,sprite_vert:Jm,sprite_frag:$m},De={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ii={basic:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new at(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Mn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Mn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Mn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Mn([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Mn([De.lights,De.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ii.physical={uniforms:Mn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var la={r:0,b:0,g:0};function Km(i,e,t,n,s,r,a){let o=new at(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ja)?(h===void 0&&(h=new We(new en(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:zs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ct,(d!==v||u!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new We(new Jn(2,2),new tn({name:"BackgroundMaterial",uniforms:zs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(la,fu(i)),n.buffers.color.setClear(la.r,la.g,la.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Qm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(T,U,H,k,$){let q=!1;if(a){let te=x(k,H,U);c!==te&&(c=te,p(c.object)),q=f(T,k,H,$),q&&M(T,k,H,$)}else{let te=U.wireframe===!0;(c.geometry!==k.id||c.program!==H.id||c.wireframe!==te)&&(c.geometry=k.id,c.program=H.id,c.wireframe=te,q=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(T,U,H,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(T){return n.isWebGL2?i.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?i.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function x(T,U,H){let k=H.wireframe===!0,$=o[T.id];$===void 0&&($={},o[T.id]=$);let q=$[U.id];q===void 0&&(q={},$[U.id]=q);let te=q[k];return te===void 0&&(te=m(u()),q[k]=te),te}function m(T){let U=[],H=[],k=[];for(let $=0;$<s;$++)U[$]=0,H[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,U,H,k){let $=c.attributes,q=U.attributes,te=0,se=H.getAttributes();for(let ge in se)if(se[ge].location>=0){let re=$[ge],Se=q[ge];if(Se===void 0&&(ge==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),ge==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),re===void 0||re.attribute!==Se||Se&&re.data!==Se.data)return!0;te++}return c.attributesNum!==te||c.index!==k}function M(T,U,H,k){let $={},q=U.attributes,te=0,se=H.getAttributes();for(let ge in se)if(se[ge].location>=0){let re=q[ge];re===void 0&&(ge==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),ge==="instanceColor"&&T.instanceColor&&(re=T.instanceColor));let Se={};Se.attribute=re,re&&re.data&&(Se.data=re.data),$[ge]=Se,te++}c.attributes=$,c.attributesNum=te,c.index=k}function v(){let T=c.newAttributes;for(let U=0,H=T.length;U<H;U++)T[U]=0}function S(T){C(T,0)}function C(T,U){let H=c.newAttributes,k=c.enabledAttributes,$=c.attributeDivisors;H[T]=1,k[T]===0&&(i.enableVertexAttribArray(T),k[T]=1),$[T]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,U),$[T]=U)}function A(){let T=c.newAttributes,U=c.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==T[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function w(T,U,H,k,$,q,te){te===!0?i.vertexAttribIPointer(T,U,H,$,q):i.vertexAttribPointer(T,U,H,k,$,q)}function D(T,U,H,k){if(n.isWebGL2===!1&&(T.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=k.attributes,q=H.getAttributes(),te=U.defaultAttributeValues;for(let se in q){let ge=q[se];if(ge.location>=0){let Q=$[se];if(Q===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let re=Q.normalized,Se=Q.itemSize,ze=t.get(Q);if(ze===void 0)continue;let ue=ze.buffer,Ne=ze.type,qe=ze.bytesPerElement,Te=n.isWebGL2===!0&&(Ne===i.INT||Ne===i.UNSIGNED_INT||Q.gpuType===tu);if(Q.isInterleavedBufferAttribute){let Xe=Q.data,F=Xe.stride,oe=Q.offset;if(Xe.isInstancedInterleavedBuffer){for(let ie=0;ie<ge.locationSize;ie++)C(ge.location+ie,Xe.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ie=0;ie<ge.locationSize;ie++)S(ge.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ie=0;ie<ge.locationSize;ie++)w(ge.location+ie,Se/ge.locationSize,Ne,re,F*qe,(oe+Se/ge.locationSize*ie)*qe,Te)}else{if(Q.isInstancedBufferAttribute){for(let Xe=0;Xe<ge.locationSize;Xe++)C(ge.location+Xe,Q.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Xe=0;Xe<ge.locationSize;Xe++)S(ge.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Xe=0;Xe<ge.locationSize;Xe++)w(ge.location+Xe,Se/ge.locationSize,Ne,re,Se*qe,Se/ge.locationSize*Xe*qe,Te)}}else if(te!==void 0){let re=te[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ge.location,re);break;case 3:i.vertexAttrib3fv(ge.location,re);break;case 4:i.vertexAttrib4fv(ge.location,re);break;default:i.vertexAttrib1fv(ge.location,re)}}}}A()}function _(){B();for(let T in o){let U=o[T];for(let H in U){let k=U[H];for(let $ in k)g(k[$].object),delete k[$];delete U[H]}delete o[T]}}function y(T){if(o[T.id]===void 0)return;let U=o[T.id];for(let H in U){let k=U[H];for(let $ in k)g(k[$].object),delete k[$];delete U[H]}delete o[T.id]}function N(T){for(let U in o){let H=o[U];if(H[T.id]===void 0)continue;let k=H[T.id];for(let $ in k)g(k[$].object),delete k[$];delete H[T.id]}}function B(){X(),h=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:X,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function eg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function tg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,S=a||e.has("OES_texture_float"),C=v&&S,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function ng(i){let e=this,t=null,n=0,s=!1,r=!1,a=new jn,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,v=M*4,S=f.clippingState||null;l.value=S,S=h(g,u,v,p);for(let C=0;C!==v;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==x;++v,S+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ig(i){let e=new WeakMap;function t(a,o){return o===ji?a.mapping=Ns:o===nl&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ji||o===nl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hs=class extends Pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=4,Mh=[.125,.215,.35,.446,.526,.582],Yi=20,Wo=new Hs,bh=new at,Xo=null,Yo=0,qo=0,Xi=(1+Math.sqrt(5))/2,ws=1/Xi,Sh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Xi,ws),new O(0,Xi,-ws),new O(ws,0,Xi),new O(-ws,0,Xi),new O(Xi,ws,0),new O(-Xi,ws,0)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,Yo,qo),e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:fn,format:Sn,colorSpace:Dn,depthBuffer:!1},s=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,s){let o=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(bh),h.toneMapping=Ri,h.autoClear=!1;let p=new vi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new We(new en,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(bh),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;ca(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sh[(s-1)%Sh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new We(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let f=[],M=0;for(let w=0;w<Yi;++w){let D=w/x,_=Math.exp(-D*D/2);f.push(_),w===0?M+=_:w<m&&(M+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let S=this._sizeLods[s],C=3*S*(s>v-Cs?s-v+Cs:0),A=4*(this._cubeSize-S);ca(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Wo)}};function sg(i){let e=[],t=[],n=[],s=i,r=i-Cs+1+Mh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Cs?l=Mh[a-i+Cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){let w=A%3*2/3-1,D=A>2?0:-1,_=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];M.set(_,x*g*A),v.set(u,m*g*A);let y=[A,A,A,A,A,A];S.set(y,f*g*A)}let C=new Bt;C.setAttribute("position",new Pt(M,x)),C.setAttribute("uv",new Pt(v,m)),C.setAttribute("faceIndex",new Pt(S,f)),e.push(C),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eh(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rg(i,e,t){let n=new Float32Array(Yi),s=new O(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function wh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Th(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ag(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ji||l===nl,h=l===Ns||l===Os;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ks(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new ks(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let v=0,S=M.length;v<S;v+=3){let C=M[v+0],A=M[v+1],w=M[v+2];u.push(C,A,A,w,w,C)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){let C=v+0,A=v+1,w=v+2;u.push(C,A,A,w,w,C)}}else return;let m=new(uu(u)?Ca:Bs)(u,1);m.version=x;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cg(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function d(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),t.update(g,r,x)}function u(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function hg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,e){return i[0]-e[0]}function dg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let T=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],D=0;M===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let _=h.attributes.position.count*D,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let N=new Float32Array(_*y*4*g),B=new Ta(N,_,y,g);B.type=Tn,B.needsUpdate=!0;let X=D*4;for(let U=0;U<g;U++){let H=C[U],k=A[U],$=w[U],q=_*y*4*U;for(let te=0;te<H.count;te++){let se=te*X;M===!0&&(a.fromBufferAttribute(H,te),N[q+se+0]=a.x,N[q+se+1]=a.y,N[q+se+2]=a.z,N[q+se+3]=0),v===!0&&(a.fromBufferAttribute(k,te),N[q+se+4]=a.x,N[q+se+5]=a.y,N[q+se+6]=a.z,N[q+se+7]=0),S===!0&&(a.fromBufferAttribute($,te),N[q+se+8]=a.x,N[q+se+9]=a.y,N[q+se+10]=a.z,N[q+se+11]=$.itemSize===4?a.w:1)}}x={count:g,texture:B,size:new ce(_,y)},r.set(h,x),h.addEventListener("dispose",T)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let S=g[v];S[0]=v,S[1]=u[v]}g.sort(dg);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ug);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let S=o[v],C=S[0],A=S[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),s[v]=A,f+=A):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function pg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Vs=class extends Rn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:qi,h!==qi&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=Ai),n===void 0&&h===Ii&&(n=_i),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mu=new Rn,gu=new Vs(1,1);gu.compareFunction=cu;var _u=new Ta,xu=new ol,vu=new Ia,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),sn(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),sn(t,n)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),sn(t,n)}}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?gu:mu;t.setTexture2D(e||r,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vu,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return vg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hg(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kg(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vg(i,e){i.uniform1iv(this.addr,e)}function Gg(i,e){i.uniform2iv(this.addr,e)}function Wg(i,e){i.uniform3iv(this.addr,e)}function Xg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function qg(i,e){i.uniform2uiv(this.addr,e)}function Zg(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mu,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function Kg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vu,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_u,r[a])}function e0(i){switch(i){case 5126:return Ng;case 35664:return Og;case 35665:return Fg;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return Yg;case 36294:return qg;case 36295:return Zg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}},ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}},dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function Lh(i,e){i.seq.push(e),i.map[e.id]=e}function t0(i,e,t){let n=i.name,s=n.length;for(Zo.lastIndex=0;;){let r=Zo.exec(n),a=Zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(t,c===void 0?new hl(o,i,e):new ul(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new dl(o),Lh(t,d)),t=d}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);t0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Dh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var n0=37297,i0=0;function s0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function r0(i){let e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(i),n;switch(e===t?n="":e===Ma&&t===ya?n="LinearDisplayP3ToLinearSRGB":e===ya&&t===Ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Dn:case $a:return[n,"LinearTransferOETF"];case Lt:case Ql:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+s0(i.getShaderSource(e),a)}else return s}function a0(i,e){let t=r0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o0(i,e){let t;switch(e){case ql:t="Linear";break;case Zl:t="Reinhard";break;case jl:t="OptimizedCineon";break;case Cr:t="ACESFilmic";break;case Jl:t="AgX";break;case pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function h0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function Nh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(d0,p0)}var f0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function p0(i,e){let t=ct[e];if(t===void 0){let n=f0.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(m0,g0)}function g0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function y0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function M0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function b0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_0(t),c=x0(t),h=v0(t),d=y0(t),u=M0(t),p=t.isWebGL2?"":l0(t),g=c0(t),x=h0(r),m=s.createProgram(),f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),M.length>0&&(M+=`
`)):(f=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),M=[p,Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ri?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=fl(a),a=Nh(a,t),a=Oh(a,t),o=fl(o),o=Nh(o,t),o=Oh(o,t),a=Fh(a),o=Fh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let S=v+f+a,C=v+M+o,A=Dh(s,s.VERTEX_SHADER,S),w=Dh(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(B){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),T=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(w).trim(),H=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,w);else{let $=Uh(s,A,"vertex"),q=Uh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+$+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(T===""||U==="")&&(k=!1);k&&(B.diagnostics={runnable:H,programLog:X,vertexShader:{log:T,prefix:f},fragmentShader:{log:U,prefix:M}})}s.deleteShader(A),s.deleteShader(w),_=new Us(s,m),y=u0(s,m)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,n0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}var S0=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ml(e),t.set(e,n)),n}},ml=class{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}};function E0(i,e,t,n,s,r,a){let o=new Ra,l=new pl,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,y,N,B,X){let T=B.fog,U=X.geometry,H=_.isMeshStandardMaterial?B.environment:null,k=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),$=k&&k.mapping===Ja?k.image.height:null,q=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=te!==void 0?te.length:0,ge=0;U.morphAttributes.position!==void 0&&(ge=1),U.morphAttributes.normal!==void 0&&(ge=2),U.morphAttributes.color!==void 0&&(ge=3);let Q,re,Se,ze;if(q){let cn=ii[q];Q=cn.vertexShader,re=cn.fragmentShader}else Q=_.vertexShader,re=_.fragmentShader,l.update(_),Se=l.getVertexShaderID(_),ze=l.getFragmentShaderID(_);let ue=i.getRenderTarget(),Ne=X.isInstancedMesh===!0,qe=X.isBatchedMesh===!0,Te=!!_.map,Xe=!!_.matcap,F=!!k,oe=!!_.aoMap,ie=!!_.lightMap,_e=!!_.bumpMap,ee=!!_.normalMap,ke=!!_.displacementMap,be=!!_.emissiveMap,P=!!_.metalnessMap,E=!!_.roughnessMap,Y=_.anisotropy>0,de=_.clearcoat>0,fe=_.iridescence>0,ae=_.sheen>0,Be=_.transmission>0,Ce=Y&&!!_.anisotropyMap,xe=de&&!!_.clearcoatMap,Ve=de&&!!_.clearcoatNormalMap,je=de&&!!_.clearcoatRoughnessMap,he=fe&&!!_.iridescenceMap,st=fe&&!!_.iridescenceThicknessMap,z=ae&&!!_.sheenColorMap,me=ae&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,ve=!!_.specularColorMap,Ge=!!_.specularIntensityMap,nt=Be&&!!_.transmissionMap,ot=Be&&!!_.thicknessMap,et=!!_.gradientMap,ye=!!_.alphaMap,V=_.alphaTest>0,Ee=!!_.alphaHash,we=!!_.extensions,Qe=!!U.attributes.uv1,Ze=!!U.attributes.uv2,ft=!!U.attributes.uv3,gt=Ri;return _.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:re,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:ze,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:qe,instancing:Ne,instancingColor:Ne&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Dn,map:Te,matcap:Xe,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:$,aoMap:oe,lightMap:ie,bumpMap:_e,normalMap:ee,displacementMap:u&&ke,emissiveMap:be,normalMapObjectSpace:ee&&_.normalMapType===Td,normalMapTangentSpace:ee&&_.normalMapType===Kl,metalnessMap:P,roughnessMap:E,anisotropy:Y,anisotropyMap:Ce,clearcoat:de,clearcoatMap:xe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:je,iridescence:fe,iridescenceMap:he,iridescenceThicknessMap:st,sheen:ae,sheenColorMap:z,sheenRoughnessMap:me,specularMap:Ae,specularColorMap:ve,specularIntensityMap:Ge,transmission:Be,transmissionMap:nt,thicknessMap:ot,gradientMap:et,opaque:_.transparent===!1&&_.blending===Ls,alphaMap:ye,alphaTest:V,alphaHash:Ee,combine:_.combine,mapUv:Te&&x(_.map.channel),aoMapUv:oe&&x(_.aoMap.channel),lightMapUv:ie&&x(_.lightMap.channel),bumpMapUv:_e&&x(_.bumpMap.channel),normalMapUv:ee&&x(_.normalMap.channel),displacementMapUv:ke&&x(_.displacementMap.channel),emissiveMapUv:be&&x(_.emissiveMap.channel),metalnessMapUv:P&&x(_.metalnessMap.channel),roughnessMapUv:E&&x(_.roughnessMap.channel),anisotropyMapUv:Ce&&x(_.anisotropyMap.channel),clearcoatMapUv:xe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:z&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(_.sheenRoughnessMap.channel),specularMapUv:Ae&&x(_.specularMap.channel),specularColorMapUv:ve&&x(_.specularColorMap.channel),specularIntensityMapUv:Ge&&x(_.specularIntensityMap.channel),transmissionMapUv:nt&&x(_.transmissionMap.channel),thicknessMapUv:ot&&x(_.thicknessMap.channel),alphaMapUv:ye&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ee||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:Ze,vertexUv3s:ft,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(Te||ye),fog:!!T,useFog:_.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&_.map.isVideoTexture===!0&&bt.getTransfer(_.map.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:we&&_.extensions.derivatives===!0,extensionFragDepth:we&&_.extensions.fragDepth===!0,extensionDrawBuffers:we&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)y.push(N),y.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(M(y,_),v(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function v(_,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function S(_){let y=g[_.type],N;if(y){let B=ii[y];N=Kn.clone(B.uniforms)}else N=_.uniforms;return N}function C(_,y){let N;for(let B=0,X=c.length;B<X;B++){let T=c[B];if(T.cacheKey===y){N=T,++N.usedTimes;break}}return N===void 0&&(N=new b0(i,y,_,r),c.push(N)),N}function A(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),_.destroy()}}function w(_){l.remove(_)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:D}}function w0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,p,g,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,u,p,g,x,m){let f=a(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,x,m){let f=a(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||T0),n.length>1&&n.sort(u||zh),s.length>1&&s.sort(u||zh)}function h(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function A0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hh,i.set(n,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function R0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new at};break;case"SpotLight":t={position:new O,direction:new O,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function C0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var P0=0;function I0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L0(i,e){let t=new R0,n=C0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,a=new _t,o=new _t;function l(h,d){let u=0,p=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,m=0,f=0,M=0,v=0,S=0,C=0,A=0,w=0,D=0,_=0;h.sort(I0);let y=d===!0?Math.PI:1;for(let B=0,X=h.length;B<X;B++){let T=h[B],U=T.color,H=T.intensity,k=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=U.r*H*y,p+=U.g*H*y,g+=U.b*H*y;else if(T.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(T.sh.coefficients[q],H);_++}else if(T.isDirectionalLight){let q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*y),T.castShadow){let te=T.shadow,se=n.get(T);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.directionalShadow[x]=se,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=T.shadow.matrix,S++}s.directional[x]=q,x++}else if(T.isSpotLight){let q=t.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(U).multiplyScalar(H*y),q.distance=k,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,s.spot[f]=q;let te=T.shadow;if(T.map&&(s.spotLightMap[w]=T.map,w++,te.updateMatrices(T),T.castShadow&&D++),s.spotLightMatrix[f]=te.matrix,T.castShadow){let se=n.get(T);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.spotShadow[f]=se,s.spotShadowMap[f]=$,A++}f++}else if(T.isRectAreaLight){let q=t.get(T);q.color.copy(U).multiplyScalar(H),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),s.rectArea[M]=q,M++}else if(T.isPointLight){let q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*y),q.distance=T.distance,q.decay=T.decay,T.castShadow){let te=T.shadow,se=n.get(T);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,s.pointShadow[m]=se,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=T.shadow.matrix,C++}s.point[m]=q,m++}else if(T.isHemisphereLight){let q=t.get(T);q.skyColor.copy(T.color).multiplyScalar(H*y),q.groundColor.copy(T.groundColor).multiplyScalar(H*y),s.hemi[v]=q,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==S||N.numPointShadows!==C||N.numSpotShadows!==A||N.numSpotMaps!==w||N.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=_,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=S,N.numPointShadows=C,N.numSpotShadows=A,N.numSpotMaps=w,N.numLightProbes=_,s.version=P0++)}function c(h,d){let u=0,p=0,g=0,x=0,m=0,f=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let S=h[M];if(S.isDirectionalLight){let C=s.directional[u];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),u++}else if(S.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function kh(i,e){let t=new L0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function D0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new kh(i,e),t.set(r,[l])):a>=o.length?(l=new kh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var gl=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O0(i,e,t){let n=new vr,s=new ce,r=new ce,a=new Ft,o=new gl({depthPacking:wd}),l=new _l,c={},h=t.maxTextureSize,d={[Pi]:_n,[_n]:Pi,[bn]:bn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:U0,fragmentShader:N0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let f=this.type;this.render=function(A,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Qt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=f!==pi&&this.type===pi,T=f===pi&&this.type!==pi;for(let U=0,H=A.length;U<H;U++){let k=A[U],$=k.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let q=$.getFrameExtents();if(s.multiply(q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,$.mapSize.y=r.y)),$.map===null||X===!0||T===!0){let se=this.type!==pi?{minFilter:jt,magFilter:jt}:{};$.map!==null&&$.map.dispose(),$.map=new xn(s.x,s.y,se),$.map.texture.name=k.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let te=$.getViewportCount();for(let se=0;se<te;se++){let ge=$.getViewport(se);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),B.viewport(a),$.updateMatrices(k,se),n=$.getFrustum(),S(w,D,$.camera,k,this.type)}$.isPointLightShadow!==!0&&this.type===pi&&M($,D),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,y,N)};function M(A,w){let D=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,D,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,D,p,x,null)}function v(A,w,D,_){let y=null,N=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)y=N;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=y.uuid,X=w.uuid,T=c[B];T===void 0&&(T={},c[B]=T);let U=T[X];U===void 0&&(U=y.clone(),T[X]=U,w.addEventListener("dispose",C)),y=U}if(y.visible=w.visible,y.wireframe=w.wireframe,_===pi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=i.properties.get(y);B.light=D}return y}function S(A,w,D,_,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let X=e.update(A),T=A.material;if(Array.isArray(T)){let U=X.groups;for(let H=0,k=U.length;H<k;H++){let $=U[H],q=T[$.materialIndex];if(q&&q.visible){let te=v(A,q,_,y);A.onBeforeShadow(i,A,w,D,X,te,$),i.renderBufferDirect(D,null,X,te,A,$),A.onAfterShadow(i,A,w,D,X,te,$)}}}else if(T.visible){let U=v(A,T,_,y);A.onBeforeShadow(i,A,w,D,X,U,null),i.renderBufferDirect(D,null,X,U,A,null),A.onAfterShadow(i,A,w,D,X,U,null)}}let B=A.children;for(let X=0,T=B.length;X<T;X++)S(B[X],w,D,_,y)}function C(A){A.target.removeEventListener("dispose",C);for(let D in c){let _=c[D],y=A.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function F0(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Ee=new Ft,we=null,Qe=new Ft(0,0,0,0);return{setMask:function(Ze){we!==Ze&&!V&&(i.colorMask(Ze,Ze,Ze,Ze),we=Ze)},setLocked:function(Ze){V=Ze},setClear:function(Ze,ft,gt,Xt,cn){cn===!0&&(Ze*=Xt,ft*=Xt,gt*=Xt),Ee.set(Ze,ft,gt,Xt),Qe.equals(Ee)===!1&&(i.clearColor(Ze,ft,gt,Xt),Qe.copy(Ee))},reset:function(){V=!1,we=null,Qe.set(-1,0,0,0)}}}function r(){let V=!1,Ee=null,we=null,Qe=null;return{setTest:function(Ze){Ze?qe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Ze){Ee!==Ze&&!V&&(i.depthMask(Ze),Ee=Ze)},setFunc:function(Ze){if(we!==Ze){switch(Ze){case rd:i.depthFunc(i.NEVER);break;case ad:i.depthFunc(i.ALWAYS);break;case od:i.depthFunc(i.LESS);break;case ga:i.depthFunc(i.LEQUAL);break;case ld:i.depthFunc(i.EQUAL);break;case cd:i.depthFunc(i.GEQUAL);break;case hd:i.depthFunc(i.GREATER);break;case ud:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Ze}},setLocked:function(Ze){V=Ze},setClear:function(Ze){Qe!==Ze&&(i.clearDepth(Ze),Qe=Ze)},reset:function(){V=!1,Ee=null,we=null,Qe=null}}}function a(){let V=!1,Ee=null,we=null,Qe=null,Ze=null,ft=null,gt=null,Xt=null,cn=null;return{setTest:function(Tt){V||(Tt?qe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Tt){Ee!==Tt&&!V&&(i.stencilMask(Tt),Ee=Tt)},setFunc:function(Tt,hn,un){(we!==Tt||Qe!==hn||Ze!==un)&&(i.stencilFunc(Tt,hn,un),we=Tt,Qe=hn,Ze=un)},setOp:function(Tt,hn,un){(ft!==Tt||gt!==hn||Xt!==un)&&(i.stencilOp(Tt,hn,un),ft=Tt,gt=hn,Xt=un)},setLocked:function(Tt){V=Tt},setClear:function(Tt){cn!==Tt&&(i.clearStencil(Tt),cn=Tt)},reset:function(){V=!1,Ee=null,we=null,Qe=null,Ze=null,ft=null,gt=null,Xt=null,cn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,v=null,S=null,C=null,A=null,w=null,D=null,_=new at(0,0,0),y=0,N=!1,B=null,X=null,T=null,U=null,H=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,q=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=q>=1):te.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=q>=2);let se=null,ge={},Q=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Se=new Ft().fromArray(Q),ze=new Ft().fromArray(re);function ue(V,Ee,we,Qe){let Ze=new Uint8Array(4),ft=i.createTexture();i.bindTexture(V,ft),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<we;gt++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ee,0,i.RGBA,1,1,Qe,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(Ee+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return ft}let Ne={};Ne[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(i.DEPTH_TEST),l.setFunc(ga),be(!1),P(Mc),qe(i.CULL_FACE),ee(Qt);function qe(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function Te(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Xe(V,Ee){return p[V]!==Ee?(i.bindFramebuffer(V,Ee),p[V]=Ee,n&&(V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ee),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function F(V,Ee){let we=x,Qe=!1;if(V)if(we=g.get(Ee),we===void 0&&(we=[],g.set(Ee,we)),V.isWebGLMultipleRenderTargets){let Ze=V.texture;if(we.length!==Ze.length||we[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,gt=Ze.length;ft<gt;ft++)we[ft]=i.COLOR_ATTACHMENT0+ft;we.length=Ze.length,Qe=!0}}else we[0]!==i.COLOR_ATTACHMENT0&&(we[0]=i.COLOR_ATTACHMENT0,Qe=!0);else we[0]!==i.BACK&&(we[0]=i.BACK,Qe=!0);Qe&&(t.isWebGL2?i.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function oe(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let ie={[zn]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[Ec]=i.MIN,ie[wc]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(ie[Ec]=V.MIN_EXT,ie[wc]=V.MAX_EXT)}let _e={[Zs]:i.ZERO,[ju]:i.ONE,[Ju]:i.SRC_COLOR,[el]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[ja]:i.DST_COLOR,[Za]:i.DST_ALPHA,[$u]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[Qu]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[nd]:i.ONE_MINUS_CONSTANT_COLOR,[id]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(V,Ee,we,Qe,Ze,ft,gt,Xt,cn,Tt){if(V===Qt){f===!0&&(Te(i.BLEND),f=!1);return}if(f===!1&&(qe(i.BLEND),f=!0),V!==Yl){if(V!==M||Tt!==N){if((v!==zn||A!==zn)&&(i.blendEquation(i.FUNC_ADD),v=zn,A=zn),Tt)switch(V){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,C=null,w=null,D=null,_.set(0,0,0),y=0,M=V,N=Tt}return}Ze=Ze||Ee,ft=ft||we,gt=gt||Qe,(Ee!==v||Ze!==A)&&(i.blendEquationSeparate(ie[Ee],ie[Ze]),v=Ee,A=Ze),(we!==S||Qe!==C||ft!==w||gt!==D)&&(i.blendFuncSeparate(_e[we],_e[Qe],_e[ft],_e[gt]),S=we,C=Qe,w=ft,D=gt),(Xt.equals(_)===!1||cn!==y)&&(i.blendColor(Xt.r,Xt.g,Xt.b,cn),_.copy(Xt),y=cn),M=V,N=!1}function ke(V,Ee){V.side===bn?Te(i.CULL_FACE):qe(i.CULL_FACE);let we=V.side===_n;Ee&&(we=!we),be(we),V.blending===Ls&&V.transparent===!1?ee(Qt):ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let Qe=V.stencilWrite;c.setTest(Qe),Qe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Y(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(V){B!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),B=V)}function P(V){V!==Xu?(qe(i.CULL_FACE),V!==X&&(V===Mc?i.cullFace(i.BACK):V===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),X=V}function E(V){V!==T&&($&&i.lineWidth(V),T=V)}function Y(V,Ee,we){V?(qe(i.POLYGON_OFFSET_FILL),(U!==Ee||H!==we)&&(i.polygonOffset(Ee,we),U=Ee,H=we)):Te(i.POLYGON_OFFSET_FILL)}function de(V){V?qe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function fe(V){V===void 0&&(V=i.TEXTURE0+k-1),se!==V&&(i.activeTexture(V),se=V)}function ae(V,Ee,we){we===void 0&&(se===null?we=i.TEXTURE0+k-1:we=se);let Qe=ge[we];Qe===void 0&&(Qe={type:void 0,texture:void 0},ge[we]=Qe),(Qe.type!==V||Qe.texture!==Ee)&&(se!==we&&(i.activeTexture(we),se=we),i.bindTexture(V,Ee||Ne[V]),Qe.type=V,Qe.texture=Ee)}function Be(){let V=ge[se];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(V){Se.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Se.copy(V))}function nt(V){ze.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ze.copy(V))}function ot(V,Ee){let we=d.get(Ee);we===void 0&&(we=new WeakMap,d.set(Ee,we));let Qe=we.get(V);Qe===void 0&&(Qe=i.getUniformBlockIndex(Ee,V.name),we.set(V,Qe))}function et(V,Ee){let Qe=d.get(Ee).get(V);h.get(Ee)!==Qe&&(i.uniformBlockBinding(Ee,Qe,V.__bindingPointIndex),h.set(Ee,Qe))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ge={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,v=null,S=null,C=null,A=null,w=null,D=null,_=new at(0,0,0),y=0,N=!1,B=null,X=null,T=null,U=null,H=null,Se.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:qe,disable:Te,bindFramebuffer:Xe,drawBuffers:F,useProgram:oe,setBlending:ee,setMaterial:ke,setFlipSided:be,setCullFace:P,setLineWidth:E,setPolygonOffset:Y,setScissorTest:de,activeTexture:fe,bindTexture:ae,unbindTexture:Be,compressedTexImage2D:Ce,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:ve,updateUBOMapping:ot,uniformBlockBinding:et,texStorage2D:z,texStorage3D:me,texSubImage2D:Ve,texSubImage3D:je,compressedTexSubImage2D:he,compressedTexSubImage3D:st,scissor:Ge,viewport:nt,reset:ye}}function B0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):_r("canvas")}function x(P,E,Y,de){let fe=1;if((P.width>de||P.height>de)&&(fe=de/Math.max(P.width,P.height)),fe<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ae=E?Sa:Math.floor,Be=ae(fe*P.width),Ce=ae(fe*P.height);d===void 0&&(d=g(Be,Ce));let xe=Y?g(Be,Ce):d;return xe.width=Be,xe.height=Ce,xe.getContext("2d").drawImage(P,0,0,Be,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Be+"x"+Ce+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return rl(P.width)&&rl(P.height)}function f(P){return o?!1:P.wrapS!==Ln||P.wrapT!==Ln||P.minFilter!==jt&&P.minFilter!==Jt}function M(P,E){return P.generateMipmaps&&E&&P.minFilter!==jt&&P.minFilter!==Jt}function v(P){i.generateMipmap(P)}function S(P,E,Y,de,fe=!1){if(o===!1)return E;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=E;if(E===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8)),E===i.RGBA){let Be=fe?va:bt.getTransfer(de);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=Be===Ct?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function C(P,E,Y){return M(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==Jt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){return P===jt||P===Tc||P===yo?i.NEAREST:i.LINEAR}function w(P){let E=P.target;E.removeEventListener("dispose",w),_(E),E.isVideoTexture&&h.delete(E)}function D(P){let E=P.target;E.removeEventListener("dispose",D),N(E)}function _(P){let E=n.get(P);if(E.__webglInit===void 0)return;let Y=P.source,de=u.get(Y);if(de){let fe=de[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&y(P),Object.keys(de).length===0&&u.delete(Y)}n.remove(P)}function y(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let Y=P.source,de=u.get(Y);delete de[E.__cacheKey],a.memory.textures--}function N(P){let E=P.texture,Y=n.get(P),de=n.get(E);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(Y.__webglFramebuffer[fe]))for(let ae=0;ae<Y.__webglFramebuffer[fe].length;ae++)i.deleteFramebuffer(Y.__webglFramebuffer[fe][ae]);else i.deleteFramebuffer(Y.__webglFramebuffer[fe]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[fe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let fe=0;fe<Y.__webglFramebuffer.length;fe++)i.deleteFramebuffer(Y.__webglFramebuffer[fe]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let fe=0;fe<Y.__webglColorRenderbuffer.length;fe++)Y.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[fe]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let fe=0,ae=E.length;fe<ae;fe++){let Be=n.get(E[fe]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),a.memory.textures--),n.remove(E[fe])}n.remove(E),n.remove(P)}let B=0;function X(){B=0}function T(){let P=B;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function U(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){let Y=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,P,E);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function k(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Se(Y,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function $(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Se(Y,P,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function q(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ze(Y,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let te={[An]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},se={[jt]:i.NEAREST,[Tc]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[md]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},ge={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[Rd]:i.LESS,[cu]:i.LEQUAL,[Cd]:i.EQUAL,[Ld]:i.GEQUAL,[Pd]:i.GREATER,[Id]:i.NOTEQUAL};function Q(P,E,Y){if(Y?(i.texParameteri(P,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,te[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,se[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,se[E.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Ln||E.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==jt&&E.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===jt||E.minFilter!==yo&&E.minFilter!==Fs||E.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===fn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(P,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function re(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let de=E.source,fe=u.get(de);fe===void 0&&(fe={},u.set(de,fe));let ae=U(E);if(ae!==P.__cacheKey){fe[ae]===void 0&&(fe[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),fe[ae].usedTimes++;let Be=fe[P.__cacheKey];Be!==void 0&&(fe[P.__cacheKey].usedTimes--,Be.usedTimes===0&&y(E)),P.__cacheKey=ae,P.__webglTexture=fe[ae].texture}return Y}function Se(P,E,Y){let de=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=i.TEXTURE_3D);let fe=re(P,E),ae=E.source;t.bindTexture(de,P.__webglTexture,i.TEXTURE0+Y);let Be=n.get(ae);if(ae.version!==Be.__version||fe===!0){t.activeTexture(i.TEXTURE0+Y);let Ce=bt.getPrimaries(bt.workingColorSpace),xe=E.colorSpace===wn?null:bt.getPrimaries(E.colorSpace),Ve=E.colorSpace===wn||Ce===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let je=f(E)&&m(E.image)===!1,he=x(E.image,je,!1,s.maxTextureSize);he=be(E,he);let st=m(he)||o,z=r.convert(E.format,E.colorSpace),me=r.convert(E.type),Ae=S(E.internalFormat,z,me,E.colorSpace,E.isVideoTexture);Q(de,E,st);let ve,Ge=E.mipmaps,nt=o&&E.isVideoTexture!==!0&&Ae!==ou,ot=Be.__version===void 0||fe===!0,et=C(E,he,st);if(E.isDepthTexture)Ae=i.DEPTH_COMPONENT,o?E.type===Tn?Ae=i.DEPTH_COMPONENT32F:E.type===Ai?Ae=i.DEPTH_COMPONENT24:E.type===_i?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:E.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===qi&&Ae===i.DEPTH_COMPONENT&&E.type!==$l&&E.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ai,me=r.convert(E.type)),E.format===Ii&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,E.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=_i,me=r.convert(E.type))),ot&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Ae,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ae,he.width,he.height,0,z,me,null));else if(E.isDataTexture)if(Ge.length>0&&st){nt&&ot&&t.texStorage2D(i.TEXTURE_2D,et,Ae,Ge[0].width,Ge[0].height);for(let ye=0,V=Ge.length;ye<V;ye++)ve=Ge[ye],nt?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ve.width,ve.height,z,me,ve.data):t.texImage2D(i.TEXTURE_2D,ye,Ae,ve.width,ve.height,0,z,me,ve.data);E.generateMipmaps=!1}else nt?(ot&&t.texStorage2D(i.TEXTURE_2D,et,Ae,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,z,me,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,he.width,he.height,0,z,me,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Ae,Ge[0].width,Ge[0].height,he.depth);for(let ye=0,V=Ge.length;ye<V;ye++)ve=Ge[ye],E.format!==Sn?z!==null?nt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ve.width,ve.height,he.depth,z,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ae,ve.width,ve.height,he.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ve.width,ve.height,he.depth,z,me,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ae,ve.width,ve.height,he.depth,0,z,me,ve.data)}else{nt&&ot&&t.texStorage2D(i.TEXTURE_2D,et,Ae,Ge[0].width,Ge[0].height);for(let ye=0,V=Ge.length;ye<V;ye++)ve=Ge[ye],E.format!==Sn?z!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,ve.width,ve.height,z,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ve.width,ve.height,z,me,ve.data):t.texImage2D(i.TEXTURE_2D,ye,Ae,ve.width,ve.height,0,z,me,ve.data)}else if(E.isDataArrayTexture)nt?(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Ae,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,z,me,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,he.width,he.height,he.depth,0,z,me,he.data);else if(E.isData3DTexture)nt?(ot&&t.texStorage3D(i.TEXTURE_3D,et,Ae,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,z,me,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,he.width,he.height,he.depth,0,z,me,he.data);else if(E.isFramebufferTexture){if(ot)if(nt)t.texStorage2D(i.TEXTURE_2D,et,Ae,he.width,he.height);else{let ye=he.width,V=he.height;for(let Ee=0;Ee<et;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ae,ye,V,0,z,me,null),ye>>=1,V>>=1}}else if(Ge.length>0&&st){nt&&ot&&t.texStorage2D(i.TEXTURE_2D,et,Ae,Ge[0].width,Ge[0].height);for(let ye=0,V=Ge.length;ye<V;ye++)ve=Ge[ye],nt?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,z,me,ve):t.texImage2D(i.TEXTURE_2D,ye,Ae,z,me,ve);E.generateMipmaps=!1}else nt?(ot&&t.texStorage2D(i.TEXTURE_2D,et,Ae,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,z,me,he)):t.texImage2D(i.TEXTURE_2D,0,Ae,z,me,he);M(E,st)&&v(de),Be.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ze(P,E,Y){if(E.image.length!==6)return;let de=re(P,E),fe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);let ae=n.get(fe);if(fe.version!==ae.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);let Be=bt.getPrimaries(bt.workingColorSpace),Ce=E.colorSpace===wn?null:bt.getPrimaries(E.colorSpace),xe=E.colorSpace===wn||Be===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,he=[];for(let ye=0;ye<6;ye++)!Ve&&!je?he[ye]=x(E.image[ye],!1,!0,s.maxCubemapSize):he[ye]=je?E.image[ye].image:E.image[ye],he[ye]=be(E,he[ye]);let st=he[0],z=m(st)||o,me=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),ve=S(E.internalFormat,me,Ae,E.colorSpace),Ge=o&&E.isVideoTexture!==!0,nt=ae.__version===void 0||de===!0,ot=C(E,st,z);Q(i.TEXTURE_CUBE_MAP,E,z);let et;if(Ve){Ge&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ve,st.width,st.height);for(let ye=0;ye<6;ye++){et=he[ye].mipmaps;for(let V=0;V<et.length;V++){let Ee=et[V];E.format!==Sn?me!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,0,0,Ee.width,Ee.height,me,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,0,0,Ee.width,Ee.height,me,Ae,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,ve,Ee.width,Ee.height,0,me,Ae,Ee.data)}}}else{et=E.mipmaps,Ge&&nt&&(et.length>0&&ot++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ve,he[0].width,he[0].height));for(let ye=0;ye<6;ye++)if(je){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,he[ye].width,he[ye].height,me,Ae,he[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,he[ye].width,he[ye].height,0,me,Ae,he[ye].data);for(let V=0;V<et.length;V++){let we=et[V].image[ye].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,0,0,we.width,we.height,me,Ae,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,ve,we.width,we.height,0,me,Ae,we.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,me,Ae,he[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,me,Ae,he[ye]);for(let V=0;V<et.length;V++){let Ee=et[V];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,0,0,me,Ae,Ee.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,ve,me,Ae,Ee.image[ye])}}}M(E,z)&&v(i.TEXTURE_CUBE_MAP),ae.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ue(P,E,Y,de,fe,ae){let Be=r.convert(Y.format,Y.colorSpace),Ce=r.convert(Y.type),xe=S(Y.internalFormat,Be,Ce,Y.colorSpace);if(!n.get(E).__hasExternalTextures){let je=Math.max(1,E.width>>ae),he=Math.max(1,E.height>>ae);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ae,xe,je,he,E.depth,0,Be,Ce,null):t.texImage2D(fe,ae,xe,je,he,0,Be,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,fe,n.get(Y).__webglTexture,0,_e(E)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,fe,n.get(Y).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(P,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let de=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ee(E)){let fe=E.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Tn?de=i.DEPTH_COMPONENT32F:fe.type===Ai&&(de=i.DEPTH_COMPONENT24));let ae=_e(E);ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,de,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,de,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){let de=_e(E);Y&&ee(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,E.width,E.height):ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{let de=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let fe=0;fe<de.length;fe++){let ae=de[fe],Be=r.convert(ae.format,ae.colorSpace),Ce=r.convert(ae.type),xe=S(ae.internalFormat,Be,Ce,ae.colorSpace),Ve=_e(E);Y&&ee(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,xe,E.width,E.height):ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let de=n.get(E.depthTexture).__webglTexture,fe=_e(E);if(E.depthTexture.format===qi)ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(E.depthTexture.format===Ii)ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Te(P){let E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");qe(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]=i.createRenderbuffer(),Ne(E.__webglDepthbuffer[de],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Ne(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(P,E,Y){let de=n.get(P);E!==void 0&&ue(de.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Te(P)}function F(P){let E=P.texture,Y=n.get(P),de=n.get(E);P.addEventListener("dispose",D),P.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=E.version,a.memory.textures++);let fe=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,Be=m(P)||o;if(fe){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(o&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let xe=0;xe<E.mipmaps.length;xe++)Y.__webglFramebuffer[Ce][xe]=i.createFramebuffer()}else Y.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ae)if(s.drawBuffers){let Ce=P.texture;for(let xe=0,Ve=Ce.length;xe<Ve;xe++){let je=n.get(Ce[xe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&ee(P)===!1){let Ce=ae?E:[E];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xe=0;xe<Ce.length;xe++){let Ve=Ce[xe];Y.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[xe]);let je=r.convert(Ve.format,Ve.colorSpace),he=r.convert(Ve.type),st=S(Ve.internalFormat,je,he,Ve.colorSpace,P.isXRRenderTarget===!0),z=_e(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,z,st,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Q(i.TEXTURE_CUBE_MAP,E,Be);for(let Ce=0;Ce<6;Ce++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ue(Y.__webglFramebuffer[Ce][xe],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xe);else ue(Y.__webglFramebuffer[Ce],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(E,Be)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let Ce=P.texture;for(let xe=0,Ve=Ce.length;xe<Ve;xe++){let je=Ce[xe],he=n.get(je);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Q(i.TEXTURE_2D,je,Be),ue(Y.__webglFramebuffer,P,je,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),M(je,Be)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?Ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,de.__webglTexture),Q(Ce,E,Be),o&&E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ue(Y.__webglFramebuffer[xe],P,E,i.COLOR_ATTACHMENT0,Ce,xe);else ue(Y.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,Ce,0);M(E,Be)&&v(Ce),t.unbindTexture()}P.depthBuffer&&Te(P)}function oe(P){let E=m(P)||o,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0,fe=Y.length;de<fe;de++){let ae=Y[de];if(M(ae,E)){let Be=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(ae).__webglTexture;t.bindTexture(Be,Ce),v(Be),t.unbindTexture()}}}function ie(P){if(o&&P.samples>0&&ee(P)===!1){let E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,de=P.height,fe=i.COLOR_BUFFER_BIT,ae=[],Be=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(P),xe=P.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){ae.push(i.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&ae.push(Be);let je=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(je===!1&&(P.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ve]),je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Be])),xe){let he=n.get(E[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Y,de,0,0,Y,de,fe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ve]);let je=n.get(E[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function _e(P){return Math.min(s.maxSamples,P.samples)}function ee(P){let E=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function be(P,E){let Y=P.colorSpace,de=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===sl||Y!==Dn&&Y!==wn&&(bt.getTransfer(Y)===Ct?o===!1?e.has("EXT_sRGB")===!0&&de===Sn?(P.format=sl,P.minFilter=Jt,P.generateMipmaps=!1):E=Ea.sRGBToLinear(E):(de!==Sn||fe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=T,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ee}function z0(i,e,t){let n=t.isWebGL2;function s(r,a=wn){let o,l=bt.getTransfer(a);if(r===si)return i.UNSIGNED_BYTE;if(r===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gd)return i.BYTE;if(r===_d)return i.SHORT;if(r===$l)return i.UNSIGNED_SHORT;if(r===tu)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===fn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xd)return i.ALPHA;if(r===Sn)return i.RGBA;if(r===vd)return i.LUMINANCE;if(r===yd)return i.LUMINANCE_ALPHA;if(r===qi)return i.DEPTH_COMPONENT;if(r===Ii)return i.DEPTH_STENCIL;if(r===sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Md)return i.RED;if(r===su)return i.RED_INTEGER;if(r===bd)return i.RG;if(r===ru)return i.RG_INTEGER;if(r===au)return i.RGBA_INTEGER;if(r===Mo||r===bo||r===So||r===Eo)if(l===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ac||r===Rc||r===Cc||r===Pc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ac)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ou)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ic||r===Lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ic)return l===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Lc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===zc||r===Hc||r===kc||r===Vc||r===Gc||r===Wc||r===Xc||r===Yc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yc)return l===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wo||r===qc||r===Zc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===wo)return l===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sd||r===jc||r===Jc||r===$c)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===wo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var xl=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Hn=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vl=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=t.getContextAttributes(),m=null,f=null,M=[],v=[],S=new ce,C=null,A=new gn;A.layers.enable(1),A.viewport=new Ft;let w=new gn;w.layers.enable(2),w.viewport=new Ft;let D=[A,w],_=new xl;_.layers.enable(1),_.layers.enable(2);let y=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=M[Q];return re===void 0&&(re=new fr,M[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=M[Q];return re===void 0&&(re=new fr,M[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=M[Q];return re===void 0&&(re=new fr,M[Q]=re),re.getHandSpace()};function B(Q){let re=v.indexOf(Q.inputSource);if(re===-1)return;let Se=M[re];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",T);for(let Q=0;Q<M.length;Q++){let re=v[Q];re!==null&&(v[Q]=null,M[Q].disconnect(re))}y=null,N=null,e.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let re={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new xn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let re=null,Se=null,ze=null;x.depth&&(ze=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Ii:qi,Se=x.stencil?_i:Ai);let ue={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new xn(u.textureWidth,u.textureHeight,{format:Sn,type:si,depthTexture:new Vs(u.textureWidth,u.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ne=e.properties.get(f);Ne.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T(Q){for(let re=0;re<Q.removed.length;re++){let Se=Q.removed[re],ze=v.indexOf(Se);ze>=0&&(v[ze]=null,M[ze].disconnect(Se))}for(let re=0;re<Q.added.length;re++){let Se=Q.added[re],ze=v.indexOf(Se);if(ze===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=v.length){v.push(Se),ze=Ne;break}else if(v[Ne]===null){v[Ne]=Se,ze=Ne;break}if(ze===-1)break}let ue=M[ze];ue&&ue.connect(Se)}}let U=new O,H=new O;function k(Q,re,Se){U.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(Se.matrixWorld);let ze=U.distanceTo(H),ue=re.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,qe=ue[14]/(ue[10]-1),Te=ue[14]/(ue[10]+1),Xe=(ue[9]+1)/ue[5],F=(ue[9]-1)/ue[5],oe=(ue[8]-1)/ue[0],ie=(Ne[8]+1)/Ne[0],_e=qe*oe,ee=qe*ie,ke=ze/(-oe+ie),be=ke*-oe;re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(be),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let P=qe+ke,E=Te+ke,Y=_e-be,de=ee+(ze-be),fe=Xe*Te/E*P,ae=F*Te/E*P;Q.projectionMatrix.makePerspective(Y,de,fe,ae,P,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function $(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;_.near=w.near=A.near=Q.near,_.far=w.far=A.far=Q.far,(y!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,N=_.far);let re=Q.parent,Se=_.cameras;$(_,re);for(let ze=0;ze<Se.length;ze++)$(Se[ze],re);Se.length===2?k(_,A,w):_.projectionMatrix.copy(A.projectionMatrix),q(Q,_,re)};function q(Q,re,Se){Se===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=gr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let te=null;function se(Q,re){if(h=re.getViewerPose(c||a),g=re,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ze=!1;Se.length!==_.cameras.length&&(_.cameras.length=0,ze=!0);for(let ue=0;ue<Se.length;ue++){let Ne=Se[ue],qe=null;if(p!==null)qe=p.getViewport(Ne);else{let Xe=d.getViewSubImage(u,Ne);qe=Xe.viewport,ue===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Te=D[ue];Te===void 0&&(Te=new gn,Te.layers.enable(ue),Te.viewport=new Ft,D[ue]=Te),Te.matrix.fromArray(Ne.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ne.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(qe.x,qe.y,qe.width,qe.height),ue===0&&(_.matrix.copy(Te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ze===!0&&_.cameras.push(Te)}}for(let Se=0;Se<M.length;Se++){let ze=v[Se],ue=M[Se];ze!==null&&ue!==void 0&&ue.update(ze,re,c||a)}te&&te(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let ge=new pu;ge.setAnimationLoop(se),this.setAnimationLoop=function(Q){te=Q},this.dispose=function(){}}};function k0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,fu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=s[M.id];S===void 0&&(g(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(M,C);let A=e.render.frame;r[M.id]!==A&&(u(M),r[M.id]=A)}function h(M){let v=d();M.__bindingPointIndex=v;let S=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){let D=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,y=D.length;_<y;_++){let N=D[_];if(p(N,A,_,C)===!0){let B=N.__offset,X=Array.isArray(N.value)?N.value:[N.value],T=0;for(let U=0;U<X.length;U++){let H=X[U],k=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+T,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,T),T+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,S,C){let A=M.value,w=v+"_"+S;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let D=C[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){let v=M.uniforms,S=0,C=16;for(let w=0,D=v.length;w<D;w++){let _=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,N=_.length;y<N;y++){let B=_[y],X=Array.isArray(B.value)?B.value:[B.value];for(let T=0,U=X.length;T<U;T++){let H=X[T],k=x(H),$=S%C;$!==0&&C-$<k.boundary&&(S+=C-$),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=k.storage}}}let A=S%C;return A>0&&(S+=C-A),M.__size=S,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var yr=class{constructor(e={}){let{canvas:t=Zd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let v=this,S=!1,C=0,A=0,w=null,D=-1,_=null,y=new Ft,N=new Ft,B=null,X=new at(0),T=0,U=t.width,H=t.height,k=1,$=null,q=null,te=new Ft(0,0,U,H),se=new Ft(0,0,U,H),ge=!1,Q=new vr,re=!1,Se=!1,ze=null,ue=new _t,Ne=new ce,qe=new O,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?k:1}let F=n;function oe(I,J){for(let b=0;b<I.length;b++){let R=I[b],L=t.getContext(R,J);if(L!==null)return L}return null}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),F===null){let J=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&J.shift(),F=oe(J,I),F===null)throw oe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ie,_e,ee,ke,be,P,E,Y,de,fe,ae,Be,Ce,xe,Ve,je,he,st,z,me,Ae,ve,Ge,nt;function ot(){ie=new og(F),_e=new tg(F,ie,e),ie.init(_e),ve=new z0(F,ie,_e),ee=new F0(F,ie,_e),ke=new hg(F),be=new w0,P=new B0(F,ie,ee,be,_e,ve,ke),E=new ig(v),Y=new ag(v),de=new xf(F,_e),Ge=new Qm(F,ie,de,_e),fe=new lg(F,de,ke,Ge),ae=new pg(F,fe,de,ke),z=new fg(F,_e,P),je=new ng(be),Be=new E0(v,E,Y,ie,_e,Ge,je),Ce=new k0(v,be),xe=new A0,Ve=new D0(ie,_e),st=new Km(v,E,Y,ee,ae,u,l),he=new O0(v,ae,_e),nt=new V0(F,ke,_e,ee),me=new eg(F,ie,ke,_e),Ae=new cg(F,ie,ke,_e),ke.programs=Be.programs,v.capabilities=_e,v.extensions=ie,v.properties=be,v.renderLists=xe,v.shadowMap=he,v.state=ee,v.info=ke}ot();let et=new vl(v,F);this.xr=et,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(U,H,!1))},this.getSize=function(I){return I.set(U,H)},this.setSize=function(I,J,b=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=I,H=J,t.width=Math.floor(I*k),t.height=Math.floor(J*k),b===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(U*k,H*k).floor()},this.setDrawingBufferSize=function(I,J,b){U=I,H=J,k=b,t.width=Math.floor(I*b),t.height=Math.floor(J*b),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(y)},this.getViewport=function(I){return I.copy(te)},this.setViewport=function(I,J,b,R){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,J,b,R),ee.viewport(y.copy(te).multiplyScalar(k).floor())},this.getScissor=function(I){return I.copy(se)},this.setScissor=function(I,J,b,R){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,J,b,R),ee.scissor(N.copy(se).multiplyScalar(k).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(I){ee.setScissorTest(ge=I)},this.setOpaqueSort=function(I){$=I},this.setTransparentSort=function(I){q=I},this.getClearColor=function(I){return I.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(I=!0,J=!0,b=!0){let R=0;if(I){let L=!1;if(w!==null){let W=w.texture.format;L=W===au||W===ru||W===su}if(L){let W=w.texture.type,j=W===si||W===Ai||W===$l||W===_i||W===nu||W===iu,Z=st.getClearColor(),K=st.getClearAlpha(),ne=Z.r,le=Z.g,pe=Z.b;j?(p[0]=ne,p[1]=le,p[2]=pe,p[3]=K,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=ne,g[1]=le,g[2]=pe,g[3]=K,F.clearBufferiv(F.COLOR,0,g))}else R|=F.COLOR_BUFFER_BIT}J&&(R|=F.DEPTH_BUFFER_BIT),b&&(R|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),xe.dispose(),Ve.dispose(),be.dispose(),E.dispose(),Y.dispose(),ae.dispose(),Ge.dispose(),nt.dispose(),Be.dispose(),et.dispose(),et.removeEventListener("sessionstart",cn),et.removeEventListener("sessionend",Tt),ze&&(ze.dispose(),ze=null),hn.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=ke.autoReset,J=he.enabled,b=he.autoUpdate,R=he.needsUpdate,L=he.type;ot(),ke.autoReset=I,he.enabled=J,he.autoUpdate=b,he.needsUpdate=R,he.type=L}function Ee(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function we(I){let J=I.target;J.removeEventListener("dispose",we),Qe(J)}function Qe(I){Ze(I),be.remove(I)}function Ze(I){let J=be.get(I).programs;J!==void 0&&(J.forEach(function(b){Be.releaseProgram(b)}),I.isShaderMaterial&&Be.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,b,R,L,W){J===null&&(J=Te);let j=L.isMesh&&L.matrixWorld.determinant()<0,Z=tr(I,J,b,R,L);ee.setMaterial(R,j);let K=b.index,ne=1;if(R.wireframe===!0){if(K=fe.getWireframeAttribute(b),K===void 0)return;ne=2}let le=b.drawRange,pe=b.attributes.position,Le=le.start*ne,Re=(le.start+le.count)*ne;W!==null&&(Le=Math.max(Le,W.start*ne),Re=Math.min(Re,(W.start+W.count)*ne)),K!==null?(Le=Math.max(Le,0),Re=Math.min(Re,K.count)):pe!=null&&(Le=Math.max(Le,0),Re=Math.min(Re,pe.count));let Oe=Re-Le;if(Oe<0||Oe===1/0)return;Ge.setup(L,R,Z,b,K);let Pe,Ue=me;if(K!==null&&(Pe=de.get(K),Ue=Ae,Ue.setIndex(Pe)),L.isMesh)R.wireframe===!0?(ee.setLineWidth(R.wireframeLinewidth*Xe()),Ue.setMode(F.LINES)):Ue.setMode(F.TRIANGLES);else if(L.isLine){let Me=R.linewidth;Me===void 0&&(Me=1),ee.setLineWidth(Me*Xe()),L.isLineSegments?Ue.setMode(F.LINES):L.isLineLoop?Ue.setMode(F.LINE_LOOP):Ue.setMode(F.LINE_STRIP)}else L.isPoints?Ue.setMode(F.POINTS):L.isSprite&&Ue.setMode(F.TRIANGLES);if(L.isBatchedMesh)Ue.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)Ue.renderInstances(Le,Oe,L.count);else if(b.isInstancedBufferGeometry){let Me=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,Ke=Math.min(b.instanceCount,Me);Ue.renderInstances(Le,Oe,Ke)}else Ue.render(Le,Oe)};function ft(I,J,b){I.transparent===!0&&I.side===bn&&I.forceSinglePass===!1?(I.side=_n,I.needsUpdate=!0,Cn(I,J,b),I.side=Pi,I.needsUpdate=!0,Cn(I,J,b),I.side=bn):Cn(I,J,b)}this.compile=function(I,J,b=null){b===null&&(b=I),m=Ve.get(b),m.init(),M.push(m),b.traverseVisible(function(L){L.isLight&&L.layers.test(J.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),I!==b&&I.traverseVisible(function(L){L.isLight&&L.layers.test(J.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights(v._useLegacyLights);let R=new Set;return I.traverse(function(L){let W=L.material;if(W)if(Array.isArray(W))for(let j=0;j<W.length;j++){let Z=W[j];ft(Z,b,L),R.add(Z)}else ft(W,b,L),R.add(W)}),M.pop(),m=null,R},this.compileAsync=function(I,J,b=null){let R=this.compile(I,J,b);return new Promise(L=>{function W(){if(R.forEach(function(j){be.get(j).currentProgram.isReady()&&R.delete(j)}),R.size===0){L(I);return}setTimeout(W,10)}ie.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let gt=null;function Xt(I){gt&&gt(I)}function cn(){hn.stop()}function Tt(){hn.start()}let hn=new pu;hn.setAnimationLoop(Xt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(I){gt=I,et.setAnimationLoop(I),I===null?hn.stop():hn.start()},et.addEventListener("sessionstart",cn),et.addEventListener("sessionend",Tt),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(J),J=et.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,J,w),m=Ve.get(I,M.length),m.init(),M.push(m),ue.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(ue),Se=this.localClippingEnabled,re=je.init(this.clippingPlanes,Se),x=xe.get(I,f.length),x.init(),f.push(x),un(I,J,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,q),this.info.render.frame++,re===!0&&je.beginShadows();let b=m.state.shadowsArray;if(he.render(b,I,J),re===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(x,I),m.setupLights(v._useLegacyLights),J.isArrayCamera){let R=J.cameras;for(let L=0,W=R.length;L<W;L++){let j=R[L];Oi(x,I,j,j.viewport)}}else Oi(x,I,J);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(v,I,J),Ge.resetDefaultState(),D=-1,_=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function un(I,J,b,R){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)b=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Q.intersectsSprite(I)){R&&qe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ue);let j=ae.update(I),Z=I.material;Z.visible&&x.push(I,j,Z,b,qe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Q.intersectsObject(I))){let j=ae.update(I),Z=I.material;if(R&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),qe.copy(I.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),qe.copy(j.boundingSphere.center)),qe.applyMatrix4(I.matrixWorld).applyMatrix4(ue)),Array.isArray(Z)){let K=j.groups;for(let ne=0,le=K.length;ne<le;ne++){let pe=K[ne],Le=Z[pe.materialIndex];Le&&Le.visible&&x.push(I,j,Le,b,qe.z,pe)}}else Z.visible&&x.push(I,j,Z,b,qe.z,null)}}let W=I.children;for(let j=0,Z=W.length;j<Z;j++)un(W[j],J,b,R)}function Oi(I,J,b,R){let L=I.opaque,W=I.transmissive,j=I.transparent;m.setupLightsView(b),re===!0&&je.setGlobalState(v.clippingPlanes,b),W.length>0&&as(L,W,J,b),R&&ee.viewport(y.copy(R)),L.length>0&&Fi(L,J,b),W.length>0&&Fi(W,J,b),j.length>0&&Fi(j,J,b),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function as(I,J,b,R){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;let W=_e.isWebGL2;ze===null&&(ze=new xn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?fn:si,minFilter:Fs,samples:W?4:0})),v.getDrawingBufferSize(Ne),W?ze.setSize(Ne.x,Ne.y):ze.setSize(Sa(Ne.x),Sa(Ne.y));let j=v.getRenderTarget();v.setRenderTarget(ze),v.getClearColor(X),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();let Z=v.toneMapping;v.toneMapping=Ri,Fi(I,b,R),P.updateMultisampleRenderTarget(ze),P.updateRenderTargetMipmap(ze);let K=!1;for(let ne=0,le=J.length;ne<le;ne++){let pe=J[ne],Le=pe.object,Re=pe.geometry,Oe=pe.material,Pe=pe.group;if(Oe.side===bn&&Le.layers.test(R.layers)){let Ue=Oe.side;Oe.side=_n,Oe.needsUpdate=!0,er(Le,b,R,Re,Oe,Pe),Oe.side=Ue,Oe.needsUpdate=!0,K=!0}}K===!0&&(P.updateMultisampleRenderTarget(ze),P.updateRenderTargetMipmap(ze)),v.setRenderTarget(j),v.setClearColor(X,T),v.toneMapping=Z}function Fi(I,J,b){let R=J.isScene===!0?J.overrideMaterial:null;for(let L=0,W=I.length;L<W;L++){let j=I[L],Z=j.object,K=j.geometry,ne=R===null?j.material:R,le=j.group;Z.layers.test(b.layers)&&er(Z,J,b,K,ne,le)}}function er(I,J,b,R,L,W){I.onBeforeRender(v,J,b,R,L,W),I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),L.onBeforeRender(v,J,b,R,I,W),L.transparent===!0&&L.side===bn&&L.forceSinglePass===!1?(L.side=_n,L.needsUpdate=!0,v.renderBufferDirect(b,J,R,L,I,W),L.side=Pi,L.needsUpdate=!0,v.renderBufferDirect(b,J,R,L,I,W),L.side=bn):v.renderBufferDirect(b,J,R,L,I,W),I.onAfterRender(v,J,b,R,L,W)}function Cn(I,J,b){J.isScene!==!0&&(J=Te);let R=be.get(I),L=m.state.lights,W=m.state.shadowsArray,j=L.state.version,Z=Be.getParameters(I,L.state,W,J,b),K=Be.getProgramCacheKey(Z),ne=R.programs;R.environment=I.isMeshStandardMaterial?J.environment:null,R.fog=J.fog,R.envMap=(I.isMeshStandardMaterial?Y:E).get(I.envMap||R.environment),ne===void 0&&(I.addEventListener("dispose",we),ne=new Map,R.programs=ne);let le=ne.get(K);if(le!==void 0){if(R.currentProgram===le&&R.lightsStateVersion===j)return os(I,Z),le}else Z.uniforms=Be.getUniforms(I),I.onBuild(b,Z,v),I.onBeforeCompile(Z,v),le=Be.acquireProgram(Z,K),ne.set(K,le),R.uniforms=Z.uniforms;let pe=R.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(pe.clippingPlanes=je.uniform),os(I,Z),R.needsLights=ls(I),R.lightsStateVersion=j,R.needsLights&&(pe.ambientLightColor.value=L.state.ambient,pe.lightProbe.value=L.state.probe,pe.directionalLights.value=L.state.directional,pe.directionalLightShadows.value=L.state.directionalShadow,pe.spotLights.value=L.state.spot,pe.spotLightShadows.value=L.state.spotShadow,pe.rectAreaLights.value=L.state.rectArea,pe.ltc_1.value=L.state.rectAreaLTC1,pe.ltc_2.value=L.state.rectAreaLTC2,pe.pointLights.value=L.state.point,pe.pointLightShadows.value=L.state.pointShadow,pe.hemisphereLights.value=L.state.hemi,pe.directionalShadowMap.value=L.state.directionalShadowMap,pe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,pe.spotShadowMap.value=L.state.spotShadowMap,pe.spotLightMatrix.value=L.state.spotLightMatrix,pe.spotLightMap.value=L.state.spotLightMap,pe.pointShadowMap.value=L.state.pointShadowMap,pe.pointShadowMatrix.value=L.state.pointShadowMatrix),R.currentProgram=le,R.uniformsList=null,le}function Bi(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Us.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function os(I,J){let b=be.get(I);b.outputColorSpace=J.outputColorSpace,b.batching=J.batching,b.instancing=J.instancing,b.instancingColor=J.instancingColor,b.skinning=J.skinning,b.morphTargets=J.morphTargets,b.morphNormals=J.morphNormals,b.morphColors=J.morphColors,b.morphTargetsCount=J.morphTargetsCount,b.numClippingPlanes=J.numClippingPlanes,b.numIntersection=J.numClipIntersection,b.vertexAlphas=J.vertexAlphas,b.vertexTangents=J.vertexTangents,b.toneMapping=J.toneMapping}function tr(I,J,b,R,L){J.isScene!==!0&&(J=Te),P.resetTextureUnits();let W=J.fog,j=R.isMeshStandardMaterial?J.environment:null,Z=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Dn,K=(R.isMeshStandardMaterial?Y:E).get(R.envMap||j),ne=R.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,le=!!b.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),pe=!!b.morphAttributes.position,Le=!!b.morphAttributes.normal,Re=!!b.morphAttributes.color,Oe=Ri;R.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Oe=v.toneMapping);let Pe=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,Me=be.get(R),Ke=m.state.lights;if(re===!0&&(Se===!0||I!==_)){let rt=I===_&&R.id===D;je.setState(R,I,rt)}let ht=!1;R.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ke.state.version||Me.outputColorSpace!==Z||L.isBatchedMesh&&Me.batching===!1||!L.isBatchedMesh&&Me.batching===!0||L.isInstancedMesh&&Me.instancing===!1||!L.isInstancedMesh&&Me.instancing===!0||L.isSkinnedMesh&&Me.skinning===!1||!L.isSkinnedMesh&&Me.skinning===!0||L.isInstancedMesh&&Me.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Me.instancingColor===!1&&L.instanceColor!==null||Me.envMap!==K||R.fog===!0&&Me.fog!==W||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==je.numPlanes||Me.numIntersection!==je.numIntersection)||Me.vertexAlphas!==ne||Me.vertexTangents!==le||Me.morphTargets!==pe||Me.morphNormals!==Le||Me.morphColors!==Re||Me.toneMapping!==Oe||_e.isWebGL2===!0&&Me.morphTargetsCount!==Ue)&&(ht=!0):(ht=!0,Me.__version=R.version);let At=Me.currentProgram;ht===!0&&(At=Cn(R,J,L));let Ut=!1,Nt=!1,Yt=!1,lt=At.getUniforms(),Ye=Me.uniforms;if(ee.useProgram(At.program)&&(Ut=!0,Nt=!0,Yt=!0),R.id!==D&&(D=R.id,Nt=!0),Ut||_!==I){lt.setValue(F,"projectionMatrix",I.projectionMatrix),lt.setValue(F,"viewMatrix",I.matrixWorldInverse);let rt=lt.map.cameraPosition;rt!==void 0&&rt.setValue(F,qe.setFromMatrixPosition(I.matrixWorld)),_e.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&lt.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,Nt=!0,Yt=!0)}if(L.isSkinnedMesh){lt.setOptional(F,L,"bindMatrix"),lt.setOptional(F,L,"bindMatrixInverse");let rt=L.skeleton;rt&&(_e.floatVertexTextures?(rt.boneTexture===null&&rt.computeBoneTexture(),lt.setValue(F,"boneTexture",rt.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(lt.setOptional(F,L,"batchingTexture"),lt.setValue(F,"batchingTexture",L._matricesTexture,P));let tt=b.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0&&_e.isWebGL2===!0)&&z.update(L,b,At),(Nt||Me.receiveShadow!==L.receiveShadow)&&(Me.receiveShadow=L.receiveShadow,lt.setValue(F,"receiveShadow",L.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Ye.envMap.value=K,Ye.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),Nt&&(lt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&Hr(Ye,Yt),W&&R.fog===!0&&Ce.refreshFogUniforms(Ye,W),Ce.refreshMaterialUniforms(Ye,R,k,H,ze),Us.upload(F,Bi(Me),Ye,P)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Us.upload(F,Bi(Me),Ye,P),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&lt.setValue(F,"center",L.center),lt.setValue(F,"modelViewMatrix",L.modelViewMatrix),lt.setValue(F,"normalMatrix",L.normalMatrix),lt.setValue(F,"modelMatrix",L.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){let rt=R.uniformsGroups;for(let It=0,Je=rt.length;It<Je;It++)if(_e.isWebGL2){let Mt=rt[It];nt.update(Mt,At),nt.bind(Mt,At)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return At}function Hr(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function ls(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,J,b){be.get(I.texture).__webglTexture=J,be.get(I.depthTexture).__webglTexture=b;let R=be.get(I);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=b===void 0,R.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){let b=be.get(I);b.__webglFramebuffer=J,b.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,b=0){w=I,C=J,A=b;let R=!0,L=null,W=!1,j=!1;if(I){let K=be.get(I);K.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(F.FRAMEBUFFER,null),R=!1):K.__webglFramebuffer===void 0?P.setupRenderTarget(I):K.__hasExternalTextures&&P.rebindTextures(I,be.get(I.texture).__webglTexture,be.get(I.depthTexture).__webglTexture);let ne=I.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(j=!0);let le=be.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(le[J])?L=le[J][b]:L=le[J],W=!0):_e.isWebGL2&&I.samples>0&&P.useMultisampledRTT(I)===!1?L=be.get(I).__webglMultisampledFramebuffer:Array.isArray(le)?L=le[b]:L=le,y.copy(I.viewport),N.copy(I.scissor),B=I.scissorTest}else y.copy(te).multiplyScalar(k).floor(),N.copy(se).multiplyScalar(k).floor(),B=ge;if(ee.bindFramebuffer(F.FRAMEBUFFER,L)&&_e.drawBuffers&&R&&ee.drawBuffers(I,L),ee.viewport(y),ee.scissor(N),ee.setScissorTest(B),W){let K=be.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+J,K.__webglTexture,b)}else if(j){let K=be.get(I.texture),ne=J||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,K.__webglTexture,b||0,ne)}D=-1},this.readRenderTargetPixels=function(I,J,b,R,L,W,j){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=be.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&j!==void 0&&(Z=Z[j]),Z){ee.bindFramebuffer(F.FRAMEBUFFER,Z);try{let K=I.texture,ne=K.format,le=K.type;if(ne!==Sn&&ve.convert(ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let pe=le===fn&&(ie.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ie.has("EXT_color_buffer_float"));if(le!==si&&ve.convert(le)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(le===Tn&&(_e.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-R&&b>=0&&b<=I.height-L&&F.readPixels(J,b,R,L,ve.convert(ne),ve.convert(le),W)}finally{let K=w!==null?be.get(w).__webglFramebuffer:null;ee.bindFramebuffer(F.FRAMEBUFFER,K)}}},this.copyFramebufferToTexture=function(I,J,b=0){let R=Math.pow(2,-b),L=Math.floor(J.image.width*R),W=Math.floor(J.image.height*R);P.setTexture2D(J,0),F.copyTexSubImage2D(F.TEXTURE_2D,b,0,0,I.x,I.y,L,W),ee.unbindTexture()},this.copyTextureToTexture=function(I,J,b,R=0){let L=J.image.width,W=J.image.height,j=ve.convert(b.format),Z=ve.convert(b.type);P.setTexture2D(b,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,b.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,b.unpackAlignment),J.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,R,I.x,I.y,L,W,j,Z,J.image.data):J.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,R,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,j,J.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,R,I.x,I.y,j,Z,J.image),R===0&&b.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(I,J,b,R,L=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let W=I.max.x-I.min.x+1,j=I.max.y-I.min.y+1,Z=I.max.z-I.min.z+1,K=ve.convert(R.format),ne=ve.convert(R.type),le;if(R.isData3DTexture)P.setTexture3D(R,0),le=F.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)P.setTexture2DArray(R,0),le=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,R.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,R.unpackAlignment);let pe=F.getParameter(F.UNPACK_ROW_LENGTH),Le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Re=F.getParameter(F.UNPACK_SKIP_PIXELS),Oe=F.getParameter(F.UNPACK_SKIP_ROWS),Pe=F.getParameter(F.UNPACK_SKIP_IMAGES),Ue=b.isCompressedTexture?b.mipmaps[L]:b.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,I.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,I.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,I.min.z),b.isDataTexture||b.isData3DTexture?F.texSubImage3D(le,L,J.x,J.y,J.z,W,j,Z,K,ne,Ue.data):b.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(le,L,J.x,J.y,J.z,W,j,Z,K,Ue.data)):F.texSubImage3D(le,L,J.x,J.y,J.z,W,j,Z,K,ne,Ue),F.pixelStorei(F.UNPACK_ROW_LENGTH,pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe),L===0&&R.generateMipmaps&&F.generateMipmap(le),ee.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?P.setTextureCube(I,0):I.isData3DTexture?P.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?P.setTexture2DArray(I,0):P.setTexture2D(I,0),ee.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,ee.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===$a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Zi:lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zi?Lt:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yl=class extends yr{};yl.prototype.isWebGL1Renderer=!0;var Gs=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var yi=class extends Rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,h=jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new _t,Vh=new _t,ha=[],Gh=new xi,G0=new _t,or=new We,lr=new Ji,La=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Gh.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Gh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),lr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Vh.multiplyMatrices(n,Ts),or.matrixWorld=Vh,or.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){let l=ha[a];l.instanceId=r,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Di=class extends Rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],a=[],o=new O,l=new _t;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($t(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos($t(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ce,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends br{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ua=new O,jo=new nc,Jo=new nc,$o=new nc,bl=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ua.subVectors(s[0],s[1]).add(s[0]),c=ua);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),jo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),Jo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),$o.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Jo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),$o.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(jo.calc(l),Jo.calc(l),$o.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function W0(i,e){let t=1-i;return t*t*e}function X0(i,e){return 2*(1-i)*i*e}function Y0(i,e){return i*i*e}function pr(i,e,t,n){return W0(i,e)+X0(i,t)+Y0(i,n)}function q0(i,e){let t=1-i;return t*t*t*e}function Z0(i,e){let t=1-i;return 3*t*t*i*e}function j0(i,e){return 3*(1-i)*i*i*e}function J0(i,e){return i*i*i*e}function mr(i,e,t,n,s){return q0(i,e)+Z0(i,t)+j0(i,n)+J0(i,s)}var Da=class extends kn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends kn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y),mr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends kn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends kn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends kn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends kn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y),pr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Wh(o,l.x,c.x,h.x,d.x),Wh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Tl=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:bl,CubicBezierCurve:Da,CubicBezierCurve3:Sl,EllipseCurve:br,LineCurve:Ua,LineCurve3:El,QuadraticBezierCurve:Na,QuadraticBezierCurve3:wl,SplineCurve:Oa}),Al=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Tl[s.type]().fromJSON(s))}return this}},Ws=class extends Al{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Na(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Da(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new br(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Fa=class i extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$i=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],m=n/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(p,2));function M(){let S=new O,C=new O,A=0,w=(t-e)/n;for(let D=0;D<=r;D++){let _=[],y=D/r,N=y*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,T=X*l+o,U=Math.sin(T),H=Math.cos(T);C.x=N*U,C.y=-y*n+m,C.z=N*H,d.push(C.x,C.y,C.z),S.set(U,w,H).normalize(),u.push(S.x,S.y,S.z),p.push(X,1-y),_.push(g++)}x.push(_)}for(let D=0;D<s;D++)for(let _=0;_<r;_++){let y=x[_][D],N=x[_+1][D],B=x[_+1][D+1],X=x[_][D+1];h.push(y,N,X),h.push(N,B,X),A+=6}c.addGroup(f,A,0),f+=A}function v(S){let C=g,A=new ce,w=new O,D=0,_=S===!0?e:t,y=S===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let T=B/s*l+o,U=Math.cos(T),H=Math.sin(T);w.x=_*H,w.y=m*y,w.z=_*U,d.push(w.x,w.y,w.z),u.push(0,y,0),A.x=U*.5+.5,A.y=H*.5*y+.5,p.push(A.x,A.y),g++}for(let B=0;B<s;B++){let X=C+B,T=N+B;S===!0?h.push(T,T+1,X):h.push(T+1,T,X),D+=3}c.addGroup(f,D,S===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Rl=class i extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new O,S=new O,C=new O;for(let A=0;A<t.length;A+=3)p(t[A+0],v),p(t[A+1],S),p(t[A+2],C),l(v,S,C,M)}function l(M,v,S,C){let A=C+1,w=[];for(let D=0;D<=A;D++){w[D]=[];let _=M.clone().lerp(S,D/A),y=v.clone().lerp(S,D/A),N=A-D;for(let B=0;B<=N;B++)B===0&&D===A?w[D][B]=_:w[D][B]=_.clone().lerp(y,B/N)}for(let D=0;D<A;D++)for(let _=0;_<2*(A-D)-1;_++){let y=Math.floor(_/2);_%2===0?(u(w[D][y+1]),u(w[D+1][y]),u(w[D][y])):(u(w[D][y+1]),u(w[D+1][y+1]),u(w[D+1][y]))}}function c(M){let v=new O;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){let M=new O;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let S=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;a.push(S,1-C)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],S=a[M+2],C=a[M+4],A=Math.max(v,S,C),w=Math.min(v,S,C);A>.9&&w<.1&&(v<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,v){let S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){let M=new O,v=new O,S=new O,C=new O,A=new ce,w=new ce,D=new ce;for(let _=0,y=0;_<r.length;_+=9,y+=6){M.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),S.set(r[_+6],r[_+7],r[_+8]),A.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),C.copy(M).add(v).add(S).divideScalar(3);let N=m(C);x(A,y+0,M,N),x(w,y+2,v,N),x(D,y+4,S,N)}}function x(M,v,S,C){C<0&&M.x===1&&(a[v]=M.x-1),S.x===0&&S.z===0&&(a[v]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Nn=class extends Ws{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ws().fromJSON(s))}return this}},$0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(n&&(r=n_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Sr(r,a,t,o,l,p,0),a}};function yu(i,e,t,n,s){let r,a;if(s===f_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Xh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xh(r,i[r],i[r+1],a);return a&&Qa(a,a.next)&&(wr(a),a=a.next),a}function Ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qa(t,t.next)||Ht(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&o_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Q0(i,n,s,r):K0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),wr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=e_(Ki(i),e,t),Sr(i,e,t,n,s,r,2)):a===2&&t_(i,e,t,n,s,r):Sr(Ki(i),e,t,n,s,r,1);break}}}function K0(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Is(s,o,r,l,a,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ht(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=Cl(p,g,e,t,n),M=Cl(x,m,e,t,n),v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Is(o,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Is(o,h,l,d,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Is(o,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Is(o,h,l,d,c,u,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function e_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Qa(s,r)&&Mu(s,n,n.next,r)&&Er(s,r)&&Er(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),wr(n),wr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function t_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&h_(a,o)){let l=bu(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Sr(a,e,t,n,s,r,0),Sr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function n_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(c_(c));for(s.sort(i_),r=0;r<s.length;r++)t=s_(s[r],t);return t}function i_(i,e){return i.x-e.x}function s_(i,e){let t=r_(i,e);if(!t)return e;let n=bu(t,i);return Ki(n,n.next),Ki(t,t.next)}function r_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Is(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Er(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&a_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function a_(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function o_(i,e,t,n){let s=i;do s.z===0&&(s.z=Cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function c_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Is(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function h_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!u_(i,e)&&(Er(i,e)&&Er(e,i)&&d_(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Qa(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qa(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){let s=fa(Ht(i,e,t)),r=fa(Ht(i,e,n)),a=fa(Ht(t,n,i)),o=fa(Ht(t,n,e));return!!(s!==r&&a!==o||s===0&&da(i,t,e)||r===0&&da(i,n,e)||a===0&&da(t,i,n)||o===0&&da(t,e,n))}function da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function u_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Er(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function d_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bu(i,e){let t=new Pl(i.i,i.x,i.y),n=new Pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xh(i,e,t,n){let s=new Pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yh(e),qh(n,e);let a=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qh(n,t[l]);let o=$0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ai=class i extends Bt{constructor(e=new Nn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:p_,v,S=!1,C,A,w,D;f&&(v=f.getSpacedPoints(h),S=!0,u=!1,C=f.computeFrenetFrames(h,!1),A=new O,w=new O,D=new O),u||(m=0,p=0,g=0,x=0);let _=o.extractPoints(c),y=_.shape,N=_.holes;if(!Ci.isClockWise(y)){y=y.reverse();for(let F=0,oe=N.length;F<oe;F++){let ie=N[F];Ci.isClockWise(ie)&&(N[F]=ie.reverse())}}let X=Ci.triangulateShape(y,N),T=y;for(let F=0,oe=N.length;F<oe;F++){let ie=N[F];y=y.concat(ie)}function U(F,oe,ie){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(oe,ie)}let H=y.length,k=X.length;function $(F,oe,ie){let _e,ee,ke,be=F.x-oe.x,P=F.y-oe.y,E=ie.x-F.x,Y=ie.y-F.y,de=be*be+P*P,fe=be*Y-P*E;if(Math.abs(fe)>Number.EPSILON){let ae=Math.sqrt(de),Be=Math.sqrt(E*E+Y*Y),Ce=oe.x-P/ae,xe=oe.y+be/ae,Ve=ie.x-Y/Be,je=ie.y+E/Be,he=((Ve-Ce)*Y-(je-xe)*E)/(be*Y-P*E);_e=Ce+be*he-F.x,ee=xe+P*he-F.y;let st=_e*_e+ee*ee;if(st<=2)return new ce(_e,ee);ke=Math.sqrt(st/2)}else{let ae=!1;be>Number.EPSILON?E>Number.EPSILON&&(ae=!0):be<-Number.EPSILON?E<-Number.EPSILON&&(ae=!0):Math.sign(P)===Math.sign(Y)&&(ae=!0),ae?(_e=-P,ee=be,ke=Math.sqrt(de)):(_e=be,ee=P,ke=Math.sqrt(de/2))}return new ce(_e/ke,ee/ke)}let q=[];for(let F=0,oe=T.length,ie=oe-1,_e=F+1;F<oe;F++,ie++,_e++)ie===oe&&(ie=0),_e===oe&&(_e=0),q[F]=$(T[F],T[ie],T[_e]);let te=[],se,ge=q.concat();for(let F=0,oe=N.length;F<oe;F++){let ie=N[F];se=[];for(let _e=0,ee=ie.length,ke=ee-1,be=_e+1;_e<ee;_e++,ke++,be++)ke===ee&&(ke=0),be===ee&&(be=0),se[_e]=$(ie[_e],ie[ke],ie[be]);te.push(se),ge=ge.concat(se)}for(let F=0;F<m;F++){let oe=F/m,ie=p*Math.cos(oe*Math.PI/2),_e=g*Math.sin(oe*Math.PI/2)+x;for(let ee=0,ke=T.length;ee<ke;ee++){let be=U(T[ee],q[ee],_e);ue(be.x,be.y,-ie)}for(let ee=0,ke=N.length;ee<ke;ee++){let be=N[ee];se=te[ee];for(let P=0,E=be.length;P<E;P++){let Y=U(be[P],se[P],_e);ue(Y.x,Y.y,-ie)}}}let Q=g+x;for(let F=0;F<H;F++){let oe=u?U(y[F],ge[F],Q):y[F];S?(w.copy(C.normals[0]).multiplyScalar(oe.x),A.copy(C.binormals[0]).multiplyScalar(oe.y),D.copy(v[0]).add(w).add(A),ue(D.x,D.y,D.z)):ue(oe.x,oe.y,0)}for(let F=1;F<=h;F++)for(let oe=0;oe<H;oe++){let ie=u?U(y[oe],ge[oe],Q):y[oe];S?(w.copy(C.normals[F]).multiplyScalar(ie.x),A.copy(C.binormals[F]).multiplyScalar(ie.y),D.copy(v[F]).add(w).add(A),ue(D.x,D.y,D.z)):ue(ie.x,ie.y,d/h*F)}for(let F=m-1;F>=0;F--){let oe=F/m,ie=p*Math.cos(oe*Math.PI/2),_e=g*Math.sin(oe*Math.PI/2)+x;for(let ee=0,ke=T.length;ee<ke;ee++){let be=U(T[ee],q[ee],_e);ue(be.x,be.y,d+ie)}for(let ee=0,ke=N.length;ee<ke;ee++){let be=N[ee];se=te[ee];for(let P=0,E=be.length;P<E;P++){let Y=U(be[P],se[P],_e);S?ue(Y.x,Y.y+v[h-1].y,v[h-1].x+ie):ue(Y.x,Y.y,d+ie)}}}re(),Se();function re(){let F=s.length/3;if(u){let oe=0,ie=H*oe;for(let _e=0;_e<k;_e++){let ee=X[_e];Ne(ee[2]+ie,ee[1]+ie,ee[0]+ie)}oe=h+m*2,ie=H*oe;for(let _e=0;_e<k;_e++){let ee=X[_e];Ne(ee[0]+ie,ee[1]+ie,ee[2]+ie)}}else{for(let oe=0;oe<k;oe++){let ie=X[oe];Ne(ie[2],ie[1],ie[0])}for(let oe=0;oe<k;oe++){let ie=X[oe];Ne(ie[0]+H*h,ie[1]+H*h,ie[2]+H*h)}}n.addGroup(F,s.length/3-F,0)}function Se(){let F=s.length/3,oe=0;ze(T,oe),oe+=T.length;for(let ie=0,_e=N.length;ie<_e;ie++){let ee=N[ie];ze(ee,oe),oe+=ee.length}n.addGroup(F,s.length/3-F,1)}function ze(F,oe){let ie=F.length;for(;--ie>=0;){let _e=ie,ee=ie-1;ee<0&&(ee=F.length-1);for(let ke=0,be=h+m*2;ke<be;ke++){let P=H*ke,E=H*(ke+1),Y=oe+_e+P,de=oe+ee+P,fe=oe+ee+E,ae=oe+_e+E;qe(Y,de,fe,ae)}}}function ue(F,oe,ie){l.push(F),l.push(oe),l.push(ie)}function Ne(F,oe,ie){Te(F),Te(oe),Te(ie);let _e=s.length/3,ee=M.generateTopUV(n,s,_e-3,_e-2,_e-1);Xe(ee[0]),Xe(ee[1]),Xe(ee[2])}function qe(F,oe,ie,_e){Te(F),Te(oe),Te(_e),Te(oe),Te(ie),Te(_e);let ee=s.length/3,ke=M.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Xe(ke[0]),Xe(ke[1]),Xe(ke[3]),Xe(ke[1]),Xe(ke[2]),Xe(ke[3])}function Te(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Xe(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return m_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Tl[s.type]().fromJSON(s)),new i(n,e.options)}},p_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-d),new ce(u,1-g),new ce(x,1-f)]:[new ce(o,1-l),new ce(h,1-d),new ce(p,1-g),new ce(m,1-f)]}};function m_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xs=class i extends Rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ba=class i extends Bt{constructor(e=new Nn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Ci.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Ci.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){let M=x[m],v=M[0]+d,S=M[1]+d,C=M[2]+d;n.push(v,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return g_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function g_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var za=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ui=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ha=class extends Li{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function __(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends Ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qc:r=e,o=2*t-n;break;case eh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:a=e,l=2*n-t;break;case eh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+M*a[c+C]+v*a[l+C]+S*a[d+C];return r}},Ll=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Dl=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case xa:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&__(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=xa;var Qi=class extends $n{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=_a;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends $n{};Ul.prototype.ValueTypeName="color";var Nl=class extends $n{};Nl.prototype.ValueTypeName="number";var Ol=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends $n{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.DefaultInterpolation=xa;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends $n{};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=_a;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends $n{};Fl.prototype.ValueTypeName="vector";var ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Bl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},x_=new Bl,ts=class{constructor(e){this.manager=e!==void 0?e:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},zl=class extends Error{constructor(e,t){super(e),this.response=t}},Hl=class extends ts{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ka.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=fi[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,g=p!==0,x=0,m=new ReadableStream({start(f){M();function M(){d.read().then(({done:v,value:S})=>{if(v)f.close();else{x+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let A=0,w=h.length;A<w;A++){let D=h[A];D.onProgress&&D.onProgress(C)}f.enqueue(S),M()}})}}});return new Response(m)}else throw new zl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ka.add(e,c);let h=fi[e];delete fi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kl=class extends ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ka.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=_r("img");function l(){h(),ka.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Va=class extends ts{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new yi,o=new Hl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ln,a.wrapT=c.wrapT!==void 0?c.wrapT:Ln,a.magFilter=c.magFilter!==void 0?c.magFilter:Jt,a.minFilter=c.minFilter!==void 0?c.minFilter:Jt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Fs),c.mipmapCount===1&&(a.minFilter=Jt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},Ga=class extends ts{constructor(e){super(e)}load(e,t,n,s){let r=new Rn,a=new kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ar=class extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Wa=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ko=new _t,Zh=new O,jh=new O,Xa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Jh=new _t,cr=new O,Qo=new O,Vl=class extends Xa{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),Qo.copy(n.position),Qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qo),n.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}},qs=class extends Ar{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gl=class extends Xa{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function $h(){return(typeof performance>"u"?Date:performance).now()}var ic="\\[\\]\\.:\\/",v_=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",y_="[^"+ic.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",sc),b_=/(WCOD+)?/.source.replace("WCOD",y_),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),w_=new RegExp("^"+M_+b_+S_+E_+"$"),T_=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=w_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Wl;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var Rr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Su={type:"change"},rc={type:"start"},Eu={type:"end"},eo=new xr,wu=new jn,R_=Math.cos(70*hu.DEG2RAD),to=class extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",ae),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Su),n.update(),r=s.NONE},this.update=(function(){let z=new O,me=new Un().setFromUnitVectors(e.up,new O(0,1,0)),Ae=me.clone().invert(),ve=new O,Ge=new Un,nt=new O,ot=2*Math.PI;return function(ye=null){let V=n.object.position;z.copy(V).sub(n.target),z.applyQuaternion(me),o.setFromVector3(z),n.autoRotate&&r===s.NONE&&N(_(ye)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ee=n.minAzimuthAngle,we=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(we)&&(Ee<-Math.PI?Ee+=ot:Ee>Math.PI&&(Ee-=ot),we<-Math.PI?we+=ot:we>Math.PI&&(we-=ot),Ee<=we?o.theta=Math.max(Ee,Math.min(we,o.theta)):o.theta=o.theta>(Ee+we)/2?Math.max(Ee,o.theta):Math.min(we,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*c),z.setFromSpherical(o),z.applyQuaternion(Ae),V.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&A){let Ze=null;if(n.object.isPerspectiveCamera){let ft=z.length();Ze=q(ft*c);let gt=ft-Ze;n.object.position.addScaledVector(S,gt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ft=new O(C.x,C.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0;let gt=new O(C.x,C.y,0);gt.unproject(n.object),n.object.position.sub(gt).add(ft),n.object.updateMatrixWorld(),Ze=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(eo.origin.copy(n.object.position),eo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(eo.direction))<R_?e.lookAt(n.target):(wu.setFromNormalAndCoplanarPoint(n.object.up,n.target),eo.intersectPlane(wu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qe=!0);return c=1,A=!1,Qe||ve.distanceToSquared(n.object.position)>a||8*(1-Ge.dot(n.object.quaternion))>a||nt.distanceToSquared(n.target)>0?(n.dispatchEvent(Su),ve.copy(n.object.position),Ge.copy(n.object.quaternion),nt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ae),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Rr,l=new Rr,c=1,h=new O,d=new ce,u=new ce,p=new ce,g=new ce,x=new ce,m=new ce,f=new ce,M=new ce,v=new ce,S=new O,C=new ce,A=!1,w=[],D={};function _(z){return z!==null?2*Math.PI/60*n.autoRotateSpeed*z:2*Math.PI/60/60*n.autoRotateSpeed}function y(z){let me=Math.abs(z)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function N(z){l.theta-=z}function B(z){l.phi-=z}let X=(function(){let z=new O;return function(Ae,ve){z.setFromMatrixColumn(ve,0),z.multiplyScalar(-Ae),h.add(z)}})(),T=(function(){let z=new O;return function(Ae,ve){n.screenSpacePanning===!0?z.setFromMatrixColumn(ve,1):(z.setFromMatrixColumn(ve,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(Ae),h.add(z)}})(),U=(function(){let z=new O;return function(Ae,ve){let Ge=n.domElement;if(n.object.isPerspectiveCamera){let nt=n.object.position;z.copy(nt).sub(n.target);let ot=z.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Ae*ot/Ge.clientHeight,n.object.matrix),T(2*ve*ot/Ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Ae*(n.object.right-n.object.left)/n.object.zoom/Ge.clientWidth,n.object.matrix),T(ve*(n.object.top-n.object.bottom)/n.object.zoom/Ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(z,me){if(!n.zoomToCursor)return;A=!0;let Ae=n.domElement.getBoundingClientRect(),ve=z-Ae.left,Ge=me-Ae.top,nt=Ae.width,ot=Ae.height;C.x=ve/nt*2-1,C.y=-(Ge/ot)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function te(z){d.set(z.clientX,z.clientY)}function se(z){$(z.clientX,z.clientX),f.set(z.clientX,z.clientY)}function ge(z){g.set(z.clientX,z.clientY)}function Q(z){u.set(z.clientX,z.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;N(2*Math.PI*p.x/me.clientHeight),B(2*Math.PI*p.y/me.clientHeight),d.copy(u),n.update()}function re(z){M.set(z.clientX,z.clientY),v.subVectors(M,f),v.y>0?H(y(v.y)):v.y<0&&k(y(v.y)),f.copy(M),n.update()}function Se(z){x.set(z.clientX,z.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(x),n.update()}function ze(z){$(z.clientX,z.clientY),z.deltaY<0?k(y(z.deltaY)):z.deltaY>0&&H(y(z.deltaY)),n.update()}function ue(z){let me=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),me=!0;break}me&&(z.preventDefault(),n.update())}function Ne(z){if(w.length===1)d.set(z.pageX,z.pageY);else{let me=st(z),Ae=.5*(z.pageX+me.x),ve=.5*(z.pageY+me.y);d.set(Ae,ve)}}function qe(z){if(w.length===1)g.set(z.pageX,z.pageY);else{let me=st(z),Ae=.5*(z.pageX+me.x),ve=.5*(z.pageY+me.y);g.set(Ae,ve)}}function Te(z){let me=st(z),Ae=z.pageX-me.x,ve=z.pageY-me.y,Ge=Math.sqrt(Ae*Ae+ve*ve);f.set(0,Ge)}function Xe(z){n.enableZoom&&Te(z),n.enablePan&&qe(z)}function F(z){n.enableZoom&&Te(z),n.enableRotate&&Ne(z)}function oe(z){if(w.length==1)u.set(z.pageX,z.pageY);else{let Ae=st(z),ve=.5*(z.pageX+Ae.x),Ge=.5*(z.pageY+Ae.y);u.set(ve,Ge)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;N(2*Math.PI*p.x/me.clientHeight),B(2*Math.PI*p.y/me.clientHeight),d.copy(u)}function ie(z){if(w.length===1)x.set(z.pageX,z.pageY);else{let me=st(z),Ae=.5*(z.pageX+me.x),ve=.5*(z.pageY+me.y);x.set(Ae,ve)}m.subVectors(x,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(x)}function _e(z){let me=st(z),Ae=z.pageX-me.x,ve=z.pageY-me.y,Ge=Math.sqrt(Ae*Ae+ve*ve);M.set(0,Ge),v.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),H(v.y),f.copy(M);let nt=(z.pageX+me.x)*.5,ot=(z.pageY+me.y)*.5;$(nt,ot)}function ee(z){n.enableZoom&&_e(z),n.enablePan&&ie(z)}function ke(z){n.enableZoom&&_e(z),n.enableRotate&&oe(z)}function be(z){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",E)),Ve(z),z.pointerType==="touch"?Be(z):Y(z))}function P(z){n.enabled!==!1&&(z.pointerType==="touch"?Ce(z):de(z))}function E(z){je(z),w.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Eu),r=s.NONE}function Y(z){let me;switch(z.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case ns.DOLLY:if(n.enableZoom===!1)return;se(z),r=s.DOLLY;break;case ns.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;ge(z),r=s.PAN}else{if(n.enableRotate===!1)return;te(z),r=s.ROTATE}break;case ns.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;te(z),r=s.ROTATE}else{if(n.enablePan===!1)return;ge(z),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(rc)}function de(z){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(z);break;case s.DOLLY:if(n.enableZoom===!1)return;re(z);break;case s.PAN:if(n.enablePan===!1)return;Se(z);break}}function fe(z){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(z.preventDefault(),n.dispatchEvent(rc),ze(z),n.dispatchEvent(Eu))}function ae(z){n.enabled===!1||n.enablePan===!1||ue(z)}function Be(z){switch(he(z),w.length){case 1:switch(n.touches.ONE){case is.ROTATE:if(n.enableRotate===!1)return;Ne(z),r=s.TOUCH_ROTATE;break;case is.PAN:if(n.enablePan===!1)return;qe(z),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case is.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(z),r=s.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(z),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(rc)}function Ce(z){switch(he(z),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(z),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ie(z),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(z),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(z),n.update();break;default:r=s.NONE}}function xe(z){n.enabled!==!1&&z.preventDefault()}function Ve(z){w.push(z.pointerId)}function je(z){delete D[z.pointerId];for(let me=0;me<w.length;me++)if(w[me]==z.pointerId){w.splice(me,1);return}}function he(z){let me=D[z.pointerId];me===void 0&&(me=new ce,D[z.pointerId]=me),me.set(z.pageX,z.pageY)}function st(z){let me=z.pointerId===w[0]?w[1]:w[0];return D[me]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}};var no=class extends Va{constructor(e){super(e),this.type=fn}parse(e){let a=function(D,_){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},d=function(D,_,y){_=_||1024;let B=D.pos,X=-1,T=0,U="",H=String.fromCharCode.apply(null,new Uint16Array(D.subarray(B,B+128)));for(;0>(X=H.indexOf(`
`))&&T<_&&B<D.byteLength;)U+=H,T+=H.length,B+=128,H+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(B,B+128)));return-1<X?(y!==!1&&(D.pos+=T+X+1),U+H.slice(0,X)):!1},u=function(D){let _=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,H;for((D.pos>=D.byteLength||!(U=d(D)))&&a(1,"no header found"),(H=U.match(_))||a(3,"bad initial token"),T.valid|=1,T.programtype=H[1],T.string+=U+`
`;U=d(D),U!==!1;){if(T.string+=U+`
`,U.charAt(0)==="#"){T.comments+=U+`
`;continue}if((H=U.match(y))&&(T.gamma=parseFloat(H[1])),(H=U.match(N))&&(T.exposure=parseFloat(H[1])),(H=U.match(B))&&(T.valid|=2,T.format=H[1]),(H=U.match(X))&&(T.valid|=4,T.height=parseInt(H[1],10),T.width=parseInt(H[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2||a(3,"missing format specifier"),T.valid&4||a(3,"missing image size specifier"),T},p=function(D,_,y){let N=_;if(N<8||N>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);N!==(D[2]<<8|D[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*_*y);B.length||a(4,"unable to allocate buffer space");let X=0,T=0,U=4*N,H=new Uint8Array(4),k=new Uint8Array(U),$=y;for(;$>0&&T<D.byteLength;){T+4>D.byteLength&&a(1),H[0]=D[T++],H[1]=D[T++],H[2]=D[T++],H[3]=D[T++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=N)&&a(3,"bad rgbe scanline format");let q=0,te;for(;q<U&&T<D.byteLength;){te=D[T++];let ge=te>128;if(ge&&(te-=128),(te===0||q+te>U)&&a(3,"bad scanline data"),ge){let Q=D[T++];for(let re=0;re<te;re++)k[q++]=Q}else k.set(D.subarray(T,T+te),q),q+=te,T+=te}let se=N;for(let ge=0;ge<se;ge++){let Q=0;B[X]=k[ge+Q],Q+=N,B[X+1]=k[ge+Q],Q+=N,B[X+2]=k[ge+Q],Q+=N,B[X+3]=k[ge+Q],X+=4}$--}return B},g=function(D,_,y,N){let B=D[_+3],X=Math.pow(2,B-128)/255;y[N+0]=D[_+0]*X,y[N+1]=D[_+1]*X,y[N+2]=D[_+2]*X,y[N+3]=1},x=function(D,_,y,N){let B=D[_+3],X=Math.pow(2,B-128)/255;y[N+0]=Pr.toHalfFloat(Math.min(D[_+0]*X,65504)),y[N+1]=Pr.toHalfFloat(Math.min(D[_+1]*X,65504)),y[N+2]=Pr.toHalfFloat(Math.min(D[_+2]*X,65504)),y[N+3]=Pr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let f=u(m),M=f.width,v=f.height,S=p(m.subarray(m.pos),M,v),C,A,w;switch(this.type){case Tn:w=S.length/4;let D=new Float32Array(w*4);for(let y=0;y<w;y++)g(S,y*4,D,y*4);C=D,A=Tn;break;case fn:w=S.length/4;let _=new Uint16Array(w*4);for(let y=0;y<w;y++)x(S,y*4,_,y*4);C=_,A=fn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:v,data:C,header:f.string,gamma:f.gamma,exposure:f.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case Tn:case fn:a.colorSpace=Dn,a.minFilter=Jt,a.magFilter=Jt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}};var io=class extends Gs{constructor(e=null){super();let t=new en;t.deleteAttribute("uv");let n=new zt({side:_n}),s=new zt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new qs(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new We(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new We(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new We(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new We(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new We(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new We(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let p=new We(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new We(t,Js(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new We(t,Js(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new We(t,Js(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new We(t,Js(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new We(t,Js(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new We(t,Js(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Js(i){let e=new vi;return e.color.setScalar(i),e}var $s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},C_=new Hs(-1,1,1,-1,0,1),ac=class extends Bt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},P_=new ac,Ni=class{constructor(e){this._mesh=new We(P_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,C_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var so=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kn.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ni(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ir=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ro=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new so($s),this.copyPass.material.blending=Qt,this.clock=new qa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ir!==void 0&&(a instanceof Ir?n=!0:a instanceof ro&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oo=class extends On{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Lr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new _t},cameraProjectionMatrixInverse:{value:new _t},cameraWorldMatrix:{value:new _t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Dr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},lo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Tu(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=I_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new yi(s,e,e);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}function I_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ur={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:oc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new _t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function oc(i,e,t){let n=L_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function L_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}var co=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=e-u,x=t-p,m,f;g>x?(m=1,f=0):(m=0,f=1);let M=g-m+h,v=x-f+h,S=g-1+2*h,C=x-1+2*h,A=l&255,w=c&255,D=this.perm[A+this.perm[w]]%12,_=this.perm[A+m+this.perm[w+f]]%12,y=this.perm[A+1+this.perm[w+1]]%12,N=.5-g*g-x*x;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[D],g,x));let B=.5-M*M-v*v;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[_],M,v));let X=.5-S*S-C*C;return X<0?r=0:(X*=X,r=X*X*this.dot(this.grad3[y],S,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),p=1/6,g=(h+d+u)*p,x=h-g,m=d-g,f=u-g,M=e-x,v=t-m,S=n-f,C,A,w,D,_,y;M>=v?v>=S?(C=1,A=0,w=0,D=1,_=1,y=0):M>=S?(C=1,A=0,w=0,D=1,_=0,y=1):(C=0,A=0,w=1,D=1,_=0,y=1):v<S?(C=0,A=0,w=1,D=0,_=1,y=1):M<S?(C=0,A=1,w=0,D=0,_=1,y=1):(C=0,A=1,w=0,D=1,_=1,y=0);let N=M-C+p,B=v-A+p,X=S-w+p,T=M-D+2*p,U=v-_+2*p,H=S-y+2*p,k=M-1+3*p,$=v-1+3*p,q=S-1+3*p,te=h&255,se=d&255,ge=u&255,Q=this.perm[te+this.perm[se+this.perm[ge]]]%12,re=this.perm[te+C+this.perm[se+A+this.perm[ge+w]]]%12,Se=this.perm[te+D+this.perm[se+_+this.perm[ge+y]]]%12,ze=this.perm[te+1+this.perm[se+1+this.perm[ge+1]]]%12,ue=.6-M*M-v*v-S*S;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[Q],M,v,S));let Ne=.6-N*N-B*B-X*X;Ne<0?r=0:(Ne*=Ne,r=Ne*Ne*this.dot3(this.grad3[re],N,B,X));let qe=.6-T*T-U*U-H*H;qe<0?a=0:(qe*=qe,a=qe*qe*this.dot3(this.grad3[Se],T,U,H));let Te=.6-k*k-$*$-q*q;return Te<0?o=0:(Te*=Te,o=Te*Te*this.dot3(this.grad3[ze],k,$,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,p,g,x=(e+t+n+s)*l,m=Math.floor(e+x),f=Math.floor(t+x),M=Math.floor(n+x),v=Math.floor(s+x),S=(m+f+M+v)*c,C=m-S,A=f-S,w=M-S,D=v-S,_=e-C,y=t-A,N=n-w,B=s-D,X=_>y?32:0,T=_>N?16:0,U=y>N?8:0,H=_>B?4:0,k=y>B?2:0,$=N>B?1:0,q=X+T+U+H+k+$,te=a[q][0]>=3?1:0,se=a[q][1]>=3?1:0,ge=a[q][2]>=3?1:0,Q=a[q][3]>=3?1:0,re=a[q][0]>=2?1:0,Se=a[q][1]>=2?1:0,ze=a[q][2]>=2?1:0,ue=a[q][3]>=2?1:0,Ne=a[q][0]>=1?1:0,qe=a[q][1]>=1?1:0,Te=a[q][2]>=1?1:0,Xe=a[q][3]>=1?1:0,F=_-te+c,oe=y-se+c,ie=N-ge+c,_e=B-Q+c,ee=_-re+2*c,ke=y-Se+2*c,be=N-ze+2*c,P=B-ue+2*c,E=_-Ne+3*c,Y=y-qe+3*c,de=N-Te+3*c,fe=B-Xe+3*c,ae=_-1+4*c,Be=y-1+4*c,Ce=N-1+4*c,xe=B-1+4*c,Ve=m&255,je=f&255,he=M&255,st=v&255,z=o[Ve+o[je+o[he+o[st]]]]%32,me=o[Ve+te+o[je+se+o[he+ge+o[st+Q]]]]%32,Ae=o[Ve+re+o[je+Se+o[he+ze+o[st+ue]]]]%32,ve=o[Ve+Ne+o[je+qe+o[he+Te+o[st+Xe]]]]%32,Ge=o[Ve+1+o[je+1+o[he+1+o[st+1]]]]%32,nt=.6-_*_-y*y-N*N-B*B;nt<0?h=0:(nt*=nt,h=nt*nt*this.dot4(r[z],_,y,N,B));let ot=.6-F*F-oe*oe-ie*ie-_e*_e;ot<0?d=0:(ot*=ot,d=ot*ot*this.dot4(r[me],F,oe,ie,_e));let et=.6-ee*ee-ke*ke-be*be-P*P;et<0?u=0:(et*=et,u=et*et*this.dot4(r[Ae],ee,ke,be,P));let ye=.6-E*E-Y*Y-de*de-fe*fe;ye<0?p=0:(ye*=ye,p=ye*ye*this.dot4(r[ve],E,Y,de,fe));let V=.6-ae*ae-Be*Be-Ce*Ce-xe*xe;return V<0?g=0:(V*=V,g=V*V*this.dot4(r[Ge],ae,Be,Ce,xe)),27*(h+d+u+p+g)}};var Nr=class i extends On{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Tu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new xn(this.width,this.height,{type:fn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new tn({defines:Object.assign({},Lr.defines),uniforms:Kn.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ha,this.normalMaterial.blending=Qt,this.pdMaterial=new tn({defines:Object.assign({},Ur.defines),uniforms:Kn.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new tn({defines:Object.assign({},Dr.defines),uniforms:Kn.clone(Dr.uniforms),vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new tn({uniforms:Kn.clone($s.uniforms),vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ja,blendDst:Zs,blendEquation:zn,blendSrcAlpha:Za,blendDstAlpha:Zs,blendEquationAlpha:zn}),this.blendMaterial=new tn({uniforms:Kn.clone(lo.uniforms),vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yl,blendSrc:ja,blendDst:Zs,blendEquation:zn,blendSrcAlpha:Za,blendDstAlpha:Zs,blendEquationAlpha:zn}),this.fsQuad=new Ni(null),this.originalClearColor=new at,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Vs,this.depthTexture.format=Ii,this.depthTexture.type=_i,this.normalRenderTarget=new xn(this.width,this.height,{minFilter:jt,magFilter:jt,type:fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=oc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new co,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new yi(s,e,e,Sn,si);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}};Nr.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Au={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ho=class extends On{constructor(){super();let e=Au;this.uniforms=Kn.clone(e.uniforms),this.material=new za({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Or(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Bt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Ru(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][u]);let g=Ru(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ru(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Pt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function Cu(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new O,new O,new O],r=new O,a=new O,o=new O,l=new O;function c(x){let m=~~(x.x*n),f=~~(x.y*n),M=~~(x.z*n);return`${m},${f},${M}`}let h=i.index?i.toNonIndexed():i,d=h.attributes.position,u={};for(let x=0,m=d.count/3;x<m;x++){let f=3*x,M=s[0].fromBufferAttribute(d,f+0),v=s[1].fromBufferAttribute(d,f+1),S=s[2].fromBufferAttribute(d,f+2);r.subVectors(S,v),a.subVectors(M,v);let C=new O().crossVectors(r,a).normalize();for(let A=0;A<3;A++){let w=s[A],D=c(w);D in u||(u[D]=[]),u[D].push(C)}}let p=new Float32Array(d.count*3),g=new Pt(p,3,!1);for(let x=0,m=d.count/3;x<m;x++){let f=3*x,M=s[0].fromBufferAttribute(d,f+0),v=s[1].fromBufferAttribute(d,f+1),S=s[2].fromBufferAttribute(d,f+2);r.subVectors(S,v),a.subVectors(M,v),o.crossVectors(r,a).normalize();for(let C=0;C<3;C++){let A=s[C],w=c(A),D=u[w];l.set(0,0,0);for(let _=0,y=D.length;_<y;_++){let N=D[_];o.dot(N)>t&&l.add(N)}l.normalize(),g.setXYZ(f+C,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}var Fr=new O;function Vn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Fr.copy(e),Fr[n]=0,Fr.normalize();let c=.5*a/(a+o),h=1-Fr.angleTo(i)/l;return Math.sign(Fr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var uo=class extends en{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new O,l=new O,c=new O(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new O,x=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[f+0]=Vn(g,l,"z","y",r,n),u[f+1]=1-Vn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[f+0]=1-Vn(g,l,"z","y",r,n),u[f+1]=1-Vn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[f+0]=1-Vn(g,l,"x","z",r,e),u[f+1]=Vn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[f+0]=1-Vn(g,l,"x","z",r,e),u[f+1]=1-Vn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[f+0]=1-Vn(g,l,"x","y",r,e),u[f+1]=1-Vn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[f+0]=Vn(g,l,"x","y",r,e),u[f+1]=1-Vn(g,l,"y","x",r,t);break}}};var Fu="2.0",_o=(()=>{try{let i=document.currentScript&&document.currentScript.src;return i?i.replace(/[^/]*$/,""):""}catch{return""}})(),D_=["cedar","burgundy","walnut","sapele","birch","coffee","shousugi","whitewash","greywash","patina"],Pu=26,Dt=typeof window<"u"?window:globalThis,Br={leaf_rs:1.9375,leaf_tb:2.5,jamb_trim:1.625,trim_t:.75,rail_top:5,rail_mid:5,rail_bot:5,glass_t:.75,panel_t:.75,clad_board:5.5,clad_reveal:.25,clad_t:.75,plank:6,xbuck:3.5,bevel:1.5,louvre_pitch:3.5,louvre_w:4,louvre_deg:35,astragal:1.5,jamb:.75,threshold:1,header_face:5.5,gaps:{shim_side:.375,shim_top:.375,jamb_l:.375,jamb_r:.375,door:.125,center:.25,head:.25,sill:.375}};function U_(i){let e=null;try{typeof Dt.rbFor=="function"&&(e=Dt.rbFor(i))}catch{e=null}if(!e)return Br;let t=Object.assign({},Br,e);t.gaps=Object.assign({},Br.gaps);for(let n in e.gaps||{})e.gaps[n]!=null&&!isNaN(+e.gaps[n])&&(t.gaps[n]=+e.gaps[n]);for(let n of["jamb","threshold","header_face","leaf_rs","leaf_tb"])(t[n]==null||isNaN(+t[n]))&&(t[n]=Br[n]);return t}var N_=1.75;function Bu(i,e,t){let n=i.t,s=new Array(i.n);e=Math.max(0,Math.min(1,e));let r=[];i.Lq>0&&r.push({dir:1,idx:[...Array(i.Lq).keys()],jg:i.jL}),i.Rq>0&&r.push({dir:-1,idx:[...Array(i.Rq).keys()].map(a=>i.n-1-a),jg:i.jR});for(let a of r){let o=a.idx.length,l=a.dir,c=(o===1?88:86)*Math.PI/180,h=c*e,d=Math.max(N_,(a.jg*a.jg+n*n/4)/(2*a.jg)+.0625),u=Math.max(.5,d-a.jg),p=Math.floor(o/2),g=p>1?Math.min(.22,.5/p):0,x=y=>c*Math.max(0,Math.min(1,(e-y*g)/(1-(p-1)*g))),m=y=>[l*Math.cos(y),Math.sin(y)],f=y=>[-l*Math.sin(y),Math.cos(y)],M=i.leaves[a.idx[0]],S=[(l>0?M.x:M.x+M.w)+l*u,0],C=(y,N,B)=>{if(y===0){let se=m(N);return[S[0]-u*se[0],S[1]-u*se[1]]}let X=i.leaves[a.idx[y-1]].w,T=i.gapI(Math.min(a.idx[y-1],a.idx[y])),U=y%2===1?-n/2:n/2,H=m(B.a),k=f(B.a),$=[B.O[0]+H[0]*(X+T/2)+k[0]*U,B.O[1]+H[1]*(X+T/2)+k[1]*U],q=m(N),te=f(N);return[$[0]+q[0]*T/2-te[0]*U,$[1]+q[1]*T/2-te[1]*U]},A=null,w=(y,N,B)=>{let X={a:N,O:C(y-1,N,B)},T=i.leaves[a.idx[y]].w,U=k=>{let $=C(y,k,X),q=m(k);return $[1]+q[1]*(T-u)},H=-N;for(let k=0;k<50;k++){let $=U(H),q=(U(H+1e-6)-$)/1e-6;if(Math.abs($)<1e-10||!q)break;H-=$/q}return H},D=null,_=null;for(let y=0;y<o;y++){let N=i.leaves[a.idx[y]].w,B;if(y%2===0&&y===o-1&&o>=3)B=h*e;else if(y%2===0&&y===o-1)B=h;else if(y%2===0){if(B=x(y/2),w(y+1,B,A)>0){let H=B,k=B+1.2;for(let $=0;$<60;$++){let q=(H+k)/2;w(y+1,q,A)>0?H=q:k=q}B=k}D=B,_=A}else B=w(y,D,_);let X=C(y,B,A),T=m(B),U=f(B);s[a.idx[y]]={X:l>0?T:[-T[0],-T[1]],Z:U,C:[X[0]+T[0]*N/2,X[1]+T[1]*N/2]},A={a:B,O:X}}}if(t>0&&i.man){let a=i.leaves[i.man.i],o=Math.max(0,Math.min(1,t))*88*Math.PI/180,l=i.man.hinge!=="R",c=l?1:-1,h=i.man.swing==="in"?-1:1,d=[l?a.x:a.x+a.w,h*n/2],u=[c*Math.cos(o),h*Math.sin(o)],p=[-c*h*Math.sin(o),Math.cos(o)];s[i.man.i]={X:c>0?u:[-u[0],-u[1]],Z:p,C:[d[0]+u[0]*a.w/2-h*p[0]*n/2,d[1]+u[1]*a.w/2-h*p[1]*n/2]}}return{poses:s}}var kt={lib:null,busy:!1,geo:{},pin:.315,inb:.5906,KT:[[0,0],[.7591,0],[.7591,.3354],[.6614,.3354],[.6614,.1969],[.098,.1969],[.098,1.8701],[2.3429,1.8701],[2.3429,.1969],[1.7795,.1969],[1.7795,.3354],[1.6819,.3354],[1.6819,0],[2.4409,0],[2.4409,1.9685],[0,1.9685]]},O_=i=>/(^|[^A-Z0-9])E3([^0-9]|$)|T24|TITLE.?24/i.test(String(i&&(i.track||i.system||i.track_system||i.hw_system)||""));function F_(){kt.lib||kt.busy||kt.fail||(kt.busy=!0,fetch(_o+"e3-hardware-1.1.json").then(i=>i.json()).then(i=>{kt.lib=i,kt.busy=!1,G.last&&G.r&&xc(G.last[0],G.last[1],G.last[2],G.last[3])}).catch(i=>{kt.busy=!1,kt.fail=!0,console.warn("TR3D e3 hardware",i)}))}function B_(i,e,t,n){let s=i+":"+e+":"+(t?1:0)+(n?1:0);if(kt.geo[s]!==void 0)return kt.geo[s];let r=kt.lib&&kt.lib[i]&&kt.lib[i][e];if(!r)return kt.geo[s]=null;let a=g=>Uint8Array.from(atob(g),x=>x.charCodeAt(0)).buffer,o=new Int16Array(a(r.v)),l=new Uint16Array(a(r.f)),c=new Float32Array(o.length),h=(t?-1:1)*(n?-1:1),d=n?-1:1;for(let g=0;g<o.length;g+=3)c[g]=o[g]/2e3*h,c[g+1]=o[g+1]/2e3,c[g+2]=o[g+2]/2e3*d;let u=new Uint16Array(l.length);if(t)for(let g=0;g<l.length;g+=3)u[g]=l[g],u[g+1]=l[g+2],u[g+2]=l[g+1];else u.set(l);let p=new Bt;return p.setAttribute("position",new Pt(c,3)),p.setIndex(new Pt(u,1)),p=Cu(p,.7),kt.geo[s]=p}function z_(i,e){let t=i.t,n=t/2+kt.pin,s=kt.inb,r=new Array(i.n);e=Math.max(0,Math.min(1,e));let a=[];i.Lq>0&&a.push({dir:1,idx:[...Array(i.Lq).keys()]}),i.Rq>0&&a.push({dir:-1,idx:[...Array(i.Rq).keys()].map(o=>i.n-1-o)});for(let o of a){let l=o.idx.length,c=o.dir,h=88*Math.PI/180*e,d=x=>[c*Math.cos(x),Math.sin(x)],u=x=>[-c*Math.sin(x),Math.cos(x)],p=i.leaves[o.idx[0]],g=[(c>0?p.x:p.x+p.w)+c*s,n];for(let x=0;x<l;x+=2){let m=o.idx[x],f=i.leaves[m].w,M=d(h),v=u(h),S=x?i.gapI(Math.min(o.idx[x-1],m)):0,C=x===0?[g[0]-s*M[0]-n*v[0],g[1]-s*M[1]-n*v[1]]:[g[0]+S/2*M[0]-n*v[0],g[1]+S/2*M[1]-n*v[1]];if(r[m]={X:c>0?M:[-M[0],-M[1]],Z:v,C:[C[0]+M[0]*f/2,C[1]+M[1]*f/2]},x===l-1)break;let A=o.idx[x+1],w=i.leaves[A].w,D=i.gapI(Math.min(m,A)),_=[C[0]+M[0]*(f+D/2)-v[0]*n,C[1]+M[1]*(f+D/2)-v[1]*n],y=x+1===l-1?w-s:w+i.gapI(Math.min(A,o.idx[x+2]))/2,N=D/2+y,B=-h;for(let H=0;H<40;H++){let k=_[1]+N*Math.sin(B)+2*n*Math.cos(B)-n,$=N*Math.cos(B)-2*n*Math.sin(B);if(Math.abs(k)<1e-10||!$)break;B-=k/$}let X=d(B),T=u(B),U=[_[0]+X[0]*D/2+T[0]*n,_[1]+X[1]*D/2+T[1]*n];r[A]={X:c>0?X:[-X[0],-X[1]],Z:T,C:[U[0]+X[0]*w/2,U[1]+X[1]*w/2]},g=[U[0]+X[0]*y+T[0]*n,U[1]+X[1]*y+T[1]*n]}}return{poses:r}}var Fe={tex:{},mats:{},loader:null,env:null,onload:null},rs=.4;function Mi(i,e){if(Fe.tex[i])return Fe.tex[i];let t=(Fe.loader||(Fe.loader=new Ga)).load(i,()=>{Fe.onload&&Fe.onload()});return t.wrapS=t.wrapT=An,t.anisotropy=8,e&&(t.colorSpace=Lt),Fe.tex[i]=t}var Gn=i=>new at(/^#/.test(String(i||""))?i:"#cccccc");function H_(i){return i&&D_.includes(i.k)?i.k:null}function Iu(i,e){let t="w:"+i+":"+(e||"");if(Fe.mats[t])return Fe.mats[t];let n=_o+"skins/"+i,s=new Ui({map:Mi(n+"_c.jpg",!0),normalMap:Mi(n+"_n.jpg"),roughnessMap:Mi(n+"_orm.jpg"),aoMap:Mi(n+"_orm.jpg"),aoMapIntensity:.9,roughness:1,metalness:0,normalScale:new ce(.6,.6),clearcoat:i==="shousugi"?0:.07,clearcoatRoughness:.6,envMapIntensity:rs,vertexColors:!0,emissive:16777215,emissiveMap:Mi(n+"_c.jpg",!0),emissiveIntensity:i==="patina"?.05:.13});if(i==="patina"){s.metalnessMap=Mi(n+"_orm.jpg"),s.metalness=1,s.clearcoat=0,s.normalScale.set(.5,.5),s.aoMapIntensity=0,Mi(n+"_c.jpg",!0).repeat.set(.12,.12);for(let r of["_n.jpg","_orm.jpg"])Mi(n+r).repeat.set(.4,.4)}return s.color=e?Gn(e):new at(i==="whitewash"||i==="birch"||i==="greywash"?14474460:14869218),s.emissive.copy(s.color),Fe.mats[t]=s}function go(i,e){let t="p:"+i+":"+(e||"");if(Fe.mats[t])return Fe.mats[t];let n=Gn(i);if(e==="metal"){let r=G_("metalstreak",512,(o,l)=>{o.fillStyle="#8c8c8c",o.fillRect(0,0,l,l);let c=ei(4411);for(let h=0;h<5200;h++){let d=c()*l,u=c()*l,p=30+c()*300,g=c()<.5?255:0;o.fillStyle="rgba("+g+","+g+","+g+","+(.03+c()*.07)+")",o.fillRect(d,u,.6+c()*1.1,p),u+p>l&&o.fillRect(d,u-l,.6+c()*1.1,p)}for(let h=0;h<26;h++){let d=c()*l,u=c()*l,p=40+c()*120,g=o.createRadialGradient(d,u,0,d,u,p),x=c()<.5?255:0;g.addColorStop(0,"rgba("+x+","+x+","+x+",0.07)"),g.addColorStop(1,"rgba("+x+","+x+","+x+",0)"),o.fillStyle=g,o.fillRect(d-p,u-p,2*p,2*p)}},1);r.colorSpace=wn;let a=new Ui({color:n,roughness:.74,roughnessMap:r,metalness:.22,bumpMap:r,bumpScale:.3,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.6});return Fe.mats[t]=a}let s=new Ui({color:n,roughness:e==="metal"?.38:.6,metalness:e==="metal"?.75:0,normalMap:e==="metal"?null:Mi(_o+"skins/birch_n.jpg"),normalScale:new ce(.16,.16),clearcoat:e==="metal"?.3:0,clearcoatRoughness:.5,envMapIntensity:e==="metal"?1:.2,emissive:e==="metal"?0:n,emissiveIntensity:e==="metal"?0:.34*(1-Math.min(1,.2126*n.r+.7152*n.g+.0722*n.b))});return Fe.mats[t]=s}function fo(i,e){if(!i)return go("#cccccc");let t=H_(i);return t?Iu(t):i.type==="stain"?Iu("birch",i.hex):go(i.hex,e)}function k_(i){if(Fe.glassEnv)return Fe.glassEnv;let e=2048,t=1024,n=512,s=Qs(n,901,5,4),r=Qs(n,902,5,16),a=Qs(n,903,4,64),o=new Float32Array(e*t*4),l=(u,p,g)=>u[(Math.floor(g*n)%n+n)%n*n+(Math.floor(p*n)%n+n)%n],c=(u,p,g)=>u+(p-u)*g,h=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u));for(let u=0;u<t;u++){let p=(u/(t-1)-.5)*180;for(let g=0;g<e;g++){let x=g/e,m=4*(u*e+g),f,M,v,S=.4+4.4*l(s,x*3,.37)+2.2*l(r,x*7,.11)+.9*l(a,x*9,.73),C=.8+2.4*l(s,x*2+.3,.81);if(p<0){let A=h((-p-.6)/3.2),w=.9+.2*l(a,x*6,-p/40);f=c(.1,.5,A)*w,M=c(.2,.49,A)*w,v=c(.08,.46,A)*w}else{let A=h(p/55),w=h((l(s,x*2+p/140,p/75+.2)*.62+l(r,x*4,p/34)*.38-.5)/.16)*h(p/5)*(1-h((p-48)/30));if(f=c(1.55,.36,A),M=c(1.75,.66,A),v=c(1.95,1.3,A),f=c(f,2.5,w*.85),M=c(M,2.5,w*.85),v=c(v,2.55,w*.85),p<C){let _=.55+.25*l(r,x*5,.4);f=c(f,.34*_,.85),M=c(M,.43*_,.85),v=c(v,.52*_,.85)}let D=S-p;if(D>0&&!(D<.9&&l(a,x*34,p/4)>.58)){let _=h(1-D/2.5)*.6+.4*l(a,x*22,p/5),y=.55+.9*l(r,x*14,p/9);f=(.03+.07*_)*y,M=(.065+.13*_)*y,v=(.03+.04*_)*y}}o[m]=f,o[m+1]=M,o[m+2]=v,o[m+3]=1}}let d=new yi(o,e,t,Sn,Tn);d.mapping=ji,d.colorSpace=Dn,d.magFilter=d.minFilter=Jt,d.needsUpdate=!0;try{Fe.glassEnv=i.fromEquirectangular(d).texture}catch{Fe.glassEnv=null}return d.dispose(),Fe.glassEnv}function hc(){return Fe.mats.glass||(Fe.mats.glass=new Ui({color:10135715,roughness:.015,metalness:0,transmission:1,thickness:.6,ior:1.52,attenuationColor:new at(8364181),attenuationDistance:4,specularIntensity:1,specularColor:new at(16777215),clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.2,side:bn}))}var lc={nickel:{c:"#c2c0b8",m:1,r:.3},black:{c:"#1a1a1b",m:.55,r:.48},orb:{c:"#3b2a1f",m:.85,r:.42}};function V_(i){let e=lc[i]||lc.nickel,t="h:"+(lc[i]?i:"nickel");return Fe.mats[t]||(Fe.mats[t]=new zt({color:Gn(e.c),metalness:e.m,roughness:e.r}))}function Ks(i,e){let t="f:"+i+e;return Fe.mats[t]||(Fe.mats[t]=new zt({color:Gn(i),roughness:e??.9,metalness:0,envMapIntensity:rs}))}function G_(i,e,t,n){if(Fe.tex[i])return Fe.tex[i];let s=document.createElement("canvas");s.width=s.height=e,t(s.getContext("2d"),e);let r=new Di(s);return r.wrapS=r.wrapT=An,r.repeat.set(n,n),r.colorSpace=Lt,r.anisotropy=8,Fe.tex[i]=r}function Qs(i,e,t,n){let s=new Float32Array(i*i),r=1,a=0;for(let o=0;o<t;o++){let l=n<<o,c=ei(e+o*101),h=new Float32Array(l*l);for(let d=0;d<h.length;d++)h[d]=c();for(let d=0;d<i;d++){let u=d/i*l,p=Math.floor(u),g=u-p,x=g*g*(3-2*g);for(let m=0;m<i;m++){let f=m/i*l,M=Math.floor(f),v=f-M,S=v*v*(3-2*v),C=(M+1)%l,A=(p+1)%l,w=h[p*l+M],D=h[p*l+C],_=h[A*l+M],y=h[A*l+C];s[d*i+m]+=r*(w+(D-w)*S+(_-w)*x+(w-D-_+y)*S*x)}}a+=r,r*=.55}for(let o=0;o<s.length;o++)s[o]/=a;return s}function uc(i,e,t){if(Fe.tex[i])return Fe.tex[i];let n=Qs(e,t.seed,4,3),s=Qs(e,t.seed+7,4,24),r=Qs(e,t.seed+13,2,e>>1),a=new Float32Array(e*e),o=document.createElement("canvas");o.width=o.height=e;let l=o.getContext("2d"),c=l.createImageData(e,e),h=c.data,d=Gn(t.color).convertLinearToSRGB(),u=(t.pal||[]).map(v=>Gn(v).convertLinearToSRGB());for(let v=0;v<e*e;v++){let S=v%e,C=v/e|0,A=null,w=s[v]*t.mid+r[v]*t.fine,D=1+(n[v]-.5)*t.tone+(r[v]-.5)*t.grit;if(t.rows){let y=Math.floor(C/t.rows),N=C%t.rows,B=Math.sin(y*78.233+t.seed)*43758.5453,X=t.align?0:t.jit?Math.floor((B-Math.floor(B))*t.tab):y%2*t.tab/2,T=Math.floor((S+X)/t.tab),U=(S+X)%t.tab,H=Math.sin(y*127.1+T*311.7+t.seed)*43758.5453,k=H-Math.floor(H);if(D*=t.even?.96+k*.08:u.length?.9+k*.16:.78+k*.4,u.length){let $=Math.sin(y*53.3+T*91.1+t.seed)*24634.6345;A=u[Math.floor(($-Math.floor($))*u.length)]}(N<2||U<1&&!t.even)&&(D*=.45,w-=.6),w+=N/t.rows*.5}if(t.joint&&(S%t.joint<(t.jw||2)||C%t.joint<(t.jw||2))&&(D*=.55,w-=.8),t.herr){let y=t.herr,N=Math.floor(S/y),B=Math.floor(C/y),X=((N-B)%4+4)%4,T=S%y,U=C%y,H=t.jw||2,k=T<H,$=T>=y-H,q=U<H,te=U>=y-H,se=X===0?k||q||te:X===1?$||q||te:X===3?k||$||q:k||$||te,ge=X===1?N-1:N,Q=X===2?B-1:B,re=Math.sin(ge*127.1+Q*311.7+(X<2?0:57)+t.seed)*43758.5453,Se=re-Math.floor(re);if(u.length){let ze=Math.sin(ge*53.3+Q*91.1+(X<2?0:17)+t.seed)*24634.6345;A=u[Math.floor((ze-Math.floor(ze))*u.length)]}se?(D*=.5,w-=1.2):D*=(u.length?.9:.84)+Se*(u.length?.16:.28)}if(t.mix){let y=t.mix,N=3*y,B=Math.floor(C/y),X=B%2*N/2,T=(S+X)%N,U=C%y,H=T<2*y,k=H?T:T-2*y,$=t.jw||3,q=Math.floor((S+X)/N)*2+(H?0:1),te=Math.sin(B*127.1+q*311.7+t.seed)*43758.5453,se=te-Math.floor(te),ge=Math.sin(B*53.3+q*91.1+t.seed)*24634.6345;u.length&&(A=u[Math.floor((ge-Math.floor(ge))*u.length)]),k<$||U<$?(D*=.55,w-=1.1):D*=.95+se*.1}if(t.slab){let y=t.jw||5,N=Math.floor(C/t.slab[1]),B=N%2*t.slab[0]/2,X=(S+B)%t.slab[0],T=C%t.slab[1],U=Math.sin(N*91.7+Math.floor((S+B)/t.slab[0])*37.3+t.seed)*43758.5453,H=U-Math.floor(U);X<y||T<y?(D*=.42,w-=1.4):D*=.93+H*.12}if(t.cells){let y=t.cells,N=e/y,B=Math.floor(S/N),X=Math.floor(C/N),T=1e9,U=1e9,H=0;for(let k=-1;k<=1;k++)for(let $=-1;$<=1;$++){let q=(B+k+y)%y,te=(X+$+y)%y,se=Math.sin(q*127.1+te*311.7+t.seed)*43758.5453,ge=Math.sin(q*269.5+te*183.3+t.seed)*43758.5453,Q=(B+k+.15+.7*(se-Math.floor(se)))*N,re=(X+$+.15+.7*(ge-Math.floor(ge)))*N,Se=Math.hypot(Q-S,re-C);Se<T?(U=T,T=Se,H=q*31+te):Se<U&&(U=Se)}if(U-T<(t.jw||5))D*=.58,w-=1.4;else{let k=Math.sin(H*12.9898+t.seed)*43758.5453,$=k-Math.floor(k);D*=.82+$*.3,w+=$*.5}}if(t.seam){let y=S%t.seam,N=t.seamW||3;y<N?(w+=1.6,D*=1.06):y<N+5&&(D*=.72,w-=.4)}if(t.barrel){let y=S%t.barrel/t.barrel,N=Math.sin(y*Math.PI);if(w+=N*(t.barrelK||1.8),D*=t.deep?.5+Math.pow(N,.7)*.62:.82+N*.3,t.deep){let B=(C+Math.round(N*14))%t.rows;B<7?(D*=.5,w-=1.5):B>t.rows-10&&(D*=1.08,w+=.8)}}let _=A||d;a[v]=w,h[v*4]=Math.min(255,_.r*255*D),h[v*4+1]=Math.min(255,_.g*255*D),h[v*4+2]=Math.min(255,_.b*255*D),h[v*4+3]=255}l.putImageData(c,0,0);let p=document.createElement("canvas");p.width=p.height=e;let g=p.getContext("2d"),x=g.createImageData(e,e),m=x.data,f=t.bump;for(let v=0;v<e;v++)for(let S=0;S<e;S++){let C=v*e+S,A=(a[v*e+(S+1)%e]-a[v*e+(S+e-1)%e])*f,w=(a[(v+1)%e*e+S]-a[(v+e-1)%e*e+S])*f,D=Math.hypot(A,w,1);m[C*4]=(-A/D*.5+.5)*255,m[C*4+1]=(w/D*.5+.5)*255,m[C*4+2]=(1/D*.5+.5)*255,m[C*4+3]=255}g.putImageData(x,0,0);let M=(v,S)=>{let C=new Di(v);return C.wrapS=C.wrapT=An,C.anisotropy=8,S&&(C.colorSpace=Lt),C};return Fe.tex[i]={map:M(o,!0),normalMap:M(p,!1)}}function Wt(i,e,t){if(Fe.mats[i])return Fe.mats[i];let n=uc(i,e.n||512,e);return Fe.mats[i]=new zt({map:n.map,normalMap:n.normalMap,roughness:t,metalness:0,envMapIntensity:rs})}function ei(i){let e=i>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Qn(i,e,t,n){let s=i.index?i.toNonIndexed():i;s.computeVertexNormals();let r=s.attributes.position,a=s.attributes.normal,o=new Float32Array(r.count*2),l=ei(t),c=l(),h=l();for(let g=0;g<r.count;g+=3){let x=Math.abs(a.getX(g)+a.getX(g+1)+a.getX(g+2)),m=Math.abs(a.getY(g)+a.getY(g+1)+a.getY(g+2)),f=Math.abs(a.getZ(g)+a.getZ(g+1)+a.getZ(g+2)),M=x>=m&&x>=f?0:m>=f?1:2;for(let v=0;v<3;v++){let S=[r.getX(g+v),r.getY(g+v),r.getZ(g+v)],C,A,w=e==="x"?0:e==="y"?1:2;if(M===w){let D=[0,1,2].filter(_=>_!==M);C=S[D[0]]*3,A=S[D[1]]*3}else{let D=[0,1,2].find(_=>_!==M&&_!==w);C=S[D],A=S[w]}o[(g+v)*2]=C/Pu+c,o[(g+v)*2+1]=A/Pu+h}}s.setAttribute("uv",new Pt(o,2));let d=1+(l()-.5)*2*(n||0),u=(l()-.5)*(n||0)*.5,p=new Float32Array(r.count*3);for(let g=0;g<r.count;g++)p[3*g]=d*(1+u),p[3*g+1]=d,p[3*g+2]=d*(1-u);return s.setAttribute("color",new Pt(p,3)),s}function Lu(i,e,t){let n=new Nn(i.map(r=>new ce(r[0],r[1])));for(let r of e||[])n.holes.push(new Ws(r.map(a=>new ce(a[0],a[1]))));let s=new ai(n,{depth:Math.abs(t),bevelEnabled:!1,curveSegments:1});return s.translate(0,0,-Math.abs(t)),s}function W_(i){let e=new Map;for(let t of i.children.slice()){if(!t.isMesh)continue;let n=t.material.uuid+(t.castShadow?"s":"n");(e.get(n)||e.set(n,[]).get(n)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=null;try{n=Or(t.map(r=>r.geometry),!1)}catch{n=null}if(!n)continue;let s=new We(n,t[0].material);s.castShadow=t[0].castShadow,s.receiveShadow=t[0].receiveShadow,s.name="parts";for(let r of t)i.remove(r),r.geometry.dispose();i.add(s)}}function po(i,e,t){let n=i[0],s=i[1],r=i[i.length-1],a=e.xc,o=e.t,l=null,c="y";if(n==="box"){let[,,u,p,g,x,m,f]=i;if(!(x>0&&m>0&&f>0))return null;let M=r==="glassm"||/Backer|groove|opening/i.test(s)||Math.min(x,f,m)<.35?0:Math.min(.055,Math.min(x,f,m)*.18);l=M?new uo(x,f,m,1,M).toNonIndexed():new en(x,f,m),l.translate(u+x/2-a,g+f/2,o/2-(p+m/2)),c=/Panel|Slab|field|frame|plank|Glass|sash/i.test(s)?x>f*2.5?"x":"y":x>f?"x":"y",/plank|slat|board|Board/i.test(s)&&(c=x>f?"x":"y")}else if(n==="slabh"){let[,,u,p,g,x,m,f,M]=i;if(!(x>0&&m>0&&f>0))return null;let v=(M||[]).filter(C=>C&&C.length>=3),S=v.map(C=>{let A=C.map(_=>_[0]),w=C.map(_=>_[1]),D=[Math.max(0,Math.min(...A)),Math.min(x,Math.max(...A)),Math.max(0,Math.min(...w)),Math.min(f,Math.max(...w))];return C.length===4&&C.every(_=>(Math.abs(_[0]-Math.min(...A))<1e-4||Math.abs(_[0]-Math.max(...A))<1e-4)&&(Math.abs(_[1]-Math.min(...w))<1e-4||Math.abs(_[1]-Math.max(...w))<1e-4))?D:null});if(v.length&&S.every(Boolean)){let C=[...new Set([0,x,...S.flatMap(_=>[_[0],_[1]])])].sort((_,y)=>_-y),A=[],w=[],D=[];for(let _=0;_+1<C.length;_++){let y=C[_],N=C[_+1];if(N-y<1e-4)continue;let B=0,X=S.filter(U=>U[0]<N-1e-4&&U[1]>y+1e-4).map(U=>[U[2],U[3]]).sort((U,H)=>U[0]-H[0]),T=[];for(let U of X)U[0]-B>.001&&T.push([B,U[0]]),B=Math.max(B,U[1]);f-B>.001&&T.push([B,f]);for(let U of T){let H=new en(N-y,U[1]-U[0],m).toNonIndexed();H.translate((y+N)/2,(U[0]+U[1])/2,-m/2),A.push(...H.attributes.position.array),w.push(...H.attributes.normal.array),D.push(...H.attributes.uv.array),H.dispose()}}if(!A.length)return null;l=new Bt,l.setAttribute("position",new ut(A,3)),l.setAttribute("normal",new ut(w,3)),l.setAttribute("uv",new ut(D,2))}else l=Lu([[0,0],[x,0],[x,f],[0,f]],v,m);l.translate(u-a,g,o/2-p),c=/board|slat|Board/i.test(s)&&x>f?"x":"y"}else if(n==="poly"){let[,,u,p,g]=i;if(!g||g.length<3)return null;l=Lu(g,null,p),l.translate(-a,0,o/2-u);let x=1e9,m=-1e9,f=1e9,M=-1e9;for(let v of g)x=Math.min(x,v[0]),m=Math.max(m,v[0]),f=Math.min(f,v[1]),M=Math.max(M,v[1]);c=m-x>M-f?"x":"y"}else if(n==="prismx"){let[,,u,p,g]=i;if(!g||g.length<3)return null;let x=new Nn(g.map(m=>new ce(o/2-m[0],m[1])));l=new ai(x,{depth:Math.abs(p),bevelEnabled:!1,curveSegments:1}),l.rotateY(-Math.PI/2),l.translate(u-a+Math.abs(p),0,0),c="x"}else if(n==="prismz"){let[,,u,p,g]=i;if(!g||g.length<3)return null;let x=new Nn(g.map(m=>new ce(m[0]-a,-(o/2-m[1]))));l=new ai(x,{depth:Math.abs(p),bevelEnabled:!1,curveSegments:1}),l.rotateX(-Math.PI/2),l.translate(0,u,0),c="y"}if(!l)return null;if(r==="glassm"){let u=null;if(n==="box"){let[,,p,g,x,m,f,M]=i;u=[p-a,p-a+m,x,x+M,o/2-g,o/2-g-f]}else if(n==="poly"){let[,,p,g,x]=i,m=x.map(A=>A[0]),f=x.map(A=>A[1]),M=Math.min(...m),v=Math.max(...m),S=Math.min(...f),C=Math.max(...f);x.length===4&&x.every(A=>(Math.abs(A[0]-M)<1e-4||Math.abs(A[0]-v)<1e-4)&&(Math.abs(A[1]-S)<1e-4||Math.abs(A[1]-C)<1e-4))&&(u=[M-a,v-a,S,C,o/2-p,o/2-p-g])}if(u){let p=ei(t*7+13),g=(.006+p()*.008)*(p()<.7?1:-1),x=(p()-.5)*.007,m=(p()-.5)*.007,f=8,M=[],v=[],S=(u[3]-u[2])/Math.max(1e-6,u[1]-u[0]),C=(_,y,N,B)=>{M.push(u[0]+(u[1]-u[0])*_,u[2]+(u[3]-u[2])*y,N);let X=g*(_-.5)*2*Math.min(1,1/S)+x,T=g*(y-.5)*2*Math.min(1,S)+m,U=Math.hypot(X,T,1);v.push(B*X/U,B*T/U,B/U)};for(let[_,y]of[[u[4],1],[u[5],-1]])for(let N=0;N<f;N++)for(let B=0;B<f;B++){let X=B/f,T=(B+1)/f,U=N/f,H=(N+1)/f;y>0?(C(X,U,_,y),C(T,U,_,y),C(T,H,_,y),C(X,U,_,y),C(T,H,_,y),C(X,H,_,y)):(C(X,U,_,y),C(T,H,_,y),C(T,U,_,y),C(X,U,_,y),C(X,H,_,y),C(T,H,_,y))}l.dispose();let A=new Bt,w=M.length/3;A.setAttribute("position",new ut(M,3)),A.setAttribute("normal",new ut(v,3)),A.setAttribute("uv",new Pt(new Float32Array(w*2),2)),A.setAttribute("color",new Pt(new Float32Array(w*3).fill(1),3));let D=new We(A,hc());return D.name=s,D.castShadow=!1,D.receiveShadow=!1,D}}let h;r==="glassm"?h=hc():r==="dark"?h=/groove/i.test(s)?e.groove:e.hw:r==="cladm"?h=e.clad:h=e.fin;let d=new We(Qn(l,c,t,/slat|board|plank|blade|louvre|Batten/i.test(s)?.13:/buck|Panel|Slab/i.test(s)?.06:.04),h);return d.name=s,r==="glassm"?(d.castShadow=!1,d.receiveShadow=!1):(d.castShadow=!0,d.receiveShadow=!0),d}var dc=[["concrete","Concrete"],["pavers","Pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"]],fc=[["lawn","Lawn"],["blue","Kentucky bluegrass \xB7 blades"],["gravel","Gravel"],["dg","Decomposed granite"],["mpavers","Modern pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"],["flag","Natural flagstone"],["planters","Stone \xB7 raised planters"]],Du=[["grey","Grey"],["rust","Warm earthtones"]],cc=["#8a7364","#93806f","#7e695b","#9a8573","#866e5e","#907a67","#7b6354"],pc=[["none","One opening"],["single","+ a single"],["double","+ a double"],["same","+ the same again"]],Uu={single:108,double:192},Nu=[["lantern","Lantern"],["barrel","Barrel \xB7 up and down"]],zr=[["gable","Gable \xB7 stucco",{wall:"stucco",form:"side",roof:"shingle",pitch:5}],["craftsman","Front gable \xB7 lap siding",{wall:"lap",form:"front",roof:"shingle",pitch:6}],["hip","Hip roof \xB7 brick",{wall:"brick",form:"hip",roof:"shingle",pitch:5}],["modern","Flat roof \xB7 canopy on columns",{wall:"dark",form:"flat",roof:"flat",pitch:5}],["flat8","Flat roof \xB7 8 in soffit",{wall:"stucco",form:"flat8",roof:"flat",pitch:5}],["farm","Farmhouse \xB7 board and batten",{wall:"bb",form:"front",roof:"metal",pitch:8}],["spanish","Spanish \xB7 clay tile",{wall:"cream",form:"hip",roof:"tile",pitch:4}]],zu=i=>(zr.find(e=>e[0]===i)||zr[0])[2],Ou={stucco:{seed:5,color:"#d9d5cb",mid:.7,fine:1,tone:.07,grit:.12,bump:3.2},lap:{seed:15,color:"#a9b0a8",mid:.3,fine:.6,tone:.04,grit:.07,bump:5,rows:128,tab:8192,even:1},brick:{seed:17,color:"#6a473e",mid:.5,fine:1,tone:.08,grit:.25,bump:6,rows:43,tab:128},dark:{seed:19,color:"#4b4e51",mid:.4,fine:.6,tone:.04,grit:.08,bump:1.6},bb:{seed:23,color:"#e6e3da",mid:.2,fine:.5,tone:.03,grit:.06,bump:5,seam:256,seamW:40},cream:{seed:27,color:"#e7dfcd",mid:.9,fine:1,tone:.08,grit:.12,bump:4.5}},mc=[["shingle","Shingle"],["tile","Clay tile"],["spanish","Spanish tile"],["shake","Cedar shake"],["metal","Standing seam"],["flat","Flat"]],gc=[3,4,5,6,8,10],He=(()=>{let i={};try{i=JSON.parse(localStorage.getItem("tr3d.setting")||"{}")||{}}catch{}return{roof:mc.some(e=>e[0]===i.roof)?i.roof:"shingle",pitch:gc.includes(+i.pitch)?+i.pitch:5,eave:i.eave==="deep"?"deep":"short",drive:dc.some(e=>e[0]===i.drive)?i.drive:"concrete",ground:fc.some(e=>e[0]===i.ground)?i.ground:"blue",structure:zr.some(e=>e[0]===i.structure)?i.structure:"gable",light:i.light==="barrel"?"barrel":"lantern",paver:i.paver==="rust"?"rust":"grey",second:pc.some(e=>e[0]===i.second)?i.second:"none",garage:i.garage==="light"?"light":"warm",land:i.land==="rolling"||i.land==="flat"?i.land:"auto"}})();function Hu(i){if(i=i||{},i.structure&&i.roof==null){let e=zu(i.structure);i=Object.assign({roof:e.roof,pitch:e.pitch},i)}Object.assign(He,i),(i.structure||G.panelLabel&&(i.roof||i.drive||i.ground))&&G.panel&&G.el&&(G.panel.remove(),_c(G.el));try{localStorage.setItem("tr3d.setting",JSON.stringify(He))}catch{}return G.last&&xc.apply(null,G.last),vn}function ku(){let i=G.panelHost;return!!(i&&i.offsetParent!==null&&i.clientWidth>150)}function _c(i){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=document.createElement("div");e.style.cssText="position:absolute;left:8px;top:8px;right:8px;display:flex;flex-wrap:wrap;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2;opacity:.9";let t=(n,s,r)=>{let a=document.createElement("label");a.style.cssText="pointer-events:auto;display:flex;align-items:center;gap:4px;background:rgba(20,20,20,.62);color:#eee;padding:3px 6px",a.append(r);let o=document.createElement("select");o.style.cssText="font:inherit;background:transparent;color:inherit;border:0;outline:0";for(let[l,c]of s){let h=document.createElement("option");h.value=l,h.textContent=c,h.style.color="#111",String(He[n])===String(l)&&(h.selected=!0),o.append(h)}return o.onchange=()=>Hu({[n]:n==="pitch"?+o.value:o.value}),a.append(o),(t.to||e).append(a),a};if(!G.panelLabel)t("second",pc,"Openings"),t("garage",[["warm","Warm white"],["light","Light"]],"Garage"),t("structure",zr.map(n=>[n[0],n[1]]),"Structure"),t("roof",mc,"Roof"),t("pitch",gc.map(n=>[n,n+":12"]),"Slope"),t("eave",[["short","Short"],["deep","Deep"]],"Eave"),t("drive",dc,"Drive"),t("ground",fc,"Ground"),t("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),t("paver",Du,"Paver colour"),t("light",Nu,"Lights");else{e.style.cssText="position:absolute;left:8px;top:8px;width:min(262px,calc(100% - 16px));max-height:calc(100% - 16px);display:flex;flex-direction:column;align-items:flex-start;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2";let n=document.createElement("button");n.type="button",n.style.cssText="pointer-events:auto;cursor:pointer;background:rgba(18,18,18,.74);color:#f3efe6;border:1px solid rgba(243,239,230,.55);padding:9px 16px;font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase";let s=document.createElement("div");s.style.cssText="pointer-events:auto;align-self:stretch;overflow:auto;background:rgba(18,18,18,.8);border:1px solid rgba(243,239,230,.22);padding:4px 10px 10px";let r=c=>{let h=document.createElement("div");h.textContent=c,h.style.cssText="margin:10px 0 3px;font:600 9.5px/1 system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#b9b2a3",s.append(h)},a=(c,h,d)=>{t.to=s;let u=t(c,h,d);t.to=null,u.style.cssText="display:grid;grid-template-columns:76px 1fr;align-items:center;gap:6px;color:#eee;padding:2px 0;border-top:1px solid rgba(243,239,230,.1)",u.lastChild.style.cssText+=";width:100%;min-width:0;text-overflow:ellipsis;padding:0;margin:0;height:22px;min-height:0"},o=c=>/pavers|herr|mix/.test(String(c||""));if(r("House"),a("structure",zr.map(c=>[c[0],c[1]]),"Structure"),a("roof",mc,"Roof"),He.roof!=="flat"&&(a("pitch",gc.map(c=>[c,c+":12"]),"Slope"),a("eave",[["short","Short"],["deep","Deep"]],"Eave")),a("second",pc,"Openings"),r("Ground"),a("drive",dc,"Driveway"),a("ground",fc,"Ground"),(o(He.drive)||o(He.ground))&&a("paver",Du,"Paver colour"),a("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),r("Light"),a("light",Nu,"Lights"),a("garage",[["warm","Warm white"],["light","Light"]],"Garage"),G.panelSide=ku(),G.panelSide){e.style.cssText="display:flex;flex-direction:column;gap:8px;font:11px/1.2 system-ui,sans-serif";let c=document.createElement("div");c.textContent=G.panelLabel,c.style.cssText="font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#f3efe6;padding:2px 0 4px",s.style.cssText="border:1px solid rgba(243,239,230,.22);padding:4px 12px 12px",e.append(c,s),G.panelHost.appendChild(e),G.panel=e;return}let l=()=>{s.style.display=G.panelOpen?"block":"none",n.textContent=G.panelLabel+(G.panelOpen?"  \xD7":"")};n.onclick=()=>{G.panelOpen=!G.panelOpen,l()},e.append(n,s),l()}i.appendChild(e),G.panel=e}var G={el:null,r:null,scene:null,cam:null,ctl:null,unit:null,leaves:[],L:null,f:0,m:0,raf:0,dirty:!1,ready:!1,key:"",sun:null,anim:null,fit:200,H:96};function ti(){G.dirty=!0,G.raf||(G.raf=requestAnimationFrame(Vu))}function Vu(){if(G.raf=0,!G.r)return;let i=G.ctl.update();G.anim&&G.anim(),(G.dirty||i)&&(G.dirty=!1,Gu()),(G.anim||i)&&(G.raf=requestAnimationFrame(Vu))}function Gu(){let i=performance.now();if(G.fx)try{G.fx.render()}catch{G.fx=null,G.r.render(G.scene,G.cam)}else G.r.render(G.scene,G.cam);performance.now()-i>160&&(G.slow=(G.slow||0)+1,G.slow===2&&G.r.getPixelRatio()>1?(G.r.setPixelRatio(1),G.fx&&G.fx.setPixelRatio(1),mo()):G.slow===4&&G.fx&&(G.fx=null,ti()))}function mo(){if(!G.r)return;let i=G.el.clientWidth||800,e=G.el.clientHeight||500;G.r.setSize(i,e,!1),G.fx&&G.fx.setSize(i,e),G.cam.aspect=i/e,G.cam.updateProjectionMatrix(),ti()}function X_(i,e){if(G.r&&G.el===i)return vn;G.r&&Wu(),e=e||{},G.el=i;let t=new yr({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(2,Dt.devicePixelRatio||1)),t.outputColorSpace=Lt,t.toneMapping=Cr,t.toneMappingExposure=e.exposure||.68,t.shadowMap.enabled=!0,t.shadowMap.type=Xl,t.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;outline:none",t.domElement.setAttribute("data-tr3d",Fu),i.appendChild(t.domElement),G.r=t,G.scene=new Gs;{let r=document.createElement("canvas");r.width=16,r.height=512;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,"#3f74b8"),o.addColorStop(.3,"#6f9fd4"),o.addColorStop(.46,"#b9d2e8"),o.addColorStop(.5,"#dfe7ec"),o.addColorStop(.503,"#c9d3d6"),o.addColorStop(.56,"#7d8672"),o.addColorStop(1,"#6f775f"),a.fillStyle=o,a.fillRect(0,0,16,512);let l=new Di(r);l.mapping=ji,l.colorSpace=Lt,G.scene.background=l}G.cam=new gn(30,1.6,2,6e3),G.ctl=new to(G.cam,t.domElement),G.ctl.enableDamping=!0,G.ctl.dampingFactor=.09,G.ctl.enablePan=!1,G.ctl.maxPolarAngle=Math.PI/2-.015,G.ctl.minPolarAngle=.5,G.ctl.addEventListener("change",ti),t.domElement.addEventListener("dblclick",vc);let n=new ks(t);G.scene.environment=n.fromScene(new io,.04).texture;try{let r=k_(n);if(r){let a=hc();a.envMap=r,a.envMapIntensity=2.1,a.needsUpdate=!0}}catch{}new no().load(_o+"env/quarry_01_1k.hdr",r=>{r.mapping=ji;let a=n.fromEquirectangular(r).texture;G.scene.environment=a,G.envOk=!0,r.dispose(),ti()},void 0,()=>{});let s=new Ya(16775406,4.4);if(s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.bias=-2e-4,s.shadow.normalBias=.25,s.shadow.radius=5,G.sun=s,G.scene.add(s),G.scene.add(s.target),G.scene.add(new Wa(14674421,9342088,.55)),Fe.onload=ti,e.ao!==!1)try{let r=t.getPixelRatio(),a=new xn(8,8,{samples:4,type:fn}),o=new ao(t,a);o.setPixelRatio(r),o.addPass(new oo(G.scene,G.cam));let l=new Nr(G.scene,G.cam,8,8);l.updateGtaoMaterial({radius:7,distanceExponent:1.4,thickness:1.2,scale:1.25,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),l.blendIntensity=1,o.addPass(l),o.addPass(new ho),G.fx=o,G.ao=l}catch{G.fx=null}return Dt.ResizeObserver?(G.ro=new ResizeObserver(()=>{mo(),G.panel&&G.panelLabel&&G.panelHost&&G.panelSide!==ku()&&(G.panel.remove(),_c(G.el))}),G.ro.observe(i)):Dt.addEventListener("resize",mo),G.panelLabel=e.panelLabel||"",G.panelHost=e.panelHost||null,e.panel!==!1&&_c(i),mo(),vn}function Wu(){if(G.r){try{G.panel&&G.panel.remove()}catch{}try{G.ro&&G.ro.disconnect()}catch{}cancelAnimationFrame(G.raf),G.raf=0,G.ctl.dispose(),G.r.dispose(),G.r.domElement.parentNode&&G.r.domElement.parentNode.removeChild(G.r.domElement),G.r=null,G.unit=null,G.leaves=[],G.key=""}}function Y_(){G.unit&&(G.scene.remove(G.unit),G.unit.traverse(i=>{i.geometry&&i.geometry.dispose()}),G.unit=null,G.leaves=[],G.B=null)}function xc(i,e,t,n){if(!G.r||!i||!e)return vn;G.last=[i,e,t,n];let s=Dt.leafParts;if(typeof s!="function")return vn;if(e.base==="tbclad"&&!i.clad_look&&(e.clad==="horizontal"||e.clad==="vertical")&&(i=Object.assign({},i,{clad_look:e.clad})),G.curS=i,G.curFam=e,typeof Dt.rbFor!="function"&&(Dt.rbFor=()=>Br),typeof Dt.rlCladDims!="function"){let b=!1;Dt.rlCladDims=function(){if(b||!G.curFam||G.curFam.base!=="tbclad"||typeof Dt.cladFor!="function")return null;b=!0;try{let R=Dt.cladFor(G.curS),L=R&&R.profile;return!L||L.type==="sheet"?null:{fin_w:+L.fin_w||null,fin_t:+L.fin_t||null,cover:+L.cover||null,angle:L.angle}}catch{return null}finally{b=!1}}}if(e.base==="tbclad"&&i.clad_orient&&(e.clad==="horizontal"||e.clad==="vertical")&&typeof Dt.cladFor=="function"&&typeof Dt.cladLookOf=="function")try{let b=Dt.cladLookOf(Dt.cladFor(i),i);(b==="horizontal"||b==="vertical")&&(e=Object.assign({},e,{clad:b}))}catch{}G.curFam=e;let r=U_(e),a=r.gaps,o;try{o=s(i,e,t,n)}catch(b){return console.warn("TR3D leafParts",b),vn}if(!o||!o.leaves||!o.leaves.length)return vn;Y_();let l=11,c=(b,R)=>{let L=R.leaves.length,W=(+b.width_in||192)-2*(a.shim_side||0),j=(+b.height_in||96)-(a.shim_top||0),Z=e.base==="tb"||e.base==="tbclad",K=Z?r.leaf_tb:r.leaf_rs,ne=typeof Dt.cladFor=="function"&&e.base==="tbclad"?(()=>{try{return Dt.cladFor(b)}catch{return null}})():null,le=e.clad||b.clad_look,pe=typeof Dt.finBy=="function"&&b.clad_fin?Dt.finBy(b.clad_fin):null,Le=pe&&pe.type==="stain"?pe:t,Re={t:K,fin:fo(t),clad:le==="metal"?fo(b.clad_fin==="patina"?{k:"patina"}:t,"metal"):fo(Le),hw:V_(b.hw_finish||b.hw_fin||b.hwfin),groove:Ks("#141210",.95),joint:(()=>{let Je=ne&&ne.profile||{};return+Je.reveal>0?+Je.reveal:Je.type==="ship"?.25:Je.type==="tg"?.125:.1875})()},Oe=new Hn,Pe=/^(\d+)L/.exec(b.split||""),Ue=Pe?Math.min(+Pe[1],L):String(b.split||"").endsWith("L")?L:0,Me={n:L,Lq:Ue,Rq:L-Ue,t:K,jL:a.jamb_l||.375,jR:a.jamb_r||.375,leaves:[],W,gapI:Je=>R.leaves[Je+1]?R.leaves[Je+1].x0-R.leaves[Je].x1:a.door,man:b.mandoor?{i:Math.max(0,Math.min(L-1,(+b.mandoor.door||1)-1)),hinge:b.mandoor.hinge||"L",swing:b.mandoor.swing==="in"?"in":"out"}:null},Ke=ne&&ne.profile&&ne.profile.type==="bb"&&typeof Dt.battenOf=="function"?(()=>{try{return Dt.battenOf(ne,b)}catch{return null}})():null,ht=typeof Dt.cladOrient=="function"&&ne?Dt.cladOrient(ne,b)==="V":le==="vertical",At=[];R.leaves.forEach((Je,Mt)=>{let $e=Je.x1-Je.x0,yt=(Je.x0+Je.x1)/2,pt=new Hn;pt.matrixAutoUpdate=!1,Re.xc=yt;let xt=Je.parts.find(Ie=>/^Awning sash opening/i.test(Ie[1])),qt=Je.parts.map(Ie=>xt&&/^Awning sash$/i.test(Ie[1])&&Ie[0]==="box"?["slabh",Ie[1],Ie[2],Ie[3],Ie[4],Ie[5],Ie[6],Ie[7],[[[xt[2]-Ie[2],xt[4]-Ie[4]],[xt[2]-Ie[2]+xt[5],xt[4]-Ie[4]],[xt[2]-Ie[2]+xt[5],xt[4]-Ie[4]+xt[7]],[xt[2]-Ie[2],xt[4]-Ie[4]+xt[7]]]],Ie[Ie.length-1]]:Ie),St=Je.parts.find(Ie=>Ie[0]==="slabh"&&/^Slab$/.test(Ie[1])),rn=((St||[])[8]||[]).map(Ie=>({x0:St[2]+Math.min(...Ie.map(Et=>Et[0])),x1:St[2]+Math.max(...Ie.map(Et=>Et[0])),z0:St[4]+Math.min(...Ie.map(Et=>Et[1])),z1:St[4]+Math.max(...Ie.map(Et=>Et[1]))})),an=(Ie,Et,it)=>{let wt=[],mt=Ie;for(let Vt of it.sort((Gt,Kt)=>Gt[0]-Kt[0]))Vt[0]-mt>.25&&wt.push([mt,Vt[0]]),mt=Math.max(mt,Vt[1]);return Et-mt>.25&&wt.push([mt,Et]),wt};for(let Ie of qt){if(Ie[Ie.length-1]==="cladm"&&/Clad (board|slat)/i.test(Ie[1])&&(Ie[0]==="box"||Ie[0]==="slabh")){Ie=Ie.slice();let it=Re.joint;Ie[5]>Ie[7]?(Ie[4]+=it/2,Ie[7]-=it,Ie[0]==="slabh"&&(Ie[8]=Ie[8].map(wt=>wt.map(mt=>[mt[0],mt[1]-it/2])))):(Ie[2]+=it/2,Ie[5]-=it,Ie[0]==="slabh"&&(Ie[8]=Ie[8].map(wt=>wt.map(mt=>[mt[0]-it/2,mt[1]]))))}let Et=po(Ie,Re,l+=7919);if(Et&&pt.add(Et),/^Slab$/.test(Ie[1])&&e.base==="tbclad"&&le!=="metal"){let it=Ie.slice();it[1]="Backer groove",it[3]=-.12,it[6]=.12,it[it.length-1]="dark";let wt=po(it,Re,l);wt&&(wt.castShadow=!1,pt.add(wt))}}if(Ke&&Ke.w>0&&Ke.t>0){let Ie=ne.profile.fin_t||r.clad_t||.75,Et=Ke.pitch||Ke.w+Ke.gap,it=R.z_door,wt=R.door_h;if(ht){let mt=Math.max(1,Math.round(($e-Ke.w)/Et)),Vt=($e-Ke.w)/mt;for(let Gt=0;Gt<=mt;Gt++){let Kt=Je.x0+Gt*Vt;for(let on of an(it,it+wt,rn.filter(vt=>vt.x0<Kt+Ke.w&&vt.x1>Kt).map(vt=>[vt.z0,vt.z1]))){let vt=po(["box","Batten "+(Gt+1),Kt,-(Ie+Ke.t),on[0],Ke.w,Ke.t,on[1]-on[0],"cladm"],Re,l+=7919);vt&&pt.add(vt)}}}else{let mt=Math.max(1,Math.round((wt-Ke.w)/Et)),Vt=(wt-Ke.w)/mt;for(let Gt=0;Gt<=mt;Gt++){let Kt=it+Gt*Vt;for(let on of an(Je.x0,Je.x0+$e,rn.filter(vt=>vt.z0<Kt+Ke.w&&vt.z1>Kt).map(vt=>[vt.x0,vt.x1]))){let vt=po(["box","Batten "+(Gt+1),on[0],-(Ie+Ke.t),Kt,on[1]-on[0],Ke.t,Ke.w,"cladm"],Re,l+=7919);vt&&pt.add(vt)}}}}W_(pt),Oe.add(pt),At.push(pt),Me.leaves.push({i:Mt,x:Je.x0-W/2,w:$e})});let Ut=O_(b);Ut&&(Me.e3=!0,F_());let Nt=new Hn,Yt=Math.max(4.5,K+2.5),lt=Ut?K/2+kt.pin+1.7205:K/2+.75,Ye=t&&t.type==="stain"?fo(t):go(t&&t.hex||"#f0ede3"),tt=(Je,Mt,$e,yt,pt,xt,qt,St,rn)=>{let an=new en(yt,pt,xt);an.translate(Je+yt/2,Mt+pt/2,$e-xt/2);let Ie=new We(Qn(an,St,l+=31),rn||Ye);return Ie.name=qt,Ie.castShadow=Ie.receiveShadow=!0,Nt.add(Ie),Ie},rt=R.z_door+R.door_h+(a.head||.25),It=[];if(Ut){let Je=K/2+kt.pin,Mt=rt-(a.head||.25)+(a.head||.3125),$e=r.threshold||1,yt=-W/2+.75,pt=W-1.5,xt=5.09375,qt=Fe.mats.e3alu||(Fe.mats.e3alu=new zt({color:12830667,metalness:.85,roughness:.38,envMapIntensity:1})),St=Fe.mats.e3hw||(Fe.mats.e3hw=new zt({color:11843772,metalness:.9,roughness:.32,envMapIntensity:1.1})),rn=(it,wt,mt)=>{let Vt=new Nn;it.forEach((on,vt)=>vt?Vt.lineTo(on[0],on[1]):Vt.moveTo(on[0],on[1]));let Gt=new ai(Vt,{depth:pt,bevelEnabled:!1});Gt.rotateY(Math.PI/2),Gt.translate(yt,0,lt);let Kt=new We(mt===Ye?Qn(Gt,"x",l+=31):Gt,mt);return Kt.name=wt,Kt.castShadow=Kt.receiveShadow=!0,Nt.add(Kt),Kt};for(let it of[-1,1])tt(it<0?-W/2:W/2-.75,0,lt,.75,j,4.15625,"Jamb "+(it<0?"L":"R"),"y"),tt(it<0?-W/2:W/2-1.5,0,lt-4.15625,1.5,j,.9375,"Jamb stop "+(it<0?"L":"R"),"y");tt(yt,j-2.6875,lt,pt,2.6875,.5,"Front board","x"),tt(yt,j-.6875,lt-.5,pt,.6875,xt-.5,"Top board","x"),rn(kt.KT.map(it=>[.5+it[0],Mt+it[1]]),"Top track \xB7 KT70D",qt),tt(yt,Mt,lt-2.941,pt,1.969,1.1875,"Filler","x"),tt(yt+.75,Mt+1.969-3.4375,lt-4.15625,pt-1.5,3.4375,.9375,"Inside board","x");let an=Fe.mats.e3thr||(Fe.mats.e3thr=new zt({color:6962988,roughness:.6,metalness:0,envMapIntensity:rs})),Ie=String(b.e3_sill||b.sill_type||"").toLowerCase()!=="stop",Et=Ie?xt:4.15625;if(rn([[0,0],[0,$e-.25],[1.71,$e],[1.98,$e],[1.98,$e-.875],[2.918,$e-.875],[2.918,$e],[Et,$e],[Et,0]],"Threshold",an),Ie||tt(yt+.75,0,lt-4.15625,pt-1.5,$e+1.625,.9375,"Threshold stop","x"),rn([[1.98,$e-.875],[1.98,$e],[2.045,$e],[2.045,$e-.81],[2.853,$e-.81],[2.853,$e],[2.918,$e],[2.918,$e-.875]],"Floor channel \xB7 EC23DV",qt),rn([[2.065,$e-.79],[2.065,$e-.05],[2.128,$e-.05],[2.128,$e-.727],[2.77,$e-.727],[2.77,$e-.05],[2.833,$e-.05],[2.833,$e-.79]],"Channel liner",Ks("#1c1d1f",.7)),kt.lib){let it=(vt,Rt,Wn,oi,zi,nr,dn,Fn)=>{let Xn=B_(vt,Rt,dn,Fn);if(!Xn)return;let ni=new We(Xn,Re.hw);ni.name="E3 "+vt+" "+Rt,ni.castShadow=ni.receiveShadow=!0,ni.position.set(oi,zi,nr),Rt==="fix"&&!Fn?(It.push({m:ni,i:Wn,lx:oi,lz:nr}),Oe.add(ni)):At[Wn].add(ni)},wt=R.z_door,mt=R.z_door+R.door_h,Vt={top_pivot:Mt+.04,end_carrier:Mt-.14,int_carrier:Mt-.14},Gt=mt+.2,Kt=[wt+2.36,(wt+mt)/2-2.13,mt-2.36-4.25],on=[];Me.Lq>0&&on.push({d:1,idx:[...Array(Me.Lq).keys()]}),Me.Rq>0&&on.push({d:-1,idx:[...Array(Me.Rq).keys()].map(vt=>L-1-vt)});for(let vt of on){let Rt=vt.d,Wn=vt.idx.length,oi=dn=>Me.leaves[dn].w,zi=vt.idx[0],nr=-Rt*oi(zi)/2+Rt*kt.inb;for(let dn of["a","fix"])it("top_pivot",dn,zi,nr,dn==="fix"?Vt.top_pivot:Gt,Je,Rt<0,!1),it("bot_pivot",dn,zi,nr,$e,Je,Rt<0,!1);for(let dn=1;dn<Wn;dn++){let Fn=vt.idx[dn-1],Xn=vt.idx[dn],ni=Me.gapI(Math.min(Fn,Xn)),kr=Rt*oi(Fn)/2+Rt*ni/2,yc=-Rt*oi(Xn)/2-Rt*ni/2;if(dn%2)Kt.forEach((Hi,vo)=>{let cs=vo===1?"hinge_handle":"hinge";it(cs,"fix",Fn,kr,Hi,-Je,!1,!0),it(cs,Rt>0?"b":"a",Fn,kr,Hi,-Je,!1,!0),it(cs,Rt>0?"a":"b",Xn,yc,Hi,-Je,!1,!0)});else for(let[Hi,vo,cs]of[["int_carrier",Vt.int_carrier,Gt],["int_guide",$e,$e]])it(Hi,"fix",Fn,kr,vo,Je,!1,!1),it(Hi,Rt>0?"a":"b",Fn,kr,cs,Je,!1,!1),it(Hi,Rt>0?"b":"a",Xn,yc,cs,Je,!1,!1)}if(Wn%2===0){let dn=vt.idx[Wn-1],Fn=Rt*oi(dn)/2-Rt*kt.inb;for(let Xn of["a","fix"])it("end_carrier",Xn,dn,Fn,Xn==="fix"?Vt.end_carrier:Gt,Je,Rt>0,!1),it("end_guide",Xn,dn,Fn,$e,Je,Rt>0,!1)}}}}else tt(-W/2,0,lt,r.jamb,j,Yt,"Jamb L","y"),tt(W/2-r.jamb,0,lt,r.jamb,j,Yt,"Jamb R","y"),tt(-W/2+r.jamb,rt,lt,W-2*r.jamb,Math.max(.75,j-rt),.75,"Track header face","x"),tt(-W/2+r.jamb,rt+.75,lt-.75,W-2*r.jamb,Math.max(.5,j-rt-.75),Yt-.75,"Track box","x",Ks("#2a2826",.8)),tt(-W/2+r.jamb,0,lt,W-2*r.jamb,r.threshold||1,Yt,"Threshold","x",Fe.mats.thr||(Fe.mats.thr=new zt({color:6973024,roughness:.55,metalness:.5})));return Oe.add(Nt),{og:Oe,L:Me,lvs:At,Wu:W,Hu:j,t:K,zf:lt,ctx:Re,fix:It}},h=new Hn;G.unit=h;let d=c(i,o),{Wu:u,Hu:p,t:g,zf:x,ctx:m}=d,f=null;if(He.second!=="none"){let b=He.second,R=b==="single"?Uu.single:b==="double"?Uu.double:+i.width_in||192,L=b==="single"?2:b==="double"?4:+i.doors||d.L.n,W=Object.assign({},i,{width_in:R,doors:L,split:b==="same"?i.split:L===2?"1L1R":"2L2R",mandoor:null});G.curS=W;let j=null;try{j=s(W,e,t,n)}catch{j=null}G.curS=i,j&&j.leaves&&j.leaves.length&&(f=c(W,j))}G.L=d.L,G.leaves=d.lvs,G.fixA=d.fix,G.B=f,G.H=p,h.add(d.og),f&&h.add(f.og);let M=a.shim_side||0,v=a.shim_top||0,S=u/2+M,C=p+v,A=32,w=28,D=f?f.Wu/2+M:0,_=2*A+2*S+(f?w+2*D:0),y=-_/2+A+S,N=y+S+w+D,B=f?[[y,S],[N,D]]:[[y,S]],X=f?[-_/2+A/2,y+S+w/2,_/2-A/2]:[-_/2+A/2,_/2-A/2],T=p+30,U=8,H=e.tb==="flush",k=H?x+.01:x+2.75,$=zu(He.structure),q=Wt("wall_"+$.wall,Ou[$.wall]||Ou.stucco,.95);d.og.position.x=y,f&&(f.og.position.x=N);let te=He.eave==="deep"?6:-.5,se=[[-_/2,te]];for(let[b,R]of B)se.push([b-R,te],[b-R,C],[b+R,C],[b+R,te]);se.push([_/2,te],[_/2,T],[-_/2,T]);let ge=new Nn(se.map(b=>new ce(b[0],b[1]))),Q=new ai(ge,{depth:U,bevelEnabled:!1});Q.translate(0,0,k-U);let re=new We(Qn(Q,"y",3),H?m.fin:q);re.castShadow=re.receiveShadow=!0,re.name="House wall",h.add(re);for(let b of[-1,1]){let R=new en(U,T+.5,250);R.translate(b*(_/2-U/2),T/2-.25,k-U-125);let L=new We(Qn(R,"y",l+=31),H?m.fin:q);L.castShadow=L.receiveShadow=!0,L.name="Side wall",h.add(L)}let Se=Wt("conc",{seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2},.9),ze=Wt("concD",{seed:21,color:"#7f7b75",mid:.6,fine:1,tone:.12,grit:.2,bump:3.5},.92),ue=(b,R,L,W,j,Z,K,ne,le)=>{let pe=new en(b,R,L);pe.translate(W,j,Z);let Le=new We(Qn(pe,le||"x",l+=31),K);return Le.castShadow=Le.receiveShadow=!0,Le.name=ne,h.add(Le),Le};if(He.eave==="deep"){let b=[-_/2];for(let[R,L]of B)b.push(R-L,R+L);b.push(_/2);for(let R=0;R<b.length;R+=2)ue(b[R+1]-b[R],6.5,U+.75,(b[R]+b[R+1])/2,3.25,k-U/2+.375,ze,"Stem wall")}let Ne=go("#efece4");if(!H)for(let[R,L]of B)ue(3.5,C+3.5,.75,R-L-3.5/2,(C+3.5)/2,k+.375,Ne,"Casing L","y"),ue(3.5,C+3.5,.75,R+L+3.5/2,(C+3.5)/2,k+.375,Ne,"Casing R","y"),ue(2*L,3.5,.75,R,C+3.5/2,k+.375,Ne,"Casing head","x");let qe=He.roof==="flat",Te=qe?0:He.eave==="deep"?20:1.5,Xe=_+2*Te+14,F=He.pitch/12,oe=Math.atan(F),ie=He.roof==="spanish"?Wt("roofspanish",{n:512,seed:131,color:"#6e3a2c",pal:["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"],mid:.3,fine:.6,tone:.04,grit:.14,bump:11,rows:128,tab:64,align:1,barrel:64,barrelK:4.5,deep:1},.84):He.roof==="shake"?Wt("roofshake",{n:512,seed:137,color:"#6f5a4a",pal:["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"],mid:.5,fine:1.4,tone:.1,grit:.5,bump:8,rows:64,tab:48,jit:1},.96):He.roof==="tile"?Wt("rooftile",{n:512,seed:61,color:"#553029",mid:.4,fine:.6,tone:.16,grit:.2,bump:7,rows:64,tab:512,barrel:32},.82):He.roof==="metal"?Fe.mats.roofmetal||(Fe.mats.roofmetal=(()=>{let b=uc("roofmetal",512,{seed:71,color:"#3d4043",mid:.1,fine:.2,tone:.05,grit:.05,bump:6,seam:128});return new zt({map:b.map,normalMap:b.normalMap,roughness:.42,metalness:.75,envMapIntensity:.9})})()):Wt("shingle",{n:512,seed:31,color:"#4a4a4c",mid:.5,fine:1,tone:.1,grit:.3,bump:5,rows:32,tab:64},.93),_e=qe?"flat":/^flat/.test($.form)?"side":$.form,ee=T+6.6,ke=He.roof==="shingle"?96:64,be=(b,R,L,W,j)=>{let Z=L===W,K=(Me,Ke)=>[Me[0]-Ke[0],Me[1]-Ke[1],Me[2]-Ke[2]],ne=K(R,b),le=K(L,b);if(ne[2]*le[0]-ne[0]*le[2]<0){let Me=b;if(b=R,R=Me,!Z){let Ke=L;L=W,W=Ke}}let pe=Math.hypot(...K(R,b)),Le=K(R,b).map(Me=>Me/pe),Re=Me=>{let Ke=K(Me,b),ht=Ke[0]*Le[0]+Ke[1]*Le[1]+Ke[2]*Le[2];return[ht/ke,Math.hypot(Ke[0]-ht*Le[0],Ke[1]-ht*Le[1],Ke[2]-ht*Le[2])/ke]},Oe=Z?[b,R,L]:[b,R,L,b,L,W],Pe=new Bt;Pe.setAttribute("position",new ut(Oe.flat(),3)),Pe.setAttribute("uv",new ut(Oe.map(Re).flat(),2)),Pe.computeVertexNormals();let Ue=new We(Pe,ie);return Ue.castShadow=Ue.receiveShadow=!0,Ue.name=j,h.add(Ue),Ue},P=Ks("#2e3033",.6),E=H?m.fin:q,Y=(b,R)=>{if(He.roof!=="spanish"&&He.roof!=="tile")return!1;let L=new O(...b),W=new O(...R).sub(L),j=W.length();if(j<6)return!0;W.normalize();let Z=new O().crossVectors(W,new O(0,1,0));Z.lengthSq()<1e-6&&Z.set(1,0,0),Z.normalize();let K=new O().crossVectors(Z,W);K.y<0&&(Z.negate(),K.negate());let ne=ei(Math.round(j*13+b[0]+b[2])+5),le=[],pe=He.roof==="spanish"?4.6:3.2,Le=new _t;for(let Oe=0;Oe<j;Oe+=12){let Pe=Gn(de[Math.floor(ne()*de.length)]),Ue=.88+ne()*.2,Me=Math.min(15,j-Oe+2),Ke=new $i(pe,pe*.9,Me,8,1,!0,-Math.PI/2,Math.PI);Ke.translate(0,Me/2-1,1.2),Ke.rotateX(-.04),Ke=Ke.toNonIndexed();let ht=Ke.attributes.position.count,At=new Float32Array(ht*3);for(let Ut=0;Ut<ht;Ut++)At[Ut*3]=Pe.r*Ue,At[Ut*3+1]=Pe.g*Ue,At[Ut*3+2]=Pe.b*Ue;Ke.setAttribute("color",new Pt(At,3)),Ke.applyMatrix4(Le.makeBasis(Z,W,K).setPosition(L.clone().addScaledVector(W,Oe))),le.push(Ke)}let Re=new We(Or(le,!1),fe);return Re.castShadow=Re.receiveShadow=!0,Re.name="Hip and ridge tiles",h.add(Re),!0},de=He.roof==="spanish"?["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"]:He.roof==="tile"?["#553029","#5d352c","#4c2a24","#613a30"]:He.roof==="shake"?["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"]:null,fe=Fe.mats.eave||(Fe.mats.eave=new zt({vertexColors:!0,roughness:.88,side:bn,envMapIntensity:rs})),ae=(b,R,L,W,j)=>{if(!de)return;let Z=new O(...b),K=new O(...R),ne=new O(...L).normalize(),le=K.clone().sub(Z),pe=le.length();le.normalize();let Le=new O().crossVectors(le,ne);Le.y<0&&(le.negate(),Le.negate(),Z.copy(K));let Re=ei(Math.round(pe*7+b[0]*3+b[2]*5)+77),Oe=[],Pe=He.roof==="shake",Ue=He.roof==="spanish"?4:2.6,Me=Pe?10:15,Ke=Pe?6.5:12.5,ht=Math.cos(oe),At=new _t;for(let Nt=0,Yt=0;Nt<W-1;Nt+=Ke,Yt++){let lt=j?Nt*ht:0,Ye=lt,tt=pe-lt;if(tt-Ye<(Pe?3:2*Ue))break;let rt=Pe?Ye-Re()*4:Math.ceil(Ye/(2*Ue)-.5)*2*Ue;for(;rt<tt-.5;){let It=Pe?3.5+Re()*5:2*Ue,Je=Math.max(rt,Ye),Mt=Math.min(rt+It,tt),$e=Mt-Je;if(rt+=It,$e<(Pe?1.2:2*Ue-.01))continue;let yt=Yt?0:Pe?.5+Re()*.9:2.2+Re()*.5,pt=Gn(de[Math.floor(Re()*de.length)]),xt=.88+Re()*.22,qt=Math.min(Me,W-Nt+yt),St;Pe?(St=new en($e-.18,qt,.62),St.translate(0,qt/2-yt,.31+Re()*.3),St.rotateX(-.055)):(St=new $i($e/2,$e/2*.9,qt,8,1,!0,-Math.PI/2,Math.PI),St.translate(0,qt/2-yt,.15),St.rotateX(-.03)),St=St.toNonIndexed();let rn=St.attributes.position.count,an=new Float32Array(rn*3);for(let Ie=0;Ie<rn;Ie++)an[Ie*3]=pt.r*xt,an[Ie*3+1]=pt.g*xt,an[Ie*3+2]=pt.b*xt;St.setAttribute("color",new Pt(an,3)),St.applyMatrix4(At.makeBasis(le,ne,Le).setPosition(Z.clone().addScaledVector(le,(Je+Mt)/2).addScaledVector(ne,Nt))),Oe.push(St)}}if(!Oe.length)return;let Ut=new We(Or(Oe,!1),fe);Ut.castShadow=Ut.receiveShadow=!0,Ut.name="Roof courses",h.add(Ut)};if(_e==="flat"&&$.form==="flat8"){let R=250+U+16;ue(_+16,9,R,0,T+4.5,k+8-R/2,P,"Roof edge"),ue(_+16-2,.75,R-2,0,T-.375,k+8-R/2,Ne,"Soffit")}else if(_e==="flat"){ue(_+3,2.5,U+3,0,T+1.25,k-U/2,Ne,"Parapet cap","x");for(let b of[-1,1])ue(U+3,2.5,250,b*(_/2-U/2),T+1.25,k-U-125,Ne,"Parapet cap","z");if(ue(_-2*U,1,250,0,T-8,k-U-125,Ks("#55565a",.9),"Roof deck"),$.form==="flat"){let R=C+14;ue(_+36,8,66,0,R+4,k+66/2,P,"Canopy"),ue(_+30,1,62,0,R-.4,k+66/2-1,Ne,"Canopy soffit");for(let L of[-1,1])ue(10,R,10,L*(_/2+8),R/2,k+66-8,Se,"Column","y")}}else if(_e==="front"){let b=_/2+Te+5,R=k+Te+7,L=k-U-250-Te-7,W=T+1.2-(Te+5)*F,j=W+b*F;be([-b,W,R],[-b,W,L],[0,j,L],[0,j,R],"Roof L"),ae([-b,W,R],[-b,W,L],[Math.cos(oe),Math.sin(oe),0],b/Math.cos(oe)),ae([b,W,L],[b,W,R],[-Math.cos(oe),Math.sin(oe),0],b/Math.cos(oe)),be([b,W,L],[b,W,R],[0,j,R],[0,j,L],"Roof R"),Y([0,j,L],[0,j,R])||ue(9,1.6,R-L,0,j+.3,(R+L)/2,P,"Ridge cap","z");for(let Z of[k,k-250]){let K=new Nn([[-_/2,0],[_/2,0],[0,_/2*F]].map(pe=>new ce(pe[0],pe[1]))),ne=new ai(K,{depth:U,bevelEnabled:!1});ne.translate(0,T,Z-U);let le=new We(Qn(ne,"y",l+=31),E);le.castShadow=le.receiveShadow=!0,le.name="Gable",h.add(le)}for(let Z of[-1,1]){let K=Math.hypot(b,b*F),ne=new en(K,5.5,1.2);ne.rotateZ(Z*-Math.atan(F)),ne.translate(Z*b/2,W+b*F/2-2.4,R-.4);let le=new We(Qn(ne,"x",l+=31),Ne);le.castShadow=!0,le.name="Rake board",h.add(le);let pe=new en(K,5.5,1.2);pe.rotateZ(Z*-Math.atan(F)),pe.translate(Z*b/2,W+b*F/2-2.4,L+.4);let Le=new We(Qn(pe,"x",l+=31),Ne);Le.castShadow=!0,Le.name="Rake board",h.add(Le);let Re=new en(K,.8,R-L-1.6);Re.rotateZ(Z*-Math.atan(F)),Re.translate(Z*b/2,W+b*F/2-1.1,(R+L)/2);let Oe=new We(Qn(Re,"z",l+=31),Ne);Oe.castShadow=Oe.receiveShadow=!0,Oe.name="Soffit",h.add(Oe),ue(1.2,5.5,R-L,Z*(b-.5),W-2.3,(R+L)/2,Ne,"Fascia","z")}ue(14,20,1,0,T+_/2*F*.42,k+.4,P,"Gable vent","y")}else if(_e==="hip"){let b=_/2+Te+3,R=k+Te+3,L=k-U-250-Te-3,W=(R-L)/2,j=(R+L)/2;{let Z=Math.min(W,b)/Math.cos(oe);ae([-b,ee,R],[b,ee,R],[0,Math.sin(oe),-Math.cos(oe)],Z,1),ae([b,ee,L],[-b,ee,L],[0,Math.sin(oe),Math.cos(oe)],Z,1),ae([b,ee,R],[b,ee,L],[-Math.cos(oe),Math.sin(oe),0],Z,1),ae([-b,ee,L],[-b,ee,R],[Math.cos(oe),Math.sin(oe),0],Z,1)}if(W<=b){let Z=b-W,K=ee+W*F;be([-b,ee,R],[b,ee,R],[Z,K,j],[-Z,K,j],"Roof front"),be([b,ee,L],[-b,ee,L],[-Z,K,j],[Z,K,j],"Roof back");let ne=[Z,K,j],le=[-Z,K,j];be([b,ee,R],[b,ee,L],ne,ne,"Roof R"),be([-b,ee,L],[-b,ee,R],le,le,"Roof L");for(let pe of[-1,1])for(let Le of[R,L])Y([pe*b,ee,Le],[pe*Z,K,j]);Z>2&&!Y([-Z,K,j],[Z,K,j])&&ue(2*Z,1.6,9,0,K+.3,j,P,"Ridge cap","x")}else{let Z=W-b,K=ee+b*F,ne=[0,K,j+Z],le=[0,K,j-Z];be([-b,ee,R],[b,ee,R],ne,ne,"Roof front"),be([b,ee,L],[-b,ee,L],le,le,"Roof back"),be([b,ee,R],[b,ee,L],le,ne,"Roof R"),be([-b,ee,L],[-b,ee,R],ne,le,"Roof L");for(let pe of[-1,1])Y([pe*b,ee,R],ne),Y([pe*b,ee,L],le);Y(le,ne)||ue(9,1.6,2*Z,0,K+.3,j,P,"Ridge cap","z")}ue(2*b,7.25,1.5,0,T+2.9,R-.75,Ne,"Fascia","x"),ue(2*b,7.25,1.5,0,T+2.9,L+.75,Ne,"Fascia","x");for(let Z of[-1,1])ue(1.5,7.25,R-L,Z*(b-.75),T+2.9,j,Ne,"Fascia","z");ue(2*b-3,.75,R-L-3,0,T-.375,j,Ne,"Soffit","x")}else{ue(Xe,.75,Te+U,0,T-.375,k+Te/2-U/2,Ne,"Soffit","x"),ue(Xe,7.25,1.5,0,T+2.9,k+Te+.75,Ne,"Fascia","x");let b=new We(new $i(2.6,2.6,Xe,20,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),Fe.mats.gut||(Fe.mats.gut=new zt({color:3487290,metalness:.7,roughness:.45,side:bn})));b.position.set(0,T+4.2,k+Te+3.6),b.castShadow=!0,h.add(b);let R=k-U-125,L=k+Te+2.2-R,W=L/Math.cos(oe),j=new Jn(Xe,W),Z=He.roof==="shingle"?96:64;{let le=j.attributes.uv;for(let pe=0;pe<le.count;pe++)le.setXY(pe,le.getX(pe)*Xe/Z,le.getY(pe)*W/Z)}let K=new We(j,ie);K.rotation.x=-Math.PI/2+oe,K.position.set(0,T+6.6+W/2*Math.sin(oe),k+Te+2.2-W/2*Math.cos(oe)),K.castShadow=K.receiveShadow=!0,K.name="Roof",h.add(K);let ne=new We(j,ie);ne.rotation.x=-Math.PI/2-oe,ne.position.set(0,T+6.6+W/2*Math.sin(oe),R-W/2*Math.cos(oe)),ne.castShadow=ne.receiveShadow=!0,ne.name="Roof back",h.add(ne),ae([-Xe/2,T+6.6,k+Te+2.2],[Xe/2,T+6.6,k+Te+2.2],[0,Math.sin(oe),-Math.cos(oe)],W),ae([Xe/2,T+6.6,R-L],[-Xe/2,T+6.6,R-L],[0,Math.sin(oe),Math.cos(oe)],W),Y([-Xe/2,T+6.6+L*F,R],[Xe/2,T+6.6+L*F,R])||ue(Xe,1.6,9,0,T+6.6+L*F+.3,R,Fe.mats.gut,"Ridge cap","x");for(let le of[-1,1]){let Le=new Nn([[0,0],[250,0],[125,125*F]].map(Pe=>new ce(Pe[0],Pe[1]))),Re=new ai(Le,{depth:U,bevelEnabled:!1});Re.rotateY(Math.PI/2),Re.translate(le*(_/2-U/2)-U/2,T,k-U);let Oe=new We(Qn(Re,"y",l+=31),E);Oe.castShadow=Oe.receiveShadow=!0,Oe.name="Side wall rake",h.add(Oe)}}let Be=Fe.mats.lant||(Fe.mats.lant=new zt({color:1776413,metalness:.6,roughness:.5})),Ce=Fe.mats.lantg||(Fe.mats.lantg=new zt({color:16773590,emissive:16767392,emissiveIntensity:.25,roughness:.3}));if(He.light==="barrel"){let b=Fe.tex.wash||(Fe.tex.wash=(()=>{let W=document.createElement("canvas");W.width=64,W.height=128;let j=W.getContext("2d"),Z=j.createRadialGradient(32,0,1,32,0,120);Z.addColorStop(0,"rgba(255,226,170,.95)"),Z.addColorStop(.25,"rgba(255,214,150,.45)"),Z.addColorStop(1,"rgba(255,200,130,0)"),j.fillStyle=Z,j.beginPath(),j.moveTo(32,0),j.lineTo(64,128),j.lineTo(0,128),j.closePath(),j.fill();let K=new Di(W);return K.colorSpace=Lt,K})()),R=Fe.mats.wash||(Fe.mats.wash=new vi({map:b,transparent:!0,depthWrite:!1,opacity:.55,blending:ma,toneMapped:!1})),L=Fe.mats.barrel||(Fe.mats.barrel=new zt({color:2762275,metalness:.75,roughness:.38}));for(let W of X){let j=Math.min(C-14,78),Z=new We(new $i(2.3,2.3,11,28),L);Z.position.set(W,j,k+3.4),Z.castShadow=!0,Z.name="Barrel sconce",h.add(Z),ue(1.6,3,1.4,W,j,k+.7,L,"Sconce arm","y");for(let K of[1,-1]){let ne=new We(new Fa(1.9,20).rotateX(-K*Math.PI/2),Ce);ne.position.set(W,j+K*5.52,k+3.4),h.add(ne);let le=new We(new Jn(30,46),R);K>0&&(le.rotation.z=Math.PI),le.position.set(W,j+K*(5.5+23),k+.12),le.renderOrder=2,h.add(le)}}}else for(let b of X){let R=Math.min(C-14,78);ue(4.5*1.37,7*1.37,.6,b,R,k+.3,Be,"Lantern plate","y"),ue(5*1.37,.8*1.37,5*1.37,b,R+5.4*1.37,k+.6+2.8*1.37,Be,"Lantern cap"),ue(5*1.37,.6*1.37,5*1.37,b,R-4.6*1.37,k+.6+2.8*1.37,Be,"Lantern base"),ue(3.6*1.37,9.4*1.37,3.6*1.37,b,R+.3*1.37,k+.6+2.8*1.37,Ce,"Lantern glass","y").castShadow=!1,ue(.8*1.37,1*1.37,2*1.37,b,R+5*1.37,k+1*1.37,Be,"Lantern arm")}let xe=_+8,Ve=640,je=new Nn;je.moveTo(-xe/2,0),je.lineTo(xe/2,0),je.bezierCurveTo(xe/2,-230,xe/2+70,-330,xe/2+70,-Ve),je.lineTo(-xe/2-190,-Ve),je.bezierCurveTo(-xe/2-190,-400,-xe/2,-300,-xe/2,0);let he=He.paver==="rust",st=()=>Wt("herr"+He.paver,{n:512,seed:111,pal:he?cc:null,color:"#8f867b",mid:.4,fine:.9,tone:.04,grit:.1,bump:2.6,herr:32,jw:2},.88),z=()=>Wt("mix"+He.paver,{n:768,seed:121,pal:he?cc:null,color:"#8f877c",mid:.4,fine:.9,tone:.03,grit:.1,bump:2.6,mix:64,jw:3},.88),me=He.drive==="mix"?z():He.drive==="herr"?st():He.drive==="pavers"?Wt("pavers"+He.paver,{n:512,seed:83,pal:he?cc:null,color:"#8c8379",mid:.5,fine:.9,tone:.04,grit:.2,bump:4.5,rows:32,tab:64},.88):Wt("concj",{n:512,seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2,joint:512},.9),Ae=He.drive==="concrete"?120:He.drive==="mix"?96:64,ve=new Ba(je,24);{let b=ve.attributes.uv;for(let R=0;R<b.count;R++)b.setXY(R,b.getX(R)/Ae,b.getY(R)/Ae)}ve.rotateX(-Math.PI/2),ve.translate(0,0,k-.02);let Ge=new We(ve,me);Ge.receiveShadow=!0,Ge.name="Driveway",h.add(Ge);let nt=He.ground==="gravel"?Wt("gravel",{seed:44,color:"#8c857a",mid:.3,fine:1.6,tone:.1,grit:.75,bump:9},1):He.ground==="dg"?Wt("dg",{seed:47,color:"#a8916f",mid:.5,fine:1.2,tone:.05,grit:.35,bump:5},1):He.ground==="mix"?z():He.ground==="herr"?st():He.ground==="mpavers"?Wt("mpavers",{n:512,seed:91,color:"#a39f97",mid:.3,fine:.8,tone:.03,grit:.14,bump:4,slab:[256,128],jw:6},.9):He.ground==="flag"||He.ground==="planters"?Wt("flag",{n:512,seed:97,color:"#9a8f80",mid:.7,fine:1,tone:.05,grit:.2,bump:6,cells:5,jw:5},.92):He.ground==="blue"?Wt("lawn4",{seed:52,color:"#457a42",mid:.7,fine:1.8,tone:.07,grit:.5,bump:5},1):Wt("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1),ot=(b,R,L,W)=>{let j=[];for(let Z=0;Z<=40;Z++){let K=Z/40,ne=1-K;j.push([ne*ne*ne*b[0]+3*ne*ne*K*R[0]+3*ne*K*K*L[0]+K*K*K*W[0],-(ne*ne*ne*b[1]+3*ne*ne*K*R[1]+3*ne*K*K*L[1]+K*K*K*W[1])])}return j.sort((Z,K)=>Z[1]-K[1])},et=(b,R)=>{for(let L=1;L<b.length;L++)if(b[L][1]>=R){let W=b[L-1],j=b[L],Z=(R-W[1])/Math.max(1e-6,j[1]-W[1]);return W[0]+(j[0]-W[0])*Z}return b[b.length-1][0]},ye=ot([-xe/2-190,-Ve],[-xe/2-190,-400],[-xe/2,-300],[-xe/2,0]),V=ot([xe/2,0],[xe/2,-230],[xe/2+70,-330],[xe/2+70,-Ve]),Ee=He.ground==="mpavers"||He.ground==="mix"||He.ground==="herr"||He.ground==="flag"||He.ground==="planters",we=He.land==="rolling"||He.land!=="flat"&&!Ee,Qe=b=>(b=Math.max(0,Math.min(1,b)),b*b*(3-2*b)),Ze=(b,R)=>{let L=(j,Z,K)=>Math.hypot(Math.max(0,Math.abs(b)-j),R<Z?Z-R:R>K?R-K:0),W=L(_/2+44,-330,0);if(Ee&&(W=Math.min(W,L(_/2+220,-300,600))),R>=0){let j=Math.min(R,Ve),Z=et(ye,j),K=et(V,j);W=Math.min(W,Math.hypot(b<Z?Z-b:b>K?b-K:0,R-j))}return W},ft=(b,R)=>{if(!we)return 0;let L=Qe((Ze(b,R)-22)/140);if(L<=0)return 0;let W=Qe((Math.hypot(b,R)-1300)/2e3);return L*(2.6+3.4*Math.sin(b*.0131+.7)*Math.sin(R*.0117+2.1)+2.4*Math.sin(b*.0057+R*.0043+1.9)+1.4*Math.sin(b*.031-R*.027+.3)+.6*Math.sin(b*.071+1)*Math.sin(R*.063)+W*(26+36*Math.sin(b*.0011+.5)*Math.sin(R*.0013+1.2)+18*Math.sin(b*.0027-R*.0019+2.4)))},gt=(b,R,L,W)=>{let j=[];for(let Re=-960;Re<=960;Re+=12)j.push(Re);for(let Re=960,Oe=16;Re<4500;)Oe*=1.3,Re=Math.min(4500,Re+Oe),j.push(Re),j.unshift(-Re);let Z=j.length,K=new Float32Array(Z*Z*3),ne=new Float32Array(Z*Z*2),le=[];for(let Re=0;Re<Z;Re++)for(let Oe=0;Oe<Z;Oe++){let Pe=Re*Z+Oe,Ue=j[Oe],Me=j[Re]+200;K[3*Pe]=Ue,K[3*Pe+1]=b+ft(Ue,Me),K[3*Pe+2]=k+Me,ne[2*Pe]=Ue/L,ne[2*Pe+1]=-(k+Me)/L,Oe&&Re&&le.push(Pe-Z-1,Pe-1,Pe-Z,Pe-Z,Pe-1,Pe)}let pe=new Bt;pe.setAttribute("position",new Pt(K,3)),pe.setAttribute("uv",new Pt(ne,2)),pe.setIndex(le),pe.computeVertexNormals();let Le=new We(pe,R);Le.receiveShadow=!0,Le.name=W,h.add(Le)};{let b=He.ground==="mpavers"||He.ground==="mix"||He.ground==="herr"||He.ground==="flag"||He.ground==="planters",R=He.ground==="lawn"||He.ground==="blue"||He.ground==="herr"?64:He.ground==="mpavers"||He.ground==="mix"?96:b?150:40,L=(j,Z,K,ne,le,pe,Le,Re)=>{let Oe=new Jn(j,Z),Pe=Oe.attributes.uv;for(let Me=0;Me<Pe.count;Me++)Pe.setXY(Me,Pe.getX(Me)*j/Le,Pe.getY(Me)*Z/Le);Oe.rotateX(-Math.PI/2);let Ue=new We(Oe,pe);Ue.position.set(K,le,ne),Ue.receiveShadow=!0,Ue.name=Re,h.add(Ue)},W=()=>Wt("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1);we?b?(gt(-.9,W(),64,"Lawn"),L(_+440,900,0,k+150,-.5,nt,R,"Paving")):gt(-.5,nt,R,"Ground"):b?(L(9e3,9e3,0,0,-.9,W(),64,"Lawn"),L(_+440,900,0,k+150,-.5,nt,R,"Paving")):L(9e3,9e3,0,0,-.5,nt,R,"Ground")}if(He.ground==="blue"){let b=(Ye,tt)=>tt>=0?Ye<et(ye,tt)-1.5||Ye>et(V,tt)+1.5:Math.abs(Ye)>_/2+38,R=(()=>{let Ye=ei(771),tt=[],rt=[],It=[],Je=[];for(let Mt=0;Mt<11;Mt++){let $e=Ye()*6.283,yt=1.25+Ye()*.45,pt=.24+Ye()*.08,xt=pt*.72,qt=(Ye()-.5)*2.3,St=(Ye()-.5)*2.3,rn=.05+Ye()*.35,an=Ye()*6.283,Ie=Math.cos($e)/2,Et=Math.sin($e)/2,it=qt+Math.cos(an)*rn,wt=St+Math.sin(an)*rn,mt=.78+Ye()*.1,Vt=1+Ye()*.22,Gt=[qt-Ie*pt,0,St-Et*pt],Kt=[qt+Ie*pt,0,St+Et*pt],on=[it+Ie*xt,yt,wt+Et*xt],vt=[it-Ie*xt,yt,wt-Et*xt],Rt=tt.length/3;tt.push(...Gt,...Kt,...on,...vt),rt.push(mt,mt,mt,mt,mt,mt,Vt,Vt,Vt,Vt,Vt,Vt),Je.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3);for(let Wn=0;Wn<6;Wn++){let oi=(Ye()-.5)*.4,zi=(Ye()-.5)*.4;(Wn<3||Wn===5)&&It.push(oi,1,zi)}}return{pos:new ut(tt,3),col:new ut(rt,3),nor:new ut(It,3),idx:new Bs(Je,1)}})(),L=()=>{let Ye=new Bt;return Ye.setAttribute("position",R.pos),Ye.setAttribute("color",R.col),Ye.setAttribute("normal",R.nor),Ye.setIndex(R.idx),Ye},W=Fe.mats.grass||(Fe.mats.grass=(()=>{let Ye=new zt({vertexColors:!0,side:bn,roughness:.9,metalness:0,envMapIntensity:.25});return Ye.onBeforeCompile=tt=>{tt.fragmentShader=tt.fragmentShader.replace("#include <normal_fragment_begin>",ct.normal_fragment_begin.replace(/normal \*= faceDirection;/g,""))},Ye})()),j=["#427a45","#4c8550","#3b7040","#558e56","#47804b","#3f7646"].map(Gn),Z=ei(9113),K=[],ne=-_/2-430,le=_/2+330,pe=-130,Le=580,Re=He.lite!=null?!!He.lite:typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||innerWidth<820,Oe=Re?1.5:1,Pe=2.3*Oe,Ue=4.6*Oe;for(let Ye=pe;Ye<Le;){let tt=Ye>-30&&Ye<340,rt=tt?Pe:Ue;for(let It=ne;It<le;It+=rt){let Je=tt&&It>-_/2-270&&It<_/2+250,Mt=Je?Pe:Ue;if(!Je&&tt&&Math.round((It-ne)/Pe)%2)continue;let $e=It+(Z()-.5)*Mt,yt=Ye+(Z()-.5)*Mt;b($e,yt)&&K.push($e,yt,(Je?1:1.9)*(Re?1.42:1))}Ye+=rt}let Me=160,Ke=new Map;for(let Ye=0;Ye<K.length;Ye+=3){let tt=Math.floor((K[Ye]-ne)/Me)+","+Math.floor((K[Ye+1]-pe)/Me);(Ke.get(tt)||Ke.set(tt,[]).get(tt)).push(Ye)}let ht=new _t,At=new Un,Ut=new O(0,1,0),Nt=new O,Yt=new O,lt=new at;for(let Ye of Ke.values()){let tt=L(),rt=new La(tt,W,Ye.length);Ye.forEach((Je,Mt)=>{let $e=K[Je],yt=K[Je+1],pt=K[Je+2]*(.85+Z()*.35),xt=Math.floor(($e+5e3)/21)%2?1.07:.94,qt=.93+.14*Math.sin($e*.011+1.3)*Math.sin(yt*.013+.4);At.setFromAxisAngle(Ut,Z()*6.283),Nt.set(pt,pt*(.88+Z()*.3),pt),Yt.set($e,-.45+ft($e,yt),k+yt),ht.compose(Yt,At,Nt),rt.setMatrixAt(Mt,ht),lt.copy(j[Math.floor(Z()*j.length)]).multiplyScalar(xt*qt*(.92+Z()*.16)),rt.setColorAt(Mt,lt)}),rt.instanceMatrix.needsUpdate=!0,rt.instanceColor&&(rt.instanceColor.needsUpdate=!0),rt.receiveShadow=!0,rt.castShadow=!1,rt.computeBoundingSphere(),rt.frustumCulled=!0,rt.name="Grass blades";let It=new O;rt.onBeforeRender=(Je,Mt,$e)=>{It.copy(rt.boundingSphere.center).applyMatrix4(rt.matrixWorld);let yt=It.distanceTo($e.getWorldPosition(Yt));tt.setDrawRange(0,6*(yt<600?11:yt>1400?6:Math.round(11-5*(yt-600)/800)))},h.add(rt)}}if(He.ground==="planters"){let b=Wt("pstone",{n:512,seed:103,color:"#8d867a",mid:.6,fine:1,tone:.06,grit:.22,bump:6,slab:[160,64],jw:4},.92),R=Wt("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),L=Fe.mats.leaf2||(Fe.mats.leaf2=new zt({color:3493932,roughness:1,envMapIntensity:rs})),W=["#f4f1ea","#b9a3d6","#e6b8c8"].map(j=>Ks(j,.8));{let j=(pe,Le,Re,Oe,Pe)=>{let Ue=1-Pe;return[Ue*Ue*Ue*pe[0]+3*Ue*Ue*Pe*Le[0]+3*Ue*Pe*Pe*Re[0]+Pe*Pe*Pe*Oe[0],Ue*Ue*Ue*pe[1]+3*Ue*Ue*Pe*Le[1]+3*Ue*Pe*Pe*Re[1]+Pe*Pe*Pe*Oe[1]]},Z=[[[xe/2,0],[xe/2,230],[xe/2+70,330],[xe/2+70,640],1],[[-xe/2,0],[-xe/2,300],[-xe/2-190,400],[-xe/2-190,640],-1]],K=12,ne=1.1,le=Wt("pband",{n:512,seed:113,color:"#56524d",mid:.5,fine:.9,tone:.05,grit:.2,bump:4.5,rows:512,tab:64},.9);for(let[pe,Le,Re,Oe,Pe]of Z){let Me=[],Ke=[],ht=[],At=0,Ut=null;for(let lt=0;lt<=56;lt++){let Ye=lt/56,tt=j(pe,Le,Re,Oe,Ye),rt=j(pe,Le,Re,Oe,Math.min(1,Ye+.004)),It=j(pe,Le,Re,Oe,Math.max(0,Ye-.004)),Je=rt[0]-It[0],Mt=rt[1]-It[1],$e=Math.hypot(Je,Mt)||1;Je/=$e,Mt/=$e;let yt=Pe*Math.abs(Mt),pt=-Pe*Je*Math.sign(Mt||1);Ut&&(At+=Math.hypot(tt[0]-Ut[0],tt[1]-Ut[1])),Ut=tt;let xt=tt[0]-yt*.5,qt=tt[1]-pt*.5,St=tt[0]+yt*K,rn=tt[1]+pt*K;if(Me.push(xt,0,k+qt,xt,ne,k+qt,St,ne,k+rn,St,0,k+rn),Ke.push(At/48,0,At/48,.02,At/48,.27,At/48,.29),lt<56){let an=lt*4;for(let Ie=0;Ie<3;Ie++){let Et=an+Ie,it=an+Ie+1,wt=Et+4,mt=it+4;Pe>0?ht.push(Et,wt,it,it,wt,mt):ht.push(Et,it,wt,it,mt,wt)}}}let Nt=new Bt;Nt.setAttribute("position",new ut(Me,3)),Nt.setAttribute("uv",new ut(Ke,2)),Nt.setIndex(ht),Nt.computeVertexNormals();let Yt=new We(Nt,le);Yt.castShadow=Yt.receiveShadow=!0,Yt.name="Drive border",h.add(Yt)}}for(let j of[-1,1])for(let Z=0;Z<2;Z++){let pe=j*(xe/2+17+13+Z*14),Le=k+46+Z*110;ue(34,18,84,pe,18/2,Le,b,"Planter","z"),ue(26,1,76,pe,18+.2,Le,R,"Planter soil","z");let Re=ei(j*7+Z*13+40),Oe=[[],[],[],[]];for(let Pe=0;Pe<3;Pe++){let Ue=8+Re()*4,Me=new Xs(Ue,2);Me.scale(1,.8,1),Me.translate(pe+(Re()-.5)*8,18+Ue*.6,Le-84/2+16+Pe*26),Oe[0].push(Me)}for(let Pe=0;Pe<46;Pe++){let Ue=new Xs(1.1+Re()*.9,0);Ue.translate(pe+(Re()-.5)*24,18+1.6+Re()*2.2,Le+(Re()-.5)*74),Oe[1+Pe%3].push(Ue)}Oe.forEach((Pe,Ue)=>{if(!Pe.length)return;let Me=new We(Or(Pe.map(Ke=>Ke.toNonIndexed()),!1),Ue?W[Ue-1]:L);Me.castShadow=Me.receiveShadow=!0,Me.name=Ue?"Flowers":"Shrubs",h.add(Me)})}}let Xt=Wt("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),cn=Fe.mats.leaf||(Fe.mats.leaf=(()=>{let b=uc("leaf",256,{seed:64,color:"#2f4426",mid:.6,fine:1.8,tone:.3,grit:.9,bump:10});return b.map.repeat.set(3,3),b.normalMap.repeat.set(3,3),new zt({map:b.map,normalMap:b.normalMap,roughness:1,envMapIntensity:rs})})());for(let b of[-1,1]){ue(34,1.2,250,b*(_/2+19),.2,k-125,Xt,"Bed","z");let R=ei(b>0?5:9);for(let L=0;L<4;L++){let W=13+R()*5,j=new Xs(W,3),Z=j.attributes.position;for(let ne=0;ne<Z.count;ne++){let le=Z.getX(ne),pe=Z.getY(ne),Le=Z.getZ(ne),Re=1+.07*Math.sin(le*.9+L)*Math.cos(Le*1.1)+.05*Math.sin(pe*1.7);Z.setXYZ(ne,le*Re,pe*Re*.85,Le*Re)}j.computeVertexNormals();let K=new We(j,cn);K.position.set(b*(_/2+19+(R()-.5)*6),W*.72,k-22-L*58-R()*10),K.castShadow=K.receiveShadow=!0,K.name="Boxwood",h.add(K)}}let Tt=b=>{let R="rw:"+b;return Fe.mats[R]||(Fe.mats[R]=new vi({color:Gn(b)}))},hn=Fe.mats.epoxy||(Fe.mats.epoxy=(()=>{let R=document.createElement("canvas");R.width=R.height=512;let L=R.getContext("2d"),W=ei(4411);L.fillStyle="#c8ad82",L.fillRect(0,0,512,512);let j=["#efe2c6","#b89868","#a08256","#7c6344","#e2d0aa","#9c8f7a","#5f5040"];for(let K=0;K<5200;K++){let ne=W()*512,le=W()*512,pe=1.2+W()*3.6,Le=1+W()*2.6;L.save(),L.translate(ne,le),L.rotate(W()*6.283),L.globalAlpha=.55+W()*.45,L.fillStyle=j[Math.floor(W()*j.length)],L.fillRect(-pe/2,-Le/2,pe,Le),L.restore(),(ne<4||le<4||ne>508||le>508)&&(L.save(),L.translate(ne+(ne<4?512:ne>508?-512:0),le+(le<4?512:le>508?-512:0)),L.fillStyle=j[K%j.length],L.fillRect(-pe/2,-Le/2,pe,Le),L.restore())}let Z=new Di(R);return Z.wrapS=Z.wrapT=An,Z.colorSpace=Lt,Z.anisotropy=8,new Ui({map:Z,roughness:.34,metalness:0,clearcoat:.5,clearcoatRoughness:.18,envMapIntensity:.22})})()),un=new Hn,Oi=(b,R)=>{let L="room:"+b+R;return Fe.mats[L]||(Fe.mats[L]=new zt({color:Gn(b),roughness:.95,metalness:0,envMapIntensity:.25,emissive:Gn(b),emissiveIntensity:R}))},as=He.garage==="light",Fi=as?Oi("#f1eee8",.22):Oi("#e6dfd0",0),er=as?Oi("#e6e3dc",.18):Oi("#d9d2c3",0),Cn=260,Bi=new We(new Jn(_,Cn).rotateX(-Math.PI/2),hn);Bi.geometry.attributes.uv.array.forEach((b,R,L)=>{L[R]=b*(R%2?Cn/40:_/40)}),Bi.position.set(0,-.01,k-U-Cn/2+6),Bi.receiveShadow=!0,un.add(Bi);let os=new We(new Jn(_,T),Fi);os.position.set(0,T/2,k-U-Cn+6),os.receiveShadow=!0,un.add(os);let tr=new We(new Jn(_,Cn).rotateX(Math.PI/2),er);er.shadowSide=bn,tr.castShadow=!0,tr.position.set(0,C+14,k-U-Cn/2+6),un.add(tr);for(let b of[-1,1]){let R=new We(new Jn(Cn,T).rotateY(-b*Math.PI/2),Fi);R.position.set(b*(_/2-U-.4),T/2,k-U-Cn/2+6),R.receiveShadow=!0,un.add(R)}let Hr=new qs(as?16775924:16774114,as?2300:2400,420,1.7);Hr.position.set(0,C-6,k-U-110),un.add(Hr),h.add(un),G.scene.add(h);let ls=Math.max(_,p)*.9+140;G.sun.position.set(-u*.62-40,p*2.5+40,u*.5+70),G.sun.target.position.set(0,p*.4,0);let I=G.sun.shadow.camera;I.left=-ls,I.right=ls,I.top=ls,I.bottom=-ls,I.near=10,I.far=2400,I.updateProjectionMatrix();let J=d.L.n+":"+_+":"+p;return J!==G.key&&(G.key=J,G.fit=Math.max((_-2*A)/(2*Math.tan(15*Math.PI/180)*Math.max(.6,G.cam.aspect)),p/(2*Math.tan(15*Math.PI/180)))*1.32,vc()),G.ctl.minDistance=G.fit*.25,G.ctl.maxDistance=G.fit*2.2,d.L.man||(G.m=0),xo(),ti(),G.ready=!0,vn}function xo(){if(!G.L)return;let i=new _t,e=(t,n,s,r)=>{let a=(t.e3?z_(t,G.f):Bu(t,G.f,r)).poses;n.forEach((o,l)=>{let c=a[l];c&&(i.set(c.X[0],0,c.Z[0],c.C[0],0,1,0,0,c.X[1],0,c.Z[1],c.C[1],0,0,0,1),o.matrix.copy(i),o.matrixWorldNeedsUpdate=!0)}),(s||[]).forEach(o=>{let l=a[o.i];l&&(o.m.position.x=l.X[0]*o.lx+l.Z[0]*o.lz+l.C[0],o.m.position.z=l.X[1]*o.lx+l.Z[1]*o.lz+l.C[1])})};e(G.L,G.leaves,G.fixA,G.m),G.B&&e(G.B.L,G.B.lvs,G.B.fix,0)}function q_(i){return G.f=Math.max(0,Math.min(1,+i||0)),xo(),ti(),vn}function Z_(i){return G.m=Math.max(0,Math.min(1,+i||0)),xo(),ti(),vn}function vc(){if(!G.r)return;let i=24*Math.PI/180,e=1.5*Math.PI/180,t=G.fit*1.22;G.ctl.target.set(0,G.H*.6,0),G.cam.position.set(Math.sin(i)*Math.cos(e)*t,G.H*.6+Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t),G.ctl.update(),ti()}function j_(i){if(!G.r)return vn;let e=(i==="in"?156:22)*Math.PI/180,t=6*Math.PI/180,n=i==="in"?Math.min(G.fit,190):G.fit;return G.cam.position.set(Math.sin(e)*Math.cos(t)*n,G.H*.47+Math.sin(t)*n,Math.cos(e)*Math.cos(t)*n),G.ctl.update(),ti(),vn}function J_(i,e,t){let n=G.f,s=performance.now();return e=e||2600,G.anim=()=>{let r=Math.min(1,(performance.now()-s)/e),a=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;G.f=n+(i-n)*a,xo(),G.dirty=!0,t&&t(G.f),r>=1&&(G.anim=null)},ti(),vn}function $_(){return G.r?(Gu(),G.r.domElement.toDataURL("image/jpeg",.92)):null}var vn={v:Fu,setting:Hu,mount:X_,show:xc,fold:q_,man:Z_,look:j_,reset:vc,animate:J_,shot:$_,dispose:Wu,stop(){G.anim=null},get ready(){return G.ready},get folded(){return G.f},get hasMan(){return!!(G.L&&G.L.man)},_E:G,_pose:Bu},iv=vn;Dt.TR3D=vn;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
