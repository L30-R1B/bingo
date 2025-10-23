(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bingo/tec-web-main/src/app/components/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button(param) {
    let { children, onClick, type = 'button', variant = 'primary', disabled = false, className = "" } = param;
    const getVariantStyles = ()=>{
        switch(variant){
            case 'primary':
                return "\n        bg-[#1B6F09]\n        text-[#E2F67E]\n        hover:bg-[#bef264]\n        hover:text-[#1B6F09]\n        font-[var(--font-baloo-bhaijaan)]\n        font-bold\n        text-xl\n        py-[10px]\n        px-[20px]\n        rounded-full\n        transition-all\n        duration-200\n  ";
            case 'secondary':
                return "\n          bg-[#4d7c0f]\n          text-[#ecfccb]\n          hover:bg-[#3f621c]\n          py-3\n          px-8\n          text-lg\n          font-[var(--font-baloo-bhaijaan)]\n          rounded-full\n        ";
            default:
                return "\n          bg-[#E2F67E]\n          text-[#1b6f09]\n          hover:bg-[#bef264]\n          py-3\n          px-8\n          text-lg\n          font-[var(--font-baloo-bhaijaan)]\n          rounded-full\n        ";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: "\n        ".concat(getVariantStyles(), "\n        ").concat(disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer', "\n        ").concat(className, "\n      "),
        children: children
    }, void 0, false, {
        fileName: "[project]/bingo/tec-web-main/src/app/components/button.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/bingo/tec-web-main/src/app/admin/users/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/src/app/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_BASE = 'http://100.124.95.109:3333';
function UsersAdminPage() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userToDelete, setUserToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: '',
        email: '',
        senha: '',
        is_admin: false
    });
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersAdminPage.useEffect": ()=>{
            const storedToken = localStorage.getItem('bingoToken');
            setToken(storedToken);
            const checkAdminAndLoadUsers = {
                "UsersAdminPage.useEffect.checkAdminAndLoadUsers": async ()=>{
                    if (!storedToken) {
                        window.location.href = '/login';
                        return;
                    }
                    try {
                        // Verificar se é admin
                        const profileResponse = await fetch("".concat(API_BASE, "/auth/profile"), {
                            method: 'GET',
                            headers: {
                                'Authorization': "Bearer ".concat(storedToken)
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
                        await loadUsers(storedToken);
                    } catch (error) {
                        console.error('Erro:', error);
                        setError('Erro ao carregar dados.');
                    } finally{
                        setLoading(false);
                    }
                }
            }["UsersAdminPage.useEffect.checkAdminAndLoadUsers"];
            checkAdminAndLoadUsers();
        }
    }["UsersAdminPage.useEffect"], []);
    const loadUsers = async (authToken)=>{
        try {
            const response = await fetch("".concat(API_BASE, "/users"), {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer ".concat(authToken)
                }
            });
            if (response.ok) {
                const usersData = await response.json();
                // Garantir que creditos seja um número
                const processedUsers = usersData.map((user)=>({
                        ...user,
                        creditos: Number(user.creditos) || 0
                    }));
                setUsers(processedUsers);
            } else {
                setError('Erro ao carregar usuários.');
            }
        } catch (error) {
            setError('Erro ao carregar usuários.');
        }
    };
    const handleDeleteClick = (user)=>{
        setUserToDelete(user);
        setShowDeleteModal(true);
    };
    const handleConfirmDelete = async ()=>{
        if (!userToDelete || !token) return;
        try {
            const response = await fetch("".concat(API_BASE, "/users/").concat(userToDelete.id_usuario), {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            });
            if (response.ok) {
                setUsers(users.filter((user)=>user.id_usuario !== userToDelete.id_usuario));
                setShowDeleteModal(false);
                setUserToDelete(null);
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao excluir usuário.');
            }
        } catch (error) {
            alert('Erro ao excluir usuário.');
        }
    };
    const handleCancelDelete = ()=>{
        setShowDeleteModal(false);
        setUserToDelete(null);
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
        if (!token) return;
        try {
            let url, method, body;
            if (editingUser) {
                // Edição de usuário existente - usar PATCH /users/:id
                url = "".concat(API_BASE, "/users/").concat(editingUser.id_usuario);
                method = 'PATCH';
                body = {
                    nome: formData.nome,
                    email: formData.email,
                    is_admin: formData.is_admin
                };
                // Incluir senha apenas se foi preenchida
                if (formData.senha) {
                    body.senha = formData.senha;
                }
            } else {
                // Criação de novo usuário - usar POST /users
                url = "".concat(API_BASE, "/users");
                method = 'POST';
                body = {
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.senha,
                    is_admin: formData.is_admin
                };
            }
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                setShowForm(false);
                await loadUsers(token);
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao salvar usuário.');
            }
        } catch (error) {
            alert('Erro ao salvar usuário.');
        }
    };
    const handleBackToDashboard = ()=>{
        router.push('/admin');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Carregando..."
        }, void 0, false, {
            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
            lineNumber: 217,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "navbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-content",
                        style: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/bingo-logo.png",
                                alt: "logo",
                                className: "navbar-logo"
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                lineNumber: 225,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navbar-links",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "nav-links",
                                    children: "Gerenciar Usuários"
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                lineNumber: 231,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: "auto",
                                    paddingRight: "40px",
                                    display: 'flex',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        onClick: handleBackToDashboard,
                                        children: "Voltar ao Painel"
                                    }, void 0, false, {
                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        onClick: ()=>{
                                            localStorage.removeItem('bingoToken');
                                            window.location.href = '/login';
                                        },
                                        children: "Sair"
                                    }, void 0, false, {
                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                lineNumber: 235,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 224,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                    lineNumber: 223,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                lineNumber: 222,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    padding: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title",
                        children: "Gerenciar Usuários"
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "primary",
                        onClick: handleCreateUser,
                        style: {
                            marginBottom: '20px'
                        },
                        children: "Criar Usuário"
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: '#2d5016',
                                padding: '30px',
                                borderRadius: '12px',
                                width: '90%',
                                maxWidth: '500px',
                                border: '2px solid #4a752c',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.5)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: 'white',
                                        marginBottom: '20px',
                                        textAlign: 'center',
                                        fontSize: '1.5em'
                                    },
                                    children: editingUser ? 'Editar Usuário' : 'Criar Novo Usuário'
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        color: 'white',
                                                        display: 'block',
                                                        marginBottom: '8px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "Nome:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.nome,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            nome: e.target.value
                                                        }),
                                                    required: true,
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '6px',
                                                        border: '2px solid #4a752c',
                                                        backgroundColor: '#1a3d0f',
                                                        color: 'white',
                                                        fontSize: '16px'
                                                    },
                                                    placeholder: "Digite o nome do usuário"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        color: 'white',
                                                        display: 'block',
                                                        marginBottom: '8px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "E-mail:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    required: true,
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '6px',
                                                        border: '2px solid #4a752c',
                                                        backgroundColor: '#1a3d0f',
                                                        color: 'white',
                                                        fontSize: '16px'
                                                    },
                                                    placeholder: "Digite o e-mail do usuário"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        color: 'white',
                                                        display: 'block',
                                                        marginBottom: '8px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "Senha:"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    value: formData.senha,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            senha: e.target.value
                                                        }),
                                                    placeholder: editingUser ? "Deixe em branco para não alterar" : "Digite a senha",
                                                    required: !editingUser,
                                                    style: {
                                                        width: '100%',
                                                        padding: '12px',
                                                        borderRadius: '6px',
                                                        border: '2px solid #4a752c',
                                                        backgroundColor: '#1a3d0f',
                                                        color: 'white',
                                                        fontSize: '16px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '25px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.is_admin,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                is_admin: e.target.checked
                                                            }),
                                                        style: {
                                                            width: '18px',
                                                            height: '18px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Administrador"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '15px',
                                                justifyContent: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "submit",
                                                    variant: "primary",
                                                    style: {
                                                        backgroundColor: '#4a752c',
                                                        border: 'none',
                                                        padding: '12px 24px',
                                                        fontSize: '16px'
                                                    },
                                                    children: [
                                                        editingUser ? 'Atualizar' : 'Criar',
                                                        " Usuário"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "button",
                                                    variant: "secondary",
                                                    onClick: ()=>setShowForm(false),
                                                    style: {
                                                        backgroundColor: 'transparent',
                                                        border: '2px solid #4a752c',
                                                        color: 'white',
                                                        padding: '12px 24px',
                                                        fontSize: '16px'
                                                    },
                                                    children: "Cancelar"
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                            lineNumber: 271,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 259,
                        columnNumber: 21
                    }, this),
                    showDeleteModal && userToDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: '#2d5016',
                                padding: '30px',
                                borderRadius: '12px',
                                width: '90%',
                                maxWidth: '400px',
                                border: '2px solid #4a752c',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        color: 'white',
                                        marginBottom: '15px',
                                        fontSize: '1.3em'
                                    },
                                    children: "Confirmar Exclusão"
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'white',
                                        marginBottom: '25px',
                                        fontSize: '16px',
                                        lineHeight: '1.5'
                                    },
                                    children: [
                                        "Tem certeza que deseja excluir o usuário",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                '"',
                                                userToDelete.nome,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, this),
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '15px',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            onClick: handleConfirmDelete,
                                            style: {
                                                backgroundColor: '#d32f2f',
                                                border: 'none',
                                                padding: '12px 24px',
                                                fontSize: '16px'
                                            },
                                            children: "Confirmar Exclusão"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "secondary",
                                            onClick: handleCancelDelete,
                                            style: {
                                                backgroundColor: 'transparent',
                                                border: '2px solid #4a752c',
                                                color: 'white',
                                                padding: '12px 24px',
                                                fontSize: '16px'
                                            },
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                            lineNumber: 434,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 422,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'red',
                            textAlign: 'center',
                            marginBottom: '20px'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 491,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#1a5f1a',
                            borderRadius: '12px',
                            padding: '20px',
                            marginTop: '20px',
                            overflowX: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: '100%',
                                borderCollapse: 'collapse',
                                color: 'white'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "Nome"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "E-mail"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "Admin"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "Créditos"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    border: '1px solid #2d7a2d',
                                                    padding: '12px',
                                                    textAlign: 'left',
                                                    backgroundColor: '#2d5016'
                                                },
                                                children: "Ações"
                                            }, void 0, false, {
                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                backgroundColor: user.id_usuario % 2 === 0 ? '#1a5f1a' : '#2d5016',
                                                transition: 'background-color 0.2s ease'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: user.id_usuario
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: user.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: user.is_admin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#4CAF50',
                                                            fontWeight: 'bold'
                                                        },
                                                        children: "Sim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#ff6b6b'
                                                        },
                                                        children: "Não"
                                                    }, void 0, false, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: [
                                                        "R$ ",
                                                        Number(user.creditos || 0).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 600,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        border: '1px solid #2d7a2d',
                                                        padding: '12px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "primary",
                                                                onClick: ()=>handleEditUser(user),
                                                                style: {
                                                                    backgroundColor: '#4a752c',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 12px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '14px'
                                                                },
                                                                children: "Editar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$src$2f$app$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "secondary",
                                                                onClick: ()=>handleDeleteClick(user),
                                                                style: {
                                                                    backgroundColor: 'transparent',
                                                                    color: '#ff6b6b',
                                                                    border: '1px solid #ff6b6b',
                                                                    padding: '8px 12px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '14px'
                                                                },
                                                                children: "Excluir"
                                                            }, void 0, false, {
                                                                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, user.id_usuario, true, {
                                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                                    lineNumber: 557,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                            lineNumber: 500,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 493,
                        columnNumber: 17
                    }, this),
                    users.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#666',
                            marginTop: '50px',
                            fontSize: '18px'
                        },
                        children: "Nenhum usuário cadastrado."
                    }, void 0, false, {
                        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bingo/tec-web-main/src/app/admin/users/page.tsx",
        lineNumber: 221,
        columnNumber: 9
    }, this);
}
_s(UsersAdminPage, "N7/ru6UJrKNyV1k4B+6oe5uZsyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UsersAdminPage;
var _c;
__turbopack_context__.k.register(_c, "UsersAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$bingo$2f$tec$2d$web$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/bingo/tec-web-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/bingo/tec-web-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/bingo/tec-web-main/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/bingo/tec-web-main/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=bingo_tec-web-main_b21efcaf._.js.map