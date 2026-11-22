(()=>{var os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Ac=1,Ju=2;var su=1,Ql=2,bi=3,zi=0,yn=1,vn=2;var on=0,Us=1,ga=2,Rc=3,Cc=4,ec=5,Wn=100,$u=101,Ku=102,Pc=103,Ic=104,Js=200,Qu=201,ed=202,td=203,ll=204,cl=205,Ja=206,nd=207,$a=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,cd=0,hd=1,ud=2,_a=3,dd=4,fd=5,pd=6,md=7,ru=0,gd=1,_d=2,Fi=0,tc=1,nc=2,ic=3,Lr=4,xd=5,sc=6;var au=300,Fs=301,Bs=302,ts=303,hl=304,Ka=306,Dn=1e3,Fn=1001,ul=1002,sn=1003,Lc=1004;var Ro=1005;var rn=1006,vd=1007;var zs=1008;var di=1009,yd=1010,Md=1011,rc=1012,ou=1013,Oi=1014,Ln=1015,mn=1016,lu=1017,cu=1018,wi=1020,bd=1021,Tn=1023,Sd=1024,Ed=1025,Qi=1026,Hi=1027,wd=1028,hu=1029,Td=1030,uu=1031,du=1033,Co=33776,Po=33777,Io=33778,Lo=33779,Dc=35840,Uc=35841,Nc=35842,Oc=35843,fu=36196,Fc=37492,Bc=37496,zc=37808,Hc=37809,kc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,Yc=37815,qc=37816,Zc=37817,jc=37818,Jc=37819,$c=37820,Kc=37821,Do=36492,Qc=36494,eh=36495,Ad=36283,th=36284,nh=36285,ih=36286;var xa=2300,va=2301,Uo=2302,sh=2400,rh=2401,ah=2402;var pu=3e3,es=3001,Rd=3200,Cd=3201,ac=0,Pd=1,In="",Yt="srgb",Bn="srgb-linear",oc="display-p3",Qa="display-p3-linear",ya="linear",Vt="srgb",Ma="rec709",ba="p3";var ds=7680;var oh=519,Id=512,Ld=513,Dd=514,mu=515,Ud=516,Nd=517,Od=518,Fd=519,lh=35044;var ch="300 es",dl=1035,Ei=2e3,Sa=2001,fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,fr=Math.PI/180,vr=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function lc(i,e){return(i%e+e)%e}function Bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zd(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function Hd(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function kd(i,e=1){return e-Math.abs(lc(i,e*2)-e)}function Vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xd(i,e){return i+Math.random()*(e-i)}function Yd(i){return i*(.5-Math.random())}function qd(i){i!==void 0&&(hh=i);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zd(i){return i*fr}function jd(i){return i*vr}function fl(i){return(i&i-1)===0&&i!==0}function Jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ea(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gu={DEG2RAD:fr,RAD2DEG:vr,generateUUID:cs,clamp:an,euclideanModulo:lc,mapLinear:Bd,inverseLerp:zd,lerp:pr,damp:Hd,pingpong:kd,smoothstep:Vd,smootherstep:Gd,randInt:Wd,randFloat:Xd,randFloatSpread:Yd,seededRandom:qd,degToRad:Zd,radToDeg:jd,isPowerOfTwo:fl,ceilPowerOfTwo:Jd,floorPowerOfTwo:Ea,setQuaternionFromProperEuler:$d,normalize:En,denormalize:Cs},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],M=s[1],v=s[4],b=s[7],A=s[2],R=s[5],w=s[8];return r[0]=a*x+o*M+l*A,r[3]=a*m+o*v+l*R,r[6]=a*f+o*b+l*w,r[1]=c*x+h*M+d*A,r[4]=c*m+h*v+d*R,r[7]=c*f+h*b+d*w,r[2]=u*x+p*M+g*A,r[5]=u*m+p*v+g*R,r[8]=u*f+p*b+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Tt;function _u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=yr("canvas");return i.style.display="block",i}var uh={};function mr(i){i in uh||(uh[i]=!0,console.warn(i))}var dh=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fh=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Bn]:{transfer:ya,primaries:Ma,toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:Vt,primaries:Ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qa]:{transfer:ya,primaries:ba,toReference:i=>i.applyMatrix3(fh),fromReference:i=>i.applyMatrix3(dh)},[oc]:{transfer:Vt,primaries:ba,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fh),fromReference:i=>i.applyMatrix3(dh).convertLinearToSRGB()}},Qd=new Set([Bn,Qa]),Bt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Gr[e].toReference,s=Gr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===In?ya:Gr[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fs,wa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=yr("canvas")),fs.width=e.width,fs.height=e.height;let n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ef=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tf=0,Un=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=rn,a=zs,o=Tn,l=di,c=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=cs(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===es?Yt:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?es:pu}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?Yt:In}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=au;Un.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(p+1)/2,A=(f+1)/2,R=(h+u)/4,w=(d+x)/4,I=(g+m)/4;return v>b&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=w/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===es?Yt:In),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ml=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-o,f=l*u+c*p+h*g+d*x,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,f*M);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let b=o*M;if(l=l*m+u*b,c=c*m+p*b,h=h*m+g*b,d=d*m+x*b,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bo=new N,ph=new zn,Ti=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Xr.subVectors(this.max,ar),ps.subVectors(e.a,ar),ms.subVectors(e.b,ar),gs.subVectors(e.c,ar),Ii.subVectors(ms,ps),Li.subVectors(gs,ms),qi.subVectors(ps,gs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-qi.z,qi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,qi.z,0,-qi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-qi.y,qi.x,0];return!zo(t,ps,ms,gs,Xr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,ps,ms,gs,Xr))?!1:(Yr.crossVectors(Ii,Li),t=[Yr.x,Yr.y,Yr.z],zo(t,ps,ms,gs,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new N,new N,new N,new N,new N,new N,new N,new N],ei=new N,Wr=new Ti,ps=new N,ms=new N,gs=new N,Ii=new N,Li=new N,qi=new N,ar=new N,Xr=new N,Yr=new N,Zi=new N;function zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nf=new Ti,or=new N,Ho=new N,ns=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ho)),this.expandByPoint(or.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new N,ko=new N,qr=new N,Di=new N,Vo=new N,Zr=new N,Go=new N,Mr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ko.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(ko);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Di.dot(this.direction),l=-Di.dot(qr),c=Di.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ko).addScaledVector(qr,u),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){Vo.subVectors(t,e),Zr.subVectors(n,e),Go.crossVectors(Vo,Zr);let a=this.direction.dot(Go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);let l=o*this.direction.dot(Zr.crossVectors(Di,Zr));if(l<0)return null;let c=o*this.direction.dot(Vo.cross(Di));if(c<0||l+c>a)return null;let h=-o*Di.dot(Go);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,rf)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ui.crossVectors(n,Nn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ui.crossVectors(n,Nn)),Ui.normalize(),jr.crossVectors(Nn,Ui),s[0]=Ui.x,s[4]=jr.x,s[8]=Nn.x,s[1]=Ui.y,s[5]=jr.y,s[9]=Nn.y,s[2]=Ui.z,s[6]=jr.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],v=n[7],b=n[11],A=n[15],R=s[0],w=s[4],I=s[8],_=s[12],y=s[1],D=s[5],F=s[9],W=s[13],T=s[2],L=s[6],z=s[10],H=s[14],$=s[3],q=s[7],se=s[11],oe=s[15];return r[0]=a*R+o*y+l*T+c*$,r[4]=a*w+o*D+l*L+c*q,r[8]=a*I+o*F+l*z+c*se,r[12]=a*_+o*W+l*H+c*oe,r[1]=h*R+d*y+u*T+p*$,r[5]=h*w+d*D+u*L+p*q,r[9]=h*I+d*F+u*z+p*se,r[13]=h*_+d*W+u*H+p*oe,r[2]=g*R+x*y+m*T+f*$,r[6]=g*w+x*D+m*L+f*q,r[10]=g*I+x*F+m*z+f*se,r[14]=g*_+x*W+m*H+f*oe,r[3]=M*R+v*y+b*T+A*$,r[7]=M*w+v*D+b*L+A*q,r[11]=M*I+v*F+b*z+A*se,r[15]=M*_+v*W+b*H+A*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+x*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],M=d*m*c-x*u*c+x*l*p-o*m*p-d*l*f+o*u*f,v=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,b=h*x*c-g*d*c+g*o*p-a*x*p-h*o*f+a*d*f,A=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,R=t*M+n*v+s*b+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=M*w,e[1]=(x*u*r-d*m*r-x*s*p+n*m*p+d*s*f-n*u*f)*w,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*w,e[4]=v*w,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*p+t*l*p)*w,e[8]=b*w,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*f-t*d*f)*w,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*w,e[12]=A*w,e[13]=(h*x*s-g*d*s+g*n*u-t*x*u-h*n*m+t*d*m)*w,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*w,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,x=a*h,m=a*d,f=o*d,M=l*c,v=l*h,b=l*d,A=n.x,R=n.y,w=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+b)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-b)*R,s[5]=(1-(u+f))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+v)*w,s[9]=(m-M)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),o=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/a,d=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ei){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),p,g;if(o===Ei)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ei){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,p=(n+s)*h,g,x;if(o===Ei)g=(a+r)*d,x=-2*d;else if(o===Sa)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new N,ti=new Ut,sf=new N(0,0,0),rf=new N(1,1,1),Ui=new N,jr=new N,Nn=new N,mh=new Ut,gh=new zn,Ra=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ra.DEFAULT_ORDER="XYZ";var Ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,_h=new N,xs=new zn,xi=new Ut,Jr=new N,lr=new N,of=new N,lf=new zn,xh=new N(1,0,0),vh=new N(0,1,0),yh=new N(0,0,1),cf={type:"added"},hf={type:"removed"},An=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Ra,n=new zn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Tt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(yh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(lr,Jr,this.up):xi.lookAt(Jr,lr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(xi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};An.DEFAULT_UP=new N(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new N,vi=new N,Wo=new N,yi=new N,vs=new N,ys=new N,Mh=new N,Xo=new N,Yo=new N,qo=new N,$r=!1,Ps=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),vi.subVectors(n,t),Wo.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(vi),l=ni.dot(Wo),c=vi.dot(vi),h=vi.dot(Wo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,s,r,a,o,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),vi.subVectors(e,t),ni.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),ni.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,n),ys.subVectors(r,n),Xo.subVectors(e,n);let l=vs.dot(Xo),c=ys.dot(Xo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,s);let h=vs.dot(Yo),d=ys.dot(Yo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(vs,a);qo.subVectors(e,r);let p=vs.dot(qo),g=ys.dot(qo);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ys,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Mh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Mh,o);let f=1/(m+x+u);return a=x*f,o=u*f,t.copy(n).addScaledVector(vs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Bt.workingColorSpace){if(e=lc(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zo(a,r,e+1/3),this.g=Zo(a,r,e),this.b=Zo(a,r,e-1/3)}return Bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Bt.fromWorkingColorSpace(_n.copy(this),e),Math.round(an(_n.r*255,0,255))*65536+Math.round(an(_n.g*255,0,255))*256+Math.round(an(_n.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Yt){Bt.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Kr);let n=pr(Ni.h,Kr.h,t),s=pr(Ni.s,Kr.s,t),r=pr(Ni.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new pt;pt.NAMES=xu;var uf=0,ki=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Us,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Si=df();function df(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function ff(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=an(i,-65504,65504),Si.floatView[0]=i;let e=Si.uint32View[0],t=e>>23&511;return Si.baseTable[t]+((e&8388607)>>Si.shiftTable[t])}function pf(i){let e=i>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[e]+(i&1023)]+Si.exponentTable[e],Si.floatView[0]}var Dr={toHalfFloat:ff,fromHalfFloat:pf},nn=new N,Qr=new de,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}};var Hs=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var mf=0,Gn=new Ut,jo=new An,Ms=new N,On=new Ti,cr=new Ti,fn=new N,qt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Pa:Hs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(On.min,cr.min),On.expandByPoint(fn),fn.addVectors(On.max,cr.max),On.expandByPoint(fn)):(On.expandByPoint(cr.min),On.expandByPoint(cr.max))}On.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),fn.add(Ms)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new N,h[y]=new N;let d=new N,u=new N,p=new N,g=new de,x=new de,m=new de,f=new N,M=new N;function v(y,D,F){d.fromArray(s,y*3),u.fromArray(s,D*3),p.fromArray(s,F*3),g.fromArray(a,y*2),x.fromArray(a,D*2),m.fromArray(a,F*2),u.sub(d),p.sub(d),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(W),M.copy(p).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar(W),c[y].add(f),c[D].add(f),c[F].add(f),h[y].add(M),h[D].add(M),h[F].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let y=0,D=b.length;y<D;++y){let F=b[y],W=F.start,T=F.count;for(let L=W,z=W+T;L<z;L+=3)v(n[L+0],n[L+1],n[L+2])}let A=new N,R=new N,w=new N,I=new N;function _(y){w.fromArray(r,y*3),I.copy(w);let D=c[y];A.copy(D),A.sub(w.multiplyScalar(w.dot(D))).normalize(),R.crossVectors(I,D);let W=R.dot(h[y])<0?-1:1;l[y*4]=A.x,l[y*4+1]=A.y,l[y*4+2]=A.z,l[y*4+3]=W}for(let y=0,D=b.length;y<D;++y){let F=b[y],W=F.start,T=F.count;for(let L=W,z=W+T;L<z;L+=3)_(n[L+0]),_(n[L+1]),_(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new Ut,ji=new Mr,ea=new ns,Sh=new N,bs=new N,Ss=new N,Es=new N,Jo=new N,ta=new N,na=new de,ia=new de,sa=new de,Eh=new N,wh=new N,Th=new N,ra=new N,aa=new N,Xe=class extends An{constructor(e=new qt,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Jo.fromBufferAttribute(d,e),a?ta.addScaledVector(Jo,h):ta.addScaledVector(Jo.sub(t),h))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(ea.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ea,Sh)===null||ji.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(bh.copy(r).invert(),ji.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,A=v;b<A;b+=3){let R=o.getX(b),w=o.getX(b+1),I=o.getX(b+2);s=oa(this,f,e,n,c,h,d,R,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);s=oa(this,a,e,n,c,h,d,M,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,A=v;b<A;b+=3){let R=b,w=b+1,I=b+2;s=oa(this,f,e,n,c,h,d,R,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let M=m,v=m+1,b=m+2;s=oa(this,a,e,n,c,h,d,M,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gf(i,e,t,n,s,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,bs),i.getVertexPosition(l,Ss),i.getVertexPosition(c,Es);let h=gf(i,e,t,n,bs,Ss,Es,ra);if(h){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),h.uv=Ps.getInterpolation(ra,bs,Ss,Es,na,ia,sa,new de)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=Ps.getInterpolation(ra,bs,Ss,Es,na,ia,sa,new de),h.uv2=h.uv1),a&&(Eh.fromBufferAttribute(a,o),wh.fromBufferAttribute(a,l),Th.fromBufferAttribute(a,c),h.normal=Ps.getInterpolation(ra,bs,Ss,Es,Eh,wh,Th,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ps.getNormal(bs,Ss,Es,d.normal),h.face=d}return h}var ln=class i extends qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function g(x,m,f,M,v,b,A,R,w,I,_){let y=b/w,D=A/I,F=b/2,W=A/2,T=R/2,L=w+1,z=I+1,H=0,$=0,q=new N;for(let se=0;se<z;se++){let oe=se*D-W;for(let ge=0;ge<L;ge++){let Q=ge*y-F;q[x]=Q*M,q[m]=oe*v,q[f]=T,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=R>0?1:-1,h.push(q.x,q.y,q.z),d.push(ge/w),d.push(1-se/I),H+=1}}for(let se=0;se<I;se++)for(let oe=0;oe<w;oe++){let ge=u+oe+L*se,Q=u+oe+L*(se+1),le=u+(oe+1)+L*(se+1),Te=u+(oe+1)+L*se;l.push(ge,Q,Te),l.push(Q,le,Te),$+=6}o.addGroup(p,$,_),p+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function _f(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vu(i){return i.getRenderTarget()===null?i.outputColorSpace:Bt.workingColorSpace}var ai={clone:ks,merge:wn},xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xn=class extends Ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Ts=1,gl=class extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(ws,Ts,e,t);s.layers=this.layers,this.add(s);let r=new xn(ws,Ts,e,t);r.layers=this.layers,this.add(r);let a=new xn(ws,Ts,e,t);a.layers=this.layers,this.add(a);let o=new xn(ws,Ts,e,t);o.layers=this.layers,this.add(o);let l=new xn(ws,Ts,e,t);l.layers=this.layers,this.add(l);let c=new xn(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},La=class extends Un{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_l=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?Yt:In),this.texture=new La(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:on});r.uniforms.tEquirect.value=t;let a=new Xe(s,r),o=t.minFilter;return t.minFilter===zs&&(t.minFilter=rn),new gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$o=new N,yf=new N,Mf=new Tt,ii=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new ns,la=new N,br=class{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],M=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-p,b-f).normalize(),n[1].setComponents(l+r,u+c,m+p,b+f).normalize(),n[2].setComponents(l+a,u+h,m+g,b+M).normalize(),n[3].setComponents(l-a,u-h,m-g,b-M).normalize(),n[4].setComponents(l-o,u-d,m-x,b-v).normalize(),t===Ei)n[5].setComponents(l+o,u+d,m+x,b+v).normalize();else if(t===Sa)n[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];t?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var si=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*u-a;for(let v=0;v<c;v++){let b=v*d-r;g.push(b,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,b=M+c*(f+1),A=M+1+c*(f+1),R=M+1+c*f;p.push(v,b,R),p.push(b,A,R)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`
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
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,zm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,jm=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Sf,alphahash_pars_fragment:Ef,alphamap_fragment:wf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:Rf,aomap_fragment:Cf,aomap_pars_fragment:Pf,batching_pars_vertex:If,batching_vertex:Lf,begin_vertex:Df,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Of,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:kf,color_fragment:Vf,color_pars_fragment:Gf,color_pars_vertex:Wf,color_vertex:Xf,common:Yf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:jf,displacementmap_vertex:Jf,emissivemap_fragment:$f,emissivemap_pars_fragment:Kf,colorspace_fragment:Qf,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:gp,envmap_vertex:rp,fog_vertex:ap,fog_pars_vertex:op,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:bp,lights_fragment_begin:Sp,lights_fragment_maps:Ep,lights_fragment_end:wp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphcolor_vertex:Op,morphnormal_vertex:Fp,morphtarget_pars_vertex:Bp,morphtarget_vertex:zp,normal_fragment_begin:Hp,normal_fragment_maps:kp,normal_pars_fragment:Vp,normal_pars_vertex:Gp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:jp,opaque_fragment:Jp,packing:$p,premultiplied_alpha_fragment:Kp,project_vertex:Qp,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:om,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:dm,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:_m,uv_pars_fragment:xm,uv_pars_vertex:vm,uv_vertex:ym,worldpos_vertex:Mm,background_vert:bm,background_frag:Sm,backgroundCube_vert:Em,backgroundCube_frag:wm,cube_vert:Tm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Im,equirect_vert:Lm,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Om,meshbasic_frag:Fm,meshlambert_vert:Bm,meshlambert_frag:zm,meshmatcap_vert:Hm,meshmatcap_frag:km,meshnormal_vert:Vm,meshnormal_frag:Gm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:qm,meshtoon_vert:Zm,meshtoon_frag:jm,points_vert:Jm,points_frag:$m,shadow_vert:Km,shadow_frag:Qm,sprite_vert:eg,sprite_frag:tg},Fe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},ui={basic:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:wn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:wn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new pt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:wn([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:wn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:wn([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:wn([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:wn([Fe.common,Fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:wn([Fe.lights,Fe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ui.physical={uniforms:wn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var ca={r:0,b:0,g:0};function ng(i,e,t,n,s,r,a){let o=new pt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ka)?(h===void 0&&(h=new Xe(new ln(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ks(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Vt,(d!==v||u!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xe(new si(2,2),new cn({name:"BackgroundMaterial",uniforms:ks(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(ca,vu(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function ig(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(T,L,z,H,$){let q=!1;if(a){let se=x(H,z,L);c!==se&&(c=se,p(c.object)),q=f(T,H,z,$),q&&M(T,H,z,$)}else{let se=L.wireframe===!0;(c.geometry!==H.id||c.program!==z.id||c.wireframe!==se)&&(c.geometry=H.id,c.program=z.id,c.wireframe=se,q=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,I(T,L,z,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(T){return n.isWebGL2?i.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?i.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function x(T,L,z){let H=z.wireframe===!0,$=o[T.id];$===void 0&&($={},o[T.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let se=q[H];return se===void 0&&(se=m(u()),q[H]=se),se}function m(T){let L=[],z=[],H=[];for(let $=0;$<s;$++)L[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:H,object:T,attributes:{},index:null}}function f(T,L,z,H){let $=c.attributes,q=L.attributes,se=0,oe=z.getAttributes();for(let ge in oe)if(oe[ge].location>=0){let le=$[ge],Te=q[ge];if(Te===void 0&&(ge==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),ge==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;se++}return c.attributesNum!==se||c.index!==H}function M(T,L,z,H){let $={},q=L.attributes,se=0,oe=z.getAttributes();for(let ge in oe)if(oe[ge].location>=0){let le=q[ge];le===void 0&&(ge==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),ge==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));let Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),$[ge]=Te,se++}c.attributes=$,c.attributesNum=se,c.index=H}function v(){let T=c.newAttributes;for(let L=0,z=T.length;L<z;L++)T[L]=0}function b(T){A(T,0)}function A(T,L){let z=c.newAttributes,H=c.enabledAttributes,$=c.attributeDivisors;z[T]=1,H[T]===0&&(i.enableVertexAttribArray(T),H[T]=1),$[T]!==L&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,L),$[T]=L)}function R(){let T=c.newAttributes,L=c.enabledAttributes;for(let z=0,H=L.length;z<H;z++)L[z]!==T[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function w(T,L,z,H,$,q,se){se===!0?i.vertexAttribIPointer(T,L,z,$,q):i.vertexAttribPointer(T,L,z,H,$,q)}function I(T,L,z,H){if(n.isWebGL2===!1&&(T.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=H.attributes,q=z.getAttributes(),se=L.defaultAttributeValues;for(let oe in q){let ge=q[oe];if(ge.location>=0){let Q=$[oe];if(Q===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let le=Q.normalized,Te=Q.itemSize,ke=t.get(Q);if(ke===void 0)continue;let Le=ke.buffer,Je=ke.type,nt=ke.bytesPerElement,xe=n.isWebGL2===!0&&(Je===i.INT||Je===i.UNSIGNED_INT||Q.gpuType===ou);if(Q.isInterleavedBufferAttribute){let Ve=Q.data,B=Ve.stride,_e=Q.offset;if(Ve.isInstancedInterleavedBuffer){for(let re=0;re<ge.locationSize;re++)A(ge.location+re,Ve.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let re=0;re<ge.locationSize;re++)b(ge.location+re);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let re=0;re<ge.locationSize;re++)w(ge.location+re,Te/ge.locationSize,Je,le,B*nt,(_e+Te/ge.locationSize*re)*nt,xe)}else{if(Q.isInstancedBufferAttribute){for(let Ve=0;Ve<ge.locationSize;Ve++)A(ge.location+Ve,Q.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ve=0;Ve<ge.locationSize;Ve++)b(ge.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ve=0;Ve<ge.locationSize;Ve++)w(ge.location+Ve,Te/ge.locationSize,Je,le,Te*nt,Te/ge.locationSize*Ve*nt,xe)}}else if(se!==void 0){let le=se[oe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ge.location,le);break;case 3:i.vertexAttrib3fv(ge.location,le);break;case 4:i.vertexAttrib4fv(ge.location,le);break;default:i.vertexAttrib1fv(ge.location,le)}}}}R()}function _(){F();for(let T in o){let L=o[T];for(let z in L){let H=L[z];for(let $ in H)g(H[$].object),delete H[$];delete L[z]}delete o[T]}}function y(T){if(o[T.id]===void 0)return;let L=o[T.id];for(let z in L){let H=L[z];for(let $ in H)g(H[$].object),delete H[$];delete L[z]}delete o[T.id]}function D(T){for(let L in o){let z=o[L];if(z[T.id]===void 0)continue;let H=z[T.id];for(let $ in H)g(H[$].object),delete H[$];delete z[T.id]}}function F(){W(),h=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:W,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:b,disableUnusedAttributes:R}}function sg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function rg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,b=a||e.has("OES_texture_float"),A=v&&b,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:R}}function ag(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ii,o=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,v=M*4,b=f.clippingState||null;l.value=b,b=h(g,u,v,p);for(let A=0;A!==v;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=p;v!==x;++v,b+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function og(i){let e=new WeakMap;function t(a,o){return o===ts?a.mapping=Fs:o===hl&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ts||o===hl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _l(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vs=class extends Ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,Ah=[.125,.215,.35,.446,.526,.582],Ki=20,Ko=new Vs,Rh=new pt,Qo=null,el=0,tl=0,$i=(1+Math.sqrt(5))/2,As=1/$i,Ch=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,$i,As),new N(0,$i,-As),new N(As,0,$i),new N(-As,0,$i),new N($i,As,0),new N(-$i,As,0)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:mn,format:Tn,colorSpace:Bn,depthBuffer:!1},s=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s){let o=new xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Rh),h.toneMapping=Fi,h.autoClear=!1;let p=new Ai({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Xe(new ln,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Rh),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;ha(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ch[(s-1)%Ch.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Xe(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let f=[],M=0;for(let w=0;w<Ki;++w){let I=w/x,_=Math.exp(-I*I/2);f.push(_),w===0?M+=_:w<m&&(M+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let b=this._sizeLods[s],A=3*b*(s>v-Is?s-v+Is:0),R=4*(this._cubeSize-b);ha(t,A,R,3*b,2*b),l.setRenderTarget(t),l.render(d,Ko)}};function lg(i){let e=[],t=[],n=[],s=i,r=i-Is+1+Ah.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Is?l=Ah[a-i+Is-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,I=R>2?0:-1,_=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(_,x*g*R),v.set(u,m*g*R);let y=[R,R,R,R,R,R];b.set(y,f*g*R)}let A=new qt;A.setAttribute("position",new Gt(M,x)),A.setAttribute("uv",new Gt(v,m)),A.setAttribute("faceIndex",new Gt(b,f)),e.push(A),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cg(i,e,t){let n=new Float32Array(Ki),s=new N(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ih(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Lh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function hg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ts||l===hl,h=l===Fs||l===Bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Gs(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Gs(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let v=0,b=M.length;v<b;v+=3){let A=M[v+0],R=M[v+1],w=M[v+2];u.push(A,R,R,w,w,A)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,b=M.length/3-1;v<b;v+=3){let A=v+0,R=v+1,w=v+2;u.push(A,R,R,w,w,A)}}else return;let m=new(_u(u)?Pa:Hs)(u,1);m.version=x;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function fg(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function d(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),t.update(g,r,x)}function u(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function pg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,e){return i[0]-e[0]}function gg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _g(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new jt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let T=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],I=0;M===!0&&(I=1),v===!0&&(I=2),b===!0&&(I=3);let _=h.attributes.position.count*I,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let D=new Float32Array(_*y*4*g),F=new Aa(D,_,y,g);F.type=Ln,F.needsUpdate=!0;let W=I*4;for(let L=0;L<g;L++){let z=A[L],H=R[L],$=w[L],q=_*y*4*L;for(let se=0;se<z.count;se++){let oe=se*W;M===!0&&(a.fromBufferAttribute(z,se),D[q+oe+0]=a.x,D[q+oe+1]=a.y,D[q+oe+2]=a.z,D[q+oe+3]=0),v===!0&&(a.fromBufferAttribute(H,se),D[q+oe+4]=a.x,D[q+oe+5]=a.y,D[q+oe+6]=a.z,D[q+oe+7]=0),b===!0&&(a.fromBufferAttribute($,se),D[q+oe+8]=a.x,D[q+oe+9]=a.y,D[q+oe+10]=a.z,D[q+oe+11]=$.itemSize===4?a.w:1)}}x={count:g,texture:F,size:new de(_,y)},r.set(h,x),h.addEventListener("dispose",T)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let b=g[v];b[0]=v,b[1]=u[v]}g.sort(gg);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(mg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let b=o[v],A=b[0],R=b[1];A!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+v)!==x[A]&&h.setAttribute("morphTarget"+v,x[A]),m&&h.getAttribute("morphNormal"+v)!==m[A]&&h.setAttribute("morphNormal"+v,m[A]),s[v]=R,f+=R):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function xg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ws=class extends Un{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Qi,h!==Qi&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=Oi),n===void 0&&h===Hi&&(n=wi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mu=new Un,bu=new Ws(1,1);bu.compareFunction=mu;var Su=new Aa,Eu=new ml,wu=new La,Dh=[],Uh=[],Nh=new Float32Array(16),Oh=new Float32Array(9),Fh=new Float32Array(4);function $s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eo(i,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),un(t,n)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),un(t,n)}}function wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),un(t,n)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?bu:Mu;t.setTexture2D(e||r,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Eu,s)}function Og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wu,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Su,s)}function Bg(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return bg;case 35674:return Sg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}function zg(i,e){i.uniform1fv(this.addr,e)}function Hg(i,e){let t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function kg(i,e){let t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function Vg(i,e){let t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){let t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wg(i,e){let t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xg(i,e){let t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yg(i,e){i.uniform1iv(this.addr,e)}function qg(i,e){i.uniform2iv(this.addr,e)}function Zg(i,e){i.uniform3iv(this.addr,e)}function jg(i,e){i.uniform4iv(this.addr,e)}function Jg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Qg(i,e){i.uniform4uiv(this.addr,e)}function e0(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mu,r[a])}function t0(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eu,r[a])}function n0(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wu,r[a])}function i0(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Su,r[a])}function s0(i){switch(i){case 5126:return zg;case 35664:return Hg;case 35665:return kg;case 35666:return Vg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return qg;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}},vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function Bh(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bh(t,c===void 0?new xl(o,i,e):new vl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new yl(o),Bh(t,d)),t=d}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);r0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function zh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var a0=37297,o0=0;function l0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function c0(i){let e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(i),n;switch(e===t?n="":e===ba&&t===Ma?n="LinearDisplayP3ToLinearSRGB":e===Ma&&t===ba&&(n="LinearSRGBToLinearDisplayP3"),i){case Bn:case Qa:return[n,"LinearTransferOETF"];case Yt:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+l0(i.getShaderSource(e),a)}else return s}function h0(i,e){let t=c0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u0(i,e){let t;switch(e){case tc:t="Linear";break;case nc:t="Reinhard";break;case ic:t="OptimizedCineon";break;case Lr:t="ACESFilmic";break;case sc:t="AgX";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function p0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function kh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(g0,x0)}var _0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x0(i,e){let t=xt[e];if(t===void 0){let n=_0.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(v0,y0)}function y0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bs&&(e="ENVMAP_MODE_REFRACTION"),e}function E0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case gd:e="ENVMAP_BLENDING_MIX";break;case _d:e="ENVMAP_BLENDING_ADD";break}return e}function w0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=M0(t),c=b0(t),h=S0(t),d=E0(t),u=w0(t),p=t.isWebGL2?"":d0(t),g=f0(t),x=p0(r),m=s.createProgram(),f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),M.length>0&&(M+=`
`)):(f=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),M=[p,Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?xt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Ml(a),a=kh(a,t),a=Vh(a,t),o=Ml(o),o=kh(o,t),o=Vh(o,t),a=Gh(a),o=Gh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let b=v+f+a,A=v+M+o,R=zh(s,s.VERTEX_SHADER,b),w=zh(s,s.FRAGMENT_SHADER,A);s.attachShader(m,R),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(F){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),T=s.getShaderInfoLog(R).trim(),L=s.getShaderInfoLog(w).trim(),z=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,w);else{let $=Hh(s,R,"vertex"),q=Hh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+$+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(T===""||L==="")&&(H=!1);H&&(F.diagnostics={runnable:z,programLog:W,vertexShader:{log:T,prefix:f},fragmentShader:{log:L,prefix:M}})}s.deleteShader(R),s.deleteShader(w),_=new Os(s,m),y=m0(s,m)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,a0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}var A0=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sl(e),t.set(e,n)),n}},Sl=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function R0(i,e,t,n,s,r,a){let o=new Ca,l=new bl,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,y,D,F,W){let T=F.fog,L=W.geometry,z=_.isMeshStandardMaterial?F.environment:null,H=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),$=H&&H.mapping===Ka?H.image.height:null,q=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,oe=se!==void 0?se.length:0,ge=0;L.morphAttributes.position!==void 0&&(ge=1),L.morphAttributes.normal!==void 0&&(ge=2),L.morphAttributes.color!==void 0&&(ge=3);let Q,le,Te,ke;if(q){let dn=ui[q];Q=dn.vertexShader,le=dn.fragmentShader}else Q=_.vertexShader,le=_.fragmentShader,l.update(_),Te=l.getVertexShaderID(_),ke=l.getFragmentShaderID(_);let Le=i.getRenderTarget(),Je=W.isInstancedMesh===!0,nt=W.isBatchedMesh===!0,xe=!!_.map,Ve=!!_.matcap,B=!!H,_e=!!_.aoMap,re=!!_.lightMap,he=!!_.bumpMap,ee=!!_.normalMap,Ye=!!_.displacementMap,Ie=!!_.emissiveMap,E=!!_.metalnessMap,S=!!_.roughnessMap,Y=_.anisotropy>0,fe=_.clearcoat>0,pe=_.iridescence>0,ce=_.sheen>0,He=_.transmission>0,Pe=Y&&!!_.anisotropyMap,De=fe&&!!_.clearcoatMap,Ze=fe&&!!_.clearcoatNormalMap,lt=fe&&!!_.clearcoatRoughnessMap,ae=pe&&!!_.iridescenceMap,ht=pe&&!!_.iridescenceThicknessMap,O=ce&&!!_.sheenColorMap,me=ce&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Me=!!_.specularColorMap,$e=!!_.specularIntensityMap,ft=He&&!!_.transmissionMap,mt=He&&!!_.thicknessMap,ut=!!_.gradientMap,be=!!_.alphaMap,V=_.alphaTest>0,Se=!!_.alphaHash,Ae=!!_.extensions,st=!!L.attributes.uv1,et=!!L.attributes.uv2,Pt=!!L.attributes.uv3,Lt=Fi;return _.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Lt=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:le,defines:_.defines,customVertexShaderID:Te,customFragmentShaderID:ke,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:nt,instancing:Je,instancingColor:Je&&W.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Bn,map:xe,matcap:Ve,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:$,aoMap:_e,lightMap:re,bumpMap:he,normalMap:ee,displacementMap:u&&Ye,emissiveMap:Ie,normalMapObjectSpace:ee&&_.normalMapType===Pd,normalMapTangentSpace:ee&&_.normalMapType===ac,metalnessMap:E,roughnessMap:S,anisotropy:Y,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:De,clearcoatNormalMap:Ze,clearcoatRoughnessMap:lt,iridescence:pe,iridescenceMap:ae,iridescenceThicknessMap:ht,sheen:ce,sheenColorMap:O,sheenRoughnessMap:me,specularMap:Re,specularColorMap:Me,specularIntensityMap:$e,transmission:He,transmissionMap:ft,thicknessMap:mt,gradientMap:ut,opaque:_.transparent===!1&&_.blending===Us,alphaMap:be,alphaTest:V,alphaHash:Se,combine:_.combine,mapUv:xe&&x(_.map.channel),aoMapUv:_e&&x(_.aoMap.channel),lightMapUv:re&&x(_.lightMap.channel),bumpMapUv:he&&x(_.bumpMap.channel),normalMapUv:ee&&x(_.normalMap.channel),displacementMapUv:Ye&&x(_.displacementMap.channel),emissiveMapUv:Ie&&x(_.emissiveMap.channel),metalnessMapUv:E&&x(_.metalnessMap.channel),roughnessMapUv:S&&x(_.roughnessMap.channel),anisotropyMapUv:Pe&&x(_.anisotropyMap.channel),clearcoatMapUv:De&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:O&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(_.sheenRoughnessMap.channel),specularMapUv:Re&&x(_.specularMap.channel),specularColorMapUv:Me&&x(_.specularColorMap.channel),specularIntensityMapUv:$e&&x(_.specularIntensityMap.channel),transmissionMapUv:ft&&x(_.transmissionMap.channel),thicknessMapUv:mt&&x(_.thicknessMap.channel),alphaMapUv:be&&x(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ee||Y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:et,vertexUv3s:Pt,pointsUvs:W.isPoints===!0&&!!L.attributes.uv&&(xe||be),fog:!!T,useFog:_.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===Vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Ae&&_.extensions.derivatives===!0,extensionFragDepth:Ae&&_.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(M(y,_),v(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function v(_,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function b(_){let y=g[_.type],D;if(y){let F=ui[y];D=ai.clone(F.uniforms)}else D=_.uniforms;return D}function A(_,y){let D;for(let F=0,W=c.length;F<W;F++){let T=c[F];if(T.cacheKey===y){D=T,++D.usedTimes;break}}return D===void 0&&(D=new T0(i,y,_,r),c.push(D)),D}function R(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),_.destroy()}}function w(_){l.remove(_)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:I}}function C0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function P0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,p,g,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,u,p,g,x,m){let f=a(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,x,m){let f=a(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||P0),n.length>1&&n.sort(u||Xh),s.length>1&&s.sort(u||Xh)}function h(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function I0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Yh,i.set(n,[a])):s>=r.length?(a=new Yh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new pt};break;case"SpotLight":t={position:new N,direction:new N,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function N0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i,e){let t=new L0,n=D0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new Ut,o=new Ut;function l(h,d){let u=0,p=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,f=0,M=0,v=0,b=0,A=0,R=0,w=0,I=0,_=0;h.sort(N0);let y=d===!0?Math.PI:1;for(let F=0,W=h.length;F<W;F++){let T=h[F],L=T.color,z=T.intensity,H=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=L.r*z*y,p+=L.g*z*y,g+=L.b*z*y;else if(T.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(T.sh.coefficients[q],z);_++}else if(T.isDirectionalLight){let q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*y),T.castShadow){let se=T.shadow,oe=n.get(T);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,s.directionalShadow[x]=oe,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=T.shadow.matrix,b++}s.directional[x]=q,x++}else if(T.isSpotLight){let q=t.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(L).multiplyScalar(z*y),q.distance=H,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,s.spot[f]=q;let se=T.shadow;if(T.map&&(s.spotLightMap[w]=T.map,w++,se.updateMatrices(T),T.castShadow&&I++),s.spotLightMatrix[f]=se.matrix,T.castShadow){let oe=n.get(T);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,s.spotShadow[f]=oe,s.spotShadowMap[f]=$,R++}f++}else if(T.isRectAreaLight){let q=t.get(T);q.color.copy(L).multiplyScalar(z),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),s.rectArea[M]=q,M++}else if(T.isPointLight){let q=t.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*y),q.distance=T.distance,q.decay=T.decay,T.castShadow){let se=T.shadow,oe=n.get(T);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,oe.shadowCameraNear=se.camera.near,oe.shadowCameraFar=se.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=T.shadow.matrix,A++}s.point[m]=q,m++}else if(T.isHemisphereLight){let q=t.get(T);q.skyColor.copy(T.color).multiplyScalar(z*y),q.groundColor.copy(T.groundColor).multiplyScalar(z*y),s.hemi[v]=q,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==M||D.hemiLength!==v||D.numDirectionalShadows!==b||D.numPointShadows!==A||D.numSpotShadows!==R||D.numSpotMaps!==w||D.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+w-I,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=_,D.directionalLength=x,D.pointLength=m,D.spotLength=f,D.rectAreaLength=M,D.hemiLength=v,D.numDirectionalShadows=b,D.numPointShadows=A,D.numSpotShadows=R,D.numSpotMaps=w,D.numLightProbes=_,s.version=U0++)}function c(h,d){let u=0,p=0,g=0,x=0,m=0,f=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let b=h[M];if(b.isDirectionalLight){let A=s.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),u++}else if(b.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let A=s.rectArea[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let A=s.point[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function qh(i,e){let t=new O0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function F0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new qh(i,e),t.set(r,[l])):a>=o.length?(l=new qh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var El=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`;function H0(i,e,t){let n=new br,s=new de,r=new de,a=new jt,o=new El({depthPacking:Cd}),l=new wl,c={},h=t.maxTextureSize,d={[zi]:yn,[yn]:zi,[vn]:vn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let f=this.type;this.render=function(R,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(on),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=f!==bi&&this.type===bi,T=f===bi&&this.type!==bi;for(let L=0,z=R.length;L<z;L++){let H=R[L],$=H.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let q=$.getFrameExtents();if(s.multiply(q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,$.mapSize.y=r.y)),$.map===null||W===!0||T===!0){let oe=this.type!==bi?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new Mn(s.x,s.y,oe),$.map.texture.name=H.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let se=$.getViewportCount();for(let oe=0;oe<se;oe++){let ge=$.getViewport(oe);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(a),$.updateMatrices(H,oe),n=$.getFrustum(),b(w,I,$.camera,H,this.type)}$.isPointLightShadow!==!0&&this.type===bi&&M($,I),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,y,D)};function M(R,w){let I=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mn(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,I,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,I,p,x,null)}function v(R,w,I,_){let y=null,D=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=y.uuid,W=w.uuid,T=c[F];T===void 0&&(T={},c[F]=T);let L=T[W];L===void 0&&(L=y.clone(),T[W]=L,w.addEventListener("dispose",A)),y=L}if(y.visible=w.visible,y.wireframe=w.wireframe,_===bi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=i.properties.get(y);F.light=I}return y}function b(R,w,I,_,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===bi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let W=e.update(R),T=R.material;if(Array.isArray(T)){let L=W.groups;for(let z=0,H=L.length;z<H;z++){let $=L[z],q=T[$.materialIndex];if(q&&q.visible){let se=v(R,q,_,y);R.onBeforeShadow(i,R,w,I,W,se,$),i.renderBufferDirect(I,null,W,se,R,$),R.onAfterShadow(i,R,w,I,W,se,$)}}}else if(T.visible){let L=v(R,T,_,y);R.onBeforeShadow(i,R,w,I,W,L,null),i.renderBufferDirect(I,null,W,L,R,null),R.onAfterShadow(i,R,w,I,W,L,null)}}let F=R.children;for(let W=0,T=F.length;W<T;W++)b(F[W],w,I,_,y)}function A(R){R.target.removeEventListener("dispose",A);for(let I in c){let _=c[I],y=R.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function k0(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Se=new jt,Ae=null,st=new jt(0,0,0,0);return{setMask:function(et){Ae!==et&&!V&&(i.colorMask(et,et,et,et),Ae=et)},setLocked:function(et){V=et},setClear:function(et,Pt,Lt,tn,dn){dn===!0&&(et*=tn,Pt*=tn,Lt*=tn),Se.set(et,Pt,Lt,tn),st.equals(Se)===!1&&(i.clearColor(et,Pt,Lt,tn),st.copy(Se))},reset:function(){V=!1,Ae=null,st.set(-1,0,0,0)}}}function r(){let V=!1,Se=null,Ae=null,st=null;return{setTest:function(et){et?nt(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(et){Se!==et&&!V&&(i.depthMask(et),Se=et)},setFunc:function(et){if(Ae!==et){switch(et){case cd:i.depthFunc(i.NEVER);break;case hd:i.depthFunc(i.ALWAYS);break;case ud:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case dd:i.depthFunc(i.EQUAL);break;case fd:i.depthFunc(i.GEQUAL);break;case pd:i.depthFunc(i.GREATER);break;case md:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=et}},setLocked:function(et){V=et},setClear:function(et){st!==et&&(i.clearDepth(et),st=et)},reset:function(){V=!1,Se=null,Ae=null,st=null}}}function a(){let V=!1,Se=null,Ae=null,st=null,et=null,Pt=null,Lt=null,tn=null,dn=null;return{setTest:function(zt){V||(zt?nt(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(zt){Se!==zt&&!V&&(i.stencilMask(zt),Se=zt)},setFunc:function(zt,pn,Vn){(Ae!==zt||st!==pn||et!==Vn)&&(i.stencilFunc(zt,pn,Vn),Ae=zt,st=pn,et=Vn)},setOp:function(zt,pn,Vn){(Pt!==zt||Lt!==pn||tn!==Vn)&&(i.stencilOp(zt,pn,Vn),Pt=zt,Lt=pn,tn=Vn)},setLocked:function(zt){V=zt},setClear:function(zt){dn!==zt&&(i.clearStencil(zt),dn=zt)},reset:function(){V=!1,Se=null,Ae=null,st=null,et=null,Pt=null,Lt=null,tn=null,dn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,v=null,b=null,A=null,R=null,w=null,I=null,_=new pt(0,0,0),y=0,D=!1,F=null,W=null,T=null,L=null,z=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,q=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(se)[1]),$=q>=1):se.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),$=q>=2);let oe=null,ge={},Q=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Te=new jt().fromArray(Q),ke=new jt().fromArray(le);function Le(V,Se,Ae,st){let et=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(V,Pt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Ae;Lt++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Se+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Pt}let Je={};Je[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),Je[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Je[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Je[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),nt(i.DEPTH_TEST),l.setFunc(_a),Ie(!1),E(Ac),nt(i.CULL_FACE),ee(on);function nt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function xe(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ve(V,Se){return p[V]!==Se?(i.bindFramebuffer(V,Se),p[V]=Se,n&&(V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Se),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function B(V,Se){let Ae=x,st=!1;if(V)if(Ae=g.get(Se),Ae===void 0&&(Ae=[],g.set(Se,Ae)),V.isWebGLMultipleRenderTargets){let et=V.texture;if(Ae.length!==et.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Lt=et.length;Pt<Lt;Pt++)Ae[Pt]=i.COLOR_ATTACHMENT0+Pt;Ae.length=et.length,st=!0}}else Ae[0]!==i.COLOR_ATTACHMENT0&&(Ae[0]=i.COLOR_ATTACHMENT0,st=!0);else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,st=!0);st&&(t.isWebGL2?i.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function _e(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let re={[Wn]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Ku]:i.FUNC_REVERSE_SUBTRACT};if(n)re[Pc]=i.MIN,re[Ic]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(re[Pc]=V.MIN_EXT,re[Ic]=V.MAX_EXT)}let he={[Js]:i.ZERO,[Qu]:i.ONE,[ed]:i.SRC_COLOR,[ll]:i.SRC_ALPHA,[sd]:i.SRC_ALPHA_SATURATE,[$a]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[cl]:i.ONE_MINUS_SRC_ALPHA,[id]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ld]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(V,Se,Ae,st,et,Pt,Lt,tn,dn,zt){if(V===on){f===!0&&(xe(i.BLEND),f=!1);return}if(f===!1&&(nt(i.BLEND),f=!0),V!==ec){if(V!==M||zt!==D){if((v!==Wn||R!==Wn)&&(i.blendEquation(i.FUNC_ADD),v=Wn,R=Wn),zt)switch(V){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,A=null,w=null,I=null,_.set(0,0,0),y=0,M=V,D=zt}return}et=et||Se,Pt=Pt||Ae,Lt=Lt||st,(Se!==v||et!==R)&&(i.blendEquationSeparate(re[Se],re[et]),v=Se,R=et),(Ae!==b||st!==A||Pt!==w||Lt!==I)&&(i.blendFuncSeparate(he[Ae],he[st],he[Pt],he[Lt]),b=Ae,A=st,w=Pt,I=Lt),(tn.equals(_)===!1||dn!==y)&&(i.blendColor(tn.r,tn.g,tn.b,dn),_.copy(tn),y=dn),M=V,D=!1}function Ye(V,Se){V.side===vn?xe(i.CULL_FACE):nt(i.CULL_FACE);let Ae=V.side===yn;Se&&(Ae=!Ae),Ie(Ae),V.blending===Us&&V.transparent===!1?ee(on):ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let st=V.stencilWrite;c.setTest(st),st&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Y(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(V){F!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),F=V)}function E(V){V!==ju?(nt(i.CULL_FACE),V!==W&&(V===Ac?i.cullFace(i.BACK):V===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),W=V}function S(V){V!==T&&($&&i.lineWidth(V),T=V)}function Y(V,Se,Ae){V?(nt(i.POLYGON_OFFSET_FILL),(L!==Se||z!==Ae)&&(i.polygonOffset(Se,Ae),L=Se,z=Ae)):xe(i.POLYGON_OFFSET_FILL)}function fe(V){V?nt(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pe(V){V===void 0&&(V=i.TEXTURE0+H-1),oe!==V&&(i.activeTexture(V),oe=V)}function ce(V,Se,Ae){Ae===void 0&&(oe===null?Ae=i.TEXTURE0+H-1:Ae=oe);let st=ge[Ae];st===void 0&&(st={type:void 0,texture:void 0},ge[Ae]=st),(st.type!==V||st.texture!==Se)&&(oe!==Ae&&(i.activeTexture(Ae),oe=Ae),i.bindTexture(V,Se||Je[V]),st.type=V,st.texture=Se)}function He(){let V=ge[oe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(V){Te.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function ft(V){ke.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function mt(V,Se){let Ae=d.get(Se);Ae===void 0&&(Ae=new WeakMap,d.set(Se,Ae));let st=Ae.get(V);st===void 0&&(st=i.getUniformBlockIndex(Se,V.name),Ae.set(V,st))}function ut(V,Se){let st=d.get(Se).get(V);h.get(Se)!==st&&(i.uniformBlockBinding(Se,st,V.__bindingPointIndex),h.set(Se,st))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,ge={},p={},g=new WeakMap,x=[],m=null,f=!1,M=null,v=null,b=null,A=null,R=null,w=null,I=null,_=new pt(0,0,0),y=0,D=!1,F=null,W=null,T=null,L=null,z=null,Te.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:nt,disable:xe,bindFramebuffer:Ve,drawBuffers:B,useProgram:_e,setBlending:ee,setMaterial:Ye,setFlipSided:Ie,setCullFace:E,setLineWidth:S,setPolygonOffset:Y,setScissorTest:fe,activeTexture:pe,bindTexture:ce,unbindTexture:He,compressedTexImage2D:Pe,compressedTexImage3D:De,texImage2D:Re,texImage3D:Me,updateUBOMapping:mt,uniformBlockBinding:ut,texStorage2D:O,texStorage3D:me,texSubImage2D:Ze,texSubImage3D:lt,compressedTexSubImage2D:ae,compressedTexSubImage3D:ht,scissor:$e,viewport:ft,reset:be}}function V0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return p?new OffscreenCanvas(E,S):yr("canvas")}function x(E,S,Y,fe){let pe=1;if((E.width>fe||E.height>fe)&&(pe=fe/Math.max(E.width,E.height)),pe<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ce=S?Ea:Math.floor,He=ce(pe*E.width),Pe=ce(pe*E.height);d===void 0&&(d=g(He,Pe));let De=Y?g(He,Pe):d;return De.width=He,De.height=Pe,De.getContext("2d").drawImage(E,0,0,He,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+He+"x"+Pe+")."),De}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return fl(E.width)&&fl(E.height)}function f(E){return o?!1:E.wrapS!==Fn||E.wrapT!==Fn||E.minFilter!==sn&&E.minFilter!==rn}function M(E,S){return E.generateMipmaps&&S&&E.minFilter!==sn&&E.minFilter!==rn}function v(E){i.generateMipmap(E)}function b(E,S,Y,fe,pe=!1){if(o===!1)return S;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=S;if(S===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),S===i.RGBA){let He=pe?ya:Bt.getTransfer(fe);Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=He===Vt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(E,S,Y){return M(E,Y)===!0||E.isFramebufferTexture&&E.minFilter!==sn&&E.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){return E===sn||E===Lc||E===Ro?i.NEAREST:i.LINEAR}function w(E){let S=E.target;S.removeEventListener("dispose",w),_(S),S.isVideoTexture&&h.delete(S)}function I(E){let S=E.target;S.removeEventListener("dispose",I),D(S)}function _(E){let S=n.get(E);if(S.__webglInit===void 0)return;let Y=E.source,fe=u.get(Y);if(fe){let pe=fe[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&y(E),Object.keys(fe).length===0&&u.delete(Y)}n.remove(E)}function y(E){let S=n.get(E);i.deleteTexture(S.__webglTexture);let Y=E.source,fe=u.get(Y);delete fe[S.__cacheKey],a.memory.textures--}function D(E){let S=E.texture,Y=n.get(E),fe=n.get(S);if(fe.__webglTexture!==void 0&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Y.__webglFramebuffer[pe]))for(let ce=0;ce<Y.__webglFramebuffer[pe].length;ce++)i.deleteFramebuffer(Y.__webglFramebuffer[pe][ce]);else i.deleteFramebuffer(Y.__webglFramebuffer[pe]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[pe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let pe=0;pe<Y.__webglFramebuffer.length;pe++)i.deleteFramebuffer(Y.__webglFramebuffer[pe]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let pe=0;pe<Y.__webglColorRenderbuffer.length;pe++)Y.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[pe]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let pe=0,ce=S.length;pe<ce;pe++){let He=n.get(S[pe]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),a.memory.textures--),n.remove(S[pe])}n.remove(S),n.remove(E)}let F=0;function W(){F=0}function T(){let E=F;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function L(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function z(E,S){let Y=n.get(E);if(E.isVideoTexture&&Ye(E),E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){let fe=E.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,E,S);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function H(E,S){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){Te(Y,E,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function $(E,S){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){Te(Y,E,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function q(E,S){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){ke(Y,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let se={[Dn]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},oe={[sn]:i.NEAREST,[Lc]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[vd]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},ge={[Id]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[mu]:i.LEQUAL,[Dd]:i.EQUAL,[Od]:i.GEQUAL,[Ud]:i.GREATER,[Nd]:i.NOTEQUAL};function Q(E,S,Y){if(Y?(i.texParameteri(E,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,oe[S.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Fn||S.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==sn&&S.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Ro&&S.minFilter!==zs||S.type===Ln&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===mn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(E,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function le(E,S){let Y=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));let fe=S.source,pe=u.get(fe);pe===void 0&&(pe={},u.set(fe,pe));let ce=L(S);if(ce!==E.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),pe[ce].usedTimes++;let He=pe[E.__cacheKey];He!==void 0&&(pe[E.__cacheKey].usedTimes--,He.usedTimes===0&&y(S)),E.__cacheKey=ce,E.__webglTexture=pe[ce].texture}return Y}function Te(E,S,Y){let fe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=i.TEXTURE_3D);let pe=le(E,S),ce=S.source;t.bindTexture(fe,E.__webglTexture,i.TEXTURE0+Y);let He=n.get(ce);if(ce.version!==He.__version||pe===!0){t.activeTexture(i.TEXTURE0+Y);let Pe=Bt.getPrimaries(Bt.workingColorSpace),De=S.colorSpace===In?null:Bt.getPrimaries(S.colorSpace),Ze=S.colorSpace===In||Pe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let lt=f(S)&&m(S.image)===!1,ae=x(S.image,lt,!1,s.maxTextureSize);ae=Ie(S,ae);let ht=m(ae)||o,O=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Re=b(S.internalFormat,O,me,S.colorSpace,S.isVideoTexture);Q(fe,S,ht);let Me,$e=S.mipmaps,ft=o&&S.isVideoTexture!==!0&&Re!==fu,mt=He.__version===void 0||pe===!0,ut=A(S,ae,ht);if(S.isDepthTexture)Re=i.DEPTH_COMPONENT,o?S.type===Ln?Re=i.DEPTH_COMPONENT32F:S.type===Oi?Re=i.DEPTH_COMPONENT24:S.type===wi?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:S.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Qi&&Re===i.DEPTH_COMPONENT&&S.type!==rc&&S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Oi,me=r.convert(S.type)),S.format===Hi&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wi,me=r.convert(S.type))),mt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Re,ae.width,ae.height,0,O,me,null));else if(S.isDataTexture)if($e.length>0&&ht){ft&&mt&&t.texStorage2D(i.TEXTURE_2D,ut,Re,$e[0].width,$e[0].height);for(let be=0,V=$e.length;be<V;be++)Me=$e[be],ft?t.texSubImage2D(i.TEXTURE_2D,be,0,0,Me.width,Me.height,O,me,Me.data):t.texImage2D(i.TEXTURE_2D,be,Re,Me.width,Me.height,0,O,me,Me.data);S.generateMipmaps=!1}else ft?(mt&&t.texStorage2D(i.TEXTURE_2D,ut,Re,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,O,me,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ae.width,ae.height,0,O,me,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Re,$e[0].width,$e[0].height,ae.depth);for(let be=0,V=$e.length;be<V;be++)Me=$e[be],S.format!==Tn?O!==null?ft?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,Me.width,Me.height,ae.depth,O,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,Re,Me.width,Me.height,ae.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,Me.width,Me.height,ae.depth,O,me,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,Re,Me.width,Me.height,ae.depth,0,O,me,Me.data)}else{ft&&mt&&t.texStorage2D(i.TEXTURE_2D,ut,Re,$e[0].width,$e[0].height);for(let be=0,V=$e.length;be<V;be++)Me=$e[be],S.format!==Tn?O!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,Me.width,Me.height,O,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,be,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(i.TEXTURE_2D,be,0,0,Me.width,Me.height,O,me,Me.data):t.texImage2D(i.TEXTURE_2D,be,Re,Me.width,Me.height,0,O,me,Me.data)}else if(S.isDataArrayTexture)ft?(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Re,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,O,me,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,O,me,ae.data);else if(S.isData3DTexture)ft?(mt&&t.texStorage3D(i.TEXTURE_3D,ut,Re,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,O,me,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,O,me,ae.data);else if(S.isFramebufferTexture){if(mt)if(ft)t.texStorage2D(i.TEXTURE_2D,ut,Re,ae.width,ae.height);else{let be=ae.width,V=ae.height;for(let Se=0;Se<ut;Se++)t.texImage2D(i.TEXTURE_2D,Se,Re,be,V,0,O,me,null),be>>=1,V>>=1}}else if($e.length>0&&ht){ft&&mt&&t.texStorage2D(i.TEXTURE_2D,ut,Re,$e[0].width,$e[0].height);for(let be=0,V=$e.length;be<V;be++)Me=$e[be],ft?t.texSubImage2D(i.TEXTURE_2D,be,0,0,O,me,Me):t.texImage2D(i.TEXTURE_2D,be,Re,O,me,Me);S.generateMipmaps=!1}else ft?(mt&&t.texStorage2D(i.TEXTURE_2D,ut,Re,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O,me,ae)):t.texImage2D(i.TEXTURE_2D,0,Re,O,me,ae);M(S,ht)&&v(fe),He.__version=ce.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ke(E,S,Y){if(S.image.length!==6)return;let fe=le(E,S),pe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+Y);let ce=n.get(pe);if(pe.version!==ce.__version||fe===!0){t.activeTexture(i.TEXTURE0+Y);let He=Bt.getPrimaries(Bt.workingColorSpace),Pe=S.colorSpace===In?null:Bt.getPrimaries(S.colorSpace),De=S.colorSpace===In||He===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let be=0;be<6;be++)!Ze&&!lt?ae[be]=x(S.image[be],!1,!0,s.maxCubemapSize):ae[be]=lt?S.image[be].image:S.image[be],ae[be]=Ie(S,ae[be]);let ht=ae[0],O=m(ht)||o,me=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),Me=b(S.internalFormat,me,Re,S.colorSpace),$e=o&&S.isVideoTexture!==!0,ft=ce.__version===void 0||fe===!0,mt=A(S,ht,O);Q(i.TEXTURE_CUBE_MAP,S,O);let ut;if(Ze){$e&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Me,ht.width,ht.height);for(let be=0;be<6;be++){ut=ae[be].mipmaps;for(let V=0;V<ut.length;V++){let Se=ut[V];S.format!==Tn?me!==null?$e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V,0,0,Se.width,Se.height,me,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V,0,0,Se.width,Se.height,me,Re,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V,Me,Se.width,Se.height,0,me,Re,Se.data)}}}else{ut=S.mipmaps,$e&&ft&&(ut.length>0&&mt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Me,ae[0].width,ae[0].height));for(let be=0;be<6;be++)if(lt){$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ae[be].width,ae[be].height,me,Re,ae[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Me,ae[be].width,ae[be].height,0,me,Re,ae[be].data);for(let V=0;V<ut.length;V++){let Ae=ut[V].image[be].image;$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V+1,0,0,Ae.width,Ae.height,me,Re,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V+1,Me,Ae.width,Ae.height,0,me,Re,Ae.data)}}else{$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,Re,ae[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Me,me,Re,ae[be]);for(let V=0;V<ut.length;V++){let Se=ut[V];$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V+1,0,0,me,Re,Se.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,V+1,Me,me,Re,Se.image[be])}}}M(S,O)&&v(i.TEXTURE_CUBE_MAP),ce.__version=pe.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Le(E,S,Y,fe,pe,ce){let He=r.convert(Y.format,Y.colorSpace),Pe=r.convert(Y.type),De=b(Y.internalFormat,He,Pe,Y.colorSpace);if(!n.get(S).__hasExternalTextures){let lt=Math.max(1,S.width>>ce),ae=Math.max(1,S.height>>ce);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,De,lt,ae,S.depth,0,He,Pe,null):t.texImage2D(pe,ce,De,lt,ae,0,He,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ee(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,pe,n.get(Y).__webglTexture,0,he(S)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,pe,n.get(Y).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(E,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let fe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ee(S)){let pe=S.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Ln?fe=i.DEPTH_COMPONENT32F:pe.type===Oi&&(fe=i.DEPTH_COMPONENT24));let ce=he(S);ee(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,fe,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,fe,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){let fe=he(S);Y&&ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,S.width,S.height):ee(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let fe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let pe=0;pe<fe.length;pe++){let ce=fe[pe],He=r.convert(ce.format,ce.colorSpace),Pe=r.convert(ce.type),De=b(ce.internalFormat,He,Pe,ce.colorSpace),Ze=he(S);Y&&ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,De,S.width,S.height):ee(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,De,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,De,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let fe=n.get(S.depthTexture).__webglTexture,pe=he(S);if(S.depthTexture.format===Qi)ee(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(S.depthTexture.format===Hi)ee(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function xe(E){let S=n.get(E),Y=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,E)}else if(Y){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]=i.createRenderbuffer(),Je(S.__webglDepthbuffer[fe],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Je(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(E,S,Y){let fe=n.get(E);S!==void 0&&Le(fe.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&xe(E)}function B(E){let S=E.texture,Y=n.get(E),fe=n.get(S);E.addEventListener("dispose",I),E.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=S.version,a.memory.textures++);let pe=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,He=m(E)||o;if(pe){Y.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Pe]=[];for(let De=0;De<S.mipmaps.length;De++)Y.__webglFramebuffer[Pe][De]=i.createFramebuffer()}else Y.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)Y.__webglFramebuffer[Pe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let Pe=E.texture;for(let De=0,Ze=Pe.length;De<Ze;De++){let lt=n.get(Pe[De]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ee(E)===!1){let Pe=ce?S:[S];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let De=0;De<Pe.length;De++){let Ze=Pe[De];Y.__webglColorRenderbuffer[De]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[De]);let lt=r.convert(Ze.format,Ze.colorSpace),ae=r.convert(Ze.type),ht=b(Ze.internalFormat,lt,ae,Ze.colorSpace,E.isXRRenderTarget===!0),O=he(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,O,ht,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Y.__webglColorRenderbuffer[De])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(Y.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,S,He);for(let Pe=0;Pe<6;Pe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)Le(Y.__webglFramebuffer[Pe][De],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,De);else Le(Y.__webglFramebuffer[Pe],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);M(S,He)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let Pe=E.texture;for(let De=0,Ze=Pe.length;De<Ze;De++){let lt=Pe[De],ae=n.get(lt);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Q(i.TEXTURE_2D,lt,He),Le(Y.__webglFramebuffer,E,lt,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,0),M(lt,He)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?Pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,fe.__webglTexture),Q(Pe,S,He),o&&S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)Le(Y.__webglFramebuffer[De],E,S,i.COLOR_ATTACHMENT0,Pe,De);else Le(Y.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,Pe,0);M(S,He)&&v(Pe),t.unbindTexture()}E.depthBuffer&&xe(E)}function _e(E){let S=m(E)||o,Y=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let fe=0,pe=Y.length;fe<pe;fe++){let ce=Y[fe];if(M(ce,S)){let He=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ce).__webglTexture;t.bindTexture(He,Pe),v(He),t.unbindTexture()}}}function re(E){if(o&&E.samples>0&&ee(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],Y=E.width,fe=E.height,pe=i.COLOR_BUFFER_BIT,ce=[],He=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(E),De=E.isWebGLMultipleRenderTargets===!0;if(De)for(let Ze=0;Ze<S.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ze=0;Ze<S.length;Ze++){ce.push(i.COLOR_ATTACHMENT0+Ze),E.depthBuffer&&ce.push(He);let lt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(lt===!1&&(E.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),De&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ze]),lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),De){let ae=n.get(S[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,pe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),De)for(let Ze=0;Ze<S.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ze]);let lt=n.get(S[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function he(E){return Math.min(s.maxSamples,E.samples)}function ee(E){let S=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ye(E){let S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ie(E,S){let Y=E.colorSpace,fe=E.format,pe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===dl||Y!==Bn&&Y!==In&&(Bt.getTransfer(Y)===Vt?o===!1?e.has("EXT_sRGB")===!0&&fe===Tn?(E.format=dl,E.minFilter=rn,E.generateMipmaps=!1):S=wa.sRGBToLinear(S):(fe!==Tn||pe!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}this.allocateTextureUnit=T,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=B,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ee}function G0(i,e,t){let n=t.isWebGL2;function s(r,a=In){let o,l=Bt.getTransfer(a);if(r===di)return i.UNSIGNED_BYTE;if(r===lu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yd)return i.BYTE;if(r===Md)return i.SHORT;if(r===rc)return i.UNSIGNED_SHORT;if(r===ou)return i.INT;if(r===Oi)return i.UNSIGNED_INT;if(r===Ln)return i.FLOAT;if(r===mn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bd)return i.ALPHA;if(r===Tn)return i.RGBA;if(r===Sd)return i.LUMINANCE;if(r===Ed)return i.LUMINANCE_ALPHA;if(r===Qi)return i.DEPTH_COMPONENT;if(r===Hi)return i.DEPTH_STENCIL;if(r===dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===wd)return i.RED;if(r===hu)return i.RED_INTEGER;if(r===Td)return i.RG;if(r===uu)return i.RG_INTEGER;if(r===du)return i.RGBA_INTEGER;if(r===Co||r===Po||r===Io||r===Lo)if(l===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Io)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dc||r===Uc||r===Nc||r===Oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Dc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fc||r===Bc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fc)return l===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zc||r===Hc||r===kc||r===Vc||r===Gc||r===Wc||r===Xc||r===Yc||r===qc||r===Zc||r===jc||r===Jc||r===$c||r===Kc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$c)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Do||r===Qc||r===eh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Do)return l===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===eh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ad||r===th||r===nh||r===ih)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Do)return o.COMPRESSED_RED_RGTC1_EXT;if(r===th)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ih)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Tl=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Al=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=t.getContextAttributes(),m=null,f=null,M=[],v=[],b=new de,A=null,R=new xn;R.layers.enable(1),R.viewport=new jt;let w=new xn;w.layers.enable(2),w.viewport=new jt;let I=[R,w],_=new Tl;_.layers.enable(1),_.layers.enable(2);let y=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=M[Q];return le===void 0&&(le=new gr,M[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=M[Q];return le===void 0&&(le=new gr,M[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=M[Q];return le===void 0&&(le=new gr,M[Q]=le),le.getHandSpace()};function F(Q){let le=v.indexOf(Q.inputSource);if(le===-1)return;let Te=M[le];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,c||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",T);for(let Q=0;Q<M.length;Q++){let le=v[Q];le!==null&&(v[Q]=null,M[Q].disconnect(le))}y=null,D=null,e.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Mn(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,Te=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Hi:Qi,Te=x.stencil?wi:Oi);let Le={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Mn(u.textureWidth,u.textureHeight,{format:Tn,type:di,depthTexture:new Ws(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Je=e.properties.get(f);Je.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T(Q){for(let le=0;le<Q.removed.length;le++){let Te=Q.removed[le],ke=v.indexOf(Te);ke>=0&&(v[ke]=null,M[ke].disconnect(Te))}for(let le=0;le<Q.added.length;le++){let Te=Q.added[le],ke=v.indexOf(Te);if(ke===-1){for(let Je=0;Je<M.length;Je++)if(Je>=v.length){v.push(Te),ke=Je;break}else if(v[Je]===null){v[Je]=Te,ke=Je;break}if(ke===-1)break}let Le=M[ke];Le&&Le.connect(Te)}}let L=new N,z=new N;function H(Q,le,Te){L.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(Te.matrixWorld);let ke=L.distanceTo(z),Le=le.projectionMatrix.elements,Je=Te.projectionMatrix.elements,nt=Le[14]/(Le[10]-1),xe=Le[14]/(Le[10]+1),Ve=(Le[9]+1)/Le[5],B=(Le[9]-1)/Le[5],_e=(Le[8]-1)/Le[0],re=(Je[8]+1)/Je[0],he=nt*_e,ee=nt*re,Ye=ke/(-_e+re),Ie=Ye*-_e;le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ie),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let E=nt+Ye,S=xe+Ye,Y=he-Ie,fe=ee+(ke-Ie),pe=Ve*xe/S*E,ce=B*xe/S*E;Q.projectionMatrix.makePerspective(Y,fe,pe,ce,E,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function $(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;_.near=w.near=R.near=Q.near,_.far=w.far=R.far=Q.far,(y!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,D=_.far);let le=Q.parent,Te=_.cameras;$(_,le);for(let ke=0;ke<Te.length;ke++)$(Te[ke],le);Te.length===2?H(_,R,w):_.projectionMatrix.copy(R.projectionMatrix),q(Q,_,le)};function q(Q,le,Te){Te===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let se=null;function oe(Q,le){if(h=le.getViewerPose(c||a),g=le,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ke=!1;Te.length!==_.cameras.length&&(_.cameras.length=0,ke=!0);for(let Le=0;Le<Te.length;Le++){let Je=Te[Le],nt=null;if(p!==null)nt=p.getViewport(Je);else{let Ve=d.getViewSubImage(u,Je);nt=Ve.viewport,Le===0&&(e.setRenderTargetTextures(f,Ve.colorTexture,u.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(f))}let xe=I[Le];xe===void 0&&(xe=new xn,xe.layers.enable(Le),xe.viewport=new jt,I[Le]=xe),xe.matrix.fromArray(Je.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Je.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(_.matrix.copy(xe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ke===!0&&_.cameras.push(xe)}}for(let Te=0;Te<M.length;Te++){let ke=v[Te],Le=M[Te];ke!==null&&Le!==void 0&&Le.update(ke,le,c||a)}se&&se(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let ge=new yu;ge.setAnimationLoop(oe),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}};function X0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let b=v.program;n.uniformBlockBinding(M,b)}function c(M,v){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(M,A);let R=e.render.frame;r[M.id]!==R&&(u(M),r[M.id]=R)}function h(M){let v=d();M.__bindingPointIndex=v;let b=i.createBuffer(),A=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,w=b.length;R<w;R++){let I=Array.isArray(b[R])?b[R]:[b[R]];for(let _=0,y=I.length;_<y;_++){let D=I[_];if(p(D,R,_,A)===!0){let F=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],T=0;for(let L=0;L<W.length;L++){let z=W[L],H=x(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+T,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,T),T+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,b,A){let R=M.value,w=v+"_"+b;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let I=A[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return A[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(M){let v=M.uniforms,b=0,A=16;for(let w=0,I=v.length;w<I;w++){let _=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,D=_.length;y<D;y++){let F=_[y],W=Array.isArray(F.value)?F.value:[F.value];for(let T=0,L=W.length;T<L;T++){let z=W[T],H=x(z),$=b%A;$!==0&&A-$<H.boundary&&(b+=A-$),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=H.storage}}}let R=b%A;return R>0&&(b+=A-R),M.__size=b,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Sr=class{constructor(e={}){let{canvas:t=Kd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;let v=this,b=!1,A=0,R=0,w=null,I=-1,_=null,y=new jt,D=new jt,F=null,W=new pt(0),T=0,L=t.width,z=t.height,H=1,$=null,q=null,se=new jt(0,0,L,z),oe=new jt(0,0,L,z),ge=!1,Q=new br,le=!1,Te=!1,ke=null,Le=new Ut,Je=new de,nt=new N,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?H:1}let B=n;function _e(P,j){for(let te=0;te<P.length;te++){let ie=P[te],ne=t.getContext(ie,j);if(ne!==null)return ne}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Se,!1),B===null){let j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),B=_e(j,P),B===null)throw _e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let re,he,ee,Ye,Ie,E,S,Y,fe,pe,ce,He,Pe,De,Ze,lt,ae,ht,O,me,Re,Me,$e,ft;function mt(){re=new ug(B),he=new rg(B,re,e),re.init(he),Me=new G0(B,re,he),ee=new k0(B,re,he),Ye=new pg(B),Ie=new C0,E=new V0(B,re,ee,Ie,he,Me,Ye),S=new og(v),Y=new hg(v),fe=new bf(B,he),$e=new ig(B,re,fe,he),pe=new dg(B,fe,Ye,$e),ce=new xg(B,pe,fe,Ye),O=new _g(B,he,E),lt=new ag(Ie),He=new R0(v,S,Y,re,he,$e,lt),Pe=new X0(v,Ie),De=new I0,Ze=new F0(re,he),ht=new ng(v,S,Y,ee,ce,u,l),ae=new H0(v,ce,he),ft=new Y0(B,Ye,he,ee),me=new sg(B,re,Ye,he),Re=new fg(B,re,Ye,he),Ye.programs=He.programs,v.capabilities=he,v.extensions=re,v.properties=Ie,v.renderLists=De,v.shadowMap=ae,v.state=ee,v.info=Ye}mt();let ut=new Al(v,B);this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=re.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=re.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(L,z,!1))},this.getSize=function(P){return P.set(L,z)},this.setSize=function(P,j,te=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=P,z=j,t.width=Math.floor(P*H),t.height=Math.floor(j*H),te===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(L*H,z*H).floor()},this.setDrawingBufferSize=function(P,j,te){L=P,z=j,H=te,t.width=Math.floor(P*te),t.height=Math.floor(j*te),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,j,te,ie){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,j,te,ie),ee.viewport(y.copy(se).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(oe)},this.setScissor=function(P,j,te,ie){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,j,te,ie),ee.scissor(D.copy(oe).multiplyScalar(H).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){ee.setScissorTest(ge=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){q=P},this.getClearColor=function(P){return P.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(P=!0,j=!0,te=!0){let ie=0;if(P){let ne=!1;if(w!==null){let C=w.texture.format;ne=C===du||C===uu||C===hu}if(ne){let C=w.texture.type,U=C===di||C===Oi||C===rc||C===wi||C===lu||C===cu,k=ht.getClearColor(),X=ht.getClearAlpha(),J=k.r,Z=k.g,K=k.b;U?(p[0]=J,p[1]=Z,p[2]=K,p[3]=X,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=J,g[1]=Z,g[2]=K,g[3]=X,B.clearBufferiv(B.COLOR,0,g))}else ie|=B.COLOR_BUFFER_BIT}j&&(ie|=B.DEPTH_BUFFER_BIT),te&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),De.dispose(),Ze.dispose(),Ie.dispose(),S.dispose(),Y.dispose(),ce.dispose(),$e.dispose(),ft.dispose(),He.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",dn),ut.removeEventListener("sessionend",zt),ke&&(ke.dispose(),ke=null),pn.stop()};function be(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let P=Ye.autoReset,j=ae.enabled,te=ae.autoUpdate,ie=ae.needsUpdate,ne=ae.type;mt(),Ye.autoReset=P,ae.enabled=j,ae.autoUpdate=te,ae.needsUpdate=ie,ae.type=ne}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){let j=P.target;j.removeEventListener("dispose",Ae),st(j)}function st(P){et(P),Ie.remove(P)}function et(P){let j=Ie.get(P).programs;j!==void 0&&(j.forEach(function(te){He.releaseProgram(te)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,te,ie,ne,C){j===null&&(j=xe);let U=ne.isMesh&&ne.matrixWorld.determinant()<0,k=ci(P,j,te,ie,ne);ee.setMaterial(ie,U);let X=te.index,J=1;if(ie.wireframe===!0){if(X=pe.getWireframeAttribute(te),X===void 0)return;J=2}let Z=te.drawRange,K=te.attributes.position,ue=Z.start*J,Ce=(Z.start+Z.count)*J;C!==null&&(ue=Math.max(ue,C.start*J),Ce=Math.min(Ce,(C.start+C.count)*J)),X!==null?(ue=Math.max(ue,0),Ce=Math.min(Ce,X.count)):K!=null&&(ue=Math.max(ue,0),Ce=Math.min(Ce,K.count));let Ue=Ce-ue;if(Ue<0||Ue===1/0)return;$e.setup(ne,ie,k,te,X);let Ke,Ee=me;if(X!==null&&(Ke=fe.get(X),Ee=Re,Ee.setIndex(Ke)),ne.isMesh)ie.wireframe===!0?(ee.setLineWidth(ie.wireframeLinewidth*Ve()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(ne.isLine){let ve=ie.linewidth;ve===void 0&&(ve=1),ee.setLineWidth(ve*Ve()),ne.isLineSegments?Ee.setMode(B.LINES):ne.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else ne.isPoints?Ee.setMode(B.POINTS):ne.isSprite&&Ee.setMode(B.TRIANGLES);if(ne.isBatchedMesh)Ee.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)Ee.renderInstances(ue,Ue,ne.count);else if(te.isInstancedBufferGeometry){let ve=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qe=Math.min(te.instanceCount,ve);Ee.renderInstances(ue,Ue,qe)}else Ee.render(ue,Ue)};function Pt(P,j,te){P.transparent===!0&&P.side===vn&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,mi(P,j,te),P.side=zi,P.needsUpdate=!0,mi(P,j,te),P.side=vn):mi(P,j,te)}this.compile=function(P,j,te=null){te===null&&(te=P),m=Ze.get(te),m.init(),M.push(m),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),P!==te&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),m.setupLights(v._useLegacyLights);let ie=new Set;return P.traverse(function(ne){let C=ne.material;if(C)if(Array.isArray(C))for(let U=0;U<C.length;U++){let k=C[U];Pt(k,te,ne),ie.add(k)}else Pt(C,te,ne),ie.add(C)}),M.pop(),m=null,ie},this.compileAsync=function(P,j,te=null){let ie=this.compile(P,j,te);return new Promise(ne=>{function C(){if(ie.forEach(function(U){Ie.get(U).currentProgram.isReady()&&ie.delete(U)}),ie.size===0){ne(P);return}setTimeout(C,10)}re.get("KHR_parallel_shader_compile")!==null?C():setTimeout(C,10)})};let Lt=null;function tn(P){Lt&&Lt(P)}function dn(){pn.stop()}function zt(){pn.start()}let pn=new yu;pn.setAnimationLoop(tn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(P){Lt=P,ut.setAnimationLoop(P),P===null?pn.stop():pn.start()},ut.addEventListener("sessionstart",dn),ut.addEventListener("sessionend",zt),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,j,w),m=Ze.get(P,M.length),m.init(),M.push(m),Le.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Le),Te=this.localClippingEnabled,le=lt.init(this.clippingPlanes,Te),x=De.get(P,f.length),x.init(),f.push(x),Vn(P,j,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,q),this.info.render.frame++,le===!0&&lt.beginShadows();let te=m.state.shadowsArray;if(ae.render(te,P,j),le===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(x,P),m.setupLights(v._useLegacyLights),j.isArrayCamera){let ie=j.cameras;for(let ne=0,C=ie.length;ne<C;ne++){let U=ie[ne];wo(x,P,U,U.viewport)}}else wo(x,P,j);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(v,P,j),$e.resetDefaultState(),I=-1,_=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Vn(P,j,te,ie){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){ie&&nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Le);let U=ce.update(P),k=P.material;k.visible&&x.push(P,U,k,te,nt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){let U=ce.update(P),k=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),nt.copy(P.boundingSphere.center)):(U.boundingSphere===null&&U.computeBoundingSphere(),nt.copy(U.boundingSphere.center)),nt.applyMatrix4(P.matrixWorld).applyMatrix4(Le)),Array.isArray(k)){let X=U.groups;for(let J=0,Z=X.length;J<Z;J++){let K=X[J],ue=k[K.materialIndex];ue&&ue.visible&&x.push(P,U,ue,te,nt.z,K)}}else k.visible&&x.push(P,U,k,te,nt.z,null)}}let C=P.children;for(let U=0,k=C.length;U<k;U++)Vn(C[U],j,te,ie)}function wo(P,j,te,ie){let ne=P.opaque,C=P.transmissive,U=P.transparent;m.setupLightsView(te),le===!0&&lt.setGlobalState(v.clippingPlanes,te),C.length>0&&To(ne,C,j,te),ie&&ee.viewport(y.copy(ie)),ne.length>0&&Jn(ne,j,te),C.length>0&&Jn(C,j,te),U.length>0&&Jn(U,j,te),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function To(P,j,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let C=he.isWebGL2;ke===null&&(ke=new Mn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?mn:di,minFilter:zs,samples:C?4:0})),v.getDrawingBufferSize(Je),C?ke.setSize(Je.x,Je.y):ke.setSize(Ea(Je.x),Ea(Je.y));let U=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(W),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();let k=v.toneMapping;v.toneMapping=Fi,Jn(P,te,ie),E.updateMultisampleRenderTarget(ke),E.updateRenderTargetMipmap(ke);let X=!1;for(let J=0,Z=j.length;J<Z;J++){let K=j[J],ue=K.object,Ce=K.geometry,Ue=K.material,Ke=K.group;if(Ue.side===vn&&ue.layers.test(ie.layers)){let Ee=Ue.side;Ue.side=yn,Ue.needsUpdate=!0,Xi(ue,te,ie,Ce,Ue,Ke),Ue.side=Ee,Ue.needsUpdate=!0,X=!0}}X===!0&&(E.updateMultisampleRenderTarget(ke),E.updateRenderTargetMipmap(ke)),v.setRenderTarget(U),v.setClearColor(W,T),v.toneMapping=k}function Jn(P,j,te){let ie=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,C=P.length;ne<C;ne++){let U=P[ne],k=U.object,X=U.geometry,J=ie===null?U.material:ie,Z=U.group;k.layers.test(te.layers)&&Xi(k,j,te,X,J,Z)}}function Xi(P,j,te,ie,ne,C){P.onBeforeRender(v,j,te,ie,ne,C),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(v,j,te,ie,P,C),ne.transparent===!0&&ne.side===vn&&ne.forceSinglePass===!1?(ne.side=yn,ne.needsUpdate=!0,v.renderBufferDirect(te,j,ie,ne,P,C),ne.side=zi,ne.needsUpdate=!0,v.renderBufferDirect(te,j,ie,ne,P,C),ne.side=vn):v.renderBufferDirect(te,j,ie,ne,P,C),P.onAfterRender(v,j,te,ie,ne,C)}function mi(P,j,te){j.isScene!==!0&&(j=xe);let ie=Ie.get(P),ne=m.state.lights,C=m.state.shadowsArray,U=ne.state.version,k=He.getParameters(P,ne.state,C,j,te),X=He.getProgramCacheKey(k),J=ie.programs;ie.environment=P.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(P.isMeshStandardMaterial?Y:S).get(P.envMap||ie.environment),J===void 0&&(P.addEventListener("dispose",Ae),J=new Map,ie.programs=J);let Z=J.get(X);if(Z!==void 0){if(ie.currentProgram===Z&&ie.lightsStateVersion===U)return sr(P,k),Z}else k.uniforms=He.getUniforms(P),P.onBuild(te,k,v),P.onBeforeCompile(k,v),Z=He.acquireProgram(k,X),J.set(X,Z),ie.uniforms=k.uniforms;let K=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(K.clippingPlanes=lt.uniform),sr(P,k),ie.needsLights=rr(P),ie.lightsStateVersion=U,ie.needsLights&&(K.ambientLightColor.value=ne.state.ambient,K.lightProbe.value=ne.state.probe,K.directionalLights.value=ne.state.directional,K.directionalLightShadows.value=ne.state.directionalShadow,K.spotLights.value=ne.state.spot,K.spotLightShadows.value=ne.state.spotShadow,K.rectAreaLights.value=ne.state.rectArea,K.ltc_1.value=ne.state.rectAreaLTC1,K.ltc_2.value=ne.state.rectAreaLTC2,K.pointLights.value=ne.state.point,K.pointLightShadows.value=ne.state.pointShadow,K.hemisphereLights.value=ne.state.hemi,K.directionalShadowMap.value=ne.state.directionalShadowMap,K.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,K.spotShadowMap.value=ne.state.spotShadowMap,K.spotLightMatrix.value=ne.state.spotLightMatrix,K.spotLightMap.value=ne.state.spotLightMap,K.pointShadowMap.value=ne.state.pointShadowMap,K.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.currentProgram=Z,ie.uniformsList=null,Z}function ir(P){if(P.uniformsList===null){let j=P.currentProgram.getUniforms();P.uniformsList=Os.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function sr(P,j){let te=Ie.get(P);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function ci(P,j,te,ie,ne){j.isScene!==!0&&(j=xe),E.resetTextureUnits();let C=j.fog,U=ie.isMeshStandardMaterial?j.environment:null,k=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bn,X=(ie.isMeshStandardMaterial?Y:S).get(ie.envMap||U),J=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Z=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),K=!!te.morphAttributes.position,ue=!!te.morphAttributes.normal,Ce=!!te.morphAttributes.color,Ue=Fi;ie.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ue=v.toneMapping);let Ke=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ee=Ke!==void 0?Ke.length:0,ve=Ie.get(ie),qe=m.state.lights;if(le===!0&&(Te===!0||P!==_)){let dt=P===_&&ie.id===I;lt.setState(ie,P,dt)}let We=!1;ie.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==qe.state.version||ve.outputColorSpace!==k||ne.isBatchedMesh&&ve.batching===!1||!ne.isBatchedMesh&&ve.batching===!0||ne.isInstancedMesh&&ve.instancing===!1||!ne.isInstancedMesh&&ve.instancing===!0||ne.isSkinnedMesh&&ve.skinning===!1||!ne.isSkinnedMesh&&ve.skinning===!0||ne.isInstancedMesh&&ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ve.instancingColor===!1&&ne.instanceColor!==null||ve.envMap!==X||ie.fog===!0&&ve.fog!==C||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==lt.numPlanes||ve.numIntersection!==lt.numIntersection)||ve.vertexAlphas!==J||ve.vertexTangents!==Z||ve.morphTargets!==K||ve.morphNormals!==ue||ve.morphColors!==Ce||ve.toneMapping!==Ue||he.isWebGL2===!0&&ve.morphTargetsCount!==Ee)&&(We=!0):(We=!0,ve.__version=ie.version);let tt=ve.currentProgram;We===!0&&(tt=mi(ie,j,ne));let Be=!1,yt=!1,en=!1,Mt=tt.getUniforms(),Ft=ve.uniforms;if(ee.useProgram(tt.program)&&(Be=!0,yt=!0,en=!0),ie.id!==I&&(I=ie.id,yt=!0),Be||_!==P){Mt.setValue(B,"projectionMatrix",P.projectionMatrix),Mt.setValue(B,"viewMatrix",P.matrixWorldInverse);let dt=Mt.map.cameraPosition;dt!==void 0&&dt.setValue(B,nt.setFromMatrixPosition(P.matrixWorld)),he.logarithmicDepthBuffer&&Mt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Mt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,yt=!0,en=!0)}if(ne.isSkinnedMesh){Mt.setOptional(B,ne,"bindMatrix"),Mt.setOptional(B,ne,"bindMatrixInverse");let dt=ne.skeleton;dt&&(he.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),Mt.setValue(B,"boneTexture",dt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Mt.setOptional(B,ne,"batchingTexture"),Mt.setValue(B,"batchingTexture",ne._matricesTexture,E));let Ht=te.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0&&he.isWebGL2===!0)&&O.update(ne,te,tt),(yt||ve.receiveShadow!==ne.receiveShadow)&&(ve.receiveShadow=ne.receiveShadow,Mt.setValue(B,"receiveShadow",ne.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ft.envMap.value=X,Ft.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),yt&&(Mt.setValue(B,"toneMappingExposure",v.toneMappingExposure),ve.needsLights&&hs(Ft,en),C&&ie.fog===!0&&Pe.refreshFogUniforms(Ft,C),Pe.refreshMaterialUniforms(Ft,ie,H,z,ke),Os.upload(B,ir(ve),Ft,E)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Os.upload(B,ir(ve),Ft,E),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Mt.setValue(B,"center",ne.center),Mt.setValue(B,"modelViewMatrix",ne.modelViewMatrix),Mt.setValue(B,"normalMatrix",ne.normalMatrix),Mt.setValue(B,"modelMatrix",ne.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let dt=ie.uniformsGroups;for(let Qe=0,rt=dt.length;Qe<rt;Qe++)if(he.isWebGL2){let at=dt[Qe];ft.update(at,tt),ft.bind(at,tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tt}function hs(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function rr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,j,te){Ie.get(P.texture).__webglTexture=j,Ie.get(P.depthTexture).__webglTexture=te;let ie=Ie.get(P);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){let te=Ie.get(P);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,te=0){w=P,A=j,R=te;let ie=!0,ne=null,C=!1,U=!1;if(P){let X=Ie.get(P);X.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1):X.__webglFramebuffer===void 0?E.setupRenderTarget(P):X.__hasExternalTextures&&E.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);let J=P.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(U=!0);let Z=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Z[j])?ne=Z[j][te]:ne=Z[j],C=!0):he.isWebGL2&&P.samples>0&&E.useMultisampledRTT(P)===!1?ne=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray(Z)?ne=Z[te]:ne=Z,y.copy(P.viewport),D.copy(P.scissor),F=P.scissorTest}else y.copy(se).multiplyScalar(H).floor(),D.copy(oe).multiplyScalar(H).floor(),F=ge;if(ee.bindFramebuffer(B.FRAMEBUFFER,ne)&&he.drawBuffers&&ie&&ee.drawBuffers(P,ne),ee.viewport(y),ee.scissor(D),ee.setScissorTest(F),C){let X=Ie.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,X.__webglTexture,te)}else if(U){let X=Ie.get(P.texture),J=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.__webglTexture,te||0,J)}I=-1},this.readRenderTargetPixels=function(P,j,te,ie,ne,C,U){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&U!==void 0&&(k=k[U]),k){ee.bindFramebuffer(B.FRAMEBUFFER,k);try{let X=P.texture,J=X.format,Z=X.type;if(J!==Tn&&Me.convert(J)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let K=Z===mn&&(re.has("EXT_color_buffer_half_float")||he.isWebGL2&&re.has("EXT_color_buffer_float"));if(Z!==di&&Me.convert(Z)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Z===Ln&&(he.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!K){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-ie&&te>=0&&te<=P.height-ne&&B.readPixels(j,te,ie,ne,Me.convert(J),Me.convert(Z),C)}finally{let X=w!==null?Ie.get(w).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,X)}}},this.copyFramebufferToTexture=function(P,j,te=0){let ie=Math.pow(2,-te),ne=Math.floor(j.image.width*ie),C=Math.floor(j.image.height*ie);E.setTexture2D(j,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,P.x,P.y,ne,C),ee.unbindTexture()},this.copyTextureToTexture=function(P,j,te,ie=0){let ne=j.image.width,C=j.image.height,U=Me.convert(te.format),k=Me.convert(te.type);E.setTexture2D(te,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,te.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,te.unpackAlignment),j.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ie,P.x,P.y,ne,C,U,k,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ie,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,U,j.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ie,P.x,P.y,U,k,j.image),ie===0&&te.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(P,j,te,ie,ne=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let C=P.max.x-P.min.x+1,U=P.max.y-P.min.y+1,k=P.max.z-P.min.z+1,X=Me.convert(ie.format),J=Me.convert(ie.type),Z;if(ie.isData3DTexture)E.setTexture3D(ie,0),Z=B.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)E.setTexture2DArray(ie,0),Z=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ie.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ie.unpackAlignment);let K=B.getParameter(B.UNPACK_ROW_LENGTH),ue=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ce=B.getParameter(B.UNPACK_SKIP_PIXELS),Ue=B.getParameter(B.UNPACK_SKIP_ROWS),Ke=B.getParameter(B.UNPACK_SKIP_IMAGES),Ee=te.isCompressedTexture?te.mipmaps[ne]:te.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,P.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,P.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,P.min.z),te.isDataTexture||te.isData3DTexture?B.texSubImage3D(Z,ne,j.x,j.y,j.z,C,U,k,X,J,Ee.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Z,ne,j.x,j.y,j.z,C,U,k,X,Ee.data)):B.texSubImage3D(Z,ne,j.x,j.y,j.z,C,U,k,X,J,Ee),B.pixelStorei(B.UNPACK_ROW_LENGTH,K),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke),ne===0&&ie.generateMipmaps&&B.generateMipmap(Z),ee.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?E.setTextureCube(P,0):P.isData3DTexture?E.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?E.setTexture2DArray(P,0):E.setTexture2D(P,0),ee.unbindTexture()},this.resetState=function(){A=0,R=0,w=null,ee.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===Qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?es:pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?Yt:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Rl=class extends Sr{};Rl.prototype.isWebGL1Renderer=!0;var Xs=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ri=class extends Un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,h=sn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new Ut,Zh=new Ut,ua=[],jh=new Ti,q0=new Ut,hr=new Xe,ur=new ns,Da=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),jh.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(jh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ur.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),Zh.multiplyMatrices(n,Rs),hr.matrixWorld=Zh,hr.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){let l=ua[a];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Vi=class extends Un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,s=[],r=[],a=[],o=new N,l=new Ut;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(an(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(an(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wr=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new de,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends wr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var da=new N,il=new hc,sl=new hc,rl=new hc,Pl=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),c=da);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Z0(i,e){let t=1-i;return t*t*e}function j0(i,e){return 2*(1-i)*i*e}function J0(i,e){return i*i*e}function _r(i,e,t,n){return Z0(i,e)+j0(i,t)+J0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function K0(i,e){let t=1-i;return 3*t*t*i*e}function Q0(i,e){return 3*(1-i)*i*i*e}function e_(i,e){return i*i*i*e}function xr(i,e,t,n,s){return $0(i,e)+K0(i,t)+Q0(i,n)+e_(i,s)}var Ua=class extends Yn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends Yn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Yn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends Yn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Yn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends Yn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Jh(o,l.x,c.x,h.x,d.x),Jh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:Ua,CubicBezierCurve3:Il,EllipseCurve:wr,LineCurve:Na,LineCurve3:Ll,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:Dl,SplineCurve:Fa}),Nl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}},Ys=class extends Nl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Na(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oa(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ua(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new wr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ba=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new N,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gi=class i extends qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],m=n/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(p,2));function M(){let b=new N,A=new N,R=0,w=(t-e)/n;for(let I=0;I<=r;I++){let _=[],y=I/r,D=y*(t-e)+e;for(let F=0;F<=s;F++){let W=F/s,T=W*l+o,L=Math.sin(T),z=Math.cos(T);A.x=D*L,A.y=-y*n+m,A.z=D*z,d.push(A.x,A.y,A.z),b.set(L,w,z).normalize(),u.push(b.x,b.y,b.z),p.push(W,1-y),_.push(g++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let y=x[_][I],D=x[_+1][I],F=x[_+1][I+1],W=x[_][I+1];h.push(y,D,W),h.push(D,F,W),R+=6}c.addGroup(f,R,0),f+=R}function v(b){let A=g,R=new de,w=new N,I=0,_=b===!0?e:t,y=b===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let T=F/s*l+o,L=Math.cos(T),z=Math.sin(T);w.x=_*z,w.y=m*y,w.z=_*L,d.push(w.x,w.y,w.z),u.push(0,y,0),R.x=L*.5+.5,R.y=z*.5*y+.5,p.push(R.x,R.y),g++}for(let F=0;F<s;F++){let W=A+F,T=D+F;b===!0?h.push(T,T+1,W):h.push(T+1,T,W),I+=3}c.addGroup(f,I,b===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},za=class i extends Gi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ol=class i extends qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let v=new N,b=new N,A=new N;for(let R=0;R<t.length;R+=3)p(t[R+0],v),p(t[R+1],b),p(t[R+2],A),l(v,b,A,M)}function l(M,v,b,A){let R=A+1,w=[];for(let I=0;I<=R;I++){w[I]=[];let _=M.clone().lerp(b,I/R),y=v.clone().lerp(b,I/R),D=R-I;for(let F=0;F<=D;F++)F===0&&I===R?w[I][F]=_:w[I][F]=_.clone().lerp(y,F/D)}for(let I=0;I<R;I++)for(let _=0;_<2*(R-I)-1;_++){let y=Math.floor(_/2);_%2===0?(u(w[I][y+1]),u(w[I+1][y]),u(w[I][y])):(u(w[I][y+1]),u(w[I+1][y+1]),u(w[I+1][y]))}}function c(M){let v=new N;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(M),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let M=new N;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let b=m(M)/2/Math.PI+.5,A=f(M)/Math.PI+.5;a.push(b,1-A)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let v=a[M+0],b=a[M+2],A=a[M+4],R=Math.max(v,b,A),w=Math.min(v,b,A);R>.9&&w<.1&&(v<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,v){let b=M*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){let M=new N,v=new N,b=new N,A=new N,R=new de,w=new de,I=new de;for(let _=0,y=0;_<r.length;_+=9,y+=6){M.set(r[_+0],r[_+1],r[_+2]),v.set(r[_+3],r[_+4],r[_+5]),b.set(r[_+6],r[_+7],r[_+8]),R.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),A.copy(M).add(v).add(b).divideScalar(3);let D=m(A);x(R,y+0,M,D),x(w,y+2,v,D),x(I,y+4,b,D)}}function x(M,v,b,A){A<0&&M.x===1&&(a[v]=M.x-1),b.x===0&&b.z===0&&(a[v]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Rn=class extends Ys{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ys().fromJSON(s))}return this}},t_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(n&&(r=a_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Tr(r,a,t,o,l,p,0),a}};function Tu(i,e,t,n,s){let r,a;if(s===__(i,e,t,n)>0)for(r=e;r<t;r+=n)a=$h(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=$h(r,i[r],i[r+1],a);return a&&to(a,a.next)&&(Rr(a),a=a.next),a}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(to(t,t.next)||Jt(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&u_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?i_(i,n,s,r):n_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=s_(is(i),e,t),Tr(i,e,t,n,s,r,2)):a===2&&r_(i,e,t,n,s,r):Tr(is(i),e,t,n,s,r,1);break}}}function n_(i){let e=i.prev,t=i,n=i.next;if(Jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Ds(s,o,r,l,a,c,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Jt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=Fl(p,g,e,t,n),M=Fl(x,m,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=f&&b&&b.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,d,c,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ds(o,h,l,d,c,u,b.x,b.y)&&Jt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,d,c,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=M;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ds(o,h,l,d,c,u,b.x,b.y)&&Jt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function s_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!to(s,r)&&Au(s,n,n.next,r)&&Ar(s,r)&&Ar(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Rr(n),Rr(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function r_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&p_(a,o)){let l=Ru(a,o);a=is(a,a.next),l=is(l,l.next),Tr(a,e,t,n,s,r,0),Tr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function a_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Tu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(f_(c));for(s.sort(o_),r=0;r<s.length;r++)t=l_(s[r],t);return t}function o_(i,e){return i.x-e.x}function l_(i,e){let t=c_(i,e);if(!t)return e;let n=Ru(t,i);return is(n,n.next),is(t,t.next)}function c_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ds(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ar(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&h_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function h_(i,e){return Jt(i.prev,i,e.prev)<0&&Jt(e.next,i,i.next)<0}function u_(i,e,t,n){let s=i;do s.z===0&&(s.z=Fl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,d_(s)}function d_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Fl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function f_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ds(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function p_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!m_(i,e)&&(Ar(i,e)&&Ar(e,i)&&g_(i,e)&&(Jt(i.prev,i,e.prev)||Jt(i,e.prev,e))||to(i,e)&&Jt(i.prev,i,i.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function to(i,e){return i.x===e.x&&i.y===e.y}function Au(i,e,t,n){let s=pa(Jt(i,e,t)),r=pa(Jt(i,e,n)),a=pa(Jt(t,n,i)),o=pa(Jt(t,n,e));return!!(s!==r&&a!==o||s===0&&fa(i,t,e)||r===0&&fa(i,n,e)||a===0&&fa(t,i,n)||o===0&&fa(t,e,n))}function fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pa(i){return i>0?1:i<0?-1:0}function m_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Au(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ar(i,e){return Jt(i.prev,i,i.next)<0?Jt(i,e,i.next)>=0&&Jt(i,i.prev,e)>=0:Jt(i,e,i.prev)<0||Jt(i,i.next,e)<0}function g_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ru(i,e){let t=new Bl(i.i,i.x,i.y),n=new Bl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $h(i,e,t,n){let s=new Bl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function __(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Kh(e),Qh(n,e);let a=e.length;t.forEach(Kh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Qh(n,t[l]);let o=t_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Kh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qn=class i extends qt{constructor(e=new Rn([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:x_,v,b=!1,A,R,w,I;f&&(v=f.getSpacedPoints(h),b=!0,u=!1,A=f.computeFrenetFrames(h,!1),R=new N,w=new N,I=new N),u||(m=0,p=0,g=0,x=0);let _=o.extractPoints(c),y=_.shape,D=_.holes;if(!Bi.isClockWise(y)){y=y.reverse();for(let B=0,_e=D.length;B<_e;B++){let re=D[B];Bi.isClockWise(re)&&(D[B]=re.reverse())}}let W=Bi.triangulateShape(y,D),T=y;for(let B=0,_e=D.length;B<_e;B++){let re=D[B];y=y.concat(re)}function L(B,_e,re){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(_e,re)}let z=y.length,H=W.length;function $(B,_e,re){let he,ee,Ye,Ie=B.x-_e.x,E=B.y-_e.y,S=re.x-B.x,Y=re.y-B.y,fe=Ie*Ie+E*E,pe=Ie*Y-E*S;if(Math.abs(pe)>Number.EPSILON){let ce=Math.sqrt(fe),He=Math.sqrt(S*S+Y*Y),Pe=_e.x-E/ce,De=_e.y+Ie/ce,Ze=re.x-Y/He,lt=re.y+S/He,ae=((Ze-Pe)*Y-(lt-De)*S)/(Ie*Y-E*S);he=Pe+Ie*ae-B.x,ee=De+E*ae-B.y;let ht=he*he+ee*ee;if(ht<=2)return new de(he,ee);Ye=Math.sqrt(ht/2)}else{let ce=!1;Ie>Number.EPSILON?S>Number.EPSILON&&(ce=!0):Ie<-Number.EPSILON?S<-Number.EPSILON&&(ce=!0):Math.sign(E)===Math.sign(Y)&&(ce=!0),ce?(he=-E,ee=Ie,Ye=Math.sqrt(fe)):(he=Ie,ee=E,Ye=Math.sqrt(fe/2))}return new de(he/Ye,ee/Ye)}let q=[];for(let B=0,_e=T.length,re=_e-1,he=B+1;B<_e;B++,re++,he++)re===_e&&(re=0),he===_e&&(he=0),q[B]=$(T[B],T[re],T[he]);let se=[],oe,ge=q.concat();for(let B=0,_e=D.length;B<_e;B++){let re=D[B];oe=[];for(let he=0,ee=re.length,Ye=ee-1,Ie=he+1;he<ee;he++,Ye++,Ie++)Ye===ee&&(Ye=0),Ie===ee&&(Ie=0),oe[he]=$(re[he],re[Ye],re[Ie]);se.push(oe),ge=ge.concat(oe)}for(let B=0;B<m;B++){let _e=B/m,re=p*Math.cos(_e*Math.PI/2),he=g*Math.sin(_e*Math.PI/2)+x;for(let ee=0,Ye=T.length;ee<Ye;ee++){let Ie=L(T[ee],q[ee],he);Le(Ie.x,Ie.y,-re)}for(let ee=0,Ye=D.length;ee<Ye;ee++){let Ie=D[ee];oe=se[ee];for(let E=0,S=Ie.length;E<S;E++){let Y=L(Ie[E],oe[E],he);Le(Y.x,Y.y,-re)}}}let Q=g+x;for(let B=0;B<z;B++){let _e=u?L(y[B],ge[B],Q):y[B];b?(w.copy(A.normals[0]).multiplyScalar(_e.x),R.copy(A.binormals[0]).multiplyScalar(_e.y),I.copy(v[0]).add(w).add(R),Le(I.x,I.y,I.z)):Le(_e.x,_e.y,0)}for(let B=1;B<=h;B++)for(let _e=0;_e<z;_e++){let re=u?L(y[_e],ge[_e],Q):y[_e];b?(w.copy(A.normals[B]).multiplyScalar(re.x),R.copy(A.binormals[B]).multiplyScalar(re.y),I.copy(v[B]).add(w).add(R),Le(I.x,I.y,I.z)):Le(re.x,re.y,d/h*B)}for(let B=m-1;B>=0;B--){let _e=B/m,re=p*Math.cos(_e*Math.PI/2),he=g*Math.sin(_e*Math.PI/2)+x;for(let ee=0,Ye=T.length;ee<Ye;ee++){let Ie=L(T[ee],q[ee],he);Le(Ie.x,Ie.y,d+re)}for(let ee=0,Ye=D.length;ee<Ye;ee++){let Ie=D[ee];oe=se[ee];for(let E=0,S=Ie.length;E<S;E++){let Y=L(Ie[E],oe[E],he);b?Le(Y.x,Y.y+v[h-1].y,v[h-1].x+re):Le(Y.x,Y.y,d+re)}}}le(),Te();function le(){let B=s.length/3;if(u){let _e=0,re=z*_e;for(let he=0;he<H;he++){let ee=W[he];Je(ee[2]+re,ee[1]+re,ee[0]+re)}_e=h+m*2,re=z*_e;for(let he=0;he<H;he++){let ee=W[he];Je(ee[0]+re,ee[1]+re,ee[2]+re)}}else{for(let _e=0;_e<H;_e++){let re=W[_e];Je(re[2],re[1],re[0])}for(let _e=0;_e<H;_e++){let re=W[_e];Je(re[0]+z*h,re[1]+z*h,re[2]+z*h)}}n.addGroup(B,s.length/3-B,0)}function Te(){let B=s.length/3,_e=0;ke(T,_e),_e+=T.length;for(let re=0,he=D.length;re<he;re++){let ee=D[re];ke(ee,_e),_e+=ee.length}n.addGroup(B,s.length/3-B,1)}function ke(B,_e){let re=B.length;for(;--re>=0;){let he=re,ee=re-1;ee<0&&(ee=B.length-1);for(let Ye=0,Ie=h+m*2;Ye<Ie;Ye++){let E=z*Ye,S=z*(Ye+1),Y=_e+he+E,fe=_e+ee+E,pe=_e+ee+S,ce=_e+he+S;nt(Y,fe,pe,ce)}}}function Le(B,_e,re){l.push(B),l.push(_e),l.push(re)}function Je(B,_e,re){xe(B),xe(_e),xe(re);let he=s.length/3,ee=M.generateTopUV(n,s,he-3,he-2,he-1);Ve(ee[0]),Ve(ee[1]),Ve(ee[2])}function nt(B,_e,re,he){xe(B),xe(_e),xe(he),xe(_e),xe(re),xe(he);let ee=s.length/3,Ye=M.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Ve(Ye[0]),Ve(Ye[1]),Ve(Ye[3]),Ve(Ye[1]),Ve(Ye[2]),Ve(Ye[3])}function xe(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Ve(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return v_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,e.options)}},x_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new de(r,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-d),new de(u,1-g),new de(x,1-f)]:[new de(o,1-l),new de(h,1-d),new de(p,1-g),new de(m,1-f)]}};function v_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qs=class i extends Ol{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ha=class i extends qt{constructor(e=new Rn([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;Bi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Bi.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Bi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){let M=x[m],v=M[0]+d,b=M[1]+d,A=M[2]+d;n.push(v,b,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return y_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function y_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ka=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Va=class extends ki{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function ma(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function M_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:r=e,o=2*t-n;break;case ah:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:a=e,l=2*n-t;break;case ah:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,b=p*m-p*x;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+M*a[c+A]+v*a[l+A]+b*a[d+A];return r}},Hl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},kl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&M_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=va;var ss=class extends ri{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=xa;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends ri{};Vl.prototype.ValueTypeName="color";var Gl=class extends ri{};Gl.prototype.ValueTypeName="number";var Wl=class extends Zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends ri{InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=va;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends ri{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=xa;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends ri{};Xl.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},b_=new Yl,as=class{constructor(e){this.manager=e!==void 0?e:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};as.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},ql=class extends Error{constructor(e,t){super(e),this.response=t}},Zl=class extends as{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ga.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mi[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,g=p!==0,x=0,m=new ReadableStream({start(f){M();function M(){d.read().then(({done:v,value:b})=>{if(v)f.close();else{x+=b.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,w=h.length;R<w;R++){let I=h[R];I.onProgress&&I.onProgress(A)}f.enqueue(b),M()}})}}});return new Response(m)}else throw new ql(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ga.add(e,c);let h=Mi[e];delete Mi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jl=class extends as{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ga.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=yr("img");function l(){h(),Ga.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Wa=class extends as{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Ri,o=new Zl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Fn,a.wrapT=c.wrapT!==void 0?c.wrapT:Fn,a.magFilter=c.magFilter!==void 0?c.magFilter:rn,a.minFilter=c.minFilter!==void 0?c.minFilter:rn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=zs),c.mipmapCount===1&&(a.minFilter=rn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},Xa=class extends as{constructor(e){super(e)}load(e,t,n,s){let r=new Un,a=new jl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Pr=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ya=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},al=new Ut,eu=new N,tu=new N,qa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nu=new Ut,dr=new N,ol=new N,Jl=class extends qa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),ol.copy(n.position),ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ol),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},js=class extends Pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$l=class extends qa{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function iu(){return(typeof performance>"u"?Date:performance).now()}var uc="\\[\\]\\.:\\/",S_=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",E_="[^"+uc.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",dc),T_=/(WCOD+)?/.source.replace("WCOD",E_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),C_=new RegExp("^"+w_+T_+A_+R_+"$"),P_=["material","materials","bones","map"],Kl=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S_,"")}static parseTrackName(e){let t=C_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);P_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Kl;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ix=new Float32Array(1);var Ir=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Cu={type:"change"},fc={type:"start"},Pu={type:"end"},no=new Mr,Iu=new ii,L_=Math.cos(70*gu.DEG2RAD),io=class extends fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",ce),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cu),n.update(),r=s.NONE},this.update=(function(){let O=new N,me=new zn().setFromUnitVectors(e.up,new N(0,1,0)),Re=me.clone().invert(),Me=new N,$e=new zn,ft=new N,mt=2*Math.PI;return function(be=null){let V=n.object.position;O.copy(V).sub(n.target),O.applyQuaternion(me),o.setFromVector3(O),n.autoRotate&&r===s.NONE&&D(_(be)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Se=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;isFinite(Se)&&isFinite(Ae)&&(Se<-Math.PI?Se+=mt:Se>Math.PI&&(Se-=mt),Ae<-Math.PI?Ae+=mt:Ae>Math.PI&&(Ae-=mt),Se<=Ae?o.theta=Math.max(Se,Math.min(Ae,o.theta)):o.theta=o.theta>(Se+Ae)/2?Math.max(Se,o.theta):Math.min(Ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*c),O.setFromSpherical(o),O.applyQuaternion(Re),V.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let st=!1;if(n.zoomToCursor&&R){let et=null;if(n.object.isPerspectiveCamera){let Pt=O.length();et=q(Pt*c);let Lt=Pt-et;n.object.position.addScaledVector(b,Lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Pt=new N(A.x,A.y,0);Pt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0;let Lt=new N(A.x,A.y,0);Lt.unproject(n.object),n.object.position.sub(Lt).add(Pt),n.object.updateMatrixWorld(),et=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(et).add(n.object.position):(no.origin.copy(n.object.position),no.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(no.direction))<L_?e.lookAt(n.target):(Iu.setFromNormalAndCoplanarPoint(n.object.up,n.target),no.intersectPlane(Iu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),st=!0);return c=1,R=!1,st||Me.distanceToSquared(n.object.position)>a||8*(1-$e.dot(n.object.quaternion))>a||ft.distanceToSquared(n.target)>0?(n.dispatchEvent(Cu),Me.copy(n.object.position),$e.copy(n.object.quaternion),ft.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",De),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",pe),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Ir,l=new Ir,c=1,h=new N,d=new de,u=new de,p=new de,g=new de,x=new de,m=new de,f=new de,M=new de,v=new de,b=new N,A=new de,R=!1,w=[],I={};function _(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function y(O){let me=Math.abs(O)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function D(O){l.theta-=O}function F(O){l.phi-=O}let W=(function(){let O=new N;return function(Re,Me){O.setFromMatrixColumn(Me,0),O.multiplyScalar(-Re),h.add(O)}})(),T=(function(){let O=new N;return function(Re,Me){n.screenSpacePanning===!0?O.setFromMatrixColumn(Me,1):(O.setFromMatrixColumn(Me,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Re),h.add(O)}})(),L=(function(){let O=new N;return function(Re,Me){let $e=n.domElement;if(n.object.isPerspectiveCamera){let ft=n.object.position;O.copy(ft).sub(n.target);let mt=O.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*Re*mt/$e.clientHeight,n.object.matrix),T(2*Me*mt/$e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(Re*(n.object.right-n.object.left)/n.object.zoom/$e.clientWidth,n.object.matrix),T(Me*(n.object.top-n.object.bottom)/n.object.zoom/$e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function z(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(O,me){if(!n.zoomToCursor)return;R=!0;let Re=n.domElement.getBoundingClientRect(),Me=O-Re.left,$e=me-Re.top,ft=Re.width,mt=Re.height;A.x=Me/ft*2-1,A.y=-($e/mt)*2+1,b.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function se(O){d.set(O.clientX,O.clientY)}function oe(O){$(O.clientX,O.clientX),f.set(O.clientX,O.clientY)}function ge(O){g.set(O.clientX,O.clientY)}function Q(O){u.set(O.clientX,O.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;D(2*Math.PI*p.x/me.clientHeight),F(2*Math.PI*p.y/me.clientHeight),d.copy(u),n.update()}function le(O){M.set(O.clientX,O.clientY),v.subVectors(M,f),v.y>0?z(y(v.y)):v.y<0&&H(y(v.y)),f.copy(M),n.update()}function Te(O){x.set(O.clientX,O.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),L(m.x,m.y),g.copy(x),n.update()}function ke(O){$(O.clientX,O.clientY),O.deltaY<0?H(y(O.deltaY)):O.deltaY>0&&z(y(O.deltaY)),n.update()}function Le(O){let me=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),me=!0;break}me&&(O.preventDefault(),n.update())}function Je(O){if(w.length===1)d.set(O.pageX,O.pageY);else{let me=ht(O),Re=.5*(O.pageX+me.x),Me=.5*(O.pageY+me.y);d.set(Re,Me)}}function nt(O){if(w.length===1)g.set(O.pageX,O.pageY);else{let me=ht(O),Re=.5*(O.pageX+me.x),Me=.5*(O.pageY+me.y);g.set(Re,Me)}}function xe(O){let me=ht(O),Re=O.pageX-me.x,Me=O.pageY-me.y,$e=Math.sqrt(Re*Re+Me*Me);f.set(0,$e)}function Ve(O){n.enableZoom&&xe(O),n.enablePan&&nt(O)}function B(O){n.enableZoom&&xe(O),n.enableRotate&&Je(O)}function _e(O){if(w.length==1)u.set(O.pageX,O.pageY);else{let Re=ht(O),Me=.5*(O.pageX+Re.x),$e=.5*(O.pageY+Re.y);u.set(Me,$e)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;D(2*Math.PI*p.x/me.clientHeight),F(2*Math.PI*p.y/me.clientHeight),d.copy(u)}function re(O){if(w.length===1)x.set(O.pageX,O.pageY);else{let me=ht(O),Re=.5*(O.pageX+me.x),Me=.5*(O.pageY+me.y);x.set(Re,Me)}m.subVectors(x,g).multiplyScalar(n.panSpeed),L(m.x,m.y),g.copy(x)}function he(O){let me=ht(O),Re=O.pageX-me.x,Me=O.pageY-me.y,$e=Math.sqrt(Re*Re+Me*Me);M.set(0,$e),v.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),z(v.y),f.copy(M);let ft=(O.pageX+me.x)*.5,mt=(O.pageY+me.y)*.5;$(ft,mt)}function ee(O){n.enableZoom&&he(O),n.enablePan&&re(O)}function Ye(O){n.enableZoom&&he(O),n.enableRotate&&_e(O)}function Ie(O){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",S)),Ze(O),O.pointerType==="touch"?He(O):Y(O))}function E(O){n.enabled!==!1&&(O.pointerType==="touch"?Pe(O):fe(O))}function S(O){lt(O),w.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(Pu),r=s.NONE}function Y(O){let me;switch(O.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case os.DOLLY:if(n.enableZoom===!1)return;oe(O),r=s.DOLLY;break;case os.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;ge(O),r=s.PAN}else{if(n.enableRotate===!1)return;se(O),r=s.ROTATE}break;case os.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;se(O),r=s.ROTATE}else{if(n.enablePan===!1)return;ge(O),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fc)}function fe(O){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(O);break;case s.DOLLY:if(n.enableZoom===!1)return;le(O);break;case s.PAN:if(n.enablePan===!1)return;Te(O);break}}function pe(O){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(O.preventDefault(),n.dispatchEvent(fc),ke(O),n.dispatchEvent(Pu))}function ce(O){n.enabled===!1||n.enablePan===!1||Le(O)}function He(O){switch(ae(O),w.length){case 1:switch(n.touches.ONE){case ls.ROTATE:if(n.enableRotate===!1)return;Je(O),r=s.TOUCH_ROTATE;break;case ls.PAN:if(n.enablePan===!1)return;nt(O),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ls.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(O),r=s.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(O),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fc)}function Pe(O){switch(ae(O),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;re(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(O),n.update();break;default:r=s.NONE}}function De(O){n.enabled!==!1&&O.preventDefault()}function Ze(O){w.push(O.pointerId)}function lt(O){delete I[O.pointerId];for(let me=0;me<w.length;me++)if(w[me]==O.pointerId){w.splice(me,1);return}}function ae(O){let me=I[O.pointerId];me===void 0&&(me=new de,I[O.pointerId]=me),me.set(O.pageX,O.pageY)}function ht(O){let me=O.pointerId===w[0]?w[1]:w[0];return I[me]}n.domElement.addEventListener("contextmenu",De),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}};var so=class extends Wa{constructor(e){super(e),this.type=mn}parse(e){let a=function(I,_){switch(I){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},d=function(I,_,y){_=_||1024;let F=I.pos,W=-1,T=0,L="",z=String.fromCharCode.apply(null,new Uint16Array(I.subarray(F,F+128)));for(;0>(W=z.indexOf(`
`))&&T<_&&F<I.byteLength;)L+=z,T+=z.length,F+=128,z+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(F,F+128)));return-1<W?(y!==!1&&(I.pos+=T+W+1),L+z.slice(0,W)):!1},u=function(I){let _=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},L,z;for((I.pos>=I.byteLength||!(L=d(I)))&&a(1,"no header found"),(z=L.match(_))||a(3,"bad initial token"),T.valid|=1,T.programtype=z[1],T.string+=L+`
`;L=d(I),L!==!1;){if(T.string+=L+`
`,L.charAt(0)==="#"){T.comments+=L+`
`;continue}if((z=L.match(y))&&(T.gamma=parseFloat(z[1])),(z=L.match(D))&&(T.exposure=parseFloat(z[1])),(z=L.match(F))&&(T.valid|=2,T.format=z[1]),(z=L.match(W))&&(T.valid|=4,T.height=parseInt(z[1],10),T.width=parseInt(z[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2||a(3,"missing format specifier"),T.valid&4||a(3,"missing image size specifier"),T},p=function(I,_,y){let D=_;if(D<8||D>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);D!==(I[2]<<8|I[3])&&a(3,"wrong scanline width");let F=new Uint8Array(4*_*y);F.length||a(4,"unable to allocate buffer space");let W=0,T=0,L=4*D,z=new Uint8Array(4),H=new Uint8Array(L),$=y;for(;$>0&&T<I.byteLength;){T+4>I.byteLength&&a(1),z[0]=I[T++],z[1]=I[T++],z[2]=I[T++],z[3]=I[T++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=D)&&a(3,"bad rgbe scanline format");let q=0,se;for(;q<L&&T<I.byteLength;){se=I[T++];let ge=se>128;if(ge&&(se-=128),(se===0||q+se>L)&&a(3,"bad scanline data"),ge){let Q=I[T++];for(let le=0;le<se;le++)H[q++]=Q}else H.set(I.subarray(T,T+se),q),q+=se,T+=se}let oe=D;for(let ge=0;ge<oe;ge++){let Q=0;F[W]=H[ge+Q],Q+=D,F[W+1]=H[ge+Q],Q+=D,F[W+2]=H[ge+Q],Q+=D,F[W+3]=H[ge+Q],W+=4}$--}return F},g=function(I,_,y,D){let F=I[_+3],W=Math.pow(2,F-128)/255;y[D+0]=I[_+0]*W,y[D+1]=I[_+1]*W,y[D+2]=I[_+2]*W,y[D+3]=1},x=function(I,_,y,D){let F=I[_+3],W=Math.pow(2,F-128)/255;y[D+0]=Dr.toHalfFloat(Math.min(I[_+0]*W,65504)),y[D+1]=Dr.toHalfFloat(Math.min(I[_+1]*W,65504)),y[D+2]=Dr.toHalfFloat(Math.min(I[_+2]*W,65504)),y[D+3]=Dr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let f=u(m),M=f.width,v=f.height,b=p(m.subarray(m.pos),M,v),A,R,w;switch(this.type){case Ln:w=b.length/4;let I=new Float32Array(w*4);for(let y=0;y<w;y++)g(b,y*4,I,y*4);A=I,R=Ln;break;case mn:w=b.length/4;let _=new Uint16Array(w*4);for(let y=0;y<w;y++)x(b,y*4,_,y*4);A=_,R=mn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:v,data:A,header:f.string,gamma:f.gamma,exposure:f.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case Ln:case mn:a.colorSpace=Bn,a.minFilter=rn,a.magFilter=rn,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}};var ro=class extends Xs{constructor(e=null){super();let t=new ln;t.deleteAttribute("uv");let n=new Xt({side:yn}),s=new Xt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new js(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Xe(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Xe(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Xe(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Xe(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Xe(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Xe(t,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let p=new Xe(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Xe(t,Ks(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Xe(t,Ks(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Xe(t,Ks(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Xe(t,Ks(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new Xe(t,Ks(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new Xe(t,Ks(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ks(i){let e=new Ai;return e.color.setScalar(i),e}var Qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},D_=new Vs(-1,1,1,-1,0,1),pc=class extends qt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},U_=new pc,Wi=class{constructor(e){this._mesh=new Xe(U_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ao=class extends Hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ur=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},oo=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ao(Qs),this.copyPass.material.blending=on,this.clock=new ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ur!==void 0&&(a instanceof Ur?n=!0:a instanceof oo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var co=class extends Hn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Nr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ut},cameraProjectionMatrixInverse:{value:new Ut},cameraWorldMatrix:{value:new Ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Or={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ho={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Lu(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=N_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ri(s,e,e);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}function N_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Fr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:mc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new Ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function mc(i,e,t){let n=O_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function O_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var uo=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,g=e-u,x=t-p,m,f;g>x?(m=1,f=0):(m=0,f=1);let M=g-m+h,v=x-f+h,b=g-1+2*h,A=x-1+2*h,R=l&255,w=c&255,I=this.perm[R+this.perm[w]]%12,_=this.perm[R+m+this.perm[w+f]]%12,y=this.perm[R+1+this.perm[w+1]]%12,D=.5-g*g-x*x;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[I],g,x));let F=.5-M*M-v*v;F<0?s=0:(F*=F,s=F*F*this.dot(this.grad3[_],M,v));let W=.5-b*b-A*A;return W<0?r=0:(W*=W,r=W*W*this.dot(this.grad3[y],b,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),p=1/6,g=(h+d+u)*p,x=h-g,m=d-g,f=u-g,M=e-x,v=t-m,b=n-f,A,R,w,I,_,y;M>=v?v>=b?(A=1,R=0,w=0,I=1,_=1,y=0):M>=b?(A=1,R=0,w=0,I=1,_=0,y=1):(A=0,R=0,w=1,I=1,_=0,y=1):v<b?(A=0,R=0,w=1,I=0,_=1,y=1):M<b?(A=0,R=1,w=0,I=0,_=1,y=1):(A=0,R=1,w=0,I=1,_=1,y=0);let D=M-A+p,F=v-R+p,W=b-w+p,T=M-I+2*p,L=v-_+2*p,z=b-y+2*p,H=M-1+3*p,$=v-1+3*p,q=b-1+3*p,se=h&255,oe=d&255,ge=u&255,Q=this.perm[se+this.perm[oe+this.perm[ge]]]%12,le=this.perm[se+A+this.perm[oe+R+this.perm[ge+w]]]%12,Te=this.perm[se+I+this.perm[oe+_+this.perm[ge+y]]]%12,ke=this.perm[se+1+this.perm[oe+1+this.perm[ge+1]]]%12,Le=.6-M*M-v*v-b*b;Le<0?s=0:(Le*=Le,s=Le*Le*this.dot3(this.grad3[Q],M,v,b));let Je=.6-D*D-F*F-W*W;Je<0?r=0:(Je*=Je,r=Je*Je*this.dot3(this.grad3[le],D,F,W));let nt=.6-T*T-L*L-z*z;nt<0?a=0:(nt*=nt,a=nt*nt*this.dot3(this.grad3[Te],T,L,z));let xe=.6-H*H-$*$-q*q;return xe<0?o=0:(xe*=xe,o=xe*xe*this.dot3(this.grad3[ke],H,$,q)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,p,g,x=(e+t+n+s)*l,m=Math.floor(e+x),f=Math.floor(t+x),M=Math.floor(n+x),v=Math.floor(s+x),b=(m+f+M+v)*c,A=m-b,R=f-b,w=M-b,I=v-b,_=e-A,y=t-R,D=n-w,F=s-I,W=_>y?32:0,T=_>D?16:0,L=y>D?8:0,z=_>F?4:0,H=y>F?2:0,$=D>F?1:0,q=W+T+L+z+H+$,se=a[q][0]>=3?1:0,oe=a[q][1]>=3?1:0,ge=a[q][2]>=3?1:0,Q=a[q][3]>=3?1:0,le=a[q][0]>=2?1:0,Te=a[q][1]>=2?1:0,ke=a[q][2]>=2?1:0,Le=a[q][3]>=2?1:0,Je=a[q][0]>=1?1:0,nt=a[q][1]>=1?1:0,xe=a[q][2]>=1?1:0,Ve=a[q][3]>=1?1:0,B=_-se+c,_e=y-oe+c,re=D-ge+c,he=F-Q+c,ee=_-le+2*c,Ye=y-Te+2*c,Ie=D-ke+2*c,E=F-Le+2*c,S=_-Je+3*c,Y=y-nt+3*c,fe=D-xe+3*c,pe=F-Ve+3*c,ce=_-1+4*c,He=y-1+4*c,Pe=D-1+4*c,De=F-1+4*c,Ze=m&255,lt=f&255,ae=M&255,ht=v&255,O=o[Ze+o[lt+o[ae+o[ht]]]]%32,me=o[Ze+se+o[lt+oe+o[ae+ge+o[ht+Q]]]]%32,Re=o[Ze+le+o[lt+Te+o[ae+ke+o[ht+Le]]]]%32,Me=o[Ze+Je+o[lt+nt+o[ae+xe+o[ht+Ve]]]]%32,$e=o[Ze+1+o[lt+1+o[ae+1+o[ht+1]]]]%32,ft=.6-_*_-y*y-D*D-F*F;ft<0?h=0:(ft*=ft,h=ft*ft*this.dot4(r[O],_,y,D,F));let mt=.6-B*B-_e*_e-re*re-he*he;mt<0?d=0:(mt*=mt,d=mt*mt*this.dot4(r[me],B,_e,re,he));let ut=.6-ee*ee-Ye*Ye-Ie*Ie-E*E;ut<0?u=0:(ut*=ut,u=ut*ut*this.dot4(r[Re],ee,Ye,Ie,E));let be=.6-S*S-Y*Y-fe*fe-pe*pe;be<0?p=0:(be*=be,p=be*be*this.dot4(r[Me],S,Y,fe,pe));let V=.6-ce*ce-He*He-Pe*Pe-De*De;return V<0?g=0:(V*=V,g=V*V*this.dot4(r[$e],ce,He,Pe,De)),27*(h+d+u+p+g)}};var Br=class i extends Hn{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Lu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Mn(this.width,this.height,{type:mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new cn({defines:Object.assign({},Nr.defines),uniforms:ai.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,blending:on,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Va,this.normalMaterial.blending=on,this.pdMaterial=new cn({defines:Object.assign({},Fr.defines),uniforms:ai.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new cn({defines:Object.assign({},Or.defines),uniforms:ai.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,blending:on}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new cn({uniforms:ai.clone(Qs.uniforms),vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$a,blendDst:Js,blendEquation:Wn,blendSrcAlpha:Ja,blendDstAlpha:Js,blendEquationAlpha:Wn}),this.blendMaterial=new cn({uniforms:ai.clone(ho.uniforms),vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ec,blendSrc:$a,blendDst:Js,blendEquation:Wn,blendSrcAlpha:Ja,blendDstAlpha:Js,blendEquationAlpha:Wn}),this.fsQuad=new Wi(null),this.originalClearColor=new pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ws,this.depthTexture.format=Hi,this.depthTexture.type=wi,this.normalRenderTarget=new Mn(this.width,this.height,{minFilter:sn,magFilter:sn,type:mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=mc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=on,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new uo,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ri(s,e,e,Tn,di);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}};Br.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Du={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fo=class extends Hn{constructor(){super();let e=Du;this.uniforms=ai.clone(e.uniforms),this.material=new ka({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function zr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new qt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Uu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][u]);let g=Uu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Uu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Gt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function Nu(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new N,new N,new N],r=new N,a=new N,o=new N,l=new N;function c(x){let m=~~(x.x*n),f=~~(x.y*n),M=~~(x.z*n);return`${m},${f},${M}`}let h=i.index?i.toNonIndexed():i,d=h.attributes.position,u={};for(let x=0,m=d.count/3;x<m;x++){let f=3*x,M=s[0].fromBufferAttribute(d,f+0),v=s[1].fromBufferAttribute(d,f+1),b=s[2].fromBufferAttribute(d,f+2);r.subVectors(b,v),a.subVectors(M,v);let A=new N().crossVectors(r,a).normalize();for(let R=0;R<3;R++){let w=s[R],I=c(w);I in u||(u[I]=[]),u[I].push(A)}}let p=new Float32Array(d.count*3),g=new Gt(p,3,!1);for(let x=0,m=d.count/3;x<m;x++){let f=3*x,M=s[0].fromBufferAttribute(d,f+0),v=s[1].fromBufferAttribute(d,f+1),b=s[2].fromBufferAttribute(d,f+2);r.subVectors(b,v),a.subVectors(M,v),o.crossVectors(r,a).normalize();for(let A=0;A<3;A++){let R=s[A],w=c(R),I=u[w];l.set(0,0,0);for(let _=0,y=I.length;_<y;_++){let D=I[_];o.dot(D)>t&&l.add(D)}l.normalize(),g.setXYZ(f+A,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}var Hr=new N;function Zn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Hr.copy(e),Hr[n]=0,Hr.normalize();let c=.5*a/(a+o),h=1-Hr.angleTo(i)/l;return Math.sign(Hr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var po=class extends ln{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new N,l=new N,c=new N(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new N,x=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[f+0]=Zn(g,l,"z","y",r,n),u[f+1]=1-Zn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[f+0]=1-Zn(g,l,"z","y",r,n),u[f+1]=1-Zn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[f+0]=1-Zn(g,l,"x","z",r,e),u[f+1]=Zn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[f+0]=1-Zn(g,l,"x","z",r,e),u[f+1]=1-Zn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[f+0]=1-Zn(g,l,"x","y",r,e),u[f+1]=1-Zn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[f+0]=Zn(g,l,"x","y",r,e),u[f+1]=1-Zn(g,l,"y","x",r,t);break}}};var ku="2.0",So=(()=>{try{let i=document.currentScript&&document.currentScript.src;return i?i.replace(/[^/]*$/,""):""}catch{return""}})(),F_=["cedar","burgundy","walnut","sapele","birch","coffee","shousugi","whitewash","greywash","patina"],Ou=26,Wt=typeof window<"u"?window:globalThis,kr={leaf_rs:1.9375,leaf_tb:2.5,jamb_trim:1.625,trim_t:.75,rail_top:5,rail_mid:5,rail_bot:5,glass_t:.75,panel_t:.75,clad_board:5.5,clad_reveal:.25,clad_t:.75,plank:6,xbuck:3.5,bevel:1.5,louvre_pitch:3.5,louvre_w:4,louvre_deg:35,astragal:1.5,jamb:.75,threshold:1,header_face:5.5,gaps:{shim_side:.375,shim_top:.375,jamb_l:.375,jamb_r:.375,door:.125,center:.25,head:.25,sill:.375}};function B_(i){let e=null;try{typeof Wt.rbFor=="function"&&(e=Wt.rbFor(i))}catch{e=null}if(!e)return kr;let t=Object.assign({},kr,e);t.gaps=Object.assign({},kr.gaps);for(let n in e.gaps||{})e.gaps[n]!=null&&!isNaN(+e.gaps[n])&&(t.gaps[n]=+e.gaps[n]);for(let n of["jamb","threshold","header_face","leaf_rs","leaf_tb"])(t[n]==null||isNaN(+t[n]))&&(t[n]=kr[n]);return t}var z_=1.75;function Vu(i,e,t){let n=i.t,s=new Array(i.n);e=Math.max(0,Math.min(1,e));let r=[];i.Lq>0&&r.push({dir:1,idx:[...Array(i.Lq).keys()],jg:i.jL}),i.Rq>0&&r.push({dir:-1,idx:[...Array(i.Rq).keys()].map(a=>i.n-1-a),jg:i.jR});for(let a of r){let o=a.idx.length,l=a.dir,c=(o===1?88:86)*Math.PI/180,h=c*e,d=Math.max(z_,(a.jg*a.jg+n*n/4)/(2*a.jg)+.0625),u=Math.max(.5,d-a.jg),p=Math.floor(o/2),g=p>1?Math.min(.22,.5/p):0,x=y=>c*Math.max(0,Math.min(1,(e-y*g)/(1-(p-1)*g))),m=y=>[l*Math.cos(y),Math.sin(y)],f=y=>[-l*Math.sin(y),Math.cos(y)],M=i.leaves[a.idx[0]],b=[(l>0?M.x:M.x+M.w)+l*u,0],A=(y,D,F)=>{if(y===0){let oe=m(D);return[b[0]-u*oe[0],b[1]-u*oe[1]]}let W=i.leaves[a.idx[y-1]].w,T=i.gapI(Math.min(a.idx[y-1],a.idx[y])),L=y%2===1?-n/2:n/2,z=m(F.a),H=f(F.a),$=[F.O[0]+z[0]*(W+T/2)+H[0]*L,F.O[1]+z[1]*(W+T/2)+H[1]*L],q=m(D),se=f(D);return[$[0]+q[0]*T/2-se[0]*L,$[1]+q[1]*T/2-se[1]*L]},R=null,w=(y,D,F)=>{let W={a:D,O:A(y-1,D,F)},T=i.leaves[a.idx[y]].w,L=H=>{let $=A(y,H,W),q=m(H);return $[1]+q[1]*(T-u)},z=-D;for(let H=0;H<50;H++){let $=L(z),q=(L(z+1e-6)-$)/1e-6;if(Math.abs($)<1e-10||!q)break;z-=$/q}return z},I=null,_=null;for(let y=0;y<o;y++){let D=i.leaves[a.idx[y]].w,F;if(y%2===0&&y===o-1&&o>=3)F=h*e;else if(y%2===0&&y===o-1)F=h;else if(y%2===0){if(F=x(y/2),w(y+1,F,R)>0){let z=F,H=F+1.2;for(let $=0;$<60;$++){let q=(z+H)/2;w(y+1,q,R)>0?z=q:H=q}F=H}I=F,_=R}else F=w(y,I,_);let W=A(y,F,R),T=m(F),L=f(F);s[a.idx[y]]={X:l>0?T:[-T[0],-T[1]],Z:L,C:[W[0]+T[0]*D/2,W[1]+T[1]*D/2]},R={a:F,O:W}}}if(t>0&&i.man){let a=i.leaves[i.man.i],o=Math.max(0,Math.min(1,t))*88*Math.PI/180,l=i.man.hinge!=="R",c=l?1:-1,h=i.man.swing==="in"?-1:1,d=[l?a.x:a.x+a.w,h*n/2],u=[c*Math.cos(o),h*Math.sin(o)],p=[-c*h*Math.sin(o),Math.cos(o)];s[i.man.i]={X:c>0?u:[-u[0],-u[1]],Z:p,C:[d[0]+u[0]*a.w/2-h*p[0]*n/2,d[1]+u[1]*a.w/2-h*p[1]*n/2]}}return{poses:s}}var Kt={lib:null,busy:!1,geo:{},pin:.315,inb:.5906,KT:[[0,0],[.7591,0],[.7591,.3354],[.6614,.3354],[.6614,.1969],[.098,.1969],[.098,1.8701],[2.3429,1.8701],[2.3429,.1969],[1.7795,.1969],[1.7795,.3354],[1.6819,.3354],[1.6819,0],[2.4409,0],[2.4409,1.9685],[0,1.9685]]},H_=i=>/(^|[^A-Z0-9])E3([^0-9]|$)|T24|TITLE.?24/i.test(String(i&&(i.track||i.system||i.track_system||i.hw_system)||""));function k_(){Kt.lib||Kt.busy||Kt.fail||(Kt.busy=!0,fetch(So+"e3-hardware-1.1.json").then(i=>i.json()).then(i=>{Kt.lib=i,Kt.busy=!1,G.last&&G.r&&Ec(G.last[0],G.last[1],G.last[2],G.last[3])}).catch(i=>{Kt.busy=!1,Kt.fail=!0,console.warn("TR3D e3 hardware",i)}))}function V_(i,e,t,n){let s=i+":"+e+":"+(t?1:0)+(n?1:0);if(Kt.geo[s]!==void 0)return Kt.geo[s];let r=Kt.lib&&Kt.lib[i]&&Kt.lib[i][e];if(!r)return Kt.geo[s]=null;let a=g=>Uint8Array.from(atob(g),x=>x.charCodeAt(0)).buffer,o=new Int16Array(a(r.v)),l=new Uint16Array(a(r.f)),c=new Float32Array(o.length),h=(t?-1:1)*(n?-1:1),d=n?-1:1;for(let g=0;g<o.length;g+=3)c[g]=o[g]/2e3*h,c[g+1]=o[g+1]/2e3,c[g+2]=o[g+2]/2e3*d;let u=new Uint16Array(l.length);if(t)for(let g=0;g<l.length;g+=3)u[g]=l[g],u[g+1]=l[g+2],u[g+2]=l[g+1];else u.set(l);let p=new qt;return p.setAttribute("position",new Gt(c,3)),p.setIndex(new Gt(u,1)),p=Nu(p,.7),Kt.geo[s]=p}function G_(i,e){let t=i.t,n=t/2+Kt.pin,s=Kt.inb,r=new Array(i.n);e=Math.max(0,Math.min(1,e));let a=[];i.Lq>0&&a.push({dir:1,idx:[...Array(i.Lq).keys()]}),i.Rq>0&&a.push({dir:-1,idx:[...Array(i.Rq).keys()].map(o=>i.n-1-o)});for(let o of a){let l=o.idx.length,c=o.dir,h=88*Math.PI/180*e,d=x=>[c*Math.cos(x),Math.sin(x)],u=x=>[-c*Math.sin(x),Math.cos(x)],p=i.leaves[o.idx[0]],g=[(c>0?p.x:p.x+p.w)+c*s,n];for(let x=0;x<l;x+=2){let m=o.idx[x],f=i.leaves[m].w,M=d(h),v=u(h),b=x?i.gapI(Math.min(o.idx[x-1],m)):0,A=x===0?[g[0]-s*M[0]-n*v[0],g[1]-s*M[1]-n*v[1]]:[g[0]+b/2*M[0]-n*v[0],g[1]+b/2*M[1]-n*v[1]];if(r[m]={X:c>0?M:[-M[0],-M[1]],Z:v,C:[A[0]+M[0]*f/2,A[1]+M[1]*f/2]},x===l-1)break;let R=o.idx[x+1],w=i.leaves[R].w,I=i.gapI(Math.min(m,R)),_=[A[0]+M[0]*(f+I/2)-v[0]*n,A[1]+M[1]*(f+I/2)-v[1]*n],y=x+1===l-1?w-s:w+i.gapI(Math.min(R,o.idx[x+2]))/2,D=I/2+y,F=-h;for(let z=0;z<40;z++){let H=_[1]+D*Math.sin(F)+2*n*Math.cos(F)-n,$=D*Math.cos(F)-2*n*Math.sin(F);if(Math.abs(H)<1e-10||!$)break;F-=H/$}let W=d(F),T=u(F),L=[_[0]+W[0]*I/2+T[0]*n,_[1]+W[1]*I/2+T[1]*n];r[R]={X:c>0?W:[-W[0],-W[1]],Z:T,C:[L[0]+W[0]*w/2,L[1]+W[1]*w/2]},g=[L[0]+W[0]*y+T[0]*n,L[1]+W[1]*y+T[1]*n]}}return{poses:r}}var Oe={tex:{},mats:{},loader:null,env:null,onload:null},pi=.4;function Pi(i,e){if(Oe.tex[i])return Oe.tex[i];let t=(Oe.loader||(Oe.loader=new Xa)).load(i,()=>{Oe.onload&&Oe.onload()});return t.wrapS=t.wrapT=Dn,t.anisotropy=8,e&&(t.colorSpace=Yt),Oe.tex[i]=t}var jn=i=>new pt(/^#/.test(String(i||""))?i:"#cccccc");function W_(i){return i&&F_.includes(i.k)?i.k:null}function Fu(i,e){let t="w:"+i+":"+(e||"");if(Oe.mats[t])return Oe.mats[t];let n=So+"skins/"+i,s=new Ci({map:Pi(n+"_c.jpg",!0),normalMap:Pi(n+"_n.jpg"),roughnessMap:Pi(n+"_orm.jpg"),aoMap:Pi(n+"_orm.jpg"),aoMapIntensity:.9,roughness:1,metalness:0,normalScale:new de(.6,.6),clearcoat:i==="shousugi"?0:.07,clearcoatRoughness:.6,envMapIntensity:pi,vertexColors:!0,emissive:16777215,emissiveMap:Pi(n+"_c.jpg",!0),emissiveIntensity:i==="patina"?.05:.13});if(i==="patina"){s.metalnessMap=Pi(n+"_orm.jpg"),s.metalness=1,s.clearcoat=0,s.normalScale.set(.5,.5),s.aoMapIntensity=0,Pi(n+"_c.jpg",!0).repeat.set(.12,.12);for(let r of["_n.jpg","_orm.jpg"])Pi(n+r).repeat.set(.4,.4)}return s.color=e?jn(e):new pt(i==="whitewash"||i==="birch"||i==="greywash"?14474460:14869218),s.emissive.copy(s.color),Oe.mats[t]=s}function xo(i,e){let t="p:"+i+":"+(e||"");if(Oe.mats[t])return Oe.mats[t];let n=jn(i);if(e==="metal"){let r=q_("metalstreak",512,(o,l)=>{o.fillStyle="#8c8c8c",o.fillRect(0,0,l,l);let c=oi(4411);for(let h=0;h<5200;h++){let d=c()*l,u=c()*l,p=30+c()*300,g=c()<.5?255:0;o.fillStyle="rgba("+g+","+g+","+g+","+(.03+c()*.07)+")",o.fillRect(d,u,.6+c()*1.1,p),u+p>l&&o.fillRect(d,u-l,.6+c()*1.1,p)}for(let h=0;h<26;h++){let d=c()*l,u=c()*l,p=40+c()*120,g=o.createRadialGradient(d,u,0,d,u,p),x=c()<.5?255:0;g.addColorStop(0,"rgba("+x+","+x+","+x+",0.07)"),g.addColorStop(1,"rgba("+x+","+x+","+x+",0)"),o.fillStyle=g,o.fillRect(d-p,u-p,2*p,2*p)}},1);r.colorSpace=In;let a=new Ci({color:n,roughness:.74,roughnessMap:r,metalness:.22,bumpMap:r,bumpScale:.3,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.6});return Oe.mats[t]=a}let s=new Ci({color:n,roughness:e==="metal"?.38:.6,metalness:e==="metal"?.75:0,normalMap:e==="metal"?null:Pi(So+"skins/birch_n.jpg"),normalScale:new de(.16,.16),clearcoat:e==="metal"?.3:0,clearcoatRoughness:.5,envMapIntensity:e==="metal"?1:.2,emissive:e==="metal"?0:n,emissiveIntensity:e==="metal"?0:.34*(1-Math.min(1,.2126*n.r+.7152*n.g+.0722*n.b))});return Oe.mats[t]=s}function mo(i,e){if(!i)return xo("#cccccc");let t=W_(i);return t?Fu(t):i.type==="stain"?Fu("birch",i.hex):xo(i.hex,e)}function X_(i){if(Oe.glassEnv)return Oe.glassEnv;let e=2048,t=1024,n=512,s=tr(n,901,5,4),r=tr(n,902,5,16),a=tr(n,903,4,64),o=new Float32Array(e*t*4),l=(u,p,g)=>u[(Math.floor(g*n)%n+n)%n*n+(Math.floor(p*n)%n+n)%n],c=(u,p,g)=>u+(p-u)*g,h=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u));for(let u=0;u<t;u++){let p=(u/(t-1)-.5)*180;for(let g=0;g<e;g++){let x=g/e,m=4*(u*e+g),f,M,v,b=.4+4.4*l(s,x*3,.37)+2.2*l(r,x*7,.11)+.9*l(a,x*9,.73),A=.8+2.4*l(s,x*2+.3,.81);if(p<0){let R=h((-p-.6)/3.2),w=.9+.2*l(a,x*6,-p/40);f=c(.1,.5,R)*w,M=c(.2,.49,R)*w,v=c(.08,.46,R)*w}else{let R=h(p/55),w=h((l(s,x*2+p/140,p/75+.2)*.62+l(r,x*4,p/34)*.38-.5)/.16)*h(p/5)*(1-h((p-48)/30));if(f=c(1.55,.36,R),M=c(1.75,.66,R),v=c(1.95,1.3,R),f=c(f,2.5,w*.85),M=c(M,2.5,w*.85),v=c(v,2.55,w*.85),p<A){let _=.55+.25*l(r,x*5,.4);f=c(f,.34*_,.85),M=c(M,.43*_,.85),v=c(v,.52*_,.85)}let I=b-p;if(I>0&&!(I<.9&&l(a,x*34,p/4)>.58)){let _=h(1-I/2.5)*.6+.4*l(a,x*22,p/5),y=.55+.9*l(r,x*14,p/9);f=(.03+.07*_)*y,M=(.065+.13*_)*y,v=(.03+.04*_)*y}}o[m]=f,o[m+1]=M,o[m+2]=v,o[m+3]=1}}let d=new Ri(o,e,t,Tn,Ln);d.mapping=ts,d.colorSpace=Bn,d.magFilter=d.minFilter=rn,d.needsUpdate=!0;try{Oe.glassEnv=i.fromEquirectangular(d).texture}catch{Oe.glassEnv=null}return d.dispose(),Oe.glassEnv}function xc(){return Oe.frost?Oe.mats.glassF||(Oe.mats.glassF=new Ci({color:12569544,roughness:.62,metalness:0,transmission:.55,thickness:.6,ior:1.52,specularIntensity:.6,clearcoat:.25,clearcoatRoughness:.6,envMapIntensity:.9,side:vn})):Oe.mats.glass||(Oe.mats.glass=new Ci({color:10135715,roughness:.015,metalness:0,transmission:1,thickness:.6,ior:1.52,attenuationColor:new pt(8364181),attenuationDistance:4,specularIntensity:1,specularColor:new pt(16777215),clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.2,side:vn}))}var gc={nickel:{c:"#c2c0b8",m:1,r:.3},black:{c:"#1a1a1b",m:.55,r:.48},orb:{c:"#3b2a1f",m:.85,r:.42}};function Y_(i){let e=gc[i]||gc.nickel,t="h:"+(gc[i]?i:"nickel");return Oe.mats[t]||(Oe.mats[t]=new Xt({color:jn(e.c),metalness:e.m,roughness:e.r}))}function er(i,e){let t="f:"+i+e;return Oe.mats[t]||(Oe.mats[t]=new Xt({color:jn(i),roughness:e??.9,metalness:0,envMapIntensity:pi}))}function q_(i,e,t,n){if(Oe.tex[i])return Oe.tex[i];let s=document.createElement("canvas");s.width=s.height=e,t(s.getContext("2d"),e);let r=new Vi(s);return r.wrapS=r.wrapT=Dn,r.repeat.set(n,n),r.colorSpace=Yt,r.anisotropy=8,Oe.tex[i]=r}function tr(i,e,t,n){let s=new Float32Array(i*i),r=1,a=0;for(let o=0;o<t;o++){let l=n<<o,c=oi(e+o*101),h=new Float32Array(l*l);for(let d=0;d<h.length;d++)h[d]=c();for(let d=0;d<i;d++){let u=d/i*l,p=Math.floor(u),g=u-p,x=g*g*(3-2*g);for(let m=0;m<i;m++){let f=m/i*l,M=Math.floor(f),v=f-M,b=v*v*(3-2*v),A=(M+1)%l,R=(p+1)%l,w=h[p*l+M],I=h[p*l+A],_=h[R*l+M],y=h[R*l+A];s[d*i+m]+=r*(w+(I-w)*b+(_-w)*x+(w-I-_+y)*b*x)}}a+=r,r*=.55}for(let o=0;o<s.length;o++)s[o]/=a;return s}function vc(i,e,t){if(Oe.tex[i])return Oe.tex[i];let n=tr(e,t.seed,4,3),s=tr(e,t.seed+7,4,24),r=tr(e,t.seed+13,2,e>>1),a=new Float32Array(e*e),o=document.createElement("canvas");o.width=o.height=e;let l=o.getContext("2d"),c=l.createImageData(e,e),h=c.data,d=jn(t.color).convertLinearToSRGB(),u=(t.pal||[]).map(v=>jn(v).convertLinearToSRGB());for(let v=0;v<e*e;v++){let b=v%e,A=v/e|0,R=null,w=s[v]*t.mid+r[v]*t.fine,I=1+(n[v]-.5)*t.tone+(r[v]-.5)*t.grit;if(t.rows){let y=Math.floor(A/t.rows),D=A%t.rows,F=Math.sin(y*78.233+t.seed)*43758.5453,W=t.align?0:t.jit?Math.floor((F-Math.floor(F))*t.tab):y%2*t.tab/2,T=Math.floor((b+W)/t.tab),L=(b+W)%t.tab,z=Math.sin(y*127.1+T*311.7+t.seed)*43758.5453,H=z-Math.floor(z);if(I*=t.even?.96+H*.08:u.length?.9+H*.16:.78+H*.4,u.length){let $=Math.sin(y*53.3+T*91.1+t.seed)*24634.6345;R=u[Math.floor(($-Math.floor($))*u.length)]}(D<2||L<1&&!t.even)&&(I*=.45,w-=.6),w+=D/t.rows*.5}if(t.joint&&(b%t.joint<(t.jw||2)||A%t.joint<(t.jw||2))&&(I*=.55,w-=.8),t.herr){let y=t.herr,D=Math.floor(b/y),F=Math.floor(A/y),W=((D-F)%4+4)%4,T=b%y,L=A%y,z=t.jw||2,H=T<z,$=T>=y-z,q=L<z,se=L>=y-z,oe=W===0?H||q||se:W===1?$||q||se:W===3?H||$||q:H||$||se,ge=W===1?D-1:D,Q=W===2?F-1:F,le=Math.sin(ge*127.1+Q*311.7+(W<2?0:57)+t.seed)*43758.5453,Te=le-Math.floor(le);if(u.length){let ke=Math.sin(ge*53.3+Q*91.1+(W<2?0:17)+t.seed)*24634.6345;R=u[Math.floor((ke-Math.floor(ke))*u.length)]}oe?(I*=.5,w-=1.2):I*=(u.length?.9:.84)+Te*(u.length?.16:.28)}if(t.mix){let y=t.mix,D=3*y,F=Math.floor(A/y),W=F%2*D/2,T=(b+W)%D,L=A%y,z=T<2*y,H=z?T:T-2*y,$=t.jw||3,q=Math.floor((b+W)/D)*2+(z?0:1),se=Math.sin(F*127.1+q*311.7+t.seed)*43758.5453,oe=se-Math.floor(se),ge=Math.sin(F*53.3+q*91.1+t.seed)*24634.6345;u.length&&(R=u[Math.floor((ge-Math.floor(ge))*u.length)]),H<$||L<$?(I*=.55,w-=1.1):I*=.95+oe*.1}if(t.slab){let y=t.jw||5,D=Math.floor(A/t.slab[1]),F=D%2*t.slab[0]/2,W=(b+F)%t.slab[0],T=A%t.slab[1],L=Math.sin(D*91.7+Math.floor((b+F)/t.slab[0])*37.3+t.seed)*43758.5453,z=L-Math.floor(L);W<y||T<y?(I*=.42,w-=1.4):I*=.93+z*.12}if(t.cells){let y=t.cells,D=e/y,F=Math.floor(b/D),W=Math.floor(A/D),T=1e9,L=1e9,z=0;for(let H=-1;H<=1;H++)for(let $=-1;$<=1;$++){let q=(F+H+y)%y,se=(W+$+y)%y,oe=Math.sin(q*127.1+se*311.7+t.seed)*43758.5453,ge=Math.sin(q*269.5+se*183.3+t.seed)*43758.5453,Q=(F+H+.15+.7*(oe-Math.floor(oe)))*D,le=(W+$+.15+.7*(ge-Math.floor(ge)))*D,Te=Math.hypot(Q-b,le-A);Te<T?(L=T,T=Te,z=q*31+se):Te<L&&(L=Te)}if(L-T<(t.jw||5))I*=.58,w-=1.4;else{let H=Math.sin(z*12.9898+t.seed)*43758.5453,$=H-Math.floor(H);I*=.82+$*.3,w+=$*.5}}if(t.seam){let y=b%t.seam,D=t.seamW||3;y<D?(w+=1.6,I*=1.06):y<D+5&&(I*=.72,w-=.4)}if(t.barrel){let y=b%t.barrel/t.barrel,D=Math.sin(y*Math.PI);if(w+=D*(t.barrelK||1.8),I*=t.deep?.5+Math.pow(D,.7)*.62:.82+D*.3,t.deep){let F=(A+Math.round(D*14))%t.rows;F<7?(I*=.5,w-=1.5):F>t.rows-10&&(I*=1.08,w+=.8)}}let _=R||d;a[v]=w,h[v*4]=Math.min(255,_.r*255*I),h[v*4+1]=Math.min(255,_.g*255*I),h[v*4+2]=Math.min(255,_.b*255*I),h[v*4+3]=255}l.putImageData(c,0,0);let p=document.createElement("canvas");p.width=p.height=e;let g=p.getContext("2d"),x=g.createImageData(e,e),m=x.data,f=t.bump;for(let v=0;v<e;v++)for(let b=0;b<e;b++){let A=v*e+b,R=(a[v*e+(b+1)%e]-a[v*e+(b+e-1)%e])*f,w=(a[(v+1)%e*e+b]-a[(v+e-1)%e*e+b])*f,I=Math.hypot(R,w,1);m[A*4]=(-R/I*.5+.5)*255,m[A*4+1]=(w/I*.5+.5)*255,m[A*4+2]=(1/I*.5+.5)*255,m[A*4+3]=255}g.putImageData(x,0,0);let M=(v,b)=>{let A=new Vi(v);return A.wrapS=A.wrapT=Dn,A.anisotropy=8,b&&(A.colorSpace=Yt),A};return Oe.tex[i]={map:M(o,!0),normalMap:M(p,!1)}}function $t(i,e,t){if(Oe.mats[i])return Oe.mats[i];let n=vc(i,e.n||512,e);return Oe.mats[i]=new Xt({map:n.map,normalMap:n.normalMap,roughness:t,metalness:0,envMapIntensity:pi})}function oi(i){let e=i>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function kn(i,e,t,n){let s=i.index?i.toNonIndexed():i;s.computeVertexNormals();let r=s.attributes.position,a=s.attributes.normal,o=new Float32Array(r.count*2),l=oi(t),c=l(),h=l();for(let g=0;g<r.count;g+=3){let x=Math.abs(a.getX(g)+a.getX(g+1)+a.getX(g+2)),m=Math.abs(a.getY(g)+a.getY(g+1)+a.getY(g+2)),f=Math.abs(a.getZ(g)+a.getZ(g+1)+a.getZ(g+2)),M=x>=m&&x>=f?0:m>=f?1:2;for(let v=0;v<3;v++){let b=[r.getX(g+v),r.getY(g+v),r.getZ(g+v)],A,R,w=e==="x"?0:e==="y"?1:2;if(M===w){let I=[0,1,2].filter(_=>_!==M);A=b[I[0]]*3,R=b[I[1]]*3}else{let I=[0,1,2].find(_=>_!==M&&_!==w);A=b[I],R=b[w]}o[(g+v)*2]=A/Ou+c,o[(g+v)*2+1]=R/Ou+h}}s.setAttribute("uv",new Gt(o,2));let d=1+(l()-.5)*2*(n||0),u=(l()-.5)*(n||0)*.5,p=new Float32Array(r.count*3);for(let g=0;g<r.count;g++)p[3*g]=d*(1+u),p[3*g+1]=d,p[3*g+2]=d*(1-u);return s.setAttribute("color",new Gt(p,3)),s}function Bu(i,e,t){let n=new Rn(i.map(r=>new de(r[0],r[1])));for(let r of e||[])n.holes.push(new Ys(r.map(a=>new de(a[0],a[1]))));let s=new qn(n,{depth:Math.abs(t),bevelEnabled:!1,curveSegments:1});return s.translate(0,0,-Math.abs(t)),s}function Z_(i){let e=new Map;for(let t of i.children.slice()){if(!t.isMesh)continue;let n=t.material.uuid+(t.castShadow?"s":"n");(e.get(n)||e.set(n,[]).get(n)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=null;try{n=zr(t.map(r=>r.geometry),!1)}catch{n=null}if(!n)continue;let s=new Xe(n,t[0].material);s.castShadow=t[0].castShadow,s.receiveShadow=t[0].receiveShadow,s.name="parts";for(let r of t)i.remove(r),r.geometry.dispose();i.add(s)}}function go(i,e,t){let n=i[0],s=i[1],r=i[i.length-1],a=e.xc,o=e.t,l=null,c="y";if(n==="box"){let[,,u,p,g,x,m,f]=i;if(!(x>0&&m>0&&f>0))return null;let M=r==="glassm"||/Backer|groove|opening/i.test(s)||Math.min(x,f,m)<.35?0:Math.min(.055,Math.min(x,f,m)*.18);l=M?new po(x,f,m,1,M).toNonIndexed():new ln(x,f,m),l.translate(u+x/2-a,g+f/2,o/2-(p+m/2)),c=/Panel|Slab|field|frame|plank|Glass|sash/i.test(s)?x>f*2.5?"x":"y":x>f?"x":"y",/plank|slat|board|Board/i.test(s)&&(c=x>f?"x":"y")}else if(n==="slabh"){let[,,u,p,g,x,m,f,M]=i;if(!(x>0&&m>0&&f>0))return null;let v=(M||[]).filter(A=>A&&A.length>=3),b=v.map(A=>{let R=A.map(_=>_[0]),w=A.map(_=>_[1]),I=[Math.max(0,Math.min(...R)),Math.min(x,Math.max(...R)),Math.max(0,Math.min(...w)),Math.min(f,Math.max(...w))];return A.length===4&&A.every(_=>(Math.abs(_[0]-Math.min(...R))<1e-4||Math.abs(_[0]-Math.max(...R))<1e-4)&&(Math.abs(_[1]-Math.min(...w))<1e-4||Math.abs(_[1]-Math.max(...w))<1e-4))?I:null});if(v.length&&b.every(Boolean)){let A=[...new Set([0,x,...b.flatMap(_=>[_[0],_[1]])])].sort((_,y)=>_-y),R=[],w=[],I=[];for(let _=0;_+1<A.length;_++){let y=A[_],D=A[_+1];if(D-y<1e-4)continue;let F=0,W=b.filter(L=>L[0]<D-1e-4&&L[1]>y+1e-4).map(L=>[L[2],L[3]]).sort((L,z)=>L[0]-z[0]),T=[];for(let L of W)L[0]-F>.001&&T.push([F,L[0]]),F=Math.max(F,L[1]);f-F>.001&&T.push([F,f]);for(let L of T){let z=new ln(D-y,L[1]-L[0],m).toNonIndexed();z.translate((y+D)/2,(L[0]+L[1])/2,-m/2),R.push(...z.attributes.position.array),w.push(...z.attributes.normal.array),I.push(...z.attributes.uv.array),z.dispose()}}if(!R.length)return null;l=new qt,l.setAttribute("position",new vt(R,3)),l.setAttribute("normal",new vt(w,3)),l.setAttribute("uv",new vt(I,2))}else l=Bu([[0,0],[x,0],[x,f],[0,f]],v,m);l.translate(u-a,g,o/2-p),c=/board|slat|Board/i.test(s)&&x>f?"x":"y"}else if(n==="poly"){let[,,u,p,g]=i;if(!g||g.length<3)return null;l=Bu(g,null,p),l.translate(-a,0,o/2-u);let x=1e9,m=-1e9,f=1e9,M=-1e9;for(let v of g)x=Math.min(x,v[0]),m=Math.max(m,v[0]),f=Math.min(f,v[1]),M=Math.max(M,v[1]);c=m-x>M-f?"x":"y"}else if(n==="prismx"){let[,,u,p,g]=i;if(!g||g.length<3)return null;let x=new Rn(g.map(m=>new de(o/2-m[0],m[1])));l=new qn(x,{depth:Math.abs(p),bevelEnabled:!1,curveSegments:1}),l.rotateY(-Math.PI/2),l.translate(u-a+Math.abs(p),0,0),c="x"}else if(n==="prismz"){let[,,u,p,g]=i;if(!g||g.length<3)return null;let x=new Rn(g.map(m=>new de(m[0]-a,-(o/2-m[1]))));l=new qn(x,{depth:Math.abs(p),bevelEnabled:!1,curveSegments:1}),l.rotateX(-Math.PI/2),l.translate(0,u,0),c="y"}if(!l)return null;if(r==="glassm"){let u=null;if(n==="box"){let[,,p,g,x,m,f,M]=i;u=[p-a,p-a+m,x,x+M,o/2-g,o/2-g-f]}else if(n==="poly"){let[,,p,g,x]=i,m=x.map(R=>R[0]),f=x.map(R=>R[1]),M=Math.min(...m),v=Math.max(...m),b=Math.min(...f),A=Math.max(...f);x.length===4&&x.every(R=>(Math.abs(R[0]-M)<1e-4||Math.abs(R[0]-v)<1e-4)&&(Math.abs(R[1]-b)<1e-4||Math.abs(R[1]-A)<1e-4))&&(u=[M-a,v-a,b,A,o/2-p,o/2-p-g])}if(u){let p=oi(t*7+13),g=(.006+p()*.008)*(p()<.7?1:-1),x=(p()-.5)*.007,m=(p()-.5)*.007,f=8,M=[],v=[],b=(u[3]-u[2])/Math.max(1e-6,u[1]-u[0]),A=(_,y,D,F)=>{M.push(u[0]+(u[1]-u[0])*_,u[2]+(u[3]-u[2])*y,D);let W=g*(_-.5)*2*Math.min(1,1/b)+x,T=g*(y-.5)*2*Math.min(1,b)+m,L=Math.hypot(W,T,1);v.push(F*W/L,F*T/L,F/L)};for(let[_,y]of[[u[4],1],[u[5],-1]])for(let D=0;D<f;D++)for(let F=0;F<f;F++){let W=F/f,T=(F+1)/f,L=D/f,z=(D+1)/f;y>0?(A(W,L,_,y),A(T,L,_,y),A(T,z,_,y),A(W,L,_,y),A(T,z,_,y),A(W,z,_,y)):(A(W,L,_,y),A(T,z,_,y),A(T,L,_,y),A(W,L,_,y),A(W,z,_,y),A(T,z,_,y))}l.dispose();let R=new qt,w=M.length/3;R.setAttribute("position",new vt(M,3)),R.setAttribute("normal",new vt(v,3)),R.setAttribute("uv",new Gt(new Float32Array(w*2),2)),R.setAttribute("color",new Gt(new Float32Array(w*3).fill(1),3));let I=new Xe(R,xc());return I.name=s,I.castShadow=!1,I.receiveShadow=!1,I}}let h;r==="glassm"?h=xc():r==="dark"?h=/groove/i.test(s)?e.groove:e.hw:r==="cladm"?h=e.clad:h=e.fin;let d=new Xe(kn(l,c,t,/slat|board|plank|blade|louvre|Batten/i.test(s)?.13:/buck|Panel|Slab/i.test(s)?.06:.04),h);return d.name=s,r==="glassm"?(d.castShadow=!1,d.receiveShadow=!1):(d.castShadow=!0,d.receiveShadow=!0),d}var vo=[["concrete","Concrete"],["pavers","Pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"]],yo=[["lawn","Lawn"],["blue","Kentucky bluegrass \xB7 blades"],["gravel","Gravel"],["dg","Decomposed granite"],["mpavers","Modern pavers"],["herr","Herringbone pavers"],["mix","Mixed pavers \xB7 square and rectangle"],["flag","Natural flagstone"],["planters","Stone \xB7 raised planters"]],yc=[["grey","Grey"],["rust","Warm earthtones"]],_c=["#8a7364","#93806f","#7e695b","#9a8573","#866e5e","#907a67","#7b6354"],Mo=[["none","One opening"],["single","+ a single"],["double","+ a double"],["same","+ the same again"]],zu={single:108,double:192},Mc=[["lantern","Lantern"],["barrel","Barrel \xB7 up and down"]],nr=[["gable","Gable \xB7 stucco",{wall:"stucco",form:"side",roof:"shingle",pitch:5}],["craftsman","Front gable \xB7 lap siding",{wall:"lap",form:"front",roof:"shingle",pitch:6}],["hip","Hip roof \xB7 brick",{wall:"brick",form:"hip",roof:"shingle",pitch:5}],["modern","Flat roof \xB7 canopy on columns",{wall:"dark",form:"flat",roof:"flat",pitch:5}],["flat8","Flat roof \xB7 8 in soffit",{wall:"stucco",form:"flat8",roof:"flat",pitch:5}],["farm","Farmhouse \xB7 board and batten",{wall:"bb",form:"front",roof:"metal",pitch:8}],["spanish","Spanish \xB7 clay tile",{wall:"cream",form:"hip",roof:"tile",pitch:4}]],Gu=i=>(nr.find(e=>e[0]===i)||nr[0])[2],Hu={stucco:{seed:5,color:"#d9d5cb",mid:.7,fine:1,tone:.07,grit:.12,bump:3.2},lap:{seed:15,color:"#a9b0a8",mid:.3,fine:.6,tone:.04,grit:.07,bump:5,rows:128,tab:8192,even:1},brick:{seed:17,color:"#6a473e",mid:.5,fine:1,tone:.08,grit:.25,bump:6,rows:43,tab:128},dark:{seed:19,color:"#4b4e51",mid:.4,fine:.6,tone:.04,grit:.08,bump:1.6},bb:{seed:23,color:"#e6e3da",mid:.2,fine:.5,tone:.03,grit:.06,bump:5,seam:256,seamW:40},cream:{seed:27,color:"#e7dfcd",mid:.9,fine:1,tone:.08,grit:.12,bump:4.5}},bo=[["shingle","Shingle"],["tile","Clay tile"],["spanish","Spanish tile"],["shake","Cedar shake"],["metal","Standing seam"],["flat","Flat"]],bc=[3,4,5,6,8,10],Ne=(()=>{let i={};try{i=JSON.parse(localStorage.getItem("tr3d.setting")||"{}")||{}}catch{}return{roof:bo.some(e=>e[0]===i.roof)?i.roof:"shingle",pitch:bc.includes(+i.pitch)?+i.pitch:5,eave:i.eave==="deep"?"deep":"short",drive:vo.some(e=>e[0]===i.drive)?i.drive:"concrete",ground:yo.some(e=>e[0]===i.ground)?i.ground:"blue",structure:nr.some(e=>e[0]===i.structure)?i.structure:"gable",light:i.light==="barrel"?"barrel":"lantern",paver:i.paver==="rust"?"rust":"grey",second:Mo.some(e=>e[0]===i.second)?i.second:"none",garage:i.garage==="light"?"light":"warm",land:i.land==="rolling"||i.land==="flat"?i.land:"auto"}})();function Wu(i){if(i=i||{},i.structure&&i.roof==null){let e=Gu(i.structure);i=Object.assign({roof:e.roof,pitch:e.pitch},i)}Object.assign(Ne,i),(i.structure||G.panelLabel&&(i.roof||i.drive||i.ground))&&G.panel&&G.el&&(G.panel.remove(),Sc(G.el));try{localStorage.setItem("tr3d.setting",JSON.stringify(Ne))}catch{}return G.last&&Ec.apply(null,G.last),bn}function Xu(){let i=G.panelHost;return!!(i&&i.offsetParent!==null&&i.clientWidth>150)}function Sc(i){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=document.createElement("div");e.style.cssText="position:absolute;left:8px;top:8px;right:8px;display:flex;flex-wrap:wrap;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2;opacity:.9";let t=(n,s,r)=>{let a=document.createElement("label");a.style.cssText="pointer-events:auto;display:flex;align-items:center;gap:4px;background:rgba(20,20,20,.62);color:#eee;padding:3px 6px",a.append(r);let o=document.createElement("select");o.style.cssText="font:inherit;background:transparent;color:inherit;border:0;outline:0";for(let[l,c]of s){let h=document.createElement("option");h.value=l,h.textContent=c,h.style.color="#111",String(Ne[n])===String(l)&&(h.selected=!0),o.append(h)}return o.onchange=()=>Wu({[n]:n==="pitch"?+o.value:o.value}),a.append(o),(t.to||e).append(a),a};if(!G.panelLabel)t("second",Mo,"Openings"),t("garage",[["warm","Warm white"],["light","Light"]],"Garage"),t("structure",nr.map(n=>[n[0],n[1]]),"Structure"),t("roof",bo,"Roof"),t("pitch",bc.map(n=>[n,n+":12"]),"Slope"),t("eave",[["short","Short"],["deep","Deep"]],"Eave"),t("drive",vo,"Drive"),t("ground",yo,"Ground"),t("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),t("paver",yc,"Paver colour"),t("light",Mc,"Lights");else{e.style.cssText="position:absolute;left:8px;top:8px;width:min(262px,calc(100% - 16px));max-height:calc(100% - 16px);display:flex;flex-direction:column;align-items:flex-start;gap:6px;pointer-events:none;font:11px/1.2 system-ui,sans-serif;z-index:2";let n=document.createElement("button");n.type="button",n.style.cssText="pointer-events:auto;cursor:pointer;background:rgba(18,18,18,.74);color:#f3efe6;border:1px solid rgba(243,239,230,.55);padding:9px 16px;font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase";let s=document.createElement("div");s.style.cssText="pointer-events:auto;align-self:stretch;overflow:auto;background:rgba(18,18,18,.8);border:1px solid rgba(243,239,230,.22);padding:4px 10px 10px";let r=c=>{let h=document.createElement("div");h.textContent=c,h.style.cssText="margin:10px 0 3px;font:600 9.5px/1 system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#b9b2a3",s.append(h)},a=(c,h,d)=>{t.to=s;let u=t(c,h,d);t.to=null,u.style.cssText="display:grid;grid-template-columns:76px 1fr;align-items:center;gap:6px;color:#eee;padding:2px 0;border-top:1px solid rgba(243,239,230,.1)",u.lastChild.style.cssText+=";width:100%;min-width:0;text-overflow:ellipsis;padding:0;margin:0;height:22px;min-height:0"},o=c=>/pavers|herr|mix/.test(String(c||""));if(r("House"),a("structure",nr.map(c=>[c[0],c[1]]),"Structure"),a("roof",bo,"Roof"),Ne.roof!=="flat"&&(a("pitch",bc.map(c=>[c,c+":12"]),"Slope"),a("eave",[["short","Short"],["deep","Deep"]],"Eave")),a("second",Mo,"Openings"),r("Ground"),a("drive",vo,"Driveway"),a("ground",yo,"Ground"),(o(Ne.drive)||o(Ne.ground))&&a("paver",yc,"Paver colour"),a("land",[["auto","Auto"],["flat","Flat"],["rolling","Rolling"]],"Land"),r("Light"),a("light",Mc,"Lights"),a("garage",[["warm","Warm white"],["light","Light"]],"Garage"),G.panelSide=Xu(),G.panelSide){e.style.cssText="display:flex;flex-direction:column;gap:8px;font:11px/1.2 system-ui,sans-serif";let c=document.createElement("div");c.textContent=G.panelLabel,c.style.cssText="font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#f3efe6;padding:2px 0 4px",s.style.cssText="border:1px solid rgba(243,239,230,.22);padding:4px 12px 12px",e.append(c,s),G.panelHost.appendChild(e),G.panel=e;return}let l=()=>{s.style.display=G.panelOpen?"block":"none",n.textContent=G.panelLabel+(G.panelOpen?"  \xD7":"")};n.onclick=()=>{G.panelOpen=!G.panelOpen,l()},e.append(n,s),l()}i.appendChild(e),G.panel=e}var G={el:null,r:null,scene:null,cam:null,ctl:null,unit:null,leaves:[],L:null,f:0,m:0,raf:0,dirty:!1,ready:!1,key:"",sun:null,anim:null,fit:200,H:96};function li(){G.dirty=!0,G.raf||(G.raf=requestAnimationFrame(Yu))}function Yu(){if(G.raf=0,!G.r)return;let i=G.ctl.update();G.anim&&G.anim(),(G.dirty||i)&&(G.dirty=!1,qu()),(G.anim||i)&&(G.raf=requestAnimationFrame(Yu))}function qu(){let i=performance.now();if(G.fx)try{G.fx.render()}catch{G.fx=null,G.r.render(G.scene,G.cam)}else G.r.render(G.scene,G.cam);performance.now()-i>160&&(G.slow=(G.slow||0)+1,G.slow===2&&G.r.getPixelRatio()>1?(G.r.setPixelRatio(1),G.fx&&G.fx.setPixelRatio(1),_o()):G.slow===4&&G.fx&&(G.fx=null,li()))}function _o(){if(!G.r)return;let i=G.el.clientWidth||800,e=G.el.clientHeight||500;G.r.setSize(i,e,!1),G.fx&&G.fx.setSize(i,e),G.cam.aspect=i/e,G.cam.updateProjectionMatrix(),li()}function j_(i,e){if(G.r&&G.el===i)return bn;G.r&&Zu(),e=e||{},G.el=i;let t=new Sr({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(2,Wt.devicePixelRatio||1)),t.outputColorSpace=Yt,t.toneMapping=Lr,t.toneMappingExposure=e.exposure||.68,t.shadowMap.enabled=!0,t.shadowMap.type=Ql,t.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;outline:none",t.domElement.setAttribute("data-tr3d",ku),i.appendChild(t.domElement),G.r=t,G.scene=new Xs;{let r=document.createElement("canvas");r.width=16,r.height=512;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,"#3f74b8"),o.addColorStop(.3,"#6f9fd4"),o.addColorStop(.46,"#b9d2e8"),o.addColorStop(.5,"#dfe7ec"),o.addColorStop(.503,"#c9d3d6"),o.addColorStop(.56,"#7d8672"),o.addColorStop(1,"#6f775f"),a.fillStyle=o,a.fillRect(0,0,16,512);let l=new Vi(r);l.mapping=ts,l.colorSpace=Yt,G.scene.background=l}G.cam=new xn(30,1.6,2,6e3),G.ctl=new io(G.cam,t.domElement),G.ctl.enableDamping=!0,G.ctl.dampingFactor=.09,G.ctl.enablePan=!1,G.ctl.maxPolarAngle=Math.PI/2-.015,G.ctl.minPolarAngle=.5,G.ctl.addEventListener("change",li),t.domElement.addEventListener("dblclick",wc);let n=new Gs(t);G.scene.environment=n.fromScene(new ro,.04).texture;try{let r=X_(n);if(r){let a=xc();a.envMap=r,a.envMapIntensity=2.1,a.needsUpdate=!0}}catch{}new so().load(So+"env/quarry_01_1k.hdr",r=>{r.mapping=ts;let a=n.fromEquirectangular(r).texture;G.scene.environment=a,G.envOk=!0,r.dispose(),li()},void 0,()=>{});let s=new Za(16775406,4.4);if(s.castShadow=!0,s.shadow.mapSize.set(4096,4096),s.shadow.bias=-2e-4,s.shadow.normalBias=.25,s.shadow.radius=5,G.sun=s,G.scene.add(s),G.scene.add(s.target),G.scene.add(new Ya(14674421,9342088,.55)),Oe.onload=li,e.ao!==!1)try{let r=t.getPixelRatio(),a=new Mn(8,8,{samples:4,type:mn}),o=new lo(t,a);o.setPixelRatio(r),o.addPass(new co(G.scene,G.cam));let l=new Br(G.scene,G.cam,8,8);l.updateGtaoMaterial({radius:7,distanceExponent:1.4,thickness:1.2,scale:1.25,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),l.blendIntensity=1,o.addPass(l),o.addPass(new fo),G.fx=o,G.ao=l}catch{G.fx=null}return Wt.ResizeObserver?(G.ro=new ResizeObserver(()=>{_o(),G.panel&&G.panelLabel&&G.panelHost&&G.panelSide!==Xu()&&(G.panel.remove(),Sc(G.el))}),G.ro.observe(i)):Wt.addEventListener("resize",_o),G.panelLabel=e.panelLabel||"",G.panelHost=e.panelHost||null,e.panel!==!1&&Sc(i),_o(),bn}function Zu(){if(G.r){try{G.panel&&G.panel.remove()}catch{}try{G.ro&&G.ro.disconnect()}catch{}cancelAnimationFrame(G.raf),G.raf=0,G.ctl.dispose(),G.r.dispose(),G.r.domElement.parentNode&&G.r.domElement.parentNode.removeChild(G.r.domElement),G.r=null,G.unit=null,G.leaves=[],G.key=""}}function J_(){G.unit&&(G.scene.remove(G.unit),G.unit.traverse(i=>{i.geometry&&i.geometry.dispose()}),G.unit=null,G.leaves=[],G.B=null)}function Ec(i,e,t,n){if(!G.r||!i||!e)return bn;G.last=[i,e,t,n],Oe.frost=/frost|obscure/i.test(String(i.glass_opts&&[].concat(i.glass_opts).join(" ")||i.situations&&i.situations.glass_special&&i.situations.glass_special.fields&&i.situations.glass_special.fields.glass||""));let s=Wt.leafParts;if(typeof s!="function")return bn;if(e.base==="tbclad"&&!i.clad_look&&(e.clad==="horizontal"||e.clad==="vertical")&&(i=Object.assign({},i,{clad_look:e.clad})),G.curS=i,G.curFam=e,typeof Wt.rbFor!="function"&&(Wt.rbFor=()=>kr),typeof Wt.rlCladDims!="function"){let C=!1;Wt.rlCladDims=function(){if(C||!G.curFam||G.curFam.base!=="tbclad"||typeof Wt.cladFor!="function")return null;C=!0;try{let U=Wt.cladFor(G.curS),k=U&&U.profile;return!k||k.type==="sheet"?null:{fin_w:+k.fin_w||null,fin_t:+k.fin_t||null,cover:+k.cover||null,angle:k.angle}}catch{return null}finally{C=!1}}}if(e.base==="tbclad"&&i.clad_orient&&(e.clad==="horizontal"||e.clad==="vertical")&&typeof Wt.cladFor=="function"&&typeof Wt.cladLookOf=="function")try{let C=Wt.cladLookOf(Wt.cladFor(i),i);(C==="horizontal"||C==="vertical")&&(e=Object.assign({},e,{clad:C}))}catch{}G.curFam=e;let r=B_(e),a=r.gaps,o;try{o=s(i,e,t,n)}catch(C){return console.warn("TR3D leafParts",C),bn}if(!o||!o.leaves||!o.leaves.length)return bn;J_();let l=11,c=(C,U)=>{let k=U.leaves.length,X=(+C.width_in||192)-2*(a.shim_side||0),J=(+C.height_in||96)-(a.shim_top||0),Z=e.base==="tb"||e.base==="tbclad",K=Z?r.leaf_tb:r.leaf_rs,ue=typeof Wt.cladFor=="function"&&e.base==="tbclad"?(()=>{try{return Wt.cladFor(C)}catch{return null}})():null,Ce=e.clad||C.clad_look,Ue=typeof Wt.finBy=="function"&&C.clad_fin?Wt.finBy(C.clad_fin):null,Ke=Ue&&Ue.type==="stain"?Ue:t,Ee={t:K,fin:mo(t),clad:Ce==="metal"?mo(C.clad_fin==="patina"?{k:"patina"}:t,"metal"):mo(Ke),hw:Y_(C.hw_finish||C.hw_fin||C.hwfin),groove:er("#141210",.95),joint:(()=>{let we=ue&&ue.profile||{};return+we.reveal>0?+we.reveal:we.type==="ship"?.25:we.type==="tg"?.125:.1875})()},ve=new Xn,qe=/^(\d+)L/.exec(C.split||""),We=qe?Math.min(+qe[1],k):String(C.split||"").endsWith("L")?k:0,tt={n:k,Lq:We,Rq:k-We,t:K,jL:a.jamb_l||.375,jR:a.jamb_r||.375,leaves:[],W:X,gapI:we=>U.leaves[we+1]?U.leaves[we+1].x0-U.leaves[we].x1:a.door,man:C.mandoor?{i:Math.max(0,Math.min(k-1,(+C.mandoor.door||1)-1)),hinge:C.mandoor.hinge||"L",swing:C.mandoor.swing==="in"?"in":"out"}:null},Be=ue&&ue.profile&&ue.profile.type==="bb"&&typeof Wt.battenOf=="function"?(()=>{try{return Wt.battenOf(ue,C)}catch{return null}})():null,yt=typeof Wt.cladOrient=="function"&&ue?Wt.cladOrient(ue,C)==="V":Ce==="vertical",en=[];U.leaves.forEach((we,ct)=>{let ze=we.x1-we.x0,Ge=(we.x0+we.x1)/2,je=new Xn;je.matrixAutoUpdate=!1,Ee.xc=Ge;let ot=we.parts.find(ye=>/^Awning sash opening/i.test(ye[1])),Dt=we.parts.map(ye=>ot&&/^Awning sash$/i.test(ye[1])&&ye[0]==="box"?["slabh",ye[1],ye[2],ye[3],ye[4],ye[5],ye[6],ye[7],[[[ot[2]-ye[2],ot[4]-ye[4]],[ot[2]-ye[2]+ot[5],ot[4]-ye[4]],[ot[2]-ye[2]+ot[5],ot[4]-ye[4]+ot[7]],[ot[2]-ye[2],ot[4]-ye[4]+ot[7]]]],ye[ye.length-1]]:ye),gt=we.parts.find(ye=>ye[0]==="slabh"&&/^Slab$/.test(ye[1])),It=((gt||[])[8]||[]).map(ye=>({x0:gt[2]+Math.min(...ye.map(St=>St[0])),x1:gt[2]+Math.max(...ye.map(St=>St[0])),z0:gt[4]+Math.min(...ye.map(St=>St[1])),z1:gt[4]+Math.max(...ye.map(St=>St[1]))})),Rt=(ye,St,it)=>{let Et=[],wt=ye;for(let Nt of it.sort((At,kt)=>At[0]-kt[0]))Nt[0]-wt>.25&&Et.push([wt,Nt[0]]),wt=Math.max(wt,Nt[1]);return St-wt>.25&&Et.push([wt,St]),Et};for(let ye of Dt){if(ye[ye.length-1]==="cladm"&&/Clad (board|slat)/i.test(ye[1])&&(ye[0]==="box"||ye[0]==="slabh")){ye=ye.slice();let it=Ee.joint;ye[5]>ye[7]?(ye[4]+=it/2,ye[7]-=it,ye[0]==="slabh"&&(ye[8]=ye[8].map(Et=>Et.map(wt=>[wt[0],wt[1]-it/2])))):(ye[2]+=it/2,ye[5]-=it,ye[0]==="slabh"&&(ye[8]=ye[8].map(Et=>Et.map(wt=>[wt[0]-it/2,wt[1]]))))}let St=go(ye,Ee,l+=7919);if(St&&je.add(St),/^Slab$/.test(ye[1])&&e.base==="tbclad"&&Ce!=="metal"){let it=ye.slice();it[1]="Backer groove",it[3]=-.12,it[6]=.12,it[it.length-1]="dark";let Et=go(it,Ee,l);Et&&(Et.castShadow=!1,je.add(Et))}}if(Be&&Be.w>0&&Be.t>0){let ye=ue.profile.fin_t||r.clad_t||.75,St=Be.pitch||Be.w+Be.gap,it=U.z_door,Et=U.door_h;if(yt){let wt=Math.max(1,Math.round((ze-Be.w)/St)),Nt=(ze-Be.w)/wt;for(let At=0;At<=wt;At++){let kt=we.x0+At*Nt;for(let Ct of Rt(it,it+Et,It.filter(_t=>_t.x0<kt+Be.w&&_t.x1>kt).map(_t=>[_t.z0,_t.z1]))){let _t=go(["box","Batten "+(At+1),kt,-(ye+Be.t),Ct[0],Be.w,Be.t,Ct[1]-Ct[0],"cladm"],Ee,l+=7919);_t&&je.add(_t)}}}else{let wt=Math.max(1,Math.round((Et-Be.w)/St)),Nt=(Et-Be.w)/wt;for(let At=0;At<=wt;At++){let kt=it+At*Nt;for(let Ct of Rt(we.x0,we.x0+ze,It.filter(_t=>_t.z0<kt+Be.w&&_t.z1>kt).map(_t=>[_t.x0,_t.x1]))){let _t=go(["box","Batten "+(At+1),Ct[0],-(ye+Be.t),kt,Ct[1]-Ct[0],Be.t,Be.w,"cladm"],Ee,l+=7919);_t&&je.add(_t)}}}}Z_(je),ve.add(je),en.push(je),tt.leaves.push({i:ct,x:we.x0-X/2,w:ze})});let Mt=H_(C);Mt&&(tt.e3=!0,k_());let Ft=new Xn,Ht=Math.max(4.5,K+2.5),dt=Mt?K/2+Kt.pin+1.7205:K/2+.75,Qe=t&&t.type==="stain"?mo(t):xo(t&&t.hex||"#f0ede3"),rt=(we,ct,ze,Ge,je,ot,Dt,gt,It)=>{let Rt=new ln(Ge,je,ot);Rt.translate(we+Ge/2,ct+je/2,ze-ot/2);let ye=new Xe(kn(Rt,gt,l+=31),It||Qe);return ye.name=Dt,ye.castShadow=ye.receiveShadow=!0,Ft.add(ye),ye},at=U.z_door+U.door_h+(a.head||.25),bt=[];if(Mt){let we=K/2+Kt.pin,ct=at-(a.head||.25)+(a.head||.3125),ze=r.threshold||1,Ge=-X/2+.75,je=X-1.5,ot=5.09375,Dt=Oe.mats.e3alu||(Oe.mats.e3alu=new Xt({color:12830667,metalness:.85,roughness:.38,envMapIntensity:1})),gt=Oe.mats.e3hw||(Oe.mats.e3hw=new Xt({color:11843772,metalness:.9,roughness:.32,envMapIntensity:1.1})),It=(it,Et,wt)=>{let Nt=new Rn;it.forEach((Ct,_t)=>_t?Nt.lineTo(Ct[0],Ct[1]):Nt.moveTo(Ct[0],Ct[1]));let At=new qn(Nt,{depth:je,bevelEnabled:!1});At.rotateY(Math.PI/2),At.translate(Ge,0,dt);let kt=new Xe(wt===Qe?kn(At,"x",l+=31):At,wt);return kt.name=Et,kt.castShadow=kt.receiveShadow=!0,Ft.add(kt),kt};for(let it of[-1,1])rt(it<0?-X/2:X/2-.75,0,dt,.75,J,4.15625,"Jamb "+(it<0?"L":"R"),"y"),rt(it<0?-X/2:X/2-1.5,0,dt-4.15625,1.5,J,.9375,"Jamb stop "+(it<0?"L":"R"),"y");rt(Ge,J-2.6875,dt,je,2.6875,.5,"Front board","x"),rt(Ge,J-.6875,dt-.5,je,.6875,ot-.5,"Top board","x"),It(Kt.KT.map(it=>[.5+it[0],ct+it[1]]),"Top track \xB7 KT70D",Dt),rt(Ge,ct,dt-2.941,je,1.969,1.1875,"Filler","x"),rt(Ge+.75,ct+1.969-3.4375,dt-4.15625,je-1.5,3.4375,.9375,"Inside board","x");let Rt=Oe.mats.thrEsp||(Oe.mats.thrEsp=new Xt({color:2891287,roughness:.58,metalness:0,envMapIntensity:pi})),ye=String(C.e3_sill||C.sill_type||"").toLowerCase()!=="stop",St=ye?ot:4.15625;if(It([[0,0],[0,ze-.25],[1.71,ze],[1.98,ze],[1.98,ze-.875],[2.918,ze-.875],[2.918,ze],[St,ze],[St,0]],"Threshold",Rt),ye||rt(Ge+.75,0,dt-4.15625,je-1.5,ze+1.625,.9375,"Threshold stop","x"),It([[1.98,ze-.875],[1.98,ze],[2.045,ze],[2.045,ze-.81],[2.853,ze-.81],[2.853,ze],[2.918,ze],[2.918,ze-.875]],"Floor channel \xB7 EC23DV",Dt),It([[2.065,ze-.79],[2.065,ze-.05],[2.128,ze-.05],[2.128,ze-.727],[2.77,ze-.727],[2.77,ze-.05],[2.833,ze-.05],[2.833,ze-.79]],"Channel liner",er("#1c1d1f",.7)),Kt.lib){let it=(_t,Ot,Cn,Pn,$n,Kn,Qt,Sn)=>{let Qn=V_(_t,Ot,Qt,Sn);if(!Qn)return;let hi=new Xe(Qn,Ee.hw);hi.name="E3 "+_t+" "+Ot,hi.castShadow=hi.receiveShadow=!0,hi.position.set(Pn,$n,Kn),Ot==="fix"&&!Sn?(bt.push({m:hi,i:Cn,lx:Pn,lz:Kn}),ve.add(hi)):en[Cn].add(hi)},Et=U.z_door,wt=U.z_door+U.door_h,Nt={top_pivot:ct+.04,end_carrier:ct-.14,int_carrier:ct-.14},At=wt+.2,kt=[Et+2.36,(Et+wt)/2-2.13,wt-2.36-4.25],Ct=[];tt.Lq>0&&Ct.push({d:1,idx:[...Array(tt.Lq).keys()]}),tt.Rq>0&&Ct.push({d:-1,idx:[...Array(tt.Rq).keys()].map(_t=>k-1-_t)});for(let _t of Ct){let Ot=_t.d,Cn=_t.idx.length,Pn=Qt=>tt.leaves[Qt].w,$n=_t.idx[0],Kn=-Ot*Pn($n)/2+Ot*Kt.inb;for(let Qt of["a","fix"])it("top_pivot",Qt,$n,Kn,Qt==="fix"?Nt.top_pivot:At,we,Ot<0,!1),it("bot_pivot",Qt,$n,Kn,ze,we,Ot<0,!1);for(let Qt=1;Qt<Cn;Qt++){let Sn=_t.idx[Qt-1],Qn=_t.idx[Qt],hi=tt.gapI(Math.min(Sn,Qn)),Vr=Ot*Pn(Sn)/2+Ot*hi/2,Tc=-Ot*Pn(Qn)/2-Ot*hi/2;if(Qt%2)kt.forEach((Yi,Ao)=>{let us=Ao===1?"hinge_handle":"hinge";it(us,"fix",Sn,Vr,Yi,-we,!1,!0),it(us,Ot>0?"b":"a",Sn,Vr,Yi,-we,!1,!0),it(us,Ot>0?"a":"b",Qn,Tc,Yi,-we,!1,!0)});else for(let[Yi,Ao,us]of[["int_carrier",Nt.int_carrier,At],["int_guide",ze,ze]])it(Yi,"fix",Sn,Vr,Ao,we,!1,!1),it(Yi,Ot>0?"a":"b",Sn,Vr,us,we,!1,!1),it(Yi,Ot>0?"b":"a",Qn,Tc,us,we,!1,!1)}if(Cn%2===0){let Qt=_t.idx[Cn-1],Sn=Ot*Pn(Qt)/2-Ot*Kt.inb;for(let Qn of["a","fix"])it("end_carrier",Qn,Qt,Sn,Qn==="fix"?Nt.end_carrier:At,we,Ot>0,!1),it("end_guide",Qn,Qt,Sn,ze,we,Ot>0,!1)}}}}else{rt(-X/2,0,dt,r.jamb,J,Ht,"Jamb L","y"),rt(X/2-r.jamb,0,dt,r.jamb,J,Ht,"Jamb R","y"),rt(-X/2+r.jamb,at,dt,X-2*r.jamb,Math.max(.75,J-at),.75,"Track header face","x"),rt(-X/2+r.jamb,at+.75,dt-.75,X-2*r.jamb,Math.max(.5,J-at-.75),Ht-.75,"Track box","x",er("#2a2826",.8));{let we=r.threshold||1,ct=Wt.thrSunk&&Wt.thrSunk(C)?.25-we:0,ze=X-2*r.jamb,Ge=new Rn;[[0,ct],[0,ct+we-.25],[.5,ct+we],[Ht,ct+we],[Ht,ct]].forEach((Dt,gt)=>gt?Ge.lineTo(Dt[0],Dt[1]):Ge.moveTo(Dt[0],Dt[1]));let je=new qn(Ge,{depth:ze,bevelEnabled:!1});je.rotateY(Math.PI/2),je.translate(-X/2+r.jamb,0,dt);let ot=new Xe(kn(je.toNonIndexed(),"x",l+=31),Oe.mats.thrEsp||(Oe.mats.thrEsp=new Xt({color:2891287,roughness:.58,metalness:0,envMapIntensity:pi})));ot.geometry.computeVertexNormals(),ot.name="Threshold",ot.castShadow=ot.receiveShadow=!0,Ft.add(ot)}}return ve.add(Ft),{og:ve,L:tt,lvs:en,Wu:X,Hu:J,t:K,zf:dt,ctx:Ee,fix:bt}},h=new Xn;G.unit=h;let d=c(i,o),{Wu:u,Hu:p,t:g,zf:x,ctx:m}=d,f=null;if(Ne.second!=="none"){let C=Ne.second,U=C==="single"?zu.single:C==="double"?zu.double:+i.width_in||192,k=C==="single"?2:C==="double"?4:+i.doors||d.L.n,X=Object.assign({},i,{width_in:U,doors:k,split:C==="same"?i.split:k===2?"1L1R":"2L2R",mandoor:null});G.curS=X;let J=null;try{J=s(X,e,t,n)}catch{J=null}G.curS=i,J&&J.leaves&&J.leaves.length&&(f=c(X,J))}G.L=d.L,G.leaves=d.lvs,G.fixA=d.fix,G.B=f,G.H=p,h.add(d.og),f&&h.add(f.og);let M=a.shim_side||0,v=a.shim_top||0,b=u/2+M,A=p+v,R=32,w=28,I=f?f.Wu/2+M:0,_=2*R+2*b+(f?w+2*I:0),y=-_/2+R+b,D=y+b+w+I,F=f?[[y,b],[D,I]]:[[y,b]],W=f?[-_/2+R/2,y+b+w/2,_/2-R/2]:[-_/2+R/2,_/2-R/2],T=p+30,L=8,z=e.tb==="flush",H=z?x+.01:x+2.75,$=Gu(Ne.structure),q=$t("wall_"+$.wall,Hu[$.wall]||Hu.stucco,.95);d.og.position.x=y,f&&(f.og.position.x=D);let se=Ne.eave==="deep"?6:-.5,oe=[[-_/2,se]],ge=G.last&&G.last[0]||{},Q=(()=>{let C=ge.situations&&ge.situations.arched_top;if(!C)return 0;let U=parseFloat(C.fields&&C.fields.rise);return isFinite(U)&&U>0?U:12})(),le=C=>{let U=Math.min(Q,C*.9),k=(C*C+U*U)/(2*U),X=A-k,J=Math.atan2(A-U-X,-C),Z=Math.atan2(A-U-X,C);return{rise:U,r:k,cy:X,a0:J,a1:Z}};for(let[C,U]of F){if(!Q){oe.push([C-U,se],[C-U,A],[C+U,A],[C+U,se]);continue}let k=le(U),X=40;oe.push([C-U,se],[C-U,A-k.rise]);for(let J=1;J<X;J++){let Z=k.a0+(k.a1-k.a0)*J/X;oe.push([C+k.r*Math.cos(Z),k.cy+k.r*Math.sin(Z)])}oe.push([C+U,A-k.rise],[C+U,se])}oe.push([_/2,se],[_/2,T],[-_/2,T]);let Te=new Rn(oe.map(C=>new de(C[0],C[1]))),ke=new qn(Te,{depth:L,bevelEnabled:!1});ke.translate(0,0,H-L);let Le=new Xe(kn(ke,"y",3),z?m.fin:q);Le.castShadow=Le.receiveShadow=!0,Le.name="House wall",h.add(Le);for(let C of[-1,1]){let U=new ln(L,T+.5,250);U.translate(C*(_/2-L/2),T/2-.25,H-L-125);let k=new Xe(kn(U,"y",l+=31),z?m.fin:q);k.castShadow=k.receiveShadow=!0,k.name="Side wall",h.add(k)}let Je=$t("conc",{seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2},.9),nt=$t("concD",{seed:21,color:"#7f7b75",mid:.6,fine:1,tone:.12,grit:.2,bump:3.5},.92),xe=(C,U,k,X,J,Z,K,ue,Ce)=>{let Ue=new ln(C,U,k);Ue.translate(X,J,Z);let Ke=new Xe(kn(Ue,Ce||"x",l+=31),K);return Ke.castShadow=Ke.receiveShadow=!0,Ke.name=ue,h.add(Ke),Ke};if(Ne.eave==="deep"){let C=[-_/2];for(let[U,k]of F)C.push(U-k,U+k);C.push(_/2);for(let U=0;U<C.length;U+=2)xe(C[U+1]-C[U],6.5,L+.75,(C[U]+C[U+1])/2,3.25,H-L/2+.375,nt,"Stem wall")}let Ve=xo("#efece4");if(!z&&Q)for(let[U,k]of F){let X=le(k),J=A-X.rise,Z=40,K=new Rn;xe(3.5,J,.75,U-k-3.5/2,J/2,H+.375,Ve,"Casing L","y"),xe(3.5,J,.75,U+k+3.5/2,J/2,H+.375,Ve,"Casing R","y");let ue=Math.atan2(J-X.cy,-(k+3.5)),Ce=Math.atan2(J-X.cy,k+3.5),Ue=Math.hypot(k+3.5,J-X.cy);for(let ve=0;ve<=Z;ve++){let qe=Ce+(ue-Ce)*ve/Z,We=U+Ue*Math.cos(qe),tt=X.cy+Ue*Math.sin(qe);ve?K.lineTo(We,tt):K.moveTo(We,tt)}for(let ve=0;ve<=Z;ve++){let qe=X.a0+(X.a1-X.a0)*ve/Z;K.lineTo(U+X.r*Math.cos(qe),X.cy+X.r*Math.sin(qe))}let Ke=new qn(K,{depth:.75,bevelEnabled:!1});Ke.translate(0,0,H);let Ee=new Xe(kn(Ke,"x",l+=31),Ve);Ee.castShadow=Ee.receiveShadow=!0,Ee.name="Casing head \xB7 arched",h.add(Ee)}else if(!z)for(let[U,k]of F)xe(3.5,A+3.5,.75,U-k-3.5/2,(A+3.5)/2,H+.375,Ve,"Casing L","y"),xe(3.5,A+3.5,.75,U+k+3.5/2,(A+3.5)/2,H+.375,Ve,"Casing R","y"),xe(2*k,3.5,.75,U,A+3.5/2,H+.375,Ve,"Casing head","x");let B=Ne.roof==="flat",_e=B?0:Ne.eave==="deep"?20:1.5,re=_+2*_e+14,he=Ne.pitch/12,ee=Math.atan(he),Ye=Ne.roof==="spanish"?$t("roofspanish",{n:512,seed:131,color:"#6e3a2c",pal:["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"],mid:.3,fine:.6,tone:.04,grit:.14,bump:11,rows:128,tab:64,align:1,barrel:64,barrelK:4.5,deep:1},.84):Ne.roof==="shake"?$t("roofshake",{n:512,seed:137,color:"#6f5a4a",pal:["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"],mid:.5,fine:1.4,tone:.1,grit:.5,bump:8,rows:64,tab:48,jit:1},.96):Ne.roof==="tile"?$t("rooftile",{n:512,seed:61,color:"#553029",mid:.4,fine:.6,tone:.16,grit:.2,bump:7,rows:64,tab:512,barrel:32},.82):Ne.roof==="metal"?Oe.mats.roofmetal||(Oe.mats.roofmetal=(()=>{let C=vc("roofmetal",512,{seed:71,color:"#3d4043",mid:.1,fine:.2,tone:.05,grit:.05,bump:6,seam:128});return new Xt({map:C.map,normalMap:C.normalMap,roughness:.42,metalness:.75,envMapIntensity:.9})})()):$t("shingle",{n:512,seed:31,color:"#4a4a4c",mid:.5,fine:1,tone:.1,grit:.3,bump:5,rows:32,tab:64},.93),Ie=B?"flat":/^flat/.test($.form)?"side":$.form,E=T+6.6,S=Ne.roof==="shingle"?96:64,Y=(C,U,k,X,J)=>{let Z=k===X,K=(tt,Be)=>[tt[0]-Be[0],tt[1]-Be[1],tt[2]-Be[2]],ue=K(U,C),Ce=K(k,C);if(ue[2]*Ce[0]-ue[0]*Ce[2]<0){let tt=C;if(C=U,U=tt,!Z){let Be=k;k=X,X=Be}}let Ue=Math.hypot(...K(U,C)),Ke=K(U,C).map(tt=>tt/Ue),Ee=tt=>{let Be=K(tt,C),yt=Be[0]*Ke[0]+Be[1]*Ke[1]+Be[2]*Ke[2];return[yt/S,Math.hypot(Be[0]-yt*Ke[0],Be[1]-yt*Ke[1],Be[2]-yt*Ke[2])/S]},ve=Z?[C,U,k]:[C,U,k,C,k,X],qe=new qt;qe.setAttribute("position",new vt(ve.flat(),3)),qe.setAttribute("uv",new vt(ve.map(Ee).flat(),2)),qe.computeVertexNormals();let We=new Xe(qe,Ye);return We.castShadow=We.receiveShadow=!0,We.name=J,h.add(We),We},fe=er("#2e3033",.6),pe=z?m.fin:q,ce=(C,U)=>{if(Ne.roof!=="spanish"&&Ne.roof!=="tile")return!1;let k=new N(...C),X=new N(...U).sub(k),J=X.length();if(J<6)return!0;X.normalize();let Z=new N().crossVectors(X,new N(0,1,0));Z.lengthSq()<1e-6&&Z.set(1,0,0),Z.normalize();let K=new N().crossVectors(Z,X);K.y<0&&(Z.negate(),K.negate());let ue=oi(Math.round(J*13+C[0]+C[2])+5),Ce=[],Ue=Ne.roof==="spanish"?4.6:3.2,Ke=new Ut;for(let ve=0;ve<J;ve+=12){let qe=jn(He[Math.floor(ue()*He.length)]),We=.88+ue()*.2,tt=Math.min(15,J-ve+2),Be=new Gi(Ue,Ue*.9,tt,8,1,!0,-Math.PI/2,Math.PI);Be.translate(0,tt/2-1,1.2),Be.rotateX(-.04),Be=Be.toNonIndexed();let yt=Be.attributes.position.count,en=new Float32Array(yt*3);for(let Mt=0;Mt<yt;Mt++)en[Mt*3]=qe.r*We,en[Mt*3+1]=qe.g*We,en[Mt*3+2]=qe.b*We;Be.setAttribute("color",new Gt(en,3)),Be.applyMatrix4(Ke.makeBasis(Z,X,K).setPosition(k.clone().addScaledVector(X,ve))),Ce.push(Be)}let Ee=new Xe(zr(Ce,!1),Pe);return Ee.castShadow=Ee.receiveShadow=!0,Ee.name="Hip and ridge tiles",h.add(Ee),!0},He=Ne.roof==="spanish"?["#6e3a2c","#7a4233","#643429","#7f4536","#693629","#834a38","#603228","#744033"]:Ne.roof==="tile"?["#553029","#5d352c","#4c2a24","#613a30"]:Ne.roof==="shake"?["#6b5646","#7a6351","#5e4c3f","#84705c","#70594a","#8c7864","#655243"]:null,Pe=Oe.mats.eave||(Oe.mats.eave=new Xt({vertexColors:!0,roughness:.88,side:vn,envMapIntensity:pi})),De=(C,U,k,X,J)=>{if(!He)return;let Z=new N(...C),K=new N(...U),ue=new N(...k).normalize(),Ce=K.clone().sub(Z),Ue=Ce.length();Ce.normalize();let Ke=new N().crossVectors(Ce,ue);Ke.y<0&&(Ce.negate(),Ke.negate(),Z.copy(K));let Ee=oi(Math.round(Ue*7+C[0]*3+C[2]*5)+77),ve=[],qe=Ne.roof==="shake",We=Ne.roof==="spanish"?4:2.6,tt=qe?10:15,Be=qe?6.5:12.5,yt=Math.cos(ee),en=new Ut;for(let Ft=0,Ht=0;Ft<X-1;Ft+=Be,Ht++){let dt=J?Ft*yt:0,Qe=dt,rt=Ue-dt;if(rt-Qe<(qe?3:2*We))break;let at=qe?Qe-Ee()*4:Math.ceil(Qe/(2*We)-.5)*2*We;for(;at<rt-.5;){let bt=qe?3.5+Ee()*5:2*We,we=Math.max(at,Qe),ct=Math.min(at+bt,rt),ze=ct-we;if(at+=bt,ze<(qe?1.2:2*We-.01))continue;let Ge=Ht?0:qe?.5+Ee()*.9:2.2+Ee()*.5,je=jn(He[Math.floor(Ee()*He.length)]),ot=.88+Ee()*.22,Dt=Math.min(tt,X-Ft+Ge),gt;qe?(gt=new ln(ze-.18,Dt,.62),gt.translate(0,Dt/2-Ge,.31+Ee()*.3),gt.rotateX(-.055)):(gt=new Gi(ze/2,ze/2*.9,Dt,8,1,!0,-Math.PI/2,Math.PI),gt.translate(0,Dt/2-Ge,.15),gt.rotateX(-.03)),gt=gt.toNonIndexed();let It=gt.attributes.position.count,Rt=new Float32Array(It*3);for(let ye=0;ye<It;ye++)Rt[ye*3]=je.r*ot,Rt[ye*3+1]=je.g*ot,Rt[ye*3+2]=je.b*ot;gt.setAttribute("color",new Gt(Rt,3)),gt.applyMatrix4(en.makeBasis(Ce,ue,Ke).setPosition(Z.clone().addScaledVector(Ce,(we+ct)/2).addScaledVector(ue,Ft))),ve.push(gt)}}if(!ve.length)return;let Mt=new Xe(zr(ve,!1),Pe);Mt.castShadow=Mt.receiveShadow=!0,Mt.name="Roof courses",h.add(Mt)};if(Ie==="flat"&&$.form==="flat8"){let U=250+L+16;xe(_+16,9,U,0,T+4.5,H+8-U/2,fe,"Roof edge"),xe(_+16-2,.75,U-2,0,T-.375,H+8-U/2,Ve,"Soffit")}else if(Ie==="flat"){xe(_+3,2.5,L+3,0,T+1.25,H-L/2,Ve,"Parapet cap","x");for(let C of[-1,1])xe(L+3,2.5,250,C*(_/2-L/2),T+1.25,H-L-125,Ve,"Parapet cap","z");if(xe(_-2*L,1,250,0,T-8,H-L-125,er("#55565a",.9),"Roof deck"),$.form==="flat"){let U=A+14;xe(_+36,8,66,0,U+4,H+66/2,fe,"Canopy"),xe(_+30,1,62,0,U-.4,H+66/2-1,Ve,"Canopy soffit");for(let k of[-1,1])xe(10,U,10,k*(_/2+8),U/2,H+66-8,Je,"Column","y")}}else if(Ie==="front"){let C=_/2+_e+5,U=H+_e+7,k=H-L-250-_e-7,X=T+1.2-(_e+5)*he,J=X+C*he;Y([-C,X,U],[-C,X,k],[0,J,k],[0,J,U],"Roof L"),De([-C,X,U],[-C,X,k],[Math.cos(ee),Math.sin(ee),0],C/Math.cos(ee)),De([C,X,k],[C,X,U],[-Math.cos(ee),Math.sin(ee),0],C/Math.cos(ee)),Y([C,X,k],[C,X,U],[0,J,U],[0,J,k],"Roof R"),ce([0,J,k],[0,J,U])||xe(9,1.6,U-k,0,J+.3,(U+k)/2,fe,"Ridge cap","z");for(let Z of[H,H-250]){let K=new Rn([[-_/2,0],[_/2,0],[0,_/2*he]].map(Ue=>new de(Ue[0],Ue[1]))),ue=new qn(K,{depth:L,bevelEnabled:!1});ue.translate(0,T,Z-L);let Ce=new Xe(kn(ue,"y",l+=31),pe);Ce.castShadow=Ce.receiveShadow=!0,Ce.name="Gable",h.add(Ce)}for(let Z of[-1,1]){let K=Math.hypot(C,C*he),ue=new ln(K,5.5,1.2);ue.rotateZ(Z*-Math.atan(he)),ue.translate(Z*C/2,X+C*he/2-2.4,U-.4);let Ce=new Xe(kn(ue,"x",l+=31),Ve);Ce.castShadow=!0,Ce.name="Rake board",h.add(Ce);let Ue=new ln(K,5.5,1.2);Ue.rotateZ(Z*-Math.atan(he)),Ue.translate(Z*C/2,X+C*he/2-2.4,k+.4);let Ke=new Xe(kn(Ue,"x",l+=31),Ve);Ke.castShadow=!0,Ke.name="Rake board",h.add(Ke);let Ee=new ln(K,.8,U-k-1.6);Ee.rotateZ(Z*-Math.atan(he)),Ee.translate(Z*C/2,X+C*he/2-1.1,(U+k)/2);let ve=new Xe(kn(Ee,"z",l+=31),Ve);ve.castShadow=ve.receiveShadow=!0,ve.name="Soffit",h.add(ve),xe(1.2,5.5,U-k,Z*(C-.5),X-2.3,(U+k)/2,Ve,"Fascia","z")}xe(14,20,1,0,T+_/2*he*.42,H+.4,fe,"Gable vent","y")}else if(Ie==="hip"){let C=_/2+_e+3,U=H+_e+3,k=H-L-250-_e-3,X=(U-k)/2,J=(U+k)/2;{let Z=Math.min(X,C)/Math.cos(ee);De([-C,E,U],[C,E,U],[0,Math.sin(ee),-Math.cos(ee)],Z,1),De([C,E,k],[-C,E,k],[0,Math.sin(ee),Math.cos(ee)],Z,1),De([C,E,U],[C,E,k],[-Math.cos(ee),Math.sin(ee),0],Z,1),De([-C,E,k],[-C,E,U],[Math.cos(ee),Math.sin(ee),0],Z,1)}if(X<=C){let Z=C-X,K=E+X*he;Y([-C,E,U],[C,E,U],[Z,K,J],[-Z,K,J],"Roof front"),Y([C,E,k],[-C,E,k],[-Z,K,J],[Z,K,J],"Roof back");let ue=[Z,K,J],Ce=[-Z,K,J];Y([C,E,U],[C,E,k],ue,ue,"Roof R"),Y([-C,E,k],[-C,E,U],Ce,Ce,"Roof L");for(let Ue of[-1,1])for(let Ke of[U,k])ce([Ue*C,E,Ke],[Ue*Z,K,J]);Z>2&&!ce([-Z,K,J],[Z,K,J])&&xe(2*Z,1.6,9,0,K+.3,J,fe,"Ridge cap","x")}else{let Z=X-C,K=E+C*he,ue=[0,K,J+Z],Ce=[0,K,J-Z];Y([-C,E,U],[C,E,U],ue,ue,"Roof front"),Y([C,E,k],[-C,E,k],Ce,Ce,"Roof back"),Y([C,E,U],[C,E,k],Ce,ue,"Roof R"),Y([-C,E,k],[-C,E,U],ue,Ce,"Roof L");for(let Ue of[-1,1])ce([Ue*C,E,U],ue),ce([Ue*C,E,k],Ce);ce(Ce,ue)||xe(9,1.6,2*Z,0,K+.3,J,fe,"Ridge cap","z")}xe(2*C,7.25,1.5,0,T+2.9,U-.75,Ve,"Fascia","x"),xe(2*C,7.25,1.5,0,T+2.9,k+.75,Ve,"Fascia","x");for(let Z of[-1,1])xe(1.5,7.25,U-k,Z*(C-.75),T+2.9,J,Ve,"Fascia","z");xe(2*C-3,.75,U-k-3,0,T-.375,J,Ve,"Soffit","x")}else{xe(re,.75,_e+L,0,T-.375,H+_e/2-L/2,Ve,"Soffit","x"),xe(re,7.25,1.5,0,T+2.9,H+_e+.75,Ve,"Fascia","x");let C=new Xe(new Gi(2.6,2.6,re,20,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),Oe.mats.gut||(Oe.mats.gut=new Xt({color:3487290,metalness:.7,roughness:.45,side:vn})));C.position.set(0,T+4.2,H+_e+3.6),C.castShadow=!0,h.add(C);let U=H-L-125,k=H+_e+2.2-U,X=k/Math.cos(ee),J=new si(re,X),Z=Ne.roof==="shingle"?96:64;{let Ce=J.attributes.uv;for(let Ue=0;Ue<Ce.count;Ue++)Ce.setXY(Ue,Ce.getX(Ue)*re/Z,Ce.getY(Ue)*X/Z)}let K=new Xe(J,Ye);K.rotation.x=-Math.PI/2+ee,K.position.set(0,T+6.6+X/2*Math.sin(ee),H+_e+2.2-X/2*Math.cos(ee)),K.castShadow=K.receiveShadow=!0,K.name="Roof",h.add(K);let ue=new Xe(J,Ye);ue.rotation.x=-Math.PI/2-ee,ue.position.set(0,T+6.6+X/2*Math.sin(ee),U-X/2*Math.cos(ee)),ue.castShadow=ue.receiveShadow=!0,ue.name="Roof back",h.add(ue),De([-re/2,T+6.6,H+_e+2.2],[re/2,T+6.6,H+_e+2.2],[0,Math.sin(ee),-Math.cos(ee)],X),De([re/2,T+6.6,U-k],[-re/2,T+6.6,U-k],[0,Math.sin(ee),Math.cos(ee)],X),ce([-re/2,T+6.6+k*he,U],[re/2,T+6.6+k*he,U])||xe(re,1.6,9,0,T+6.6+k*he+.3,U,Oe.mats.gut,"Ridge cap","x");for(let Ce of[-1,1]){let Ke=new Rn([[0,0],[250,0],[125,125*he]].map(qe=>new de(qe[0],qe[1]))),Ee=new qn(Ke,{depth:L,bevelEnabled:!1});Ee.rotateY(Math.PI/2),Ee.translate(Ce*(_/2-L/2)-L/2,T,H-L);let ve=new Xe(kn(Ee,"y",l+=31),pe);ve.castShadow=ve.receiveShadow=!0,ve.name="Side wall rake",h.add(ve)}}let Ze=Oe.mats.lant||(Oe.mats.lant=new Xt({color:1776413,metalness:.6,roughness:.5})),lt=Oe.mats.lantg||(Oe.mats.lantg=new Xt({color:16773590,emissive:16767392,emissiveIntensity:.25,roughness:.3}));if(Ne.light==="barrel"){let C=Oe.tex.wash||(Oe.tex.wash=(()=>{let X=document.createElement("canvas");X.width=64,X.height=128;let J=X.getContext("2d"),Z=J.createRadialGradient(32,0,1,32,0,120);Z.addColorStop(0,"rgba(255,226,170,.95)"),Z.addColorStop(.25,"rgba(255,214,150,.45)"),Z.addColorStop(1,"rgba(255,200,130,0)"),J.fillStyle=Z,J.beginPath(),J.moveTo(32,0),J.lineTo(64,128),J.lineTo(0,128),J.closePath(),J.fill();let K=new Vi(X);return K.colorSpace=Yt,K})()),U=Oe.mats.wash||(Oe.mats.wash=new Ai({map:C,transparent:!0,depthWrite:!1,opacity:.55,blending:ga,toneMapped:!1})),k=Oe.mats.barrel||(Oe.mats.barrel=new Xt({color:2762275,metalness:.75,roughness:.38}));for(let X of W){let J=Math.min(A-14,78),Z=new Xe(new Gi(2.3,2.3,11,28),k);Z.position.set(X,J,H+3.4),Z.castShadow=!0,Z.name="Barrel sconce",h.add(Z),xe(1.6,3,1.4,X,J,H+.7,k,"Sconce arm","y");for(let K of[1,-1]){let ue=new Xe(new Ba(1.9,20).rotateX(-K*Math.PI/2),lt);ue.position.set(X,J+K*5.52,H+3.4),h.add(ue);let Ce=new Xe(new si(30,46),U);K>0&&(Ce.rotation.z=Math.PI),Ce.position.set(X,J+K*(5.5+23),H+.12),Ce.renderOrder=2,h.add(Ce)}}}else for(let C of W){let U=Math.min(A-14,78);xe(4.5*1.37,7*1.37,.6,C,U,H+.3,Ze,"Lantern plate","y"),xe(5*1.37,.8*1.37,5*1.37,C,U+5.4*1.37,H+.6+2.8*1.37,Ze,"Lantern cap"),xe(5*1.37,.6*1.37,5*1.37,C,U-4.6*1.37,H+.6+2.8*1.37,Ze,"Lantern base"),xe(3.6*1.37,9.4*1.37,3.6*1.37,C,U+.3*1.37,H+.6+2.8*1.37,lt,"Lantern glass","y").castShadow=!1,xe(.8*1.37,1*1.37,2*1.37,C,U+5*1.37,H+1*1.37,Ze,"Lantern arm")}let ae=_+8,ht=640,O=new Rn;O.moveTo(-ae/2,0),O.lineTo(ae/2,0),O.bezierCurveTo(ae/2,-230,ae/2+70,-330,ae/2+70,-ht),O.lineTo(-ae/2-190,-ht),O.bezierCurveTo(-ae/2-190,-400,-ae/2,-300,-ae/2,0);let me=Ne.paver==="rust",Re=()=>$t("herr"+Ne.paver,{n:512,seed:111,pal:me?_c:null,color:"#8f867b",mid:.4,fine:.9,tone:.04,grit:.1,bump:2.6,herr:32,jw:2},.88),Me=()=>$t("mix"+Ne.paver,{n:768,seed:121,pal:me?_c:null,color:"#8f877c",mid:.4,fine:.9,tone:.03,grit:.1,bump:2.6,mix:64,jw:3},.88),$e=Ne.drive==="mix"?Me():Ne.drive==="herr"?Re():Ne.drive==="pavers"?$t("pavers"+Ne.paver,{n:512,seed:83,pal:me?_c:null,color:"#8c8379",mid:.5,fine:.9,tone:.04,grit:.2,bump:4.5,rows:32,tab:64},.88):$t("concj",{n:512,seed:9,color:"#a9a59e",mid:.4,fine:1,tone:.14,grit:.16,bump:2,joint:512},.9),ft=Ne.drive==="concrete"?120:Ne.drive==="mix"?96:64,mt=new Ha(O,24);{let C=mt.attributes.uv;for(let U=0;U<C.count;U++)C.setXY(U,C.getX(U)/ft,C.getY(U)/ft)}mt.rotateX(-Math.PI/2),mt.translate(0,0,H-.02);let ut=new Xe(mt,$e);ut.receiveShadow=!0,ut.name="Driveway",h.add(ut);let be=Ne.ground==="gravel"?$t("gravel",{seed:44,color:"#8c857a",mid:.3,fine:1.6,tone:.1,grit:.75,bump:9},1):Ne.ground==="dg"?$t("dg",{seed:47,color:"#a8916f",mid:.5,fine:1.2,tone:.05,grit:.35,bump:5},1):Ne.ground==="mix"?Me():Ne.ground==="herr"?Re():Ne.ground==="mpavers"?$t("mpavers",{n:512,seed:91,color:"#a39f97",mid:.3,fine:.8,tone:.03,grit:.14,bump:4,slab:[256,128],jw:6},.9):Ne.ground==="flag"||Ne.ground==="planters"?$t("flag",{n:512,seed:97,color:"#9a8f80",mid:.7,fine:1,tone:.05,grit:.2,bump:6,cells:5,jw:5},.92):Ne.ground==="blue"?$t("lawn4",{seed:52,color:"#457a42",mid:.7,fine:1.8,tone:.07,grit:.5,bump:5},1):$t("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1),V=(C,U,k,X)=>{let J=[];for(let Z=0;Z<=40;Z++){let K=Z/40,ue=1-K;J.push([ue*ue*ue*C[0]+3*ue*ue*K*U[0]+3*ue*K*K*k[0]+K*K*K*X[0],-(ue*ue*ue*C[1]+3*ue*ue*K*U[1]+3*ue*K*K*k[1]+K*K*K*X[1])])}return J.sort((Z,K)=>Z[1]-K[1])},Se=(C,U)=>{for(let k=1;k<C.length;k++)if(C[k][1]>=U){let X=C[k-1],J=C[k],Z=(U-X[1])/Math.max(1e-6,J[1]-X[1]);return X[0]+(J[0]-X[0])*Z}return C[C.length-1][0]},Ae=V([-ae/2-190,-ht],[-ae/2-190,-400],[-ae/2,-300],[-ae/2,0]),st=V([ae/2,0],[ae/2,-230],[ae/2+70,-330],[ae/2+70,-ht]),et=Ne.ground==="mpavers"||Ne.ground==="mix"||Ne.ground==="herr"||Ne.ground==="flag"||Ne.ground==="planters",Pt=Ne.land==="rolling"||Ne.land!=="flat"&&!et,Lt=C=>(C=Math.max(0,Math.min(1,C)),C*C*(3-2*C)),tn=(C,U)=>{let k=(J,Z,K)=>Math.hypot(Math.max(0,Math.abs(C)-J),U<Z?Z-U:U>K?U-K:0),X=k(_/2+44,-330,0);if(et&&(X=Math.min(X,k(_/2+220,-300,600))),U>=0){let J=Math.min(U,ht),Z=Se(Ae,J),K=Se(st,J);X=Math.min(X,Math.hypot(C<Z?Z-C:C>K?C-K:0,U-J))}return X},dn=(C,U)=>{if(!Pt)return 0;let k=Lt((tn(C,U)-22)/140);if(k<=0)return 0;let X=Lt((Math.hypot(C,U)-1300)/2e3);return k*(2.6+3.4*Math.sin(C*.0131+.7)*Math.sin(U*.0117+2.1)+2.4*Math.sin(C*.0057+U*.0043+1.9)+1.4*Math.sin(C*.031-U*.027+.3)+.6*Math.sin(C*.071+1)*Math.sin(U*.063)+X*(26+36*Math.sin(C*.0011+.5)*Math.sin(U*.0013+1.2)+18*Math.sin(C*.0027-U*.0019+2.4)))},zt=(C,U,k,X)=>{let J=[];for(let Ee=-960;Ee<=960;Ee+=12)J.push(Ee);for(let Ee=960,ve=16;Ee<4500;)ve*=1.3,Ee=Math.min(4500,Ee+ve),J.push(Ee),J.unshift(-Ee);let Z=J.length,K=new Float32Array(Z*Z*3),ue=new Float32Array(Z*Z*2),Ce=[];for(let Ee=0;Ee<Z;Ee++)for(let ve=0;ve<Z;ve++){let qe=Ee*Z+ve,We=J[ve],tt=J[Ee]+200;K[3*qe]=We,K[3*qe+1]=C+dn(We,tt),K[3*qe+2]=H+tt,ue[2*qe]=We/k,ue[2*qe+1]=-(H+tt)/k,ve&&Ee&&Ce.push(qe-Z-1,qe-1,qe-Z,qe-Z,qe-1,qe)}let Ue=new qt;Ue.setAttribute("position",new Gt(K,3)),Ue.setAttribute("uv",new Gt(ue,2)),Ue.setIndex(Ce),Ue.computeVertexNormals();let Ke=new Xe(Ue,U);Ke.receiveShadow=!0,Ke.name=X,h.add(Ke)};{let C=Ne.ground==="mpavers"||Ne.ground==="mix"||Ne.ground==="herr"||Ne.ground==="flag"||Ne.ground==="planters",U=Ne.ground==="lawn"||Ne.ground==="blue"||Ne.ground==="herr"?64:Ne.ground==="mpavers"||Ne.ground==="mix"?96:C?150:40,k=(J,Z,K,ue,Ce,Ue,Ke,Ee)=>{let ve=new si(J,Z),qe=ve.attributes.uv;for(let tt=0;tt<qe.count;tt++)qe.setXY(tt,qe.getX(tt)*J/Ke,qe.getY(tt)*Z/Ke);ve.rotateX(-Math.PI/2);let We=new Xe(ve,Ue);We.position.set(K,Ce,ue),We.receiveShadow=!0,We.name=Ee,h.add(We)},X=()=>$t("lawn",{seed:52,color:"#465a31",mid:.7,fine:1.8,tone:.07,grit:.55,bump:8},1);Pt?C?(zt(-.9,X(),64,"Lawn"),k(_+440,900,0,H+150,-.5,be,U,"Paving")):zt(-.5,be,U,"Ground"):C?(k(9e3,9e3,0,0,-.9,X(),64,"Lawn"),k(_+440,900,0,H+150,-.5,be,U,"Paving")):k(9e3,9e3,0,0,-.5,be,U,"Ground")}if(Ne.ground==="blue"){let C=(Qe,rt)=>rt>=0?Qe<Se(Ae,rt)-1.5||Qe>Se(st,rt)+1.5:Math.abs(Qe)>_/2+38,U=(()=>{let Qe=oi(771),rt=[],at=[],bt=[],we=[];for(let ct=0;ct<11;ct++){let ze=Qe()*6.283,Ge=1.25+Qe()*.45,je=.24+Qe()*.08,ot=je*.72,Dt=(Qe()-.5)*2.3,gt=(Qe()-.5)*2.3,It=.05+Qe()*.35,Rt=Qe()*6.283,ye=Math.cos(ze)/2,St=Math.sin(ze)/2,it=Dt+Math.cos(Rt)*It,Et=gt+Math.sin(Rt)*It,wt=.78+Qe()*.1,Nt=1+Qe()*.22,At=[Dt-ye*je,0,gt-St*je],kt=[Dt+ye*je,0,gt+St*je],Ct=[it+ye*ot,Ge,Et+St*ot],_t=[it-ye*ot,Ge,Et-St*ot],Ot=rt.length/3;rt.push(...At,...kt,...Ct,..._t),at.push(wt,wt,wt,wt,wt,wt,Nt,Nt,Nt,Nt,Nt,Nt),we.push(Ot,Ot+1,Ot+2,Ot,Ot+2,Ot+3);for(let Cn=0;Cn<6;Cn++){let Pn=(Qe()-.5)*.4,$n=(Qe()-.5)*.4;(Cn<3||Cn===5)&&bt.push(Pn,1,$n)}}return{pos:new vt(rt,3),col:new vt(at,3),nor:new vt(bt,3),idx:new Hs(we,1)}})(),k=()=>{let Qe=new qt;return Qe.setAttribute("position",U.pos),Qe.setAttribute("color",U.col),Qe.setAttribute("normal",U.nor),Qe.setIndex(U.idx),Qe},X=Oe.mats.grass||(Oe.mats.grass=(()=>{let Qe=new Xt({vertexColors:!0,side:vn,roughness:.9,metalness:0,envMapIntensity:.25});return Qe.onBeforeCompile=rt=>{rt.fragmentShader=rt.fragmentShader.replace("#include <normal_fragment_begin>",xt.normal_fragment_begin.replace(/normal \*= faceDirection;/g,""))},Qe})()),J=["#427a45","#4c8550","#3b7040","#558e56","#47804b","#3f7646"].map(jn),Z=oi(9113),K=[],ue=-_/2-430,Ce=_/2+330,Ue=-130,Ke=580,Ee=Ne.lite!=null?!!Ne.lite:typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||innerWidth<820,ve=Ee?1.5:1,qe=2.3*ve,We=4.6*ve;for(let Qe=Ue;Qe<Ke;){let rt=Qe>-30&&Qe<340,at=rt?qe:We;for(let bt=ue;bt<Ce;bt+=at){let we=rt&&bt>-_/2-270&&bt<_/2+250,ct=we?qe:We;if(!we&&rt&&Math.round((bt-ue)/qe)%2)continue;let ze=bt+(Z()-.5)*ct,Ge=Qe+(Z()-.5)*ct;C(ze,Ge)&&K.push(ze,Ge,(we?1:1.9)*(Ee?1.42:1))}Qe+=at}let tt=160,Be=new Map;for(let Qe=0;Qe<K.length;Qe+=3){let rt=Math.floor((K[Qe]-ue)/tt)+","+Math.floor((K[Qe+1]-Ue)/tt);(Be.get(rt)||Be.set(rt,[]).get(rt)).push(Qe)}let yt=new Ut,en=new zn,Mt=new N(0,1,0),Ft=new N,Ht=new N,dt=new pt;for(let Qe of Be.values()){let rt=k(),at=new Da(rt,X,Qe.length);Qe.forEach((we,ct)=>{let ze=K[we],Ge=K[we+1],je=K[we+2]*(.85+Z()*.35),ot=Math.floor((ze+5e3)/21)%2?1.07:.94,Dt=.93+.14*Math.sin(ze*.011+1.3)*Math.sin(Ge*.013+.4);en.setFromAxisAngle(Mt,Z()*6.283),Ft.set(je,je*(.88+Z()*.3),je),Ht.set(ze,-.45+dn(ze,Ge),H+Ge),yt.compose(Ht,en,Ft),at.setMatrixAt(ct,yt),dt.copy(J[Math.floor(Z()*J.length)]).multiplyScalar(ot*Dt*(.92+Z()*.16)),at.setColorAt(ct,dt)}),at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0),at.receiveShadow=!0,at.castShadow=!1,at.computeBoundingSphere(),at.frustumCulled=!0,at.name="Grass blades";let bt=new N;at.onBeforeRender=(we,ct,ze)=>{bt.copy(at.boundingSphere.center).applyMatrix4(at.matrixWorld);let Ge=bt.distanceTo(ze.getWorldPosition(Ht));rt.setDrawRange(0,6*(Ge<600?11:Ge>1400?6:Math.round(11-5*(Ge-600)/800)))},h.add(at)}}if(Ne.ground==="planters"){let C=$t("pstone",{n:512,seed:103,color:"#8d867a",mid:.6,fine:1,tone:.06,grit:.22,bump:6,slab:[160,64],jw:4},.92),U=$t("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),k=Oe.mats.leaf2||(Oe.mats.leaf2=new Xt({color:3493932,roughness:1,envMapIntensity:pi})),X=["#f4f1ea","#b9a3d6","#e6b8c8"].map(ve=>er(ve,.8)),J=(ve,qe,We,tt,Be)=>{let yt=1-Be;return[yt*yt*yt*ve[0]+3*yt*yt*Be*qe[0]+3*yt*Be*Be*We[0]+Be*Be*Be*tt[0],yt*yt*yt*ve[1]+3*yt*yt*Be*qe[1]+3*yt*Be*Be*We[1]+Be*Be*Be*tt[1]]},Z=[[[ae/2,0],[ae/2,230],[ae/2+70,330],[ae/2+70,640],1],[[-ae/2,0],[-ae/2,300],[-ae/2-190,400],[-ae/2-190,640],-1]],K=12,ue=1.1,Ce=$t("pband",{n:512,seed:113,color:"#56524d",mid:.5,fine:.9,tone:.05,grit:.2,bump:4.5,rows:512,tab:64},.9);for(let[ve,qe,We,tt,Be]of Z){let en=[],Mt=[],Ft=[],Ht=0,dt=null;for(let at=0;at<=56;at++){let bt=at/56,we=J(ve,qe,We,tt,bt),ct=J(ve,qe,We,tt,Math.min(1,bt+.004)),ze=J(ve,qe,We,tt,Math.max(0,bt-.004)),Ge=ct[0]-ze[0],je=ct[1]-ze[1],ot=Math.hypot(Ge,je)||1;Ge/=ot,je/=ot;let Dt=Be*Math.abs(je),gt=-Be*Ge*Math.sign(je||1);dt&&(Ht+=Math.hypot(we[0]-dt[0],we[1]-dt[1])),dt=we;let It=we[0]-Dt*.5,Rt=we[1]-gt*.5,ye=we[0]+Dt*K,St=we[1]+gt*K;if(en.push(It,0,H+Rt,It,ue,H+Rt,ye,ue,H+St,ye,0,H+St),Mt.push(Ht/48,0,Ht/48,.02,Ht/48,.27,Ht/48,.29),at<56){let it=at*4;for(let Et=0;Et<3;Et++){let wt=it+Et,Nt=it+Et+1,At=wt+4,kt=Nt+4;Be>0?Ft.push(wt,At,Nt,Nt,At,kt):Ft.push(wt,Nt,At,Nt,kt,At)}}}let Qe=new qt;Qe.setAttribute("position",new vt(en,3)),Qe.setAttribute("uv",new vt(Mt,2)),Qe.setIndex(Ft),Qe.computeVertexNormals();let rt=new Xe(Qe,Ce);rt.castShadow=rt.receiveShadow=!0,rt.name="Drive border",h.add(rt)}let Ue=$t("pcap",{seed:119,color:"#bdb6a8",mid:.4,fine:.9,tone:.05,grit:.12,bump:2},.86),Ke=Oe.mats.pgrass||(Oe.mats.pgrass=new Xt({color:8227410,roughness:1,envMapIntensity:pi})),Ee=Oe.mats.pgrassT||(Oe.mats.pgrassT=new Xt({color:12167288,roughness:1,envMapIntensity:pi}));for(let[ve,qe,We,tt,Be]of Z){let yt=[],Mt=0;for(let we=0;we<=240;we++){let ct=J(ve,qe,We,tt,we/240);we&&(Mt+=Math.hypot(ct[0]-yt[we-1][0],ct[1]-yt[we-1][1])),yt.push([ct[0],ct[1],Mt])}let Ft=(we,ct)=>{let ze=1;for(;ze<240&&yt[ze][2]<we;)ze++;let Ge=yt[ze-1],je=yt[ze],ot=(we-Ge[2])/(je[2]-Ge[2]||1),Dt=Math.hypot(je[0]-Ge[0],je[1]-Ge[1])||1,gt=(je[0]-Ge[0])/Dt,It=(je[1]-Ge[1])/Dt;return[Ge[0]+(je[0]-Ge[0])*ot+Be*It*ct,H+Ge[1]+(je[1]-Ge[1])*ot-Be*gt*ct]},Ht=(we,ct,ze,Ge,je,ot,Dt,gt,It)=>{let Rt=Math.max(2,Math.ceil((ct-we)/6)),ye=[],St=[],it=[];for(let At=0;At<=Rt;At++){let kt=we+(ct-we)*At/Rt,Ct=Ft(kt,ze),_t=Ft(kt,Ge),Ot=kt/56;if(ye.push(Ct[0],je,Ct[1],Ct[0],ot,Ct[1],_t[0],ot,_t[1],_t[0],je,_t[1]),St.push(Ot,je/56,Ot,ot/56,Ot,(ot+(Ge-ze))/56,Ot,(ot+(Ge-ze)+(ot-je))/56),At<Rt){let Cn=At*4;for(let Pn=0;Pn<3;Pn++){let $n=Cn+Pn,Kn=Cn+Pn+1,Qt=$n+4,Sn=Kn+4;Be>0?it.push($n,Qt,Kn,Kn,Qt,Sn):it.push($n,Kn,Qt,Kn,Sn,Qt)}}}for(let[At,kt]of[[0,1],[Rt*4,0]]){let Ct=ye.length/3;for(let _t=0;_t<4;_t++)ye.push(ye[(At+_t)*3],ye[(At+_t)*3+1],ye[(At+_t)*3+2]);St.push(0,je/56,0,ot/56,(Ge-ze)/56,ot/56,(Ge-ze)/56,je/56),Be>0==!!kt?it.push(Ct,Ct+1,Ct+2,Ct,Ct+2,Ct+3):it.push(Ct,Ct+2,Ct+1,Ct,Ct+3,Ct+2)}let Et=new qt;Et.setAttribute("position",new vt(ye,3)),Et.setAttribute("uv",new vt(St,2)),Et.setIndex(it);let wt=Et.toNonIndexed();wt.computeVertexNormals();let Nt=new Xe(wt,Dt);Nt.castShadow=It!==!1,Nt.receiveShadow=!0,Nt.name=gt,h.add(Nt)},dt=K+.5,Qe=34,rt=dt+Qe,at=20,bt=5.5;[[10,132],[156,278]].forEach(([we,ct],ze)=>{Ht(we,ct,dt,rt,0,at-1.2,C,"Planter"),Ht(we+bt,ct-bt,dt+bt,rt-bt,at-1.2,at-.7,U,"Planter soil",!1),Ht(we-1,ct+1,dt-1,dt+bt+.5,at-1.2,at+1.3,Ue,"Planter coping"),Ht(we-1,ct+1,rt-bt-.5,rt+1,at-1.2,at+1.3,Ue,"Planter coping"),Ht(we-1,we+bt+.5,dt+bt+.5,rt-bt-.5,at-1.2,at+1.3,Ue,"Planter coping"),Ht(ct-bt-.5,ct+1,dt+bt+.5,rt-bt-.5,at-1.2,at+1.3,Ue,"Planter coping");let Ge=oi(Be*7+ze*13+40),je=[[],[],[],[],[],[]],ot=(dt+rt)/2,Dt=at-.7;for(let gt=we+16,It=0;gt<ct-12;gt+=21+Ge()*5,It++){let Rt=Ft(gt,ot+(Ge()-.5)*5);if(It%2===0){let ye=8.5+Ge()*3.5,St=new qs(ye,2);St.scale(1,.82,1),St.translate(Rt[0],Dt+ye*.62,Rt[1]),je[0].push(St)}else for(let St=0;St<26;St++){let it=15+Ge()*11,Et=new za(.55,it,4,1);Et.translate(0,it/2,0),Et.rotateZ((Ge()-.5)*.9),Et.rotateY(Ge()*Math.PI*2),Et.translate(Rt[0]+(Ge()-.5)*5,Dt,Rt[1]+(Ge()-.5)*5),je[St%5===0?5:4].push(Et)}}for(let gt=0;gt<70;gt++){let It=Ft(we+bt+3+Ge()*(ct-we-2*bt-6),Ge()<.5?dt+bt+2+Ge()*4:rt-bt-2-Ge()*4),Rt=new qs(1+Ge()*.9,0);Rt.translate(It[0],Dt+1.4+Ge()*2,It[1]),je[1+gt%3].push(Rt)}je.forEach((gt,It)=>{if(!gt.length)return;let Rt=new Xe(zr(gt.map(ye=>ye.toNonIndexed()),!1),It===0?k:It===4?Ke:It===5?Ee:X[It-1]);Rt.castShadow=Rt.receiveShadow=!0,Rt.name=It===0?"Shrubs":It>3?"Grasses":"Flowers",h.add(Rt)})})}}let pn=$t("mulch",{seed:58,color:"#3a2a20",mid:.4,fine:1.6,tone:.2,grit:.8,bump:9},1),Vn=Oe.mats.leaf||(Oe.mats.leaf=(()=>{let C=vc("leaf",256,{seed:64,color:"#2f4426",mid:.6,fine:1.8,tone:.3,grit:.9,bump:10});return C.map.repeat.set(3,3),C.normalMap.repeat.set(3,3),new Xt({map:C.map,normalMap:C.normalMap,roughness:1,envMapIntensity:pi})})());for(let C of[-1,1]){xe(34,1.2,250,C*(_/2+19),.2,H-125,pn,"Bed","z");let U=oi(C>0?5:9);for(let k=0;k<4;k++){let X=13+U()*5,J=new qs(X,3),Z=J.attributes.position;for(let ue=0;ue<Z.count;ue++){let Ce=Z.getX(ue),Ue=Z.getY(ue),Ke=Z.getZ(ue),Ee=1+.07*Math.sin(Ce*.9+k)*Math.cos(Ke*1.1)+.05*Math.sin(Ue*1.7);Z.setXYZ(ue,Ce*Ee,Ue*Ee*.85,Ke*Ee)}J.computeVertexNormals();let K=new Xe(J,Vn);K.position.set(C*(_/2+19+(U()-.5)*6),X*.72,H-22-k*58-U()*10),K.castShadow=K.receiveShadow=!0,K.name="Boxwood",h.add(K)}}let wo=C=>{let U="rw:"+C;return Oe.mats[U]||(Oe.mats[U]=new Ai({color:jn(C)}))},To=Oe.mats.epoxy||(Oe.mats.epoxy=(()=>{let U=document.createElement("canvas");U.width=U.height=512;let k=U.getContext("2d"),X=oi(4411);k.fillStyle="#c8ad82",k.fillRect(0,0,512,512);let J=["#efe2c6","#b89868","#a08256","#7c6344","#e2d0aa","#9c8f7a","#5f5040"];for(let K=0;K<5200;K++){let ue=X()*512,Ce=X()*512,Ue=1.2+X()*3.6,Ke=1+X()*2.6;k.save(),k.translate(ue,Ce),k.rotate(X()*6.283),k.globalAlpha=.55+X()*.45,k.fillStyle=J[Math.floor(X()*J.length)],k.fillRect(-Ue/2,-Ke/2,Ue,Ke),k.restore(),(ue<4||Ce<4||ue>508||Ce>508)&&(k.save(),k.translate(ue+(ue<4?512:ue>508?-512:0),Ce+(Ce<4?512:Ce>508?-512:0)),k.fillStyle=J[K%J.length],k.fillRect(-Ue/2,-Ke/2,Ue,Ke),k.restore())}let Z=new Vi(U);return Z.wrapS=Z.wrapT=Dn,Z.colorSpace=Yt,Z.anisotropy=8,new Ci({map:Z,roughness:.34,metalness:0,clearcoat:.5,clearcoatRoughness:.18,envMapIntensity:.22})})()),Jn=new Xn,Xi=(C,U)=>{let k="room:"+C+U;return Oe.mats[k]||(Oe.mats[k]=new Xt({color:jn(C),roughness:.95,metalness:0,envMapIntensity:.25,emissive:jn(C),emissiveIntensity:U}))},mi=Ne.garage==="light",ir=mi?Xi("#f1eee8",.22):Xi("#e6dfd0",0),sr=mi?Xi("#e6e3dc",.18):Xi("#d9d2c3",0),ci=260,hs=new Xe(new si(_,ci).rotateX(-Math.PI/2),To);hs.geometry.attributes.uv.array.forEach((C,U,k)=>{k[U]=C*(U%2?ci/40:_/40)}),hs.position.set(0,-.01,H-L-ci/2+6),hs.receiveShadow=!0,Jn.add(hs);let rr=new Xe(new si(_,T),ir);rr.position.set(0,T/2,H-L-ci+6),rr.receiveShadow=!0,Jn.add(rr);let P=new Xe(new si(_,ci).rotateX(Math.PI/2),sr);sr.shadowSide=vn,P.castShadow=!0,P.position.set(0,A+14,H-L-ci/2+6),Jn.add(P);for(let C of[-1,1]){let U=new Xe(new si(ci,T).rotateY(-C*Math.PI/2),ir);U.position.set(C*(_/2-L-.4),T/2,H-L-ci/2+6),U.receiveShadow=!0,Jn.add(U)}let j=new js(mi?16775924:16774114,mi?2300:2400,420,1.7);j.position.set(0,A-6,H-L-110),Jn.add(j),h.add(Jn),G.scene.add(h);let te=Math.max(_,p)*.9+140;G.sun.position.set(-u*.62-40,p*2.5+40,u*.5+70),G.sun.target.position.set(0,p*.4,0);let ie=G.sun.shadow.camera;ie.left=-te,ie.right=te,ie.top=te,ie.bottom=-te,ie.near=10,ie.far=2400,ie.updateProjectionMatrix();let ne=d.L.n+":"+_+":"+p;return ne!==G.key&&(G.key=ne,G.fit=Math.max((_-2*R)/(2*Math.tan(15*Math.PI/180)*Math.max(.6,G.cam.aspect)),p/(2*Math.tan(15*Math.PI/180)))*1.32,wc()),G.ctl.minDistance=G.fit*.25,G.ctl.maxDistance=G.fit*2.2,d.L.man||(G.m=0),Eo(),li(),G.ready=!0,bn}function Eo(){if(!G.L)return;let i=new Ut,e=(t,n,s,r)=>{let a=(t.e3?G_(t,G.f):Vu(t,G.f,r)).poses;n.forEach((o,l)=>{let c=a[l];c&&(i.set(c.X[0],0,c.Z[0],c.C[0],0,1,0,0,c.X[1],0,c.Z[1],c.C[1],0,0,0,1),o.matrix.copy(i),o.matrixWorldNeedsUpdate=!0)}),(s||[]).forEach(o=>{let l=a[o.i];l&&(o.m.position.x=l.X[0]*o.lx+l.Z[0]*o.lz+l.C[0],o.m.position.z=l.X[1]*o.lx+l.Z[1]*o.lz+l.C[1])})};e(G.L,G.leaves,G.fixA,G.m),G.B&&e(G.B.L,G.B.lvs,G.B.fix,0)}function $_(i){return G.f=Math.max(0,Math.min(1,+i||0)),Eo(),li(),bn}function K_(i){return G.m=Math.max(0,Math.min(1,+i||0)),Eo(),li(),bn}function wc(){if(!G.r)return;let i=24*Math.PI/180,e=1.5*Math.PI/180,t=G.fit*1.22;G.ctl.target.set(0,G.H*.6,0),G.cam.position.set(Math.sin(i)*Math.cos(e)*t,G.H*.6+Math.sin(e)*t,Math.cos(i)*Math.cos(e)*t),G.ctl.update(),li()}function Q_(i){if(!G.r)return bn;let e=(i==="in"?156:22)*Math.PI/180,t=6*Math.PI/180,n=i==="in"?Math.min(G.fit,190):G.fit;return G.cam.position.set(Math.sin(e)*Math.cos(t)*n,G.H*.47+Math.sin(t)*n,Math.cos(e)*Math.cos(t)*n),G.ctl.update(),li(),bn}function ex(i,e,t){let n=G.f,s=performance.now();return e=e||2600,G.anim=()=>{let r=Math.min(1,(performance.now()-s)/e),a=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;G.f=n+(i-n)*a,Eo(),G.dirty=!0,t&&t(G.f),r>=1&&(G.anim=null)},li(),bn}function tx(){return G.r?(qu(),G.r.domElement.toDataURL("image/jpeg",.92)):null}function nx(){let i=(n,s)=>{let r=n.find(a=>String(a[0])===String(s));return r?r[1]:String(s??"")},e=/pavers|herr|mix/.test(String(Ne.drive||""))||/pavers|herr|mix/.test(String(Ne.ground||"")),t=[["Structure",i(nr,Ne.structure)],["Roof",i(bo,Ne.roof)]];return Ne.roof!=="flat"&&t.push(["Slope",Ne.pitch+":12"],["Eave",Ne.eave==="deep"?"Deep":"Short"]),t.push(["Openings",i(Mo,Ne.second)],["Driveway",i(vo,Ne.drive)],["Ground",i(yo,Ne.ground)]),e&&t.push(["Paver colour",i(yc,Ne.paver)]),t.push(["Lights",i(Mc,Ne.light)]),t.filter(n=>n[1])}var bn={v:ku,setting:Wu,scene:nx,mount:j_,show:Ec,fold:$_,man:K_,look:Q_,reset:wc,animate:ex,shot:tx,dispose:Zu,stop(){G.anim=null},get ready(){return G.ready},get folded(){return G.f},get hasMan(){return!!(G.L&&G.L.man)},_E:G,_pose:Vu},lv=bn;Wt.TR3D=bn;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
