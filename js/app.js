(()=>{var Fd=0,Cu=1,Od=2;var wr=1,Bd=2,vs=3,Ji=0,Ht=1,Tn=2,En=0,bs=1,bi=2,Ru=3,Pu=4,zd=5;var Ia=100,Vd=101,kd=102,Hd=103,Gd=104,Wd=200,Xd=201,jd=202,$d=203,Iu=204,Lu=205,Yd=206,Jd=207,Zd=208,Kd=209,Qd=210,ef=211,tf=212,nf=213,af=214,qo=0,Fo=1,Oo=2,os=3,Bo=4,zo=5,Vo=6,ko=7,Nu=0,sf=1,rf=2,On=0,Ar=1,Cr=2,Rr=3,La=4,Pr=5,Ir=6,Lr=7;var Du=300,Zi=301,Na=302,vl=303,bl=304,Nr=306,Vi=1e3,Qn=1001,Ho=1002,kt=1003,of=1004;var Dr=1005;var $t=1006,yl=1007;var Ki=1008;var dn=1009,Uu=1010,qu=1011,ys=1012,Ml=1013,Bn=1014,zn=1015,qt=1016,Sl=1017,Tl=1018,Ms=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,wn=1023,ei=1026,Qi=1027,Vu=1028,El=1029,ea=1030,wl=1031;var Al=1033,Ur=33776,qr=33777,Fr=33778,Or=33779,Cl=35840,Rl=35841,Pl=35842,Il=35843,Ll=36196,Nl=37492,Dl=37496,Ul=37488,ql=37489,Br=37490,Fl=37491,Ol=37808,Bl=37809,zl=37810,Vl=37811,kl=37812,Hl=37813,Gl=37814,Wl=37815,Xl=37816,jl=37817,$l=37818,Yl=37819,Jl=37820,Zl=37821,Kl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,zr=36285,ic=36286;var Ys=2300,Go=2301,Do=2302,pu=2303,mu=2400,gu=2401,xu=2402;var lf=3200;var ac=0,cf=1,yi="",Xt="srgb",Js="srgb-linear",Zs="linear",lt="srgb";var Uo=7680;var uf=519,hf=512,df=513,ff=514,sc=515,pf=516,mf=517,rc=518,gf=519,xf=35044;var ku="300 es",Un=2e3,ls=2001;function xm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _m(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _f(){let n=Ks("canvas");return n.style.display="block",n}var sd={},cs=null;function Hu(...n){let e="THREE."+n.shift();cs?cs("log",e,...n):console.log(e,...n)}function vf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=vf(n);let e="THREE."+n.shift();if(cs)cs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){n=vf(n);let e="THREE."+n.shift();if(cs)cs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ma(...n){let e=n.join(" ");e in sd||(sd[e]=!0,Ue(...n))}function bf(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var yf={[qo]:Fo,[Oo]:Vo,[Bo]:ko,[os]:zo,[Fo]:qo,[Vo]:Oo,[ko]:Bo,[zo]:os},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kc=Math.PI/180,Wo=180/Math.PI;function Ss(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function vm(n,e){return(n%e+e)%e}function Hc(n,e,t){return(1-t)*n+t*e}function Vs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ge=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3],h=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(d!==v||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*v;g<0&&(h=-h,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let w=Math.acos(g),C=Math.sin(w);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C,l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+v*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+v*o;let w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=s[r],h=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(s/2),h=l(i/2),f=l(a/2),m=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-a)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(r-a)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-i*c,this._z=s*u+r*c+i*l-a*o,this._w=r*u-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),u=2*(o*t-s*a),d=2*(s*i-r*t);return this.x=t+l*c+r*d-o*u,this.y=i+l*u+o*c-s*d,this.z=a+l*d+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new D,rd=new ni,Ve=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c)}set(e,t,i,a,s,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],v=a[0],g=a[3],p=a[6],w=a[1],C=a[4],b=a[7],M=a[2],E=a[5],S=a[8];return s[0]=r*v+o*w+l*M,s[3]=r*g+o*C+l*E,s[6]=r*p+o*b+l*S,s[1]=c*v+u*w+d*M,s[4]=c*g+u*C+d*E,s[7]=c*p+u*b+d*S,s[2]=h*v+f*w+m*M,s[5]=h*g+f*C+m*E,s[8]=h*p+f*b+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-i*s*u+i*o*l+a*s*c-a*r*l}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,h=o*l-u*s,f=c*s-r*l,m=t*d+i*h+a*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=d*v,e[1]=(a*c-u*i)*v,e[2]=(o*i-a*r)*v,e[3]=h*v,e[4]=(u*t-a*l)*v,e[5]=(a*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return Ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return Ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new Ve,od=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){let n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(a.r=xi(a.r),a.g=xi(a.g),a.b=xi(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(a.r=rs(a.r),a.g=rs(a.g),a.b=rs(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yi?Zs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Zs,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:od,fromXYZ:ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var Je=bm();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ja,Xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ja===void 0&&(ja=Ks("canvas")),ja.width=e.width,ja.height=e.height;let a=ja.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ja}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=xi(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ym=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Xc(a[r].image)):s.push(Xc(a[r]))}else s=Xc(a);i.url=s}return t||(e.images[this.uuid]=i),i}};function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Mm=0,jc=new D,cn=class n extends ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,a=Qn,s=$t,r=Ki,o=wn,l=dn,c=n.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ss(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Du;cn.DEFAULT_ANISOTROPY=1;var xt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,b=(f+1)/2,M=(p+1)/2,E=(u+h)/4,S=(d+v)/4,_=(m+g)/4;return C>b&&C>M?C<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(C),a=E/i,s=S/i):b>M?b<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),i=E/a,s=_/a):M<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(M),i=S/s,a=_/s),this.set(i,a,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let a={width:e,height:t,depth:i.depth},s=new cn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new us(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},At=class extends jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qs=class extends cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,a,s,r,o,l,c,u,d,h,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c,u,d,h,f,m,v,g)}set(e,t,i,a,s,r,o,l,c,u,d,h,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=a,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,a=1/$a.setFromMatrixColumn(e,0).length(),s=1/$a.setFromMatrixColumn(e,1).length(),r=1/$a.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=r*u,f=r*d,m=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=m+f*c,t[10]=r*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h+v*o,t[4]=m*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-m,t[6]=v+h*o,t[10]=r*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h-v*o,t[4]=-r*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*u,t[9]=v-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let h=r*u,f=r*d,m=o*u,v=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let h=r*l,f=r*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=m*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-v*d}else if(e.order==="XZY"){let h=r*l,f=r*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=r*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,Tm)}lookAt(e,t,i){let a=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ui.crossVectors(i,fn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ui.crossVectors(i,fn)),Ui.normalize(),uo.crossVectors(fn,Ui),a[0]=Ui.x,a[4]=uo.x,a[8]=fn.x,a[1]=Ui.y,a[5]=uo.y,a[9]=fn.y,a[2]=Ui.z,a[6]=uo.z,a[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],w=i[3],C=i[7],b=i[11],M=i[15],E=a[0],S=a[4],_=a[8],T=a[12],R=a[1],U=a[5],N=a[9],k=a[13],F=a[2],X=a[6],Z=a[10],$=a[14],oe=a[3],ee=a[7],ae=a[11],re=a[15];return s[0]=r*E+o*R+l*F+c*oe,s[4]=r*S+o*U+l*X+c*ee,s[8]=r*_+o*N+l*Z+c*ae,s[12]=r*T+o*k+l*$+c*re,s[1]=u*E+d*R+h*F+f*oe,s[5]=u*S+d*U+h*X+f*ee,s[9]=u*_+d*N+h*Z+f*ae,s[13]=u*T+d*k+h*$+f*re,s[2]=m*E+v*R+g*F+p*oe,s[6]=m*S+v*U+g*X+p*ee,s[10]=m*_+v*N+g*Z+p*ae,s[14]=m*T+v*k+g*$+p*re,s[3]=w*E+C*R+b*F+M*oe,s[7]=w*S+C*U+b*X+M*ee,s[11]=w*_+C*N+b*Z+M*ae,s[15]=w*T+C*k+b*$+M*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],w=l*f-c*h,C=o*f-c*d,b=o*h-l*d,M=r*f-c*u,E=r*h-l*u,S=r*d-o*u;return t*(v*w-g*C+p*b)-i*(m*w-g*M+p*E)+a*(m*C-v*M+p*S)-s*(m*b-v*E+g*S)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-i*(s*u-o*l)+a*(s*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],w=t*o-i*r,C=t*l-a*r,b=t*c-s*r,M=i*l-a*o,E=i*c-s*o,S=a*c-s*l,_=u*v-d*m,T=u*g-h*m,R=u*p-f*m,U=d*g-h*v,N=d*p-f*v,k=h*p-f*g,F=w*k-C*N+b*U+M*R-E*T+S*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/F;return e[0]=(o*k-l*N+c*U)*X,e[1]=(a*N-i*k-s*U)*X,e[2]=(v*S-g*E+p*M)*X,e[3]=(h*E-d*S-f*M)*X,e[4]=(l*R-r*k-c*T)*X,e[5]=(t*k-a*R+s*T)*X,e[6]=(g*b-m*S-p*C)*X,e[7]=(u*S-h*b+f*C)*X,e[8]=(r*N-o*R+c*_)*X,e[9]=(i*R-t*N-s*_)*X,e[10]=(m*E-v*b+p*w)*X,e[11]=(d*b-u*E-f*w)*X,e[12]=(o*T-r*U-l*_)*X,e[13]=(t*U-i*T+a*_)*X,e[14]=(v*C-m*M-g*w)*X,e[15]=(u*M-d*C+h*w)*X,this}scale(e){let t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,d=o+o,h=s*c,f=s*u,m=s*d,v=r*u,g=r*d,p=o*d,w=l*c,C=l*u,b=l*d,M=i.x,E=i.y,S=i.z;return a[0]=(1-(v+p))*M,a[1]=(f+b)*M,a[2]=(m-C)*M,a[3]=0,a[4]=(f-b)*E,a[5]=(1-(h+p))*E,a[6]=(g+w)*E,a[7]=0,a[8]=(m+C)*S,a[9]=(g-w)*S,a[10]=(1-(h+v))*S,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let r=$a.set(a[0],a[1],a[2]).length(),o=$a.set(a[4],a[5],a[6]).length(),l=$a.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Ln.copy(this);let c=1/r,u=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,a,s,r,o=Un,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-a),h=(t+e)/(t-e),f=(i+a)/(i-a),m,v;if(l)m=s/(r-s),v=r*s/(r-s);else if(o===Un)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===ls)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=Un,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-a),h=-(t+e)/(t-e),f=-(i+a)/(i-a),m,v;if(l)m=1/(r-s),v=r/(r-s);else if(o===Un)m=-2/(r-s),v=-(r+s)/(r-s);else if(o===ls)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$a=new D,Ln=new mt,Sm=new D(0,0,0),Tm=new D(1,1,1),Ui=new D,uo=new D,fn=new D,cd=new mt,ud=new ni,_i=class n{constructor(e=0,t=0,i=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,hd=new D,Ya=new ni,hi=new mt,ho=new D,ks=new D,wm=new D,Am=new ni,dd=new D(1,0,0),fd=new D(0,1,0),pd=new D(0,0,1),md={type:"added"},Cm={type:"removed"},Ja={type:"childadded",child:null},$c={type:"childremoved",child:null},Yt=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new _i,i=new ni,a=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ve}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ya.setFromAxisAngle(e,t),this.quaternion.multiply(Ya),this}rotateOnWorldAxis(e,t){return Ya.setFromAxisAngle(e,t),this.quaternion.premultiply(Ya),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ks,ho,this.up):hi.lookAt(ho,ks,this.up),this.quaternion.setFromRotationMatrix(hi),a&&(hi.extractRotation(a.matrixWorld),Ya.setFromRotationMatrix(hi),this.quaternion.premultiply(Ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*a,s[13]+=i-s[1]*t-s[5]*i-s[9]*a,s[14]+=a-s[2]*t-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=a,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new D(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rm={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Je.workingColorSpace){if(e=vm(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Yc(r,s,e+1/3),this.g=Yc(r,s,e),this.b=Yc(r,s,e-1/3)}return Je.colorSpaceToWorking(this,a),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=Mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Je.workingToColorSpace(en.copy(this),e),Math.round(Ke(en.r*255,0,255))*65536+Math.round(Ke(en.g*255,0,255))*256+Math.round(Ke(en.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(en.copy(this),t);let i=en.r,a=en.g,s=en.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Xt){Je.workingToColorSpace(en.copy(this),e);let t=en.r,i=en.g,a=en.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(fo);let i=Hc(qi.h,fo.h,t),a=Hc(qi.s,fo.s,t),s=Hc(qi.l,fo.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ne;Ne.NAMES=Mf;var tr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new D,di=new D,Jc=new D,fi=new D,Za=new D,Ka=new D,gd=new D,Zc=new D,Kc=new D,Qc=new D,eu=new xt,tu=new xt,nu=new xt,zi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Nn.subVectors(e,t),a.cross(Nn);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Nn.subVectors(a,t),di.subVectors(i,t),Jc.subVectors(e,t);let r=Nn.dot(Nn),o=Nn.dot(di),l=Nn.dot(Jc),c=di.dot(di),u=di.dot(Jc),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(r*u-o*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(r,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,a,s,r){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,t),tu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(eu,s.x),r.addScaledVector(tu,s.y),r.addScaledVector(nu,s.z),r}static isFrontFacing(e,t,i,a){return Nn.subVectors(i,t),di.subVectors(e,t),Nn.cross(di).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,s=this.c,r,o;Za.subVectors(a,i),Ka.subVectors(s,i),Zc.subVectors(e,i);let l=Za.dot(Zc),c=Ka.dot(Zc);if(l<=0&&c<=0)return t.copy(i);Kc.subVectors(e,a);let u=Za.dot(Kc),d=Ka.dot(Kc);if(u>=0&&d<=u)return t.copy(a);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(i).addScaledVector(Za,r);Qc.subVectors(e,s);let f=Za.dot(Qc),m=Ka.dot(Qc);if(m>=0&&f<=m)return t.copy(s);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ka,o);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return gd.subVectors(s,a),o=(d-u)/(d-u+(f-m)),t.copy(a).addScaledVector(gd,o);let p=1/(g+v+h);return r=v*p,o=h*p,t.copy(i).addScaledVector(Za,r).addScaledVector(Ka,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ki=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Dn):Dn.fromBufferAttribute(s,r),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),mo.subVectors(this.max,Hs),Qa.subVectors(e.a,Hs),es.subVectors(e.b,Hs),ts.subVectors(e.c,Hs),Fi.subVectors(es,Qa),Oi.subVectors(ts,es),_a.subVectors(Qa,ts);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-_a.z,_a.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,_a.z,0,-_a.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-_a.y,_a.x,0];return!iu(t,Qa,es,ts,mo)||(t=[1,0,0,0,1,0,0,0,1],!iu(t,Qa,es,ts,mo))?!1:(go.crossVectors(Fi,Oi),t=[go.x,go.y,go.z],iu(t,Qa,es,ts,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,po=new ki,Qa=new D,es=new D,ts=new D,Fi=new D,Oi=new D,_a=new D,Hs=new D,mo=new D,go=new D,va=new D;function iu(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){va.fromArray(n,s);let o=a.x*Math.abs(va.x)+a.y*Math.abs(va.y)+a.z*Math.abs(va.z),l=e.dot(va),c=t.dot(va),u=i.dot(va);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Nt=new D,xo=new ge,Pm=0,ln=class extends ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xf,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),a=hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),a=hn(a,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ar=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},Im=new ki,Gs=new D,au=new D,Sa=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Im.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Gs,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(au)),this.expandByPoint(Gs.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lm=0,Sn=new mt,su=new Yt,ns=new D,pn=new ki,Ws=new ki,Vt=new D,Dt=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xm(e)?ar:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let a=0,s=e.length;a<s;a++){let r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let a=0;a<i;a++){let s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,Ws.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,Ws.max),pn.expandByPoint(Vt)):(pn.expandByPoint(Ws.min),pn.expandByPoint(Ws.max))}pn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Vt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Vt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Vt.add(ns)),a=Math.max(a,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,a=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new D,l[_]=new D;let c=new D,u=new D,d=new D,h=new ge,f=new ge,m=new ge,v=new D,g=new D;function p(_,T,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),h.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(v),o[T].add(v),o[R].add(v),l[_].add(g),l[T].add(g),l[R].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,T=w.length;_<T;++_){let R=w[_],U=R.start,N=R.count;for(let k=U,F=U+N;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let C=new D,b=new D,M=new D,E=new D;function S(_){M.fromBufferAttribute(a,_),E.copy(M);let T=o[_];C.copy(T),C.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(E,T);let U=b.dot(l[_])<0?-1:1;r.setXYZW(_,C.x,C.y,C.z,U)}for(let _=0,T=w.length;_<T;++_){let R=w[_],U=R.start,N=R.count;for(let k=U,F=U+N;k<F;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let a=new D,s=new D,r=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)a.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new ln(h,u,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ru=new D,Nm=new D,Dm=new Ve,mn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=ru.subVectors(i,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let a=e.delta(ru),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dm.getNormalMatrix(e),a=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Um=0,vi=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=bs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Lu,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new D,ou=new D,_o=new D,vo=new D,sr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ou.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),vo.copy(this.origin).sub(ou);let s=e.distanceTo(t)*.5,r=-this.direction.dot(_o),o=vo.dot(this.direction),l=-vo.dot(_o),c=vo.lengthSq(),u=Math.abs(1-r*r),d,h,f,m;if(u>0)if(d=r*l-o,h=r*o-l,m=s*u,d>=0)if(h>=-m)if(h<=m){let v=1/u;d*=v,h*=v,f=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(ou).addScaledVector(_o,h),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),a=mi.dot(mi)-i*i,s=e.radius*e.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,f=e.z-r.z,m=t.x-r.x,v=t.y-r.y,g=t.z-r.z,p=i.x-r.x,w=i.y-r.y,C=i.z-r.z,b=Math.abs(l),M=Math.abs(c),E=Math.abs(u),S,_,T,R,U,N,k,F,X,Z,$,oe;if(b>=M&&b>=E?(T=l,N=d,X=m,oe=p,l>=0?(S=c,_=u,R=h,U=f,k=v,F=g,Z=w,$=C):(S=u,_=c,R=f,U=h,k=g,F=v,Z=C,$=w)):M>=E?(T=c,N=h,X=v,oe=w,c>=0?(S=u,_=l,R=f,U=d,k=g,F=m,Z=C,$=p):(S=l,_=u,R=d,U=f,k=m,F=g,Z=p,$=C)):(T=u,N=f,X=g,oe=C,u>=0?(S=l,_=c,R=d,U=h,k=m,F=v,Z=p,$=w):(S=c,_=l,R=h,U=d,k=v,F=m,Z=w,$=p)),T===0)return null;let ee=S/T,ae=_/T,re=1/T,Le=R-ee*N,Pe=U-ae*N,ft=k-ee*X,Ye=F-ae*X,it=Z-ee*oe,J=$-ae*oe,ie=it*Ye-J*ft,Se=Le*J-Pe*it,Oe=ft*Pe-Ye*Le;if(a){if(ie<0||Se<0||Oe<0)return null}else if((ie<0||Se<0||Oe<0)&&(ie>0||Se>0||Oe>0))return null;let Me=ie+Se+Oe;if(Me===0)return null;let Ge=re*(ie*N+Se*X+Oe*oe);return(Me>0?Ge<0:Ge>0)?null:this.at(Ge/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xd=new mt,ba=new sr,bo=new Sa,_d=new D,yo=new D,Mo=new D,So=new D,lu=new D,To=new D,vd=new D,Eo=new D,De=class extends Yt{constructor(e=new Dt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(s&&o){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(lu.fromBufferAttribute(d,e),r?To.addScaledVector(lu,u):To.addScaledVector(lu.sub(t),u))}t.add(To)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),ba.copy(e.ray).recast(e.near),!(bo.containsPoint(ba.origin)===!1&&(ba.intersectSphere(bo,_d)===null||ba.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(xd.copy(s).invert(),ba.copy(e.ray).applyMatrix4(xd),!(i.boundingBox!==null&&ba.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ba)))}_computeIntersections(e,t,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),C=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,M=C;b<M;b+=3){let E=o.getX(b),S=o.getX(b+1),_=o.getX(b+2);a=wo(this,p,e,i,c,u,d,E,S,_),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=o.getX(g),C=o.getX(g+1),b=o.getX(g+2);a=wo(this,r,e,i,c,u,d,w,C,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),C=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,M=C;b<M;b+=3){let E=b,S=b+1,_=b+2;a=wo(this,p,e,i,c,u,d,E,S,_),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=g,C=g+1,b=g+2;a=wo(this,r,e,i,c,u,d,w,C,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}};function qm(n,e,t,i,a,s,r,o){let l;if(e.side===Ht?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Ji,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function wo(n,e,t,i,a,s,r,o,l,c){n.getVertexPosition(o,yo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,So);let u=qm(n,e,t,i,yo,Mo,So,vd);if(u){let d=new D;zi.getBarycoord(vd,yo,Mo,So,d),a&&(u.uv=zi.getInterpolatedAttribute(a,o,l,c,d,new ge)),s&&(u.uv1=zi.getInterpolatedAttribute(s,o,l,c,d,new ge)),r&&(u.normal=zi.getInterpolatedAttribute(r,o,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};zi.getNormal(yo,Mo,So,h.normal),u.face=h,u.barycoord=d}return u}var Yo=class extends cn{constructor(e=null,t=1,i=1,a,s,r,o,l,c=kt,u=kt,d,h){super(null,r,o,l,c,u,a,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=new Sa,Fm=new ge(.5,.5),Ao=new D,ds=class{constructor(e=new mn,t=new mn,i=new mn,a=new mn,s=new mn,r=new mn){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],w=s[12],C=s[13],b=s[14],M=s[15];if(a[0].setComponents(c-r,f-u,p-m,M-w).normalize(),a[1].setComponents(c+r,f+u,p+m,M+w).normalize(),a[2].setComponents(c+o,f+d,p+v,M+C).normalize(),a[3].setComponents(c-o,f-d,p-v,M-C).normalize(),i)a[4].setComponents(l,h,g,b).normalize(),a[5].setComponents(c-l,f-h,p-g,M-b).normalize();else if(a[4].setComponents(c-l,f-h,p-g,M-b).normalize(),t===Un)a[5].setComponents(c+l,f+h,p+g,M+b).normalize();else if(t===ls)a[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ya.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ya.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ya)}intersectsSprite(e){ya.center.set(0,0,0);let t=Fm.distanceTo(e.center);return ya.radius=.7071067811865476+t,ya.applyMatrix4(e.matrixWorld),this.intersectsSphere(ya)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(Ao.x=a.normal.x>0?e.max.x:e.min.x,Ao.y=a.normal.y>0?e.max.y:e.min.y,Ao.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fs=class extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bd=new mt,_u=new sr,Co=new Sa,Ro=new D,rr=class extends Yt{constructor(e=new Dt,t=new fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(a),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;bd.copy(a).invert(),_u.copy(e.ray).applyMatrix4(bd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=h,v=f;m<v;m++){let g=c.getX(m);Ro.fromBufferAttribute(d,g),yd(Ro,g,l,a,e,t,this)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=h,v=f;m<v;m++)Ro.fromBufferAttribute(d,m),yd(Ro,m,l,a,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function yd(n,e,t,i,a,s,r){let o=_u.distanceSqToPoint(n);if(o<t){let l=new D;_u.closestPointToPoint(n,l),l.applyMatrix4(i);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var or=class extends cn{constructor(e=[],t=Zi,i,a,s,r,o,l,c,u){super(e,t,i,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ta=class extends cn{constructor(e,t,i,a,s,r,o,l,c){super(e,t,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends cn{constructor(e,t,i=Bn,a,s,r,o=kt,l=kt,c,u=ei,d=1){if(u!==ei&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,a,s,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jo=class extends Hi{constructor(e,t=Bn,i=Zi,a,s,r=kt,o=kt,l,c=ei){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},lr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class n extends Dt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,i,t,e,r,s,0),m("z","y","x",1,-1,i,t,-e,r,s,1),m("x","z","y",1,1,e,i,t,a,r,2),m("x","z","y",1,-1,e,i,-t,a,r,3),m("x","y","z",1,-1,e,t,i,a,s,4),m("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function m(v,g,p,w,C,b,M,E,S,_,T){let R=b/S,U=M/_,N=b/2,k=M/2,F=E/2,X=S+1,Z=_+1,$=0,oe=0,ee=new D;for(let ae=0;ae<Z;ae++){let re=ae*U-k;for(let Le=0;Le<X;Le++){let Pe=Le*R-N;ee[v]=Pe*w,ee[g]=re*C,ee[p]=F,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Le/S),d.push(1-ae/_),$+=1}}for(let ae=0;ae<_;ae++)for(let re=0;re<S;re++){let Le=h+re+X*ae,Pe=h+re+X*(ae+1),ft=h+(re+1)+X*(ae+1),Ye=h+(re+1)+X*ae;l.push(Le,Pe,Ye),l.push(Pe,ft,Ye),oe+=6}o.addGroup(f,oe,T),f+=oe,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class n extends Dt{constructor(e=1,t=1,i=4,a=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:a,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),a=Math.max(3,Math.floor(a)),s=Math.max(1,Math.floor(s));let r=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,m=i*2+s,v=a+1,g=new D,p=new D;for(let w=0;w<=m;w++){let C=0,b=0,M=0,E=0;if(w<=i){let T=w/i,R=T*Math.PI/2;b=-u-e*Math.cos(R),M=e*Math.sin(R),E=-e*Math.cos(R),C=T*d}else if(w<=i+s){let T=(w-i)/s;b=-u+T*t,M=e,E=0,C=d+T*h}else{let T=(w-i-s)/i,R=T*Math.PI/2;b=u+e*Math.sin(R),M=e*Math.cos(R),E=e*Math.sin(R),C=d+h+T*d}let S=Math.max(0,Math.min(1,C/f)),_=0;w===0?_=.5/a:w===m&&(_=-.5/a);for(let T=0;T<=a;T++){let R=T/a,U=R*Math.PI*2,N=Math.sin(U),k=Math.cos(U);p.x=-M*k,p.y=b,p.z=M*N,o.push(p.x,p.y,p.z),g.set(-M*k,E,M*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,S)}if(w>0){let T=(w-1)*v;for(let R=0;R<a;R++){let U=T+R,N=T+R+1,k=w*v+R,F=w*v+R+1;r.push(U,N,k),r.push(N,F,k)}}}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},wa=class n extends Dt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);let s=[],r=[],o=[],l=[],c=new D,u=new ge;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*a;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qn=class n extends Dt{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let u=[],d=[],h=[],f=[],m=0,v=[],g=i/2,p=0;w(),r===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function w(){let b=new D,M=new D,E=0,S=(t-e)/i;for(let _=0;_<=s;_++){let T=[],R=_/s,U=R*(t-e)+e;for(let N=0;N<=a;N++){let k=N/a,F=k*l+o,X=Math.sin(F),Z=Math.cos(F);M.x=U*X,M.y=-R*i+g,M.z=U*Z,d.push(M.x,M.y,M.z),b.set(X,S,Z).normalize(),h.push(b.x,b.y,b.z),f.push(k,1-R),T.push(m++)}v.push(T)}for(let _=0;_<a;_++)for(let T=0;T<s;T++){let R=v[T][_],U=v[T+1][_],N=v[T+1][_+1],k=v[T][_+1];(e>0||T!==0)&&(u.push(R,U,k),E+=3),(t>0||T!==s-1)&&(u.push(U,N,k),E+=3)}c.addGroup(p,E,0),p+=E}function C(b){let M=m,E=new ge,S=new D,_=0,T=b===!0?e:t,R=b===!0?1:-1;for(let N=1;N<=a;N++)d.push(0,g*R,0),h.push(0,R,0),f.push(.5,.5),m++;let U=m;for(let N=0;N<=a;N++){let F=N/a*l+o,X=Math.cos(F),Z=Math.sin(F);S.x=T*Z,S.y=g*R,S.z=T*X,d.push(S.x,S.y,S.z),h.push(0,R,0),E.x=X*.5+.5,E.y=Z*.5*R+.5,f.push(E.x,E.y),m++}for(let N=0;N<a;N++){let k=M+N,F=U+N;b===!0?u.push(F,F+1,k):u.push(F+1,F,k),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cr=class n extends qn{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),a=0,s=i.length,r;t?r=t:r=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);let u=i[a],h=i[a+1]-u,f=(r-u)/h;return(a+f)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),l=t||(r.isVector2?new ge:new D);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,a=[],s=[],r=[],o=new D,l=new mt;for(let f=0;f<=e;f++){let m=f/e;a[f]=this.getTangentAt(m,new D)}s[0]=new D,r[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(a[0].x),d=Math.abs(a[0].y),h=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(a[f-1],a[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ke(a[f-1].dot(a[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}r[f].crossVectors(a[f],s[f])}if(t===!0){let f=Math.acos(Ke(s[0].dot(s[e]),-1,1));f/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(a[m],f*m)),r[m].crossVectors(a[m],s[m])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ps=class extends gn{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let i=t,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends ps{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let n=0,e=0,t=0,i=0;function a(s,r,o,l){n=s,e=o,t=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,d){let h=(r-s)/c-(o-s)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,f*=u,a(r,o,h,f)},calc:function(s){let r=s*s,o=r*s;return n+e*s+t*r+i*o}}}var Md=new D,Sd=new D,cu=new Gu,uu=new Gu,hu=new Gu,Ko=class extends gn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new D){let i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=a[(o-1)%s]:(Sd.subVectors(a[0],a[1]).add(a[0]),c=Sd);let d=a[o%s],h=a[(o+1)%s];if(this.closed||o+2<s?u=a[(o+2)%s]:(Md.subVectors(a[s-1],a[s-2]).add(a[s-1]),u=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),cu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,v,g),uu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,v,g),hu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),uu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),hu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(cu.calc(l),uu.calc(l),hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new D().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Td(n,e,t,i,a){let s=(i-e)*.5,r=(a-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+r)*l+(-3*t+3*i-2*s-r)*o+s*n+t}function Om(n,e){let t=1-n;return t*t*e}function Bm(n,e){return 2*(1-n)*n*e}function zm(n,e){return n*n*e}function js(n,e,t,i){return Om(n,e)+Bm(n,t)+zm(n,i)}function Vm(n,e){let t=1-n;return t*t*t*e}function km(n,e){let t=1-n;return 3*t*t*n*e}function Hm(n,e){return 3*(1-n)*n*n*e}function Gm(n,e){return n*n*n*e}function $s(n,e,t,i,a){return Vm(n,e)+km(n,t)+Hm(n,i)+Gm(n,a)}var ur=class extends gn{constructor(e=new ge,t=new ge,i=new ge,a=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new ge){let i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($s(e,a.x,s.x,r.x,o.x),$s(e,a.y,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends gn{constructor(e=new D,t=new D,i=new D,a=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new D){let i=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set($s(e,a.x,s.x,r.x,o.x),$s(e,a.y,s.y,r.y,o.y),$s(e,a.z,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hr=class extends gn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends gn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends gn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(js(e,a.x,s.x,r.x),js(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends gn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(js(e,a.x,s.x,r.x),js(e,a.y,s.y,r.y),js(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],u=a[r>a.length-2?a.length-1:r+1],d=a[r>a.length-3?a.length-1:r+2];return i.set(Td(o,l.x,c.x,u.x,d.x),Td(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new ge().fromArray(a))}return this}},Ed=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Ko,CubicBezierCurve:ur,CubicBezierCurve3:Qo,EllipseCurve:ps,LineCurve:hr,LineCurve3:el,QuadraticBezierCurve:dr,QuadraticBezierCurve3:tl,SplineCurve:fr}),nl=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ed[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=i){let r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let a=0,s=this.curves;a<s.length;a++){let r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let a=e.curves[t];this.curves.push(new Ed[a.type]().fromJSON(a))}return this}},Aa=class extends nl{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new hr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){let s=new dr(this.currentPoint.clone(),new ge(e,t),new ge(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,r){let o=new ur(this.currentPoint.clone(),new ge(e,t),new ge(i,a),new ge(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,a,s,r),this}absarc(e,t,i,a,s,r){return this.absellipse(e,t,i,i,a,s,r),this}ellipse(e,t,i,a,s,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,s,r,o,l),this}absellipse(e,t,i,a,s,r,o,l){let c=new ps(e,t,i,a,s,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},il=class extends Aa{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let a=e.holes[t];this.holes.push(new Aa().fromJSON(a))}return this}};function Wm(n,e,t=2){let i=e&&e.length,a=i?e[0]*t:n.length,s=Sf(n,0,a,t,!0),r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(i&&(s=Jm(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<a;h+=t){let f=n[h],m=n[h+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return pr(s,r,t,o,l,c,0),r}function Sf(n,e,t,i,a){let s;if(a===o0(n,e,t,i)>0)for(let r=e;r<t;r+=i)s=wd(r/i|0,n[r],n[r+1],s);else for(let r=t-i;r>=e;r-=i)s=wd(r/i|0,n[r],n[r+1],s);return s&&ms(s,s.next)&&(gr(s),s=s.next),s}function Ca(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ms(t,t.next)||Et(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pr(n,e,t,i,a,s,r){if(!n)return;!r&&s&&t0(n,i,a,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?jm(n,i,a,s):Xm(n)){e.push(l.i,n.i,c.i),gr(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=$m(Ca(n),e),pr(n,e,t,i,a,s,2)):r===2&&Ym(n,e,t,i,a,s):pr(Ca(n),e,t,i,a,s,1);break}}}function Xm(n){let e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;let a=e.x,s=t.x,r=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(a,s,r),d=Math.min(o,l,c),h=Math.max(a,s,r),f=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Xs(a,o,s,l,r,c,m.x,m.y)&&Et(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jm(n,e,t,i){let a=n.prev,s=n,r=n.next;if(Et(a,s,r)>=0)return!1;let o=a.x,l=s.x,c=r.x,u=a.y,d=s.y,h=r.y,f=Math.min(o,l,c),m=Math.min(u,d,h),v=Math.max(o,l,c),g=Math.max(u,d,h),p=vu(f,m,e,t,i),w=vu(v,g,e,t,i),C=n.prevZ,b=n.nextZ;for(;C&&C.z>=p&&b&&b.z<=w;){if(C.x>=f&&C.x<=v&&C.y>=m&&C.y<=g&&C!==a&&C!==r&&Xs(o,u,l,d,c,h,C.x,C.y)&&Et(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==a&&b!==r&&Xs(o,u,l,d,c,h,b.x,b.y)&&Et(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=p;){if(C.x>=f&&C.x<=v&&C.y>=m&&C.y<=g&&C!==a&&C!==r&&Xs(o,u,l,d,c,h,C.x,C.y)&&Et(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=w;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==a&&b!==r&&Xs(o,u,l,d,c,h,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $m(n,e){let t=n;do{let i=t.prev,a=t.next.next;!ms(i,a)&&Ef(i,t,t.next,a)&&mr(i,a)&&mr(a,i)&&(e.push(i.i,t.i,a.i),gr(t),gr(t.next),t=n=a),t=t.next}while(t!==n);return Ca(t)}function Ym(n,e,t,i,a,s){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&a0(r,o)){let l=wf(r,o);r=Ca(r,r.next),l=Ca(l,l.next),pr(r,e,t,i,a,s,0),pr(l,e,t,i,a,s,0);return}o=o.next}r=r.next}while(r!==n)}function Jm(n,e,t,i){let a=[];for(let s=0,r=e.length;s<r;s++){let o=e[s]*i,l=s<r-1?e[s+1]*i:n.length,c=Sf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),a.push(i0(c))}a.sort(Zm);for(let s=0;s<a.length;s++)t=Km(a[s],t);return t}function Zm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function Km(n,e){let t=Qm(n,e);if(!t)return e;let i=wf(t,n);return Ca(i,i.next),Ca(t,t.next)}function Qm(n,e){let t=e,i=n.x,a=n.y,s=-1/0,r;if(ms(n,t))return t;do{if(ms(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,r=t.x<t.next.x?t:t.next,d===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Tf(a<c?i:s,a,l,c,a<c?s:i,a,t.x,t.y)){let d=Math.abs(a-t.y)/(i-t.x);mr(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&e0(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function e0(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function t0(n,e,t,i){let a=n;do a.z===0&&(a.z=vu(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,n0(a)}function n0(n){let e,t=1;do{let i=n,a;n=null;let s=null;for(e=0;i;){e++;let r=i,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:n=a,a.prevZ=s,s=a;i=r}s.nextZ=null,t*=2}while(e>1);return n}function vu(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function i0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tf(n,e,t,i,a,s,r,o){return(a-r)*(e-o)>=(n-r)*(s-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(a-r)*(i-o)}function Xs(n,e,t,i,a,s,r,o){return!(n===r&&e===o)&&Tf(n,e,t,i,a,s,r,o)}function a0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!s0(n,e)&&(mr(n,e)&&mr(e,n)&&r0(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||ms(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ms(n,e){return n.x===e.x&&n.y===e.y}function Ef(n,e,t,i){let a=Io(Et(n,e,t)),s=Io(Et(n,e,i)),r=Io(Et(t,i,n)),o=Io(Et(t,i,e));return!!(a!==s&&r!==o||a===0&&Po(n,t,e)||s===0&&Po(n,i,e)||r===0&&Po(t,n,i)||o===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function s0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function mr(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function r0(n,e){let t=n,i=!1,a=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wf(n,e){let t=bu(n.i,n.x,n.y),i=bu(e.i,e.x,e.y),a=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function wd(n,e,t,i){let a=bu(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function o0(n,e,t,i){let a=0;for(let s=e,r=t-i;s<t;s+=i)a+=(n[r]-n[s])*(n[s+1]+n[r+1]),r=s;return a}var yu=class{static triangulate(e,t,i=2){return Wm(e,t,i)}},al=class n{static area(e){let t=e.length,i=0;for(let a=t-1,s=0;s<t;a=s++)i+=e[a].x*e[s].y-e[s].x*e[a].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],a=[],s=[];Ad(e),Cd(i,e);let r=e.length;t.forEach(Ad);for(let l=0;l<t.length;l++)a.push(r),r+=t[l].length,Cd(i,t[l]);let o=yu.triangulate(i,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ad(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Gi=class n extends Dt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let w=p*h-r;for(let C=0;C<c;C++){let b=C*d-s;m.push(b,-w,0),v.push(0,0,1),g.push(C/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let C=w+c*p,b=w+c*(p+1),M=w+1+c*(p+1),E=w+1+c*p;f.push(C,b,E),f.push(b,M,E)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var gs=class n extends Dt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],d=new D,h=new D,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){let w=[],C=p/i,b=r+C*o,M=e*Math.cos(b),E=Math.sqrt(e*e-M*M),S=0;p===0&&r===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=a+T*s;d.x=-E*Math.cos(R),d.y=M,d.z=E*Math.sin(R),m.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(T+S,1-C),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let C=u[p][w+1],b=u[p][w],M=u[p+1][w],E=u[p+1][w+1];(p!==0||r>0)&&f.push(C,b,E),(p!==i-1||l<Math.PI)&&f.push(b,M,E)}this.setIndex(f),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wi=class n extends Dt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=new D,f=new D,m=new D;for(let v=0;v<=i;v++){let g=r+v/i*o;for(let p=0;p<=a;p++){let w=p/a*s;f.x=(e+t*Math.cos(g))*Math.cos(w),f.y=(e+t*Math.cos(g))*Math.sin(w),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/a),d.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=a;g++){let p=(a+1)*v+g-1,w=(a+1)*(v-1)+g-1,C=(a+1)*(v-1)+g,b=(a+1)*v+g;l.push(p,w,b),l.push(w,C,b)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Da(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let a=n[t][i];if(Rd(a))a.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Rd(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][i]=s}else e[t][i]=a.slice();else e[t][i]=a}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Da(n[t]);for(let a in i)e[a]=i[a]}return e}function Rd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function l0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Vn={clone:Da,merge:an},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(a.value);break;case"v2":this.uniforms[i].value=new ge().fromArray(a.value);break;case"v3":this.uniforms[i].value=new D().fromArray(a.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(a.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xs=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fn=class extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sl=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function du(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],s=t[i-1];n:{e:{let r;t:{i:if(!(e<a)){for(let o=i+2;;){if(a===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=t[++i],e<a)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=t[--i-1],e>=s)break e}r=i,i=0;break t}break n}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(a=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=e*a;for(let r=0;r!==a;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends Xi{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,i){let a=this.parameterPositions,s=e-2,r=e+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case gu:s=e,o=2*t-i;break;case xu:s=a.length-2,o=t+a[s]-a[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:r=e,l=2*i-t;break;case xu:r=1,l=i+a[1]-a[0];break;default:r=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(i-t)/(a-t),v=m*m,g=v*m,p=-h*g+2*h*v-h*m,w=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,C=(-1-f)*g+(1.5+f)*v+.5*m,b=f*g-f*v;for(let M=0;M!==o;++M)s[M]=p*r[u+M]+w*r[c+M]+C*r[l+M]+b*r[d+M];return s}},ll=class extends Xi{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(a-t),d=1-u;for(let h=0;h!==o;++h)s[h]=r[c+h]*d+r[l+h]*u;return s}},cl=class extends Xi{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends Xi{interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(i-t)/(a-t),v=1-m;for(let g=0;g!==o;++g)s[g]=r[c+g]*v+r[l+g]*m;return s}let h=o*2,f=e-1;for(let m=0;m!==o;++m){let v=r[c+m],g=r[l+m],p=f*h+m*2,w=d[p],C=d[p+1],b=e*h+m*2,M=u[b],E=u[b+1],S=d0(i,t,w,M,a);s[m]=Af(S,v,C,E,g)}return s}};function Af(n,e,t,i,a){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*a}function h0(n,e,t,i,a){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(a-i)}function d0(n,e,t,i,a){let s=(n-e)/(a-e);for(let r=0;r<8;r++){let o=Af(s,e,t,i,a)-n;if(Math.abs(o)<1e-10)break;let l=h0(s,e,t,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var xn=class{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a),du(e.settings)&&(i.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e;du(this.settings)&&(Pd(this.settings.inTangents,e),Pd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(a!==void 0&&_m(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Do,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(a)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let m=0;m!==i;++m){let v=t[d+m];if(v!==t[h+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*i,h=r*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,du(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function Pd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Go;var ji=class extends xn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ys;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends xn{constructor(e,t,i,a){super(e,t,i,a)}};hl.prototype.ValueTypeName="color";var dl=class extends xn{constructor(e,t,i,a){super(e,t,i,a)}};dl.prototype.ValueTypeName="number";var fl=class extends Xi{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(a-t),c=e*o;for(let u=c+o;c!==u;c+=4)ni.slerpFlat(s,0,r,c-o,r,c,l);return s}},xr=class extends xn{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends xn{constructor(e,t,i){super(e,t,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ys;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends xn{constructor(e,t,i,a){super(e,t,i,a)}};pl.prototype.ValueTypeName="vector";var Mu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Id(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Id(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Id(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ml=class{constructor(e,t,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cf=new ml,Ra=class{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},Su=class extends Error{constructor(e,t){super(e),this.response=t}},_r=class extends Ra{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Mu.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:i,onError:a});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:i,onError:a});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=gi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0,v=0,g=new ReadableStream({start(p){w();function w(){d.read().then(({done:C,value:b})=>{if(C)p.close();else{v+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,S=u.length;E<S;E++){let _=u[E];_.onProgress&&_.onProgress(M)}p.enqueue(b),w()}},C=>{p.error(C)})}}});return new Response(g)}else throw new Su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Mu.add(`file:${e}`,c);let u=gi[e];delete gi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vr=class extends _s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fu=new mt,Ld=new D,Nd=new D,br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new D,No=new ni,Kn=new D,yr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,No,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lo,No,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new D,Dd=new ge,Ud=new ge,jt=class extends yr{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ud),t.subVectors(Ud,Dd)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tu=class extends br{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Pa=class extends _s{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yi=class extends yr{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eu=class extends br{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=-90,ss=1,gl=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new jt(as,ss,e,t);a.layers=this.layers,this.add(a);let s=new jt(as,ss,e,t);s.layers=this.layers,this.add(s);let r=new jt(as,ss,e,t);r.layers=this.layers,this.add(r);let o=new jt(as,ss,e,t);o.layers=this.layers,this.add(o);let l=new jt(as,ss,e,t);l.layers=this.layers,this.add(l);let c=new jt(as,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},xl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=f0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function f0(){this._document.hidden===!1&&this.reset()}var Xu="\\[\\]\\.:\\/",p0=new RegExp("["+Xu+"]","g"),ju="[^"+Xu+"]",m0="[^"+Xu.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",ju),x0=/(WCOD+)?/.source.replace("WCOD",m0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),b0=new RegExp("^"+g0+x0+_0+v0+"$"),y0=["material","materials","bones","map"],wu=class{constructor(e,t,i){let a=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(e){let t=b0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);y0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[a];if(r===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=wu;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var Tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Au=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=a,this}},qd=new ge,_l=class{constructor(e=new ge(1/0,1/0),t=new ge(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Er=class{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Aa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,a){return this.currentPath.quadraticCurveTo(e,t,i,a),this}bezierCurveTo(e,t,i,a,s,r){return this.currentPath.bezierCurveTo(e,t,i,a,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let m=c[h],v=c[f];m.y>l.y!=v.y>l.y&&l.x<(v.x-m.x)*(l.y-m.y)/(v.y-m.y)+m.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new ge);if(e(u,l))return u;let d=u.y,h=[],f=l.length;for(let m=0;m<f;m++){let v=l[m],g=l[(m+1)%f];if(v.y>d!=g.y>d){let p=v.x+(d-v.y)*(g.x-v.x)/(g.y-v.y);h.push(p)}}return h.length>1&&(h.sort((m,v)=>m-v),u.x=(h[0]+h[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(Ue('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let a=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=al.area(c);if(u===0)continue;let d=new _l;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let d=l-1;d>=0;d--){let h=s[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}a(c.winding)===a(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],o=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new il;c.curves=l.subPath.curves,r.push(c),o.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new Aa;u.curves=l.subPath.curves,c.holes.push(u)}return r}};function $u(n,e,t,i){let a=M0(i);switch(t){case Bu:return n*e;case Vu:return n*e/a.components*a.byteLength;case El:return n*e/a.components*a.byteLength;case ea:return n*e*2/a.components*a.byteLength;case wl:return n*e*2/a.components*a.byteLength;case zu:return n*e*3/a.components*a.byteLength;case wn:return n*e*4/a.components*a.byteLength;case Al:return n*e*4/a.components*a.byteLength;case Ur:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Ll:case Nl:case Ul:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Br:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Ql:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zr:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(n){switch(n){case dn:case Uu:return{byteLength:1,components:1};case ys:case qu:case qt:return{byteLength:2,components:1};case Sl:case Tl:return{byteLength:2,components:4};case Bn:case Ml:case zn:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jf(){let n=null,e=!1,t=null,i=null;function a(s,r){i=n.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function T0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Sg=`uniform sampler2D dfgLUT;
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
	vec3 f0 = material.specularColorBlended;
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Tg=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,D1=`#define DISTANCE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
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
}`,O1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,H1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,W1=`#define NORMAL
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
}`,X1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,$1=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Y1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,K1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:E0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:N0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:q0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:j0,common:$0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:J0,displacementmap_pars_vertex:Z0,displacementmap_vertex:K0,emissivemap_fragment:Q0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:ag,envmap_pars_fragment:sg,envmap_pars_vertex:rg,envmap_physical_pars_fragment:xg,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:ug,fog_pars_fragment:hg,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:vg,lights_phong_fragment:bg,lights_phong_pars_fragment:yg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:wg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:Lg,map_pars_fragment:Ng,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:Vg,morphtarget_vertex:kg,normal_fragment_begin:Hg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:jg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Kg,opaque_fragment:Qg,packing:e1,premultiplied_alpha_fragment:t1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:a1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:l1,shadowmap_vertex:c1,shadowmask_pars_fragment:u1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:f1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:x1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:b1,uv_pars_fragment:y1,uv_pars_vertex:M1,uv_vertex:S1,worldpos_vertex:T1,background_vert:E1,background_frag:w1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:R1,cube_frag:P1,depth_vert:I1,depth_frag:L1,distance_vert:N1,distance_frag:D1,equirect_vert:U1,equirect_frag:q1,linedashed_vert:F1,linedashed_frag:O1,meshbasic_vert:B1,meshbasic_frag:z1,meshlambert_vert:V1,meshlambert_frag:k1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:X1,meshphong_vert:j1,meshphong_frag:$1,meshphysical_vert:Y1,meshphysical_frag:J1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:Q1,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:ax},_e={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ai={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ai.physical={uniforms:an([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var oc={r:0,b:0,g:0},sx=new mt,Zf=new Ve;Zf.set(-1,0,0,0,1,0,0,0,1);function rx(n,e,t,i,a,s){let r=new Ne(0),o=a===!0?0:1,l,c,u=null,d=0,h=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let b=w.backgroundBlurriness>0;C=e.get(C,b)}return C}function m(w){let C=!1,b=f(w);b===null?g(r,o):b&&b.isColor&&(g(b,1),C=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(w,C){let b=f(C);b&&(b.isCubeTexture||b.mapping===Nr)?(c===void 0&&(c=new De(new Pt(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Da(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zf),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new De(new Gi(2,2),new wt({name:"BackgroundMaterial",uniforms:Da(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,C){w.getRGB(oc,Wu(n)),t.buffers.color.setClear(oc.r,oc.g,oc.b,C,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,C=1){r.set(w),o=C,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(r,o)},render:m,addToRenderList:v,dispose:p}}function ox(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null),s=a,r=!1;function o(U,N,k,F,X){let Z=!1,$=d(U,F,k,N);s!==$&&(s=$,c(s.object)),Z=f(U,F,k,X),Z&&m(U,F,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,b(U,N,k,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,N,k,F){let X=F.wireframe===!0,Z=i[N.id];Z===void 0&&(Z={},i[N.id]=Z);let $=U.isInstancedMesh===!0?U.id:0,oe=Z[$];oe===void 0&&(oe={},Z[$]=oe);let ee=oe[k.id];ee===void 0&&(ee={},oe[k.id]=ee);let ae=ee[X];return ae===void 0&&(ae=h(l()),ee[X]=ae),ae}function h(U){let N=[],k=[],F=[];for(let X=0;X<t;X++)N[X]=0,k[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:F,object:U,attributes:{},index:null}}function f(U,N,k,F){let X=s.attributes,Z=N.attributes,$=0,oe=k.getAttributes();for(let ee in oe)if(oe[ee].location>=0){let re=X[ee],Le=Z[ee];if(Le===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;$++}return s.attributesNum!==$||s.index!==F}function m(U,N,k,F){let X={},Z=N.attributes,$=0,oe=k.getAttributes();for(let ee in oe)if(oe[ee].location>=0){let re=Z[ee];re===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),X[ee]=Le,$++}s.attributes=X,s.attributesNum=$,s.index=F}function v(){let U=s.newAttributes;for(let N=0,k=U.length;N<k;N++)U[N]=0}function g(U){p(U,0)}function p(U,N){let k=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;k[U]=1,F[U]===0&&(n.enableVertexAttribArray(U),F[U]=1),X[U]!==N&&(n.vertexAttribDivisor(U,N),X[U]=N)}function w(){let U=s.newAttributes,N=s.enabledAttributes;for(let k=0,F=N.length;k<F;k++)N[k]!==U[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function C(U,N,k,F,X,Z,$){$===!0?n.vertexAttribIPointer(U,N,k,X,Z):n.vertexAttribPointer(U,N,k,F,X,Z)}function b(U,N,k,F){v();let X=F.attributes,Z=k.getAttributes(),$=N.defaultAttributeValues;for(let oe in Z){let ee=Z[oe];if(ee.location>=0){let ae=X[oe];if(ae===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let re=ae.normalized,Le=ae.itemSize,Pe=e.get(ae);if(Pe===void 0)continue;let ft=Pe.buffer,Ye=Pe.type,it=Pe.bytesPerElement,J=Ye===n.INT||Ye===n.UNSIGNED_INT||ae.gpuType===Ml;if(ae.isInterleavedBufferAttribute){let ie=ae.data,Se=ie.stride,Oe=ae.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<ee.locationSize;Me++)p(ee.location+Me,ie.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<ee.locationSize;Me++)g(ee.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Me=0;Me<ee.locationSize;Me++)C(ee.location+Me,Le/ee.locationSize,Ye,re,Se*it,(Oe+Le/ee.locationSize*Me)*it,J)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)p(ee.location+ie,ae.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<ee.locationSize;ie++)g(ee.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let ie=0;ie<ee.locationSize;ie++)C(ee.location+ie,Le/ee.locationSize,Ye,re,Le*it,Le/ee.locationSize*ie*it,J)}}else if($!==void 0){let re=$[oe];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(ee.location,re);break;case 3:n.vertexAttrib3fv(ee.location,re);break;case 4:n.vertexAttrib4fv(ee.location,re);break;default:n.vertexAttrib1fv(ee.location,re)}}}}w()}function M(){T();for(let U in i){let N=i[U];for(let k in N){let F=N[k];for(let X in F){let Z=F[X];for(let $ in Z)u(Z[$].object),delete Z[$];delete F[X]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let N=i[U.id];for(let k in N){let F=N[k];for(let X in F){let Z=F[X];for(let $ in Z)u(Z[$].object),delete Z[$];delete F[X]}}delete i[U.id]}function S(U){for(let N in i){let k=i[N];for(let F in k){let X=k[F];if(X[U.id]===void 0)continue;let Z=X[U.id];for(let $ in Z)u(Z[$].object),delete Z[$];delete X[U.id]}}}function _(U){for(let N in i){let k=i[N],F=U.isInstancedMesh===!0?U.id:0,X=k[F];if(X!==void 0){for(let Z in X){let $=X[Z];for(let oe in $)u($[oe].object),delete $[oe];delete X[Z]}delete k[F],Object.keys(k).length===0&&delete i[N]}}}function T(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function lx(n,e,t){let i;function a(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function cx(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(S){return!(S!==wn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let _=S===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==dn&&S!==zn&&!_&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:b,maxSamples:M,samples:E}}function ux(n){let e=this,t=null,i=0,a=!1,s=!1,r=new mn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||a;return a=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!a||m===null||m.length===0||s&&!g)s?u(null):c();else{let w=s?0:i,C=w*4,b=p.clippingState||null;l.value=b,b=u(m,h,C,f);for(let M=0;M!==C;++M)b[M]=t[M];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,b=f;C!==v;++C,b+=4)r.copy(d[C]).applyMatrix4(w,o),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Es=4,hx=6,dx=20,fx=256,Vr=new Yi,Rf=new Ne,Yu=null,Ju=0,Zu=0,Ku=!1,px=new D,Ua=new D,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,s={}){let{size:r=256,position:o=px}=s;Yu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Ju,Zu),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:qt,format:wn,colorSpace:Js,depthBuffer:!1},a=Pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(s)),this._blurMaterial=xx(s,e,t),this._ggxMaterial=gx(s,e,t)}return a}_compileMaterial(e){let t=new De(new Dt,e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,i,a,s){let l=new jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Rf),d.toneMapping=On,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new Pt,new nn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,p=!0):(g.color.copy(Rf),p=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[C],s.y,s.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[C]));let M=this._cubeSize;Ts(a,b*M,C>2?M:0,M,M),d.setRenderTarget(a),p&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,a=e.mapping===Zi||e.mapping===Na;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Vr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Es?i-m+Es:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ts(s,g,p,3*v,2*v),a.setRenderTarget(s),a.render(o,Vr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ts(e,g,p,3*v,2*v),a.setRenderTarget(e),a.render(o,Vr)}_blur(e,t,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,r),this._blurPass(s,e,i,i,r)}_blurPass(e,t,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[a],d=3*u*(a>this._lodMax-Es?a-this._lodMax+Es:0),h=4*(this._cubeSize-u);Ts(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(l,Vr)}};function mx(n){let e=[],t=[],i=n,a=n-Es+1+hx;for(let s=0;s<a;s++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,C=p>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];m.set(b,f*h*p);for(let M=0;M<h;M++){let E=u[M*2]*2-1,S=u[M*2+1]*2-1;p===0?Ua.set(1,S,E):p===1?Ua.set(-E,1,-S):p===2?Ua.set(-E,S,1):p===3?Ua.set(-1,S,-E):p===4?Ua.set(-E,-1,S):Ua.set(E,S,-1),Ua.toArray(v,(p*h+M)*f)}}let g=new Dt;g.setAttribute("position",new ln(m,f)),g.setAttribute("outputDirection",new ln(v,f)),t.push(new De(g,null)),i>Es&&i--}return{lodMeshes:t,sizeLods:e}}function Pf(n,e,t){let i=new At(n,e,t);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function gx(n,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function xx(n,e,t){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function If(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Lf(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new or(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Pt(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:Da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:En});s.uniforms.tEquirect.value=t;let r=new De(a,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=$t),new gl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}};function _x(n){let e=new WeakMap,t=new WeakMap,i=null;function a(h,f=!1){return h==null?null:f?r(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===vl||f===bl)if(e.has(h)){let m=e.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let v=new uc(m.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,m=f===vl||f===bl,v=f===Zi||f===Na;if(m||v){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new cc(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return m&&w&&w.height>0||v&&w&&l(w)?(i===null&&(i=new cc(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===vl?h.mapping=Zi:f===bl&&(h.mapping=Na),h}function l(h){let f=0,m=6;for(let v=0;v<m;v++)h[v]!==void 0&&f++;return f===m}function c(h){let f=h.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function vx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let a=t(i);return a===null&&Ma("WebGLRenderer: "+i+" extension not supported."),a}}}function bx(n,e,t,i){let a={},s=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",r),delete a[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let w=f.array;v=f.version;for(let C=0,b=w.length;C<b;C+=3){let M=w[C+0],E=w[C+1],S=w[C+2];h.push(M,E,E,S,S,M)}}else{let w=m.array;v=m.version;for(let C=0,b=w.length/3-1;C<b;C+=3){let M=C+0,E=C+1,S=C+2;h.push(M,E,E,S,S,M)}}let g=new(m.count>=65535?ar:ir)(h,1);g.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function yx(n,e,t){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*r),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,s,d*r,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Mx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Fe("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Sx(n,e,t){let i=new WeakMap,a=new xt;function s(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let T=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;f===!0&&(C=1),m===!0&&(C=2),v===!0&&(C=3);let b=o.attributes.position.count*C,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*M*4*d),S=new Qs(E,b,M,d);S.type=zn,S.needsUpdate=!0;let _=C*4;for(let R=0;R<d;R++){let U=g[R],N=p[R],k=w[R],F=b*M*4*R;for(let X=0;X<U.count;X++){let Z=X*_;f===!0&&(a.fromBufferAttribute(U,X),E[F+Z+0]=a.x,E[F+Z+1]=a.y,E[F+Z+2]=a.z,E[F+Z+3]=0),m===!0&&(a.fromBufferAttribute(N,X),E[F+Z+4]=a.x,E[F+Z+5]=a.y,E[F+Z+6]=a.z,E[F+Z+7]=0),v===!0&&(a.fromBufferAttribute(k,X),E[F+Z+8]=a.x,E[F+Z+9]=a.y,E[F+Z+10]=a.z,E[F+Z+11]=k.itemSize===4?a.w:1)}}h={count:d,texture:S,size:new ge(b,M)},i.set(o,h),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Tx(n,e,t,i,a){let s=new WeakMap;function r(c){let u=a.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var Ex={[Ar]:"LINEAR_TONE_MAPPING",[Cr]:"REINHARD_TONE_MAPPING",[Rr]:"CINEON_TONE_MAPPING",[La]:"ACES_FILMIC_TONE_MAPPING",[Ir]:"AGX_TONE_MAPPING",[Lr]:"NEUTRAL_TONE_MAPPING",[Pr]:"CUSTOM_TONE_MAPPING"};function wx(n,e,t,i,a,s){let r=new At(e,t,{type:n,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Dt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new De(c,u),h=new Yi(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,w=[],C=!1;this.setSize=function(b,M){r.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let E=0;E<w.length;E++){let S=w[E];S.setSize&&S.setSize(b,M)}},this.setEffects=function(b){w=b,C=w.length>0&&w[0].isRenderPass===!0;let M=r.width,E=r.height;w.length>0&&o===null&&(o=new At(M,E,{type:qt,depthBuffer:!1,stencilBuffer:!1}),l=new At(M,E,{type:qt,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<w.length;S++){let _=w[S];_.setSize&&_.setSize(M,E)}},this.begin=function(b,M){if(v||b.toneMapping===On&&w.length===0)return!1;if(p=M,M!==null){let E=M.width,S=M.height;(r.width!==E||r.height!==S)&&this.setSize(E,S)}return C===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=On,!0},this.hasRenderPass=function(){return C},this.end=function(b,M){b.toneMapping=g,v=!0;let E=r,S=o;for(let _=0;_<w.length;_++){let T=w[_];T.enabled!==!1&&(T.render(b,S,E,M),T.needsSwap!==!1&&(E=S,S=S===o?l:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,u.defines={},Je.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER="");let _=Ex[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(p),b.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Kf=new cn,th=new Hi(1,1),Qf=new Qs,ep=new $o,tp=new or,Nf=[],Df=[],Uf=new Float32Array(16),qf=new Float32Array(9),Ff=new Float32Array(4);function As(n,e,t){let i=n[0];if(i<=0||i>0)return n;let a=e*t,s=Nf[a];if(s===void 0&&(s=new Float32Array(a),Nf[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fc(n,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Ix(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Ot(t,i)}}function Lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;qf.set(i),n.uniformMatrix3fv(this.addr,!1,qf),Ot(t,i)}}function Nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),Ot(t,i)}}function Dx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Ox(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function kx(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?rc:sc,s=th):s=Kf,t.setTexture2D(e||s,a)}function Hx(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||ep,a)}function Gx(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||tp,a)}function Wx(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Qf,a)}function Xx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Rx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Nx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return qx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return zx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Wx}}function jx(n,e){n.uniform1fv(this.addr,e)}function $x(n,e){let t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function Yx(n,e){let t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function Jx(n,e){let t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){let t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kx(n,e){let t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){let t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function a_(n,e){n.uniform1uiv(this.addr,e)}function s_(n,e){n.uniform2uiv(this.addr,e)}function r_(n,e){n.uniform3uiv(this.addr,e)}function o_(n,e){n.uniform4uiv(this.addr,e)}function l_(n,e,t){let i=this.cache,a=e.length,s=fc(t,a);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));let r;this.type===n.SAMPLER_2D_SHADOW?r=th:r=Kf;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function c_(n,e,t){let i=this.cache,a=e.length,s=fc(t,a);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||ep,s[r])}function u_(n,e,t){let i=this.cache,a=e.length,s=fc(t,a);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||tp,s[r])}function h_(n,e,t){let i=this.cache,a=e.length,s=fc(t,a);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Qf,s[r])}function d_(n){switch(n){case 5126:return jx;case 35664:return $x;case 35665:return Yx;case 35666:return Jx;case 35674:return Zx;case 35675:return Kx;case 35676:return Qx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return a_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}var nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}},ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(e,t[o.id],i)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function Of(n,e){n.seq.push(e),n.map[e.id]=e}function f_(n,e,t){let i=n.name,a=i.length;for(Qu.lastIndex=0;;){let s=Qu.exec(i),r=Qu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Of(t,c===void 0?new nh(o,n,e):new ih(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ah(o),Of(t,d)),t=d}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);f_(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,i,a){let s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,s=e.length;a!==s;++a){let r=e[a];r.id in t&&i.push(r)}return i}};function Bf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,e){let t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var zf=new Ve;function x_(n){Je._getMatrix(zf,Je.workingColorSpace,n);let e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+g_(n.getShaderSource(e),o)}else return s}function __(n,e){let t=x_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var v_={[Ar]:"Linear",[Cr]:"Reinhard",[Rr]:"Cineon",[La]:"ACESFilmic",[Ir]:"AgX",[Lr]:"Neutral",[Pr]:"Custom"};function b_(n,e){let t=v_[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new D;function y_(){Je.getLuminanceCoefficients(lc);let n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function S_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=n.getActiveAttrib(e,a),r=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function Hr(n){return n!==""}function kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(E_,A_)}var w_=new Map;function A_(n,e){let t=je[e];if(t===void 0){let i=w_.get(e);if(i!==void 0)t=je[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sh(t)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(n){return n.replace(C_,R_)}function R_(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Wf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var P_={[wr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function I_(n){return P_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L_={[Zi]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function N_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":L_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var D_={[Na]:"ENVMAP_MODE_REFRACTION"};function U_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q_={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[sf]:"ENVMAP_BLENDING_MIX",[rf]:"ENVMAP_BLENDING_ADD"};function F_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":q_[n.combine]||"ENVMAP_BLENDING_NONE"}function O_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function B_(n,e,t,i){let a=n.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,l=I_(t),c=N_(t),u=U_(t),d=F_(t),h=O_(t),f=M_(t),m=S_(s),v=a.createProgram(),g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?je.tonemapping_pars_fragment:"",t.toneMapping!==On?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),r=sh(r),r=kf(r,t),r=Hf(r,t),o=sh(o),o=kf(o,t),o=Hf(o,t),r=Gf(r),o=Gf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=w+g+r,b=w+p+o,M=Bf(a,a.VERTEX_SHADER,C),E=Bf(a,a.FRAGMENT_SHADER,b);a.attachShader(v,M),a.attachShader(v,E),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function S(U){if(n.debug.checkShaderErrors){let N=a.getProgramInfoLog(v)||"",k=a.getShaderInfoLog(M)||"",F=a.getShaderInfoLog(E)||"",X=N.trim(),Z=k.trim(),$=F.trim(),oe=!0,ee=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,M,E);else{let ae=Vf(a,M,"vertex"),re=Vf(a,E,"fragment");Fe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+ae+`
`+re)}else X!==""?Ue("WebGLProgram: Program Info Log:",X):(Z===""||$==="")&&(ee=!1);ee&&(U.diagnostics={runnable:oe,programLog:X,vertexShader:{log:Z,prefix:g},fragmentShader:{log:$,prefix:p}})}a.deleteShader(M),a.deleteShader(E),_=new ws(a,v),T=T_(a,v)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(v,p_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}var z_=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new oh(e),t.set(e,i)),i}},oh=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function V_(n){return n===ea||n===Br||n===zr}function k_(n,e,t,i,a,s){let r=new er,o=new rh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,U,N,k){let F=U.fog,X=N.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=e.get(_.envMap||Z,$),ee=oe&&oe.mapping===Nr?oe.image.height:null,ae=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Le=re!==void 0?re.length:0,Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let ft,Ye,it,J;if(ae){let st=ai[ae];ft=st.vertexShader,Ye=st.fragmentShader}else{ft=_.vertexShader,Ye=_.fragmentShader;let st=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,st,rt),it=st.id,J=rt.id}let ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Ge=!!_.map,St=!!_.matcap,We=!!oe,et=!!_.aoMap,ut=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,Ut=!!_.displacementMap,Wt=!!_.emissiveMap,_t=!!_.metalnessMap,Tt=!!_.roughnessMap,B=_.anisotropy>0,Ct=_.clearcoat>0,at=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,z=_.sheen>0,H=_.transmission>0,K=B&&!!_.anisotropyMap,de=Ct&&!!_.clearcoatMap,fe=Ct&&!!_.clearcoatNormalMap,Q=Ct&&!!_.clearcoatRoughnessMap,te=x&&!!_.iridescenceMap,I=x&&!!_.iridescenceThicknessMap,P=z&&!!_.sheenColorMap,q=z&&!!_.sheenRoughnessMap,V=!!_.specularMap,ne=!!_.specularColorMap,le=!!_.specularIntensityMap,pe=H&&!!_.transmissionMap,L=H&&!!_.thicknessMap,ue=!!_.gradientMap,Y=!!_.alphaMap,he=_.alphaTest>0,me=!!_.alphaHash,se=!!_.extensions,Ae=On;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ae=n.toneMapping);let Ee={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:ft,fragmentShader:Ye,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:St,envMap:We,envMapMode:We&&oe.mapping,envMapCubeUVHeight:ee,aoMap:et,lightMap:ut,bumpMap:He,normalMap:tt,displacementMap:Ut,emissiveMap:Wt,normalMapObjectSpace:tt&&_.normalMapType===cf,normalMapTangentSpace:tt&&_.normalMapType===ac,packedNormalMap:tt&&_.normalMapType===ac&&V_(_.normalMap.format),metalnessMap:_t,roughnessMap:Tt,anisotropy:B,anisotropyMap:K,clearcoat:Ct,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:Q,dispersion:at,retroreflection:A,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:I,sheen:z,sheenColorMap:P,sheenRoughnessMap:q,specularMap:V,specularColorMap:ne,specularIntensityMap:le,transmission:H,transmissionMap:pe,thicknessMap:L,gradientMap:ue,opaque:_.transparent===!1&&_.blending===bs&&_.alphaToCoverage===!1,alphaMap:Y,alphaTest:he,alphaHash:me,combine:_.combine,mapUv:Ge&&m(_.map.channel),aoMapUv:et&&m(_.aoMap.channel),lightMapUv:ut&&m(_.lightMap.channel),bumpMapUv:He&&m(_.bumpMap.channel),normalMapUv:tt&&m(_.normalMap.channel),displacementMapUv:Ut&&m(_.displacementMap.channel),emissiveMapUv:Wt&&m(_.emissiveMap.channel),metalnessMapUv:_t&&m(_.metalnessMap.channel),roughnessMapUv:Tt&&m(_.roughnessMap.channel),anisotropyMapUv:K&&m(_.anisotropyMap.channel),clearcoatMapUv:de&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:I&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:P&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&m(_.sheenRoughnessMap.channel),specularMapUv:V&&m(_.specularMap.channel),specularColorMapUv:ne&&m(_.specularColorMap.channel),specularIntensityMapUv:le&&m(_.specularIntensityMap.channel),transmissionMapUv:pe&&m(_.transmissionMap.channel),thicknessMapUv:L&&m(_.thicknessMap.channel),alphaMapUv:Y&&m(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(tt||B),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Ge||Y),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),w(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function C(_){let T=f[_.type],R;if(T){let U=ai[T];R=Vn.clone(U.uniforms)}else R=_.uniforms;return R}function b(_,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new B_(n,T,_,a),c.push(R),u.set(T,R)),R}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function S(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:C,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:S}}function H_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,l){n.get(r)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function G_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jf(){let n=[],e=0,t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,v,g,p){let w=n[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:m,materialVariant:r(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},n[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=m,w.materialVariant=r(h),w.groupOrder=v,w.renderOrder=h.renderOrder,w.z=g,w.group=p),e++,w}function l(h,f,m,v,g,p,w){w.reversedDepth===!0&&(g=-g);let C=o(h,f,m,v,g,p);m.transmission>0?i.push(C):m.transparent===!0?a.push(C):t.push(C)}function c(h,f,m,v,g,p){let w=o(h,f,m,v,g,p);m.transmission>0?i.unshift(w):m.transparent===!0?a.unshift(w):t.unshift(w)}function u(h,f){t.length>1&&t.sort(h||G_),i.length>1&&i.sort(f||Xf),a.length>1&&a.sort(f||Xf)}function d(){for(let h=e,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:u}}function W_(){let n=new WeakMap;function e(i,a){let s=n.get(i),r;return s===void 0?(r=new jf,n.set(i,[r])):a>=s.length?(r=new jf,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function X_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function j_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var $_=0;function Y_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J_(n){let e=new X_,t=j_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let a=new D,s=new mt,r=new mt;function o(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,C=0,b=0,M=0,E=0,S=0,_=0,T=0,R=0;c.sort(Y_);for(let N=0,k=c.length;N<k;N++){let F=c[N],X=F.color,Z=F.intensity,$=F.distance,oe=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ea?oe=F.shadow.map.texture:oe=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=X.r*Z,d+=X.g*Z,h+=X.b*Z;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],Z);R++}else if(F.isSunLight){let ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ae=F.shadow,re=t.get(F);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[m]=re,i.sunShadowMap[m]=oe;let Le=ae.getViewportCount();for(let Pe=0;Pe<Le;Pe++)i.sunShadowMatrix[v+Pe]=ae.getMatrix(Pe),i.sunShadowCascade[v+Pe]=ae._cascadeData[Pe];v+=Le,m++}i.sun[f]=ee,f++}else if(F.isDirectionalLight){let ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ae=F.shadow,re=t.get(F);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,i.directionalShadow[g]=re,i.directionalShadowMap[g]=oe,i.directionalShadowMatrix[g]=F.shadow.matrix,M++}i.directional[g]=ee,g++}else if(F.isSpotLight){let ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(X).multiplyScalar(Z),ee.distance=$,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[w]=ee;let ae=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,ae.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[w]=ae.matrix,F.castShadow){let re=t.get(F);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,i.spotShadow[w]=re,i.spotShadowMap[w]=oe,S++}w++}else if(F.isRectAreaLight){let ee=e.get(F);ee.color.copy(X).multiplyScalar(Z),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[C]=ee,C++}else if(F.isPointLight){let ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){let ae=F.shadow,re=t.get(F);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,re.shadowCameraNear=ae.camera.near,re.shadowCameraFar=ae.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=oe,i.pointShadowMatrix[p]=F.shadow.matrix,E++}i.point[p]=ee,p++}else if(F.isHemisphereLight){let ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(Z),ee.groundColor.copy(F.groundColor).multiplyScalar(Z),i.hemi[b]=ee,b++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==w||U.rectAreaLength!==C||U.hemiLength!==b||U.numSunShadows!==m||U.numDirectionalShadows!==M||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==_||U.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=w,i.rectArea.length=C,i.point.length=p,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.spotLightMatrix.length=S+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=w,U.rectAreaLength=C,U.hemiLength=b,U.numSunShadows=m,U.numDirectionalShadows=M,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=_,U.numLightProbes=R,i.version=$_++)}function l(c,u){let d=0,h=0,f=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let b=c[w];if(b.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),h++}else if(b.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),r.identity(),s.copy(b.matrixWorld),s.premultiply(p),r.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(b.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function $f(n){let e=new J_(n),t=[],i=[],a=[];function s(h){d.camera=h,t.length=0,i.length=0,a.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function l(h){a.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Z_(n){let e=new WeakMap;function t(a,s=0){let r=e.get(a),o;return r===void 0?(o=new $f(n),e.set(a,[o])):s>=r.length?(o=new $f(n),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
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
}`,e2=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],t2=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Yf=new mt,kr=new D,eh=new D;function n2(n,e,t){let i=new ds,a=new ge,s=new ge,r=new xt,o=new sl,l=new rl,c={},u=t.maxTextureSize,d={[Ji]:Ht,[Ht]:Ji,[Tn]:Tn},h=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:K_,fragmentShader:Q_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Dt;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let p=this.type;this.render=function(E,S,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Bd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),N=n.state;N.setBlending(En),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=p!==this.type;k&&S.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=E.length;F<X;F++){let Z=E[F],$=Z.shadow;if($===void 0){Ue("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);let oe=$.getFrameExtents();a.multiply(oe),s.copy($.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/oe.x),a.x=s.x*oe.x,$.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/oe.y),a.y=s.y*oe.y,$.mapSize.y=s.y));let ee=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=ee,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===vs){if(Z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new At(a.x,a.y,{format:ea,type:qt,minFilter:$t,magFilter:$t,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Hi(a.x,a.y,zn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=ei,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt}else Z.isPointLight?($.map=new uc(a.x),$.map.depthTexture=new Jo(a.x,Bn)):($.map=new At(a.x,a.y),$.map.depthTexture=new Hi(a.x,a.y,Bn)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=ei,this.type===wr?($.map.depthTexture.compareFunction=ee?rc:sc,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==a.x||$.map.height!==a.y)&&$.map.setSize(a.x,a.y);let ae=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,_);for(let re=0;re<ae;re++){let Le=$.getCamera(re);if(Z.isPointLight){let Pe=$.camera,ft=$.matrix,Ye=Z.distance||Pe.far;Ye!==Pe.far&&(Pe.far=Ye,Pe.updateProjectionMatrix()),kr.setFromMatrixPosition(Z.matrixWorld),Pe.position.copy(kr),eh.copy(Pe.position),eh.add(e2[re]),Pe.up.copy(t2[re]),Pe.lookAt(eh),Pe.updateMatrixWorld(),ft.makeTranslation(-kr.x,-kr.y,-kr.z),Yf.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Yf,Pe.coordinateSystem,Pe.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,re),n.clear();else{re===0&&(n.setRenderTarget($.map),n.clear());let Pe=$.getViewport(re);r.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),N.viewport(r)}i=$.getFrustum(re),b(S,_,Le,Z,this.type)}$.isPointLightShadow!==!0&&this.type===vs&&w($,_),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,R,U)};function w(E,S){let _=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new At(a.x,a.y,{format:ea,type:qt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,_,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,_,f,v,null)}function C(E,S,_,T){let R=null,U=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)R=U;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let N=R.uuid,k=S.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let X=F[k];X===void 0&&(X=R.clone(),F[k]=X,S.addEventListener("dispose",M)),R=X}if(R.visible=S.visible,R.wireframe=S.wireframe,T===vs?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:d[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=n.properties.get(R);N.light=_}return R}function b(E,S,_,T,R){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===vs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let k=e.update(E),F=E.material;if(Array.isArray(F)){let X=k.groups;for(let Z=0,$=X.length;Z<$;Z++){let oe=X[Z],ee=F[oe.materialIndex];if(ee&&ee.visible){let ae=C(E,ee,T,R);E.onBeforeShadow(n,E,S,_,k,ae,oe),n.renderBufferDirect(_,null,k,ae,E,oe),E.onAfterShadow(n,E,S,_,k,ae,oe)}}}else if(F.visible){let X=C(E,F,T,R);E.onBeforeShadow(n,E,S,_,k,X,null),n.renderBufferDirect(_,null,k,X,E,null),E.onAfterShadow(n,E,S,_,k,X,null)}}let N=E.children;for(let k=0,F=N.length;k<F;k++)b(N[k],S,_,T,R)}function M(E){E.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function i2(n,e){function t(){let L=!1,ue=new xt,Y=null,he=new xt(0,0,0,0);return{setMask:function(me){Y!==me&&!L&&(n.colorMask(me,me,me,me),Y=me)},setLocked:function(me){L=me},setClear:function(me,se,Ae,Ee,st){st===!0&&(me*=Ee,se*=Ee,Ae*=Ee),ue.set(me,se,Ae,Ee),he.equals(ue)===!1&&(n.clearColor(me,se,Ae,Ee),he.copy(ue))},reset:function(){L=!1,Y=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,Y=null,he=null,me=null;return{setReversed:function(se){if(ue!==se){let Ae=e.get("EXT_clip_control");se?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ue=se;let Ee=me;me=null,this.setClear(Ee)}},getReversed:function(){return ue},setTest:function(se){se?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(se){Y!==se&&!L&&(n.depthMask(se),Y=se)},setFunc:function(se){if(ue&&(se=yf[se]),he!==se){switch(se){case qo:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Oo:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case Bo:n.depthFunc(n.EQUAL);break;case zo:n.depthFunc(n.GEQUAL);break;case Vo:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=se}},setLocked:function(se){L=se},setClear:function(se){me!==se&&(me=se,ue&&(se=1-se),n.clearDepth(se))},reset:function(){L=!1,Y=null,he=null,me=null,ue=!1}}}function a(){let L=!1,ue=null,Y=null,he=null,me=null,se=null,Ae=null,Ee=null,st=null;return{setTest:function(rt){L||(rt?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!L&&(n.stencilMask(rt),ue=rt)},setFunc:function(rt,rn,Jn){(Y!==rt||he!==rn||me!==Jn)&&(n.stencilFunc(rt,rn,Jn),Y=rt,he=rn,me=Jn)},setOp:function(rt,rn,Jn){(se!==rt||Ae!==rn||Ee!==Jn)&&(n.stencilOp(rt,rn,Jn),se=rt,Ae=rn,Ee=Jn)},setLocked:function(rt){L=rt},setClear:function(rt){st!==rt&&(n.clearStencil(rt),st=rt)},reset:function(){L=!1,ue=null,Y=null,he=null,me=null,se=null,Ae=null,Ee=null,st=null}}}let s=new t,r=new i,o=new a,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,C=null,b=null,M=null,E=null,S=null,_=new Ne(0,0,0),T=0,R=!1,U=null,N=null,k=null,F=null,X=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,oe=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ee)[1]),$=oe>=1):ee.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),$=oe>=2);let ae=null,re={},Le=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),ft=new xt().fromArray(Le),Ye=new xt().fromArray(Pe);function it(L,ue,Y,he){let me=new Uint8Array(4),se=n.createTexture();n.bindTexture(L,se),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<Y;Ae++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ue+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return se}let J={};J[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),r.setFunc(os),He(!1),tt(Cu),ie(n.CULL_FACE),et(En);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Oe(L,ue){return h[L]!==ue?(n.bindFramebuffer(L,ue),h[L]=ue,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Me(L,ue){let Y=m,he=!1;if(L){Y=f.get(ue),Y===void 0&&(Y=[],f.set(ue,Y));let me=L.textures;if(Y.length!==me.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ae=me.length;se<Ae;se++)Y[se]=n.COLOR_ATTACHMENT0+se;Y.length=me.length,he=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,he=!0);he&&n.drawBuffers(Y)}function Ge(L){return v!==L?(n.useProgram(L),v=L,!0):!1}let St={[Ia]:n.FUNC_ADD,[Vd]:n.FUNC_SUBTRACT,[kd]:n.FUNC_REVERSE_SUBTRACT};St[Hd]=n.MIN,St[Gd]=n.MAX;let We={[Wd]:n.ZERO,[Xd]:n.ONE,[jd]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[Qd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[Lu]:n.ONE_MINUS_SRC_ALPHA,[Kd]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[ef]:n.CONSTANT_COLOR,[tf]:n.ONE_MINUS_CONSTANT_COLOR,[nf]:n.CONSTANT_ALPHA,[af]:n.ONE_MINUS_CONSTANT_ALPHA};function et(L,ue,Y,he,me,se,Ae,Ee,st,rt){if(L===En){g===!0&&(Se(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),L!==zd){if(L!==p||rt!==R){if((w!==Ia||M!==Ia)&&(n.blendEquation(n.FUNC_ADD),w=Ia,M=Ia),rt)switch(L){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}C=null,b=null,E=null,S=null,_.set(0,0,0),T=0,p=L,R=rt}return}me=me||ue,se=se||Y,Ae=Ae||he,(ue!==w||me!==M)&&(n.blendEquationSeparate(St[ue],St[me]),w=ue,M=me),(Y!==C||he!==b||se!==E||Ae!==S)&&(n.blendFuncSeparate(We[Y],We[he],We[se],We[Ae]),C=Y,b=he,E=se,S=Ae),(Ee.equals(_)===!1||st!==T)&&(n.blendColor(Ee.r,Ee.g,Ee.b,st),_.copy(Ee),T=st),p=L,R=!1}function ut(L,ue){L.side===Tn?Se(n.CULL_FACE):ie(n.CULL_FACE);let Y=L.side===Ht;ue&&(Y=!Y),He(Y),L.blending===bs&&L.transparent===!1?et(En):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){U!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),U=L)}function tt(L){L!==Fd?(ie(n.CULL_FACE),L!==N&&(L===Cu?n.cullFace(n.BACK):L===Od?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),N=L}function Ut(L){L!==k&&($&&n.lineWidth(L),k=L)}function Wt(L,ue,Y){L?(ie(n.POLYGON_OFFSET_FILL),(F!==ue||X!==Y)&&(F=ue,X=Y,r.getReversed()&&(ue=-ue),n.polygonOffset(ue,Y))):Se(n.POLYGON_OFFSET_FILL)}function _t(L){L?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=n.TEXTURE0+Z-1),ae!==L&&(n.activeTexture(L),ae=L)}function B(L,ue,Y){Y===void 0&&(ae===null?Y=n.TEXTURE0+Z-1:Y=ae);let he=re[Y];he===void 0&&(he={type:void 0,texture:void 0},re[Y]=he),(he.type!==L||he.texture!==ue)&&(ae!==Y&&(n.activeTexture(Y),ae=Y),n.bindTexture(L,ue||J[L]),he.type=L,he.texture=ue)}function Ct(){let L=re[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function x(){try{n.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function z(){try{n.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function de(){try{n.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function fe(){try{n.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Q(){try{n.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function te(){try{n.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function I(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function P(L,ue){d[L]!==ue&&(n.pixelStorei(L,ue),d[L]=ue)}function q(L){ft.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function V(L){Ye.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function ne(L,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let he=Y.get(L);he===void 0&&(he=n.getUniformBlockIndex(ue,L.name),Y.set(L,he))}function le(L,ue){let he=c.get(ue).get(L);l.get(ue)!==he&&(n.uniformBlockBinding(ue,he,L.__bindingPointIndex),l.set(ue,he))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,re={},h={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,C=null,b=null,M=null,E=null,S=null,_=new Ne(0,0,0),T=0,R=!1,U=null,N=null,k=null,F=null,X=null,ft.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:Se,bindFramebuffer:Oe,drawBuffers:Me,useProgram:Ge,setBlending:et,setMaterial:ut,setFlipSided:He,setCullFace:tt,setLineWidth:Ut,setPolygonOffset:Wt,setScissorTest:_t,activeTexture:Tt,bindTexture:B,unbindTexture:Ct,compressedTexImage2D:at,compressedTexImage3D:A,texImage2D:Q,texImage3D:te,pixelStorei:P,getParameter:I,updateUBOMapping:ne,uniformBlockBinding:le,texStorage2D:de,texStorage3D:fe,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:q,viewport:V,reset:pe}}function a2(n,e,t,i,a,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return m?new OffscreenCanvas(A,x):Ks("canvas")}function g(A,x,z){let H=1,K=at(A);if((K.width>z||K.height>z)&&(H=z/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let de=Math.floor(H*K.width),fe=Math.floor(H*K.height);h===void 0&&(h=v(de,fe));let Q=x?v(de,fe):h;return Q.width=de,Q.height=fe,Q.getContext("2d").drawImage(A,0,0,de,fe),Ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+fe+")."),Q}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function w(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,x,z,H,K,de=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;H&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&fe&&(Q=fe.R16_EXT),z===n.SHORT&&fe&&(Q=fe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&fe&&(Q=fe.RG16_EXT),z===n.SHORT&&fe&&(Q=fe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGB16_EXT),z===n.SHORT&&fe&&(Q=fe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){let te=de?Zs:Je.getTransfer(K);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=te===lt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&fe&&(Q=fe.RGBA16_EXT),z===n.SHORT&&fe&&(Q=fe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(A,x){let z;return A?x===null||x===Bn||x===Ms?z=n.DEPTH24_STENCIL8:x===zn?z=n.DEPTH32F_STENCIL8:x===ys&&(z=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===Ms?z=n.DEPTH_COMPONENT24:x===zn?z=n.DEPTH_COMPONENT32F:x===ys&&(z=n.DEPTH_COMPONENT16),z}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function S(A){let x=A.target;x.removeEventListener("dispose",S),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),U(x)}function T(A){let x=i.get(A);if(x.__webglInit===void 0)return;let z=A.source,H=f.get(z);if(H){let K=H[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(A),Object.keys(H).length===0&&f.delete(z)}i.remove(A)}function R(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let z=A.source,H=f.get(z);delete H[x.__cacheKey],r.memory.textures--}function U(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let K=0;K<x.__webglFramebuffer[H].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[H][K]);else n.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)n.deleteFramebuffer(x.__webglFramebuffer[H]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let H=0,K=z.length;H<K;H++){let de=i.get(z[H]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),r.memory.textures--),i.remove(z[H])}i.remove(A)}let N=0;function k(){N=0}function F(){return N}function X(A){N=A}function Z(){let A=N;return A>=a.maxTextures&&Ue("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,A}function $(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function oe(A,x){let z=i.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let H=A.image;if(H===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function ee(A,x){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,x);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function ae(A,x){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function re(A,x){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Oe(z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let Le={[Vi]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},Pe={[kt]:n.NEAREST,[of]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},ft={[hf]:n.NEVER,[gf]:n.ALWAYS,[df]:n.LESS,[sc]:n.LEQUAL,[ff]:n.EQUAL,[rc]:n.GEQUAL,[pf]:n.GREATER,[mf]:n.NOTEQUAL};function Ye(A,x){if(x.type===zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===yl||x.magFilter===Dr||x.magFilter===Ki||x.minFilter===$t||x.minFilter===yl||x.minFilter===Dr||x.minFilter===Ki)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Le[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Le[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Le[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Pe[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Pe[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Dr&&x.minFilter!==Ki||x.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function it(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",S));let H=x.source,K=f.get(H);K===void 0&&(K={},f.set(H,K));let de=$(x);if(de!==A.__cacheKey){K[de]===void 0&&(K[de]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,z=!0),K[de].usedTimes++;let fe=K[A.__cacheKey];fe!==void 0&&(K[A.__cacheKey].usedTimes--,fe.usedTimes===0&&R(x)),A.__cacheKey=de,A.__webglTexture=K[de].texture}return z}function J(A,x,z){return Math.floor(Math.floor(A/z)/x)}function ie(A,x,z,H){let de=A.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,H,x.data);else{de.sort((P,q)=>P.start-q.start);let fe=0;for(let P=1;P<de.length;P++){let q=de[fe],V=de[P],ne=q.start+q.count,le=J(V.start,x.width,4),pe=J(q.start,x.width,4);V.start<=ne+1&&le===pe&&J(V.start+V.count-1,x.width,4)===le?q.count=Math.max(q.count,V.start+V.count-q.start):(++fe,de[fe]=V)}de.length=fe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),I=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let P=0,q=de.length;P<q;P++){let V=de[P],ne=Math.floor(V.start/4),le=Math.ceil(V.count/4),pe=ne%x.width,L=Math.floor(ne/x.width),ue=le,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,pe,L,ue,Y,z,H,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,I)}}function Se(A,x,z){let H=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=n.TEXTURE_3D);let K=it(A,x),de=x.source;t.bindTexture(H,A.__webglTexture,n.TEXTURE0+z);let fe=i.get(de);if(de.version!==fe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Y=Je.getPrimaries(Je.workingColorSpace),he=x.colorSpace===yi?null:Je.getPrimaries(x.colorSpace),me=x.colorSpace===yi||Y===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let te=g(x.image,!1,a.maxTextureSize);te=Ct(x,te);let I=s.convert(x.format,x.colorSpace),P=s.convert(x.type),q=b(x.internalFormat,I,P,x.normalized,x.colorSpace,x.isVideoTexture);Ye(H,x);let V,ne=x.mipmaps,le=x.isVideoTexture!==!0,pe=fe.__version===void 0||K===!0,L=de.dataReady,ue=E(x,te);if(x.isDepthTexture)q=M(x.format===Qi,x.type),pe&&(le?t.texStorage2D(n.TEXTURE_2D,1,q,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,q,te.width,te.height,0,I,P,null));else if(x.isDataTexture)if(ne.length>0){le&&pe&&t.texStorage2D(n.TEXTURE_2D,ue,q,ne[0].width,ne[0].height);for(let Y=0,he=ne.length;Y<he;Y++)V=ne[Y],le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,V.width,V.height,I,P,V.data):t.texImage2D(n.TEXTURE_2D,Y,q,V.width,V.height,0,I,P,V.data);x.generateMipmaps=!1}else le?(pe&&t.texStorage2D(n.TEXTURE_2D,ue,q,te.width,te.height),L&&ie(x,te,I,P)):t.texImage2D(n.TEXTURE_2D,0,q,te.width,te.height,0,I,P,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){le&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,q,ne[0].width,ne[0].height,te.depth);for(let Y=0,he=ne.length;Y<he;Y++)if(V=ne[Y],x.format!==wn)if(I!==null)if(le){if(L)if(x.layerUpdates.size>0){let me=$u(V.width,V.height,x.format,x.type);for(let se of x.layerUpdates){let Ae=V.data.subarray(se*me/V.data.BYTES_PER_ELEMENT,(se+1)*me/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,se,V.width,V.height,1,I,Ae)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,V.width,V.height,te.depth,I,V.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,q,V.width,V.height,te.depth,0,V.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,V.width,V.height,te.depth,I,P,V.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,q,V.width,V.height,te.depth,0,I,P,V.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{le&&pe&&t.texStorage2D(n.TEXTURE_2D,ue,q,ne[0].width,ne[0].height);for(let Y=0,he=ne.length;Y<he;Y++)V=ne[Y],x.format!==wn?I!==null?le?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,V.width,V.height,I,V.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,q,V.width,V.height,0,V.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,V.width,V.height,I,P,V.data):t.texImage2D(n.TEXTURE_2D,Y,q,V.width,V.height,0,I,P,V.data)}else if(x.isDataArrayTexture)if(le){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,q,te.width,te.height,te.depth),L)if(x.layerUpdates.size>0){let Y=$u(te.width,te.height,x.format,x.type);for(let he of x.layerUpdates){let me=te.data.subarray(he*Y/te.data.BYTES_PER_ELEMENT,(he+1)*Y/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,I,P,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,I,P,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,te.width,te.height,te.depth,0,I,P,te.data);else if(x.isData3DTexture)le?(pe&&t.texStorage3D(n.TEXTURE_3D,ue,q,te.width,te.height,te.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,I,P,te.data)):t.texImage3D(n.TEXTURE_3D,0,q,te.width,te.height,te.depth,0,I,P,te.data);else if(x.isFramebufferTexture){if(pe)if(le)t.texStorage2D(n.TEXTURE_2D,ue,q,te.width,te.height);else{let Y=te.width,he=te.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,q,Y,he,0,I,P,null),Y>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),te.parentNode!==Y){Y.appendChild(te),d.add(x),Y.onpaint=he=>{let me=he.changedElements;for(let se of d)me.includes(se.image)&&(se.needsUpdate=!0)},Y.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let me=n.RGBA,se=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,se,Ae,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ne.length>0){if(le&&pe){let Y=at(ne[0]);t.texStorage2D(n.TEXTURE_2D,ue,q,Y.width,Y.height)}for(let Y=0,he=ne.length;Y<he;Y++)V=ne[Y],le?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,I,P,V):t.texImage2D(n.TEXTURE_2D,Y,q,I,P,V);x.generateMipmaps=!1}else if(le){if(pe){let Y=at(te);t.texStorage2D(n.TEXTURE_2D,ue,q,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,I,P,te)}else t.texImage2D(n.TEXTURE_2D,0,q,I,P,te);p(x)&&w(H),fe.__version=de.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Oe(A,x,z){if(x.image.length!==6)return;let H=it(A,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let de=i.get(K);if(K.version!==de.__version||H===!0){t.activeTexture(n.TEXTURE0+z);let fe=Je.getPrimaries(Je.workingColorSpace),Q=x.colorSpace===yi?null:Je.getPrimaries(x.colorSpace),te=x.colorSpace===yi||fe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let I=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,q=[];for(let se=0;se<6;se++)!I&&!P?q[se]=g(x.image[se],!0,a.maxCubemapSize):q[se]=P?x.image[se].image:x.image[se],q[se]=Ct(x,q[se]);let V=q[0],ne=s.convert(x.format,x.colorSpace),le=s.convert(x.type),pe=b(x.internalFormat,ne,le,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ue=de.__version===void 0||H===!0,Y=K.dataReady,he=E(x,V);Ye(n.TEXTURE_CUBE_MAP,x);let me;if(I){L&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,pe,V.width,V.height);for(let se=0;se<6;se++){me=q[se].mipmaps;for(let Ae=0;Ae<me.length;Ae++){let Ee=me[Ae];x.format!==wn?ne!==null?L?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Ee.width,Ee.height,ne,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,pe,Ee.width,Ee.height,0,Ee.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Ee.width,Ee.height,ne,le,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,pe,Ee.width,Ee.height,0,ne,le,Ee.data)}}}else{if(me=x.mipmaps,L&&ue){me.length>0&&he++;let se=at(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,pe,se.width,se.height)}for(let se=0;se<6;se++)if(P){L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,q[se].width,q[se].height,ne,le,q[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,q[se].width,q[se].height,0,ne,le,q[se].data);for(let Ae=0;Ae<me.length;Ae++){let st=me[Ae].image[se].image;L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,st.width,st.height,ne,le,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,pe,st.width,st.height,0,ne,le,st.data)}}else{L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne,le,q[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,ne,le,q[se]);for(let Ae=0;Ae<me.length;Ae++){let Ee=me[Ae];L?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,ne,le,Ee.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,pe,ne,le,Ee.image[se])}}}p(x)&&w(n.TEXTURE_CUBE_MAP),de.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Me(A,x,z,H,K,de){let fe=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),te=b(z.internalFormat,fe,Q,z.normalized,z.colorSpace),I=i.get(x),P=i.get(z);if(P.__renderTarget=x,!I.__hasExternalTextures){let q=Math.max(1,x.width>>de),V=Math.max(1,x.height>>de);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,de,te,q,V,x.depth,0,fe,Q,null):t.texImage2D(K,de,te,q,V,0,fe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,K,P.__webglTexture,0,_t(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,K,P.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(A,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let H=x.depthTexture,K=H&&H.isDepthTexture?H.type:null,de=M(x.stencilBuffer,K),fe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),de,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),de,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,de,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,A)}else{let H=x.textures;for(let K=0;K<H.length;K++){let de=H[K],fe=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),te=b(de.internalFormat,fe,Q,de.normalized,de.colorSpace);Tt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),te,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(A,x,z){let H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",S)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,x.depthTexture);let I=s.convert(x.depthTexture.format),P=s.convert(x.depthTexture.type),q;x.depthTexture.format===ei?q=n.DEPTH_COMPONENT24:x.depthTexture.format===Qi&&(q=n.DEPTH24_STENCIL8);for(let V=0;V<6;V++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,q,x.width,x.height,0,I,P,null)}}else oe(x.depthTexture,0);let de=K.__webglTexture,fe=_t(x),Q=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=x.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ei)Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,de,0);else if(x.depthTexture.format===Qi)Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(A){let x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)St(x.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?St(x.__webglFramebuffer[0],A,0):St(x.__webglFramebuffer,A,0)}else if(z){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=n.createRenderbuffer(),Ge(x.__webglDepthbuffer[H],A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ge(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(A,x,z){let H=i.get(A);x!==void 0&&Me(H.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&We(A)}function ut(A){let x=A.texture,z=i.get(A),H=i.get(x);A.addEventListener("dispose",_);let K=A.textures,de=A.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=x.version,r.memory.textures++),de){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let te=0;te<x.mipmaps.length;te++)z.__webglFramebuffer[Q][te]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Q=0,te=K.length;Q<te;Q++){let I=i.get(K[Q]);I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&Tt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let te=K[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let I=s.convert(te.format,te.colorSpace),P=s.convert(te.type),q=b(te.internalFormat,I,P,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),V=_t(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,V,q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Me(z.__webglFramebuffer[Q][te],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else Me(z.__webglFramebuffer[Q],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Q=0,te=K.length;Q<te;Q++){let I=K[Q],P=i.get(I),q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,P.__webglTexture),Ye(q,I),Me(z.__webglFramebuffer,A,I,n.COLOR_ATTACHMENT0+Q,q,0),p(I)&&w(q)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,H.__webglTexture),Ye(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Me(z.__webglFramebuffer[te],A,x,n.COLOR_ATTACHMENT0,Q,te);else Me(z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,Q,0);p(x)&&w(Q),t.unbindTexture()}A.depthBuffer&&We(A)}function He(A){let x=A.textures;for(let z=0,H=x.length;z<H;z++){let K=x[z];if(p(K)){let de=C(A),fe=i.get(K).__webglTexture;t.bindTexture(de,fe),w(de),t.unbindTexture()}}}let tt=[],Ut=[];function Wt(A){if(A.samples>0){if(Tt(A)===!1){let x=A.textures,z=A.width,H=A.height,K=n.COLOR_BUFFER_BIT,de=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),Q=x.length>1;if(Q)for(let I=0;I<x.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let I=0;I<x.length;I++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);let P=i.get(x[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,z,H,0,0,z,H,K,n.NEAREST),l===!0&&(tt.length=0,Ut.length=0,tt.push(n.COLOR_ATTACHMENT0+I),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(tt.push(de),Ut.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let I=0;I<x.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);let P=i.get(x[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _t(A){return Math.min(a.maxSamples,A.samples)}function Tt(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(A){let x=r.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ct(A,x){let z=A.colorSpace,H=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Js&&z!==yi&&(Je.getTransfer(z)===lt?(H!==wn||K!==dn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",z)),x}function at(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=F,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=re,this.rebindTextures=et,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function s2(n,e){function t(i,a=yi){let s,r=Je.getTransfer(a);if(i===dn)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===qu)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===qt)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===zu)return n.RGB;if(i===wn)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===Vu)return n.RED;if(i===El)return n.RED_INTEGER;if(i===ea)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===Ur||i===qr||i===Fr||i===Or)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Rl||i===Pl||i===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Nl||i===Dl||i===Ul||i===ql||i===Br||i===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ll||i===Nl)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return s.COMPRESSED_R11_EAC;if(i===ql)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return s.COMPRESSED_RG11_EAC;if(i===Fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Bl||i===zl||i===Vl||i===kl||i===Hl||i===Gl||i===Wl||i===Xl||i===jl||i===$l||i===Yl||i===Jl||i===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ol)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Ql||i===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kl)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===nc||i===zr||i===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o2=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:r2,fragmentShader:o2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends ti{constructor(e,t){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new lh,p={},w=t.getContextAttributes(),C=null,b=null,M=[],E=[],S=new ge,_=null,T=null,R=new jt;R.viewport=new xt;let U=new jt;U.viewport=new xt;let N=[R,U],k=new xl,F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=M[J];return ie===void 0&&(ie=new hs,M[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=M[J];return ie===void 0&&(ie=new hs,M[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=M[J];return ie===void 0&&(ie=new hs,M[J]=ie),ie.getHandSpace()};function Z(J){let ie=E.indexOf(J.inputSource);if(ie===-1)return;let Se=M[ie];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||r),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",oe);for(let J=0;J<M.length;J++){let ie=E[J];ie!==null&&(E[J]=null,M[J].disconnect(ie))}F=null,X=null,g.reset();for(let J in p)delete p[J];if(e.setRenderTarget(C),f=null,h=null,d=null,a=null,b=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(S.width,S.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",$),a.addEventListener("inputsourceschange",oe),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(S),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Oe=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=w.stencil?Qi:ei,Oe=w.stencil?Ms:Bn);let Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ge),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new At(h.textureWidth,h.textureHeight,{format:wn,type:dn,depthTexture:new Hi(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new At(f.framebufferWidth,f.framebufferHeight,{format:wn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),it.setContext(a),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(J){for(let ie=0;ie<J.removed.length;ie++){let Se=J.removed[ie],Oe=E.indexOf(Se);Oe>=0&&(E[Oe]=null,M[Oe].disconnect(Se))}for(let ie=0;ie<J.added.length;ie++){let Se=J.added[ie],Oe=E.indexOf(Se);if(Oe===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=E.length){E.push(Se),Oe=Ge;break}else if(E[Ge]===null){E[Ge]=Se,Oe=Ge;break}if(Oe===-1)break}let Me=M[Oe];Me&&Me.connect(Se)}}let ee=new D,ae=new D;function re(J,ie,Se){ee.setFromMatrixPosition(ie.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);let Oe=ee.distanceTo(ae),Me=ie.projectionMatrix.elements,Ge=Se.projectionMatrix.elements,St=Me[14]/(Me[10]-1),We=Me[14]/(Me[10]+1),et=(Me[9]+1)/Me[5],ut=(Me[9]-1)/Me[5],He=(Me[8]-1)/Me[0],tt=(Ge[8]+1)/Ge[0],Ut=St*He,Wt=St*tt,_t=Oe/(-He+tt),Tt=_t*-He;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Tt),J.translateZ(_t),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let B=St+_t,Ct=We+_t,at=Ut-Tt,A=Wt+(Oe-Tt),x=et*We/Ct*B,z=ut*We/Ct*B;J.projectionMatrix.makePerspective(at,A,x,z,B,Ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Le(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ie=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),k.near=U.near=R.near=ie,k.far=U.far=R.far=Se,(F!==k.near||X!==k.far)&&(a.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,X=k.far),k.layers.mask=J.layers.mask|6,R.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Oe=J.parent,Me=k.cameras;Le(k,Oe);for(let Ge=0;Ge<Me.length;Ge++)Le(Me[Ge],Oe);Me.length===2?re(k,R,U):k.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Pe(J,k,Oe)};function Pe(J,ie,Se){Se===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let ft=null;function Ye(J,ie){if(u=ie.getViewerPose(c||r),m=ie,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Oe=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let We=0;We<Se.length;We++){let et=Se[We],ut=null;if(f!==null)ut=f.getViewport(et);else{let tt=d.getViewSubImage(h,et);ut=tt.viewport,We===0&&(e.setRenderTargetTextures(b,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(b))}let He=N[We];He===void 0&&(He=new jt,He.layers.enable(We),He.viewport=new xt,N[We]=He),He.matrix.fromArray(et.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(et.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ut.x,ut.y,ut.width,ut.height),We===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(He)}let Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let We=d.getDepthInformation(Se[0]);We&&We.isValid&&We.texture&&g.init(We,a.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<Se.length;We++){let et=Se[We].camera;if(et){let ut=p[et];ut||(ut=new lr,p[et]=ut);let He=d.getCameraImage(et);ut.sourceTexture=He}}}}for(let Se=0;Se<M.length;Se++){let Oe=E[Se],Me=M[Se];Oe!==null&&Me!==void 0&&Me.update(Oe,ie,c||r)}ft&&ft(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}let it=new Jf;it.setAnimationLoop(Ye),this.setAnimationLoop=function(J){ft=J},this.dispose=function(){}}},l2=new mt,np=new Ve;np.set(-1,0,0,0,1,0,0,0,1);function c2(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Wu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,w,C,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,C):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=e.get(p),C=w.envMap,b=w.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(np),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=C*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function u2(n,e,t,i){let a={},s={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=a[b.id];E===void 0&&(g(b),E=u(b),a[b.id]=E,b.addEventListener("dispose",w));let S=M.program;i.updateUBOMapping(b,S);let _=e.render.frame;s[b.id]!==_&&(h(b),s[b.id]=_)}function u(b){let M=d();b.__bindingPointIndex=M;let E=n.createBuffer(),S=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=a[b.id],E=b.uniforms,S=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,T=E.length;_<T;_++){let R=E[_];if(Array.isArray(R))for(let U=0,N=R.length;U<N;U++)f(R[U],_,U,S);else f(R,_,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,E,S){if(v(b,M,E,S)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let U=0;U<T.length;U++){let N=T[U],k=p(N);m(N,b.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function m(b,M,E){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,E)}function v(b,M,E,S){let _=b.value,T=M+"_"+E;if(S[T]===void 0)return typeof _=="number"||typeof _=="boolean"?S[T]=_:ArrayBuffer.isView(_)?S[T]=_.slice():S[T]=_.clone(),!0;{let R=S[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return S[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(b){let M=b.uniforms,E=0,S=16;for(let T=0,R=M.length;T<R;T++){let U=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,k=U.length;N<k;N++){let F=U[N],X=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,$=X.length;Z<$;Z++){let oe=X[Z],ee=p(oe),ae=E%S,re=ae%ee.boundary,Le=ae+re;E+=re,Le!==0&&S-Le<ee.storage&&(E+=S-Le),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ee.storage}}}let _=E%S;return _>0&&(E+=S-_),b.__size=E,b.__cache={},this}function p(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",b),M}function w(b){let M=b.target;M.removeEventListener("dispose",w);let E=r.indexOf(M.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function C(){for(let b in a)n.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:l,update:c,dispose:C}}var h2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function d2(){return ii===null&&(ii=new Yo(h2,16,16,ea,qt),ii.name="DFG_LUT",ii.minFilter=$t,ii.magFilter=$t,ii.wrapS=Qn,ii.wrapT=Qn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var hc=class{constructor(e={}){let{canvas:t=_f(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;let v=f,g=new Set([Al,wl,El]),p=new Set([dn,Bn,ys,Ms,Sl,Tl]),w=new Uint32Array(4),C=new Int32Array(4),b=new D,M=null,E=null,S=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,N=null,k=null,F=null,X=null;this._outputColorSpace=Xt;let Z=0,$=0,oe=null,ee=-1,ae=null,re=new xt,Le=new xt,Pe=null,ft=new Ne(0),Ye=0,it=t.width,J=t.height,ie=1,Se=null,Oe=null,Me=new xt(0,0,it,J),Ge=new xt(0,0,it,J),St=!1,We=new ds,et=!1,ut=!1,He=new mt,tt=new D,Ut=new xt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Tt(){return oe===null?ie:1}let B=i;function Ct(y,O){return t.getContext(y,O)}let at,A,x,z,H,K,de,fe,Q,te,I,P,q,V,ne,le,pe,L,ue,Y,he,me,se;try{let y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),B===null){let O="webgl2";if(B=Ct(O,y),B===null)throw Ct(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(y){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Fe("WebGLRenderer: "+y.message),y}function Ae(){at=new vx(B),at.init(),he=new s2(B,at),A=new cx(B,at,e,he),x=new i2(B,at),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=B.createFramebuffer(),F=B.createFramebuffer(),X=B.createFramebuffer(),z=new Mx(B),H=new H_,K=new a2(B,at,x,H,A,he,z),de=new _x(R),fe=new T0(B),me=new ox(B,fe),Q=new bx(B,fe,z,me),te=new Tx(B,Q,fe,me,z),L=new Sx(B,A,K),ne=new ux(H),I=new k_(R,de,at,A,me,ne),P=new c2(R,H),q=new W_,V=new Z_(at),pe=new rx(R,de,x,te,m,l),le=new n2(R,te,A),se=new u2(B,z,A,x),ue=new lx(B,at,z),Y=new yx(B,at,z),z.programs=I.programs,R.capabilities=A,R.extensions=at,R.properties=H,R.renderLists=q,R.shadowMap=le,R.state=x,R.info=z}v!==dn&&(T=new wx(v,t.width,t.height,o,a,s));let Ee=new ch(R,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(it,J,!1))},this.getSize=function(y){return y.set(it,J)},this.setSize=function(y,O,j=!0){if(Ee.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}it=y,J=O,t.width=Math.floor(y*ie),t.height=Math.floor(O*ie),j===!0&&(t.style.width=y+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(it*ie,J*ie).floor()},this.setDrawingBufferSize=function(y,O,j){it=y,J=O,ie=j,t.width=Math.floor(y*j),t.height=Math.floor(O*j),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(v===dn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(re)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,O,j,G){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,O,j,G),x.viewport(re.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(Ge)},this.setScissor=function(y,O,j,G){y.isVector4?Ge.set(y.x,y.y,y.z,y.w):Ge.set(y,O,j,G),x.scissor(Le.copy(Ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(y){x.setScissorTest(St=y)},this.setOpaqueSort=function(y){Se=y},this.setTransparentSort=function(y){Oe=y},this.getClearColor=function(y){return y.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,j=!0){let G=0;if(y){let W=!1;if(oe!==null){let ye=oe.texture.format;W=g.has(ye)}if(W){let ye=oe.texture.type,we=p.has(ye),be=pe.getClearColor(),Ce=pe.getClearAlpha(),Ie=be.r,Xe=be.g,Ze=be.b;we?(w[0]=Ie,w[1]=Xe,w[2]=Ze,w[3]=Ce,B.clearBufferuiv(B.COLOR,0,w)):(C[0]=Ie,C[1]=Xe,C[2]=Ze,C[3]=Ce,B.clearBufferiv(B.COLOR,0,C))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),pe.dispose(),q.dispose(),V.dispose(),H.dispose(),de.dispose(),te.dispose(),me.dispose(),se.dispose(),I.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Jh),Ee.removeEventListener("sessionend",Zh),xa.stop()};function st(y){y.preventDefault(),Hu("WebGLRenderer: Context Lost."),U=!0}function rt(){Hu("WebGLRenderer: Context Restored."),U=!1;let y=z.autoReset,O=le.enabled,j=le.autoUpdate,G=le.needsUpdate,W=le.type;Ae(),z.autoReset=y,le.enabled=O,le.autoUpdate=j,le.needsUpdate=G,le.type=W}function rn(y){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Jn(y){let O=y.target;O.removeEventListener("dispose",Jn),um(O)}function um(y){hm(y),H.remove(y)}function hm(y){let O=H.get(y).programs;O!==void 0&&(O.forEach(function(j){I.releaseProgram(j)}),y.isShaderMaterial&&I.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,j,G,W,ye){O===null&&(O=Wt);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,be=pm(y,O,j,G,W);x.setMaterial(G,we);let Ce=j.index,Ie=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(j),Ce===void 0)return;Ie=2}let Xe=j.drawRange,Ze=j.attributes.position,Re=Xe.start*Ie,ht=(Xe.start+Xe.count)*Ie;ye!==null&&(Re=Math.max(Re,ye.start*Ie),ht=Math.min(ht,(ye.start+ye.count)*Ie)),Ce!==null?(Re=Math.max(Re,0),ht=Math.min(ht,Ce.count)):Ze!=null&&(Re=Math.max(Re,0),ht=Math.min(ht,Ze.count));let Lt=ht-Re;if(Lt<0||Lt===1/0)return;me.setup(W,G,be,j,Ce);let yt,gt=ue;if(Ce!==null&&(yt=fe.get(Ce),gt=Y,gt.setIndex(yt)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Tt()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(W.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),x.setLineWidth(Kt*Tt()),W.isLineSegments?gt.setMode(B.LINES):W.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else W.isPoints?gt.setMode(B.POINTS):W.isSprite&&gt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Kt=W._multiDrawStarts,Te=W._multiDrawCounts,on=W._multiDrawCount,ot=Ce?fe.get(Ce).bytesPerElement:1,Mn=H.get(G).currentProgram.getUniforms();for(let Zn=0;Zn<on;Zn++)Mn.setValue(B,"_gl_DrawID",Zn),gt.render(Kt[Zn]/ot,Te[Zn])}else if(W.isInstancedMesh)gt.renderInstances(Re,Lt,W.count);else if(j.isInstancedBufferGeometry){let Kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Te=Math.min(j.instanceCount,Kt);gt.renderInstances(Re,Lt,Te)}else gt.render(Re,Lt)};function Yh(y,O,j,G){N!==null&&y.isNodeMaterial&&N.setObject(G,y),et===!0&&ne.setState(y,j,!1),y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,co(y,O,G),y.side=Ji,y.needsUpdate=!0,co(y,O,G),y.side=Tn):co(y,O,G)}this.compile=function(y,O,j=null){j===null&&(j=y),N!==null&&N.renderStart(y,O,j),E=V.get(j),E.init(O),_.push(E),j.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),y!==j&&y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ut=this.localClippingEnabled,et=ne.init(this.clippingPlanes,ut),et===!0&&ne.setGlobalState(this.clippingPlanes,O),N!==null&&le.render(E.state.shadowsArray,j,O);let G=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ye=W.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){let be=ye[we];Yh(be,j,O,W),G.add(be)}else Yh(ye,j,O,W),G.add(ye)}),E=_.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(y,O,j=null){let G=this.compile(y,O,j);return new Promise(W=>{function ye(){if(G.forEach(function(we){let Ce=H.get(we).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(we)}),G.size===0){W(y);return}setTimeout(ye,10)}at.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let zc=null;function dm(y){zc&&zc(y)}function Jh(){xa.stop()}function Zh(){xa.start()}let xa=new Jf;xa.setAnimationLoop(dm),typeof self<"u"&&xa.setContext(self),this.setAnimationLoop=function(y){zc=y,Ee.setAnimationLoop(y),y===null?xa.stop():xa.start()},Ee.addEventListener("sessionstart",Jh),Ee.addEventListener("sessionend",Zh),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;N!==null&&N.renderStart(y,O);let j=Ee.enabled===!0&&Ee.isPresenting===!0,G=T!==null&&(oe===null||j)&&T.begin(R,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(O),O=Ee.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,O,oe),E=V.get(y,_.length),E.init(O),E.state.textureUnits=K.getTextureUnits(),_.push(E),He.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),We.setFromProjectionMatrix(He,Un,O.reversedDepth),ut=this.localClippingEnabled,et=ne.init(this.clippingPlanes,ut),M=q.get(y,S.length),M.init(),S.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){let we=R.xr.getDepthSensingMesh();we!==null&&Vc(we,O,-1/0,R.sortObjects)}Vc(y,O,0,R.sortObjects),M.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&M.sort(Se,Oe),_t=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,_t&&pe.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&ne.beginShadows();let W=E.state.shadowsArray;if(le.render(W,y,O),et===!0&&ne.endShadows(),(G&&T.hasRenderPass())===!1){let we=M.opaque,be=M.transmissive;if(E.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(be.length>0)for(let Ie=0,Xe=Ce.length;Ie<Xe;Ie++){let Ze=Ce[Ie];Qh(we,be,y,Ze)}_t&&pe.render(y);for(let Ie=0,Xe=Ce.length;Ie<Xe;Ie++){let Ze=Ce[Ie];Kh(M,y,Ze,Ze.viewport)}}else be.length>0&&Qh(we,be,y,O),_t&&pe.render(y),Kh(M,y,O)}oe!==null&&$===0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe)),G&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,O),me.resetDefaultState(),ee=-1,ae=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),et===!0&&ne.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,S.pop(),S.length>0?M=S[S.length-1]:M=null,N!==null&&N.renderEnd()};function Vc(y,O,j,G){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(We)){G&&Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(He);let we=te.update(y),be=y.material;be.visible&&M.push(y,we,be,j,Ut.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(We))){let we=te.update(y),be=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ut.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ut.copy(we.boundingSphere.center)),Ut.applyMatrix4(y.matrixWorld).applyMatrix4(He)),Array.isArray(be)){let Ce=we.groups;for(let Ie=0,Xe=Ce.length;Ie<Xe;Ie++){let Ze=Ce[Ie],Re=be[Ze.materialIndex];Re&&Re.visible&&M.push(y,we,Re,j,Ut.z,Ze,O)}}else be.visible&&M.push(y,we,be,j,Ut.z,null,O)}}let ye=y.children;for(let we=0,be=ye.length;we<be;we++)Vc(ye[we],O,j,G)}function Kh(y,O,j,G){let{opaque:W,transmissive:ye,transparent:we}=y;E.setupLightsView(j),et===!0&&ne.setGlobalState(R.clippingPlanes,j),G&&x.viewport(re.copy(G)),W.length>0&&lo(W,O,j),ye.length>0&&lo(ye,O,j),we.length>0&&lo(we,O,j),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Qh(y,O,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Re=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new At(1,1,{generateMipmaps:!0,type:Re?qt:dn,minFilter:Ki,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ye=E.state.transmissionRenderTarget[G.id],we=G.viewport||re;ye.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);let be=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(ft),Ye=R.getClearAlpha(),Ye<1&&R.setClearColor(16777215,.5),R.clear(),_t&&pe.render(j);let Xe=R.toneMapping;R.toneMapping=On;let Ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),et===!0&&ne.setGlobalState(R.clippingPlanes,G),lo(y,j,G),K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye),at.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ht=0,Lt=O.length;ht<Lt;ht++){let yt=O[ht],{object:gt,geometry:Kt,material:Te,group:on}=yt;if(Te.side===Tn&&gt.layers.test(G.layers)){let ot=Te.side;Te.side=Ht,Te.needsUpdate=!0,ed(gt,j,G,Kt,Te,on),Te.side=ot,Te.needsUpdate=!0,Re=!0}}Re===!0&&(K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye))}R.setRenderTarget(be,Ce,Ie),R.setClearColor(ft,Ye),Ze!==void 0&&(G.viewport=Ze),R.toneMapping=Xe}function lo(y,O,j){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ye=y.length;W<ye;W++){let we=y[W],{object:be,geometry:Ce,group:Ie}=we,Xe=we.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),be.layers.test(j.layers)&&ed(be,O,j,Ce,Xe,Ie)}}function ed(y,O,j,G,W,ye){N!==null&&W.isNodeMaterial&&N.setObject(y,W),y.onBeforeRender(R,O,j,G,W,ye),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(R,O,j,G,y,ye),W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,R.renderBufferDirect(j,O,G,W,y,ye),W.side=Ji,W.needsUpdate=!0,R.renderBufferDirect(j,O,G,W,y,ye),W.side=Tn):R.renderBufferDirect(j,O,G,W,y,ye),y.onAfterRender(R,O,j,G,W,ye)}function co(y,O,j){O.isScene!==!0&&(O=Wt);let G=H.get(y),W=E.state.lights,ye=E.state.shadowsArray,we=W.state.version,be=I.getParameters(y,W.state,ye,O,j,E.state.lightProbeGridArray),Ce=I.getProgramCacheKey(be),Ie=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=de.get(y.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",Jn),Ie=new Map,G.programs=Ie);let Ze=Ie.get(Ce);if(Ze!==void 0){if(G.currentProgram===Ze&&G.lightsStateVersion===we)return nd(y,be),Ze}else be.uniforms=I.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,j,be),y.onBeforeCompile(be,R),Ze=I.acquireProgram(be,Ce),Ie.set(Ce,Ze),G.uniforms=be.uniforms;let Re=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=ne.uniform),nd(y,be),G.needsLights=gm(y),G.lightsStateVersion=we,G.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.sunLights.value=W.state.sun,Re.sunLightShadows.value=W.state.sunShadow,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.sunShadowMatrix.value=W.state.sunShadowMatrix,Re.sunShadowCascade.value=W.state.sunShadowCascade,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=Ze,G.uniformsList=null,Ze}function td(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function nd(y,O){let j=H.get(y);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function fm(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(O.matrixWorld);for(let j=0,G=y.length;j<G;j++){let W=y[j];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function pm(y,O,j,G,W){O.isScene!==!0&&(O=Wt),K.resetTextureUnits();let ye=O.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,be=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Je.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=de.get(G.envMap||we,Ce),Xe=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,Lt=!!j.morphAttributes.color,yt=On;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(yt=R.toneMapping);let gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Kt=gt!==void 0?gt.length:0,Te=H.get(G),on=E.state.lights;if(et===!0&&(ut===!0||y!==ae)){let vt=y===ae&&G.id===ee;ne.setState(G,y,vt)}let ot=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==on.state.version||Te.outputColorSpace!==be||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==Ie||G.fog===!0&&Te.fog!==ye||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Xe||Te.vertexTangents!==Ze||Te.morphTargets!==Re||Te.morphNormals!==ht||Te.morphColors!==Lt||Te.toneMapping!==yt||Te.morphTargetsCount!==Kt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Te.__version=G.version);let Mn=Te.currentProgram;ot===!0&&(Mn=co(G,O,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Mn,Te));let Zn=!1,Li=!1,Wa=!1,pt=Mn.getUniforms(),Rt=Te.uniforms;if(x.useProgram(Mn.program)&&(Zn=!0,Li=!0,Wa=!0),G.id!==ee&&(ee=G.id,Li=!0),Te.needsLights){let vt=fm(E.state.lightProbeGridArray,W);Te.lightProbeGrid!==vt&&(Te.lightProbeGrid=vt,Li=!0)}if(Zn||ae!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(B,"projectionMatrix",y.projectionMatrix),pt.setValue(B,"viewMatrix",y.matrixWorldInverse);let Di=pt.map.cameraPosition;Di!==void 0&&Di.setValue(B,tt.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),ae!==y&&(ae=y,Li=!0,Wa=!0)}if(Te.needsLights&&(on.state.sunShadowMap.length>0&&pt.setValue(B,"sunShadowMap",on.state.sunShadowMap,K),on.state.directionalShadowMap.length>0&&pt.setValue(B,"directionalShadowMap",on.state.directionalShadowMap,K),on.state.spotShadowMap.length>0&&pt.setValue(B,"spotShadowMap",on.state.spotShadowMap,K),on.state.pointShadowMap.length>0&&pt.setValue(B,"pointShadowMap",on.state.pointShadowMap,K)),W.isSkinnedMesh){pt.setOptional(B,W,"bindMatrix"),pt.setOptional(B,W,"bindMatrixInverse");let vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(B,"boneTexture",vt.boneTexture,K))}W.isBatchedMesh&&(pt.setOptional(B,W,"batchingTexture"),pt.setValue(B,"batchingTexture",W._matricesTexture,K),pt.setOptional(B,W,"batchingIdTexture"),pt.setValue(B,"batchingIdTexture",W._indirectTexture,K),pt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(B,"batchingColorTexture",W._colorsTexture,K));let Ni=j.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&L.update(W,j,Mn),(Li||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,pt.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Rt.envMapIntensity.value=O.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=d2()),Li){if(pt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&mm(Rt,Wa),ye&&G.fog===!0&&P.refreshFogUniforms(Rt,ye),P.refreshMaterialUniforms(Rt,G,ie,J,E.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.lightProbeGrid){let vt=Te.lightProbeGrid;Rt.probesSH.value=vt.texture,Rt.probesMin.value.copy(vt.boundingBox.min),Rt.probesMax.value.copy(vt.boundingBox.max),Rt.probesResolution.value.copy(vt.resolution)}ws.upload(B,td(Te),Rt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(B,td(Te),Rt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(B,"center",W.center),pt.setValue(B,"modelViewMatrix",W.modelViewMatrix),pt.setValue(B,"normalMatrix",W.normalMatrix),pt.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let vt=G.uniformsGroups;for(let Di=0,Xa=vt.length;Di<Xa;Di++){let ad=vt[Di];se.update(ad,Mn),se.bind(ad,Mn)}}return Mn}function mm(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function gm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,O,j){let G=H.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=O,H.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:j,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let j=H.get(y);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,j=0){oe=y,Z=O,$=j;let G=null,W=!1,ye=!1;if(y){let be=H.get(y);if(be.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),re.copy(y.viewport),Le.copy(y.scissor),Pe=y.scissorTest,x.viewport(re),x.scissor(Le),x.setScissorTest(Pe),ee=-1;return}else if(be.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(be.__hasExternalTextures)K.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xe=y.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&H.has(Xe)&&(y.width!==Xe.image.width||y.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}let Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);let Ie=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?G=Ie[O][j]:G=Ie[O],W=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?G=H.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[j]:G=Ie,re.copy(y.viewport),Le.copy(y.scissor),Pe=y.scissorTest}else re.copy(Me).multiplyScalar(ie).floor(),Le.copy(Ge).multiplyScalar(ie).floor(),Pe=St;if(j!==0&&(G=k),x.bindFramebuffer(B.FRAMEBUFFER,G)&&x.drawBuffers(y,G),x.viewport(re),x.scissor(Le),x.setScissorTest(Pe),W){let be=H.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,j)}else if(ye){let be=O;for(let Ce=0;Ce<y.textures.length;Ce++){let Ie=H.get(y.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,j,be)}}else if(y!==null&&j!==0){let be=H.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,j)}ee=-1};function id(y){let O=H.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=A.textureFormatReadable(y.format),O.__typeReadable=A.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,j,G,W,ye,we,be=0){if(!(y&&y.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){x.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Ie=y.textures[be],Xe=Ie.format,Ze=Ie.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Re=id(Ie);if(Re.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-G&&j>=0&&j<=y.height-W&&B.readPixels(O,j,G,W,he.convert(Xe),he.convert(Ze),ye)}finally{let Ie=oe!==null?H.get(oe).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,O,j,G,W,ye,we,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(O>=0&&O<=y.width-G&&j>=0&&j<=y.height-W){x.bindFramebuffer(B.FRAMEBUFFER,Ce);let Ie=y.textures[be],Xe=Ie.format,Ze=Ie.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Re=id(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(O,j,G,W,he.convert(Xe),he.convert(Ze),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Lt=oe!==null?H.get(oe).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Lt);let yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await bf(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ht),B.deleteSync(yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,j=0){let G=Math.pow(2,-j),W=Math.floor(y.image.width*G),ye=Math.floor(y.image.height*G),we=O!==null?O.x:0,be=O!==null?O.y:0;K.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,we,be,W,ye),x.unbindTexture()},this.copyTextureToTexture=function(y,O,j=null,G=null,W=0,ye=0){let we,be,Ce,Ie,Xe,Ze,Re,ht,Lt,yt=y.isCompressedTexture?y.mipmaps[ye]:y.image;if(j!==null)we=j.max.x-j.min.x,be=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Ie=j.min.x,Xe=j.min.y,Ze=j.isBox3?j.min.z:0;else{let Rt=Math.pow(2,-W);we=Math.floor(yt.width*Rt),be=Math.floor(yt.height*Rt),y.isDataArrayTexture?Ce=yt.depth:y.isData3DTexture?Ce=Math.floor(yt.depth*Rt):Ce=1,Ie=0,Xe=0,Ze=0}G!==null?(Re=G.x,ht=G.y,Lt=G.z):(Re=0,ht=0,Lt=0);let gt=he.convert(O.format),Kt=he.convert(O.type),Te;O.isData3DTexture?(K.setTexture3D(O,0),Te=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Te=B.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Te=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let on=x.getParameter(B.UNPACK_ROW_LENGTH),ot=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(B.UNPACK_SKIP_PIXELS),Zn=x.getParameter(B.UNPACK_SKIP_ROWS),Li=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),x.pixelStorei(B.UNPACK_SKIP_ROWS,Xe),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);let Wa=y.isDataArrayTexture||y.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let Rt=H.get(y),Ni=H.get(O),vt=H.get(Rt.__renderTarget),Di=H.get(Ni.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,vt.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Xa=0;Xa<Ce;Xa++)Wa&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(y).__webglTexture,W,Ze+Xa),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(O).__webglTexture,ye,Lt+Xa)),B.blitFramebuffer(Ie,Xe,we,be,Re,ht,we,be,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||H.has(y)){let Rt=H.get(y),Ni=H.get(O);x.bindFramebuffer(B.READ_FRAMEBUFFER,F),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,X);for(let vt=0;vt<Ce;vt++)Wa?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,W,Ze+vt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,W),pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ni.__webglTexture,ye,Lt+vt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ni.__webglTexture,ye),W!==0?B.blitFramebuffer(Ie,Xe,we,be,Re,ht,we,be,B.COLOR_BUFFER_BIT,B.NEAREST):pt?B.copyTexSubImage3D(Te,ye,Re,ht,Lt+vt,Ie,Xe,we,be):B.copyTexSubImage2D(Te,ye,Re,ht,Ie,Xe,we,be);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(Te,ye,Re,ht,Lt,we,be,Ce,gt,Kt,yt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,ye,Re,ht,Lt,we,be,Ce,gt,yt.data):B.texSubImage3D(Te,ye,Re,ht,Lt,we,be,Ce,gt,Kt,yt):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,Re,ht,we,be,gt,Kt,yt.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,Re,ht,yt.width,yt.height,gt,yt.data):B.texSubImage2D(B.TEXTURE_2D,ye,Re,ht,we,be,gt,Kt,yt);x.pixelStorei(B.UNPACK_ROW_LENGTH,on),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(B.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),ye===0&&O.generateMipmaps&&B.generateMipmap(Te),x.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){Z=0,$=0,oe=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},f2=new Yi(-1,1,1,-1,0,1),hh=class extends Dt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},p2=new hh,ta=class{constructor(e){this._mesh=new De(p2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var pc=class extends _n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vn.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ta(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gr=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}},mc=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ge);this._width=i.width,this._height=i.height,t=new At(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pc(Cs),this.copyPass.material.blending=En,this.timer=new Sr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let a=0,s=this.passes.length;a<s;a++){let r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(r instanceof Gr?i=!0:r instanceof mc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xc=class extends _n{constructor(e,t,i=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,i){let a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}};var ip={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Rs=class n extends _n{constructor(e,t=1,i,a){super(),this.strength=t,this.radius=i,this.threshold=a,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new At(s,r,{type:qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new At(s,r,{type:qt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new At(s,r,{type:qt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),r=Math.round(r/2)}let o=ip;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ge(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vn.clone(Cs.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:Cs.vertexShader,fragmentShader:Cs.fragmentShader,premultipliedAlpha:!0,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new nn,this._fsQuad=new ta(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(i,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,a),this.renderTargetsVertical[s].setSize(i,a),this.separableBlurMaterials[s].uniforms.invSize.value=new ge(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,t,i,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let a=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;a.push((r*o+(r+1)*l)/c),s.push(c)}return new wt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:a},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Rs.BlurDirectionX=new ge(1,0);Rs.BlurDirectionY=new ge(0,1);var Wr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _c=class extends _n{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vn.clone(Wr.uniforms),this.material=new xs({name:Wr.name,uniforms:this.uniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this._fsQuad=new ta(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ar?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===La?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xr=class n extends De{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,a=t.color!==void 0?new Ne(t.color):new Ne(8355711),s=t.textureWidth||512,r=t.textureHeight||512,o=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new mn,d=new D,h=new D,f=new D,m=new mt,v=new D(0,0,-1),g=new xt,p=new D,w=new D,C=new xt,b=new mt,M=new At(s,r,{samples:c,type:qt}),E=new wt({name:l.name!==void 0?l.name:"unspecified",uniforms:Vn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=a,E.uniforms.textureMatrix.value=b,this.material=E,this.onBeforeRender=function(S,_,T){let R=this.getReflectionCamera(T);if(h.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(T.matrixWorld),m.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),p.subVectors(h,f),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(h),m.extractRotation(T.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(f),w.subVectors(h,v),w.reflect(d).negate(),w.add(h),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(m),R.up.reflect(d),R.lookAt(w),R.far=T.far,R.updateMatrixWorld(),R.projectionMatrix.copy(T.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(R.projectionMatrix),b.multiply(R.matrixWorldInverse),b.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(R.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=R.projectionMatrix;R.isOrthographicCamera?(C.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],C.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],C.z=-T.far,C.w=1):(C.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],C.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],C.z=-1,C.w=(1+N.elements[10])/N.elements[14]),g.multiplyScalar(2/g.dot(C)),N.elements[2]=g.x,N.elements[6]=g.y,R.isOrthographicCamera?(N.elements[10]=g.z-o,N.elements[14]=g.w-1):(N.elements[10]=g.z+1-o,N.elements[14]=g.w),i.visible=!1;let k=S.getRenderTarget(),F=S.xr.enabled,X=S.shadowMap.autoUpdate;S.xr.enabled=!1,S.shadowMap.autoUpdate=!1,S.setRenderTarget(M),S.state.buffers.depth.setMask(!0),S.autoClear===!1&&S.clear(),S.render(_,R),S.xr.enabled=F,S.shadowMap.autoUpdate=X,S.setRenderTarget(k);let Z=T.viewport;Z!==void 0&&S.state.viewport(Z),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()},this.getReflectionCamera=function(S){let _=this._reflectionCameras.get(S);return _===void 0&&(_=S.clone(),this._reflectionCameras.set(S,_)),_}}};Xr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var vc=class extends Ra{constructor(e){super(e)}load(e,t,i,a){let s=this,r=new _r(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){let l=s.parse(JSON.parse(o));t&&t(l)},i,a)}parse(e){return new dh(e)}},dh=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let a=[],s=m2(e,t,this.data,i);for(let r=0,o=s.length;r<o;r++)a.push(...s[r].toShapes());return a}};function m2(n,e,t,i){let a=Array.from(n),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&a.reverse();for(let u=0;u<a.length;u++){let d=a[u];if(d===`
`)l=0,c-=r;else{let h=g2(d,s,l,c,t);i=="tb"?(l=0,c+=t.ascender*s):l+=h.offsetX,o.push(h.path)}}return o}function g2(n,e,t,i,a){let s=a.glyphs[n]||a.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+a.familyName+".");return}let r=new Er,o,l,c,u,d,h,f,m;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=v.length;g<p;)switch(v[g++]){case"m":o=v[g++]*e+t,l=v[g++]*e+i,r.moveTo(o,l);break;case"l":o=v[g++]*e+t,l=v[g++]*e+i,r.lineTo(o,l);break;case"q":c=v[g++]*e+t,u=v[g++]*e+i,d=v[g++]*e+t,h=v[g++]*e+i,r.quadraticCurveTo(d,h,c,u);break;case"b":c=v[g++]*e+t,u=v[g++]*e+i,d=v[g++]*e+t,h=v[g++]*e+i,f=v[g++]*e+t,m=v[g++]*e+i,r.bezierCurveTo(d,h,f,m,c,u);break}}return{offsetX:s.ha*e,path:r}}var ap={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var Yy=new vc().parse(ap),Jy="ABCDEFGHIJLMN\xD1OPQRSTUVXYZ".split("");function Gt(n,e={}){return new Fn({color:n,roughness:.45,metalness:.1,...e})}function na(n,e=1.5,t={}){return new Fn({color:0,emissive:n,emissiveIntensity:e,roughness:.6,...t})}function qa({body:n=3364266,legs:e=2236979,skin:t=13148282,hair:i=2759184,seated:a=!1,scale:s=1}={}){let r=new tn,o=Gt(n,{roughness:.7}),l=Gt(e,{roughness:.8}),c=Gt(t,{roughness:.8}),u=Gt(i,{roughness:.9}),d=new De(new Ea(.2,.45,4,12),o);d.scale.set(1.05,1,.7);let h=new De(new gs(.13,16,12),c),f=new De(new gs(.138,16,12,0,Math.PI*2,0,Math.PI*.55),u);f.rotation.x=-.35;let m=new Ea(.06,.45,3,8),v=new De(m,o),g=new De(m,o),p=new Ea(.08,.6,3,8),w=new De(p,l),C=new De(p,l);return a?(w.position.set(-.1,.05,.25),C.position.set(.1,.05,.25),w.rotation.x=C.rotation.x=Math.PI/2,d.position.y=.4,h.position.y=.86,f.position.y=.88,v.position.set(-.28,.42,.15),g.position.set(.28,.42,.15),v.rotation.x=g.rotation.x=-.9):(w.position.set(-.1,.4,0),C.position.set(.1,.4,0),d.position.y=1.05,h.position.y=1.5,f.position.y=1.52,v.position.set(-.28,1.05,0),g.position.set(.28,1.05,0),v.rotation.z=.12,g.rotation.z=-.12),r.add(d,h,f,v,g,w,C),r.scale.setScalar(s),r.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),r}function ia(n,e,t,i,a=0,s={}){let r=i*.36;n.save(),n.shadowColor="#ff4fd8",n.shadowBlur=r*.35;let o=n.createRadialGradient(e-r*.3,t-r*.35,r*.1,e,t,r);o.addColorStop(0,s.c1||"#ff8ad8"),o.addColorStop(.55,s.c2||"#ff3fb4"),o.addColorStop(1,s.c3||"#d0168a"),n.fillStyle=o,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.lineWidth=r*.09,n.strokeStyle="#2a7bff",n.beginPath(),n.arc(e,t,r*.97,0,Math.PI*2),n.stroke(),n.lineWidth=r*.035,n.strokeStyle="#bff0ff",n.beginPath(),n.arc(e,t,r*1.04,0,Math.PI*2),n.stroke(),n.save(),n.globalAlpha=.25,n.strokeStyle="#fff",n.lineWidth=r*.05,n.beginPath(),n.arc(e,t,r*.8,a*.8,a*.8+1.1),n.stroke(),n.restore();let l=s.texto||"25";n.font=`900 ${r*1.15}px "Arial Black", Arial`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=r*.16,n.strokeStyle="#123cc8",n.strokeText(l,e,t-r*.12),n.lineWidth=r*.05,n.strokeStyle="#9fe8ff",n.strokeText(l,e,t-r*.12),n.fillStyle="#ffffff",n.fillText(l,e,t-r*.12);let c=s.sub||"palabras";n.font=`italic 900 ${r*.36}px "Arial Black", Arial`,n.lineWidth=r*.09,n.strokeStyle="#123cc8",n.strokeText(c,e,t+r*.56),n.fillStyle="#ffffff",n.fillText(c,e,t+r*.56),n.restore()}var sp={led:"#2a6bff",led2:"#06164a",acento:"#ffb020",neon:14677247,banda:"#0a1a6a",fondo:132110},ph={azul:"#2a8bff",rosa:"#ff3fb4"};function Fa(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let a=i.getContext("2d");t(a,n,e);let s=new Ta(i);return s.colorSpace=Xt,s.anisotropy=4,s.userData={c:i,g:a},s}function fh(n,e,t,i,a=1){let s=a*77+3,r=()=>(s=(s*9301+49297)%233280)/233280,o=n.createLinearGradient(0,0,0,t);o.addColorStop(0,i.led2),o.addColorStop(.5,"#0a2a9a"),o.addColorStop(1,i.led2),n.fillStyle=o,n.fillRect(0,0,e,t);for(let l=0;l<e;l+=18+r()*22){let c=4+r()*12,u=r()*t*.35,d=t-r()*t*.3,f=r()<.12?i.acento:r()<.3?"#e8f6ff":r()<.5?"#5fd8ff":i.led;n.shadowColor=f,n.shadowBlur=14,n.fillStyle=f,n.globalAlpha=.55+r()*.45,n.fillRect(l,u,c,d-u)}n.globalAlpha=1,n.shadowBlur=0,[.62,.66,.9].forEach((l,c)=>{n.shadowColor="#5fd8ff",n.shadowBlur=20,n.fillStyle=c===2?i.acento:"#9fe8ff",n.fillRect(0,t*l,e,c===2?6:4)}),n.shadowBlur=0}function _2(){return Fa(2048,2048,(n,e,t)=>{n.fillStyle="#04050a",n.fillRect(0,0,e,t),n.save(),n.globalAlpha=.85,[[600,10,"#5fd8ff"],[540,4,"#c0f0ff"],[930,6,"#2a6bff"]].forEach(([i,a,s])=>{n.strokeStyle=s,n.lineWidth=a,n.shadowColor=s,n.shadowBlur=30,n.beginPath(),n.arc(e/2,t/2,i,0,Math.PI*2),n.stroke()}),n.restore(),n.save(),n.globalAlpha=.9,n.font='900 620px "Arial Black", Arial',n.textAlign="center",n.textBaseline="middle",n.lineWidth=26,n.strokeStyle="#5fd8ff",n.shadowColor="#2a8bff",n.shadowBlur=40,n.strokeText("25",e/2,t/2+10),n.fillStyle="rgba(30,80,200,0.35)",n.fillText("25",e/2,t/2+10),n.restore(),n.save(),n.translate(e/2,t/2),n.strokeStyle="rgba(95,216,255,0.18)",n.lineWidth=6;for(let i=0;i<12;i++)n.rotate(Math.PI/6),n.beginPath(),n.moveTo(980,0),n.lineTo(1400,0),n.stroke();n.restore()})}function rp(n,e,t){let i=new tn;n.add(i);let a={...sp};n.background=new Ne(a.fondo),n.fog=new tr(a.fondo,34,90);let s=new vr(10467583,1052720,.85);i.add(s);let r=new Mr(16777215,1.3);r.position.set(3,14,12),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:40}),i.add(r);let o=new Pa(3836927,40,30,1.5);o.position.set(-8,6,-4),i.add(o);let l=new Pa(6281471,34,30,1.5);l.position.set(8,6,-4),i.add(l);let c=new Pa(16760928,18,20,1.8);c.position.set(0,5,4),i.add(c);let u=null,d=new Xr(new wa(30,64),{textureWidth:1024,textureHeight:1024,color:6975616});d.rotation.x=-Math.PI/2,d.position.y=0,i.add(d),u=d;let h=_2(),f=new Fn({map:h,transparent:!0,opacity:.7,roughness:.25,metalness:.2,emissive:16777215,emissiveMap:h,emissiveIntensity:.55}),m=new De(new qn(12.5,12.6,.18,96),[Gt(15267071,{emissive:10475775,emissiveIntensity:.9}),f,Gt(329228)]);m.position.set(0,.09,-2),m.receiveShadow=!0,i.add(m);let v=new De(new Wi(12.55,.05,6,160),na(15268095,2.5));v.rotation.x=Math.PI/2,v.position.set(0,.18,-2),i.add(v);let g=[],p=(I,P,q,V,ne,le,pe,L)=>{let ue=Fa(2048,512,(se,Ae,Ee)=>fh(se,Ae,Ee,a,L));ue.wrapS=Vi;let Y=new nn({map:ue,side:Ht,toneMapped:!1,color:12570623}),he=new qn(I,I,q,72,1,!0,V,ne-V),me=new De(he,Y);return me.position.set(le,P+q/2,pe),i.add(me),g.push({m:Y,tex:ue,seed:L}),me};p(17,0,7.2,Math.PI*.42,Math.PI*1.58,0,0,1),p(17.6,7.2,1.2,Math.PI*.42,Math.PI*1.58,0,0,2);let w=Fa(4096,160,()=>{});w.wrapS=Vi,w.repeat.x=-1;let C=new nn({map:w,side:Ht,toneMapped:!1}),b=new De(new qn(16.2,16.2,1.25,96,1,!0,Math.PI*.45,Math.PI*1.1),C);b.position.set(0,8.3,0),i.add(b);let M="25 palabras";function E(){let{g:I}=w.userData,P=4096,q=160;I.clearRect(0,0,P,q);let V=I.createLinearGradient(0,0,0,q);V.addColorStop(0,"#1a0a3a"),V.addColorStop(.5,a.banda),V.addColorStop(1,"#1a0a3a"),I.fillStyle=V,I.fillRect(0,0,P,q),I.fillStyle="#ff2a6a",I.shadowColor="#ff2a6a",I.shadowBlur=16,I.fillRect(0,4,P,10),I.fillRect(0,q-14,P,10),I.shadowBlur=0,I.font='italic 900 86px "Arial Black", Arial',I.textBaseline="middle",I.textAlign="center",I.fillStyle="#ffffff",I.shadowColor="#9fe8ff",I.shadowBlur=12;let ne=5;for(let le=0;le<ne;le++)I.fillText(M,P*(le+.5)/ne,q/2+4);I.shadowBlur=0,w.needsUpdate=!0}E();for(let I of[-1,1]){let P=Fa(512,512,(V,ne,le)=>fh(V,ne,le,a,I+5)),q=new De(new Gi(4,7),new nn({map:P,toneMapped:!1,color:12570623}));q.position.set(I*15.6,3.5,6),q.rotation.y=-I*Math.PI/2,i.add(q),g.push({m:q.material,tex:P,seed:I+5,plano:!0})}let S=8.4,_=4.8,T=document.createElement("canvas");T.width=1400,T.height=800;let R=T.getContext("2d"),U=new Ta(T);U.colorSpace=Xt,U.anisotropy=4;let N=new tn;N.position.set(0,0,-13.2),i.add(N);let k=new De(new Pt(S+.4,_+.4,.3),Gt(659504,{metalness:.6,roughness:.4}));k.position.y=1.2+_/2,N.add(k);let F=new De(new Gi(S,_),new nn({map:U,toneMapped:!1}));F.position.set(0,1.2+_/2,.16),N.add(F);let X=new De(new Pt(S+.6,.06,.06),na(10479871,3));X.position.set(0,1,.2),N.add(X);let Z=X.clone();Z.position.y=1.4+_+.05,N.add(Z);let $={modo:"logo",datos:{},sucio:!0};function oe(I,P,q,V){let ne=I.createLinearGradient(0,0,0,q);ne.addColorStop(0,"#06104a"),ne.addColorStop(1,"#1a4ad0"),I.fillStyle=ne,I.fillRect(0,0,P,q),I.save(),I.globalAlpha=.25;for(let le=0;le<P;le+=46)I.fillStyle=(le/46|0)%3?"#5fd8ff":"#ffffff",I.fillRect(le+Math.sin(V+le)*3,0,8,q);I.restore()}function ee(I,P,q,V,ne,le){let pe=String(P).split(" "),L=[],ue="";for(let Y of pe){let he=ue?ue+" "+Y:Y;I.measureText(he).width>ne&&ue?(L.push(ue),ue=Y):ue=he}L.push(ue),L.forEach((Y,he)=>I.fillText(Y,q,V+(he-(L.length-1)/2)*le))}function ae(I){let P=R,q=T.width,V=T.height,ne=$.datos;if(oe(P,q,V,I),$.modo==="info"&&ne.title){P.fillStyle="rgba(6,16,70,0.85)",P.fillRect(70,60,q-140,V-120),P.strokeStyle="#ff3fb4",P.lineWidth=8,P.strokeRect(70,60,q-140,V-120),P.fillStyle="#ffe066";let le=70;for(P.font=`900 ${le}px "Arial Black", Arial`;P.measureText(String(ne.title)).width>q-200&&le>30;)le-=4,P.font=`900 ${le}px "Arial Black", Arial`;P.textAlign="center",P.textBaseline="top",P.fillText(String(ne.title),q/2,90),P.font="bold 42px Arial",P.textBaseline="middle",(ne.rows||[]).slice(0,6).forEach(([pe,L],ue)=>{P.textAlign="right",P.fillStyle="#9fd8ff",P.fillText(pe,q*.4-20,250+ue*76,q*.4-100),P.textAlign="left",P.fillStyle="#fff",P.fillText(L,q*.4+20,250+ue*76,q*.6-110)})}else if($.modo==="piramide"){P.textAlign="center",P.textBaseline="middle",P.fillStyle="#ffe066",P.font='900 64px "Arial Black", Arial',P.fillText(String(ne.tema||"").toUpperCase(),q/2,70);let le=5;for(let pe=0;pe<le;pe++){let L=360+pe*200,ue=160+pe*120,Y=(q-L)/2,he=pe<(ne.pistas||[]).length;P.fillStyle=he?"#ff3fb4":"#0a1a5a",P.strokeStyle="#9fe8ff",P.lineWidth=5,P.beginPath(),P.roundRect(Y,ue,L,100,30),P.fill(),P.stroke(),P.fillStyle="#fff",P.font="900 50px Arial",P.fillText(he?String(ne.pistas[pe]).toUpperCase():String([25,20,15,10,5][pe]),q/2,ue+52)}}else if($.modo==="texto")P.textAlign="center",P.textBaseline="middle",P.fillStyle="#ffe066",P.font='900 56px "Arial Black", Arial',P.fillText(String(ne.titulo||"").toUpperCase(),q/2,110),P.fillStyle="#fff",P.font='900 120px "Arial Black", Arial',ee(P,ne.texto||"",q/2,V/2+40,q-120,130);else if($.modo==="video"){P.fillStyle="#101820",P.fillRect(100,60,q-200,V-120);let le=P.createRadialGradient(q/2,V/2,40,q/2,V/2,500);le.addColorStop(0,"#3a5a7a"),le.addColorStop(1,"#101820"),P.fillStyle=le,P.fillRect(100,60,q-200,V-120);let pe=Math.sin(I*2)*6;P.fillStyle="#c8e0ff",P.fillRect(q*.62,120,260,300),P.fillStyle="#7a5a3a",P.fillRect(q*.62,420,260,40),P.fillStyle="#2a8bff",P.beginPath(),P.ellipse(q/2,V-60+pe,230,170,0,Math.PI,0),P.fill(),P.fillStyle="#e0b898",P.beginPath(),P.arc(q/2,V/2-20+pe,110,0,7),P.fill(),P.fillStyle="#3a2a1a",P.beginPath(),P.arc(q/2,V/2-60+pe,112,Math.PI*1.05,Math.PI*1.95),P.fill(),P.fillStyle="#1a1a2a",P.beginPath(),P.arc(q/2-38,V/2-25+pe,11,0,7),P.arc(q/2+38,V/2-25+pe,11,0,7),P.fill(),P.strokeStyle="#8a3a2a",P.lineWidth=7,P.beginPath(),P.arc(q/2,V/2+15+pe,38,.2,Math.PI-.2),P.stroke(),P.fillStyle="#ff2a2a",P.beginPath(),P.arc(150,110,16,0,7),P.fill(),P.fillStyle="#fff",P.font="bold 40px Arial",P.textAlign="left",P.fillText("EN DIRECTO \xB7 VIDEOLLAMADA",180,112),P.textAlign="center",P.font="900 54px Arial",P.fillText(ne.nombre||"El intruso",q/2,V-110)}else if($.modo==="bote"){if(e.logoPantalla&&e.logoPantalla.naturalWidth){let le=e.logoPantalla,pe=Math.min(300/le.naturalWidth,300/le.naturalHeight);P.drawImage(le,q/2-le.naturalWidth*pe/2,30,le.naturalWidth*pe,le.naturalHeight*pe)}else ia(P,q/2,190,420,I);P.textAlign="center",P.textBaseline="middle",P.font='900 150px "Arial Black", Arial',P.lineWidth=14,P.strokeStyle="#123cc8",P.strokeText(ne.texto||"",q/2,560),P.fillStyle="#fff",P.fillText(ne.texto||"",q/2,560)}else{if(e.logoPantalla&&e.logoPantalla.complete&&e.logoPantalla.naturalWidth){let le=e.logoPantalla,pe=Math.min(q*.7/le.naturalWidth,V*.8/le.naturalHeight);P.drawImage(le,(q-le.naturalWidth*pe)/2,(V-le.naturalHeight*pe)/2,le.naturalWidth*pe,le.naturalHeight*pe)}else ia(P,q*.5,V*.48,q*.62,I,e.logoOpts||{});e.banner&&(P.font="900 50px Arial",P.textAlign="center",P.fillStyle="#fff",P.strokeStyle="#123cc8",P.lineWidth=8,P.strokeText(e.banner,q/2,V-50),P.fillText(e.banner,q/2,V-50))}U.needsUpdate=!0}let re=Fa(1024,1024,(I,P)=>ia(I,P/2,P/2,P*1.25)),Le=new De(new wa(2.3,64),new nn({map:re,transparent:!0,toneMapped:!1}));Le.position.set(-11.6,4.4,-9.4),Le.lookAt(0,4.4,2),i.add(Le);let Pe=Le.clone();Pe.position.set(11.6,4.4,-9.4),Pe.lookAt(0,4.4,2),i.add(Pe);function ft(){let{g:I}=re.userData;if(I.clearRect(0,0,1024,1024),e.logoPantalla&&e.logoPantalla.naturalWidth){let P=e.logoPantalla,q=Math.min(900/P.naturalWidth,900/P.naturalHeight);I.drawImage(P,512-P.naturalWidth*q/2,512-P.naturalHeight*q/2,P.naturalWidth*q,P.naturalHeight*q)}else ia(I,512,512,1280);re.needsUpdate=!0}let Ye=[];[[4.2,11.2,.35],[3,10.4,-.25],[5.4,12,.15]].forEach(([I,P,q],V)=>{let ne=new De(new Wi(I,.09,10,120),na(a.neon,3.2));ne.position.set(-.5+V*.5,P,-3),ne.rotation.x=Math.PI/2+q,ne.rotation.y=q*.6,i.add(ne);let le=new De(new Wi(I,.28,8,120),new nn({color:6273279,transparent:!0,opacity:.18,blending:bi,depthWrite:!1}));ne.add(le),Ye.push({a:ne,inc:q,fase:V*1.7})});for(let I=0;I<3;I++){let P=new De(new qn(.015,.015,4,4),Gt(6711927));P.position.set(-3+I*3,13.5,-3),i.add(P)}let it=Gt(5922928,{metalness:.8,roughness:.3});for(let I=0;I<3;I++){let P=new De(new Pt(32,.3,.3),it);P.position.set(0,14.5,-9+I*7),i.add(P)}let J=new tn;J.position.set(0,.18,-5.6),i.add(J);let ie=Fa(256,512,(I,P,q)=>{I.fillStyle="#f6f8fc",I.fillRect(0,0,P,q),I.fillStyle="#ff3fb4",I.fillRect(0,q-30,P,12),ia(I,P/2,q*.42,300)}),Se=new De(new Pt(1.5,1.2,.7),[Gt(15922424),Gt(15922424),Gt(16777215),Gt(15922424),new Fn({map:ie,roughness:.35}),Gt(15922424)]);Se.position.y=.6,Se.castShadow=!0,J.add(Se);let Oe=new De(new Pt(1.7,.08,.9),Gt(16777215,{roughness:.15}));Oe.position.y=1.24,J.add(Oe);let Me=new De(new Pt(.5,.03,.35),na(6281471,1.2));Me.position.set(.3,1.3,0),Me.rotation.x=-.3,J.add(Me);let Ge=new De(new Pt(1.52,.05,.05),na(16727988,2.5));Ge.position.set(0,.06,.36),J.add(Ge);let St=qa({body:15227530,legs:1711923,skin:14266508,hair:2759184});St.position.set(0,.18,-6.3),i.add(St);let We=Fa(512,256,(I,P,q)=>{I.fillStyle="#ffc61a",I.fillRect(0,0,P,q),I.strokeStyle="#d99a00",I.lineWidth=3;for(let V=-q;V<P+q;V+=48)I.beginPath(),I.moveTo(V,0),I.lineTo(V+q,q),I.stroke(),I.beginPath(),I.moveTo(V+q,0),I.lineTo(V,q),I.stroke();I.fillStyle="#a87000";for(let V=0;V<=q;V+=48)for(let ne=V/48%2*24;ne<=P;ne+=48)I.beginPath(),I.arc(ne,V,5,0,7),I.fill()});We.wrapS=We.wrapT=Vi;let et=new Fn({color:16777215,map:We,roughness:.65}),ut=new Fn({color:16762394,roughness:.6}),He=[],tt=[],Ut=[];function Wt(I,P,q,V){let ne=new tn;ne.position.set(I,.18,P),ne.rotation.y=q,i.add(ne);let le=new De(new Pt(3.6,.45,1.1),et);le.position.set(0,.32,0),ne.add(le);let pe=new De(new Pt(3.4,.16,1),ut);pe.position.set(0,.62,.04),ne.add(pe);let L=new De(new Pt(3.6,.95,.35),et);L.position.set(0,.95,-.45),ne.add(L);let ue=new De(new qn(.2,.2,3.6,16),ut);ue.rotation.z=Math.PI/2,ue.position.set(0,1.42,-.45),ne.add(ue);for(let st of[-1,1]){let rt=new De(new Pt(.35,.6,1.1),et);rt.position.set(st*1.85,.6,0),ne.add(rt);let rn=new De(new qn(.2,.2,1.1,16),ut);rn.rotation.x=Math.PI/2,rn.position.set(st*1.85,.92,0),ne.add(rn)}ne.traverse(st=>{st.isMesh&&(st.castShadow=!0,st.receiveShadow=!0)});let Y=V===0?[[2780159,2241365],[16777215,3355460],[10107647,2105380]]:[[16727988,2241365],[3393658,2105380],[16765466,3359863]],he=[14266508,13148282,14727320],me=qa({body:Y[0][0],legs:Y[0][1],skin:he[V],hair:2759184});me.position.set(0,0,1.25),ne.add(me);let se=qa({body:Y[1][0],legs:Y[1][1],skin:he[(V+1)%3],hair:5913120,seated:!0});se.position.set(-.9,.62,.05),ne.add(se);let Ae=qa({body:Y[2][0],legs:Y[2][1],skin:he[(V+2)%3],hair:1052688,seated:!0});Ae.position.set(.9,.62,.05),ne.add(Ae);let Ee=new De(new Pt(3.6,.05,.05),na(V===0?2788351:16727988,3));Ee.position.set(0,.06,.58),ne.add(Ee),He.push({g:ne,tira:Ee}),tt.push(me,se,Ae)}Wt(-6.2,-5.2,.55,0),Wt(6.2,-5.2,-.55,1);let _t=[],Tt=new cr(1.2,13,24,1,!0);Tt.translate(0,-6.5,0);for(let I=0;I<10;I++){let P=new tn;P.position.set(-13+I*2.9,14,-9+I%3*5),i.add(P);let q=new De(new Pt(.5,.4,.5),Gt(2236968));P.add(q);let V=new De(Tt,new nn({color:I%3?6281471:16777215,transparent:!0,opacity:.05,blending:bi,depthWrite:!1,side:Tn}));P.add(V),_t.push({piv:P,cone:V,fase:I*.8})}let B=[];for(let I=0;I<6;I++){let P=new De(new wa(1.1,32),new nn({color:I%2?6281471:16777215,transparent:!0,opacity:.25,blending:bi,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=.2,i.add(P),B.push({m:P,fase:I*1.3})}let Ct=new tn;Ct.userData.publico=!0,i.add(Ct);for(let I=0;I<3;I++){let P=new De(new Pt(18,.5*(1+I),1.2),Gt(1053738));P.position.set(0,.25*(1+I),13.5+I*1.2),Ct.add(P);for(let q=0;q<13;q++){let V=qa({body:[16734874,5933823,16765773,9109386,16777215][(q+I)%5],seated:!0,scale:.9});V.position.set(-7.2+q*1.2+I%2*.4,.5*(1+I),13.5+I*1.2),V.rotation.y=Math.PI,Ct.add(V)}}let at=qa({body:16727988,legs:2241365});at.visible=!1,i.add(at);let A=new De(new Wi(.55,.06,8,36),na(3407752,3));A.rotation.x=Math.PI/2,A.visible=!1,i.add(A);let x=I=>{let P=new D;return tt[I].getWorldPosition(P),P};function z(I,P){if(Math.hypot(I,P)>15.5||P<-12.5||P>12.5||Math.abs(I)<1&&Math.abs(P+5.6)<.6)return!0;for(let q of He){let V=new D(I,0,P);if(q.g.worldToLocal(V),Math.abs(V.x)<2.1&&V.z>-.8&&V.z<.7)return!0}return!1}let H=null;function K(){H&&i.remove(H);let I=450,P=new Dt,q=new Float32Array(I*3),V=new Float32Array(I*3),ne=[],le=[new Ne(16727988),new Ne(6281471),new Ne(16765466),new Ne(16777215)];for(let pe=0;pe<I;pe++){q.set([(Math.random()-.5)*22,12+Math.random()*6,(Math.random()-.5)*16-2],pe*3);let L=le[pe%4];V.set([L.r,L.g,L.b],pe*3),ne.push(1+Math.random()*2)}P.setAttribute("position",new ln(q,3)),P.setAttribute("color",new ln(V,3)),H=new rr(P,new fs({size:.15,vertexColors:!0})),H.userData={vel:ne,t:0},i.add(H)}function de(I){a={...sp,...I||{}},n.background.set(a.fondo),n.fog.color.set(a.fondo),g.forEach(P=>{let{g:q,c:V}=P.tex.userData;fh(q,V.width,V.height,a,P.seed),P.tex.needsUpdate=!0}),Ye.forEach(P=>{P.a.material.emissive.set(a.neon)}),E(),$.sucio=!0}let fe=new Map,Q=0;function te(I,P){Q+=P,($.sucio||Q>.15)&&(ae(I),$.sucio=!1,Q=0),_t.forEach(q=>{q.piv.rotation.z=Math.sin(I*.7+q.fase)*.5,q.piv.rotation.x=Math.cos(I*.5+q.fase*1.3)*.4}),B.forEach(q=>q.m.position.set(Math.sin(I*.4+q.fase)*8,.2,Math.cos(I*.33+q.fase*2)*6-1)),Ye.forEach(q=>{q.a.rotation.z=I*.15+q.fase,q.a.position.y+=Math.sin(I*.8+q.fase)*.002}),g.forEach((q,V)=>{q.plano||(q.tex.offset.x=I*.004*(V%2?1:-1)%1)}),w.offset.x=I*.01%1,St.rotation.y=Math.sin(I*.6)*.35;for(let[q,V]of fe){V.t+=P;let ne=tt[q];ne.position.y=V.y0+Math.abs(Math.sin(V.t*9))*.25,V.t>1.2&&(ne.position.y=V.y0,fe.delete(q))}if(H){let q=H.geometry.attributes.position;H.userData.t+=P;for(let V=0;V<q.count;V++)q.setX(V,q.getX(V)+Math.sin(I*3+V)*P*.5),q.setY(V,q.getY(V)-H.userData.vel[V]*P);q.needsUpdate=!0,H.userData.t>9&&(i.remove(H),H=null)}}return de(null),{root:i,update:te,setTema:de,celebrar:K,presentador:St,figs:tt,sofas:He,walker:at,marca:A,posFig:x,bloqueado:z,pantallaObj:N,reflector:u,pantalla(I,P={}){$.modo=I,$.datos=P,$.sucio=!0},banda(I){M=I||"25 palabras",E()},refrescarPantalla(){$.sucio=!0,ft()},luzEquipo(I,P){let q=He[I];q&&(q.tira.material.emissiveIntensity=P?6:3)},salta(I){tt[I]&&!fe.has(I)&&fe.set(I,{t:0,y0:tt[I].position.y})},ocultarFig(I,P){tt[I]&&(tt[I].visible=!P)},setReflejo(I){d.visible=I,m.material[1].opacity=I?.7:1},reset(){tt.forEach(I=>{I.visible=!0}),fe.clear(),$.modo="logo",$.sucio=!0,M="25 palabras",E(),He.forEach(I=>I.tira.material.emissiveIntensity=3)}}}var kn=(n,e,t,i,a,s)=>({led:n,led2:e,acento:t,neon:i,banda:a,fondo:s}),vn={normal:{name:"Normal",emoji:"\u{1F524}",paleta:null,hashtag:"#25palabras"},prime:{name:"Especial Prime Time",emoji:"\u{1F31F}",banner:"ESPECIAL PRIME TIME",hashtag:"#25palabrasPrime",festivo:!0,paleta:kn("#6a4cff","#1a0a5a","#ffd21a",16773808,"#3a1a8a",459791),saludo:"\xA1Bienvenidos a esta gala especial de 25 palabras en prime time, como aquella noche de enero de dos mil veintitr\xE9s!",extra:["Esta noche cada palabra brilla m\xE1s que nunca."]},halloween:{name:"Halloween",emoji:"\u{1F383}",banner:"ESPECIAL HALLOWEEN",hashtag:"#25palabrasHalloween",paleta:kn("#7a2aff","#1a0430","#ff7a00",16747050,"#3a0a5a",328200),saludo:"\xA1Muajaja! Bienvenidos al especial de Halloween. Hoy las pistas dan miedo: calabaza, fantasma, bruja\u2026"},ninos:{name:"Ni\xF1os",emoji:"\u{1F9F8}",banner:"ESPECIAL NI\xD1OS",hashtag:"#25palabrasNi\xF1os",festivo:!0,paleta:kn("#00b4ff","#004a8a","#ffd60a",16777215,"#ff5ca8",135194),saludo:"\xA1Hola, chicos y chicas! Bienvenidos al especial infantil. \xA1Hoy los que m\xE1s palabras saben son los peques!"},nochebuena:{name:"Nochebuena",emoji:"\u{1F56F}\uFE0F",banner:"ESPECIAL NOCHEBUENA",hashtag:"#25palabrasNochebuena",festivo:!0,paleta:kn("#1a7a3a","#021a08","#ffd21a",16773824,"#8a0010",133124),saludo:"\xA1Feliz Nochebuena! Hoy jugamos con turr\xF3n, villancicos y palabras muy navide\xF1as."},navidad:{name:"Navidad",emoji:"\u{1F384}",banner:"ESPECIAL NAVIDAD",hashtag:"#25palabrasNavidad",festivo:!0,paleta:kn("#1aa04a","#022a0a","#ff2a2a",16777215,"#0a6a2a",134150),saludo:"\xA1Feliz Navidad! Como cuando nos estrenamos, en diciembre: \xE1rbol, regalos y muchas palabras."},carnaval:{name:"Carnaval",emoji:"\u{1F3AD}",banner:"ESPECIAL CARNAVAL",hashtag:"#25palabrasCarnaval",festivo:!0,paleta:kn("#a040ff","#2a0450","#33e6ff",16732072,"#ff4fa8",655892),saludo:"\xA1Bienvenidos al especial de Carnaval! Disfraces, confeti y palabras con antifaz."},finano:{name:"Fin de A\xF1o",emoji:"\u{1F942}",banner:"ESPECIAL FIN DE A\xD1O",hashtag:"#25palabrasFinDeA\xF1o",festivo:!0,paleta:kn("#5a5aaa","#0a0a2a","#ffd21a",16770688,"#3a3a6a",197384),saludo:"\xA1\xDAltima noche del a\xF1o en 25 palabras! Doce uvas y veinticinco pistas."},verano:{name:"Verano",emoji:"\u{1F3D6}\uFE0F",banner:"ESPECIAL VERANO",hashtag:"#25palabrasVerano",paleta:kn("#00c8e0","#005a7a","#ffd166",16774064,"#ef476f",135192),saludo:"\xA1Bienvenidos al especial de verano! Playa, sombrilla, helado\u2026 \xA1ya sab\xE9is c\xF3mo va esto!"},sanvalentin:{name:"San Valent\xEDn",emoji:"\u{1F498}",banner:"ESPECIAL SAN VALENT\xCDN",hashtag:"#25palabrasSanValent\xEDn",paleta:kn("#ff4d8d","#4a0220","#ffccd5",16764117,"#c9184a",786948),saludo:"\xA1Feliz San Valent\xEDn! Hoy la palabra m\xE1s buscada es amor. Pero no la dig\xE1is, que es derivada de todo."},libro:{name:"D\xEDa del Libro",emoji:"\u{1F4DA}",banner:"ESPECIAL D\xCDA DEL LIBRO",hashtag:"#25palabrasD\xEDaDelLibro",festivo:!0,paleta:kn("#c08a3a","#3a2008","#fff2c0",16773824,"#8a3a1a",525570),saludo:"\xA1Feliz D\xEDa del Libro! Hoy rendimos homenaje a nuestra lengua, que para eso tenemos veinticinco palabras."},especial300:{name:"Especial 300 suscriptores",emoji:"\u{1F3C6}",banner:"ESPECIAL 300 SUSCRIPTORES",hashtag:"#25palabras300",festivo:!0,paleta:kn("#d0a020","#3a2a02","#fff6c0",16770688,"#b8860b",460034),saludo:"\xA1Bienvenidos a este 25 palabras tan especial! Est\xE1 dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB.",extra:["\xA1Ya sois trescientos! Para daros las gracias me sobran veinticuatro palabras: \xA1gracias!"]}};var gh="media",v2=["mp3","ogg","wav","m4a"],b2=["png","webp","jpg","jpeg","svg"];function y2(){return new Promise((n,e)=>{if(!("indexedDB"in window))return e(new Error("Sin IndexedDB"));let t=indexedDB.open("p25",1);t.onupgradeneeded=()=>t.result.createObjectStore(gh),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function mh(n,e){let t=await y2();return new Promise((i,a)=>{let s=t.transaction(gh,n),r=s.objectStore(gh),o=e(r);s.oncomplete=()=>i(o&&o.result),s.onerror=()=>a(s.error)})}var Hn={get:n=>mh("readonly",e=>e.get(n)).catch(()=>{}),put:(n,e)=>mh("readwrite",t=>t.put(e,n)),del:n=>mh("readwrite",e=>e.delete(n))};function M2(n){return new Promise(e=>{let t=new Audio,i=!1,a=s=>{i||(i=!0,e(s?n:null))};t.preload="metadata",t.onloadedmetadata=()=>a(!0),t.onerror=()=>a(!1),setTimeout(()=>a(!1),2500),t.src=n})}function S2(n){return new Promise(e=>{let t=new Image;t.onload=()=>e(n),t.onerror=()=>e(null),t.src=n,setTimeout(()=>e(null),2500)})}async function op(n,e,t){for(let i of e){let a=await t(`${n}.${i}`);if(a)return a}return null}var lp={};function yc(n){return lp["a:"+n]??=op(`audio/${n}`,v2,M2)}function T2(n){return lp["i:"+n]??=op(`logos/${n}`,b2,S2)}var bc={};async function E2(n){let e=await Hn.get(n);return!e||!e.blob?null:(bc[n]&&URL.revokeObjectURL(bc[n].url),bc[n]={url:URL.createObjectURL(e.blob),name:e.name},bc[n])}async function Oa(n,e){let t=await E2(`${n}:${e.id}`);if(t)return{url:t.url,origen:"subido",nombre:t.name};let i=n==="musica"?e.archivosMusica:e.archivosLogo;for(let a of i||[]){let s=n==="musica"?await yc(a):await T2(a);if(s)return{url:s,origen:"carpeta",nombre:s}}return null}async function xh(n,e,t){await Hn.put(`${n}:${e}`,{blob:t,name:t.name,type:t.type,fecha:Date.now()})}async function _h(n,e){await Hn.del(`${n}:${e}`)}var jr=null;function cp(){return jr||(jr=new(window.AudioContext||window.webkitAudioContext)),jr.state==="suspended"&&jr.resume(),jr}var nt={tone(n,e,t,i,a,s="sine",r=.2){let o=n.createOscillator(),l=n.createGain();o.type=s,o.frequency.setValueAtTime(i,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+a),o.connect(l).connect(e),o.start(t),o.stop(t+a+.05)},noiseBuffer(n,e=2){let t=n.createBuffer(1,n.sampleRate*e,n.sampleRate),i=t.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;return t},whoosh(n,e,t,i=.7,a=-1,s=1,r=.35){let o=n.createBufferSource();o.buffer=nt.noiseBuffer(n,i+.1);let l=n.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,t),l.frequency.exponentialRampToValueAtTime(3500,t+i*.6),l.frequency.exponentialRampToValueAtTime(600,t+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+i*.55),c.gain.exponentialRampToValueAtTime(1e-4,t+i);let u=n.createStereoPanner?n.createStereoPanner():null;o.connect(l).connect(c),u?(u.pan.setValueAtTime(a,t),u.pan.linearRampToValueAtTime(s,t+i),c.connect(u).connect(e)):c.connect(e),o.start(t),o.stop(t+i+.1)},kick(n,e,t,i=.5){let a=n.createOscillator(),s=n.createGain();a.frequency.setValueAtTime(140,t),a.frequency.exponentialRampToValueAtTime(42,t+.18),s.gain.setValueAtTime(i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),a.connect(s).connect(e),a.start(t),a.stop(t+.35)},hat(n,e,t,i=.06){let a=n.createBufferSource();a.buffer=nt.noiseBuffer(n,.06);let s=n.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=n.createGain();r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),a.connect(s).connect(r).connect(e),a.start(t)},chord(n,e,t,i,a=2.5,s=.09){let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(4e3,t+.08),r.frequency.exponentialRampToValueAtTime(900,t+a),r.connect(e);for(let o of i)for(let l of[-6,6]){let c=n.createOscillator(),u=n.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(s,t+.03),u.gain.setTargetAtTime(0,t+a*.5,a*.25),c.connect(u).connect(r),c.start(t),c.stop(t+a+.5)}},applause(n,e,t,i=3.5,a=.5){let s=nt.noiseBuffer(n,.03),r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(a,t+.4),r.gain.setValueAtTime(a,t+i-1),r.gain.exponentialRampToValueAtTime(1e-4,t+i),r.connect(e);let o=Math.floor(i*160);for(let l=0;l<o;l++){let c=n.createBufferSource();c.buffer=s;let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*2200,u.Q.value=.8;let d=n.createGain();d.gain.value=.25+Math.random()*.5;let h=n.createStereoPanner?n.createStereoPanner():null;c.connect(u).connect(d),h?(h.pan.value=Math.random()*2-1,d.connect(h).connect(r)):d.connect(r),c.start(t+Math.random()*i)}}};function w2(n,e){let t=new TextEncoder().encode(n+"|"+String(e).trim()),i=2166136261;for(let a of t)i^=a,i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}var up={davefx:{id:"davefx",modelo:"es_ES-davefx-medium",licencia:"CC0",sexo:"m"},sharvard:{id:"sharvard",modelo:"es_ES-sharvard-medium",licencia:"CC BY 3.0 (Univ. de Edimburgo)",sexo:"m"},carlfm:{id:"carlfm",modelo:"es_ES-carlfm-x_low",licencia:"dominio p\xFAblico",sexo:"m"},ald:{id:"ald",modelo:"es_MX-ald-medium",licencia:"Unlicense",sexo:"m"},daniela:{id:"daniela",modelo:"es_AR-daniela-high",licencia:"CC BY-SA 4.0 (corpus OpenSLR 61)",sexo:"f"}},dp=["Voces sint\xE9ticas gen\xE9ricas (Piper TTS)",["Presentador: davefx (CC0)","Concursantes: sharvard (CC BY 3.0, Univ. de Edimburgo),","carlfm (dominio p\xFAblico), ald (Unlicense),","daniela (CC BY-SA 4.0, corpus OpenSLR 61)"]],hp={p:null,q:null},bh="./",vh=n=>hp[n]||(hp[n]=fetch(`${bh}voz/${n==="q"?"q/":""}index.json`).then(e=>e.ok?e.json():{}).catch(()=>({}))),Ps=null,$r=null,aa={activo:()=>!0,volumen:()=>1,rapida:()=>!1,velocidad:()=>1};function fp(n){Object.assign(aa,n),n.base&&(bh=n.base),vh("p"),vh("q")}function A2(){if($r)return $r;let n=speechSynthesis.getVoices();if(!n.length)return null;let e=n.filter(s=>/^es(-|_)ES/i.test(s.lang)),t=n.filter(s=>/^es/i.test(s.lang)),i=/(male|hombre|pablo|jorge|[áa]lvaro|diego|enrique|carlos|ra[uú]l|antonio|juan|miguel|manuel|sergio|david|xavier|javier)/i,a=/(female|mujer|helena|laura|lucia|luc[íi]a|m[oó]nica|paulina|elvira|conchita|sabina|marisol|esperanza|dalia|elena)/i;return $r=e.find(s=>i.test(s.name))||e.find(s=>!a.test(s.name))||t.find(s=>i.test(s.name))||e[0]||t[0]||null,$r}typeof speechSynthesis<"u"&&(speechSynthesis.onvoiceschanged=()=>{$r=null});function yh(){Ps&&(Ps.pause(),Ps=null);try{speechSynthesis.cancel()}catch{}}async function pp(n,{voz:e="davefx",pregunta:t=!1,pitch:i=1,rate:a=1,minMs:s=0}={}){if(yh(),!n||!aa.activo())return;let r=w2(e,n),o=await vh(t?"q":"p"),l=aa.velocidad();if(o[r]!=null){let c=new Audio(`${bh}voz/${t?"q/":""}${r}.mp3`);return c.volume=Math.min(1,aa.volumen()),c.playbackRate=aa.rapida()?1.25:1,Ps=c,new Promise(u=>{let d=!1,h=()=>{d||(d=!0,Ps===c&&(Ps=null),u())};c.onended=h,c.onerror=h,c.onpause=h,c.play().catch(h),setTimeout(h,(o[r]*1e3+1500)/(aa.rapida()?1.25:1))})}return typeof speechSynthesis>"u"?new Promise(c=>setTimeout(c,Math.max(s,n.length*55)/l)):new Promise(c=>{let u=new SpeechSynthesisUtterance(n);u.lang="es-ES",u.pitch=i*(up[e]?.sexo==="f"?1.1:.85),u.rate=a*(aa.rapida()?1.25:1),u.volume=Math.min(1,aa.volumen());let d=A2();d&&up[e]?.sexo!=="f"&&(u.voice=d);let h=!1,f=()=>{h||(h=!0,c())};u.onend=f,u.onerror=f,setTimeout(f,Math.max(3e3,n.length*90)),speechSynthesis.speak(u)})}var C2={music:!0,musicVol:.8,sfx:!0,sfxVol:.9,publico:!0,publicoVol:.8,gradas:!0,voz:!0,lee:!0,leeVel:"normal",chistes:!0,monologo:!1,cabecera:"3d",etapa:"t2023",quality:"media",nombre:"",profesion:"",presentador:"Rafa Verbo",presentaciones:!0,platoLuz:"auto",intruso:!1,reflejo:!0},Mh="1.0",xe=Object.assign({},C2,JSON.parse(localStorage.getItem("p25_cfg")||"{}")),R2=new Set;function Yr(){localStorage.setItem("p25_cfg",JSON.stringify(xe)),R2.forEach(n=>n(xe))}var P2=new Set(["aplausos","risas","ovacion","ooh"]),Jr=[],Mc=new Set,sa=null,Sc=null,mp=()=>{let n=cp();return Sc||(Sc=n.createGain(),Sc.connect(n.destination)),[n,Sc]};fp({activo:()=>xe.voz,volumen:()=>1,rapida:()=>xe.leeVel==="rapida",velocidad:()=>window.__VEL||1});var gp={tecla:(n,e,t)=>nt.tone(n,e,t,900,.05,"square",.05),pop:(n,e,t)=>{nt.tone(n,e,t,500,.08,"sine",.2),nt.tone(n,e,t+.05,900,.1,"sine",.15)},acierto:(n,e,t)=>{nt.tone(n,e,t,1046,.18,"triangle",.22),nt.tone(n,e,t+.09,1568,.45,"sine",.18),nt.hat(n,e,t,.08)},fallo:(n,e,t)=>{nt.kick(n,e,t,.35);let i=n.createBufferSource();i.buffer=nt.noiseBuffer(n,.6);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=3500;let s=n.createGain();s.gain.setValueAtTime(.5,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.55),i.connect(a).connect(s).connect(e),i.start(t);for(let r=0;r<8;r++)nt.tone(n,e,t+.05+Math.random()*.4,2500+Math.random()*3e3,.08,"sine",.05);nt.tone(n,e,t+.1,140,.5,"sawtooth",.06)},rayo:(n,e,t)=>{let i=n.createBufferSource();i.buffer=nt.noiseBuffer(n,.5);let a=n.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(5e3,t),a.frequency.exponentialRampToValueAtTime(300,t+.45);let s=n.createGain();s.gain.setValueAtTime(.45,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.5),i.connect(a).connect(s).connect(e),i.start(t),nt.tone(n,e,t,60,.4,"sawtooth",.1)},pulsador:(n,e,t)=>{nt.tone(n,e,t,330,.25,"square",.12),nt.tone(n,e,t,495,.25,"square",.08)},comodin:(n,e,t)=>{[784,988,1175,1568].forEach((i,a)=>nt.tone(n,e,t+a*.07,i,.25,"triangle",.15))},tictac:(n,e,t)=>nt.tone(n,e,t,1500,.03,"square",.05),aplausos:(n,e,t)=>nt.applause(n,e,t,3,.4),ovacion:(n,e,t)=>nt.applause(n,e,t,5,.55),ooh:(n,e,t)=>{let i=n.createOscillator(),a=n.createGain(),s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=700,i.type="sawtooth",i.frequency.setValueAtTime(260,t),i.frequency.linearRampToValueAtTime(170,t+1),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.12,t+.15),a.gain.exponentialRampToValueAtTime(1e-4,t+1.1),i.connect(s).connect(a).connect(e),i.start(t),i.stop(t+1.2)},risas:(n,e,t)=>{for(let i=0;i<10;i++)nt.tone(n,e,t+i*.13,300+Math.random()*200,.1,"sawtooth",.03);nt.applause(n,e,t,1.6,.15)},badumtss:(n,e,t)=>{nt.kick(n,e,t,.4),nt.kick(n,e,t+.16,.4),nt.hat(n,e,t+.35,.2)},banner:(n,e,t)=>{nt.chord(n,e,t,[392,494,587],.6,.06),gp.rayo(n,e,t)},bote:(n,e,t)=>{[523,659,784,1046].forEach((i,a)=>nt.tone(n,e,t+a*.12,i,.3,"triangle",.15))},tension:(n,e,t)=>{for(let i=0;i<6;i++)nt.tone(n,e,t+i*.18,110+i*15,.2,"sawtooth",.05)}},I2={menu:{bpm:118,notas:[220,277,330,277,247,311,370,311],bajo:110},tension:{bpm:138,notas:[110,110,131,110,98,110,147,131],bajo:55},trilha:{bpm:122,notas:[196,247,294,247,220,262,330,262],bajo:98},musical:{bpm:104,notas:[262,330,392,523,392,330,294,349],bajo:131},diabolico:{bpm:160,notas:[147,147,175,147,131,147,196,175],bajo:73}},ce={aplicarNiveles(){sa?.a&&(sa.a.volume=xe.music?xe.musicVol:0),sa?.g&&(sa.g.gain.value=xe.music?.5*xe.musicVol:0)},async play(n,{volume:e=1}={}){let t=P2.has(n);if(t?!xe.publico:!xe.sfx)return null;e*=t?xe.publicoVol:xe.sfxVol;let i=await yc(n);if(i){let a=new Audio(i);return a.volume=Math.min(1,e),Mc.add(a),a.onended=()=>Mc.delete(a),a.play().catch(()=>{}),a}try{let[a,s]=mp(),r=a.createGain();r.gain.value=e,r.connect(s),gp[n]?.(a,r,a.currentTime+.01),setTimeout(()=>r.disconnect(),7e3)}catch{}return null},async music(n,{etapa:e=null,cancion:t=!1}={}){this.stopMusic();let i={};sa=i;let a=null;if(e){let r=await Oa("musica",e);r&&(a=r.url)}if(!a&&t&&Jr.length&&(a=Jr[Math.floor(Math.random()*Jr.length)]),a||(a=await yc("musica_"+n)),sa!==i)return;if(a){let r=new Audio(a);r.loop=n!=="cabecera",r.volume=xe.music?xe.musicVol:0,i.a=r,r.play().catch(()=>{});return}let s=I2[n];if(s)try{let[r,o]=mp(),l=r.createGain();l.gain.value=xe.music?.5*xe.musicVol:0,l.connect(o);let c=r.currentTime+.05,u=0,d=60/s.bpm/2;i.iv=setInterval(()=>{for(;c<r.currentTime+.4;)nt.tone(r,l,c,s.notas[u%s.notas.length],d*.9,"triangle",.05),u%4===0&&(nt.kick(r,l,c,.12),nt.tone(r,l,c,s.bajo,d*1.8,"sawtooth",.03)),u%2&&nt.hat(r,l,c,.015),c+=d,u++},120),i.g=l}catch{}},hayCanciones:()=>Jr.length>0,setCanciones(n){Jr=n||[]},stopMusic(){let n=sa;if(sa=null,!!n&&(n.a&&n.a.pause(),n.iv)){clearInterval(n.iv);try{n.g.disconnect()}catch{}}},say(n,e="davefx",t={}){return window.__frasesUsadas&&window.__frasesUsadas.add(JSON.stringify({v:e,t:String(n).trim(),q:!!t.pregunta})),pp(String(n||"").replace(/<[^>]+>/g,""),{voz:e,...t})},stopVoice(){yh()},stopAll(){Mc.forEach(n=>n.pause()),Mc.clear(),this.stopMusic(),this.stopVoice()}};var ve=n=>document.querySelector(n),ke=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ra=()=>window.__VEL||1,xp="\u20AC",_p=n=>{xp=n},L2=n=>{let e=Math.round(Number(n)||0);return(e<0?"-":"")+String(Math.abs(e)).replace(/\B(?=(\d{3})+(?!\d))/g,".")},sn=n=>L2(n)+(xp==="pts"?" pts":" \u20AC");var Ls=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Si=n=>n[Math.floor(Math.random()*n.length)],Ba={abort:!0},Zr=0,Mi=new Set;function Ec(){Zr++;let n=[...Mi];return Mi=new Set,n.forEach(e=>e()),Zr}function vp(n){if(n!==Zr)throw Ba}var Qe=(n,e=Zr)=>new Promise((t,i)=>{let a=()=>{clearTimeout(s),i(Ba)},s=setTimeout(()=>{Mi.delete(a),e===Zr?t():i(Ba)},n/ra());Mi.add(a)}),un=n=>new Promise((e,t)=>{let i=()=>t(Ba);Mi.add(i),n.then(a=>{Mi.delete(i),e(a)},a=>{Mi.delete(i),t(a)})});addEventListener("unhandledrejection",n=>{n.reason===Ba&&n.preventDefault()});var Tc=class{constructor(e,t){this.ilimitado=!e||e===1/0,this.rest=this.ilimitado?1/0:e,this.onTick=t,this.corriendo=!1,this.terminado=!1,this.fin=new Promise(a=>this._res=a);let i=Math.ceil(this.rest);this._iv=setInterval(()=>{!this.corriendo||this.terminado||this.ilimitado||(this.rest=Math.max(0,this.rest-.1*ra()),this.onTick&&this.onTick(this.rest),Math.ceil(this.rest)!==i&&(i=Math.ceil(this.rest),i<=10&&ce.play("tictac")),this.rest<=0&&(this.terminado=!0,clearInterval(this._iv),this._res("TIEMPO")))},100),this._l=()=>this.stop(),Mi.add(this._l),t&&t(this.rest)}start(){return this.corriendo=!0,this}pause(){this.corriendo=!1}sumar(e){this.ilimitado||(this.rest=Math.max(.1,this.rest+e)),this.onTick&&this.onTick(this.rest)}stop(){Mi.delete(this._l),!this.terminado&&(this.terminado=!0,clearInterval(this._iv),this._res("STOP"))}},N2=n=>n===1/0?"\u221E":String(Math.ceil(n)),Is=()=>ve("#overlay");function Ns(){Is().classList.add("hidden"),Is().innerHTML=""}function Sh(n){Is().innerHTML=n,Is().classList.remove("hidden"),Is().onclick=null}async function Gn(n,e="",t=2600){ce.play("banner"),Sh(`<div class="banner-25"><div class="ba-25">25</div><div class="ba-t">${ke(n)}</div>${e?`<div class="ba-s">${ke(e)}</div>`:""}</div>`),await Qe(t),Ns()}function bp(n,e="[data-z]"){return Sh(n),un(new Promise(t=>{let i=Is().querySelectorAll(e);i.forEach(a=>a.onclick=s=>{s.stopPropagation(),ce.play("tecla"),t(a.dataset.z)}),window.__AUTO&&i.length&&setTimeout(()=>t(i[Math.min(i.length-1,window.__AUTO_ELIGE||0)].dataset.z),400/ra())})).finally(Ns)}async function Th(n,e="",t=2800){ce.play("bote"),Sh(`<div class="bote-at"><span>${sn(n)}</span></div>${e?`<div class="sub">${ke(e)}</div>`:""}`),await Qe(t),Ns()}var si={hasta:0,nombre:"Presentador",quien:null};function An(n,e=3500,t=null,i=null){let a=ve("#bubble");a.innerHTML=`<b>${ke(i||si.nombre)}:</b> ${ke(n)}`,a.classList.toggle("conc",!!t),a.classList.remove("hidden"),si.hasta=performance.now()+e/ra(),si.quien=t}var D2=n=>Qe(Math.max(1400,String(n).length*55));async function $e(n,e=3800){if(An(n,e+1500),!xe.voz)return D2(n);await un(ce.say(n,"davefx"))}async function bn(n,e){if(An(e,2600,n.fig??null,n.nombre),!xe.voz)return Qe(1100);await un(Promise.race([ce.say(e,n.voz||"sharvard"),new Promise(t=>setTimeout(t,4e3))]))}var Bt={show(n){ve("#hud").classList.toggle("hidden",!n)},set(n,e=-1){n&&(ve("#hudConc").innerHTML=n.conc.map((t,i)=>`<div class="hc ${i===e?"act":""} ${t.fuera?"fuera":""} ${t.plantado?"plant":""}" style="--c:${t.color}"><div class="n">${ke(t.nombre)}${t.humano&&t.nombre!=="T\xFA"?" (T\xDA)":""}</div><div class="d">${sn(t.dinero)}</div><div class="x">${t.ronda?(t.ronda>0?"+":"")+sn(t.ronda):""}${t.comodines?' <i class="cmd">'+"\u26A1".repeat(t.comodines)+"</i>":""}${t.plantado?" \u270B":""}</div></div>`).join(""))},timer(n,e=10){let t=ve("#timer");t.textContent=N2(n),t.classList.toggle("low",n!==1/0&&n<=e)},sinTimer(){ve("#timer").textContent="",ve("#timer").classList.remove("low")},ronda(n){ve("#roundTxt").textContent=n}};function oa(n){let e=ve("#hashtag");e.textContent=n||"",e.classList.toggle("on",!!n)}async function Eh(n,e="",t=3200){let i=ve("#lower3"),a=document.createElement("div");a.className="l3",a.innerHTML=`<b>${ke(n)}</b>${e?`<span>${ke(e)}</span>`:""}`,i.appendChild(a),i.classList.remove("hidden"),await Qe(t),a.classList.add("out"),setTimeout(()=>{a.remove(),i.children.length||i.classList.add("hidden")},400)}function yp(){ve("#lower3").innerHTML="",ve("#lower3").classList.add("hidden")}function ct(n,e=2500){let t=ve("#toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(ct._t),ct._t=setTimeout(()=>t.classList.add("hidden"),e)}function Ti(n){let e=ve("#actions");e.innerHTML="",(n||[]).forEach(t=>{let i=document.createElement("button");i.className="abtn "+(t.cls||""),i.textContent=t.label,i.onclick=a=>{a.stopPropagation(),ce.play("tecla"),e.innerHTML="",t.fn()},e.appendChild(i)})}async function Mp(n,e=14e3){let t=ve("#credits"),i=ve("#creditsRoll");i.innerHTML=n.map(([s,r])=>`<h4>${ke(s)}</h4>${r.map(ke).join("<br>")}`).join(""),t.classList.remove("hidden","fadeout"),i.style.transition="none",i.style.transform="translateY(0)",i.offsetHeight;let a=e/ra();i.style.transition=`transform ${a}ms linear`,i.style.transform=`translateY(calc(-100% - ${t.clientHeight}px))`;try{await Qe(e)}finally{t.classList.add("hidden")}}function Sp(){ve("#credits").classList.add("hidden")}var qe={bienvenida:"\xA1Muy buenas y bienvenidos a 25 palabras! El concurso en el que las palabras valen dinero. Mucho dinero.",bienvenida2:"Dos concursantes, cuatro famosos, dos sof\xE1s amarillos y un bote que no para de crecer.",presentacion:"Vamos a conocer a los equipos de hoy. Cada concursante juega con dos famosos.",bote:"El bote empez\xF3 en doscientos cincuenta mil euros y sube cinco mil euros cada programa.",repesca:"\xA1La repesca! El concursante que perdi\xF3 ayer se juega su sitio en el equipo rosa contra un aspirante. Yo doy las pistas, cada vez m\xE1s f\xE1ciles, hasta un m\xE1ximo de quince. Cuantas menos pistas, m\xE1s puntos.",repescaTu:"Te toca. Escucha mis pistas y responde cuando lo tengas claro.",repescaGanas:"\xA1Enhorabuena! Te quedas en el plat\xF3. Si\xE9ntate en el sof\xE1 rosa con tus famosos.",repescaPierdes:"\xA1Vaya! Hoy la repesca no ha sido tuya. Te vas a casa, pero puedes volver a intentarlo cuando quieras.",repescaRival:"Hoy la repesca la juegan otros dos. T\xFA, como ganaste ayer, sigues en tu sof\xE1.",paseo:"\xA1Concursante, ve hasta tu sof\xE1! Es el que tiene el aro verde delante.",apuesta:"Primera prueba: \xA1La apuesta! Cinco palabras, cuarenta y cinco segundos y, como mucho, veinticinco pistas. Se apuesta a la baja: quien diga menos pistas, juega. Nada de m\xEDmica ni palabras derivadas. Hay setenta y cinco puntos en juego.",apuestaTu:"\xBFCu\xE1ntas pistas necesitas? Baja la apuesta o deja que juegue tu rival.",apuestaJuegas:"\xA1Juegas t\xFA! Escribe pistas de una sola palabra. Tus famosos intentar\xE1n adivinarlas.",apuestaJuegaRival:"Juega el equipo rival. Vamos a ver si lo consiguen.",apuestaOk:"\xA1Conseguido! Setenta y cinco puntos.",apuestaKo:"\xA1Uy! No ha podido ser. Esos setenta y cinco puntos se escapan.",uno:"\xA1Uno contra uno! Por parejas, la misma palabra para los dos y solo una pista por turno. Cada rebote resta puntos. Veinticinco puntos por ronda.",unoRebote:"\xA1Rebote! Pasa el turno al otro equipo.",unoTuDas:"Esta ronda das t\xFA las pistas. Una sola palabra cada vez.",unoTuAdivinas:"Esta ronda das pistas tu famoso y t\xFA adivinas.",piramide:"\xA1La pir\xE1mide de pistas! Arriba ten\xE9is el tema. Yo doy las pistas de una en una. El que lo sepa, que pulse. Veinticinco, veinte, quince, diez y cinco puntos. Si fallas, el turno pasa al rival.",piramideNadie:"Nadie pulsa. Siguiente pista.",pulsa:"\xA1Has pulsado! Dime.",intruso:"\xA1Atenci\xF3n, que tenemos visita! Por videollamada se conecta el intruso. Elegir\xE1 al rival que le parezca m\xE1s f\xE1cil y jugar\xE1n por cinco mil euros del bote.",intrusoElige:"Intruso, \xBFa qui\xE9n eliges?",intrusoGana:"\xA1El intruso se lleva cinco mil euros del bote!",intrusoPierde:"\xA1Gana el plat\xF3! Los cinco mil euros se suman al bote y el intruso se va de vac\xEDo.",contrarreloj:"\xA1Contrarreloj! Todo puede cambiar. Cada miembro del equipo da pistas para cinco palabras: veinticinco pistas y cuarenta y cinco segundos. Veinticinco puntos por turno, el tiempo que sobre se acumula y, si los tres lo consiguen, cien puntos de bonus.",bonus:"\xA1Bonus! Los tres lo han conseguido: cien puntos m\xE1s.",ganaEquipo:"\xA1Tenemos equipo ganador! Va a la final a por el bote.",pierdeEquipo:"Hoy el bote lo juega el otro equipo. Ma\xF1ana te tocar\xE1 la repesca.",diez:"\xA1Las diez de \xFAltimas! Diez palabras, veinticinco pistas como m\xE1ximo y un minuto. Si tus famosos las aciertan todas, te llevas el bote.",diezRival:"La final la juega el equipo rival. \xA1Crucemos los dedos!",boteGanado:"\xA1Incre\xEDble! \xA1Diez de diez! \xA1Se lleva el bote de 25 palabras!",boteNo:"\xA1Casi! El bote se queda para el pr\xF3ximo programa. Ma\xF1ana sube cinco mil euros m\xE1s.",acierto:"\xA1Correcto!",fallo:"\xA1No!",tiempo:"\xA1Se acab\xF3 el tiempo!",sinPistas:"\xA1Sin pistas! Se acab\xF3.",ilegal:"\xA1Esa pista no vale! Es la palabra o una derivada.",despedida:"\xA1Esto ha sido todo por hoy en 25 palabras! Gracias a nuestros famosos, a los concursantes y a todos ustedes. \xA1Hasta ma\xF1ana!",entreno:"\xA1Bienvenido al entrenamiento! Aqu\xED las palabras no cuestan dinero. Practica tranquilo.",explora:"\xA1Bienvenido al plat\xF3 de 25 palabras! Date una vuelta, pero no te sientes todav\xEDa en los sof\xE1s.",exploraSaludo:"\xA1Hombre! \xBFVienes a jugar? Ve buscando pistas, que empezamos enseguida.",estreno:"Bienvenidos al estreno de 25 palabras, como en diciembre de dos mil veintid\xF3s. Hoy sin repesca, pero con intruso.",libre:"Modo libre: da pistas para palabras sueltas sin reloj. Mis famosos adivinar\xE1n.",adivina:"Ahora adivinas t\xFA. Un famoso te dar\xE1 pistas y t\xFA escribes la palabra."},wc=["\xBFSab\xE9is cu\xE1l es la palabra m\xE1s larga del diccionario? Ambulancia: empieza en \xABa\xBB y termina en \xABia\xBB\u2026 pero va rapid\xEDsimo.","Mi diccionario y yo tenemos una relaci\xF3n seria. \xC9l siempre tiene la \xFAltima palabra.","Le dije a mi madre que trabajaba con veinticinco palabras. Me contest\xF3: \xABhijo, con dos me basta: ponte abrigo\xBB.","En este programa los sin\xF3nimos est\xE1n prohibidos\u2026 bueno, vetados\u2026 bueno, no permitidos. \xA1Ya me entend\xE9is!","Hoy he desayunado sopa de letras. Y aun as\xED no he sacado ni una palabra antes del caf\xE9.","\xBFQu\xE9 le dice una palabra a otra? \xABNos vemos en el diccionario, que all\xED estamos m\xE1s ordenadas\xBB."],Ds=[{nombre:"Lola Rimas",prof:"actriz de telenovelas",emoji:"\u{1F469}\u200D\u{1F3A4}",voz:"daniela",habil:.8},{nombre:"Paco Sin\xF3nimo",prof:"humorista de mon\xF3logos",emoji:"\u{1F921}",voz:"carlfm",habil:.72},{nombre:"Vera Verbena",prof:"cantante de orquesta",emoji:"\u{1F3A4}",voz:"daniela",habil:.76},{nombre:"Toni Tilde",prof:"exfutbolista y tertuliano",emoji:"\u26BD",voz:"ald",habil:.7},{nombre:"Marga Met\xE1fora",prof:"presentadora del tiempo",emoji:"\u{1F326}\uFE0F",voz:"daniela",habil:.78},{nombre:"Quique Comas",prof:"mago de la tele",emoji:"\u{1F3A9}",voz:"sharvard",habil:.74},{nombre:"Bruno Acento",prof:"actor de doblaje",emoji:"\u{1F3AC}",voz:"ald",habil:.77},{nombre:"Leo L\xE9xico",prof:"influencer de palabras raras",emoji:"\u{1F4F1}",voz:"carlfm",habil:.75}],Us=[{nombre:"Mateo",prof:"profesor de autoescuela",emoji:"\u{1F697}",voz:"sharvard",habil:.74},{nombre:"Celia",prof:"opositora a bibliotecaria",emoji:"\u{1F4DA}",voz:"daniela",habil:.76},{nombre:"Ram\xF3n",prof:"panadero madrugador",emoji:"\u{1F956}",voz:"carlfm",habil:.72},{nombre:"Andr\xE9s",prof:"gu\xEDa tur\xEDstico",emoji:"\u{1F5FA}\uFE0F",voz:"ald",habil:.75}],za={nombre:"El intruso",prof:"desde su casa por videollamada",emoji:"\u{1F4F9}",voz:"ald",habil:.72},Ac={pienso:["Mmm\u2026 d\xE9jame pensar.","Espera, espera\u2026","\xA1Ay, que lo tengo en la punta de la lengua!"],nose:["\xA1Ni idea!","Dame otra pista.","Uf, no caigo."],ok:["\xA1Toma!","\xA1Lo sab\xEDa!","\xA1Bien!","\xA1Somos un equipazo!"],ko:["\xA1Vaya!","Uy, no era eso.","\xA1Qu\xE9 rabia!"],pulsa:["\xA1Pulso!","\xA1Lo s\xE9!"],hola:["\xA1Hola a todos!","\xA1Qu\xE9 ilusi\xF3n estar aqu\xED!","\xA1Vamos a por el bote!"],baja:["Bajo.","Yo bajo m\xE1s.","Ni una m\xE1s."],hazlo:["\xA1Hazlo t\xFA!"]};var wh=[{p:"perro",t:"Animales",c:["fiel","collar","correa","paseo","hueso","cachorro","ladrar","guau","mascota","caseta","d\xE1lmata","chucho"]},{p:"gato",t:"Animales",c:["bigotes","ovillo","u\xF1as","tejado","ronronear","felino","miau","siam\xE9s","mascota","rat\xF3n","garras","maullar"]},{p:"elefante",t:"Animales",c:["marfil","Dumbo","orejas","colmillos","paquidermo","trompa","\xC1frica","enorme","gris","manada","circo","memoria"]},{p:"jirafa",t:"Animales",c:["manchas","sabana","alta","cuello","acacia","\xC1frica","largo","amarilla","hojas","patas","altura","cuernecillos"]},{p:"le\xF3n",t:"Animales",c:["melena","rugido","rey","selva","felino","sabana","Simba","manada","cazador","garras","Nala"]},{p:"mono",t:"Animales",c:["pl\xE1tano","rama","chimpanc\xE9","selva","trepar","gorila","primate","simio","liana","banana","orangut\xE1n","cola"]},{p:"caballo",t:"Animales",c:["crin","herradura","galope","jinete","silla","establo","relinchar","yegua","potro","montar","pony","cuadra"]},{p:"vaca",t:"Animales",c:["cencerro","pasto","manchas","granja","leche","muu","orde\xF1ar","toro","ternero","prado","rumiante","vaquero"]},{p:"cerdo",t:"Animales",c:["pocilga","jam\xF3n","barro","granja","rosa","oink","chorizo","lech\xF3n","gru\xF1ir","cochino","tocino","hocico"]},{p:"oveja",t:"Animales",c:["lana","reba\xF1o","pastor","balar","cordero","granja","esquilar","beee","blanca","merina","carnero","Dolly"]},{p:"gallina",t:"Animales",c:["corral","huevos","plumas","cacarear","pollito","granja","cresta","pico","poner","clueca","ave"]},{p:"pato",t:"Animales",c:["estanque","cuac","plumas","pico","nadar","Donald","lago","ave","palm\xEDpedo","graznido","goma"]},{p:"pez",t:"Animales",c:["aletas","escamas","pecera","branquias","nadar","acuario","mar","r\xEDo","anzuelo","agua","cola","colores"]},{p:"tibur\xF3n",t:"Animales",c:["aleta","dientes","mar","Jaws","blanco","depredador","oc\xE9ano","peligroso","martillo","surf","mordisco","escualo"]},{p:"delf\xEDn",t:"Animales",c:["inteligente","acuario","saltar","cet\xE1ceo","mam\xEDfero","mar","Flipper","sonar","aleta","gris","nadar","simp\xE1tico"]},{p:"ballena",t:"Animales",c:["azul","enorme","oc\xE9ano","cet\xE1ceo","chorro","Moby","mam\xEDfero","jorobada","orca","mar","grande","canto"]},{p:"pulpo",t:"Animales",c:["tent\xE1culos","tinta","ventosas","ocho","mar","gallega","cefal\xF3podo","brazos","feria","calamar","piment\xF3n","molusco"]},{p:"tortuga",t:"Animales",c:["caparaz\xF3n","lenta","Ninja","tierra","mar","huevos","reptil","centenaria","concha","despacio","gal\xE1pago","carrera"]},{p:"serpiente",t:"Animales",c:["veneno","escamas","reptil","silbar","cascabel","cobra","muda","piel","arrastrarse","v\xEDbora","boa","lengua"]},{p:"rana",t:"Animales",c:["charca","croar","saltar","verde","renacuajo","anfibio","pr\xEDncipe","beso","lengua","mosca","sapo","nen\xFAfar"]},{p:"mariposa",t:"Animales",c:["cris\xE1lida","alas","colores","flores","oruga","volar","polen","capullo","primavera","insecto","monarca","antenas"]},{p:"abeja",t:"Animales",c:["colmena","miel","picadura","zumbido","reina","panal","flores","polen","amarilla","obrera","insecto","Maya"]},{p:"hormiga",t:"Animales",c:["trabajadora","reina","fila","peque\xF1a","insecto","colonia","migas","at\xF3mica","antenas","obrera","cigarra"]},{p:"ara\xF1a",t:"Animales",c:["telara\xF1a","patas","ocho","hilo","insectos","tar\xE1ntula","Spiderman","red","venenosa","rinc\xF3n","miedo","ar\xE1cnido"]},{p:"\xE1guila",t:"Animales",c:["vuelo","rapaz","garras","pico","nido","alturas","imperial","vista","ave","monta\xF1a","cazadora","real"]},{p:"b\xFAho",t:"Animales",c:["noche","ojos","ulular","nocturno","sabio","ave","lechuza","rama","Harry","cabeza","girar","plumas"]},{p:"ping\xFCino",t:"Animales",c:["fr\xEDo","hielo","esmoquin","Ant\xE1rtida","ave","nadar","polo","blanco","negro","Madagascar","emperador","andar"]},{p:"oso",t:"Animales",c:["miel","hibernar","cueva","panda","polar","pardo","peluche","garras","Yogui","abrazo","bosque","Baloo"]},{p:"conejo",t:"Animales",c:["zanahoria","orejas","madriguera","salto","blanco","Bugs","Pascua","mago","sombrero","roedor","liebre","suave"]},{p:"rat\xF3n",t:"Animales",c:["queso","trampa","ordenador","Mickey","peque\xF1o","roedor","gato","agujero","P\xE9rez","colita","chillar","laboratorio"]},{p:"lobo",t:"Animales",c:["aullar","luna","manada","Caperucita","feroz","bosque","cerditos","colmillos","hombre","gris","ib\xE9rico","salvaje"]},{p:"zorro",t:"Animales",c:["astuto","cola","rojo","gallinero","Robin","Hood","bosque","raposo","listo","pelaje","f\xE1bula","naranja"]},{p:"cocodrilo",t:"Animales",c:["l\xE1grimas","reptil","r\xEDo","dientes","pantano","Nilo","mand\xEDbula","caim\xE1n","escamas","verde","bolso","boca"]},{p:"canguro",t:"Animales",c:["bolsa","saltar","Australia","cr\xEDa","marsupial","boxeo","cola","patas","ni\xF1era","salto","ualab\xED"]},{p:"camello",t:"Animales",c:["joroba","desierto","beduino","dromedario","agua","arena","caravana","sed","S\xE1hara","Reyes","Magos","oasis"]},{p:"loro",t:"Animales",c:["hablar","plumas","colores","pirata","hombro","repetir","pico","jaula","tropical","papagayo","guacamayo","verde"]},{p:"caracol",t:"Animales",c:["concha","baba","lento","cuernos","lluvia","lechuga","molusco","espiral","casa","despacio","babosa","jard\xEDn"]},{p:"gamba",t:"Comida",c:["marisco","cola","plancha","ajillo","rosada","crust\xE1ceo","pelar","langostino","c\xF3ctel","mar","bigotes","peque\xF1a"]},{p:"tortilla",t:"Comida",c:["huevo","patata","cebolla","sart\xE9n","vuelta","espa\xF1ola","pincho","bar","francesa","redonda","cuajada","tapa"]},{p:"paella",t:"Comida",c:["arroz","valenciana","azafr\xE1n","marisco","domingo","sart\xE9n","amarilla","socarrat","conejo","le\xF1a","Valencia","gamba"]},{p:"pizza",t:"Comida",c:["masa","horno","tomate","queso","italiana","porci\xF3n","margarita","pepperoni","mozzarella","napolitana","redonda","repartidor"]},{p:"hamburguesa",t:"Comida",c:["pan","carne","queso","ketchup","patatas","americana","ternera","lechuga","comida","r\xE1pida","doble","burger"]},{p:"helado",t:"Comida",c:["cucurucho","fr\xEDo","verano","vainilla","chocolate","bola","fresa","derretir","polo","tarrina","sorbete"]},{p:"chocolate",t:"Comida",c:["cacao","dulce","tableta","negro","blanco","bomb\xF3n","fundir","churros","taza","leche","suizo","onza"]},{p:"manzana",t:"Comida",c:["Newton","Eva","roja","verde","pera","Blancanieves","\xE1rbol","reineta","golden","fruta","compota","mordisco"]},{p:"pl\xE1tano",t:"Comida",c:["Canarias","amarillo","mono","pelar","c\xE1scara","resbalar","fruta","banana","racimo","potasio","maduro","curvo"]},{p:"naranja",t:"Comida",c:["zumo","vitamina","Valencia","c\xEDtrico","gajo","exprimir","fruta","mandarina","color","pulpa","lim\xF3n","piel"]},{p:"fresa",t:"Comida",c:["nata","roja","semillas","Huelva","primavera","fruta","mermelada","batido","peque\xF1a","tarta","silvestre"]},{p:"sand\xEDa",t:"Comida",c:["pepitas","verano","roja","verde","raja","mel\xF3n","gigante","fruta","agua","refrescante","tajada","c\xE1scara"]},{p:"uva",t:"Comida",c:["vino","racimo","Nochevieja","doce","campanadas","vendimia","parra","pasa","mosto","vi\xF1edo","fruta","blanca"]},{p:"pan",t:"Comida",c:["horno","barra","miga","corteza","trigo","panadero","harina","levadura","tostada","bocadillo","baguette","hogaza"]},{p:"queso",t:"Comida",c:["manchego","leche","curado","rat\xF3n","agujeros","oveja","cabra","rallado","gruyer","fondue","tabla","fresco"]},{p:"huevo",t:"Comida",c:["yema","clara","gallina","c\xE1scara","frito","cocido","docena","tortilla","pascua","revuelto","poch\xE9","cart\xF3n"]},{p:"leche",t:"Comida",c:["vaca","blanca","desayuno","vaso","entera","desnatada","cart\xF3n","calcio","biber\xF3n","galletas","cereales","l\xE1cteo"]},{p:"caf\xE9",t:"Comida",c:["taza","cortado","expreso","despertar","grano","cafetera","negro","az\xFAcar","cappuccino","desayuno","Colombia"]},{p:"churro",t:"Comida",c:["chocolate","masa","feria","porra","az\xFAcar","frito","aceite","desayuno","madrile\xF1o","lazo","domingo"]},{p:"jam\xF3n",t:"Comida",c:["ib\xE9rico","pata","bellota","serrano","cortar","loncha","cerdo","curado","bocadillo","tapa","cuchillo"]},{p:"gazpacho",t:"Comida",c:["tomate","fr\xEDo","andaluz","pepino","pimiento","verano","ajo","sopa","vaso","salmorejo","triturar","aceite"]},{p:"cocido",t:"Comida",c:["garbanzos","madrile\xF1o","puchero","tocino","chorizo","sopa","invierno","vuelcos","olla","berza","morcillo","abuela"]},{p:"tarta",t:"Comida",c:["cumplea\xF1os","velas","pastel","trozo","nata","bizcocho","horno","queso","postre","boda","pisos","dulce"]},{p:"galleta",t:"Comida",c:["crujiente","leche","mojar","Mar\xEDa","chocolate","horno","dulce","merienda","Oreo","caja","mantequilla","desayuno"]},{p:"palomitas",t:"Comida",c:["cine","ma\xEDz","microondas","explotar","sal","cubo","pel\xEDcula","mantequilla","caramelo","crujientes","feria","saltar"]},{p:"sopa",t:"Comida",c:["cuchara","caliente","fideos","caldo","plato","ajo","cebolla","sobre","letras","abuela","invierno","enfermo"]},{p:"ensalada",t:"Comida",c:["lechuga","tomate","ali\xF1o","vinagre","aceite","verde","C\xE9sar","bol","dieta","mixta","cebolla","at\xFAn"]},{p:"espaguetis",t:"Comida",c:["pasta","italiana","bolo\xF1esa","tenedor","carbonara","largos","hervir","tomate","alb\xF3ndigas","plato","macarrones","parmesano"]},{p:"lim\xF3n",t:"Comida",c:["\xE1cido","amarillo","c\xEDtrico","zumo","agrio","exprimir","vitamina","tequila","merengue","rodaja"]},{p:"tomate",t:"Comida",c:["rojo","ensalada","Bu\xF1ol","salsa","huerta","gazpacho","frito","ketchup","cherry","pera","raf","mata"]},{p:"patata",t:"Comida",c:["tub\xE9rculo","frita","tortilla","pur\xE9","bolsa","tierra","pelar","brava","cocida","chips","papa","saco"]},{p:"zanahoria",t:"Comida",c:["naranja","conejo","vista","huerta","ra\xEDz","ensalada","rallada","palo","Bugs","verdura","crujiente","mu\xF1eco"]},{p:"cebolla",t:"Comida",c:["llorar","capas","picar","tortilla","blanca","morada","sofrito","aros","ogro","Shrek","ajo","bulbo"]},{p:"ajo",t:"Comida",c:["vampiro","diente","cabeza","aliento","ristra","alioli","pelar","picante","blanco","gambas","sopa","perejil"]},{p:"miel",t:"Comida",c:["abeja","dulce","panal","colmena","oro","cuchara","tostada","lim\xF3n","tos","oso","n\xE9ctar","pegajosa"]},{p:"caramelo",t:"Comida",c:["dulce","envoltorio","chupar","az\xFAcar","menta","piruleta","golosina","ni\xF1os","tienda","Reyes","cabalgata","palo"]},{p:"turr\xF3n",t:"Comida",c:["Navidad","almendra","duro","blando","Jijona","Alicante","tableta","diciembre","mazap\xE1n","miel","polvor\xF3n","vuelve"]},{p:"cama",t:"Casa",c:["s\xE1banas","almohada","dormir","colch\xF3n","manta","litera","noche","edred\xF3n","habitaci\xF3n","matrimonio","sue\xF1o","individual"]},{p:"sof\xE1",t:"Casa",c:["cojines","sal\xF3n","tumbarse","siesta","tele","c\xF3modo","chaise","sentarse","cama","piel","mullido","sill\xF3n"]},{p:"mesa",t:"Casa",c:["patas","mantel","comer","silla","madera","cocina","comedor","escritorio","camilla","redonda","cuadrada","tablero"]},{p:"silla",t:"Casa",c:["respaldo","sentarse","patas","mesa","madera","el\xE9ctrica","ruedas","plegable","taburete","asiento","cuatro","butaca"]},{p:"puerta",t:"Casa",c:["llave","pomo","cerradura","timbre","abrir","cerrar","picaporte","entrada","salida","marco","bisagra","portazo"]},{p:"ventana",t:"Casa",c:["cristal","persiana","cortina","vistas","abrir","luz","aire","alf\xE9izar","marco","balc\xF3n","ventilar","asomarse"]},{p:"llave",t:"Casa",c:["cerradura","puerta","abrir","candado","maestra","inglesa","girar","perder","copia","coche","metal"]},{p:"espejo",t:"Casa",c:["reflejo","cristal","mirarse","Blancanieves","ba\xF1o","retrovisor","imagen","peinarse","roto","m\xE1gico","tocador","vanidad"]},{p:"l\xE1mpara",t:"Casa",c:["luz","bombilla","pantalla","Aladino","genio","mesilla","techo","flexo","encender","interruptor","lectura","pie"]},{p:"reloj",t:"Casa",c:["agujas","hora","tictac","mu\xF1eca","despertador","pared","cuco","minutos","pila","cuerda","alarma","segundero"]},{p:"nevera",t:"Casa",c:["fr\xEDo","cocina","congelador","hielo","imanes","comida","frigor\xEDfico","blanca","puerta","leche","frescos","electrodom\xE9stico"]},{p:"horno",t:"Casa",c:["calor","asar","gratinar","pan","pizza","cocina","microondas","bandeja","pastel","grados","precalentar","le\xF1a"]},{p:"paraguas",t:"Casa",c:["lluvia","mojarse","abrir","tela","varillas","mango","negro","Mary","Poppins","tormenta","sombrilla","charco"]},{p:"toalla",t:"Casa",c:["secarse","ducha","ba\xF1o","playa","mojada","algod\xF3n","suave","tirar","boxeo","colgar","albornoz","lavabo"]},{p:"almohada",t:"Casa",c:["cama","cabeza","dormir","funda","plumas","blanda","pelea","sue\xF1o","coj\xEDn","descansar","ratoncito","noche"]},{p:"escoba",t:"Casa",c:["barrer","bruja","volar","recogedor","suelo","mango","cerdas","limpiar","polvo","fregona","Harry","quidditch"]},{p:"ba\xF1era",t:"Casa",c:["espuma","agua","patito","grifo","relax","jacuzzi","sales","ducha","tap\xF3n","llenar","porcelana"]},{p:"cocina",t:"Casa",c:["fogones","sart\xE9n","nevera","receta","olla","vitrocer\xE1mica","horno","comida","chef","fregadero","armario"]},{p:"jard\xEDn",t:"Casa",c:["c\xE9sped","flores","manguera","regar","plantas","\xE1rboles","banco","rosales","maceta","verde","patio"]},{p:"tel\xE9fono",t:"Casa",c:["llamar","m\xF3vil","n\xFAmero","cobertura","sonar","colgar","descolgar","contestar","mensaje","cabina","fijo","pantalla"]},{p:"televisi\xF3n",t:"Casa",c:["mando","canal","programa","pantalla","serie","anuncios","zapping","noticias","sof\xE1","concurso","antena","ver"]},{p:"ordenador",t:"Casa",c:["teclado","rat\xF3n","pantalla","internet","port\xE1til","programa","archivo","carpeta","correo","virus","encender","windows"]},{p:"m\xE9dico",t:"Profesiones",c:["bata","estetoscopio","receta","hospital","consulta","enfermo","fiebre","doctor","cirujano","pastilla","urgencias","salud"]},{p:"bombero",t:"Profesiones",c:["manguera","fuego","incendio","sirena","cami\xF3n","casco","rescate","escalera","llamas","agua","valiente","gato"]},{p:"polic\xEDa",t:"Profesiones",c:["placa","uniforme","patrulla","detener","ladr\xF3n","esposas","sirena","comisar\xEDa","multa","agente","guardia","ley"]},{p:"profesor",t:"Profesiones",c:["pizarra","alumnos","clase","colegio","examen","deberes","tiza","ense\xF1ar","maestro","aula","notas","lecci\xF3n"]},{p:"cocinero",t:"Profesiones",c:["gorro","receta","fogones","restaurante","delantal","chef","platos","men\xFA","estrellas","cuchillos","sabor"]},{p:"peluquero",t:"Profesiones",c:["tijeras","pelo","corte","peine","secador","tinte","flequillo","sal\xF3n","lavar","mechas","barbero","rizos"]},{p:"piloto",t:"Profesiones",c:["avi\xF3n","cabina","aeropuerto","despegar","aterrizar","comandante","volar","auxiliares","F\xF3rmula","carrera","azafata","radar"]},{p:"cartero",t:"Profesiones",c:["cartas","buz\xF3n","sobres","correos","paquete","sello","repartir","bicicleta","mensaje","timbre","amarillo"]},{p:"astronauta",t:"Profesiones",c:["espacio","cohete","luna","traje","casco","gravedad","\xF3rbita","NASA","estaci\xF3n","planeta","estrellas","nave"]},{p:"pirata",t:"Profesiones",c:["parche","loro","barco","tesoro","mapa","garfio","isla","bandera","calavera","abordaje","mar","Jack"]},{p:"payaso",t:"Profesiones",c:["nariz","roja","circo","risa","zapatos","grandes","maquillaje","peluca","malabares","Fof\xF3","ni\xF1os","carpa"]},{p:"mago",t:"Profesiones",c:["varita","chistera","conejo","truco","capa","cartas","desaparecer","abracadabra","ilusionista","Merl\xEDn","hechizo"]},{p:"futbolista",t:"Profesiones",c:["bal\xF3n","gol","campo","botas","equipo","liga","estadio","fichaje","camiseta","entrenador","penalti","delantero"]},{p:"cantante",t:"Profesiones",c:["micr\xF3fono","escenario","voz","canci\xF3n","concierto","disco","fans","gira","artista","letra","afinado","banda"]},{p:"pintor",t:"Profesiones",c:["pincel","lienzo","cuadro","colores","paleta","brocha","acuarela","museo","artista","caballete","\xF3leo","Picasso"]},{p:"dentista",t:"Profesiones",c:["dientes","muelas","caries","boca","sill\xF3n","taladro","empaste","brackets","limpieza","cepillo","consulta","fl\xFAor"]},{p:"agricultor",t:"Profesiones",c:["campo","tractor","cosecha","sembrar","tierra","arado","granja","cultivo","regar","trigo","huerta","labrador"]},{p:"f\xFAtbol",t:"Deportes",c:["bal\xF3n","gol","porter\xEDa","once","penalti","\xE1rbitro","c\xF3rner","estadio","liga","Mundial","delantero","fuera"]},{p:"baloncesto",t:"Deportes",c:["canasta","aro","triple","NBA","altura","rebote","cinco","tap\xF3n","mate","pivote","botar","cancha"]},{p:"tenis",t:"Deportes",c:["raqueta","red","pelota","Nadal","set","saque","Wimbledon","pista","tierra","batida","juego","partido"]},{p:"nataci\xF3n",t:"Deportes",c:["piscina","braza","crol","mariposa","espalda","gorro","gafas","largo","agua","nadar","ba\xF1ador","ol\xEDmpica"]},{p:"ciclismo",t:"Deportes",c:["bicicleta","Tour","pedal","maillot","etapa","puerto","pelot\xF3n","casco","cadena","Vuelta","sprint","rueda"]},{p:"boxeo",t:"Deportes",c:["guantes","ring","pu\xF1etazo","asalto","K.O.","campana","cuadril\xE1tero","Rocky","golpe","peso","p\xFAgil","esquina"]},{p:"golf",t:"Deportes",c:["hoyo","palo","green","pelota","caddie","bunker","par","swing","campo","Masters","birdie","tee"]},{p:"esqu\xED",t:"Deportes",c:["nieve","monta\xF1a","pista","bastones","tablas","remonte","telesilla","invierno","fr\xEDo","slalom","estaci\xF3n","deslizarse"]},{p:"ajedrez",t:"Deportes",c:["tablero","pe\xF3n","rey","reina","jaque","mate","alfil","torre","caballo","partida","casillas","blancas"]},{p:"marat\xF3n",t:"Deportes",c:["kil\xF3metros","correr","cuarenta","dos","Fil\xEDpides","meta","zapatillas","resistencia","carrera","asfalto","Nueva","York"]},{p:"playa",t:"Lugares",c:["arena","mar","olas","toalla","sombrilla","verano","chiringuito","ba\xF1ador","costa","crema","castillo","orilla"]},{p:"monta\xF1a",t:"Lugares",c:["cima","pico","escalar","nieve","altura","sendero","valle","cordillera","Everest","refugio","ladera","senderismo"]},{p:"desierto",t:"Lugares",c:["arena","dunas","camello","oasis","sed","calor","cactus","S\xE1hara","espejismo","seco","beduino","escorpi\xF3n"]},{p:"isla",t:"Lugares",c:["agua","rodeada","n\xE1ufrago","tesoro","palmera","archipi\xE9lago","tropical","barco","mar","Canarias","Mallorca","desierta"]},{p:"bosque",t:"Lugares",c:["\xE1rboles","hojas","setas","lobo","ardilla","caperucita","le\xF1a","pinos","senda","selva","claro","hongos"]},{p:"hospital",t:"Lugares",c:["m\xE9dicos","enfermeras","camilla","urgencias","quir\xF3fano","ambulancia","paciente","planta","visita","habitaci\xF3n","salud","operaci\xF3n"]},{p:"colegio",t:"Lugares",c:["alumnos","profesor","recreo","clase","pupitre","mochila","deberes","patio","uniforme","escuela","timbre","lecci\xF3n"]},{p:"aeropuerto",t:"Lugares",c:["aviones","maletas","pista","vuelos","terminal","embarque","pasaporte","despegar","aduana","facturar","torre","control"]},{p:"cine",t:"Lugares",c:["pel\xEDcula","pantalla","butaca","palomitas","entrada","taquilla","estreno","oscuras","sala","cartelera","proyector","trailer"]},{p:"museo",t:"Lugares",c:["cuadros","exposici\xF3n","arte","Prado","gu\xEDa","obra","escultura","visita","colecci\xF3n","galer\xEDa","historia","entrada"]},{p:"biblioteca",t:"Lugares",c:["libros","silencio","estanter\xEDas","leer","pr\xE9stamo","carn\xE9","estudiar","novela","mesa","sala","devolver"]},{p:"iglesia",t:"Lugares",c:["cura","misa","campanario","altar","boda","bautizo","velas","catedral","parroquia","bancos","domingo","rezar"]},{p:"castillo",t:"Lugares",c:["torre","almenas","foso","puente","levadizo","rey","princesa","muralla","caballeros","medieval","arena","fortaleza"]},{p:"circo",t:"Lugares",c:["carpa","payaso","trapecio","malabarista","leones","domador","pista","acr\xF3bata","elefante","funambulista","magia","espect\xE1culo"]},{p:"zoo",t:"Lugares",c:["animales","jaulas","cuidador","leones","monos","visita","elefantes","parque","cebras","entrada","recinto","safari"]},{p:"mercado",t:"Lugares",c:["puestos","frutas","comprar","vender","pescader\xEDa","carnicer\xEDa","plaza","tenderos","abastos","fresco","barrio","compra"]},{p:"parque",t:"Lugares",c:["columpios","tobog\xE1n","ni\xF1os","\xE1rboles","bancos","palomas","c\xE9sped","fuente","pasear","merendero","arenero","Retiro"]},{p:"estadio",t:"Lugares",c:["grada","c\xE9sped","partido","aficionados","f\xFAtbol","Bernab\xE9u","Camp","Nou","afici\xF3n","palco","concierto","grader\xEDo"]},{p:"farmacia",t:"Lugares",c:["medicinas","receta","cruz","verde","pastillas","jarabe","guardia","tirita","botica","crema","term\xF3metro"]},{p:"restaurante",t:"Lugares",c:["camarero","carta","men\xFA","mesa","reserva","cuenta","propina","cocina","chef","cenar","platos","comensales"]},{p:"Madrid",t:"Lugares",c:["capital","Cibeles","Retiro","Gran","V\xEDa","chulapo","Puerta","Sol","Bernab\xE9u","Prado","gato","metro"]},{p:"Barcelona",t:"Lugares",c:["Sagrada","Familia","Gaud\xED","Ramblas","Catalu\xF1a","Park","G\xFCell","Montju\xEFc","condal","Tibidabo","Mediterr\xE1neo"]},{p:"Par\xEDs",t:"Lugares",c:["Eiffel","Francia","Louvre","rom\xE1ntica","Sena","croissant","luz","Notre","Dame","Montmartre","amor","capital"]},{p:"Roma",t:"Lugares",c:["Coliseo","Italia","Vaticano","Papa","eterna","C\xE9sar","gladiadores","Fontana","Trevi","imperio","caminos"]},{p:"coche",t:"Transporte",c:["ruedas","volante","motor","conducir","gasolina","carnet","aparcar","autopista","claxon","maletero","matr\xEDcula","taller"]},{p:"avi\xF3n",t:"Transporte",c:["alas","piloto","volar","aeropuerto","turbulencias","despegue","nubes","ventanilla","azafata","billete","vuelo","cielo"]},{p:"barco",t:"Transporte",c:["mar","capit\xE1n","puerto","ancla","vela","marinero","tim\xF3n","naufragio","crucero","proa","popa","navegar"]},{p:"tren",t:"Transporte",c:["v\xEDas","estaci\xF3n","vag\xF3n","locomotora","AVE","revisor","and\xE9n","billete","maquinista","t\xFAnel","chucuch\xFA","viaje"]},{p:"bicicleta",t:"Transporte",c:["pedales","ruedas","manillar","cadena","timbre","sill\xEDn","casco","carril","pinchazo","monta\xF1a","equilibrio","ciclista"]},{p:"moto",t:"Transporte",c:["casco","ruedas","acelerar","Vespa","motorista","dos","manillar","escape","carretera","velocidad","ruido"]},{p:"autob\xFAs",t:"Transporte",c:["parada","conductor","billete","l\xEDnea","urbano","pasajeros","escolar","dos","pisos","asiento","ruta","bonob\xFAs"]},{p:"helic\xF3ptero",t:"Transporte",c:["aspas","rescate","volar","piloto","ruido","aterrizar","helipuerto","rotor","despegar","cielo","vertical"]},{p:"cohete",t:"Transporte",c:["espacio","despegue","cuenta","atr\xE1s","astronauta","NASA","luna","combustible","lanzamiento","propulsi\xF3n","cielo","fuego"]},{p:"submarino",t:"Transporte",c:["periscopio","profundidades","amarillo","mar","sumergible","torpedo","sonar","Nautilus","Beatles","agua","hundirse","bajo"]},{p:"sol",t:"Naturaleza",c:["estrella","calor","verano","rayos","luz","amanecer","gafas","crema","playa","quemar","atardecer","brillar"]},{p:"luna",t:"Naturaleza",c:["noche","llena","creciente","menguante","sat\xE9lite","astronauta","lobo","aullar","miel","cr\xE1teres","eclipse","mareas"]},{p:"estrella",t:"Naturaleza",c:["brillar","cielo","noche","fugaz","puntas","constelaci\xF3n","polar","deseo","cinco","mar","Hollywood","galaxia"]},{p:"lluvia",t:"Naturaleza",c:["nubes","paraguas","gotas","charcos","mojarse","tormenta","chubasco","oto\xF1o","agua","arco\xEDris","chaparr\xF3n"]},{p:"nieve",t:"Naturaleza",c:["blanca","fr\xEDo","copos","mu\xF1eco","esqu\xED","invierno","bola","trineo","monta\xF1a","helada"]},{p:"arco\xEDris",t:"Naturaleza",c:["colores","siete","lluvia","sol","cielo","arco","tesoro","duende","olla","oro","curva","bandera"]},{p:"volc\xE1n",t:"Naturaleza",c:["lava","erupci\xF3n","cr\xE1ter","magma","ceniza","monta\xF1a","fuego","La","Palma","Vesubio","Teide","humo"]},{p:"r\xEDo",t:"Naturaleza",c:["cauce","orilla","corriente","agua","puente","desembocadura","afluente","Ebro","Tajo","caudal","pescar","fluir"]},{p:"mar",t:"Naturaleza",c:["olas","sal","azul","playa","barco","peces","orilla","Mediterr\xE1neo","Cant\xE1brico","oc\xE9ano","agua"]},{p:"\xE1rbol",t:"Naturaleza",c:["tronco","ramas","hojas","ra\xEDces","sombra","bosque","madera","copa","pino","roble","fruta","plantar"]},{p:"flor",t:"Naturaleza",c:["p\xE9talos","tallo","polen","ramo","jard\xEDn","rosa","margarita","primavera","oler","abeja","maceta"]},{p:"rosa",t:"Naturaleza",c:["espinas","roja","p\xE9talos","Sant","Jordi","flor","ramo","amor","tallo","perfume","jard\xEDn","enamorados"]},{p:"tormenta",t:"Naturaleza",c:["rayos","truenos","rel\xE1mpago","lluvia","nubes","viento","miedo","el\xE9ctrica","granizo","cielo","oscuro","hurac\xE1n"]},{p:"viento",t:"Naturaleza",c:["soplar","aire","molino","cometa","hurac\xE1n","brisa","velero","r\xE1faga","veleta","ventisca","levante","poniente"]},{p:"fuego",t:"Naturaleza",c:["llamas","calor","hoguera","cerillas","humo","quemar","chimenea","bombero","le\xF1a","ceniza","brasas","incendio"]},{p:"nube",t:"Naturaleza",c:["cielo","blanca","algod\xF3n","lluvia","gris","flotar","vapor","tormenta","niebla","c\xFAmulo","algodonosa","sombra"]},{p:"cabeza",t:"Cuerpo",c:["pelo","cara","ojos","orejas","cerebro","cuello","gorro","dolor","cr\xE1neo","sombrero","pensar","frente"]},{p:"mano",t:"Cuerpo",c:["dedos","u\xF1as","palma","anillo","saludar","guante","pulgar","mu\xF1eca","derecha","izquierda","aplaudir","agarrar"]},{p:"pie",t:"Cuerpo",c:["dedos","zapato","calcet\xEDn","tal\xF3n","andar","planta","tobillo","pisar","u\xF1a","descalzo","patada","huella"]},{p:"ojo",t:"Cuerpo",c:["ver","pesta\xF1as","p\xE1rpado","pupila","gafas","l\xE1grima","mirada","iris","ceja","gui\xF1o","vista","lentillas"]},{p:"nariz",t:"Cuerpo",c:["oler","mocos","estornudo","Pinocho","respirar","fosas","olfato","pa\xF1uelo","payaso","cara","catarro","aguile\xF1a"]},{p:"boca",t:"Cuerpo",c:["labios","dientes","lengua","besar","hablar","comer","sonrisa","beso","muelas","abrir","saliva","carm\xEDn"]},{p:"coraz\xF3n",t:"Cuerpo",c:["latido","amor","sangre","pecho","rojo","\xF3rgano","cardi\xF3logo","pulso","enamorado","San","Valent\xEDn","bombear"]},{p:"diente",t:"Cuerpo",c:["muela","cepillo","boca","Ratoncito","P\xE9rez","caries","dentista","sonrisa","morder","blanco","leche","colmillo"]},{p:"pelo",t:"Cuerpo",c:["peine","cabeza","rizado","liso","rubio","moreno","peluquer\xEDa","champ\xFA","coleta","calvo","melena","trenza"]},{p:"camiseta",t:"Ropa",c:["manga","corta","algod\xF3n","verano","cuello","f\xFAtbol","dorsal","blanca","estampada","tirantes","talla","lavar"]},{p:"zapato",t:"Ropa",c:["pie","cordones","tac\xF3n","suela","par","Cenicienta","cristal","calzado","bet\xFAn","bota","n\xFAmero"]},{p:"sombrero",t:"Ropa",c:["cabeza","ala","copa","vaquero","mago","chistera","sol","paja","mexicano","gorra","Indiana","Jones"]},{p:"gafas",t:"Ropa",c:["ver","cristales","patillas","sol","miop\xEDa","graduadas","\xF3ptica","lentes","montura","nariz","vista","leer"]},{p:"bufanda",t:"Ropa",c:["cuello","fr\xEDo","lana","invierno","equipo","abrigo","tejer","larga","calor","guantes","gorro","enrollar"]},{p:"pijama",t:"Ropa",c:["dormir","cama","noche","fiesta","ositos","franela","zapatillas","camis\xF3n","c\xF3modo","casa","rayas","botones"]},{p:"ba\xF1ador",t:"Ropa",c:["playa","piscina","nadar","bikini","verano","toalla","mojado","arena","slip","tela","traje"]},{p:"vestido",t:"Ropa",c:["falda","fiesta","boda","novia","largo","corto","elegante","tela","coser","dise\xF1o","flores","gala"]},{p:"guitarra",t:"M\xFAsica",c:["cuerdas","flamenco","p\xFAa","acordes","espa\xF1ola","el\xE9ctrica","trastes","rock","concierto","Paco","Luc\xEDa","clavijas"]},{p:"piano",t:"M\xFAsica",c:["teclas","blancas","negras","pedal","cola","Mozart","Beethoven","partitura","cl\xE1sico","concierto","banqueta"]},{p:"tambor",t:"M\xFAsica",c:["baquetas","golpear","ritmo","percusi\xF3n","redoble","bater\xEDa","piel","bombo","Semana","Santa","ruido","desfile"]},{p:"viol\xEDn",t:"M\xFAsica",c:["arco","cuerdas","orquesta","cl\xE1sico","barbilla","Stradivarius","violonchelo","partitura","afinar","madera","tejado","Vivaldi"]},{p:"flauta",t:"M\xFAsica",c:["soplar","agujeros","colegio","Hamel\xEDn","dulce","travesera","notas","ratones","viento","dedos","melod\xEDa","pito"]},{p:"trompeta",t:"M\xFAsica",c:["soplar","boquilla","metal","jazz","pistones","viento","fanfarria","dorada","banda","Armstrong","ruido","charanga"]},{p:"micr\xF3fono",t:"M\xFAsica",c:["cantar","voz","karaoke","escenario","cable","altavoz","hablar","radio","entrevista","probando","uno","dos"]},{p:"concierto",t:"M\xFAsica",c:["escenario","banda","entradas","p\xFAblico","cantante","gira","m\xFAsica","directo","mechero","festival","altavoces","aplausos"]},{p:"karaoke",t:"M\xFAsica",c:["cantar","micr\xF3fono","letra","pantalla","amigos","desafinar","canci\xF3n","fiesta","bar","japon\xE9s","noche","singstar"]},{p:"pel\xEDcula",t:"Cine y TV",c:["cine","actor","director","guion","Oscar","rodaje","estreno","trailer","palomitas","escena","pantalla","taquilla"]},{p:"Titanic",t:"Cine y TV",c:["barco","iceberg","hundimiento","DiCaprio","Rose","Jack","mar","1912","transatl\xE1ntico","proa","volar","Celine"]},{p:"Superman",t:"Cine y TV",c:["capa","volar","kryptonita","h\xE9roe","Clark","Kent","periodista","Lois","rojo","azul","S","Metr\xF3polis"]},{p:"Batman",t:"Cine y TV",c:["murci\xE9lago","Gotham","Joker","Robin","capa","Bruce","Wayne","h\xE9roe","noche","m\xE1scara","batm\xF3vil","Alfred"]},{p:"Cenicienta",t:"Cine y TV",c:["zapato","cristal","calabaza","pr\xEDncipe","madrastra","hermanastras","baile","medianoche","hada","madrina","cuento","carroza"]},{p:"Pinocho",t:"Cine y TV",c:["nariz","mentira","madera","Gepetto","marioneta","grillo","crecer","ni\xF1o","ballena","cuento","Pepito","hilos"]},{p:"Dr\xE1cula",t:"Cine y TV",c:["vampiro","colmillos","sangre","Transilvania","ata\xFAd","ajo","noche","murci\xE9lago","capa","conde","estaca","castillo"]},{p:"Harry Potter",t:"Cine y TV",c:["mago","Hogwarts","varita","gafas","cicatriz","Hermione","Ron","Voldemort","escoba","lechuza","and\xE9n","Rowling"]},{p:"telediario",t:"Cine y TV",c:["noticias","presentador","informativo","tiempo","deportes","hora","actualidad","periodista","mediod\xEDa","noche","titulares","reportaje"]},{p:"concurso",t:"Cine y TV",c:["presentador","premio","bote","preguntas","plat\xF3","ganar","televisi\xF3n","pulsador","p\xFAblico","eliminado","finalista"]},{p:"dinosaurio",t:"Ciencia",c:["f\xF3sil","extinto","Jur\xE1sico","tiranosaurio","meteorito","huesos","enorme","reptil","Parque","prehist\xF3rico","huevo","museo"]},{p:"robot",t:"Ciencia",c:["m\xE1quina","metal","circuitos","inteligencia","artificial","androide","R2D2","programar","brazo","mec\xE1nico","futuro","cables"]},{p:"planeta",t:"Ciencia",c:["\xF3rbita","Marte","Tierra","J\xFApiter","sistema","solar","anillos","Saturno","espacio","telescopio","redondo","girar"]},{p:"im\xE1n",t:"Ciencia",c:["atraer","polo","norte","sur","metal","nevera","br\xFAjula","hierro","magnetismo","pegar","campo","repeler"]},{p:"microscopio",t:"Ciencia",c:["lente","c\xE9lulas","laboratorio","peque\xF1o","aumentar","bacterias","ver","muestra","cient\xEDfico","cristal","ocular","biolog\xEDa"]},{p:"telescopio",t:"Ciencia",c:["estrellas","lente","observatorio","astronom\xEDa","Galileo","cielo","planetas","lejos","ver","noche","Hubble","luna"]},{p:"libro",t:"Escuela",c:["p\xE1ginas","leer","autor","portada","cap\xEDtulos","biblioteca","novela","editorial","hojas","t\xEDtulo","\xEDndice","cuento"]},{p:"l\xE1piz",t:"Escuela",c:["escribir","goma","punta","grafito","afilar","sacapuntas","madera","dibujar","estuche","colores","borrar","mina"]},{p:"mochila",t:"Escuela",c:["espalda","colegio","libros","cremallera","asas","excursi\xF3n","llevar","cuadernos","ruedas","bolsillos","carga","viaje"]},{p:"pizarra",t:"Escuela",c:["tiza","borrador","clase","profesor","verde","negra","escribir","digital","aula","ejercicio","salir","colegio"]},{p:"examen",t:"Escuela",c:["nota","aprobar","suspender","preguntas","estudiar","nervios","chuleta","profesor","test","selectividad","evaluaci\xF3n","folio"]},{p:"vacaciones",t:"Escuela",c:["verano","viaje","descanso","playa","colegio","fin","maleta","hotel","agosto","libres","d\xEDas","relax"]},{p:"Navidad",t:"Fiestas",c:["\xE1rbol","bel\xE9n","regalos","turr\xF3n","villancicos","diciembre","Pap\xE1","Noel","nieve","estrella","cena","familia"]},{p:"cumplea\xF1os",t:"Fiestas",c:["velas","tarta","regalos","soplar","felicidades","fiesta","a\xF1os","globos","cantar","invitados","pi\xF1ata","edad"]},{p:"boda",t:"Fiestas",c:["novios","anillos","iglesia","vestido","blanco","arroz","banquete","tarta","luna","miel","invitados","altar"]},{p:"carnaval",t:"Fiestas",c:["disfraz","m\xE1scara","C\xE1diz","chirigota","Tenerife","desfile","comparsa","febrero","murga","confeti","R\xEDo","sardina"]},{p:"Halloween",t:"Fiestas",c:["calabaza","truco","trato","disfraz","bruja","fantasma","octubre","miedo","caramelos","esqueleto","zombi","noche"]},{p:"Reyes",t:"Fiestas",c:["Magos","Melchor","Gaspar","Baltasar","camellos","regalos","rosc\xF3n","cabalgata","enero","carb\xF3n","carta","seis"]},{p:"fantasma",t:"Fiestas",c:["s\xE1bana","blanco","susto","castillo","esp\xEDritu","miedo","aparecer","casa","encantada","cadenas","Casper","invisible"]},{p:"bruja",t:"Fiestas",c:["escoba","verruga","sombrero","caldero","p\xF3cima","gato","negro","volar","hechizo","manzana","Halloween","nariz"]},{p:"drag\xF3n",t:"Fiestas",c:["fuego","alas","escamas","San","Jorge","princesa","caballero","cueva","tesoro","volar","leyenda","Daenerys"]},{p:"corona",t:"Fiestas",c:["rey","reina","cabeza","oro","joyas","trono","princesa","palacio","diadema","monarqu\xEDa","real","laurel"]},{p:"tesoro",t:"Fiestas",c:["cofre","pirata","mapa","oro","isla","joyas","equis","enterrado","monedas","b\xFAsqueda","riqueza","brillar"]},{p:"regalo",t:"Fiestas",c:["envolver","lazo","papel","sorpresa","cumplea\xF1os","Navidad","abrir","caja","Reyes","detalle","tarjeta","obsequio"]},{p:"globo",t:"Fiestas",c:["hinchar","aire","helio","fiesta","explotar","cuerda","colores","aerost\xE1tico","flotar","cumplea\xF1os","pinchar","payaso"]},{p:"fuegos artificiales",t:"Fiestas",c:["cohetes","explosi\xF3n","noche","colores","p\xF3lvora","cielo","fiesta","Nochevieja","traca","ruido","masclet\xE0","luces"]},{p:"alegr\xEDa",t:"Emociones",c:["feliz","sonrisa","risa","contento","euforia","celebrar","fiesta","saltar","gozo","j\xFAbilo","buen","humor"]},{p:"miedo",t:"Emociones",c:["susto","temblar","p\xE1nico","terror","oscuridad","monstruo","gritar","fobia","cobarde","pesadilla","escalofr\xEDo","valiente"]},{p:"amor",t:"Emociones",c:["coraz\xF3n","pareja","beso","enamorado","cupido","flechazo","romance","novios","cari\xF1o","querer","San","Valent\xEDn"]},{p:"sue\xF1o",t:"Emociones",c:["dormir","cama","bostezo","noche","cansancio","siesta","almohada","ronquido","pesadilla","despertar","ojos"]},{p:"risa",t:"Emociones",c:["carcajada","chiste","cosquillas","jajaja","gracioso","humor","payaso","sonrisa","divertido","llorar","contagiosa"]},{p:"hambre",t:"Emociones",c:["comer","est\xF3mago","rugir","apetito","plato","ayuno","comida","merienda","glot\xF3n","fam\xE9lico","bocadillo","nevera"]},{p:"fr\xEDo",t:"Emociones",c:["invierno","temblar","abrigo","bufanda","hielo","tiritar","congelado","nieve","gorro","calefacci\xF3n","grados","polar"]},{p:"calor",t:"Emociones",c:["verano","sudar","sol","ventilador","aire","acondicionado","grados","abanico","playa","agosto","ola","bochorno"]},{p:"dinero",t:"Objetos",c:["euros","billetes","monedas","banco","cartera","ahorrar","pagar","cajero","hucha","precio","rico","sueldo"]},{p:"moneda",t:"Objetos",c:["euro","cara","cruz","metal","redonda","cambio","hucha","c\xE9ntimo","lanzar","bolsillo","tragaperras","dinero"]},{p:"tijeras",t:"Objetos",c:["cortar","papel","filo","hojas","peluquero","piedra","manualidades","costura","abrir","cerrar","afiladas"]},{p:"martillo",t:"Objetos",c:["clavo","golpear","herramienta","carpintero","mango","pared","Thor","caja","cuadro","yunque","bricolaje","dedo"]},{p:"vela",t:"Objetos",c:["cera","mecha","llama","apag\xF3n","soplar","cumplea\xF1os","luz","iglesia","arom\xE1tica","barco","candelabro"]},{p:"c\xE1mara",t:"Objetos",c:["foto","objetivo","flash","clic","carrete","selfie","grabar","v\xEDdeo","lente","fot\xF3grafo","\xE1lbum","enfocar"]},{p:"maleta",t:"Objetos",c:["viaje","ruedas","equipaje","aeropuerto","facturar","ropa","hacer","deshacer","mano","vacaciones","cremallera","cinta"]},{p:"botella",t:"Objetos",c:["agua","cristal","pl\xE1stico","tap\xF3n","vino","mensaje","beber","reciclar","litro","cuello","vac\xEDa","llena"]},{p:"pelota",t:"Objetos",c:["redonda","botar","jugar","lanzar","f\xFAtbol","tenis","goma","ni\xF1os","patada","rodar","bal\xF3n","playa"]},{p:"mu\xF1eca",t:"Objetos",c:["juguete","ni\xF1a","Barbie","pelo","vestido","casita","brazo","mano","reloj","porcelana","articulada","Chucky"]},{p:"cometa",t:"Objetos",c:["volar","viento","hilo","cielo","cola","papel","playa","Halley","astro","ni\xF1os","colores","tirar"]},{p:"bombilla",t:"Objetos",c:["luz","Edison","idea","l\xE1mpara","encender","fundida","vatios","interruptor","cristal","LED","brillar","electricidad"]},{p:"anillo",t:"Objetos",c:["dedo","boda","compromiso","oro","diamante","joya","Se\xF1or","alianza","joyero","brillante","c\xEDrculo"]},{p:"cuchara",t:"Objetos",c:["sopa","cubierto","tenedor","cuchillo","postre","comer","metal","palo","yogur","servir","madera"]},{p:"tenedor",t:"Objetos",c:["pinchar","cubiertos","dientes","cuchillo","cuchara","comer","plato","espaguetis","mesa","metal","p\xFAas","ensalada"]},{p:"mapa",t:"Objetos",c:["tesoro","orientarse","br\xFAjula","norte","carreteras","pa\xEDses","ciudad","GPS","atlas","papel","plano","ruta"]},{p:"br\xFAjula",t:"Objetos",c:["norte","aguja","orientarse","im\xE1n","sur","este","oeste","explorador","mapa","marinero","perdido","direcci\xF3n"]},{p:"cuadro",t:"Objetos",c:["marco","pintura","museo","pared","colgar","lienzo","pintor","retrato","paisaje","Mona","Lisa","galer\xEDa"]},{p:"peri\xF3dico",t:"Objetos",c:["noticias","papel","quiosco","titular","portada","diario","leer","prensa","crucigrama","deportes","domingo"]},{p:"gorila",t:"Animales",c:["enorme","primate","King","Kong","pecho","golpear","selva","plateado","fuerte","simio","mono","monta\xF1a"]},{p:"cebra",t:"Animales",c:["rayas","blanca","negra","sabana","caballo","\xC1frica","paso","peatones","manada","salvaje","Marty","rayada"]},{p:"koala",t:"Animales",c:["eucalipto","Australia","dormil\xF3n","marsupial","abrazar","\xE1rbol","gris","peluche","orejas","tierno","lento","rama"]},{p:"murci\xE9lago",t:"Animales",c:["cueva","noche","alas","Batman","colgar","boca","abajo","vampiro","ultrasonido","ciego","mam\xEDfero","volar"]},{p:"medusa",t:"Animales",c:["picadura","transparente","tent\xE1culos","playa","mar","gelatinosa","urticante","flotar","vinagre","veneno","Bob","Esponja"]},{p:"cangrejo",t:"Animales",c:["pinzas","caparaz\xF3n","playa","andar","lado","crust\xE1ceo","rocas","marisco","rojo","mar","ermita\xF1o","arena"]},{p:"foca",t:"Animales",c:["bigotes","hielo","aplaudir","acuario","polo","mar","piel","pez","nadar","lobo","marino","leones"]},{p:"ardilla",t:"Animales",c:["bellotas","nueces","cola","\xE1rbol","trepar","roedor","bosque","saltar","rojiza","parque","pi\xF1as","Scrat"]},{p:"mosquito",t:"Animales",c:["picadura","zumbido","verano","noche","sangre","repelente","insecto","picor","charca","tigre","chupar"]},{p:"d\xE1lmata",t:"Animales",c:["manchas","blanco","negro","ciento","uno","perro","bomberos","Cruella","pel\xEDcula","cachorro","Disney","raza"]},{p:"burro",t:"Animales",c:["rebuznar","orejas","carga","Platero","terco","asno","granja","Shrek","zanahoria","mula","campo","gris"]},{p:"pavo",t:"Animales",c:["Acci\xF3n","Gracias","plumas","real","cola","abanico","granja","gluglugl\xFA","ave","asado","Navidad","cresta"]},{p:"cuchillo",t:"Objetos",c:["cortar","filo","cocina","afilado","mango","cubierto","tenedor","hoja","carne","pan","peligro","acero"]},{p:"escalera",t:"Objetos",c:["pelda\xF1os","subir","bajar","mano","caracol","mec\xE1nica","pintor","tijera","piso","barandilla","altura"]},{p:"silbato",t:"Objetos",c:["\xE1rbitro","pito","soplar","sonido","falta","socorrista","entrenador","agudo","polic\xEDa","perro","llamar","final"]},{p:"paraguas cerrado",t:"Objetos",c:["bast\xF3n","lluvia","mango","doblado","funda","colgado","entrada","negro","abrirlo","varillas","tela","gotas"]},{p:"abanico",t:"Objetos",c:["calor","verano","aire","flamenco","abrir","cerrar","varillas","tela","se\xF1ora","sevillana","fresquito"]},{p:"peine",t:"Objetos",c:["pelo","p\xFAas","dientes","cepillo","raya","bolsillo","peluquer\xEDa","desenredar","espejo","p\xFAa","pl\xE1stico"]},{p:"cepillo",t:"Objetos",c:["dientes","pelo","cerdas","barrer","pasta","limpiar","mango","peinar","zapatos","u\xF1as","ropa"]},{p:"almendra",t:"Comida",c:["fruto","seco","c\xE1scara","turr\xF3n","mazap\xE1n","leche","\xE1rbol","flor","tostada","garrapi\xF1ada","marcona","salada"]},{p:"aceituna",t:"Comida",c:["olivo","hueso","verde","negra","rellena","anchoa","aperitivo","vermut","Ja\xE9n","manzanilla","banderilla"]},{p:"pimiento",t:"Comida",c:["rojo","verde","Padr\xF3n","pican","asado","piquillo","relleno","ensalada","huerta","morr\xF3n","sofrito","unos"]},{p:"mel\xF3n",t:"Comida",c:["verano","amarillo","jam\xF3n","pepitas","raja","c\xE1scara","sand\xEDa","dulce","fruta","piel","sapo","cantalupo"]},{p:"paraca\xEDdas",t:"Transporte",c:["saltar","avi\xF3n","ca\xEDda","libre","abrir","tela","cuerdas","aterrizar","mochila","aire","altura"]},{p:"globo aerost\xE1tico",t:"Transporte",c:["cesta","aire","caliente","quemador","volar","flotar","Phileas","Fogg","ochenta","d\xEDas","cielo","lento"]},{p:"tractor",t:"Transporte",c:["campo","agricultor","ruedas","grandes","arar","granja","remolque","verde","lento","surco","tierra","motor"]},{p:"ambulancia",t:"Transporte",c:["sirena","hospital","urgencias","camilla","enfermo","herido","m\xE9dico","luces","blanca","r\xE1pida","rescate","accidente"]},{p:"taxi",t:"Transporte",c:["tax\xEDmetro","carrera","parada","libre","verde","amarillo","Nueva","York","pasajero","conductor","propina"]},{p:"patinete",t:"Transporte",c:["ruedas","el\xE9ctrico","manillar","ni\xF1os","ciudad","acera","empujar","plataforma","bater\xEDa","urbano","freno"]},{p:"cascada",t:"Naturaleza",c:["agua","caer","r\xEDo","Ni\xE1gara","salto","roca","altura","espuma","ruido","natural","chorro","monta\xF1a"]},{p:"cueva",t:"Naturaleza",c:["oscura","estalactitas","murci\xE9lagos","gruta","espeleolog\xEDa","roca","prehistoria","pinturas","Altamira","eco","entrada","refugio"]},{p:"selva",t:"Naturaleza",c:["tropical","Amazonas","lianas","monos","Tarz\xE1n","jungla","lluvia","\xE1rboles","verde","h\xFAmeda","animales","Mowgli"]},{p:"oc\xE9ano",t:"Naturaleza",c:["Atl\xE1ntico","Pac\xEDfico","profundo","azul","ballenas","inmenso","olas","mar","agua","salada","barco","continentes"]},{p:"hielo",t:"Naturaleza",c:["fr\xEDo","cubito","congelado","resbalar","glaciar","patinar","pista","iceberg","nevera","agua","s\xF3lido","derretir"]},{p:"oto\xF1o",t:"Naturaleza",c:["hojas","caer","septiembre","casta\xF1as","marr\xF3n","estaci\xF3n","lluvia","setas","octubre","viento","colegio","amarillas"]},{p:"primavera",t:"Naturaleza",c:["flores","marzo","abril","estaci\xF3n","alergia","polen","mariposas","verde","golondrinas","sangre","altera","brotes"]},{p:"verano",t:"Naturaleza",c:["calor","playa","vacaciones","sol","piscina","helado","agosto","julio","estaci\xF3n","chanclas","bronceado","sand\xEDa"]},{p:"invierno",t:"Naturaleza",c:["fr\xEDo","nieve","diciembre","estaci\xF3n","abrigo","bufanda","chimenea","Navidad","gripe","enero","helada","calefacci\xF3n"]},{p:"oreja",t:"Cuerpo",c:["o\xEDr","escuchar","pendiente","l\xF3bulo","cabeza","sordo","soplillo","auricular","cera","t\xEDmpano","cotilla"]},{p:"rodilla",t:"Cuerpo",c:["pierna","doblar","menisco","r\xF3tula","arrodillarse","golpe","herida","articulaci\xF3n","pantal\xF3n","suelo","lesi\xF3n"]},{p:"espalda",t:"Cuerpo",c:["columna","v\xE9rtebras","dolor","mochila","detr\xE1s","nadar","masaje","hombros","lumbares","cargar","contractura","giro"]},{p:"dedo",t:"Cuerpo",c:["u\xF1a","mano","pie","anillo","pulgar","\xEDndice","me\xF1ique","anular","coraz\xF3n","se\xF1alar","huella","cinco"]},{p:"bigote",t:"Cuerpo",c:["pelo","labio","afeitar","Dal\xED","barba","cara","hombre","postizo","mostacho","cepillo","Mario","Bros"]},{p:"calcet\xEDn",t:"Ropa",c:["pie","zapato","par","pareja","lavadora","perdido","algod\xF3n","raya","agujero","dedo","tobillo","lana"]},{p:"corbata",t:"Ropa",c:["cuello","nudo","traje","camisa","elegante","oficina","seda","jefe","boda","padre","regalo","ejecutivo"]},{p:"chaqueta",t:"Ropa",c:["abrigo","mangas","botones","cremallera","traje","fr\xEDo","bolsillos","cuero","vaquera","percha","armario","americana"]},{p:"botas",t:"Ropa",c:["pies","lluvia","agua","altas","cuero","vaquero","monta\xF1a","cordones","invierno","f\xFAtbol","gato","siete"]},{p:"guantes",t:"Ropa",c:["manos","fr\xEDo","dedos","lana","boxeo","portero","l\xE1tex","cirujano","invierno","par","piel","cocina"]},{p:"gorra",t:"Ropa",c:["visera","cabeza","sol","b\xE9isbol","deporte","hacia","atr\xE1s","logo","rapero","regalo","verano","plana"]},{p:"reloj de arena",t:"Objetos",c:["tiempo","cristal","granos","girar","caer","cuello","juego","mesa","minutos","antiguo","medir","vuelta"]},{p:"espada",t:"Objetos",c:["filo","caballero","vaina","esgrima","pirata","samur\xE1i","Excalibur","l\xE1ser","duelo","acero","empu\xF1adura","guerra"]},{p:"escudo",t:"Objetos",c:["defensa","caballero","armadura","espada","flecha","proteger","Capit\xE1n","Am\xE9rica","emblema","equipo","her\xE1ldica","guerrero"]},{p:"flecha",t:"Objetos",c:["arco","punta","diana","Cupido","disparar","indio","Robin","Hood","direcci\xF3n","se\xF1al","carcaj","tiro"]},{p:"dados",t:"Objetos",c:["seis","caras","puntos","suerte","cubilete","parch\xEDs","tirar","juego","casino","azar","cubo","n\xFAmeros"]},{p:"cartas",t:"Objetos",c:["baraja","p\xF3ker","mus","naipes","repartir","as","oros","copas","bastos","espadas","mago","partida"]},{p:"parch\xEDs",t:"Objetos",c:["tablero","fichas","dados","colores","casa","meta","comer","veinte","cuatro","familia","juego","mesa"]},{p:"puzle",t:"Objetos",c:["piezas","encajar","imagen","mil","rompecabezas","mesa","paciencia","caja","esquinas","montar","cart\xF3n","juego"]},{p:"cine mudo",t:"Cine y TV",c:["Chaplin","silencio","blanco","negro","carteles","piano","antiguo","bigote","bomb\xEDn","bast\xF3n","pel\xEDcula","gestos"]},{p:"superh\xE9roe",t:"Cine y TV",c:["capa","poderes","salvar","villano","m\xE1scara","c\xF3mic","Marvel","traje","volar","identidad","secreta","h\xE9roe"]},{p:"dibujos animados",t:"Cine y TV",c:["ni\xF1os","televisi\xF3n","personajes","Disney","ma\xF1ana","s\xE1bado","serie","colores","Pixar","cartoon","divertidos"]},{p:"telenovela",t:"Cine y TV",c:["amor","drama","cap\xEDtulos","venezolana","mexicana","l\xE1grimas","culebr\xF3n","gemelo","malvada","televisi\xF3n","larga","serie"]},{p:"alfombra roja",t:"Cine y TV",c:["famosos","estreno","Oscar","fot\xF3grafos","gala","vestidos","Hollywood","photocall","entrada","glamour","actores","Cannes"]},{p:"Mundial",t:"Deportes",c:["f\xFAtbol","selecciones","cuatro","a\xF1os","copa","Iniesta","Sud\xE1frica","campeones","estrella","grupos","final","pa\xEDses"]},{p:"Olimpiadas",t:"Deportes",c:["aros","cinco","medalla","oro","antorcha","atletas","cuatro","a\xF1os","Grecia","Barcelona","Cobi","podio"]},{p:"gimnasio",t:"Deportes",c:["pesas","m\xE1quinas","m\xFAsculos","entrenar","sudar","cinta","correr","monitor","cuota","abdominales","fuerte","deporte"]},{p:"piscina",t:"Deportes",c:["agua","nadar","ba\xF1ador","socorrista","trampol\xEDn","verano","cloro","gorro","flotador","tumbona","largos","azulejos"]},{p:"\xE1rbitro",t:"Deportes",c:["silbato","tarjeta","roja","amarilla","falta","penalti","partido","VAR","fuera","juego","l\xEDnea","negro"]},{p:"medalla",t:"Deportes",c:["oro","plata","bronce","podio","cuello","ganador","premio","olimpiadas","cinta","campe\xF3n","metal","honor"]},{p:"trofeo",t:"Deportes",c:["copa","ganar","campe\xF3n","vitrina","premio","dorado","levantar","final","t\xEDtulo","victoria","equipo","orgullo"]},{p:"gol",t:"Deportes",c:["porter\xEDa","red","bal\xF3n","marcar","celebrar","delantero","f\xFAtbol","grito","portero","penalti","remate"]},{p:"tiempo",t:"Ciencia",c:["reloj","horas","minutos","segundos","pasar","calendario","m\xE1quina","viajar","cron\xF3metro","meteorolog\xEDa","lluvia","sol"]},{p:"calendario",t:"Ciencia",c:["d\xEDas","meses","a\xF1o","semanas","fechas","pared","hoja","enero","diciembre","agenda","festivos","cumplea\xF1os"]},{p:"pir\xE1mide",t:"Lugares",c:["Egipto","fara\xF3n","momia","Giza","tri\xE1ngulo","desierto","tumba","esfinge","Keops","piedra","antigua","maravilla"]},{p:"torre Eiffel",t:"Lugares",c:["Par\xEDs","Francia","hierro","alta","monumento","Gustave","1889","turistas","iluminada","s\xEDmbolo","luz","rom\xE1ntica"]},{p:"faro",t:"Lugares",c:["luz","costa","barcos","torre","noche","acantilado","girar","se\xF1al","puerto","mar","guiar"]},{p:"puente",t:"Lugares",c:["r\xEDo","cruzar","orilla","pilares","colgante","Golden","Gate","ciudad","unir","carretera","festivo","largo"]},{p:"granja",t:"Lugares",c:["vacas","gallinas","cerdos","tractor","campo","establo","animales","huevos","heno","pajar","escuela"]},{p:"supermercado",t:"Lugares",c:["carro","compra","caja","cola","ofertas","pasillos","estanter\xEDas","cajera","ticket","bolsa","productos","abierto"]},{p:"hotel",t:"Lugares",c:["habitaci\xF3n","recepci\xF3n","reserva","llave","estrellas","vacaciones","botones","piscina","desayuno","buffet","hu\xE9sped","maleta"]},{p:"peluquer\xEDa",t:"Lugares",c:["corte","pelo","tijeras","secador","lavar","tinte","cita","peine","espejo","silla","estilista","mechas"]},{p:"oficina",t:"Lugares",c:["trabajo","jefe","ordenador","mesa","reuni\xF3n","caf\xE9","compa\xF1eros","horario","papeles","impresora","correo","lunes"]}];var Va=wh,zt=n=>String(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g,"").normalize("NFC").replace(/[^a-z0-9ñ ]/g," ").replace(/\s+/g," ").trim(),q2=n=>n.length<=3?n:n.replace(/[aeiou]+$/,"");function F2(n,e){if(n===e)return!0;for(let[i,a]of[[n,e],[e,n]]){let s=q2(i);if(s.length>=4&&a.startsWith(s)||s.length===3&&a.startsWith(s)&&a.length<=s.length+4)return!0}let t=0;for(;t<Math.min(n.length,e.length)&&n[t]===e[t];)t++;return t>=5}function Ah(n,e){let t=zt(e).split(" ").filter(i=>i.length>=3);return zt(n).split(" ").some(i=>i&&t.some(a=>F2(i,a)))}var Ch=n=>zt(n).split(" ").filter(Boolean);function O2(n,e){let t=n.length,i=e.length;if(Math.abs(t-i)>2)return 9;let a=Array.from({length:t+1},(s,r)=>[r]);for(let s=1;s<=i;s++)a[0][s]=s;for(let s=1;s<=t;s++)for(let r=1;r<=i;r++)a[s][r]=Math.min(a[s-1][r]+1,a[s][r-1]+1,a[s-1][r-1]+(n[s-1]===e[r-1]?0:1));return a[t][i]}function yn(n,e){let t=zt(n).replace(/^(el|la|los|las|un|una|unos|unas) /,""),i=zt(e);if(!t)return!1;if(t===i||t.replace(/ /g,"")===i.replace(/ /g,"")||t.replace(/e?s$/,"")===i.replace(/e?s$/,"")||i.length>=6&&O2(t,i)<=1)return!0;let a=i.split(" ").pop();return i.includes(" ")&&a.length>=5&&t===a&&!/^(de|del)$/.test(a)}var Tp=wh.map(n=>{let e=new Set;return n.c.forEach(t=>zt(t).split(" ").forEach(i=>i.length>1&&e.add(i))),e.add(zt(n.t)),{w:n,s:e,n:zt(n.p)}});function B2(n,e){let t=0;for(let i of e){if(n.s.has(i)){t+=1;continue}if(i.length>=5){for(let a of n.s)if(a.length>=5&&(a.startsWith(i.slice(0,5))||i.startsWith(a.slice(0,5)))){t+=.6;break}}}return t}function la(n,e,{habil:t=.75,fallos:i=[],tema:a=null}={}){let s=e.length;if(!s)return null;let r=new Set(i.map(zt)),o=Tp.filter(d=>!r.has(d.n)).map(d=>({e:d,sc:B2(d,e)+(a&&d.w.t===a?.3:0)+Math.random()*.45})).sort((d,h)=>h.sc-d.sc),l=Tp.find(d=>d.w.p===n.p),c=Math.min(.85,t*(.05+.11*s));if(l&&!r.has(l.n)&&Math.random()<c)return n.p;let u=o[0];if(u&&u.sc>=1+(Math.random()<t?0:.8))return u.e.w.p;if(Math.random()<.25+.05*s){let d=o.filter(h=>h.e.w.t===(a||n.t)).slice(0,6);if(d.length)return Si(d).e.w.p}return null}var Cc=(n,e)=>Math.min(.92,e*(.12+.2*n)),Kr=n=>n.c.slice().reverse(),Rh=(n,e=12)=>n.c.slice(0,e);function ri(n,e,t=null){let i=Ls(Va.filter(s=>!n.usadas.has(s.p)&&(!t||t(s))));i.length<e&&(n.usadas.clear(),i=Ls(Va.filter(s=>!t||t(s))));let a=i.slice(0,e);return a.forEach(s=>n.usadas.add(s.p)),a}var Ph=Va.filter((n,e)=>e%5===0&&!n.p.includes(" ")),Rc=n=>Ph.includes(n);function ca(n){if(!n)return;let e=(t,i)=>`<div class="eq ${t.humano?"tu":""} ${n.turno===i?"act":""}" style="--c:${t.color}"><div class="en">${ke(t.nombre)}${t.humano?" \xB7 T\xDA":""}</div><div class="ep">${t.puntos}</div><div class="em">${t.miembros.map(a=>ke(a.emoji)).join(" ")}</div></div>`;ve("#hudA").innerHTML=e(n.eq[0],0),ve("#hudB").innerHTML=e(n.eq[1],1),ve("#hudBote").textContent=n.bote?"BOTE "+sn(n.bote):"",ve("#hud").classList.remove("hidden")}var Qr=()=>ve("#juego");function Ei(){let n=Qr();n.classList.add("hidden"),n.innerHTML="",n.className="hidden"}function ua({modo:n="dar",titulo:e="",placeholder:t="",pasar:i=!0,auto:a=()=>null,autoMs:s=800}){let r=Qr();r.className="jg-"+n,r.innerHTML=`
    <div class="jg-cab"><b>${ke(e)}</b><span class="jg-cont"></span></div>
    <div class="jg-cartas"></div>
    <div class="jg-pistas"></div>
    <div class="jg-fila"><input class="jg-in" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="40" placeholder="${ke(t)}"><button class="jg-ok">${n==="dar"?"Dar pista \u25B6":"Responder \u25B6"}</button>${i?'<button class="jg-pasar">Pasar \u23ED</button>':""}</div>
    <div class="jg-ideas"></div>`;let o=r.querySelector(".jg-in"),l=null,c=!1,u=null,d=m=>{if(!l||c)return;let v=l;l=null,clearTimeout(u),v(m)},h=()=>{let m=o.value.trim();m&&(o.value="",ce.play("tecla"),d({tipo:"texto",v:m}))};r.querySelector(".jg-ok").onclick=m=>{m.stopPropagation(),h()};let f=r.querySelector(".jg-pasar");return f&&(f.onclick=m=>{m.stopPropagation(),ce.play("tecla"),d({tipo:"pasar"})}),o.onkeydown=m=>{m.stopPropagation(),m.key==="Enter"&&h(),m.key==="Escape"&&window.__back&&window.__back()},o.onpointerdown=m=>m.stopPropagation(),r.onpointerdown=m=>m.stopPropagation(),r.classList.remove("hidden"),matchMedia("(pointer: coarse)").matches||setTimeout(()=>o.focus(),50),{siguiente(){return un(new Promise(m=>{l=m,clearTimeout(u),window.__AUTO&&(u=setTimeout(()=>{let v=a();v!==void 0&&d(v===null?{tipo:"pasar"}:{tipo:"texto",v})},s/ra()))}))},cartas(m){r.querySelector(".jg-cartas").innerHTML=m},pistas(m,v=""){r.querySelector(".jg-pistas").innerHTML=m.map(g=>`<span class="pz ${v}">${ke(g)}</span>`).join("")},contador(m){r.querySelector(".jg-cont").textContent=m},ideas(m){let v=r.querySelector(".jg-ideas");v.innerHTML=m.length?"<small>Ideas:</small>":"",m.forEach(g=>{let p=document.createElement("button");p.textContent=g,p.onclick=w=>{w.stopPropagation(),ce.play("tecla"),d({tipo:"texto",v:g})},v.appendChild(p)})},bloquear(m){c=m,r.classList.toggle("bloq",m)},foco(){o.focus()},cancelar(){l=null,clearTimeout(u)}}}var wp=(n,e)=>n.map((t,i)=>`<div class="carta ${t.est||""} ${i===e?"act":""}"><small>${ke(t.t)}</small>${ke(t.p)}</div>`).join("");function Ap({titulo:n="",auto:e=()=>!1}){let t=Qr();t.className="jg-puls",t.innerHTML=`<div class="jg-cab"><b>${ke(n)}</b><span class="jg-cont"></span></div><div class="jg-pistas"></div><button class="puls">\u{1F534} PULSAR<small>o barra espaciadora</small></button>`;let i=null,a=null,s=t.querySelector(".puls"),r=()=>{if(i){let l=i;i=null,clearTimeout(a),ce.play("pulsador"),l("PULSA")}};s.onclick=l=>{l.stopPropagation(),r()};let o=l=>{l.code==="Space"&&!Qr().classList.contains("hidden")&&Qr().classList.contains("jg-puls")&&(l.preventDefault(),r())};return addEventListener("keydown",o),t.onpointerdown=l=>l.stopPropagation(),t.classList.remove("hidden"),{esperar(){return un(new Promise(l=>{i=l,window.__AUTO&&e()&&(a=setTimeout(r,500/ra()))}))},cancelar(){i=null,clearTimeout(a)},pistas(l){t.querySelector(".jg-pistas").innerHTML=l.map((c,u)=>`<span class="pz">${ke(c)}<em>${[25,20,15,10,5][u]}</em></span>`).join("")},contador(l){t.querySelector(".jg-cont").textContent=l},activo(l){s.disabled=!l},quitar(){removeEventListener("keydown",o)}}}var Pc=(n,e)=>bn(n,Si(Ac[e]));async function Cn(n,e=2600){if(An(n,e+800),!xe.voz)return Qe(Math.max(1200,n.length*45));await un(Promise.race([ce.say(n,"davefx",{pregunta:!0}),new Promise(t=>setTimeout(t,e+3e3))]))}async function Ih(n){if(An("\u{1F50E} "+n,2600),!xe.voz||!xe.lee)return Qe(900);await un(Promise.race([ce.say(n,"davefx",{pregunta:!0}),new Promise(e=>setTimeout(e,2200))]))}async function eo(n,e,t,i=""){n.eq[e].puntos+=t,ca(n),t>0&&(ce.play("acierto"),ce.play("aplausos"),ct(`+${t} puntos \xB7 ${n.eq[e].nombre}${i?" \xB7 "+i:""}`,2200)),await Qe(600)}async function ha(n,e){let{eq:t,giver:i,palabras:a,maxPistas:s=25,seg:r=45,titulo:o=""}=e,l=i.humano,c=!l&&t.humano,u=e.adivinos||t.miembros.filter(S=>S!==i&&!S.humano),d=a.map(S=>({...S,est:"",pistas:[],fallos:[]})),h=0,f=0,m=0;n.turno=n.eq.indexOf(t),ca(n);let v=new Tc(e.ilimitado?1/0:r,S=>Bt.timer(S));Bt.ronda(o);let g=()=>d.filter(S=>!S.est),p=()=>{let S=d.findIndex((_,T)=>T>h&&!_.est);h=S>=0?S:d.findIndex(_=>!_.est)},w=()=>`Pistas ${f}/${s} \xB7 Aciertos ${m}/${d.length}`,C=async(S,_)=>{S.est="ok",m++,ce.play("acierto"),_&&_.fig!=null&&n.P.salta(_.fig),ct(`\u2705 ${S.p.toUpperCase()}`,1200)},b=null;l?b=ua({modo:"dar",titulo:o||"Da pistas a tus famosos",placeholder:"Escribe una pista (sin la palabra ni derivadas)",auto:()=>{let S=d[h];return Kr(S).filter(T=>!S.pistas.includes(zt(T)))[0]||null}}):c&&(b=ua({modo:"adivinar",titulo:o||`${i.nombre} te da pistas`,placeholder:"\xBFQu\xE9 palabra es?",autoMs:1600,auto:()=>{let S=d[h];return S.pistas.length>=2&&Math.random()<.55?S.p:void 0}}));let M=()=>{if(!b){Bt.ronda(`${o} \xB7 ${w()}`);return}b.contador(w()),b.cartas(l?wp(d,h):`<div class="carta act"><small>${c?"Palabra "+(d.filter(_=>_.est).length+1)+" de "+d.length:""}</small>${c?"\xBF?":""}</div>`+d.map(_=>`<i class="mini ${_.est}">${_.est==="ok"?"\u2714":_.est==="ko"?"\u2716":"\u2022"}</i>`).join(""));let S=d[h];S&&b.pistas(S.pistas.map((_,T)=>_).concat(S.fallos.map(_=>"\u2716 "+_))),l&&S&&b.ideas(Kr(S).filter(_=>!S.pistas.includes(zt(_))).slice(0,5))};n.P.pantalla("texto",{titulo:o,texto:l?"Da pistas":i.nombre}),v.start(),M();try{for(;g().length&&!v.terminado&&f<s;){let S=d[h];if(l){let _=await Promise.race([b.siguiente(),v.fin]);if(_==="TIEMPO"||_==="STOP")break;if(_.tipo==="pasar"){g().length>1&&(p(),M());continue}let T=Ch(_.v),R=[];for(let k of T){if(Ah(k,S.p)){ce.play("fallo"),ct("\u26D4 "+qe.ilegal,2200);continue}if(f>=s)break;R.push(k),f++}if(!R.length){M();continue}S.pistas.push(...R),M(),b.bloquear(!0);let U=u[(S.pistas.length+S.fallos.length)%u.length];await Qe(500);let N=la(S,S.pistas,{habil:U.habil,fallos:S.fallos});N?(await bn(U,N),yn(N,S.p)?(await C(S,U),p()):(S.fallos.push(N),ce.play("fallo"))):Math.random()<.4&&await Pc(U,"nose"),b.bloquear(!1),M()}else{let _=Kr(S).filter(R=>!S.pistas.includes(zt(R)));if(!_.length){S.est="ko",p(),M();continue}let T=_[0];if(S.pistas.push(zt(T)),f++,An(T,1800,i.fig,i.nombre),xe.voz&&!e.rapido&&ce.say(T,i.voz,{pregunta:!0}),M(),c){let R=await Promise.race([b.siguiente(),Qe(2800),v.fin]);if(R==="TIEMPO"||R==="STOP")break;if(R&&R.tipo==="texto"){yn(R.v,S.p)?(await C(S,n.yo),p()):(S.fallos.push(R.v),ce.play("fallo"),ct("\u2716 "+R.v,1e3)),M();continue}if(R&&R.tipo==="pasar"){S.est="ko",ct("\u23ED Era \xAB"+S.p+"\xBB",1500),p(),M();continue}if(S.pistas.length>=4&&u.length&&Math.random()<.35){let U=u[0],N=la(S,S.pistas,{habil:U.habil*.8,fallos:S.fallos});N&&(await bn(U,N),yn(N,S.p)?(await C(S,U),p()):S.fallos.push(N),M())}}else{await Qe(e.rapido?700:1300);let R=u[S.pistas.length%u.length],U=la(S,S.pistas,{habil:R.habil,fallos:S.fallos});U&&(e.rapido?An(U,1200,R.fig,R.nombre):await bn(R,U),yn(U,S.p)?(await C(S,R),p()):S.fallos.push(U)),await Qe(e.rapido?300:500),M()}}}}finally{v.stop(),Ei(),n.turno=-1}let E=v.ilimitado?0:Math.max(0,Math.round(v.rest));return Bt.sinTimer(),f>=s&&g().length?await $e(qe.sinPistas):v.terminado&&g().length&&!v.ilimitado&&await $e(qe.tiempo),g().length&&ct("Faltaron: "+g().map(S=>S.p).join(", "),3e3),{aciertos:m,pistas:f,resto:E,todas:m===d.length}}async function Lh(n,e,{palabras:t=4}={}){ce.music("tension"),await Gn("La repesca","Hasta 15 pistas por palabra \xB7 cuantas menos, m\xE1s puntos"),n.P.banda("La repesca"),await $e(qe.repesca),n.cam("presentador");let i=[{...n.yo,pts:0},{...e,pts:0}],a=ri(n,t,Rc);for(let r=0;r<a.length;r++){let o=r%2,l=i[o],c=a[r],u=Rh(c,15),d=[];n.cam(o===0?"sofaB":"sofaA"),Bt.ronda(`Repesca \xB7 palabra ${r+1}/${a.length} \xB7 juega ${l.nombre}`),await z2(l.nombre),n.P.pantalla("texto",{titulo:"REPESCA \xB7 "+c.t,texto:"\xBF?"});let h=l.humano?ua({modo:"adivinar",titulo:"Repesca \xB7 tema: "+c.t,placeholder:"Tu respuesta",autoMs:1500,auto:()=>d.length>=3&&Math.random()<.6?c.p:void 0}):null,f=0;for(let m=0;m<u.length;m++)if(d.push(u[m]),h&&(h.pistas(d),h.contador(`Pista ${m+1} \xB7 vale ${16-(m+1)} puntos`)),await Ih(u[m]),l.humano){let v=await Promise.race([h.siguiente(),Qe(3800)]);if(v&&v.tipo==="texto"){if(yn(v.v,c.p)){f=16-(m+1);break}ce.play("fallo"),ct("\u2716 "+v.v,1e3)}else if(v&&v.tipo==="pasar")break}else{await Qe(900);let v=Math.random()<Cc(m,l.habil*.75)?la(c,d.map(zt),{habil:l.habil}):null;if(v){if(await bn(l,v),yn(v,c.p)){f=16-(m+1);break}ce.play("fallo")}}h&&Ei(),l.pts+=f,await Cn(f?`\xA1Correcto! Era ${c.p}. ${f} puntos.`:`Era ${c.p}. Cero puntos.`),f&&ce.play("acierto"),Bt.ronda(`Repesca \xB7 ${i[0].nombre} ${i[0].pts} \xB7 ${i[1].nombre} ${i[1].pts}`)}let s=i[0].pts>=i[1].pts;return await Gn(s?"\xA1Te quedas!":"Te vas a casa",`${i[0].nombre} ${i[0].pts} \xB7 ${i[1].nombre} ${i[1].pts}`),s}async function z2(n){ct("\u{1F3AF} Turno de "+n,1500),await Qe(500)}async function Nh(n){ce.music("trilha",{cancion:!0}),n.P.banda("La apuesta"),await Gn("La apuesta","5 palabras \xB7 45 segundos \xB7 apuesta a la baja desde 25 pistas"),await $e(qe.apuesta);let e=n.h,t=1-e,i=n.eq[t].miembros[0];n.cam("sofas");let a=25,s=Math.random()<.5,r=null,o=9+Math.floor(Math.random()*6);for(;!r;)if(Bt.ronda(`La apuesta \xB7 ${a} pistas`),n.P.pantalla("texto",{titulo:"LA APUESTA",texto:a+" pistas"}),s){let u=[1,2,3].filter(h=>a-h>=5).map(h=>`<button class="ab" data-z="${a-h}">Bajo a ${a-h}</button>`).join(""),d=await bp(`<div class="apuesta"><h3>LA APUESTA</h3><div class="ap-n">${a}</div><p>pistas para 5 palabras. ${ke(i.nombre)} dice que lo hace con ${a}.</p><div class="ap-b">${u}<button class="ab hz" data-z="hazlo">\xA1Hazlo t\xFA!</button></div></div>`);if(d==="hazlo"){r=t;break}a=+d,s=!1,ce.play("pop")}else{if(await Qe(700),a-1<o){await Pc(i,"hazlo"),r=e;break}a=Math.max(o,a-(1+Math.floor(Math.random()*2))),await bn(i,`Lo hago con ${a} pistas.`),s=!0}let l=n.eq[r];await Cn(`${l.nombre} juega con ${a} pistas.`),await $e(r===e?qe.apuestaJuegas:qe.apuestaJuegaRival),n.cam(r===0?"sofaA":"sofaB"),(await ha(n,{eq:l,giver:l.miembros[0],palabras:ri(n,5),maxPistas:a,seg:45,titulo:`La apuesta \xB7 ${a} pistas`,rapido:!l.humano})).todas?(await $e(qe.apuestaOk),await eo(n,r,75,"La apuesta")):(ce.play("ooh"),await $e(qe.apuestaKo))}async function Dh(n){ce.music("trilha",{cancion:!0}),n.P.banda("Uno contra uno"),await Gn("Uno contra uno","Misma palabra \xB7 una pista por turno \xB7 25 puntos por ronda"),await $e(qe.uno);let e=n.h,t=1-e;for(let i=0;i<3;i++){let a=n.eq[e].miembros[i],s=n.eq[t].miembros[i],r=ri(n,1)[0];await Cn(`Ronda ${i+1}: ${a.nombre} contra ${s.nombre}.`),i===0?await $e(qe.unoTuDas):i===1&&await $e(qe.unoTuAdivinas);let o=Math.random()<.5?e:t,l=25,c=-1,u=[],d=[],h=new Set,f=()=>Kr(r).filter(g=>!h.has(zt(g))),m=null;a.humano?m=ua({modo:"dar",titulo:`Uno contra uno \xB7 ${r.p.toUpperCase()}`,placeholder:"UNA pista",pasar:!1,auto:()=>f()[0]||"pista"}):m=ua({modo:"adivinar",titulo:`Uno contra uno \xB7 ronda ${i+1}`,placeholder:"\xBFQu\xE9 palabra es?",pasar:!0,autoMs:1400,auto:()=>u.length>=2&&Math.random()<.6?r.p:void 0}),n.P.pantalla("texto",{titulo:"UNO CONTRA UNO",texto:l+" puntos"});for(let g=0;g<12&&c<0;g++){n.turno=o,ca(n),Bt.ronda(`Uno contra uno \xB7 ronda ${i+1}/3 \xB7 vale ${l}`),n.cam(o===0?"sofaA":"sofaB"),m.cartas(a.humano?`<div class="carta act"><small>${ke(r.t)}</small>${ke(r.p)}</div>`:`<div class="carta act"><small>Vale ${l}</small>\xBF?</div>`),m.pistas(u.concat(d.map(M=>"\u2716 "+M))),m.contador(`Turno: ${n.eq[o].nombre} \xB7 vale ${l}`),a.humano&&m.ideas(o===e?f().slice(0,5):[]);let p=o===e?a:s,w=null;if(p.humano)for(m.bloquear(!1);;){let M=await m.siguiente(),E=Ch(M.v||"")[0];if(E){if(Ah(E,r.p)){ce.play("fallo"),ct("\u26D4 "+qe.ilegal,2e3);continue}w=E;break}}else m.bloquear(!0),await Qe(700),w=zt(f()[0]||Si(r.c)),An(w,1800,p.fig,p.nombre),xe.voz&&ce.say(w,p.voz,{pregunta:!0}),await Qe(900);h.add(w),u.push(w),m.pistas(u.concat(d.map(M=>"\u2716 "+M)));let C=n.eq[o],b=!1;if(C.humano&&!p.humano){m.bloquear(!1);let M=await Promise.race([m.siguiente(),Qe(9e3)]);M&&M.tipo==="texto"&&(yn(M.v,r.p)?b=!0:(d.push(M.v),ce.play("fallo")))}else{let M=C.miembros.find(S=>S!==p&&!S.humano)||C.miembros[1];await Qe(400);let E=la(r,u,{habil:M.habil,fallos:d});E?(await bn(M,E),yn(E,r.p)?b=!0:(d.push(E),ce.play("fallo"))):await Pc(M,"nose")}if(b){c=o;break}l=Math.max(5,l-5),o=1-o,ce.play("pop"),ct("\u21A9\uFE0F "+qe.unoRebote,1200)}Ei(),n.turno=-1,c>=0?(await Cn(`\xA1${r.p}! ${l} puntos para el ${n.eq[c].nombre.toLowerCase()}.`),await eo(n,c,l,"Uno contra uno")):await Cn(`Nadie la ha sacado. Era ${r.p}.`)}}async function Uh(n,{palabras:e=4}={}){ce.music("tension"),n.P.banda("La pir\xE1mide de pistas"),await Gn("La pir\xE1mide de pistas","Tema arriba \xB7 pistas de una en una \xB7 \xA1pulsador!"),await $e(qe.piramide);let t=n.h,i=1-t,a=n.eq[i].miembros[0],s=ri(n,e,Rc);for(let r=0;r<s.length;r++){let o=s[r],l=V2(o),c=[],u=-1;n.cam("pantalla"),n.P.pantalla("piramide",{tema:o.t,pistas:[]}),await Cn(`Palabra ${r+1}. El tema es: ${o.t}.`);let d=Ap({titulo:`Pir\xE1mide \xB7 tema: ${o.t}`,auto:()=>c.length>=2&&Math.random()<.6});for(let h=0;h<5&&u<0;h++){c.push(l[h]),d.pistas(c),d.contador(`Vale ${[25,20,15,10,5][h]} puntos`),Bt.ronda(`Pir\xE1mide \xB7 palabra ${r+1}/${s.length} \xB7 tema ${o.t}`),n.P.pantalla("piramide",{tema:o.t,pistas:c.slice()}),await Ih(l[h]),d.activo(!0);let f=Math.random()<Cc(h,a.habil*.8)?1200+Math.random()*2500:null,m=await Promise.race([d.esperar().then(()=>t),f?Qe(f).then(()=>i):new Promise(()=>{}),Qe(4500).then(()=>-1)]);if(d.cancelar(),d.activo(!1),m<0){h<4&&ct(qe.piramideNadie,1e3);continue}ce.play("pulsador");let v=[m,1-m];for(let g of v){if(await k2(n,g,o,c,g===m?7e3:6e3)){u=g;break}g===m&&ct("\u21A9\uFE0F \xA1Rebote al "+n.eq[1-m].nombre.toLowerCase()+"!",1400)}u>=0&&(await Cn(`\xA1Correcto! ${o.p}. ${[25,20,15,10,5][h]} puntos.`),await eo(n,u,[25,20,15,10,5][h],"Pir\xE1mide"))}d.quitar(),Ei(),u<0&&await Cn(`La palabra era ${o.p}.`)}}function V2(n){let e=n.c,t=[0,3,6,8,e.length-1];return[...new Set(t.map(i=>e[Math.min(i,e.length-1)]))].concat(e).filter((i,a,s)=>s.indexOf(i)===a).slice(0,5)}async function k2(n,e,t,i,a){let s=n.eq[e];if(s.humano){let l=ua({modo:"adivinar",titulo:"\xA1Has pulsado! Responde",placeholder:"Tu respuesta",pasar:!1,autoMs:1e3,auto:()=>Math.random()<.75?t.p:"ni idea"});l.pistas(i),await $e(qe.pulsa,1200);let c=await Promise.race([l.siguiente(),Qe(a)]);return Ei(),c&&c.tipo==="texto"&&yn(c.v,t.p)?(ce.play("acierto"),!0):(ce.play("fallo"),c&&c.v&&ct("\u2716 "+c.v,1200),!1)}let r=s.miembros[0];await Pc(r,"pulsa");let o=la(t,i.map(zt),{habil:r.habil,tema:t.t})||Si(Va.filter(l=>l.t===t.t)).p;return await bn(r,o),yn(o,t.p)?(ce.play("acierto"),!0):(ce.play("fallo"),!1)}async function qh(n,e){ce.music("tension"),n.P.banda("El intruso"),await Gn("El intruso","Videollamada desde casa \xB7 5.000 \u20AC del bote"),await $e(qe.intruso),n.P.pantalla("video",{emoji:e.emoji,nombre:e.nombre}),n.cam("pantalla"),await bn({...e,fig:null},"\xA1Hola a todos!"),await $e(qe.intrusoElige);let i=Math.random()<.7?n.yo:n.eq[1-n.h].miembros[0];await Cn(`El intruso elige a ${i.nombre}.`);let a=[{...i,aci:0,pis:0},{...e,fig:null,aci:0,pis:0}],s=0,r=ri(n,4,Rc);for(let l=0;l<r.length&&s<25;l++){let c=l%2,u=a[c],d=r[l],h=Rh(d,6),f=[];Bt.ronda(`El intruso \xB7 pistas ${s}/25 \xB7 ${a[0].nombre} ${a[0].aci} \u2013 ${a[1].aci} intruso`),ct("\u{1F3AF} Turno de "+u.nombre,1300);let m=u.humano?ua({modo:"adivinar",titulo:`El intruso \xB7 tema: ${d.t}`,placeholder:"Tu respuesta",autoMs:1400,auto:()=>f.length>=2&&Math.random()<.6?d.p:void 0}):null,v=!1;for(let g=0;g<h.length&&s<25&&!v;g++)if(f.push(h[g]),s++,u.pis++,m&&(m.pistas(f),m.contador(`Pistas usadas ${s}/25`)),await Ih(h[g]),u.humano){let p=await Promise.race([m.siguiente(),Qe(4e3)]);if(p&&p.tipo==="texto")yn(p.v,d.p)?v=!0:(ce.play("fallo"),ct("\u2716 "+p.v,1e3));else if(p&&p.tipo==="pasar")break}else if(await Qe(800),Math.random()<Cc(g,u.habil*.8)){let p=la(d,f.map(zt),{habil:u.habil});p&&(await bn(u,p),v=yn(p,d.p),v||ce.play("fallo"))}m&&Ei(),v?(u.aci++,ce.play("acierto"),await Cn(`\xA1Bien! ${d.p}.`)):await Cn(`Era ${d.p}.`)}a[1].aci>a[0].aci||a[1].aci===a[0].aci&&a[1].pis<a[0].pis?(n.bote=Math.max(0,n.bote-5e3),ce.play("ooh"),await $e(qe.intrusoGana)):(n.bote+=5e3,ce.play("aplausos"),await $e(qe.intrusoPierde)),ca(n),n.P.pantalla("bote",{texto:sn(n.bote)}),n.P.banda(sn(n.bote)),await Qe(1500)}async function Rp(n){ce.music("tension"),n.P.banda("Contrarreloj"),await Gn("Contrarreloj","Todo puede cambiar \xB7 5 palabras, 25 pistas y 45 s por turno"),await $e(qe.contrarreloj);let e=[0,0],t=[0,0];for(let i=0;i<3;i++)for(let a of[n.h,1-n.h]){let s=n.eq[a],r=s.miembros[i];n.cam(a===0?"sofaA":"sofaB"),await Cn(`${s.nombre}: da pistas ${r.nombre}.`+(e[a]?` Con ${e[a]} segundos extra.`:""));let o=await ha(n,{eq:s,giver:r,palabras:ri(n,5),maxPistas:25,seg:45+e[a],titulo:`Contrarreloj \xB7 ${s.nombre} \xB7 turno ${i+1}/3`,rapido:!s.humano});o.todas?(t[a]++,e[a]=o.resto,await eo(n,a,25,"Contrarreloj")):(e[a]=0,ce.play("ooh"))}for(let i of[0,1])t[i]===3&&(await $e(qe.bonus),await eo(n,i,100,"Bonus"))}async function Pp(n,e){ce.music("diabolico"),n.P.banda(sn(n.bote)),n.P.pantalla("bote",{texto:sn(n.bote)}),await Gn("Las diez de \xFAltimas",`10 palabras \xB7 25 pistas \xB7 60 segundos \xB7 ${sn(n.bote)}`),await $e(e===n.h?qe.diez:qe.diezRival);let t=n.eq[e];return n.cam(e===0?"sofaA":"sofaB"),await ha(n,{eq:t,giver:t.miembros[0],palabras:ri(n,10),maxPistas:25,seg:60,titulo:`Las diez de \xFAltimas \xB7 ${sn(n.bote)}`,rapido:!t.humano})}var da={estreno:{id:"estreno",nombre:"Estreno (dic-2022 \xB7 ene-2023)",corto:"Estreno \xB7 2022",repesca:!1,intruso:!0,archivosMusica:["cabecera_estreno","cabecera"],archivosLogo:["logo_estreno","logo"]},t2023:{id:"t2023",nombre:"Con repesca (feb \xB7 sep 2023)",corto:"Telecinco \xB7 2023",repesca:!0,intruso:!1,archivosMusica:["cabecera_2023","cabecera"],archivosLogo:["logo_2023","logo"]}},Up=25e4,Ip=5e3,to=()=>+localStorage.getItem("p25_bote")||Up,Lp=n=>localStorage.setItem("p25_bote",String(n));function qp({hEq:n=0}={},e){_p("\u20AC");let t=Ls(Ds),i=Ls(Us),a={nombre:xe.nombre||"T\xFA",prof:xe.profesion||"Concursante",emoji:"\u{1F60E}",voz:"sharvard",humano:!0,habil:.8},s=[{nombre:"Equipo azul",color:ph.azul},{nombre:"Equipo rosa",color:ph.rosa}].map(o=>({...o,puntos:0,miembros:[],humano:!1}));s[n].miembros=[a,t[0],t[1]],s[n].humano=!0,s[1-n].miembros=[i[0],t[2],t[3]],s.forEach((o,l)=>o.miembros.forEach((c,u)=>{c.fig=l*3+u}));let r={eq:s,h:n,yo:a,P:e.P(),cam:e.cam,usadas:new Set,bote:to(),turno:-1,aspirante:i[1]};return r.P.reset(),ca(r),r}async function Fh(){xe.chistes&&(await $e(Si(wc),4e3),ce.play("badumtss"),ce.play("risas"),await Qe(900))}var Fp=`<p><b>Objetivo:</b> hacer adivinar palabras con el <b>menor n\xFAmero de pistas</b>. Cada pista es <b>una sola palabra</b>: no vale la palabra secreta ni sus <b>derivadas</b> (si la palabra es \xABplaya\xBB, no vale \xABplayero\xBB), ni m\xEDmica. Juegas en un equipo con <b>dos famosos virtuales</b>; el equipo con m\xE1s puntos juega la final por el <b>bote</b> (empieza en 250.000 \u20AC y sube 5.000 \u20AC cada programa).</p>
<p><b>La repesca</b> (desde febrero de 2023): el perdedor del d\xEDa anterior contra un aspirante. El presentador da pistas cada vez m\xE1s obvias, hasta 15; cuantas menos necesites, m\xE1s puntos. El que m\xE1s puntos haga se queda en el <b>equipo rosa</b>.</p>
<p><b>La apuesta</b>: apuesta a la baja desde 25 pistas. Quien baje m\xE1s (o a quien le digan \xAB\xA1Hazlo t\xFA!\xBB) juega: <b>5 palabras en 45 s</b> sin pasar de las pistas apostadas. <b>75 puntos</b>.</p>
<p><b>Uno contra uno</b>: por parejas, la misma palabra, <b>una pista por turno</b>. Cada rebote resta 5 puntos. 25 puntos por ronda; en la 1.\xAA das t\xFA las pistas y en la 2.\xAA y 3.\xAA adivinas lo que dicen tus famosos.</p>
<p><b>La pir\xE1mide de pistas</b>: el tema sale arriba y el presentador da pistas de una en una. Pulsa (bot\xF3n rojo o barra espaciadora) y responde: <b>25, 20, 15, 10 o 5 puntos</b>. Si fallas, rebote al rival.</p>
<p><b>El intruso</b> (estreno, o activ\xE1ndolo en Opciones): un concursante por videollamada elige rival. Turnos alternos con 25 pistas del presentador en total; si gana el intruso se lleva <b>5.000 \u20AC</b> del bote; si gana el plat\xF3, se suman al bote.</p>
<p><b>Contrarreloj \xB7 Todo puede cambiar</b>: cada miembro del equipo da pistas para <b>5 palabras</b> (25 pistas, 45 s): <b>25 puntos</b>; el tiempo que sobre pasa al siguiente compa\xF1ero y si los tres lo consiguen hay <b>100 de bonus</b>.</p>
<p><b>Las diez de \xFAltimas</b>: el concursante ganador tiene <b>60 s y 25 pistas</b> para que sus famosos acierten <b>10 palabras</b>. \xA1Si lo logra, se lleva el bote!</p>
<p><b>C\xF3mo dar pistas:</b> escribe en la casilla y pulsa Intro (o toca una de las \xABIdeas\xBB). Si escribes varias palabras, cada una cuenta como una pista. \xABPasar\xBB deja la palabra para el final. <b>C\xF3mo adivinar:</b> escribe la palabra; las tildes dan igual.</p>
<p><b>Controles:</b> \u2630 men\xFA \xB7 \u{1F441} c\xE1mara \xB7 \u{1F4A1} luces \xB7 \xABSaltar \u23ED\xBB pasa la cabecera, la despedida y los mon\xF3logos. En el paseo: joystick o WASD y arrastra para mirar.</p>`;function Oh(n){let e=xe.presentador||"Rafa Verbo",t=n?n.eq.flatMap(i=>i.miembros):[{nombre:xe.nombre||"T\xFA",prof:xe.profesion||"Concursante"},...Us.slice(0,1)];return[["Presentado por",[`${e} (presentador virtual)`]],["Concursantes",(n?n.eq.map(i=>i.miembros[0]):t).map((i,a)=>`${a+1}. ${i.nombre} \xB7 ${i.prof}`)],["Famosos (virtuales e inventados)",(n?n.eq.flatMap(i=>i.miembros.slice(1)):Ds).map(i=>`${i.nombre} \xB7 ${i.prof}`)],["Creaci\xF3n",["Juego creado por: Iker"]],["Basado en",["El concurso \xAB25 palabras\xBB de Telecinco (adaptaci\xF3n no oficial)","Formato \xAB25 Words or Less\xBB (Fox)"]],["M\xFAsica y sonidos",["Sintetizados por el propio juego","o los que subas desde Opciones"]],dp,["Gr\xE1ficos 3D",["Plat\xF3 original inspirado en las fotos del programa"]],["P\xFAblico de las gradas",["Sonidos sintetizados"]],["Licencias",["Three.js \xB7 MIT","Piper TTS \xB7 MIT","esbuild \xB7 MIT","Fuente Helvetiker Bold \xB7 MAGENTA Ltd. (licencia libre, ver src/fonts/LICENSE)","Palabras y pistas: escritas para este juego"]]]}var Op={apuesta:["La apuesta","5 palabras \xB7 45 s \xB7 apuesta a la baja"],uno:["Uno contra uno","Una pista por turno, rebotes"],piramide:["La pir\xE1mide de pistas","Tema, pistas y pulsador"],contrarreloj:["Contrarreloj","Todo puede cambiar: 3 turnos por equipo"],diez:["Las diez de \xFAltimas","10 palabras \xB7 60 s \xB7 25 pistas"],repesca:["La repesca","Pistas del presentador, hasta 15"],intruso:["El intruso","Videollamada por 5.000 \u20AC"],libre:["Dar pistas libre","Sin reloj: tus famosos adivinan"],adivina:["Adivina t\xFA","Un famoso te da pistas"]};async function G2(n){if(xe.presentaciones){await $e(qe.presentacion);for(let[e,t]of n.eq.entries())n.cam(e===0?"sofaA":"sofaB"),n.P.luzEquipo(e,!0),await Eh(t.nombre+(t.humano?" \xB7 \xA1el tuyo!":""),t.miembros.map(i=>`${i.emoji} ${i.nombre}`).join(" \xB7 "),2600),await bn(t.miembros[1],Si(["\xA1Hola a todos!","\xA1Qu\xE9 ilusi\xF3n estar aqu\xED!","\xA1Vamos a por el bote!"])),n.P.luzEquipo(e,!1)}}async function Np(n,e){n.cam("general"),n.P.pantalla("logo"),n.P.banda("25 palabras"),ce.music("menu"),await $e(qe.despedida),ce.play("aplausos"),await e.saltable(Mp(Oh(n),14e3))}async function Bp(n,e){let t=n==="clasico"?"estreno":da[xe.etapa]?xe.etapa:"t2023",i=da[t],a=e.tema(),s=vn[a]||vn.normal;e.setEtapa(t);let r=localStorage.getItem("p25_estado"),o=i.repesca&&r!=="campeon",l=qp({hEq:o?1:0},e);Bt.show(!1),await e.cabecera(),oa(s.hashtag||"#25palabras"),ca(l),l.P.banda(sn(l.bote)),l.P.pantalla("logo"),l.cam("presentador"),ce.music("trilha"),ce.play("aplausos"),await $e(n==="clasico"?qe.estreno:qe.bienvenida),s.saludo&&await $e(s.saludo);for(let f of s.extra||[])await $e(f);if(s.festivo&&l.P.celebrar(),await $e(qe.bienvenida2),l.cam("banda"),l.P.pantalla("bote",{texto:sn(l.bote)}),await $e(qe.bote),await Th(l.bote,"Bote de hoy",2200),xe.monologo&&await e.monologo(null,!0),await G2(l),await Fh(),i.repesca)if(o){let f={...l.aspirante,fig:null};if(!await Lh(l,f))return localStorage.setItem("p25_estado","repesca"),ce.play("ooh"),await $e(qe.repescaPierdes),await Np(l,e),Dp(l,e);await $e(qe.repescaGanas)}else await $e(qe.repescaRival),await Eh("Repesca",`${l.aspirante.nombre} gana la repesca y se sienta en el sof\xE1 rosa`,2600);await e.paseo(l.yo.fig),await Nh(l),await Fh(),await Dh(l),(i.intruso||xe.intruso)&&await qh(l,za),await Uh(l),await Fh(),await Rp(l);let[c,u]=l.eq.map(f=>f.puntos),d=c===u?l.h:c>u?0:1;return await Gn(l.eq[d].nombre+" gana",`${l.eq[0].puntos} \u2013 ${l.eq[1].puntos}`),l.cam(d===0?"sofaA":"sofaB"),l.P.luzEquipo(d,!0),await $e(d===l.h?qe.ganaEquipo:qe.pierdeEquipo),localStorage.setItem("p25_estado",d===l.h?"campeon":"repesca"),(await Pp(l,d)).aciertos>=10?(ce.play("ovacion"),l.P.celebrar(),await $e(qe.boteGanado),await Th(l.bote,d===l.h?"\xA1Es tuyo!":"\xA1Se lo lleva el "+l.eq[d].nombre.toLowerCase()+"!",3200),Lp(Up)):(ce.play("ooh"),await $e(qe.boteNo),Lp(l.bote+Ip),ct(`El bote sube a ${sn(l.bote+Ip)}`,3e3)),await Np(l,e),Dp(l,e)}function Dp(n,e){return e.orbita(),Bt.sinTimer(),Bt.ronda(""),e.marcador(`\u{1F3C1} ${n.eq[0].nombre} ${n.eq[0].puntos} \xB7 ${n.eq[1].nombre} ${n.eq[1].puntos}`),Ti([{label:"Jugar otra vez",cls:"gold",fn:()=>e.iniciar("programa")},{label:"Men\xFA",fn:()=>e.menu("play")}]),new Promise(()=>{})}async function zp(n,e,{ilimitado:t=!1}={}){let i=qp({hEq:0},e);i.entreno=!0,oa("#25palabrasEntrena"),i.cam("general"),ce.music("trilha"),t&&ct("\u267E\uFE0F Tiempo ilimitado",1500);let a=(s,r)=>ri(i,s,r);if(n==="apuesta")await Nh(i);else if(n==="uno")await Dh(i);else if(n==="piramide")await Uh(i,{palabras:3});else if(n==="contrarreloj"){let s=await ha(i,{eq:i.eq[0],giver:i.yo,palabras:a(5),maxPistas:25,seg:45,ilimitado:t,titulo:"Contrarreloj \xB7 entrenamiento"});ct(s.todas?"\u2705 \xA125 puntos!":`${s.aciertos}/5`,2500)}else if(n==="diez"){let s=await ha(i,{eq:i.eq[0],giver:i.yo,palabras:a(10),maxPistas:25,seg:60,ilimitado:t,titulo:"Las diez de \xFAltimas \xB7 entrenamiento"});ct(`${s.aciertos}/10 con ${s.pistas} pistas`,3e3)}else if(n==="repesca")await Lh(i,{...i.aspirante,fig:null},{palabras:2});else if(n==="intruso")await qh(i,za);else if(n==="libre"){await $e(qe.libre);let s=await ha(i,{eq:i.eq[0],giver:i.yo,palabras:a(5),maxPistas:99,seg:0,ilimitado:!0,titulo:"Dar pistas libre"});ct(`${s.aciertos}/5 con ${s.pistas} pistas`,3e3)}else if(n==="adivina"){await $e(qe.adivina);let s=await ha(i,{eq:i.eq[0],giver:i.eq[0].miembros[1],palabras:a(5),maxPistas:40,seg:90,ilimitado:t,titulo:"Adivina t\xFA"});ct(`Has acertado ${s.aciertos}/5`,3e3)}return e.orbita(),Bt.sinTimer(),Ti([{label:"Repetir",cls:"gold",fn:()=>e.iniciar("entreno:"+n)},{label:"Entrenamiento",fn:()=>e.menu("train")}]),new Promise(()=>{})}var Ic=[{t:"Un formato americano",emoji:"\u{1F1FA}\u{1F1F8}",cam:"pantalla",sub:"25 palabras es la adaptaci\xF3n espa\xF1ola de 25 Words or Less, un concurso estadounidense de la cadena Fox en el que hay que hacer adivinar palabras usando el menor n\xFAmero de pistas posible.",rows:[["Original","25 Words or Less"],["Cadena","Fox (EE. UU.)"],["Idea","Pocas pistas, muchos puntos"]]},{t:"El estreno",emoji:"\u{1F4FA}",cam:"general",sub:"Telecinco lo estren\xF3 el diecinueve de diciembre de dos mil veintid\xF3s, de lunes a viernes a las siete de la tarde. Lleg\xF3 para ocupar el hueco que hab\xEDa dejado Alta Tensi\xF3n.",rows:[["Estreno","19-dic-2022"],["Cadena","Telecinco"],["Horario","L-V \xB7 19:00"],["Duraci\xF3n","\u2248 50 min"]]},{t:"Christian G\xE1lvez",emoji:"\u{1F399}\uFE0F",cam:"presentador",sub:"Lo present\xF3 Christian G\xE1lvez, que ya hab\xEDa presentado Pasapalabra y Alta Tensi\xF3n. La cadena lo vendi\xF3 como un concurso que homenajea nuestra lengua.",rows:[["Presentador","Christian G\xE1lvez"],["Antes","Pasapalabra, Alta Tensi\xF3n"],["Lema","Homenaje a la lengua"]]},{t:"Qui\xE9n lo hac\xEDa",emoji:"\u{1F3AC}",cam:"pantalla",sub:"Lo produjeron F\xE9nix Media Audiovisual y Mediaset Espa\xF1a. Lo dirigieron Rafa Guardiola y Ra\xFAl Delgado, y la m\xFAsica era de Federico Vaona.",rows:[["Productoras","F\xE9nix Media \xB7 Mediaset"],["Direcci\xF3n","R. Guardiola \xB7 R. Delgado"],["M\xFAsica","Federico Vaona"]]},{t:"Dos equipos",emoji:"\u{1F6CB}\uFE0F",cam:"sofas",sub:"En cada programa jugaban dos concursantes, cada uno en un equipo con dos famosos. Cada equipo se sentaba en su sof\xE1 amarillo, uno a cada lado del plat\xF3.",rows:[["Concursantes","2"],["Famosos","4 (2 por equipo)"],["Plat\xF3","Sof\xE1s amarillos"]]},{t:"El bote",emoji:"\u{1F4B0}",cam:"banda",sub:"Se jugaban un bote que empezaba en doscientos cincuenta mil euros y sub\xEDa cinco mil euros en cada programa. La cifra sal\xEDa en la gran banda curva de lo alto del plat\xF3.",rows:[["Bote inicial","250.000 \u20AC"],["Sube","+5.000 \u20AC / programa"]]},{t:"La apuesta",emoji:"\u{1F53B}",cam:"sofas",sub:"En la primera prueba, un miembro de cada equipo apostaba a la baja. Partiendo de veinticinco pistas, el que bajaba m\xE1s jugaba: cinco palabras en cuarenta y cinco segundos, sin m\xEDmica ni derivadas. Setenta y cinco puntos.",rows:[["Palabras","5"],["Tiempo","45 s"],["Pistas","\u2264 25 (a la baja)"],["Puntos","75"]]},{t:"Uno contra uno",emoji:"\u2694\uFE0F",cam:"general",sub:"Despu\xE9s, por parejas: los dos recib\xEDan la misma palabra y daban una sola pista por turno. Cada rebote restaba puntos. Veinticinco por ronda.",rows:[["Rondas","3"],["Pista","1 por turno"],["Puntos","25 por ronda"]]},{t:"La pir\xE1mide de pistas",emoji:"\u{1F53A}",cam:"pantalla",sub:"En la pir\xE1mide, el tema sal\xEDa arriba y el presentador daba pistas de una en una: palabras, objetos, canciones o disfraces. Con el pulsador se arriesgaba: veinticinco, veinte, quince, diez y cinco puntos.",rows:[["Pistas","5"],["Puntos","25\xB720\xB715\xB710\xB75"],["Fallo","Pasa al rival"]]},{t:"El intruso",emoji:"\u{1F4F9}",cam:"pantalla",sub:"En los primeros programas jugaba un concursante desde casa por videollamada: el intruso. Eleg\xEDa al rival que cre\xEDa m\xE1s f\xE1cil y se jugaban cinco mil euros del bote. En febrero se dijo que ser\xEDa intermitente, pero ya no volvi\xF3.",rows:[["Desde","Casa (Skype)"],["Premio","5.000 \u20AC"],["Final","Feb-2023"]]},{t:"Llega la repesca",emoji:"\u{1F501}",cam:"presentador",sub:"El dos de febrero de dos mil veintitr\xE9s lleg\xF3 la repesca: el perdedor del d\xEDa anterior contra un aspirante, con pistas del presentador cada vez m\xE1s obvias, hasta quince. El que m\xE1s puntos hac\xEDa se quedaba en el equipo rosa.",rows:[["Desde","2-feb-2023"],["Pistas","\u2264 15"],["Premio","Sitio en el equipo rosa"]]},{t:"Contrarreloj",emoji:"\u23F1\uFE0F",cam:"sofas",sub:"En la contrarreloj, o Todo puede cambiar, cada miembro del equipo daba pistas para cinco palabras en cuarenta y cinco segundos. El tiempo sobrante se acumulaba y, si los tres lo lograban, hab\xEDa cien puntos de bonus.",rows:[["Palabras","5 por turno"],["Tiempo","45 s + sobrante"],["Bonus","100 puntos"]]},{t:"Las diez de \xFAltimas",emoji:"\u{1F51F}",cam:"banda",sub:"Y al final, las diez de \xFAltimas: el concursante ganador ten\xEDa un minuto y veinticinco pistas como m\xE1ximo para que sus dos famosos acertaran diez palabras. Si lo lograba, se llevaba el bote.",rows:[["Palabras","10"],["Tiempo","60 s"],["Pistas","\u2264 25"],["Premio","El bote"]]},{t:"Caras conocidas",emoji:"\u2B50",cam:"publico",sub:"Por sus sof\xE1s pasaron much\xEDsimos famosos, de cuatro en cuatro cada pocos programas. Hubo incluso un especial en horario de m\xE1xima audiencia el veintiocho de enero de dos mil veintitr\xE9s.",rows:[["Famosos","4 por tanda"],["Prime time","28-ene-2023"]]},{t:"El adi\xF3s",emoji:"\u{1F44B}",cam:"general",sub:"Tras ciento noventa y tres programas, con una media de setecientos ochenta y ocho mil espectadores y un nueve coma seis por ciento de cuota, Telecinco lo retir\xF3 por sorpresa el quince de septiembre de dos mil veintitr\xE9s.",rows:[["Programas","193"],["Media","788.000 \xB7 9,6 %"],["\xDAltimo","15-sep-2023"]]}];var Vp={publico:"\u{1F44F}",telefono:"\u{1F4DE}",normas:"\u{1F4DC}"},kp={publico:"Con el p\xFAblico",telefono:"Al tel\xE9fono",normas:"Las normas"},oi=[{id:"pub-saludo",tipo:"publico",titulo:"Saludando a las gradas",cam:"publico",lineas:["\xA1Un momento! Antes de empezar quiero saludar al p\xFAblico.","Se\xF1ora de la primera fila, con una sola palabra: \xA1espectacular!","Caballero, \xBFcu\xE1ntas pistas necesita para aplaudir? \xBFNinguna? \xA1As\xED me gusta!","Los del fondo, que tambi\xE9n os veo. \xA1Una ovaci\xF3n de veinticinco palabras!","\xA1Gracias! Vuelvo al atril antes de que se me acaben las palabras."]},{id:"pub-cumple",tipo:"publico",titulo:"Un cumplea\xF1os en el p\xFAblico",cam:"publico",lineas:["Me cuentan que hoy hay alguien de cumplea\xF1os en las gradas.","Te voy a felicitar con pistas: velas, tarta, regalos\u2026 \xA1Exacto, felicidades!","Y como regalo, te dejo que me digas una palabra. \xBFBote? \xA1Esa no, que es nuestra!","\xA1Un aplauso para el cumplea\xF1ero!"]},{id:"tel-madre",tipo:"telefono",titulo:"Llama mi madre",cam:"presentador",lineas:["Perdonad, que me suena el m\xF3vil\u2026 \xA1Es mi madre!","\xBFS\xED, mam\xE1? S\xED, estoy en directo. No, no puedo darte pistas de la cena.","\xBFQue te diga una palabra para el crucigrama? Mam\xE1, eso es trampa.","Vale, vale: siete letras, empieza por pe. \xA1Paciencia! \xA1Un beso!"]},{id:"tel-diccionario",tipo:"telefono",titulo:"Llaman de la Academia",cam:"presentador",lineas:["Un segundo, que me llaman de la Academia de las palabras.","\xBFC\xF3mo? \xBFQue hemos gastado demasiados sin\xF3nimos esta semana?","\xBFY que me devuelvan las tildes que se me cayeron ayer? Est\xE1n en el sof\xE1, debajo de un coj\xEDn.","Gracias, gracias. \xA1Que limpie, fije y d\xE9 esplendor!"]},{id:"nor-nuevas",tipo:"normas",titulo:"Normas nuevas del plat\xF3",cam:"general",lineas:["Atenci\xF3n, que producci\xF3n me pasa unas normas nuevas.","Norma uno: prohibido decir \xABcosa\xBB. Cosa no es una pista, es rendirse.","Norma dos: si un famoso acierta a la primera, el p\xFAblico grita \xAB\xA1oooh!\xBB. Probamos\u2026 \xA1muy bien!","Norma tres: en los sof\xE1s amarillos no se duerme la siesta. Aunque sean muy c\xF3modos.","\xA1Y con estas normas, seguimos!"]},{id:"nor-bote",tipo:"normas",titulo:"C\xF3mo cuidar el bote",cam:"banda",lineas:["Os voy a explicar c\xF3mo cuidamos el bote de 25 palabras.","Cada noche le leemos un cuento. Solo con veinticinco palabras, eso s\xED.","Si nadie se lo lleva, crece cinco mil euros. Como una planta, pero con m\xE1s ceros.","\xA1Y alg\xFAn d\xEDa alguien se lo llevar\xE1! \xBFSer\xE1 hoy?"]}];var Rn=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wi=()=>{},Hp=n=>{wi=n},Jt=n=>n&&n.stopPropagation();function Gp(n,e,t,i){let a=document.createElement("button");return a.className="mbtn "+(t||""),a.innerHTML=`<span class="fp"></span><span>${n}${e?`<small>${e}</small>`:""}</span>`,a.onclick=s=>{Jt(s),wi(),i()},a}function Wp(n){let e=document.createElement("button");return e.className="tbtn back",e.textContent="\u27F5 Volver",e.onclick=t=>{Jt(t),wi(),n()},e}function Ai(n){let e=document.createElement("h2");return e.textContent=n,e}function Wn(n,e="onote"){let t=document.createElement("p");return t.className=e,t.textContent=n,t}function It(n,...e){let t=document.createElement("div");t.className="orow";let i=document.createElement("label");return i.textContent=n,t.append(i,...e),t}function Xp(n,e,t){let i=document.createElement("button"),a=()=>{i.className="tbtn"+(n[e]?" sel":""),i.textContent=n[e]?"S\xED":"No"};return a(),i.onclick=s=>{Jt(s),n[e]=!n[e],a(),wi(),t&&t(n[e])},i}function jp(n,e,t,i){return t.map(([a,s])=>{let r=document.createElement("button");return r.className="tbtn"+(n[e]===a?" sel":""),r.textContent=s,r.dataset.v=a,r.onclick=o=>{Jt(o),n[e]=a,wi(),r.parentNode.querySelectorAll(".tbtn[data-v]").forEach(l=>l.classList.toggle("sel",l.dataset.v===a)),i&&i(a)},r})}function $p(n,e,t,i){let a=document.createElement("input");return a.type="range",a.min=0,a.max=100,a.value=Math.round((n[e]??1)*100),a.oninput=()=>{n[e]=a.value/100,t&&t(n[e])},a.onchange=()=>i&&i(n[e]),a.onpointerdown=Jt,a}function Ci(n,...e){let t=document.createElement("div");t.className="ocustom";let i=document.createElement("div");return i.className="olabel",i.textContent=n,t.append(i,...e.filter(Boolean)),t}function Pn(n,e="oname"){let t=document.createElement("div");return t.className=e,t.innerHTML=n,t}function Xn(n){let e=document.createElement("div");e.className="obtns";for(let t of n){let i;if(t.file){i=document.createElement("label");let a=document.createElement("input");a.type="file",a.accept=t.file.accept,a.onclick=Jt,a.onchange=()=>a.files[0]&&t.file.onFile(a.files[0]),i.append(document.createTextNode(t.t),a)}else i=document.createElement("button"),i.textContent=t.t,i.disabled=!!t.disabled,i.onclick=a=>{Jt(a),wi(),t.fn&&t.fn(i)};i.className="tbtn"+(t.sel?" sel":"")+(t.full?" full":""),e.appendChild(i)}return e}function Yp(n,e,t,i,a){let s=document.createElement("input");return s.className="otext",s.value=n[e]||"",s.placeholder=t,s.maxLength=i,s.oninput=()=>{n[e]=s.value.trim(),a&&a(n[e])},s.onkeydown=Jt,s.onpointerdown=Jt,s}function Jp(n,e,t){let i=document.createElement("div");i.className="themes";for(let[a,s]of Object.entries(n)){let r=document.createElement("button");r.className="tbtn"+(a===e?" sel":""),r.innerHTML=`<span>${s.emoji}</span>${Rn(s.name)}`,r.onclick=o=>{Jt(o),wi(),t(a)},i.appendChild(r)}return i}function Zp(n,{logo:e,sub:t="El juego",tap:i="Toca para empezar",onStart:a}){n.classList.remove("hidden"),n.innerHTML=`<div class="title"><img class="tlogo" src="${e}" alt=""><div class="tsub">${Rn(t)}</div><div class="ttap">${Rn(i)}</div></div>`;let s=r=>{Jt(r),n.removeEventListener("pointerup",s),removeEventListener("keydown",s),a()};setTimeout(()=>{n.addEventListener("pointerup",s),addEventListener("keydown",s)},200)}function Kp(n,{logo:e,tag:t,version:i,cls:a=""}){n.classList.remove("hidden"),n.innerHTML="";let s=document.createElement("div");s.className="mbox";let r=document.createElement("div");r.className="logo",r.innerHTML=`<img class="mlogo" src="${e}" alt=""><div class="mtag">${Rn(t)}</div>`;let o=document.createElement("div");o.className="col ui "+a;let l=document.createElement("div");return l.className="mver",l.textContent="v"+i,s.append(l,r,o),n.appendChild(s),o}function Qp(n,e){let t=document.createElement("div");return t.className="modal ui",t.innerHTML=`<div class="mcard">${e}<button class="tbtn back" data-cerrar>Cerrar</button></div>`,n.appendChild(t),t.querySelector("[data-cerrar]").onclick=i=>{Jt(i),t.remove()},t}function em({total:n,presentador:e="El presentador",padre:t=document.body}){document.getElementById("historia")?.remove();let i=document.createElement("div");i.id="historia",i.className="ui",i.innerHTML=`<div class="hcard" id="hCard"></div><div class="hsub" id="hSub"><b>${Rn(e)}</b><span></span></div>
    <div class="hctl"><button class="tbtn" id="hPrev">\u25C4 Anterior</button><button class="tbtn" id="hSkip">\u23ED Saltar</button><button class="tbtn sel" id="hNext">Siguiente \u25BA</button></div>
    <div class="hdots" id="hDots">${Array.from({length:n},(s,r)=>`<i data-i="${r}"></i>`).join("")}</div>`,t.appendChild(i);let a=s=>i.querySelector("#"+s);return{el:i,mostrar(s,r){let o=a("hCard");o.classList.remove("in"),o.innerHTML=`<div class="hhead">${s>=0?`<span class="hnum">${s+1}/${n}</span>`:""}<span class="hemo">${r.emoji||""}</span><b>${Rn(r.t)}</b></div>`+(r.rows||[]).map(([l,c])=>`<div class="hrow"><small>${Rn(l)}</small><span>${Rn(c)}</span></div>`).join(""),o.offsetWidth,o.classList.add("in"),i.querySelectorAll("#hDots i").forEach((l,c)=>l.classList.toggle("on",c===s)),a("hPrev").disabled=s<=0,a("hNext").textContent=s>=n-1?"Terminar \u25BA":"Siguiente \u25BA"},subtitulo(s){a("hSub").querySelector("span").textContent=s,a("hSub").classList.toggle("vacio",!s)},on({prev:s,next:r,skip:o,ir:l}){a("hPrev").onclick=c=>{Jt(c),wi(),s()},a("hNext").onclick=c=>{Jt(c),wi(),r()},a("hSkip").onclick=c=>{Jt(c),o()},a("hSub").onclick=c=>{Jt(c),o()},i.querySelectorAll("#hDots i").forEach(c=>c.onclick=u=>{Jt(u),l(+c.dataset.i)})},cerrar(){i.remove()}}}function tm(n){return n.map(([e,t])=>`<p><b>${Rn(e)}</b><br>${t.map(Rn).join("<br>")}</p>`).join("")}var X2=()=>Ei(),ui=new URLSearchParams(location.search);ui.get("vel")&&(window.__VEL=+ui.get("vel"));ui.has("auto")&&(window.__AUTO=!0,window.__AUTO_ELIGE=+(ui.get("elige")||0));si.nombre=xe.presentador||"Rafa Verbo";var qc=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Zt=new hc({antialias:!qc,preserveDrawingBuffer:ui.has("capture"),powerPreference:"high-performance"});Zt.setPixelRatio(Math.min(devicePixelRatio,qc?1.25:1.75));Zt.setSize(innerWidth,innerHeight);Zt.toneMapping=La;Zt.toneMappingExposure=1;Zt.shadowMap.enabled=!0;ve("#app").appendChild(Zt.domElement);var Fc=new nr,Ha=new jt(52,innerWidth/innerHeight,.1,220),zs=new gc(Zt);zs.addPass(new xc(Fc,Ha));var j2=new Rs(new ge(innerWidth,innerHeight),.35,.3,.85);zs.addPass(j2);zs.addPass(new _c);var im=xe.quality==="alta",Ri=ui.get("tema")||localStorage.getItem("p25_theme")||"normal";vn[Ri]||(Ri="normal");var In={logoPantalla:null,logoOpts:null,banner:null},ze=rp(Fc,In,Zt),Oc=()=>da[xe.etapa]||da.t2023;async function Dc(){let n=Oc();In.logoOpts=n.logo||null;let e=await Oa("logo",n);if(!e)return In.logoPantalla=null,ze.refrescarPantalla(),null;let t=new Image;return t.src=e.url,await t.decode().catch(()=>{}),In.logoPantalla=t,ze.refrescarPantalla(),e.url}var nm={azul:{led:"#2a6bff",led2:"#06164a",neon:14677247},rosa:{led:"#ff3fb4",led2:"#3a0430",neon:16761064},blanco:{led:"#c8d8ff",led2:"#1a2040",neon:16777215}};function ao(n,e=!0){Ri=n;let t=vn[n]||vn.normal,i=t.paleta?{...t.paleta}:{};nm[xe.platoLuz]&&(i={...i,...nm[xe.platoLuz]}),ze.setTema(i),In.banner=t.banner||null,ze.refrescarPantalla(),e&&localStorage.setItem("p25_theme",n)}var Uc={general:[[0,6.5,15],[0,3,-6]],pantalla:[[0,3.6,-3],[0,3.6,-13]],sofas:[[0,3.2,6],[0,1.2,-5]],sofaA:[[-2.4,2.3,-1],[-6.2,1.1,-5.2]],sofaB:[[2.4,2.3,-1],[6.2,1.1,-5.2]],presentador:[[1,2.6,-2.4],[0,1.7,-6.3]],publico:[[0,4,4],[0,1.5,15]],banda:[[0,2.5,4],[0,7.5,-15]],atriles:[[0,3.2,6],[0,1.2,-5]]},Be={mode:"menu",pos:new D(0,9,26),look:new D(0,2,0),tPos:new D(0,9,26),tLook:new D(0,2,0),yaw:0,pitch:.3};function oo(n,e,t=!1){Be.mode="show",Be.tPos.set(...n),Be.tLook.set(...e),t&&(Be.pos.copy(Be.tPos),Be.look.copy(Be.tLook))}var ma=n=>{let e=Uc[n]||Uc.general;oo(e[0],e[1])};function $2(n){let e=ze.posFig(n);oo([e.x*.4,2.4,e.z+5],[e.x,1.3,e.z])}var ci=null;Zt.domElement.addEventListener("pointerdown",n=>{ci={id:n.pointerId,x:n.clientX,y:n.clientY}});addEventListener("pointermove",n=>{if(!ci||ci.id!==n.pointerId)return;let e=n.clientX-ci.x,t=n.clientY-ci.y;ci.x=n.clientX,ci.y=n.clientY,Be.yaw-=e*.006,Be.pitch=Math.max(-.3,Math.min(1.1,Be.pitch+t*.004))});addEventListener("pointerup",n=>{ci&&ci.id===n.pointerId&&(ci=null)});var $n={};addEventListener("keydown",n=>{$n[n.code]=!0});addEventListener("keyup",n=>{$n[n.code]=!1});var Fs={x:0,y:0};{let n=ve("#joy"),e=ve("#knob"),t=null,i=s=>{let r=n.getBoundingClientRect(),o=s.clientX-(r.left+r.width/2),l=s.clientY-(r.top+r.height/2),c=Math.hypot(o,l),u=r.width/2-10;c>u&&(o*=u/c,l*=u/c),e.style.transform=`translate(${o}px,${l}px)`,Fs.x=o/u,Fs.y=l/u};n.addEventListener("pointerdown",s=>{t=s.pointerId,n.setPointerCapture(t),i(s),s.stopPropagation()}),n.addEventListener("pointermove",s=>{s.pointerId===t&&i(s)});let a=s=>{s.pointerId===t&&(t=null,Fs.x=Fs.y=0,e.style.transform="")};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a)}var so=null;function am(n){Be.mode=n?"walk":Be.mode,ve("#joy").classList.toggle("hidden",!(n&&qc)),n&&(ze.walker.visible=!0,Be.yaw=0,Be.pitch=.3)}function ro(n){let e=ve("#hint");e.textContent=n,e.classList.toggle("hidden",!n)}var ga=null;async function Y2(){let n=J2();document.body.classList.add("en-cabecera"),ve("#btnSkip").classList.remove("hidden"),ce.stopMusic();let e=null,t=await Oa("musica",Oc());t?(e=new Audio(t.url),e.volume=xe.music?xe.musicVol:0,e.play().catch(()=>{})):ce.music("menu");let i=ve("#cabLogo");i.src=kh(1e3,640);let a=[[[-12,1.2,8],[0,9,-6],[-4,2,10]],[[10,9,10],[0,1,-5],[5,3,13]],[[0,.6,4],[0,3.6,-13],[0,3,-2]],[[13,3,2],[0,10.5,-3],[8,6,6]],[[0,12,14],[0,2,-5],[0,6,10]]],s=!1;ga=()=>{s=!0};try{for(let[r,o,l]of a){if(s)break;ve("#fx-flash").style.opacity=.9,ce.play("pop"),setTimeout(()=>ve("#fx-flash").style.opacity=0,90),oo(r,o,!0),Be.tPos.set(...l),Be.tLook.set(...o),ze.luces.vel=3;for(let c=0;c<16&&!s;c++)await Qe(100)}if(!s){i.classList.add("on"),ce.play("banner");for(let r=0;r<28&&!s;r++)await Qe(100)}}finally{if(i.classList.remove("on"),ze.luces.vel=1,ga=null,document.body.classList.remove("en-cabecera"),ve("#btnSkip").classList.add("hidden"),e){let r=e.volume,o=setInterval(()=>{r-=.08,e.volume=Math.max(0,r),r<=0&&(e.pause(),clearInterval(o))},80)}ce.stopMusic()}}var J2=()=>0;async function Z2(){let n=await Hn.get("video:cabecera");if(!n||!n.blob)return!1;let e=URL.createObjectURL(n.blob),t=ve("#video"),i=t.querySelector("video");return un(new Promise(a=>{let s=!1,r=()=>{s||(s=!0,i.pause(),i.removeAttribute("src"),i.load(),t.classList.add("hidden"),ve("#btnSkip").classList.add("hidden"),URL.revokeObjectURL(e),ga=null,a(!0))};i.onended=r,i.onerror=r,ga=r,i.src=e,i.volume=xe.music?xe.musicVol:0,t.classList.remove("hidden"),ve("#btnSkip").classList.remove("hidden"),i.play().catch(()=>{i.muted=!0,i.play().catch(r)})}))}var ka=null,Pi={P:()=>ze,tema:()=>Ri,cam:(n,e)=>{ka||(n==="conc"?$2(e):ma(n))},setEtapa(n){In.logoOpts=da[n]?.logo||null,ze.refrescarPantalla()},async cabecera(){if(!(xe.cabecera==="video"&&await Z2()))return Y2()},paseo(n){ze.ocultarFig(n,!0),ze.walker.position.set(0,.18,9),ze.walker.rotation.y=Math.PI;let e=ze.posFig(n);return e.y=.18,ze.marca.position.set(e.x,.24,e.z),ze.marca.visible=!0,Be.pos.set(0,3.5,16),am(!0),An(qe.paseo,6e3),ce.say(qe.paseo),ro("\u{1F579}\uFE0F Camina hasta el aro verde de tu sof\xE1 \xB7 PC: WASD + rat\xF3n"),Ti([{label:"Ir a mi sof\xE1 \u25B6",fn:()=>{ze.walker.position.set(e.x,0,e.z)}}]),un(new Promise(t=>{so=()=>{Math.hypot(ze.walker.position.x-e.x,ze.walker.position.z-e.z)<.9&&(so=null,t())},(ui.has("autopaseo")||window.__AUTO)&&setTimeout(()=>{ze.walker.position.set(e.x,0,e.z)},300)})).finally(()=>{ro(""),Ti([]),ze.marca.visible=!1,ze.walker.visible=!1,Os=!1,ze.ocultarFig(n,!1),ve("#joy").classList.add("hidden"),ma("general")})},orbita(){Be.mode="menu"},saltable(n){return ve("#btnSkip").classList.remove("hidden"),un(Promise.race([n,new Promise(e=>{ga=()=>e("skip")})])).finally(()=>{ga=null,ve("#btnSkip").classList.add("hidden"),ce.stopVoice()})},marcador(n){let e=ve("#marcador");if(!n){e.classList.add("hidden");return}e.innerHTML=n,e.classList.remove("hidden")},monologo:(n,e=!1)=>sm(n,e),iniciar:n=>Yn(n),menu:(n="main")=>Ii(n)},Ga="title",K2={title:null,main:"title",play:"main",train:"play",options:"main",help:"main",credits:"main",concursantes:"options",canciones:"options",monologos:"play"};Hp(()=>ce.play("tecla"));function kh(n=900,e=560){let t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");if(In.logoPantalla&&In.logoPantalla.complete&&In.logoPantalla.naturalWidth){let a=In.logoPantalla,s=Math.min((n-40)/a.naturalWidth,(e-20)/a.naturalHeight);i.drawImage(a,(n-a.naturalWidth*s)/2,(e-a.naturalHeight*s)/2,a.naturalWidth*s,a.naturalHeight*s)}else ia(i,n*.5,e*.5,n*.78,.3,In.logoOpts||{});return t.toDataURL("image/png")}var Bc=()=>{Yr(),ce.aplicarNiveles()},jn=(n,e)=>Xp(xe,n,t=>{Bc(),e&&e(t)}),Lc=(n,e,t)=>jp(xe,n,e,i=>{Bc(),t&&t(i)}),Bh=n=>$p(xe,n,Bc,()=>ce.play(n==="publicoVol"?"aplausos":"tecla")),qs="",fa=null,Bs=!1;function Ii(n="main"){Ec(),ce.stopAll(),Ns(),X2(),Bt.show(!1),ro(""),ve("#bubble").classList.add("hidden"),li?.cerrar(),li=null,so=null,ze.walker.visible=!1,ze.marca.visible=!1,ve("#joy").classList.add("hidden"),Os=!1,ka=null,yp(),Ti([]),Sp(),oa(""),Pi.marcador(null),ve("#video").classList.add("hidden"),ve("#topbar").classList.add("hidden"),ve("#glights").classList.add("hidden"),document.body.classList.remove("en-cabecera"),ve("#cabLogo").classList.remove("on"),ze.reset(),Bt.sinTimer(),Be.mode="menu",Bs||(ce.music("menu"),Bs=!0),bt(n)}function bt(n){Ga=n;let e=ve("#menu"),t=vn[Ri]||vn.normal,i=Oc();if(n==="title")return Zp(e,{logo:kh(900,640),sub:"El juego",onStart:()=>{ce.play("banner"),Ii("main")}});let a=Kp(e,{logo:kh(),tag:Ri==="normal"?"EL JUEGO \xB7 3D \xB7 "+i.corto:t.emoji+" "+(t.banner||"Especial "+t.name),version:Mh,cls:["options","concursantes","canciones"].includes(n)?"opts":["help","credits"].includes(n)?"text":""}),s=Gp,r=o=>Wp(()=>bt(o));if(n==="main"){a.append(s("Jugar","Programa completo, entrenamiento, cl\xE1sico\u2026","gold",()=>bt("play")),s("Opciones","Sonido, etapa, calidad gr\xE1fica, pantalla completa","",()=>bt("options")),s("La historia de 25 palabras",`${ke(xe.presentador)} te cuenta la historia del programa`,"",()=>Yn("historia")),s("C\xF3mo se juega","Las reglas del concurso","",()=>bt("help")),s("Cr\xE9ditos","","",()=>bt("credits")));let o=location.hostname==="appassets.androidplatform.net";!o&&!matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches&&a.append(s("Instalar app","Juega sin conexi\xF3n desde tu pantalla de inicio","inst",ev)),o||a.append(s("Descargar APK","Instala el juego en tu m\xF3vil Android","inst",()=>window.open("https://github.com/ikeriano/25palabras-grok-bot/releases/latest","_blank")))}else if(n==="play")a.append(s("Programa completo",`Cabecera, ${i.repesca?"repesca, ":""}la apuesta, uno contra uno, pir\xE1mide, contrarreloj y las diez de \xFAltimas \xB7 bote ${Rn(zh(to()))}`,"gold",()=>Yn("programa")),s("Entrenamiento","Practica cada prueba por separado","",()=>bt("train")),s("Cl\xE1sico","El estreno de diciembre de 2022: sin repesca y con El intruso","",()=>Yn("clasico")),s("Explorar el plat\xF3","Pasea libremente por el plat\xF3 3D","",()=>Yn("explorar")),s("Mon\xF3logos del presentador","Con el p\xFAblico, al tel\xE9fono y las normas","",()=>bt("monologos")),Ai("Programa especial"),Jp(vn,Ri,o=>{ao(o),bt("play")}),r("main"));else if(n==="train"){a.append(Ai("Entrenamiento (sin bote)")),Object.entries(Op).forEach(([u,[d,h]],f)=>a.append(s(d,h,f===0?"gold":"",()=>Yn("entreno:"+u))));let o=document.createElement("div");o.className="mrow";let l=document.createElement("button"),c=()=>{l.className="tbtn"+(io?" sel":""),l.innerHTML=io?"<span>\u267E\uFE0F</span>Tiempo ilimitado":"<span>\u23F1\uFE0F</span>Con reloj"};c(),l.onclick=u=>{u.stopPropagation(),io=!io,c(),ce.play("tecla")},o.append(l,r("play")),a.append(o)}else if(n==="options"){a.append(Ai("Opciones")),a.append(It("\u{1F4FA} Etapa",...Lc("etapa",Object.values(da).map(h=>[h.id,h.corto]),()=>{Dc().then(()=>bt("options"))}))),a.append(Wn(`${i.nombre}: 2 concursantes con 2 famosos cada uno, bote de 250.000 \u20AC que sube 5.000 \u20AC por programa. ${i.repesca?"Empieza con La repesca por el sitio del equipo rosa.":"Sin repesca y con El intruso por videollamada."} Bote actual: ${zh(to())}.`,"mtext")),a.append(It("\u{1F4F9} El intruso (videollamada)",jn("intruso")),Wn("Act\xEDvalo para jugar El intruso tambi\xE9n en la etapa de 2023 (en el estreno siempre aparece).","mtext")),a.append(Ci("\u{1F4B0} Bote",Pn(`Bote acumulado: <b>${zh(to())}</b> \xB7 ${localStorage.getItem("p25_estado")==="campeon"?"eres el campe\xF3n: ma\xF1ana no juegas la repesca":"el pr\xF3ximo programa empiezas en la repesca"}`),Xn([{t:"\u21BA Reiniciar bote y repesca",fn:()=>{localStorage.removeItem("p25_bote"),localStorage.removeItem("p25_estado"),ct("Bote reiniciado a 250.000 \u20AC"),bt("options")}}]))),a.append(It("\u{1F3B5} M\xFAsica",jn("music"),Bh("musicVol"))),a.append(It("\u{1F3AC} Cabecera",...Lc("cabecera",[["video","Mi v\xEDdeo"],["3d","Plat\xF3 3D"]])));let o=Ci("\u{1F3B6} M\xFAsica de la cabecera");a.append(o),Q2(o),a.append(It("\u{1F50A} Efectos",jn("sfx"),Bh("sfxVol")));let l=Ci("",It("\u{1F44F} P\xFAblico",jn("publico"),Bh("publicoVol")),It("\u{1F465} P\xFAblico en las gradas",jn("gradas",om)),Wn("Aplausos, \xABooh\xBB y risas del p\xFAblico. Son sonidos sintetizados por el propio juego (no son grabaciones)."));l.querySelector(".olabel").remove(),a.append(l),a.append(It("\u{1F3A4} Voz del presentador",jn("voz")),It("\u{1F4D6} El presentador lee las pistas",jn("lee")),It("\u23E9 Velocidad de lectura",...Lc("leeVel",[["normal","Normal"],["rapida","R\xE1pida"]])),It("\u{1F604} Chistes del presentador",jn("chistes")),It("\u{1F3AD} Mon\xF3logo del presentador",jn("monologo"))),a.append(Ci("\u{1F465} Concursantes",Pn(`${xe.nombre?"T\xFA: "+ke(xe.nombre)+(xe.profesion?" \xB7 "+ke(xe.profesion):""):"T\xFA: sin nombre"} \xB7 Famosos: ${Ds.slice(0,3).map(h=>ke(h.nombre)).join(", ")}\u2026 \xB7 Presenta: ${ke(xe.presentador)}`),Xn([{t:"\u270F\uFE0F Nombres y profesiones",sel:!0,full:!0,fn:()=>bt("concursantes")}]))),a.append(Ci("\u{1F4A1} Luces del plat\xF3",Xn([["auto","Auto"],["azul","Azul"],["rosa","Rosa"],["blanco","Blanco"]].map(([h,f])=>({t:f,sel:xe.platoLuz===h,fn:()=>{xe.platoLuz=h,Bc(),ao(Ri),bt("options")}}))))),a.append(It("\u{1FA9E} Reflejos del suelo",jn("reflejo",Wh))),a.append(Wn("Plat\xF3 de 2022: paredes de LED azules con franjas, banda curva con la prueba o el bote, anillos de ne\xF3n en el techo, logo rosa, sof\xE1s amarillos capiton\xE9 y suelo negro reflectante con el \xAB25\xBB. "+(xe.platoLuz==="auto"?"Las luces autom\xE1ticas siguen los colores de cada especial.":"Las luces fijas se mantienen en todos los especiales."),"mtext"));let c=It("\u2728 Calidad gr\xE1fica",...Lc("quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],Wh));a.append(c),Hh().then(h=>{let f=Ci("\u{1F3B5} Mis canciones",Pn(h.length?`${h.length} ${h.length===1?"canci\xF3n":"canciones"}: ${ke(h.map(m=>m.name).join(", "))}`:"Sin canciones: suena la m\xFAsica del juego"),Xn([{t:"\u{1F3B5} Gestionar mis canciones",sel:!0,full:!0,fn:()=>bt("canciones")}]),Wn("Sube canciones desde tu dispositivo (se quedan solo en \xE9l). Suenan de fondo durante las pruebas."));a.insertBefore(f,c)});let u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches,d=Xn([{t:u?"Siempre (app)":document.fullscreenElement?"Salir":"Activar",sel:!!document.fullscreenElement,disabled:u,fn:async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await document.documentElement.requestFullscreen({navigationUI:"hide"});try{await screen.orientation.lock("landscape")}catch{}}}catch{ct("Tu navegador no permite pantalla completa aqu\xED")}setTimeout(()=>bt("options"),300)}}]);a.append(It("\u26F6 Pantalla completa",d),Wn(`Rendimiento actual: ${Math.round(Xh)} fps. Si el juego va lento en tu m\xF3vil, elige calidad \xABBaja\xBB.`,"mtext"),r("main"))}else if(n==="canciones"){a.append(Ai("Mis canciones"));let o=document.createElement("div");o.className="ocustom",a.append(o),Hh().then(l=>{o.innerHTML="",l.length||o.append(Pn("Todav\xEDa no has subido ninguna canci\xF3n.")),l.forEach((c,u)=>o.append(It("\u{1F3B5} "+c.name,...Xn([{t:"\u25B6 Probar",fn:d=>jh(URL.createObjectURL(c.blob),d)},{t:"\u{1F5D1} Quitar",fn:async()=>{l.splice(u,1),await Hn.put("canciones",l),await Gh(),bt("canciones")}}]).children))),o.append(Xn([{t:"\u{1F4C2} Subir canci\xF3n de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async c=>{l.push({name:c.name.replace(/\.[^.]+$/,""),blob:c}),await Hn.put("canciones",l),await Gh(),ct("\u2705 \xA1Canci\xF3n guardada en este dispositivo!"),bt("canciones")}}}]))}),a.append(Wn("Las canciones se quedan solo en este dispositivo; no se suben ni se comparten. Suenan de fondo durante las pruebas."),r("options"))}else if(n==="concursantes"){a.append(Ai("Concursantes"));let o=(l,c,u)=>Yp(xe,l,c,u,()=>{Yr(),l==="presentador"&&(si.nombre=xe.presentador||"Rafa Verbo")});a.append(It("\u{1F64B} Tu nombre",o("nombre","Ej.: Iker",18)),It("\u{1F4BC} Profesi\xF3n",o("profesion","Ej.: estudiante",24)),It("\u{1F399}\uFE0F Presentador",o("presentador","Rafa Verbo",22)),It("\u{1FAAA} Presentar a los concursantes",jn("presentaciones"))),a.append(Ci("Famosos virtuales (inventados)",...Ds.map(l=>Pn(`${l.emoji} <b>${ke(l.nombre)}</b> \xB7 ${ke(l.prof)} \xB7 voz ${l.voz}`)))),a.append(Ci("Concursantes rivales",...Us.map(l=>Pn(`${l.emoji} <b>${ke(l.nombre)}</b> \xB7 ${ke(l.prof)}`)),Pn(`${za.emoji} <b>${za.nombre}</b> \xB7 ${za.prof}`))),a.append(Wn(`${xe.presentador||"Rafa Verbo"} te presentar\xE1 al empezar el Programa completo. Tu nombre sale en el marcador y en los cr\xE9ditos.`),r("options"))}else if(n==="monologos"){a.append(Ai("Mon\xF3logos del presentador"),s("\u{1F3B2} Al azar","Uno cualquiera (y luego \xABSiguiente\xBB)","gold",()=>Yn("mono:azar")));let o=document.createElement("div");o.className="monolist",oi.forEach(l=>{let c=document.createElement("button");c.className="tbtn",c.innerHTML=`<span>${Vp[l.tipo]}</span><b>${ke(l.titulo)}</b><small>${kp[l.tipo]}</small>`,c.onclick=u=>{u.stopPropagation(),ce.play("tecla"),Yn("mono:"+l.id)},o.appendChild(c)}),a.append(o,Wn(`${xe.presentador} es un presentador virtual inventado, con voz sint\xE9tica de Piper (davefx). Pulsa \xABSaltar \u23ED\xBB para terminar el mon\xF3logo.`,"mtext"),r("play"))}else if(n==="help"){a.append(r("main"),Ai("C\xF3mo se juega"));let o=document.createElement("div");o.className="mtext",o.innerHTML=Fp,a.append(o)}else if(n==="credits"){a.append(r("main"),Ai("Cr\xE9ditos"));let o=document.createElement("div");o.className="mtext creditos",o.innerHTML=tm(Oh(null))+`<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB</p><p class="small">Versi\xF3n ${Mh}</p><p class="small">Juego de fans sin \xE1nimo de lucro. \xAB25 palabras\xBB y \xAB25 Words or Less\xBB son formatos de televisi\xF3n de sus respectivos due\xF1os; este juego no est\xE1 afiliado a ninguna cadena ni productora. El presentador, los famosos y los concursantes son personajes virtuales inventados. Interfaz basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker.</p>`,a.append(o)}}var zh=n=>String(Math.round(n||0)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" \u20AC";function jh(n,e){if(fa){fa.pause(),fa=null,e&&(e.textContent="\u25B6 Probar"),Bs=!1,ce.music("menu"),Bs=!0;return}ce.stopMusic(),fa=new Audio(n),fa.volume=xe.musicVol,fa.play().catch(()=>{}),e&&(e.textContent="\u23F9 Parar");let t=fa;setTimeout(()=>{fa===t&&jh(null,e)},12e3)}async function Q2(n){let e=Oc(),t=await Oa("musica",e),i=await Oa("logo",e),a=await Hn.get("video:cabecera");n.append(Pn(t?`\u{1F3B5} <b>${ke(t.nombre)}</b> (${ke(e.corto)})`:"Sin audio propio: suena la m\xFAsica del juego"),Xn([{t:"\u{1F4C2} Elegir audio de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async s=>{n.querySelector(".oname").textContent="\u23F3 Cargando \xAB"+s.name+"\xBB\u2026",await xh("musica",e.id,s),qs="\u2705 \xA1Audio guardado en este dispositivo!",bt("options")}}},{t:"\u25B6 Probar",disabled:!t,fn:s=>jh(t.url,s)},{t:"\u{1F5D1} Quitar",disabled:!t||t.origen!=="subido",fn:async()=>{await _h("musica",e.id),qs="Audio quitado: vuelve la m\xFAsica del juego",bt("options")}}])),qs&&(n.append(Pn(qs,"omsg")),qs=""),n.append(Wn("El audio se queda solo en este dispositivo; no se sube ni se comparte. Cada etapa puede tener su propia cabecera.")),n.append(Pn(`\u{1F39E}\uFE0F Mi v\xEDdeo de cabecera: ${a?"<b>"+ke(a.name)+"</b>":"ninguno"}`),Xn([{t:"\u{1F4C2} Elegir v\xEDdeo",file:{accept:"video/*",onFile:async s=>{await Hn.put("video:cabecera",{blob:s,name:s.name,type:s.type}),xe.cabecera="video",Yr(),qs="\u2705 \xA1V\xEDdeo guardado!",bt("options")}}},{t:"\u{1F5D1} Quitar v\xEDdeo",disabled:!a,fn:async()=>{await Hn.del("video:cabecera"),xe.cabecera="3d",Yr(),bt("options")}},{t:"\u25B6 Ver cabecera",fn:async()=>{ve("#menu").classList.add("hidden"),Ec(),Bs=!1;try{await Pi.cabecera()}catch{}Ii("options")}}])),n.append(Pn(`\u{1F5BC}\uFE0F Logo propio (${ke(e.corto)}): ${i&&i.origen==="subido"?"<b>"+ke(i.nombre)+"</b>":"el del juego"}`),Xn([{t:"\u{1F4C2} Elegir imagen",file:{accept:"image/*",onFile:async s=>{await xh("logo",e.id,s),await Dc(),bt("options")}}},{t:"\u{1F5D1} Quitar logo",disabled:!i||i.origen!=="subido",fn:async()=>{await _h("logo",e.id),await Dc(),bt("options")}}]))}var Hh=async()=>await Hn.get("canciones")||[];async function Gh(){let n=await Hh();ce.setCanciones(n.map(e=>URL.createObjectURL(e.blob)))}var io=!1;function ev(){let n=Qp(ve("#menu"),`<h2>Instalar 25 palabras</h2>${Nc?'<p><button class="mbtn gold" id="instNow">\u{1F4F2} Instalar ahora</button></p>':""}<p><b>Android (Chrome):</b> men\xFA \u22EE \u2192 \xABInstalar aplicaci\xF3n\xBB o \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>iPhone/iPad (Safari):</b> bot\xF3n Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>PC (Chrome/Edge):</b> icono de instalar \u2295 en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexi\xF3n</b>.</p>`),e=n.querySelector("#instNow");e&&(e.onclick=async t=>{t.stopPropagation();let i=Nc;Nc=null,i.prompt(),n.remove()})}var Nc=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Nc=n});async function Yn(n){let e=Ec();Ga="juego",ce.stopAll(),Bs=!1,Ns(),ve("#menu").classList.add("hidden"),ve("#topbar").classList.remove("hidden"),Ti([]),Pi.marcador(null);try{if(n==="historia")return await iv(e),Ii("main");if(n==="explorar")return await tv(e);if(n.startsWith("mono:"))return await sm(n.slice(5));if(n.startsWith("entreno:"))return await $e(qe.entreno),await zp(n.slice(8),Pi,{ilimitado:io});await Bp(n,Pi)}catch(t){t!==Ba&&(console.error(t),ct("Error: "+t.message,5e3),Ii("play"))}}async function tv(n){ze.walker.position.set(0,.18,9),am(!0),ce.music("trilha"),oa("#25palabras"),ro("\u{1F579}\uFE0F Joystick / WASD para andar \xB7 arrastra para mirar \xB7 \u{1F441} cambia de c\xE1mara"),setTimeout(()=>ro(""),6e3),An(qe.explora,4500),ce.say(qe.explora);let e=!1,t=new D;for(;;){await Qe(300,n),ze.presentador.getWorldPosition(t);let i=Math.hypot(t.x-ze.walker.position.x,t.z-ze.walker.position.z);i<2.6&&!e&&(e=!0,An(qe.exploraSaludo,3500),ce.say(qe.exploraSaludo)),i>4&&(e=!1)}}async function sm(n,e=!1){let t=!n||n==="azar"?oi[Math.floor(Math.random()*oi.length)]:oi.find(r=>r.id===n)||oi[0];e||(ce.play("aplausos"),oa("#25palabras")),ma(t.cam);let i=(async()=>{for(let r of t.lineas)await $e(r,3500),await Qe(400);ce.play("badumtss"),ce.play("aplausos")})();if(await Pi.saltable(i),ve("#bubble").classList.add("hidden"),e)return;let a=oi.indexOf(t),s=n==="azar"?"azar":oi[(a+1)%oi.length].id;Pi.marcador(`\u{1F3AD} \xAB${ke(t.titulo)}\xBB`),Pi.orbita(),Ti([{label:"Siguiente \u25B6",cls:"gold",fn:()=>Yn("mono:"+s)},{label:"Repetir",fn:()=>Yn("mono:"+t.id)},{label:"Lista",fn:()=>Ii("monologos")}]),await un(new Promise(()=>{}))}var Os=!1,Vh=[null,"general","pantalla","sofas","presentador","banda","publico"];ve("#btnMenu").onclick=n=>{n.stopPropagation(),ce.play("tecla"),Ii(Ga==="juego"?"play":"main")};ve("#btnCam").onclick=n=>{if(n.stopPropagation(),ce.play("tecla"),Be.mode==="walk"){Os=!Os,ct(Os?"\u{1F441} Primera persona":"\u{1F441} Tercera persona",1200);return}ka=Vh[(Vh.indexOf(ka)+1)%Vh.length],ka&&ma(ka),ct("\u{1F441} C\xE1mara: "+(ka||"autom\xE1tica"),1200)};ve("#btnSkip").onclick=n=>{n.stopPropagation(),ga&&ga()};ve("#btnLuces").onclick=n=>{n.stopPropagation(),ve("#glights").classList.toggle("hidden")};function rm(){if(ve("#menu .modal"))return ve("#menu .modal").remove(),!0;if(ve("#menu").classList.contains("hidden"))return ve("#btnMenu").click(),!0;let n=K2[Ga];return n?(ce.play("tecla"),bt(n),!0):!1}window.__back=rm;addEventListener("keydown",n=>{n.key==="Escape"&&rm()});var $h={vel:1};ze.luces=$h;ve("#glights").innerHTML=`<div class="gl-head"><b>\u{1F4A1} Luces del plat\xF3</b><button data-close>\u2715</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposici\xF3n <input type="range" min="0.4" max="1.6" step="0.05" value="1" id="glInt"></label>
  <div class="chips">${Object.entries(vn).map(([n,e])=>`<button data-gl="${n}">${e.emoji} ${ke(e.name)}</button>`).join("")}<button data-gl="flash">\u26A1 Fogonazo</button><button data-gl="confeti">\u{1F389} Confeti</button></div>`;ve("#glights").addEventListener("click",n=>{n.stopPropagation(),n.target.closest("[data-close]")&&ve("#glights").classList.add("hidden");let e=n.target.closest("[data-gl]");if(!e)return;let t=e.dataset.gl;vn[t]?ao(t,!1):t==="flash"?(ce.play("pop"),ve("#fx-flash").style.opacity=.8,setTimeout(()=>ve("#fx-flash").style.opacity=0,120)):(ze.celebrar(),ce.play("aplausos"))});ve("#glVel").oninput=n=>{$h.vel=+n.target.value};ve("#glInt").oninput=n=>{Zt.toneMappingExposure=+n.target.value};function Wh(){let n=xe.quality;ze.setReflejo(n!=="baja"&&xe.reflejo),Zt.setPixelRatio(n==="baja"?.75:n==="media"?Math.min(devicePixelRatio,qc?1:1.25):Math.min(devicePixelRatio,1.75)),Zt.shadowMap.enabled=n!=="baja",im=n==="alta",Zt.setSize(innerWidth,innerHeight),zs.setSize(innerWidth,innerHeight)}function om(){ze.root.traverse(n=>{n.userData&&n.userData.publico&&(n.visible=xe.gradas)})}var li=null,nv=()=>`\xA1Hola! Soy ${xe.presentador||"Rafa Verbo"}. Bienvenidos a la historia de 25 palabras. Empecemos por el principio.`,lm="\xA1Hola! Bienvenidos a la historia de 25 palabras. Empecemos por el principio.",cm="Y esta ha sido la historia de 25 palabras. Ciento noventa y tres programas homenajeando a nuestra lengua. \xA1Gracias por acompa\xF1arme!";async function iv(n){ce.music("trilha"),oa("#25palabrasHistoria");let e=Ic.length;li=em({total:e,presentador:xe.presentador||"El presentador"});let t=0,i=null;li.on({prev:()=>i&&i(Math.max(0,t-1)),next:()=>i&&i(t+1),skip:()=>i&&i("skip"),ir:r=>i&&i(r)});let a=async(r,o=r)=>{li.subtitulo(r);let l=null,c=new Promise(d=>{i=h=>{l=h,d()}}),u=xe.voz?ce.say(o).then(()=>Qe(1500,n)):Qe(Math.max(3500,r.length*60),n);return await un(Promise.race([u,c])),ce.stopVoice(),vp(n),l};ma("presentador"),ze.pantalla("info",{title:"LA HISTORIA",rows:[["Cap\xEDtulos",String(e)],["Estreno","19-dic-2022"]]}),li.mostrar(-1,{emoji:"\u{1F4D6}",t:"La historia de 25 palabras",rows:[["Cap\xEDtulos",String(e)],["Presenta",xe.presentador||"Rafa Verbo"]]});let s=await a(nv(),lm);for(t=typeof s=="number"?s:0;t<e;){let r=Ic[t];ma(r.cam),ze.pantalla("info",{title:r.t.toUpperCase(),rows:r.rows}),li.mostrar(t,{emoji:r.emoji,t:r.t,rows:r.rows}),s=await a(r.sub),t=s==="skip"||s==null?t+1:s}ze.pantalla("logo"),ma("presentador"),ce.play("aplausos"),li.mostrar(e-1,{emoji:"\u{1F524}",t:"\xA1Fin!",rows:[]}),await a(cm),li.cerrar(),li=null}window.__frases=()=>{let n=[],e=(i,a="davefx",s=!1)=>{i&&typeof i=="string"&&n.push({v:a,t:i.trim(),q:s})};Object.values(qe).forEach(i=>e(i)),wc.forEach(i=>e(i)),oi.forEach(i=>i.lineas.forEach(a=>e(a))),Ic.forEach(i=>e(i.sub)),[lm,cm].forEach(i=>e(i)),Object.values(vn).forEach(i=>{e(i.saludo),(i.extra||[]).forEach(a=>e(a))});let t=["daniela","sharvard","carlfm","ald"];return Object.values(Ac).flat().forEach(i=>t.forEach(a=>e(i,a))),Va.forEach(i=>t.forEach(a=>e(i.p,a))),Us.forEach(i=>{for(let a=5;a<=24;a++)e(`Lo hago con ${a} pistas.`,i.voz)}),Ph.forEach(i=>i.c.forEach(a=>e(a,"davefx",!0))),n};addEventListener("resize",()=>{Ha.aspect=innerWidth/innerHeight,Ha.updateProjectionMatrix(),Zt.setSize(innerWidth,innerHeight),zs.setSize(innerWidth,innerHeight)});var av=new Tr,no=0,Xh=60,pa=new D;function sv(){let n=Math.min(av.getDelta(),.05);no+=n,Xh=Xh*.95+1/Math.max(n,.001)*.05;let e=ze.walker;if(Be.mode==="walk"){let a=Fs.x,s=Fs.y;($n.KeyW||$n.ArrowUp)&&(s-=1),($n.KeyS||$n.ArrowDown)&&(s+=1),($n.KeyA||$n.ArrowLeft)&&(a-=1),($n.KeyD||$n.ArrowRight)&&(a+=1);let r=Math.hypot(a,s);if(r>.1){let o=($n.ShiftLeft?6:3.6)*Math.min(1,r)*n;a/=Math.max(1,r),s/=Math.max(1,r);let l=-Math.sin(Be.yaw),c=-Math.cos(Be.yaw),u=Math.cos(Be.yaw),d=-Math.sin(Be.yaw),h=(l*-s+u*a)*o,f=(c*-s+d*a)*o,m=e.position.x+h,v=e.position.z+f;ze.bloqueado(m,v)?ze.bloqueado(m,e.position.z)?ze.bloqueado(e.position.x,v)||(e.position.z=v):e.position.x=m:(e.position.x=m,e.position.z=v),e.rotation.y=Math.atan2(h,f),e.children.forEach((g,p)=>{p>=5&&(g.rotation.x=Math.sin(no*10)*.5*(p%2?1:-1))})}if(Os)e.visible=!1,Be.tPos.set(e.position.x,1.65,e.position.z),Be.tLook.set(e.position.x-Math.sin(Be.yaw)*5,1.65-Be.pitch*3,e.position.z-Math.cos(Be.yaw)*5);else{e.visible=!0;let o=4.4*Math.cos(Be.pitch*.6);Be.tPos.set(e.position.x+Math.sin(Be.yaw)*o,1.8+Be.pitch*2.6,e.position.z+Math.cos(Be.yaw)*o),Be.tLook.set(e.position.x,1.4,e.position.z)}so&&so()}else if(Be.mode==="menu"){let a=Math.sin(no*.06)*.75;Be.tPos.set(Math.sin(a)*15,6.5+Math.sin(no*.2)*1.2,Math.cos(a)*15+3),Be.tLook.set(0,3,-5)}let t=Be.mode==="walk"?10:2.2;Be.pos.lerp(Be.tPos,Math.min(1,n*t)),Be.look.lerp(Be.tLook,Math.min(1,n*t)),Ha.position.copy(Be.pos),Ha.lookAt(Be.look),ze.update(no*$h.vel,n);let i=ve("#bubble");if(!i.classList.contains("hidden"))if(performance.now()>si.hasta)i.classList.add("hidden");else{(si.quien!=null&&ze.figs[si.quien]?ze.figs[si.quien]:ze.presentador).getWorldPosition(pa),pa.y+=2,pa.project(Ha);let s=pa.z<1&&Math.abs(pa.x)<1.1&&Math.abs(pa.y)<1.1;i.style.left=Math.max(160,Math.min(innerWidth-160,(pa.x*.5+.5)*innerWidth))+"px",i.style.top=Math.max(80,s?(-pa.y*.5+.5)*innerHeight:90)+"px"}im?zs.render():Zt.render(Fc,Ha)}Zt.setAnimationLoop(sv);ao(Ri,!1);Wh();om();Gh();Dc().then(()=>{(Ga==="title"||Ga==="main")&&!ve("#menu").classList.contains("hidden")&&bt(Ga)});Ii(ui.has("main")?"main":"title");document.addEventListener("visibilitychange",()=>{document.hidden?ce.stopMusic():ve("#menu").classList.contains("hidden")||ce.music("menu")});addEventListener("pointerdown",function n(){ve("#menu").classList.contains("hidden")||ce.music("menu"),removeEventListener("pointerdown",n)});setTimeout(()=>ve("#loading").classList.add("hidden"),600);ui.get("cam")&&(ve("#menu").classList.add("hidden"),oo(...Uc[ui.get("cam")],!0));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__at={P:ze,api:Pi,iniciar:Yn,irMenu:Ii,Lt:bt,camara:ma,show:oo,CAMS:Uc,aplicarTema:ao,ETAPAS:da,ctx:In,cfg:xe};window.__plato={ok:!0,scene:Fc,renderer:Zt};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
