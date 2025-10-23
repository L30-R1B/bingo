module.exports=[12141,a=>{"use strict";a.s(["default",()=>c]);var b=a.i(50700);function c({children:a,onClick:c,type:d="button",variant:e="primary",disabled:f=!1,className:g=""}){return(0,b.jsx)("button",{type:d,onClick:c,disabled:f,className:`
        ${(()=>{switch(e){case"primary":return`
        bg-[#1B6F09]
        text-[#E2F67E]
        hover:bg-[#bef264]
        hover:text-[#1B6F09]
        font-[var(--font-baloo-bhaijaan)]
        font-bold
        text-xl
        py-[10px]
        px-[20px]
        rounded-full
        transition-all
        duration-200
  `;case"secondary":return`
          bg-[#4d7c0f]
          text-[#ecfccb]
          hover:bg-[#3f621c]
          py-3
          px-8
          text-lg
          font-[var(--font-baloo-bhaijaan)]
          rounded-full
        `;default:return`
          bg-[#E2F67E]
          text-[#1b6f09]
          hover:bg-[#bef264]
          py-3
          px-8
          text-lg
          font-[var(--font-baloo-bhaijaan)]
          rounded-full
        `}})()}
        ${f?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${g}
      `,children:a})}},96448,(a,b,c)=>{b.exports=a.r(53269)},80485,a=>{"use strict";a.s(["default",()=>f]);var b=a.i(50700),c=a.i(43047),d=a.i(12141),e=a.i(96448);function f(){let[a,f]=(0,c.useState)(null),g=(0,e.useRouter)();return(0,c.useEffect)(()=>{let a=localStorage.getItem("bingoToken");if(f(a),!a){window.location.href="/login";return}},[]),(0,b.jsxs)("div",{className:"page-container",children:[(0,b.jsx)("header",{children:(0,b.jsx)("nav",{className:"navbar",children:(0,b.jsxs)("div",{className:"navbar-content",style:{width:"100%"},children:[(0,b.jsx)("img",{src:"/bingo-logo.png",alt:"logo",className:"navbar-logo"}),(0,b.jsx)("div",{className:"navbar-links",children:(0,b.jsx)("a",{className:"nav-links",children:"Gerenciar Usuários"})}),(0,b.jsxs)("div",{style:{marginLeft:"auto",paddingRight:"40px",display:"flex",gap:"10px"},children:[(0,b.jsx)(d.default,{variant:"primary",onClick:()=>{g.push("/admin")},children:"Voltar ao Painel"}),(0,b.jsx)(d.default,{variant:"primary",onClick:()=>{localStorage.removeItem("bingoToken"),window.location.href="/login"},children:"Sair"})]})]})})}),(0,b.jsxs)("main",{style:{padding:"40px 20px",textAlign:"center"},children:[(0,b.jsx)("h1",{className:"title",children:"Gerenciar Usuários"}),(0,b.jsx)("p",{style:{fontSize:"18px",color:"#666",marginTop:"20px"},children:"Funcionalidade em desenvolvimento..."})]})]})}}];

//# sourceMappingURL=bingo_tec-web-main_beef0422._.js.map