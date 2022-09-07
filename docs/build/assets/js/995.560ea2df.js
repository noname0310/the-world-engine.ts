"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[995],{546:(t,e,i)=>{i.d(e,{W:()=>h});var s=i(8018);class h{constructor(t,e,i,h,n){this._instantiater=t.instantiater,this._gameObjectBuilder=new s.f(t,e,i,h,n)}get instantiater(){return this._instantiater}get gameObjectBuilder(){return this._gameObjectBuilder}}},7888:(t,e,i)=>{i.d(e,{s:()=>s});class s{constructor(t=null){this.ref=t}}},1269:(t,e,i)=>{i.d(e,{Y:()=>o});var s=i(6120),h=i(4532),n=i(3674),r=i(6896);class o extends n.w{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.requiredComponents=[r.V],this.mh=null,this.Vh=!1,this.wh=1,this.zh=new s.F,this.xh=1,this.Sh=10,this.bh=5,this._h=5,this.Bh=new h.P,this.Eh=t=>{" "===t.key&&(this._h=this.bh,this.Mh(),this.transform.localPosition.copy(this.Bh))},this.jh=t=>{this._h+=.01*t.deltaY,this._h<this.xh?this._h=this.xh:this._h>this.Sh&&(this._h=this.Sh),this.Mh()},this.Cr=t=>{this.zh.set(t.clientX/this.engine.screen.width,t.clientY/this.engine.screen.height),t.button===this.wh&&(this.Vh=!0)},this.kh=t=>{t.button===this.wh&&(this.Vh=!1)},this.yh=t=>{if(!this.Vh)return;const e=t.clientX/this.engine.screen.width,i=t.clientY/this.engine.screen.height,s=e-this.zh.x,h=i-this.zh.y,n=this.engine.screen.width/this.engine.screen.height;this.transform.localPosition.x-=s*this.mh.viewSize*2*n,this.transform.localPosition.y+=h*this.mh.viewSize*2,this.zh.set(e,i)},this.Dh=t=>{this.Vh=!1}}awake(){this.mh=this.gameObject.getComponent(r.V),this.bh=this.mh.viewSize,this.Bh.copy(this.transform.localPosition),this._h=this.bh,this.mh.viewSize=this._h}onEnable(){const t=this.engine.input;t.onKeyDown.addListener(this.Eh),t.onWheel.addListener(this.jh),t.onPointerDown.addListener(this.Cr),t.onPointerUp.addListener(this.kh),t.onPointerMove.addListener(this.yh),t.onPointerLeave.addListener(this.Dh)}onDisable(){const t=this.engine.input;t.onKeyDown.removeListener(this.Eh),t.onWheel.removeListener(this.jh),t.onPointerDown.removeListener(this.Cr),t.onPointerUp.removeListener(this.kh),t.onPointerMove.removeListener(this.yh),t.onPointerLeave.removeListener(this.Dh)}Mh(){this.mh&&(this.mh.viewSize=this._h)}get minViewSize(){return this.xh}set minViewSize(t){this.xh=t,this._h<this.xh&&(this._h=this.xh,this.Mh())}get maxViewSize(){return this.Sh}set maxViewSize(t){this.Sh=t,this._h>this.Sh&&(this._h=this.Sh,this.Mh())}get mouseMoveButton(){return this.wh}set mouseMoveButton(t){this.wh=t}}},983:(t,e,i)=>{i.d(e,{E:()=>s});class s{static loadImageFromPath(t){return new Promise(((e,i)=>{const s=new Image;s.onload=()=>{e(s)},s.onerror=()=>{i(new Error(`Failed to load image "${t}".`))},s.src=t}))}static loadImagesFromPath(t){return Promise.all(t.map((t=>s.loadImageFromPath(t))))}static loadImage(t){return new Promise(((e,i)=>{t.onload=()=>{e(t)},t.onerror=()=>{i(new Error("Failed to load image."))}}))}static loadImages(t){return Promise.all(t.map((t=>s.loadImage(t))))}}},291:(t,e,i)=>{i.d(e,{d:()=>s});class s{static map(t,e){const i=[];for(let s=0;s<t.length;++s){const h=[],n=t[s];for(let t=0;t<n.length;++t){const i=n[t];if(void 0===e[i])throw new Error(`conversion not found for ${i}`);h.push(e[i](t,s))}i.push(h)}return i}}},7111:(t,e,i)=>{i.d(e,{n:()=>a});var s=i(6120),h=i(4532),n=i(3674),r=i(8788),o=i(6868),l=i(3379);class a extends n.w{constructor(){super(...arguments),this.Qr=new Map,this.Zr=16,this.sn=1,this.en=1,this.hn=16,this.rn=16,this.nn=1.001,this.on=null,this.ln=!0,this.un=.1,this.an=r.r.Pixelated,this.dn=()=>{this.Qr.forEach(((t,e)=>{t.filter.copy(this.Ui)}))},this.Ui=new l.c(this.dn),this.Nr=[],this.Xr=!1}start(){this.Xr=!0;const t=this.Nr;for(let e=0;e<t.length;++e)t[e]();this.Nr.length=0}fn(){this.Qr.forEach(((t,e)=>{const i=this.gn(e)*this.Zr*this.sn,s=this.pn(e)*this.Zr*this.en;t.gameObject.transform.localPosition.set(i,s,0)}))}gn(t){return parseInt(t.substring(0,t.indexOf("_")))}pn(t){return parseInt(t.substring(t.indexOf("_")+1))}mn(t,e){return`${t}_${e}`}Cn(t,e,i,h){const n=i-t*this.Zr+this.Zr/2,r=h-e*this.Zr+this.Zr/2;return new s.F(n,r)}_n(t,e){const i=this.mn(t,e);let s=this.Qr.get(i);return void 0===s&&(this.gameObject.addChildFromBuilder(this.engine.instantiater.buildGameObject("css_tilemap_renderer_"+t+"_"+e,new h.P(t*this.Zr*this.sn,e*this.Zr*this.en,0),void 0,(new h.P).setScalar(this.nn)).withComponent(o.N,(t=>{s=t,this.on&&(t.imageSources=this.on),t.gridCellWidth=this.sn,t.gridCellHeight=this.en,t.tileResolutionX=this.hn,t.tileResolutionY=this.rn,t.rowCount=this.Zr,t.columnCount=this.Zr,t.pointerEvents=this.ln,t.viewScale=this.un,t.filter.copy(this.Ui)}))),this.Qr.set(i,s)),s}Rn(t,e){const i=this.mn(t,e),s=this.Qr.get(i);return void 0===s?null:s}drawTile(t,e,i,s){if(!this.Xr)return void this.Nr.push((()=>{this.drawTile(t,e,i,s)}));const h=Math.floor((t+this.Zr/2)/this.Zr),n=Math.floor((e+this.Zr/2)/this.Zr),r=this._n(h,n),o=this.Cn(h,n,t,e),l=this.chunkSize%2==0?0:-.5,a=this.chunkSize%2==0?0:.5;r.drawTile(o.x+l,this.Zr-o.y-1+a,i,s)}drawTileFromTwoDimensionalArray(t,e,i){if(this.Xr)for(let s=0;s<t.length;s++)for(let h=0;h<t[s].length;h++)null!==t[s][h]&&this.drawTile(h+e,t.length-s+i-1,t[s][h].i,t[s][h].a);else this.Nr.push((()=>{this.drawTileFromTwoDimensionalArray(t,e,i)}))}clearTile(t,e){if(!this.Xr)return void this.Nr.push((()=>{this.clearTile(t,e)}));const i=Math.floor((t+this.Zr/2)/this.Zr),s=Math.floor((e+this.Zr/2)/this.Zr),h=this.Rn(i,s);if(null===h)return;const n=this.Cn(i,s,t,e),r=this.chunkSize%2==0?0:-.5,o=this.chunkSize%2==0?0:.5;h.clearTile(n.x+r,this.Zr-n.y-1+o)}get chunkSize(){return this.Zr}set chunkSize(t){this.Zr=t,this.fn(),this.Qr.forEach(((t,e)=>{t.rowCount=this.Zr,t.columnCount=this.Zr}))}set imageSources(t){this.Xr?(this.on=t,this.Qr.forEach(((e,i)=>{e.imageSources=t}))):this.Nr.push((()=>{this.imageSources=t}))}get pointerEvents(){return this.ln}set pointerEvents(t){this.ln=t,this.Qr.forEach(((e,i)=>{e.pointerEvents=t}))}get gridCellWidth(){return this.sn}set gridCellWidth(t){this.sn!==t&&(this.sn=t,this.fn(),this.Qr.forEach(((t,e)=>{t.gridCellWidth=this.sn})))}get gridCellHeight(){return this.en}set gridCellHeight(t){this.en!==t&&(this.en=t,this.fn(),this.Qr.forEach(((t,e)=>{t.gridCellHeight=this.en})))}get tileResolutionX(){return this.hn}set tileResolutionX(t){this.hn!==t&&(this.hn=t,this.Qr.forEach(((t,e)=>{t.tileResolutionX=this.hn})))}get tileResolutionY(){return this.rn}set tileResolutionY(t){this.rn!==t&&(this.rn=t,this.Qr.forEach(((t,e)=>{t.tileResolutionY=this.rn})))}get tilemapScale(){return this.nn}set tilemapScale(t){this.nn!==t&&(this.nn=t,this.Qr.forEach(((t,e)=>{t.gameObject.transform.localScale.setScalar(this.nn)})))}get gridCenter(){const t=this.Zr%2==1?0:this.sn/2,e=this.Zr%2==1?0:this.en/2;return new s.F(this.transform.localPosition.x+t,this.transform.localPosition.y+e)}get gridCenterX(){const t=this.Zr%2==1?0:this.sn/2;return this.transform.localPosition.x+t}get gridCenterY(){const t=this.Zr%2==1?0:this.en/2;return this.transform.localPosition.y+t}get viewScale(){return this.un}set viewScale(t){this.un=t,this.Qr.forEach(((t,e)=>{t.viewScale=this.un}))}get filter(){return this.Ui}get imageRenderingMode(){return this.an}set imageRenderingMode(t){this.an=t,this.Qr.forEach(((e,i)=>{e.imageRenderingMode=t}))}}},251:(t,e,i)=>{i.d(e,{N:()=>h});var s=i(3514);class h extends s.C{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.al=-100}update(){this.transform.localPosition.z=this.engine.cameraContainer.camera.transform.position.z+this.al}get offset(){return this.al}set offset(t){this.al=t}}},6868:(t,e,i)=>{i.d(e,{I:()=>o,N:()=>l});var s=i(6120),h=i(4627),n=i(6924),r=i(8788);class o{constructor(t,e=1,i=1){if(!t.complete)throw new Error(`Image {${t.src}} is not loaded.`);this.uc=t,this.Sa=i,this.pa=e}get htmlImageElement(){return this.uc}get columnCount(){return this.pa}get rowCount(){return this.Sa}}class l extends n.Y{constructor(){super(...arguments),this.pa=10,this.Sa=10,this.sn=1,this.en=1,this.hn=16,this.rn=16,this.on=null,this.an=r.r.Pixelated,this.Nr=[]}renderInitialize(){this.dc();const t=this.Nr;for(let e=0;e<t.length;++e)t[e]();this.Nr.length=0}updateCenterOffset(t){if(!this.css3DObject)return;const e=this.pa*this.sn,i=this.Sa*this.en;this.css3DObject.position.set(e*this.centerOffset.x,i*this.centerOffset.y,0),t&&(h.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}updateViewScale(t){if(!this.css3DObject)return;const e=this.viewScale,i=this.htmlElement,s=this.pa*this.sn,n=this.Sa*this.en;i.style.width=s/e+"px",i.style.height=n/e+"px",this.css3DObject.scale.set(e,e,e),t&&(h.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}dc(){const t=this.pa*this.sn,e=this.Sa*this.en,i=this.pa*this.hn,s=this.Sa*this.rn;this.htmlElement=document.createElement("canvas"),this.htmlElement.width=i,this.htmlElement.height=s,this.htmlElement.style.imageRendering=this.an,this.htmlElement.style.width=t/this.viewScale+"px",this.htmlElement.style.height=e/this.viewScale+"px";const n=this.initializeBaseComponents(!1);h.w.updateRawObject3DWorldMatrixRecursively(n),this.transform.enqueueRenderAttachedObject3D(n)}drawTile(t,e,i,s){if(!this.readyToDraw)return void this.Nr.push((()=>this.drawTile(t,e,i,s)));const h=this.htmlElement.getContext("2d"),n=this.on[i];if(1===n.rowCount&&1===n.columnCount)h.drawImage(n.htmlImageElement,0,0,this.hn,this.rn,t*this.hn,e*this.rn,this.hn,this.rn);else{if(void 0===s)throw new Error("Atlas index is required.");{const i=Math.floor(s/n.columnCount),r=s%n.columnCount,o=n.htmlImageElement.width/n.columnCount,l=n.htmlImageElement.height/n.rowCount;h.drawImage(n.htmlImageElement,r*o,i*l,o,l,t*this.hn,e*this.rn,this.hn,this.rn)}}}drawTileFromTwoDimensionalArray(t,e,i){if(!this.readyToDraw)return void this.Nr.push((()=>this.drawTileFromTwoDimensionalArray(t,e,i)));const s=this.htmlElement.getContext("2d");for(let h=0;h<t.length;h++){const n=t[h];for(let t=0;t<n.length;t++){const r=n[t];if(null===r)continue;const o=this.on[r.i];if(1===o.rowCount&&1===o.columnCount)s.drawImage(o.htmlImageElement,0,0,this.hn,this.rn,t*this.hn+e*this.hn,h*this.rn+i*this.rn,this.hn,this.rn);else{if(void 0===r.a)throw new Error("Atlas index is required.");{const n=r.a%o.columnCount,l=Math.floor(r.a/o.columnCount),a=o.htmlImageElement.width/o.columnCount,c=o.htmlImageElement.height/o.rowCount;s.drawImage(o.htmlImageElement,n*a,l*c,a,c,t*this.hn+e*this.hn,h*this.rn+i*this.rn,this.hn,this.rn)}}}}}clearTile(t,e){if(!this.readyToDraw)return void this.Nr.push((()=>this.clearTile(t,e)));this.htmlElement.getContext("2d").clearRect(t*this.hn,e*this.rn,this.hn,this.rn)}set imageSources(t){if(this.readyToDraw){this.on=t;for(let e=0;e<t.length;++e)if(!t[e].htmlImageElement.complete)throw new Error(`Image ${t[e].htmlImageElement.src} is not loaded.`)}else this.Nr.push((()=>this.imageSources=t))}get columnCount(){return this.pa}set columnCount(t){if(this.pa=t,this.htmlElement){const t=this.pa*this.sn,e=this.pa*this.hn;this.htmlElement.width=e,this.htmlElement.style.width=t/this.viewScale+"px",this.updateCenterOffset(!0)}}get rowCount(){return this.Sa}set rowCount(t){if(this.Sa=t,this.htmlElement){const t=this.Sa*this.en,e=this.Sa*this.rn;this.htmlElement.height=e,this.htmlElement.style.height=t/this.viewScale+"px",this.updateCenterOffset(!0)}}get gridCellWidth(){return this.sn}set gridCellWidth(t){if(this.sn=t,this.htmlElement){const t=this.pa*this.sn;this.htmlElement.style.width=t/this.viewScale+"px",this.updateCenterOffset(!0)}}get gridCellHeight(){return this.en}set gridCellHeight(t){if(this.en=t,this.htmlElement){const t=this.Sa*this.en;this.htmlElement.style.height=t/this.viewScale+"px",this.updateCenterOffset(!0)}}get tileResolutionX(){return this.hn}set tileResolutionX(t){if(this.hn=t,this.htmlElement){const t=this.pa*this.hn;this.htmlElement.width=t}}get tileResolutionY(){return this.rn}set tileResolutionY(t){if(this.rn=t,this.htmlElement){const t=this.Sa*this.rn;this.htmlElement.height=t}}get gridCenter(){const t=this.columnCount%2==1?0:this.sn/2,e=this.rowCount%2==1?0:this.en/2;return new s.F(this.transform.position.x+t,this.transform.position.y+e)}get gridCenterX(){return this.transform.position.x+(this.columnCount%2==1?0:this.sn/2)}get gridCenterY(){return this.transform.position.y+(this.rowCount%2==1?0:this.en/2)}get imageRenderingMode(){return this.an}set imageRenderingMode(t){this.an=t,this.htmlElement&&(this.htmlElement.style.imageRendering=this.an)}}},3514:(t,e,i)=>{i.d(e,{C:()=>h});var s=i(3674);class h extends s.w{}}}]);