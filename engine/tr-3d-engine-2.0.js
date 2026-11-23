(()=>{var us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,Ic=1,td=2;var lu=1,ic=2,Ei=3,Vi=0,An=1,Tn=2;var dn=0,Fs=1,Sa=2,Lc=3,Dc=4,sc=5,jn=100,nd=101,id=102,Uc=103,Nc=104,Qs=200,sd=201,rd=202,ad=203,dl=204,fl=205,io=206,od=207,so=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,pd=0,md=1,gd=2,Ea=3,_d=4,xd=5,vd=6,yd=7,cu=0,Md=1,bd=2,Hi=0,rc=1,ac=2,oc=3,Ur=4,Sd=5,lc=6;var hu=300,Hs=301,ks=302,rs=303,pl=304,ro=306,Fn=1e3,Gn=1001,ml=1002,ln=1003,Oc=1004;var Lo=1005;var cn=1006,Ed=1007;var Vs=1008;var mi=1009,wd=1010,Td=1011,cc=1012,uu=1013,zi=1014,On=1015,Mn=1016,du=1017,fu=1018,Ai=1020,Ad=1021,Ln=1023,Rd=1024,Cd=1025,is=1026,Gi=1027,Pd=1028,pu=1029,Id=1030,mu=1031,gu=1033,Do=33776,Uo=33777,No=33778,Oo=33779,Fc=35840,Bc=35841,zc=35842,Hc=35843,_u=36196,kc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,Yc=37811,qc=37812,Zc=37813,jc=37814,Jc=37815,$c=37816,Kc=37817,Qc=37818,eh=37819,th=37820,nh=37821,Fo=36492,ih=36494,sh=36495,Ld=36283,rh=36284,ah=36285,oh=36286;var wa=2300,Ta=2301,Bo=2302,lh=2400,ch=2401,hh=2402;var xu=3e3,ss=3001,Dd=3200,Ud=3201,hc=0,Nd=1,Nn="",Jt="srgb",Wn="srgb-linear",uc="display-p3",ao="display-p3-linear",Aa="linear",Yt="srgb",Ra="rec709",Ca="p3";var ms=7680;var uh=519,Od=512,Fd=513,Bd=514,vu=515,zd=516,Hd=517,kd=518,Vd=519,dh=35044;var fh="300 es",gl=1035,Ti=2e3,Pa=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,mr=Math.PI/180,Mr=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function dc(i,e){return(i%e+e)%e}function Gd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wd(i,e,t){return i!==e?(t-i)/(e-i):0}function gr(i,e,t){return(1-t)*i+t*e}function Xd(i,e,t,n){return gr(i,e,1-Math.exp(-t*n))}function Yd(i,e=1){return e-Math.abs(dc(i,e*2)-e)}function qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jd(i,e){return i+Math.random()*(e-i)}function $d(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(i){return i*mr}function ef(i){return i*Mr}function _l(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yu={DEG2RAD:mr,RAD2DEG:Mr,generateUUID:fs,clamp:hn,euclideanModulo:dc,mapLinear:Gd,inverseLerp:Wd,lerp:gr,damp:Xd,pingpong:Yd,smoothstep:qd,smootherstep:Zd,randInt:jd,randFloat:Jd,randFloatSpread:$d,seededRandom:Kd,degToRad:Qd,radToDeg:ef,isPowerOfTwo:_l,ceilPowerOfTwo:tf,floorPowerOfTwo:Ia,setQuaternionFromProperEuler:nf,normalize:Pn,denormalize:Ls},ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],v=s[4],b=s[7],R=s[2],w=s[5],E=s[8];return r[0]=a*x+o*M+l*R,r[3]=a*m+o*v+l*w,r[6]=a*p+o*b+l*E,r[1]=c*x+h*M+d*R,r[4]=c*m+h*v+d*w,r[7]=c*p+h*b+d*E,r[2]=u*x+f*M+g*R,r[5]=u*m+f*v+g*w,r[8]=u*p+f*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zo=new Lt;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=br("canvas");return i.style.display="block",i}var mh={};function _r(i){i in mh||(mh[i]=!0,console.warn(i))}var gh=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_h=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[Wn]:{transfer:Aa,primaries:Ra,toReference:i=>i,fromReference:i=>i},[Jt]:{transfer:Yt,primaries:Ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:Aa,primaries:Ca,toReference:i=>i.applyMatrix3(_h),fromReference:i=>i.applyMatrix3(gh)},[uc]:{transfer:Yt,primaries:Ca,toReference:i=>i.convertSRGBToLinear().applyMatrix3(_h),fromReference:i=>i.applyMatrix3(gh).convertLinearToSRGB()}},rf=new Set([Wn,ao]),kt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!rf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Jr[e].toReference,s=Jr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Jr[i].primaries},getTransfer:function(i){return i===Nn?Aa:Jr[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,La=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=br("canvas")),gs.width=e.width,gs.height=e.height;let n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},af=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var of=0,Bn=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=cn,a=Vs,o=Ln,l=mi,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=fs(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?Jt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?ss:xu}set encoding(e){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?Jt:Nn}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=hu;Bn.DEFAULT_ANISOTROPY=1;var en=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(f+1)/2,R=(p+1)/2,w=(h+u)/4,E=(d+x)/4,D=(g+m)/4;return v>b&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=E/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?Jt:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ua=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vl=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),w=Math.atan2(R,p*M);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let b=o*M;if(l=l*m+u*b,c=c*m+f*b,h=h*m+g*b,d=d*m+x*b,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new F,xh=new Xn,Ri=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Kr.subVectors(this.max,lr),_s.subVectors(e.a,lr),xs.subVectors(e.b,lr),vs.subVectors(e.c,lr),Ui.subVectors(xs,_s),Ni.subVectors(vs,xs),$i.subVectors(_s,vs);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-$i.z,$i.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,$i.z,0,-$i.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-$i.y,$i.x,0];return!Go(t,_s,xs,vs,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,_s,xs,vs,Kr))?!1:(Qr.crossVectors(Ui,Ni),t=[Qr.x,Qr.y,Qr.z],Go(t,_s,xs,vs,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new F,new F,new F,new F,new F,new F,new F,new F],ni=new F,$r=new Ri,_s=new F,xs=new F,vs=new F,Ui=new F,Ni=new F,$i=new F,lr=new F,Kr=new F,Qr=new F,Ki=new F;function Go(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var lf=new Ri,cr=new F,Wo=new F,as=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Wo)),this.expandByPoint(cr.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new F,Xo=new F,ea=new F,Oi=new F,Yo=new F,ta=new F,qo=new F,Sr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xo.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=Oi.dot(this.direction),l=-Oi.dot(ea),c=Oi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xo).addScaledVector(ea,u),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){Yo.subVectors(t,e),ta.subVectors(n,e),qo.crossVectors(Yo,ta);let a=this.direction.dot(qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);let l=o*this.direction.dot(ta.crossVectors(Oi,ta));if(l<0)return null;let c=o*this.direction.dot(Yo.cross(Oi));if(c<0||l+c>a)return null;let h=-o*Oi.dot(qo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,hf)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Fi.crossVectors(n,kn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Fi.crossVectors(n,kn)),Fi.normalize(),na.crossVectors(kn,Fi),s[0]=Fi.x,s[4]=na.x,s[8]=kn.x,s[1]=Fi.y,s[5]=na.y,s[9]=kn.y,s[2]=Fi.z,s[6]=na.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],v=n[7],b=n[11],R=n[15],w=s[0],E=s[4],D=s[8],y=s[12],_=s[1],U=s[5],z=s[9],X=s[13],P=s[2],L=s[6],O=s[10],J=s[14],H=s[3],q=s[7],ie=s[11],re=s[15];return r[0]=a*w+o*_+l*P+c*H,r[4]=a*E+o*U+l*L+c*q,r[8]=a*D+o*z+l*O+c*ie,r[12]=a*y+o*X+l*J+c*re,r[1]=h*w+d*_+u*P+f*H,r[5]=h*E+d*U+u*L+f*q,r[9]=h*D+d*z+u*O+f*ie,r[13]=h*y+d*X+u*J+f*re,r[2]=g*w+x*_+m*P+p*H,r[6]=g*E+x*U+m*L+p*q,r[10]=g*D+x*z+m*O+p*ie,r[14]=g*y+x*X+m*J+p*re,r[3]=M*w+v*_+b*P+R*H,r[7]=M*E+v*U+b*L+R*q,r[11]=M*D+v*z+b*O+R*ie,r[15]=M*y+v*X+b*J+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+x*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=d*m*c-x*u*c+x*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,b=h*x*c-g*d*c+g*o*f-a*x*f-h*o*p+a*d*p,R=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,w=t*M+n*v+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=M*E,e[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*p-n*u*p)*E,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*E,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*E,e[4]=v*E,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*E,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*E,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*E,e[8]=b*E,e[9]=(g*d*r-h*x*r-g*n*f+t*x*f+h*n*p-t*d*p)*E,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*E,e[12]=R*E,e[13]=(h*x*s-g*d*s+g*n*u-t*x*u-h*n*m+t*d*m)*E,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*E,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,M=l*c,v=l*h,b=l*d,R=n.x,w=n.y,E=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+b)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(u+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+v)*E,s[9]=(m-M)*E,s[10]=(1-(u+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,h=1/a,d=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ti){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,g;if(o===Ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ti){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,f=(n+s)*h,g,x;if(o===Ti)g=(a+r)*d,x=-2*d;else if(o===Pa)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ys=new F,ii=new Ft,cf=new F(0,0,0),hf=new F(1,1,1),Fi=new F,na=new F,kn=new F,vh=new Ft,yh=new Xn,Na=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Na.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uf=0,Mh=new F,Ms=new Xn,yi=new Ft,ia=new F,hr=new F,df=new F,ff=new Xn,bh=new F(1,0,0),Sh=new F(0,1,0),Eh=new F(0,0,1),pf={type:"added"},mf={type:"removed"},Dn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Na,n=new Xn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Lt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(hr,ia,this.up):yi.lookAt(ia,hr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(yi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dn.DEFAULT_UP=new F(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new F,Mi=new F,Zo=new F,bi=new F,bs=new F,Ss=new F,wh=new F,jo=new F,Jo=new F,$o=new F,sa=!1,Ds=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Mi.subVectors(n,t),Zo.subVectors(e,t);let a=si.dot(si),o=si.dot(Mi),l=si.dot(Zo),c=Mi.dot(Mi),h=Mi.dot(Zo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,n,s,r,a,o,l){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Mi.subVectors(e,t),si.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),si.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Ss.subVectors(r,n),jo.subVectors(e,n);let l=bs.dot(jo),c=Ss.dot(jo);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,s);let h=bs.dot(Jo),d=Ss.dot(Jo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bs,a);$o.subVectors(e,r);let f=bs.dot($o),g=Ss.dot($o);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(wh,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _t=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=kt.workingColorSpace){if(e=dc(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ko(a,r,e+1/3),this.g=Ko(a,r,e),this.b=Ko(a,r,e-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return kt.fromWorkingColorSpace(En.copy(this),e),Math.round(hn(En.r*255,0,255))*65536+Math.round(hn(En.g*255,0,255))*256+Math.round(hn(En.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(En.copy(this),t);let n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Jt){kt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,n=En.g,s=En.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(ra);let n=gr(Bi.h,ra.h,t),s=gr(Bi.s,ra.s,t),r=gr(Bi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new _t;_t.NAMES=bu;var gf=0,Wi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Fs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ci=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wi=_f();function _f(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function xf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=hn(i,-65504,65504),wi.floatView[0]=i;let e=wi.uint32View[0],t=e>>23&511;return wi.baseTable[t]+((e&8388607)>>wi.shiftTable[t])}function vf(i){let e=i>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[e]+(i&1023)]+wi.exponentTable[e],wi.floatView[0]}var Nr={toHalfFloat:xf,fromHalfFloat:vf},on=new F,aa=new ue,qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}};var Gs=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fa=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var yf=0,Zn=new Ft,Qo=new Dn,Es=new F,Vn=new Ri,ur=new Ri,vn=new F,$t=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Fa:Gs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(Vn.min,ur.min),Vn.expandByPoint(vn),vn.addVectors(Vn.max,ur.max),Vn.expandByPoint(vn)):(Vn.expandByPoint(ur.min),Vn.expandByPoint(ur.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vn.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),vn.add(Es)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let _=0;_<o;_++)c[_]=new F,h[_]=new F;let d=new F,u=new F,f=new F,g=new ue,x=new ue,m=new ue,p=new F,M=new F;function v(_,U,z){d.fromArray(s,_*3),u.fromArray(s,U*3),f.fromArray(s,z*3),g.fromArray(a,_*2),x.fromArray(a,U*2),m.fromArray(a,z*2),u.sub(d),f.sub(d),x.sub(g),m.sub(g);let X=1/(x.x*m.y-m.x*x.y);isFinite(X)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(X),M.copy(f).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar(X),c[_].add(p),c[U].add(p),c[z].add(p),h[_].add(M),h[U].add(M),h[z].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let _=0,U=b.length;_<U;++_){let z=b[_],X=z.start,P=z.count;for(let L=X,O=X+P;L<O;L+=3)v(n[L+0],n[L+1],n[L+2])}let R=new F,w=new F,E=new F,D=new F;function y(_){E.fromArray(r,_*3),D.copy(E);let U=c[_];R.copy(U),R.sub(E.multiplyScalar(E.dot(U))).normalize(),w.crossVectors(D,U);let X=w.dot(h[_])<0?-1:1;l[_*4]=R.x,l[_*4+1]=R.y,l[_*4+2]=R.z,l[_*4+3]=X}for(let _=0,U=b.length;_<U;++_){let z=b[_],X=z.start,P=z.count;for(let L=X,O=X+P;L<O;L+=3)y(n[L+0]),y(n[L+1]),y(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new Ft,Qi=new Sr,oa=new as,Ah=new F,ws=new F,Ts=new F,As=new F,el=new F,la=new F,ca=new ue,ha=new ue,ua=new ue,Rh=new F,Ch=new F,Ph=new F,da=new F,fa=new F,Ze=class extends Dn{constructor(e=new $t,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(el.fromBufferAttribute(d,e),a?la.addScaledVector(el,h):la.addScaledVector(el.sub(t),h))}t.add(la)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(oa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(oa,Ah)===null||Qi.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,R=v;b<R;b+=3){let w=o.getX(b),E=o.getX(b+1),D=o.getX(b+2);s=pa(this,p,e,n,c,h,d,w,E,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);s=pa(this,a,e,n,c,h,d,M,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,R=v;b<R;b+=3){let w=b,E=b+1,D=b+2;s=pa(this,p,e,n,c,h,d,w,E,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,v=m+1,b=m+2;s=pa(this,a,e,n,c,h,d,M,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mf(i,e,t,n,s,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:i}}function pa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ws),i.getVertexPosition(l,Ts),i.getVertexPosition(c,As);let h=Mf(i,e,t,n,ws,Ts,As,da);if(h){s&&(ca.fromBufferAttribute(s,o),ha.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),h.uv=Ds.getInterpolation(da,ws,Ts,As,ca,ha,ua,new ue)),r&&(ca.fromBufferAttribute(r,o),ha.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),h.uv1=Ds.getInterpolation(da,ws,Ts,As,ca,ha,ua,new ue),h.uv2=h.uv1),a&&(Rh.fromBufferAttribute(a,o),Ch.fromBufferAttribute(a,l),Ph.fromBufferAttribute(a,c),h.normal=Ds.getInterpolation(da,ws,Ts,As,Rh,Ch,Ph,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Ds.getNormal(ws,Ts,As,d.normal),h.face=d}return h}var fn=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function g(x,m,p,M,v,b,R,w,E,D,y){let _=b/E,U=R/D,z=b/2,X=R/2,P=w/2,L=E+1,O=D+1,J=0,H=0,q=new F;for(let ie=0;ie<O;ie++){let re=ie*U-X;for(let pe=0;pe<L;pe++){let K=pe*_-z;q[x]=K*M,q[m]=re*v,q[p]=P,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(pe/E),d.push(1-ie/D),J+=1}}for(let ie=0;ie<D;ie++)for(let re=0;re<E;re++){let pe=u+re+L*ie,K=u+re+L*(ie+1),le=u+(re+1)+L*(ie+1),Pe=u+(re+1)+L*ie;l.push(pe,K,Pe),l.push(K,le,Pe),H+=6}o.addGroup(f,H,y),f+=H,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function bf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Su(i){return i.getRenderTarget()===null?i.outputColorSpace:kt.workingColorSpace}var li={clone:Ws,merge:In},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ba=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=class extends Ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,yl=class extends Dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new wn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new wn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new wn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new wn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new wn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},za=class extends Bn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?Jt:Nn),this.texture=new za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:dn});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Vs&&(t.minFilter=cn),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},tl=new F,wf=new F,Tf=new Lt,ri=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tf.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new as,ma=new F,Er=class{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-f,b-p).normalize(),n[1].setComponents(l+r,u+c,m+f,b+p).normalize(),n[2].setComponents(l+a,u+h,m+g,b+M).normalize(),n[3].setComponents(l-a,u-h,m-g,b-M).normalize(),n[4].setComponents(l-o,u-d,m-x,b-v).normalize(),t===Ti)n[5].setComponents(l+o,u+d,m+x,b+v).normalize();else if(t===Pa)n[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Af(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,f=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var ai=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let v=0;v<c;v++){let b=v*d-r;g.push(b,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let v=M+c*p,b=M+c*(p+1),R=M+1+c*(p+1),w=M+1+c*p;f.push(v,b,w),f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
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
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Om=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:Rf,alphahash_pars_fragment:Cf,alphamap_fragment:Pf,alphamap_pars_fragment:If,alphatest_fragment:Lf,alphatest_pars_fragment:Df,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Of,batching_vertex:Ff,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:Yf,color_fragment:qf,color_pars_fragment:Zf,color_pars_vertex:jf,color_vertex:Jf,common:$f,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:ap,envmap_common_pars_fragment:op,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:Mp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:dp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:xp,lights_lambert_pars_fragment:vp,lights_pars_begin:yp,lights_toon_fragment:bp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:wp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Op,map_particle_fragment:Fp,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Hp,morphcolor_vertex:kp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:Yp,normal_pars_fragment:qp,normal_pars_vertex:Zp,normal_vertex:jp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:xm,tonemapping_fragment:vm,tonemapping_pars_fragment:ym,transmission_fragment:Mm,transmission_pars_fragment:bm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Am,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Lm,depth_vert:Dm,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Om,equirect_vert:Fm,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:Hm,meshbasic_vert:km,meshbasic_frag:Vm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:Ym,meshnormal_vert:qm,meshnormal_frag:Zm,meshphong_vert:jm,meshphong_frag:Jm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:ag},ze={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},pi={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new _t(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new _t(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};pi.physical={uniforms:In([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var ga={r:0,b:0,g:0};function og(i,e,t,n,s,r,a){let o=new _t(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ro)?(h===void 0&&(h=new Ze(new fn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ws(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=kt.getTransfer(v.colorSpace)!==Yt,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new ai(2,2),new pn({name:"BackgroundMaterial",uniforms:Ws(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=kt.getTransfer(v.colorSpace)!==Yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ga,Su(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function lg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(P,L,O,J,H){let q=!1;if(a){let ie=x(J,O,L);c!==ie&&(c=ie,f(c.object)),q=p(P,J,O,H),q&&M(P,J,O,H)}else{let ie=L.wireframe===!0;(c.geometry!==J.id||c.program!==O.id||c.wireframe!==ie)&&(c.geometry=J.id,c.program=O.id,c.wireframe=ie,q=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(P,L,O,J),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,L,O){let J=O.wireframe===!0,H=o[P.id];H===void 0&&(H={},o[P.id]=H);let q=H[L.id];q===void 0&&(q={},H[L.id]=q);let ie=q[J];return ie===void 0&&(ie=m(u()),q[J]=ie),ie}function m(P){let L=[],O=[],J=[];for(let H=0;H<s;H++)L[H]=0,O[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,L,O,J){let H=c.attributes,q=L.attributes,ie=0,re=O.getAttributes();for(let pe in re)if(re[pe].location>=0){let le=H[pe],Pe=q[pe];if(Pe===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(Pe=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(Pe=P.instanceColor)),le===void 0||le.attribute!==Pe||Pe&&le.data!==Pe.data)return!0;ie++}return c.attributesNum!==ie||c.index!==J}function M(P,L,O,J){let H={},q=L.attributes,ie=0,re=O.getAttributes();for(let pe in re)if(re[pe].location>=0){let le=q[pe];le===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));let Pe={};Pe.attribute=le,le&&le.data&&(Pe.data=le.data),H[pe]=Pe,ie++}c.attributes=H,c.attributesNum=ie,c.index=J}function v(){let P=c.newAttributes;for(let L=0,O=P.length;L<O;L++)P[L]=0}function b(P){R(P,0)}function R(P,L){let O=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;O[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),H[P]!==L&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),H[P]=L)}function w(){let P=c.newAttributes,L=c.enabledAttributes;for(let O=0,J=L.length;O<J;O++)L[O]!==P[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function E(P,L,O,J,H,q,ie){ie===!0?i.vertexAttribIPointer(P,L,O,H,q):i.vertexAttribPointer(P,L,O,J,H,q)}function D(P,L,O,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let H=J.attributes,q=O.getAttributes(),ie=L.defaultAttributeValues;for(let re in q){let pe=q[re];if(pe.location>=0){let K=H[re];if(K===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let le=K.normalized,Pe=K.itemSize,Xe=t.get(K);if(Xe===void 0)continue;let He=Xe.buffer,Je=Xe.type,st=Xe.bytesPerElement,We=n.isWebGL2===!0&&(Je===i.INT||Je===i.UNSIGNED_INT||K.gpuType===uu);if(K.isInterleavedBufferAttribute){let De=K.data,B=De.stride,ve=K.offset;if(De.isInstancedInterleavedBuffer){for(let oe=0;oe<pe.locationSize;oe++)R(pe.location+oe,De.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let oe=0;oe<pe.locationSize;oe++)b(pe.location+oe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let oe=0;oe<pe.locationSize;oe++)E(pe.location+oe,Pe/pe.locationSize,Je,le,B*st,(ve+Pe/pe.locationSize*oe)*st,We)}else{if(K.isInstancedBufferAttribute){for(let De=0;De<pe.locationSize;De++)R(pe.location+De,K.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let De=0;De<pe.locationSize;De++)b(pe.location+De);i.bindBuffer(i.ARRAY_BUFFER,He);for(let De=0;De<pe.locationSize;De++)E(pe.location+De,Pe/pe.locationSize,Je,le,Pe*st,Pe/pe.locationSize*De*st,We)}}else if(ie!==void 0){let le=ie[re];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(pe.location,le);break;case 3:i.vertexAttrib3fv(pe.location,le);break;case 4:i.vertexAttrib4fv(pe.location,le);break;default:i.vertexAttrib1fv(pe.location,le)}}}}w()}function y(){z();for(let P in o){let L=o[P];for(let O in L){let J=L[O];for(let H in J)g(J[H].object),delete J[H];delete L[O]}delete o[P]}}function _(P){if(o[P.id]===void 0)return;let L=o[P.id];for(let O in L){let J=L[O];for(let H in J)g(J[H].object),delete J[H];delete L[O]}delete o[P.id]}function U(P){for(let L in o){let O=o[L];if(O[P.id]===void 0)continue;let J=O[P.id];for(let H in J)g(J[H].object),delete J[H];delete O[P.id]}}function z(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:X,dispose:y,releaseStatesOfGeometry:_,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function cg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function hg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,b=a||e.has("OES_texture_float"),R=v&&b,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:w}}function ug(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ri,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,v=M*4,b=p.clippingState||null;l.value=b,b=h(g,u,v,f);for(let R=0;R!==v;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==x;++v,b+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dg(i){let e=new WeakMap;function t(a,o){return o===rs?a.mapping=Hs:o===pl&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===rs||o===pl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ml(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xs=class extends Ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,Ih=[.125,.215,.35,.446,.526,.582],ns=20,nl=new Xs,Lh=new _t,il=null,sl=0,rl=0,ts=(1+Math.sqrt(5))/2,Ps=1/ts,Dh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ts,Ps),new F(0,ts,-Ps),new F(Ps,0,ts),new F(-Ps,0,ts),new F(ts,Ps,0),new F(-ts,Ps,0)],Ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Mn,format:Ln,colorSpace:Wn,depthBuffer:!1},s=Uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,s){let o=new wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Lh),h.toneMapping=Hi,h.autoClear=!1;let f=new Ci({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Ze(new fn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Lh),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;_a(s,M*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;_a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dh[(s-1)%Dh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ze(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let p=[],M=0;for(let E=0;E<ns;++E){let D=E/x,y=Math.exp(-D*D/2);p.push(y),E===0?M+=y:E<m&&(M+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let b=this._sizeLods[s],R=3*b*(s>v-Us?s-v+Us:0),w=4*(this._cubeSize-b);_a(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(d,nl)}};function fg(i){let e=[],t=[],n=[],s=i,r=i-Us+1+Ih.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Us?l=Ih[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),v=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,D=w>2?0:-1,y=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];M.set(y,x*g*w),v.set(u,m*g*w);let _=[w,w,w,w,w,w];b.set(_,p*g*w)}let R=new $t;R.setAttribute("position",new qt(M,x)),R.setAttribute("uv",new qt(v,m)),R.setAttribute("faceIndex",new qt(b,p)),e.push(R),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uh(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pg(i,e,t){let n=new Float32Array(ns),s=new F(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Nh(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Oh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function mg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===rs||l===pl,h=l===Hs||l===ks;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ys(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Ys(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let v=0,b=M.length;v<b;v+=3){let R=M[v+0],w=M[v+1],E=M[v+2];u.push(R,w,w,E,E,R)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,b=M.length/3-1;v<b;v+=3){let R=v+0,w=v+1,E=v+2;u.push(R,w,w,E,E,R)}}else return;let m=new(Mu(u)?Fa:Gs)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xg(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),t.update(g,r,x)}function u(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let M=0;M<x;M++)p+=g[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yg(i,e){return i[0]-e[0]}function Mg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function bg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new en,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],D=0;M===!0&&(D=1),v===!0&&(D=2),b===!0&&(D=3);let y=h.attributes.position.count*D,_=1;y>e.maxTextureSize&&(_=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let U=new Float32Array(y*_*4*g),z=new Ua(U,y,_,g);z.type=On,z.needsUpdate=!0;let X=D*4;for(let L=0;L<g;L++){let O=R[L],J=w[L],H=E[L],q=y*_*4*L;for(let ie=0;ie<O.count;ie++){let re=ie*X;M===!0&&(a.fromBufferAttribute(O,ie),U[q+re+0]=a.x,U[q+re+1]=a.y,U[q+re+2]=a.z,U[q+re+3]=0),v===!0&&(a.fromBufferAttribute(J,ie),U[q+re+4]=a.x,U[q+re+5]=a.y,U[q+re+6]=a.z,U[q+re+7]=0),b===!0&&(a.fromBufferAttribute(H,ie),U[q+re+8]=a.x,U[q+re+9]=a.y,U[q+re+10]=a.z,U[q+re+11]=H.itemSize===4?a.w:1)}}x={count:g,texture:z,size:new ue(y,_)},r.set(h,x),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){let b=g[v];b[0]=v,b[1]=u[v]}g.sort(Mg);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(yg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let b=o[v],R=b[0],w=b[1];R!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+v)!==x[R]&&h.setAttribute("morphTarget"+v,x[R]),m&&h.getAttribute("morphNormal"+v)!==m[R]&&h.setAttribute("morphNormal"+v,m[R]),s[v]=w,p+=w):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Sg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var qs=class extends Bn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:is,h!==is&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=zi),n===void 0&&h===Gi&&(n=Ai),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wu=new Bn,Tu=new qs(1,1);Tu.compareFunction=vu;var Au=new Ua,Ru=new vl,Cu=new za,Fh=[],Bh=[],zh=new Float32Array(16),Hh=new Float32Array(9),kh=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),gn(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),gn(t,n)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),gn(t,n)}}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Tu:wu;t.setTexture2D(e||r,s)}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ru,s)}function kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cu,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Au,s)}function Gg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(i,e){i.uniform1fv(this.addr,e)}function Xg(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Yg(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function qg(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function Zg(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jg(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jg(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $g(i,e){i.uniform1iv(this.addr,e)}function Kg(i,e){i.uniform2iv(this.addr,e)}function Qg(i,e){i.uniform3iv(this.addr,e)}function e0(i,e){i.uniform4iv(this.addr,e)}function t0(i,e){i.uniform1uiv(this.addr,e)}function n0(i,e){i.uniform2uiv(this.addr,e)}function i0(i,e){i.uniform3uiv(this.addr,e)}function s0(i,e){i.uniform4uiv(this.addr,e)}function r0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||wu,r[a])}function a0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ru,r[a])}function o0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cu,r[a])}function l0(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Au,r[a])}function c0(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return Yg;case 35666:return qg;case 35674:return Zg;case 35675:return jg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Qg;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}var bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}},El=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function h0(i,e,t){let n=i.name,s=n.length;for(al.lastIndex=0;;){let r=al.exec(n),a=al.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vh(t,c===void 0?new bl(o,i,e):new Sl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new El(o),Vh(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);h0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Gh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u0=37297,d0=0;function f0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function p0(i){let e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(i),n;switch(e===t?n="":e===Ca&&t===Ra?n="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case ao:return[n,"LinearTransferOETF"];case Jt:case uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+f0(i.getShaderSource(e),a)}else return s}function m0(i,e){let t=p0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g0(i,e){let t;switch(e){case rc:t="Linear";break;case ac:t="Reinhard";break;case oc:t="OptimizedCineon";break;case Ur:t="ACESFilmic";break;case lc:t="AgX";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function v0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ns(i){return i!==""}function Xh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(M0,S0)}var b0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function S0(i,e){let t=Rt[e];if(t===void 0){let n=b0.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}var E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(E0,w0)}function w0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function A0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case ks:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ks&&(e="ENVMAP_MODE_REFRACTION"),e}function C0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case bd:e="ENVMAP_BLENDING_ADD";break}return e}function P0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=T0(t),c=A0(t),h=R0(t),d=C0(t),u=P0(t),f=t.isWebGL2?"":_0(t),g=x0(t),x=v0(r),m=s.createProgram(),p,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ns).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ns).join(`
`),M.length>0&&(M+=`
`)):(p=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),M=[f,Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=wl(a),a=Xh(a,t),a=Yh(a,t),o=wl(o),o=Xh(o,t),o=Yh(o,t),a=qh(a),o=qh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let b=v+p+a,R=v+M+o,w=Gh(s,s.VERTEX_SHADER,b),E=Gh(s,s.FRAGMENT_SHADER,R);s.attachShader(m,w),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(z){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(w).trim(),L=s.getShaderInfoLog(E).trim(),O=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,E);else{let H=Wh(s,w,"vertex"),q=Wh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+H+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||L==="")&&(J=!1);J&&(z.diagnostics={runnable:O,programLog:X,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:M}})}s.deleteShader(w),s.deleteShader(E),y=new zs(s,m),_=y0(s,m)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,u0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=E,this}var L0=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}};function D0(i,e,t,n,s,r,a){let o=new Oa,l=new Tl,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,_,U,z,X){let P=z.fog,L=X.geometry,O=y.isMeshStandardMaterial?z.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=J&&J.mapping===ro?J.image.height:null,q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ie=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=ie!==void 0?ie.length:0,pe=0;L.morphAttributes.position!==void 0&&(pe=1),L.morphAttributes.normal!==void 0&&(pe=2),L.morphAttributes.color!==void 0&&(pe=3);let K,le,Pe,Xe;if(q){let _n=pi[q];K=_n.vertexShader,le=_n.fragmentShader}else K=y.vertexShader,le=y.fragmentShader,l.update(y),Pe=l.getVertexShaderID(y),Xe=l.getFragmentShaderID(y);let He=i.getRenderTarget(),Je=X.isInstancedMesh===!0,st=X.isBatchedMesh===!0,We=!!y.map,De=!!y.matcap,B=!!J,ve=!!y.aoMap,oe=!!y.lightMap,de=!!y.bumpMap,se=!!y.normalMap,Fe=!!y.displacementMap,_e=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,W=y.anisotropy>0,ge=y.clearcoat>0,ce=y.iridescence>0,he=y.sheen>0,qe=y.transmission>0,we=W&&!!y.anisotropyMap,ke=ge&&!!y.clearcoatMap,Qe=ge&&!!y.clearcoatNormalMap,tt=ge&&!!y.clearcoatRoughnessMap,fe=ce&&!!y.iridescenceMap,mt=ce&&!!y.iridescenceThicknessMap,N=he&&!!y.sheenColorMap,me=he&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,ye=!!y.specularColorMap,$e=!!y.specularIntensityMap,gt=qe&&!!y.transmissionMap,St=qe&&!!y.thicknessMap,dt=!!y.gradientMap,be=!!y.alphaMap,k=y.alphaTest>0,Te=!!y.alphaHash,Ie=!!y.extensions,at=!!L.attributes.uv1,nt=!!L.attributes.uv2,Dt=!!L.attributes.uv3,Ut=Hi;return y.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ut=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:le,defines:y.defines,customVertexShaderID:Pe,customFragmentShaderID:Xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:st,instancing:Je,instancingColor:Je&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Wn,map:We,matcap:De,envMap:B,envMapMode:B&&J.mapping,envMapCubeUVHeight:H,aoMap:ve,lightMap:oe,bumpMap:de,normalMap:se,displacementMap:u&&Fe,emissiveMap:_e,normalMapObjectSpace:se&&y.normalMapType===Nd,normalMapTangentSpace:se&&y.normalMapType===hc,metalnessMap:A,roughnessMap:S,anisotropy:W,anisotropyMap:we,clearcoat:ge,clearcoatMap:ke,clearcoatNormalMap:Qe,clearcoatRoughnessMap:tt,iridescence:ce,iridescenceMap:fe,iridescenceThicknessMap:mt,sheen:he,sheenColorMap:N,sheenRoughnessMap:me,specularMap:Ee,specularColorMap:ye,specularIntensityMap:$e,transmission:qe,transmissionMap:gt,thicknessMap:St,gradientMap:dt,opaque:y.transparent===!1&&y.blending===Fs,alphaMap:be,alphaTest:k,alphaHash:Te,combine:y.combine,mapUv:We&&x(y.map.channel),aoMapUv:ve&&x(y.aoMap.channel),lightMapUv:oe&&x(y.lightMap.channel),bumpMapUv:de&&x(y.bumpMap.channel),normalMapUv:se&&x(y.normalMap.channel),displacementMapUv:Fe&&x(y.displacementMap.channel),emissiveMapUv:_e&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:we&&x(y.anisotropyMap.channel),clearcoatMapUv:ke&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(y.sheenRoughnessMap.channel),specularMapUv:Ee&&x(y.specularMap.channel),specularColorMapUv:ye&&x(y.specularColorMap.channel),specularIntensityMapUv:$e&&x(y.specularIntensityMap.channel),transmissionMapUv:gt&&x(y.transmissionMap.channel),thicknessMapUv:St&&x(y.thicknessMap.channel),alphaMapUv:be&&x(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(se||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:nt,vertexUv3s:Dt,pointsUvs:X.isPoints===!0&&!!L.attributes.uv&&(We||be),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&kt.getTransfer(y.map.colorSpace)===Yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Ie&&y.extensions.derivatives===!0,extensionFragDepth:Ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)_.push(U),_.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(M(_,y),v(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function M(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function v(y,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){let _=g[y.type],U;if(_){let z=pi[_];U=li.clone(z.uniforms)}else U=y.uniforms;return U}function R(y,_){let U;for(let z=0,X=c.length;z<X;z++){let P=c[z];if(P.cacheKey===_){U=P,++U.usedTimes;break}}return U===void 0&&(U=new I0(i,_,y,r),c.push(U)),U}function w(y){if(--y.usedTimes===0){let _=c.indexOf(y);c[_]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:D}}function U0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function N0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||N0),n.length>1&&n.sort(u||jh),s.length>1&&s.sort(u||jh)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function O0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Jh,i.set(n,[a])):s>=r.length?(a=new Jh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function F0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new _t};break;case"SpotLight":t={position:new F,direction:new F,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function B0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var z0=0;function H0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k0(i,e){let t=new F0,n=B0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new Ft,o=new Ft;function l(h,d){let u=0,f=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let x=0,m=0,p=0,M=0,v=0,b=0,R=0,w=0,E=0,D=0,y=0;h.sort(H0);let _=d===!0?Math.PI:1;for(let z=0,X=h.length;z<X;z++){let P=h[z],L=P.color,O=P.intensity,J=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*O*_,f+=L.g*O*_,g+=L.b*O*_;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],O);y++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){let ie=P.shadow,re=n.get(P);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=H,s.directionalShadowMatrix[x]=P.shadow.matrix,b++}s.directional[x]=q,x++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(L).multiplyScalar(O*_),q.distance=J,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[p]=q;let ie=P.shadow;if(P.map&&(s.spotLightMap[E]=P.map,E++,ie.updateMatrices(P),P.castShadow&&D++),s.spotLightMatrix[p]=ie.matrix,P.castShadow){let re=n.get(P);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=H,w++}p++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(L).multiplyScalar(O),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=q,M++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*_),q.distance=P.distance,q.decay=P.decay,P.castShadow){let ie=P.shadow,re=n.get(P);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=H,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(O*_),q.groundColor.copy(P.groundColor).multiplyScalar(O*_),s.hemi[v]=q,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==v||U.numDirectionalShadows!==b||U.numPointShadows!==R||U.numSpotShadows!==w||U.numSpotMaps!==E||U.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+E-D,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=y,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=v,U.numDirectionalShadows=b,U.numPointShadows=R,U.numSpotShadows=w,U.numSpotMaps=E,U.numLightProbes=y,s.version=z0++)}function c(h,d){let u=0,f=0,g=0,x=0,m=0,p=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let b=h[M];if(b.isDirectionalLight){let R=s.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),u++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function $h(i,e){let t=new k0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function V0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new $h(i,e),t.set(r,[l])):a>=o.length?(l=new $h(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Rl=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function X0(i,e,t){let n=new Er,s=new ue,r=new ue,a=new en,o=new Rl({depthPacking:Ud}),l=new Cl,c={},h=t.maxTextureSize,d={[Vi]:An,[An]:Vi,[Tn]:Tn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let p=this.type;this.render=function(w,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=p!==Ei&&this.type===Ei,P=p===Ei&&this.type!==Ei;for(let L=0,O=w.length;L<O;L++){let J=w[L],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let q=H.getFrameExtents();if(s.multiply(q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||X===!0||P===!0){let re=this.type!==Ei?{minFilter:ln,magFilter:ln}:{};H.map!==null&&H.map.dispose(),H.map=new Rn(s.x,s.y,re),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ie=H.getViewportCount();for(let re=0;re<ie;re++){let pe=H.getViewport(re);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),z.viewport(a),H.updateMatrices(J,re),n=H.getFrustum(),b(E,D,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Ei&&M(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,_,U)};function M(w,E){let D=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,D,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,D,f,x,null)}function v(w,E,D,y){let _=null,U=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)_=U;else if(_=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=_.uuid,X=E.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let L=P[X];L===void 0&&(L=_.clone(),P[X]=L,E.addEventListener("dispose",R)),_=L}if(_.visible=E.visible,_.wireframe=E.wireframe,y===Ei?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=i.properties.get(_);z.light=D}return _}function b(w,E,D,y,_){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let X=e.update(w),P=w.material;if(Array.isArray(P)){let L=X.groups;for(let O=0,J=L.length;O<J;O++){let H=L[O],q=P[H.materialIndex];if(q&&q.visible){let ie=v(w,q,y,_);w.onBeforeShadow(i,w,E,D,X,ie,H),i.renderBufferDirect(D,null,X,ie,w,H),w.onAfterShadow(i,w,E,D,X,ie,H)}}}else if(P.visible){let L=v(w,P,y,_);w.onBeforeShadow(i,w,E,D,X,L,null),i.renderBufferDirect(D,null,X,L,w,null),w.onAfterShadow(i,w,E,D,X,L,null)}}let z=w.children;for(let X=0,P=z.length;X<P;X++)b(z[X],E,D,y,_)}function R(w){w.target.removeEventListener("dispose",R);for(let D in c){let y=c[D],_=w.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}function Y0(i,e,t){let n=t.isWebGL2;function s(){let k=!1,Te=new en,Ie=null,at=new en(0,0,0,0);return{setMask:function(nt){Ie!==nt&&!k&&(i.colorMask(nt,nt,nt,nt),Ie=nt)},setLocked:function(nt){k=nt},setClear:function(nt,Dt,Ut,rn,_n){_n===!0&&(nt*=rn,Dt*=rn,Ut*=rn),Te.set(nt,Dt,Ut,rn),at.equals(Te)===!1&&(i.clearColor(nt,Dt,Ut,rn),at.copy(Te))},reset:function(){k=!1,Ie=null,at.set(-1,0,0,0)}}}function r(){let k=!1,Te=null,Ie=null,at=null;return{setTest:function(nt){nt?st(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(nt){Te!==nt&&!k&&(i.depthMask(nt),Te=nt)},setFunc:function(nt){if(Ie!==nt){switch(nt){case pd:i.depthFunc(i.NEVER);break;case md:i.depthFunc(i.ALWAYS);break;case gd:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case _d:i.depthFunc(i.EQUAL);break;case xd:i.depthFunc(i.GEQUAL);break;case vd:i.depthFunc(i.GREATER);break;case yd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=nt}},setLocked:function(nt){k=nt},setClear:function(nt){at!==nt&&(i.clearDepth(nt),at=nt)},reset:function(){k=!1,Te=null,Ie=null,at=null}}}function a(){let k=!1,Te=null,Ie=null,at=null,nt=null,Dt=null,Ut=null,rn=null,_n=null;return{setTest:function(Gt){k||(Gt?st(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(Gt){Te!==Gt&&!k&&(i.stencilMask(Gt),Te=Gt)},setFunc:function(Gt,xn,Hn){(Ie!==Gt||at!==xn||nt!==Hn)&&(i.stencilFunc(Gt,xn,Hn),Ie=Gt,at=xn,nt=Hn)},setOp:function(Gt,xn,Hn){(Dt!==Gt||Ut!==xn||rn!==Hn)&&(i.stencilOp(Gt,xn,Hn),Dt=Gt,Ut=xn,rn=Hn)},setLocked:function(Gt){k=Gt},setClear:function(Gt){_n!==Gt&&(i.clearStencil(Gt),_n=Gt)},reset:function(){k=!1,Te=null,Ie=null,at=null,nt=null,Dt=null,Ut=null,rn=null,_n=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,v=null,b=null,R=null,w=null,E=null,D=null,y=new _t(0,0,0),_=0,U=!1,z=null,X=null,P=null,L=null,O=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),H=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),H=q>=2);let re=null,pe={},K=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Pe=new en().fromArray(K),Xe=new en().fromArray(le);function He(k,Te,Ie,at){let nt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(k,Dt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<Ie;Ut++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(Te,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(Te+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Dt}let Je={};Je[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),Je[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Je[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Je[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),st(i.DEPTH_TEST),l.setFunc(Ea),_e(!1),A(Ic),st(i.CULL_FACE),se(dn);function st(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function We(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function De(k,Te){return f[k]!==Te?(i.bindFramebuffer(k,Te),f[k]=Te,n&&(k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Te),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Te)),!0):!1}function B(k,Te){let Ie=x,at=!1;if(k)if(Ie=g.get(Te),Ie===void 0&&(Ie=[],g.set(Te,Ie)),k.isWebGLMultipleRenderTargets){let nt=k.texture;if(Ie.length!==nt.length||Ie[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Ut=nt.length;Dt<Ut;Dt++)Ie[Dt]=i.COLOR_ATTACHMENT0+Dt;Ie.length=nt.length,at=!0}}else Ie[0]!==i.COLOR_ATTACHMENT0&&(Ie[0]=i.COLOR_ATTACHMENT0,at=!0);else Ie[0]!==i.BACK&&(Ie[0]=i.BACK,at=!0);at&&(t.isWebGL2?i.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function ve(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let oe={[jn]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};if(n)oe[Uc]=i.MIN,oe[Nc]=i.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(oe[Uc]=k.MIN_EXT,oe[Nc]=k.MAX_EXT)}let de={[Qs]:i.ZERO,[sd]:i.ONE,[rd]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[so]:i.DST_COLOR,[io]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function se(k,Te,Ie,at,nt,Dt,Ut,rn,_n,Gt){if(k===dn){p===!0&&(We(i.BLEND),p=!1);return}if(p===!1&&(st(i.BLEND),p=!0),k!==sc){if(k!==M||Gt!==U){if((v!==jn||w!==jn)&&(i.blendEquation(i.FUNC_ADD),v=jn,w=jn),Gt)switch(k){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,R=null,E=null,D=null,y.set(0,0,0),_=0,M=k,U=Gt}return}nt=nt||Te,Dt=Dt||Ie,Ut=Ut||at,(Te!==v||nt!==w)&&(i.blendEquationSeparate(oe[Te],oe[nt]),v=Te,w=nt),(Ie!==b||at!==R||Dt!==E||Ut!==D)&&(i.blendFuncSeparate(de[Ie],de[at],de[Dt],de[Ut]),b=Ie,R=at,E=Dt,D=Ut),(rn.equals(y)===!1||_n!==_)&&(i.blendColor(rn.r,rn.g,rn.b,_n),y.copy(rn),_=_n),M=k,U=!1}function Fe(k,Te){k.side===Tn?We(i.CULL_FACE):st(i.CULL_FACE);let Ie=k.side===An;Te&&(Ie=!Ie),_e(Ie),k.blending===Fs&&k.transparent===!1?se(dn):se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);let at=k.stencilWrite;c.setTest(at),at&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),W(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){z!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),z=k)}function A(k){k!==ed?(st(i.CULL_FACE),k!==X&&(k===Ic?i.cullFace(i.BACK):k===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),X=k}function S(k){k!==P&&(H&&i.lineWidth(k),P=k)}function W(k,Te,Ie){k?(st(i.POLYGON_OFFSET_FILL),(L!==Te||O!==Ie)&&(i.polygonOffset(Te,Ie),L=Te,O=Ie)):We(i.POLYGON_OFFSET_FILL)}function ge(k){k?st(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function ce(k){k===void 0&&(k=i.TEXTURE0+J-1),re!==k&&(i.activeTexture(k),re=k)}function he(k,Te,Ie){Ie===void 0&&(re===null?Ie=i.TEXTURE0+J-1:Ie=re);let at=pe[Ie];at===void 0&&(at={type:void 0,texture:void 0},pe[Ie]=at),(at.type!==k||at.texture!==Te)&&(re!==Ie&&(i.activeTexture(Ie),re=Ie),i.bindTexture(k,Te||Je[k]),at.type=k,at.texture=Te)}function qe(){let k=pe[re];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(k){Pe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Pe.copy(k))}function gt(k){Xe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function St(k,Te){let Ie=d.get(Te);Ie===void 0&&(Ie=new WeakMap,d.set(Te,Ie));let at=Ie.get(k);at===void 0&&(at=i.getUniformBlockIndex(Te,k.name),Ie.set(k,at))}function dt(k,Te){let at=d.get(Te).get(k);h.get(Te)!==at&&(i.uniformBlockBinding(Te,at,k.__bindingPointIndex),h.set(Te,at))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,pe={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,v=null,b=null,R=null,w=null,E=null,D=null,y=new _t(0,0,0),_=0,U=!1,z=null,X=null,P=null,L=null,O=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:st,disable:We,bindFramebuffer:De,drawBuffers:B,useProgram:ve,setBlending:se,setMaterial:Fe,setFlipSided:_e,setCullFace:A,setLineWidth:S,setPolygonOffset:W,setScissorTest:ge,activeTexture:ce,bindTexture:he,unbindTexture:qe,compressedTexImage2D:we,compressedTexImage3D:ke,texImage2D:Ee,texImage3D:ye,updateUBOMapping:St,uniformBlockBinding:dt,texStorage2D:N,texStorage3D:me,texSubImage2D:Qe,texSubImage3D:tt,compressedTexSubImage2D:fe,compressedTexSubImage3D:mt,scissor:$e,viewport:gt,reset:be}}function q0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):br("canvas")}function x(A,S,W,ge){let ce=1;if((A.width>ge||A.height>ge)&&(ce=ge/Math.max(A.width,A.height)),ce<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let he=S?Ia:Math.floor,qe=he(ce*A.width),we=he(ce*A.height);d===void 0&&(d=g(qe,we));let ke=W?g(qe,we):d;return ke.width=qe,ke.height=we,ke.getContext("2d").drawImage(A,0,0,qe,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+qe+"x"+we+")."),ke}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return _l(A.width)&&_l(A.height)}function p(A){return o?!1:A.wrapS!==Gn||A.wrapT!==Gn||A.minFilter!==ln&&A.minFilter!==cn}function M(A,S){return A.generateMipmaps&&S&&A.minFilter!==ln&&A.minFilter!==cn}function v(A){i.generateMipmap(A)}function b(A,S,W,ge,ce=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he=S;if(S===i.RED&&(W===i.FLOAT&&(he=i.R32F),W===i.HALF_FLOAT&&(he=i.R16F),W===i.UNSIGNED_BYTE&&(he=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.R8UI),W===i.UNSIGNED_SHORT&&(he=i.R16UI),W===i.UNSIGNED_INT&&(he=i.R32UI),W===i.BYTE&&(he=i.R8I),W===i.SHORT&&(he=i.R16I),W===i.INT&&(he=i.R32I)),S===i.RG&&(W===i.FLOAT&&(he=i.RG32F),W===i.HALF_FLOAT&&(he=i.RG16F),W===i.UNSIGNED_BYTE&&(he=i.RG8)),S===i.RGBA){let qe=ce?Aa:kt.getTransfer(ge);W===i.FLOAT&&(he=i.RGBA32F),W===i.HALF_FLOAT&&(he=i.RGBA16F),W===i.UNSIGNED_BYTE&&(he=qe===Yt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(A,S,W){return M(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===ln||A===Oc||A===Lo?i.NEAREST:i.LINEAR}function E(A){let S=A.target;S.removeEventListener("dispose",E),y(S),S.isVideoTexture&&h.delete(S)}function D(A){let S=A.target;S.removeEventListener("dispose",D),U(S)}function y(A){let S=n.get(A);if(S.__webglInit===void 0)return;let W=A.source,ge=u.get(W);if(ge){let ce=ge[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&_(A),Object.keys(ge).length===0&&u.delete(W)}n.remove(A)}function _(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let W=A.source,ge=u.get(W);delete ge[S.__cacheKey],a.memory.textures--}function U(A){let S=A.texture,W=n.get(A),ge=n.get(S);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(W.__webglFramebuffer[ce]))for(let he=0;he<W.__webglFramebuffer[ce].length;he++)i.deleteFramebuffer(W.__webglFramebuffer[ce][he]);else i.deleteFramebuffer(W.__webglFramebuffer[ce]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[ce])}else{if(Array.isArray(W.__webglFramebuffer))for(let ce=0;ce<W.__webglFramebuffer.length;ce++)i.deleteFramebuffer(W.__webglFramebuffer[ce]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ce=0;ce<W.__webglColorRenderbuffer.length;ce++)W.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[ce]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,he=S.length;ce<he;ce++){let qe=n.get(S[ce]);qe.__webglTexture&&(i.deleteTexture(qe.__webglTexture),a.memory.textures--),n.remove(S[ce])}n.remove(S),n.remove(A)}let z=0;function X(){z=0}function P(){let A=z;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function L(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){let W=n.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let ge=A.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(W,A,S);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function J(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Pe(W,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function H(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Pe(W,A,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function q(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Xe(W,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let ie={[Fn]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},re={[ln]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[Lo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Ed]:i.LINEAR_MIPMAP_NEAREST,[Vs]:i.LINEAR_MIPMAP_LINEAR},pe={[Od]:i.NEVER,[Vd]:i.ALWAYS,[Fd]:i.LESS,[vu]:i.LEQUAL,[Bd]:i.EQUAL,[kd]:i.GEQUAL,[zd]:i.GREATER,[Hd]:i.NOTEQUAL};function K(A,S,W){if(W?(i.texParameteri(A,i.TEXTURE_WRAP_S,ie[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,re[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,re[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Gn||S.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==ln&&S.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ln||S.minFilter!==Lo&&S.minFilter!==Vs||S.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Mn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function le(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let ge=S.source,ce=u.get(ge);ce===void 0&&(ce={},u.set(ge,ce));let he=L(S);if(he!==A.__cacheKey){ce[he]===void 0&&(ce[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ce[he].usedTimes++;let qe=ce[A.__cacheKey];qe!==void 0&&(ce[A.__cacheKey].usedTimes--,qe.usedTimes===0&&_(S)),A.__cacheKey=he,A.__webglTexture=ce[he].texture}return W}function Pe(A,S,W){let ge=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ge=i.TEXTURE_3D);let ce=le(A,S),he=S.source;t.bindTexture(ge,A.__webglTexture,i.TEXTURE0+W);let qe=n.get(he);if(he.version!==qe.__version||ce===!0){t.activeTexture(i.TEXTURE0+W);let we=kt.getPrimaries(kt.workingColorSpace),ke=S.colorSpace===Nn?null:kt.getPrimaries(S.colorSpace),Qe=S.colorSpace===Nn||we===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let tt=p(S)&&m(S.image)===!1,fe=x(S.image,tt,!1,s.maxTextureSize);fe=_e(S,fe);let mt=m(fe)||o,N=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Ee=b(S.internalFormat,N,me,S.colorSpace,S.isVideoTexture);K(ge,S,mt);let ye,$e=S.mipmaps,gt=o&&S.isVideoTexture!==!0&&Ee!==_u,St=qe.__version===void 0||ce===!0,dt=R(S,fe,mt);if(S.isDepthTexture)Ee=i.DEPTH_COMPONENT,o?S.type===On?Ee=i.DEPTH_COMPONENT32F:S.type===zi?Ee=i.DEPTH_COMPONENT24:S.type===Ai?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:S.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===is&&Ee===i.DEPTH_COMPONENT&&S.type!==cc&&S.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zi,me=r.convert(S.type)),S.format===Gi&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,S.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ai,me=r.convert(S.type))),St&&(gt?t.texStorage2D(i.TEXTURE_2D,1,Ee,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,N,me,null));else if(S.isDataTexture)if($e.length>0&&mt){gt&&St&&t.texStorage2D(i.TEXTURE_2D,dt,Ee,$e[0].width,$e[0].height);for(let be=0,k=$e.length;be<k;be++)ye=$e[be],gt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,ye.width,ye.height,N,me,ye.data):t.texImage2D(i.TEXTURE_2D,be,Ee,ye.width,ye.height,0,N,me,ye.data);S.generateMipmaps=!1}else gt?(St&&t.texStorage2D(i.TEXTURE_2D,dt,Ee,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,N,me,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,N,me,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){gt&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ee,$e[0].width,$e[0].height,fe.depth);for(let be=0,k=$e.length;be<k;be++)ye=$e[be],S.format!==Ln?N!==null?gt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ye.width,ye.height,fe.depth,N,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,Ee,ye.width,ye.height,fe.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ye.width,ye.height,fe.depth,N,me,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,Ee,ye.width,ye.height,fe.depth,0,N,me,ye.data)}else{gt&&St&&t.texStorage2D(i.TEXTURE_2D,dt,Ee,$e[0].width,$e[0].height);for(let be=0,k=$e.length;be<k;be++)ye=$e[be],S.format!==Ln?N!==null?gt?t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,ye.width,ye.height,N,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,be,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,ye.width,ye.height,N,me,ye.data):t.texImage2D(i.TEXTURE_2D,be,Ee,ye.width,ye.height,0,N,me,ye.data)}else if(S.isDataArrayTexture)gt?(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ee,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,N,me,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,fe.width,fe.height,fe.depth,0,N,me,fe.data);else if(S.isData3DTexture)gt?(St&&t.texStorage3D(i.TEXTURE_3D,dt,Ee,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,N,me,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,fe.width,fe.height,fe.depth,0,N,me,fe.data);else if(S.isFramebufferTexture){if(St)if(gt)t.texStorage2D(i.TEXTURE_2D,dt,Ee,fe.width,fe.height);else{let be=fe.width,k=fe.height;for(let Te=0;Te<dt;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ee,be,k,0,N,me,null),be>>=1,k>>=1}}else if($e.length>0&&mt){gt&&St&&t.texStorage2D(i.TEXTURE_2D,dt,Ee,$e[0].width,$e[0].height);for(let be=0,k=$e.length;be<k;be++)ye=$e[be],gt?t.texSubImage2D(i.TEXTURE_2D,be,0,0,N,me,ye):t.texImage2D(i.TEXTURE_2D,be,Ee,N,me,ye);S.generateMipmaps=!1}else gt?(St&&t.texStorage2D(i.TEXTURE_2D,dt,Ee,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,me,fe)):t.texImage2D(i.TEXTURE_2D,0,Ee,N,me,fe);M(S,mt)&&v(ge),qe.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Xe(A,S,W){if(S.image.length!==6)return;let ge=le(A,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let he=n.get(ce);if(ce.version!==he.__version||ge===!0){t.activeTexture(i.TEXTURE0+W);let qe=kt.getPrimaries(kt.workingColorSpace),we=S.colorSpace===Nn?null:kt.getPrimaries(S.colorSpace),ke=S.colorSpace===Nn||qe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let be=0;be<6;be++)!Qe&&!tt?fe[be]=x(S.image[be],!1,!0,s.maxCubemapSize):fe[be]=tt?S.image[be].image:S.image[be],fe[be]=_e(S,fe[be]);let mt=fe[0],N=m(mt)||o,me=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),ye=b(S.internalFormat,me,Ee,S.colorSpace),$e=o&&S.isVideoTexture!==!0,gt=he.__version===void 0||ge===!0,St=R(S,mt,N);K(i.TEXTURE_CUBE_MAP,S,N);let dt;if(Qe){$e&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,St,ye,mt.width,mt.height);for(let be=0;be<6;be++){dt=fe[be].mipmaps;for(let k=0;k<dt.length;k++){let Te=dt[k];S.format!==Ln?me!==null?$e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k,0,0,Te.width,Te.height,me,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k,ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k,0,0,Te.width,Te.height,me,Ee,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k,ye,Te.width,Te.height,0,me,Ee,Te.data)}}}else{dt=S.mipmaps,$e&&gt&&(dt.length>0&&St++,t.texStorage2D(i.TEXTURE_CUBE_MAP,St,ye,fe[0].width,fe[0].height));for(let be=0;be<6;be++)if(tt){$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,fe[be].width,fe[be].height,me,Ee,fe[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,fe[be].width,fe[be].height,0,me,Ee,fe[be].data);for(let k=0;k<dt.length;k++){let Ie=dt[k].image[be].image;$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k+1,0,0,Ie.width,Ie.height,me,Ee,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k+1,ye,Ie.width,Ie.height,0,me,Ee,Ie.data)}}else{$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,Ee,fe[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,me,Ee,fe[be]);for(let k=0;k<dt.length;k++){let Te=dt[k];$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k+1,0,0,me,Ee,Te.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,k+1,ye,me,Ee,Te.image[be])}}}M(S,N)&&v(i.TEXTURE_CUBE_MAP),he.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function He(A,S,W,ge,ce,he){let qe=r.convert(W.format,W.colorSpace),we=r.convert(W.type),ke=b(W.internalFormat,qe,we,W.colorSpace);if(!n.get(S).__hasExternalTextures){let tt=Math.max(1,S.width>>he),fe=Math.max(1,S.height>>he);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,he,ke,tt,fe,S.depth,0,qe,we,null):t.texImage2D(ce,he,ke,tt,fe,0,qe,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ce,n.get(W).__webglTexture,0,de(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ce,n.get(W).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ge=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||se(S)){let ce=S.depthTexture;ce&&ce.isDepthTexture&&(ce.type===On?ge=i.DEPTH_COMPONENT32F:ce.type===zi&&(ge=i.DEPTH_COMPONENT24));let he=de(S);se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ge,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ge,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ge,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ge=de(S);W&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ge=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ce=0;ce<ge.length;ce++){let he=ge[ce],qe=r.convert(he.format,he.colorSpace),we=r.convert(he.type),ke=b(he.internalFormat,qe,we,he.colorSpace),Qe=de(S);W&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,ke,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,ke,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ke,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let ge=n.get(S.depthTexture).__webglTexture,ce=de(S);if(S.depthTexture.format===is)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(S.depthTexture.format===Gi)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function We(A){let S=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");st(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ge]),S.__webglDepthbuffer[ge]=i.createRenderbuffer(),Je(S.__webglDepthbuffer[ge],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Je(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,S,W){let ge=n.get(A);S!==void 0&&He(ge.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&We(A)}function B(A){let S=A.texture,W=n.get(A),ge=n.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=S.version,a.memory.textures++);let ce=A.isWebGLCubeRenderTarget===!0,he=A.isWebGLMultipleRenderTargets===!0,qe=m(A)||o;if(ce){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let ke=0;ke<S.mipmaps.length;ke++)W.__webglFramebuffer[we][ke]=i.createFramebuffer()}else W.__webglFramebuffer[we]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<S.mipmaps.length;we++)W.__webglFramebuffer[we]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let we=A.texture;for(let ke=0,Qe=we.length;ke<Qe;ke++){let tt=n.get(we[ke]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&se(A)===!1){let we=he?S:[S];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ke=0;ke<we.length;ke++){let Qe=we[ke];W.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ke]);let tt=r.convert(Qe.format,Qe.colorSpace),fe=r.convert(Qe.type),mt=b(Qe.internalFormat,tt,fe,Qe.colorSpace,A.isXRRenderTarget===!0),N=de(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,W.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),K(i.TEXTURE_CUBE_MAP,S,qe);for(let we=0;we<6;we++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)He(W.__webglFramebuffer[we][ke],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else He(W.__webglFramebuffer[we],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(S,qe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let we=A.texture;for(let ke=0,Qe=we.length;ke<Qe;ke++){let tt=we[ke],fe=n.get(tt);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),K(i.TEXTURE_2D,tt,qe),He(W.__webglFramebuffer,A,tt,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(tt,qe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?we=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,ge.__webglTexture),K(we,S,qe),o&&S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)He(W.__webglFramebuffer[ke],A,S,i.COLOR_ATTACHMENT0,we,ke);else He(W.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,we,0);M(S,qe)&&v(we),t.unbindTexture()}A.depthBuffer&&We(A)}function ve(A){let S=m(A)||o,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0,ce=W.length;ge<ce;ge++){let he=W[ge];if(M(he,S)){let qe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(he).__webglTexture;t.bindTexture(qe,we),v(qe),t.unbindTexture()}}}function oe(A){if(o&&A.samples>0&&se(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ge=A.height,ce=i.COLOR_BUFFER_BIT,he=[],qe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(A),ke=A.isWebGLMultipleRenderTargets===!0;if(ke)for(let Qe=0;Qe<S.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Qe=0;Qe<S.length;Qe++){he.push(i.COLOR_ATTACHMENT0+Qe),A.depthBuffer&&he.push(qe);let tt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(tt===!1&&(A.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),ke){let fe=n.get(S[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,W,ge,0,0,W,ge,ce,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let Qe=0;Qe<S.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);let tt=n.get(S[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function de(A){return Math.min(s.maxSamples,A.samples)}function se(A){let S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function _e(A,S){let W=A.colorSpace,ge=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===gl||W!==Wn&&W!==Nn&&(kt.getTransfer(W)===Yt?o===!1?e.has("EXT_sRGB")===!0&&ge===Ln?(A.format=gl,A.minFilter=cn,A.generateMipmaps=!1):S=La.sRGBToLinear(S):(ge!==Ln||ce!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=De,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=He,this.useMultisampledRTT=se}function Z0(i,e,t){let n=t.isWebGL2;function s(r,a=Nn){let o,l=kt.getTransfer(a);if(r===mi)return i.UNSIGNED_BYTE;if(r===du)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===wd)return i.BYTE;if(r===Td)return i.SHORT;if(r===cc)return i.UNSIGNED_SHORT;if(r===uu)return i.INT;if(r===zi)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===Mn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ad)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Rd)return i.LUMINANCE;if(r===Cd)return i.LUMINANCE_ALPHA;if(r===is)return i.DEPTH_COMPONENT;if(r===Gi)return i.DEPTH_STENCIL;if(r===gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Pd)return i.RED;if(r===pu)return i.RED_INTEGER;if(r===Id)return i.RG;if(r===mu)return i.RG_INTEGER;if(r===gu)return i.RGBA_INTEGER;if(r===Do||r===Uo||r===No||r===Oo)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fc||r===Bc||r===zc||r===Hc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_u)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kc||r===Vc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kc)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Vc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gc||r===Wc||r===Xc||r===Yc||r===qc||r===Zc||r===jc||r===Jc||r===$c||r===Kc||r===Qc||r===eh||r===th||r===nh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Gc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$c)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===th)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fo||r===ih||r===sh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fo)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ih)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ld||r===rh||r===ah||r===oh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Pl=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Jn=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},j0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Il=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,M=[],v=[],b=new ue,R=null,w=new wn;w.layers.enable(1),w.viewport=new en;let E=new wn;E.layers.enable(2),E.viewport=new en;let D=[w,E],y=new Pl;y.layers.enable(1),y.layers.enable(2);let _=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=M[K];return le===void 0&&(le=new xr,M[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=M[K];return le===void 0&&(le=new xr,M[K]=le),le.getGripSpace()},this.getHand=function(K){let le=M[K];return le===void 0&&(le=new xr,M[K]=le),le.getHandSpace()};function z(K){let le=v.indexOf(K.inputSource);if(le===-1)return;let Pe=M[le];Pe!==void 0&&(Pe.update(K.inputSource,K.frame,c||a),Pe.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",P);for(let K=0;K<M.length;K++){let le=v[K];le!==null&&(v[K]=null,M[K].disconnect(le))}_=null,U=null,e.setRenderTarget(m),f=null,u=null,d=null,s=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,Pe=null,Xe=null;x.depth&&(Xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Gi:is,Pe=x.stencil?Ai:zi);let He={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Rn(u.textureWidth,u.textureHeight,{format:Ln,type:mi,depthTexture:new qs(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Je=e.properties.get(p);Je.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(K){for(let le=0;le<K.removed.length;le++){let Pe=K.removed[le],Xe=v.indexOf(Pe);Xe>=0&&(v[Xe]=null,M[Xe].disconnect(Pe))}for(let le=0;le<K.added.length;le++){let Pe=K.added[le],Xe=v.indexOf(Pe);if(Xe===-1){for(let Je=0;Je<M.length;Je++)if(Je>=v.length){v.push(Pe),Xe=Je;break}else if(v[Je]===null){v[Je]=Pe,Xe=Je;break}if(Xe===-1)break}let He=M[Xe];He&&He.connect(Pe)}}let L=new F,O=new F;function J(K,le,Pe){L.setFromMatrixPosition(le.matrixWorld),O.setFromMatrixPosition(Pe.matrixWorld);let Xe=L.distanceTo(O),He=le.projectionMatrix.elements,Je=Pe.projectionMatrix.elements,st=He[14]/(He[10]-1),We=He[14]/(He[10]+1),De=(He[9]+1)/He[5],B=(He[9]-1)/He[5],ve=(He[8]-1)/He[0],oe=(Je[8]+1)/Je[0],de=st*ve,se=st*oe,Fe=Xe/(-ve+oe),_e=Fe*-ve;le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let A=st+Fe,S=We+Fe,W=de-_e,ge=se+(Xe-_e),ce=De*We/S*A,he=B*We/S*A;K.projectionMatrix.makePerspective(W,ge,ce,he,A,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function H(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;y.near=E.near=w.near=K.near,y.far=E.far=w.far=K.far,(_!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),_=y.near,U=y.far);let le=K.parent,Pe=y.cameras;H(y,le);for(let Xe=0;Xe<Pe.length;Xe++)H(Pe[Xe],le);Pe.length===2?J(y,w,E):y.projectionMatrix.copy(w.projectionMatrix),q(K,y,le)};function q(K,le,Pe){Pe===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let ie=null;function re(K,le){if(h=le.getViewerPose(c||a),g=le,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Xe=!1;Pe.length!==y.cameras.length&&(y.cameras.length=0,Xe=!0);for(let He=0;He<Pe.length;He++){let Je=Pe[He],st=null;if(f!==null)st=f.getViewport(Je);else{let De=d.getViewSubImage(u,Je);st=De.viewport,He===0&&(e.setRenderTargetTextures(p,De.colorTexture,u.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let We=D[He];We===void 0&&(We=new wn,We.layers.enable(He),We.viewport=new en,D[He]=We),We.matrix.fromArray(Je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(st.x,st.y,st.width,st.height),He===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Xe===!0&&y.cameras.push(We)}}for(let Pe=0;Pe<M.length;Pe++){let Xe=v[Pe],He=M[Pe];Xe!==null&&He!==void 0&&He.update(Xe,le,c||a)}ie&&ie(K,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let pe=new Eu;pe.setAnimationLoop(re),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}};function J0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let b=v.program;n.uniformBlockBinding(M,b)}function c(M,v){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(M,R);let w=e.render.frame;r[M.id]!==w&&(u(M),r[M.id]=w)}function h(M){let v=d();M.__bindingPointIndex=v;let b=i.createBuffer(),R=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,E=b.length;w<E;w++){let D=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,_=D.length;y<_;y++){let U=D[y];if(f(U,w,y,R)===!0){let z=U.__offset,X=Array.isArray(U.value)?U.value:[U.value],P=0;for(let L=0;L<X.length;L++){let O=X[L],J=x(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,z+P,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,b,R){let w=M.value,E=v+"_"+b;if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:R[E]=w.clone(),!0;{let D=R[E];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[E]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(M){let v=M.uniforms,b=0,R=16;for(let E=0,D=v.length;E<D;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,U=y.length;_<U;_++){let z=y[_],X=Array.isArray(z.value)?z.value:[z.value];for(let P=0,L=X.length;P<L;P++){let O=X[P],J=x(O),H=b%R;H!==0&&R-H<J.boundary&&(b+=R-H),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=J.storage}}}let w=b%R;return w>0&&(b+=R-w),M.__size=b,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var wr=class{constructor(e={}){let{canvas:t=sf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;let v=this,b=!1,R=0,w=0,E=null,D=-1,y=null,_=new en,U=new en,z=null,X=new _t(0),P=0,L=t.width,O=t.height,J=1,H=null,q=null,ie=new en(0,0,L,O),re=new en(0,0,L,O),pe=!1,K=new Er,le=!1,Pe=!1,Xe=null,He=new Ft,Je=new ue,st=new F,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return E===null?J:1}let B=n;function ve(C,j){for(let ee=0;ee<C.length;ee++){let te=C[ee],Q=t.getContext(te,j);if(Q!==null)return Q}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){let j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),B=ve(j,C),B===null)throw ve(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,de,se,Fe,_e,A,S,W,ge,ce,he,qe,we,ke,Qe,tt,fe,mt,N,me,Ee,ye,$e,gt;function St(){oe=new gg(B),de=new hg(B,oe,e),oe.init(de),ye=new Z0(B,oe,de),se=new Y0(B,oe,de),Fe=new vg(B),_e=new U0,A=new q0(B,oe,se,_e,de,ye,Fe),S=new dg(v),W=new mg(v),ge=new Af(B,de),$e=new lg(B,oe,ge,de),ce=new _g(B,ge,Fe,$e),he=new Sg(B,ce,ge,Fe),N=new bg(B,de,A),tt=new ug(_e),qe=new D0(v,S,W,oe,de,$e,tt),we=new J0(v,_e),ke=new O0,Qe=new V0(oe,de),mt=new og(v,S,W,se,he,u,l),fe=new X0(v,he,de),gt=new $0(B,Fe,de,se),me=new cg(B,oe,Fe,de),Ee=new xg(B,oe,Fe,de),Fe.programs=qe.programs,v.capabilities=de,v.extensions=oe,v.properties=_e,v.renderLists=ke,v.shadowMap=fe,v.state=se,v.info=Fe}St();let dt=new Il(v,B);this.xr=dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(L,O,!1))},this.getSize=function(C){return C.set(L,O)},this.setSize=function(C,j,ee=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,O=j,t.width=Math.floor(C*J),t.height=Math.floor(j*J),ee===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(L*J,O*J).floor()},this.setDrawingBufferSize=function(C,j,ee){L=C,O=j,J=ee,t.width=Math.floor(C*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(_)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,j,ee,te){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,j,ee,te),se.viewport(_.copy(ie).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,j,ee,te){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,j,ee,te),se.scissor(U.copy(re).multiplyScalar(J).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(C){se.setScissorTest(pe=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(C=!0,j=!0,ee=!0){let te=0;if(C){let Q=!1;if(E!==null){let Ve=E.texture.format;Q=Ve===gu||Ve===mu||Ve===pu}if(Q){let Ve=E.texture.type,it=Ve===mi||Ve===zi||Ve===cc||Ve===Ai||Ve===du||Ve===fu,T=mt.getClearColor(),I=mt.getClearAlpha(),V=T.r,Y=T.g,Z=T.b;it?(f[0]=V,f[1]=Y,f[2]=Z,f[3]=I,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=V,g[1]=Y,g[2]=Z,g[3]=I,B.clearBufferiv(B.COLOR,0,g))}else te|=B.COLOR_BUFFER_BIT}j&&(te|=B.DEPTH_BUFFER_BIT),ee&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ke.dispose(),Qe.dispose(),_e.dispose(),S.dispose(),W.dispose(),he.dispose(),$e.dispose(),gt.dispose(),qe.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",_n),dt.removeEventListener("sessionend",Gt),Xe&&(Xe.dispose(),Xe=null),xn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let C=Fe.autoReset,j=fe.enabled,ee=fe.autoUpdate,te=fe.needsUpdate,Q=fe.type;St(),Fe.autoReset=C,fe.enabled=j,fe.autoUpdate=ee,fe.needsUpdate=te,fe.type=Q}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){let j=C.target;j.removeEventListener("dispose",Ie),at(j)}function at(C){nt(C),_e.remove(C)}function nt(C){let j=_e.get(C).programs;j!==void 0&&(j.forEach(function(ee){qe.releaseProgram(ee)}),C.isShaderMaterial&&qe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ee,te,Q,Ve){j===null&&(j=We);let it=Q.isMesh&&Q.matrixWorld.determinant()<0,T=qr(C,j,ee,te,Q);se.setMaterial(te,it);let I=ee.index,V=1;if(te.wireframe===!0){if(I=ce.getWireframeAttribute(ee),I===void 0)return;V=2}let Y=ee.drawRange,Z=ee.attributes.position,$=Y.start*V,ne=(Y.start+Y.count)*V;Ve!==null&&($=Math.max($,Ve.start*V),ne=Math.min(ne,(Ve.start+Ve.count)*V)),I!==null?($=Math.max($,0),ne=Math.min(ne,I.count)):Z!=null&&($=Math.max($,0),ne=Math.min(ne,Z.count));let ae=ne-$;if(ae<0||ae===1/0)return;$e.setup(Q,te,T,ee,I);let Me,Se=me;if(I!==null&&(Me=ge.get(I),Se=Ee,Se.setIndex(Me)),Q.isMesh)te.wireframe===!0?(se.setLineWidth(te.wireframeLinewidth*De()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(Q.isLine){let xe=te.linewidth;xe===void 0&&(xe=1),se.setLineWidth(xe*De()),Q.isLineSegments?Se.setMode(B.LINES):Q.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else Q.isPoints?Se.setMode(B.POINTS):Q.isSprite&&Se.setMode(B.TRIANGLES);if(Q.isBatchedMesh)Se.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Se.renderInstances($,ae,Q.count);else if(ee.isInstancedBufferGeometry){let xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ue=Math.min(ee.instanceCount,xe);Se.renderInstances($,ae,Ue)}else Se.render($,ae)};function Dt(C,j,ee){C.transparent===!0&&C.side===Tn&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,ei(C,j,ee),C.side=Vi,C.needsUpdate=!0,ei(C,j,ee),C.side=Tn):ei(C,j,ee)}this.compile=function(C,j,ee=null){ee===null&&(ee=C),m=Qe.get(ee),m.init(),M.push(m),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),C!==ee&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(v._useLegacyLights);let te=new Set;return C.traverse(function(Q){let Ve=Q.material;if(Ve)if(Array.isArray(Ve))for(let it=0;it<Ve.length;it++){let T=Ve[it];Dt(T,ee,Q),te.add(T)}else Dt(Ve,ee,Q),te.add(Ve)}),M.pop(),m=null,te},this.compileAsync=function(C,j,ee=null){let te=this.compile(C,j,ee);return new Promise(Q=>{function Ve(){if(te.forEach(function(it){_e.get(it).currentProgram.isReady()&&te.delete(it)}),te.size===0){Q(C);return}setTimeout(Ve,10)}oe.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ut=null;function rn(C){Ut&&Ut(C)}function _n(){xn.stop()}function Gt(){xn.start()}let xn=new Eu;xn.setAnimationLoop(rn),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(C){Ut=C,dt.setAnimationLoop(C),C===null?xn.stop():xn.start()},dt.addEventListener("sessionstart",_n),dt.addEventListener("sessionend",Gt),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(j),j=dt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,E),m=Qe.get(C,M.length),m.init(),M.push(m),He.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(He),Pe=this.localClippingEnabled,le=tt.init(this.clippingPlanes,Pe),x=ke.get(C,p.length),x.init(),p.push(x),Hn(C,j,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(H,q),this.info.render.frame++,le===!0&&tt.beginShadows();let ee=m.state.shadowsArray;if(fe.render(ee,C,j),le===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(x,C),m.setupLights(v._useLegacyLights),j.isArrayCamera){let te=j.cameras;for(let Q=0,Ve=te.length;Q<Ve;Q++){let it=te[Q];Xr(x,C,it,it.viewport)}}else Xr(x,C,j);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,j),$e.resetDefaultState(),D=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Hn(C,j,ee,te){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){te&&st.setFromMatrixPosition(C.matrixWorld).applyMatrix4(He);let it=he.update(C),T=C.material;T.visible&&x.push(C,it,T,ee,st.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){let it=he.update(C),T=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),st.copy(C.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),st.copy(it.boundingSphere.center)),st.applyMatrix4(C.matrixWorld).applyMatrix4(He)),Array.isArray(T)){let I=it.groups;for(let V=0,Y=I.length;V<Y;V++){let Z=I[V],$=T[Z.materialIndex];$&&$.visible&&x.push(C,it,$,ee,st.z,Z)}}else T.visible&&x.push(C,it,T,ee,st.z,null)}}let Ve=C.children;for(let it=0,T=Ve.length;it<T;it++)Hn(Ve[it],j,ee,te)}function Xr(C,j,ee,te){let Q=C.opaque,Ve=C.transmissive,it=C.transparent;m.setupLightsView(ee),le===!0&&tt.setGlobalState(v.clippingPlanes,ee),Ve.length>0&&Po(Q,Ve,j,ee),te&&se.viewport(_.copy(te)),Q.length>0&&or(Q,j,ee),Ve.length>0&&or(Ve,j,ee),it.length>0&&or(it,j,ee),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Po(C,j,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Ve=de.isWebGL2;Xe===null&&(Xe=new Rn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Mn:mi,minFilter:Vs,samples:Ve?4:0})),v.getDrawingBufferSize(Je),Ve?Xe.setSize(Je.x,Je.y):Xe.setSize(Ia(Je.x),Ia(Je.y));let it=v.getRenderTarget();v.setRenderTarget(Xe),v.getClearColor(X),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let T=v.toneMapping;v.toneMapping=Hi,or(C,ee,te),A.updateMultisampleRenderTarget(Xe),A.updateRenderTargetMipmap(Xe);let I=!1;for(let V=0,Y=j.length;V<Y;V++){let Z=j[V],$=Z.object,ne=Z.geometry,ae=Z.material,Me=Z.group;if(ae.side===Tn&&$.layers.test(te.layers)){let Se=ae.side;ae.side=An,ae.needsUpdate=!0,Yr($,ee,te,ne,ae,Me),ae.side=Se,ae.needsUpdate=!0,I=!0}}I===!0&&(A.updateMultisampleRenderTarget(Xe),A.updateRenderTargetMipmap(Xe)),v.setRenderTarget(it),v.setClearColor(X,P),v.toneMapping=T}function or(C,j,ee){let te=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Ve=C.length;Q<Ve;Q++){let it=C[Q],T=it.object,I=it.geometry,V=te===null?it.material:te,Y=it.group;T.layers.test(ee.layers)&&Yr(T,j,ee,I,V,Y)}}function Yr(C,j,ee,te,Q,Ve){C.onBeforeRender(v,j,ee,te,Q,Ve),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(v,j,ee,te,C,Ve),Q.transparent===!0&&Q.side===Tn&&Q.forceSinglePass===!1?(Q.side=An,Q.needsUpdate=!0,v.renderBufferDirect(ee,j,te,Q,C,Ve),Q.side=Vi,Q.needsUpdate=!0,v.renderBufferDirect(ee,j,te,Q,C,Ve),Q.side=Tn):v.renderBufferDirect(ee,j,te,Q,C,Ve),C.onAfterRender(v,j,ee,te,Q,Ve)}function ei(C,j,ee){j.isScene!==!0&&(j=We);let te=_e.get(C),Q=m.state.lights,Ve=m.state.shadowsArray,it=Q.state.version,T=qe.getParameters(C,Q.state,Ve,j,ee),I=qe.getProgramCacheKey(T),V=te.programs;te.environment=C.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(C.isMeshStandardMaterial?W:S).get(C.envMap||te.environment),V===void 0&&(C.addEventListener("dispose",Ie),V=new Map,te.programs=V);let Y=V.get(I);if(Y!==void 0){if(te.currentProgram===Y&&te.lightsStateVersion===it)return ji(C,T),Y}else T.uniforms=qe.getUniforms(C),C.onBuild(ee,T,v),C.onBeforeCompile(T,v),Y=qe.acquireProgram(T,I),V.set(I,Y),te.uniforms=T.uniforms;let Z=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Z.clippingPlanes=tt.uniform),ji(C,T),te.needsLights=ui(C),te.lightsStateVersion=it,te.needsLights&&(Z.ambientLightColor.value=Q.state.ambient,Z.lightProbe.value=Q.state.probe,Z.directionalLights.value=Q.state.directional,Z.directionalLightShadows.value=Q.state.directionalShadow,Z.spotLights.value=Q.state.spot,Z.spotLightShadows.value=Q.state.spotShadow,Z.rectAreaLights.value=Q.state.rectArea,Z.ltc_1.value=Q.state.rectAreaLTC1,Z.ltc_2.value=Q.state.rectAreaLTC2,Z.pointLights.value=Q.state.point,Z.pointLightShadows.value=Q.state.pointShadow,Z.hemisphereLights.value=Q.state.hemi,Z.directionalShadowMap.value=Q.state.directionalShadowMap,Z.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Z.spotShadowMap.value=Q.state.spotShadowMap,Z.spotLightMatrix.value=Q.state.spotLightMatrix,Z.spotLightMap.value=Q.state.spotLightMap,Z.pointShadowMap.value=Q.state.pointShadowMap,Z.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Y,te.uniformsList=null,Y}function Zi(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=zs.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ji(C,j){let ee=_e.get(C);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function qr(C,j,ee,te,Q){j.isScene!==!0&&(j=We),A.resetTextureUnits();let Ve=j.fog,it=te.isMeshStandardMaterial?j.environment:null,T=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Wn,I=(te.isMeshStandardMaterial?W:S).get(te.envMap||it),V=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Y=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Z=!!ee.morphAttributes.position,$=!!ee.morphAttributes.normal,ne=!!ee.morphAttributes.color,ae=Hi;te.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=Me!==void 0?Me.length:0,xe=_e.get(te),Ue=m.state.lights;if(le===!0&&(Pe===!0||C!==y)){let Ot=C===y&&te.id===D;tt.setState(te,C,Ot)}let Ae=!1;te.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Ue.state.version||xe.outputColorSpace!==T||Q.isBatchedMesh&&xe.batching===!1||!Q.isBatchedMesh&&xe.batching===!0||Q.isInstancedMesh&&xe.instancing===!1||!Q.isInstancedMesh&&xe.instancing===!0||Q.isSkinnedMesh&&xe.skinning===!1||!Q.isSkinnedMesh&&xe.skinning===!0||Q.isInstancedMesh&&xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&xe.instancingColor===!1&&Q.instanceColor!==null||xe.envMap!==I||te.fog===!0&&xe.fog!==Ve||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==tt.numPlanes||xe.numIntersection!==tt.numIntersection)||xe.vertexAlphas!==V||xe.vertexTangents!==Y||xe.morphTargets!==Z||xe.morphNormals!==$||xe.morphColors!==ne||xe.toneMapping!==ae||de.isWebGL2===!0&&xe.morphTargetsCount!==Se)&&(Ae=!0):(Ae=!0,xe.__version=te.version);let je=xe.currentProgram;Ae===!0&&(je=ei(te,j,Q));let wt=!1,lt=!1,Ge=!1,ct=je.getUniforms(),Nt=xe.uniforms;if(se.useProgram(je.program)&&(wt=!0,lt=!0,Ge=!0),te.id!==D&&(D=te.id,lt=!0),wt||y!==C){ct.setValue(B,"projectionMatrix",C.projectionMatrix),ct.setValue(B,"viewMatrix",C.matrixWorldInverse);let Ot=ct.map.cameraPosition;Ot!==void 0&&Ot.setValue(B,st.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ct.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,lt=!0,Ge=!0)}if(Q.isSkinnedMesh){ct.setOptional(B,Q,"bindMatrix"),ct.setOptional(B,Q,"bindMatrixInverse");let Ot=Q.skeleton;Ot&&(de.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),ct.setValue(B,"boneTexture",Ot.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(ct.setOptional(B,Q,"batchingTexture"),ct.setValue(B,"batchingTexture",Q._matricesTexture,A));let Kt=ee.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0&&de.isWebGL2===!0)&&N.update(Q,ee,je),(lt||xe.receiveShadow!==Q.receiveShadow)&&(xe.receiveShadow=Q.receiveShadow,ct.setValue(B,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nt.envMap.value=I,Nt.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1),lt&&(ct.setValue(B,"toneMappingExposure",v.toneMappingExposure),xe.needsLights&&Zr(Nt,Ge),Ve&&te.fog===!0&&we.refreshFogUniforms(Nt,Ve),we.refreshMaterialUniforms(Nt,te,J,O,Xe),zs.upload(B,Zi(xe),Nt,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(zs.upload(B,Zi(xe),Nt,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ct.setValue(B,"center",Q.center),ct.setValue(B,"modelViewMatrix",Q.modelViewMatrix),ct.setValue(B,"normalMatrix",Q.normalMatrix),ct.setValue(B,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Ot=te.uniformsGroups;for(let Wt=0,Xt=Ot.length;Wt<Xt;Wt++)if(de.isWebGL2){let Ke=Ot[Wt];gt.update(Ke,je),gt.bind(Ke,je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return je}function Zr(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,j,ee){_e.get(C.texture).__webglTexture=j,_e.get(C.depthTexture).__webglTexture=ee;let te=_e.get(C);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let ee=_e.get(C);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ee=0){E=C,R=j,w=ee;let te=!0,Q=null,Ve=!1,it=!1;if(C){let I=_e.get(C);I.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):I.__webglFramebuffer===void 0?A.setupRenderTarget(C):I.__hasExternalTextures&&A.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);let V=C.texture;(V.isData3DTexture||V.isDataArrayTexture||V.isCompressedArrayTexture)&&(it=!0);let Y=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Y[j])?Q=Y[j][ee]:Q=Y[j],Ve=!0):de.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?Q=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(Y)?Q=Y[ee]:Q=Y,_.copy(C.viewport),U.copy(C.scissor),z=C.scissorTest}else _.copy(ie).multiplyScalar(J).floor(),U.copy(re).multiplyScalar(J).floor(),z=pe;if(se.bindFramebuffer(B.FRAMEBUFFER,Q)&&de.drawBuffers&&te&&se.drawBuffers(C,Q),se.viewport(_),se.scissor(U),se.setScissorTest(z),Ve){let I=_e.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,I.__webglTexture,ee)}else if(it){let I=_e.get(C.texture),V=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.__webglTexture,ee||0,V)}D=-1},this.readRenderTargetPixels=function(C,j,ee,te,Q,Ve,it){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let T=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(T=T[it]),T){se.bindFramebuffer(B.FRAMEBUFFER,T);try{let I=C.texture,V=I.format,Y=I.type;if(V!==Ln&&ye.convert(V)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Z=Y===Mn&&(oe.has("EXT_color_buffer_half_float")||de.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Y!==mi&&ye.convert(Y)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Y===On&&(de.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Z){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-te&&ee>=0&&ee<=C.height-Q&&B.readPixels(j,ee,te,Q,ye.convert(V),ye.convert(Y),Ve)}finally{let I=E!==null?_e.get(E).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,I)}}},this.copyFramebufferToTexture=function(C,j,ee=0){let te=Math.pow(2,-ee),Q=Math.floor(j.image.width*te),Ve=Math.floor(j.image.height*te);A.setTexture2D(j,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,C.x,C.y,Q,Ve),se.unbindTexture()},this.copyTextureToTexture=function(C,j,ee,te=0){let Q=j.image.width,Ve=j.image.height,it=ye.convert(ee.format),T=ye.convert(ee.type);A.setTexture2D(ee,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment),j.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,te,C.x,C.y,Q,Ve,it,T,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,te,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,it,j.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,te,C.x,C.y,it,T,j.image),te===0&&ee.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ee,te,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ve=C.max.x-C.min.x+1,it=C.max.y-C.min.y+1,T=C.max.z-C.min.z+1,I=ye.convert(te.format),V=ye.convert(te.type),Y;if(te.isData3DTexture)A.setTexture3D(te,0),Y=B.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)A.setTexture2DArray(te,0),Y=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,te.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,te.unpackAlignment);let Z=B.getParameter(B.UNPACK_ROW_LENGTH),$=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ne=B.getParameter(B.UNPACK_SKIP_PIXELS),ae=B.getParameter(B.UNPACK_SKIP_ROWS),Me=B.getParameter(B.UNPACK_SKIP_IMAGES),Se=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),ee.isDataTexture||ee.isData3DTexture?B.texSubImage3D(Y,Q,j.x,j.y,j.z,Ve,it,T,I,V,Se.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Y,Q,j.x,j.y,j.z,Ve,it,T,I,Se.data)):B.texSubImage3D(Y,Q,j.x,j.y,j.z,Ve,it,T,I,V,Se),B.pixelStorei(B.UNPACK_ROW_LENGTH,Z),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,ae),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Me),Q===0&&te.generateMipmaps&&B.generateMipmap(Y),se.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){R=0,w=0,E=null,se.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uc?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?ss:xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?Jt:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ll=class extends wr{};Ll.prototype.isWebGL1Renderer=!0;var Zs=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Pi=class extends Bn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ln,h=ln,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Ft,Kh=new Ft,xa=[],Qh=new Ri,K0=new Ft,dr=new Ze,fr=new as,Ha=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Qh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),fr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Kh.multiplyMatrices(n,Is),dr.matrixWorld=Kh,dr.raycast(e,xa);for(let a=0,o=xa.length;a<o;a++){let l=xa[a];l.instanceId=r,l.object=this,t.push(l)}xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xi=class extends Bn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ue:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new Ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(hn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(hn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ue,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends Ar{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var va=new F,ol=new pc,ll=new pc,cl=new pc,Ul=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),c=va);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ol.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),ll.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),cl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ll.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),cl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ol.calc(l),ll.calc(l),cl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function eu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Q0(i,e){let t=1-i;return t*t*e}function e_(i,e){return 2*(1-i)*i*e}function t_(i,e){return i*i*e}function vr(i,e,t,n){return Q0(i,e)+e_(i,t)+t_(i,n)}function n_(i,e){let t=1-i;return t*t*t*e}function i_(i,e){let t=1-i;return 3*t*t*i*e}function s_(i,e){return 3*(1-i)*i*i*e}function r_(i,e){return i*i*i*e}function yr(i,e,t,n,s){return n_(i,e)+i_(i,t)+s_(i,n)+r_(i,s)}var ka=class extends $n{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends $n{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends $n{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends $n{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends $n{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fl=class extends $n{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y),vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(eu(o,l.x,c.x,h.x,d.x),eu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:Ul,CubicBezierCurve:ka,CubicBezierCurve3:Nl,EllipseCurve:Ar,LineCurve:Va,LineCurve3:Ol,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Fl,SplineCurve:Wa}),zl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}},js=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ga(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ka(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ar(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Xa=class i extends $t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yi=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function M(){let b=new F,R=new F,w=0,E=(t-e)/n;for(let D=0;D<=r;D++){let y=[],_=D/r,U=_*(t-e)+e;for(let z=0;z<=s;z++){let X=z/s,P=X*l+o,L=Math.sin(P),O=Math.cos(P);R.x=U*L,R.y=-_*n+m,R.z=U*O,d.push(R.x,R.y,R.z),b.set(L,E,O).normalize(),u.push(b.x,b.y,b.z),f.push(X,1-_),y.push(g++)}x.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){let _=x[y][D],U=x[y+1][D],z=x[y+1][D+1],X=x[y][D+1];h.push(_,U,X),h.push(U,z,X),w+=6}c.addGroup(p,w,0),p+=w}function v(b){let R=g,w=new ue,E=new F,D=0,y=b===!0?e:t,_=b===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let P=z/s*l+o,L=Math.cos(P),O=Math.sin(P);E.x=y*O,E.y=m*_,E.z=y*L,d.push(E.x,E.y,E.z),u.push(0,_,0),w.x=L*.5+.5,w.y=O*.5*_+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){let X=R+z,P=U+z;b===!0?h.push(P,P+1,X):h.push(P+1,P,X),D+=3}c.addGroup(p,D,b===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ya=class i extends Yi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hl=class i extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new F,b=new F,R=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],v),f(t[w+1],b),f(t[w+2],R),l(v,b,R,M)}function l(M,v,b,R){let w=R+1,E=[];for(let D=0;D<=w;D++){E[D]=[];let y=M.clone().lerp(b,D/w),_=v.clone().lerp(b,D/w),U=w-D;for(let z=0;z<=U;z++)z===0&&D===w?E[D][z]=y:E[D][z]=y.clone().lerp(_,z/U)}for(let D=0;D<w;D++)for(let y=0;y<2*(w-D)-1;y++){let _=Math.floor(y/2);y%2===0?(u(E[D][_+1]),u(E[D+1][_]),u(E[D][_])):(u(E[D][_+1]),u(E[D+1][_+1]),u(E[D+1][_]))}}function c(M){let v=new F;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(M),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let M=new F;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let b=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;a.push(b,1-R)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],b=a[M+2],R=a[M+4],w=Math.max(v,b,R),E=Math.min(v,b,R);w>.9&&E<.1&&(v<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,v){let b=M*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){let M=new F,v=new F,b=new F,R=new F,w=new ue,E=new ue,D=new ue;for(let y=0,_=0;y<r.length;y+=9,_+=6){M.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),w.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),D.set(a[_+4],a[_+5]),R.copy(M).add(v).add(b).divideScalar(3);let U=m(R);x(w,_+0,M,U),x(E,_+2,v,U),x(D,_+4,b,U)}}function x(M,v,b,R){R<0&&M.x===1&&(a[v]=M.x-1),b.x===0&&b.z===0&&(a[v]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var bn=class extends js{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}},a_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=u_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Rr(r,a,t,o,l,f,0),a}};function Pu(i,e,t,n,s){let r,a;if(s===b_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=tu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=tu(r,i[r],i[r+1],a);return a&&lo(a,a.next)&&(Pr(a),a=a.next),a}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(lo(t,t.next)||tn(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&g_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?l_(i,n,s,r):o_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Pr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=c_(os(i),e,t),Rr(i,e,t,n,s,r,2)):a===2&&h_(i,e,t,n,s,r):Rr(os(i),e,t,n,s,r,1);break}}}function o_(i){let e=i.prev,t=i,n=i.next;if(tn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Os(s,o,r,l,a,c,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=kl(f,g,e,t,n),M=kl(x,m,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=p&&b&&b.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Os(o,h,l,d,c,u,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Os(o,h,l,d,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Os(o,h,l,d,c,u,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Os(o,h,l,d,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function c_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!lo(s,r)&&Iu(s,n,n.next,r)&&Cr(s,r)&&Cr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Pr(n),Pr(n.next),n=i=r),n=n.next}while(n!==i);return os(n)}function h_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v_(a,o)){let l=Lu(a,o);a=os(a,a.next),l=os(l,l.next),Rr(a,e,t,n,s,r,0),Rr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function u_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Pu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(x_(c));for(s.sort(d_),r=0;r<s.length;r++)t=f_(s[r],t);return t}function d_(i,e){return i.x-e.x}function f_(i,e){let t=p_(i,e);if(!t)return e;let n=Lu(t,i);return os(n,n.next),os(t,t.next)}function p_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Os(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Cr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&m_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function m_(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function g_(i,e,t,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,__(s)}function __(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function x_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Os(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function v_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!y_(i,e)&&(Cr(i,e)&&Cr(e,i)&&M_(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||lo(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lo(i,e){return i.x===e.x&&i.y===e.y}function Iu(i,e,t,n){let s=Ma(tn(i,e,t)),r=Ma(tn(i,e,n)),a=Ma(tn(t,n,i)),o=Ma(tn(t,n,e));return!!(s!==r&&a!==o||s===0&&ya(i,t,e)||r===0&&ya(i,n,e)||a===0&&ya(t,i,n)||o===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function y_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Iu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cr(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function M_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lu(i,e){let t=new Vl(i.i,i.x,i.y),n=new Vl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tu(i,e,t,n){let s=new Vl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nu(e),iu(n,e);let a=e.length;t.forEach(nu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,iu(n,t[l]);let o=a_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zn=class i extends $t{constructor(e=new bn([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:S_,v,b=!1,R,w,E,D;p&&(v=p.getSpacedPoints(h),b=!0,u=!1,R=p.computeFrenetFrames(h,!1),w=new F,E=new F,D=new F),u||(m=0,f=0,g=0,x=0);let y=o.extractPoints(c),_=y.shape,U=y.holes;if(!ki.isClockWise(_)){_=_.reverse();for(let B=0,ve=U.length;B<ve;B++){let oe=U[B];ki.isClockWise(oe)&&(U[B]=oe.reverse())}}let X=ki.triangulateShape(_,U),P=_;for(let B=0,ve=U.length;B<ve;B++){let oe=U[B];_=_.concat(oe)}function L(B,ve,oe){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ve,oe)}let O=_.length,J=X.length;function H(B,ve,oe){let de,se,Fe,_e=B.x-ve.x,A=B.y-ve.y,S=oe.x-B.x,W=oe.y-B.y,ge=_e*_e+A*A,ce=_e*W-A*S;if(Math.abs(ce)>Number.EPSILON){let he=Math.sqrt(ge),qe=Math.sqrt(S*S+W*W),we=ve.x-A/he,ke=ve.y+_e/he,Qe=oe.x-W/qe,tt=oe.y+S/qe,fe=((Qe-we)*W-(tt-ke)*S)/(_e*W-A*S);de=we+_e*fe-B.x,se=ke+A*fe-B.y;let mt=de*de+se*se;if(mt<=2)return new ue(de,se);Fe=Math.sqrt(mt/2)}else{let he=!1;_e>Number.EPSILON?S>Number.EPSILON&&(he=!0):_e<-Number.EPSILON?S<-Number.EPSILON&&(he=!0):Math.sign(A)===Math.sign(W)&&(he=!0),he?(de=-A,se=_e,Fe=Math.sqrt(ge)):(de=_e,se=A,Fe=Math.sqrt(ge/2))}return new ue(de/Fe,se/Fe)}let q=[];for(let B=0,ve=P.length,oe=ve-1,de=B+1;B<ve;B++,oe++,de++)oe===ve&&(oe=0),de===ve&&(de=0),q[B]=H(P[B],P[oe],P[de]);let ie=[],re,pe=q.concat();for(let B=0,ve=U.length;B<ve;B++){let oe=U[B];re=[];for(let de=0,se=oe.length,Fe=se-1,_e=de+1;de<se;de++,Fe++,_e++)Fe===se&&(Fe=0),_e===se&&(_e=0),re[de]=H(oe[de],oe[Fe],oe[_e]);ie.push(re),pe=pe.concat(re)}for(let B=0;B<m;B++){let ve=B/m,oe=f*Math.cos(ve*Math.PI/2),de=g*Math.sin(ve*Math.PI/2)+x;for(let se=0,Fe=P.length;se<Fe;se++){let _e=L(P[se],q[se],de);He(_e.x,_e.y,-oe)}for(let se=0,Fe=U.length;se<Fe;se++){let _e=U[se];re=ie[se];for(let A=0,S=_e.length;A<S;A++){let W=L(_e[A],re[A],de);He(W.x,W.y,-oe)}}}let K=g+x;for(let B=0;B<O;B++){let ve=u?L(_[B],pe[B],K):_[B];b?(E.copy(R.normals[0]).multiplyScalar(ve.x),w.copy(R.binormals[0]).multiplyScalar(ve.y),D.copy(v[0]).add(E).add(w),He(D.x,D.y,D.z)):He(ve.x,ve.y,0)}for(let B=1;B<=h;B++)for(let ve=0;ve<O;ve++){let oe=u?L(_[ve],pe[ve],K):_[ve];b?(E.copy(R.normals[B]).multiplyScalar(oe.x),w.copy(R.binormals[B]).multiplyScalar(oe.y),D.copy(v[B]).add(E).add(w),He(D.x,D.y,D.z)):He(oe.x,oe.y,d/h*B)}for(let B=m-1;B>=0;B--){let ve=B/m,oe=f*Math.cos(ve*Math.PI/2),de=g*Math.sin(ve*Math.PI/2)+x;for(let se=0,Fe=P.length;se<Fe;se++){let _e=L(P[se],q[se],de);He(_e.x,_e.y,d+oe)}for(let se=0,Fe=U.length;se<Fe;se++){let _e=U[se];re=ie[se];for(let A=0,S=_e.length;A<S;A++){let W=L(_e[A],re[A],de);b?He(W.x,W.y+v[h-1].y,v[h-1].x+oe):He(W.x,W.y,d+oe)}}}le(),Pe();function le(){let B=s.length/3;if(u){let ve=0,oe=O*ve;for(let de=0;de<J;de++){let se=X[de];Je(se[2]+oe,se[1]+oe,se[0]+oe)}ve=h+m*2,oe=O*ve;for(let de=0;de<J;de++){let se=X[de];Je(se[0]+oe,se[1]+oe,se[2]+oe)}}else{for(let ve=0;ve<J;ve++){let oe=X[ve];Je(oe[2],oe[1],oe[0])}for(let ve=0;ve<J;ve++){let oe=X[ve];Je(oe[0]+O*h,oe[1]+O*h,oe[2]+O*h)}}n.addGroup(B,s.length/3-B,0)}function Pe(){let B=s.length/3,ve=0;Xe(P,ve),ve+=P.length;for(let oe=0,de=U.length;oe<de;oe++){let se=U[oe];Xe(se,ve),ve+=se.length}n.addGroup(B,s.length/3-B,1)}function Xe(B,ve){let oe=B.length;for(;--oe>=0;){let de=oe,se=oe-1;se<0&&(se=B.length-1);for(let Fe=0,_e=h+m*2;Fe<_e;Fe++){let A=O*Fe,S=O*(Fe+1),W=ve+de+A,ge=ve+se+A,ce=ve+se+S,he=ve+de+S;st(W,ge,ce,he)}}}function He(B,ve,oe){l.push(B),l.push(ve),l.push(oe)}function Je(B,ve,oe){We(B),We(ve),We(oe);let de=s.length/3,se=M.generateTopUV(n,s,de-3,de-2,de-1);De(se[0]),De(se[1]),De(se[2])}function st(B,ve,oe,de){We(B),We(ve),We(de),We(ve),We(oe),We(de);let se=s.length/3,Fe=M.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);De(Fe[0]),De(Fe[1]),De(Fe[3]),De(Fe[1]),De(Fe[2]),De(Fe[3])}function We(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function De(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return E_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bl[s.type]().fromJSON(s)),new i(n,e.options)}},S_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-d),new ue(u,1-g),new ue(x,1-p)]:[new ue(o,1-l),new ue(h,1-d),new ue(f,1-g),new ue(m,1-p)]}};function E_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Js=class i extends Hl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qa=class i extends $t{constructor(e=new bn([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];ki.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=ki.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],v=M[0]+d,b=M[1]+d,R=M[2]+d;n.push(v,b,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return w_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function w_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Za=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zt=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ja=class extends Wi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function T_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ch:r=e,o=2*t-n;break;case hh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:a=e,l=2*n-t;break;case hh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+M*a[c+R]+v*a[l+R]+b*a[d+R];return r}},Wl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Xl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case Ta:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&T_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ta;var ls=class extends oi{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=wa;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends oi{};Yl.prototype.ValueTypeName="color";var ql=class extends oi{};ql.prototype.ValueTypeName="number";var Zl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ir=class extends oi{InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.DefaultInterpolation=Ta;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends oi{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=wa;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends oi{};jl.prototype.ValueTypeName="vector";var Ja={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},A_=new Jl,hs=class{constructor(e){this.manager=e!==void 0?e:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si={},$l=class extends Error{constructor(e,t){super(e),this.response=t}},Kl=class extends hs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ja.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Si[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0,x=0,m=new ReadableStream({start(p){M();function M(){d.read().then(({done:v,value:b})=>{if(v)p.close();else{x+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,E=h.length;w<E;w++){let D=h[w];D.onProgress&&D.onProgress(R)}p.enqueue(b),M()}})}}});return new Response(m)}else throw new $l(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ja.add(e,c);let h=Si[e];delete Si[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Si[e];if(h===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ql=class extends hs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ja.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=br("img");function l(){h(),Ja.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var $a=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Pi,o=new Kl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Gn,a.wrapT=c.wrapT!==void 0?c.wrapT:Gn,a.magFilter=c.magFilter!==void 0?c.magFilter:cn,a.minFilter=c.minFilter!==void 0?c.minFilter:cn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Vs),c.mipmapCount===1&&(a.minFilter=cn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},Ka=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=new Bn,a=new Ql(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Lr=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qa=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hl=new Ft,su=new F,ru=new F,eo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var au=new Ft,pr=new F,ul=new F,ec=class extends eo{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-pr.x,-pr.y,-pr.z),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}},Ks=class extends Lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tc=class extends eo{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var no=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ou();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ou(){return(typeof performance>"u"?Date:performance).now()}var mc="\\[\\]\\.:\\/",R_=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",C_="[^"+mc.replace("\\.","")+"]",P_=/((?:WC+[\/:])*)/.source.replace("WC",gc),I_=/(WCOD+)?/.source.replace("WCOD",C_),L_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),D_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),U_=new RegExp("^"+P_+I_+L_+D_+"$"),N_=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R_,"")}static parseTrackName(e){let t=U_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=nc;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lx=new Float32Array(1);var Dr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Du={type:"change"},_c={type:"start"},Uu={type:"end"},co=new Sr,Nu=new ri,F_=Math.cos(70*yu.DEG2RAD),ho=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",he),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Du),n.update(),r=s.NONE},this.update=(function(){let N=new F,me=new Xn().setFromUnitVectors(e.up,new F(0,1,0)),Ee=me.clone().invert(),ye=new F,$e=new Xn,gt=new F,St=2*Math.PI;return function(be=null){let k=n.object.position;N.copy(k).sub(n.target),N.applyQuaternion(me),o.setFromVector3(N),n.autoRotate&&r===s.NONE&&U(y(be)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Te=n.minAzimuthAngle,Ie=n.maxAzimuthAngle;isFinite(Te)&&isFinite(Ie)&&(Te<-Math.PI?Te+=St:Te>Math.PI&&(Te-=St),Ie<-Math.PI?Ie+=St:Ie>Math.PI&&(Ie-=St),Te<=Ie?o.theta=Math.max(Te,Math.min(Ie,o.theta)):o.theta=o.theta>(Te+Ie)/2?Math.max(Te,o.theta):Math.min(Ie,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*c),N.setFromSpherical(o),N.applyQuaternion(Ee),k.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let at=!1;if(n.zoomToCursor&&w){let nt=null;if(n.object.isPerspectiveCamera){let Dt=N.length();nt=q(Dt*c);let Ut=Dt-nt;n.object.position.addScaledVector(b,Ut),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Dt=new F(R.x,R.y,0);Dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0;let Ut=new F(R.x,R.y,0);Ut.unproject(n.object),n.object.position.sub(Ut).add(Dt),n.object.updateMatrixWorld(),nt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):(co.origin.copy(n.object.position),co.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(co.direction))<F_?e.lookAt(n.target):(Nu.setFromNormalAndCoplanarPoint(n.object.up,n.target),co.intersectPlane(Nu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0);return c=1,w=!1,at||ye.distanceToSquared(n.object.position)>a||8*(1-$e.dot(n.object.quaternion))>a||gt.distanceToSquared(n.target)>0?(n.dispatchEvent(Du),ye.copy(n.object.position),$e.copy(n.object.quaternion),gt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",_e),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",he),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Dr,l=new Dr,c=1,h=new F,d=new ue,u=new ue,f=new ue,g=new ue,x=new ue,m=new ue,p=new ue,M=new ue,v=new ue,b=new F,R=new ue,w=!1,E=[],D={};function y(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function _(N){let me=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function U(N){l.theta-=N}function z(N){l.phi-=N}let X=(function(){let N=new F;return function(Ee,ye){N.setFromMatrixColumn(ye,0),N.multiplyScalar(-Ee),h.add(N)}})(),P=(function(){let N=new F;return function(Ee,ye){n.screenSpacePanning===!0?N.setFromMatrixColumn(ye,1):(N.setFromMatrixColumn(ye,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Ee),h.add(N)}})(),L=(function(){let N=new F;return function(Ee,ye){let $e=n.domElement;if(n.object.isPerspectiveCamera){let gt=n.object.position;N.copy(gt).sub(n.target);let St=N.length();St*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Ee*St/$e.clientHeight,n.object.matrix),P(2*ye*St/$e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Ee*(n.object.right-n.object.left)/n.object.zoom/$e.clientWidth,n.object.matrix),P(ye*(n.object.top-n.object.bottom)/n.object.zoom/$e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(N,me){if(!n.zoomToCursor)return;w=!0;let Ee=n.domElement.getBoundingClientRect(),ye=N-Ee.left,$e=me-Ee.top,gt=Ee.width,St=Ee.height;R.x=ye/gt*2-1,R.y=-($e/St)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function ie(N){d.set(N.clientX,N.clientY)}function re(N){H(N.clientX,N.clientX),p.set(N.clientX,N.clientY)}function pe(N){g.set(N.clientX,N.clientY)}function K(N){u.set(N.clientX,N.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;U(2*Math.PI*f.x/me.clientHeight),z(2*Math.PI*f.y/me.clientHeight),d.copy(u),n.update()}function le(N){M.set(N.clientX,N.clientY),v.subVectors(M,p),v.y>0?O(_(v.y)):v.y<0&&J(_(v.y)),p.copy(M),n.update()}function Pe(N){x.set(N.clientX,N.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),L(m.x,m.y),g.copy(x),n.update()}function Xe(N){H(N.clientX,N.clientY),N.deltaY<0?J(_(N.deltaY)):N.deltaY>0&&O(_(N.deltaY)),n.update()}function He(N){let me=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),me=!0;break}me&&(N.preventDefault(),n.update())}function Je(N){if(E.length===1)d.set(N.pageX,N.pageY);else{let me=mt(N),Ee=.5*(N.pageX+me.x),ye=.5*(N.pageY+me.y);d.set(Ee,ye)}}function st(N){if(E.length===1)g.set(N.pageX,N.pageY);else{let me=mt(N),Ee=.5*(N.pageX+me.x),ye=.5*(N.pageY+me.y);g.set(Ee,ye)}}function We(N){let me=mt(N),Ee=N.pageX-me.x,ye=N.pageY-me.y,$e=Math.sqrt(Ee*Ee+ye*ye);p.set(0,$e)}function De(N){n.enableZoom&&We(N),n.enablePan&&st(N)}function B(N){n.enableZoom&&We(N),n.enableRotate&&Je(N)}function ve(N){if(E.length==1)u.set(N.pageX,N.pageY);else{let Ee=mt(N),ye=.5*(N.pageX+Ee.x),$e=.5*(N.pageY+Ee.y);u.set(ye,$e)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;U(2*Math.PI*f.x/me.clientHeight),z(2*Math.PI*f.y/me.clientHeight),d.copy(u)}function oe(N){if(E.length===1)x.set(N.pageX,N.pageY);else{let me=mt(N),Ee=.5*(N.pageX+me.x),ye=.5*(N.pageY+me.y);x.set(Ee,ye)}m.subVectors(x,g).multiplyScalar(n.panSpeed),L(m.x,m.y),g.copy(x)}function de(N){let me=mt(N),Ee=N.pageX-me.x,ye=N.pageY-me.y,$e=Math.sqrt(Ee*Ee+ye*ye);M.set(0,$e),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),O(v.y),p.copy(M);let gt=(N.pageX+me.x)*.5,St=(N.pageY+me.y)*.5;H(gt,St)}function se(N){n.enableZoom&&de(N),n.enablePan&&oe(N)}function Fe(N){n.enableZoom&&de(N),n.enableRotate&&ve(N)}function _e(N){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",S)),Qe(N),N.pointerType==="touch"?qe(N):W(N))}function A(N){n.enabled!==!1&&(N.pointerType==="touch"?we(N):ge(N))}function S(N){tt(N),E.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(Uu),r=s.NONE}function W(N){let me;switch(N.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case us.DOLLY:if(n.enableZoom===!1)return;re(N),r=s.DOLLY;break;case us.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;pe(N),r=s.PAN}else{if(n.enableRotate===!1)return;ie(N),r=s.ROTATE}break;case us.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;ie(N),r=s.ROTATE}else{if(n.enablePan===!1)return;pe(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_c)}function ge(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;K(N);break;case s.DOLLY:if(n.enableZoom===!1)return;le(N);break;case s.PAN:if(n.enablePan===!1)return;Pe(N);break}}function ce(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(_c),Xe(N),n.dispatchEvent(Uu))}function he(N){n.enabled===!1||n.enablePan===!1||He(N)}function qe(N){switch(fe(N),E.length){case 1:switch(n.touches.ONE){case ds.ROTATE:if(n.enableRotate===!1)return;Je(N),r=s.TOUCH_ROTATE;break;case ds.PAN:if(n.enablePan===!1)return;st(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(N),r=s.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_c)}function we(N){switch(fe(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;oe(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(N),n.update();break;default:r=s.NONE}}function ke(N){n.enabled!==!1&&N.preventDefault()}function Qe(N){E.push(N.pointerId)}function tt(N){delete D[N.pointerId];for(let me=0;me<E.length;me++)if(E[me]==N.pointerId){E.splice(me,1);return}}function fe(N){let me=D[N.pointerId];me===void 0&&(me=new ue,D[N.pointerId]=me),me.set(N.pageX,N.pageY)}function mt(N){let me=N.pointerId===E[0]?E[1]:E[0];return D[me]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",_e),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",ce,{passive:!1}),this.update()}};var uo=class extends $a{constructor(e){super(e),this.type=Mn}parse(e){let a=function(D,y){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},d=function(D,y,_){y=y||1024;let z=D.pos,X=-1,P=0,L="",O=String.fromCharCode.apply(null,new Uint16Array(D.subarray(z,z+128)));for(;0>(X=O.indexOf(`
`))&&P<y&&z<D.byteLength;)L+=O,P+=O.length,z+=128,O+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(z,z+128)));return-1<X?(_!==!1&&(D.pos+=P+X+1),L+O.slice(0,X)):!1},u=function(D){let y=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},L,O;for((D.pos>=D.byteLength||!(L=d(D)))&&a(1,"no header found"),(O=L.match(y))||a(3,"bad initial token"),P.valid|=1,P.programtype=O[1],P.string+=L+`
`;L=d(D),L!==!1;){if(P.string+=L+`
`,L.charAt(0)==="#"){P.comments+=L+`
`;continue}if((O=L.match(_))&&(P.gamma=parseFloat(O[1])),(O=L.match(U))&&(P.exposure=parseFloat(O[1])),(O=L.match(z))&&(P.valid|=2,P.format=O[1]),(O=L.match(X))&&(P.valid|=4,P.height=parseInt(O[1],10),P.width=parseInt(O[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(D,y,_){let U=y;if(U<8||U>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);U!==(D[2]<<8|D[3])&&a(3,"wrong scanline width");let z=new Uint8Array(4*y*_);z.length||a(4,"unable to allocate buffer space");let X=0,P=0,L=4*U,O=new Uint8Array(4),J=new Uint8Array(L),H=_;for(;H>0&&P<D.byteLength;){P+4>D.byteLength&&a(1),O[0]=D[P++],O[1]=D[P++],O[2]=D[P++],O[3]=D[P++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=U)&&a(3,"bad rgbe scanline format");let q=0,ie;for(;q<L&&P<D.byteLength;){ie=D[P++];let pe=ie>128;if(pe&&(ie-=128),(ie===0||q+ie>L)&&a(3,"bad scanline data"),pe){let K=D[P++];for(let le=0;le<ie;le++)J[q++]=K}else J.set(D.subarray(P,P+ie),q),q+=ie,P+=ie}let re=U;for(let pe=0;pe<re;pe++){let K=0;z[X]=J[pe+K],K+=U,z[X+1]=J[pe+K],K+=U,z[X+2]=J[pe+K],K+=U,z[X+3]=J[pe+K],X+=4}H--}return z},g=function(D,y,_,U){let z=D[y+3],X=Math.pow(2,z-128)/255;_[U+0]=D[y+0]*X,_[U+1]=D[y+1]*X,_[U+2]=D[y+2]*X,_[U+3]=1},x=function(D,y,_,U){let z=D[y+3],X=Math.pow(2,z-128)/255;_[U+0]=Nr.toHalfFloat(Math.min(D[y+0]*X,65504)),_[U+1]=Nr.toHalfFloat(Math.min(D[y+1]*X,65504)),_[U+2]=Nr.toHalfFloat(Math.min(D[y+2]*X,65504)),_[U+3]=Nr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=u(m),M=p.width,v=p.height,b=f(m.subarray(m.pos),M,v),R,w,E;switch(this.type){case On:E=b.length/4;let D=new Float32Array(E*4);for(let _=0;_<E;_++)g(b,_*4,D,_*4);R=D,w=On;break;case Mn:E=b.length/4;let y=new Uint16Array(E*4);for(let _=0;_<E;_++)x(b,_*4,y,_*4);R=y,w=Mn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:v,data:R,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case On:case Mn:a.colorSpace=Wn,a.minFilter=cn,a.magFilter=cn,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}};var fo=class extends Zs{constructor(e=null){super();let t=new fn;t.deleteAttribute("uv");let n=new Zt({side:An}),s=new Zt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Ks(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ze(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Ze(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ze(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ze(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Ze(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Ze(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Ze(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Ze(t,tr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Ze(t,tr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Ze(t,tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Ze(t,tr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let M=new Ze(t,tr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new Ze(t,tr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function tr(i){let e=new Ci;return e.color.setScalar(i),e}var nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},B_=new Xs(-1,1,1,-1,0,1),xc=class extends $t{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},z_=new xc,qi=class{constructor(e){this._mesh=new Ze(z_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var po=class extends Yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},mo=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var go=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new po(nr),this.copyPass.material.blending=dn,this.clock=new no}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(a instanceof Or?n=!0:a instanceof mo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _o=class extends Yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ft},cameraProjectionMatrixInverse:{value:new Ft},cameraWorldMatrix:{value:new Ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},Br={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},xo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ou(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=H_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Pi(s,e,e);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}function H_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var zr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:vc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new Ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function vc(i,e,t){let n=k_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function k_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var vo=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let M=g-m+h,v=x-p+h,b=g-1+2*h,R=x-1+2*h,w=l&255,E=c&255,D=this.perm[w+this.perm[E]]%12,y=this.perm[w+m+this.perm[E+p]]%12,_=this.perm[w+1+this.perm[E+1]]%12,U=.5-g*g-x*x;U<0?n=0:(U*=U,n=U*U*this.dot(this.grad3[D],g,x));let z=.5-M*M-v*v;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[y],M,v));let X=.5-b*b-R*R;return X<0?r=0:(X*=X,r=X*X*this.dot(this.grad3[_],b,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,x=h-g,m=d-g,p=u-g,M=e-x,v=t-m,b=n-p,R,w,E,D,y,_;M>=v?v>=b?(R=1,w=0,E=0,D=1,y=1,_=0):M>=b?(R=1,w=0,E=0,D=1,y=0,_=1):(R=0,w=0,E=1,D=1,y=0,_=1):v<b?(R=0,w=0,E=1,D=0,y=1,_=1):M<b?(R=0,w=1,E=0,D=0,y=1,_=1):(R=0,w=1,E=0,D=1,y=1,_=0);let U=M-R+f,z=v-w+f,X=b-E+f,P=M-D+2*f,L=v-y+2*f,O=b-_+2*f,J=M-1+3*f,H=v-1+3*f,q=b-1+3*f,ie=h&255,re=d&255,pe=u&255,K=this.perm[ie+this.perm[re+this.perm[pe]]]%12,le=this.perm[ie+R+this.perm[re+w+this.perm[pe+E]]]%12,Pe=this.perm[ie+D+this.perm[re+y+this.perm[pe+_]]]%12,Xe=this.perm[ie+1+this.perm[re+1+this.perm[pe+1]]]%12,He=.6-M*M-v*v-b*b;He<0?s=0:(He*=He,s=He*He*this.dot3(this.grad3[K],M,v,b));let Je=.6-U*U-z*z-X*X;Je<0?r=0:(Je*=Je,r=Je*Je*this.dot3(this.grad3[le],U,z,X));let st=.6-P*P-L*L-O*O;st<0?a=0:(st*=st,a=st*st*this.dot3(this.grad3[Pe],P,L,O));let We=.6-J*J-H*H-q*q;return We<0?o=0:(We*=We,o=We*We*this.dot3(this.grad3[Xe],J,H,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,x=(e+t+n+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),M=Math.floor(n+x),v=Math.floor(s+x),b=(m+p+M+v)*c,R=m-b,w=p-b,E=M-b,D=v-b,y=e-R,_=t-w,U=n-E,z=s-D,X=y>_?32:0,P=y>U?16:0,L=_>U?8:0,O=y>z?4:0,J=_>z?2:0,H=U>z?1:0,q=X+P+L+O+J+H,ie=a[q][0]>=3?1:0,re=a[q][1]>=3?1:0,pe=a[q][2]>=3?1:0,K=a[q][3]>=3?1:0,le=a[q][0]>=2?1:0,Pe=a[q][1]>=2?1:0,Xe=a[q][2]>=2?1:0,He=a[q][3]>=2?1:0,Je=a[q][0]>=1?1:0,st=a[q][1]>=1?1:0,We=a[q][2]>=1?1:0,De=a[q][3]>=1?1:0,B=y-ie+c,ve=_-re+c,oe=U-pe+c,de=z-K+c,se=y-le+2*c,Fe=_-Pe+2*c,_e=U-Xe+2*c,A=z-He+2*c,S=y-Je+3*c,W=_-st+3*c,ge=U-We+3*c,ce=z-De+3*c,he=y-1+4*c,qe=_-1+4*c,we=U-1+4*c,ke=z-1+4*c,Qe=m&255,tt=p&255,fe=M&255,mt=v&255,N=o[Qe+o[tt+o[fe+o[mt]]]]%32,me=o[Qe+ie+o[tt+re+o[fe+pe+o[mt+K]]]]%32,Ee=o[Qe+le+o[tt+Pe+o[fe+Xe+o[mt+He]]]]%32,ye=o[Qe+Je+o[tt+st+o[fe+We+o[mt+De]]]]%32,$e=o[Qe+1+o[tt+1+o[fe+1+o[mt+1]]]]%32,gt=.6-y*y-_*_-U*U-z*z;gt<0?h=0:(gt*=gt,h=gt*gt*this.dot4(r[N],y,_,U,z));let St=.6-B*B-ve*ve-oe*oe-de*de;St<0?d=0:(St*=St,d=St*St*this.dot4(r[me],B,ve,oe,de));let dt=.6-se*se-Fe*Fe-_e*_e-A*A;dt<0?u=0:(dt*=dt,u=dt*dt*this.dot4(r[Ee],se,Fe,_e,A));let be=.6-S*S-W*W-ge*ge-ce*ce;be<0?f=0:(be*=be,f=be*be*this.dot4(r[ye],S,W,ge,ce));let k=.6-he*he-qe*qe-we*we-ke*ke;return k<0?g=0:(k*=k,g=k*k*this.dot4(r[$e],he,qe,we,ke)),27*(h+d+u+f+g)}};var Hr=class i extends Yn{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ou(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rn(this.width,this.height,{type:Mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pn({defines:Object.assign({},Fr.defines),uniforms:li.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ja,this.normalMaterial.blending=dn,this.pdMaterial=new pn({defines:Object.assign({},zr.defines),uniforms:li.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pn({defines:Object.assign({},Br.defines),uniforms:li.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pn({uniforms:li.clone(nr.uniforms),vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:so,blendDst:Qs,blendEquation:jn,blendSrcAlpha:io,blendDstAlpha:Qs,blendEquationAlpha:jn}),this.blendMaterial=new pn({uniforms:li.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:sc,blendSrc:so,blendDst:Qs,blendEquation:jn,blendSrcAlpha:io,blendDstAlpha:Qs,blendEquationAlpha:jn}),this.fsQuad=new qi(null),this.originalClearColor=new _t,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new qs,this.depthTexture.format=Gi,this.depthTexture.type=Ai,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:ln,magFilter:ln,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=vc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new vo,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Pi(s,e,e,Ln,mi);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}};Hr.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Fu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yo=class extends Yn{constructor(){super();let e=Fu;this.uniforms=li.clone(e.uniforms),this.material=new Za({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},kt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function kr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new $t,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Bu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let g=Bu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new qt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function zu(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new F,new F,new F],r=new F,a=new F,o=new F,l=new F;function c(x){let m=~~(x.x*n),p=~~(x.y*n),M=~~(x.z*n);return`${m},${p},${M}`}let h=i.index?i.toNonIndexed():i,d=h.attributes.position,u={};for(let x=0,m=d.count/3;x<m;x++){let p=3*x,M=s[0].fromBufferAttribute(d,p+0),v=s[1].fromBufferAttribute(d,p+1),b=s[2].fromBufferAttribute(d,p+2);r.subVectors(b,v),a.subVectors(M,v);let R=new F().crossVectors(r,a).normalize();for(let w=0;w<3;w++){let E=s[w],D=c(E);D in u||(u[D]=[]),u[D].push(R)}}let f=new Float32Array(d.count*3),g=new qt(f,3,!1);for(let x=0,m=d.count/3;x<m;x++){let p=3*x,M=s[0].fromBufferAttribute(d,p+0),v=s[1].fromBufferAttribute(d,p+1),b=s[2].fromBufferAttribute(d,p+2);r.subVectors(b,v),a.subVectors(M,v),o.crossVectors(r,a).normalize();for(let R=0;R<3;R++){let w=s[R],E=c(w),D=u[E];l.set(0,0,0);for(let y=0,_=D.length;y<_;y++){let U=D[y];o.dot(U)>t&&l.add(U)}l.normalize(),g.setXYZ(p+R,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}var Vr=new F;function Kn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Vr.copy(e),Vr[n]=0,Vr.normalize();let c=.5*a/(a+o),h=1-Vr.angleTo(i)/l;return Math.sign(Vr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Mo=class extends fn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new F,l=new F,c=new F(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new F,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=Kn(g,l,"z","y",r,n),u[p+1]=1-Kn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-Kn(g,l,"z","y",r,n),u[p+1]=1-Kn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-Kn(g,l,"x","z",r,e),u[p+1]=Kn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-Kn(g,l,"x","z",r,e),u[p+1]=1-Kn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-Kn(g,l,"x","y",r,e),u[p+1]=1-Kn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=Kn(g,l,"x","y",r,e),u[p+1]=1-Kn(g,l,"y","x",r,t);break}}};var Yu="2.0",Ro=(()=>{try{let i=document.currentScript&&document.currentScript.src;return i?i.replace(/[^/]*$/,""):""}catch{return""}})(),V_=["cedar","burgundy","walnut","sapele","birch","coffee","shousugi","whitewash","greywash","patina"],Hu=26,jt=typeof window<"u"?window:globalThis,sr={leaf_rs:1.9375,leaf_tb:2.5,jamb_trim:1.625,trim_t:.75,rail_top:5,rail_mid:5,rail_bot:5,glass_t:.75,panel_t:.75,clad_board:5.5,clad_reveal:.25,clad_t:.75,plank:6,xbuck:3.5,bevel:1.5,louvre_pitch:3.5,louvre_w:4,louvre_deg:35,astragal:1.5,jamb:.75,threshold:1,header_face:2.78125,gaps:{shim_side:.375,shim_top:.375,jamb_l:.375,jamb_r:.375,door:.125,center:.25,head:.25,sill:.375}},G_=Object.assign({},sr,{header_face:2.6875});function W_(i){let e=null;try{typeof jt.rbFor=="function"&&(e=jt.rbFor(i))}catch{e=null}if(!e)return sr;let t=Object.assign({},sr,e);t.gaps=Object.assign({},sr.gaps);for(let n in e.gaps||{})e.gaps[n]!=null&&!isNaN(+e.gaps[n])&&(t.gaps[n]=+e.gaps[n]);for(let n of["jamb","threshold","header_face","leaf_rs","leaf_tb"])(t[n]==null||isNaN(+t[n]))&&(t[n]=sr[n]);return t}var X_=1.75;function qu(i,e,t){let n=i.t,s=new Array(i.n);e=Math.max(0,Math.min(1,e));let r=[];i.Lq>0&&r.push({dir:1,idx:[...Array(i.Lq).keys()],jg:i.jL}),i.Rq>0&&r.push({dir:-1,idx:[...Array(i.Rq).keys()].map(a=>i.n-1-a),jg:i.jR});for(let a of r){let o=a.idx.length,l=a.dir,c=(o===1?88:86)*Math.PI/180,h=c*e,d=Math.max(X_,(a.jg*a.jg+n*n/4)/(2*a.jg)+.0625),u=Math.max(.5,d-a.jg),f=Math.floor(o/2),g=f>1?Math.min(.22,.5/f):0,x=_=>c*Math.max(0,Math.min(1,(e-_*g)/(1-(f-1)*g))),m=_=>[l*Math.cos(_),Math.sin(_)],p=_=>[-l*Math.sin(_),Math.cos(_)],M=i.leaves[a.idx[0]],b=[(l>0?M.x:M.x+M.w)+l*u,0],R=(_,U,z)=>{if(_===0){let re=m(U);return[b[0]-u*re[0],b[1]-u*re[1]]}let X=i.leaves[a.idx[_-1]].w,P=i.gapI(Math.min(a.idx[_-1],a.idx[_])),L=_%2===1?-n/2:n/2,O=m(z.a),J=p(z.a),H=[z.O[0]+O[0]*(X+P/2)+J[0]*L,z.O[1]+O[1]*(X+P/2)+J[1]*L],q=m(U),ie=p(U);return[H[0]+q[0]*P/2-ie[0]*L,H[1]+q[1]*P/2-ie[1]*L]},w=null,E=(_,U,z)=>{let X={a:U,O:R(_-1,U,z)},P=i.leaves[a.idx[_]].w,L=J=>{let H=R(_,J,X),q=m(J);return H[1]+q[1]*(P-u)},O=-U;for(let J=0;J<50;J++){let H=L(O),q=(L(O+1e-6)-H)/1e-6;if(Math.abs(H)<1e-10||!q)break;O-=H/q}return O},D=null,y=null;for(let _=0;_<o;_++){let U=i.leaves[a.idx[_]].w,z;if(_%2===0&&_===o-1&&o>=3)z=h*e;else if(_%2===0&&_===o-1)z=h;else if(_%2===0){if(z=x(_/2),E(_+1,z,w)>0){let O=z,J=z+1.2;for(let H=0;H<60;H++){let q=(O+J)/2;E(_+1,q,w)>0?O=q:J=q}z=J}D=z,y=w}else z=E(_,D,y);let X=R(_,z,w),P=m(z),L=p(z);s[a.idx[_]]={X:l>0?P:[-P[0],-P[1]],Z:L,C:[X[0]+P[0]*U/2,X[1]+P[1]*U/2]},w={a:z,O:X}}}if(t>0&&i.man){let a=i.leaves[i.man.i],o=Math.max(0,Math.min(1,t))*88*Math.PI/180,l=i.man.hinge!=="R",c=l?1:-1,h=i.man.swing==="in"?-1:1,d=[l?a.x:a.x+a.w,h*n/2],u=[c*Math.cos(o),h*Math.sin(o)],f=[-c*h*Math.sin(o),Math.cos(o)];s[i.man.i]={X:c>0?u:[-u[0],-u[1]],Z:f,C:[d[0]+u[0]*a.w/2-h*f[0]*n/2,d[1]+u[1]*a.w/2-h*f[1]*n/2]}}return{poses:s}}var sn={lib:null,busy:!1,geo:{},pin:.315,inb:.5906,KT:[[0,0],[.7591,0],[.7591,.3354],[.6614,.3354],[.6614,.1969],[.098,.1969],[.098,1.8701],[2.3429,1.8701],[2.3429,.1969],[1.7795,.1969],[1.7795,.3354],[1.6819,.3354],[1.6819,0],[2.4409,0],[2.4409,1.9685],[0,1.9685]]},ku=i=>/(^|[^A-Z0-9])E3([^0-9]|$)|T24|TITLE.?24/i.test(String(i&&(i.track||i.system||i.track_system||i.hw_system)||""));function Y_(){sn.lib||sn.busy||sn.fail||(sn.busy=!0,fetch(Ro+"e3-hardware-1.1.json").then(i=>i.json()).then(i=>{sn.lib=i,sn.busy=!1,G.last&&G.r&&Rc(G.last[0],G.last[1],G.last[2],G.last[3])}).catch(i=>{sn.busy=!1,sn.fail=!0,console.warn("TR3D e3 hardware",i)}))}function q_(i,e,t,n){let s=i+":"+e+":"+(t?1:0)+(n?1:0);if(sn.geo[s]!==void 0)return sn.geo[s];let r=sn.lib&&sn.lib[i]&&sn.lib[i][e];if(!r)return sn.geo[s]=null;let a=g=>Uint8Array.from(atob(g),x=>x.charCodeAt(0)).buffer,o=new Int16Array(a(r.v)),l=new Uint16Array(a(r.f)),c=new Float32Array(o.length),h=(t?-1:1)*(n?-1:1),d=n?-1:1;for(let g=0;g<o.length;g+=3)c[g]=o[g]/2e3*h,c[g+1]=o[g+1]/2e3,c[g+2]=o[g+2]/2e3*d;let u=new Uint16Array(l.length);if(t)for(let g=0;g<l.length;g+=3)u[g]=l[g],u[g+1]=l[g+2],u[g+2]=l[g+1];else u.set(l);let f=new $t;return f.setAttribute("position",new qt(c,3)),f.setIndex(new qt(u,1)),f=zu(f,.7),sn.geo[s]=f}function Z_(i,e){let t=i.t,n=t/2+sn.pin,s=sn.inb,r=new Array(i.n);e=Math.max(0,Math.min(1,e));let a=[];i.Lq>0&&a.push({dir:1,idx:[...Array(i.Lq).keys()]}),i.Rq>0&&a.push({dir:-1,idx:[...Array(i.Rq).keys()].map(o=>i.n-1-o)});for(let o of a){let l=o.idx.length,c=o.dir,h=88*Math.PI/180*e,d=x=>[c*Math.cos(x),Math.sin(x)],u=x=>[-c*Math.sin(x),Math.cos(x)],f=i.leaves[o.idx[0]],g=[(c>0?f.x:f.x+f.w)+c*s,n];for(let x=0;x<l;x+=2){let m=o.idx[x],p=i.leaves[m].w,M=d(h),v=u(h),b=x?i.gapI(Math.min(o.idx[x-1],m)):0,R=x===0?[g[0]-s*M[0]-n*v[0],g[1]-s*M[1]-n*v[1]]:[g[0]+b/2*M[0]-n*v[0],g[1]+b/2*M[1]-n*v[1]];if(r[m]={X:c>0?M:[-M[0],-M[1]],Z:v,C:[R[0]+M[0]*p/2,R[1]+M[1]*p/2]},x===l-1)break;let w=o.idx[x+1],E=i.leaves[w].w,D=i.gapI(Math.min(m,w)),y=[R[0]+M[0]*(p+D/2)-v[0]*n,R[1]+M[1]*(p+D/2)-v[1]*n],_=x+1===l-1?E-s:E+i.gapI(Math.min(w,o.idx[x+2]))/2,U=D/2+_,z=-h;for(let O=0;O<40;O++){let J=y[1]+U*Math.sin(z)+2*n*Math.cos(z)-n,H=U*Math.cos(z)-2*n*Math.sin(z);if(Math.abs(J)<1e-10||!H)break;z-=J/H}let X=d(z),P=u(z),L=[y[0]+X[0]*D/2+P[0]*n,y[1]+X[1]*D/2+P[1]*n];r[w]={X:c>0?X:[-X[0],-X[1]],Z:P,C:[L[0]+X[0]*E/2,L[1]+X[1]*E/2]},g=[L[0]+X[0]*_+P[0]*n,L[1]+X[1]*_+P[1]*n]}}return{poses:r}}var Ce={tex:{},mats:{},loader:null,env:null,onload:null},_i=.4;function Li(i,e){if(Ce.tex[i])return Ce.tex[i];let t=(Ce.loader||(Ce.loader=new Ka)).load(i,()=>{Ce.onload&&Ce.onload()});return t.wrapS=t.wrapT=Fn,t.anisotropy=8,e&&(t.colorSpace=Jt),Ce.tex[i]=t}var Qn=i=>new _t(/^#/.test(String(i||""))?i:"#cccccc");function j_(i){return i&&V_.includes(i.k)?i.k:null}function Vu(i,e){let t="w:"+i+":"+(e||"");if(Ce.mats[t])return Ce.mats[t];let n=Ro+"skins/"+i,s=new Ii({map:Li(n+"_c.jpg",!0),normalMap:Li(n+"_n.jpg"),roughnessMap:Li(n+"_orm.jpg"),aoMap:Li(n+"_orm.jpg"),aoMapIntensity:.9,roughness:1,metalness:0,normalScale:new ue(.6,.6),clearcoat:i==="shousugi"?0:.07,clearcoatRoughness:.6,envMapIntensity:_i,vertexColors:!0,emissive:16777215,emissiveMap:Li(n+"_c.jpg",!0),emissiveIntensity:i==="patina"?.05:.13});if(i==="patina"){s.metalnessMap=Li(n+"_orm.jpg"),s.metalness=1,s.clearcoat=0,s.normalScale.set(.5,.5),s.aoMapIntensity=0,Li(n+"_c.jpg",!0).repeat.set(.12,.12);for(let r of["_n.jpg","_orm.jpg"])Li(n+r).repeat.set(.4,.4)}return s.color=e?Qn(e):new _t(i==="whitewash"||i==="birch"||i==="greywash"?14474460:14869218),s.emissive.copy(s.color),Ce.mats[t]=s}function Wr(i,e){let t="p:"+i+":"+(e||"");if(Ce.mats[t])return Ce.mats[t];let n=Qn(i);if(e==="metal"){let r=K_("metalstreak",512,(o,l)=>{o.fillStyle="#8c8c8c",o.fillRect(0,0,l,l);let c=ci(4411);for(let h=0;h<5200;h++){let d=c()*l,u=c()*l,f=30+c()*300,g=c()<.5?255:0;o.fillStyle="rgba("+g+","+g+","+g+","+(.03+c()*.07)+")",o.fillRect(d,u,.6+c()*1.1,f),u+f>l&&o.fillRect(d,u-l,.6+c()*1.1,f)}for(let h=0;h<26;h++){let d=c()*l,u=c()*l,f=40+c()*120,g=o.createRadialGradient(d,u,0,d,u,f),x=c()<.5?255:0;g.addColorStop(0,"rgba("+x+","+x+","+x+",0.07)"),g.addColorStop(1,"rgba("+x+","+x+","+x+",0)"),o.fillStyle=g,o.fillRect(d-f,u-f,2*f,2*f)}},1);r.colorSpace=Nn;let a=new Ii({color:n,roughness:.74,roughnessMap:r,metalness:.22,bumpMap:r,bumpScale:.3,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.6});return Ce.mats[t]=a}let s=new Ii({color:n,roughness:e==="metal"?.38:.6,metalness:e==="metal"?.75:0,normalMap:e==="metal"?null:Li(Ro+"skins/birch_n.jpg"),normalScale:new ue(.16,.16),clearcoat:e==="metal"?.3:0,clearcoatRoughness:.5,envMapIntensity:e==="metal"?1:.2,emissive:e==="metal"?0:n,emissiveIntensity:e==="metal"?0:.34*(1-Math.min(1,.2126*n.r+.7152*n.g+.0722*n.b))});return Ce.mats[t]=s}function Gr(i,e){if(!i)return Wr("#cccccc");let t=j_(i);return t?Vu(t):i.type==="stain"?Vu("birch",i.hex):Wr(i.hex,e)}function J_(i){if(Ce.glassEnv)return Ce.glassEnv;let e=2048,t=1024,n=512,s=rr(n,901,5,4),r=rr(n,902,5,16),a=rr(n,903,4,64),o=new Float32Array(e*t*4),l=(u,f,g)=>u[(Math.floor(g*n)%n+n)%n*n+(Math.floor(f*n)%n+n)%n],c=(u,f,g)=>u+(f-u)*g,h=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u));for(let u=0;u<t;u++){let f=(u/(t-1)-.5)*180;for(let g=0;g<e;g++){let x=g/e,m=4*(u*e+g),p,M,v,b=.4+4.4*l(s,x*3,.37)+2.2*l(r,x*7,.11)+.9*l(a,x*9,.73),R=.8+2.4*l(s,x*2+.3,.81);if(f<0){let w=h((-f-.6)/3.2),E=.9+.2*l(a,x*6,-f/40);p=c(.1,.5,w)*E,M=c(.2,.49,w)*E,v=c(.08,.46,w)*E}else{let w=h(f/55),E=h((l(s,x*2+f/140,f/75+.2)*.62+l(r,x*4,f/34)*.38-.5)/.16)*h(f/5)*(1-h((f-48)/30));if(p=c(1.55,.36,w),M=c(1.75,.66,w),v=c(1.95,1.3,w),p=c(p,2.5,E*.85),M=c(M,2.5,E*.85),v=c(v,2.55,E*.85),f<R){let y=.55+.25*l(r,x*5,.4);p=c(p,.34*y,.85),M=c(M,.43*y,.85),v=c(v,.52*y,.85)}let D=b-f;if(D>0&&!(D<.9&&l(a,x*34,f/4)>.58)){let y=h(1-D/2.5)*.6+.4*l(a,x*22,f/5),_=.55+.9*l(r,x*14,f/9);p=(.03+.07*y)*_,M=(.065+.13*y)*_,v=(.03+.04*y)*_}}o[m]=p,o[m+1]=M,o[m+2]=v,o[m+3]=1}}let d=new Pi(o,e,t,Ln,On);d.mapping=rs,d.colorSpace=Wn,d.magFilter=d.minFilter=cn,d.needsUpdate=!0;try{Ce.glassEnv=i.fromEquirectangular(d).texture}catch{Ce.glassEnv=null}return d.dispose(),Ce.glassEnv}function bc(){return Ce.frost?Ce.mats.glassF||(Ce.mats.glassF=new Ii({color:12569544,roughness:.62,metalness:0,transmission:.55,thickness:.6,ior:1.52,specularIntensity:.6,clearcoat:.25,clearcoatRoughness:.6,envMapIntensity:.9,side:Tn})):Ce.mats.glass||(Ce.mats.glass=new Ii({color:10135715,roughness:.015,metalness:0,transmission:1,thickness:.6,ior:1.52,attenuationColor:new _t(8364181),attenuationDistance:4,specularIntensity:1,specularColor:new _t(16777215),clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.2,side:Tn}))}var yc={nickel:{c:"#c2c0b8",m:1,r:.3},black:{c:"#1a1a1b",m:.55,r:.48},orb:{c:"#3b2a1f",m:.85,r:.42}};function $_(i){let e=yc[i]||yc.nickel,t="h:"+(yc[i]?i:"nickel");return Ce.mats[t]||(Ce.mats[t]=new Zt({color:Qn(e.c),metalness:e.m,roughness:e.r}))}function ir(i,e){let t="f:"+i+e;return Ce.mats[t]||(Ce.mats[t]=new Zt({color:Qn(i),roughness:e??.9,metalness:0,envMapIntensity:_i}))}function K_(i,e,t,n){if(Ce.tex[i])return Ce.tex[i];let s=document.createElement("canvas");s.width=s.height=e,t(s.getContext("2d"),e);let r=new Xi(s);return r.wrapS=r.wrapT=Fn,r.repeat.set(n,n),r.colorSpace=Jt,r.anisotropy=8,Ce.tex[i]=r}function rr(i,e,t,n){let s=new Float32Array(i*i),r=1,a=0;for(let o=0;o<t;o++){let l=n<<o,c=ci(e+o*101),h=new Float32Array(l*l);for(let d=0;d<h.length;d++)h[d]=c();for(let d=0;d<i;d++){let u=d/i*l,f=Math.floor(u),g=u-f,x=g*g*(3-2*g);for(let m=0;m<i;m++){let p=m/i*l,M=Math.floor(p),v=p-M,b=v*v*(3-2*v),R=(M+1)%l,w=(f+1)%l,E=h[f*l+M],D=h[f*l+R],y=h[w*l+M],_=h[w*l+R];s[d*i+m]+=r*(E+(D-E)*b+(y-E)*x+(E-D-y+_)*b*x)}}a+=r,r*=.55}for(let o=0;o<s.length;o++)s[o]/=a;return s}function Sc(i,e,t){if(Ce.tex[i])return Ce.tex[i];let n=rr(e,t.seed,4,3),s=rr(e,t.seed+7,4,24),r=rr(e,t.seed+13,2,e>>1),a=new Float32Array(e*e),o=document.createElement("canvas");o.width=o.height=e;let l=o.getContext("2d"),c=l.createImageData(e,e),h=c.data,d=Qn(t.color).convertLinearToSRGB(),u=(t.pal||[]).map(v=>Qn(v).convertLinearToSRGB());for(let v=0;v<e*e;v++){let b=v%e,R=v/e|0,w=null,E=s[v]*t.mid+r[v]*t.fine,D=1+(n[v]-.5)*t.tone+(r[v]-.5)*t.grit;if(t.rows){let _=Math.floor(R/t.rows),U=R%t.rows,z=Math.sin(_*78.233+t.seed)*43758.5453,X=t.align?0:t.jit?Math.floor((z-Math.floor(z))*t.tab):_%2*t.tab/2,P=Math.floor((b+X)/t.tab),L=(b+X)%t.tab,O=Math.sin(_*127.1+P*311.7+t.seed)*43758.5453,J=O-Math.floor(O);if(D*=t.even?.96+J*.08:u.length?.9+J*.16:.78+J*.4,u.length){let H=Math.sin(_*53.3+P*91.1+t.seed)*24634.6345;w=u[Math.floor((H-Math.floor(H))*u.length)]}(U<2||L<1&&!t.even)&&(D*=.45,E-=.6),E+=U/t.rows*.5}if(t.joint&&(b%t.joint<(t.jw||2)||R%t.joint<(t.jw||2))&&(D*=.55,E-=.8),t.herr){let _=t.herr,U=Math.floor(b/_),z=Math.floor(R/_),X=((U-z)%4+4)%4,P=b%_,L=R%_,O=t.jw||2,J=P<O,H=P>=_-O,q=L<O,ie=L>=_-O,re=X===0?J||q||ie:X===1?H||q||ie:X===3?J||H||q:J||H||ie,pe=X===1?U-1:U,K=X===2?z-1:z,le=Math.sin(pe*127.1+K*311.7+(X<2?0:57)+t.seed)*43758.5453,Pe=le-Math.floor(le);if(u.length){let Xe=Math.sin(pe*53.3+K*91.1+(X<2?0:17)+t.seed)*24634.6345;w=u[Math.floor((Xe-Math.floor(Xe))*u.length)]}re?(D*=.5,E-=1.2):D*=(u.length?.9:.84)+Pe*(u.length?.16:.28)}if(t.mix){let _=t.mix,U=3*_,z=Math.floor(R/_),X=z%2*U/2,P=(b+X)%U,L=R%_,O=P<2*_,J=O?P:P-2*_,H=t.jw||3,q=Math.floor((b+X)/U)*2+(O?0:1),ie=Math.sin(z*127.1+q*311.7+t.seed)*43758.5453,re=ie-Math.floor(ie),pe=Math.sin(z*53.3+q*91.1+t.seed)*24634.6345;u.length&&(w=u[Math.floor((pe-Math.floor(pe))*u.length)]),J<H||L<H?(D*=.55,E-=1.1):D*=.95+re*.1}if(t.slab){let _=t.jw||5,U=Math.floor(R/t.slab[1]),z=U%2*t.slab[0]/2,X=(b+z)%t.slab[0],P=R%t.slab[1],L=Math.sin(U*91.7+Math.floor((b+z)/t.slab[0])*37.3+t.seed)*43758.5453,O=L-Math.floor(L);X<_||P<_?(D*=.42,E-=1.4):D*=.93+O*.12}if(t.cells){let _=t.cells,U=e/_,z=Math.floor(b/U),X=Math.floor(R/U),P=1e9,L=1e9,O=0;for(let J=-1;J<=1;J++)for(let H=-1;H<=1;H++){let q=(z+J+_)%_,ie=(X+H+_)%_,re=Math.sin(q*127.1+ie*311.7+t.seed)*43758.5453,pe=Math.sin(q*269.5+ie*183.3+t.seed)*43758.5453,K=(z+J+.15+.7*(re-Math.floor(re)))*U,le=(X+H+.15+.7*(pe-Math.floor(pe)))*U,Pe=Math.hypot(K-b,le-R);Pe<P?(L=P,P=Pe,O=q*31+ie):Pe<L&&(L=Pe)}if(L-P<(t.jw||5))D*=.58,E-=1.4;else{let J=Math.sin(O*12.9898+t.seed)*43758.5453,H=J-Math.floor(J);D*=.82+H*.3,E+=H*.5}}if(t.seam){let _=b%t.seam,U=t.seamW||3;_<U?(E+=1.6,D*=1.06):_<U+5&&(D*=.72,E-=.4)}if(t.barrel){let _=b%t.barrel/t.barrel,U=Math.sin(_*Math.PI);if(E+=U*(t.barrelK||1.8),D*=t.deep?.5+Math.pow(U,.7)*.62:.82+U*.3,t.deep){let z=(R+Math.round(U*14))%t.rows;z<7?(D*=.5,E-=1.5):z>t.rows-10&&(D*=1.08,E+=.8)}}let y=w||d;a[v]=E,h[v*4]=Math.min(255,y.r*255*D),h[v*4+1]=Math.min(255,y.g*255*D),h[v*4+2]=Math.min(255,y.b*255*D),h[v*4+3]=255}l.putImageData(c,0,0);let f=document.createElement("canvas");f.width=f.height=e;let g=f.getContext("2d"),x=g.createImageData(e,e),m=x.data,p=t.bump;for(let v=0;v<e;v++)for(let b=0;b<e;b++){let R=v*e+b,w=(a[v*e+(b+1)%e]-a[v*e+(b+e-1)%e])*p,E=(a[(v+1)%e*e+b]-a[(v+e-1)%e*e+b])*p,D=Math.hypot(w,E,1);m[R*4]=(-w/D*.5+.5)*255,m[R*4+1]=(E/D*.5+.5)*255,m[R*4+2]=(1/D*.5+.5)*255,m[R*4+3]=255}g.putImageData(x,0,0);let M=(v,b)=>{let R=new Xi(v);return R.wrapS=R.wrapT=Fn,R.anisotropy=8,b&&(R.colorSpace=Jt),R};return Ce.tex[i]={map:M(o,!0),normalMap:M(f,!1)}}function nn(i,e,t){if(Ce.mats[i])return Ce.mats[i];let n=Sc(i,e.n||512,e);return Ce.mats[i]=new Zt({map:n.map,normalMap:n.normalMap,roughness:t,metalness:0,envMapIntensity:_i})}function ci(i){let e=i>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Un(i,e,t,n){let s=i.index?i.toNonIndexed():i;s.computeVertexNormals();let r=s.attributes.position,a=s.attributes.normal,o=new Float32Array(r.count*2),l=ci(t),c=l(),h=l();for(let g=0;g<r.count;g+=3){let x=Math.abs(a.getX(g)+a.getX(g+1)+a.getX(g+2)),m=Math.abs(a.getY(g)+a.getY(g+1)+a.getY(g+2)),p=Math.abs(a.getZ(g)+a.getZ(g+1)+a.getZ(g+2)),M=x>=m&&x>=p?0:m>=p?1:2;for(let v=0;v<3;v++){let b=[r.getX(g+v),r.getY(g+v),r.getZ(g+v)],R,w,E=e==="x"?0:e==="y"?1:2;if(M===E){let D=[0,1,2].filter(y=>y!==M);R=b[D[0]]*3,w=b[D[1]]*3}else{let D=[0,1,2].find(y=>y!==M&&y!==E);R=b[D],w=b[E]}o[(g+v)*2]=R/Hu+c,o[(g+v)*2+1]=w/Hu+h}}s.setAttribute("uv",new qt(o,2));let d=1+(l()-.5)*2*(n||0),u=(l()-.5)*(n||0)*.5,f=new Float32Array(r.count*3);for(let g=0;g<r.count;g++)f[3*g]=d*(1+u),f[3*g+1]=d,f[3*g+2]=d*(1-u);return s.setAttribute("color",new qt(f,3)),s}function Gu(i,e,t){let n=new bn(i.map(r=>new ue(r[0],r[1])));for(let r of e||[])n.holes.push(new js(r.map(a=>new ue(a[0],a[1]))));let s=new zn(n,{depth:Math.abs(t),bevelEnabled:!1,curveSegments:1});return s.translate(0,0,-Math.abs(t)),s}function Q_(i){let e=new Map;for(let t of i.children.slice()){if(!t.isMesh)continue;let n=t.material.uuid+(t.castShadow?"s":"n");(e.get(n)||e.set(n,[]).get(n)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=null;try{n=kr(t.map(r=>r.geometry),!1)}catch{n=null}if(!n)continue;let s=new Ze(n,t[0].material);s.castShadow=t[0].castShadow,s.receiveShadow=t[0].receiveShadow,s.name="parts";for(let r of t)i.remove(r),r.geometry.dispose();i.add(s)}}function bo(i,e,t){let n=i[0],s=i[1],r=i[i.length-1],a=e.xc,o=e.t,l=null,c="y";if(n==="box"){let[,,u,f,g,x,m,p]=i;if(!(x>0&&m>0&&p>0))return null;let M=r==="glassm"||/Backer|groove|opening/i.test(s)||Math.min(x,p,m)<.35?0:Math.min(.055,Math.min(x,p,m)*.18);l=M?new Mo(x,p,m,1,M).toNonIndexed():new fn(x,p,m),l.translate(u+x/2-a,g+p/2,o/2-(f+m/2)),c=/Panel|Slab|field|frame|plank|Glass|sash/i.test(s)?x>p*2.5?"x":"y":x>p?"x":"y",/plank|slat|board|Board/i.test(s)&&(c=x>p?"x":"y")}else if(n==="slabh"){let[,,u,f,g,x,m,p,M]=i;if(!(x>0&&m>0&&p>0))return null;let v=(M||[]).filter(R=>R&&R.length>=3),b=v.map(R=>{let w=R.map(y=>y[0]),E=R.map(y=>y[1]),D=[Math.max(0,Math.min(...w)),Math.min(x,Math.max(...w)),Math.max(0,Math.min(...E)),Math.min(p,Math.max(...E))];return R.length===4&&R.every(y=>(Math.abs(y[0]-Math.min(...w))<1e-4||Math.abs(y[0]-Math.max(...w))<1e-4)&&(Math.abs(y[1]-Math.min(...E))<1e-4||Math.abs(y[1]-Math.max(...E))<1e-4))?D:null});if(v.length&&b.every(Boolean)){let R=[...new Set([0,x,...b.flatMap(y=>[y[0],y[1]])])].sort((y,_)=>y-_),w=[],E=[],D=[];for(let y=0;y+1<R.length;y++){let _=R[y],U=R[y+1];if(U-_<1e-4)continue;let z=0,X=b.filter(L=>L[0]<U-1e-4&&L[1]>_+1e-4).map(L=>[L[2],L[3]]).sort((L,O)=>L[0]-O[0]),P=[];for(let L of X)L[0]-z>.001&&P.push([z,L[0]]),z=Math.max(z,L[1]);p-z>.001&&P.push([z,p]);for(let L of P){let O=new fn(U-_,L[1]-L[0],m).toNonIndexed();O.translate((_+U)/2,(L[0]+L[1])/2,-m/2),w.push(...O.attributes.position.array),E.push(...O.attributes.normal.array),D.push(...O.attributes.uv.array),O.dispose()}}if(!w.length)return null;l=new $t,l.setAttribute("position",new Ct(w,3)),l.setAttribute("normal",new Ct(E,3)),l.setAttribute("uv",new Ct(D,2))}else l=Gu([[0,0],[x,0],[x,p],[0,p]],v,m);l.translate(u-a,g,o/2-f),c=/board|slat|Board/i.test(s)&&x>p?"x":"y"}else if(n==="poly"){let[,,u,f,g]=i;if(!g||g.length<3)return null;l=Gu(g,null,f),l.translate(-a,0,o/2-u);let x=1e9,m=-1e9,p=1e9,M=-1e9;for(let v of g)x=Math.min(x,v[0]),m=Math.max(m,v[0]),p=Math.min(p,v[1]),M=Math.max(M,v[1]);c=m-x>M-p?"x":"y"}else if(n==="prismx"){let[,,u,f,g]=i;if(!g||g.length<3)return null;let x=new bn(g.map(m=>new ue(o/2-m[0],m[1])));l=new zn(x,{depth:Math.abs(f),bevelEnabled:!1,curveSegments:1}),l.rotateY(-Math.PI/2),l.translate(u-a+Math.abs(f),0,0),c="x"}else if(n==="prismz"){let[,,u,f,g]=i;if(!g||g.length<3)return null;let x=new bn(g.map(m=>new ue(m[0]-a,-(o/2-m[1]))));l=new zn(x,{depth:Math.abs(f),bevelEnabled:!1,curveSegments:1}),l.rotateX(-Math.PI/2),l.translate(0,u,0),c="y"}if(!l)return null;if(r==="glassm"){let u=null;if(n==="box"){let[,,f,g,x,m,p,M]=i;u=[f-a,f-a+m,x,x+M,o/2-g,o/2-g-p]}else if(n==="poly"){let[,,f,g,x]=i,m=x.map(w=>w[0]),p=x.map(w=>w[1]),M=Math.min(...m),v=Math.max(...m),b=Math.min(...p),R=Math.max(...p);x.length===4&&x.every(w=>(Math.abs(w[0]-M)<1e-4||Math.abs(w[0]-v)<1e-4)&&(Math.abs(w[1]-b)<1e-4||Math.abs(w[1]-R)<1e-4))&&(u=[M-a,v-a,b,R,o/2-f,o/2-f-g])}if(u){let f=ci(t*7+13),g=(.006+f()*.008)*(f()<.7?1:-1),x=(f()-.5)*.007,m=(f()-.5)*.007,p=8,M=[],v=[],b=(u[3]-u[2])/Math.max(1e-6,u[1]-u[0]),R=(y,_,U,z)=>{M.push(u[0]+(u[1]-u[0])*y,u[2]+(u[3]-u[2])*_,U);let X=g*(y-.5)*2*Math.min(1,1/b)+x,P=g*(_-.5)*2*Math.min(1,b)+m,L=Math.hypot(X,P,1);v.push(z*X/L,z*P/L,z/L)};for(let[y,_]of[[u[4],1],[u[5],-1]])for(let U=0;U<p;U++)for(let z=0;z<p;z++){let X=z/p,P=(z+1)/p,L=U/p,O=(U+1)/p;_>0?(R(X,L,y,_),R(P,L,y,_),R(P,O,y,_),R(X,L,y,_),R(P,O,y,_),R(X,O,y,_)):(R(X,L,y,_),R(P,O,y,_),R(P,L,y,_),R(X,L,y,_),R(X,O,y,_),R(P,O,y,_))}l.dispose();let w=new $t,E=M.length/3;w.setAttribute("position",new Ct(M,3)),w.setAttribute("normal",new Ct(v,3)),w.setAttribute("uv",new qt(new Float32Array(E*2),2)),w.setAttribute("color",new qt(new Float32Array(E*3).fill(1),3));let D=new Ze(w,bc());return D.name=s,D.castShadow=!1,D.receiveShadow=!1,D}}let h;r==="glassm"?h=bc():r==="dark"?h=/groove/i.test(s)?e.groove:e.hw:r==="cladm"?h=e.clad:h=e.fin;let d=new Ze(Un(l,c,t,/slat|board|plank|blade|louvre|Batten/i.test(s)?.13:/buck|Panel|Slab/i.test(s)?.06:.04),h);return d.name=s,r==="glassm"?(d.castShadow=!1,d.receiveShadow=!1):(d.castShadow=!0,d.receiveShadow=!0),d}var Eo=[["concrete","Concrete"],["pavers","Pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"]],wo=[["lawn","Lawn"],["blue","Kentucky bluegrass \xB7 blades"],["gravel","Gravel"],["dg","Decomposed granite"],["mpavers","Modern pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"],["flag","Natural flagstone"],["planters","Stone \xB7 raised planters"]],Ec=[["grey","Grey"],["rust","Warm earthtones"]],Mc=["#8a7364","#93806f","#7e695b","#9a8573","#866e5e","#907a67","#7b6354"],To=[["none","One opening"],["single","+ a single"],["double","+ a double"],["same","+ the same again"]],Wu={single:108,double:192},wc=[["lantern","Lantern"],["barrel","Barrel \xB7 up and down"]],ar=[["gable","Gable \xB7 stucco",{wall:"stucco",form:"side",roof:"shingle",pitch:5}],["craftsman","Front gable \xB7 lap siding",{wall:"lap",form:"front",roof:"shingle",pitch:6}],["hip","Hip roof \xB7 brick",{wall:"brick",form:"hip",roof:"shingle",pitch:5}],["modern","Flat roof \xB7 canopy on columns",{wall:"dark",form:"flat",roof:"flat",pitch:5}],["flat8","Flat roof \xB7 8 in soffit",{wall:"stucco",form:"flat8",roof:"flat",pitch:5}],["farm","Farmhouse \xB7 board and batten",{wall:"bb",form:"front",roof:"metal",pitch:8}],["spanish","Spanish \xB7 clay tile",{wall:"cream",form:"hip",roof:"tile",pitch:4}]],Zu=i=>(ar.find(e=>e[0]===i)||ar[0])[2],Xu={stucco:{seed:5,color:"#d9d5cb",mid:.7,fine:1,tone:.07,grit:.12,bump:3.2},lap:{seed:15,color:"#a9b0a8",mid:.3,fine:.6,tone:.04,grit:.07,bump:5,rows:128,tab:8192,even:1},brick:{seed:17,color:"#6a473e",mid:.5,fine:1,tone:.08,grit:.25,bump:6,rows:43,tab:128},dark:{seed:19,color:"#4b4e51",mid:.4,fine:.6,tone:.04,grit:.08,bump:1.6},bb:{seed:23,color:"#e6e3da",mid:.2,fine:.5,tone:.03,grit:.06,bump:5,seam:256,seamW:40},cream:{seed:27,color:"#e7dfcd",mid:.9,fine:1,tone:.08,grit:.12,bump:4.5}},Ao=[["shingle","Shingle"],["tile","Clay tile"],["spanish","Spanish tile"],["shake","Cedar shake"],["metal","Standing seam"],["flat","Flat"]],Tc=[3,4,5,6,8,10],Oe=(()=>{let i={};try{i=JSON.parse(localStorage.getItem("tr3d.setting")||"{}")||{}}catch{}return{roof:Ao.some(e=>e[0]===i.roof)?i.roof:"shingle",pitch:Tc.includes(+i.pitch)?+i.pitch:5,eave:i.eave==="deep"?"deep":"short",drive:Eo.some(e=>e[0]===i.drive)?i.drive:"concrete",ground:wo.some(e=>e[0]===i.ground)?i.ground:"blue",structure:ar.some(e=>e[0]===i.structure)?i.structure:"gable",light:i.light==="barrel"?"barrel":"lantern",paver:i.paver==="rust"?"rust":"grey",second:To.some(e=>e[0]===i.second)?i.second:"none",garage:i.garage==="light"?"light":"warm",land:i.land==="rolling"||i.land==="flat"?i.land:"auto"}})();function ju(i){if(i=i||{},i.structure&&i.roof==null){let e=Zu(i.structure);i=Object.assign({roof:e.roof,pitch:e.pitch},i)}Object.assign(Oe,i),(i.structure||G.panelLabel&&(i.roof||i.drive||i.ground))&&G.panel&&G.el&&(G.panel.remove(),Ac(G.el));try{localStorage.setItem("tr3d.setting",JSON.stringify(Oe))}catch{}return G.last&&Rc.apply(null,G.last),Cn}function Ju(){let i=G.panelHost;return!!(i&&i.offsetParent!==null&&i.clientWidth>150)}function Ac(i){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=document.createElement("div");e.style.cssText="position:absolute;left:8px;top:8px;right:8px;display:flex;flex-wrap:wrap;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2;opacity:.9";let t=(n,s,r)=>{let a=document.createElement("label");a.style.cssText="pointer-events:auto;display:flex;align-items:center;gap:4px;background:rgba(20,20,20,.62);color:#eee;padding:3px 6px",a.append(r);let o=document.createElement("select");o.style.cssText="font:inherit;background:transparent;color:inherit;border:0;outline:0";for(let[l,c]of s){let h=document.createElement("option");h.value=l,h.textContent=c,h.style.color="#111",String(Oe[n])===String(l)&&(h.selected=!0),o.append(h)}return o.onchange=()=>ju({[n]:n==="pitch"?+o.value:o.value}),a.append(o),(t.to||e).append(a),a};if(!G.panelLabel)t("second",To,"Openings"),t("garage",[["warm","Warm white"],["light","Light"]],"Garage"),t("structure",ar.map(n=>[n[0],n[1]]),"Structure"),t("roof",Ao,"Roof"),t("pitch",Tc.map(n=>[n,n+":12"]),"Slope"),t("eave",[["short","Short"],["deep","Deep"]],"Eave"),t("drive",Eo,"Drive"),t("ground",wo,"Ground"),t("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),t("paver",Ec,"Paver colour"),t("light",wc,"Lights");else{e.style.cssText="position:absolute;left:8px;top:8px;width:min(262px,calc(100% - 16px));max-height:calc(100% - 16px);display:flex;flex-direction:column;align-items:flex-start;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2";let n=document.createElement("button");n.type="button",n.style.cssText="pointer-events:auto;cursor:pointer;background:rgba(18,18,18,.74);color:#f3efe6;border:1px solid rgba(243,239,230,.55);padding:9px 16px;font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase";let s=document.createElement("div");s.style.cssText="pointer-events:auto;align-self:stretch;overflow:auto;background:rgba(18,18,18,.8);border:1px solid rgba(243,239,230,.22);padding:4px 10px 10px";let r=c=>{let h=document.createElement("div");h.textContent=c,h.style.cssText="margin:10px 0 3px;font:600 9.5px/1 system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#b9b2a3",s.append(h)},a=(c,h,d)=>{t.to=s;let u=t(c,h,d);t.to=null,u.style.cssText="display:grid;grid-template-columns:76px 1fr;align-items:center;gap:6px;color:#eee;padding:2px 0;border-top:1px solid rgba(243,239,230,.1)",u.lastChild.style.cssText+=";width:100%;min-width:0;text-overflow:ellipsis;padding:0;margin:0;height:22px;min-height:0"},o=c=>/pavers|herr|mix/.test(String(c||""));if(r("House"),a("structure",ar.map(c=>[c[0],c[1]]),"Structure"),a("roof",Ao,"Roof"),Oe.roof!=="flat"&&(a("pitch",Tc.map(c=>[c,c+":12"]),"Slope"),a("eave",[["short","Short"],["deep","Deep"]],"Eave")),a("second",To,"Openings"),r("Ground"),a("drive",Eo,"Driveway"),a("ground",wo,"Ground"),(o(Oe.drive)||o(Oe.ground))&&a("paver",Ec,"Paver colour"),a("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),r("Light"),a("light",wc,"Lights"),a("garage",[["warm","Warm white"],["light","Light"]],"Garage"),G.panelSide=Ju(),G.panelSide){e.style.cssText="display:flex;flex-direction:column;gap:8px;font:11px/1.2 system-ui,sans-serif";let c=document.createElement("div");c.textContent=G.panelLabel,c.style.cssText="font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#f3efe6;padding:2px 0 4px",s.style.cssText="border:1px solid rgba(243,239,230,.22);padding:4px 12px 12px",e.append(c,s),G.panelHost.appendChild(e),G.panel=e;return}let l=()=>{s.style.display=G.panelOpen?"block":"none",n.textContent=G.panelLabel+(G.panelOpen?"  \xD7":"")};n.onclick=()=>{G.panelOpen=!G.panelOpen,l()},e.append(n,s),l()}i.appendChild(e),G.panel=e}var G={el:null,r:null,scene:null,cam:null,ctl:null,unit:null,leaves:[],L:null,f:0,m:0,raf:0,dirty:!1,ready:!1,key:"",sun:null,anim:null,fit:200,H:96};function hi(){G.dirty=!0,G.raf||(G.raf=requestAnimationFrame($u))}function $u(){if(G.raf=0,!G.r)return;let i=G.ctl.update();G.anim&&G.anim(),(G.dirty||i)&&(G.dirty=!1,Ku()),(G.anim||i)&&(G.raf=requestAnimationFrame($u))}function Ku(){let i=performance.now();if(G.fx)try{G.fx.render()}catch{G.fx=null,G.r.render(G.scene,G.cam)}else G.r.render(G.scene,G.cam);performance.now()-i>160&&(G.slow=(G.slow||0)+1,G.slow===2&&G.r.getPixelRatio()>1?(G.r.setPixelRatio(1),G.fx&&G.fx.setPixelRatio(1),So()):G.slow===4&&G.fx&&(G.fx=null,hi()))}function So(){if(!G.r)return;let i=G.el.clientWidth||800,e=G.el.clientHeight||500;G.r.setSize(i,e,!1),G.fx&&G.fx.setSize(i,e),G.cam.aspect=i/e,G.cam.updateProjectionMatrix(),hi()}function ex(i,e){if(G.r&&G.el===i)return Cn;G.r&&Qu(),e=e||{},G.el=i;let t=new wr({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(2,jt.devicePixelRatio||1)),t.outputColorSpace=Jt,t.toneMapping=Ur,t.toneMappingExposure=e.exposure||.68,t.shadowMap.enabled=!0,t.shadowMap.type=ic,t.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;outline:none",t.domElement.setAttribute("data-tr3d",Yu),i.appendChild(t.domElement),G.r=t,G.scene=new Zs;{let r=document.createElement("canvas");r.width=16,r.height=512;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,"#3f74b8"),o.addColorStop(.3,"#6f9fd4"),o.addColorStop(.46,"#b9d2e8"),o.addColorStop(.5,"#dfe7ec"),o.addColorStop(.503,"#c9d3d6"),o.addColorStop(.56,"#7d8672"),o.addColorStop(1,"#6f775f"),a.fillStyle=o,a.fillRect(0,0,16,512);let l=new Xi(r);l.mapping=rs,l.colorSpace=Jt,G.scene.background=l}G.cam=new wn(30,1.6,2,6e3),G.ctl=new ho(G.cam,t.domElement),G.ctl.enableDamping=!0,G.ctl.dampingFactor=.09,G.ctl.enablePan=!1,G.ctl.maxPolarAngle=Math.PI/2-.015,G.ctl.minPolarAngle=.5,G.ctl.addEventListener("change",hi),t.domElement.addEventListener("dblclick",Cc);let n=new Ys(t);G.scene.environment=n.fromScene(new fo,.04).texture;try{let r=J_(n);if(r){let a=bc();a.envMap=r,a.envMapIntensity=2.1,a.needsUpdate=!0}}catch{}new uo().load(Ro+"env/quarry_01_1k.hdr",r=>{r.mapping=rs;let a=n.fromEquirectangular(r).texture;G.scene.environment=a,G.envOk=!0,r.dispose(),hi()},void 0,()=>{});let s=new to(16775406,4.4);if(s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.bias=-2e-4,s.shadow.normalBias=.25,s.shadow.radius=5,G.sun=s,G.scene.add(s),G.scene.add(s.target),G.scene.add(new Qa(14674421,9342088,.55)),Ce.onload=hi,e.ao!==!1)try{let r=t.getPixelRatio(),a=new Rn(8,8,{samples:4,type:Mn}),o=new go(t,a);o.setPixelRatio(r),o.addPass(new _o(G.scene,G.cam));let l=new Hr(G.scene,G.cam,8,8);l.updateGtaoMaterial({radius:7,distanceExponent:1.4,thickness:1.2,scale:1.25,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),l.blendIntensity=1,o.addPass(l),o.addPass(new yo),G.fx=o,G.ao=l}catch{G.fx=null}return jt.ResizeObserver?(G.ro=new ResizeObserver(()=>{So(),G.panel&&G.panelLabel&&G.panelHost&&G.panelSide!==Ju()&&(G.panel.remove(),Ac(G.el))}),G.ro.observe(i)):jt.addEventListener("resize",So),G.panelLabel=e.panelLabel||"",G.panelHost=e.panelHost||null,e.panel!==!1&&Ac(i),So(),Cn}function Qu(){if(G.r){try{G.panel&&G.panel.remove()}catch{}try{G.ro&&G.ro.disconnect()}catch{}cancelAnimationFrame(G.raf),G.raf=0,G.ctl.dispose(),G.r.dispose(),G.r.domElement.parentNode&&G.r.domElement.parentNode.removeChild(G.r.domElement),G.r=null,G.unit=null,G.leaves=[],G.key=""}}function tx(){G.unit&&(G.scene.remove(G.unit),G.unit.traverse(i=>{i.geometry&&i.geometry.dispose()}),G.unit=null,G.leaves=[],G.B=null)}function Rc(i,e,t,n){if(!G.r||!i||!e)return Cn;G.last=[i,e,t,n],Ce.frost=/frost|obscure/i.test(String(i.glass_opts&&[].concat(i.glass_opts).join(" ")||i.situations&&i.situations.glass_special&&i.situations.glass_special.fields&&i.situations.glass_special.fields.glass||""));let s=jt.leafParts;if(typeof s!="function")return Cn;if(e.base==="tbclad"&&!i.clad_look&&(e.clad==="horizontal"||e.clad==="vertical")&&(i=Object.assign({},i,{clad_look:e.clad})),G.curS=i,G.curFam=e,typeof jt.rbFor!="function"&&(jt.rbFor=()=>ku(G.curS)?G_:sr),typeof jt.rlCladDims!="function"){let T=!1;jt.rlCladDims=function(){if(T||!G.curFam||G.curFam.base!=="tbclad"||typeof jt.cladFor!="function")return null;T=!0;try{let I=jt.cladFor(G.curS),V=I&&I.profile;return!V||V.type==="sheet"?null:{fin_w:+V.fin_w||null,fin_t:+V.fin_t||null,cover:+V.cover||null,angle:V.angle}}catch{return null}finally{T=!1}}}if(e.base==="tbclad"&&i.clad_orient&&(e.clad==="horizontal"||e.clad==="vertical")&&typeof jt.cladFor=="function"&&typeof jt.cladLookOf=="function")try{let T=jt.cladLookOf(jt.cladFor(i),i);(T==="horizontal"||T==="vertical")&&(e=Object.assign({},e,{clad:T}))}catch{}G.curFam=e;let r=W_(e),a=r.gaps,o;try{o=s(i,e,t,n)}catch(T){return console.warn("TR3D leafParts",T),Cn}if(!o||!o.leaves||!o.leaves.length)return Cn;tx();let l=11,c=(T,I)=>{let V=I.leaves.length,Y=(+T.width_in||192)-2*(a.shim_side||0),Z=(+T.height_in||96)-(a.shim_top||0),$=e.base==="tb"||e.base==="tbclad",ne=$?r.leaf_tb:r.leaf_rs,ae=typeof jt.cladFor=="function"&&e.base==="tbclad"?(()=>{try{return jt.cladFor(T)}catch{return null}})():null,Me=e.clad||T.clad_look,Se=typeof jt.finBy=="function"&&T.clad_fin?jt.finBy(T.clad_fin):null,xe=Se&&Se.type==="stain"?Se:t,Ue={t:ne,fin:Gr(t),clad:Me==="metal"?Gr(T.clad_fin==="patina"?{k:"patina"}:t,"metal"):Gr(xe),hw:$_(T.hw_finish||T.hw_fin||T.hwfin),groove:ir("#141210",.95),joint:(()=>{let Le=ae&&ae.profile||{};return+Le.reveal>0?+Le.reveal:Le.type==="ship"?.25:Le.type==="tg"?.125:.1875})()},Ae=new Jn,je=/^(\d+)L/.exec(T.split||""),wt=je?Math.min(+je[1],V):String(T.split||"").endsWith("L")?V:0,lt={n:V,Lq:wt,Rq:V-wt,t:ne,jL:a.jamb_l||.375,jR:a.jamb_r||.375,leaves:[],W:Y,gapI:Le=>I.leaves[Le+1]?I.leaves[Le+1].x0-I.leaves[Le].x1:a.door,man:T.mandoor?{i:Math.max(0,Math.min(V-1,(+T.mandoor.door||1)-1)),hinge:T.mandoor.hinge||"L",swing:T.mandoor.swing==="in"?"in":"out"}:null},Ge=ae&&ae.profile&&ae.profile.type==="bb"&&typeof jt.battenOf=="function"?(()=>{try{return jt.battenOf(ae,T)}catch{return null}})():null,ct=typeof jt.cladOrient=="function"&&ae?jt.cladOrient(ae,T)==="V":Me==="vertical",Nt=(()=>{let Le=T.situations&&T.situations.arched_top;if(!Le||!I.leaves.length)return null;let Be=parseFloat(Le.fields&&Le.fields.rise),Ne=I.leaves[0].x0,ut=I.leaves[I.leaves.length-1].x1,rt=(ut-Ne)/2,Ye=Math.min(isFinite(Be)&&Be>0?Be:12,rt*.9),yt=(rt*rt+Ye*Ye)/(2*Ye);return{mid:(Ne+ut)/2,r:yt,cy:I.z_door+I.door_h-yt}})();Ce.archDoor=Nt?{r:Nt.r,cy:Nt.cy}:null;let Kt=(Le,Be,Ne,ut)=>{let rt=Le.uuid+"|"+Be.toFixed(2)+"|"+Ne.toFixed(2)+"|"+ut.toFixed(2),Ye=Ce.arcM||(Ce.arcM=new Map);if(Ye.has(rt))return Ye.get(rt);let yt=Le.clone(),Tt=Le.onBeforeCompile;return yt.onBeforeCompile=(Mt,Vt)=>{Tt&&Tt(Mt,Vt),Mt.uniforms.uArc={value:new F(Be,Ne,ut)},Mt.vertexShader=`varying vec2 vArcP;
`+Mt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vArcP = position.xy;`),Mt.fragmentShader=`varying vec2 vArcP;
uniform vec3 uArc;
`+Mt.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (vArcP.y > uArc.y && distance(vArcP, uArc.xy) > uArc.z) discard;`)},yt.customProgramCacheKey=()=>"arc"+rt,Ye.set(rt,yt),yt},Ot=[];I.leaves.forEach((Le,Be)=>{let Ne=Le.x1-Le.x0,ut=(Le.x0+Le.x1)/2,rt=new Jn;rt.matrixAutoUpdate=!1,Ue.xc=ut;let Ye=Le.parts.find(Re=>/^Awning sash opening/i.test(Re[1])),yt=Le.parts.map(Re=>Ye&&/^Awning sash$/i.test(Re[1])&&Re[0]==="box"?["slabh",Re[1],Re[2],Re[3],Re[4],Re[5],Re[6],Re[7],[[[Ye[2]-Re[2],Ye[4]-Re[4]],[Ye[2]-Re[2]+Ye[5],Ye[4]-Re[4]],[Ye[2]-Re[2]+Ye[5],Ye[4]-Re[4]+Ye[7]],[Ye[2]-Re[2],Ye[4]-Re[4]+Ye[7]]]],Re[Re.length-1]]:Re),Tt=Le.parts.find(Re=>Re[0]==="slabh"&&/^Slab$/.test(Re[1])),Mt=((Tt||[])[8]||[]).map(Re=>({x0:Tt[2]+Math.min(...Re.map(Et=>Et[0])),x1:Tt[2]+Math.max(...Re.map(Et=>Et[0])),z0:Tt[4]+Math.min(...Re.map(Et=>Et[1])),z1:Tt[4]+Math.max(...Re.map(Et=>Et[1]))})),Vt=(Re,Et,et)=>{let Pt=[],bt=Re;for(let zt of et.sort((xt,Bt)=>xt[0]-Bt[0]))zt[0]-bt>.25&&Pt.push([bt,zt[0]]),bt=Math.max(bt,zt[1]);return Et-bt>.25&&Pt.push([bt,Et]),Pt};for(let Re of yt){if(Re[Re.length-1]==="cladm"&&/Clad (board|slat)/i.test(Re[1])&&(Re[0]==="box"||Re[0]==="slabh")){Re=Re.slice();let et=Ue.joint;Re[5]>Re[7]?(Re[4]+=et/2,Re[7]-=et,Re[0]==="slabh"&&(Re[8]=Re[8].map(Pt=>Pt.map(bt=>[bt[0],bt[1]-et/2])))):(Re[2]+=et/2,Re[5]-=et,Re[0]==="slabh"&&(Re[8]=Re[8].map(Pt=>Pt.map(bt=>[bt[0]-et/2,bt[1]]))))}let Et=bo(Re,Ue,l+=7919);if(Et&&rt.add(Et),/^Slab$/.test(Re[1])&&e.base==="tbclad"&&Me!=="metal"){let et=Re.slice();et[1]="Backer groove",et[3]=-.12,et[6]=.12,et[et.length-1]="dark";let Pt=bo(et,Ue,l);Pt&&(Pt.castShadow=!1,rt.add(Pt))}}if(Ge&&Ge.w>0&&Ge.t>0){let Re=ae.profile.fin_t||r.clad_t||.75,Et=Ge.pitch||Ge.w+Ge.gap,et=I.z_door,Pt=I.door_h;if(ct){let bt=Math.max(1,Math.round((Ne-Ge.w)/Et)),zt=(Ne-Ge.w)/bt;for(let xt=0;xt<=bt;xt++){let Bt=Le.x0+xt*zt;for(let Ht of Vt(et,et+Pt,Mt.filter(vt=>vt.x0<Bt+Ge.w&&vt.x1>Bt).map(vt=>[vt.z0,vt.z1]))){let vt=bo(["box","Batten "+(xt+1),Bt,-(Re+Ge.t),Ht[0],Ge.w,Ge.t,Ht[1]-Ht[0],"cladm"],Ue,l+=7919);vt&&rt.add(vt)}}}else{let bt=Math.max(1,Math.round((Pt-Ge.w)/Et)),zt=(Pt-Ge.w)/bt;for(let xt=0;xt<=bt;xt++){let Bt=et+xt*zt;for(let Ht of Vt(Le.x0,Le.x0+Ne,Mt.filter(vt=>vt.z0<Bt+Ge.w&&vt.z1>Bt).map(vt=>[vt.x0,vt.x1]))){let vt=bo(["box","Batten "+(xt+1),Ht[0],-(Re+Ge.t),Bt,Ht[1]-Ht[0],Ge.t,Ge.w,"cladm"],Ue,l+=7919);vt&&rt.add(vt)}}}}if(Q_(rt),Nt){let Re=Nt.mid-ut,Et=Le.x0-ut,et=Le.x1-ut,Pt=Le.parts.find(At=>At[1]==="Top Rail"),bt=Pt?Pt[7]:.6,zt=28,xt=new bn,Bt=Ue.t+.04;for(let At of rt.children)At.isMesh&&(At.material=Kt(At.material,Re,Nt.cy,Nt.r));for(let At=0;At<=zt;At++){let an=Et+(et-Et)*At/zt,un=Nt.cy+Math.sqrt(Math.max(0,Nt.r*Nt.r-(an-Re)*(an-Re)));At?xt.lineTo(an,un):xt.moveTo(an,un)}for(let At=zt;At>=0;At--){let an=Et+(et-Et)*At/zt,un=Nt.r-bt;xt.lineTo(an,Nt.cy+Math.sqrt(Math.max(0,un*un-(an-Re)*(an-Re))))}let Ht=new zn(xt,{depth:Bt,bevelEnabled:!1});Ht.translate(0,0,-Bt/2);let vt=new Ze(Un(Ht.toNonIndexed(),"x",l+=7919,.04),Ue.fin);vt.geometry.computeVertexNormals(),vt.name="Top Rail \xB7 arched",vt.castShadow=vt.receiveShadow=!0,rt.add(vt)}Ae.add(rt),Ot.push(rt),lt.leaves.push({i:Be,x:Le.x0-Y/2,w:Ne})});let Wt=ku(T);Wt&&(lt.e3=!0,Y_());let Xt=new Jn,Ke=Math.max(4.5,ne+2.5),ot=Wt?ne/2+sn.pin+1.7205:ne/2+.75,ft=t&&t.type==="stain"?Gr(t):Wr(t&&t.hex||"#f0ede3"),pt=(Le,Be,Ne,ut,rt,Ye,yt,Tt,Mt)=>{let Vt=new fn(ut,rt,Ye);Vt.translate(Le+ut/2,Be+rt/2,Ne-Ye/2);let Re=new Ze(Un(Vt,Tt,l+=31),Mt||ft);return Re.name=yt,Re.castShadow=Re.receiveShadow=!0,Xt.add(Re),Re},ht=I.z_door+I.door_h+(a.head||.25),It=[];if(Wt){let Le=ne/2+sn.pin,Be=ht-(a.head||.25)+(a.head||.3125),Ne=r.threshold||1,ut=-Y/2+.75,rt=Y-1.5,Ye=5.09375,yt=Ce.mats.e3alu||(Ce.mats.e3alu=new Zt({color:12830667,metalness:.85,roughness:.38,envMapIntensity:1})),Tt=Ce.mats.e3hw||(Ce.mats.e3hw=new Zt({color:11843772,metalness:.9,roughness:.32,envMapIntensity:1.1})),Mt=(et,Pt,bt)=>{let zt=new bn;et.forEach((Ht,vt)=>vt?zt.lineTo(Ht[0],Ht[1]):zt.moveTo(Ht[0],Ht[1]));let xt=new zn(zt,{depth:rt,bevelEnabled:!1});xt.rotateY(Math.PI/2),xt.translate(ut,0,ot);let Bt=new Ze(bt===ft?Un(xt,"x",l+=31):xt,bt);return Bt.name=Pt,Bt.castShadow=Bt.receiveShadow=!0,Xt.add(Bt),Bt};for(let et of[-1,1])pt(et<0?-Y/2:Y/2-.75,0,ot,.75,Z,4.15625,"Jamb "+(et<0?"L":"R"),"y"),pt(et<0?-Y/2:Y/2-1.5,0,ot-4.15625,1.5,Z,.9375,"Jamb stop "+(et<0?"L":"R"),"y");{let et=Math.max(1.9685,Z-.6875-Be);pt(ut,Be,ot,rt,et,.5,"Front strip","x")}pt(ut,Z-.6875,ot,rt,.6875,Ye,"Top board","x"),Mt(sn.KT.map(et=>[.5+et[0],Be+et[1]]),"Top track \xB7 KT70D",Ce.mats.e3brz||(Ce.mats.e3brz=new Zt({color:3812902,metalness:.8,roughness:.42,envMapIntensity:1}))),pt(ut,Be,ot-2.941,rt,1.969,1.1875,"Filler","x"),pt(ut+.75,Be+1.969-3.4375,ot-4.15625,rt-1.5,3.4375,.9375,"Inside board","x");let Vt=Ce.mats.thrEsp||(Ce.mats.thrEsp=new Zt({color:2891287,roughness:.58,metalness:0,envMapIntensity:_i})),Re=String(T.e3_sill||T.sill_type||"").toLowerCase()!=="stop",Et=Re?Ye:4.15625;if(Mt([[0,0],[0,Ne-.25],[1.71,Ne],[1.98,Ne],[1.98,Ne-.875],[2.918,Ne-.875],[2.918,Ne],[Et,Ne],[Et,0]],"Threshold",Vt),Re||pt(ut+.75,0,ot-4.15625,rt-1.5,Ne+1.625,.9375,"Threshold stop","x"),Mt([[1.98,Ne-.875],[1.98,Ne],[2.045,Ne],[2.045,Ne-.81],[2.853,Ne-.81],[2.853,Ne],[2.918,Ne],[2.918,Ne-.875]],"Floor channel \xB7 EC23DV",yt),Mt([[2.065,Ne-.79],[2.065,Ne-.05],[2.128,Ne-.05],[2.128,Ne-.727],[2.77,Ne-.727],[2.77,Ne-.05],[2.833,Ne-.05],[2.833,Ne-.79]],"Channel liner",ir("#1c1d1f",.7)),sn.lib){let et=(vt,At,an,un,di,Di,yn,qn)=>{let ti=q_(vt,At,yn,qn);if(!ti)return;let fi=new Ze(ti,Ue.hw);fi.name="E3 "+vt+" "+At,fi.castShadow=fi.receiveShadow=!0,fi.position.set(un,di,Di),At==="fix"&&!qn?(It.push({m:fi,i:an,lx:un,lz:Di}),Ae.add(fi)):Ot[an].add(fi)},Pt=I.z_door,bt=I.z_door+I.door_h,zt={top_pivot:Be+.04,end_carrier:Be-.14,int_carrier:Be-.14},xt=bt+.2,Bt=[Pt+2.36,(Pt+bt)/2-2.13,bt-2.36-4.25],Ht=[];lt.Lq>0&&Ht.push({d:1,idx:[...Array(lt.Lq).keys()]}),lt.Rq>0&&Ht.push({d:-1,idx:[...Array(lt.Rq).keys()].map(vt=>V-1-vt)});for(let vt of Ht){let At=vt.d,an=vt.idx.length,un=yn=>lt.leaves[yn].w,di=vt.idx[0],Di=-At*un(di)/2+At*sn.inb;for(let yn of["a","fix"])et("top_pivot",yn,di,Di,yn==="fix"?zt.top_pivot:xt,Le,At<0,!1),et("bot_pivot",yn,di,Di,Ne,Le,At<0,!1);for(let yn=1;yn<an;yn++){let qn=vt.idx[yn-1],ti=vt.idx[yn],fi=lt.gapI(Math.min(qn,ti)),jr=At*un(qn)/2+At*fi/2,Pc=-At*un(ti)/2-At*fi/2;if(yn%2)Bt.forEach((Ji,Io)=>{let ps=Io===1?"hinge_handle":"hinge";et(ps,"fix",qn,jr,Ji,-Le,!1,!0),et(ps,At>0?"b":"a",qn,jr,Ji,-Le,!1,!0),et(ps,At>0?"a":"b",ti,Pc,Ji,-Le,!1,!0)});else for(let[Ji,Io,ps]of[["int_carrier",zt.int_carrier,xt],["int_guide",Ne,Ne]])et(Ji,"fix",qn,jr,Io,Le,!1,!1),et(Ji,At>0?"a":"b",qn,jr,ps,Le,!1,!1),et(Ji,At>0?"b":"a",ti,Pc,ps,Le,!1,!1)}if(an%2===0){let yn=vt.idx[an-1],qn=At*un(yn)/2-At*sn.inb;for(let ti of["a","fix"])et("end_carrier",ti,yn,qn,ti==="fix"?zt.end_carrier:xt,Le,At>0,!1),et("end_guide",ti,yn,qn,Ne,Le,At>0,!1)}}}}else{pt(-Y/2,0,ot,r.jamb,Z,Ke,"Jamb L","y"),pt(Y/2-r.jamb,0,ot,r.jamb,Z,Ke,"Jamb R","y"),pt(-Y/2+r.jamb,ht,ot,Y-2*r.jamb,Math.max(.75,Z-ht),.75,"Track header face","x"),pt(-Y/2+r.jamb,ht+.75,ot-.75,Y-2*r.jamb,Math.max(.5,Z-ht-.75),Ke-.75,"Track box","x",ir("#2a2826",.8));{let Le=r.threshold||1,Be=jt.thrSunk&&jt.thrSunk(T)?.25-Le:0,Ne=Y-2*r.jamb,ut=new bn;[[0,Be],[0,Be+Le-.25],[.5,Be+Le],[Ke,Be+Le],[Ke,Be]].forEach((yt,Tt)=>Tt?ut.lineTo(yt[0],yt[1]):ut.moveTo(yt[0],yt[1]));let rt=new zn(ut,{depth:Ne,bevelEnabled:!1});rt.rotateY(Math.PI/2),rt.translate(-Y/2+r.jamb,0,ot);let Ye=new Ze(Un(rt.toNonIndexed(),"x",l+=31),Ce.mats.thrEsp||(Ce.mats.thrEsp=new Zt({color:2891287,roughness:.58,metalness:0,envMapIntensity:_i})));Ye.geometry.computeVertexNormals(),Ye.name="Threshold",Ye.castShadow=Ye.receiveShadow=!0,Xt.add(Ye)}}return Ae.add(Xt),{og:Ae,L:lt,lvs:Ot,Wu:Y,Hu:Z,t:ne,zf:ot,ctx:Ue,fix:It,fm:ft}},h=new Jn;G.unit=h;let d=c(i,o),{Wu:u,Hu:f,t:g,zf:x,ctx:m,fm:p}=d,M=null;if(Oe.second!=="none"){let T=Oe.second,I=T==="single"?Wu.single:T==="double"?Wu.double:+i.width_in||192,V=T==="single"?2:T==="double"?4:+i.doors||d.L.n,Y=Object.assign({},i,{width_in:I,doors:V,split:T==="same"?i.split:V===2?"1L1R":"2L2R",mandoor:null});G.curS=Y;let Z=null;try{Z=s(Y,e,t,n)}catch{Z=null}G.curS=i,Z&&Z.leaves&&Z.leaves.length&&(M=c(Y,Z))}G.L=d.L,G.leaves=d.lvs,G.fixA=d.fix,G.B=M,G.H=f,h.add(d.og),M&&h.add(M.og);let v=a.shim_side||0,b=a.shim_top||0,R=u/2+v,w=f+b,E=32,D=28,y=M?M.Wu/2+v:0,_=2*E+2*R+(M?D+2*y:0),U=-_/2+E+R,z=U+R+D+y,X=M?[[U,R],[z,y]]:[[U,R]],P=M?[-_/2+E/2,U+R+D/2,_/2-E/2]:[-_/2+E/2,_/2-E/2],L=f+30,O=8,J=e.tb==="flush",H=J?x+.01:x+2.75,q=Zu(Oe.structure),ie=nn("wall_"+q.wall,Xu[q.wall]||Xu.stucco,.95);d.og.position.x=U,M&&(M.og.position.x=z);let re=Oe.eave==="deep"?6:-.5,pe=[[-_/2,re]],K=G.last&&G.last[0]||{},le=(()=>{let T=K.situations&&K.situations.arched_top;if(!T)return 0;let I=parseFloat(T.fields&&T.fields.rise);return isFinite(I)&&I>0?I:12})(),Pe=T=>{if(Ce.archDoor){let ne=Ce.archDoor.r+1,ae=Ce.archDoor.cy,Me=ae+Math.sqrt(Math.max(1,ne*ne-T*T));return{rise:w-Me,r:ne,cy:ae,a0:Math.atan2(Me-ae,-T),a1:Math.atan2(Me-ae,T)}}let I=Math.min(le,T*.9),V=(T*T+I*I)/(2*I),Y=w-V,Z=Math.atan2(w-I-Y,-T),$=Math.atan2(w-I-Y,T);return{rise:I,r:V,cy:Y,a0:Z,a1:$}};for(let[T,I]of X){if(!le){pe.push([T-I,re],[T-I,w],[T+I,w],[T+I,re]);continue}let V=Pe(I),Y=40;pe.push([T-I,re],[T-I,w-V.rise]);for(let Z=1;Z<Y;Z++){let $=V.a0+(V.a1-V.a0)*Z/Y;pe.push([T+V.r*Math.cos($),V.cy+V.r*Math.sin($)])}pe.push([T+I,w-V.rise],[T+I,re])}pe.push([_/2,re],[_/2,L],[-_/2,L]);let Xe=new bn(pe.map(T=>new ue(T[0],T[1]))),He=new zn(Xe,{depth:O,bevelEnabled:!1});He.translate(0,0,H-O);let Je=new Ze(Un(He,"y",3),J?m.fin:ie);Je.castShadow=Je.receiveShadow=!0,Je.name="House wall",h.add(Je);for(let T of[-1,1]){let I=new fn(O,L+.5,250);I.translate(T*(_/2-O/2),L/2-.25,H-O-125);let V=new Ze(Un(I,"y",l+=31),J?m.fin:ie);V.castShadow=V.receiveShadow=!0,V.name="Side wall",h.add(V)}let st=nn("conc",{seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2},.9),We=nn("concD",{seed:21,color:"#7f7b75",mid:.6,fine:1,tone:.12,grit:.2,bump:3.5},.92),De=(T,I,V,Y,Z,$,ne,ae,Me)=>{let Se=new fn(T,I,V);Se.translate(Y,Z,$);let xe=new Ze(Un(Se,Me||"x",l+=31),ne);return xe.castShadow=xe.receiveShadow=!0,xe.name=ae,h.add(xe),xe};if(Oe.eave==="deep"){let T=[-_/2];for(let[I,V]of X)T.push(I-V,I+V);T.push(_/2);for(let I=0;I<T.length;I+=2)De(T[I+1]-T[I],6.5,O+.75,(T[I]+T[I+1])/2,3.25,H-O/2+.375,We,"Stem wall")}let B=Wr("#efece4"),ve=(()=>{let T=G.last&&G.last[0]||{},I=G.last&&G.last[2];if(!/^(ext|both)$/.test(String(T.casing||""))||!I)return B;try{return I.type==="stain"?Gr(I):Wr(I.hex||"#efece4")}catch{return B}})();if(le){for(let[T,I]of X){let V=Pe(I),Y=w-V.rise,Z=48;{let $=V.r-.75,ne=new bn,ae=I-.05;for(let xe=0;xe<=Z;xe++){let Ue=-ae+2*ae*xe/Z,Ae=V.cy+Math.sqrt(Math.max(0,V.r*V.r-Ue*Ue));xe?ne.lineTo(T+Ue,Ae):ne.moveTo(T+Ue,Ae)}for(let xe=Z;xe>=0;xe--){let Ue=-ae+2*ae*xe/Z;ne.lineTo(T+Ue,V.cy+Math.sqrt(Math.max(0,$*$-Ue*Ue)))}let Me=new zn(ne,{depth:4.5,bevelEnabled:!1});Me.translate(0,0,H-2.75-4.5);let Se=new Ze(Un(Me,"x",l+=31),B);Se.castShadow=Se.receiveShadow=!0,Se.name="Jamb head \xB7 arched",h.add(Se)}if(!J){let ne=V.r+3.5,ae=V.cy+Math.sqrt(Math.max(1,ne*ne-(I+3.5)*(I+3.5))),Me=new bn;De(3.5,ae,.75,T-I-3.5/2,ae/2,H+.375,ve,"Casing L","y"),De(3.5,ae,.75,T+I+3.5/2,ae/2,H+.375,ve,"Casing R","y");for(let Ue=0;Ue<=Z;Ue++){let Ae=I+3.5-2*(I+3.5)*Ue/Z,je=V.cy+Math.sqrt(Math.max(0,ne*ne-Ae*Ae));Ue?Me.lineTo(T+Ae,je):Me.moveTo(T+Ae,je)}Me.lineTo(T-I,ae),Me.lineTo(T-I,Y);for(let Ue=0;Ue<=Z;Ue++){let Ae=-I+2*I*Ue/Z;Me.lineTo(T+Ae,V.cy+Math.sqrt(Math.max(0,V.r*V.r-Ae*Ae)))}Me.lineTo(T+I,ae);let Se=new zn(Me,{depth:.75,bevelEnabled:!1});Se.translate(0,0,H);let xe=new Ze(Un(Se,"x",l+=31),ve);xe.castShadow=xe.receiveShadow=!0,xe.name="Casing head \xB7 arched",h.add(xe)}}h.traverse(T=>{T.isMesh&&/^Track (header face|box)$/.test(T.name)&&(T.visible=!1)}),[d,M].forEach(T=>T&&T.og&&T.og.traverse(I=>{I.isMesh&&/^Track (header face|box)$/.test(I.name)&&(I.visible=!1)}))}else if(!J){let I=v+.5,V=b+.5,Y=w-V;for(let[Z,$]of X)De(I,Y,H-x,Z-$+I/2,Y/2,(H+x)/2,p,"Jamb return L","y"),De(I,Y,H-x,Z+$-I/2,Y/2,(H+x)/2,p,"Jamb return R","y"),De(2*$,V,H-x,Z,Y+V/2,(H+x)/2,p,"Jamb return head","x"),De(3.5,Y+3.5,.75,Z-$+I-3.5/2,(Y+3.5)/2,H+.375,ve,"Casing L","y"),De(3.5,Y+3.5,.75,Z+$-I+3.5/2,(Y+3.5)/2,H+.375,ve,"Casing R","y"),De(2*($-I),3.5,.75,Z,Y+3.5/2,H+.375,ve,"Casing head","x")}let oe=Oe.roof==="flat",de=oe?0:Oe.eave==="deep"?20:1.5,se=_+2*de+14,Fe=Oe.pitch/12,_e=Math.atan(Fe),A=Oe.roof==="spanish"?nn("roofspanish",{n:512,seed:131,color:"#6e3a2c",pal:["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"],mid:.3,fine:.6,tone:.04,grit:.14,bump:11,rows:128,tab:64,align:1,barrel:64,barrelK:4.5,deep:1},.84):Oe.roof==="shake"?nn("roofshake",{n:512,seed:137,color:"#6f5a4a",pal:["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"],mid:.5,fine:1.4,tone:.1,grit:.5,bump:8,rows:64,tab:48,jit:1},.96):Oe.roof==="tile"?nn("rooftile",{n:512,seed:61,color:"#553029",mid:.4,fine:.6,tone:.16,grit:.2,bump:7,rows:64,tab:512,barrel:32},.82):Oe.roof==="metal"?Ce.mats.roofmetal||(Ce.mats.roofmetal=(()=>{let T=Sc("roofmetal",512,{seed:71,color:"#3d4043",mid:.1,fine:.2,tone:.05,grit:.05,bump:6,seam:128});return new Zt({map:T.map,normalMap:T.normalMap,roughness:.42,metalness:.75,envMapIntensity:.9})})()):nn("shingle",{n:512,seed:31,color:"#4a4a4c",mid:.5,fine:1,tone:.1,grit:.3,bump:5,rows:32,tab:64},.93),S=oe?"flat":/^flat/.test(q.form)?"side":q.form,W=L+6.6,ge=Oe.roof==="shingle"?96:64,ce=(T,I,V,Y,Z)=>{let $=V===Y,ne=(lt,Ge)=>[lt[0]-Ge[0],lt[1]-Ge[1],lt[2]-Ge[2]],ae=ne(I,T),Me=ne(V,T);if(ae[2]*Me[0]-ae[0]*Me[2]<0){let lt=T;if(T=I,I=lt,!$){let Ge=V;V=Y,Y=Ge}}let Se=Math.hypot(...ne(I,T)),xe=ne(I,T).map(lt=>lt/Se),Ue=lt=>{let Ge=ne(lt,T),ct=Ge[0]*xe[0]+Ge[1]*xe[1]+Ge[2]*xe[2];return[ct/ge,Math.hypot(Ge[0]-ct*xe[0],Ge[1]-ct*xe[1],Ge[2]-ct*xe[2])/ge]},Ae=$?[T,I,V]:[T,I,V,T,V,Y],je=new $t;je.setAttribute("position",new Ct(Ae.flat(),3)),je.setAttribute("uv",new Ct(Ae.map(Ue).flat(),2)),je.computeVertexNormals();let wt=new Ze(je,A);return wt.castShadow=wt.receiveShadow=!0,wt.name=Z,h.add(wt),wt},he=ir("#2e3033",.6),qe=J?m.fin:ie,we=(T,I)=>{if(Oe.roof!=="spanish"&&Oe.roof!=="tile")return!1;let V=new F(...T),Y=new F(...I).sub(V),Z=Y.length();if(Z<6)return!0;Y.normalize();let $=new F().crossVectors(Y,new F(0,1,0));$.lengthSq()<1e-6&&$.set(1,0,0),$.normalize();let ne=new F().crossVectors($,Y);ne.y<0&&($.negate(),ne.negate());let ae=ci(Math.round(Z*13+T[0]+T[2])+5),Me=[],Se=Oe.roof==="spanish"?4.6:3.2,xe=new Ft;for(let Ae=0;Ae<Z;Ae+=12){let je=Qn(ke[Math.floor(ae()*ke.length)]),wt=.88+ae()*.2,lt=Math.min(15,Z-Ae+2),Ge=new Yi(Se,Se*.9,lt,8,1,!0,-Math.PI/2,Math.PI);Ge.translate(0,lt/2-1,1.2),Ge.rotateX(-.04),Ge=Ge.toNonIndexed();let ct=Ge.attributes.position.count,Nt=new Float32Array(ct*3);for(let Kt=0;Kt<ct;Kt++)Nt[Kt*3]=je.r*wt,Nt[Kt*3+1]=je.g*wt,Nt[Kt*3+2]=je.b*wt;Ge.setAttribute("color",new qt(Nt,3)),Ge.applyMatrix4(xe.makeBasis($,Y,ne).setPosition(V.clone().addScaledVector(Y,Ae))),Me.push(Ge)}let Ue=new Ze(kr(Me,!1),Qe);return Ue.castShadow=Ue.receiveShadow=!0,Ue.name="Hip and ridge tiles",h.add(Ue),!0},ke=Oe.roof==="spanish"?["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"]:Oe.roof==="tile"?["#553029","#5d352c","#4c2a24","#613a30"]:Oe.roof==="shake"?["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"]:null,Qe=Ce.mats.eave||(Ce.mats.eave=new Zt({vertexColors:!0,roughness:.88,side:Tn,envMapIntensity:_i})),tt=(T,I,V,Y,Z)=>{if(!ke)return;let $=new F(...T),ne=new F(...I),ae=new F(...V).normalize(),Me=ne.clone().sub($),Se=Me.length();Me.normalize();let xe=new F().crossVectors(Me,ae);xe.y<0&&(Me.negate(),xe.negate(),$.copy(ne));let Ue=ci(Math.round(Se*7+T[0]*3+T[2]*5)+77),Ae=[],je=Oe.roof==="shake",wt=Oe.roof==="spanish"?4:2.6,lt=je?10:15,Ge=je?6.5:12.5,ct=Math.cos(_e),Nt=new Ft;for(let Ot=0,Wt=0;Ot<Y-1;Ot+=Ge,Wt++){let Xt=Z?Ot*ct:0,Ke=Xt,ot=Se-Xt;if(ot-Ke<(je?3:2*wt))break;let ft=je?Ke-Ue()*4:Math.ceil(Ke/(2*wt)-.5)*2*wt;for(;ft<ot-.5;){let pt=je?3.5+Ue()*5:2*wt,ht=Math.max(ft,Ke),It=Math.min(ft+pt,ot),Le=It-ht;if(ft+=pt,Le<(je?1.2:2*wt-.01))continue;let Be=Wt?0:je?.5+Ue()*.9:2.2+Ue()*.5,Ne=Qn(ke[Math.floor(Ue()*ke.length)]),ut=.88+Ue()*.22,rt=Math.min(lt,Y-Ot+Be),Ye;je?(Ye=new fn(Le-.18,rt,.62),Ye.translate(0,rt/2-Be,.31+Ue()*.3),Ye.rotateX(-.055)):(Ye=new Yi(Le/2,Le/2*.9,rt,8,1,!0,-Math.PI/2,Math.PI),Ye.translate(0,rt/2-Be,.15),Ye.rotateX(-.03)),Ye=Ye.toNonIndexed();let yt=Ye.attributes.position.count,Tt=new Float32Array(yt*3);for(let Mt=0;Mt<yt;Mt++)Tt[Mt*3]=Ne.r*ut,Tt[Mt*3+1]=Ne.g*ut,Tt[Mt*3+2]=Ne.b*ut;Ye.setAttribute("color",new qt(Tt,3)),Ye.applyMatrix4(Nt.makeBasis(Me,ae,xe).setPosition($.clone().addScaledVector(Me,(ht+It)/2).addScaledVector(ae,Ot))),Ae.push(Ye)}}if(!Ae.length)return;let Kt=new Ze(kr(Ae,!1),Qe);Kt.castShadow=Kt.receiveShadow=!0,Kt.name="Roof courses",h.add(Kt)};if(S==="flat"&&q.form==="flat8"){let I=250+O+16;De(_+16,9,I,0,L+4.5,H+8-I/2,he,"Roof edge"),De(_+16-2,.75,I-2,0,L-.375,H+8-I/2,B,"Soffit")}else if(S==="flat"){De(_+3,2.5,O+3,0,L+1.25,H-O/2,B,"Parapet cap","x");for(let T of[-1,1])De(O+3,2.5,250,T*(_/2-O/2),L+1.25,H-O-125,B,"Parapet cap","z");if(De(_-2*O,1,250,0,L-8,H-O-125,ir("#55565a",.9),"Roof deck"),q.form==="flat"){let I=w+14;De(_+36,8,66,0,I+4,H+66/2,he,"Canopy"),De(_+30,1,62,0,I-.4,H+66/2-1,B,"Canopy soffit");for(let V of[-1,1])De(10,I,10,V*(_/2+8),I/2,H+66-8,st,"Column","y")}}else if(S==="front"){let T=_/2+de+5,I=H+de+7,V=H-O-250-de-7,Y=L+1.2-(de+5)*Fe,Z=Y+T*Fe;ce([-T,Y,I],[-T,Y,V],[0,Z,V],[0,Z,I],"Roof L"),tt([-T,Y,I],[-T,Y,V],[Math.cos(_e),Math.sin(_e),0],T/Math.cos(_e)),tt([T,Y,V],[T,Y,I],[-Math.cos(_e),Math.sin(_e),0],T/Math.cos(_e)),ce([T,Y,V],[T,Y,I],[0,Z,I],[0,Z,V],"Roof R"),we([0,Z,V],[0,Z,I])||De(9,1.6,I-V,0,Z+.3,(I+V)/2,he,"Ridge cap","z");for(let $ of[H,H-250]){let ne=new bn([[-_/2,0],[_/2,0],[0,_/2*Fe]].map(Se=>new ue(Se[0],Se[1]))),ae=new zn(ne,{depth:O,bevelEnabled:!1});ae.translate(0,L,$-O);let Me=new Ze(Un(ae,"y",l+=31),qe);Me.castShadow=Me.receiveShadow=!0,Me.name="Gable",h.add(Me)}for(let $ of[-1,1]){let ne=Math.hypot(T,T*Fe),ae=new fn(ne,5.5,1.2);ae.rotateZ($*-Math.atan(Fe)),ae.translate($*T/2,Y+T*Fe/2-2.4,I-.4);let Me=new Ze(Un(ae,"x",l+=31),B);Me.castShadow=!0,Me.name="Rake board",h.add(Me);let Se=new fn(ne,5.5,1.2);Se.rotateZ($*-Math.atan(Fe)),Se.translate($*T/2,Y+T*Fe/2-2.4,V+.4);let xe=new Ze(Un(Se,"x",l+=31),B);xe.castShadow=!0,xe.name="Rake board",h.add(xe);let Ue=new fn(ne,.8,I-V-1.6);Ue.rotateZ($*-Math.atan(Fe)),Ue.translate($*T/2,Y+T*Fe/2-1.1,(I+V)/2);let Ae=new Ze(Un(Ue,"z",l+=31),B);Ae.castShadow=Ae.receiveShadow=!0,Ae.name="Soffit",h.add(Ae),De(1.2,5.5,I-V,$*(T-.5),Y-2.3,(I+V)/2,B,"Fascia","z")}De(14,20,1,0,L+_/2*Fe*.42,H+.4,he,"Gable vent","y")}else if(S==="hip"){let T=_/2+de+3,I=H+de+3,V=H-O-250-de-3,Y=(I-V)/2,Z=(I+V)/2;{let $=Math.min(Y,T)/Math.cos(_e);tt([-T,W,I],[T,W,I],[0,Math.sin(_e),-Math.cos(_e)],$,1),tt([T,W,V],[-T,W,V],[0,Math.sin(_e),Math.cos(_e)],$,1),tt([T,W,I],[T,W,V],[-Math.cos(_e),Math.sin(_e),0],$,1),tt([-T,W,V],[-T,W,I],[Math.cos(_e),Math.sin(_e),0],$,1)}if(Y<=T){let $=T-Y,ne=W+Y*Fe;ce([-T,W,I],[T,W,I],[$,ne,Z],[-$,ne,Z],"Roof front"),ce([T,W,V],[-T,W,V],[-$,ne,Z],[$,ne,Z],"Roof back");let ae=[$,ne,Z],Me=[-$,ne,Z];ce([T,W,I],[T,W,V],ae,ae,"Roof R"),ce([-T,W,V],[-T,W,I],Me,Me,"Roof L");for(let Se of[-1,1])for(let xe of[I,V])we([Se*T,W,xe],[Se*$,ne,Z]);$>2&&!we([-$,ne,Z],[$,ne,Z])&&De(2*$,1.6,9,0,ne+.3,Z,he,"Ridge cap","x")}else{let $=Y-T,ne=W+T*Fe,ae=[0,ne,Z+$],Me=[0,ne,Z-$];ce([-T,W,I],[T,W,I],ae,ae,"Roof front"),ce([T,W,V],[-T,W,V],Me,Me,"Roof back"),ce([T,W,I],[T,W,V],Me,ae,"Roof R"),ce([-T,W,V],[-T,W,I],ae,Me,"Roof L");for(let Se of[-1,1])we([Se*T,W,I],ae),we([Se*T,W,V],Me);we(Me,ae)||De(9,1.6,2*$,0,ne+.3,Z,he,"Ridge cap","z")}De(2*T,7.25,1.5,0,L+2.9,I-.75,B,"Fascia","x"),De(2*T,7.25,1.5,0,L+2.9,V+.75,B,"Fascia","x");for(let $ of[-1,1])De(1.5,7.25,I-V,$*(T-.75),L+2.9,Z,B,"Fascia","z");De(2*T-3,.75,I-V-3,0,L-.375,Z,B,"Soffit","x")}else{De(se,.75,de+O,0,L-.375,H+de/2-O/2,B,"Soffit","x"),De(se,7.25,1.5,0,L+2.9,H+de+.75,B,"Fascia","x");let T=new Ze(new Yi(2.6,2.6,se,20,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),Ce.mats.gut||(Ce.mats.gut=new Zt({color:3487290,metalness:.7,roughness:.45,side:Tn})));T.position.set(0,L+4.2,H+de+3.6),T.castShadow=!0,h.add(T);let I=H-O-125,V=H+de+2.2-I,Y=V/Math.cos(_e),Z=new ai(se,Y),$=Oe.roof==="shingle"?96:64;{let Me=Z.attributes.uv;for(let Se=0;Se<Me.count;Se++)Me.setXY(Se,Me.getX(Se)*se/$,Me.getY(Se)*Y/$)}let ne=new Ze(Z,A);ne.rotation.x=-Math.PI/2+_e,ne.position.set(0,L+6.6+Y/2*Math.sin(_e),H+de+2.2-Y/2*Math.cos(_e)),ne.castShadow=ne.receiveShadow=!0,ne.name="Roof",h.add(ne);let ae=new Ze(Z,A);ae.rotation.x=-Math.PI/2-_e,ae.position.set(0,L+6.6+Y/2*Math.sin(_e),I-Y/2*Math.cos(_e)),ae.castShadow=ae.receiveShadow=!0,ae.name="Roof back",h.add(ae),tt([-se/2,L+6.6,H+de+2.2],[se/2,L+6.6,H+de+2.2],[0,Math.sin(_e),-Math.cos(_e)],Y),tt([se/2,L+6.6,I-V],[-se/2,L+6.6,I-V],[0,Math.sin(_e),Math.cos(_e)],Y),we([-se/2,L+6.6+V*Fe,I],[se/2,L+6.6+V*Fe,I])||De(se,1.6,9,0,L+6.6+V*Fe+.3,I,Ce.mats.gut,"Ridge cap","x");for(let Me of[-1,1]){let xe=new bn([[0,0],[250,0],[125,125*Fe]].map(je=>new ue(je[0],je[1]))),Ue=new zn(xe,{depth:O,bevelEnabled:!1});Ue.rotateY(Math.PI/2),Ue.translate(Me*(_/2-O/2)-O/2,L,H-O);let Ae=new Ze(Un(Ue,"y",l+=31),qe);Ae.castShadow=Ae.receiveShadow=!0,Ae.name="Side wall rake",h.add(Ae)}}let fe=Ce.mats.lant||(Ce.mats.lant=new Zt({color:1776413,metalness:.6,roughness:.5})),mt=Ce.mats.lantg||(Ce.mats.lantg=new Zt({color:16773590,emissive:16767392,emissiveIntensity:.25,roughness:.3}));if(Oe.light==="barrel"){let T=Ce.tex.wash||(Ce.tex.wash=(()=>{let Y=document.createElement("canvas");Y.width=64,Y.height=128;let Z=Y.getContext("2d"),$=Z.createRadialGradient(32,0,1,32,0,120);$.addColorStop(0,"rgba(255,226,170,.95)"),$.addColorStop(.25,"rgba(255,214,150,.45)"),$.addColorStop(1,"rgba(255,200,130,0)"),Z.fillStyle=$,Z.beginPath(),Z.moveTo(32,0),Z.lineTo(64,128),Z.lineTo(0,128),Z.closePath(),Z.fill();let ne=new Xi(Y);return ne.colorSpace=Jt,ne})()),I=Ce.mats.wash||(Ce.mats.wash=new Ci({map:T,transparent:!0,depthWrite:!1,opacity:.55,blending:Sa,toneMapped:!1})),V=Ce.mats.barrel||(Ce.mats.barrel=new Zt({color:2762275,metalness:.75,roughness:.38}));for(let Y of P){let Z=Math.min(w-14,78),$=new Ze(new Yi(2.3,2.3,11,28),V);$.position.set(Y,Z,H+3.4),$.castShadow=!0,$.name="Barrel sconce",h.add($),De(1.6,3,1.4,Y,Z,H+.7,V,"Sconce arm","y");for(let ne of[1,-1]){let ae=new Ze(new Xa(1.9,20).rotateX(-ne*Math.PI/2),mt);ae.position.set(Y,Z+ne*5.52,H+3.4),h.add(ae);let Me=new Ze(new ai(30,46),I);ne>0&&(Me.rotation.z=Math.PI),Me.position.set(Y,Z+ne*(5.5+23),H+.12),Me.renderOrder=2,h.add(Me)}}}else for(let T of P){let I=Math.min(w-14,78);De(4.5*1.37,7*1.37,.6,T,I,H+.3,fe,"Lantern plate","y"),De(5*1.37,.8*1.37,5*1.37,T,I+5.4*1.37,H+.6+2.8*1.37,fe,"Lantern cap"),De(5*1.37,.6*1.37,5*1.37,T,I-4.6*1.37,H+.6+2.8*1.37,fe,"Lantern base"),De(3.6*1.37,9.4*1.37,3.6*1.37,T,I+.3*1.37,H+.6+2.8*1.37,mt,"Lantern glass","y").castShadow=!1,De(.8*1.37,1*1.37,2*1.37,T,I+5*1.37,H+1*1.37,fe,"Lantern arm")}let N=_+8,me=640,Ee=new bn;Ee.moveTo(-N/2,0),Ee.lineTo(N/2,0),Ee.bezierCurveTo(N/2,-230,N/2+70,-330,N/2+70,-me),Ee.lineTo(-N/2-190,-me),Ee.bezierCurveTo(-N/2-190,-400,-N/2,-300,-N/2,0);let ye=Oe.paver==="rust",$e=()=>nn("herr"+Oe.paver,{n:512,seed:111,pal:ye?Mc:null,color:"#8f867b",mid:.4,fine:.9,tone:.04,grit:.1,bump:2.6,herr:32,jw:2},.88),gt=()=>nn("mix"+Oe.paver,{n:768,seed:121,pal:ye?Mc:null,color:"#8f877c",mid:.4,fine:.9,tone:.03,grit:.1,bump:2.6,mix:64,jw:3},.88),St=Oe.drive==="mix"?gt():Oe.drive==="herr"?$e():Oe.drive==="pavers"?nn("pavers"+Oe.paver,{n:512,seed:83,pal:ye?Mc:null,color:"#8c8379",mid:.5,fine:.9,tone:.04,grit:.2,bump:4.5,rows:32,tab:64},.88):nn("concj",{n:512,seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2,joint:512},.9),dt=Oe.drive==="concrete"?120:Oe.drive==="mix"?96:64,be=new qa(Ee,24);{let T=be.attributes.uv;for(let I=0;I<T.count;I++)T.setXY(I,T.getX(I)/dt,T.getY(I)/dt)}be.rotateX(-Math.PI/2),be.translate(0,0,H-.02);let k=new Ze(be,St);k.receiveShadow=!0,k.name="Driveway",h.add(k);let Te=Oe.ground==="gravel"?nn("gravel",{seed:44,color:"#8c857a",mid:.3,fine:1.6,tone:.1,grit:.75,bump:9},1):Oe.ground==="dg"?nn("dg",{seed:47,color:"#a8916f",mid:.5,fine:1.2,tone:.05,grit:.35,bump:5},1):Oe.ground==="mix"?gt():Oe.ground==="herr"?$e():Oe.ground==="mpavers"?nn("mpavers",{n:512,seed:91,color:"#a39f97",mid:.3,fine:.8,tone:.03,grit:.14,bump:4,slab:[256,128],jw:6},.9):Oe.ground==="flag"||Oe.ground==="planters"?nn("flag",{n:512,seed:97,color:"#9a8f80",mid:.7,fine:1,tone:.05,grit:.2,bump:6,cells:5,jw:5},.92):Oe.ground==="blue"?nn("lawn4",{seed:52,color:"#457a42",mid:.7,fine:1.8,tone:.07,grit:.5,bump:5},1):nn("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1),Ie=(T,I,V,Y)=>{let Z=[];for(let $=0;$<=40;$++){let ne=$/40,ae=1-ne;Z.push([ae*ae*ae*T[0]+3*ae*ae*ne*I[0]+3*ae*ne*ne*V[0]+ne*ne*ne*Y[0],-(ae*ae*ae*T[1]+3*ae*ae*ne*I[1]+3*ae*ne*ne*V[1]+ne*ne*ne*Y[1])])}return Z.sort(($,ne)=>$[1]-ne[1])},at=(T,I)=>{for(let V=1;V<T.length;V++)if(T[V][1]>=I){let Y=T[V-1],Z=T[V],$=(I-Y[1])/Math.max(1e-6,Z[1]-Y[1]);return Y[0]+(Z[0]-Y[0])*$}return T[T.length-1][0]},nt=Ie([-N/2-190,-me],[-N/2-190,-400],[-N/2,-300],[-N/2,0]),Dt=Ie([N/2,0],[N/2,-230],[N/2+70,-330],[N/2+70,-me]),Ut=Oe.ground==="mpavers"||Oe.ground==="mix"||Oe.ground==="herr"||Oe.ground==="flag"||Oe.ground==="planters",rn=Oe.land==="rolling"||Oe.land!=="flat"&&!Ut,_n=T=>(T=Math.max(0,Math.min(1,T)),T*T*(3-2*T)),Gt=(T,I)=>{let V=(Z,$,ne)=>Math.hypot(Math.max(0,Math.abs(T)-Z),I<$?$-I:I>ne?I-ne:0),Y=V(_/2+44,-330,0);if(Ut&&(Y=Math.min(Y,V(_/2+220,-300,600))),I>=0){let Z=Math.min(I,me),$=at(nt,Z),ne=at(Dt,Z);Y=Math.min(Y,Math.hypot(T<$?$-T:T>ne?T-ne:0,I-Z))}return Y},xn=(T,I)=>{if(!rn)return 0;let V=_n((Gt(T,I)-22)/140);if(V<=0)return 0;let Y=_n((Math.hypot(T,I)-1300)/2e3);return V*(2.6+3.4*Math.sin(T*.0131+.7)*Math.sin(I*.0117+2.1)+2.4*Math.sin(T*.0057+I*.0043+1.9)+1.4*Math.sin(T*.031-I*.027+.3)+.6*Math.sin(T*.071+1)*Math.sin(I*.063)+Y*(26+36*Math.sin(T*.0011+.5)*Math.sin(I*.0013+1.2)+18*Math.sin(T*.0027-I*.0019+2.4)))},Hn=(T,I,V,Y)=>{let Z=[];for(let Ue=-960;Ue<=960;Ue+=12)Z.push(Ue);for(let Ue=960,Ae=16;Ue<4500;)Ae*=1.3,Ue=Math.min(4500,Ue+Ae),Z.push(Ue),Z.unshift(-Ue);let $=Z.length,ne=new Float32Array($*$*3),ae=new Float32Array($*$*2),Me=[];for(let Ue=0;Ue<$;Ue++)for(let Ae=0;Ae<$;Ae++){let je=Ue*$+Ae,wt=Z[Ae],lt=Z[Ue]+200;ne[3*je]=wt,ne[3*je+1]=T+xn(wt,lt),ne[3*je+2]=H+lt,ae[2*je]=wt/V,ae[2*je+1]=-(H+lt)/V,Ae&&Ue&&Me.push(je-$-1,je-1,je-$,je-$,je-1,je)}let Se=new $t;Se.setAttribute("position",new qt(ne,3)),Se.setAttribute("uv",new qt(ae,2)),Se.setIndex(Me),Se.computeVertexNormals();let xe=new Ze(Se,I);xe.receiveShadow=!0,xe.name=Y,h.add(xe)};{let T=Oe.ground==="mpavers"||Oe.ground==="mix"||Oe.ground==="herr"||Oe.ground==="flag"||Oe.ground==="planters",I=Oe.ground==="lawn"||Oe.ground==="blue"||Oe.ground==="herr"?64:Oe.ground==="mpavers"||Oe.ground==="mix"?96:T?150:40,V=(Z,$,ne,ae,Me,Se,xe,Ue)=>{let Ae=new ai(Z,$),je=Ae.attributes.uv;for(let lt=0;lt<je.count;lt++)je.setXY(lt,je.getX(lt)*Z/xe,je.getY(lt)*$/xe);Ae.rotateX(-Math.PI/2);let wt=new Ze(Ae,Se);wt.position.set(ne,Me,ae),wt.receiveShadow=!0,wt.name=Ue,h.add(wt)},Y=()=>nn("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1);rn?T?(Hn(-.9,Y(),64,"Lawn"),V(_+440,900,0,H+150,-.5,Te,I,"Paving")):Hn(-.5,Te,I,"Ground"):T?(V(9e3,9e3,0,0,-.9,Y(),64,"Lawn"),V(_+440,900,0,H+150,-.5,Te,I,"Paving")):V(9e3,9e3,0,0,-.5,Te,I,"Ground")}if(Oe.ground==="blue"){let T=(Ke,ot)=>ot>=0?Ke<at(nt,ot)-1.5||Ke>at(Dt,ot)+1.5:Math.abs(Ke)>_/2+38,I=(()=>{let Ke=ci(771),ot=[],ft=[],pt=[],ht=[];for(let It=0;It<11;It++){let Le=Ke()*6.283,Be=1.25+Ke()*.45,Ne=.24+Ke()*.08,ut=Ne*.72,rt=(Ke()-.5)*2.3,Ye=(Ke()-.5)*2.3,yt=.05+Ke()*.35,Tt=Ke()*6.283,Mt=Math.cos(Le)/2,Vt=Math.sin(Le)/2,Re=rt+Math.cos(Tt)*yt,Et=Ye+Math.sin(Tt)*yt,et=.78+Ke()*.1,Pt=1+Ke()*.22,bt=[rt-Mt*Ne,0,Ye-Vt*Ne],zt=[rt+Mt*Ne,0,Ye+Vt*Ne],xt=[Re+Mt*ut,Be,Et+Vt*ut],Bt=[Re-Mt*ut,Be,Et-Vt*ut],Ht=ot.length/3;ot.push(...bt,...zt,...xt,...Bt),ft.push(et,et,et,et,et,et,Pt,Pt,Pt,Pt,Pt,Pt),ht.push(Ht,Ht+1,Ht+2,Ht,Ht+2,Ht+3);for(let vt=0;vt<6;vt++){let At=(Ke()-.5)*.4,an=(Ke()-.5)*.4;(vt<3||vt===5)&&pt.push(At,1,an)}}return{pos:new Ct(ot,3),col:new Ct(ft,3),nor:new Ct(pt,3),idx:new Gs(ht,1)}})(),V=()=>{let Ke=new $t;return Ke.setAttribute("position",I.pos),Ke.setAttribute("color",I.col),Ke.setAttribute("normal",I.nor),Ke.setIndex(I.idx),Ke},Y=Ce.mats.grass||(Ce.mats.grass=(()=>{let Ke=new Zt({vertexColors:!0,side:Tn,roughness:.9,metalness:0,envMapIntensity:.25});return Ke.onBeforeCompile=ot=>{ot.fragmentShader=ot.fragmentShader.replace("#include <normal_fragment_begin>",Rt.normal_fragment_begin.replace(/normal \*= faceDirection;/g,""))},Ke})()),Z=["#427a45","#4c8550","#3b7040","#558e56","#47804b","#3f7646"].map(Qn),$=ci(9113),ne=[],ae=-_/2-430,Me=_/2+330,Se=-130,xe=580,Ue=Oe.lite!=null?!!Oe.lite:typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||innerWidth<820,Ae=Ue?1.5:1,je=2.3*Ae,wt=4.6*Ae;for(let Ke=Se;Ke<xe;){let ot=Ke>-30&&Ke<340,ft=ot?je:wt;for(let pt=ae;pt<Me;pt+=ft){let ht=ot&&pt>-_/2-270&&pt<_/2+250,It=ht?je:wt;if(!ht&&ot&&Math.round((pt-ae)/je)%2)continue;let Le=pt+($()-.5)*It,Be=Ke+($()-.5)*It;T(Le,Be)&&ne.push(Le,Be,(ht?1:1.9)*(Ue?1.42:1))}Ke+=ft}let lt=160,Ge=new Map;for(let Ke=0;Ke<ne.length;Ke+=3){let ot=Math.floor((ne[Ke]-ae)/lt)+","+Math.floor((ne[Ke+1]-Se)/lt);(Ge.get(ot)||Ge.set(ot,[]).get(ot)).push(Ke)}let ct=new Ft,Nt=new Xn,Kt=new F(0,1,0),Ot=new F,Wt=new F,Xt=new _t;for(let Ke of Ge.values()){let ot=V(),ft=new Ha(ot,Y,Ke.length);Ke.forEach((ht,It)=>{let Le=ne[ht],Be=ne[ht+1],Ne=ne[ht+2]*(.85+$()*.35),ut=Math.floor((Le+5e3)/21)%2?1.07:.94,rt=.93+.14*Math.sin(Le*.011+1.3)*Math.sin(Be*.013+.4);Nt.setFromAxisAngle(Kt,$()*6.283),Ot.set(Ne,Ne*(.88+$()*.3),Ne),Wt.set(Le,-.45+xn(Le,Be),H+Be),ct.compose(Wt,Nt,Ot),ft.setMatrixAt(It,ct),Xt.copy(Z[Math.floor($()*Z.length)]).multiplyScalar(ut*rt*(.92+$()*.16)),ft.setColorAt(It,Xt)}),ft.instanceMatrix.needsUpdate=!0,ft.instanceColor&&(ft.instanceColor.needsUpdate=!0),ft.receiveShadow=!0,ft.castShadow=!1,ft.computeBoundingSphere(),ft.frustumCulled=!0,ft.name="Grass blades";let pt=new F;ft.onBeforeRender=(ht,It,Le)=>{pt.copy(ft.boundingSphere.center).applyMatrix4(ft.matrixWorld);let Be=pt.distanceTo(Le.getWorldPosition(Wt));ot.setDrawRange(0,6*(Be<600?11:Be>1400?6:Math.round(11-5*(Be-600)/800)))},h.add(ft)}}if(Oe.ground==="planters"){let T=nn("pstone",{n:512,seed:103,color:"#8d867a",mid:.6,fine:1,tone:.06,grit:.22,bump:6,slab:[160,64],jw:4},.92),I=nn("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),V=Ce.mats.leaf2||(Ce.mats.leaf2=new Zt({color:3493932,roughness:1,envMapIntensity:_i})),Y=["#f4f1ea","#b9a3d6","#e6b8c8"].map(Ae=>ir(Ae,.8)),Z=(Ae,je,wt,lt,Ge)=>{let ct=1-Ge;return[ct*ct*ct*Ae[0]+3*ct*ct*Ge*je[0]+3*ct*Ge*Ge*wt[0]+Ge*Ge*Ge*lt[0],ct*ct*ct*Ae[1]+3*ct*ct*Ge*je[1]+3*ct*Ge*Ge*wt[1]+Ge*Ge*Ge*lt[1]]},$=[[[N/2,0],[N/2,230],[N/2+70,330],[N/2+70,640],1],[[-N/2,0],[-N/2,300],[-N/2-190,400],[-N/2-190,640],-1]],ne=12,ae=1.1,Me=nn("pband",{n:512,seed:113,color:"#56524d",mid:.5,fine:.9,tone:.05,grit:.2,bump:4.5,rows:512,tab:64},.9);for(let[Ae,je,wt,lt,Ge]of $){let Nt=[],Kt=[],Ot=[],Wt=0,Xt=null;for(let ft=0;ft<=56;ft++){let pt=ft/56,ht=Z(Ae,je,wt,lt,pt),It=Z(Ae,je,wt,lt,Math.min(1,pt+.004)),Le=Z(Ae,je,wt,lt,Math.max(0,pt-.004)),Be=It[0]-Le[0],Ne=It[1]-Le[1],ut=Math.hypot(Be,Ne)||1;Be/=ut,Ne/=ut;let rt=Ge*Math.abs(Ne),Ye=-Ge*Be*Math.sign(Ne||1);Xt&&(Wt+=Math.hypot(ht[0]-Xt[0],ht[1]-Xt[1])),Xt=ht;let yt=ht[0]-rt*.5,Tt=ht[1]-Ye*.5,Mt=ht[0]+rt*ne,Vt=ht[1]+Ye*ne;if(Nt.push(yt,0,H+Tt,yt,ae,H+Tt,Mt,ae,H+Vt,Mt,0,H+Vt),Kt.push(Wt/48,0,Wt/48,.02,Wt/48,.27,Wt/48,.29),ft<56){let Re=ft*4;for(let Et=0;Et<3;Et++){let et=Re+Et,Pt=Re+Et+1,bt=et+4,zt=Pt+4;Ge>0?Ot.push(et,bt,Pt,Pt,bt,zt):Ot.push(et,Pt,bt,Pt,zt,bt)}}}let Ke=new $t;Ke.setAttribute("position",new Ct(Nt,3)),Ke.setAttribute("uv",new Ct(Kt,2)),Ke.setIndex(Ot),Ke.computeVertexNormals();let ot=new Ze(Ke,Me);ot.castShadow=ot.receiveShadow=!0,ot.name="Drive border",h.add(ot)}let Se=nn("pcap",{seed:119,color:"#bdb6a8",mid:.4,fine:.9,tone:.05,grit:.12,bump:2},.86),xe=Ce.mats.pgrass||(Ce.mats.pgrass=new Zt({color:8227410,roughness:1,envMapIntensity:_i})),Ue=Ce.mats.pgrassT||(Ce.mats.pgrassT=new Zt({color:12167288,roughness:1,envMapIntensity:_i}));for(let[Ae,je,wt,lt,Ge]of $){let ct=[],Kt=0;for(let ht=0;ht<=240;ht++){let It=Z(Ae,je,wt,lt,ht/240);ht&&(Kt+=Math.hypot(It[0]-ct[ht-1][0],It[1]-ct[ht-1][1])),ct.push([It[0],It[1],Kt])}let Ot=(ht,It)=>{let Le=1;for(;Le<240&&ct[Le][2]<ht;)Le++;let Be=ct[Le-1],Ne=ct[Le],ut=(ht-Be[2])/(Ne[2]-Be[2]||1),rt=Math.hypot(Ne[0]-Be[0],Ne[1]-Be[1])||1,Ye=(Ne[0]-Be[0])/rt,yt=(Ne[1]-Be[1])/rt;return[Be[0]+(Ne[0]-Be[0])*ut+Ge*yt*It,H+Be[1]+(Ne[1]-Be[1])*ut-Ge*Ye*It]},Wt=(ht,It,Le,Be,Ne,ut,rt,Ye,yt)=>{let Tt=Math.max(2,Math.ceil((It-ht)/6)),Mt=[],Vt=[],Re=[];for(let bt=0;bt<=Tt;bt++){let zt=ht+(It-ht)*bt/Tt,xt=Ot(zt,Le),Bt=Ot(zt,Be),Ht=zt/56;if(Mt.push(xt[0],Ne,xt[1],xt[0],ut,xt[1],Bt[0],ut,Bt[1],Bt[0],Ne,Bt[1]),Vt.push(Ht,Ne/56,Ht,ut/56,Ht,(ut+(Be-Le))/56,Ht,(ut+(Be-Le)+(ut-Ne))/56),bt<Tt){let vt=bt*4;for(let At=0;At<3;At++){let an=vt+At,un=vt+At+1,di=an+4,Di=un+4;Ge>0?Re.push(an,di,un,un,di,Di):Re.push(an,un,di,un,Di,di)}}}for(let[bt,zt]of[[0,1],[Tt*4,0]]){let xt=Mt.length/3;for(let Bt=0;Bt<4;Bt++)Mt.push(Mt[(bt+Bt)*3],Mt[(bt+Bt)*3+1],Mt[(bt+Bt)*3+2]);Vt.push(0,Ne/56,0,ut/56,(Be-Le)/56,ut/56,(Be-Le)/56,Ne/56),Ge>0==!!zt?Re.push(xt,xt+1,xt+2,xt,xt+2,xt+3):Re.push(xt,xt+2,xt+1,xt,xt+3,xt+2)}let Et=new $t;Et.setAttribute("position",new Ct(Mt,3)),Et.setAttribute("uv",new Ct(Vt,2)),Et.setIndex(Re);let et=Et.toNonIndexed();et.computeVertexNormals();let Pt=new Ze(et,rt);Pt.castShadow=yt!==!1,Pt.receiveShadow=!0,Pt.name=Ye,h.add(Pt)},Xt=ne+.5,Ke=34,ot=Xt+Ke,ft=20,pt=5.5;[[10,132],[156,278]].forEach(([ht,It],Le)=>{Wt(ht,It,Xt,ot,0,ft-1.2,T,"Planter"),Wt(ht+pt,It-pt,Xt+pt,ot-pt,ft-1.2,ft-.7,I,"Planter soil",!1),Wt(ht-1,It+1,Xt-1,Xt+pt+.5,ft-1.2,ft+1.3,Se,"Planter coping"),Wt(ht-1,It+1,ot-pt-.5,ot+1,ft-1.2,ft+1.3,Se,"Planter coping"),Wt(ht-1,ht+pt+.5,Xt+pt+.5,ot-pt-.5,ft-1.2,ft+1.3,Se,"Planter coping"),Wt(It-pt-.5,It+1,Xt+pt+.5,ot-pt-.5,ft-1.2,ft+1.3,Se,"Planter coping");let Be=ci(Ge*7+Le*13+40),Ne=[[],[],[],[],[],[]],ut=(Xt+ot)/2,rt=ft-.7;for(let Ye=ht+16,yt=0;Ye<It-12;Ye+=21+Be()*5,yt++){let Tt=Ot(Ye,ut+(Be()-.5)*5);if(yt%2===0){let Mt=8.5+Be()*3.5,Vt=new Js(Mt,2);Vt.scale(1,.82,1),Vt.translate(Tt[0],rt+Mt*.62,Tt[1]),Ne[0].push(Vt)}else for(let Vt=0;Vt<26;Vt++){let Re=15+Be()*11,Et=new Ya(.55,Re,4,1);Et.translate(0,Re/2,0),Et.rotateZ((Be()-.5)*.9),Et.rotateY(Be()*Math.PI*2),Et.translate(Tt[0]+(Be()-.5)*5,rt,Tt[1]+(Be()-.5)*5),Ne[Vt%5===0?5:4].push(Et)}}for(let Ye=0;Ye<70;Ye++){let yt=Ot(ht+pt+3+Be()*(It-ht-2*pt-6),Be()<.5?Xt+pt+2+Be()*4:ot-pt-2-Be()*4),Tt=new Js(1+Be()*.9,0);Tt.translate(yt[0],rt+1.4+Be()*2,yt[1]),Ne[1+Ye%3].push(Tt)}Ne.forEach((Ye,yt)=>{if(!Ye.length)return;let Tt=new Ze(kr(Ye.map(Mt=>Mt.toNonIndexed()),!1),yt===0?V:yt===4?xe:yt===5?Ue:Y[yt-1]);Tt.castShadow=Tt.receiveShadow=!0,Tt.name=yt===0?"Shrubs":yt>3?"Grasses":"Flowers",h.add(Tt)})})}}let Xr=nn("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),Po=Ce.mats.leaf||(Ce.mats.leaf=(()=>{let T=Sc("leaf",256,{seed:64,color:"#2f4426",mid:.6,fine:1.8,tone:.3,grit:.9,bump:10});return T.map.repeat.set(3,3),T.normalMap.repeat.set(3,3),new Zt({map:T.map,normalMap:T.normalMap,roughness:1,envMapIntensity:_i})})());for(let T of[-1,1]){De(34,1.2,250,T*(_/2+19),.2,H-125,Xr,"Bed","z");let I=ci(T>0?5:9);for(let V=0;V<4;V++){let Y=13+I()*5,Z=new Js(Y,3),$=Z.attributes.position;for(let ae=0;ae<$.count;ae++){let Me=$.getX(ae),Se=$.getY(ae),xe=$.getZ(ae),Ue=1+.07*Math.sin(Me*.9+V)*Math.cos(xe*1.1)+.05*Math.sin(Se*1.7);$.setXYZ(ae,Me*Ue,Se*Ue*.85,xe*Ue)}Z.computeVertexNormals();let ne=new Ze(Z,Po);ne.position.set(T*(_/2+19+(I()-.5)*6),Y*.72,H-22-V*58-I()*10),ne.castShadow=ne.receiveShadow=!0,ne.name="Boxwood",h.add(ne)}}let or=T=>{let I="rw:"+T;return Ce.mats[I]||(Ce.mats[I]=new Ci({color:Qn(T)}))},Yr=Ce.mats.epoxy||(Ce.mats.epoxy=(()=>{let I=document.createElement("canvas");I.width=I.height=512;let V=I.getContext("2d"),Y=ci(4411);V.fillStyle="#c8ad82",V.fillRect(0,0,512,512);let Z=["#efe2c6","#b89868","#a08256","#7c6344","#e2d0aa","#9c8f7a","#5f5040"];for(let ne=0;ne<5200;ne++){let ae=Y()*512,Me=Y()*512,Se=1.2+Y()*3.6,xe=1+Y()*2.6;V.save(),V.translate(ae,Me),V.rotate(Y()*6.283),V.globalAlpha=.55+Y()*.45,V.fillStyle=Z[Math.floor(Y()*Z.length)],V.fillRect(-Se/2,-xe/2,Se,xe),V.restore(),(ae<4||Me<4||ae>508||Me>508)&&(V.save(),V.translate(ae+(ae<4?512:ae>508?-512:0),Me+(Me<4?512:Me>508?-512:0)),V.fillStyle=Z[ne%Z.length],V.fillRect(-Se/2,-xe/2,Se,xe),V.restore())}let $=new Xi(I);return $.wrapS=$.wrapT=Fn,$.colorSpace=Jt,$.anisotropy=8,new Ii({map:$,roughness:.34,metalness:0,clearcoat:.5,clearcoatRoughness:.18,envMapIntensity:.22})})()),ei=new Jn,Zi=(T,I)=>{let V="room:"+T+I;return Ce.mats[V]||(Ce.mats[V]=new Zt({color:Qn(T),roughness:.95,metalness:0,envMapIntensity:.25,emissive:Qn(T),emissiveIntensity:I}))},ji=Oe.garage==="light",qr=ji?Zi("#f1eee8",.22):Zi("#e6dfd0",0),Zr=ji?Zi("#e6e3dc",.18):Zi("#d9d2c3",0),ui=260,C=new Ze(new ai(_,ui).rotateX(-Math.PI/2),Yr);C.geometry.attributes.uv.array.forEach((T,I,V)=>{V[I]=T*(I%2?ui/40:_/40)}),C.position.set(0,-.01,H-O-ui/2+6),C.receiveShadow=!0,ei.add(C);let j=new Ze(new ai(_,L),qr);j.position.set(0,L/2,H-O-ui+6),j.receiveShadow=!0,ei.add(j);let ee=new Ze(new ai(_,ui).rotateX(Math.PI/2),Zr);Zr.shadowSide=Tn,ee.castShadow=!0,ee.position.set(0,w+14,H-O-ui/2+6),ei.add(ee);for(let T of[-1,1]){let I=new Ze(new ai(ui,L).rotateY(-T*Math.PI/2),qr);I.position.set(T*(_/2-O-.4),L/2,H-O-ui/2+6),I.receiveShadow=!0,ei.add(I)}let te=new Ks(ji?16775924:16774114,ji?2300:2400,420,1.7);te.position.set(0,w-6,H-O-110),ei.add(te),h.add(ei),G.scene.add(h);let Q=Math.max(_,f)*.9+140;G.sun.position.set(-u*.62-40,f*2.5+40,u*.5+70),G.sun.target.position.set(0,f*.4,0);let Ve=G.sun.shadow.camera;Ve.left=-Q,Ve.right=Q,Ve.top=Q,Ve.bottom=-Q,Ve.near=10,Ve.far=2400,Ve.updateProjectionMatrix();let it=d.L.n+":"+_+":"+f;return it!==G.key&&(G.key=it,G.fit=Math.max((_-2*E)/(2*Math.tan(15*Math.PI/180)*Math.max(.6,G.cam.aspect)),f/(2*Math.tan(15*Math.PI/180)))*1.32,Cc()),G.ctl.minDistance=G.fit*.25,G.ctl.maxDistance=G.fit*2.2,d.L.man||(G.m=0),Co(),hi(),G.ready=!0,Cn}function Co(){if(!G.L)return;let i=new Ft,e=(t,n,s,r)=>{let a=(t.e3?Z_(t,G.f):qu(t,G.f,r)).poses;n.forEach((o,l)=>{let c=a[l];c&&(i.set(c.X[0],0,c.Z[0],c.C[0],0,1,0,0,c.X[1],0,c.Z[1],c.C[1],0,0,0,1),o.matrix.copy(i),o.matrixWorldNeedsUpdate=!0)}),(s||[]).forEach(o=>{let l=a[o.i];l&&(o.m.position.x=l.X[0]*o.lx+l.Z[0]*o.lz+l.C[0],o.m.position.z=l.X[1]*o.lx+l.Z[1]*o.lz+l.C[1])})};e(G.L,G.leaves,G.fixA,G.m),G.B&&e(G.B.L,G.B.lvs,G.B.fix,0)}function nx(i){return G.f=Math.max(0,Math.min(1,+i||0)),Co(),hi(),Cn}function ix(i){return G.m=Math.max(0,Math.min(1,+i||0)),Co(),hi(),Cn}function Cc(){if(!G.r)return;let i=24*Math.PI/180,e=1.5*Math.PI/180,t=G.fit*1.22;G.ctl.target.set(0,G.H*.6,0),G.cam.position.set(Math.sin(i)*Math.cos(e)*t,G.H*.6+Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t),G.ctl.update(),hi()}function sx(i){if(!G.r)return Cn;let e=(i==="in"?156:22)*Math.PI/180,t=6*Math.PI/180,n=i==="in"?Math.min(G.fit,190):G.fit;return G.cam.position.set(Math.sin(e)*Math.cos(t)*n,G.H*.47+Math.sin(t)*n,Math.cos(e)*Math.cos(t)*n),G.ctl.update(),hi(),Cn}function rx(i,e,t){let n=G.f,s=performance.now();return e=e||2600,G.anim=()=>{let r=Math.min(1,(performance.now()-s)/e),a=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;G.f=n+(i-n)*a,Co(),G.dirty=!0,t&&t(G.f),r>=1&&(G.anim=null)},hi(),Cn}function ax(){return G.r?(Ku(),G.r.domElement.toDataURL("image/jpeg",.92)):null}function ox(){let i=(n,s)=>{let r=n.find(a=>String(a[0])===String(s));return r?r[1]:String(s??"")},e=/pavers|herr|mix/.test(String(Oe.drive||""))||/pavers|herr|mix/.test(String(Oe.ground||"")),t=[["Structure",i(ar,Oe.structure)],["Roof",i(Ao,Oe.roof)]];return Oe.roof!=="flat"&&t.push(["Slope",Oe.pitch+":12"],["Eave",Oe.eave==="deep"?"Deep":"Short"]),t.push(["Openings",i(To,Oe.second)],["Driveway",i(Eo,Oe.drive)],["Ground",i(wo,Oe.ground)]),e&&t.push(["Paver colour",i(Ec,Oe.paver)]),t.push(["Lights",i(wc,Oe.light)]),t.filter(n=>n[1])}var Cn={v:Yu,setting:ju,scene:ox,mount:ex,show:Rc,fold:nx,man:ix,look:sx,reset:Cc,animate:rx,shot:ax,dispose:Qu,stop(){G.anim=null},get ready(){return G.ready},get folded(){return G.f},get hasMan(){return!!(G.L&&G.L.man)},_E:G,_pose:qu},fv=Cn;jt.TR3D=Cn;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
