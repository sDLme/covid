function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WLUK:function(t,e,i){"use strict";i.r(e),i.d(e,"ProductsModule",(function(){return E}));var n,r,c=i("ofXK"),a=i("tyNb"),o=i("fXoL"),s=i("yTNM"),l=i("8LU1"),f=i("FKr1"),d=((r=function(){function t(){_classCallCheck(this,t),this._vertical=!1,this._inset=!1}return _createClass(t,[{key:"vertical",get:function(){return this._vertical},set:function(t){this._vertical=Object(l.b)(t)}},{key:"inset",get:function(){return this._inset},set:function(t){this._inset=Object(l.b)(t)}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=o.Gb({type:r,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,e){2&t&&(o.Cb("aria-orientation",e.vertical?"vertical":"horizontal"),o.Db("mat-divider-vertical",e.vertical)("mat-divider-horizontal",!e.vertical)("mat-divider-inset",e.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,e){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),r),u=((n=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:n}),n.\u0275inj=o.Jb({factory:function(t){return new(t||n)},imports:[[f.a],f.a]}),n);function b(t,e){if(1&t&&(o.Qb(0,"h2"),o.lc(1),o.Pb()),2&t){var i=o.ac().$implicit;o.Bb(1),o.mc(i.name)}}function p(t,e){if(1&t&&(o.Qb(0,"p"),o.lc(1),o.Pb()),2&t){var i=o.ac().$implicit;o.Bb(1),o.mc(i.description)}}function h(t,e){if(1&t&&(o.Qb(0,"div",2),o.kc(1,b,2,1,"h2",3),o.kc(2,p,2,1,"p",3),o.Nb(3,"mat-divider"),o.Pb()),2&t){var i=e.$implicit;o.Bb(1),o.dc("ngIf",i.name),o.Bb(1),o.dc("ngIf",i.description)}}var m,v,y=[{path:"",component:(m=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.httpService.loadData().subscribe((function(e){t.dataObj=e}),(function(t){console.log(t.message)}))}}]),t}(),m.\u0275fac=function(t){return new(t||m)(o.Mb(s.a))},m.\u0275cmp=o.Gb({type:m,selectors:[["app-products"]],decls:5,vars:1,consts:[[1,"row"],["class","col-12 my-5","role","listitem",4,"ngFor","ngForOf"],["role","listitem",1,"col-12","my-5"],[4,"ngIf"]],template:function(t,e){1&t&&(o.Qb(0,"h1"),o.lc(1,"Crypto Exchanges"),o.Pb(),o.Nb(2,"mat-divider"),o.Qb(3,"div",0),o.kc(4,h,4,2,"div",1),o.Pb()),2&t&&(o.Bb(4),o.dc("ngForOf",e.dataObj))},directives:[d,c.i,c.j],styles:[""]}),m)}],C=((v=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:v}),v.\u0275inj=o.Jb({factory:function(t){return new(t||v)},imports:[[a.b.forChild(y)],a.b]}),v);i("R1ws");var w,k=((w=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:w}),w.\u0275inj=o.Jb({factory:function(t){return new(t||w)},imports:[[f.a],f.a]}),w),g=i("nLfN"),_=i("vxfF"),j=(i("FtGj"),i("XNiG"),i("xgIS"),i("VRyK"),i("pLZG"),i("1G5W"),i("/uUt"),i("lJxs"),i("IzEk"),i("JX91"),i("Kj3r"),i("R0Ic"),i("u47x"));i("cH1L");var K,J,P=((J=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:J}),J.\u0275inj=o.Jb({factory:function(t){return new(t||J)},imports:[[c.b,f.a,_.c,g.b],f.a]}),J),x=((K=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:K}),K.\u0275inj=o.Jb({factory:function(t){return new(t||K)},imports:[[f.c,f.a],f.c,f.a]}),K);i("0EQZ"),i("cp0P"),i("Cfvw");var O,I=((O=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:O}),O.\u0275inj=o.Jb({factory:function(t){return new(t||O)},imports:[[f.c,f.g,f.a,f.e,c.b],f.c,f.a,f.e,u]}),O);i("7+OI"),i("2Vo4"),i("LRne");var L,N,B,F,G=((F=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||F)(o.Mb(o.L))},F.\u0275dir=o.Hb({type:F,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),F),Q=((B=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:B}),B.\u0275inj=o.Jb({factory:function(t){return new(t||B)},providers:[j.b,G]}),B),D=((N=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:N}),N.\u0275inj=o.Jb({factory:function(t){return new(t||N)},imports:[[Q,f.a]]}),N),E=((L=function t(){_classCallCheck(this,t)}).\u0275mod=o.Kb({type:L}),L.\u0275inj=o.Jb({factory:function(t){return new(t||L)},imports:[[c.b,C,u,k,P,x,I,D]]}),L)}}]);