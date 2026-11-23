(()=>{var us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},id=0,Oc=1,sd=2;var fu=1,lc=2,wi=3,Gi=0,An=1,yn=2;var dn=0,Fs=1,Ea=2,Fc=3,Bc=4,cc=5,Jn=100,rd=101,ad=102,zc=103,Hc=104,Qs=200,od=201,ld=202,cd=203,yl=204,Ml=205,co=206,hd=207,ho=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,_d=0,xd=1,vd=2,wa=3,yd=4,Md=5,bd=6,Sd=7,pu=0,Ed=1,wd=2,ki=0,hc=1,uc=2,dc=3,Nr=4,Td=5,fc=6;var mu=300,Hs=301,ks=302,rs=303,bl=304,uo=306,Fn=1e3,Gn=1001,Sl=1002,cn=1003,kc=1004;var Ho=1005;var hn=1006,Ad=1007;var Vs=1008;var mi=1009,Rd=1010,Cd=1011,pc=1012,gu=1013,Hi=1014,On=1015,bn=1016,_u=1017,xu=1018,Ri=1020,Pd=1021,Ln=1023,Id=1024,Ld=1025,is=1026,Wi=1027,Dd=1028,vu=1029,Ud=1030,yu=1031,Mu=1033,ko=33776,Vo=33777,Go=33778,Wo=33779,Vc=35840,Gc=35841,Wc=35842,Xc=35843,bu=36196,Yc=37492,qc=37496,Zc=37808,jc=37809,Jc=37810,$c=37811,Kc=37812,Qc=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,ah=37820,oh=37821,Xo=36492,lh=36494,ch=36495,Nd=36283,hh=36284,uh=36285,dh=36286;var Ta=2300,Aa=2301,Yo=2302,fh=2400,ph=2401,mh=2402;var Su=3e3,ss=3001,Od=3200,Fd=3201,mc=0,Bd=1,Nn="",Kt="srgb",Xn="srgb-linear",gc="display-p3",fo="display-p3-linear",Ra="linear",jt="srgb",Ca="rec709",Pa="p3";var ms=7680;var gh=519,zd=512,Hd=513,kd=514,Eu=515,Vd=516,Gd=517,Wd=518,Xd=519,_h=35044;var xh="300 es",El=1035,Ai=2e3,Ia=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,mr=Math.PI/180,Mr=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function _c(i,e){return(i%e+e)%e}function Yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qd(i,e,t){return i!==e?(t-i)/(e-i):0}function gr(i,e,t){return(1-t)*i+t*e}function Zd(i,e,t,n){return gr(i,e,1-Math.exp(-t*n))}function jd(i,e=1){return e-Math.abs(_c(i,e*2)-e)}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qd(i,e){return i+Math.random()*(e-i)}function ef(i){return i*(.5-Math.random())}function tf(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(i){return i*mr}function sf(i){return i*Mr}function wl(i){return(i&i-1)===0&&i!==0}function rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function La(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function af(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wu={DEG2RAD:mr,RAD2DEG:Mr,generateUUID:fs,clamp:an,euclideanModulo:_c,mapLinear:Yd,inverseLerp:qd,lerp:gr,damp:Zd,pingpong:jd,smoothstep:Jd,smootherstep:$d,randInt:Kd,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:sf,isPowerOfTwo:wl,ceilPowerOfTwo:rf,floorPowerOfTwo:La,setQuaternionFromProperEuler:af,normalize:Pn,denormalize:Ls},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],b=s[7],A=s[2],S=s[5],w=s[8];return r[0]=a*x+o*M+l*A,r[3]=a*m+o*_+l*S,r[6]=a*p+o*b+l*w,r[1]=c*x+h*M+d*A,r[4]=c*m+h*_+d*S,r[7]=c*p+h*b+d*w,r[2]=u*x+f*M+g*A,r[5]=u*m+f*_+g*S,r[8]=u*p+f*b+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qo=new Ut;function Tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function of(){let i=br("canvas");return i.style.display="block",i}var yh={};function _r(i){i in yh||(yh[i]=!0,console.warn(i))}var Mh=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bh=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[Xn]:{transfer:Ra,primaries:Ca,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:jt,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fo]:{transfer:Ra,primaries:Pa,toReference:i=>i.applyMatrix3(bh),fromReference:i=>i.applyMatrix3(Mh)},[gc]:{transfer:jt,primaries:Pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(bh),fromReference:i=>i.applyMatrix3(Mh).convertLinearToSRGB()}},lf=new Set([Xn,fo]),Vt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=$r[e].toReference,s=$r[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===Nn?Ra:$r[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,Da=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=br("canvas")),gs.width=e.width,gs.height=e.height;let n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,Ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hf=0,Bn=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=hn,a=Vs,o=Ln,l=mi,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=fs(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?Kt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?ss:Su}set encoding(e){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?Kt:Nn}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=mu;Bn.DEFAULT_ANISOTROPY=1;var en=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(f+1)/2,A=(p+1)/2,S=(h+u)/4,w=(d+x)/4,I=(g+m)/4;return _>b&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=w/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?Kt:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),S=Math.atan2(A,p*M);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A}let b=o*M;if(l=l*m+u*b,c=c*m+f*b,h=h*m+g*b,d=d*m+x*b,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new O,Sh=new Yn,Ci=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Qr.subVectors(this.max,lr),_s.subVectors(e.a,lr),xs.subVectors(e.b,lr),vs.subVectors(e.c,lr),Ni.subVectors(xs,_s),Oi.subVectors(vs,xs),$i.subVectors(_s,vs);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-$i.z,$i.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,$i.z,0,-$i.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-$i.y,$i.x,0];return!$o(t,_s,xs,vs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,_s,xs,vs,Qr))?!1:(ea.crossVectors(Ni,Oi),t=[ea.x,ea.y,ea.z],$o(t,_s,xs,vs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new O,new O,new O,new O,new O,new O,new O,new O],ii=new O,Kr=new Ci,_s=new O,xs=new O,vs=new O,Ni=new O,Oi=new O,$i=new O,lr=new O,Qr=new O,ea=new O,Ki=new O;function $o(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var uf=new Ci,cr=new O,Ko=new O,as=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ko)),this.expandByPoint(cr.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new O,Qo=new O,ta=new O,Fi=new O,el=new O,na=new O,tl=new O,Sr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Qo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=Fi.dot(this.direction),l=-Fi.dot(ta),c=Fi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qo).addScaledVector(ta,u),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){el.subVectors(t,e),na.subVectors(n,e),tl.crossVectors(el,na);let a=this.direction.dot(tl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);let l=o*this.direction.dot(na.crossVectors(Fi,na));if(l<0)return null;let c=o*this.direction.dot(el.cross(Fi));if(c<0||l+c>a)return null;let h=-o*Fi.dot(tl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Bi.crossVectors(n,kn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Bi.crossVectors(n,kn)),Bi.normalize(),ia.crossVectors(kn,Bi),s[0]=Bi.x,s[4]=ia.x,s[8]=kn.x,s[1]=Bi.y,s[5]=ia.y,s[9]=kn.y,s[2]=Bi.z,s[6]=ia.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],b=n[11],A=n[15],S=s[0],w=s[4],I=s[8],y=s[12],v=s[1],U=s[5],z=s[9],X=s[13],P=s[2],D=s[6],F=s[10],J=s[14],H=s[3],q=s[7],se=s[11],ae=s[15];return r[0]=a*S+o*v+l*P+c*H,r[4]=a*w+o*U+l*D+c*q,r[8]=a*I+o*z+l*F+c*se,r[12]=a*y+o*X+l*J+c*ae,r[1]=h*S+d*v+u*P+f*H,r[5]=h*w+d*U+u*D+f*q,r[9]=h*I+d*z+u*F+f*se,r[13]=h*y+d*X+u*J+f*ae,r[2]=g*S+x*v+m*P+p*H,r[6]=g*w+x*U+m*D+p*q,r[10]=g*I+x*z+m*F+p*se,r[14]=g*y+x*X+m*J+p*ae,r[3]=M*S+_*v+b*P+A*H,r[7]=M*w+_*U+b*D+A*q,r[11]=M*I+_*z+b*F+A*se,r[15]=M*y+_*X+b*J+A*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+x*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=d*m*c-x*u*c+x*l*f-o*m*f-d*l*p+o*u*p,_=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,b=h*x*c-g*d*c+g*o*f-a*x*f-h*o*p+a*d*p,A=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,S=t*M+n*_+s*b+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=M*w,e[1]=(x*u*r-d*m*r-x*s*f+n*m*f+d*s*p-n*u*p)*w,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*w,e[4]=_*w,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*w,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*w,e[8]=b*w,e[9]=(g*d*r-h*x*r-g*n*f+t*x*f+h*n*p-t*d*p)*w,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*w,e[12]=A*w,e[13]=(h*x*s-g*d*s+g*n*u-t*x*u-h*n*m+t*d*m)*w,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*w,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,M=l*c,_=l*h,b=l*d,A=n.x,S=n.y,w=n.z;return s[0]=(1-(x+p))*A,s[1]=(f+b)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(u+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+_)*w,s[9]=(m-M)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);let c=1/r,h=1/a,d=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ai){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,g;if(o===Ai)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ia)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ai){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,f=(n+s)*h,g,x;if(o===Ai)g=(a+r)*d,x=-2*d;else if(o===Ia)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ys=new O,si=new Ft,df=new O(0,0,0),ff=new O(1,1,1),Bi=new O,ia=new O,kn=new O,Eh=new Ft,wh=new Yn,Oa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oa.DEFAULT_ORDER="XYZ";var Fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pf=0,Th=new O,Ms=new Yn,Mi=new Ft,sa=new O,hr=new O,mf=new O,gf=new Yn,Ah=new O(1,0,0),Rh=new O(0,1,0),Ch=new O(0,0,1),_f={type:"added"},xf={type:"removed"},Dn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Oa,n=new Yn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Ut}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(hr,sa,this.up):Mi.lookAt(sa,hr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dn.DEFAULT_UP=new O(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new O,bi=new O,nl=new O,Si=new O,bs=new O,Ss=new O,Ph=new O,il=new O,sl=new O,rl=new O,ra=!1,Ds=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),bi.subVectors(n,t),nl.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(bi),l=ri.dot(nl),c=bi.dot(bi),h=bi.dot(nl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,n,s,r,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),bi.subVectors(e,t),ri.cross(bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ri.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Ss.subVectors(r,n),il.subVectors(e,n);let l=bs.dot(il),c=Ss.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,s);let h=bs.dot(sl),d=Ss.dot(sl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bs,a);rl.subVectors(e,r);let f=bs.dot(rl),g=Ss.dot(rl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ph.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Ph,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=_c(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=al(a,r,e+1/3),this.g=al(a,r,e),this.b=al(a,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Vt.fromWorkingColorSpace(wn.copy(this),e),Math.round(an(wn.r*255,0,255))*65536+Math.round(an(wn.g*255,0,255))*256+Math.round(an(wn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Kt){Vt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(aa);let n=gr(zi.h,aa.h,t),s=gr(zi.s,aa.s,t),r=gr(zi.l,aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new xt;xt.NAMES=Au;var vf=0,Xi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Fs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Ml,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pi=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ti=yf();function yf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Mf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=an(i,-65504,65504),Ti.floatView[0]=i;let e=Ti.uint32View[0],t=e>>23&511;return Ti.baseTable[t]+((e&8388607)>>Ti.shiftTable[t])}function bf(i){let e=i>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[e]+(i&1023)]+Ti.exponentTable[e],Ti.floatView[0]}var Or={toHalfFloat:Mf,fromHalfFloat:bf},ln=new O,oa=new le,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var Gs=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Sf=0,jn=new Ft,ol=new Dn,Es=new O,Vn=new Ci,ur=new Ci,vn=new O,Xt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Ba:Gs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(Vn.min,ur.min),Vn.expandByPoint(vn),vn.addVectors(Vn.max,ur.max),Vn.expandByPoint(vn)):(Vn.expandByPoint(ur.min),Vn.expandByPoint(ur.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vn.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),vn.add(Es)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let v=0;v<o;v++)c[v]=new O,h[v]=new O;let d=new O,u=new O,f=new O,g=new le,x=new le,m=new le,p=new O,M=new O;function _(v,U,z){d.fromArray(s,v*3),u.fromArray(s,U*3),f.fromArray(s,z*3),g.fromArray(a,v*2),x.fromArray(a,U*2),m.fromArray(a,z*2),u.sub(d),f.sub(d),x.sub(g),m.sub(g);let X=1/(x.x*m.y-m.x*x.y);isFinite(X)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(X),M.copy(f).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar(X),c[v].add(p),c[U].add(p),c[z].add(p),h[v].add(M),h[U].add(M),h[z].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let v=0,U=b.length;v<U;++v){let z=b[v],X=z.start,P=z.count;for(let D=X,F=X+P;D<F;D+=3)_(n[D+0],n[D+1],n[D+2])}let A=new O,S=new O,w=new O,I=new O;function y(v){w.fromArray(r,v*3),I.copy(w);let U=c[v];A.copy(U),A.sub(w.multiplyScalar(w.dot(U))).normalize(),S.crossVectors(I,U);let X=S.dot(h[v])<0?-1:1;l[v*4]=A.x,l[v*4+1]=A.y,l[v*4+2]=A.z,l[v*4+3]=X}for(let v=0,U=b.length;v<U;++v){let z=b[v],X=z.start,P=z.count;for(let D=X,F=X+P;D<F;D+=3)y(n[D+0]),y(n[D+1]),y(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new Ft,Qi=new Sr,la=new as,Lh=new O,ws=new O,Ts=new O,As=new O,ll=new O,ca=new O,ha=new le,ua=new le,da=new le,Dh=new O,Uh=new O,Nh=new O,fa=new O,pa=new O,Xe=class extends Dn{constructor(e=new Xt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ll.fromBufferAttribute(d,e),a?ca.addScaledVector(ll,h):ca.addScaledVector(ll.sub(t),h))}t.add(ca)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(la.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(la,Lh)===null||Qi.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Ih.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=_;b<A;b+=3){let S=o.getX(b),w=o.getX(b+1),I=o.getX(b+2);s=ma(this,p,e,n,c,h,d,S,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=ma(this,a,e,n,c,h,d,M,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=_;b<A;b+=3){let S=b,w=b+1,I=b+2;s=ma(this,p,e,n,c,h,d,S,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,b=m+2;s=ma(this,a,e,n,c,h,d,M,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ef(i,e,t,n,s,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gi,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ws),i.getVertexPosition(l,Ts),i.getVertexPosition(c,As);let h=Ef(i,e,t,n,ws,Ts,As,fa);if(h){s&&(ha.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),h.uv=Ds.getInterpolation(fa,ws,Ts,As,ha,ua,da,new le)),r&&(ha.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=Ds.getInterpolation(fa,ws,Ts,As,ha,ua,da,new le),h.uv2=h.uv1),a&&(Dh.fromBufferAttribute(a,o),Uh.fromBufferAttribute(a,l),Nh.fromBufferAttribute(a,c),h.normal=Ds.getInterpolation(fa,ws,Ts,As,Dh,Uh,Nh,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Ds.getNormal(ws,Ts,As,d.normal),h.face=d}return h}var fn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function g(x,m,p,M,_,b,A,S,w,I,y){let v=b/w,U=A/I,z=b/2,X=A/2,P=S/2,D=w+1,F=I+1,J=0,H=0,q=new O;for(let se=0;se<F;se++){let ae=se*U-X;for(let me=0;me<D;me++){let K=me*v-z;q[x]=K*M,q[m]=ae*_,q[p]=P,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(me/w),d.push(1-se/I),J+=1}}for(let se=0;se<I;se++)for(let ae=0;ae<w;ae++){let me=u+ae+D*se,K=u+ae+D*(se+1),ce=u+(ae+1)+D*(se+1),Le=u+(ae+1)+D*se;l.push(me,K,Le),l.push(K,ce,Le),H+=6}o.addGroup(f,H,y),f+=H,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function wf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ru(i){return i.getRenderTarget()===null?i.outputColorSpace:Vt.workingColorSpace}var ci={clone:Ws,merge:In},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},za=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=class extends za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,Rl=class extends Dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Tn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new Tn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new Tn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new Tn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Tn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends Bn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cl=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?Kt:Nn),this.texture=new Ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:dn});r.uniforms.tEquirect.value=t;let a=new Xe(s,r),o=t.minFilter;return t.minFilter===Vs&&(t.minFilter=hn),new Rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},cl=new O,Rf=new O,Cf=new Ut,ai=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cl.subVectors(n,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cf.getNormalMatrix(e),s=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new as,ga=new O,Er=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-f,b-p).normalize(),n[1].setComponents(l+r,u+c,m+f,b+p).normalize(),n[2].setComponents(l+a,u+h,m+g,b+M).normalize(),n[3].setComponents(l-a,u-h,m-g,b-M).normalize(),n[4].setComponents(l-o,u-d,m-x,b-_).normalize(),t===Ai)n[5].setComponents(l+o,u+d,m+x,b+_).normalize();else if(t===Ia)n[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,f=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var oi=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let _=0;_<c;_++){let b=_*d-r;g.push(b,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),S=M+1+c*p;f.push(_,b,S),f.push(b,A,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`
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
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Ip=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:If,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:Uf,alphatest_fragment:Nf,alphatest_pars_fragment:Of,aomap_fragment:Ff,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:Hf,begin_vertex:kf,beginnormal_vertex:Vf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:jf,color_fragment:Jf,color_pars_fragment:$f,color_pars_vertex:Kf,color_vertex:Qf,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:ap,colorspace_fragment:op,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:Ep,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_fragment:vp,lightmap_pars_fragment:yp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:bp,lights_pars_begin:Sp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Ip,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Fp,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:Hp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:Yp,morphtarget_vertex:qp,normal_fragment_begin:Zp,normal_fragment_maps:jp,normal_pars_fragment:Jp,normal_pars_vertex:$p,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:bm,tonemapping_pars_fragment:Sm,transmission_fragment:Em,transmission_pars_fragment:wm,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Nm,depth_vert:Om,depth_frag:Fm,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:Hm,equirect_frag:km,linedashed_vert:Vm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:Ym,meshlambert_frag:qm,meshmatcap_vert:Zm,meshmatcap_frag:jm,meshnormal_vert:Jm,meshnormal_frag:$m,meshphong_vert:Km,meshphong_frag:Qm,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},ze={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},pi={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};pi.physical={uniforms:In([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var _a={r:0,b:0,g:0};function hg(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===uo)?(h===void 0&&(h=new Xe(new fn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ws(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Vt.getTransfer(_.colorSpace)!==jt,(d!==_||u!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new oi(2,2),new pn({name:"BackgroundMaterial",uniforms:Ws(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(_a,Ru(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function ug(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(P,D,F,J,H){let q=!1;if(a){let se=x(J,F,D);c!==se&&(c=se,f(c.object)),q=p(P,J,F,H),q&&M(P,J,F,H)}else{let se=D.wireframe===!0;(c.geometry!==J.id||c.program!==F.id||c.wireframe!==se)&&(c.geometry=J.id,c.program=F.id,c.wireframe=se,q=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,I(P,D,F,J),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,D,F){let J=F.wireframe===!0,H=o[P.id];H===void 0&&(H={},o[P.id]=H);let q=H[D.id];q===void 0&&(q={},H[D.id]=q);let se=q[J];return se===void 0&&(se=m(u()),q[J]=se),se}function m(P){let D=[],F=[],J=[];for(let H=0;H<s;H++)D[H]=0,F[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,D,F,J){let H=c.attributes,q=D.attributes,se=0,ae=F.getAttributes();for(let me in ae)if(ae[me].location>=0){let ce=H[me],Le=q[me];if(Le===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),ce===void 0||ce.attribute!==Le||Le&&ce.data!==Le.data)return!0;se++}return c.attributesNum!==se||c.index!==J}function M(P,D,F,J){let H={},q=D.attributes,se=0,ae=F.getAttributes();for(let me in ae)if(ae[me].location>=0){let ce=q[me];ce===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor));let Le={};Le.attribute=ce,ce&&ce.data&&(Le.data=ce.data),H[me]=Le,se++}c.attributes=H,c.attributesNum=se,c.index=J}function _(){let P=c.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function b(P){A(P,0)}function A(P,D){let F=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;F[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),H[P]!==D&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),H[P]=D)}function S(){let P=c.newAttributes,D=c.enabledAttributes;for(let F=0,J=D.length;F<J;F++)D[F]!==P[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function w(P,D,F,J,H,q,se){se===!0?i.vertexAttribIPointer(P,D,F,H,q):i.vertexAttribPointer(P,D,F,J,H,q)}function I(P,D,F,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let H=J.attributes,q=F.getAttributes(),se=D.defaultAttributeValues;for(let ae in q){let me=q[ae];if(me.location>=0){let K=H[ae];if(K===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let ce=K.normalized,Le=K.itemSize,qe=t.get(K);if(qe===void 0)continue;let He=qe.buffer,Je=qe.type,rt=qe.bytesPerElement,Ye=n.isWebGL2===!0&&(Je===i.INT||Je===i.UNSIGNED_INT||K.gpuType===gu);if(K.isInterleavedBufferAttribute){let Ae=K.data,B=Ae.stride,Ee=K.offset;if(Ae.isInstancedInterleavedBuffer){for(let oe=0;oe<me.locationSize;oe++)A(me.location+oe,Ae.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let oe=0;oe<me.locationSize;oe++)b(me.location+oe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let oe=0;oe<me.locationSize;oe++)w(me.location+oe,Le/me.locationSize,Je,ce,B*rt,(Ee+Le/me.locationSize*oe)*rt,Ye)}else{if(K.isInstancedBufferAttribute){for(let Ae=0;Ae<me.locationSize;Ae++)A(me.location+Ae,K.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ae=0;Ae<me.locationSize;Ae++)b(me.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ae=0;Ae<me.locationSize;Ae++)w(me.location+Ae,Le/me.locationSize,Je,ce,Le*rt,Le/me.locationSize*Ae*rt,Ye)}}else if(se!==void 0){let ce=se[ae];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(me.location,ce);break;case 3:i.vertexAttrib3fv(me.location,ce);break;case 4:i.vertexAttrib4fv(me.location,ce);break;default:i.vertexAttrib1fv(me.location,ce)}}}}S()}function y(){z();for(let P in o){let D=o[P];for(let F in D){let J=D[F];for(let H in J)g(J[H].object),delete J[H];delete D[F]}delete o[P]}}function v(P){if(o[P.id]===void 0)return;let D=o[P.id];for(let F in D){let J=D[F];for(let H in J)g(J[H].object),delete J[H];delete D[F]}delete o[P.id]}function U(P){for(let D in o){let F=o[D];if(F[P.id]===void 0)continue;let J=F[P.id];for(let H in J)g(J[H].object),delete J[H];delete F[P.id]}}function z(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:X,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:b,disableUnusedAttributes:S}}function dg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function fg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,b=a||e.has("OES_texture_float"),A=_&&b,S=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:S}}function pg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ai,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,_=M*4,b=p.clippingState||null;l.value=b,b=h(g,u,_,f);for(let A=0;A!==_;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)a.copy(d[_]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function mg(i){let e=new WeakMap;function t(a,o){return o===rs?a.mapping=Hs:o===bl&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===rs||o===bl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xs=class extends za{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,Oh=[.125,.215,.35,.446,.526,.582],ns=20,hl=new Xs,Fh=new xt,ul=null,dl=0,fl=0,ts=(1+Math.sqrt(5))/2,Ps=1/ts,Bh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ts,Ps),new O(0,ts,-Ps),new O(Ps,0,ts),new O(-Ps,0,ts),new O(ts,Ps,0),new O(-ts,Ps,0)],Ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,fl),e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:bn,format:Ln,colorSpace:Xn,depthBuffer:!1},s=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=_g(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,s){let o=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fh),h.toneMapping=ki,h.autoClear=!1;let f=new Pi({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Xe(new fn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Fh),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;xa(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bh[(s-1)%Bh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Xe(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let p=[],M=0;for(let w=0;w<ns;++w){let I=w/x,y=Math.exp(-I*I/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let b=this._sizeLods[s],A=3*b*(s>_-Us?s-_+Us:0),S=4*(this._cubeSize-b);xa(t,A,S,3*b,2*b),l.setRenderTarget(t),l.render(d,hl)}};function gg(i){let e=[],t=[],n=[],s=i,r=i-Us+1+Oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Us?l=Oh[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,I=S>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(y,x*g*S),_.set(u,m*g*S);let v=[S,S,S,S,S,S];b.set(v,p*g*S)}let A=new Xt;A.setAttribute("position",new Jt(M,x)),A.setAttribute("uv",new Jt(_,m)),A.setAttribute("faceIndex",new Jt(b,p)),e.push(A),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _g(i,e,t){let n=new Float32Array(ns),s=new O(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Hh(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function kh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function xg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===rs||l===bl,h=l===Hs||l===ks;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ys(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Ys(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let _=0,b=M.length;_<b;_+=3){let A=M[_+0],S=M[_+1],w=M[_+2];u.push(A,S,S,w,w,A)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,b=M.length/3-1;_<b;_+=3){let A=_+0,S=_+1,w=_+2;u.push(A,S,S,w,w,A)}}else return;let m=new(Tu(u)?Ba:Gs)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Mg(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),t.update(g,r,x)}function u(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let M=0;M<x;M++)p+=g[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function bg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sg(i,e){return i[0]-e[0]}function Eg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new en,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],I=0;M===!0&&(I=1),_===!0&&(I=2),b===!0&&(I=3);let y=h.attributes.position.count*I,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let U=new Float32Array(y*v*4*g),z=new Na(U,y,v,g);z.type=On,z.needsUpdate=!0;let X=I*4;for(let D=0;D<g;D++){let F=A[D],J=S[D],H=w[D],q=y*v*4*D;for(let se=0;se<F.count;se++){let ae=se*X;M===!0&&(a.fromBufferAttribute(F,se),U[q+ae+0]=a.x,U[q+ae+1]=a.y,U[q+ae+2]=a.z,U[q+ae+3]=0),_===!0&&(a.fromBufferAttribute(J,se),U[q+ae+4]=a.x,U[q+ae+5]=a.y,U[q+ae+6]=a.z,U[q+ae+7]=0),b===!0&&(a.fromBufferAttribute(H,se),U[q+ae+8]=a.x,U[q+ae+9]=a.y,U[q+ae+10]=a.z,U[q+ae+11]=H.itemSize===4?a.w:1)}}x={count:g,texture:z,size:new le(y,v)},r.set(h,x),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=u[_]}g.sort(Eg);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Sg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=o[_],A=b[0],S=b[1];A!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[A]&&h.setAttribute("morphTarget"+_,x[A]),m&&h.getAttribute("morphNormal"+_)!==m[A]&&h.setAttribute("morphNormal"+_,m[A]),s[_]=S,p+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Tg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var qs=class extends Bn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:is,h!==is&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Hi),n===void 0&&h===Wi&&(n=Ri),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pu=new Bn,Iu=new qs(1,1);Iu.compareFunction=Eu;var Lu=new Na,Du=new Al,Uu=new Ha,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),Yh=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function po(i,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),gn(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),gn(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),gn(t,n)}}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Iu:Pu;t.setTexture2D(e||r,s)}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Du,s)}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uu,s)}function Xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lu,s)}function Yg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function jg(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function Jg(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kg(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qg(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e0(i,e){i.uniform1iv(this.addr,e)}function t0(i,e){i.uniform2iv(this.addr,e)}function n0(i,e){i.uniform3iv(this.addr,e)}function i0(i,e){i.uniform4iv(this.addr,e)}function s0(i,e){i.uniform1uiv(this.addr,e)}function r0(i,e){i.uniform2uiv(this.addr,e)}function a0(i,e){i.uniform3uiv(this.addr,e)}function o0(i,e){i.uniform4uiv(this.addr,e)}function l0(i,e,t){let n=this.cache,s=e.length,r=po(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Pu,r[a])}function c0(i,e,t){let n=this.cache,s=e.length,r=po(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Du,r[a])}function h0(i,e,t){let n=this.cache,s=e.length,r=po(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uu,r[a])}function u0(i,e,t){let n=this.cache,s=e.length,r=po(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lu,r[a])}function d0(i){switch(i){case 5126:return qg;case 35664:return Zg;case 35665:return jg;case 35666:return Jg;case 35674:return $g;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}},Ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function f0(i,e,t){let n=i.name,s=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),a=pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qh(t,c===void 0?new Pl(o,i,e):new Il(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ll(o),qh(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);f0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Zh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p0=37297,m0=0;function g0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function _0(i){let e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(i),n;switch(e===t?n="":e===Pa&&t===Ca?n="LinearDisplayP3ToLinearSRGB":e===Ca&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case fo:return[n,"LinearTransferOETF"];case Kt:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+g0(i.getShaderSource(e),a)}else return s}function x0(i,e){let t=_0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v0(i,e){let t;switch(e){case hc:t="Linear";break;case uc:t="Reinhard";break;case dc:t="OptimizedCineon";break;case Nr:t="ACESFilmic";break;case fc:t="AgX";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function b0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ns(i){return i!==""}function Jh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(E0,T0)}var w0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T0(i,e){let t=Ct[e];if(t===void 0){let n=w0.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(A0,R0)}function R0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case ks:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ks&&(e="ENVMAP_MODE_REFRACTION"),e}function L0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function D0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=C0(t),c=P0(t),h=I0(t),d=L0(t),u=D0(t),f=t.isWebGL2?"":y0(t),g=M0(t),x=b0(r),m=s.createProgram(),p,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ns).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ns).join(`
`),M.length>0&&(M+=`
`)):(p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),M=[f,Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ct.tonemapping_pars_fragment:"",t.toneMapping!==ki?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Dl(a),a=Jh(a,t),a=$h(a,t),o=Dl(o),o=Jh(o,t),o=$h(o,t),a=Kh(a),o=Kh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let b=_+p+a,A=_+M+o,S=Zh(s,s.VERTEX_SHADER,b),w=Zh(s,s.FRAGMENT_SHADER,A);s.attachShader(m,S),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(z){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(S).trim(),D=s.getShaderInfoLog(w).trim(),F=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,w);else{let H=jh(s,S,"vertex"),q=jh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+H+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||D==="")&&(J=!1);J&&(z.diagnostics={runnable:F,programLog:X,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:M}})}s.deleteShader(S),s.deleteShader(w),y=new zs(s,m),v=S0(s,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,p0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var N0=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nl(e),t.set(e,n)),n}},Nl=class{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}};function O0(i,e,t,n,s,r,a){let o=new Fa,l=new Ul,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,v,U,z,X){let P=z.fog,D=X.geometry,F=y.isMeshStandardMaterial?z.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),H=J&&J.mapping===uo?J.image.height:null,q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=se!==void 0?se.length:0,me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let K,ce,Le,qe;if(q){let _n=pi[q];K=_n.vertexShader,ce=_n.fragmentShader}else K=y.vertexShader,ce=y.fragmentShader,l.update(y),Le=l.getVertexShaderID(y),qe=l.getFragmentShaderID(y);let He=i.getRenderTarget(),Je=X.isInstancedMesh===!0,rt=X.isBatchedMesh===!0,Ye=!!y.map,Ae=!!y.matcap,B=!!J,Ee=!!y.aoMap,oe=!!y.lightMap,de=!!y.bumpMap,re=!!y.normalMap,Fe=!!y.displacementMap,ve=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,W=y.anisotropy>0,xe=y.clearcoat>0,he=y.iridescence>0,ue=y.sheen>0,je=y.transmission>0,Ce=W&&!!y.anisotropyMap,ke=xe&&!!y.clearcoatMap,Qe=xe&&!!y.clearcoatNormalMap,tt=xe&&!!y.clearcoatRoughnessMap,fe=he&&!!y.iridescenceMap,pt=he&&!!y.iridescenceThicknessMap,N=ue&&!!y.sheenColorMap,ge=ue&&!!y.sheenRoughnessMap,Re=!!y.specularMap,we=!!y.specularColorMap,$e=!!y.specularIntensityMap,vt=je&&!!y.transmissionMap,wt=je&&!!y.thicknessMap,mt=!!y.gradientMap,Te=!!y.alphaMap,V=y.alphaTest>0,Pe=!!y.alphaHash,De=!!y.extensions,ot=!!D.attributes.uv1,nt=!!D.attributes.uv2,Nt=!!D.attributes.uv3,Ot=ki;return y.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ot=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:ce,defines:y.defines,customVertexShaderID:Le,customFragmentShaderID:qe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:rt,instancing:Je,instancingColor:Je&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Xn,map:Ye,matcap:Ae,envMap:B,envMapMode:B&&J.mapping,envMapCubeUVHeight:H,aoMap:Ee,lightMap:oe,bumpMap:de,normalMap:re,displacementMap:u&&Fe,emissiveMap:ve,normalMapObjectSpace:re&&y.normalMapType===Bd,normalMapTangentSpace:re&&y.normalMapType===mc,metalnessMap:R,roughnessMap:E,anisotropy:W,anisotropyMap:Ce,clearcoat:xe,clearcoatMap:ke,clearcoatNormalMap:Qe,clearcoatRoughnessMap:tt,iridescence:he,iridescenceMap:fe,iridescenceThicknessMap:pt,sheen:ue,sheenColorMap:N,sheenRoughnessMap:ge,specularMap:Re,specularColorMap:we,specularIntensityMap:$e,transmission:je,transmissionMap:vt,thicknessMap:wt,gradientMap:mt,opaque:y.transparent===!1&&y.blending===Fs,alphaMap:Te,alphaTest:V,alphaHash:Pe,combine:y.combine,mapUv:Ye&&x(y.map.channel),aoMapUv:Ee&&x(y.aoMap.channel),lightMapUv:oe&&x(y.lightMap.channel),bumpMapUv:de&&x(y.bumpMap.channel),normalMapUv:re&&x(y.normalMap.channel),displacementMapUv:Fe&&x(y.displacementMap.channel),emissiveMapUv:ve&&x(y.emissiveMap.channel),metalnessMapUv:R&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:Ce&&x(y.anisotropyMap.channel),clearcoatMapUv:ke&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(y.sheenRoughnessMap.channel),specularMapUv:Re&&x(y.specularMap.channel),specularColorMapUv:we&&x(y.specularColorMap.channel),specularIntensityMapUv:$e&&x(y.specularIntensityMap.channel),transmissionMapUv:vt&&x(y.transmissionMap.channel),thicknessMapUv:wt&&x(y.thicknessMap.channel),alphaMapUv:Te&&x(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(re||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:ot,vertexUv2s:nt,vertexUv3s:Nt,pointsUvs:X.isPoints===!0&&!!D.attributes.uv&&(Ye||Te),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&Vt.getTransfer(y.map.colorSpace)===jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:De&&y.extensions.derivatives===!0,extensionFragDepth:De&&y.extensions.fragDepth===!0,extensionDrawBuffers:De&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)v.push(U),v.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(M(v,y),_(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){let v=g[y.type],U;if(v){let z=pi[v];U=ci.clone(z.uniforms)}else U=y.uniforms;return U}function A(y,v){let U;for(let z=0,X=c.length;z<X;z++){let P=c[z];if(P.cacheKey===v){U=P,++U.usedTimes;break}}return U===void 0&&(U=new U0(i,v,y,r),c.push(U)),U}function S(y){if(--y.usedTimes===0){let v=c.indexOf(y);c[v]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:I}}function F0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function B0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||B0),n.length>1&&n.sort(u||eu),s.length>1&&s.sort(u||eu)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function z0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function H0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new xt};break;case"SpotLight":t={position:new O,direction:new O,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function k0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var V0=0;function G0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W0(i,e){let t=new H0,n=k0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,a=new Ft,o=new Ft;function l(h,d){let u=0,f=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let x=0,m=0,p=0,M=0,_=0,b=0,A=0,S=0,w=0,I=0,y=0;h.sort(G0);let v=d===!0?Math.PI:1;for(let z=0,X=h.length;z<X;z++){let P=h[z],D=P.color,F=P.intensity,J=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*F*v,f+=D.g*F*v,g+=D.b*F*v;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],F);y++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*v),P.castShadow){let se=P.shadow,ae=n.get(P);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,s.directionalShadow[x]=ae,s.directionalShadowMap[x]=H,s.directionalShadowMatrix[x]=P.shadow.matrix,b++}s.directional[x]=q,x++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(D).multiplyScalar(F*v),q.distance=J,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[p]=q;let se=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,se.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[p]=se.matrix,P.castShadow){let ae=n.get(P);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,s.spotShadow[p]=ae,s.spotShadowMap[p]=H,S++}p++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(D).multiplyScalar(F),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=q,M++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*v),q.distance=P.distance,q.decay=P.decay,P.castShadow){let se=P.shadow,ae=n.get(P);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,ae.shadowCameraNear=se.camera.near,ae.shadowCameraFar=se.camera.far,s.pointShadow[m]=ae,s.pointShadowMap[m]=H,s.pointShadowMatrix[m]=P.shadow.matrix,A++}s.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(F*v),q.groundColor.copy(P.groundColor).multiplyScalar(F*v),s.hemi[_]=q,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==_||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==S||U.numSpotMaps!==w||U.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=S+w-I,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=y,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=_,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=S,U.numSpotMaps=w,U.numLightProbes=y,s.version=V0++)}function c(h,d){let u=0,f=0,g=0,x=0,m=0,p=d.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let b=h[M];if(b.isDirectionalLight){let A=s.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),u++}else if(b.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let A=s.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let A=s.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function nu(i,e){let t=new W0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new nu(i,e),t.set(r,[l])):a>=o.length?(l=new nu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ol=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function Z0(i,e,t){let n=new Er,s=new le,r=new le,a=new en,o=new Ol({depthPacking:Fd}),l=new Fl,c={},h=t.maxTextureSize,d={[Gi]:An,[An]:Gi,[yn]:yn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Y0,fragmentShader:q0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let p=this.type;this.render=function(S,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let y=i.getRenderTarget(),v=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=p!==wi&&this.type===wi,P=p===wi&&this.type!==wi;for(let D=0,F=S.length;D<F;D++){let J=S[D],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let q=H.getFrameExtents();if(s.multiply(q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||X===!0||P===!0){let ae=this.type!==wi?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new Rn(s.x,s.y,ae),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let se=H.getViewportCount();for(let ae=0;ae<se;ae++){let me=H.getViewport(ae);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),z.viewport(a),H.updateMatrices(J,ae),n=H.getFrustum(),b(w,I,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===wi&&M(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,U)};function M(S,w){let I=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Rn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,I,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,I,f,x,null)}function _(S,w,I,y){let v=null,U=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)v=U;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=v.uuid,X=w.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let D=P[X];D===void 0&&(D=v.clone(),P[X]=D,w.addEventListener("dispose",A)),v=D}if(v.visible=w.visible,v.wireframe=w.wireframe,y===wi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=I}return v}function b(S,w,I,y,v){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===wi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let X=e.update(S),P=S.material;if(Array.isArray(P)){let D=X.groups;for(let F=0,J=D.length;F<J;F++){let H=D[F],q=P[H.materialIndex];if(q&&q.visible){let se=_(S,q,y,v);S.onBeforeShadow(i,S,w,I,X,se,H),i.renderBufferDirect(I,null,X,se,S,H),S.onAfterShadow(i,S,w,I,X,se,H)}}}else if(P.visible){let D=_(S,P,y,v);S.onBeforeShadow(i,S,w,I,X,D,null),i.renderBufferDirect(I,null,X,D,S,null),S.onAfterShadow(i,S,w,I,X,D,null)}}let z=S.children;for(let X=0,P=z.length;X<P;X++)b(z[X],w,I,y,v)}function A(S){S.target.removeEventListener("dispose",A);for(let I in c){let y=c[I],v=S.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function j0(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Pe=new en,De=null,ot=new en(0,0,0,0);return{setMask:function(nt){De!==nt&&!V&&(i.colorMask(nt,nt,nt,nt),De=nt)},setLocked:function(nt){V=nt},setClear:function(nt,Nt,Ot,sn,_n){_n===!0&&(nt*=sn,Nt*=sn,Ot*=sn),Pe.set(nt,Nt,Ot,sn),ot.equals(Pe)===!1&&(i.clearColor(nt,Nt,Ot,sn),ot.copy(Pe))},reset:function(){V=!1,De=null,ot.set(-1,0,0,0)}}}function r(){let V=!1,Pe=null,De=null,ot=null;return{setTest:function(nt){nt?rt(i.DEPTH_TEST):Ye(i.DEPTH_TEST)},setMask:function(nt){Pe!==nt&&!V&&(i.depthMask(nt),Pe=nt)},setFunc:function(nt){if(De!==nt){switch(nt){case _d:i.depthFunc(i.NEVER);break;case xd:i.depthFunc(i.ALWAYS);break;case vd:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case yd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case bd:i.depthFunc(i.GREATER);break;case Sd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=nt}},setLocked:function(nt){V=nt},setClear:function(nt){ot!==nt&&(i.clearDepth(nt),ot=nt)},reset:function(){V=!1,Pe=null,De=null,ot=null}}}function a(){let V=!1,Pe=null,De=null,ot=null,nt=null,Nt=null,Ot=null,sn=null,_n=null;return{setTest:function(Wt){V||(Wt?rt(i.STENCIL_TEST):Ye(i.STENCIL_TEST))},setMask:function(Wt){Pe!==Wt&&!V&&(i.stencilMask(Wt),Pe=Wt)},setFunc:function(Wt,xn,Hn){(De!==Wt||ot!==xn||nt!==Hn)&&(i.stencilFunc(Wt,xn,Hn),De=Wt,ot=xn,nt=Hn)},setOp:function(Wt,xn,Hn){(Nt!==Wt||Ot!==xn||sn!==Hn)&&(i.stencilOp(Wt,xn,Hn),Nt=Wt,Ot=xn,sn=Hn)},setLocked:function(Wt){V=Wt},setClear:function(Wt){_n!==Wt&&(i.clearStencil(Wt),_n=Wt)},reset:function(){V=!1,Pe=null,De=null,ot=null,nt=null,Nt=null,Ot=null,sn=null,_n=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,_=null,b=null,A=null,S=null,w=null,I=null,y=new xt(0,0,0),v=0,U=!1,z=null,X=null,P=null,D=null,F=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(se)[1]),H=q>=1):se.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),H=q>=2);let ae=null,me={},K=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Le=new en().fromArray(K),qe=new en().fromArray(ce);function He(V,Pe,De,ot){let nt=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(V,Nt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<De;Ot++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(Pe+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Nt}let Je={};Je[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),Je[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Je[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Je[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),rt(i.DEPTH_TEST),l.setFunc(wa),ve(!1),R(Oc),rt(i.CULL_FACE),re(dn);function rt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function Ye(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ae(V,Pe){return f[V]!==Pe?(i.bindFramebuffer(V,Pe),f[V]=Pe,n&&(V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pe),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function B(V,Pe){let De=x,ot=!1;if(V)if(De=g.get(Pe),De===void 0&&(De=[],g.set(Pe,De)),V.isWebGLMultipleRenderTargets){let nt=V.texture;if(De.length!==nt.length||De[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,Ot=nt.length;Nt<Ot;Nt++)De[Nt]=i.COLOR_ATTACHMENT0+Nt;De.length=nt.length,ot=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,ot=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,ot=!0);ot&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function Ee(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let oe={[Jn]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};if(n)oe[zc]=i.MIN,oe[Hc]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(oe[zc]=V.MIN_EXT,oe[Hc]=V.MAX_EXT)}let de={[Qs]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[ho]:i.DST_COLOR,[co]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[hd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function re(V,Pe,De,ot,nt,Nt,Ot,sn,_n,Wt){if(V===dn){p===!0&&(Ye(i.BLEND),p=!1);return}if(p===!1&&(rt(i.BLEND),p=!0),V!==cc){if(V!==M||Wt!==U){if((_!==Jn||S!==Jn)&&(i.blendEquation(i.FUNC_ADD),_=Jn,S=Jn),Wt)switch(V){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,A=null,w=null,I=null,y.set(0,0,0),v=0,M=V,U=Wt}return}nt=nt||Pe,Nt=Nt||De,Ot=Ot||ot,(Pe!==_||nt!==S)&&(i.blendEquationSeparate(oe[Pe],oe[nt]),_=Pe,S=nt),(De!==b||ot!==A||Nt!==w||Ot!==I)&&(i.blendFuncSeparate(de[De],de[ot],de[Nt],de[Ot]),b=De,A=ot,w=Nt,I=Ot),(sn.equals(y)===!1||_n!==v)&&(i.blendColor(sn.r,sn.g,sn.b,_n),y.copy(sn),v=_n),M=V,U=!1}function Fe(V,Pe){V.side===yn?Ye(i.CULL_FACE):rt(i.CULL_FACE);let De=V.side===An;Pe&&(De=!De),ve(De),V.blending===Fs&&V.transparent===!1?re(dn):re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let ot=V.stencilWrite;c.setTest(ot),ot&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),W(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(V){z!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),z=V)}function R(V){V!==id?(rt(i.CULL_FACE),V!==X&&(V===Oc?i.cullFace(i.BACK):V===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ye(i.CULL_FACE),X=V}function E(V){V!==P&&(H&&i.lineWidth(V),P=V)}function W(V,Pe,De){V?(rt(i.POLYGON_OFFSET_FILL),(D!==Pe||F!==De)&&(i.polygonOffset(Pe,De),D=Pe,F=De)):Ye(i.POLYGON_OFFSET_FILL)}function xe(V){V?rt(i.SCISSOR_TEST):Ye(i.SCISSOR_TEST)}function he(V){V===void 0&&(V=i.TEXTURE0+J-1),ae!==V&&(i.activeTexture(V),ae=V)}function ue(V,Pe,De){De===void 0&&(ae===null?De=i.TEXTURE0+J-1:De=ae);let ot=me[De];ot===void 0&&(ot={type:void 0,texture:void 0},me[De]=ot),(ot.type!==V||ot.texture!==Pe)&&(ae!==De&&(i.activeTexture(De),ae=De),i.bindTexture(V,Pe||Je[V]),ot.type=V,ot.texture=Pe)}function je(){let V=me[ae];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(V){Le.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function vt(V){qe.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),qe.copy(V))}function wt(V,Pe){let De=d.get(Pe);De===void 0&&(De=new WeakMap,d.set(Pe,De));let ot=De.get(V);ot===void 0&&(ot=i.getUniformBlockIndex(Pe,V.name),De.set(V,ot))}function mt(V,Pe){let ot=d.get(Pe).get(V);h.get(Pe)!==ot&&(i.uniformBlockBinding(Pe,ot,V.__bindingPointIndex),h.set(Pe,ot))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,me={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,_=null,b=null,A=null,S=null,w=null,I=null,y=new xt(0,0,0),v=0,U=!1,z=null,X=null,P=null,D=null,F=null,Le.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:rt,disable:Ye,bindFramebuffer:Ae,drawBuffers:B,useProgram:Ee,setBlending:re,setMaterial:Fe,setFlipSided:ve,setCullFace:R,setLineWidth:E,setPolygonOffset:W,setScissorTest:xe,activeTexture:he,bindTexture:ue,unbindTexture:je,compressedTexImage2D:Ce,compressedTexImage3D:ke,texImage2D:Re,texImage3D:we,updateUBOMapping:wt,uniformBlockBinding:mt,texStorage2D:N,texStorage3D:ge,texSubImage2D:Qe,texSubImage3D:tt,compressedTexSubImage2D:fe,compressedTexSubImage3D:pt,scissor:$e,viewport:vt,reset:Te}}function J0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):br("canvas")}function x(R,E,W,xe){let he=1;if((R.width>xe||R.height>xe)&&(he=xe/Math.max(R.width,R.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ue=E?La:Math.floor,je=ue(he*R.width),Ce=ue(he*R.height);d===void 0&&(d=g(je,Ce));let ke=W?g(je,Ce):d;return ke.width=je,ke.height=Ce,ke.getContext("2d").drawImage(R,0,0,je,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+je+"x"+Ce+")."),ke}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return wl(R.width)&&wl(R.height)}function p(R){return o?!1:R.wrapS!==Gn||R.wrapT!==Gn||R.minFilter!==cn&&R.minFilter!==hn}function M(R,E){return R.generateMipmaps&&E&&R.minFilter!==cn&&R.minFilter!==hn}function _(R){i.generateMipmap(R)}function b(R,E,W,xe,he=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=E;if(E===i.RED&&(W===i.FLOAT&&(ue=i.R32F),W===i.HALF_FLOAT&&(ue=i.R16F),W===i.UNSIGNED_BYTE&&(ue=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ue=i.R8UI),W===i.UNSIGNED_SHORT&&(ue=i.R16UI),W===i.UNSIGNED_INT&&(ue=i.R32UI),W===i.BYTE&&(ue=i.R8I),W===i.SHORT&&(ue=i.R16I),W===i.INT&&(ue=i.R32I)),E===i.RG&&(W===i.FLOAT&&(ue=i.RG32F),W===i.HALF_FLOAT&&(ue=i.RG16F),W===i.UNSIGNED_BYTE&&(ue=i.RG8)),E===i.RGBA){let je=he?Ra:Vt.getTransfer(xe);W===i.FLOAT&&(ue=i.RGBA32F),W===i.HALF_FLOAT&&(ue=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ue=je===jt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function A(R,E,W){return M(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===cn||R===kc||R===Ho?i.NEAREST:i.LINEAR}function w(R){let E=R.target;E.removeEventListener("dispose",w),y(E),E.isVideoTexture&&h.delete(E)}function I(R){let E=R.target;E.removeEventListener("dispose",I),U(E)}function y(R){let E=n.get(R);if(E.__webglInit===void 0)return;let W=R.source,xe=u.get(W);if(xe){let he=xe[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&v(R),Object.keys(xe).length===0&&u.delete(W)}n.remove(R)}function v(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let W=R.source,xe=u.get(W);delete xe[E.__cacheKey],a.memory.textures--}function U(R){let E=R.texture,W=n.get(R),xe=n.get(E);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(W.__webglFramebuffer[he]))for(let ue=0;ue<W.__webglFramebuffer[he].length;ue++)i.deleteFramebuffer(W.__webglFramebuffer[he][ue]);else i.deleteFramebuffer(W.__webglFramebuffer[he]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[he])}else{if(Array.isArray(W.__webglFramebuffer))for(let he=0;he<W.__webglFramebuffer.length;he++)i.deleteFramebuffer(W.__webglFramebuffer[he]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let he=0;he<W.__webglColorRenderbuffer.length;he++)W.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[he]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let he=0,ue=E.length;he<ue;he++){let je=n.get(E[he]);je.__webglTexture&&(i.deleteTexture(je.__webglTexture),a.memory.textures--),n.remove(E[he])}n.remove(E),n.remove(R)}let z=0;function X(){z=0}function P(){let R=z;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function D(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function F(R,E){let W=n.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){let xe=R.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,R,E);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function J(R,E){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Le(W,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function H(R,E){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Le(W,R,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function q(R,E){let W=n.get(R);if(R.version>0&&W.__version!==R.version){qe(W,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let se={[Fn]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},ae={[cn]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Ho]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[Vs]:i.LINEAR_MIPMAP_LINEAR},me={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Hd]:i.LESS,[Eu]:i.LEQUAL,[kd]:i.EQUAL,[Wd]:i.GEQUAL,[Vd]:i.GREATER,[Gd]:i.NOTEQUAL};function K(R,E,W){if(W?(i.texParameteri(R,i.TEXTURE_WRAP_S,se[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,se[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,se[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ae[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ae[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Gn||E.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,S(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==cn&&E.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===cn||E.minFilter!==Ho&&E.minFilter!==Vs||E.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===bn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ce(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));let xe=E.source,he=u.get(xe);he===void 0&&(he={},u.set(xe,he));let ue=D(E);if(ue!==R.__cacheKey){he[ue]===void 0&&(he[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),he[ue].usedTimes++;let je=he[R.__cacheKey];je!==void 0&&(he[R.__cacheKey].usedTimes--,je.usedTimes===0&&v(E)),R.__cacheKey=ue,R.__webglTexture=he[ue].texture}return W}function Le(R,E,W){let xe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=i.TEXTURE_3D);let he=ce(R,E),ue=E.source;t.bindTexture(xe,R.__webglTexture,i.TEXTURE0+W);let je=n.get(ue);if(ue.version!==je.__version||he===!0){t.activeTexture(i.TEXTURE0+W);let Ce=Vt.getPrimaries(Vt.workingColorSpace),ke=E.colorSpace===Nn?null:Vt.getPrimaries(E.colorSpace),Qe=E.colorSpace===Nn||Ce===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let tt=p(E)&&m(E.image)===!1,fe=x(E.image,tt,!1,s.maxTextureSize);fe=ve(E,fe);let pt=m(fe)||o,N=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),Re=b(E.internalFormat,N,ge,E.colorSpace,E.isVideoTexture);K(xe,E,pt);let we,$e=E.mipmaps,vt=o&&E.isVideoTexture!==!0&&Re!==bu,wt=je.__version===void 0||he===!0,mt=A(E,fe,pt);if(E.isDepthTexture)Re=i.DEPTH_COMPONENT,o?E.type===On?Re=i.DEPTH_COMPONENT32F:E.type===Hi?Re=i.DEPTH_COMPONENT24:E.type===Ri?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:E.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===is&&Re===i.DEPTH_COMPONENT&&E.type!==pc&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,ge=r.convert(E.type)),E.format===Wi&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,E.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ri,ge=r.convert(E.type))),wt&&(vt?t.texStorage2D(i.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Re,fe.width,fe.height,0,N,ge,null));else if(E.isDataTexture)if($e.length>0&&pt){vt&&wt&&t.texStorage2D(i.TEXTURE_2D,mt,Re,$e[0].width,$e[0].height);for(let Te=0,V=$e.length;Te<V;Te++)we=$e[Te],vt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,we.width,we.height,N,ge,we.data):t.texImage2D(i.TEXTURE_2D,Te,Re,we.width,we.height,0,N,ge,we.data);E.generateMipmaps=!1}else vt?(wt&&t.texStorage2D(i.TEXTURE_2D,mt,Re,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,N,ge,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Re,fe.width,fe.height,0,N,ge,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){vt&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Re,$e[0].width,$e[0].height,fe.depth);for(let Te=0,V=$e.length;Te<V;Te++)we=$e[Te],E.format!==Ln?N!==null?vt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,we.width,we.height,fe.depth,N,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Re,we.width,we.height,fe.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,we.width,we.height,fe.depth,N,ge,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Re,we.width,we.height,fe.depth,0,N,ge,we.data)}else{vt&&wt&&t.texStorage2D(i.TEXTURE_2D,mt,Re,$e[0].width,$e[0].height);for(let Te=0,V=$e.length;Te<V;Te++)we=$e[Te],E.format!==Ln?N!==null?vt?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,we.width,we.height,N,we.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Re,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,we.width,we.height,N,ge,we.data):t.texImage2D(i.TEXTURE_2D,Te,Re,we.width,we.height,0,N,ge,we.data)}else if(E.isDataArrayTexture)vt?(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Re,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,N,ge,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,N,ge,fe.data);else if(E.isData3DTexture)vt?(wt&&t.texStorage3D(i.TEXTURE_3D,mt,Re,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,N,ge,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,N,ge,fe.data);else if(E.isFramebufferTexture){if(wt)if(vt)t.texStorage2D(i.TEXTURE_2D,mt,Re,fe.width,fe.height);else{let Te=fe.width,V=fe.height;for(let Pe=0;Pe<mt;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Re,Te,V,0,N,ge,null),Te>>=1,V>>=1}}else if($e.length>0&&pt){vt&&wt&&t.texStorage2D(i.TEXTURE_2D,mt,Re,$e[0].width,$e[0].height);for(let Te=0,V=$e.length;Te<V;Te++)we=$e[Te],vt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,N,ge,we):t.texImage2D(i.TEXTURE_2D,Te,Re,N,ge,we);E.generateMipmaps=!1}else vt?(wt&&t.texStorage2D(i.TEXTURE_2D,mt,Re,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ge,fe)):t.texImage2D(i.TEXTURE_2D,0,Re,N,ge,fe);M(E,pt)&&_(xe),je.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function qe(R,E,W){if(E.image.length!==6)return;let xe=ce(R,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let ue=n.get(he);if(he.version!==ue.__version||xe===!0){t.activeTexture(i.TEXTURE0+W);let je=Vt.getPrimaries(Vt.workingColorSpace),Ce=E.colorSpace===Nn?null:Vt.getPrimaries(E.colorSpace),ke=E.colorSpace===Nn||je===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let Te=0;Te<6;Te++)!Qe&&!tt?fe[Te]=x(E.image[Te],!1,!0,s.maxCubemapSize):fe[Te]=tt?E.image[Te].image:E.image[Te],fe[Te]=ve(E,fe[Te]);let pt=fe[0],N=m(pt)||o,ge=r.convert(E.format,E.colorSpace),Re=r.convert(E.type),we=b(E.internalFormat,ge,Re,E.colorSpace),$e=o&&E.isVideoTexture!==!0,vt=ue.__version===void 0||xe===!0,wt=A(E,pt,N);K(i.TEXTURE_CUBE_MAP,E,N);let mt;if(Qe){$e&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,we,pt.width,pt.height);for(let Te=0;Te<6;Te++){mt=fe[Te].mipmaps;for(let V=0;V<mt.length;V++){let Pe=mt[V];E.format!==Ln?ge!==null?$e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V,0,0,Pe.width,Pe.height,ge,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V,we,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V,0,0,Pe.width,Pe.height,ge,Re,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V,we,Pe.width,Pe.height,0,ge,Re,Pe.data)}}}else{mt=E.mipmaps,$e&&vt&&(mt.length>0&&wt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,we,fe[0].width,fe[0].height));for(let Te=0;Te<6;Te++)if(tt){$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,fe[Te].width,fe[Te].height,ge,Re,fe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,we,fe[Te].width,fe[Te].height,0,ge,Re,fe[Te].data);for(let V=0;V<mt.length;V++){let De=mt[V].image[Te].image;$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V+1,0,0,De.width,De.height,ge,Re,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V+1,we,De.width,De.height,0,ge,Re,De.data)}}else{$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,Re,fe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,we,ge,Re,fe[Te]);for(let V=0;V<mt.length;V++){let Pe=mt[V];$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V+1,0,0,ge,Re,Pe.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,V+1,we,ge,Re,Pe.image[Te])}}}M(E,N)&&_(i.TEXTURE_CUBE_MAP),ue.__version=he.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function He(R,E,W,xe,he,ue){let je=r.convert(W.format,W.colorSpace),Ce=r.convert(W.type),ke=b(W.internalFormat,je,Ce,W.colorSpace);if(!n.get(E).__hasExternalTextures){let tt=Math.max(1,E.width>>ue),fe=Math.max(1,E.height>>ue);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ue,ke,tt,fe,E.depth,0,je,Ce,null):t.texImage2D(he,ue,ke,tt,fe,0,je,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),re(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,he,n.get(W).__webglTexture,0,de(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,he,n.get(W).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||re(E)){let he=E.depthTexture;he&&he.isDepthTexture&&(he.type===On?xe=i.DEPTH_COMPONENT32F:he.type===Hi&&(xe=i.DEPTH_COMPONENT24));let ue=de(E);re(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,xe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,xe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let xe=de(E);W&&re(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):re(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let xe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let he=0;he<xe.length;he++){let ue=xe[he],je=r.convert(ue.format,ue.colorSpace),Ce=r.convert(ue.type),ke=b(ue.internalFormat,je,Ce,ue.colorSpace),Qe=de(E);W&&re(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,ke,E.width,E.height):re(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,ke,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ke,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);let xe=n.get(E.depthTexture).__webglTexture,he=de(E);if(E.depthTexture.format===is)re(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(E.depthTexture.format===Wi)re(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ye(R){let E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");rt(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]=i.createRenderbuffer(),Je(E.__webglDepthbuffer[xe],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Je(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,E,W){let xe=n.get(R);E!==void 0&&He(xe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ye(R)}function B(R){let E=R.texture,W=n.get(R),xe=n.get(E);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=E.version,a.memory.textures++);let he=R.isWebGLCubeRenderTarget===!0,ue=R.isWebGLMultipleRenderTargets===!0,je=m(R)||o;if(he){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let ke=0;ke<E.mipmaps.length;ke++)W.__webglFramebuffer[Ce][ke]=i.createFramebuffer()}else W.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ue)if(s.drawBuffers){let Ce=R.texture;for(let ke=0,Qe=Ce.length;ke<Qe;ke++){let tt=n.get(Ce[ke]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&re(R)===!1){let Ce=ue?E:[E];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ke=0;ke<Ce.length;ke++){let Qe=Ce[ke];W.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ke]);let tt=r.convert(Qe.format,Qe.colorSpace),fe=r.convert(Qe.type),pt=b(Qe.internalFormat,tt,fe,Qe.colorSpace,R.isXRRenderTarget===!0),N=de(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,W.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),K(i.TEXTURE_CUBE_MAP,E,je);for(let Ce=0;Ce<6;Ce++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)He(W.__webglFramebuffer[Ce][ke],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else He(W.__webglFramebuffer[Ce],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(E,je)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let Ce=R.texture;for(let ke=0,Qe=Ce.length;ke<Qe;ke++){let tt=Ce[ke],fe=n.get(tt);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),K(i.TEXTURE_2D,tt,je),He(W.__webglFramebuffer,R,tt,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(tt,je)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Ce=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,xe.__webglTexture),K(Ce,E,je),o&&E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)He(W.__webglFramebuffer[ke],R,E,i.COLOR_ATTACHMENT0,Ce,ke);else He(W.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Ce,0);M(E,je)&&_(Ce),t.unbindTexture()}R.depthBuffer&&Ye(R)}function Ee(R){let E=m(R)||o,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let xe=0,he=W.length;xe<he;xe++){let ue=W[xe];if(M(ue,E)){let je=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(ue).__webglTexture;t.bindTexture(je,Ce),_(je),t.unbindTexture()}}}function oe(R){if(o&&R.samples>0&&re(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,xe=R.height,he=i.COLOR_BUFFER_BIT,ue=[],je=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(R),ke=R.isWebGLMultipleRenderTargets===!0;if(ke)for(let Qe=0;Qe<E.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){ue.push(i.COLOR_ATTACHMENT0+Qe),R.depthBuffer&&ue.push(je);let tt=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(tt===!1&&(R.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Qe]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[je])),ke){let fe=n.get(E[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,W,xe,0,0,W,xe,he,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let Qe=0;Qe<E.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Qe]);let tt=n.get(E[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function de(R){return Math.min(s.maxSamples,R.samples)}function re(R){let E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(R){let E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ve(R,E){let W=R.colorSpace,xe=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===El||W!==Xn&&W!==Nn&&(Vt.getTransfer(W)===jt?o===!1?e.has("EXT_sRGB")===!0&&xe===Ln?(R.format=El,R.minFilter=hn,R.generateMipmaps=!1):E=Da.sRGBToLinear(E):(xe!==Ln||he!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=F,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=Ae,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=He,this.useMultisampledRTT=re}function $0(i,e,t){let n=t.isWebGL2;function s(r,a=Nn){let o,l=Vt.getTransfer(a);if(r===mi)return i.UNSIGNED_BYTE;if(r===_u)return i.UNSIGNED_SHORT_4_4_4_4;if(r===xu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rd)return i.BYTE;if(r===Cd)return i.SHORT;if(r===pc)return i.UNSIGNED_SHORT;if(r===gu)return i.INT;if(r===Hi)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===bn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pd)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Id)return i.LUMINANCE;if(r===Ld)return i.LUMINANCE_ALPHA;if(r===is)return i.DEPTH_COMPONENT;if(r===Wi)return i.DEPTH_STENCIL;if(r===El)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dd)return i.RED;if(r===vu)return i.RED_INTEGER;if(r===Ud)return i.RG;if(r===yu)return i.RG_INTEGER;if(r===Mu)return i.RGBA_INTEGER;if(r===ko||r===Vo||r===Go||r===Wo)if(l===jt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vc||r===Gc||r===Wc||r===Xc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yc||r===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Yc)return l===jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zc||r===jc||r===Jc||r===$c||r===Kc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Zc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$c)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ah)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xo||r===lh||r===ch)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Xo)return l===jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===hh||r===uh||r===dh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Xo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ri?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Bl=class extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Wn=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},K0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zl=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,M=[],_=[],b=new le,A=null,S=new Tn;S.layers.enable(1),S.viewport=new en;let w=new Tn;w.layers.enable(2),w.viewport=new en;let I=[S,w],y=new Bl;y.layers.enable(1),y.layers.enable(2);let v=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=M[K];return ce===void 0&&(ce=new xr,M[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=M[K];return ce===void 0&&(ce=new xr,M[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=M[K];return ce===void 0&&(ce=new xr,M[K]=ce),ce.getHandSpace()};function z(K){let ce=_.indexOf(K.inputSource);if(ce===-1)return;let Le=M[ce];Le!==void 0&&(Le.update(K.inputSource,K.frame,c||a),Le.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",P);for(let K=0;K<M.length;K++){let ce=_[K];ce!==null&&(_[K]=null,M[K].disconnect(ce))}v=null,U=null,e.setRenderTarget(m),f=null,u=null,d=null,s=null,p=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ce={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ce=null,Le=null,qe=null;x.depth&&(qe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?Wi:is,Le=x.stencil?Ri:Hi);let He={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Rn(u.textureWidth,u.textureHeight,{format:Ln,type:mi,depthTexture:new qs(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Je=e.properties.get(p);Je.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(K){for(let ce=0;ce<K.removed.length;ce++){let Le=K.removed[ce],qe=_.indexOf(Le);qe>=0&&(_[qe]=null,M[qe].disconnect(Le))}for(let ce=0;ce<K.added.length;ce++){let Le=K.added[ce],qe=_.indexOf(Le);if(qe===-1){for(let Je=0;Je<M.length;Je++)if(Je>=_.length){_.push(Le),qe=Je;break}else if(_[Je]===null){_[Je]=Le,qe=Je;break}if(qe===-1)break}let He=M[qe];He&&He.connect(Le)}}let D=new O,F=new O;function J(K,ce,Le){D.setFromMatrixPosition(ce.matrixWorld),F.setFromMatrixPosition(Le.matrixWorld);let qe=D.distanceTo(F),He=ce.projectionMatrix.elements,Je=Le.projectionMatrix.elements,rt=He[14]/(He[10]-1),Ye=He[14]/(He[10]+1),Ae=(He[9]+1)/He[5],B=(He[9]-1)/He[5],Ee=(He[8]-1)/He[0],oe=(Je[8]+1)/Je[0],de=rt*Ee,re=rt*oe,Fe=qe/(-Ee+oe),ve=Fe*-Ee;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let R=rt+Fe,E=Ye+Fe,W=de-ve,xe=re+(qe-ve),he=Ae*Ye/E*R,ue=B*Ye/E*R;K.projectionMatrix.makePerspective(W,xe,he,ue,R,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function H(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;y.near=w.near=S.near=K.near,y.far=w.far=S.far=K.far,(v!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,U=y.far);let ce=K.parent,Le=y.cameras;H(y,ce);for(let qe=0;qe<Le.length;qe++)H(Le[qe],ce);Le.length===2?J(y,S,w):y.projectionMatrix.copy(S.projectionMatrix),q(K,y,ce)};function q(K,ce,Le){Le===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Le.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let se=null;function ae(K,ce){if(h=ce.getViewerPose(c||a),g=ce,h!==null){let Le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let qe=!1;Le.length!==y.cameras.length&&(y.cameras.length=0,qe=!0);for(let He=0;He<Le.length;He++){let Je=Le[He],rt=null;if(f!==null)rt=f.getViewport(Je);else{let Ae=d.getViewSubImage(u,Je);rt=Ae.viewport,He===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,u.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let Ye=I[He];Ye===void 0&&(Ye=new Tn,Ye.layers.enable(He),Ye.viewport=new en,I[He]=Ye),Ye.matrix.fromArray(Je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(rt.x,rt.y,rt.width,rt.height),He===0&&(y.matrix.copy(Ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),qe===!0&&y.cameras.push(Ye)}}for(let Le=0;Le<M.length;Le++){let qe=_[Le],He=M[Le];qe!==null&&He!==void 0&&He.update(qe,ce,c||a)}se&&se(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let me=new Cu;me.setAnimationLoop(ae),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}};function Q0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ru(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let b=_.program;n.uniformBlockBinding(M,b)}function c(M,_){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",m));let A=_.program;n.updateUBOMapping(M,A);let S=e.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function h(M){let _=d();M.__bindingPointIndex=_;let b=i.createBuffer(),A=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let _=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,w=b.length;S<w;S++){let I=Array.isArray(b[S])?b[S]:[b[S]];for(let y=0,v=I.length;y<v;y++){let U=I[y];if(f(U,S,y,A)===!0){let z=U.__offset,X=Array.isArray(U.value)?U.value:[U.value],P=0;for(let D=0;D<X.length;D++){let F=X[D],J=x(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,z+P,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,b,A){let S=M.value,w=_+"_"+b;if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:A[w]=S.clone(),!0;{let I=A[w];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return A[w]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(M){let _=M.uniforms,b=0,A=16;for(let w=0,I=_.length;w<I;w++){let y=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,U=y.length;v<U;v++){let z=y[v],X=Array.isArray(z.value)?z.value:[z.value];for(let P=0,D=X.length;P<D;P++){let F=X[P],J=x(F),H=b%A;H!==0&&A-H<J.boundary&&(b+=A-H),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=J.storage}}}let S=b%A;return S>0&&(b+=A-S),M.__size=b,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var wr=class{constructor(e={}){let{canvas:t=of(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;let _=this,b=!1,A=0,S=0,w=null,I=-1,y=null,v=new en,U=new en,z=null,X=new xt(0),P=0,D=t.width,F=t.height,J=1,H=null,q=null,se=new en(0,0,D,F),ae=new en(0,0,D,F),me=!1,K=new Er,ce=!1,Le=!1,qe=null,He=new Ft,Je=new le,rt=new O,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?J:1}let B=n;function Ee(C,j){for(let te=0;te<C.length;te++){let ie=C[te],Q=t.getContext(ie,j);if(Q!==null)return Q}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),B===null){let j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),B=Ee(j,C),B===null)throw Ee(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,de,re,Fe,ve,R,E,W,xe,he,ue,je,Ce,ke,Qe,tt,fe,pt,N,ge,Re,we,$e,vt;function wt(){oe=new vg(B),de=new fg(B,oe,e),oe.init(de),we=new $0(B,oe,de),re=new j0(B,oe,de),Fe=new bg(B),ve=new F0,R=new J0(B,oe,re,ve,de,we,Fe),E=new mg(_),W=new xg(_),xe=new Pf(B,de),$e=new ug(B,oe,xe,de),he=new yg(B,xe,Fe,$e),ue=new Tg(B,he,xe,Fe),N=new wg(B,de,R),tt=new pg(ve),je=new O0(_,E,W,oe,de,$e,tt),Ce=new Q0(_,ve),ke=new z0,Qe=new X0(oe,de),pt=new hg(_,E,W,re,ue,u,l),fe=new Z0(_,ue,de),vt=new e_(B,Fe,de,re),ge=new dg(B,oe,Fe,de),Re=new Mg(B,oe,Fe,de),Fe.programs=je.programs,_.capabilities=de,_.extensions=oe,_.properties=ve,_.renderLists=ke,_.shadowMap=fe,_.state=re,_.info=Fe}wt();let mt=new zl(_,B);this.xr=mt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(D,F,!1))},this.getSize=function(C){return C.set(D,F)},this.setSize=function(C,j,te=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,F=j,t.width=Math.floor(C*J),t.height=Math.floor(j*J),te===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(D*J,F*J).floor()},this.setDrawingBufferSize=function(C,j,te){D=C,F=j,J=te,t.width=Math.floor(C*te),t.height=Math.floor(j*te),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,j,te,ie){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,j,te,ie),re.viewport(v.copy(se).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,j,te,ie){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,j,te,ie),re.scissor(U.copy(ae).multiplyScalar(J).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){re.setScissorTest(me=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(C=!0,j=!0,te=!0){let ie=0;if(C){let Q=!1;if(w!==null){let Ge=w.texture.format;Q=Ge===Mu||Ge===yu||Ge===vu}if(Q){let Ge=w.texture.type,it=Ge===mi||Ge===Hi||Ge===pc||Ge===Ri||Ge===_u||Ge===xu,T=pt.getClearColor(),L=pt.getClearAlpha(),k=T.r,Y=T.g,Z=T.b;it?(f[0]=k,f[1]=Y,f[2]=Z,f[3]=L,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=k,g[1]=Y,g[2]=Z,g[3]=L,B.clearBufferiv(B.COLOR,0,g))}else ie|=B.COLOR_BUFFER_BIT}j&&(ie|=B.DEPTH_BUFFER_BIT),te&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ke.dispose(),Qe.dispose(),ve.dispose(),E.dispose(),W.dispose(),ue.dispose(),$e.dispose(),vt.dispose(),je.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",_n),mt.removeEventListener("sessionend",Wt),qe&&(qe.dispose(),qe=null),xn.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let C=Fe.autoReset,j=fe.enabled,te=fe.autoUpdate,ie=fe.needsUpdate,Q=fe.type;wt(),Fe.autoReset=C,fe.enabled=j,fe.autoUpdate=te,fe.needsUpdate=ie,fe.type=Q}function Pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function De(C){let j=C.target;j.removeEventListener("dispose",De),ot(j)}function ot(C){nt(C),ve.remove(C)}function nt(C){let j=ve.get(C).programs;j!==void 0&&(j.forEach(function(te){je.releaseProgram(te)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,te,ie,Q,Ge){j===null&&(j=Ye);let it=Q.isMesh&&Q.matrixWorld.determinant()<0,T=Zr(C,j,te,ie,Q);re.setMaterial(ie,it);let L=te.index,k=1;if(ie.wireframe===!0){if(L=he.getWireframeAttribute(te),L===void 0)return;k=2}let Y=te.drawRange,Z=te.attributes.position,$=Y.start*k,ee=(Y.start+Y.count)*k;Ge!==null&&($=Math.max($,Ge.start*k),ee=Math.min(ee,(Ge.start+Ge.count)*k)),L!==null?($=Math.max($,0),ee=Math.min(ee,L.count)):Z!=null&&($=Math.max($,0),ee=Math.min(ee,Z.count));let ne=ee-$;if(ne<0||ne===1/0)return;$e.setup(Q,ie,T,te,L);let _e,Me=ge;if(L!==null&&(_e=xe.get(L),Me=Re,Me.setIndex(_e)),Q.isMesh)ie.wireframe===!0?(re.setLineWidth(ie.wireframeLinewidth*Ae()),Me.setMode(B.LINES)):Me.setMode(B.TRIANGLES);else if(Q.isLine){let pe=ie.linewidth;pe===void 0&&(pe=1),re.setLineWidth(pe*Ae()),Q.isLineSegments?Me.setMode(B.LINES):Q.isLineLoop?Me.setMode(B.LINE_LOOP):Me.setMode(B.LINE_STRIP)}else Q.isPoints?Me.setMode(B.POINTS):Q.isSprite&&Me.setMode(B.TRIANGLES);if(Q.isBatchedMesh)Me.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Me.renderInstances($,ne,Q.count);else if(te.isInstancedBufferGeometry){let pe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,be=Math.min(te.instanceCount,pe);Me.renderInstances($,ne,be)}else Me.render($,ne)};function Nt(C,j,te){C.transparent===!0&&C.side===yn&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,ti(C,j,te),C.side=Gi,C.needsUpdate=!0,ti(C,j,te),C.side=yn):ti(C,j,te)}this.compile=function(C,j,te=null){te===null&&(te=C),m=Qe.get(te),m.init(),M.push(m),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),C!==te&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(_._useLegacyLights);let ie=new Set;return C.traverse(function(Q){let Ge=Q.material;if(Ge)if(Array.isArray(Ge))for(let it=0;it<Ge.length;it++){let T=Ge[it];Nt(T,te,Q),ie.add(T)}else Nt(Ge,te,Q),ie.add(Ge)}),M.pop(),m=null,ie},this.compileAsync=function(C,j,te=null){let ie=this.compile(C,j,te);return new Promise(Q=>{function Ge(){if(ie.forEach(function(it){ve.get(it).currentProgram.isReady()&&ie.delete(it)}),ie.size===0){Q(C);return}setTimeout(Ge,10)}oe.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ot=null;function sn(C){Ot&&Ot(C)}function _n(){xn.stop()}function Wt(){xn.start()}let xn=new Cu;xn.setAnimationLoop(sn),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(C){Ot=C,mt.setAnimationLoop(C),C===null?xn.stop():xn.start()},mt.addEventListener("sessionstart",_n),mt.addEventListener("sessionend",Wt),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(j),j=mt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,j,w),m=Qe.get(C,M.length),m.init(),M.push(m),He.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(He),Le=this.localClippingEnabled,ce=tt.init(this.clippingPlanes,Le),x=ke.get(C,p.length),x.init(),p.push(x),Hn(C,j,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,q),this.info.render.frame++,ce===!0&&tt.beginShadows();let te=m.state.shadowsArray;if(fe.render(te,C,j),ce===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(x,C),m.setupLights(_._useLegacyLights),j.isArrayCamera){let ie=j.cameras;for(let Q=0,Ge=ie.length;Q<Ge;Q++){let it=ie[Q];Yr(x,C,it,it.viewport)}}else Yr(x,C,j);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,j),$e.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Hn(C,j,te,ie){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){ie&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(He);let it=ue.update(C),T=C.material;T.visible&&x.push(C,it,T,te,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){let it=ue.update(C),T=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),rt.copy(it.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(He)),Array.isArray(T)){let L=it.groups;for(let k=0,Y=L.length;k<Y;k++){let Z=L[k],$=T[Z.materialIndex];$&&$.visible&&x.push(C,it,$,te,rt.z,Z)}}else T.visible&&x.push(C,it,T,te,rt.z,null)}}let Ge=C.children;for(let it=0,T=Ge.length;it<T;it++)Hn(Ge[it],j,te,ie)}function Yr(C,j,te,ie){let Q=C.opaque,Ge=C.transmissive,it=C.transparent;m.setupLightsView(te),ce===!0&&tt.setGlobalState(_.clippingPlanes,te),Ge.length>0&&Bo(Q,Ge,j,te),ie&&re.viewport(v.copy(ie)),Q.length>0&&or(Q,j,te),Ge.length>0&&or(Ge,j,te),it.length>0&&or(it,j,te),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Bo(C,j,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Ge=de.isWebGL2;qe===null&&(qe=new Rn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?bn:mi,minFilter:Vs,samples:Ge?4:0})),_.getDrawingBufferSize(Je),Ge?qe.setSize(Je.x,Je.y):qe.setSize(La(Je.x),La(Je.y));let it=_.getRenderTarget();_.setRenderTarget(qe),_.getClearColor(X),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let T=_.toneMapping;_.toneMapping=ki,or(C,te,ie),R.updateMultisampleRenderTarget(qe),R.updateRenderTargetMipmap(qe);let L=!1;for(let k=0,Y=j.length;k<Y;k++){let Z=j[k],$=Z.object,ee=Z.geometry,ne=Z.material,_e=Z.group;if(ne.side===yn&&$.layers.test(ie.layers)){let Me=ne.side;ne.side=An,ne.needsUpdate=!0,qr($,te,ie,ee,ne,_e),ne.side=Me,ne.needsUpdate=!0,L=!0}}L===!0&&(R.updateMultisampleRenderTarget(qe),R.updateRenderTargetMipmap(qe)),_.setRenderTarget(it),_.setClearColor(X,P),_.toneMapping=T}function or(C,j,te){let ie=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Ge=C.length;Q<Ge;Q++){let it=C[Q],T=it.object,L=it.geometry,k=ie===null?it.material:ie,Y=it.group;T.layers.test(te.layers)&&qr(T,j,te,L,k,Y)}}function qr(C,j,te,ie,Q,Ge){C.onBeforeRender(_,j,te,ie,Q,Ge),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(_,j,te,ie,C,Ge),Q.transparent===!0&&Q.side===yn&&Q.forceSinglePass===!1?(Q.side=An,Q.needsUpdate=!0,_.renderBufferDirect(te,j,ie,Q,C,Ge),Q.side=Gi,Q.needsUpdate=!0,_.renderBufferDirect(te,j,ie,Q,C,Ge),Q.side=yn):_.renderBufferDirect(te,j,ie,Q,C,Ge),C.onAfterRender(_,j,te,ie,Q,Ge)}function ti(C,j,te){j.isScene!==!0&&(j=Ye);let ie=ve.get(C),Q=m.state.lights,Ge=m.state.shadowsArray,it=Q.state.version,T=je.getParameters(C,Q.state,Ge,j,te),L=je.getProgramCacheKey(T),k=ie.programs;ie.environment=C.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(C.isMeshStandardMaterial?W:E).get(C.envMap||ie.environment),k===void 0&&(C.addEventListener("dispose",De),k=new Map,ie.programs=k);let Y=k.get(L);if(Y!==void 0){if(ie.currentProgram===Y&&ie.lightsStateVersion===it)return ji(C,T),Y}else T.uniforms=je.getUniforms(C),C.onBuild(te,T,_),C.onBeforeCompile(T,_),Y=je.acquireProgram(T,L),k.set(L,Y),ie.uniforms=T.uniforms;let Z=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Z.clippingPlanes=tt.uniform),ji(C,T),ie.needsLights=ui(C),ie.lightsStateVersion=it,ie.needsLights&&(Z.ambientLightColor.value=Q.state.ambient,Z.lightProbe.value=Q.state.probe,Z.directionalLights.value=Q.state.directional,Z.directionalLightShadows.value=Q.state.directionalShadow,Z.spotLights.value=Q.state.spot,Z.spotLightShadows.value=Q.state.spotShadow,Z.rectAreaLights.value=Q.state.rectArea,Z.ltc_1.value=Q.state.rectAreaLTC1,Z.ltc_2.value=Q.state.rectAreaLTC2,Z.pointLights.value=Q.state.point,Z.pointLightShadows.value=Q.state.pointShadow,Z.hemisphereLights.value=Q.state.hemi,Z.directionalShadowMap.value=Q.state.directionalShadowMap,Z.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Z.spotShadowMap.value=Q.state.spotShadowMap,Z.spotLightMatrix.value=Q.state.spotLightMatrix,Z.spotLightMap.value=Q.state.spotLightMap,Z.pointShadowMap.value=Q.state.pointShadowMap,Z.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=Y,ie.uniformsList=null,Y}function Zi(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=zs.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ji(C,j){let te=ve.get(C);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Zr(C,j,te,ie,Q){j.isScene!==!0&&(j=Ye),R.resetTextureUnits();let Ge=j.fog,it=ie.isMeshStandardMaterial?j.environment:null,T=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,L=(ie.isMeshStandardMaterial?W:E).get(ie.envMap||it),k=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Y=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Z=!!te.morphAttributes.position,$=!!te.morphAttributes.normal,ee=!!te.morphAttributes.color,ne=ki;ie.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ne=_.toneMapping);let _e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Me=_e!==void 0?_e.length:0,pe=ve.get(ie),be=m.state.lights;if(ce===!0&&(Le===!0||C!==y)){let Lt=C===y&&ie.id===I;tt.setState(ie,C,Lt)}let ye=!1;ie.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==be.state.version||pe.outputColorSpace!==T||Q.isBatchedMesh&&pe.batching===!1||!Q.isBatchedMesh&&pe.batching===!0||Q.isInstancedMesh&&pe.instancing===!1||!Q.isInstancedMesh&&pe.instancing===!0||Q.isSkinnedMesh&&pe.skinning===!1||!Q.isSkinnedMesh&&pe.skinning===!0||Q.isInstancedMesh&&pe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&pe.instancingColor===!1&&Q.instanceColor!==null||pe.envMap!==L||ie.fog===!0&&pe.fog!==Ge||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==tt.numPlanes||pe.numIntersection!==tt.numIntersection)||pe.vertexAlphas!==k||pe.vertexTangents!==Y||pe.morphTargets!==Z||pe.morphNormals!==$||pe.morphColors!==ee||pe.toneMapping!==ne||de.isWebGL2===!0&&pe.morphTargetsCount!==Me)&&(ye=!0):(ye=!0,pe.__version=ie.version);let We=pe.currentProgram;ye===!0&&(We=ti(ie,j,Q));let ft=!1,lt=!1,Ve=!1,st=We.getUniforms(),It=pe.uniforms;if(re.useProgram(We.program)&&(ft=!0,lt=!0,Ve=!0),ie.id!==I&&(I=ie.id,lt=!0),ft||y!==C){st.setValue(B,"projectionMatrix",C.projectionMatrix),st.setValue(B,"viewMatrix",C.matrixWorldInverse);let Lt=st.map.cameraPosition;Lt!==void 0&&Lt.setValue(B,rt.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&st.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,lt=!0,Ve=!0)}if(Q.isSkinnedMesh){st.setOptional(B,Q,"bindMatrix"),st.setOptional(B,Q,"bindMatrixInverse");let Lt=Q.skeleton;Lt&&(de.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),st.setValue(B,"boneTexture",Lt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(st.setOptional(B,Q,"batchingTexture"),st.setValue(B,"batchingTexture",Q._matricesTexture,R));let Yt=te.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0&&de.isWebGL2===!0)&&N.update(Q,te,We),(lt||pe.receiveShadow!==Q.receiveShadow)&&(pe.receiveShadow=Q.receiveShadow,st.setValue(B,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(It.envMap.value=L,It.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),lt&&(st.setValue(B,"toneMappingExposure",_.toneMappingExposure),pe.needsLights&&jr(It,Ve),Ge&&ie.fog===!0&&Ce.refreshFogUniforms(It,Ge),Ce.refreshMaterialUniforms(It,ie,J,F,qe),zs.upload(B,Zi(pe),It,R)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(zs.upload(B,Zi(pe),It,R),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&st.setValue(B,"center",Q.center),st.setValue(B,"modelViewMatrix",Q.modelViewMatrix),st.setValue(B,"normalMatrix",Q.normalMatrix),st.setValue(B,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Lt=ie.uniformsGroups;for(let qt=0,Zt=Lt.length;qt<Zt;qt++)if(de.isWebGL2){let Ke=Lt[qt];vt.update(Ke,We),vt.bind(Ke,We)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return We}function jr(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,j,te){ve.get(C.texture).__webglTexture=j,ve.get(C.depthTexture).__webglTexture=te;let ie=ve.get(C);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let te=ve.get(C);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,te=0){w=C,A=j,S=te;let ie=!0,Q=null,Ge=!1,it=!1;if(C){let L=ve.get(C);L.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1):L.__webglFramebuffer===void 0?R.setupRenderTarget(C):L.__hasExternalTextures&&R.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);let k=C.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(it=!0);let Y=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Y[j])?Q=Y[j][te]:Q=Y[j],Ge=!0):de.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?Q=ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Y)?Q=Y[te]:Q=Y,v.copy(C.viewport),U.copy(C.scissor),z=C.scissorTest}else v.copy(se).multiplyScalar(J).floor(),U.copy(ae).multiplyScalar(J).floor(),z=me;if(re.bindFramebuffer(B.FRAMEBUFFER,Q)&&de.drawBuffers&&ie&&re.drawBuffers(C,Q),re.viewport(v),re.scissor(U),re.setScissorTest(z),Ge){let L=ve.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,L.__webglTexture,te)}else if(it){let L=ve.get(C.texture),k=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,L.__webglTexture,te||0,k)}I=-1},this.readRenderTargetPixels=function(C,j,te,ie,Q,Ge,it){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let T=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(T=T[it]),T){re.bindFramebuffer(B.FRAMEBUFFER,T);try{let L=C.texture,k=L.format,Y=L.type;if(k!==Ln&&we.convert(k)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Z=Y===bn&&(oe.has("EXT_color_buffer_half_float")||de.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Y!==mi&&we.convert(Y)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Y===On&&(de.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Z){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ie&&te>=0&&te<=C.height-Q&&B.readPixels(j,te,ie,Q,we.convert(k),we.convert(Y),Ge)}finally{let L=w!==null?ve.get(w).__webglFramebuffer:null;re.bindFramebuffer(B.FRAMEBUFFER,L)}}},this.copyFramebufferToTexture=function(C,j,te=0){let ie=Math.pow(2,-te),Q=Math.floor(j.image.width*ie),Ge=Math.floor(j.image.height*ie);R.setTexture2D(j,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,C.x,C.y,Q,Ge),re.unbindTexture()},this.copyTextureToTexture=function(C,j,te,ie=0){let Q=j.image.width,Ge=j.image.height,it=we.convert(te.format),T=we.convert(te.type);R.setTexture2D(te,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,te.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,te.unpackAlignment),j.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ie,C.x,C.y,Q,Ge,it,T,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ie,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,it,j.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ie,C.x,C.y,it,T,j.image),ie===0&&te.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(C,j,te,ie,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ge=C.max.x-C.min.x+1,it=C.max.y-C.min.y+1,T=C.max.z-C.min.z+1,L=we.convert(ie.format),k=we.convert(ie.type),Y;if(ie.isData3DTexture)R.setTexture3D(ie,0),Y=B.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)R.setTexture2DArray(ie,0),Y=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ie.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ie.unpackAlignment);let Z=B.getParameter(B.UNPACK_ROW_LENGTH),$=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ee=B.getParameter(B.UNPACK_SKIP_PIXELS),ne=B.getParameter(B.UNPACK_SKIP_ROWS),_e=B.getParameter(B.UNPACK_SKIP_IMAGES),Me=te.isCompressedTexture?te.mipmaps[Q]:te.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),te.isDataTexture||te.isData3DTexture?B.texSubImage3D(Y,Q,j.x,j.y,j.z,Ge,it,T,L,k,Me.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Y,Q,j.x,j.y,j.z,Ge,it,T,L,Me.data)):B.texSubImage3D(Y,Q,j.x,j.y,j.z,Ge,it,T,L,k,Me),B.pixelStorei(B.UNPACK_ROW_LENGTH,Z),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_e),Q===0&&ie.generateMipmaps&&B.generateMipmap(Y),re.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),re.unbindTexture()},this.resetState=function(){A=0,S=0,w=null,re.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gc?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?ss:Su}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?Kt:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Hl=class extends wr{};Hl.prototype.isWebGL1Renderer=!0;var Zs=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ii=class extends Bn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=cn,h=cn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Ft,iu=new Ft,va=[],su=new Ci,t_=new Ft,dr=new Xe,fr=new as,ka=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),su.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(su)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),fr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),iu.multiplyMatrices(n,Is),dr.matrixWorld=iu,dr.raycast(e,va);for(let a=0,o=va.length;a<o;a++){let l=va[a];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yi=class extends Bn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],a=[],o=new O,l=new Ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(an(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(an(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kl=class extends Ar{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ya=new O,ml=new vc,gl=new vc,_l=new vc,Rr=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ml.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),gl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),_l.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),gl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ml.calc(l),gl.calc(l),_l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function n_(i,e){let t=1-i;return t*t*e}function i_(i,e){return 2*(1-i)*i*e}function s_(i,e){return i*i*e}function vr(i,e,t,n){return n_(i,e)+i_(i,t)+s_(i,n)}function r_(i,e){let t=1-i;return t*t*t*e}function a_(i,e){let t=1-i;return 3*t*t*i*e}function o_(i,e){return 3*(1-i)*i*i*e}function l_(i,e){return i*i*i*e}function yr(i,e,t,n,s){return r_(i,e)+a_(i,t)+o_(i,n)+l_(i,s)}var Va=class extends $n{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vl=class extends $n{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends $n{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gl=class extends $n{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends $n{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends $n{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y),vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ru(o,l.x,c.x,h.x,d.x),ru(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},qa=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Rr,CubicBezierCurve:Va,CubicBezierCurve3:Vl,EllipseCurve:Ar,LineCurve:Ga,LineCurve3:Gl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Xa,SplineCurve:Ya}),Wl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qa[s.type]().fromJSON(s))}return this}},js=class extends Wl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ga(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Va(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ya(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ar(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Za=class i extends Xt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=an(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new O,u=new le,f=new O,g=new O,x=new O,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){let _=n+M*h*s,b=Math.sin(_),A=Math.cos(_);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*b,d.y=e[S].y,d.z=e[S].x*A,a.push(d.x,d.y,d.z),u.x=M/t,u.y=S/(e.length-1),o.push(u.x,u.y);let w=l[3*S+0]*b,I=l[3*S+1],y=l[3*S+0]*A;c.push(w,I,y)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let b=_+M*e.length,A=b,S=b+e.length,w=b+e.length+1,I=b+1;r.push(A,S,I),r.push(w,I,S)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ja=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_i=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function M(){let b=new O,A=new O,S=0,w=(t-e)/n;for(let I=0;I<=r;I++){let y=[],v=I/r,U=v*(t-e)+e;for(let z=0;z<=s;z++){let X=z/s,P=X*l+o,D=Math.sin(P),F=Math.cos(P);A.x=U*D,A.y=-v*n+m,A.z=U*F,d.push(A.x,A.y,A.z),b.set(D,w,F).normalize(),u.push(b.x,b.y,b.z),f.push(X,1-v),y.push(g++)}x.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){let v=x[y][I],U=x[y+1][I],z=x[y+1][I+1],X=x[y][I+1];h.push(v,U,X),h.push(U,z,X),S+=6}c.addGroup(p,S,0),p+=S}function _(b){let A=g,S=new le,w=new O,I=0,y=b===!0?e:t,v=b===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let P=z/s*l+o,D=Math.cos(P),F=Math.sin(P);w.x=y*F,w.y=m*v,w.z=y*D,d.push(w.x,w.y,w.z),u.push(0,v,0),S.x=D*.5+.5,S.y=F*.5*v+.5,f.push(S.x,S.y),g++}for(let z=0;z<s;z++){let X=A+z,P=U+z;b===!0?h.push(P,P+1,X):h.push(P+1,P,X),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ja=class i extends _i{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xl=class i extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new O,b=new O,A=new O;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],b),f(t[S+2],A),l(_,b,A,M)}function l(M,_,b,A){let S=A+1,w=[];for(let I=0;I<=S;I++){w[I]=[];let y=M.clone().lerp(b,I/S),v=_.clone().lerp(b,I/S),U=S-I;for(let z=0;z<=U;z++)z===0&&I===S?w[I][z]=y:w[I][z]=y.clone().lerp(v,z/U)}for(let I=0;I<S;I++)for(let y=0;y<2*(S-I)-1;y++){let v=Math.floor(y/2);y%2===0?(u(w[I][v+1]),u(w[I+1][v]),u(w[I][v])):(u(w[I][v+1]),u(w[I+1][v+1]),u(w[I+1][v]))}}function c(M){let _=new O;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(M),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let M=new O;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let b=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(b,1-A)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let _=a[M+0],b=a[M+2],A=a[M+4],S=Math.max(_,b,A),w=Math.min(_,b,A);S>.9&&w<.1&&(_<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,_){let b=M*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){let M=new O,_=new O,b=new O,A=new O,S=new le,w=new le,I=new le;for(let y=0,v=0;y<r.length;y+=9,v+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),S.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),A.copy(M).add(_).add(b).divideScalar(3);let U=m(A);x(S,v+0,M,U),x(w,v+2,_,U),x(I,v+4,b,U)}}function x(M,_,b,A){A<0&&M.x===1&&(a[_]=M.x-1),b.x===0&&b.z===0&&(a[_]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Sn=class extends js{constructor(e){super(e),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new js().fromJSON(s))}return this}},c_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=p_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Cr(r,a,t,o,l,f,0),a}};function Nu(i,e,t,n,s){let r,a;if(s===w_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=au(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=au(r,i[r],i[r+1],a);return a&&mo(a,a.next)&&(Ir(a),a=a.next),a}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mo(t,t.next)||tn(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&v_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?u_(i,n,s,r):h_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=d_(os(i),e,t),Cr(i,e,t,n,s,r,2)):a===2&&f_(i,e,t,n,s,r):Cr(os(i),e,t,n,s,r,1);break}}}function h_(i){let e=i.prev,t=i,n=i.next;if(tn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Os(s,o,r,l,a,c,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Yl(f,g,e,t,n),M=Yl(x,m,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Os(o,h,l,d,c,u,_.x,_.y)&&tn(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Os(o,h,l,d,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Os(o,h,l,d,c,u,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Os(o,h,l,d,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function d_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!mo(s,r)&&Ou(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return os(n)}function f_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b_(a,o)){let l=Fu(a,o);a=os(a,a.next),l=os(l,l.next),Cr(a,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function p_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Nu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(M_(c));for(s.sort(m_),r=0;r<s.length;r++)t=g_(s[r],t);return t}function m_(i,e){return i.x-e.x}function g_(i,e){let t=__(i,e);if(!t)return e;let n=Fu(t,i);return os(n,n.next),os(t,t.next)}function __(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Os(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Pr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&x_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function x_(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function v_(i,e,t,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y_(s)}function y_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Yl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Os(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function b_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!S_(i,e)&&(Pr(i,e)&&Pr(e,i)&&E_(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||mo(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mo(i,e){return i.x===e.x&&i.y===e.y}function Ou(i,e,t,n){let s=ba(tn(i,e,t)),r=ba(tn(i,e,n)),a=ba(tn(t,n,i)),o=ba(tn(t,n,e));return!!(s!==r&&a!==o||s===0&&Ma(i,t,e)||r===0&&Ma(i,n,e)||a===0&&Ma(t,i,n)||o===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function S_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ou(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function E_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fu(i,e){let t=new ql(i.i,i.x,i.y),n=new ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function au(i,e,t,n){let s=new ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Vi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ou(e),lu(n,e);let a=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,lu(n,t[l]);let o=c_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ou(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zn=class i extends Xt{constructor(e=new Sn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:T_,_,b=!1,A,S,w,I;p&&(_=p.getSpacedPoints(h),b=!0,u=!1,A=p.computeFrenetFrames(h,!1),S=new O,w=new O,I=new O),u||(m=0,f=0,g=0,x=0);let y=o.extractPoints(c),v=y.shape,U=y.holes;if(!Vi.isClockWise(v)){v=v.reverse();for(let B=0,Ee=U.length;B<Ee;B++){let oe=U[B];Vi.isClockWise(oe)&&(U[B]=oe.reverse())}}let X=Vi.triangulateShape(v,U),P=v;for(let B=0,Ee=U.length;B<Ee;B++){let oe=U[B];v=v.concat(oe)}function D(B,Ee,oe){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Ee,oe)}let F=v.length,J=X.length;function H(B,Ee,oe){let de,re,Fe,ve=B.x-Ee.x,R=B.y-Ee.y,E=oe.x-B.x,W=oe.y-B.y,xe=ve*ve+R*R,he=ve*W-R*E;if(Math.abs(he)>Number.EPSILON){let ue=Math.sqrt(xe),je=Math.sqrt(E*E+W*W),Ce=Ee.x-R/ue,ke=Ee.y+ve/ue,Qe=oe.x-W/je,tt=oe.y+E/je,fe=((Qe-Ce)*W-(tt-ke)*E)/(ve*W-R*E);de=Ce+ve*fe-B.x,re=ke+R*fe-B.y;let pt=de*de+re*re;if(pt<=2)return new le(de,re);Fe=Math.sqrt(pt/2)}else{let ue=!1;ve>Number.EPSILON?E>Number.EPSILON&&(ue=!0):ve<-Number.EPSILON?E<-Number.EPSILON&&(ue=!0):Math.sign(R)===Math.sign(W)&&(ue=!0),ue?(de=-R,re=ve,Fe=Math.sqrt(xe)):(de=ve,re=R,Fe=Math.sqrt(xe/2))}return new le(de/Fe,re/Fe)}let q=[];for(let B=0,Ee=P.length,oe=Ee-1,de=B+1;B<Ee;B++,oe++,de++)oe===Ee&&(oe=0),de===Ee&&(de=0),q[B]=H(P[B],P[oe],P[de]);let se=[],ae,me=q.concat();for(let B=0,Ee=U.length;B<Ee;B++){let oe=U[B];ae=[];for(let de=0,re=oe.length,Fe=re-1,ve=de+1;de<re;de++,Fe++,ve++)Fe===re&&(Fe=0),ve===re&&(ve=0),ae[de]=H(oe[de],oe[Fe],oe[ve]);se.push(ae),me=me.concat(ae)}for(let B=0;B<m;B++){let Ee=B/m,oe=f*Math.cos(Ee*Math.PI/2),de=g*Math.sin(Ee*Math.PI/2)+x;for(let re=0,Fe=P.length;re<Fe;re++){let ve=D(P[re],q[re],de);He(ve.x,ve.y,-oe)}for(let re=0,Fe=U.length;re<Fe;re++){let ve=U[re];ae=se[re];for(let R=0,E=ve.length;R<E;R++){let W=D(ve[R],ae[R],de);He(W.x,W.y,-oe)}}}let K=g+x;for(let B=0;B<F;B++){let Ee=u?D(v[B],me[B],K):v[B];b?(w.copy(A.normals[0]).multiplyScalar(Ee.x),S.copy(A.binormals[0]).multiplyScalar(Ee.y),I.copy(_[0]).add(w).add(S),He(I.x,I.y,I.z)):He(Ee.x,Ee.y,0)}for(let B=1;B<=h;B++)for(let Ee=0;Ee<F;Ee++){let oe=u?D(v[Ee],me[Ee],K):v[Ee];b?(w.copy(A.normals[B]).multiplyScalar(oe.x),S.copy(A.binormals[B]).multiplyScalar(oe.y),I.copy(_[B]).add(w).add(S),He(I.x,I.y,I.z)):He(oe.x,oe.y,d/h*B)}for(let B=m-1;B>=0;B--){let Ee=B/m,oe=f*Math.cos(Ee*Math.PI/2),de=g*Math.sin(Ee*Math.PI/2)+x;for(let re=0,Fe=P.length;re<Fe;re++){let ve=D(P[re],q[re],de);He(ve.x,ve.y,d+oe)}for(let re=0,Fe=U.length;re<Fe;re++){let ve=U[re];ae=se[re];for(let R=0,E=ve.length;R<E;R++){let W=D(ve[R],ae[R],de);b?He(W.x,W.y+_[h-1].y,_[h-1].x+oe):He(W.x,W.y,d+oe)}}}ce(),Le();function ce(){let B=s.length/3;if(u){let Ee=0,oe=F*Ee;for(let de=0;de<J;de++){let re=X[de];Je(re[2]+oe,re[1]+oe,re[0]+oe)}Ee=h+m*2,oe=F*Ee;for(let de=0;de<J;de++){let re=X[de];Je(re[0]+oe,re[1]+oe,re[2]+oe)}}else{for(let Ee=0;Ee<J;Ee++){let oe=X[Ee];Je(oe[2],oe[1],oe[0])}for(let Ee=0;Ee<J;Ee++){let oe=X[Ee];Je(oe[0]+F*h,oe[1]+F*h,oe[2]+F*h)}}n.addGroup(B,s.length/3-B,0)}function Le(){let B=s.length/3,Ee=0;qe(P,Ee),Ee+=P.length;for(let oe=0,de=U.length;oe<de;oe++){let re=U[oe];qe(re,Ee),Ee+=re.length}n.addGroup(B,s.length/3-B,1)}function qe(B,Ee){let oe=B.length;for(;--oe>=0;){let de=oe,re=oe-1;re<0&&(re=B.length-1);for(let Fe=0,ve=h+m*2;Fe<ve;Fe++){let R=F*Fe,E=F*(Fe+1),W=Ee+de+R,xe=Ee+re+R,he=Ee+re+E,ue=Ee+de+E;rt(W,xe,he,ue)}}}function He(B,Ee,oe){l.push(B),l.push(Ee),l.push(oe)}function Je(B,Ee,oe){Ye(B),Ye(Ee),Ye(oe);let de=s.length/3,re=M.generateTopUV(n,s,de-3,de-2,de-1);Ae(re[0]),Ae(re[1]),Ae(re[2])}function rt(B,Ee,oe,de){Ye(B),Ye(Ee),Ye(de),Ye(Ee),Ye(oe),Ye(de);let re=s.length/3,Fe=M.generateSideWallUV(n,s,re-6,re-3,re-2,re-1);Ae(Fe[0]),Ae(Fe[1]),Ae(Fe[3]),Ae(Fe[1]),Ae(Fe[2]),Ae(Fe[3])}function Ye(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Ae(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return A_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qa[s.type]().fromJSON(s)),new i(n,e.options)}},T_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-d),new le(u,1-g),new le(x,1-p)]:[new le(o,1-l),new le(h,1-d),new le(f,1-g),new le(m,1-p)]}};function A_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Js=class i extends Xl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var $a=class i extends Xt{constructor(e=new Sn([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;Vi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Vi.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Vi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],_=M[0]+d,b=M[1]+d,A=M[2]+d;n.push(_,b,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return R_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function R_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ka=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new O,u=new O,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let S=A/t;d.x=-e*Math.cos(s+S*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(s+S*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(S+b,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=h[p][M+1],b=h[p][M],A=h[p+1][M],S=h[p+1][M+1];(p!==0||a>0)&&f.push(_,b,S),(p!==n-1||l<Math.PI)&&f.push(b,A,S)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qa=class i extends Xt{constructor(e=new Xa(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new le,h=new O,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),M(),p()}function m(_){h=e.getPointAt(_/t,h);let b=a.normals[_],A=a.binormals[_];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,I=Math.sin(w),y=-Math.cos(w);l.x=y*b.x+I*A.x,l.y=y*b.y+I*A.y,l.z=y*b.z+I*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let b=1;b<=s;b++){let A=(s+1)*(_-1)+(b-1),S=(s+1)*_+(b-1),w=(s+1)*_+b,I=(s+1)*(_-1)+b;g.push(A,S,I),g.push(S,w,I)}}function M(){for(let _=0;_<=t;_++)for(let b=0;b<=s;b++)c.x=_/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var eo=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Li=class extends kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var to=class extends Xi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Sa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function C_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=e,o=2*t-n;break;case mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=e,l=2*n-t;break;case mh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[c+A]+_*a[l+A]+b*a[d+A];return r}},jl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Jl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},li=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&C_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Aa;var ls=class extends li{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ta;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends li{};$l.prototype.ValueTypeName="color";var Kl=class extends li{};Kl.prototype.ValueTypeName="number";var Ql=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Lr=class extends li{InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=Aa;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends li{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ta;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends li{};ec.prototype.ValueTypeName="vector";var no={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},tc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},P_=new tc,hs=class{constructor(e){this.manager=e!==void 0?e:P_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},nc=class extends Error{constructor(e,t){super(e),this.response=t}},ic=class extends hs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=no.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ei[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0,x=0,m=new ReadableStream({start(p){M();function M(){d.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let S=0,w=h.length;S<w;S++){let I=h[S];I.onProgress&&I.onProgress(A)}p.enqueue(b),M()}})}}});return new Response(m)}else throw new nc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{no.add(e,c);let h=Ei[e];delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var sc=class extends hs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=no.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=br("img");function l(){h(),no.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var io=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Ii,o=new ic(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Gn,a.wrapT=c.wrapT!==void 0?c.wrapT:Gn,a.magFilter=c.magFilter!==void 0?c.magFilter:hn,a.minFilter=c.minFilter!==void 0?c.minFilter:hn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Vs),c.mipmapCount===1&&(a.minFilter=hn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},so=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=new Bn,a=new sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Dr=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ro=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new Ft,cu=new O,hu=new O,ao=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var uu=new Ft,pr=new O,vl=new O,rc=class extends ao{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-pr.x,-pr.y,-pr.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},Ks=class extends Dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ac=class extends ao{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function du(){return(typeof performance>"u"?Date:performance).now()}var yc="\\[\\]\\.:\\/",I_=new RegExp("["+yc+"]","g"),Mc="[^"+yc+"]",L_="[^"+yc.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",Mc),U_=/(WCOD+)?/.source.replace("WCOD",L_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),F_=new RegExp("^"+D_+U_+N_+O_+"$"),B_=["material","materials","bones","map"],oc=class{constructor(e,t,n){let s=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(e){let t=F_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=oc;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var Ur=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Bu={type:"change"},bc={type:"start"},zu={type:"end"},go=new Sr,Hu=new ai,H_=Math.cos(70*wu.DEG2RAD),_o=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",ue),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bu),n.update(),r=s.NONE},this.update=(function(){let N=new O,ge=new Yn().setFromUnitVectors(e.up,new O(0,1,0)),Re=ge.clone().invert(),we=new O,$e=new Yn,vt=new O,wt=2*Math.PI;return function(Te=null){let V=n.object.position;N.copy(V).sub(n.target),N.applyQuaternion(ge),o.setFromVector3(N),n.autoRotate&&r===s.NONE&&U(y(Te)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Pe=n.minAzimuthAngle,De=n.maxAzimuthAngle;isFinite(Pe)&&isFinite(De)&&(Pe<-Math.PI?Pe+=wt:Pe>Math.PI&&(Pe-=wt),De<-Math.PI?De+=wt:De>Math.PI&&(De-=wt),Pe<=De?o.theta=Math.max(Pe,Math.min(De,o.theta)):o.theta=o.theta>(Pe+De)/2?Math.max(Pe,o.theta):Math.min(De,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*c),N.setFromSpherical(o),N.applyQuaternion(Re),V.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ot=!1;if(n.zoomToCursor&&S){let nt=null;if(n.object.isPerspectiveCamera){let Nt=N.length();nt=q(Nt*c);let Ot=Nt-nt;n.object.position.addScaledVector(b,Ot),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Nt=new O(A.x,A.y,0);Nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ot=!0;let Ot=new O(A.x,A.y,0);Ot.unproject(n.object),n.object.position.sub(Ot).add(Nt),n.object.updateMatrixWorld(),nt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):(go.origin.copy(n.object.position),go.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(go.direction))<H_?e.lookAt(n.target):(Hu.setFromNormalAndCoplanarPoint(n.object.up,n.target),go.intersectPlane(Hu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ot=!0);return c=1,S=!1,ot||we.distanceToSquared(n.object.position)>a||8*(1-$e.dot(n.object.quaternion))>a||vt.distanceToSquared(n.target)>0?(n.dispatchEvent(Bu),we.copy(n.object.position),$e.copy(n.object.quaternion),vt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",ve),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Ur,l=new Ur,c=1,h=new O,d=new le,u=new le,f=new le,g=new le,x=new le,m=new le,p=new le,M=new le,_=new le,b=new O,A=new le,S=!1,w=[],I={};function y(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function v(N){let ge=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ge)}function U(N){l.theta-=N}function z(N){l.phi-=N}let X=(function(){let N=new O;return function(Re,we){N.setFromMatrixColumn(we,0),N.multiplyScalar(-Re),h.add(N)}})(),P=(function(){let N=new O;return function(Re,we){n.screenSpacePanning===!0?N.setFromMatrixColumn(we,1):(N.setFromMatrixColumn(we,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Re),h.add(N)}})(),D=(function(){let N=new O;return function(Re,we){let $e=n.domElement;if(n.object.isPerspectiveCamera){let vt=n.object.position;N.copy(vt).sub(n.target);let wt=N.length();wt*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Re*wt/$e.clientHeight,n.object.matrix),P(2*we*wt/$e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Re*(n.object.right-n.object.left)/n.object.zoom/$e.clientWidth,n.object.matrix),P(we*(n.object.top-n.object.bottom)/n.object.zoom/$e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function F(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(N,ge){if(!n.zoomToCursor)return;S=!0;let Re=n.domElement.getBoundingClientRect(),we=N-Re.left,$e=ge-Re.top,vt=Re.width,wt=Re.height;A.x=we/vt*2-1,A.y=-($e/wt)*2+1,b.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function se(N){d.set(N.clientX,N.clientY)}function ae(N){H(N.clientX,N.clientX),p.set(N.clientX,N.clientY)}function me(N){g.set(N.clientX,N.clientY)}function K(N){u.set(N.clientX,N.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ge=n.domElement;U(2*Math.PI*f.x/ge.clientHeight),z(2*Math.PI*f.y/ge.clientHeight),d.copy(u),n.update()}function ce(N){M.set(N.clientX,N.clientY),_.subVectors(M,p),_.y>0?F(v(_.y)):_.y<0&&J(v(_.y)),p.copy(M),n.update()}function Le(N){x.set(N.clientX,N.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(x),n.update()}function qe(N){H(N.clientX,N.clientY),N.deltaY<0?J(v(N.deltaY)):N.deltaY>0&&F(v(N.deltaY)),n.update()}function He(N){let ge=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),ge=!0;break}ge&&(N.preventDefault(),n.update())}function Je(N){if(w.length===1)d.set(N.pageX,N.pageY);else{let ge=pt(N),Re=.5*(N.pageX+ge.x),we=.5*(N.pageY+ge.y);d.set(Re,we)}}function rt(N){if(w.length===1)g.set(N.pageX,N.pageY);else{let ge=pt(N),Re=.5*(N.pageX+ge.x),we=.5*(N.pageY+ge.y);g.set(Re,we)}}function Ye(N){let ge=pt(N),Re=N.pageX-ge.x,we=N.pageY-ge.y,$e=Math.sqrt(Re*Re+we*we);p.set(0,$e)}function Ae(N){n.enableZoom&&Ye(N),n.enablePan&&rt(N)}function B(N){n.enableZoom&&Ye(N),n.enableRotate&&Je(N)}function Ee(N){if(w.length==1)u.set(N.pageX,N.pageY);else{let Re=pt(N),we=.5*(N.pageX+Re.x),$e=.5*(N.pageY+Re.y);u.set(we,$e)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let ge=n.domElement;U(2*Math.PI*f.x/ge.clientHeight),z(2*Math.PI*f.y/ge.clientHeight),d.copy(u)}function oe(N){if(w.length===1)x.set(N.pageX,N.pageY);else{let ge=pt(N),Re=.5*(N.pageX+ge.x),we=.5*(N.pageY+ge.y);x.set(Re,we)}m.subVectors(x,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(x)}function de(N){let ge=pt(N),Re=N.pageX-ge.x,we=N.pageY-ge.y,$e=Math.sqrt(Re*Re+we*we);M.set(0,$e),_.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),F(_.y),p.copy(M);let vt=(N.pageX+ge.x)*.5,wt=(N.pageY+ge.y)*.5;H(vt,wt)}function re(N){n.enableZoom&&de(N),n.enablePan&&oe(N)}function Fe(N){n.enableZoom&&de(N),n.enableRotate&&Ee(N)}function ve(N){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),Qe(N),N.pointerType==="touch"?je(N):W(N))}function R(N){n.enabled!==!1&&(N.pointerType==="touch"?Ce(N):xe(N))}function E(N){tt(N),w.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(zu),r=s.NONE}function W(N){let ge;switch(N.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case us.DOLLY:if(n.enableZoom===!1)return;ae(N),r=s.DOLLY;break;case us.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;me(N),r=s.PAN}else{if(n.enableRotate===!1)return;se(N),r=s.ROTATE}break;case us.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;se(N),r=s.ROTATE}else{if(n.enablePan===!1)return;me(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bc)}function xe(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;K(N);break;case s.DOLLY:if(n.enableZoom===!1)return;ce(N);break;case s.PAN:if(n.enablePan===!1)return;Le(N);break}}function he(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(bc),qe(N),n.dispatchEvent(zu))}function ue(N){n.enabled===!1||n.enablePan===!1||He(N)}function je(N){switch(fe(N),w.length){case 1:switch(n.touches.ONE){case ds.ROTATE:if(n.enableRotate===!1)return;Je(N),r=s.TOUCH_ROTATE;break;case ds.PAN:if(n.enablePan===!1)return;rt(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(N),r=s.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bc)}function Ce(N){switch(fe(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;oe(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(N),n.update();break;default:r=s.NONE}}function ke(N){n.enabled!==!1&&N.preventDefault()}function Qe(N){w.push(N.pointerId)}function tt(N){delete I[N.pointerId];for(let ge=0;ge<w.length;ge++)if(w[ge]==N.pointerId){w.splice(ge,1);return}}function fe(N){let ge=I[N.pointerId];ge===void 0&&(ge=new le,I[N.pointerId]=ge),ge.set(N.pageX,N.pageY)}function pt(N){let ge=N.pointerId===w[0]?w[1]:w[0];return I[ge]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",ve),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}};var xo=class extends io{constructor(e){super(e),this.type=bn}parse(e){let a=function(I,y){switch(I){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},d=function(I,y,v){y=y||1024;let z=I.pos,X=-1,P=0,D="",F=String.fromCharCode.apply(null,new Uint16Array(I.subarray(z,z+128)));for(;0>(X=F.indexOf(`
`))&&P<y&&z<I.byteLength;)D+=F,P+=F.length,z+=128,F+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(z,z+128)));return-1<X?(v!==!1&&(I.pos+=P+X+1),D+F.slice(0,X)):!1},u=function(I){let y=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,F;for((I.pos>=I.byteLength||!(D=d(I)))&&a(1,"no header found"),(F=D.match(y))||a(3,"bad initial token"),P.valid|=1,P.programtype=F[1],P.string+=D+`
`;D=d(I),D!==!1;){if(P.string+=D+`
`,D.charAt(0)==="#"){P.comments+=D+`
`;continue}if((F=D.match(v))&&(P.gamma=parseFloat(F[1])),(F=D.match(U))&&(P.exposure=parseFloat(F[1])),(F=D.match(z))&&(P.valid|=2,P.format=F[1]),(F=D.match(X))&&(P.valid|=4,P.height=parseInt(F[1],10),P.width=parseInt(F[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(I,y,v){let U=y;if(U<8||U>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);U!==(I[2]<<8|I[3])&&a(3,"wrong scanline width");let z=new Uint8Array(4*y*v);z.length||a(4,"unable to allocate buffer space");let X=0,P=0,D=4*U,F=new Uint8Array(4),J=new Uint8Array(D),H=v;for(;H>0&&P<I.byteLength;){P+4>I.byteLength&&a(1),F[0]=I[P++],F[1]=I[P++],F[2]=I[P++],F[3]=I[P++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=U)&&a(3,"bad rgbe scanline format");let q=0,se;for(;q<D&&P<I.byteLength;){se=I[P++];let me=se>128;if(me&&(se-=128),(se===0||q+se>D)&&a(3,"bad scanline data"),me){let K=I[P++];for(let ce=0;ce<se;ce++)J[q++]=K}else J.set(I.subarray(P,P+se),q),q+=se,P+=se}let ae=U;for(let me=0;me<ae;me++){let K=0;z[X]=J[me+K],K+=U,z[X+1]=J[me+K],K+=U,z[X+2]=J[me+K],K+=U,z[X+3]=J[me+K],X+=4}H--}return z},g=function(I,y,v,U){let z=I[y+3],X=Math.pow(2,z-128)/255;v[U+0]=I[y+0]*X,v[U+1]=I[y+1]*X,v[U+2]=I[y+2]*X,v[U+3]=1},x=function(I,y,v,U){let z=I[y+3],X=Math.pow(2,z-128)/255;v[U+0]=Or.toHalfFloat(Math.min(I[y+0]*X,65504)),v[U+1]=Or.toHalfFloat(Math.min(I[y+1]*X,65504)),v[U+2]=Or.toHalfFloat(Math.min(I[y+2]*X,65504)),v[U+3]=Or.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=u(m),M=p.width,_=p.height,b=f(m.subarray(m.pos),M,_),A,S,w;switch(this.type){case On:w=b.length/4;let I=new Float32Array(w*4);for(let v=0;v<w;v++)g(b,v*4,I,v*4);A=I,S=On;break;case bn:w=b.length/4;let y=new Uint16Array(w*4);for(let v=0;v<w;v++)x(b,v*4,y,v*4);A=y,S=bn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:_,data:A,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case On:case bn:a.colorSpace=Xn,a.minFilter=hn,a.magFilter=hn,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}};var vo=class extends Zs{constructor(e=null){super();let t=new fn;t.deleteAttribute("uv");let n=new kt({side:An}),s=new kt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Ks(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Xe(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Xe(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Xe(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Xe(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Xe(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Xe(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let f=new Xe(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Xe(t,tr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Xe(t,tr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Xe(t,tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Xe(t,tr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let M=new Xe(t,tr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new Xe(t,tr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function tr(i){let e=new Pi;return e.color.setScalar(i),e}var nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k_=new Xs(-1,1,1,-1,0,1),Sc=class extends Xt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},V_=new Sc,qi=class{constructor(e){this._mesh=new Xe(V_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yo=class extends qn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fr=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mo=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var bo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yo(nr),this.copyPass.material.blending=dn,this.clock=new lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fr!==void 0&&(a instanceof Fr?n=!0:a instanceof Mo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var So=class extends qn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Br={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ft},cameraProjectionMatrixInverse:{value:new Ft},cameraWorldMatrix:{value:new Ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},zr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Eo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ku(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=G_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ii(s,e,e);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}function G_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Hr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ec(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new Ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ec(i,e,t){let n=W_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function W_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),a))}return n}var wo=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let M=g-m+h,_=x-p+h,b=g-1+2*h,A=x-1+2*h,S=l&255,w=c&255,I=this.perm[S+this.perm[w]]%12,y=this.perm[S+m+this.perm[w+p]]%12,v=this.perm[S+1+this.perm[w+1]]%12,U=.5-g*g-x*x;U<0?n=0:(U*=U,n=U*U*this.dot(this.grad3[I],g,x));let z=.5-M*M-_*_;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[y],M,_));let X=.5-b*b-A*A;return X<0?r=0:(X*=X,r=X*X*this.dot(this.grad3[v],b,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,x=h-g,m=d-g,p=u-g,M=e-x,_=t-m,b=n-p,A,S,w,I,y,v;M>=_?_>=b?(A=1,S=0,w=0,I=1,y=1,v=0):M>=b?(A=1,S=0,w=0,I=1,y=0,v=1):(A=0,S=0,w=1,I=1,y=0,v=1):_<b?(A=0,S=0,w=1,I=0,y=1,v=1):M<b?(A=0,S=1,w=0,I=0,y=1,v=1):(A=0,S=1,w=0,I=1,y=1,v=0);let U=M-A+f,z=_-S+f,X=b-w+f,P=M-I+2*f,D=_-y+2*f,F=b-v+2*f,J=M-1+3*f,H=_-1+3*f,q=b-1+3*f,se=h&255,ae=d&255,me=u&255,K=this.perm[se+this.perm[ae+this.perm[me]]]%12,ce=this.perm[se+A+this.perm[ae+S+this.perm[me+w]]]%12,Le=this.perm[se+I+this.perm[ae+y+this.perm[me+v]]]%12,qe=this.perm[se+1+this.perm[ae+1+this.perm[me+1]]]%12,He=.6-M*M-_*_-b*b;He<0?s=0:(He*=He,s=He*He*this.dot3(this.grad3[K],M,_,b));let Je=.6-U*U-z*z-X*X;Je<0?r=0:(Je*=Je,r=Je*Je*this.dot3(this.grad3[ce],U,z,X));let rt=.6-P*P-D*D-F*F;rt<0?a=0:(rt*=rt,a=rt*rt*this.dot3(this.grad3[Le],P,D,F));let Ye=.6-J*J-H*H-q*q;return Ye<0?o=0:(Ye*=Ye,o=Ye*Ye*this.dot3(this.grad3[qe],J,H,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,x=(e+t+n+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),M=Math.floor(n+x),_=Math.floor(s+x),b=(m+p+M+_)*c,A=m-b,S=p-b,w=M-b,I=_-b,y=e-A,v=t-S,U=n-w,z=s-I,X=y>v?32:0,P=y>U?16:0,D=v>U?8:0,F=y>z?4:0,J=v>z?2:0,H=U>z?1:0,q=X+P+D+F+J+H,se=a[q][0]>=3?1:0,ae=a[q][1]>=3?1:0,me=a[q][2]>=3?1:0,K=a[q][3]>=3?1:0,ce=a[q][0]>=2?1:0,Le=a[q][1]>=2?1:0,qe=a[q][2]>=2?1:0,He=a[q][3]>=2?1:0,Je=a[q][0]>=1?1:0,rt=a[q][1]>=1?1:0,Ye=a[q][2]>=1?1:0,Ae=a[q][3]>=1?1:0,B=y-se+c,Ee=v-ae+c,oe=U-me+c,de=z-K+c,re=y-ce+2*c,Fe=v-Le+2*c,ve=U-qe+2*c,R=z-He+2*c,E=y-Je+3*c,W=v-rt+3*c,xe=U-Ye+3*c,he=z-Ae+3*c,ue=y-1+4*c,je=v-1+4*c,Ce=U-1+4*c,ke=z-1+4*c,Qe=m&255,tt=p&255,fe=M&255,pt=_&255,N=o[Qe+o[tt+o[fe+o[pt]]]]%32,ge=o[Qe+se+o[tt+ae+o[fe+me+o[pt+K]]]]%32,Re=o[Qe+ce+o[tt+Le+o[fe+qe+o[pt+He]]]]%32,we=o[Qe+Je+o[tt+rt+o[fe+Ye+o[pt+Ae]]]]%32,$e=o[Qe+1+o[tt+1+o[fe+1+o[pt+1]]]]%32,vt=.6-y*y-v*v-U*U-z*z;vt<0?h=0:(vt*=vt,h=vt*vt*this.dot4(r[N],y,v,U,z));let wt=.6-B*B-Ee*Ee-oe*oe-de*de;wt<0?d=0:(wt*=wt,d=wt*wt*this.dot4(r[ge],B,Ee,oe,de));let mt=.6-re*re-Fe*Fe-ve*ve-R*R;mt<0?u=0:(mt*=mt,u=mt*mt*this.dot4(r[Re],re,Fe,ve,R));let Te=.6-E*E-W*W-xe*xe-he*he;Te<0?f=0:(Te*=Te,f=Te*Te*this.dot4(r[we],E,W,xe,he));let V=.6-ue*ue-je*je-Ce*Ce-ke*ke;return V<0?g=0:(V*=V,g=V*V*this.dot4(r[$e],ue,je,Ce,ke)),27*(h+d+u+f+g)}};var kr=class i extends qn{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ku(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rn(this.width,this.height,{type:bn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new pn({defines:Object.assign({},Br.defines),uniforms:ci.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new to,this.normalMaterial.blending=dn,this.pdMaterial=new pn({defines:Object.assign({},Hr.defines),uniforms:ci.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new pn({defines:Object.assign({},zr.defines),uniforms:ci.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pn({uniforms:ci.clone(nr.uniforms),vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ho,blendDst:Qs,blendEquation:Jn,blendSrcAlpha:co,blendDstAlpha:Qs,blendEquationAlpha:Jn}),this.blendMaterial=new pn({uniforms:ci.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cc,blendSrc:ho,blendDst:Qs,blendEquation:Jn,blendSrcAlpha:co,blendDstAlpha:Qs,blendEquationAlpha:Jn}),this.fsQuad=new qi(null),this.originalClearColor=new xt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new qs,this.depthTexture.format=Wi,this.depthTexture.type=Ri,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:cn,magFilter:cn,type:bn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ec(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new wo,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ii(s,e,e,Ln,mi);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}};kr.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Vu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var To=class extends qn{constructor(){super();let e=Vu;this.uniforms=ci.clone(e.uniforms),this.material=new eo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Vr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Xt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Gu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let g=Gu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Gu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Jt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function Wu(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new O,new O,new O],r=new O,a=new O,o=new O,l=new O;function c(x){let m=~~(x.x*n),p=~~(x.y*n),M=~~(x.z*n);return`${m},${p},${M}`}let h=i.index?i.toNonIndexed():i,d=h.attributes.position,u={};for(let x=0,m=d.count/3;x<m;x++){let p=3*x,M=s[0].fromBufferAttribute(d,p+0),_=s[1].fromBufferAttribute(d,p+1),b=s[2].fromBufferAttribute(d,p+2);r.subVectors(b,_),a.subVectors(M,_);let A=new O().crossVectors(r,a).normalize();for(let S=0;S<3;S++){let w=s[S],I=c(w);I in u||(u[I]=[]),u[I].push(A)}}let f=new Float32Array(d.count*3),g=new Jt(f,3,!1);for(let x=0,m=d.count/3;x<m;x++){let p=3*x,M=s[0].fromBufferAttribute(d,p+0),_=s[1].fromBufferAttribute(d,p+1),b=s[2].fromBufferAttribute(d,p+2);r.subVectors(b,_),a.subVectors(M,_),o.crossVectors(r,a).normalize();for(let A=0;A<3;A++){let S=s[A],w=c(S),I=u[w];l.set(0,0,0);for(let y=0,v=I.length;y<v;y++){let U=I[y];o.dot(U)>t&&l.add(U)}l.normalize(),g.setXYZ(p+A,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}var Gr=new O;function Kn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Gr.copy(e),Gr[n]=0,Gr.normalize();let c=.5*a/(a+o),h=1-Gr.angleTo(i)/l;return Math.sign(Gr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ao=class extends fn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new O,l=new O,c=new O(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new O,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=Kn(g,l,"z","y",r,n),u[p+1]=1-Kn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-Kn(g,l,"z","y",r,n),u[p+1]=1-Kn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-Kn(g,l,"x","z",r,e),u[p+1]=Kn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-Kn(g,l,"x","z",r,e),u[p+1]=1-Kn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-Kn(g,l,"x","y",r,e),u[p+1]=1-Kn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=Kn(g,l,"x","y",r,e),u[p+1]=1-Kn(g,l,"y","x",r,t);break}}};var ju="2.0",Oo=(()=>{try{let i=document.currentScript&&document.currentScript.src;return i?i.replace(/[^/]*$/,""):""}catch{return""}})(),X_=["cedar","burgundy","walnut","sapele","birch","coffee","shousugi","whitewash","greywash","patina"],Io=26,$t=typeof window<"u"?window:globalThis,sr={leaf_rs:1.9375,leaf_tb:2.5,jamb_trim:1.625,trim_t:.75,rail_top:5,rail_mid:5,rail_bot:5,glass_t:.75,panel_t:.75,clad_board:5.5,clad_reveal:.25,clad_t:.75,plank:6,xbuck:3.5,bevel:1.5,louvre_pitch:3.5,louvre_w:4,louvre_deg:35,astragal:1.5,jamb:.75,threshold:1,header_face:2.78125,gaps:{shim_side:.375,shim_top:.375,jamb_l:.375,jamb_r:.375,door:.125,center:.25,head:.25,sill:.375}},Y_=Object.assign({},sr,{header_face:2.6875});function q_(i){let e=null;try{typeof $t.rbFor=="function"&&(e=$t.rbFor(i))}catch{e=null}if(!e)return sr;let t=Object.assign({},sr,e);t.gaps=Object.assign({},sr.gaps);for(let n in e.gaps||{})e.gaps[n]!=null&&!isNaN(+e.gaps[n])&&(t.gaps[n]=+e.gaps[n]);for(let n of["jamb","threshold","header_face","leaf_rs","leaf_tb"])(t[n]==null||isNaN(+t[n]))&&(t[n]=sr[n]);return t}var Z_=1.75;function Ju(i,e,t){let n=i.t,s=new Array(i.n);e=Math.max(0,Math.min(1,e));let r=[];i.Lq>0&&r.push({dir:1,idx:[...Array(i.Lq).keys()],jg:i.jL}),i.Rq>0&&r.push({dir:-1,idx:[...Array(i.Rq).keys()].map(a=>i.n-1-a),jg:i.jR});for(let a of r){let o=a.idx.length,l=a.dir,c=(o===1?88:86)*Math.PI/180,h=c*e,d=Math.max(Z_,(a.jg*a.jg+n*n/4)/(2*a.jg)+.0625),u=Math.max(.5,d-a.jg),f=Math.floor(o/2),g=f>1?Math.min(.22,.5/f):0,x=v=>c*Math.max(0,Math.min(1,(e-v*g)/(1-(f-1)*g))),m=v=>[l*Math.cos(v),Math.sin(v)],p=v=>[-l*Math.sin(v),Math.cos(v)],M=i.leaves[a.idx[0]],b=[(l>0?M.x:M.x+M.w)+l*u,0],A=(v,U,z)=>{if(v===0){let ae=m(U);return[b[0]-u*ae[0],b[1]-u*ae[1]]}let X=i.leaves[a.idx[v-1]].w,P=i.gapI(Math.min(a.idx[v-1],a.idx[v])),D=v%2===1?-n/2:n/2,F=m(z.a),J=p(z.a),H=[z.O[0]+F[0]*(X+P/2)+J[0]*D,z.O[1]+F[1]*(X+P/2)+J[1]*D],q=m(U),se=p(U);return[H[0]+q[0]*P/2-se[0]*D,H[1]+q[1]*P/2-se[1]*D]},S=null,w=(v,U,z)=>{let X={a:U,O:A(v-1,U,z)},P=i.leaves[a.idx[v]].w,D=J=>{let H=A(v,J,X),q=m(J);return H[1]+q[1]*(P-u)},F=-U;for(let J=0;J<50;J++){let H=D(F),q=(D(F+1e-6)-H)/1e-6;if(Math.abs(H)<1e-10||!q)break;F-=H/q}return F},I=null,y=null;for(let v=0;v<o;v++){let U=i.leaves[a.idx[v]].w,z;if(v%2===0&&v===o-1&&o>=3)z=h*e;else if(v%2===0&&v===o-1)z=h;else if(v%2===0){if(z=x(v/2),w(v+1,z,S)>0){let F=z,J=z+1.2;for(let H=0;H<60;H++){let q=(F+J)/2;w(v+1,q,S)>0?F=q:J=q}z=J}I=z,y=S}else z=w(v,I,y);let X=A(v,z,S),P=m(z),D=p(z);s[a.idx[v]]={X:l>0?P:[-P[0],-P[1]],Z:D,C:[X[0]+P[0]*U/2,X[1]+P[1]*U/2]},S={a:z,O:X}}}if(t>0&&i.man){let a=i.leaves[i.man.i],o=Math.max(0,Math.min(1,t))*88*Math.PI/180,l=i.man.hinge!=="R",c=l?1:-1,h=i.man.swing==="in"?-1:1,d=[l?a.x:a.x+a.w,h*n/2],u=[c*Math.cos(o),h*Math.sin(o)],f=[-c*h*Math.sin(o),Math.cos(o)];s[i.man.i]={X:c>0?u:[-u[0],-u[1]],Z:f,C:[d[0]+u[0]*a.w/2-h*f[0]*n/2,d[1]+u[1]*a.w/2-h*f[1]*n/2]}}return{poses:s}}var nn={lib:null,busy:!1,geo:{},pin:.315,inb:.5906,KT:[[0,0],[.7591,0],[.7591,.3354],[.6614,.3354],[.6614,.1969],[.098,.1969],[.098,1.8701],[2.3429,1.8701],[2.3429,.1969],[1.7795,.1969],[1.7795,.3354],[1.6819,.3354],[1.6819,0],[2.4409,0],[2.4409,1.9685],[0,1.9685]]},Xu=i=>/(^|[^A-Z0-9])E3([^0-9]|$)|T24|TITLE.?24/i.test(String(i&&(i.track||i.system||i.track_system||i.hw_system)||""));function j_(){nn.lib||nn.busy||nn.fail||(nn.busy=!0,fetch(Oo+"e3-hardware-1.1.json").then(i=>i.json()).then(i=>{nn.lib=i,nn.busy=!1,G.last&&G.r&&Dc(G.last[0],G.last[1],G.last[2],G.last[3])}).catch(i=>{nn.busy=!1,nn.fail=!0,console.warn("TR3D e3 hardware",i)}))}function J_(i,e,t,n){let s=i+":"+e+":"+(t?1:0)+(n?1:0);if(nn.geo[s]!==void 0)return nn.geo[s];let r=nn.lib&&nn.lib[i]&&nn.lib[i][e];if(!r)return nn.geo[s]=null;let a=g=>Uint8Array.from(atob(g),x=>x.charCodeAt(0)).buffer,o=new Int16Array(a(r.v)),l=new Uint16Array(a(r.f)),c=new Float32Array(o.length),h=(t?-1:1)*(n?-1:1),d=n?-1:1;for(let g=0;g<o.length;g+=3)c[g]=o[g]/2e3*h,c[g+1]=o[g+1]/2e3,c[g+2]=o[g+2]/2e3*d;let u=new Uint16Array(l.length);if(t)for(let g=0;g<l.length;g+=3)u[g]=l[g],u[g+1]=l[g+2],u[g+2]=l[g+1];else u.set(l);let f=new Xt;return f.setAttribute("position",new Jt(c,3)),f.setIndex(new Jt(u,1)),f=Wu(f,.7),nn.geo[s]=f}function $_(i,e){let t=i.t,n=t/2+nn.pin,s=nn.inb,r=new Array(i.n);e=Math.max(0,Math.min(1,e));let a=[];i.Lq>0&&a.push({dir:1,idx:[...Array(i.Lq).keys()]}),i.Rq>0&&a.push({dir:-1,idx:[...Array(i.Rq).keys()].map(o=>i.n-1-o)});for(let o of a){let l=o.idx.length,c=o.dir,h=88*Math.PI/180*e,d=x=>[c*Math.cos(x),Math.sin(x)],u=x=>[-c*Math.sin(x),Math.cos(x)],f=i.leaves[o.idx[0]],g=[(c>0?f.x:f.x+f.w)+c*s,n];for(let x=0;x<l;x+=2){let m=o.idx[x],p=i.leaves[m].w,M=d(h),_=u(h),b=x?i.gapI(Math.min(o.idx[x-1],m)):0,A=x===0?[g[0]-s*M[0]-n*_[0],g[1]-s*M[1]-n*_[1]]:[g[0]+b/2*M[0]-n*_[0],g[1]+b/2*M[1]-n*_[1]];if(r[m]={X:c>0?M:[-M[0],-M[1]],Z:_,C:[A[0]+M[0]*p/2,A[1]+M[1]*p/2]},x===l-1)break;let S=o.idx[x+1],w=i.leaves[S].w,I=i.gapI(Math.min(m,S)),y=[A[0]+M[0]*(p+I/2)-_[0]*n,A[1]+M[1]*(p+I/2)-_[1]*n],v=x+1===l-1?w-s:w+i.gapI(Math.min(S,o.idx[x+2]))/2,U=I/2+v,z=-h;for(let F=0;F<40;F++){let J=y[1]+U*Math.sin(z)+2*n*Math.cos(z)-n,H=U*Math.cos(z)-2*n*Math.sin(z);if(Math.abs(J)<1e-10||!H)break;z-=J/H}let X=d(z),P=u(z),D=[y[0]+X[0]*I/2+P[0]*n,y[1]+X[1]*I/2+P[1]*n];r[S]={X:c>0?X:[-X[0],-X[1]],Z:P,C:[D[0]+X[0]*w/2,D[1]+X[1]*w/2]},g=[D[0]+X[0]*v+P[0]*n,D[1]+X[1]*v+P[1]*n]}}return{poses:r}}var Se={tex:{},mats:{},loader:null,env:null,onload:null},xi=.4;function Di(i,e){if(Se.tex[i])return Se.tex[i];let t=(Se.loader||(Se.loader=new so)).load(i,()=>{Se.onload&&Se.onload()});return t.wrapS=t.wrapT=Fn,t.anisotropy=8,e&&(t.colorSpace=Kt),Se.tex[i]=t}var ei=i=>new xt(/^#/.test(String(i||""))?i:"#cccccc");function K_(i){return i&&X_.includes(i.k)?i.k:null}function Yu(i,e){let t="w:"+i+":"+(e||"");if(Se.mats[t])return Se.mats[t];let n=Oo+"skins/"+i,s=new Li({map:Di(n+"_c.jpg",!0),normalMap:Di(n+"_n.jpg"),roughnessMap:Di(n+"_orm.jpg"),aoMap:Di(n+"_orm.jpg"),aoMapIntensity:.9,roughness:1,metalness:0,normalScale:new le(.6,.6),clearcoat:i==="shousugi"?0:.07,clearcoatRoughness:.6,envMapIntensity:xi,vertexColors:!0,emissive:16777215,emissiveMap:Di(n+"_c.jpg",!0),emissiveIntensity:i==="patina"?.05:.13});if(i==="patina"){s.metalnessMap=Di(n+"_orm.jpg"),s.metalness=1,s.clearcoat=0,s.normalScale.set(.5,.5),s.aoMapIntensity=0,Di(n+"_c.jpg",!0).repeat.set(.12,.12);for(let r of["_n.jpg","_orm.jpg"])Di(n+r).repeat.set(.4,.4)}return s.color=e?ei(e):new xt(i==="whitewash"||i==="birch"||i==="greywash"?14474460:14869218),s.emissive.copy(s.color),Se.mats[t]=s}function Xr(i,e){let t="p:"+i+":"+(e||"");if(Se.mats[t])return Se.mats[t];let n=ei(i);if(e==="metal"){let r=tx("metalstreak",512,(o,l)=>{o.fillStyle="#8c8c8c",o.fillRect(0,0,l,l);let c=Qn(4411);for(let h=0;h<5200;h++){let d=c()*l,u=c()*l,f=30+c()*300,g=c()<.5?255:0;o.fillStyle="rgba("+g+","+g+","+g+","+(.03+c()*.07)+")",o.fillRect(d,u,.6+c()*1.1,f),u+f>l&&o.fillRect(d,u-l,.6+c()*1.1,f)}for(let h=0;h<26;h++){let d=c()*l,u=c()*l,f=40+c()*120,g=o.createRadialGradient(d,u,0,d,u,f),x=c()<.5?255:0;g.addColorStop(0,"rgba("+x+","+x+","+x+",0.07)"),g.addColorStop(1,"rgba("+x+","+x+","+x+",0)"),o.fillStyle=g,o.fillRect(d-f,u-f,2*f,2*f)}},1);r.colorSpace=Nn;let a=new Li({color:n,roughness:.74,roughnessMap:r,metalness:.22,bumpMap:r,bumpScale:.3,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.6});return Se.mats[t]=a}let s=new Li({color:n,roughness:e==="metal"?.38:.6,metalness:e==="metal"?.75:0,normalMap:e==="metal"?null:Di(Oo+"skins/birch_n.jpg"),normalScale:new le(.16,.16),clearcoat:e==="metal"?.3:0,clearcoatRoughness:.5,envMapIntensity:e==="metal"?1:.2,emissive:e==="metal"?0:n,emissiveIntensity:e==="metal"?0:.34*(1-Math.min(1,.2126*n.r+.7152*n.g+.0722*n.b))});return Se.mats[t]=s}function Wr(i,e){if(!i)return Xr("#cccccc");let t=K_(i);return t?Yu(t):i.type==="stain"?Yu("birch",i.hex):Xr(i.hex,e)}function Q_(i){if(Se.glassEnv)return Se.glassEnv;let e=2048,t=1024,n=512,s=rr(n,901,5,4),r=rr(n,902,5,16),a=rr(n,903,4,64),o=new Float32Array(e*t*4),l=(u,f,g)=>u[(Math.floor(g*n)%n+n)%n*n+(Math.floor(f*n)%n+n)%n],c=(u,f,g)=>u+(f-u)*g,h=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u));for(let u=0;u<t;u++){let f=(u/(t-1)-.5)*180;for(let g=0;g<e;g++){let x=g/e,m=4*(u*e+g),p,M,_,b=.4+4.4*l(s,x*3,.37)+2.2*l(r,x*7,.11)+.9*l(a,x*9,.73),A=.8+2.4*l(s,x*2+.3,.81);if(f<0){let S=h((-f-.6)/3.2),w=.9+.2*l(a,x*6,-f/40);p=c(.1,.5,S)*w,M=c(.2,.49,S)*w,_=c(.08,.46,S)*w}else{let S=h(f/55),w=h((l(s,x*2+f/140,f/75+.2)*.62+l(r,x*4,f/34)*.38-.5)/.16)*h(f/5)*(1-h((f-48)/30));if(p=c(1.55,.36,S),M=c(1.75,.66,S),_=c(1.95,1.3,S),p=c(p,2.5,w*.85),M=c(M,2.5,w*.85),_=c(_,2.55,w*.85),f<A){let y=.55+.25*l(r,x*5,.4);p=c(p,.34*y,.85),M=c(M,.43*y,.85),_=c(_,.52*y,.85)}let I=b-f;if(I>0&&!(I<.9&&l(a,x*34,f/4)>.58)){let y=h(1-I/2.5)*.6+.4*l(a,x*22,f/5),v=.55+.9*l(r,x*14,f/9);p=(.03+.07*y)*v,M=(.065+.13*y)*v,_=(.03+.04*y)*v}}o[m]=p,o[m+1]=M,o[m+2]=_,o[m+3]=1}}let d=new Ii(o,e,t,Ln,On);d.mapping=rs,d.colorSpace=Xn,d.magFilter=d.minFilter=hn,d.needsUpdate=!0;try{Se.glassEnv=i.fromEquirectangular(d).texture}catch{Se.glassEnv=null}return d.dispose(),Se.glassEnv}function Ac(){return Se.frost?Se.mats.glassF||(Se.mats.glassF=new Li({color:12569544,roughness:.62,metalness:0,transmission:.55,thickness:.6,ior:1.52,specularIntensity:.6,clearcoat:.25,clearcoatRoughness:.6,envMapIntensity:.9,side:yn})):Se.mats.glass||(Se.mats.glass=new Li({color:10135715,roughness:.015,metalness:0,transmission:1,thickness:.6,ior:1.52,attenuationColor:new xt(8364181),attenuationDistance:4,specularIntensity:1,specularColor:new xt(16777215),clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.2,side:yn}))}var wc={nickel:{c:"#c2c0b8",m:1,r:.3},black:{c:"#1a1a1b",m:.55,r:.48},orb:{c:"#3b2a1f",m:.85,r:.42}};function ex(i){let e=wc[i]||wc.nickel,t="h:"+(wc[i]?i:"nickel");return Se.mats[t]||(Se.mats[t]=new kt({color:ei(e.c),metalness:e.m,roughness:e.r}))}function ir(i,e){let t="f:"+i+e;return Se.mats[t]||(Se.mats[t]=new kt({color:ei(i),roughness:e??.9,metalness:0,envMapIntensity:xi}))}function tx(i,e,t,n){if(Se.tex[i])return Se.tex[i];let s=document.createElement("canvas");s.width=s.height=e,t(s.getContext("2d"),e);let r=new Yi(s);return r.wrapS=r.wrapT=Fn,r.repeat.set(n,n),r.colorSpace=Kt,r.anisotropy=8,Se.tex[i]=r}function rr(i,e,t,n){let s=new Float32Array(i*i),r=1,a=0;for(let o=0;o<t;o++){let l=n<<o,c=Qn(e+o*101),h=new Float32Array(l*l);for(let d=0;d<h.length;d++)h[d]=c();for(let d=0;d<i;d++){let u=d/i*l,f=Math.floor(u),g=u-f,x=g*g*(3-2*g);for(let m=0;m<i;m++){let p=m/i*l,M=Math.floor(p),_=p-M,b=_*_*(3-2*_),A=(M+1)%l,S=(f+1)%l,w=h[f*l+M],I=h[f*l+A],y=h[S*l+M],v=h[S*l+A];s[d*i+m]+=r*(w+(I-w)*b+(y-w)*x+(w-I-y+v)*b*x)}}a+=r,r*=.55}for(let o=0;o<s.length;o++)s[o]/=a;return s}function Rc(i,e,t){if(Se.tex[i])return Se.tex[i];let n=rr(e,t.seed,4,3),s=rr(e,t.seed+7,4,24),r=rr(e,t.seed+13,2,e>>1),a=new Float32Array(e*e),o=document.createElement("canvas");o.width=o.height=e;let l=o.getContext("2d"),c=l.createImageData(e,e),h=c.data,d=ei(t.color).convertLinearToSRGB(),u=(t.pal||[]).map(_=>ei(_).convertLinearToSRGB());for(let _=0;_<e*e;_++){let b=_%e,A=_/e|0,S=null,w=s[_]*t.mid+r[_]*t.fine,I=1+(n[_]-.5)*t.tone+(r[_]-.5)*t.grit;if(t.rows){let v=Math.floor(A/t.rows),U=A%t.rows,z=Math.sin(v*78.233+t.seed)*43758.5453,X=t.align?0:t.jit?Math.floor((z-Math.floor(z))*t.tab):v%2*t.tab/2,P=Math.floor((b+X)/t.tab),D=(b+X)%t.tab,F=Math.sin(v*127.1+P*311.7+t.seed)*43758.5453,J=F-Math.floor(F);if(I*=t.even?.96+J*.08:u.length?.9+J*.16:.78+J*.4,u.length){let H=Math.sin(v*53.3+P*91.1+t.seed)*24634.6345;S=u[Math.floor((H-Math.floor(H))*u.length)]}(U<2||D<1&&!t.even)&&(I*=.45,w-=.6),w+=U/t.rows*.5}if(t.joint&&(b%t.joint<(t.jw||2)||A%t.joint<(t.jw||2))&&(I*=.55,w-=.8),t.herr){let v=t.herr,U=Math.floor(b/v),z=Math.floor(A/v),X=((U-z)%4+4)%4,P=b%v,D=A%v,F=t.jw||2,J=P<F,H=P>=v-F,q=D<F,se=D>=v-F,ae=X===0?J||q||se:X===1?H||q||se:X===3?J||H||q:J||H||se,me=X===1?U-1:U,K=X===2?z-1:z,ce=Math.sin(me*127.1+K*311.7+(X<2?0:57)+t.seed)*43758.5453,Le=ce-Math.floor(ce);if(u.length){let qe=Math.sin(me*53.3+K*91.1+(X<2?0:17)+t.seed)*24634.6345;S=u[Math.floor((qe-Math.floor(qe))*u.length)]}ae?(I*=.5,w-=1.2):I*=(u.length?.9:.84)+Le*(u.length?.16:.28)}if(t.mix){let v=t.mix,U=3*v,z=Math.floor(A/v),X=z%2*U/2,P=(b+X)%U,D=A%v,F=P<2*v,J=F?P:P-2*v,H=t.jw||3,q=Math.floor((b+X)/U)*2+(F?0:1),se=Math.sin(z*127.1+q*311.7+t.seed)*43758.5453,ae=se-Math.floor(se),me=Math.sin(z*53.3+q*91.1+t.seed)*24634.6345;u.length&&(S=u[Math.floor((me-Math.floor(me))*u.length)]),J<H||D<H?(I*=.55,w-=1.1):I*=.95+ae*.1}if(t.slab){let v=t.jw||5,U=Math.floor(A/t.slab[1]),z=U%2*t.slab[0]/2,X=(b+z)%t.slab[0],P=A%t.slab[1],D=Math.sin(U*91.7+Math.floor((b+z)/t.slab[0])*37.3+t.seed)*43758.5453,F=D-Math.floor(D);X<v||P<v?(I*=.42,w-=1.4):I*=.93+F*.12}if(t.cells){let v=t.cells,U=e/v,z=Math.floor(b/U),X=Math.floor(A/U),P=1e9,D=1e9,F=0;for(let J=-1;J<=1;J++)for(let H=-1;H<=1;H++){let q=(z+J+v)%v,se=(X+H+v)%v,ae=Math.sin(q*127.1+se*311.7+t.seed)*43758.5453,me=Math.sin(q*269.5+se*183.3+t.seed)*43758.5453,K=(z+J+.15+.7*(ae-Math.floor(ae)))*U,ce=(X+H+.15+.7*(me-Math.floor(me)))*U,Le=Math.hypot(K-b,ce-A);Le<P?(D=P,P=Le,F=q*31+se):Le<D&&(D=Le)}if(D-P<(t.jw||5))I*=.58,w-=1.4;else{let J=Math.sin(F*12.9898+t.seed)*43758.5453,H=J-Math.floor(J);I*=.82+H*.3,w+=H*.5}}if(t.seam){let v=b%t.seam,U=t.seamW||3;v<U?(w+=1.6,I*=1.06):v<U+5&&(I*=.72,w-=.4)}if(t.barrel){let v=b%t.barrel/t.barrel,U=Math.sin(v*Math.PI);if(w+=U*(t.barrelK||1.8),I*=t.deep?.5+Math.pow(U,.7)*.62:.82+U*.3,t.deep){let z=(A+Math.round(U*14))%t.rows;z<7?(I*=.5,w-=1.5):z>t.rows-10&&(I*=1.08,w+=.8)}}let y=S||d;a[_]=w,h[_*4]=Math.min(255,y.r*255*I),h[_*4+1]=Math.min(255,y.g*255*I),h[_*4+2]=Math.min(255,y.b*255*I),h[_*4+3]=255}l.putImageData(c,0,0);let f=document.createElement("canvas");f.width=f.height=e;let g=f.getContext("2d"),x=g.createImageData(e,e),m=x.data,p=t.bump;for(let _=0;_<e;_++)for(let b=0;b<e;b++){let A=_*e+b,S=(a[_*e+(b+1)%e]-a[_*e+(b+e-1)%e])*p,w=(a[(_+1)%e*e+b]-a[(_+e-1)%e*e+b])*p,I=Math.hypot(S,w,1);m[A*4]=(-S/I*.5+.5)*255,m[A*4+1]=(w/I*.5+.5)*255,m[A*4+2]=(1/I*.5+.5)*255,m[A*4+3]=255}g.putImageData(x,0,0);let M=(_,b)=>{let A=new Yi(_);return A.wrapS=A.wrapT=Fn,A.anisotropy=8,b&&(A.colorSpace=Kt),A};return Se.tex[i]={map:M(o,!0),normalMap:M(f,!1)}}function on(i,e,t){if(Se.mats[i])return Se.mats[i];let n=Rc(i,e.n||512,e);return Se.mats[i]=new kt({map:n.map,normalMap:n.normalMap,roughness:t,metalness:0,envMapIntensity:xi})}function Qn(i){let e=i>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Un(i,e,t,n){let s=i.index?i.toNonIndexed():i;s.computeVertexNormals();let r=s.attributes.position,a=s.attributes.normal,o=new Float32Array(r.count*2),l=Qn(t),c=l(),h=l();for(let g=0;g<r.count;g+=3){let x=Math.abs(a.getX(g)+a.getX(g+1)+a.getX(g+2)),m=Math.abs(a.getY(g)+a.getY(g+1)+a.getY(g+2)),p=Math.abs(a.getZ(g)+a.getZ(g+1)+a.getZ(g+2)),M=x>=m&&x>=p?0:m>=p?1:2;for(let _=0;_<3;_++){let b=[r.getX(g+_),r.getY(g+_),r.getZ(g+_)],A,S,w=e==="x"?0:e==="y"?1:2;if(M===w){let I=[0,1,2].filter(y=>y!==M);A=b[I[0]]*3,S=b[I[1]]*3}else{let I=[0,1,2].find(y=>y!==M&&y!==w);A=b[I],S=b[w]}o[(g+_)*2]=A/Io+c,o[(g+_)*2+1]=S/Io+h}}s.setAttribute("uv",new Jt(o,2));let d=1+(l()-.5)*2*(n||0),u=(l()-.5)*(n||0)*.5,f=new Float32Array(r.count*3);for(let g=0;g<r.count;g++)f[3*g]=d*(1+u),f[3*g+1]=d,f[3*g+2]=d*(1-u);return s.setAttribute("color",new Jt(f,3)),s}function qu(i,e,t){let n=new Sn(i.map(r=>new le(r[0],r[1])));for(let r of e||[])n.holes.push(new js(r.map(a=>new le(a[0],a[1]))));let s=new zn(n,{depth:Math.abs(t),bevelEnabled:!1,curveSegments:1});return s.translate(0,0,-Math.abs(t)),s}function nx(i){let e=new Map;for(let t of i.children.slice()){if(!t.isMesh)continue;let n=t.material.uuid+(t.castShadow?"s":"n");(e.get(n)||e.set(n,[]).get(n)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=null;try{n=Vr(t.map(r=>r.geometry),!1)}catch{n=null}if(!n)continue;let s=new Xe(n,t[0].material);s.castShadow=t[0].castShadow,s.receiveShadow=t[0].receiveShadow,s.name="parts";for(let r of t)i.remove(r),r.geometry.dispose();i.add(s)}}function Ro(i,e,t){let n=i[0],s=i[1],r=i[i.length-1],a=e.xc,o=e.t,l=null,c="y";if(n==="box"){let[,,u,f,g,x,m,p]=i;if(!(x>0&&m>0&&p>0))return null;let M=r==="glassm"||/Backer|groove|opening/i.test(s)||Math.min(x,p,m)<.35?0:Math.min(.055,Math.min(x,p,m)*.18);l=M?new Ao(x,p,m,1,M).toNonIndexed():new fn(x,p,m),l.translate(u+x/2-a,g+p/2,o/2-(f+m/2)),c=/Panel|Slab|field|frame|plank|Glass|sash/i.test(s)?x>p*2.5?"x":"y":x>p?"x":"y",/plank|slat|board|Board/i.test(s)&&(c=x>p?"x":"y")}else if(n==="slabh"){let[,,u,f,g,x,m,p,M]=i;if(!(x>0&&m>0&&p>0))return null;let _=(M||[]).filter(A=>A&&A.length>=3),b=_.map(A=>{let S=A.map(y=>y[0]),w=A.map(y=>y[1]),I=[Math.max(0,Math.min(...S)),Math.min(x,Math.max(...S)),Math.max(0,Math.min(...w)),Math.min(p,Math.max(...w))];return A.length===4&&A.every(y=>(Math.abs(y[0]-Math.min(...S))<1e-4||Math.abs(y[0]-Math.max(...S))<1e-4)&&(Math.abs(y[1]-Math.min(...w))<1e-4||Math.abs(y[1]-Math.max(...w))<1e-4))?I:null});if(_.length&&b.every(Boolean)){let A=[...new Set([0,x,...b.flatMap(y=>[y[0],y[1]])])].sort((y,v)=>y-v),S=[],w=[],I=[];for(let y=0;y+1<A.length;y++){let v=A[y],U=A[y+1];if(U-v<1e-4)continue;let z=0,X=b.filter(D=>D[0]<U-1e-4&&D[1]>v+1e-4).map(D=>[D[2],D[3]]).sort((D,F)=>D[0]-F[0]),P=[];for(let D of X)D[0]-z>.001&&P.push([z,D[0]]),z=Math.max(z,D[1]);p-z>.001&&P.push([z,p]);for(let D of P){let F=new fn(U-v,D[1]-D[0],m).toNonIndexed();F.translate((v+U)/2,(D[0]+D[1])/2,-m/2),S.push(...F.attributes.position.array),w.push(...F.attributes.normal.array),I.push(...F.attributes.uv.array),F.dispose()}}if(!S.length)return null;l=new Xt,l.setAttribute("position",new dt(S,3)),l.setAttribute("normal",new dt(w,3)),l.setAttribute("uv",new dt(I,2))}else l=qu([[0,0],[x,0],[x,p],[0,p]],_,m);l.translate(u-a,g,o/2-f),c=/board|slat|Board/i.test(s)&&x>p?"x":"y"}else if(n==="poly"){let[,,u,f,g]=i;if(!g||g.length<3)return null;l=qu(g,null,f),l.translate(-a,0,o/2-u);let x=1e9,m=-1e9,p=1e9,M=-1e9;for(let _ of g)x=Math.min(x,_[0]),m=Math.max(m,_[0]),p=Math.min(p,_[1]),M=Math.max(M,_[1]);c=m-x>M-p?"x":"y"}else if(n==="prismx"){let[,,u,f,g]=i;if(!g||g.length<3)return null;let x=new Sn(g.map(m=>new le(o/2-m[0],m[1])));l=new zn(x,{depth:Math.abs(f),bevelEnabled:!1,curveSegments:1}),l.rotateY(-Math.PI/2),l.translate(u-a+Math.abs(f),0,0),c="x"}else if(n==="prismz"){let[,,u,f,g]=i;if(!g||g.length<3)return null;let x=new Sn(g.map(m=>new le(m[0]-a,-(o/2-m[1]))));l=new zn(x,{depth:Math.abs(f),bevelEnabled:!1,curveSegments:1}),l.rotateX(-Math.PI/2),l.translate(0,u,0),c="y"}if(!l)return null;if(r==="glassm"){let u=null;if(n==="box"){let[,,f,g,x,m,p,M]=i;u=[f-a,f-a+m,x,x+M,o/2-g,o/2-g-p]}else if(n==="poly"){let[,,f,g,x]=i,m=x.map(S=>S[0]),p=x.map(S=>S[1]),M=Math.min(...m),_=Math.max(...m),b=Math.min(...p),A=Math.max(...p);x.length===4&&x.every(S=>(Math.abs(S[0]-M)<1e-4||Math.abs(S[0]-_)<1e-4)&&(Math.abs(S[1]-b)<1e-4||Math.abs(S[1]-A)<1e-4))&&(u=[M-a,_-a,b,A,o/2-f,o/2-f-g])}if(u){let f=Qn(t*7+13),g=(.006+f()*.008)*(f()<.7?1:-1),x=(f()-.5)*.007,m=(f()-.5)*.007,p=8,M=[],_=[],b=(u[3]-u[2])/Math.max(1e-6,u[1]-u[0]),A=(y,v,U,z)=>{M.push(u[0]+(u[1]-u[0])*y,u[2]+(u[3]-u[2])*v,U);let X=g*(y-.5)*2*Math.min(1,1/b)+x,P=g*(v-.5)*2*Math.min(1,b)+m,D=Math.hypot(X,P,1);_.push(z*X/D,z*P/D,z/D)};for(let[y,v]of[[u[4],1],[u[5],-1]])for(let U=0;U<p;U++)for(let z=0;z<p;z++){let X=z/p,P=(z+1)/p,D=U/p,F=(U+1)/p;v>0?(A(X,D,y,v),A(P,D,y,v),A(P,F,y,v),A(X,D,y,v),A(P,F,y,v),A(X,F,y,v)):(A(X,D,y,v),A(P,F,y,v),A(P,D,y,v),A(X,D,y,v),A(X,F,y,v),A(P,F,y,v))}l.dispose();let S=new Xt,w=M.length/3;S.setAttribute("position",new dt(M,3)),S.setAttribute("normal",new dt(_,3)),S.setAttribute("uv",new Jt(new Float32Array(w*2),2)),S.setAttribute("color",new Jt(new Float32Array(w*3).fill(1),3));let I=new Xe(S,Ac());return I.name=s,I.castShadow=!1,I.receiveShadow=!1,I}}let h;r==="glassm"?h=Ac():r==="dark"?h=/groove/i.test(s)?e.groove:e.hw:r==="cladm"?h=e.clad:h=e.fin;let d=new Xe(Un(l,c,t,/slat|board|plank|blade|louvre|Batten/i.test(s)?.13:/buck|Panel|Slab/i.test(s)?.06:.04),h);return d.name=s,r==="glassm"?(d.castShadow=!1,d.receiveShadow=!1):(d.castShadow=!0,d.receiveShadow=!0),d}var Lo=[["concrete","Concrete"],["pavers","Pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"]],Do=[["lawn","Lawn"],["blue","Kentucky bluegrass \xB7 blades"],["gravel","Gravel"],["dg","Decomposed granite"],["mpavers","Modern pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"],["flag","Natural flagstone"],["planters","Stone \xB7 raised planters"]],Cc=[["grey","Grey"],["rust","Warm earthtones"]],Tc=["#8a7364","#93806f","#7e695b","#9a8573","#866e5e","#907a67","#7b6354"],Uo=[["none","One opening"],["single","+ a single"],["double","+ a double"],["same","+ the same again"]],Zu={single:108,double:192},Pc=[["lantern","Lantern"],["barrel","Barrel \xB7 up and down"],["gooseneck","Gooseneck \xB7 farmhouse"]],ar=[["gable","Gable \xB7 stucco",{wall:"stucco",form:"side",roof:"shingle",pitch:5}],["craftsman","Front gable \xB7 lap siding",{wall:"lap",form:"front",roof:"shingle",pitch:6}],["hip","Hip roof \xB7 brick",{wall:"brick",form:"hip",roof:"shingle",pitch:5}],["modern","Flat roof \xB7 canopy on columns",{wall:"dark",form:"flat",roof:"flat",pitch:5}],["flat8","Flat roof \xB7 8 in soffit",{wall:"stucco",form:"flat8",roof:"flat",pitch:5}],["farm","Farmhouse \xB7 board and batten",{wall:"bb",form:"front",roof:"metal",pitch:8}],["spanish","Spanish \xB7 clay tile",{wall:"cream",form:"hip",roof:"tile",pitch:4}]],$u=i=>(ar.find(e=>e[0]===i)||ar[0])[2],Co={stucco:{seed:5,color:"#d9d5cb",mid:.7,fine:1,tone:.07,grit:.12,bump:3.2},lap:{seed:15,color:"#a9b0a8",mid:.3,fine:.6,tone:.04,grit:.07,bump:5,rows:128,tab:8192,even:1},brick:{seed:17,color:"#6a473e",mid:.5,fine:1,tone:.08,grit:.25,bump:6,rows:43,tab:128},dark:{seed:19,color:"#4b4e51",mid:.4,fine:.6,tone:.04,grit:.08,bump:1.6},bb:{seed:23,color:"#e6e3da",mid:.2,fine:.5,tone:.03,grit:.06,bump:5,seam:256,seamW:40},cream:{seed:27,color:"#e7dfcd",mid:.9,fine:1,tone:.08,grit:.12,bump:4.5}},No=[["shingle","Shingle"],["tile","Clay tile"],["spanish","Spanish tile"],["shake","Cedar shake"],["metal","Standing seam"],["flat","Flat"]],Ic=[3,4,5,6,8,10],Oe=(()=>{let i={};try{i=JSON.parse(localStorage.getItem("tr3d.setting")||"{}")||{}}catch{}return{roof:No.some(e=>e[0]===i.roof)?i.roof:"shingle",pitch:Ic.includes(+i.pitch)?+i.pitch:5,eave:i.eave==="deep"?"deep":"short",drive:Lo.some(e=>e[0]===i.drive)?i.drive:"concrete",ground:Do.some(e=>e[0]===i.ground)?i.ground:"blue",structure:ar.some(e=>e[0]===i.structure)?i.structure:"gable",light:i.light==="barrel"?"barrel":"lantern",paver:i.paver==="rust"?"rust":"grey",second:Uo.some(e=>e[0]===i.second)?i.second:"none",garage:i.garage==="light"?"light":"warm",land:i.land==="rolling"||i.land==="flat"?i.land:"auto"}})();function Ku(i){if(i=i||{},i.structure&&i.roof==null){let e=$u(i.structure);i=Object.assign({roof:e.roof,pitch:e.pitch},i)}Object.assign(Oe,i),(i.structure||G.panelLabel&&(i.roof||i.drive||i.ground))&&G.panel&&G.el&&(G.panel.remove(),Lc(G.el));try{localStorage.setItem("tr3d.setting",JSON.stringify(Oe))}catch{}return G.last&&Dc.apply(null,G.last),Cn}function Qu(){let i=G.panelHost;return!!(i&&i.offsetParent!==null&&i.clientWidth>150)}function Lc(i){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=document.createElement("div");e.style.cssText="position:absolute;left:8px;top:8px;right:8px;display:flex;flex-wrap:wrap;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2;opacity:.9";let t=(n,s,r)=>{let a=document.createElement("label");a.style.cssText="pointer-events:auto;display:flex;align-items:center;gap:4px;background:rgba(20,20,20,.62);color:#eee;padding:3px 6px",a.append(r);let o=document.createElement("select");o.style.cssText="font:inherit;background:transparent;color:inherit;border:0;outline:0";for(let[l,c]of s){let h=document.createElement("option");h.value=l,h.textContent=c,h.style.color="#111",String(Oe[n])===String(l)&&(h.selected=!0),o.append(h)}return o.onchange=()=>Ku({[n]:n==="pitch"?+o.value:o.value}),a.append(o),(t.to||e).append(a),a};if(!G.panelLabel)t("second",Uo,"Openings"),t("garage",[["warm","Warm white"],["light","Light"]],"Garage"),t("structure",ar.map(n=>[n[0],n[1]]),"Structure"),t("roof",No,"Roof"),t("pitch",Ic.map(n=>[n,n+":12"]),"Slope"),t("eave",[["short","Short"],["deep","Deep"]],"Eave"),t("drive",Lo,"Drive"),t("ground",Do,"Ground"),t("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),t("paver",Cc,"Paver colour"),t("light",Pc,"Lights");else{e.style.cssText="position:absolute;left:8px;top:8px;width:min(262px,calc(100% - 16px));max-height:calc(100% - 16px);display:flex;flex-direction:column;align-items:flex-start;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2";let n=document.createElement("button");n.type="button",n.style.cssText="pointer-events:auto;cursor:pointer;background:rgba(18,18,18,.74);color:#f3efe6;border:1px solid rgba(243,239,230,.55);padding:9px 16px;font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase";let s=document.createElement("div");s.style.cssText="pointer-events:auto;align-self:stretch;overflow:auto;background:rgba(18,18,18,.8);border:1px solid rgba(243,239,230,.22);padding:4px 10px 10px";let r=c=>{let h=document.createElement("div");h.textContent=c,h.style.cssText="margin:10px 0 3px;font:600 9.5px/1 system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#b9b2a3",s.append(h)},a=(c,h,d)=>{t.to=s;let u=t(c,h,d);t.to=null,u.style.cssText="display:grid;grid-template-columns:76px 1fr;align-items:center;gap:6px;color:#eee;padding:2px 0;border-top:1px solid rgba(243,239,230,.1)",u.lastChild.style.cssText+=";width:100%;min-width:0;text-overflow:ellipsis;padding:0;margin:0;height:22px;min-height:0"},o=c=>/pavers|herr|mix/.test(String(c||""));if(r("House"),a("structure",ar.map(c=>[c[0],c[1]]),"Structure"),a("roof",No,"Roof"),Oe.roof!=="flat"&&(a("pitch",Ic.map(c=>[c,c+":12"]),"Slope"),a("eave",[["short","Short"],["deep","Deep"]],"Eave")),a("second",Uo,"Openings"),r("Ground"),a("drive",Lo,"Driveway"),a("ground",Do,"Ground"),(o(Oe.drive)||o(Oe.ground))&&a("paver",Cc,"Paver colour"),a("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),r("Light"),a("light",Pc,"Lights"),a("garage",[["warm","Warm white"],["light","Light"]],"Garage"),G.panelSide=Qu(),G.panelSide){e.style.cssText="display:flex;flex-direction:column;gap:8px;font:11px/1.2 system-ui,sans-serif";let c=document.createElement("div");c.textContent=G.panelLabel,c.style.cssText="font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#f3efe6;padding:2px 0 4px",s.style.cssText="border:1px solid rgba(243,239,230,.22);padding:4px 12px 12px",e.append(c,s),G.panelHost.appendChild(e),G.panel=e;return}let l=()=>{s.style.display=G.panelOpen?"block":"none",n.textContent=G.panelLabel+(G.panelOpen?"  \xD7":"")};n.onclick=()=>{G.panelOpen=!G.panelOpen,l()},e.append(n,s),l()}i.appendChild(e),G.panel=e}var G={el:null,r:null,scene:null,cam:null,ctl:null,unit:null,leaves:[],L:null,f:0,m:0,raf:0,dirty:!1,ready:!1,key:"",sun:null,anim:null,fit:200,H:96};function hi(){G.dirty=!0,G.raf||(G.raf=requestAnimationFrame(ed))}function ed(){if(G.raf=0,!G.r)return;let i=G.ctl.update();G.anim&&G.anim(),(G.dirty||i)&&(G.dirty=!1,td()),(G.anim||i)&&(G.raf=requestAnimationFrame(ed))}function td(){let i=performance.now();if(G.fx)try{G.fx.render()}catch{G.fx=null,G.r.render(G.scene,G.cam)}else G.r.render(G.scene,G.cam);performance.now()-i>160&&(G.slow=(G.slow||0)+1,G.slow===2&&G.r.getPixelRatio()>1?(G.r.setPixelRatio(1),G.fx&&G.fx.setPixelRatio(1),Po()):G.slow===4&&G.fx&&(G.fx=null,hi()))}function Po(){if(!G.r)return;let i=G.el.clientWidth||800,e=G.el.clientHeight||500;G.r.setSize(i,e,!1),G.fx&&G.fx.setSize(i,e),G.cam.aspect=i/e,G.cam.updateProjectionMatrix(),hi()}function ix(i,e){if(G.r&&G.el===i)return Cn;G.r&&nd(),e=e||{},G.el=i;let t=new wr({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(2,$t.devicePixelRatio||1)),t.outputColorSpace=Kt,t.toneMapping=Nr,t.toneMappingExposure=e.exposure||.68,t.shadowMap.enabled=!0,t.shadowMap.type=lc,t.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;outline:none",t.domElement.setAttribute("data-tr3d",ju),i.appendChild(t.domElement),G.r=t,G.scene=new Zs;{let r=document.createElement("canvas");r.width=16,r.height=512;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,"#3f74b8"),o.addColorStop(.3,"#6f9fd4"),o.addColorStop(.46,"#b9d2e8"),o.addColorStop(.5,"#dfe7ec"),o.addColorStop(.503,"#c9d3d6"),o.addColorStop(.56,"#7d8672"),o.addColorStop(1,"#6f775f"),a.fillStyle=o,a.fillRect(0,0,16,512);let l=new Yi(r);l.mapping=rs,l.colorSpace=Kt,G.scene.background=l}G.cam=new Tn(30,1.6,2,6e3),G.ctl=new _o(G.cam,t.domElement),G.ctl.enableDamping=!0,G.ctl.dampingFactor=.09,G.ctl.enablePan=!1,G.ctl.maxPolarAngle=Math.PI/2-.015,G.ctl.minPolarAngle=.5,G.ctl.addEventListener("change",hi),t.domElement.addEventListener("dblclick",Uc);let n=new Ys(t);G.scene.environment=n.fromScene(new vo,.04).texture;try{let r=Q_(n);if(r){let a=Ac();a.envMap=r,a.envMapIntensity=2.1,a.needsUpdate=!0}}catch{}new xo().load(Oo+"env/quarry_01_1k.hdr",r=>{r.mapping=rs;let a=n.fromEquirectangular(r).texture;G.scene.environment=a,G.envOk=!0,r.dispose(),hi()},void 0,()=>{});let s=new oo(16775406,4.4);if(s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.bias=-2e-4,s.shadow.normalBias=.25,s.shadow.radius=5,G.sun=s,G.scene.add(s),G.scene.add(s.target),G.scene.add(new ro(14674421,9342088,.55)),Se.onload=hi,e.ao!==!1)try{let r=t.getPixelRatio(),a=new Rn(8,8,{samples:4,type:bn}),o=new bo(t,a);o.setPixelRatio(r),o.addPass(new So(G.scene,G.cam));let l=new kr(G.scene,G.cam,8,8);l.updateGtaoMaterial({radius:7,distanceExponent:1.4,thickness:1.2,scale:1.25,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),l.blendIntensity=1,o.addPass(l),o.addPass(new To),G.fx=o,G.ao=l}catch{G.fx=null}return $t.ResizeObserver?(G.ro=new ResizeObserver(()=>{Po(),G.panel&&G.panelLabel&&G.panelHost&&G.panelSide!==Qu()&&(G.panel.remove(),Lc(G.el))}),G.ro.observe(i)):$t.addEventListener("resize",Po),G.panelLabel=e.panelLabel||"",G.panelHost=e.panelHost||null,e.panel!==!1&&Lc(i),Po(),Cn}function nd(){if(G.r){try{G.panel&&G.panel.remove()}catch{}try{G.ro&&G.ro.disconnect()}catch{}cancelAnimationFrame(G.raf),G.raf=0,G.ctl.dispose(),G.r.dispose(),G.r.domElement.parentNode&&G.r.domElement.parentNode.removeChild(G.r.domElement),G.r=null,G.unit=null,G.leaves=[],G.key=""}}function sx(){G.unit&&(G.scene.remove(G.unit),G.unit.traverse(i=>{i.geometry&&i.geometry.dispose()}),G.unit=null,G.leaves=[],G.B=null)}function Dc(i,e,t,n){if(!G.r||!i||!e)return Cn;G.last=[i,e,t,n],Se.frost=/frost|obscure/i.test(String(i.glass_opts&&[].concat(i.glass_opts).join(" ")||i.situations&&i.situations.glass_special&&i.situations.glass_special.fields&&i.situations.glass_special.fields.glass||""));let s=$t.leafParts;if(typeof s!="function")return Cn;if(e.base==="tbclad"&&!i.clad_look&&(e.clad==="horizontal"||e.clad==="vertical")&&(i=Object.assign({},i,{clad_look:e.clad})),G.curS=i,G.curFam=e,typeof $t.rbFor!="function"&&($t.rbFor=()=>Xu(G.curS)?Y_:sr),typeof $t.rlCladDims!="function"){let T=!1;$t.rlCladDims=function(){if(T||!G.curFam||G.curFam.base!=="tbclad"||typeof $t.cladFor!="function")return null;T=!0;try{let L=$t.cladFor(G.curS),k=L&&L.profile;return!k||k.type==="sheet"?null:{fin_w:+k.fin_w||null,fin_t:+k.fin_t||null,cover:+k.cover||null,angle:k.angle}}catch{return null}finally{T=!1}}}if(e.base==="tbclad"&&i.clad_orient&&(e.clad==="horizontal"||e.clad==="vertical")&&typeof $t.cladFor=="function"&&typeof $t.cladLookOf=="function")try{let T=$t.cladLookOf($t.cladFor(i),i);(T==="horizontal"||T==="vertical")&&(e=Object.assign({},e,{clad:T}))}catch{}G.curFam=e;let r=q_(e),a=r.gaps,o;try{o=s(i,e,t,n)}catch(T){return console.warn("TR3D leafParts",T),Cn}if(!o||!o.leaves||!o.leaves.length)return Cn;sx();let l=11,c=(T,L)=>{let k=L.leaves.length,Y=(+T.width_in||192)-2*(a.shim_side||0),Z=(+T.height_in||96)-(a.shim_top||0),$=e.base==="tb"||e.base==="tbclad",ee=$?r.leaf_tb:r.leaf_rs,ne=typeof $t.cladFor=="function"&&e.base==="tbclad"?(()=>{try{return $t.cladFor(T)}catch{return null}})():null,_e=e.clad||T.clad_look,Me=typeof $t.finBy=="function"&&T.clad_fin?$t.finBy(T.clad_fin):null,pe=Me&&Me.type==="stain"?Me:t,be={t:ee,fin:Wr(t),clad:_e==="metal"?Wr(T.clad_fin==="patina"?{k:"patina"}:t,"metal"):Wr(pe),hw:ex(T.hw_finish||T.hw_fin||T.hwfin),groove:ir("#141210",.95),joint:(()=>{let Ue=ne&&ne.profile||{};return+Ue.reveal>0?+Ue.reveal:Ue.type==="ship"?.25:Ue.type==="tg"?.125:.1875})()},ye=new Wn,We=/^(\d+)L/.exec(T.split||""),ft=We?Math.min(+We[1],k):String(T.split||"").endsWith("L")?k:0,lt={n:k,Lq:ft,Rq:k-ft,t:ee,jL:a.jamb_l||.375,jR:a.jamb_r||.375,leaves:[],W:Y,gapI:Ue=>L.leaves[Ue+1]?L.leaves[Ue+1].x0-L.leaves[Ue].x1:a.door,man:T.mandoor?{i:Math.max(0,Math.min(k-1,(+T.mandoor.door||1)-1)),hinge:T.mandoor.hinge||"L",swing:T.mandoor.swing==="in"?"in":"out"}:null},Ve=ne&&ne.profile&&ne.profile.type==="bb"&&typeof $t.battenOf=="function"?(()=>{try{return $t.battenOf(ne,T)}catch{return null}})():null,st=typeof $t.cladOrient=="function"&&ne?$t.cladOrient(ne,T)==="V":_e==="vertical",It=(()=>{let Ue=T.situations&&T.situations.arched_top;if(!Ue||!L.leaves.length)return null;let Be=parseFloat(Ue.fields&&Ue.fields.rise),Ne=L.leaves[0].x0,ut=L.leaves[L.leaves.length-1].x1,at=(ut-Ne)/2,Ze=Math.min(isFinite(Be)&&Be>0?Be:12,at*.9),bt=(at*at+Ze*Ze)/(2*Ze);return{mid:(Ne+ut)/2,r:bt,cy:L.z_door+L.door_h-bt}})();Se.archDoor=It?{r:It.r,cy:It.cy}:null;let Yt=(Ue,Be,Ne,ut)=>{let at=Ue.uuid+"|"+Be.toFixed(2)+"|"+Ne.toFixed(2)+"|"+ut.toFixed(2),Ze=Se.arcM||(Se.arcM=new Map);if(Ze.has(at))return Ze.get(at);let bt=Ue.clone(),At=Ue.onBeforeCompile;return bt.onBeforeCompile=(St,Gt)=>{At&&At(St,Gt),St.uniforms.uArc={value:new O(Be,Ne,ut)},St.vertexShader=`varying vec2 vArcP;
`+St.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vArcP = position.xy;`),St.fragmentShader=`varying vec2 vArcP;
uniform vec3 uArc;
`+St.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (vArcP.y > uArc.y && distance(vArcP, uArc.xy) > uArc.z) discard;`)},bt.customProgramCacheKey=()=>"arc"+at,Ze.set(at,bt),bt},Lt=[];L.leaves.forEach((Ue,Be)=>{let Ne=Ue.x1-Ue.x0,ut=(Ue.x0+Ue.x1)/2,at=new Wn;at.matrixAutoUpdate=!1,be.xc=ut;let Ze=Ue.parts.find(Ie=>/^Awning sash opening/i.test(Ie[1])),bt=Ue.parts.map(Ie=>Ze&&/^Awning sash$/i.test(Ie[1])&&Ie[0]==="box"?["slabh",Ie[1],Ie[2],Ie[3],Ie[4],Ie[5],Ie[6],Ie[7],[[[Ze[2]-Ie[2],Ze[4]-Ie[4]],[Ze[2]-Ie[2]+Ze[5],Ze[4]-Ie[4]],[Ze[2]-Ie[2]+Ze[5],Ze[4]-Ie[4]+Ze[7]],[Ze[2]-Ie[2],Ze[4]-Ie[4]+Ze[7]]]],Ie[Ie.length-1]]:Ie),At=Ue.parts.find(Ie=>Ie[0]==="slabh"&&/^Slab$/.test(Ie[1])),St=((At||[])[8]||[]).map(Ie=>({x0:At[2]+Math.min(...Ie.map(Tt=>Tt[0])),x1:At[2]+Math.max(...Ie.map(Tt=>Tt[0])),z0:At[4]+Math.min(...Ie.map(Tt=>Tt[1])),z1:At[4]+Math.max(...Ie.map(Tt=>Tt[1]))})),Gt=(Ie,Tt,et)=>{let Pt=[],Et=Ie;for(let zt of et.sort((yt,Bt)=>yt[0]-Bt[0]))zt[0]-Et>.25&&Pt.push([Et,zt[0]]),Et=Math.max(Et,zt[1]);return Tt-Et>.25&&Pt.push([Et,Tt]),Pt};for(let Ie of bt){if(Ie[Ie.length-1]==="cladm"&&/Clad (board|slat)/i.test(Ie[1])&&(Ie[0]==="box"||Ie[0]==="slabh")){Ie=Ie.slice();let et=be.joint;Ie[5]>Ie[7]?(Ie[4]+=et/2,Ie[7]-=et,Ie[0]==="slabh"&&(Ie[8]=Ie[8].map(Pt=>Pt.map(Et=>[Et[0],Et[1]-et/2])))):(Ie[2]+=et/2,Ie[5]-=et,Ie[0]==="slabh"&&(Ie[8]=Ie[8].map(Pt=>Pt.map(Et=>[Et[0]-et/2,Et[1]]))))}let Tt=Ro(Ie,be,l+=7919);if(Tt&&at.add(Tt),/^Slab$/.test(Ie[1])&&e.base==="tbclad"&&_e!=="metal"){let et=Ie.slice();et[1]="Backer groove",et[3]=-.12,et[6]=.12,et[et.length-1]="dark";let Pt=Ro(et,be,l);Pt&&(Pt.castShadow=!1,at.add(Pt))}}if(Ve&&Ve.w>0&&Ve.t>0){let Ie=ne.profile.fin_t||r.clad_t||.75,Tt=Ve.pitch||Ve.w+Ve.gap,et=L.z_door,Pt=L.door_h;if(st){let Et=Math.max(1,Math.round((Ne-Ve.w)/Tt)),zt=(Ne-Ve.w)/Et;for(let yt=0;yt<=Et;yt++){let Bt=Ue.x0+yt*zt;for(let Ht of Gt(et,et+Pt,St.filter(Mt=>Mt.x0<Bt+Ve.w&&Mt.x1>Bt).map(Mt=>[Mt.z0,Mt.z1]))){let Mt=Ro(["box","Batten "+(yt+1),Bt,-(Ie+Ve.t),Ht[0],Ve.w,Ve.t,Ht[1]-Ht[0],"cladm"],be,l+=7919);Mt&&at.add(Mt)}}}else{let Et=Math.max(1,Math.round((Pt-Ve.w)/Tt)),zt=(Pt-Ve.w)/Et;for(let yt=0;yt<=Et;yt++){let Bt=et+yt*zt;for(let Ht of Gt(Ue.x0,Ue.x0+Ne,St.filter(Mt=>Mt.z0<Bt+Ve.w&&Mt.z1>Bt).map(Mt=>[Mt.x0,Mt.x1]))){let Mt=Ro(["box","Batten "+(yt+1),Ht[0],-(Ie+Ve.t),Bt,Ht[1]-Ht[0],Ve.t,Ve.w,"cladm"],be,l+=7919);Mt&&at.add(Mt)}}}}if(nx(at),It){let Ie=It.mid-ut,Tt=Ue.x0-ut,et=Ue.x1-ut,Pt=Ue.parts.find(Rt=>Rt[1]==="Top Rail"),Et=Pt?Pt[7]:.6,zt=28,yt=new Sn,Bt=be.t+.04;for(let Rt of at.children)Rt.isMesh&&(Rt.material=Yt(Rt.material,Ie,It.cy,It.r));for(let Rt=0;Rt<=zt;Rt++){let rn=Tt+(et-Tt)*Rt/zt,un=It.cy+Math.sqrt(Math.max(0,It.r*It.r-(rn-Ie)*(rn-Ie)));Rt?yt.lineTo(rn,un):yt.moveTo(rn,un)}for(let Rt=zt;Rt>=0;Rt--){let rn=Tt+(et-Tt)*Rt/zt,un=It.r-Et;yt.lineTo(rn,It.cy+Math.sqrt(Math.max(0,un*un-(rn-Ie)*(rn-Ie))))}let Ht=new zn(yt,{depth:Bt,bevelEnabled:!1});Ht.translate(0,0,-Bt/2);let Mt=new Xe(Un(Ht.toNonIndexed(),"x",l+=7919,.04),be.fin);Mt.geometry.computeVertexNormals(),Mt.name="Top Rail \xB7 arched",Mt.castShadow=Mt.receiveShadow=!0,at.add(Mt)}ye.add(at),Lt.push(at),lt.leaves.push({i:Be,x:Ue.x0-Y/2,w:Ne})});let qt=Xu(T);qt&&(lt.e3=!0,j_());let Zt=new Wn,Ke=Math.max(4.5,ee+2.5),ct=qt?ee/2+nn.pin+1.7205:ee/2+.75,gt=t&&t.type==="stain"?Wr(t):Xr(t&&t.hex||"#f0ede3"),_t=(Ue,Be,Ne,ut,at,Ze,bt,At,St)=>{let Gt=new fn(ut,at,Ze);Gt.translate(Ue+ut/2,Be+at/2,Ne-Ze/2);let Ie=new Xe(Un(Gt,At,l+=31),St||gt);return Ie.name=bt,Ie.castShadow=Ie.receiveShadow=!0,Zt.add(Ie),Ie},ht=L.z_door+L.door_h+(a.head||.25),Dt=[];if(qt){let Ue=ee/2+nn.pin,Be=ht-(a.head||.25)+(a.head||.3125),Ne=r.threshold||1,ut=-Y/2+.75,at=Y-1.5,Ze=5.09375,bt=Se.mats.e3alu||(Se.mats.e3alu=new kt({color:12830667,metalness:.85,roughness:.38,envMapIntensity:1})),At=Se.mats.e3hw||(Se.mats.e3hw=new kt({color:11843772,metalness:.9,roughness:.32,envMapIntensity:1.1})),St=(et,Pt,Et)=>{let zt=new Sn;et.forEach((Ht,Mt)=>Mt?zt.lineTo(Ht[0],Ht[1]):zt.moveTo(Ht[0],Ht[1]));let yt=new zn(zt,{depth:at,bevelEnabled:!1});yt.rotateY(Math.PI/2),yt.translate(ut,0,ct);let Bt=new Xe(Et===gt?Un(yt,"x",l+=31):yt,Et);return Bt.name=Pt,Bt.castShadow=Bt.receiveShadow=!0,Zt.add(Bt),Bt};for(let et of[-1,1])_t(et<0?-Y/2:Y/2-.75,0,ct,.75,Z,4.15625,"Jamb "+(et<0?"L":"R"),"y"),_t(et<0?-Y/2:Y/2-1.5,0,ct-4.15625,1.5,Z,.9375,"Jamb stop "+(et<0?"L":"R"),"y");{let et=Math.max(1.9685,Z-.6875-Be);_t(ut,Be,ct,at,et,.5,"Front strip","x")}_t(ut,Z-.6875,ct,at,.6875,Ze,"Top board","x"),St(nn.KT.map(et=>[.5+et[0],Be+et[1]]),"Top track \xB7 KT70D",Se.mats.e3brz||(Se.mats.e3brz=new kt({color:3812902,metalness:.8,roughness:.42,envMapIntensity:1}))),_t(ut,Be,ct-2.941,at,1.969,1.1875,"Filler","x"),_t(ut+.75,Be+1.969-3.4375,ct-4.15625,at-1.5,3.4375,.9375,"Inside board","x");let Gt=Se.mats.thrEsp||(Se.mats.thrEsp=new kt({color:2891287,roughness:.58,metalness:0,envMapIntensity:xi})),Ie=String(T.e3_sill||T.sill_type||"").toLowerCase()!=="stop",Tt=Ie?Ze:4.15625;if(St([[0,0],[0,Ne-.25],[1.71,Ne],[1.98,Ne],[1.98,Ne-.875],[2.918,Ne-.875],[2.918,Ne],[Tt,Ne],[Tt,0]],"Threshold",Gt),Ie||_t(ut+.75,0,ct-4.15625,at-1.5,Ne+1.625,.9375,"Threshold stop","x"),St([[1.98,Ne-.875],[1.98,Ne],[2.045,Ne],[2.045,Ne-.81],[2.853,Ne-.81],[2.853,Ne],[2.918,Ne],[2.918,Ne-.875]],"Floor channel \xB7 EC23DV",bt),St([[2.065,Ne-.79],[2.065,Ne-.05],[2.128,Ne-.05],[2.128,Ne-.727],[2.77,Ne-.727],[2.77,Ne-.05],[2.833,Ne-.05],[2.833,Ne-.79]],"Channel liner",ir("#1c1d1f",.7)),nn.lib){let et=(Mt,Rt,rn,un,di,Ui,Mn,Zn)=>{let ni=J_(Mt,Rt,Mn,Zn);if(!ni)return;let fi=new Xe(ni,be.hw);fi.name="E3 "+Mt+" "+Rt,fi.castShadow=fi.receiveShadow=!0,fi.position.set(un,di,Ui),Rt==="fix"&&!Zn?(Dt.push({m:fi,i:rn,lx:un,lz:Ui}),ye.add(fi)):Lt[rn].add(fi)},Pt=L.z_door,Et=L.z_door+L.door_h,zt={top_pivot:Be+.04,end_carrier:Be-.14,int_carrier:Be-.14},yt=Et+.2,Bt=[Pt+2.36,(Pt+Et)/2-2.13,Et-2.36-4.25],Ht=[];lt.Lq>0&&Ht.push({d:1,idx:[...Array(lt.Lq).keys()]}),lt.Rq>0&&Ht.push({d:-1,idx:[...Array(lt.Rq).keys()].map(Mt=>k-1-Mt)});for(let Mt of Ht){let Rt=Mt.d,rn=Mt.idx.length,un=Mn=>lt.leaves[Mn].w,di=Mt.idx[0],Ui=-Rt*un(di)/2+Rt*nn.inb;for(let Mn of["a","fix"])et("top_pivot",Mn,di,Ui,Mn==="fix"?zt.top_pivot:yt,Ue,Rt<0,!1),et("bot_pivot",Mn,di,Ui,Ne,Ue,Rt<0,!1);for(let Mn=1;Mn<rn;Mn++){let Zn=Mt.idx[Mn-1],ni=Mt.idx[Mn],fi=lt.gapI(Math.min(Zn,ni)),Jr=Rt*un(Zn)/2+Rt*fi/2,Nc=-Rt*un(ni)/2-Rt*fi/2;if(Mn%2)Bt.forEach((Ji,zo)=>{let ps=zo===1?"hinge_handle":"hinge";et(ps,"fix",Zn,Jr,Ji,-Ue,!1,!0),et(ps,Rt>0?"b":"a",Zn,Jr,Ji,-Ue,!1,!0),et(ps,Rt>0?"a":"b",ni,Nc,Ji,-Ue,!1,!0)});else for(let[Ji,zo,ps]of[["int_carrier",zt.int_carrier,yt],["int_guide",Ne,Ne]])et(Ji,"fix",Zn,Jr,zo,Ue,!1,!1),et(Ji,Rt>0?"a":"b",Zn,Jr,ps,Ue,!1,!1),et(Ji,Rt>0?"b":"a",ni,Nc,ps,Ue,!1,!1)}if(rn%2===0){let Mn=Mt.idx[rn-1],Zn=Rt*un(Mn)/2-Rt*nn.inb;for(let ni of["a","fix"])et("end_carrier",ni,Mn,Zn,ni==="fix"?zt.end_carrier:yt,Ue,Rt>0,!1),et("end_guide",ni,Mn,Zn,Ne,Ue,Rt>0,!1)}}}}else{_t(-Y/2,0,ct,r.jamb,Z,Ke,"Jamb L","y"),_t(Y/2-r.jamb,0,ct,r.jamb,Z,Ke,"Jamb R","y"),_t(-Y/2+r.jamb,ht,ct,Y-2*r.jamb,Math.max(.75,Z-ht),.75,"Track header face","x"),_t(-Y/2+r.jamb,ht+.75,ct-.75,Y-2*r.jamb,Math.max(.5,Z-ht-.75),Ke-.75,"Track box","x",ir("#2a2826",.8));{let Ue=r.threshold||1,Be=$t.thrSunk&&$t.thrSunk(T)?.25-Ue:0,Ne=Y-2*r.jamb,ut=new Sn;[[0,Be],[0,Be+Ue-.25],[.5,Be+Ue],[Ke,Be+Ue],[Ke,Be]].forEach((bt,At)=>At?ut.lineTo(bt[0],bt[1]):ut.moveTo(bt[0],bt[1]));let at=new zn(ut,{depth:Ne,bevelEnabled:!1});at.rotateY(Math.PI/2),at.translate(-Y/2+r.jamb,0,ct);let Ze=new Xe(Un(at.toNonIndexed(),"x",l+=31),Se.mats.thrEsp||(Se.mats.thrEsp=new kt({color:2891287,roughness:.58,metalness:0,envMapIntensity:xi})));Ze.geometry.computeVertexNormals(),Ze.name="Threshold",Ze.castShadow=Ze.receiveShadow=!0,Zt.add(Ze)}}return ye.add(Zt),{og:ye,L:lt,lvs:Lt,Wu:Y,Hu:Z,t:ee,zf:ct,ctx:be,fix:Dt,fm:gt}},h=new Wn;G.unit=h;let d=c(i,o),{Wu:u,Hu:f,t:g,zf:x,ctx:m,fm:p}=d,M=null;if(Oe.second!=="none"){let T=Oe.second,L=T==="single"?Zu.single:T==="double"?Zu.double:+i.width_in||192,k=T==="single"?2:T==="double"?4:+i.doors||d.L.n,Y=Object.assign({},i,{width_in:L,doors:k,split:T==="same"?i.split:k===2?"1L1R":"2L2R",mandoor:null});G.curS=Y;let Z=null;try{Z=s(Y,e,t,n)}catch{Z=null}G.curS=i,Z&&Z.leaves&&Z.leaves.length&&(M=c(Y,Z))}G.L=d.L,G.leaves=d.lvs,G.fixA=d.fix,G.B=M,G.H=f,h.add(d.og),M&&h.add(M.og);let _=a.shim_side||0,b=a.shim_top||0,A=u/2+_,S=f+b,w=32,I=28,y=M?M.Wu/2+_:0,v=2*w+2*A+(M?I+2*y:0),U=-v/2+w+A,z=U+A+I+y,X=M?[[U,A],[z,y]]:[[U,A]],P=M?[-v/2+w/2,U+A+I/2,v/2-w/2]:[-v/2+w/2,v/2-w/2],D=f+30,F=8,J=e.tb==="flush",H=J?x+.01:x+2.75,q=$u(Oe.structure),se=on("wall_"+q.wall,Co[q.wall]||Co.stucco,.95);d.og.position.x=U,M&&(M.og.position.x=z);let ae=Oe.eave==="deep"?6:-.5,me=[[-v/2,ae]],K=G.last&&G.last[0]||{},ce=(()=>{let T=K.situations&&K.situations.arched_top;if(!T)return 0;let L=parseFloat(T.fields&&T.fields.rise);return isFinite(L)&&L>0?L:12})(),Le=T=>{if(Se.archDoor){let ee=Se.archDoor.r+1,ne=Se.archDoor.cy,_e=ne+Math.sqrt(Math.max(1,ee*ee-T*T));return{rise:S-_e,r:ee,cy:ne,a0:Math.atan2(_e-ne,-T),a1:Math.atan2(_e-ne,T)}}let L=Math.min(ce,T*.9),k=(T*T+L*L)/(2*L),Y=S-k,Z=Math.atan2(S-L-Y,-T),$=Math.atan2(S-L-Y,T);return{rise:L,r:k,cy:Y,a0:Z,a1:$}};for(let[T,L]of X){if(!ce){me.push([T-L,ae],[T-L,S],[T+L,S],[T+L,ae]);continue}let k=Le(L),Y=40;me.push([T-L,ae],[T-L,S-k.rise]);for(let Z=1;Z<Y;Z++){let $=k.a0+(k.a1-k.a0)*Z/Y;me.push([T+k.r*Math.cos($),k.cy+k.r*Math.sin($)])}me.push([T+L,S-k.rise],[T+L,ae])}me.push([v/2,ae],[v/2,D],[-v/2,D]);let qe=new Sn(me.map(T=>new le(T[0],T[1]))),He=new zn(qe,{depth:F,bevelEnabled:!1});He.translate(0,0,H-F);let Je=new Xe(Un(He,"y",3),J?m.fin:se);Je.castShadow=Je.receiveShadow=!0,Je.name="House wall",h.add(Je);for(let T of[-1,1]){let L=new fn(F,D+.5,250);L.translate(T*(v/2-F/2),D/2-.25,H-F-125);let k=new Xe(Un(L,"y",l+=31),J?m.fin:se);k.castShadow=k.receiveShadow=!0,k.name="Side wall",h.add(k)}let rt=on("conc",{seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2},.9),Ye=on("concD",{seed:21,color:"#7f7b75",mid:.6,fine:1,tone:.12,grit:.2,bump:3.5},.92),Ae=(T,L,k,Y,Z,$,ee,ne,_e)=>{let Me=new fn(T,L,k);Me.translate(Y,Z,$);let pe=new Xe(Un(Me,_e||"x",l+=31),ee);return pe.castShadow=pe.receiveShadow=!0,pe.name=ne,h.add(pe),pe};if(Oe.eave==="deep"){let T=[-v/2];for(let[L,k]of X)T.push(L-k,L+k);T.push(v/2);for(let L=0;L<T.length;L+=2)Ae(T[L+1]-T[L],6.5,F+.75,(T[L]+T[L+1])/2,3.25,H-F/2+.375,Ye,"Stem wall")}let B=Xr("#efece4"),Ee=(()=>{let T=G.last&&G.last[0]||{},L=G.last&&G.last[2];if(!/^(ext|both)$/.test(String(T.casing||""))||!L)return B;try{return L.type==="stain"?Wr(L):Xr(L.hex||"#efece4")}catch{return B}})();if(ce){for(let[T,L]of X){let k=Le(L),Y=S-k.rise,Z=48;{let $=k.r-.75,ee=new Sn,ne=L-.05;for(let pe=0;pe<=Z;pe++){let be=-ne+2*ne*pe/Z,ye=k.cy+Math.sqrt(Math.max(0,k.r*k.r-be*be));pe?ee.lineTo(T+be,ye):ee.moveTo(T+be,ye)}for(let pe=Z;pe>=0;pe--){let be=-ne+2*ne*pe/Z;ee.lineTo(T+be,k.cy+Math.sqrt(Math.max(0,$*$-be*be)))}let _e=new zn(ee,{depth:4.5,bevelEnabled:!1});_e.translate(0,0,H-2.75-4.5);let Me=new Xe(Un(_e,"x",l+=31),B);Me.castShadow=Me.receiveShadow=!0,Me.name="Jamb head \xB7 arched",h.add(Me)}if(!J){let ee=k.r+3.5,ne=k.cy+Math.sqrt(Math.max(1,ee*ee-(L+3.5)*(L+3.5))),_e=new Sn;Ae(3.5,ne,.75,T-L-3.5/2,ne/2,H+.375,Ee,"Casing L","y"),Ae(3.5,ne,.75,T+L+3.5/2,ne/2,H+.375,Ee,"Casing R","y");for(let be=0;be<=Z;be++){let ye=L+3.5-2*(L+3.5)*be/Z,We=k.cy+Math.sqrt(Math.max(0,ee*ee-ye*ye));be?_e.lineTo(T+ye,We):_e.moveTo(T+ye,We)}_e.lineTo(T-L,ne),_e.lineTo(T-L,Y);for(let be=0;be<=Z;be++){let ye=-L+2*L*be/Z;_e.lineTo(T+ye,k.cy+Math.sqrt(Math.max(0,k.r*k.r-ye*ye)))}_e.lineTo(T+L,ne);let Me=new zn(_e,{depth:.75,bevelEnabled:!1});Me.translate(0,0,H);let pe=new Xe(Un(Me,"x",l+=31),Ee);pe.castShadow=pe.receiveShadow=!0,pe.name="Casing head \xB7 arched",h.add(pe)}}h.traverse(T=>{T.isMesh&&/^Track (header face|box)$/.test(T.name)&&(T.visible=!1)}),[d,M].forEach(T=>T&&T.og&&T.og.traverse(L=>{L.isMesh&&/^Track (header face|box)$/.test(L.name)&&(L.visible=!1)}))}else if(!J){let L=_+.5,k=b+.5,Y=S-k;for(let[Z,$]of X)Ae(L,Y,H-x,Z-$+L/2,Y/2,(H+x)/2,p,"Jamb return L","y"),Ae(L,Y,H-x,Z+$-L/2,Y/2,(H+x)/2,p,"Jamb return R","y"),Ae(2*$,k,H-x,Z,Y+k/2,(H+x)/2,p,"Jamb return head","x"),Ae(3.5,Y+3.5,.75,Z-$+L-3.5/2,(Y+3.5)/2,H+.375,Ee,"Casing L","y"),Ae(3.5,Y+3.5,.75,Z+$-L+3.5/2,(Y+3.5)/2,H+.375,Ee,"Casing R","y"),Ae(2*($-L),3.5,.75,Z,Y+3.5/2,H+.375,Ee,"Casing head","x")}let oe=Oe.roof==="flat",de=oe?0:Oe.eave==="deep"?20:1.5,re=v+2*de+14,Fe=Oe.pitch/12,ve=Math.atan(Fe),R=Oe.roof==="spanish"?on("roofspanish",{n:512,seed:131,color:"#6e3a2c",pal:["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"],mid:.3,fine:.6,tone:.04,grit:.14,bump:11,rows:128,tab:64,align:1,barrel:64,barrelK:4.5,deep:1},.84):Oe.roof==="shake"?on("roofshake",{n:512,seed:137,color:"#6f5a4a",pal:["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"],mid:.5,fine:1.4,tone:.1,grit:.5,bump:8,rows:64,tab:48,jit:1},.96):Oe.roof==="tile"?on("rooftile",{n:512,seed:61,color:"#553029",mid:.4,fine:.6,tone:.16,grit:.2,bump:7,rows:64,tab:512,barrel:32},.82):Oe.roof==="metal"?Se.mats.roofmetal||(Se.mats.roofmetal=(()=>{let T=Rc("roofmetal",512,{seed:71,color:"#3d4043",mid:.1,fine:.2,tone:.05,grit:.05,bump:6,seam:128});return new kt({map:T.map,normalMap:T.normalMap,roughness:.42,metalness:.75,envMapIntensity:.9})})()):on("shingle",{n:512,seed:31,color:"#4a4a4c",mid:.5,fine:1,tone:.1,grit:.3,bump:5,rows:32,tab:64},.93),E=oe?"flat":/^flat/.test(q.form)?"side":q.form,W=D+6.6,xe=Oe.roof==="shingle"?96:64,he=(T,L,k,Y,Z)=>{let $=k===Y,ee=(lt,Ve)=>[lt[0]-Ve[0],lt[1]-Ve[1],lt[2]-Ve[2]],ne=ee(L,T),_e=ee(k,T);if(ne[2]*_e[0]-ne[0]*_e[2]<0){let lt=T;if(T=L,L=lt,!$){let Ve=k;k=Y,Y=Ve}}let Me=Math.hypot(...ee(L,T)),pe=ee(L,T).map(lt=>lt/Me),be=lt=>{let Ve=ee(lt,T),st=Ve[0]*pe[0]+Ve[1]*pe[1]+Ve[2]*pe[2];return[st/xe,Math.hypot(Ve[0]-st*pe[0],Ve[1]-st*pe[1],Ve[2]-st*pe[2])/xe]},ye=$?[T,L,k]:[T,L,k,T,k,Y],We=new Xt;We.setAttribute("position",new dt(ye.flat(),3)),We.setAttribute("uv",new dt(ye.map(be).flat(),2)),We.computeVertexNormals();let ft=new Xe(We,R);return ft.castShadow=ft.receiveShadow=!0,ft.name=Z,h.add(ft),ft},ue=ir("#2e3033",.6),je=J?m.fin:se,Ce=(T,L)=>{if(Oe.roof!=="spanish"&&Oe.roof!=="tile")return!1;let k=new O(...T),Y=new O(...L).sub(k),Z=Y.length();if(Z<6)return!0;Y.normalize();let $=new O().crossVectors(Y,new O(0,1,0));$.lengthSq()<1e-6&&$.set(1,0,0),$.normalize();let ee=new O().crossVectors($,Y);ee.y<0&&($.negate(),ee.negate());let ne=Qn(Math.round(Z*13+T[0]+T[2])+5),_e=[],Me=Oe.roof==="spanish"?4.6:3.2,pe=new Ft;for(let ye=0;ye<Z;ye+=12){let We=ei(ke[Math.floor(ne()*ke.length)]),ft=.88+ne()*.2,lt=Math.min(15,Z-ye+2),Ve=new _i(Me,Me*.9,lt,8,1,!0,-Math.PI/2,Math.PI);Ve.translate(0,lt/2-1,1.2),Ve.rotateX(-.04),Ve=Ve.toNonIndexed();let st=Ve.attributes.position.count,It=new Float32Array(st*3);for(let Yt=0;Yt<st;Yt++)It[Yt*3]=We.r*ft,It[Yt*3+1]=We.g*ft,It[Yt*3+2]=We.b*ft;Ve.setAttribute("color",new Jt(It,3)),Ve.applyMatrix4(pe.makeBasis($,Y,ee).setPosition(k.clone().addScaledVector(Y,ye))),_e.push(Ve)}let be=new Xe(Vr(_e,!1),Qe);return be.castShadow=be.receiveShadow=!0,be.name="Hip and ridge tiles",h.add(be),!0},ke=Oe.roof==="spanish"?["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"]:Oe.roof==="tile"?["#553029","#5d352c","#4c2a24","#613a30"]:Oe.roof==="shake"?["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"]:null,Qe=Se.mats.eave||(Se.mats.eave=new kt({vertexColors:!0,roughness:.88,side:yn,envMapIntensity:xi})),tt=(T,L,k,Y,Z)=>{if(!ke)return;let $=new O(...T),ee=new O(...L),ne=new O(...k).normalize(),_e=ee.clone().sub($),Me=_e.length();_e.normalize();let pe=new O().crossVectors(_e,ne);pe.y<0&&(_e.negate(),pe.negate(),$.copy(ee));let be=Qn(Math.round(Me*7+T[0]*3+T[2]*5)+77),ye=[],We=Oe.roof==="shake",ft=Oe.roof==="spanish"?4:2.6,lt=We?10:15,Ve=We?6.5:12.5,st=Math.cos(ve),It=new Ft;for(let Lt=0,qt=0;Lt<Y-1;Lt+=Ve,qt++){let Zt=Z?Lt*st:0,Ke=Zt,ct=Me-Zt;if(ct-Ke<(We?3:2*ft))break;let gt=We?Ke-be()*4:Math.ceil(Ke/(2*ft)-.5)*2*ft;for(;gt<ct-.5;){let _t=We?3.5+be()*5:2*ft,ht=Math.max(gt,Ke),Dt=Math.min(gt+_t,ct),Ue=Dt-ht;if(gt+=_t,Ue<(We?1.2:2*ft-.01))continue;let Be=qt?0:We?.5+be()*.9:2.2+be()*.5,Ne=ei(ke[Math.floor(be()*ke.length)]),ut=.88+be()*.22,at=Math.min(lt,Y-Lt+Be),Ze;We?(Ze=new fn(Ue-.18,at,.62),Ze.translate(0,at/2-Be,.31+be()*.3),Ze.rotateX(-.055)):(Ze=new _i(Ue/2,Ue/2*.9,at,8,1,!0,-Math.PI/2,Math.PI),Ze.translate(0,at/2-Be,.15),Ze.rotateX(-.03)),Ze=Ze.toNonIndexed();let bt=Ze.attributes.position.count,At=new Float32Array(bt*3);for(let St=0;St<bt;St++)At[St*3]=Ne.r*ut,At[St*3+1]=Ne.g*ut,At[St*3+2]=Ne.b*ut;Ze.setAttribute("color",new Jt(At,3)),Ze.applyMatrix4(It.makeBasis(_e,ne,pe).setPosition($.clone().addScaledVector(_e,(ht+Dt)/2).addScaledVector(ne,Lt))),ye.push(Ze)}}if(!ye.length)return;let Yt=new Xe(Vr(ye,!1),Qe);Yt.castShadow=Yt.receiveShadow=!0,Yt.name="Roof courses",h.add(Yt)};if(E==="flat"&&q.form==="flat8"){let L=250+F+16;Ae(v+16,9,L,0,D+4.5,H+8-L/2,ue,"Roof edge"),Ae(v+16-2,.75,L-2,0,D-.375,H+8-L/2,B,"Soffit")}else if(E==="flat"){Ae(v+3,2.5,F+3,0,D+1.25,H-F/2,B,"Parapet cap","x");for(let T of[-1,1])Ae(F+3,2.5,250,T*(v/2-F/2),D+1.25,H-F-125,B,"Parapet cap","z");if(Ae(v-2*F,1,250,0,D-8,H-F-125,ir("#55565a",.9),"Roof deck"),q.form==="flat"){let L=S+14;Ae(v+36,8,66,0,L+4,H+66/2,ue,"Canopy"),Ae(v+30,1,62,0,L-.4,H+66/2-1,B,"Canopy soffit");for(let k of[-1,1])Ae(10,L,10,k*(v/2+8),L/2,H+66-8,rt,"Column","y")}}else if(E==="front"){let T=v/2+de+5,L=H+de+7,k=H-F-250-de-7,Y=D+1.2-(de+5)*Fe,Z=Y+T*Fe;he([-T,Y,L],[-T,Y,k],[0,Z,k],[0,Z,L],"Roof L"),tt([-T,Y,L],[-T,Y,k],[Math.cos(ve),Math.sin(ve),0],T/Math.cos(ve)),tt([T,Y,k],[T,Y,L],[-Math.cos(ve),Math.sin(ve),0],T/Math.cos(ve)),he([T,Y,k],[T,Y,L],[0,Z,L],[0,Z,k],"Roof R"),Ce([0,Z,k],[0,Z,L])||Ae(9,1.6,L-k,0,Z+.3,(L+k)/2,ue,"Ridge cap","z");for(let $ of[H,H-250]){let ee=new Sn([[-v/2,0],[v/2,0],[0,v/2*Fe]].map(Me=>new le(Me[0],Me[1]))),ne=new zn(ee,{depth:F,bevelEnabled:!1});ne.translate(0,D,$-F);let _e=new Xe(Un(ne,"y",3),je);_e.castShadow=_e.receiveShadow=!0,_e.name="Gable",h.add(_e)}for(let $ of[-1,1]){let ee=Math.hypot(T,T*Fe),ne=new fn(ee,5.5,1.2);ne.rotateZ($*-Math.atan(Fe)),ne.translate($*T/2,Y+T*Fe/2-2.4,L-.4);let _e=new Xe(Un(ne,"x",l+=31),B);_e.castShadow=!0,_e.name="Rake board",h.add(_e);let Me=new fn(ee,5.5,1.2);Me.rotateZ($*-Math.atan(Fe)),Me.translate($*T/2,Y+T*Fe/2-2.4,k+.4);let pe=new Xe(Un(Me,"x",l+=31),B);pe.castShadow=!0,pe.name="Rake board",h.add(pe);let be=new fn(ee,.8,L-k-1.6);be.rotateZ($*-Math.atan(Fe)),be.translate($*T/2,Y+T*Fe/2-1.1,(L+k)/2);let ye=new Xe(Un(be,"z",l+=31),B);ye.castShadow=ye.receiveShadow=!0,ye.name="Soffit",h.add(ye),Ae(1.2,5.5,L-k,$*(T-.5),Y-2.3,(L+k)/2,B,"Fascia","z")}{let $=new xt((Co[q.wall]||Co.stucco).color),ee=.2126*$.r+.7152*$.g+.0722*$.b>.2?B:ue,ne=v/2*Fe,_e=Math.min(40,ne*.5),Me=_e*.72,pe=D+ne*.14,be=2.4,ye=pe+_e/2,We=Se.mats.gwin||(Se.mats.gwin=new kt({color:6122358,metalness:.9,roughness:.08,envMapIntensity:1.6}));Ae(Me,_e,.3,0,ye,H+.25,We,"Gable window glass","y").castShadow=!1,Ae(Me+2*be,be,1.3,0,pe+_e+be/2,H+.65,ee,"Gable window head","x"),Ae(Me+2*be+1.5,be,1.9,0,pe-be/2,H+.95,ee,"Gable window sill","x");for(let ft of[-1,1])Ae(be,_e,1.3,ft*(Me/2+be/2),ye,H+.65,ee,"Gable window jamb","y");Ae(1.1,_e,.7,0,ye,H+.55,ee,"Gable window mullion","y");for(let ft of[1,2])Ae(Me,1.1,.7,0,pe+_e*ft/3,H+.55,ee,"Gable window bar","x")}}else if(E==="hip"){let T=v/2+de+3,L=H+de+3,k=H-F-250-de-3,Y=(L-k)/2,Z=(L+k)/2;{let $=Math.min(Y,T)/Math.cos(ve);tt([-T,W,L],[T,W,L],[0,Math.sin(ve),-Math.cos(ve)],$,1),tt([T,W,k],[-T,W,k],[0,Math.sin(ve),Math.cos(ve)],$,1),tt([T,W,L],[T,W,k],[-Math.cos(ve),Math.sin(ve),0],$,1),tt([-T,W,k],[-T,W,L],[Math.cos(ve),Math.sin(ve),0],$,1)}if(Y<=T){let $=T-Y,ee=W+Y*Fe;he([-T,W,L],[T,W,L],[$,ee,Z],[-$,ee,Z],"Roof front"),he([T,W,k],[-T,W,k],[-$,ee,Z],[$,ee,Z],"Roof back");let ne=[$,ee,Z],_e=[-$,ee,Z];he([T,W,L],[T,W,k],ne,ne,"Roof R"),he([-T,W,k],[-T,W,L],_e,_e,"Roof L");for(let Me of[-1,1])for(let pe of[L,k])Ce([Me*T,W,pe],[Me*$,ee,Z]);$>2&&!Ce([-$,ee,Z],[$,ee,Z])&&Ae(2*$,1.6,9,0,ee+.3,Z,ue,"Ridge cap","x")}else{let $=Y-T,ee=W+T*Fe,ne=[0,ee,Z+$],_e=[0,ee,Z-$];he([-T,W,L],[T,W,L],ne,ne,"Roof front"),he([T,W,k],[-T,W,k],_e,_e,"Roof back"),he([T,W,L],[T,W,k],_e,ne,"Roof R"),he([-T,W,k],[-T,W,L],ne,_e,"Roof L");for(let Me of[-1,1])Ce([Me*T,W,L],ne),Ce([Me*T,W,k],_e);Ce(_e,ne)||Ae(9,1.6,2*$,0,ee+.3,Z,ue,"Ridge cap","z")}Ae(2*T,7.25,1.5,0,D+2.9,L-.75,B,"Fascia","x"),Ae(2*T,7.25,1.5,0,D+2.9,k+.75,B,"Fascia","x");for(let $ of[-1,1])Ae(1.5,7.25,L-k,$*(T-.75),D+2.9,Z,B,"Fascia","z");Ae(2*T-3,.75,L-k-3,0,D-.375,Z,B,"Soffit","x")}else{Ae(re,.75,de+F,0,D-.375,H+de/2-F/2,B,"Soffit","x"),Ae(re,7.25,1.5,0,D+2.9,H+de+.75,B,"Fascia","x");let T=new Xe(new _i(2.6,2.6,re,20,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),Se.mats.gut||(Se.mats.gut=new kt({color:3487290,metalness:.7,roughness:.45,side:yn})));T.position.set(0,D+4.2,H+de+3.6),T.castShadow=!0,h.add(T);let L=H-F-125,k=H+de+2.2-L,Y=k/Math.cos(ve),Z=new oi(re,Y),$=Oe.roof==="shingle"?96:64;{let _e=Z.attributes.uv;for(let Me=0;Me<_e.count;Me++)_e.setXY(Me,_e.getX(Me)*re/$,_e.getY(Me)*Y/$)}let ee=new Xe(Z,R);ee.rotation.x=-Math.PI/2+ve,ee.position.set(0,D+6.6+Y/2*Math.sin(ve),H+de+2.2-Y/2*Math.cos(ve)),ee.castShadow=ee.receiveShadow=!0,ee.name="Roof",h.add(ee);let ne=new Xe(Z,R);ne.rotation.x=-Math.PI/2-ve,ne.position.set(0,D+6.6+Y/2*Math.sin(ve),L-Y/2*Math.cos(ve)),ne.castShadow=ne.receiveShadow=!0,ne.name="Roof back",h.add(ne),tt([-re/2,D+6.6,H+de+2.2],[re/2,D+6.6,H+de+2.2],[0,Math.sin(ve),-Math.cos(ve)],Y),tt([re/2,D+6.6,L-k],[-re/2,D+6.6,L-k],[0,Math.sin(ve),Math.cos(ve)],Y),Ce([-re/2,D+6.6+k*Fe,L],[re/2,D+6.6+k*Fe,L])||Ae(re,1.6,9,0,D+6.6+k*Fe+.3,L,Se.mats.gut,"Ridge cap","x");for(let _e of[-1,1]){let pe=new Sn([[0,0],[250,0],[125,125*Fe]].map(We=>new le(We[0],We[1]))),be=new zn(pe,{depth:F,bevelEnabled:!1});be.rotateY(Math.PI/2),be.translate(_e*(v/2-F/2)-F/2,D,H-F);let ye=new Xe(Un(be,"y",l+=31),je);ye.castShadow=ye.receiveShadow=!0,ye.name="Side wall rake",h.add(ye)}}let fe=Se.mats.lant||(Se.mats.lant=new kt({color:1776413,metalness:.6,roughness:.5})),pt=Se.mats.lantg||(Se.mats.lantg=new kt({color:16773590,emissive:16767392,emissiveIntensity:.25,roughness:.3}));if(Oe.light==="barrel"){let T=Se.tex.wash||(Se.tex.wash=(()=>{let Y=document.createElement("canvas");Y.width=64,Y.height=128;let Z=Y.getContext("2d"),$=Z.createRadialGradient(32,0,1,32,0,120);$.addColorStop(0,"rgba(255,226,170,.95)"),$.addColorStop(.25,"rgba(255,214,150,.45)"),$.addColorStop(1,"rgba(255,200,130,0)"),Z.fillStyle=$,Z.beginPath(),Z.moveTo(32,0),Z.lineTo(64,128),Z.lineTo(0,128),Z.closePath(),Z.fill();let ee=new Yi(Y);return ee.colorSpace=Kt,ee})()),L=Se.mats.wash||(Se.mats.wash=new Pi({map:T,transparent:!0,depthWrite:!1,opacity:.55,blending:Ea,toneMapped:!1})),k=Se.mats.barrel||(Se.mats.barrel=new kt({color:2762275,metalness:.75,roughness:.38}));for(let Y of P){let Z=Math.min(S-14,78),$=new Xe(new _i(2.3,2.3,11,28),k);$.position.set(Y,Z,H+3.4),$.castShadow=!0,$.name="Barrel sconce",h.add($),Ae(1.6,3,1.4,Y,Z,H+.7,k,"Sconce arm","y");for(let ee of[1,-1]){let ne=new Xe(new ja(1.9,20).rotateX(-ee*Math.PI/2),pt);ne.position.set(Y,Z+ee*5.52,H+3.4),h.add(ne);let _e=new Xe(new oi(30,46),L);ee>0&&(_e.rotation.z=Math.PI),_e.position.set(Y,Z+ee*(5.5+23),H+.12),_e.renderOrder=2,h.add(_e)}}}else if(Oe.light==="gooseneck"){let T=Se.mats.goose||(Se.mats.goose=new kt({color:1841946,metalness:.7,roughness:.55})),L=Se.mats.gooseSh||(Se.mats.gooseSh=new kt({color:4928295,metalness:.85,roughness:.42,side:yn})),k=Se.mats.gooseCu||(Se.mats.gooseCu=new kt({color:13142616,emissive:16757348,emissiveIntensity:.4,metalness:.55,roughness:.4,side:yn})),Y=[[1.7,0],[2.6,-.6],[6,-2.2],[9,-4.6],[10,-6.4],[10.15,-6.7]].map(ne=>new le(ne[0],ne[1])),Z=Qn(3)(),$=q.wall==="bb"&&!J,ee=(ne,_e)=>{if(!$)return ne;let Me=Io/2,pe=Io*(148/512-Z),be=Math.sign(ne-_e)||1,ye=Math.round((ne-pe)/Me),We=pe+ye*Me;return(We-ne)*be<-.01&&(We+=be*Me),We};for(let[ne,_e]of X)for(let Me of _e>54?[-.5,.5]:[0]){let pe=ee(ne+Me*_e,ne),be=Math.min(D-5,S+20)-3,ye=new Wn;ye.position.set(pe,be,H),ye.name="Gooseneck light";let We=new Xe(new _i(2.4,2.7,.9,24).rotateX(Math.PI/2),T);We.position.z=.45,ye.add(We);let ft=new Xe(new Qa(new Rr([[0,0,.6],[0,.6,6],[0,4.2,13],[0,6,18.5],[0,3.6,21.6],[0,-1.2,22]].map(Lt=>new O(Lt[0],Lt[1],Lt[2]))),28,.55,10),T);ft.castShadow=!0,ye.add(ft);let lt=new Xe(new _i(1.25,1.9,3.2,20),T);lt.position.set(0,-2.8,22),ye.add(lt);let Ve=new Za(Y,40),st=new Xe(Ve,L);st.position.set(0,-4.4,22),st.castShadow=!0,ye.add(st);let It=new Xe(Ve,k);It.position.copy(st.position),It.scale.set(.96,.96,.96),It.position.y-=.25,ye.add(It);let Yt=new Xe(new Ka(1.5,16,12),pt);Yt.position.set(0,-8.6,22),ye.add(Yt),h.add(ye)}}else for(let T of P){let L=Math.min(S-14,78);Ae(4.5*1.37,7*1.37,.6,T,L,H+.3,fe,"Lantern plate","y"),Ae(5*1.37,.8*1.37,5*1.37,T,L+5.4*1.37,H+.6+2.8*1.37,fe,"Lantern cap"),Ae(5*1.37,.6*1.37,5*1.37,T,L-4.6*1.37,H+.6+2.8*1.37,fe,"Lantern base"),Ae(3.6*1.37,9.4*1.37,3.6*1.37,T,L+.3*1.37,H+.6+2.8*1.37,pt,"Lantern glass","y").castShadow=!1,Ae(.8*1.37,1*1.37,2*1.37,T,L+5*1.37,H+1*1.37,fe,"Lantern arm")}let N=v+8,ge=640,Re=new Sn;Re.moveTo(-N/2,0),Re.lineTo(N/2,0),Re.bezierCurveTo(N/2,-230,N/2+70,-330,N/2+70,-ge),Re.lineTo(-N/2-190,-ge),Re.bezierCurveTo(-N/2-190,-400,-N/2,-300,-N/2,0);let we=Oe.paver==="rust",$e=()=>on("herr"+Oe.paver,{n:512,seed:111,pal:we?Tc:null,color:"#8f867b",mid:.4,fine:.9,tone:.04,grit:.1,bump:2.6,herr:32,jw:2},.88),vt=()=>on("mix"+Oe.paver,{n:768,seed:121,pal:we?Tc:null,color:"#8f877c",mid:.4,fine:.9,tone:.03,grit:.1,bump:2.6,mix:64,jw:3},.88),wt=Oe.drive==="mix"?vt():Oe.drive==="herr"?$e():Oe.drive==="pavers"?on("pavers"+Oe.paver,{n:512,seed:83,pal:we?Tc:null,color:"#8c8379",mid:.5,fine:.9,tone:.04,grit:.2,bump:4.5,rows:32,tab:64},.88):on("concj",{n:512,seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2,joint:512},.9),mt=Oe.drive==="concrete"?120:Oe.drive==="mix"?96:64,Te=new $a(Re,24);{let T=Te.attributes.uv;for(let L=0;L<T.count;L++)T.setXY(L,T.getX(L)/mt,T.getY(L)/mt)}Te.rotateX(-Math.PI/2),Te.translate(0,0,H-.02);let V=new Xe(Te,wt);V.receiveShadow=!0,V.name="Driveway",h.add(V);let Pe=Oe.ground==="gravel"?on("gravel",{seed:44,color:"#8c857a",mid:.3,fine:1.6,tone:.1,grit:.75,bump:9},1):Oe.ground==="dg"?on("dg",{seed:47,color:"#a8916f",mid:.5,fine:1.2,tone:.05,grit:.35,bump:5},1):Oe.ground==="mix"?vt():Oe.ground==="herr"?$e():Oe.ground==="mpavers"?on("mpavers",{n:512,seed:91,color:"#a39f97",mid:.3,fine:.8,tone:.03,grit:.14,bump:4,slab:[256,128],jw:6},.9):Oe.ground==="flag"||Oe.ground==="planters"?on("flag",{n:512,seed:97,color:"#9a8f80",mid:.7,fine:1,tone:.05,grit:.2,bump:6,cells:5,jw:5},.92):Oe.ground==="blue"?on("lawn4",{seed:52,color:"#457a42",mid:.7,fine:1.8,tone:.07,grit:.5,bump:5},1):on("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1),De=(T,L,k,Y)=>{let Z=[];for(let $=0;$<=40;$++){let ee=$/40,ne=1-ee;Z.push([ne*ne*ne*T[0]+3*ne*ne*ee*L[0]+3*ne*ee*ee*k[0]+ee*ee*ee*Y[0],-(ne*ne*ne*T[1]+3*ne*ne*ee*L[1]+3*ne*ee*ee*k[1]+ee*ee*ee*Y[1])])}return Z.sort(($,ee)=>$[1]-ee[1])},ot=(T,L)=>{for(let k=1;k<T.length;k++)if(T[k][1]>=L){let Y=T[k-1],Z=T[k],$=(L-Y[1])/Math.max(1e-6,Z[1]-Y[1]);return Y[0]+(Z[0]-Y[0])*$}return T[T.length-1][0]},nt=De([-N/2-190,-ge],[-N/2-190,-400],[-N/2,-300],[-N/2,0]),Nt=De([N/2,0],[N/2,-230],[N/2+70,-330],[N/2+70,-ge]),Ot=Oe.ground==="mpavers"||Oe.ground==="mix"||Oe.ground==="herr"||Oe.ground==="flag"||Oe.ground==="planters",sn=Oe.land==="rolling"||Oe.land!=="flat"&&!Ot,_n=T=>(T=Math.max(0,Math.min(1,T)),T*T*(3-2*T)),Wt=(T,L)=>{let k=(Z,$,ee)=>Math.hypot(Math.max(0,Math.abs(T)-Z),L<$?$-L:L>ee?L-ee:0),Y=k(v/2+44,-330,0);if(Ot&&(Y=Math.min(Y,k(v/2+220,-300,600))),L>=0){let Z=Math.min(L,ge),$=ot(nt,Z),ee=ot(Nt,Z);Y=Math.min(Y,Math.hypot(T<$?$-T:T>ee?T-ee:0,L-Z))}return Y},xn=(T,L)=>{if(!sn)return 0;let k=_n((Wt(T,L)-22)/140);if(k<=0)return 0;let Y=_n((Math.hypot(T,L)-1300)/2e3);return k*(2.6+3.4*Math.sin(T*.0131+.7)*Math.sin(L*.0117+2.1)+2.4*Math.sin(T*.0057+L*.0043+1.9)+1.4*Math.sin(T*.031-L*.027+.3)+.6*Math.sin(T*.071+1)*Math.sin(L*.063)+Y*(26+36*Math.sin(T*.0011+.5)*Math.sin(L*.0013+1.2)+18*Math.sin(T*.0027-L*.0019+2.4)))},Hn=(T,L,k,Y)=>{let Z=[];for(let be=-960;be<=960;be+=12)Z.push(be);for(let be=960,ye=16;be<4500;)ye*=1.3,be=Math.min(4500,be+ye),Z.push(be),Z.unshift(-be);let $=Z.length,ee=new Float32Array($*$*3),ne=new Float32Array($*$*2),_e=[];for(let be=0;be<$;be++)for(let ye=0;ye<$;ye++){let We=be*$+ye,ft=Z[ye],lt=Z[be]+200;ee[3*We]=ft,ee[3*We+1]=T+xn(ft,lt),ee[3*We+2]=H+lt,ne[2*We]=ft/k,ne[2*We+1]=-(H+lt)/k,ye&&be&&_e.push(We-$-1,We-1,We-$,We-$,We-1,We)}let Me=new Xt;Me.setAttribute("position",new Jt(ee,3)),Me.setAttribute("uv",new Jt(ne,2)),Me.setIndex(_e),Me.computeVertexNormals();let pe=new Xe(Me,L);pe.receiveShadow=!0,pe.name=Y,h.add(pe)};{let T=Oe.ground==="mpavers"||Oe.ground==="mix"||Oe.ground==="herr"||Oe.ground==="flag"||Oe.ground==="planters",L=Oe.ground==="lawn"||Oe.ground==="blue"||Oe.ground==="herr"?64:Oe.ground==="mpavers"||Oe.ground==="mix"?96:T?150:40,k=(Z,$,ee,ne,_e,Me,pe,be)=>{let ye=new oi(Z,$),We=ye.attributes.uv;for(let lt=0;lt<We.count;lt++)We.setXY(lt,We.getX(lt)*Z/pe,We.getY(lt)*$/pe);ye.rotateX(-Math.PI/2);let ft=new Xe(ye,Me);ft.position.set(ee,_e,ne),ft.receiveShadow=!0,ft.name=be,h.add(ft)},Y=()=>on("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1);sn?T?(Hn(-.9,Y(),64,"Lawn"),k(v+440,900,0,H+150,-.5,Pe,L,"Paving")):Hn(-.5,Pe,L,"Ground"):T?(k(9e3,9e3,0,0,-.9,Y(),64,"Lawn"),k(v+440,900,0,H+150,-.5,Pe,L,"Paving")):k(9e3,9e3,0,0,-.5,Pe,L,"Ground")}if(Oe.ground==="blue"){let T=(Ke,ct)=>ct>=0?Ke<ot(nt,ct)-1.5||Ke>ot(Nt,ct)+1.5:Math.abs(Ke)>v/2+38,L=(()=>{let Ke=Qn(771),ct=[],gt=[],_t=[],ht=[];for(let Dt=0;Dt<11;Dt++){let Ue=Ke()*6.283,Be=1.25+Ke()*.45,Ne=.24+Ke()*.08,ut=Ne*.72,at=(Ke()-.5)*2.3,Ze=(Ke()-.5)*2.3,bt=.05+Ke()*.35,At=Ke()*6.283,St=Math.cos(Ue)/2,Gt=Math.sin(Ue)/2,Ie=at+Math.cos(At)*bt,Tt=Ze+Math.sin(At)*bt,et=.78+Ke()*.1,Pt=1+Ke()*.22,Et=[at-St*Ne,0,Ze-Gt*Ne],zt=[at+St*Ne,0,Ze+Gt*Ne],yt=[Ie+St*ut,Be,Tt+Gt*ut],Bt=[Ie-St*ut,Be,Tt-Gt*ut],Ht=ct.length/3;ct.push(...Et,...zt,...yt,...Bt),gt.push(et,et,et,et,et,et,Pt,Pt,Pt,Pt,Pt,Pt),ht.push(Ht,Ht+1,Ht+2,Ht,Ht+2,Ht+3);for(let Mt=0;Mt<6;Mt++){let Rt=(Ke()-.5)*.4,rn=(Ke()-.5)*.4;(Mt<3||Mt===5)&&_t.push(Rt,1,rn)}}return{pos:new dt(ct,3),col:new dt(gt,3),nor:new dt(_t,3),idx:new Gs(ht,1)}})(),k=()=>{let Ke=new Xt;return Ke.setAttribute("position",L.pos),Ke.setAttribute("color",L.col),Ke.setAttribute("normal",L.nor),Ke.setIndex(L.idx),Ke},Y=Se.mats.grass||(Se.mats.grass=(()=>{let Ke=new kt({vertexColors:!0,side:yn,roughness:.9,metalness:0,envMapIntensity:.25});return Ke.onBeforeCompile=ct=>{ct.fragmentShader=ct.fragmentShader.replace("#include <normal_fragment_begin>",Ct.normal_fragment_begin.replace(/normal \*= faceDirection;/g,""))},Ke})()),Z=["#427a45","#4c8550","#3b7040","#558e56","#47804b","#3f7646"].map(ei),$=Qn(9113),ee=[],ne=-v/2-430,_e=v/2+330,Me=-130,pe=580,be=Oe.lite!=null?!!Oe.lite:typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||innerWidth<820,ye=be?1.5:1,We=2.3*ye,ft=4.6*ye;for(let Ke=Me;Ke<pe;){let ct=Ke>-30&&Ke<340,gt=ct?We:ft;for(let _t=ne;_t<_e;_t+=gt){let ht=ct&&_t>-v/2-270&&_t<v/2+250,Dt=ht?We:ft;if(!ht&&ct&&Math.round((_t-ne)/We)%2)continue;let Ue=_t+($()-.5)*Dt,Be=Ke+($()-.5)*Dt;T(Ue,Be)&&ee.push(Ue,Be,(ht?1:1.9)*(be?1.42:1))}Ke+=gt}let lt=160,Ve=new Map;for(let Ke=0;Ke<ee.length;Ke+=3){let ct=Math.floor((ee[Ke]-ne)/lt)+","+Math.floor((ee[Ke+1]-Me)/lt);(Ve.get(ct)||Ve.set(ct,[]).get(ct)).push(Ke)}let st=new Ft,It=new Yn,Yt=new O(0,1,0),Lt=new O,qt=new O,Zt=new xt;for(let Ke of Ve.values()){let ct=k(),gt=new ka(ct,Y,Ke.length);Ke.forEach((ht,Dt)=>{let Ue=ee[ht],Be=ee[ht+1],Ne=ee[ht+2]*(.85+$()*.35),ut=Math.floor((Ue+5e3)/21)%2?1.07:.94,at=.93+.14*Math.sin(Ue*.011+1.3)*Math.sin(Be*.013+.4);It.setFromAxisAngle(Yt,$()*6.283),Lt.set(Ne,Ne*(.88+$()*.3),Ne),qt.set(Ue,-.45+xn(Ue,Be),H+Be),st.compose(qt,It,Lt),gt.setMatrixAt(Dt,st),Zt.copy(Z[Math.floor($()*Z.length)]).multiplyScalar(ut*at*(.92+$()*.16)),gt.setColorAt(Dt,Zt)}),gt.instanceMatrix.needsUpdate=!0,gt.instanceColor&&(gt.instanceColor.needsUpdate=!0),gt.receiveShadow=!0,gt.castShadow=!1,gt.computeBoundingSphere(),gt.frustumCulled=!0,gt.name="Grass blades";let _t=new O;gt.onBeforeRender=(ht,Dt,Ue)=>{_t.copy(gt.boundingSphere.center).applyMatrix4(gt.matrixWorld);let Be=_t.distanceTo(Ue.getWorldPosition(qt));ct.setDrawRange(0,6*(Be<600?11:Be>1400?6:Math.round(11-5*(Be-600)/800)))},h.add(gt)}}if(Oe.ground==="planters"){let T=on("pflag",{n:512,seed:97,color:"#9a8f80",mid:.7,fine:1,tone:.05,grit:.2,bump:6,cells:5,jw:5},.92),L=on("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),k=Se.mats.leaf2||(Se.mats.leaf2=new kt({color:3493932,roughness:1,envMapIntensity:xi})),Y=["#f4f1ea","#b9a3d6","#e6b8c8"].map(ye=>ir(ye,.8)),Z=(ye,We,ft,lt,Ve)=>{let st=1-Ve;return[st*st*st*ye[0]+3*st*st*Ve*We[0]+3*st*Ve*Ve*ft[0]+Ve*Ve*Ve*lt[0],st*st*st*ye[1]+3*st*st*Ve*We[1]+3*st*Ve*Ve*ft[1]+Ve*Ve*Ve*lt[1]]},$=[[[N/2,0],[N/2,230],[N/2+70,330],[N/2+70,640],1],[[-N/2,0],[-N/2,300],[-N/2-190,400],[-N/2-190,640],-1]],ee=12,ne=1.1,_e=T;for(let[ye,We,ft,lt,Ve]of $){let It=[],Yt=[],Lt=[],qt=0,Zt=null;for(let gt=0;gt<=56;gt++){let _t=gt/56,ht=Z(ye,We,ft,lt,_t),Dt=Z(ye,We,ft,lt,Math.min(1,_t+.004)),Ue=Z(ye,We,ft,lt,Math.max(0,_t-.004)),Be=Dt[0]-Ue[0],Ne=Dt[1]-Ue[1],ut=Math.hypot(Be,Ne)||1;Be/=ut,Ne/=ut;let at=Ve*Math.abs(Ne),Ze=-Ve*Be*Math.sign(Ne||1);Zt&&(qt+=Math.hypot(ht[0]-Zt[0],ht[1]-Zt[1])),Zt=ht;let bt=ht[0]-at*.5,At=ht[1]-Ze*.5,St=ht[0]+at*ee,Gt=ht[1]+Ze*ee;if(It.push(bt,0,H+At,bt,ne,H+At,St,ne,H+Gt,St,0,H+Gt),Yt.push(qt/48,0,qt/48,.02,qt/48,.27,qt/48,.29),gt<56){let Ie=gt*4;for(let Tt=0;Tt<3;Tt++){let et=Ie+Tt,Pt=Ie+Tt+1,Et=et+4,zt=Pt+4;Ve>0?Lt.push(et,Et,Pt,Pt,Et,zt):Lt.push(et,Pt,Et,Pt,zt,Et)}}}let Ke=new Xt;Ke.setAttribute("position",new dt(It,3)),Ke.setAttribute("uv",new dt(Yt,2)),Ke.setIndex(Lt),Ke.computeVertexNormals();let ct=new Xe(Ke,_e);ct.castShadow=ct.receiveShadow=!0,ct.name="Drive border",h.add(ct)}let Me=T,pe=Se.mats.pgrass||(Se.mats.pgrass=new kt({color:8227410,roughness:1,envMapIntensity:xi})),be=Se.mats.pgrassT||(Se.mats.pgrassT=new kt({color:12167288,roughness:1,envMapIntensity:xi}));for(let[ye,We,ft,lt,Ve]of $){let st=[],Yt=0;for(let ht=0;ht<=240;ht++){let Dt=Z(ye,We,ft,lt,ht/240);ht&&(Yt+=Math.hypot(Dt[0]-st[ht-1][0],Dt[1]-st[ht-1][1])),st.push([Dt[0],Dt[1],Yt])}let Lt=(ht,Dt)=>{let Ue=1;for(;Ue<240&&st[Ue][2]<ht;)Ue++;let Be=st[Ue-1],Ne=st[Ue],ut=(ht-Be[2])/(Ne[2]-Be[2]||1),at=Math.hypot(Ne[0]-Be[0],Ne[1]-Be[1])||1,Ze=(Ne[0]-Be[0])/at,bt=(Ne[1]-Be[1])/at;return[Be[0]+(Ne[0]-Be[0])*ut+Ve*bt*Dt,H+Be[1]+(Ne[1]-Be[1])*ut-Ve*Ze*Dt]},qt=(ht,Dt,Ue,Be,Ne,ut,at,Ze,bt)=>{let At=Math.max(2,Math.ceil((Dt-ht)/6)),St=[],Gt=[],Ie=[];for(let Et=0;Et<=At;Et++){let zt=ht+(Dt-ht)*Et/At,yt=Lt(zt,Ue),Bt=Lt(zt,Be),Ht=zt/56;if(St.push(yt[0],Ne,yt[1],yt[0],ut,yt[1],Bt[0],ut,Bt[1],Bt[0],Ne,Bt[1]),Gt.push(Ht,Ne/56,Ht,ut/56,Ht,(ut+(Be-Ue))/56,Ht,(ut+(Be-Ue)+(ut-Ne))/56),Et<At){let Mt=Et*4;for(let Rt=0;Rt<3;Rt++){let rn=Mt+Rt,un=Mt+Rt+1,di=rn+4,Ui=un+4;Ve>0?Ie.push(rn,di,un,un,di,Ui):Ie.push(rn,un,di,un,Ui,di)}}}for(let[Et,zt]of[[0,1],[At*4,0]]){let yt=St.length/3;for(let Bt=0;Bt<4;Bt++)St.push(St[(Et+Bt)*3],St[(Et+Bt)*3+1],St[(Et+Bt)*3+2]);Gt.push(0,Ne/56,0,ut/56,(Be-Ue)/56,ut/56,(Be-Ue)/56,Ne/56),Ve>0==!!zt?Ie.push(yt,yt+1,yt+2,yt,yt+2,yt+3):Ie.push(yt,yt+2,yt+1,yt,yt+3,yt+2)}let Tt=new Xt;Tt.setAttribute("position",new dt(St,3)),Tt.setAttribute("uv",new dt(Gt,2)),Tt.setIndex(Ie);let et=Tt.toNonIndexed();et.computeVertexNormals();let Pt=new Xe(et,at);Pt.castShadow=bt!==!1,Pt.receiveShadow=!0,Pt.name=Ze,h.add(Pt)},Zt=ee+.5,Ke=34,ct=Zt+Ke,gt=20,_t=5.5;[[10,132],[156,278]].forEach(([ht,Dt],Ue)=>{qt(ht,Dt,Zt,ct,0,gt-1.2,T,"Planter"),qt(ht+_t,Dt-_t,Zt+_t,ct-_t,gt-1.2,gt-.7,L,"Planter soil",!1),qt(ht-1,Dt+1,Zt-1,Zt+_t+.5,gt-1.2,gt+1.3,Me,"Planter coping"),qt(ht-1,Dt+1,ct-_t-.5,ct+1,gt-1.2,gt+1.3,Me,"Planter coping"),qt(ht-1,ht+_t+.5,Zt+_t+.5,ct-_t-.5,gt-1.2,gt+1.3,Me,"Planter coping"),qt(Dt-_t-.5,Dt+1,Zt+_t+.5,ct-_t-.5,gt-1.2,gt+1.3,Me,"Planter coping");let Be=Qn(Ve*7+Ue*13+40),Ne=[[],[],[],[],[],[]],ut=(Zt+ct)/2,at=gt-.7;for(let Ze=ht+16,bt=0;Ze<Dt-12;Ze+=21+Be()*5,bt++){let At=Lt(Ze,ut+(Be()-.5)*5);if(bt%2===0){let St=8.5+Be()*3.5,Gt=new Js(St,2);Gt.scale(1,.82,1),Gt.translate(At[0],at+St*.62,At[1]),Ne[0].push(Gt)}else for(let Gt=0;Gt<26;Gt++){let Ie=15+Be()*11,Tt=new Ja(.55,Ie,4,1);Tt.translate(0,Ie/2,0),Tt.rotateZ((Be()-.5)*.9),Tt.rotateY(Be()*Math.PI*2),Tt.translate(At[0]+(Be()-.5)*5,at,At[1]+(Be()-.5)*5),Ne[Gt%5===0?5:4].push(Tt)}}for(let Ze=0;Ze<70;Ze++){let bt=Lt(ht+_t+3+Be()*(Dt-ht-2*_t-6),Be()<.5?Zt+_t+2+Be()*4:ct-_t-2-Be()*4),At=new Js(1+Be()*.9,0);At.translate(bt[0],at+1.4+Be()*2,bt[1]),Ne[1+Ze%3].push(At)}Ne.forEach((Ze,bt)=>{if(!Ze.length)return;let At=new Xe(Vr(Ze.map(St=>St.toNonIndexed()),!1),bt===0?k:bt===4?pe:bt===5?be:Y[bt-1]);At.castShadow=At.receiveShadow=!0,At.name=bt===0?"Shrubs":bt>3?"Grasses":"Flowers",h.add(At)})})}}let Yr=on("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),Bo=Se.mats.leaf||(Se.mats.leaf=(()=>{let T=Rc("leaf",256,{seed:64,color:"#2f4426",mid:.6,fine:1.8,tone:.3,grit:.9,bump:10});return T.map.repeat.set(3,3),T.normalMap.repeat.set(3,3),new kt({map:T.map,normalMap:T.normalMap,roughness:1,envMapIntensity:xi})})());for(let T of[-1,1]){Ae(34,1.2,250,T*(v/2+19),.2,H-125,Yr,"Bed","z");let L=Qn(T>0?5:9);for(let k=0;k<4;k++){let Y=13+L()*5,Z=new Js(Y,3),$=Z.attributes.position;for(let ne=0;ne<$.count;ne++){let _e=$.getX(ne),Me=$.getY(ne),pe=$.getZ(ne),be=1+.07*Math.sin(_e*.9+k)*Math.cos(pe*1.1)+.05*Math.sin(Me*1.7);$.setXYZ(ne,_e*be,Me*be*.85,pe*be)}Z.computeVertexNormals();let ee=new Xe(Z,Bo);ee.position.set(T*(v/2+19+(L()-.5)*6),Y*.72,H-22-k*58-L()*10),ee.castShadow=ee.receiveShadow=!0,ee.name="Boxwood",h.add(ee)}}let or=T=>{let L="rw:"+T;return Se.mats[L]||(Se.mats[L]=new Pi({color:ei(T)}))},qr=Se.mats.epoxy||(Se.mats.epoxy=(()=>{let L=document.createElement("canvas");L.width=L.height=512;let k=L.getContext("2d"),Y=Qn(4411);k.fillStyle="#c8ad82",k.fillRect(0,0,512,512);let Z=["#efe2c6","#b89868","#a08256","#7c6344","#e2d0aa","#9c8f7a","#5f5040"];for(let ee=0;ee<5200;ee++){let ne=Y()*512,_e=Y()*512,Me=1.2+Y()*3.6,pe=1+Y()*2.6;k.save(),k.translate(ne,_e),k.rotate(Y()*6.283),k.globalAlpha=.55+Y()*.45,k.fillStyle=Z[Math.floor(Y()*Z.length)],k.fillRect(-Me/2,-pe/2,Me,pe),k.restore(),(ne<4||_e<4||ne>508||_e>508)&&(k.save(),k.translate(ne+(ne<4?512:ne>508?-512:0),_e+(_e<4?512:_e>508?-512:0)),k.fillStyle=Z[ee%Z.length],k.fillRect(-Me/2,-pe/2,Me,pe),k.restore())}let $=new Yi(L);return $.wrapS=$.wrapT=Fn,$.colorSpace=Kt,$.anisotropy=8,new Li({map:$,roughness:.34,metalness:0,clearcoat:.5,clearcoatRoughness:.18,envMapIntensity:.22})})()),ti=new Wn,Zi=(T,L)=>{let k="room:"+T+L;return Se.mats[k]||(Se.mats[k]=new kt({color:ei(T),roughness:.95,metalness:0,envMapIntensity:.25,emissive:ei(T),emissiveIntensity:L}))},ji=Oe.garage==="light",Zr=ji?Zi("#f1eee8",.22):Zi("#e6dfd0",0),jr=ji?Zi("#e6e3dc",.18):Zi("#d9d2c3",0),ui=260,C=new Xe(new oi(v,ui).rotateX(-Math.PI/2),qr);C.geometry.attributes.uv.array.forEach((T,L,k)=>{k[L]=T*(L%2?ui/40:v/40)}),C.position.set(0,-.01,H-F-ui/2+6),C.receiveShadow=!0,ti.add(C);let j=new Xe(new oi(v,D),Zr);j.position.set(0,D/2,H-F-ui+6),j.receiveShadow=!0,ti.add(j);let te=new Xe(new oi(v,ui).rotateX(Math.PI/2),jr);jr.shadowSide=yn,te.castShadow=!0,te.position.set(0,S+14,H-F-ui/2+6),ti.add(te);for(let T of[-1,1]){let L=new Xe(new oi(ui,D).rotateY(-T*Math.PI/2),Zr);L.position.set(T*(v/2-F-.4),D/2,H-F-ui/2+6),L.receiveShadow=!0,ti.add(L)}let ie=new Ks(ji?16775924:16774114,ji?2300:2400,420,1.7);ie.position.set(0,S-6,H-F-110),ti.add(ie),h.add(ti),G.scene.add(h);let Q=Math.max(v,f)*.9+140;G.sun.position.set(-u*.62-40,f*2.5+40,u*.5+70),G.sun.target.position.set(0,f*.4,0);let Ge=G.sun.shadow.camera;Ge.left=-Q,Ge.right=Q,Ge.top=Q,Ge.bottom=-Q,Ge.near=10,Ge.far=2400,Ge.updateProjectionMatrix();let it=d.L.n+":"+v+":"+f;return it!==G.key&&(G.key=it,G.fit=Math.max((v-2*w)/(2*Math.tan(15*Math.PI/180)*Math.max(.6,G.cam.aspect)),f/(2*Math.tan(15*Math.PI/180)))*1.32,Uc()),G.ctl.minDistance=G.fit*.25,G.ctl.maxDistance=G.fit*2.2,d.L.man||(G.m=0),Fo(),hi(),G.ready=!0,Cn}function Fo(){if(!G.L)return;let i=new Ft,e=(t,n,s,r)=>{let a=(t.e3?$_(t,G.f):Ju(t,G.f,r)).poses;n.forEach((o,l)=>{let c=a[l];c&&(i.set(c.X[0],0,c.Z[0],c.C[0],0,1,0,0,c.X[1],0,c.Z[1],c.C[1],0,0,0,1),o.matrix.copy(i),o.matrixWorldNeedsUpdate=!0)}),(s||[]).forEach(o=>{let l=a[o.i];l&&(o.m.position.x=l.X[0]*o.lx+l.Z[0]*o.lz+l.C[0],o.m.position.z=l.X[1]*o.lx+l.Z[1]*o.lz+l.C[1])})};e(G.L,G.leaves,G.fixA,G.m),G.B&&e(G.B.L,G.B.lvs,G.B.fix,0)}function rx(i){return G.f=Math.max(0,Math.min(1,+i||0)),Fo(),hi(),Cn}function ax(i){return G.m=Math.max(0,Math.min(1,+i||0)),Fo(),hi(),Cn}function Uc(){if(!G.r)return;let i=24*Math.PI/180,e=1.5*Math.PI/180,t=G.fit*1.22;G.ctl.target.set(0,G.H*.6,0),G.cam.position.set(Math.sin(i)*Math.cos(e)*t,G.H*.6+Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t),G.ctl.update(),hi()}function ox(i){if(!G.r)return Cn;let e=(i==="in"?156:22)*Math.PI/180,t=6*Math.PI/180,n=i==="in"?Math.min(G.fit,190):G.fit;return G.cam.position.set(Math.sin(e)*Math.cos(t)*n,G.H*.47+Math.sin(t)*n,Math.cos(e)*Math.cos(t)*n),G.ctl.update(),hi(),Cn}function lx(i,e,t){let n=G.f,s=performance.now();return e=e||2600,G.anim=()=>{let r=Math.min(1,(performance.now()-s)/e),a=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;G.f=n+(i-n)*a,Fo(),G.dirty=!0,t&&t(G.f),r>=1&&(G.anim=null)},hi(),Cn}function cx(){return G.r?(td(),G.r.domElement.toDataURL("image/jpeg",.92)):null}function hx(){let i=(n,s)=>{let r=n.find(a=>String(a[0])===String(s));return r?r[1]:String(s??"")},e=/pavers|herr|mix/.test(String(Oe.drive||""))||/pavers|herr|mix/.test(String(Oe.ground||"")),t=[["Structure",i(ar,Oe.structure)],["Roof",i(No,Oe.roof)]];return Oe.roof!=="flat"&&t.push(["Slope",Oe.pitch+":12"],["Eave",Oe.eave==="deep"?"Deep":"Short"]),t.push(["Openings",i(Uo,Oe.second)],["Driveway",i(Lo,Oe.drive)],["Ground",i(Do,Oe.ground)]),e&&t.push(["Paver colour",i(Cc,Oe.paver)]),t.push(["Lights",i(Pc,Oe.light)]),t.filter(n=>n[1])}var Cn={v:ju,setting:Ku,scene:hx,mount:ix,show:Dc,fold:rx,man:ax,look:ox,reset:Uc,animate:lx,shot:cx,dispose:nd,stop(){G.anim=null},get ready(){return G.ready},get folded(){return G.f},get hasMan(){return!!(G.L&&G.L.man)},_E:G,_pose:Ju},gv=Cn;$t.TR3D=Cn;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
