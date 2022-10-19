"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[306],{9576:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>w,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var s=i(7462),n=(i(7294),i(3905)),h=i(7346),r=i(3274),o=i(2684),l=i(5355),a=i(6324),d=i(2182);class c extends r.A{run(){const t=this.instantiater;return this.sceneBuilder.withChild(t.buildGameObject("camera").withComponent(o.V).withComponent(l.y,(t=>{t.renderWidth=50,t.renderHeight=50}))).withChild(t.buildGameObject("object1").withComponent(a._))}}class m extends r.A{run(){const t=this.instantiater;return this.sceneBuilder.withChild(t.buildGameObject("camera").withComponent(o.V).withComponent(l.y,(t=>{t.renderWidth=50,t.renderHeight=50})).withComponent(d.Y,(t=>{t.mouseMoveButton=0}))).withChild(t.buildGameObject("object1").withComponent(a._))}}const u={},p="Debug Components",g={unversionedId:"getting-started/debug-components",id:"getting-started/debug-components",title:"Debug Components",description:"Let's look at the built-in components for debugging purposes.",source:"@site/docs/1-getting-started/10-debug-components.mdx",sourceDirName:"1-getting-started",slug:"/getting-started/debug-components",permalink:"/the-world-engine.ts/build/docs/getting-started/debug-components",draft:!1,editUrl:"https://github.com/The-World-Space/the-world-engine.ts/tree/main/docs/docusaurus/docs/1-getting-started/10-debug-components.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coroutines",permalink:"/the-world-engine.ts/build/docs/getting-started/coroutines"},next:{title:"Create Project",permalink:"/the-world-engine.ts/build/docs/tutorial-2dtopdown/create-project"}},w={},b=[{value:"EditorGridRenderer",id:"editorgridrenderer",level:2},{value:"EditorCameraController",id:"editorcameracontroller",level:2}],f={toc:b};function y(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,s.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"debug-components"},"Debug Components"),(0,n.kt)("p",null,"Let's look at the built-in components for debugging purposes."),(0,n.kt)("h2",{id:"editorgridrenderer"},"EditorGridRenderer"),(0,n.kt)("p",null,"editor grid renderer is used to render the grid."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'export class Bootstrapper extends BaseBootstrapper {\n    public run(): SceneBuilder {\n        const instantiater = this.instantiater;\n\n        return this.sceneBuilder\n            .withChild(instantiater.buildGameObject("camera")\n                .withComponent(Camera)\n                .withComponent(EditorGridRenderer, c => {\n                    c.renderWidth = 50;\n                    c.renderHeight = 50;\n                }))\n\n            .withChild(instantiater.buildGameObject("object1")\n                .withComponent(CssSpriteRenderer))\n        ;\n    }\n}\n')),(0,n.kt)(h.Z,{bootstrapper:c,ignoreEvents:!0,mdxType:"DocumentGame"}),(0,n.kt)("h2",{id:"editorcameracontroller"},"EditorCameraController"),(0,n.kt)("p",null,"editor camera controller is used to control the camera in 2D space."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { \n    Bootstrapper as BaseBootstrapper,\n    Camera,\n    CssSpriteRenderer,\n    EditorCameraController,\n    EditorGridRenderer,\n    SceneBuilder\n} from "the-world-engine";\n\nexport class Bootstrapper1 extends BaseBootstrapper {\n    public run(): SceneBuilder {\n        const instantiater = this.instantiater;\n\n        return this.sceneBuilder\n            .withChild(instantiater.buildGameObject("camera")\n                .withComponent(Camera)\n                .withComponent(EditorGridRenderer, c => {\n                    c.renderWidth = 50;\n                    c.renderHeight = 50;\n                })\n                .withComponent(EditorCameraController, c => {\n                    c.mouseMoveButton = 0;\n                }))\n\n            .withChild(instantiater.buildGameObject("object1")\n                .withComponent(CssSpriteRenderer))\n        ;\n    }\n}\n')),(0,n.kt)(h.Z,{bootstrapper:m,handleEvents:!0,mdxType:"DocumentGame"}))}y.isMDXComponent=!0},9384:(t,e,i)=>{i.d(e,{s:()=>s});class s{constructor(t=null){this.ref=t}}},2182:(t,e,i)=>{i.d(e,{Y:()=>o});var s=i(6120),n=i(4532),h=i(8172),r=i(2684);class o extends h.w{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.requiredComponents=[r.V],this.mh=null,this.fh=!1,this.uh=1,this.lh=new s.F,this.ph=1,this.Ch=10,this.Vh=5,this.wh=5,this.zh=new n.P,this.xh=t=>{" "===t.key&&(this.wh=this.Vh,this.Sh(),this.transform.localPosition.copy(this.zh))},this.bh=t=>{this.wh+=.01*t.deltaY,this.wh<this.ph?this.wh=this.ph:this.wh>this.Ch&&(this.wh=this.Ch),this.Sh()},this.vr=t=>{this.lh.set(t.clientX/this.engine.screen.width,t.clientY/this.engine.screen.height),t.button===this.uh&&(this.fh=!0)},this.dh=t=>{t.button===this.uh&&(this.fh=!1)},this.gh=t=>{if(!this.fh)return;const e=t.clientX/this.engine.screen.width,i=t.clientY/this.engine.screen.height,s=e-this.lh.x,n=i-this.lh.y,h=this.engine.screen.width/this.engine.screen.height;this.transform.localPosition.x-=s*this.mh.viewSize*2*h,this.transform.localPosition.y+=n*this.mh.viewSize*2,this.lh.set(e,i)},this._h=t=>{this.fh=!1}}awake(){this.mh=this.gameObject.getComponent(r.V),this.Vh=this.mh.viewSize,this.zh.copy(this.transform.localPosition),this.wh=this.Vh,this.mh.viewSize=this.wh}onEnable(){const t=this.engine.input;t.onKeyDown.addListener(this.xh),t.onWheel.addListener(this.bh),t.onPointerDown.addListener(this.vr),t.onPointerUp.addListener(this.dh),t.onPointerMove.addListener(this.gh),t.onPointerLeave.addListener(this._h)}onDisable(){const t=this.engine.input;t.onKeyDown.removeListener(this.xh),t.onWheel.removeListener(this.bh),t.onPointerDown.removeListener(this.vr),t.onPointerUp.removeListener(this.dh),t.onPointerMove.removeListener(this.gh),t.onPointerLeave.removeListener(this._h)}Sh(){this.mh&&(this.mh.viewSize=this.wh)}get minViewSize(){return this.ph}set minViewSize(t){this.ph=t,this.wh<this.ph&&(this.wh=this.ph,this.Sh())}get maxViewSize(){return this.Ch}set maxViewSize(t){this.Ch=t,this.wh>this.Ch&&(this.wh=this.Ch,this.Sh())}get mouseMoveButton(){return this.uh}set mouseMoveButton(t){this.uh=t}}},5355:(t,e,i)=>{i.d(e,{y:()=>l});var s=i(4532),n=i(8172),h=i(9384),r=i(2684),o=i(2138);class l extends n.w{constructor(){super(...arguments),this.disallowMultipleComponent=!0,this.requiredComponents=[r.V],this.Nn=null,this.zn=null,this.Th=1,this.Ph=1,this.kn=18,this.Bn=10,this.qn=.2,this.An=0,this.Jn=new s.P(NaN,NaN,NaN)}awake(){const t=new h.s;this.zn=this.engine.scene.addChildFromBuilder(this.engine.instantiater.buildGameObject("grid-renderer",void 0,void 0,new s.P(this.qn,this.qn,this.qn)).active(!1).withComponent(o.w,(t=>{const e=document.createElement("div");e.style.backgroundImage="                        repeating-linear-gradient(#999 0 1px, transparent 1px 100%),                        repeating-linear-gradient(90deg, #999 0 1px, transparent 1px 100%)",e.style.backgroundSize=this.Th/this.qn/.1+"px "+this.Ph/this.qn/.1+"px",t.elementWidth=this.kn/this.qn,t.elementHeight=this.Bn/this.qn,t.pointerEvents=!1,t.element=e,t.viewScale=.1})).getComponent(o.w,t)),this.Nn=t.ref}onEnable(){this.zn.exists&&(this.zn.activeSelf=!0)}onDisable(){this.zn.exists&&(this.zn.activeSelf=!1)}update(){const t=this.transform.position,e=1/this.qn/.1,i=this.kn*e/2,s=this.Bn*e/2,n=this.Th*e,h=this.Ph*e,r=i%n,o=s%h;if(!t.equals(this.Jn)){const i=this.zn.transform.position;i.copy(t),i.z+=this.An,this.Nn.element.style.backgroundPosition=-t.x*e+r+n/2-.5+"px "+(t.y*e+o+h/2-.5)+"px"}}onDestroy(){var t;null===(t=this.zn)||void 0===t||t.destroy()}Qn(){const t=this.Nn;t&&(t.element.style.backgroundSize=this.Th/this.qn/.1+"px "+this.Ph/this.qn/.1+"px")}get gridCellWidth(){return this.Th}set gridCellWidth(t){this.Th=t,this.Qn()}get gridCellHeight(){return this.Ph}set gridCellHeight(t){this.Ph=t,this.Qn()}get renderWidth(){return this.kn}set renderWidth(t){this.kn=t,this.Nn&&(this.Nn.elementWidth=this.kn/this.qn)}get renderHeight(){return this.Bn}set renderHeight(t){this.Bn=t,this.Nn&&(this.Nn.elementHeight=this.Bn/this.qn)}get lineWidth(){return.1*this.qn}set lineWidth(t){this.qn=t/.1;const e=this.Nn;e&&(this.Qn(),e.elementWidth=this.kn/this.qn,e.elementHeight=this.Bn/this.qn,e.gameObject.transform.localScale.setScalar(this.qn))}get zOffset(){return this.An}set zOffset(t){this.An=t}}},2138:(t,e,i)=>{i.d(e,{w:()=>h});var s=i(9387),n=i(9429);class h extends n.Y{constructor(){super(...arguments),this.tu=1,this.su=1,this.iu=!1,this.Za=null}renderInitialize(){var t;null===(t=this.Za)||void 0===t||t.call(this),this.htmlElement||(this.element=null)}updateCenterOffset(t){if(!this.css3DObject)return;let e,i;if(this.iu)if(this.css3DObject.element.parentElement){const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="",e=this.css3DObject.element.offsetWidth*this.viewScale,i=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t}else{const t=this.css3DObject.element.style.display;this.css3DObject.element.style.display="";const s=this.css3DObject.element.style.transform;this.css3DObject.element.style.transform="translateX(1000000px)",document.body.appendChild(this.css3DObject.element),e=this.css3DObject.element.offsetWidth*this.viewScale,i=this.css3DObject.element.offsetHeight*this.viewScale,this.css3DObject.element.style.display=t,this.css3DObject.element.style.transform=s,document.body.removeChild(this.css3DObject.element)}else e=this.tu,i=this.su;this.css3DObject.position.set(e*this.centerOffset.x,i*this.centerOffset.y,0),t&&(s.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}updateViewScale(t){if(!this.css3DObject)return;const e=this.viewScale;this.iu?(this.css3DObject.scale.set(e,e,e),this.updateCenterOffset(!1)):(this.css3DObject.element.style.width=this.tu/this.viewScale+"px",this.css3DObject.element.style.height=this.su/this.viewScale+"px",this.css3DObject.scale.set(e,e,e)),t&&(s.w.updateRawObject3DWorldMatrixRecursively(this.css3DObject),this.transform.enqueueRenderAttachedObject3D(this.css3DObject))}get element(){return this.htmlElement}set element(t){const e=this.htmlElement=null!=t?t:document.createElement("div");this.readyToDraw?this.hu(e):this.Za=()=>this.hu(e)}hu(t){this.iu?(t.style.width="auto",t.style.height="auto"):(t.style.width=this.tu/this.viewScale+"px",t.style.height=this.su/this.viewScale+"px");const e=this.initializeBaseComponents(!0);s.w.updateRawObject3DWorldMatrixRecursively(e),this.transform.enqueueRenderAttachedObject3D(e)}get elementWidth(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetWidth*this.viewScale;return this.htmlElement.style.display=t,e}return 0}return this.tu}set elementWidth(t){this.iu||(this.tu=t,this.htmlElement&&(this.htmlElement.style.width=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get elementHeight(){if(this.iu){if(this.htmlElement){const t=this.htmlElement.style.display;this.htmlElement.style.display="";const e=this.htmlElement.offsetHeight*this.viewScale;return this.htmlElement.style.display=t,e}return 0}return this.su}set elementHeight(t){this.iu||(this.su=t,this.htmlElement&&(this.htmlElement.style.height=t/this.viewScale+"px"),this.updateCenterOffset(!0))}get autoSize(){return this.iu}set autoSize(t){this.iu=t,this.htmlElement&&(t?(this.htmlElement.style.width="auto",this.htmlElement.style.height="auto"):(this.htmlElement.style.width=this.tu/this.viewScale+"px",this.htmlElement.style.height=this.su/this.viewScale+"px"))}}}}]);