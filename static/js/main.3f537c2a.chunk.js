(this["webpackJsonp@theoryofnekomata/chords"]=this["webpackJsonp@theoryofnekomata/chords"]||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(8),o=n.n(a),i=(n(18),n(19),n(1)),l=n(3),u=n(2);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var t=e.id%12;return[0,2,4,5,7,9,11].indexOf(t)},b=function(e){return e.id%12},y=Object(r.forwardRef)((function(e,t){var n,a,o,i,l,u,m,y,v=e.startKey,g=void 0===v?9:v,O=e.endKey,j=void 0===O?96:O,E=e.style,w=void 0===E?{}:E,k=e.onKeyOn,S=void 0===k?null:k,x=e.onKeyOff,C=void 0===x?null:x,A=e.labels,K=void 0===A?null:A,D=e.keyboardMapping,M=void 0===D?null:D,B=e.accidentalKeyHeight,H=void 0===B?60:B,P=e.keyboardVelocity,T=void 0===P?.75:P,G=e.keysOn,I=void 0===G?[]:G,z=e.naturalKeyStyle,F=void 0===z?function(){return{}}:z,N=e.accidentalKeyStyle,W=void 0===N?function(){return{}}:N,R=e.orientation,L=void 0===R?"normal":R,q=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["startKey","endKey","style","onKeyOn","onKeyOff","labels","keyboardMapping","accidentalKeyHeight","keyboardVelocity","keysOn","naturalKeyStyle","accidentalKeyStyle","orientation"]),V=t||Object(r.useRef)(null),J=p(Object(r.useState)([]),2)[1],X=p(Object(r.useState)({}),2),Y=X[0],_=X[1],U=p(Object(r.useState)({}),2),$=U[0],Q=U[1],Z=Object.entries(Y);switch(L){default:case"normal":a="height",o="width",i="row",l="top",u="left",m="clientY",y="offsetHeight";break;case"rotate-180":a="height",o="width",i="row-reverse",l="bottom",u="right",m="clientY",y="offsetHeight";break;case"rotate-90":a="width",o="height",i="column-reverse",l="left",u="bottom",m="clientX",y="offsetWidth";break;case"rotate-270":a="width",o="height",i="column",l="right",u="top",m="clientX",y="offsetWidth"}var ee=function(e){return function(t,n){var r=V.current,a=void 0===r?null:r;S&&null!==a&&S({target:d({},a,{value:{note:t.id,velocity:n}}),source:e})}},te=Object(r.useCallback)((function(e){return function(t){var n=V.current,r=void 0===n?null:n;C&&null!==r&&C({target:d({},r,{value:{note:t.id}}),source:e})}}),[C,V]),ne=function(e){return function(t){1===t.buttons&&te("mouse")(e)}},re=function(e){return function(t){var n=t.buttons,r=t[m],a=t.target[y],o=r-V.current.getBoundingClientRect()[l];1===n&&ee("mouse")(e,o/a)}},ae=function(e){return function(t){var n=t.buttons,r=t[m],a=t.target[y],o=V.current,i=r-o.getBoundingClientRect()[l];1===n&&(t.preventDefault(),o.focus(),ee("mouse")(e,i/a))}},oe=function(e){return function(t){t.preventDefault(),te("mouse")(e)}},ie=function(e){return Array.isArray(I)&&I.includes(e.id)};Object(r.useEffect)((function(){for(var e={},t={},n=g;n<=j;n+=1){var r=Math.floor(n/12);r in e||(e[r]=[]),t[n]={id:n,octave:r},e[r].push(t[n])}_(e),Q(t)}),[g,j]),Object(r.useEffect)((function(){var e=function(e){var t=e.altKey,n=e.shiftKey,r=e.ctrlKey,a=e.metaKey,o=e.keyCode;t||n||r||a||M&&M[o]&&(e.preventDefault(),J((function(e){var t=M[o];return null!==M&&t&&te(!1)({id:t}),e.filter((function(e){return e!==o}))})))};return window.addEventListener("keyup",e,!0),function(){window.removeEventListener("keyup",e,!0)}}),[M,te]);var le=Object.values(Y).reduce((function(e,t){return[].concat(f(e),f(t))}),[]).filter((function(e){return-1!==h(e)}));return Object(r.createElement)("div",c({},q,{style:d((n={},s(n,o,"100%"),s(n,a,100),s(n,"minHeight","rotate-90"===L||"rotate-270"===L?"100vw":null),n),w,{lineHeight:0,boxSizing:"border-box",overflow:"hidden",display:"inline-block"}),ref:V,tabIndex:0,onKeyDown:function(e){var t=e.altKey,n=e.shiftKey,r=e.ctrlKey,a=e.metaKey,o=e.keyCode;t||n||r||a||M&&M[o]&&(e.preventDefault(),J((function(e){if(e.includes(o))return e;var t=M[o];return null!==M&&t&&ee("keyboard")($[t],T),[].concat(f(e),[o])})))}}),Z.map((function(e){var t,n=p(e,2),c=n[0],m=n[1],f=m.filter((function(e){return-1!==h(e)})),y=f.length/le.length*100;return Object(r.createElement)("div",{key:c,style:(t={display:"inline-block",verticalAlign:"top"},s(t,o,"".concat(y,"%")),s(t,"flex","auto"),s(t,"boxSizing","border-box"),s(t,a,"100%"),s(t,"position","relative"),t)},m.map((function(e){var t,n,c=100/f.length,p=100/m.length,y=-1!==h(e)?c:p,v=-1!==h(e)?100:H,g=h(e)/f.length*100,O=b(e)/m.length*100,j=-1!==h(e)?g:O,E=-1!==h(e)?j-h(f[0])/f.length*100:j-b(m[0])/m.length*100;return Object(r.createElement)("div",{key:e.id,style:(t={position:"absolute",boxSizing:"border-box"},s(t,l,0),s(t,u,"".concat(E,"%")),s(t,o,"".concat(y,"%")),s(t,a,"".concat(v,"%")),s(t,"zIndex",-1!==h(e)?0:1),t),onMouseDown:ae(e),onMouseEnter:re(e),onMouseLeave:ne(e),onMouseUp:oe(e)},Object(r.createElement)("div",{style:d({backgroundColor:ie(e)?"Highlight":-1!==h(e)?"transparent":"currentColor",border:"1px solid"},-1!==h(e)?F(ie(e)):W(ie(e)),{width:"100%",height:"100%",boxSizing:"border-box"})}),null!==K&&Object(r.createElement)("div",{style:(n={},s(n,o,"100%"),s(n,a,H),s(n,"position","absolute"),s(n,l,"50%"),s(n,u,0),s(n,"display","flex"),s(n,"flexDirection",i),s(n,"justifyContent","center"),s(n,"alignItems","center"),s(n,"filter",-1!==h(e)?null:"invert(100%)"),s(n,"fontSize","1vw"),s(n,"pointerEvents","none"),n)},Object(r.createElement)("div",{style:{transform:-1===h(e)&&"normal rotate-180".split(" ").includes(L)?"rotate(90deg)":null}},K(e))))})))})))}));y.displayName="MusicalKeyboard",y.propTypes={startKey:u.number,endKey:u.number,style:u.object,onKeyOn:u.func,onKeyOff:u.func,labels:u.func,keyboardMapping:u.object,accidentalKeyHeight:Object(u.oneOfType)([u.string,u.number]),keyboardVelocity:u.number,naturalKeyStyle:u.func,accidentalKeyStyle:u.func,orientation:Object(u.oneOf)(["normal","rotate-90","rotate-180","rotate-270"]),keysOn:Object(u.arrayOf)(u.number)};var v=y;function g(){var e={},t=new(window.AudioContext||window.webkitAudioContext),n="sine triangle sawtooth square".split(" "),r=0;this.changeSound=function(e){r=e},this.soundOn=function(a,o,i){e[a]&&(e[a].stop(),delete e[a]),e[a]=t.createOscillator();var l=t.createGain();e[a].type=n[r],e[a].connect(l),l.connect(t.destination),l.gain.value=.001*o,e[a].frequency.value=i,e[a].start()},this.soundOff=function(t){e[t]&&(e[t].stop(),delete e[t])},this.getSounds=function(){return"sine triangle sawtooth square".split(" ")}}var O=Object(l.a)("div")({width:"100%",maxWidth:720,margin:"0 auto",padding:"0 1rem","@media (min-width: 1080px)":{maxWidth:1080}}),j=Object(l.a)("div")({display:"grid",gridGap:"1rem",gridTemplateAreas:"\n\t\t'naming-system   naming-system'\n\t\t'chord           inversion'\n\t\t'accidental-bias accidental-bias'\n\t\t'note-name       note-name'\n\t\t'controls        controls'\n\t\t'keyboard        keyboard'\n\t",marginBottom:"10rem",gridTemplateColumns:"4fr 3fr","@media (min-width: 720px)":{gridTemplateAreas:"\n\t\t\t'naming-system chord     inversion'\n\t\t\t'note-name     note-name accidental-bias'\n\t\t\t'note-name     note-name controls'\n\t\t\t'keyboard      keyboard  keyboard'\n\t\t",gridTemplateColumns:"2fr 4fr 3fr",marginBottom:0}}),E=Object(l.a)("div")({gridArea:"note-name",display:"flex",alignItems:"flex-end",lineHeight:1.5,fontSize:"3rem",height:"4rem","@media (min-width: 1080px)":{fontSize:"4rem",height:"auto"}}),w=Object(l.a)("div")({gridArea:"chord"}),k=Object(l.a)("div")({gridArea:"inversion"}),S=Object(l.a)("div")({gridArea:"naming-system"}),x=Object(l.a)("div")({gridArea:"accidental-bias"}),C=Object(l.a)("div")({position:"fixed",bottom:0,left:0,overflow:"scroll",gridArea:"keyboard",height:"10rem",width:"100%","@media (min-width: 720px)":{height:"20vw",width:"auto",position:"relative"}}),A=Object(l.a)("div")({height:"100%",width:"100rem","@media (min-width: 720px)":{width:"100%",position:"absolute",top:0,left:0}}),K=Object(l.a)("span")({position:"absolute",left:-999999,width:1,height:1}),D=Object(l.a)("span")({display:"inline-grid",placeContent:"center",whiteSpace:"nowrap",padding:"0.5rem 1rem",border:"1px solid",font:"inherit",color:"inherit",outline:0,width:"100%",textTransform:"uppercase",fontSize:"0.75rem",fontWeight:"bold",backgroundColor:"transparent","button&:active":{color:"var(--color-primary)"},"input:checked + &":{color:"var(--color-primary)"}}),M=Object(l.a)(D)({border:0,padding:0,width:"".concat(20,"%"),height:"2rem",fontSize:"2rem",fontWeight:"normal"}),B=Object(l.a)("select")({appearance:"none",borderRadius:0,font:"inherit",padding:"0.5rem 1rem",backgroundColor:"transparent",borderColor:"currentColor",color:"inherit",width:"100%"}),H=Object(l.a)("span")({textTransform:"uppercase",fontSize:"0.75rem","::after":{content:'""',display:"block",borderBottom:"2px solid",margin:"4px 0"}}),P=Object(l.a)("div")({gridArea:"controls",textAlign:"right"}),T=Object(l.a)("fieldset")({display:"contents"}),G=new Intl.PluralRules("en-PH",{type:"ordinal"}),I={other:"th",one:"st",two:"nd",few:"rd"},z=function(e){var t=e.chordDictionary,n=void 0===t?[]:t,a=e.noteNameSystems,o=void 0===a?{}:a,l=r.useState(null),u=Object(i.a)(l,2),s=u[0],c=u[1],m=r.useState(null),d=Object(i.a)(m,2),p=d[0],f=d[1],h=r.useState([]),b=Object(i.a)(h,2),y=b[0],z=b[1],F=r.useState(0),N=Object(i.a)(F,2),W=N[0],R=N[1],L=r.useState(48),q=Object(i.a)(L,2),V=q[0],J=q[1],X=r.useState([]),Y=Object(i.a)(X,2),_=Y[0],U=Y[1],$=r.useState(!1),Q=Object(i.a)($,2),Z=Q[0],ee=Q[1],te=r.useState([]),ne=Object(i.a)(te,2),re=(ne[0],ne[1]),ae=r.useState(null),oe=Object(i.a)(ae,2),ie=oe[0],le=oe[1],ue=r.useState(null),se=Object(i.a)(ue,2),ce=se[0],me=se[1],de=r.useState("1"),pe=Object(i.a)(de,2),fe=pe[0],he=pe[1],be=r.useState(!0),ye=Object(i.a)(be,2),ve=ye[0],ge=ye[1],Oe=r.useRef(new g),je=function(e){he(e.target.value)};return r.useEffect((function(){var e=o[ie],t=void 0===e?null:e;if(null!==t){var n=t.notes.split(";")[V%12].split(","),r=Number(fe),a=4-(r+2);n[a].length<1&&(-2===r?a=3:2===r?a=1:n[2].length<1?a+=fe.startsWith("-")?1:-1:a=2),ve&&((1===r||-1===r)&&n[2].length>0||2===r&&1===a||-2===r&&3===a)&&(a=2),n[a].length<1&&(-2===r?a=3:2===r&&(a=1)),me(n[a])}}),[V,fe,ve,o,ie]),r.useEffect((function(){var e=n.filter((function(e){return e.name===s})),t=Object(i.a)(e,1)[0],r=void 0===t?null:t;if(null!==r){var a=r.symbol;f("".concat(ce).concat(a))}}),[s,n,ce]),r.useEffect((function(){var e=Oe.current;_.forEach((function(t){Z?e.soundOn(t,4,440*Math.pow(Math.pow(2,1/12),t-69)):e.soundOff(t)})),Z&&setTimeout((function(){ee(!1)}),500)}),[_,Oe,Z]),r.useEffect((function(){var e=n.filter((function(e){return e.name===s})),t=Object(i.a)(e,1)[0],r=void 0===t?null:t;if(null!==r){var a=r.notes;z(a.map((function(e,t){return 0===t?"Root":"".concat(t).concat(I[G.select(t)]," Inversion")}))),U(a.map((function(e,t){return t<W?V+e+12:V+e}))),ee(!0)}}),[V,s,W,n]),r.useEffect((function(){var e=o[ie],t=void 0===e?null:e;if(null!==t){var n=t.notes.split(";");re(_.map((function(e){var t=n[e%12].split(","),r=Number(fe),a=4-(r+2);return-2===r?t[3].length>0?a=3:t[4].length>0&&(a=4):-1===r?a=t[3].length>0?3:2:1===r?a=t[1].length>0?1:2:2===r&&(t[1].length>0?a=1:t[0].length>0&&(a=0)),t[a]})))}}),[_,fe,o,ie,ce,V]),r.useEffect((function(){var e=Object(i.a)(n,1)[0];c(e.name);var t=Object.keys(o),r=Object(i.a)(t,1)[0];le(r)}),[n,o]),r.useEffect((function(){Oe.current.changeSound(3)}),[Oe]),r.createElement(O,null,r.createElement("h1",null,"Chords"),r.createElement(j,null,r.createElement(w,null,r.createElement("label",null,r.createElement(H,null,"Chord"),r.createElement(B,{value:s,onChange:function(e){c(e.target.value)}},n.map((function(e){var t=e.name,n=e.notes;return r.createElement("option",{key:n.sort((function(e,t){return e-t})).map((function(e){return e.toString()})).join(","),value:t},t)}))))),r.createElement(k,null,r.createElement("label",null,r.createElement(H,null,"Inversion"),r.createElement(B,{onChange:function(e){R(Number(e.target.value))},value:W},y.map((function(e,t){return r.createElement("option",{key:e,value:t},e)}))))),r.createElement(x,null,r.createElement(T,null,r.createElement(H,{as:"legend"},"Accidental bias"),r.createElement("label",null,r.createElement(K,{as:"input",name:"accidentalBias",type:"radio",value:"-2",checked:"-2"===fe,onChange:je}),r.createElement(M,null,r.createElement(K,null,"Double Flat"),r.createElement("span",{"aria-hidden":"true"},"\ud834\udd2b"))),r.createElement("label",null,r.createElement(K,{as:"input",name:"accidentalBias",type:"radio",value:"-1",checked:"-1"===fe,onChange:je}),r.createElement(M,null,r.createElement(K,null,"Flat"),r.createElement("span",{"aria-hidden":"true"},"\u266d"))),r.createElement("label",null,r.createElement(K,{as:"input",name:"hardAccidentalBias",type:"checkbox",checked:ve,onChange:function(e){ge(e.target.checked)}}),r.createElement(M,null,r.createElement(K,null,"Force Natural Names"),r.createElement("span",{"aria-hidden":"true"},"\u266e"))),r.createElement("label",null,r.createElement(K,{as:"input",name:"accidentalBias",type:"radio",value:"1",checked:"1"===fe,onChange:je}),r.createElement(M,null,r.createElement(K,null,"Sharp"),r.createElement("span",{"aria-hidden":"true"},"\u266f"))),r.createElement("label",null,r.createElement(K,{as:"input",name:"accidentalBias",type:"radio",value:"2",checked:"2"===fe,onChange:je}),r.createElement(M,null,r.createElement(K,null,"Double Sharp"),r.createElement("span",{"aria-hidden":"true"},"\ud834\udd2a"))))),r.createElement(S,null,r.createElement("label",null,r.createElement(H,null,"Pitch Naming"),r.createElement(B,{onChange:function(e){le(e.target.value)},value:ie},Object.entries(o).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return r.createElement("option",{key:n,value:n},a.name)}))))),r.createElement(E,null,r.createElement("span",{dangerouslySetInnerHTML:{__html:p}})),r.createElement(P,null,r.createElement(D,{as:"button",type:"button",onClick:function(){ee(!0)}},"Play Chord")),r.createElement(C,null,r.createElement(A,null,r.createElement(v,{startKey:48,endKey:83,style:{height:"100%",outline:"none"},naturalKeyStyle:function(e){return{backgroundColor:e?"var(--color-primary)":"white"}},accidentalKeyStyle:function(e){return{backgroundColor:e?"var(--color-primary)":"currentColor"}},onKeyOn:function(e){var t=e.target.value.note;R(0),J(t)},keysOn:_})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.createElement(z,{chordDictionary:[{name:"Augmented",symbol:"aug",notes:[0,4,8]},{name:"Augmented eleventh",symbol:"<sup>(\u266f11)</sup>",notes:[0,4,7,10,14,18]},{name:"Augmented major seventh",symbol:"aug<sup>maj7</sup>",notes:[0,4,8,11]},{name:"Augmented seventh",symbol:"aug<sup>7</sup>",notes:[0,4,8,10]},{name:"Diminished",symbol:"dim",notes:[0,3,6]},{name:"Diminished major seventh",symbol:"dim<sup>maj7</sup>",notes:[0,3,6,11]},{name:"Diminished seventh",symbol:"dim<sup>7</sup>",notes:[0,3,6,9]},{name:"Dominant eleventh",symbol:"<sup>11</sup>",notes:[0,4,7,10,14,17]},{name:"Dominant minor ninth",symbol:"<sup>7\u266d9</sup>",notes:[0,4,7,10,13]},{name:"Dominant ninth",symbol:"<sup>9</sup>",notes:[0,4,7,10,14]},{name:"Dominant seventh",symbol:"<sup>7</sup>",notes:[0,4,7,10]},{name:"Dominant seventh flat five",symbol:"<sup>7\u266d5</sup>",notes:[0,4,6,10]},{name:"Dominant seventh sharp nine",symbol:"<sup>(\u266f9)</sup>",notes:[0,4,7,10,15]},{name:"Dominant thirteenth",symbol:"<sup>13</sup>",notes:[0,4,7,10,14,17,21]},{name:"Half-diminished seventh",symbol:"m<sup>7(\u266d5)</sup>",notes:[0,3,6,10]},{name:"Major",symbol:"",notes:[0,4,7]},{name:"Major eleventh",symbol:"<sup>maj11</sup>",notes:[0,4,7,11,14,17]},{name:"Major seventh",symbol:"<sup>maj7</sup>",notes:[0,4,7,11]},{name:"Major seventh sharp eleventh",symbol:"<sup>maj7\u266f11</sup>",notes:[0,4,8,11,18]},{name:"Major sixth",symbol:"<sup>6</sup>",notes:[0,4,7,9]},{name:"Major sixth ninth",symbol:"<sup>6(9)</sup>",notes:[0,4,7,9,14]},{name:"Major ninth",symbol:"<sup>maj9</sup>",notes:[0,4,7,11,14]},{name:"Major thirteenth",symbol:"<sup>maj13</sup>",notes:[0,4,7,11,14,18,21]},{name:"Minor",symbol:"m",notes:[0,3,7]},{name:"Minor eleventh",symbol:"m<sup>11</sup>",notes:[0,3,7,10,14,17]},{name:"Minor major seventh",symbol:"m<sup>maj7</sup>",notes:[0,3,7,11]},{name:"Minor ninth",symbol:"m<sup>9</sup>",notes:[0,3,7,10,14]},{name:"Minor seventh",symbol:"m<sup>7</sup>",notes:[0,3,7,10]},{name:"Minor sixth",symbol:"m<sup>6</sup>",notes:[0,3,7,9]},{name:"Minor sixth ninth (6/9)",symbol:"m<sup>6(9)</sup>",notes:[0,3,7,9,14]},{name:"Minor thirteenth",symbol:"m<sup>13</sup>",notes:[0,3,7,10,14,17,21]},{name:"Ninth augmented fifth",symbol:"<sup>9\u266f5</sup>",notes:[0,4,8,10,14]},{name:"Ninth flat fifth",notes:[0,4,6,10,14],symbol:"<sup>9\u266d5</sup>"},{name:"Seven six",symbol:"<sup>7(6)</sup>",notes:[0,4,7,9,10]},{name:"Seventh suspension four",symbol:"<sup>7sus4</sup>",notes:[0,5,7,10]},{name:"Suspended fourth",symbol:"<sup>sus4</sup>",notes:[0,5,7]},{name:"Suspended second",symbol:"<sup>sus2</sup>",notes:[0,2,7]},{name:"Thirteenth flat ninth",symbol:"<sup>13\u266d9</sup>",notes:[0,4,7,10,13,21]},{name:"Thirteenth flat ninth flat fifth",symbol:"<sup>13\u266d9(\u266d5)</sup>",notes:[0,4,6,10,13,21]}],noteNameSystems:{standard:{name:"Standard",notes:",B\u266f,C,,D\ud834\udd2b;,C\u266f,,D\u266d,;C\ud834\udd2a,,D,,E\ud834\udd2b;,D\u266f,,E\u266d,;D\ud834\udd2a,,E,F\u266d,;,E\u266f,F,,G\ud834\udd2b;,F\u266f,,G\u266d,;F\ud834\udd2a,,G,,A\ud834\udd2b;,G\u266f,,A\u266d,;G\ud834\udd2a,,A,,B\ud834\udd2b;,A\u266f,,B\u266d,;A\ud834\udd2a,,B,C\u266d,"},european:{name:"European",notes:",H\u266f,C,,D\ud834\udd2b;,C\u266f,,D\u266d,;C\ud834\udd2a,,D,,E\ud834\udd2b;,D\u266f,,E\u266d,;D\ud834\udd2a,,E,F\u266d,;,E\u266f,F,,G\ud834\udd2b;,F\u266f,,G\u266d,;F\ud834\udd2a,,G,,A\ud834\udd2b;,G\u266f,,A\u266d,;G\ud834\udd2a,,A,,H\ud834\udd2b;,A\u266f,,H\u266d,;A\ud834\udd2a,,H,C\u266d,"}}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3f537c2a.chunk.js.map