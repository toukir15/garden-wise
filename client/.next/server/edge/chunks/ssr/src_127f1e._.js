(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_127f1e._.js", {

"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/config/envConfig.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "envConfig": ()=>envConfig
});
const envConfig = {
    baseApi: ("TURBOPACK compile-time value", "http://localhost:5000/api/v1"),
    baseUrl: ("TURBOPACK compile-time value", "http://localhost:5000")
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/lib/axiosInstance/index.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$config$2f$envConfig$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/config/envConfig.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/axios.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/headers.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
// Create the Axios instance
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$config$2f$envConfig$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["envConfig"].baseApi
});
axiosInstance.interceptors.request.use(function(config) {
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().get("accessToken")?.value;
    config.headers.Authorization = accessToken;
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/services/auth/index.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getCurrentUser": ()=>getCurrentUser,
    "logout": ()=>logout,
    "userLogin": ()=>userLogin,
    "userRegister": ()=>userRegister
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$lib$2f$axiosInstance$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/lib/axiosInstance/index.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/jwt-decode/build/esm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/headers.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use server";
;
;
;
const userRegister = async (userData)=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$lib$2f$axiosInstance$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].post("/auth/register", userData);
        if (data.success) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("accessToken", data?.data?.accessToken);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("refreshToken", data?.data?.refreshToken);
        }
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
const userLogin = async (userData)=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$lib$2f$axiosInstance$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].post("/auth/login", userData);
        if (data.success) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("accessToken", data?.data?.accessToken);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("refreshToken", data?.data?.refreshToken);
        }
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
const getCurrentUser = async ()=>{
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().get("accessToken")?.value;
    let decodedToken = null;
    if (accessToken) {
        decodedToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["jwtDecode"])(accessToken);
    }
    return {
        _id: decodedToken?._id,
        name: decodedToken?.name,
        role: decodedToken?.role,
        email: decodedToken?.email,
        profilePhoto: decodedToken?.profilePhoto
    };
};
const logout = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().delete("accessToken");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().delete("refreshToken");
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$services$2f$auth$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/services/auth/index.ts [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const AuthRoutes = [
    "/login",
    "/register"
];
const roleBasedRoutes = {
    USER: [
        /^\/profile/
    ],
    ADMIN: [
        /^\/admin/
    ]
};
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$services$2f$auth$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
        }
    }
    if (user?.role && roleBasedRoutes[user?.role]) {
        const routes = roleBasedRoutes[user?.role];
        if (routes.some((route)=>pathname.match(route))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
}
const config = {
    matcher: [
        "/admin/:page*"
    ]
};

})()),
}]);

//# sourceMappingURL=src_127f1e._.js.map