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
      `,children:a})}},96448,(a,b,c)=>{b.exports=a.r(53269)},42643,a=>{"use strict";a.s(["default",()=>g]);var b=a.i(50700),c=a.i(43047),d=a.i(12141),e=a.i(96448);let f="http://100.124.95.109:3333";function g(){let[a,g]=(0,c.useState)([]),[h,i]=(0,c.useState)(!0),[j,k]=(0,c.useState)(""),[l,m]=(0,c.useState)(null),[n,o]=(0,c.useState)(null);(0,e.useRouter)(),(0,c.useEffect)(()=>{let a=localStorage.getItem("bingoToken");m(a),(async()=>{if(!a){window.location.href="/login";return}try{let b=await fetch(`${f}/auth/profile`,{method:"GET",headers:{Authorization:`Bearer ${a}`}});if(b.ok){let a=await b.json();if(o(a),a.is_admin){window.location.href="/admin";return}}else{window.location.href="/login";return}await p(a)}catch(a){console.error("Erro:",a),k("Erro ao carregar dados.")}finally{i(!1)}})()},[]);let p=async a=>{try{let b=await fetch(`${f}/rooms`,{method:"GET",headers:{Authorization:`Bearer ${a}`}});if(b.ok){let a=await b.json();g(a)}else k("Erro ao carregar salas.")}catch(a){k("Erro ao carregar salas.")}},q=a=>{alert(`Entrando na sala ${a} - Funcionalidade em desenvolvimento`)};return h?(0,b.jsx)("div",{children:"Carregando..."}):(0,b.jsxs)("div",{className:"page-container",children:[(0,b.jsx)("header",{children:(0,b.jsx)("nav",{className:"navbar",children:(0,b.jsxs)("div",{className:"navbar-content",style:{width:"100%"},children:[(0,b.jsx)("img",{src:"/bingo-logo.png",alt:"logo",className:"navbar-logo"}),(0,b.jsx)("div",{className:"navbar-links",children:(0,b.jsx)("a",{className:"nav-links",children:"Salas de Bingo"})}),(0,b.jsxs)("div",{style:{marginLeft:"auto",paddingRight:"40px",display:"flex",alignItems:"center",gap:"15px"},children:[n&&(0,b.jsxs)("span",{style:{color:"white"},children:["Olá, ",n.nome,"!"]}),(0,b.jsx)(d.default,{variant:"primary",onClick:()=>{localStorage.removeItem("bingoToken"),window.location.href="/login"},children:"Sair"})]})]})})}),(0,b.jsxs)("main",{style:{padding:"20px"},children:[(0,b.jsx)("h1",{className:"title",style:{textAlign:"center",marginBottom:"30px"},children:"Salas de Bingo Disponíveis"}),j&&(0,b.jsx)("div",{style:{color:"red",textAlign:"center",marginBottom:"20px",padding:"10px",backgroundColor:"#ffe6e6",borderRadius:"5px"},children:j}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"25px",marginTop:"20px"},children:a.map(a=>(0,b.jsxs)("div",{style:{backgroundColor:"#1a5f1a",padding:"30px",borderRadius:"12px",color:"white",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",gap:"20px",border:"2px solid #2d7a2d",transition:"transform 0.2s ease, box-shadow 0.2s ease",cursor:"pointer",textAlign:"center"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-5px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.4)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3)"},onClick:()=>q(a.id_sala),children:[(0,b.jsx)("div",{style:{backgroundColor:"#2d7a2d",borderRadius:"50%",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",fontSize:"2em"},children:"🏠"}),(0,b.jsx)("h3",{style:{margin:0,fontSize:"1.4em",fontWeight:"bold"},children:a.nome}),a.descricao&&(0,b.jsx)("p",{style:{margin:0,opacity:.9,lineHeight:"1.5",fontSize:"1em"},children:a.descricao}),(0,b.jsx)("div",{style:{display:"flex",gap:"12px",marginTop:"10px",justifyContent:"center"},children:(0,b.jsx)(d.default,{variant:"primary",onClick:b=>{b.stopPropagation(),q(a.id_sala)},style:{backgroundColor:"#4a752c",color:"white",border:"none",padding:"12px 24px",borderRadius:"6px",fontSize:"16px",fontWeight:"bold"},children:"Entrar na Sala"})})]},a.id_sala))}),0===a.length&&!h&&(0,b.jsx)("div",{style:{textAlign:"center",color:"#666",marginTop:"50px",fontSize:"18px",padding:"40px"},children:"Nenhuma sala disponível no momento."}),(0,b.jsxs)("div",{style:{marginTop:"40px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px",textAlign:"center"},children:[(0,b.jsx)("h3",{style:{color:"#1a5f1a",marginBottom:"15px"},children:"Como Jogar?"}),(0,b.jsx)("p",{style:{color:"#666",lineHeight:"1.6"},children:"Escolha uma sala acima para começar a jogar Bingo! Cada sala oferece uma experiência única de jogo com diferentes configurações e prêmios."})]})]})]})}}];

//# sourceMappingURL=bingo_tec-web-main_0483deb8._.js.map