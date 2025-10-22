module.exports = [
"[project]/bingo/tec-web-main/src/app/components/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false, className = "" }) {
    const getVariantStyles = ()=>{
        switch(variant){
            case 'primary':
                return `
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
  `;
            case 'secondary':
                return `
          bg-[#4d7c0f]
          text-[#ecfccb]
          hover:bg-[#3f621c]
          py-3
          px-8
          text-lg
          font-[var(--font-baloo-bhaijaan)]
          rounded-full
        `;
            default:
                return `
          bg-[#E2F67E]
          text-[#1b6f09]
          hover:bg-[#bef264]
          py-3
          px-8
          text-lg
          font-[var(--font-baloo-bhaijaan)]
          rounded-full
        `;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: `
        ${getVariantStyles()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/bingo/tec-web-main/src/app/components/button.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/bingo/tec-web-main/src/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/src/app/components/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const API_BASE = 'http://100.124.95.109:3333';
function AdminPage() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome: '',
        email: '',
        senha: '',
        is_admin: false
    });
    const token = localStorage.getItem('bingoToken');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!token) {
            window.location.href = '/login';
            return;
        }
        const checkAdminAndLoadUsers = async ()=>{
            try {
                // Verificar se é admin
                const profileResponse = await fetch(`${API_BASE}/auth/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (profileResponse.ok) {
                    const userData = await profileResponse.json();
                    if (!userData.is_admin) {
                        window.location.href = '/rooms';
                        return;
                    }
                } else {
                    window.location.href = '/login';
                    return;
                }
                // Carregar usuários
                await loadUsers();
            } catch (error) {
                console.error('Erro:', error);
                setError('Erro ao carregar dados.');
            } finally{
                setLoading(false);
            }
        };
        checkAdminAndLoadUsers();
    }, [
        token
    ]);
    const loadUsers = async ()=>{
        try {
            const response = await fetch(`${API_BASE}/users`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const usersData = await response.json();
                setUsers(usersData);
            } else {
                setError('Erro ao carregar usuários.');
            }
        } catch (error) {
            setError('Erro ao carregar usuários.');
        }
    };
    const handleDeleteUser = async (id)=>{
        if (!confirm('Tem certeza que deseja excluir este usuário?')) {
            return;
        }
        try {
            const response = await fetch(`${API_BASE}/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                setUsers(users.filter((user)=>user.id !== id));
            } else {
                alert('Erro ao excluir usuário.');
            }
        } catch (error) {
            alert('Erro ao excluir usuário.');
        }
    };
    const handleEditUser = (user)=>{
        setEditingUser(user);
        setFormData({
            nome: user.nome,
            email: user.email,
            senha: '',
            is_admin: user.is_admin
        });
        setShowForm(true);
    };
    const handleCreateUser = ()=>{
        setEditingUser(null);
        setFormData({
            nome: '',
            email: '',
            senha: '',
            is_admin: false
        });
        setShowForm(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = editingUser ? `${API_BASE}/users/${editingUser.id}` : `${API_BASE}/auth/register`;
            const method = editingUser ? 'PATCH' : 'POST';
            const body = {
                nome: formData.nome,
                email: formData.email,
                is_admin: formData.is_admin
            };
            // Se estiver criando ou se a senha não estiver vazia (para edição)
            if (!editingUser || formData.senha) {
                body.senha = formData.senha;
            }
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                setShowForm(false);
                await loadUsers();
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao salvar usuário.');
            }
        } catch (error) {
            alert('Erro ao salvar usuário.');
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Carregando..."
        }, void 0, false, {
            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
            lineNumber: 176,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "navbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-content",
                        style: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/bingo-logo.png",
                                alt: "logo",
                                className: "navbar-logo"
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                lineNumber: 184,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navbar-links",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "nav-links",
                                    children: "Administração"
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: "auto",
                                    paddingRight: "40px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "primary",
                                    onClick: ()=>{
                                        localStorage.removeItem('bingoToken');
                                        window.location.href = '/login';
                                    },
                                    children: "Sair"
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    padding: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title",
                        children: "Gerenciar Usuários"
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "primary",
                        onClick: handleCreateUser,
                        style: {
                            marginBottom: '20px'
                        },
                        children: "Criar Usuário"
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 207,
                        columnNumber: 17
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '8px',
                                width: '400px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: editingUser ? 'Editar Usuário' : 'Criar Usuário'
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Nome:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.nome,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            nome: e.target.value
                                                        }),
                                                    required: true,
                                                    style: {
                                                        width: '100%',
                                                        padding: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "E-mail:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    required: true,
                                                    style: {
                                                        width: '100%',
                                                        padding: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Senha:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    value: formData.senha,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            senha: e.target.value
                                                        }),
                                                    placeholder: editingUser ? "Deixe em branco para não alterar" : "",
                                                    required: !editingUser,
                                                    style: {
                                                        width: '100%',
                                                        padding: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.is_admin,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                is_admin: e.target.checked
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Administrador"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "submit",
                                                    variant: "primary",
                                                    children: "Salvar"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "button",
                                                    variant: "secondary",
                                                    onClick: ()=>setShowForm(false),
                                                    children: "Cancelar"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 212,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'red'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 285,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "ID"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "Nome"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "E-mail"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "Saldo"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                border: '1px solid #ddd',
                                                padding: '8px'
                                            },
                                            children: "Ações"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                lineNumber: 288,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: user.id
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: user.nome
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: user.is_admin ? 'Sim' : 'Não'
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: [
                                                    "R$ ",
                                                    user.saldo?.toFixed(2) || '0.00'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    border: '1px solid #ddd',
                                                    padding: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "primary",
                                                        onClick: ()=>handleEditUser(user),
                                                        style: {
                                                            marginRight: '5px'
                                                        },
                                                        children: "Editar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "secondary",
                                                        onClick: ()=>handleDeleteUser(user.id),
                                                        children: "Excluir"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                                lineNumber: 298,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bingo/tec-web-main/src/app/admin/page.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, this);
}
}),
"[project]/bingo/tec-web-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/bingo/tec-web-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=bingo_tec-web-main_d122b85e._.js.map