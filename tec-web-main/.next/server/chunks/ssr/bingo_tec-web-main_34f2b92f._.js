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
      `,children:a})}},96448,(a,b,c)=>{b.exports=a.r(53269)},2363,a=>{"use strict";a.s(["default",()=>f]);var b=a.i(50700),c=a.i(43047),d=a.i(12141),e=a.i(96448);function f(){let[a,f]=(0,c.useState)(null),[g,h]=(0,c.useState)(!0),i=(0,e.useRouter)();(0,c.useEffect)(()=>{let a=localStorage.getItem("bingoToken");f(a),(async()=>{if(!a){window.location.href="/login";return}try{let b=await fetch("http://100.124.95.109:3333/auth/profile",{method:"GET",headers:{Authorization:`Bearer ${a}`}});if(b.ok){if(!(await b.json()).is_admin){window.location.href="/rooms";return}}else{window.location.href="/login";return}}catch(a){console.error("Erro:",a),window.location.href="/login"}finally{h(!1)}})()},[]);let j=a=>{i.push(`/admin/${a}`)};return g?(0,b.jsx)("div",{children:"Carregando..."}):(0,b.jsxs)("div",{className:"page-container",children:[(0,b.jsx)("header",{children:(0,b.jsx)("nav",{className:"navbar",children:(0,b.jsxs)("div",{className:"navbar-content",style:{width:"100%"},children:[(0,b.jsx)("img",{src:"/bingo-logo.png",alt:"logo",className:"navbar-logo"}),(0,b.jsx)("div",{className:"navbar-links",children:(0,b.jsx)("a",{className:"nav-links",children:"Painel de Administração"})}),(0,b.jsx)("div",{style:{marginLeft:"auto",paddingRight:"40px"},children:(0,b.jsx)(d.default,{variant:"primary",onClick:()=>{localStorage.removeItem("bingoToken"),window.location.href="/login"},children:"Sair"})})]})})}),(0,b.jsx)("main",{style:{padding:"40px 20px",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",width:"100%",maxWidth:"900px"},children:[(0,b.jsxs)("div",{style:{backgroundColor:"#1a5f1a",padding:"40px 30px",borderRadius:"12px",color:"white",textAlign:"center",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3)",border:"2px solid #2d7a2d",cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onClick:()=>j("users"),onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-5px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3)"},children:[(0,b.jsx)("h3",{style:{margin:"0 0 15px 0",fontSize:"1.5em"},children:"👥 Gerenciar Usuários"}),(0,b.jsx)("p",{style:{margin:0,opacity:.9},children:"Visualize, edite e gerencie usuários do sistema"})]}),(0,b.jsxs)("div",{style:{backgroundColor:"#1a5f1a",padding:"40px 30px",borderRadius:"12px",color:"white",textAlign:"center",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3)",border:"2px solid #2d7a2d",cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onClick:()=>j("rooms"),onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-5px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3)"},children:[(0,b.jsx)("h3",{style:{margin:"0 0 15px 0",fontSize:"1.5em"},children:"🏠 Gerenciar Salas"}),(0,b.jsx)("p",{style:{margin:0,opacity:.9},children:"Crie, edite e remova salas de bingo"})]}),(0,b.jsxs)("div",{style:{backgroundColor:"#1a5f1a",padding:"40px 30px",borderRadius:"12px",color:"white",textAlign:"center",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3)",border:"2px solid #2d7a2d",cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onClick:()=>j("games"),onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-5px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3)"},children:[(0,b.jsx)("h3",{style:{margin:"0 0 15px 0",fontSize:"1.5em"},children:"🎮 Gerenciar Jogos"}),(0,b.jsx)("p",{style:{margin:0,opacity:.9},children:"Configure e monitore jogos de bingo ativos"})]}),(0,b.jsxs)("div",{style:{backgroundColor:"#1a5f1a",padding:"40px 30px",borderRadius:"12px",color:"white",textAlign:"center",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3)",border:"2px solid #2d7a2d",cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onClick:()=>j("prizes"),onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-5px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3)"},children:[(0,b.jsx)("h3",{style:{margin:"0 0 15px 0",fontSize:"1.5em"},children:"🏆 Gerenciar Prêmios"}),(0,b.jsx)("p",{style:{margin:0,opacity:.9},children:"Defina e gerencie prêmios dos jogos"})]})]})})]})}}];

//# sourceMappingURL=bingo_tec-web-main_34f2b92f._.js.map