"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[908],{7888:(t,e,s)=>{s.d(e,{s:()=>i});class i{constructor(t=null){this.ref=t}}},1269:(t,e,s)=>{s.d(e,{Y:()=>a});var i=s(6120),h=s(4532),l=s(3674),n=s(6896);class a extends l.w{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.requiredComponents=[n.V],this.mh=null,this.fh=!1,this.ph=1,this.Vh=new i.F,this.wh=1,this.zh=10,this.xh=5,this.Sh=5,this.bh=new h.P,this.dh=t=>{" "===t.key&&(this.Sh=this.xh,this._h(),this.transform.localPosition.copy(this.bh))},this.Bh=t=>{this.Sh+=.01*t.deltaY,this.Sh<this.wh?this.Sh=this.wh:this.Sh>this.zh&&(this.Sh=this.zh),this._h()},this._r=t=>{this.Vh.set(t.clientX/this.engine.screen.width,t.clientY/this.engine.screen.height),t.button===this.ph&&(this.fh=!0)},this.Eh=t=>{t.button===this.ph&&(this.fh=!1)},this.Mh=t=>{if(!this.fh)return;const e=t.clientX/this.engine.screen.width,s=t.clientY/this.engine.screen.height,i=e-this.Vh.x,h=s-this.Vh.y,l=this.engine.screen.width/this.engine.screen.height;this.transform.localPosition.x-=i*this.mh.viewSize*2*l,this.transform.localPosition.y+=h*this.mh.viewSize*2,this.Vh.set(e,s)},this.jh=t=>{this.fh=!1}}awake(){this.mh=this.gameObject.getComponent(n.V),this.xh=this.mh.viewSize,this.bh.copy(this.transform.localPosition),this.Sh=this.xh,this.mh.viewSize=this.Sh}onEnable(){const t=this.engine.input;t.onKeyDown.addListener(this.dh),t.onWheel.addListener(this.Bh),t.onPointerDown.addListener(this._r),t.onPointerUp.addListener(this.Eh),t.onPointerMove.addListener(this.Mh),t.onPointerLeave.addListener(this.jh)}onDisable(){const t=this.engine.input;t.onKeyDown.removeListener(this.dh),t.onWheel.removeListener(this.Bh),t.onPointerDown.removeListener(this._r),t.onPointerUp.removeListener(this.Eh),t.onPointerMove.removeListener(this.Mh),t.onPointerLeave.removeListener(this.jh)}_h(){this.mh&&(this.mh.viewSize=this.Sh)}get minViewSize(){return this.wh}set minViewSize(t){this.wh=t,this.Sh<this.wh&&(this.Sh=this.wh,this._h())}get maxViewSize(){return this.zh}set maxViewSize(t){this.zh=t,this.Sh>this.zh&&(this.Sh=this.zh,this._h())}get mouseMoveButton(){return this.ph}set mouseMoveButton(t){this.ph=t}}},6885:(t,e,s)=>{s.d(e,{y:()=>c});var i=s(4532),h=s(3674),l=s(7888),n=s(6896),a=s(1466);class c extends h.w{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.requiredComponents=[n.V],this.sd=null,this.hd=null,this.Ih=1,this.Th=1,this.rd=18,this.nd=10,this.od=.2,this.dd=0,this.ad=new i.P(NaN,NaN,NaN)}awake(){const t=new l.s;this.hd=this.engine.scene.addChildFromBuilder(this.engine.instantiater.buildGameObject("grid-renderer",void 0,void 0,new i.P(this.od,this.od,this.od)).active(!1).withComponent(a.w,(t=>{const e=document.createElement("div");e.style.backgroundImage="                        repeating-linear-gradient(#999 0 1px, transparent 1px 100%),                        repeating-linear-gradient(90deg, #999 0 1px, transparent 1px 100%)",e.style.backgroundSize=this.Ih/this.od/.1+"px "+this.Th/this.od/.1+"px",t.elementWidth=this.rd/this.od,t.elementHeight=this.nd/this.od,t.pointerEvents=!1,t.element=e,t.viewScale=.1})).getComponent(a.w,t)),this.sd=t.ref}onEnable(){this.hd.exists&&(this.hd.activeSelf=!0)}onDisable(){this.hd.exists&&(this.hd.activeSelf=!1)}update(){const t=this.transform.position,e=1/this.od/.1,s=this.rd*e/2,i=this.nd*e/2,h=this.Ih*e,l=this.Th*e,n=s%h,a=i%l;if(!t.equals(this.ad)){const s=this.hd.transform.position;s.copy(t),s.z+=this.dd,this.sd.element.style.backgroundPosition=-t.x*e+n+h/2-.5+"px "+(t.y*e+a+l/2-.5)+"px"}}onDestroy(){var t;null===(t=this.hd)||void 0===t||t.destroy()}ld(){const t=this.sd;t&&(t.element.style.backgroundSize=this.Ih/this.od/.1+"px "+this.Th/this.od/.1+"px")}get gridCellWidth(){return this.Ih}set gridCellWidth(t){this.Ih=t,this.ld()}get gridCellHeight(){return this.Th}set gridCellHeight(t){this.Th=t,this.ld()}get renderWidth(){return this.rd}set renderWidth(t){this.rd=t,this.sd&&(this.sd.elementWidth=this.rd/this.od)}get renderHeight(){return this.nd}set renderHeight(t){this.nd=t,this.sd&&(this.sd.elementHeight=this.nd/this.od)}get lineWidth(){return.1*this.od}set lineWidth(t){this.od=t/.1;const e=this.sd;e&&(this.ld(),e.elementWidth=this.rd/this.od,e.elementHeight=this.nd/this.od,e.gameObject.transform.localScale.setScalar(this.od))}get zOffset(){return this.dd}set zOffset(t){this.dd=t}}},1466:(t,e,s)=>{s.d(e,{w:()=>l});var i=s(4627),h=s(6924);class l extends h.Y{constructor(){super(...arguments),this.tu=1,this.su=1,this.iu=!1,this.Ca=null}renderInitialize(){var t;null===(t=this.Ca)||void 0===t||t.call(this),this.htmlElement||(this.element=null)}updateCenterOffset(t){if(!this.css3DObject)return;let e,s;if(this.iu)if(this.css3DObject.element.parentElement){const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="",e=this.css3DObject.element.offsetWidth*this.viewScale,s=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t}else{const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="";const i=this.css3DObject.element.style.transform;this.css3DObject.element.style.transform="translateX(1000000px)",document.body.appendChild(this.css3DObject.element),e=this.css3DObject.element.offsetWidth*this.viewScale,s=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t,this.css3DObject.element.style.transform=i,document.body.removeChild(this.css3DObject.element)}else e=this.tu,s=this.su;this.css3DObject.position.set(e*this.centerOffset.x,s*this.centerOffset.y,0),t&&(i.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}updateViewScale(t){if(!this.css3DObject)return;const e=this.viewScale;this.iu?(this.css3DObject.scale.set(e,e,e),this.updateCenterOffset(!1)):(this.css3DObject.element.style.width=this.tu/this.viewScale+"px",this.css3DObject.element.style.height=this.su/this.viewScale+"px",this.css3DObject.scale.set(e,e,e)),t&&(i.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}get element(){return this.htmlElement}set element(t){const e=this.htmlElement=null!=t?t:document.createElement("div");this.readyToDraw?this.hu(e):this.Ca=()=>this.hu(e)}hu(t){this.iu?(t.style.width="auto",t.style.height="auto"):(t.style.width=this.tu/this.viewScale+"px",t.style.height=this.su/this.viewScale+"px");const e=this.initializeBaseComponents(!0);i.w.updateRawObject3DWorldMatrixRecursively(e),this.transform.enqueueRenderAttachedObject3D(e)}get elementWidth(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetWidth*this.viewScale;return this.htmlElement.style.display=t,e}return 0}return this.tu}set elementWidth(t){this.iu||(this.tu=t,this.htmlElement&&(this.htmlElement.style.width=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get elementHeight(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetHeight*this.viewScale;return this.htmlElement.style.display=t,e}return 0}return this.su}set elementHeight(t){this.iu||(this.su=t,this.htmlElement&&(this.htmlElement.style.height=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get autoSize(){return this.iu}set autoSize(t){this.iu=t,this.htmlElement&&(t?(this.htmlElement.style.width="auto",this.htmlElement.style.height="auto"):(this.htmlElement.style.width=this.tu/this.viewScale+"px",this.htmlElement.style.height=this.su/this.viewScale+"px"))}}},4483:(t,e,s)=>{s.d(e,{$:()=>r});var i,h,l=s(3367),n=s(4627),a=s(6924),c=s(8788);(h=i||(i={}))[h.ObjectFit=0]="ObjectFit",h[h.ClipPath=1]="ClipPath";class r extends a.Y{constructor(){super(...arguments),this.Aa=i.ObjectFit,this.Ia=0,this.ja=0,this.Ga=!1,this.Ha=!1,this.Wa=1,this.nn=c.r.Pixelated,this.pa=1,this.Sa=1,this.Xa=0,this.Ya=0,this.Ea=0,this.Ca=null}renderInitialize(){this.Ca?this.Ca():this.asyncSetImageFromPath(l.Q.defaultSpriteSrc,1,1)}updateCenterOffset(t){if(this.css3DObject)if(this.Aa===i.ObjectFit)this.css3DObject.position.set(this.Ia*this.centerOffset.x,this.ja*this.centerOffset.y,0),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject));else{const e=this.Xa%this.pa,s=Math.floor(this.Xa/this.pa),i=this.Ga?-(this.Ia*this.pa/2-this.Ia/2)+e*this.Ia:this.Ia*this.pa/2-this.Ia/2-e*this.Ia,h=this.Ha?this.ja*this.Sa/2-this.ja/2-s*this.ja:-(this.ja*this.Sa/2-this.ja/2)+s*this.ja;this.css3DObject.position.set(this.Ia*this.centerOffset.x+i,this.ja*this.centerOffset.y+h,0),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}}updateViewScale(t){if(this.css3DObject)if(this.Aa===i.ObjectFit){const e=this.viewScale,s=this.Ga?-1:1,i=this.Ha?-1:1;this.css3DObject.scale.set(this.Ia/this.Ya*e*s,this.ja/this.Ea*e*i,1),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}else{const e=this.viewScale,s=this.htmlElement;s.style.width=this.Ia*this.pa/e+"px",s.style.height=this.ja*this.Sa/e+"px";const i=this.Ga?-1:1,h=this.Ha?-1:1;this.css3DObject.scale.set(e*i,e*h,e),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}}$a(){if(this.htmlElement)if(this.Aa===i.ObjectFit){const t=-this.Xa%this.pa*this.Ya,e=-Math.floor(this.Xa/this.pa)*this.Ea;this.htmlElement.style.objectPosition=t+"px "+e+"px"}else{const t=Math.floor(this.Xa/this.pa),e=this.pa-this.Xa%this.pa-1;this.htmlElement.style.clipPath="inset("+100/this.Sa*t+"% "+100/this.pa*e+"% "+(100-(100/this.Sa*t+100/this.Sa))+"% "+(100-(100/this.pa*e+100/this.pa))+"%)"}}get image(){return this.htmlElement}asyncSetImageFromPath(t,e,s,i){var h;if(!this.readyToDraw)return void(this.Ca=()=>this.asyncSetImageFromPath(t,e,s,i));const l=null!==(h=this.htmlElement)&&void 0!==h?h:new Image;l.src=t;const n=t=>{this.exists&&(l.removeEventListener("load",n),this.setImage(l,e,s),null==i||i())};l.addEventListener("load",n)}setImage(t,e,s){if(!t.complete)throw new Error(`Image {${t.src}} is not loaded.`);this.pa=e,this.Sa=s,this.htmlElement=t,t.alt=this.gameObject.name+"_sprite_atlas",t.style.imageRendering=this.nn,t.style.opacity=this.Wa.toString(),this.Aa===i.ObjectFit?(1!==this.viewScale&&console.warn("CssSpriteAtlas.viewScale is not supported in CssSpriteAtlasRenderMode.ObjectFit, for supressing this warning set viewScale to 1."),this.Ya=t.naturalWidth/this.pa,this.Ea=t.naturalHeight/this.Sa,0===this.Ia&&(this.Ia=.1*this.Ya),0===this.ja&&(this.ja=.1*this.Ea),t.style.width=this.Ya+"px",t.style.height=this.Ea+"px",t.style.objectFit="none"):(0===this.Ia&&(this.Ia=t.naturalWidth/this.pa*.1),0===this.ja&&(this.ja=t.naturalHeight/this.Sa*.1),t.style.width=this.Ia*this.pa/this.viewScale+"px",t.style.height=this.ja*this.Sa/this.viewScale+"px");const h=this.initializeBaseComponents(!1);this.$a(),n.w.updateRawObject3DWorldMatrixRecursively(h),this.transform.enqueueRenderAttachedObject3D(h)}get renderMode(){return this.Aa}set renderMode(t){if(this.Aa!==t&&(this.Aa=t,this.htmlElement)){const t=this.htmlElement;this.Aa===i.ObjectFit?(1!==this.viewScale&&console.warn("CssSpriteAtlas.viewScale is not supported in CssSpriteAtlasRenderMode.ObjectFit"),t.style.clipPath="",this.Ya=t.naturalWidth/this.pa,this.Ea=t.naturalHeight/this.Sa,0===this.Ia&&(this.Ia=this.Ya),0===this.ja&&(this.ja=this.Ea),t.style.width=this.Ya+"px",t.style.height=this.Ea+"px",t.style.objectFit="none"):(t.style.objectFit="",t.style.objectPosition="",0===this.Ia&&(this.Ia=t.naturalWidth/this.pa),0===this.ja&&(this.ja=t.naturalHeight/this.Sa),t.style.width=this.Ia*this.pa/this.viewScale+"px",t.style.height=this.ja*this.Sa/this.viewScale+"px"),this.updateViewScale(!1),this.updateCenterOffset(!1),this.$a(),n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject)}}get imageIndex(){return this.Xa}set imageIndex(t){this.Xa=t,this.$a(),this.Aa===i.ClipPath&&this.updateCenterOffset(!0)}get columnCount(){return this.pa}get rowCount(){return this.Sa}get imageWidth(){return this.Ia}set imageWidth(t){this.Ia=t,this.Aa===i.ObjectFit?this.css3DObject&&(this.css3DObject.scale.x=this.Ia/this.Ya*this.viewScale,this.css3DObject.scale.x*=this.Ga?-1:1):this.htmlElement&&(this.htmlElement.style.width=t*this.pa/this.viewScale+"px"),this.updateCenterOffset(!0)}get imageHeight(){return this.ja}set imageHeight(t){this.ja=t,this.Aa===i.ObjectFit?this.css3DObject&&(this.css3DObject.scale.y=this.ja/this.Ea*this.viewScale,this.css3DObject.scale.y*=this.Ha?-1:1):this.htmlElement&&(this.htmlElement.style.height=t*this.Sa/this.viewScale+"px"),this.updateCenterOffset(!0)}get imageFlipX(){return this.Ga}set imageFlipX(t){this.Ga=t,this.css3DObject&&(this.Ga?0<this.css3DObject.scale.x&&(this.css3DObject.scale.x*=-1):this.css3DObject.scale.x<0&&(this.css3DObject.scale.x*=-1),this.Aa===i.ObjectFit?(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject)):(this.$a(),this.updateCenterOffset(!0)))}get imageFlipY(){return this.Ha}set imageFlipY(t){this.Ha=t,this.css3DObject&&(this.Ha?0<this.css3DObject.scale.y&&(this.css3DObject.scale.y*=-1):this.css3DObject.scale.y<0&&(this.css3DObject.scale.y*=-1),this.Aa===i.ObjectFit?(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject)):(this.$a(),this.updateCenterOffset(!0)))}get opacity(){return this.Wa}set opacity(t){this.Wa=t,this.htmlElement&&(this.htmlElement.style.opacity=this.Wa.toString())}get imageRenderingMode(){return this.nn}set imageRenderingMode(t){this.nn=t,this.htmlElement&&(this.htmlElement.style.imageRendering=this.nn)}}},2441:(t,e,s)=>{s.d(e,{Km:()=>r,PH:()=>i});var i,h,l,n=s(4627),a=s(9760),c=s(6924);(h=i||(i={})).Left="left",h.Center="center",h.Right="right",function(t){t.Normal="normal",t.Bold="bold"}(l||(l={}));class r extends c.Y{constructor(){super(...arguments),this.tf=2,this.if=1,this.iu=!1,this.sf=8,this.hf=l.Normal,this.ef="Arial",this.rf=i.Left,this.nf=new a.I(1,1,1,1),this.ff=null,this.Ca=null}renderInitialize(){var t;null===(t=this.Ca)||void 0===t||t.call(this),this.htmlElement||(this.text=r._defaultText)}updateCenterOffset(t){if(!this.css3DObject)return;let e,s;if(this.iu)if(this.css3DObject.element.parentElement){const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="",e=this.css3DObject.element.offsetWidth*this.viewScale,s=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t}else{const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="";const i=this.css3DObject.element.style.transform;this.css3DObject.element.style.transform="translateX(1000000px)",document.body.appendChild(this.css3DObject.element),e=this.css3DObject.element.offsetWidth*this.viewScale,s=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t,this.css3DObject.element.style.transform=i,document.body.removeChild(this.css3DObject.element)}else e=this.tf,s=this.if;this.css3DObject.position.set(e*this.centerOffset.x,s*this.centerOffset.y,0),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}updateViewScale(t){if(!this.css3DObject)return;const e=this.viewScale;this.iu?(this.css3DObject.scale.set(e,e,e),this.updateCenterOffset(!1)):(this.css3DObject.element.style.width=this.tf/this.viewScale+"px",this.css3DObject.element.style.height=this.if/this.viewScale+"px",this.css3DObject.scale.set(e,e,e)),t&&(n.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}get text(){return this.ff}set text(t){this.ff=t,this.readyToDraw?this.lf(t):this.Ca=()=>this.lf(t)}lf(t){this.htmlElement||(this.htmlElement=document.createElement("div")),this.htmlElement.textContent=null!=t?t:"",this.iu?(this.htmlElement.style.width="auto",this.htmlElement.style.height="auto"):(this.htmlElement.style.width=this.tf+"px",this.htmlElement.style.height=this.if+"px"),this.htmlElement.style.fontSize=this.sf+"px",this.htmlElement.style.fontWeight=this.hf,this.htmlElement.style.fontFamily=this.ef,this.htmlElement.style.textAlign=this.rf,this.htmlElement.style.color=this.nf.toHex(),this.htmlElement.style.opacity=this.nf.a.toString();const e=this.initializeBaseComponents(!1);n.w.updateRawObject3DWorldMatrixRecursively(e),this.transform.enqueueRenderAttachedObject3D(e)}get textWidth(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetWidth;return this.htmlElement.style.display=t,e}return 0}return this.tf}set textWidth(t){this.iu||(this.tf=t,this.htmlElement&&(this.htmlElement.style.width=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get textHeight(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetHeight;return this.htmlElement.style.display=t,e}return 0}return this.if}set textHeight(t){this.iu||(this.if=t,this.htmlElement&&(this.htmlElement.style.height=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get autoSize(){return this.iu}set autoSize(t){this.iu=t,this.htmlElement&&(t?(this.htmlElement.style.width="auto",this.htmlElement.style.height="auto"):(this.htmlElement.style.width=this.tf/this.viewScale+"px",this.htmlElement.style.height=this.if/this.viewScale+"px"))}get fontSize(){return this.sf}set fontSize(t){this.sf=t,this.htmlElement&&(this.htmlElement.style.fontSize=t+"px")}get fontWeight(){return this.hf}set fontWeight(t){this.hf=t,this.htmlElement&&(this.htmlElement.style.fontWeight=t)}get fontFamily(){return this.ef}set fontFamily(t){this.ef=t,this.htmlElement&&(this.htmlElement.style.fontFamily=t)}get textAlign(){return this.rf}set textAlign(t){this.rf=t,this.htmlElement&&(this.htmlElement.style.textAlign=t)}get textColor(){return this.nf}set textColor(t){this.nf.copy(t),this.htmlElement&&(this.htmlElement.style.color=t.toHex(),this.htmlElement.style.opacity=t.a.toString())}}r._defaultText="Text"}}]);