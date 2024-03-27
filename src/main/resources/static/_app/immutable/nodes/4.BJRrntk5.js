import{s as Dt,b as Ot,n as Ct,r as Lt,c as Nt,o as Pt}from"../chunks/scheduler.Bnq60-53.js";import{S as St,i as kt,e as n,s as y,c as o,k,f as I,a as x,d as r,l as a,m as w,g as z,h as t,p as Et,n as it,q as jt,o as Mt,t as $,b as tt,j as et,r as Ht}from"../chunks/index.Dbv8i7gu.js";import{e as gt,a as yt}from"../chunks/axios.DUi6uaSR.js";import{p as Vt}from"../chunks/stores.C2lajbzz.js";function It(i,l,C){const E=i.slice();return E[1]=l[C],E}function xt(i){let l,C,E=i[1].description+"",p,O,s,m=i[1].jobType+"",H,V,v,N=i[1].earnings+"",_,h,j,J=i[1].jobState+"",R,b,g,q=i[1].freelancerId+"",D,W;return{c(){l=n("tr"),C=n("td"),p=$(E),O=y(),s=n("td"),H=$(m),V=y(),v=n("td"),_=$(N),h=y(),j=n("td"),R=$(J),b=y(),g=n("td"),D=$(q),W=y()},l(u){l=o(u,"TR",{});var c=x(l);C=o(c,"TD",{});var L=x(C);p=tt(L,E),L.forEach(r),O=I(c),s=o(c,"TD",{});var X=x(s);H=tt(X,m),X.forEach(r),V=I(c),v=o(c,"TD",{});var Y=x(v);_=tt(Y,N),Y.forEach(r),h=I(c),j=o(c,"TD",{});var P=x(j);R=tt(P,J),P.forEach(r),b=I(c),g=o(c,"TD",{});var S=x(g);D=tt(S,q),S.forEach(r),W=I(c),c.forEach(r)},m(u,c){z(u,l,c),t(l,C),t(C,p),t(l,O),t(l,s),t(s,H),t(l,V),t(l,v),t(v,_),t(l,h),t(l,j),t(j,R),t(l,b),t(l,g),t(g,D),t(l,W)},p(u,c){c&1&&E!==(E=u[1].description+"")&&et(p,E),c&1&&m!==(m=u[1].jobType+"")&&et(H,m),c&1&&N!==(N=u[1].earnings+"")&&et(_,N),c&1&&J!==(J=u[1].jobState+"")&&et(R,J),c&1&&q!==(q=u[1].freelancerId+"")&&et(D,q)},d(u){u&&r(l)}}}function At(i){let l,C="Create Job",E,p,O,s,m,H="Description",V,v,N,_,h,j,J="Type",R,b,g,q="OTHER",D,W="TEST",u,c="IMPLEMENT",L,X="REVIEW",Y,P,S,_t="Earnings",ct,M,ut,A,ht="Submit",lt,U,vt="All Jobs",nt,B,G,bt='<tr><th scope="col">Description</th> <th scope="col">Type</th> <th scope="col">Earnings</th> <th scope="col">State</th> <th scope="col">FreelancerId</th></tr>',dt,K,ft,mt,Q=gt(i[0]),T=[];for(let e=0;e<Q.length;e+=1)T[e]=xt(It(i,Q,e));return{c(){l=n("h1"),l.textContent=C,E=y(),p=n("form"),O=n("div"),s=n("div"),m=n("label"),m.textContent=H,V=y(),v=n("input"),N=y(),_=n("div"),h=n("div"),j=n("label"),j.textContent=J,R=y(),b=n("select"),g=n("option"),g.textContent=q,D=n("option"),D.textContent=W,u=n("option"),u.textContent=c,L=n("option"),L.textContent=X,Y=y(),P=n("div"),S=n("label"),S.textContent=_t,ct=y(),M=n("input"),ut=y(),A=n("button"),A.textContent=ht,lt=y(),U=n("h1"),U.textContent=vt,nt=y(),B=n("table"),G=n("thead"),G.innerHTML=bt,dt=y(),K=n("tbody");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){l=o(e,"H1",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-ksharb"&&(l.textContent=C),E=I(e),p=o(e,"FORM",{class:!0});var d=x(p);O=o(d,"DIV",{class:!0});var f=x(O);s=o(f,"DIV",{class:!0});var F=x(s);m=o(F,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),k(m)!=="svelte-17hm1qu"&&(m.textContent=H),V=I(F),v=o(F,"INPUT",{class:!0,id:!0,type:!0}),F.forEach(r),f.forEach(r),N=I(d),_=o(d,"DIV",{class:!0});var ot=x(_);h=o(ot,"DIV",{class:!0});var at=x(h);j=o(at,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),k(j)!=="svelte-1dxyp2i"&&(j.textContent=J),R=I(at),b=o(at,"SELECT",{class:!0,id:!0});var Z=x(b);g=o(Z,"OPTION",{"data-svelte-h":!0}),k(g)!=="svelte-ihzozy"&&(g.textContent=q),D=o(Z,"OPTION",{"data-svelte-h":!0}),k(D)!=="svelte-17tle6"&&(D.textContent=W),u=o(Z,"OPTION",{"data-svelte-h":!0}),k(u)!=="svelte-18ku95o"&&(u.textContent=c),L=o(Z,"OPTION",{"data-svelte-h":!0}),k(L)!=="svelte-1ruwvge"&&(L.textContent=X),Z.forEach(r),at.forEach(r),Y=I(ot),P=o(ot,"DIV",{class:!0});var st=x(P);S=o(st,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),k(S)!=="svelte-9t8tte"&&(S.textContent=_t),ct=I(st),M=o(st,"INPUT",{class:!0,id:!0,type:!0}),st.forEach(r),ot.forEach(r),ut=I(d),A=o(d,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),k(A)!=="svelte-1ah5gzg"&&(A.textContent=ht),d.forEach(r),lt=I(e),U=o(e,"H1",{"data-svelte-h":!0}),k(U)!=="svelte-w88qu9"&&(U.textContent=vt),nt=I(e),B=o(e,"TABLE",{class:!0});var rt=x(B);G=o(rt,"THEAD",{"data-svelte-h":!0}),k(G)!=="svelte-437h4t"&&(G.innerHTML=bt),dt=I(rt),K=o(rt,"TBODY",{});var Tt=x(K);for(let pt=0;pt<T.length;pt+=1)T[pt].l(Tt);Tt.forEach(r),rt.forEach(r),this.h()},h(){a(l,"class","mt-3"),a(m,"class","form-label"),a(m,"for","description"),a(v,"class","form-control"),a(v,"id","description"),a(v,"type","text"),a(s,"class","col"),a(O,"class","row mb-3"),a(j,"class","form-label"),a(j,"for","type"),g.__value="OTHER",w(g,g.__value),D.__value="TEST",w(D,D.__value),u.__value="IMPLEMENT",w(u,u.__value),L.__value="REVIEW",w(L,L.__value),a(b,"class","form-select"),a(b,"id","type"),i[1].jobType===void 0&&Ot(()=>i[4].call(b)),a(h,"class","col"),a(S,"class","form-label"),a(S,"for","earnings"),a(M,"class","form-control"),a(M,"id","earnings"),a(M,"type","number"),a(P,"class","col"),a(_,"class","row mb-3"),a(A,"type","button"),a(A,"class","btn btn-primary"),a(p,"class","mb-5"),a(B,"class","table")},m(e,d){z(e,l,d),z(e,E,d),z(e,p,d),t(p,O),t(O,s),t(s,m),t(s,V),t(s,v),w(v,i[1].description),t(p,N),t(p,_),t(_,h),t(h,j),t(h,R),t(h,b),t(b,g),t(b,D),t(b,u),t(b,L),Et(b,i[1].jobType,!0),t(_,Y),t(_,P),t(P,S),t(P,ct),t(P,M),w(M,i[1].earnings),t(p,ut),t(p,A),z(e,lt,d),z(e,U,d),z(e,nt,d),z(e,B,d),t(B,G),t(B,dt),t(B,K);for(let f=0;f<T.length;f+=1)T[f]&&T[f].m(K,null);ft||(mt=[it(v,"input",i[3]),it(b,"change",i[4]),it(M,"input",i[5]),it(A,"click",i[2])],ft=!0)},p(e,[d]){if(d&2&&v.value!==e[1].description&&w(v,e[1].description),d&2&&Et(b,e[1].jobType),d&2&&jt(M.value)!==e[1].earnings&&w(M,e[1].earnings),d&1){Q=gt(e[0]);let f;for(f=0;f<Q.length;f+=1){const F=It(e,Q,f);T[f]?T[f].p(F,d):(T[f]=xt(F),T[f].c(),T[f].m(K,null))}for(;f<T.length;f+=1)T[f].d(1);T.length=Q.length}},i:Ct,o:Ct,d(e){e&&(r(l),r(E),r(p),r(lt),r(U),r(nt),r(B)),Mt(T,e),ft=!1,Lt(mt)}}}function Bt(i,l,C){let E;Nt(i,Vt,_=>C(6,E=_));const p=E.url.origin;let O=[],s={description:null,earnings:null,jobType:null};Pt(()=>{m()});function m(){var _={method:"get",url:p+"/api/job",headers:{}};yt(_).then(function(h){C(0,O=h.data)}).catch(function(h){alert("Could not get jobs"),console.log(h)})}function H(){var _={method:"post",url:p+"/api/job",headers:{"Content-Type":"application/json"},data:s};yt(_).then(function(h){alert("Job created"),m()}).catch(function(h){alert("Could not create Job"),console.log(h)})}function V(){s.description=this.value,C(1,s)}function v(){s.jobType=Ht(this),C(1,s)}function N(){s.earnings=jt(this.value),C(1,s)}return[O,s,H,V,v,N]}class zt extends St{constructor(l){super(),kt(this,l,Bt,At,Dt,{})}}export{zt as component};
